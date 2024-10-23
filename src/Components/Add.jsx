import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { addEmployeeAPI } from '../services/allApi';
import Modal from '../Components/Modal';

const Add = ({ isModalOpen, handleCloseModal, refreshEmployees }) => {
    const [employeeDetails, setEmployeeDetails] = useState({
        eId: '', eName: '', eEmail: '', eStatus: ''
    });

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddEmployee = async () => {
        const { eId, eName, eEmail, eStatus } = employeeDetails;
        if (eId && eName && eEmail && eStatus) {
            try {
                const response = await addEmployeeAPI(employeeDetails);
                if (response.status >= 200 && response.status < 300) {
                    handleCloseModal();
                    setEmployeeDetails({ ...employeeDetails, eId: '', eName: '', eEmail: '', eStatus: '' });
                    alert("Employee added successfully");
                    refreshEmployees()
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("Please fill out the form completely");
        }
    };

    return (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <form className='border rounded-lg p-5' onSubmit={handleSubmit(handleAddEmployee)}>
                <input {...register('eId', { required: 'Employee Id is required', pattern: { value: /^[0-9]/, message: 'Enter 0-9 digits' } })} onChange={e => setEmployeeDetails({ ...employeeDetails, eId: e.target.value })} className='w-full border rounded text-md p-2 mb-2' type="text" placeholder='Employee Id' />
                {errors.eId && <p className="text-red-500 text-sm">{errors.eId.message}</p>}

                <input {...register('eName', { required: 'Employee Name is required' })} onChange={e => setEmployeeDetails({ ...employeeDetails, eName: e.target.value })} className='w-full border rounded text-md p-2 mb-2' type="text" placeholder='Employee Name' />
                {errors.eName && <p className="text-red-500 text-sm">{errors.eName.message}</p>}

                <input {...register('eEmail', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address', }, })} onChange={e => setEmployeeDetails({ ...employeeDetails, eEmail: e.target.value })} className='w-full border rounded text-md p-2 mb-2' type="email" placeholder='abc@gmail.com' />
                {errors.eEmail && <p className="text-red-500 text-sm">{errors.eEmail.message}</p>}

                <select {...register('eStatus', { required: 'Status is required' })} onChange={e => setEmployeeDetails({ ...employeeDetails, eStatus: e.target.value })} className="block w-full px-4 py-2 border-gray-300 rounded-md shadow-sm">
                    <option value="select" disabled>Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                {errors.eStatus && <p className="text-red-500 text-sm">{errors.eStatus.message}</p>}

                <button type='submit' className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-md me-2">Submit</button>
                <button onClick={handleCloseModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
            </form>
        </Modal>
    );
}

export default Add