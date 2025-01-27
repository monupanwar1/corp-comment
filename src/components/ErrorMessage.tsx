 interface ErrorMessageprops{
    message:React.ReactNode;
} 

export default function ErrorMessage({ message }:ErrorMessageprops) {
    return <div>{message}</div>;
  }