import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const setPosts = createAsyncThunk("posts/setPosts",async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    return data
})

const initialState = {
    total_posts:[],
    state:'',
    error:null
}

export const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
            .addCase(setPosts.pending,(state)=>{
                state.status = "loading"
            })
            .addCase(setPosts.fulfilled,(state,action)=>{
                state.status = "success"
                state.total_posts = action.payload
            })
            .addCase(setPosts.rejected,(state,action)=>{
                state.status="failed"
                state.error=action.error.message
            })
    }
})



export default postSlice.reducer