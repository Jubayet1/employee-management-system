import React, { useState } from 'react'
import Swal from 'sweetalert2'

import { employeesData } from '../../data/data'

import Edit from './Edit'
import Header from './Header'
import List from './List'
import Add from './Add'

const Dashboard = () => {
    const [employees, setEmployees] = useState(employeesData)
    const [selectedEmployees, setSelectedEmployees] = useState(null)
    const [isAdding, setIsAdding] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const handleEdit = () => {
        console.log("handle edit")
    }
    const handleDelete = () => {
        console.log("handle delete")
    }
    return (
        <div className='container'>
            {!isAdding && !isEditing && (
                <>
                    <Header />
                    <List
                        employees={employees}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {
                isAdding && (
                    <Add
                        employees={employees}
                        setEmployees={setEmployees}
                        setIsAdding={setIsAdding}
                    />
                )
            }
            {
                isEditing && (
                    <Edit
                        employees={employees}
                        selectedEmployees={selectedEmployees}
                        setEmployees={setEmployees}
                        setIsEditing={setIsEditing}
                    />
                )
            }
        </div>
    )
}

export default Dashboard