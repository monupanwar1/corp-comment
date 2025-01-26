export default function FeedbackForm() {
  return (
    <form className="form">
      <textarea id="feedback-textarea"
       placeholder="an"
       spellCheck={false}
       maxLength={150}/>
      <label htmlFor="feedback-textarea">
        Please share your thoughts and suggestions:
      </label>
      <div>
        <p className="u-italic">150
        </p>
          <button>
          <span>Submit</span>
          </button>
      </div>
    </form>
  )
}