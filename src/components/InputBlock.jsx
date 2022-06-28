import React from 'react'

const InputBlock = ({search, setSearch}) => {
 

  
  return (
    <div className="input__block">
      <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="search..." />
    {search && <div onClick={() =>  setSearch('')} className="delete">x</div>}
      <select name="" id="" className="block__select">
        <option value="Все">Все</option>
        <option value="Mercedes">Mercedes</option>
        <option value="Bmw">Bmw</option>
        <option value="Toyota">Toyota</option>
      </select>
      {/* <div className="block__btn">Search</div> */}

    </div>
  )
}

export default InputBlock