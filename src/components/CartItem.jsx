import React from 'react'
import { useDispatch} from "react-redux"
import { addItems } from "../redux/slices/Cartslice"
import { addCountPlus } from "../redux/slices/Cartslice"
import { addCountMinus } from "../redux/slices/Cartslice"

const CartItem = ({ id, img, title, price, count }) => {
  const dispatch = useDispatch()
  
  const countPlus = () => {
    dispatch(addCountPlus({
      id
    }))
    dispatch(addItems({
      id
    }))
  }


  const countMinus = () => {
    dispatch(addCountMinus({
      id,
    }))
  }

  return (
    <div className="product_block">
      <div className="img_product">
        <img src={img} width={120} height={70} />
        <p className="product_descript">{title}</p>
      </div>

      <div className="product_price">
        <p className="current_price">{price} ₽</p>
      </div>

      <div className="row_product">
        <div className="product_order_count">
          <div className="input_price">

            <div className="price_del circle" onClick={countMinus}>-</div>

            <p>{count}</p>

            <div className="price_add circle" onClick={countPlus}>+</div>

          </div>
        </div>
        <div className="col-1 product_order_price">
          <p className="current_price">{price * count}₽</p>
        </div>

        <div className="col-2 product_order_delete">
          <button className="order_del circle">
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem