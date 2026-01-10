

const Box = ({color, width, height}) => {
  const boxStyle = {
    backgroundColor: color,
    width: width,
    height: height
  };
  return (
    <div style={boxStyle}>
      <p>This is a box</p>
      <ul>
        <li>color: {color}</li>
        <li>width: {width}</li>
        <li>height: {height}</li>
      </ul>
    </div>
  )
}

export default Box;