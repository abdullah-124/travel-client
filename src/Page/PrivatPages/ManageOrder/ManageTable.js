import React from "react";

const ManageTable = (props) => {
  const order = props.order
  const { name, coustomar, status, _id } = order;

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure you want to Delate ");
    if (proceed) {
      console.log(id);
      const url = `https://travel-vai-server.herokuapp.com/myOrder/${id}`;
      fetch(url, {
        method: "DELETE",
      }).then((result) => {
        // console.log(result)
        if (result.status === 200) {
          alert("Order Canceled Successfull");
        }
      });
    }
  };
  // UPDATE STATUS FUNCTION
  const handleUpdateStatus = (id) => {
    const url = `https://travel-vai-server.herokuapp.com/manageOrder/${id}`;
    fetch(url, {
      method: 'PUT',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(props.order)
    })
    .then(result => {
      // console.log(result)
      if(result.status === 200){
        alert('Order Approved')
      }
    })
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{coustomar}</td>
      <td>{status}</td>
      <td>
        {status === "Pending" && (
          <button
            className="btn_outline mx-1"
            onClick={() => handleUpdateStatus(_id)}
          >
            Approved
          </button>
        )}

        <button
          className="btn_regular"
          onClick={() => {
            handleDeleteOrder(_id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageTable;
