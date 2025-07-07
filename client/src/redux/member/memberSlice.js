import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    members: []
};

export const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        setMembers: (state, action) => {
            state.members = action.payload;
        },
        addMember: (state, action) => {
            state.members.push(action.payload)
        },
        updateMember: (state, action) => {
            const member = action.payload;
            const index = state.members.findIndex(m => m.id === member.id);
            if (index !== -1) {
                state.members[index] = member; // Update existing member
            } else {
                state.members.push(member); // Add new member
            }
        },
        deleteMember: (state, action) => {
            state.members = state.members.filter(m => m.id !== action.payload)
        }

    }
})

export const { setMembers, addMember, updateMember, deleteMember } = memberSlice.actions;

export default memberSlice.reducer;