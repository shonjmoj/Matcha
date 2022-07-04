import { createSlice } from "@reduxjs/toolkit";


export const UserInterests = createSlice({
    name : 'UserInterests',
    initialState : 'empty',
    reducers : {
        setInterests : (data: string, interest : string) => {
            data = interest
        }
    }
})

export default UserInterests