import React from 'react'
import WorkerProfile from '../../src/components/workerProfile'
import NavBar from "../../src/components/App-Bar/workerAppbar"
import CommentBody from '../../src/components/comments/commentCard'
import { Box } from '@mui/system';

function index() {
  return (
    <div>
        <NavBar/>
        <WorkerProfile/>
    </div>
  )
}

export default index