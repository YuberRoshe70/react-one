import React from 'react'
import {Link} from "react-router-dom";
//import { useSelector, useDispatch } from 'react-redux'
//import { setModelsIndex } from '../redux/slices/Modelsslice'

const Header = ({ modelsIndex, setModelsIndex}) => {

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
         {/* <Link to=''> <li>HOME</li></Link>
         <Link to='toyota'> <li>TOYOTA</li></Link>
         <Link to='mercedes'>  <li>MERCEDES</li></Link>
         <Link to='bmw'>  <li>BMW</li></Link>
         */}
         
         
         
        
          {models.map((item, i) => <li onClick={() => findModel(i)} className={modelsIndex === i ? 'active' : ''}
           key={i}><Link to={item} > {item}</Link></li>)}
        </ul>
      </div>
      <div className="header__cart">Корзина</div>
    </div>
  )
}

export default Header