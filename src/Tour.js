import { useState } from "react"

const Tour = ({id,image,info,name,price,removeTour}) => {

  const[isReadMore,setIsReadMore] = useState(false);

  return (
    <section className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {isReadMore ? info : `${info.substring(0, 200)}...................`}
        </p>
        <button onClick={() => setIsReadMore(!isReadMore)}>
          {isReadMore ? 'read less' : 'read more'}
        </button>
        <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
      </footer>
    </section>
  );
}
export default Tour