const Item =({clItem}) => {
  return (
    <li key={clItem} class="list-group-item">
          {clItem}
        </li>
  )
}

export default Item;