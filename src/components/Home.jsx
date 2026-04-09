import PageHeading from "./PageHeading";
import React from "react";
import ProductListing from "./ProductListing";
import products from "../data/products";

export default function Home(){
    return(
        <div className="home-container">
            <PageHeading title="Welcome to Our Store">
                Discover a world of creativity with our unique stickers.
            </PageHeading>
            <ProductListing products={products} />
        </div>
    );
}