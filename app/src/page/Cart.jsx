import React, { useContext, useEffect, useState } from "react";
import style from "../style/Cart.module.css";
import { MdDeleteForever } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import axios from "axios"
import { CartBtn } from "../components/cart/CartBtn";
import { AuthContext } from "../contextAPI/AuthContext";
import { SimpleNavbar } from "../components/Shipment/SimpleNavbar";


export default function Cart() {
  const [data, setData] = useState([]);
 
  const [amount, setAmount] = useState({})

  useEffect(() => {
    try {
      fetch("http://localhost:8000/cart")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch {
      console.log("error");
    }
  }, []);

  const handleAdd = (id) => {
    const updatedCount = data.map((item) =>
      item._id === id ? { ...item, __v: item.__v + 1 } : item
    );
    setData(updatedCount);
    console.log(data);
  };

  const handleSub = (id) => {
    const updatedCount = data.map((item) =>
      item._id === id ? { ...item, __v: item.__v - 1 } : item
    );
    setData(updatedCount);
    console.log(data);
  };

  useEffect(() => {
    if ( data ) {
      var totalMrp = 0
      var totalSp = 0
      for ( let i = 0; i < data.length; i++ ) {
        totalMrp += ((data[i].mrp)*(data[i].__v+1))
        totalSp += ((data[i].sp)*(data[i].__v+1))
      }

      var discount = totalMrp - totalSp

      localStorage.setItem("totalMrp", totalMrp)
      localStorage.setItem("totalSp", totalSp)
      localStorage.setItem("discount", discount)

      localStorage.setItem("cartData", JSON.stringify(data))

      setAmount({
        totalMrp: totalMrp,
        totalSp: totalSp,
        discount: discount
      })
      console.log("x")
    }
  }, [data])

  const handleDelete = async (id) => {
    console.log(id);
    const data = await axios.delete(`http://localhost:8000/cart/${id}`);
    console.log(data);
    window.location.reload(false); 
  }

  return (
		<>
			<SimpleNavbar />
			<div style={{ marginTop: "30px"}}>
				{data ? (
					<div className={style.cart}>
						<div>
							<p>
								Items NOT Requiring Prescription ({data.length})
							</p>
							{data.map((item) => (
								<div key={item._id}>
									<div>
										<div>
											<p>{item.name}</p>
										</div>
										<div>
											<p>₹{item.sp}</p>
											<p>
												MRP <del>₹{item.mrp}</del>
											</p>
										</div>
									</div>
									<p>{item.quantity}</p>
									<div className={style.count}>
										<div
											onClick={() =>
												handleDelete(item._id)
											}
										>
											<MdDeleteForever /> <p>Remove</p>
										</div>
										<div>
											<GrSubtractCircle
												onClick={() =>
													handleSub(item._id)
												}
											/>
											{item.__v + 1}
											<GrAddCircle
												onClick={() =>
													handleAdd(item._id)
												}
											/>
										</div>
									</div>
								</div>
							))}
						</div>

						<div>
							<div className={style.member}>
								<img
									src="https://onemg.gumlet.io/image/upload/v1625657833/ekjkxafxcqqg0oinr3fu.png"
									alt=""
								/>
								<p>You can save extra ₹500 on this order</p>
								<p>Become a member</p>
								<p>
									Care plan membership ₹165 <del>₹549</del> /
									3 months
								</p>
								<div>
									<button>Know More</button>
									<button>Add to cart</button>
								</div>
								<div>
									<div>
										<img
											src="https://res.cloudinary.com/du8msdgbj/image/upload/v1607414999/marketing/cvtnx1zh5we6atn3m7i0.svg"
											alt=""
										/>
										<p>Apply Coupon</p>
									</div>
									<div>
										<img
											src="https://www.1mg.com/images/forward-rebrand.svg"
											alt=""
										/>
									</div>
								</div>
							</div>

							<div className={style.bill}>
								<div>
									<div>
										<p>Item Total(MRP)</p>
									</div>
									<div>
										<p>₹{amount.totalMrp}</p>
									</div>
								</div>

								<div>
									<div>
										<p>Price Discount</p>
									</div>
									<div>
										<p>-₹{amount.discount}</p>
									</div>
								</div>

								<div>
									<div>
										<p>Shipping Fee</p>
									</div>
									<div>
										<p>0</p>
									</div>
								</div>

								<div>
									<div>
										<p>To be paid</p>
									</div>
									<div>
										<p>₹{amount.totalSp}</p>
									</div>
								</div>

								<div>
									<div>
										<p>Total Savings</p>
									</div>
									<div>
										<p>₹{amount.discount}</p>
									</div>
								</div>
							</div>

							<div>
								<CartBtn />
							</div>
						</div>
					</div>
				) : null}
			</div>
		</>
  );
}
