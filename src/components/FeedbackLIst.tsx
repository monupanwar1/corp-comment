import FeedbackItems from "./FeedbackItems";
import { TFeedbackItem } from "./lib/type";

const feedbackItems=[
  {
  id: 1,
  upvoteCount: 3,
  badgeLetter:" N",
  company: "netflix",
  text: "nextflix is the best app to watch movie",
  daysAgo: 10,

  },{
    id: 2,
    upvoteCount: 4,
    badgeLetter:" S",
    company: "spotify",
    text: "spotify is the best app to listen movie",
    daysAgo: 11,
  
    }
]
export default function FeedbackLIst() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItems)=>{
        return <FeedbackItems feedbackItems={feedbackItems}/>
      })}
       
    </ol>
  )
}