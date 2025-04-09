import React, { Fragment, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Layout from "../layout";
import { productByCategory } from "../../admin/products/FetchApi";

const apiURL = process.env.REACT_APP_API_URL;

const Submenu = ({ category }) => {
  const history = useHistory();
  return (
    <section className="mx-4 mt-24 md:mx-12 md:mt-32 lg:mt-24">
      <div className="flex justify-between items-center">
        <div className="text-sm flex space-x-3">
          <span
            className="hover:text-yellow-700 cursor-pointer"
            onClick={() => history.push("/")}
          >
            Shop
          </span>
          <span className="text-yellow-700 cursor-default">{category}</span>
        </div>
      </div>
    </section>
  );
};

const AllProduct = ({ products }) => {
  const history = useHistory();
  const category = products?.length > 0 ? products[0].pCategory.cName : "";

  return (
    <Fragment>
      <Submenu category={category} />
      <section className="m-4 md:mx-8 md:my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.length > 0 ? (
          products.map((item, index) => (
            <div key={index} className="relative col-span-1 m-2">
              <img
                onClick={() => history.push(`/products/${item._id}`)}
                className="w-full object-cover object-center cursor-pointer"
                src={`${apiURL}/uploads/products/${item.pImages[0]}`}
                alt=""
              />
              <div className="flex items-center justify-between mt-2">
                <div className="text-gray-600 font-light truncate">{item.pName}</div>
                <div className="flex items-center space-x-1">
                  <span className="text-gray-700">
                    {item.pRatings ? item.pRatings.length : 0}
                  </span>
                </div>
              </div>
              <div>Rs. {item.pPrice}.00</div>
            </div>
          ))
        ) : (
         <div className="col-span-2 md:col-span-3 lg:col-span-4 flex items-center justify-center py-24 text-2xl">
            No product found
          </div>
        )}
      </section>
    </Fragment>
  );
};

const PageComponent = () => {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const responseData = await productByCategory(catId);
        if (isMounted && responseData?.Products) {
          setProducts(responseData.Products);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [catId]);

  return <AllProduct products={products} />;
};

const ProductByCategory = () => {
  return (
    <Layout>
      <PageComponent />
    </Layout>
  );
};

export default ProductByCategory;
