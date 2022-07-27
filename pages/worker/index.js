import React from 'react'
import WorkerProfile from '../../src/components/workerProfile'
import NavBar from "../../src/components/App-Bar/workerAppbar"


function index() {
  return (
    <div>
        <NavBar/>
        <WorkerProfile/>
    </div>
  )
}

export default index