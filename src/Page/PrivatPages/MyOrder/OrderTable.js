import React from "react";
import { Spinner } from "react-bootstrap"

const OrderTable = (props) => {
  const orders = props.order
  const { name, coustomar, status, _id } = orders;
  console.log(_id);
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure you want to cancel ");
    if (proceed) {
      console.log(id);
      const url = `https://travel-vai-server.herokuapp.com/myOrder/${id}`;
      fetch(url, {
        method: "DELETE",
      }).then((result) => {
          if(result.status === 200){
              alert("Order Cancel")
          }
      });
    }
  };
  return !orders ? <Spinner animation="border"></Spinner>:(
    <tr>
      <td>{name}</td>
      <td>{coustomar}</td>
      <td>{status}</td>
      <td>
        
        <button
          className="btn_outline"
          onClick={() => {
            handleDeleteUser(_id);
          }}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default OrderTable;
