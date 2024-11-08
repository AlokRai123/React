 import React from 'react'
 import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

const createElement = React.createElement(

  'a',
  {href: "https://google.com",target : "_blank"},
  'click me to visit google'
  
)




createRoot(document.getElementById('root')).render(

  createElement
 
)
