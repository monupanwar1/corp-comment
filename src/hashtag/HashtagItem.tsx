type HashtagitemsProps={
    onSelectCompany:(compnay:string)=>void,
    compnay:string;
}

export default function Hashtagitems({onSelectCompany,compnay}:HashtagitemsProps){
    return(
        <li key={compnay}>
            <button onClick={()=>onSelectCompany}>
               #{compnay}
            </button>
        </li>
    )
}