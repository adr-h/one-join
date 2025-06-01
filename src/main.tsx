// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { runQuery } from './service/database/runQuery.ts'
import { resetDb } from './service/database/dbConn.ts'

createRoot(document.getElementById('root')!).render(
  // <StrictMode> //StrictMode causes the editor to be rendered twice ...
  <App execQuery={runQuery} resetDbState={resetDb} />
  // </StrictMode>,
)
