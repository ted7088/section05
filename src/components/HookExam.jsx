import useInput from "../hooks/useInput";
//3가지 hook 관련 팁
//1.함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능


const HookExam = () => {
  const [input, onChange] = useInput();
  return <div>
    <input value={input} onChange={onChange}/>
  </div>;
};

export default HookExam;
