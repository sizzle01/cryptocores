import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import './App.css'
import {
  Navbar,
  Exchanges,
  HomePage,
  Cryptocurrencies,
  News,
  CryptoDetail,
  Support
} from './Components'
import 'antd/dist/antd.min.css'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/support" element={<Support />} />
              <Route exact path="/crypto/:coinId" element={<CryptoDetail />} />
              <Route exact path="/news" element={<News />} />
              
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: 'black', textAlign: 'center' }}
          >
            Cryptocore <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="./">Home</Link>
            <Link to="./exchanges">Cryptocurrencies</Link>
            <Link to="./news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App
