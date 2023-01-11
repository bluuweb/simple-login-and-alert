const Alert = ({ children, color }) => {
  return <div className={`alert alert-${color} my-2`}>{children}</div>;
};
export default Alert;
