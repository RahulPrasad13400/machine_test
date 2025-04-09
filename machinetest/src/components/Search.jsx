import { IoIosSearch } from "react-icons/io";

export default function Search({setSearch, search, handleSearch}) {
  return (
    <div className="relative">
        <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search here..."
            className="px-10 border text-md py-2 rounded-2xl"
            onChange={(e)=>setSearch(e.target.value)} value={search} />
        <button className="absolute top-3 right-6">
        <IoIosSearch />
        </button>
        </form>
    </div>

  )
}
