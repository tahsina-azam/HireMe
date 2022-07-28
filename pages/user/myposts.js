import React from 'react'
import PostCard from '../../src/components/post/postcard'
import NavBar from "../../src/components/App-Bar/userAppbar"

function myposts() {
 
  return (
    <div>
      <NavBar/>
      <PostCard />
      </div>
  )
}

export default myposts