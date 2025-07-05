function Hello(){
  let myName = "Aranya";
  let greeting = () => {
    return `Hello ${myName}`;
  }
  return <p>
    This sentencce says {greeting()}.
    <br />
  </p>
}

export default Hello;