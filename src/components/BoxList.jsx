import {useState} from "react";
import NewBoxForm from './NewBoxForm'
import Box from './Box'

const BoxList = () => {
  const INITIAL_STATE = [
    {color: 'red', width: '100', height: '100'}
  ];
  const [boxes, setBoxes] = useState(INITIAL_STATE);

  return (
    <>
      <p>NewBoxForm component goes here</p>
      <NewBoxForm />
      <p>All box components go here</p>
      <div>
        {boxes.map((box, i) => <Box color={box.color} width={box.width} height={box.height} key={i}/>)}
      </div>
    </>
  )
}

export default BoxList;