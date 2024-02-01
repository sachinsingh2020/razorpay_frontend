import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PaymentSuccess from './components/PaymentSuccess'

const App = () => {



  return (
    <div
      style={{
        background: "#015898"
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        </Routes>
      </Router>
    </div >
  )
}

export default App
