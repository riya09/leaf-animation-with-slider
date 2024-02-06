import { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { OFFSET } from '../utils/constant'

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
      timeout={30}
      classNames="item"
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
              <svg
                width={OFFSET}
                height={OFFSET}
                viewBox="0 0 34 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 20.5C17 27.5 6 25.5 0.5 25.5C0.5 21.5 0.9 10.5736 8.5 4.5736C16.1 -1.4264 28 -0.259732 33 1.0736C33.1667 4.0736 33.9503 12.6685 25 20.5Z"
                  fill="#04B424"
                />
              </svg>
            </div>
          ))}
        </div>
      )}
    </CSSTransition>
  );
};

export default Leaf;
