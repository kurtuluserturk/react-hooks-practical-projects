/*
  Bu projenin final dosyasında reducer ve context' e göz at.
  Çünkü increase ve decrese işlemini toggleAmount adı altında
refactor ettik. Final' daki kodlar daha profesyonel.
  Ayrıca reducer'da throw ile action type hatası verdik.
  https://www.youtube.com/watch?v=a_7Z7C_JCyo  7.33.30 'da başlıyor
*/

import React from 'react'
import { useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const { loading } = useGlobalContext()
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
