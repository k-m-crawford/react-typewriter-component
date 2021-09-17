/* eslint-disable prettier/prettier */
const TypeWriterSwitch = (char) => {
  switch (char) {
    case 'R':
      return { color: 'red' }
    case 'B':
      return { color: 'blue' }
    case 'G':
      return { color: 'green' }
    default:
      return { color: 'black' }
  }
}

export default TypeWriterSwitch
