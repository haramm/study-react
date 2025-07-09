import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
/* 
컴포넌트는 곧 view 라고 생각하면됨
return 하는 것이 곧 html이기 때문
그래서 리액트에서는 컴포넌트 = 함수객체 이기 때문에
return 타입이 존재하고, 그 return으로 html을 반환하기 때문에
하나의 컴포넌트는 하나의 view를 가진다고 보면 됨
이 컴포넌트를 호출하여 사용하는 이유는
컴포넌트가 가진 화면을 노출하고 싶기 때문

리액트는 이 컴포넌트들을 이용하여 화면을 구현
실제 화면은 하나의 view 이지만
사용자가 원하는 경로에 해당하는 컴포넌트로 교체하여
여러 화면이 있는 것처럼 보여지게 됨
이것을 SPA 방식이라고 부른다

컴포넌트가 호출되면서 전달받는 매개변수 -> props
props는 상위 컴포넌트에서 하위 컴포넌트를 호출 할 때 
전달해야 하는 데이터를 지니는 객체
 */
function ListGrid({listData}) {
  return (
    <>
      <section className="w-100">
        <table className="table">
          <colgroup>
            <col style={{ width: "60%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
          </colgroup>
          <thead className="table-dark">
            <tr>
              <th>이름</th>
              <th>학년</th>
              <th>성별</th>
            </tr>
          </thead>
          <tbody>
            {
              //map 함수는 return이 있어서 화면에 표현
              // forEach는 return이 없어서 작동은 하나 화면에 표현되지 않음
              listData?.map((obj, index) => (
                //html을 loop로 표현 시 loop 대상은 key 속성을 가진다
                //key 속성은 loop 대상을 식별하는 값이라 중복x
                <tr key={index}>
                  <td>{obj.myName}</td>
                  <td>{obj.grade}</td>
                  <td>{obj.gender}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </section>
    </>
  );
}

export default ListGrid;
