import React from "react";
import { styled } from "styled-components";


/* styled-components 선언은 함수 밖에서 한다
   이유는 함수가 호출되거나 갱신될 때마다 새로 그려지는데
   안에 있으면 같이 다시 그려지기 때문
   이는 styled-components를 사용하는 모두에게 영향을 줄 수 있다 */
const CommonButton = styled.button`
  width: 90px;
  height: 34px;
  border: 0.5px solid #eeeeee;
  border-radius: 7px;
  background-color: white;
  color: white;
`;

const CustomButton = styled(CommonButton)`
  background-color: ${(props) => props.$bgColor || "white"};
  color: ${(props) => (props.$bgColor ? "white" : "black")};
`;

/* 
children은 prop이 가지는 default 변수
*/

function Button({ bgColor, clickEvent, children }) {
  return (
    <div>
      <CustomButton $bgColor={bgColor} onClick={clickEvent}>{children}</CustomButton>
    </div>
  );
}

export default Button;
