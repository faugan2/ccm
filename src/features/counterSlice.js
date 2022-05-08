import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  
  page:0,
  type:0,
  sousType:0,
  login:false,
};



export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    
    
    setPage:(state,action)=>{
      state.page=action.payload;
    },
    setType:(state,action)=>{
      state.type=action.payload;
    },
    setSousType:(state,action)=>{
      state.sousType=action.payload;
    }
  },
 
});

export const { setPage,setType,setSousType } = counterSlice.actions;


export const selectPage = (state) => state.counter.page;
export const selectType=(state)=> state.counter.type;
export const selectSousType= (state) => state.counter.sousType;

export default counterSlice.reducer;
