import { Suspense, lazy } from 'react';
import TopBarProgress from "./component/common/TopBarProgress"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './component/common/Layout';
import DashboardLayout from './component/common/DashboardLayout';
import BookAppointments from './component/app/pages/dashboard/appointments/BookAppointments';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = lazy(()=> import('./component/static/pages/Home/Home'));
const Blog = lazy(()=> import('./component/static/pages/Blog/Blog'));
const About = lazy(()=> import('./component/static/pages/About/About'));
const Contact = lazy(()=> import('./component/static/pages/Contact/Contact'));
const Login = lazy(()=> import('./component/static/pages/Login/Login'));
const Signup = lazy(()=> import('./component/static/pages/Login/Signup'));
const Payments = lazy(()=> import('./component/app/pages/dashboard/Payment-History/Payments'));
const Schedule = lazy(()=> import('./component/app/pages/dashboard/Payment-History/Schedule'));
const Profile = lazy(()=> import('./component/app/pages/dashboard/Profile/Profile'));
const Dashboard = lazy(()=> import('./component/app/pages/dashboard/Dashboard/Dashboard'));
const Administrator = lazy(()=> import('./component/static/pages/Admin/Administrator'));
const Order = lazy(()=> import('./component/app/pages/dashboard/Order/Order'));


const App =()=> {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div>
                <TopBarProgress />
            </div>
          }
        >
          <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/blog' element={<Blog/>} />
              <Route path='contact' element={<Contact/>} />
            </Route>

            <Route path='/users' element={<DashboardLayout/>}>
              <Route path='/users/dashboard' element={<Dashboard/>}/>
              <Route path='/users/payments' element={<Payments/>}/>
              <Route path='/users/book-appointments' element={<BookAppointments/>}/>
              <Route path='/users/schedule' element={<Schedule/>}/>
              <Route path='/users/editprofile' element={<Profile/>}/>
            </Route>

            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/admin' element={<Administrator/>}/>
            <Route path='/order' element={<Order/>}/>
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
