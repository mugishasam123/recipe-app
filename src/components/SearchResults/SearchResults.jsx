import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid } from 'react-loader-spinner'
import Card from '../Card/Card'
import Category from '../Category/Category'
import Cuisines from '../Cuisines/Cuisines'

const SearchResults = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(false)
  const params = useParams()
  const { search, type } = params

  const fetchSearched = async (search) => {
    setLoading(true)
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=ed210e26302d4f00910371959212ad1f&query=${search}&addRecipeInformation=true`,
    )
    const data = await resp.json()
    setLoading(false)
    setSearchedRecipes(data.results)
    return data.results
  }

  const handleFilter = async (search, type) => {
    setLoading(true)
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=ed210e26302d4f00910371959212ad1f&query=${search}&cuisine=${type}&addRecipeInformation=true`,
    )
    const data = await resp.json()
    setLoading(false)
    setFiltered(data.results)
    return data.results
  }

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      if (type != undefined) {
        handleFilter(search, type)
      }
      fetchSearched(search)
    }

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      {loading ? (
        <div className="flex self-center items-center justify-center mt-20">
          <Grid
            height="80"
            width="80"
            color="grey"
            ariaLabel="grid-loading"
            radius="12.5"
            visible={true}
          />
        </div>
      ) : (
        <>
          <Category />
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-3 my-2 mx-5">
            {filtered.length > 0 ? (
              <Cuisines filtered={filtered} />
            ) : (
              searchedRecipes.map(({ title, id, image, sourceUrl }) => (
                <Card
                  key={id}
                  title={title}
                  id={id}
                  image={image}
                  sourceUrl={sourceUrl}
                />
              ))
            )}
          </div>
        </>
      )}
    </>
  )
}

export default SearchResults
