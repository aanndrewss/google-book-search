import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    books: [],
    startIndex: 1,
    totalBooksCount: 0,
    isLoading: false,
    filter: {
        term: '',
        orderBy: 'relevance'
    },
    error: ''
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        booksFetching(state) {
            state.isLoading = true
        },
        booksFetchingSuccess(state, action) {
            state.isLoading = false
            state.error = ''
            state.books = action.payload
        },
        booksFetchingError(state, action) {
            state.isLoading = false
            state.error = action.payload
        },
        setTotalBooksCount(state, action){
            state.totalBooksCount = action.payload
        },
        loadMore(state){
            state.startIndex += 32
        },
        setFilter(state, action){
            state.filter = action.payload
        }
    }
})

export default bookSlice.reducer