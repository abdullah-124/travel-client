import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap"
import ManageTable from "./ManageTable";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://travel-vai-server.herokuapp.com/manageOrder")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return orders.length === 0 ? <Spinner animation="grow" />: (
    <div>
      <h1 className="title">All order for tour</h1>
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
            <ManageTable key={order._id} order={order}></ManageTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
