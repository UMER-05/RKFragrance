import React, { Fragment, createContext, useReducer } from "react";
import { useEffect, useState } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";
import Preloader from "../../Animation/Preloader";
import PreFooter from "../partials/PreFooter";
import WhatsappUs from "../partials/WhatsappUs";
import FeatureIconCard from "../partials/FeatureIconCard";
export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
                  

      <Slider />
      {/* Category, Search & Filter Section */}
      <section className="m-4 md:mx-8 md:my-6">
        <ProductCategory />
      </section>
      {/* Product Section */}
      <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProduct />
      </section>
    </Fragment>
  );
};

const Home = () => {
  const [data, dispatch] = useReducer(homeReducer, homeState);

  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowAnimation(true);
      sessionStorage.setItem("hasVisited", "true");

      // Auto-hide preloader after 3 seconds (adjust as needed)
      setTimeout(() => {
        setShowAnimation(false);
      }, 7000);
    }
  }, []);

  
  
  return (
    <>  
    {showAnimation && <Preloader/>}
    
    <HomeContext.Provider value={{ data, dispatch }}>
  <Layout>        
    <HomeComponent />
    <WhatsappUs />
    <FeatureIconCard />
    <PreFooter />
  </Layout>
    </HomeContext.Provider>
    </>
  );
};

export default Home;
