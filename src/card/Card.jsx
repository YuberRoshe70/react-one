
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addItems } from "../redux/slices/Cartslice"
import { addCountPlus } from "../redux/slices/Cartslice"
import { addCountMinus } from "../redux/slices/Cartslice"

const Card = ({ id, img, title, description, price }) => {
  const dispatch = useDispatch()
  const cartItem = useSelector((state) => state.cart.items.find(obj => obj.id === id))
  const addedCount = cartItem ? cartItem.count : 0

  const addCartItem = () => {
    const item = {
      id,
      price
    }
    dispatch(addItems(item))
  }
  const countPlus = () => {
    dispatch(addCountPlus({
      id,
      img,
      title,
      description,
      price,
    }))

  }
  const countMinus = () => {
    dispatch(addCountMinus({
      id,
    }))
  }

  return (
    <div className="card" >
      <div className="card-img">
        <img src={img} alt="..." />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}
        </p>
        <p className="card-price"><b>Цена: <span>{price} руб</span></b></p>
        <div className="card-bay">
          <div className="card_col">
            <div className="col-btn" onClick={countMinus}>-</div>
            <div className="col-btn">{addedCount}</div>
            <div className="col-btn" onClick={countPlus}>+</div>
          </div>
          <div className="btn" onClick={addCartItem}>Купить</div>
        </div>
      </div>
    </div>
  )
}

export default Card

