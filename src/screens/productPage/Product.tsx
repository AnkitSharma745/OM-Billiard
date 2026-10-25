
import PoolTable from "../../components/PoolTable";
import Balls from "../../components/Balls";
import Stick from "../../components/Stick";
import MoreProduct from "../../components/MoreProduct";
import { Helmet } from "react-helmet";


const Product = () => {
  return (
    <>
      <Helmet>
        <title>Om Billiard Products - Pool Tables and Accessories</title>
        <meta
          name="description"
          content="Browse Om Billiard's range of premium pool tables, cue sticks, and billiard accessories."
        />
        <meta
          name="keywords"
          content="pool tables, cue sticks, billiard accessories, buy billiards equipment"
        />
      </Helmet>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
          <PoolTable />
          <Balls />
          <Stick />
          <MoreProduct />
        </div>
      </div>
    </>
  );
};

export default Product;


