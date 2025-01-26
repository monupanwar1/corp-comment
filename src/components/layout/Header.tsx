export default function Header(){
  return (
    <header>
        <Patter/>
        <Logo/>
        <PageHeading/>
        <FeedbackForm onAddToList={addItemToList} />

    </header>
  )
}