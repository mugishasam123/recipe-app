import { FaFilter } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { cuisineOptions } from '../../Data/CuisineOptions'

const Category = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { search } = params

  const handleChange = (e) => {
    navigate(`/searched/${search}/${e.target.value}`)
  }
  return (
    <div className="w-[50%] m-auto">
      <form className="flex items-center">
        <FaFilter className="mx-2" />
        <select
          name="cuisine"
          className="border border-2 py-2 px-1 w-[50%] outline-none"
          onChange={handleChange}
        >
          {cuisineOptions.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default Category
