import { useState, useEffect } from "react"
import { supabase } from "../scripts/client"
import { type Show } from "../types/db"
import { ShowTable } from "../components/ShowTable/ShowTable"
import { columns } from "../components/ShowTable/show-columns"

export const Home = () => {
  // pull data
  const [shows, setShows] = useState<Show[] | null>(null);

  useEffect(() => {
    async function fetchAllShows() {
      const { data, error } = await supabase
        .from("shows")
        .select("*")

      if (error) {
        console.error("Failed to fetch shows")
        return
      }

      setShows(data)
    }

    fetchAllShows()
  }, [])

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center space-y-8">
      {shows &&
        <ShowTable columns={columns} data={shows} />
      }
    </div>
  )
}
