import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({ page: '', links: [] })

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text, coordinates) => {    // (text, coordinates) Navbar'daki (page, {center,bottom}) dan geliyor
        const page = sublinks.find(link => link.page === text)  // link.page teki page Navbar'dan geliyor.
        setPage(page)
        setLocation(coordinates)    // Buraya gelen (center,bottom)' a göre konumu belirleniyor
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider
        value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            openSubmenu,
            closeSidebar,
            closeSubmenu,
            location,
            page
        }}
    >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
