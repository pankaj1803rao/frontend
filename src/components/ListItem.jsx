import React from "react";
import { useEffect, useState } from "react";
const ListItem = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setproduct(cart);
    console.log(cart);
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {product.map((ele) => {
              console.log(ele);
            })}
          </div>
          <div className="col">2</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
