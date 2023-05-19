import React, { useEffect, useState} from "react";
import axios from "axios";
import Navbar from "../../../components/navbar";
import Footer from "../../../components/footer";
import { useParams } from "react-router";
import AddFeedbackModal from "../../../components/modals/Feedback/AddFeedbackModal"

const Index = () => {

  const params = useParams()
  const [product, setproduct] = useState([]);
  const productId=params.id;
  const[quantity, setQuantity] = useState(1);

  useEffect(() => {
    //console.log(params.id)
    axios
      .get("http://localhost:5001/product/" + params.id)
      .then((res) => {
        setproduct(res.data);
        //console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  const cartData = {
    userId: localStorage.getItem('user_id'),
    products: [
      {
        product: productId,
        quantity: quantity
      }
    ]
  };

  const handleAddCart = () => {
    console.log(cartData)
    axios.post("http://localhost:5004/api/cart/",cartData).then(function(response){
      console.log(response);
    }).catch(function(err){
      console.log(err);
    })
  }
  // axios
  //   .get(`http://localhost:3005/api/cart/getTotalPrice/${localStorage.getItem('user_id')}`)
  //   .then((response) => {
  //     // console.log(response.data);
  //     setTotalPrice(response.data.totalPrice)
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })


  return (
    <div>
      <Navbar/>
      <div className="container mt-5">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-6 mb-4">
            <img
              src={product.image}
              className="img-fluid"
              alt=""
            />
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-6 mb-4">
            {/*Content*/}
            <div className="p-4">
              <div className="mb-3">
                <a href>
                  <span className="badge bg-dark me-1">{product.category}</span>
                </a>
              </div>
              <a href className="text-reset">
                <h2 className="card-title mb-2">{product.name}</h2>
              </a>
              <h4 className="mb-3 price">Rs.{product.price}.00</h4>
              <form className="d-flex justify-content-left">
                {/* Default input */}
                <div className="form-outline me-5" style={{ width: "100px" }}>
                  <input
                    type="number"
                    defaultValue={1}
                    className="form-control"
                    value={quantity}
                    onChange={(e)=>{setQuantity(e.target.value)}}
                  />
                </div>
                <button className="btn btn-primary ms-5" type="submit" onClick={handleAddCart}> 
                  Add to cart
                  <i className="fas fa-shopping-cart ms-1" />
                </button>
              </form>
            </div>
            {/*Content*/}
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
        <hr />
        {/*Grid row*/}
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 text-center">
            <AddFeedbackModal prodid={product.id}/>
          </div>
        </div>
      </div>
      <div className="" style={{bottom:"0"}}>
        <Footer/>
      </div>
    </div>
  );
};

export default Index;
