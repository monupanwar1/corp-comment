import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import Hashtagitems from "./HashtagItem";

export default function HashtagList(){
    const companyList = useFeedbackItemsStore((state)=>state.getCompanyList());
    const selectCompany =useFeedbackItemsStore((state)=>state.selectCompany);

    return(
        <ul className="hashtags">
            {companyList.map((company)=>(
                <Hashtagitems
                key={company}
                company={company}
                selectCompany={selectCompany}
                />
            ))}
        </ul>
    )

}