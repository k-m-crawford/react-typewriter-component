import React, { Fragment, useEffect, useState, useRef } from 'react'
import Typewriter from './typewriter'

const StoryPage = ({ msgs, typeSpeed, actionables, active = true }) => {
  const [msgSwitches, setMsgSwitches] = useState(null)
  const [displayActionables, setDisplayActionables] = useState(false)

  const _ref = useRef()

  useEffect(() => {
    const _msgSwitches = new Array(msgs.length).fill(false)
    _msgSwitches[0] = true
    setMsgSwitches(_msgSwitches)
  }, [msgs.length])

  useEffect(() =>
    active ? _ref.current.scrollIntoView({ behavior: 'smooth' }) : undefined
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
          {actionables.map((actionable, i) => (
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
          ))}
        </div>
      )}
      <div ref={_ref} />
    </>
  )
}

export default StoryPage
