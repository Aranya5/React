import Item from "./Items";
const ClothItems = ({itemArr}) => {
  return (
    <ul class="list-group">
      {itemArr.map((item) => (
        <Item clItem={item}></Item>
      ))}
    </ul>
  );
};
export default ClothItems;
