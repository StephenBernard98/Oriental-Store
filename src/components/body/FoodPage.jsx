import React from 'react'
import Layout from "../home/Layout";
import Hero from "../body/Hero";
import HeadlineCards from "../body/HeadlineCards";
import Food from "../body/Food";
import Category from "../body/Category";

const FoodPage = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <HeadlineCards />
        <Food />
        <Category />
      </Layout>
    </div>
  );
}

export default FoodPage
