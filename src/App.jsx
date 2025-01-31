import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SortingTable } from './components/SortingTable'
import { FilteringTable } from './components/FilteringTable'

function App() {
  return (
    <div className='App'>
      <FilteringTable />
    </div>
  )
}

export default App
