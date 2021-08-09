import { useEffect, useRef } from 'react'

const useInterval = (callback, delay, complete) => {
  const savedCallback = useRef()
  const interval = useRef(null)

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      interval.current = setInterval(tick, delay)
      return () => clearInterval(interval.current)
    }
  }, [delay])

  useEffect(() => {
    if (complete) clearInterval(interval.current)
  }, [complete])
}

export default useInterval
