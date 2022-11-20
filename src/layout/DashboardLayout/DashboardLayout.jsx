import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../components/Home/Pages/Shared/Navbar/Navbar';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin/useAdmin';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to='/dashboard'>My Appointments</Link></li>
                        {
                            isAdmin && <>
                            <li><Link to='/dashboard/allusers'>All Users</Link></li>
                            <li><Link to='/dashboard/adddoctors'>Add Doctors</Link></li>
                            <li><Link to='/dashboard/managedoctors'>Manage Doctors</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;