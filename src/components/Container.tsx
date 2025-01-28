import FeedbackLIst from "./feedback/FeedbackLIst";
import Header from "./Header";

export default function Container() {
  return (
    <main className="container">
      <Header />
      <FeedbackLIst />
    </main>
  );
}
