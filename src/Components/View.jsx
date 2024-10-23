import React from 'react'

const View = ({ employees, onEdit, onDelete }) => {
    return (
        <table className="table border border-gray-200 divide-x">
            <thead>
                <tr className='divide-x'>
                    <th className='px-5 py-2 text-md text-sky-600 font-bold uppercase'>Id</th>
                    <th className='px-5 py-2 text-md text-sky-600 font-bold uppercase'>User</th>
                    <th className='px-5 py-2 text-md text-sky-600 font-bold uppercase'>Email</th>
                    <th className='px-5 py-2 text-md text-sky-600 font-bold uppercase'>Status</th>
                    <th className='px-5 py-2 text-md text-emerald-600'>Edit</th>
                    <th className='px-5 py-2 text-md text-red-600'>Delete</th>
                </tr>
            </thead>
            <tbody>
                {employees?.length > 0 ? employees.map(employee => (
                    <tr key={employee?.id} className='border divide-x'>
                        <td className='px-5 py-2 text-md'>{employee?.eId}</td>
                        <td className='px-5 py-2 text-md'>{employee?.eName}</td>
                        <td className='px-5 py-2 text-md'>{employee?.eEmail}</td>
                        <td className='px-5 py-2 text-md'>{employee?.eStatus}</td>
                        <td className='px-5 py-2 text-md text-emerald-600'>
                            <button onClick={() => onEdit(employee)}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>
                        </td>
                        <td className='px-5 py-2 text-md text-red-600'>
                            <button onClick={() => onDelete(employee?.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="6" className='text-red-700 font-bold p-5'>No Employees yet !!!</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default View