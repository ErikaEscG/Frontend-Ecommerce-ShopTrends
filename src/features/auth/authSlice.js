import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: user || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

/* export const register = createAsyncThunk('auth/registrer', async (user, thunkApi) => {
  try {
    return await autyhService.registrer(user)

  } catch (error)
}) */

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    }
  }
  /* extraReducers: () => {

  }  */
}
)

export const { reset } = authSlice.actions

export default authSlice.reducer
