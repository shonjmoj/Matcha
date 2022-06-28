import { createSlice } from "@reduxjs/toolkit";

export interface RegistrationState {
    state: 'pending' | 'success' | 'inUSe' | 'techIssue'
}

const initialState: RegistrationState = {
    state : 'pending'
}

export const registrationSlice = createSlice({
    name: 'registrationState',
    initialState,
    reducers : {
        alreadyInUse: (data: RegistrationState) => {
            data.state = 'inUSe'
        },
        successfully : (data: RegistrationState) => {
            data.state = 'success'
        },
        techIssue : (data: RegistrationState) => {
            data.state = 'techIssue'
        }
    }
})

export const {alreadyInUse, successfully, techIssue} = registrationSlice.actions

export default registrationSlice.reducer