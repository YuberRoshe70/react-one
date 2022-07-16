import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setModelsIndex } from '../redux/slices/Modelsslice'

const Header = () => {

  const modelsIndex = useSelector((state) => state.modelReducer.modelsIndex)
  const dispatch = useDispatch()

  const findModel = (i) => {
    dispatch(setModelsIndex(i))
  }

  const models = ['ALL AUTO', 'TOYOTA', 'MERCEDES ', 'BMW', 'HONDA', "FORD"]
  

  return (
    <div className="header">
      <div className="header__logo">AVTOTRADE</div>
      <div className="header__menu">
        <ul className='header__ul'>
          {models.map((item, i) => <li onClick={() => findModel(i)} className={modelsIndex === i ? 'active' : ''} key={i}>{item}</li>)}
        </ul>
      </div>
      <div className="header__cart">Корзина</div>
    </div>
  )
}

export default Header