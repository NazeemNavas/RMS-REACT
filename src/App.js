import React,{Fragment} from 'react';
import Landing from './landingPage/Landing'
import DashboardOutlet from './outlet/DashboardOutlet';
import Order from './outlet/Order';
import Outlet from './outlet/Outlet';
import Additem from './kitchen/Additem';
import Dashboard from './kitchen/Dashboard'
import Inventory from './kitchen/Inventory';
import KitchenSignUp from './kitchen/KitchenSignUp';
import Menu from './kitchen/Menu';
import OutletDetails from './kitchen/OutletDetails';
import OutletSignup from './kitchen/OutletSignup';
import ViewOutlet from './kitchen/ViewOutlet';
import CompanyDashboard from './company/CompanyDashboard';
import CompanySignup from './company/CompanySignup';
import KitchenBills from './company/KitchenBills';
import KitchenDetails from './company/KitchenDetails';
import OutletBills from './company/OutletBills';
import ViewKitchens from './company/ViewKitchens';
import CompanyProfile from './company/CompanyProfile';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import KitchenProfile from './kitchen/KitchenProfile';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* Landing signIn Page */}
        <Route path='/' element={<Landing/>}/>
        {/* Company Routes */}
        <Route path='/company' element={<CompanyDashboard/>}/>
        <Route path='/company/signup' element={<CompanySignup/>}/>
        <Route path='/company/addkitchen' element={<KitchenSignUp/>}/>
        <Route path='/company/viewkitchen' element={<ViewKitchens/>}/>
        <Route path='/company/viewkitchen/kitchendetails' element={<KitchenDetails/>}/>
        <Route path='/company/viewkitchen/kitchendetails/outletbill' element={<OutletBills/>}/>
        <Route path='/company/companyprofile' element={<CompanyProfile/>}/>
        <Route path='/company/kitchenreport' element={<KitchenBills/>}/> 
        {/* kitchen routes */}
        <Route path='/kitchen' element={<Dashboard/>}/>
        <Route path='/kitchen/menu' element={<Menu/>}/>
        <Route path='/kitchen/additem' element={<Additem/>}/>
        <Route path='/kitchen/addoutlet' element={<OutletSignup/>}/>
        <Route path='/kitchen/viewoutlet' element={<ViewOutlet/>}/>
        <Route path='/kitchen/inventory' element={<Inventory/>}/>
        <Route path='/kitchen/outletdetail' element={<OutletDetails/>}/>
        <Route path='/kitchen/kitchenprofile' element={<KitchenProfile/>}/>
        {/* outlet routes */}
        <Route path='/outlet' element={<DashboardOutlet/>}/>
        <Route path='/outlet/order' element={<Order/>}/>
        <Route path='/outlet/outlet' element={<Outlet/>}/>


        
      </Routes>
      </BrowserRouter>
      {/* <Dashboard/> */}
      {/* <Order/> */}
     {/* <Outlet/> */}
     {/* <Additem/> */}
     {/* <Dashboardkit/> */}
     {/* <Inventory/> */}
     {/* <KitchenSignUp/> */}
     {/* <Menu/> */}
     {/* <OutletDetails/> */}
     {/* <OutletSignup/> */}
     {/* <ViewOutlet/> */}
      {/* <CompanyDashboard/>        */}
      {/* <CompanySignup/> */}
      {/* <KitchenBills/> */}
      {/* <KitchenDetails/> */}
      {/* <OutletBills/> */}
      {/* <ViewKitchens/> */}
    </div>
  );
}

export default App;
