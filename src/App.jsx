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
      <div className="credits">
        <span>
          Developed By
          <a
            href="https://github.com/riya09"
            rel="noreferrer"
            target="_blank"
            className="developer"
          >
            riya09
          </a>
        </span>
        <span>
          Design Inspiration:
          <a
            href="https://dribbble.com/shots/3710509-Application-Process-Interaction"
            rel="noreferrer"
            target="_blank"
          >
            Johny Vino
          </a>
        </span>
      </div>
    </>
  );
}

export default App;
