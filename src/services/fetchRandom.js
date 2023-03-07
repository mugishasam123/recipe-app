const fetchRandom = async () => {
    const resp = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${
        import.meta.env.VITE_API_KEY
      }&number=10`,
    )
    const data = await resp.json()
    return data.recipes
  }
  
  export default fetchRandom
  