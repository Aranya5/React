function Random(){
  let number = Math.random()*100;
  number = Math.floor(number);
  return <p>Random number is {number}</p>
}

export default Random;