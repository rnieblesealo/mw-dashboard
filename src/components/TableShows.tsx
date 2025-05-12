import { supabase } from "@/scripts/client"
import { useState, useEffect } from "react"
import type { Show } from "@/types/db"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function TableShows() {
  const [shows, setShows] = useState<Show[] | null>(null)

  useEffect(() => {
    async function getAllShows() {
      const { data, error } = await supabase
        .from('shows')
        .select('*') // grab all cols 

      if (error) {
        console.error('Error fetching shows:', error.message)
        return
      }

      setShows(data)
    }

    getAllShows();
  }, [])

  if (!shows) {
    return null
  }

  return (
    <Table className="text-base">
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Venue</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Supporting Acts</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Ticket Link</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shows.map((show) => (
          <TableRow key={show.id}>
            <TableCell className="font-medium">
              {show.date ? new Date(show.date).toLocaleDateString() : 'TBD'}
            </TableCell>
            <TableCell>{show.venue ?? '—'}</TableCell>
            <TableCell>{show.city ?? '—'}, {show.state ?? ''}</TableCell>
            <TableCell>
              {show.supportingArtists?.length
                ? show.supportingArtists.join(', ')
                : 'None'}
            </TableCell>
            <TableCell>{show.ageRestriction ? `${show.ageRestriction}+` : 'All Ages'}</TableCell>
            <TableCell>{show.price != null ? `$${show.price}` : 'Free'}</TableCell>
            <TableCell className="text-right">
              {show.ticketLink ?? "N/A"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
