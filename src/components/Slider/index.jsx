import { useState, useEffect } from 'react'
import './index.scss'
import { labels } from '../utils/constant'
const Slider = ({getVal}) => {
  const [val, setVal] = useState(0)

  useEffect(() => {
    const progress = (100 / (labels.length - 1)) * val
    document.documentElement.style.setProperty('--progress', `${progress}%`);
  }, [val])

  const updateValue = (val) => {
    setVal(val)
    getVal(labels[Number(val)], val)
  }
  return (
    <>
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
        <p className="tick-label">in years</p>
      </div>
    </>
  )
}
 
export default Slider;
