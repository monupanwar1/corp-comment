import { useState } from "react"
import { MAX_CHARACTERS } from "./lib/constants";

export default function FeedbackForm() {
  const [text,setText]=useState("");
  const charCount =MAX_CHARACTERS-text.length;

  const handelChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    const newText =e.target.value;
    if(newText.length > MAX_CHARACTERS){
      return;
    }

    setText(newText);
  }
  return (
    <form className="form">
      <textarea
       value={text}
       onChange={handelChange}
       id="feedback-textarea"
       placeholder="an"
       spellCheck={false}
       maxLength={150}/>
      <label htmlFor="feedback-textarea">
        Please share your thoughts and suggestions:
      </label>
      <div>
        <p className="u-italic">{charCount}
        </p>
          <button>
          <span>Submit</span>
          </button>
      </div>
    </form>
  )
}