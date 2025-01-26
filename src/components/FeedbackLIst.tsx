import { TriangleUpIcon } from "@radix-ui/react-icons";

export default function FeedbackLIst() {
  return (
    <ol className="feedback-list">
        <li className="feedback">
            <button>
                <TriangleUpIcon/>
                <span>563</span>
            </button>
            <div>K</div>
            <div>
                <p>kunal</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quis assumenda blanditiis corporis </p>
            </div>
            <p>10d</p>
        </li>
    </ol>
  )
}