import '../styles/Box.css';


const Box = ({color, width, height}) => {
  const boxStyle = {
    backgroundColor: color,
    width: width + 'px',
    height: height + 'px'
  };
  return (
    <div className="box-container" >
      <div className="box" style={boxStyle}></div>
    </div>
  )
}

export default Box;