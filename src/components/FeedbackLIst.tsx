import { useEffect, useState } from "react";
import FeedbackItems from "./FeedbackItems";
import { TFeedbackItem } from "./lib/type";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";


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
  const [errorMessage,setErrorMessage]=useState("");

  // fetching data using the asycn/await 
  useEffect(()=>{
    const feedbackItems =async()=>{
    setIsLoading(true);
    try{
      const response = await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"); 
      if(!response.ok){
        throw new Error();
      }
      const data = await response.json();
      setFeedbackItems(data.feedbacks)

    }catch(e){
      setErrorMessage("Something went wrong ,please try later");
    }
  }
   feedbackItems(); // calling the function to fetch data

  },[])

  // fetch data from API and update state  using useEffect hook 
  // useEffect(()=>{
  //   setIsLoading(true);
  //   fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks").
  //   then((res)=>{
  //     if(!res.ok){
  //       throw new Error();
  //     }
  //    return res.json()
  //   }).
  //   then((data)=>{
  //     setFeedbackItems(data.feedbacks)
  //   setIsLoading(false)
  //   }).
  //   catch(()=>{
  //     setErrorMessage("Something went wrong");
  //   })
  // },[])
  return (
    <ol className="feedback-list">
      {
        isLoading?<Spinner/>:null
      }
      {
        errorMessage?<ErrorMessage message={errorMessage}/> :null
      }
      {feedbackItems.map((item)=>{
        return <FeedbackItems key={item.id} feebackItems={item}/>
      })}
       
    </ol>
  )
}