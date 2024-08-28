import React,{Fragment} from 'react';
import Dashboard from './outlet/Dashboard';
import Order from './outlet/Order';
import Outlet from './outlet/Outlet';
import Additem from './kitchen/Additem';
import Dashboardkit from './kitchen/Dashboard';
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


function App() {
  return (
    <div className="App">
      <Dashboard/>
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
