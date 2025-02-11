//jsx 주의사항
//1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
//2. 숫자, 문자열, 배열 값만 정상적으로 랜더링 된다.
import "./Main.css";
const Main = () => {
  const user = {
    name: "강대범",
    isLogiin: true,
  };

  //   return <>{user.isLogiin ? <div>로그아웃</div> : <div>로그인</div>}</>;

  if (user.isLogiin) {
    return <div className="logout">log out</div>;
  } else {
    return <div>login</div>;
  }
};

export default Main;
