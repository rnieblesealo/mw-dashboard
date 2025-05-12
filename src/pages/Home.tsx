import { TableShows } from "@/components/TableShows"

export const Home = () => {
  return (
    <div className="w-screen h-screen p-8">
      <div className="flex flex-col items-center space-y-10">
        <span className="text-4xl font-extrabold">Shows</span>
        <TableShows />
      </div>
    </div>
  )
}
