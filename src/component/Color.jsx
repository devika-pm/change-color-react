import React,{useState} from 'react'
import './Color.css'

function Color() {
    const [color, setColor] = useState('white'); // Initialize with the default color

    const changeColor = (bgColor) => {
      setColor(bgColor);
    };
  
  return (
   <div className='container'>
        <h1>Click The Button To Show The Color!!!</h1>
        <div className='sub' style={{ backgroundColor: color, height: '80vh',  padding: '20px' }}>
        <button id='btn' onClick={() => changeColor('Red')}>RED</button>
        <button id='btn1' onClick={() => changeColor('Green')}>GREEN</button>
        <button id='btn2' onClick={() => changeColor('Blue')}>BLUE</button>
        <button id='btn3' onClick={() => changeColor('Purple')}>PURPLE</button>
      </div>
   </div>
  )
}

export default Color