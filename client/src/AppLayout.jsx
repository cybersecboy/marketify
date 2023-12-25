import React from 'react'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const AppLayout = () => {
    return (
        <Provider store={store}>
            <NavBar />
            <Outlet />
            <Footer />
        </Provider>
    )
}

export default AppLayout
