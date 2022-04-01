import "./admin.css";
import { useState } from "react";
import DataService from "../services/dataService";

const Admin = () => {
  const [prod, setProd] = useState({});
  const [coupon, setCoupon] = useState({});
  const [allCoupons, setAllCoupons] = useState([]);
  const [allProds, setAllProds] = useState([]);

  const handleInputChange = (e) => {
    var copy = { ...prod };
    copy[e.target.name] = e.target.value;
    setProd(copy);
  };

  const handleCCChange = (e) => {
    var copy = { ...coupon };
    copy[e.target.name] = e.target.value;
    setCoupon(copy);
  };

  const saveProduct = () => {
    console.log(prod);

    let service = new DataService();
    service.saveProduct(prod);

    let copy = [...allProds];
    copy.push(prod);
    setAllProds(copy);
  };

  const saveCoupon = () => {
    console.log(coupon);

    let service = new DataService();
    service.saveCouponCode(coupon);

    // NEVER EVER => allCoupons.push(coupon);
    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
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

        {allProds.map((prod, index) => (
          <div>
            <h5>
              {prod.title} - ${prod.price}
            </h5>
          </div>
        ))}
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

        <div className="coupon-list">
          {allCoupons.map((coupon, index) => (
            <div key={index}>
              <label>{coupon.code}</label> - <label>{coupon.discount}</label>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Admin;
