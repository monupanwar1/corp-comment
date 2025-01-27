import { useEffect, useState } from "react";
import FeedbackItems from "./FeedbackItems";
import { TFeedbackItem } from "./lib/type";
import Spinner from "./Spinner";


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
  const [feedbackItems,setFeedbackItems]=useState([]);// for data 
  const [isLoading,setIsLoading]=useState(false);// for loader

  useEffect(()=>{
    setIsLoading(true);
    fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks").
    then((res)=>res.json()).
    then((data)=>{
      setFeedbackItems(data.feedbacks)
    setIsLoading(false)
    });
  },[])
  return (
    <ol className="feedback-list">
      {
        isLoading?<Spinner/>:null
      }
      {feedbackItems.map((item)=>{
        return <FeedbackItems key={item.id} feebackItems={item}/>
      })}
       
    </ol>
  )
}