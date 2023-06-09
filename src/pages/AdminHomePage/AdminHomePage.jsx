import { useState } from 'react'
import AdminOfferList from '../../components/AdminOfferList/AdminOfferList'
import AdminUserList from '../../components/AdminUserList/AdminUserList'

import './AdminHomePage.css'

function AdminHomePage() {

    return (
        <div className='AdminHomePage__container--body'>
            <div className='AdminHomePage__container--list'>
                <h3>Users in database</h3>
                <AdminUserList />
            </div>
            <div className='AdminHomePage__container--list'>
                <h3>Offers in database</h3>
                <AdminOfferList />
            </div>
        </div>
    )
}

export default AdminHomePage