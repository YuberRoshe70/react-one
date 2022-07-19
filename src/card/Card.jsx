import React from 'react'

const Card = ({img, title, description, price}) => {

  const [count, setCount] = React.useState(1)
  const bay = () => {
    setCount(count + 1)
   
  }
  return (
    <div className="card" >
      <div className="card-img">
        <img src={img} alt="..."/>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}
         </p>
        <p className="card-price"><b>Цена: <span>{count * price} руб</span></b></p>
        <div className="card-bay">
<div className="card_col">
  <div className="col-btn" onClick={() => setCount(count > 1 ? count -1 : 1)}>-</div>
  <div className="col-btn">{count}</div>
  <div className="col-btn"  onClick={bay}>+</div>
</div>
       
        <a href="/#" className="btn ">Купить</a>
      </div>
      </div>
    </div>
  )
}

export default Card