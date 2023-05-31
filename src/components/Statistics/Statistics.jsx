import { Notification } from "components/Notification/Notification"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <>
      {total ? 
        <ul className="statistics-list">
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive feedbacks: {positivePercentage}</li>
        </ul>
        : <Notification message='There is no feedback'/>}
    </>
  )
}