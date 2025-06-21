import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUrlData = createAsyncThunk('fetchData', async (url)=>{
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch request(')
    };
    const data = await response.json();
    return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: 'Enter URL and click Get to see results',
    status: 'idle',
    error: null
  },
  reducers: {
    remove: state=>{
        state.data = null;
    }
  },
  extraReducers: builder => {
    builder
        .addCase(fetchUrlData.pending, (state)=>{
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchUrlData.fulfilled, (state, action)=>{
            state.status = 'successed';
            state.data = action.payload;
        })
        .addCase(fetchUrlData.rejected, (state, action)=>{
            state.status = 'failed';
            state.error = action.error.message;
        })
  }
});

export const {remove} = dataSlice.actions;
export default dataSlice.reducer;
