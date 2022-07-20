import React from 'react'

const Cart = () => {
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
        
            <div className="product_block">
              <div className="img_product">
                <img src="images/bmwcross.png"  width={120} height={70}/>
                <p className="product_descript"> Игрушка BMW X5.</p>
              </div>
           
              <div className="product_price">
                  <p className="current_price">1&nbsp;390&nbsp;₽</p>
                </div>
           
            <div className="row_product">
            <div className="product_order_count">
              <div className="input_price">
            
                <div className="price_del circle">-</div>
              
                <p>1</p>
               
                  <div className="price_add circle">+</div>
             
              </div>
            </div>
            <div className="col-1 product_order_price">
              <p className="current_price">1&nbsp;390&nbsp;₽</p>
            </div>
         
            <div className="col-2 product_order_delete">
              <button className="order_del circle">
               X
              </button>
            </div>
          </div>
          </div>
            
        </div>
     
      
     <div className="pay">
        <div className="total_sum">
          <ul>
            <a href='#' className=' btn'>Итого к оплате: <span>1&nbsp;390&nbsp;₽</span></a>
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