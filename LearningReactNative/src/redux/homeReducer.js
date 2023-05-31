import { createSlice } from "@reduxjs/toolkit";
import { fetchEpisodes } from "./homeAction";


export const homeSlice = createSlice({
    name: 'homeSlice',
    initialState:{
        loading:true,
        data:[],
        error:false
    },
    reducers:{
        setLoading:(state,action)=>{
            state.loading = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchEpisodes.fulfilled,(state,action)=>{
            state.error = false
            state.data = action.payload;
            state.loading = false
        })
        builder.addCase(fetchEpisodes.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(fetchEpisodes.rejected,(state,action)=>{
            state.error = true;
            state.loading = false
        })
    }
});

export const {setLoading} = homeSlice.actions;
export default homeSlice.reducer;