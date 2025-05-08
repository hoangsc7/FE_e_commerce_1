import {  Route,Routes } from 'react-router-dom';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="pt-20">
      <Routes>
        <Route path="/*" element={<CustomerRouters/>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
