import { useEffect,useState, useRef } from 'react'
import './index.scss'
import Leaf from './Leaf'
import { OFFSET } from '../utils/constant'
import LeafStyle from './LeafStyle'

const Tree = ({ yearIndex }) => {
  const createArray = (n) => Array.from({ length: n + 1 })
  const [leaves, setLeaves] = useState(createArray(yearIndex))
  const treePot = useRef(null)

  useEffect(() => {
    treePot.current.style.height = `${(yearIndex * OFFSET) + 45}px`
    let timer = setTimeout(() => {
      setLeaves(createArray(yearIndex));
    }, leaves.length > yearIndex + 1 ? 1500 : 0)
    return () => {
      clearTimeout(timer)
    }
  }, [yearIndex, leaves])
  

  return (
    <div className="tree-wrapper">
      <div className="tree">
        <div ref={treePot} className="branch">
          {leaves.map((_, l) => (
            <Leaf index={l} key={l} visible={l < yearIndex + 1} />
          ))}
          <div
            className="leaf top"
            style={{
              width: `${OFFSET}px`,
              height: `${OFFSET}px`,
              top: `-${OFFSET - 12}px`,
              left: `-${Math.floor(OFFSET / 2) - 3}px`
            }}>
            <LeafStyle />
          </div>
        </div>
        <svg
          className="pot"
          width="70"
          viewBox="0 0 43 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.99995 28L3 3H40L37 28H5.99995Z" fill="#AB5446" />
          <path
            d="M42.5 5.14815H0.999997C0.999997 1.54815 1.43051e-06 0.148148 5 0.148149H38C43.5 0.148149 42.5 1.64815 42.5 5.14815Z"
            fill="#863332"
          />
        </svg>
      </div>
    </div>
  );
}
 
export default Tree;
