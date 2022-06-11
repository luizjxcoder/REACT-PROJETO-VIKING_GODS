import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost'
import UserStats from './UserStats'

const User = () => {
  return (
     <section className="container">
        <UserHeader />
        <Routes>
           <Route path="/" element={<Feed/>}/>
           <Route path="posta" element={<UserPhotoPost/>}/>
           <Route path="estatisicas" element={<UserStats/>}/>
        </Routes>
    </section>
  )
}

export default User;