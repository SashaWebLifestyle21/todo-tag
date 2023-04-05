import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../utils/getLocalStorage";
import { keyTagList } from "../../constants/keyLocalStorage";

export interface ITag {
    id: string
    text: string
}

export interface ITagState {
    tags: ITag[]
}


const initialState: ITagState = {
    tags: getLocalStorage(keyTagList) || [],
}

export const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        createTag(state, action: PayloadAction<ITag>) {
            const existTag = state.tags.find(tag => tag.text === action.payload.text)
            if(!existTag) {
                state.tags.push(action.payload)
                localStorage.setItem(keyTagList, JSON.stringify(state.tags))
            }
        },
        removeTag(state, action: PayloadAction<string>) {
            state.tags = state.tags.filter(tag => tag.id !== action.payload)
            localStorage.setItem(keyTagList, JSON.stringify(state.tags))
        },
    }
})

export default tagSlice.reducer