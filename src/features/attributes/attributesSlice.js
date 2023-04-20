import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Strength: 3,
  Dexterity: 3,
  Constitution: 3,
  Intelligence: 3,
  Wisdom: 3,
  Charisma: 3,
  AttributesTotal: 10,
};

export const attributesSlice = createSlice({
  name: 'attributes',
  initialState,
  reducers: {
    addStrength: (state) => {
      state.Strength += 1;
      state.AttributesTotal = state.AttributesTotal - (state.Strength - 3);
    },
    decStrength: (state) => {
      if (state.Strength > 3) {
        state.AttributesTotal = state.AttributesTotal + (state.Strength - 3);
        state.Strength -= 1;
      }
    },
    addDexterity: (state) => {
      state.Dexterity += 1;
      state.AttributesTotal = state.AttributesTotal - (state.Dexterity - 3);
    },
    decDexterity: (state) => {
      if (state.Dexterity > 3) {
        state.AttributesTotal = state.AttributesTotal + (state.Dexterity - 3);
        state.Dexterity -= 1;
      }
    },
    addConstitution: (state) => {
      state.Constitution += 1;
      state.AttributesTotal = state.AttributesTotal - (state.Constitution - 3);
    },
    decConstitution: (state) => {
      if (state.Constitution > 3) {
        state.AttributesTotal =
          state.AttributesTotal + (state.Constitution - 3);
        state.Constitution -= 1;
      }
    },
    addIntelligence: (state) => {
      state.Intelligence += 1;
      state.AttributesTotal = state.AttributesTotal - (state.Intelligence - 3);
    },
    decIntelligence: (state) => {
      if (state.Intelligence > 3) {
        state.AttributesTotal =
          state.AttributesTotal + (state.Intelligence - 3);
        state.Intelligence -= 1;
      }
    },
    addWisdom: (state) => {
      state.Wisdom += 1;
      state.AttributesTotal = state.AttributesTotal - (state.Wisdom - 3);
    },
    decWisdom: (state) => {
      if (state.Wisdom > 3) {
        state.AttributesTotal = state.AttributesTotal + (state.Wisdom - 3);
        state.Wisdom -= 1;
      }
    },
    addCharisma: (state) => {
      state.Charisma += 1;
      state.AttributesTotal = state.AttributesTotal - (state.Charisma - 3);
    },
    decCharisma: (state) => {
      if (state.Charisma > 3) {
        state.AttributesTotal = state.AttributesTotal + (state.Charisma - 3);
        state.Charisma -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  addCharisma,
  addConstitution,
  addDexterity,
  addIntelligence,
  addStrength,
  addWisdom,
  decCharisma,
  decConstitution,
  decDexterity,
  decIntelligence,
  decStrength,
  decWisdom,
  incrementByAmount,
} = attributesSlice.actions;

export default attributesSlice.reducer;
