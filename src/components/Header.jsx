import React from 'react'

const Header = () => {
 
  const models = ['MERCEDES-BENZ','BMW','TOYOTA','HONDA', "FORD"]
  const [modelsIndex, setModelsIndex] = React.useState(0)

  return (
    <div className="header">
    <div className="header__logo">AVTOTRADE</div>
    <div className="header__menu">
      <ul>
     { models.map((item, i) => <li  onClick={() => setModelsIndex(i)} className={ modelsIndex === i ? 'active': ''} key={i}>{item}</li>)  }
       
      </ul>
    </div>
    <div className="header__cart">Корзина</div>
  </div>
  )
}

export default Header