import { useEffect,useState, useRef } from 'react'
import './index.scss'
import Leaf from './Leaf';

const Tree = ({ year, yearIndex }) => {
  const createArray = (n) => Array.from({ length: n + 1 });
  const [leaves, setLeaves] = useState(createArray(yearIndex))
  const treePot = useRef(null)

  useEffect(() => {
    treePot.current.style.height = `${(yearIndex * 25) + 50}px`
    let timer = setTimeout(() => {
      setLeaves(createArray(yearIndex));
    }, leaves.length > yearIndex + 1 ? 1500 : 0)
    return () => {
      clearTimeout(timer)
    }
  }, [yearIndex, leaves])


  return (
    <div className="tree-wrapper">
      <div className="pot">
        <div ref={treePot} className="branch">
            {leaves.map((_, l) => (
              <Leaf index={l} key={l} visible={l < yearIndex + 1}/>
            ))}
          <div className="leaf top"></div>
        </div>
      </div>
    </div>
  );
}
 
export default Tree;
