const FloatButton = (props) => {
  return (
    <div className="float-button" onClick={props.createNewTask}>
      {props.children}
    </div>
  );
};

export default FloatButton;
