import "./admin.css";
import { useState } from "react";
import DataService from "../services/dataService";

const Admin = () => {
  const [prod, setProd] = useState({});
  const [coupon, setCoupon] = useState({});

  const handleInputChange = (e) => {
    var copy = prod;
    copy[e.target.name] = e.target.value;
    setProd(prod);
  };

  const handleCCChange = (e) => {
    var copy = coupon;
    copy[e.target.name] = e.target.value;
    setCoupon(copy);
  };

  const saveProduct = () => {
    console.log(prod);

    let service = new DataService();
    service.saveProduct(prod);
  };

  const saveCoupon = () => {
    console.log(coupon);

    let service = new DataService();
    service.saveCouponCode(coupon);
  };

  return (
    <div ClassName="admin">
      <section>
        <h3>Register new product</h3>

        <div className="form">
          <div className="my-control">
            <label>Title:</label>
            <input
              onChange={handleInputChange}
              name="title"
              type="text"
            ></input>
          </div>

          <div className="my-control">
            <label>Image:</label>
            <input
              onChange={handleInputChange}
              name="image"
              type="text"
            ></input>
          </div>

          <div className="my-control">
            <label>Category:</label>
            <input
              onChange={handleInputChange}
              name="category"
              type="text"
            ></input>
          </div>

          <div className="my-control">
            <label>Price:</label>
            <input
              onChange={handleInputChange}
              name="price"
              type="text"
            ></input>
          </div>

          <div className="my-control">
            <button onClick={saveProduct} className="btn btn-dark">
              Save Product
            </button>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3>Coupon Codes</h3>
          <input onChange={handleCCChange} name="code" type="text"></input>
        </div>
        <div>
          <h3>Discount</h3>
          <input onChange={handleCCChange} name="discount" type="text"></input>
        </div>
        <div>
          <button onClick={saveCoupon} className="btn btn-dark">
            Save Coupon
          </button>
        </div>
      </section>
    </div>
  );
};

export default Admin;
