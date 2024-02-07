import { useState } from 'react'
import Slider from './components/Slider'
import './App.scss'
import Tree from './components/Tree'

function App() {
  const [yearIndex, setYearIndex] = useState(0)
  const getValueFromSlider = (sliderYearIndex) => {
    setYearIndex(Number(sliderYearIndex))
  }
  return (
    <>
      <div className="text-content">
        <h3>Choose Your Investment Period</h3>
      </div>
      <div className="interaction-wrapper">
        <Tree yearIndex={yearIndex} />
        <Slider getVal={(idx) => getValueFromSlider(idx)} />
      </div>
    </>
  );
}

export default App
