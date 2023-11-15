import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <CDBSidebar>
      <CDBSidebarHeader id="font-txt" className="my_side_bar" prefix={<i id="font-txt" className="fa fa-bars " />}></CDBSidebarHeader>
        <CDBSidebarContent className="my_side_bar">
          <CDBSidebarMenu className="my_side_bar side-bar-height">
            <Link to='/users/dashboard'><CDBSidebarMenuItem id="font-txt" icon="th-large">Dashboard</CDBSidebarMenuItem></Link>
            <Link to='/users/book-appointments'><CDBSidebarMenuItem id="font-txt" icon="sticky-note">Book Appointment?</CDBSidebarMenuItem></Link>
            <Link to='/users/schedule'><CDBSidebarMenuItem id="font-txt" icon="sticky-note">Schedule</CDBSidebarMenuItem></Link>
            <Link to='/users/payments'><CDBSidebarMenuItem id="font-txt" icon="credit-card" iconType="solid">
              Payment History
            </CDBSidebarMenuItem></Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper my_side_bar"
          style={{padding: '20px 5px'}}
        >
          {new Date().toLocaleString() + ""}
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;