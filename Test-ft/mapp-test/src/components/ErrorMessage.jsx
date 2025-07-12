const ErrorMessage =({itemArr}) => {

  return(
    <>
     {itemArr.length === 0 ? <h3>I am naked. No clothing Items</h3> : null}
    </>
  );
}
export default ErrorMessage;