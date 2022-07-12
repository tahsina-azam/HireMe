import React from 'react'
import UserProfile from '../../src/components/userProfile'
import NavBar from '../../src/components/App-Bar/userAppbar'

function profile() {
  return (
    <div>
        <NavBar/>
        <UserProfile/>
    </div>
  )
}

export default profile