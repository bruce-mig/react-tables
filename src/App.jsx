import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SortingTable } from './components/SortingTable'
import { FilteringTable } from './components/FilteringTable'
import { PaginationTable } from './components/PaginationTable'

function App() {
   return (
      <div className='App'>
         <PaginationTable />
      </div>
   )
}

export default App
