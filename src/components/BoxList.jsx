import {useState} from "react";
import NewBoxForm from './NewBoxForm'
import Box from './Box'

const BoxList = () => {
  const INITIAL_STATE = [];
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, { ...newBox }]);
  }

  return (
    <>
      <NewBoxForm addBox={addBox}/>
      <div>
        {boxes.map((box, i) => <Box color={box.color} width={box.width} height={box.height} key={i}/>)}
      </div>
    </>
  )
}

export default BoxList;