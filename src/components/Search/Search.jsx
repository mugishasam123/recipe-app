import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const submitHandler = (e) => {
    e.preventDefault()
    navigate(`/searched/${searchTerm}`)
  }
  return (
    <form className="my-10" onSubmit={submitHandler}>
      <div className="relative min-w-min md:w-[50%] lg:w-[50%] m-auto w-[80%]">
        <FaSearch className="absolute top-[30%] mx-2" />
        <div className="flex">
          <input
            className="bg-gray-200 text-lg py-2 w-full outline-none rounded-md shadow-sm placeholder:text-slate-400 focus:ring-gray-600 focus:ring-1 pl-9 pr-3"
            type="text"
            placeholder="Search recipe.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="bg-gray-500 p-4 rounded mx-2">
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default Search
