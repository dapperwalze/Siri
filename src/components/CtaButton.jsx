export const CtaButton = (props) => {
  const { type, className, handleClick, children } = props;
  return (
    <div className="task-cta-button">
      <button type={type} className={className} onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};
