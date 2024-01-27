import { useState } from 'react'
import './index.scss'

const Slider = () => {
  const labels = ['0', '3', '5', '8', '10']
  const [val, setVal] = useState(0)
  const updateValue = (val) => {
    setVal(val)
  }
  return (
    <div className="range">
      <div className="range">
        <input
          type="range"
          value={val}
          min="0"
          max={labels.length - 1}
          step="1"
          onChange={(e) => updateValue(e.target.value)}
        />
      <div className="ticks">
        {labels.map((label, l) => (
          <span value={label} key={l}>{label}</span>
        ))}
      </div>
      </div>
    </div>
  );
}
 
export default Slider;
