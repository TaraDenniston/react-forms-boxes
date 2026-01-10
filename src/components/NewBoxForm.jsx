import {useState} from "react";

const NewBoxForm = () => {
  const INITIAL_STATE = {
    color: '',
    width: '',
    height: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  return (
    <form>
      <label htmlFor="color">Color</label>
      <input 
        id="color"
        type="text" 
        name="color" 
        placeholder="color" 
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input 
        id="width"
        type="text"  
        name="width" 
        placeholder="width" 
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input 
        id="height"
        type="text" 
        name="height" 
        placeholder="height" 
        value={formData.height}
        onChange={handleChange}
      />
      <button>Make New Box</button>
    </form>
  )
}

export default NewBoxForm;