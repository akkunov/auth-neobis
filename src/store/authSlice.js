import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Auth} from "../service/AuthService.js";

export  const LoginUser = createAsyncThunk(
    'user/loginUser',
    async (data,{rejectWithValue}) => {
        try {
            const response = await Auth.login(data)
            console.log(response)

            return response.data
        }catch (e) {
            return  rejectWithValue(e?.response)
        }

    }
)

export  const RegisterUser = createAsyncThunk(
    'user/registerUser',
    async (data,{rejectWithValue}) => {
        try {
            const response = await Auth.register(data)
            console.log(response)

            return response.data
        }catch (e) {
            return  rejectWithValue(e?.response)
        }

    }
)


const initialState= {
    email: null,
    id: null,
    verification: null,
    accessToken: null,
    refreshToken: null,
    status: null,
    error: null
}
const AuthSlice =  createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state,action) =>{
            state.status= 'loading'
        })
        builder.addCase(LoginUser.fulfilled,(state, action) => {
            console.log(action.payload)
            state.email = action.payload.user.email;
            state.id = action.payload.user.id;
            state.token = action.payload?.accessToken;
            state.verification = action.payload.verification;
            localStorage.setItem('token',action.payload.accessToken);
            state.status= null
        })
        builder.addCase(LoginUser.rejected,(state, action) => {
            console.log(action.payload)
            state.error =  action.payload?.data.message|| "Ошибка соеднения c сервером"
            state.status= 'error'
        })

        builder.addCase(RegisterUser.pending, (state,action) =>{
            state.status= 'loading'
        })
        builder.addCase(RegisterUser.fulfilled,(state, action) => {
            console.log(action.payload)
            state.email = action.payload.user.email;
            state.id = action.payload.user.id;
            state.status= null;
            state.verification = action.payload.verification;
        })
        builder.addCase(RegisterUser.rejected,(state, action) => {
            console.log(action.payload)
            state.error =  action.payload?.data.message|| "Ошибка соеднения c сервером"
        })
    }

})

export default AuthSlice.reducer
