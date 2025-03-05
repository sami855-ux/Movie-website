import { CiSearch } from "react-icons/ci"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="w-full h-20 flex items-center justify-between px-10 absolute top-0 left-0 right-0 bg-white z-10">
      <Link to="/" className="h-full flex gap-4 items-center justify-center">
        <img src="" alt="" className="" />
        <h2 className="font-bold text-lg">Movie Night</h2>
      </Link>
      <Menu />
      <InputSection />
    </div>
  )
}

const InputSection = () => {
  const handleSearch = (e) => {}

  return (
    <form
      onSubmit={handleSearch}
      className="w-72 h-10 bg-slate-500/50 rounded-3xl flex items-center justify-between px-4 gap-1"
    >
      <input
        type="text"
        placeholder="Search for movie..."
        className="outline-none py-1 h-full  bg-transparent font-main text-sm"
      />
      <CiSearch
        size={18}
        className="cursor-pointer"
        onClick={(e) => {
          handleSearch(e)
        }}
      />
    </form>
  )
}

const Menu = () => {
  return (
    <ul className="w-fit h-full flex items-center gap-2">
      <Link
        to="/"
        className="text-sm text-gray-800 px-2 cursor-pointer font-semibold font-secondary"
      >
        Home
      </Link>
      <Link
        to="/movie"
        className="text-sm text-gray-800 px-2 cursor-pointer font-semibold font-secondary"
      >
        Movie
      </Link>
      <Link
        to="/tvshow"
        className="text-sm text-gray-800 px-2 cursor-pointer font-semibold font-secondary"
      >
        TV show
      </Link>
    </ul>
  )
}
