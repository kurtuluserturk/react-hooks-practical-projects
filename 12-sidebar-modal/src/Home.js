import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  // const data = useContext(AppContext)  // aşağıda refactor edilmiş hali var.
  // const data = useGlobalContext()   // context.js' de oluşturduğumuz custom hook

  const { openSidebar, openModal } = useGlobalContext()

  return <main>
    <button className="sidebar-toggle" onClick={openSidebar} >
      <FaBars />
    </button>
    <button className="btn" onClick={openModal}>show modal</button>
  </main>
}

export default Home
