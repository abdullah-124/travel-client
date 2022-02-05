import React, { useEffect, useState } from "react";
// import { Spinner } from "react-bootstrap"
import useFirebase from "../../../Firebase/useFirebase";
import OrderTable from "./OrderTable"

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useFirebase();
    // console.log(user)
  useEffect(() => {
    fetch(`https://travel-vai-server.herokuapp.com/myOrder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return orders.length === 0 ? <h3>Empty</h3>: (
    <div>
      <h1 className="title">Your Order</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Order Name</th>
            <th scope="col">Coustomar</th>
            <th scope="col">Status</th>
            <th scope="col">Control</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderTable key={order._id} order={order}></OrderTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
