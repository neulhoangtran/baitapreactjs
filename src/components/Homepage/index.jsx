import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div classNameName="container mt-5">
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
                alt="img"
              />
              <Link to={"/collection"}>
                <div className="mask rgba-white-slight"></div>
              </Link>
            </div>

            <div className="card-body">
              <h4 className="card-title">Module - Trang danh sách sản phẩm</h4>

              <p className="card-text">Bài tập phần danh sách sản phẩm</p>
              <Link to={"/collection"} lassName="btn btn-light-blue btn-md">
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
                alt="img"
              />
              <Link to={"/product/1"}>
                <div className="mask rgba-white-slight"></div>
              </Link>
            </div>

            <div className="card-body">
              <h4 className="card-title">Module - Trang chi tiết sản phẩm</h4>

              <p className="card-text">Bài tập phần chi tiết sản phẩm</p>

              <Link to={"/product/1"} lassName="btn btn-light-blue btn-md">
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
                alt="img"
              />
              <Link to={"/cart"}>
                <div className="mask rgba-white-slight"></div>
              </Link>
            </div>

            <div className="card-body">
              <h4 className="card-title">Module - Shopping Cart</h4>

              <p className="card-text">Bài tập trang Shopping Cart</p>

              <button type="button" className="btn btn-light-blue btn-md">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="view overlay">
              <img
                className="card-img-top"
                src="https://mdbootstrap.com/img/Photos/Others/images/16.webp"
                alt="img"
              />
              <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title">Card title</h4>

              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <Link to={"/cart"} lassName="btn btn-light-blue btn-md">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
