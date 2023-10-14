import List from "../../components/list";
import fsPromises from "fs/promises";
import path from "path";

export default function (props) {
  const { products } = props;

  return (
    <>
      <div className="product-style">
        <List arr={products} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "utils", "prod.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: data,
  };
}
