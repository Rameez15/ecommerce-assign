import { Card, Divider } from "antd";
const { Meta } = Card;

export default function (props) {
  const { productDetail } = props;
  return (
    <>
      <div className="gen-pages">
        <Card
          style={{ width: 500 }}
          cover={
            <img
              alt={`picture of ${productDetail.title}`}
              src={productDetail.thumbnail}
            />
          }
        >
          <Meta
            title={productDetail.title}
            description={productDetail.description}
          />
          <Divider />
          <div>
            <h2>Details</h2>
            <h3>This is brand of {productDetail.brand}</h3>
            <h3>Price is {productDetail.price} USD</h3>
            <p>
              Rating of {productDetail.title} is {productDetail.rating}
            </p>
            <p>The discount is of {productDetail.discountPercentage}%</p>
            <p>Available stock is of {productDetail.stock} pieces</p>
          </div>
        </Card>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { prodFile } = params;
  const res = await fetch(`https://dummyjson.com/products/${prodFile}`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productDetail: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products/");
  const data = await res.json();
  const items = data.products.map((res) => {
    return { params: { prodFile: res.id.toString() } };
  });
  return {
    paths: items,
    fallback: "blocking",
  };
}
