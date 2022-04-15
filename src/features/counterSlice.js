import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  
  page:0,
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
    
    setPage:(state,action)=>{
      state.page=action.payload;
    }
  },
 
});

export const { setPage } = counterSlice.actions;


export const selectPage = (state) => state.counter.page;


export default counterSlice.reducer;
