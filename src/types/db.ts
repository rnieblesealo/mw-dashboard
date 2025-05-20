export type Show = {
  id: number;
  created_at: string; // ISO timestamp with timezone
  date: string | null; // ISO timestamp without timezone
  venue: string | null;
  city: string | null;
  state: string | null;
  price: number | null;
  supportingArtists: string[] | null; // could be typed as `string[] | { name: string }[] | null` if known
  ageRestriction: number | null;
  ticketLink: string | null;
  flyerLink: string | null;
};
