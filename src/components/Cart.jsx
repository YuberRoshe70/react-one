import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EmptyCart from "../components/EmptyCart"
import CartItem from './CartItem'

const Cart = () => {

  //const dispatch = useDispatch()
  const item = useSelector((state) => state.cart.items)
  const { totalPrice } = useSelector((state) => state.cart)

  if (totalPrice === 0) {
    return <EmptyCart />
  }
  return (
    <div className="row" >
      <div className="header_title">
        <h1>Моя корзина</h1>
      </div>
      <div className=" table_product_header">
        <div className="col-6">Наименование товара</div>
        <div className="col-1 product_order_price">Цена</div>
        <div className="col-3 product_order_count">Количество</div>
        <div className="col-2 product_order_all_price">Стоимость</div>
        <div className="col-2 product_order_delete">Удалить</div>
      </div>

      <div className="table_product">
        {item.map((item) => <CartItem {...item} key={item.id} />)}

      </div>


      <div className="pay">
        <div className="total_sum">
          <ul>
            <a href='#' className=' btn'>Итого к оплате: <span>{totalPrice}₽</span></a>
          </ul>
        </div>
        <div className="bay_product">
          <a href="/order/" className="btn">Оформить заказ</a>
        </div>
      </div>

    </div>
  )
}

export default Cart