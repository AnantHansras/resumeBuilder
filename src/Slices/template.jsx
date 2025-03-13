import { createSlice } from '@reduxjs/toolkit';

const templateSlice = createSlice({
    name:'signup',
    initialState:{
        template : 1
    },
    reducers:{
        setTemplate(state,value) {
            state.template = value.payload
        }
    }
})

export const {setTemplate} = templateSlice.actions
export default templateSlice.reducer;