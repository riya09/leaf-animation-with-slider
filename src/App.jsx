import { useState } from 'react'
import Slider from './components/Slider'
import './App.scss'
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
      <div className="text-content">
        <h3>Choose Your Investment Period</h3>
      </div>
      <div className="interaction-wrapper">
        <Tree year={year} yearIndex={yearIndex} />
        <Slider getVal={(y, i) => getValueFromSlider(y, i)} />
      </div>
    </>
  );
}

export default App
