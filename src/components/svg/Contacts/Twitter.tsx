import React, { memo } from "react";
import { ContactSvgColor } from "common/ContactSvgColor";
import { IContactSvg } from "common/IContactSvg";

const Twitter = ({color = ContactSvgColor.White}: IContactSvg) => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0ZM17.4987 15.2535L17.4609 14.6306C17.3476 13.0163 18.3422 11.5418 19.9161 10.9698C20.4952 10.7665 21.4773 10.741 22.1194 10.919C22.3712 10.9953 22.8497 11.2495 23.1896 11.4783L23.8066 11.8978L24.4865 11.6817C24.8642 11.5673 25.3678 11.3766 25.5944 11.2495C25.8085 11.1351 25.9973 11.0715 25.9973 11.1097C25.9973 11.3258 25.5315 12.063 25.1412 12.4697C24.6124 13.0417 24.7635 13.0926 25.8337 12.7113C26.4758 12.4952 26.4884 12.4952 26.3625 12.7367C26.2869 12.8638 25.8966 13.3087 25.4811 13.7154C24.7761 14.4145 24.7383 14.4908 24.7383 15.0755C24.7383 15.978 24.3102 17.8592 23.8821 18.8888C23.0889 20.8209 21.3892 22.8165 19.6894 23.8207C17.2972 25.2316 14.1118 25.5875 11.43 24.7613C10.5361 24.4817 9 23.7699 9 23.6427C9 23.6046 9.46585 23.5538 10.0324 23.5411C11.216 23.5156 12.3995 23.1851 13.4067 22.6004L14.0866 22.1937L13.306 21.9268C12.198 21.5454 11.2034 20.6684 10.9515 19.8421C10.876 19.5752 10.9012 19.5625 11.6063 19.5625L12.3365 19.5498L11.7196 19.2574C10.9893 18.8888 10.322 18.266 9.99466 17.6304C9.75544 17.1728 9.45326 16.0161 9.5414 15.9272C9.56658 15.889 9.83098 15.9653 10.1332 16.067C11.0019 16.3847 11.1152 16.3085 10.6116 15.7746C9.6673 14.8086 9.37772 13.3722 9.83098 12.0122L10.045 11.402L10.876 12.2282C12.5757 13.8934 14.5776 14.8848 16.8691 15.1772L17.4987 15.2535Z" fill={color}/>
    </svg>
  );
};

export default memo(Twitter);