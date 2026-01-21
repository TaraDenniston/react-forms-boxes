import {useState} from "react";
import {v4 as uuid} from 'uuid';
import NewBoxForm from './NewBoxForm'
import Box from './Box'

const BoxList = () => {
  const INITIAL_STATE = [];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }]);
  }

  // Delete a box from the array
  const removeBox = (id) => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  // Create boxes in array
  const boxComponents = boxes.map(box => (
    <Box 
      id={box.id}
      color={box.color} 
      width={box.width} 
      height={box.height} 
      key={box.id}
      handleRemove={removeBox}
    />
  ));

  return (
    <>
      <NewBoxForm addBox={addBox}/>
      <div>
        {boxComponents}
      </div>
    </>
  )
}

export default BoxList;