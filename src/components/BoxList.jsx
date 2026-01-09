import {useState} from "react";

const BoxList = () => {
  const INITIAL_STATE = [];
  const [boxes] = useState(INITIAL_STATE);

  return (
    <>
      <p>Box component goes here</p>
      <p>NewBoxForm component goes here</p>
    </>
  )
}

export default BoxList;