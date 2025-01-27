import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "./lib/type";

interface FeedbackItemsProps{
  feebackItems:TFeedbackItem;
}

export default function FeedbackItems({feebackItems}:FeedbackItemsProps) {
  return (
    <li className="feedback">
            <button>
                <TriangleUpIcon/>
                <span>{feebackItems.upvoteCount}</span>
            </button>
            <div>{feebackItems.badeLetter}</div>
            <div>
                <p>{feebackItems.company}</p>
                <p>{feebackItems.text}</p>
            </div>
            <p>{feebackItems.daysAgo}</p>
        </li>
  )
}