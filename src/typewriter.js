/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { useRef, useEffect, useState } from 'react'
import useInterval from '../hooks/useinterval'
import TypeWriterSwitch from './typewriterswitch'

const Typewriter = ({ msg, typeSpeed, callback }) => {
  const [displayMsgs, setDisplayMsgs] = useState(null)
  const [showCursor, setShowCursor] = useState(true)
  const [complete, setComplete] = useState(false)

  const chunks = useRef([{ msg: '', flags: { color: 'black' } }])
  const curChunk = useRef(0)
  const curChar = useRef(0)
  const callbackRef = useRef(callback)

  const end = () => {
    if (complete) {
      setShowCursor(false)
      callbackRef.current()
    }
  }

  useInterval(
    () => {
      setShowCursor((showCursor) => !showCursor)
    },
    250,
    complete
  )

  useInterval(
    () => {
      if (displayMsgs) {
        const newDisplay = displayMsgs.slice()

        newDisplay[curChunk.current] += chunks.current[
          curChunk.current
        ].msg.charAt(curChar.current)

        setDisplayMsgs(newDisplay)
        curChar.current += 1

        if (curChar.current >= chunks.current[curChunk.current].msg.length) {
          curChar.current = 0
          curChunk.current += 1
        }

        if (curChunk.current >= chunks.current.length) setComplete(true)
      }
    },
    typeSpeed,
    complete
  )

  const init = () => {
    let _curChunk = 0
    let inChunk = false

    for (let i = 0; i < msg.length; i++) {
      if (msg.charAt(i) === '\\') {
        _curChunk += 1
        inChunk = !inChunk
        let flags = { color: 'black' }

        if (inChunk) flags = TypeWriterSwitch(msg.charAt(i + 1))

        chunks.current.push({ msg: '', flags: flags })
        i += 2
      }

      chunks.current[_curChunk].msg += msg.charAt(i)
    }

    const displayMsgs = new Array(chunks.current.length).fill('')
    setDisplayMsgs(displayMsgs)

    const skipTyping = () => {
      if (displayMsgs) {
        setComplete(true)
        document.removeEventListener('keypress', skipTyping)
        document.removeEventListener('click', skipTyping)
      }
    }

    document.addEventListener('keypress', skipTyping)
    document.addEventListener('click', skipTyping)
  }

  useEffect(init, [msg, typeSpeed])
  useEffect(end, [complete])

  if (complete) {
    return (
      <>
        {chunks.current.map((chunk, i) => (
          <span key={i} style={{ color: chunk.flags.color }}>
            {chunk.msg}
          </span>
        ))}
        <br />
        <br />
      </>
    )
  }

  return (
    <>
      {displayMsgs &&
        displayMsgs.map((msg, i) => (
          <span key={i} style={{ color: chunks.current[i].flags.color }}>
            {msg}
          </span>
        ))}
      {showCursor && <>|</>}
      <br />
      <br />
    </>
  )
}

export default Typewriter
