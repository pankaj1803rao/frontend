import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const Moredetails = () => {
  const navigate = useNavigate();
  const [single, setsingle] = useState({});
  const { id } = useParams();
  console.log(id);
  const singleproduct = async () => {
    const res = await fetch(
      `http://localhost:7777/api/products/singleproduct/${id}`,
      {
        method: "GET",
        credentials: "include",
      },
    );
    console.log(res);

    if (res.status === 401) {
      navigate("/login");
      return;
    }

    const data = await res.json();
    console.log(data);
    setsingle(data);
  };

  useEffect(() => {
    singleproduct();
  }, [id]);

  function addtocart(params) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // const exi = cart.find((item) => {
    //   return item.id === id;
    // });
    cart.push({
      id: single._id,
      name: single.name,
      rate: single.price,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("added successfull");
  }
  function updateproductapi(id) {
    console.log(id);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={single.image} alt="" />
          </div>
          <div className="col-8">
            <h1>{single.name}</h1>
            <input type="number" />
            <div className="row">
              <div className="col">
                <button onClick={addtocart}>Add to cart</button>
              </div>
              <div className="col">
                <button onClick={() => updateproductapi(single._id)}>
                  Update
                </button>
              </div>
              <div className="col">
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moredetails;
