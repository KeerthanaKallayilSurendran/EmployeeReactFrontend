import React, { useState } from 'react';
import { updateEmployeeAPI } from '../services/allApi';
import Modal from '../Components/Modal';

const Edit = ({ isModalOpen, handleCloseModal, employee, refreshEmployees }) => {
    const [employeeDetails, setEmployeeDetails] = useState(employee);

    const handleEditEmployee = async (e) => {
        e.preventDefault();
        try {
            await updateEmployeeAPI(employeeDetails.id, employeeDetails);
            handleCloseModal();
            refreshEmployees();
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };

    return (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <form className='border rounded-lg p-5' onSubmit={handleEditEmployee}>
                <input value={employeeDetails.eId} onChange={e => setEmployeeDetails({ ...employeeDetails, eId: e.target.value })} className='w-full border rounded text-md p-2 mb-2' type="text" placeholder='Employee Id' readOnly />

                <input value={employeeDetails.eName} onChange={e => setEmployeeDetails({ ...employeeDetails, eName: e.target.value })} className='w-full border rounded text-md p-2 mb-2' type="text" placeholder='Employee Name' />

                <input value={employeeDetails.eEmail} onChange={e => setEmployeeDetails({ ...employeeDetails, eEmail: e.target.value })} className='w-full border rounded text-md p-2 mb-2' type="email" placeholder='abc@gmail.com' />

                <select value={employeeDetails.eStatus} onChange={e => setEmployeeDetails({ ...employeeDetails, eStatus: e.target.value })} className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

                <button type='submit' className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-md me-2">Submit</button>
                <button onClick={handleCloseModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
            </form>
        </Modal>
    );
}

export default Edit