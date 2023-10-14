import Item from "../items";

const List = ({ arr }) => {
  const items = arr.map((product) => <Item key={product.id} data={product} />);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {" "}
        {items}
      </div>
    </>
  );
};
export default List;
