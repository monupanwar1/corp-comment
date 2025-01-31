import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../lib/type";
import { useState } from "react";

interface FeedbackItemsProps{
  feebackItems:TFeedbackItem;
}

export default function FeedbackItems({feebackItems}:FeedbackItemsProps) {
 const [open, setOpen] = useState(false);
 const[upvoteCount,setUpvoteCount]=useState(feebackItems.upvoteCount);

 const handleUpvote =( e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
  setUpvoteCount((prev)=>prev+1);
  e.currentTarget.disabled =true;
  e.stopPropagation();

 }

  return (
    <li 
    onClick={()=>setOpen((open)=>!open)}
    className={`feedback ${open ?"feedback--expand" : ""}`}
    >
            <button onClick={handleUpvote}>
                <TriangleUpIcon/>
                <span>{upvoteCount}</span>
            </button>
            <div>{feebackItems.badgeLetter}</div>
            <div>
                <p>{feebackItems.company}</p>
                <p>{feebackItems.text}</p>
            </div>
            <p>{feebackItems.daysAgo}</p>
        </li>
  )
}