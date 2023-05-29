export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <ul className="feedback-list">
      {options.map(btn => <li><button onClick={onLeaveFeedback} type="button" name={btn}>{btn}</button></li>)}
    </ul>
  )
}