import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {     // Eğer bu children olmasaydı hata alırdık
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return <AppContext.Provider
        value={{
            isModalOpen,
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            openModal,
            closeModal,
        }}>
        {children}       {/* Eğer bu children olmasaydı boş ekran görürdük */}
    </AppContext.Provider>
}

// custom hook
export const useGlobalContext = () => {     // custom hook olsa bile başında use kelimesi zorunlu.
    return useContext(AppContext)
}

export { AppContext, AppProvider }