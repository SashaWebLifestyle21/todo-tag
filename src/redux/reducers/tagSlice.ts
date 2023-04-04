import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ITag {
    id: string
    text: string
}

export interface ITagState {
    tags: ITag[]
}

const initialState: ITagState = {
    tags: [],
}

export const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        createTag(state, action: PayloadAction<ITag>) {
            state.tags.push(action.payload)
        },
        removeTag(state, action: PayloadAction<string>) {
            state.tags = state.tags.filter(tag => tag.id !== action.payload)
        },
    }
})

export default tagSlice.reducer