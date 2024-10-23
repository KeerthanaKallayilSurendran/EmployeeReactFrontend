import React, { useEffect, useState } from 'react';
import { removeEmployeeAPI, viewEmployeeAPI } from '../services/allApi';
import AddEmployee from '../Components/Add';
import EditEmployee from '../Components//Edit';
import EmployeeTable from '../Components/View';

const Home = () => {
    const [allEmployee, setAllEmployee] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        getAllEmployee();
    }, []);

    const getAllEmployee = async () => {
        try {
            const response = await viewEmployeeAPI();
            setAllEmployee(response.data);
            setVideoDetails({ ...videoDetails, caption: "", url: "", link: "" })

        } catch (error) {
            console.error(error);
        }
    };

    const deleteEmployee = async (id) => {
        await removeEmployeeAPI(id);
        getAllEmployee();
    };

    const handleOpenAddModal = () => {
        setIsAddModalOpen(true);
    };

    const handleOpenEditModal = (employee) => {
        setSelectedEmployee(employee);
        setIsEditModalOpen(true);
    };

    const handleCloseAddModal = () => setIsAddModalOpen(false);
    const handleCloseEditModal = () => setIsEditModalOpen(false);

    return (
        <div className='pt-[80px]'>
            <h1 className='text-5xl text-center font-bold text-sky-600 p-5'>Employee List</h1>
            <div className='flex justify-center items-center flex-col'>


                <div className='text-right pe-10 mb-2 w-2/5'><button onClick={handleOpenAddModal}><i className="fa-solid fa-user-plus text-red-500 text-2xl"></i></button></div>
                <EmployeeTable employees={allEmployee} onEdit={handleOpenEditModal} onDelete={deleteEmployee} />

                <AddEmployee isModalOpen={isAddModalOpen} handleCloseModal={handleCloseAddModal} refreshEmployees={getAllEmployee} />

                {selectedEmployee && (
                    <EditEmployee isModalOpen={isEditModalOpen} handleCloseModal={handleCloseEditModal} employee={selectedEmployee} refreshEmployees={getAllEmployee} />
                )}
            </div>
        </div>
    );
};

export default Home;
