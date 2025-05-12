export type Show = {
  id: number
  created_at: string // ISO timestamp
  date: string | null // ISO date string or null
  venue: string | null
  city: string | null
  state: string | null
  price: number | null
  supportingArtists: string[] | null // or refine to a structured type if known
  ageRestriction: number | null
  ticketLink: string | null
  flyerLink: string | null
}
