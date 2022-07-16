
import React from 'react'


import { useSelector, useDispatch } from 'react-redux'
import { setSearch} from '../redux/slices/Modelsslice.js'

const InputBlock = ({option,setOption, optionValue}) => {

  const search = useSelector((state) => state.modelReducer.search)
  const dispatch = useDispatch()

  const options = ["Все", "алфавиту от А - Я", "цене", "популярности"]
  // const [option, setOption] = React.useState(0)
  const [visible, setVisible] = React.useState(false)

  const selected = (i) => {
    setOption(i)
    setVisible(false)
    optionValue(i)
   
  }

  


  return (
    <div className="input__block">
      <input onChange={(e) => dispatch( setSearch(e.target.value))} value={search} type="text" placeholder="search..." />
      {search && <div onClick={() => dispatch(setSearch(''))} className="delete">x</div>}
      <div className="sort" onClick={() => setVisible(!visible)}>
        <span >{options[option]}</span>

      </div>
      {visible && <div className="sort__popup">
        <ul >
          {options.map((item, i) => <li className='popup-value' onClick={() => selected(i)} key={i}>{item}</li>)}
        </ul>
      </div>}
    </div>
  )
}

export default InputBlock