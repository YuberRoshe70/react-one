import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
//import { setModelsIndex } from '../redux/slices/Modelsslice'

const Header = ({ modelsIndex, setModelsIndex }) => {
  const { totalPrice,items } = useSelector((state) => state.cart)
  

  // const modelsIndex = useSelector((state) => state.modelReducer.modelsIndex)
  // const dispatch = useDispatch()

  const findModel = (i) => {
    //dispatch(setModelsIndex(i))
    setModelsIndex(i)


  }

  const models = ['HOME', 'TOYOTA', 'MERCEDES ', 'BMW']


  return (
    <div className="header">
      <div className="header__logo">AVTOTRADE</div>
      <div className="header__menu">
        <ul className='header__ul'>

          {models.map((item, i) => <li onClick={() => findModel(i)} className={modelsIndex === i ? 'active' : ''}
            key={i}><Link to={item} > {item}</Link></li>)}
        </ul>
      </div>
      <div className="header__cart"><Link to="cart">
        <img src='images/wallet.png' />
        <b>{totalPrice}</b>
        <span> руб</span> </Link>
        </div>
    </div>
  )
}

export default Header