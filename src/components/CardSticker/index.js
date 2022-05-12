import './style.css';
export const CardSticker = ({ condition, className, children }) => {
  return (
    <>{condition && <p className={`cardStiker ${className}`}>{children}</p>}</>
  );
};
