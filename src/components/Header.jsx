import React from 'react'

const Header = () => {
 
  const findModel = (i) => {
    setModelsIndex(i)
  }

  const models = ['ALL AUTO','TOYOTA','MERCEDES','BMW','HONDA', "FORD"]
  const [modelsIndex, setModelsIndex] = React.useState(0)

  return (
    <div className="header">
    <div className="header__logo">AVTOTRADE</div>
    <div className="header__menu">
      <ul className='header__ul'>
     { models.map((item, i) => <li  onClick={() => findModel(i)} className={ modelsIndex === i ? 'active': ''} key={i}>{item}</li>)  }
       
      </ul>
    </div>
    <div className="header__cart">Корзина</div>
  </div>
  )
}

export default Header