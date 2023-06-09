import { useState } from 'react'
import AdminOfferList from '../../components/AdminOfferList/AdminOfferList'
import AdminUserList from '../../components/AdminUserList/AdminUserList'

import './AdminHomePage.css'

function AdminHomePage() {

    return (
        <div className='AdminHomePage__container--body'>
            <div className='AdminHomePage__container--list'>
                <AdminUserList />
            </div>
            <div className='AdminHomePage__container--list'>
                <AdminOfferList />
            </div>
        </div>
    )
}

export default AdminHomePage