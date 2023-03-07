
const Card = ({ id, title, image, sourceUrl }) => {
    return (
      <a href={sourceUrl} target="_blank" key={id}>
        <div className="min-h-[15rem] overflow-hidden relative rounded-lg">
          <p className="absolute inset-x-0 z-10 text-gray-200 bottom-0 h-16 w-full text-center font-bold">
            {title}
          </p>
          <img
            src={image}
            alt={title}
            className="absolute left-0 w-full h-[100%] object-cover"
          />
          <div className="bg-gradient-to-t from-gray-900 to-transparent absolute w-full h-[100%] z-3 opacity-90" />
        </div>
      </a>
    )
  }
  
  export default Card
  