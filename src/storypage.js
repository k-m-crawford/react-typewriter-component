/* eslint-disable no-prototype-builtins */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState, useRef } from 'react'
import Typewriter from '../components/typewriter'

const StoryPage = ({ msgs, typeSpeed = 50, actionables, active = true }) => {
  const [msgSwitches, setMsgSwitches] = useState(null)
  const [displayActionables, setDisplayActionables] = useState(false)

  const _ref = useRef()

  useEffect(() => {
    const _msgSwitches = new Array(msgs.length).fill(false)
    _msgSwitches[0] = true
    setMsgSwitches(_msgSwitches)
  }, [msgs.length])

  useEffect(() =>
    active ? _ref.current.scrollIntoView({ behavior: 'smooth' }) : null
  )

  if (!active) return <></>

  return (
    <>
      {msgSwitches &&
        msgs.map((msg, i) => {
          if (msgSwitches[i])
            return (
              <Typewriter
                key={i}
                msg={msg}
                typeSpeed={typeSpeed}
                callback={() => {
                  const _msgSwitches = msgSwitches.slice()
                  if (i + 1 < msgs.length) {
                    _msgSwitches[i + 1] = true
                    setMsgSwitches(_msgSwitches)
                  } else setDisplayActionables(true)
                }}
              />
            )
          else return null
        })}
      {displayActionables && (
        <div className='button-container'>
          {actionables.map((actionable, i) => {
            if (
              !actionable.hasOwnProperty('conditional') ||
              (actionable.hasOwnProperty('conditional') &&
                actionable.conditional())
            ) {
              return (
                <button
                  key={i}
                  onClick={
                    actionable.callback
                      ? () => {
                          actionable.callback()
                          setDisplayActionables(false)
                        }
                      : null
                  }
                >
                  {actionable.text}
                </button>
              )
            } else {
              return <span key={i} />
            }
          })}
        </div>
      )}
      <div ref={_ref} />
    </>
  )
}

export default StoryPage
