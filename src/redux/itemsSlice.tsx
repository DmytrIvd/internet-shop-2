import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../Entities/Item";
import { fetchData } from "./itemsApi";
import { RootState } from "./store";

export interface ItemsState {
    itemsIds: number[],
    items: Record<number, Item>,
    bascet: number[],
    status: "idle" | "loading" | "failed"
}

const initialState: ItemsState = {
    itemsIds: [],
    items: {},
    bascet: [],
    status: "idle"
}

export const loadMembersAsync = createAsyncThunk(
    "items/loadItems",
    async () => {
        const response = await fetchData();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Item>) => {
            state.itemsIds.push(action.payload.id);
            state.items[action.payload.id] = action.payload;
        },
        addInBascet: (state, action: PayloadAction<number>) => {
            console.log('123');
            if (!state.bascet.find(i => i == action.payload)) {
                state.bascet.push(action.payload);
            }
        },
        deleteFromBascet: (state, action: PayloadAction<number>) => {

            state.bascet = state.bascet.filter(i => i != action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadMembersAsync.pending, (state) => {
                //console.log('123');
                state.itemsIds = [];
                state.items = {};
                state.status = "loading";
            })
            .addCase(loadMembersAsync.fulfilled, (state, action) => {
                state.status = "idle";
                action.payload.forEach((member) => {
                    state.items[member.id] = member;
                    // console.log(member);
                    state.itemsIds.push(member.id);
                });
            });
    }
})

export const { addItem, addInBascet, deleteFromBascet } = itemsSlice.actions;

export const selectStatus = (state: RootState) => state.items.status;
export const selectItemsIds = (state: RootState) => state.items.itemsIds;
export const selectItem = (id: number) => (state: RootState) => state.items.items[id];
export const selectBascetItems = (state: RootState) => state.items.bascet;
export const constainBascetItem = (id: number) => (state: RootState) => { let val = state.items.bascet.includes(id); return val; };

export default itemsSlice.reducer;

