export const CreateTaskButton = (props) => {
  const { type, value, disabled, className, handleClick } = props;
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        className={className}
        onClick={handleClick}
      >
        {value}
      </button>
    </div>
  );
};
