import { CiSearch } from "react-icons/ci"

export default function Header() {
  return (
    <div className="w-full h-20 flex items-center justify-between px-10">
      <section className="h-full flex gap-4 items-center justify-center">
        <img src="" alt="" className="" />
        <h2 className="font-bold text-lg">Movie Night</h2>
      </section>
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
      <li className="text-sm text-gray-800 px-2 cursor-pointer font-semibold">
        Home
      </li>
      <li className="text-sm text-gray-800 px-2 cursor-pointer font-semibold">
        Movie
      </li>
      <li className="text-sm text-gray-800 px-2 cursor-pointer font-semibold">
        TV show
      </li>
    </ul>
  )
}
