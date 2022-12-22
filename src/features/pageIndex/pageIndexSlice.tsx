import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from '../../store'

export interface PageIndexState {
  value: number
}

const initialState: PageIndexState = {
  value: 1,
}

export const pageIndexSlice = createSlice({
  name: 'pageIndex',
  initialState,
  reducers: {
    changePageIndex: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const { changePageIndex } = pageIndexSlice.actions

export const selectPageIndex = (state: AppState) => state.pageIndex.value

export default pageIndexSlice.reducer
