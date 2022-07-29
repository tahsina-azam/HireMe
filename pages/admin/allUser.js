import React from 'react'
import Navbar from '../../src/components/App-Bar/adminAppbar';
import AdminGrid from '../../src/components/admin/alluserCard';
function allUser() {
  return (
    <div>
        <Navbar/>
        <AdminGrid/>
    </div>
  )
}

export default allUser