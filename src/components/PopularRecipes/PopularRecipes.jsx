import { useEffect, useState } from 'react'
import Card from '../Card/Card'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

const PopularRecipes = () => {
  const [random, setRandom] = useState([])

  const fetchRandom = async () => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=ed210e26302d4f00910371959212ad1f&number=10`,
    )
    const data = await resp.json()
    setRandom(data.recipes)
    localStorage.setItem('random', JSON.stringify(data.recipes))
    return data.recipes
  }

  useEffect(() => {
    const randomRecipe = localStorage.getItem('random')
    if (randomRecipe) {
      setRandom(JSON.parse(randomRecipe))
    } else {
      fetchRandom()
    }
  }, [])

  return (
    <div className="mx-7">
      <h2 className="m-5 mt-1 font-bold text-lg">Popular Picks</h2>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          pagination: false,
          drag: 'free',
          gap: '4rem',
          breakpoints: {
            1024: {
              perPage: 3,
            },
            767: {
              perPage: 2,
            },
            640: {
              perPage: 1,
            },
          },
        }}
      >
        {random.map(({ title, id, image, sourceUrl }) => (
          <SplideSlide key={id}>
            <Card id={id} title={title} image={image} sourceUrl={sourceUrl} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}

export default PopularRecipes
