import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'

const Leaf = ({ index, visible }) => {
  const [isEntered, setIsEntered] = useState(false)
  const nodeRef = useRef(null)

  useEffect(() => {
    // Trigger the animation after the initial render
    setIsEntered(true)
  }, [])

  const setLeafPosition = (index, direction) => {
    const isLeft = direction === 'left'
    const initialPosition = {
      y: 0,
      deg: isLeft ? 90 : 15,
    }
    const offset = 24
    const yPosition = initialPosition.y + (index * offset)
    return `translate(0, ${-yPosition}px) rotate(${initialPosition.deg}deg)`
  }
  return (
    <CSSTransition
      in={isEntered && visible}
      nodeRef={nodeRef}
      timeout={30}
      classNames="item"
    >
      {(state) => (
        <div ref={nodeRef}>
          <div
            style={{
              transform: `${setLeafPosition(index, "left")} scale(${
                state === "entered" ? 1 : 0
              })`,
            }}
            className="leaf left"
          />
          <div
            style={{
              transform: `${setLeafPosition(index, "right")} scale(${
                state === "entered" ? 1 : 0
              })`,
            }}
            className="leaf right"
          />
        </div>
      )}
    </CSSTransition>
  );
}

export default Leaf
