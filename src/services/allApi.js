import commonApi from "./commonApi"
import SERVER_URL from "./serverUrl"

export const addEmployeeAPI = async (employee) => {
    return await commonApi("POST", `${SERVER_URL}/employeeDetails`, employee)
}

export const viewEmployeeAPI = async () => {
    return await commonApi("GET", `${SERVER_URL}/employeeDetails`, "")
}

export const removeEmployeeAPI = async (id) => {
    return await commonApi("DELETE", `${SERVER_URL}/employeeDetails/${id}`, {})
}

// Corrected API with id in the URL
export const updateEmployeeAPI = async (id, updateEmployeeDetails) => {
    return await commonApi("PUT", `${SERVER_URL}/employeeDetails/${id}`, updateEmployeeDetails);
}
