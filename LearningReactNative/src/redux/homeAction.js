import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppConstants } from "../constants";


export const fetchEpisodes = createAsyncThunk('fetchEpisodes',
    async (_,rejecWithValue)=>{

        try{
            const response = await axios.get(AppConstants.BASE_URL);
            return response.data;
        }
        catch(error){
            return rejecWithValue(error.message);
        }
        
    }
)