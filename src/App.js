import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import Footer from './Page/Footer/Footer'
import Header from './Page/Header/Header'
import Login from './Page/Login/Login'
import MyOrder from './Page/PrivatPages/MyOrder/MyOrder'
import PriavateRoute from './Page/PrivatPages/PriavateRoute/PriavateRoute'
import ManageOrder from './Page/PrivatPages/ManageOrder/ManageOrder'
import AddService from './Page/PrivatPages/AddService/AddService'
import NotFound from './Page/NotFound/NotFound'
import Services from './Page/Services/Services'
import ServiceInfo from './Page/Services/ServiceInfo'
import AddReview from './Page/Reviews/AddReview'

function App() {
  return (
    <div className="container-fluid">
      
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/*" element={<PriavateRoute />}>
            <Route path="myOrder" element={<MyOrder/>} />
            <Route path="manageOrder" element={<ManageOrder/>} />
            <Route path="addService" element={<AddService/>} />
            <Route path="services/:id" element={<ServiceInfo/>} />
            <Route path="review" element={<AddReview/>} />
            
          </Route>
          <Route path="/footer" element={<Footer></Footer>} />
          <Route path="*" element={<NotFound/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
