import { useState } from 'react'
import Slider from './components/Slider'
import './App.css'
import Tree from './components/Tree'

function App() {
  const [year, setYear] = useState(0)
  const [yearIndex, setYearIndex] = useState(0)
  const getValueFromSlider = (sliderYear, sliderYearIndex) => {
    setYear(sliderYear)
    setYearIndex(Number(sliderYearIndex))
  }
  return (
    <div className="interaction-wrapper">
      <Tree year={year} yearIndex={yearIndex} />
      <Slider getVal={(y, i) => getValueFromSlider(y, i)} />
    </div>
  )
}

export default App
