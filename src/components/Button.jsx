const Button = ({ text = "클릭", color = "black", children }) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log({ text, color });
  };

  return (
    <button onClick={onClickButton} style={{ color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
