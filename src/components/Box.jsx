import '../styles/Box.css';


const Box = ({color, width, height, id, handleRemove}) => {
  // Set styles using props
  const boxStyle = {
    backgroundColor: color,
    width: width + 'px',
    height: height + 'px'
  };

  // Use passed function to remove box when delete button is clicked
  const deleteBox = () => handleRemove(id);

  return (
    <div className="box-container" >
      <div className="box" style={boxStyle} data-testid="box"></div>
      <div>
        <button className="delete-button" onClick={deleteBox}>X</button>
      </div>
    </div>
  )
}

export default Box;