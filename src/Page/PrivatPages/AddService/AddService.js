import "./addService.css";
import { useForm } from "react-hook-form";


const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    //   console.log(data)
    fetch('https://travel-vai-server.herokuapp.com/addService',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(result => {
      console.log(result)
        if(result.status === 200){
            alert('service added')
          reset()
        }
    })
  };
  return (
    <div className="contaienr row">
      <div className="add-service py-4 mt-5 col-lg-6 col-md-8 col-12 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Add Service</h2>
        <div className="int-field">
          <p>Service Name</p>
          <input placeholder="Service Name" {...register("name", { required: true, maxLength: 20 })} />
        </div>
        <div className="int-field">
          <p>Image Url</p>
          <input placeholder="Image Url" type="text" {...register("img", { required: true })} />
        </div>
        <div className="int-field">
          <p>Service description</p>
          <input placeholder="Service Description" {...register("desc", { required: true })} />
        </div>

        <input className="mt-3 btn_regular" type="submit" />
        
      </form>
      </div>
      
    </div>
  );
};

export default AddService;
