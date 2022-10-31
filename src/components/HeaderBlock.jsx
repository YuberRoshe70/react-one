import React from 'react'
import Header from './Header'
const HeaderBlock = () => {

  const [modelsIndex, setModelsIndex] = React.useState(0);
  return (
    <>
      <div className="container">
        <Header modelsIndex={modelsIndex} setModelsIndex={setModelsIndex} />
      </div>

    </>
  )
}

export default HeaderBlock