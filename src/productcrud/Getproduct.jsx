import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Getproduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getproduct = async () => {
    try {
      const res = await fetch("http://localhost:7777/api/products", {
        method: "GET",
        credentials: "include",
      });

      if (res.status === 401) {
        navigate("/login");
        return;
      }

      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getproduct();
  }, []);

  return (
    <div className="container mt-3">
      <div className="row g-3">
        {products.map((product) => (
          <div className="col-md-4" key={product._id}>
            <NavLink to={`/moredetail/${product._id}`}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    <b>₹{product.price}</b> | {product.category}
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Getproduct;
