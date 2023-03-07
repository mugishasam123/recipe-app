import PopularRecipes from '../components/PopularRecipes/PopularRecipes'
import Search from '../components/Search/Search'
import SearchResults from '../components/SearchResults/SearchResults'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

const Home = () => {
  return (
    <motion.div>
      <div>
        <div className="flex justify-start items-center p-5">
          <GiKnifeFork className="text-2xl" />
          <Link to={'/'} className="text-xl font-medium">
            Recipe app
          </Link>
        </div>
      </div>
      <PopularRecipes />
      <Search />
      <SearchResults />
    </motion.div>
  )
}

export default Home
