
import React from 'react'
import { Context } from '../App';

const InputBlock = () => {

  const options = ["алфавиту от А - Я", "цене", "популярности"]
  const [option, setOption] = React.useState(0)
  const [visible, setVisible] = React.useState(false)
  const { search, setSearch } = React.useContext(Context);

  const selected = (i) => {
    setOption(i)
    setVisible(false)
  }


  return (
    <div className="input__block">
      <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="search..." />
      {search && <div onClick={() => setSearch('')} className="delete">x</div>}
      <div className="sort" onClick={() => setVisible(!visible)}>
        <span>{options[option]}</span>

      </div>
      {visible && <div className="sort__popup">
        <ul >
          {options.map((item, i) => <li className='popup-value' onClick={() => selected(i)} key={i}>{item}</li>)}
        </ul>

      </div>}
      {/* <select name="" id="" className="block__select"  >
        <option value=""   >Все</option>
     { options.map((item, i) =>  <option value={i}  key={i} >{item}</option >) }
      
      </select> */}


    </div>
  )
}

export default InputBlock