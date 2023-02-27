import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

const userInfo = JSON.parse(localStorage.getItem("user")) || null;
const ChatPage = () => {

  if (!userInfo) {

    return <Navigate to="/" />

  }
  return (
    <div>ChatPage</div>
  )
}

export default ChatPage