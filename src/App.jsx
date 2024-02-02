import { useState } from 'react'
import './App.css'
import Slider from "./components/Slider"
import Tree from './components/Tree'

function App() {
  const [year, setYear] = useState(0)
  const [yearIndex, setYearIndex] = useState(0)
  const getValueFromSlider = (sliderYear, sliderYearIndex) => {
    setYear(sliderYear)
    setYearIndex(Number(sliderYearIndex))
  } 
  return (
    <>
      <p>Tree animation</p>
      <Tree year={year} yearIndex={yearIndex} />
      <Slider getVal={(y, i) => getValueFromSlider(y, i)} />
    </>
  );
}

export default App
