
import "./styles.css" 

export const Input = (props) => {
  return (
    <>
    
    <textarea type="text" className="input" placeholder={props.text}></textarea>
    </>
    )
}
