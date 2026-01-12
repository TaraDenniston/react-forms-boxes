import '../styles/Box.css';


const Box = ({color, width, height}) => {
  const boxStyle = {
    backgroundColor: color,
    width: width + 'px',
    height: height + 'px'
  };
  return (
    <div className="box-container" >
      <div className="box" style={boxStyle} data-testid="box"></div>
      <div>
        <button className="delete-button">X</button>
      </div>
    </div>
  )
}

export default Box;