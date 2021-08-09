const TypeWriterSwitch = (char) => {
  switch (char) {
    case 'R':
      return { color: 'red' }
    case 'B':
      return { color: 'blue' }
    default:
      return { color: 'black' }
  }
}

export default TypeWriterSwitch
