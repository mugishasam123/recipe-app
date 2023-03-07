import Card from '../Card/Card'

const Cuisines = ({ filtered }) => {
  
  return (
    <div>
      {filtered.length === 0 ? (
        <div className="flex justify-center">
          <h2 className="md:text-xl">No Cuisines found</h2>
        </div>
      ) : (
        filtered.map(({ id, title, image, sourceUrl }) => (
          <Card
            key={id}
            id={id}
            title={title}
            image={image}
            sourceUrl={sourceUrl}
          />
        ))
      )}
    </div>
  )
}

export default Cuisines
