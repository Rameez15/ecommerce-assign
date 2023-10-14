import { Button, Card, Divider } from "antd";
const { Meta } = Card;
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
const Item = ({ data }) => {
  const handler = (itm) => itm.preventDefault();
  return (
    <>
      <Card
        hoverable
        style={{ width: "360px", marginBottom: "60px" }}
        cover={
          <img
            alt={data.title}
            src={data.thumbnail}
            style={{ height: "250px" }}
          />
        }
      >
        <Meta title={data.title} />
        <Divider />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Button type="primary" click={handler}>
              <Link href={`/products/${data.id}`}>veiw detail</Link>
              <AiOutlineArrowRight style={{ margin: "0px -5px -2px 9px" }} />
            </Button>
          </div>
          <div>
            <a
              href="javascript:void(0)"
              style={{ textDecoration: "none" }}
              onClick={() => {
                alert("item added");
              }}
            >
              <BsFillCartPlusFill style={{ fontSize: "1.5rem" }} />
            </a>
          </div>
        </div>
      </Card>
    </>
  );
};
export default Item;
