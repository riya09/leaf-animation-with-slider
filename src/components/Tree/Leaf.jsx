import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { OFFSET } from '../utils/constant'
import LeafStyle from './LeafStyle'

const Leaf = ({ index, visible }) => {
  const [isEntered, setIsEntered] = useState(false)
  const nodeRef = useRef(null)
  const directions = ['left', 'right']
  useEffect(() => {
    // Trigger the animation after the initial render
    setIsEntered(true)
  }, [])

  const setLeafPosition = (index, direction) => {
    const isLeft = direction === 'left'
    const deg = isLeft ? 75 : 5
    const yPosition = index * OFFSET
    return `translate(0, ${-yPosition}px) rotate(${deg}deg)`
  }
  return (
    <CSSTransition
      in={isEntered && visible}
      nodeRef={nodeRef}
      timeout={0}
    >
      {(state) => (
        <div ref={nodeRef}>
          {directions.map((direction, d) => (
            <div
              key={d}
              style={{
                transform: `${setLeafPosition(index, direction)} scale(${
                  state === "entered" ? 1 : 0
                })`,
              }}
              className={`leaf ${direction}`}
            >
              <LeafStyle />
            </div>
          ))}
        </div>
      )}
    </CSSTransition>
  )
}

export default Leaf;
