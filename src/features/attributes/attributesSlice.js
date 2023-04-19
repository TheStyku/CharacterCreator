import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Siła: 3,
  Zręczność: 3,
  Kondycja: 3,
  Inteligencja: 3,
  Mądrość: 3,
  Charyzma: 3,
  Total: 10,
};

export const attributesSlice = createSlice({
  name: 'attributes',
  initialState,
  reducers: {
    addSila: (state) => {
      state.Siła += 1;
      state.Total = state.Total - (state.Siła - 3);
    },
    decSila: (state) => {
      if (state.Siła > 3) {
        state.Total = state.Total + (state.Siła - 3);
        state.Siła -= 1;
      }
    },
    addZrecznosc: (state) => {
      state.Zręczność += 1;
    },
    decZrecznosc: (state) => {
      state.Zręczność -= 1;
    },
    addKondycja: (state) => {
      state.Kondycja += 1;
    },
    decKondycja: (state) => {
      state.Kondycja -= 1;
    },
    addInteligencja: (state) => {
      state.Inteligencja += 1;
    },
    decInteligencja: (state) => {
      state.Inteligencja -= 1;
    },
    addMadrosc: (state) => {
      state.Mądrość += 1;
    },
    decMadrosc: (state) => {
      state.Mądrość -= 1;
    },
    addCharyzma: (state) => {
      state.Charyzma += 1;
    },
    decCharyzma: (state) => {
      state.Charyzma -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  addSila,
  decSila,
  addZrecznosc,
  decZrecznosc,
  addKondycja,
  decKondycaj,
  addInteligencja,
  decInteligencja,
  addMadrosc,
  decMadrosc,
  addCharyzma,
  decCharyzma,
  incrementByAmount,
} = attributesSlice.actions;

export default attributesSlice.reducer;
