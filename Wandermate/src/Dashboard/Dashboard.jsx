import {  Routes, Route, Link } from "react-router-dom";
import Hotels from "./HotelDash";
import Travels from "./TravelDash";

const Dashboard = () => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
    <p className="text-gray-700">Welcome to the dashboard.</p>
  </div>
);

const UserManagement = () => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-2">User Management</h2>
    <p className="text-gray-700">Manage users.</p>
  </div>
);

const Settings = () => {
  <></>;
};



const Users = () => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-2">Users</h2>
    <p className="text-gray-700">Admin Users</p>
  </div>
);

const Reports = () => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-2">Reports</h2>
    <p className="text-gray-700">Admin Reports</p>
  </div>
);

const Bookings = () => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold mb-2">Bookings</h2>
    <p className="text-gray-700">Admin Bookings</p>
  </div>
);

const NavAdmin = () => (
  <nav className="flex flex-col justify-start p-4 bg-gray-800 w-1/5 ">
    <ul className="flex flex-col space-y-2">
      <li>
        <Link to="" className="text-white hover:text-gray-300">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="Hotels" className="text-white hover:text-gray-300">
          Hotels
        </Link>
      </li>
      <li>
        <Link to="TravelDash" className="text-white hover:text-gray-300">
          Travels
        </Link>
      </li>
      <li>
        <Link to="Users" className="text-white hover:text-gray-300">
          Users
        </Link>
      </li>
      <li>
        <Link to="Bookings" className="text-white hover:text-gray-300">
          Bookings
        </Link>
      </li>
      <li>
        <Link to="reports" className="text-white hover:text-gray-300">
          Reports
        </Link>
      </li>
      <li>
        <Link to="user-management" className="text-white hover:text-gray-300">
          User Management
        </Link>
      </li>
      <li>
        <Link to="settings" className="text-white hover:text-gray-300">
          Settings
        </Link>
      </li>
    </ul>
  </nav>
);

const Admin = () => (
  <div className="flex">
    <NavAdmin />
    <div className="flex-grow p-4">
      <Routes>
        <Route path="" element={<Dashboard />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="settings" element={<Settings />} />
        <Route path="Users" element={<Users />} />
        <Route path="Bookings" element={<Bookings />} />
        <Route path="TravelDash" element={<Travels />} />
        <Route path="Hotels" element={<Hotels />} />
        <Route path="reports" element={<Reports />} />
      </Routes>
    </div>
  </div>
);

export default Admin;
