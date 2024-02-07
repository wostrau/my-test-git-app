import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { App } from './App.jsx'
import { QuizSettingsProvider } from './context/QuizSettingsContext.jsx'
import AppM from '../src/screens/Material.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizSettingsProvider>
      <AppM />
    </QuizSettingsProvider>
  </React.StrictMode>
)
