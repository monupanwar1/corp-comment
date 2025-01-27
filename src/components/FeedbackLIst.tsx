import { useEffect, useState } from "react";
import FeedbackItems from "./FeedbackItems";
import { TFeedbackItem } from "./lib/type";


// dummy data 
const examplefeedbackItems:TFeedbackItem[]=[
  {
  id: 1,
  upvoteCount: 3,
  badgeLetter:"N",
  company: "netflix",
  text: "nextflix is the best app to watch movie",
  daysAgo: 10,

  },
  {
    id: 2,
    upvoteCount: 4,
    badgeLetter:" S",
    company: "spotify",
    text: "spotify is the best app to listen movie",
    daysAgo: 11,
  
    },
  {
    id: 3,
    upvoteCount: 4,
    badgeLetter:" P",
    company: "spotify",
    text: "spotify is the best app to listen movie",
    daysAgo: 11,
  
    },
  {
    id: 2,
    upvoteCount: 6,
    badgeLetter:" l",
    company: "spotify",
    text: "spotify is the best app to listen movie",
    daysAgo: 11,
  
    }
]
export default function FeedbackLIst() {
  const [feedbackItems,setFeedbackItems]=useState([]);
  useEffect(()=>{
    fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks").
    then((res)=>res.json()).
    then((data)=>setFeedbackItems(data.feedbacks));
  },[])
  return (
    <ol className="feedback-list">
      {feedbackItems.map((item)=>{
        return <FeedbackItems key={item.id} feebackItems={item}/>
      })}
       
    </ol>
  )
}