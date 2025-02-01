type HashtagitemsProps={
    onSelectCompany:(compnay:string)=>void,
    company:string;
}

export default function Hashtagitems({onSelectCompany,company}:HashtagitemsProps){
    return(
        <ol key={company}>
            <button onClick={()=>onSelectCompany(company)}>
               #{company}
            </button>
        </ol>
    )
}