import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Acrobatics: 0,
  AnimalHandling: 0,
  Arcana: 0,
  Athletics: 0,
  Deception: 0,
  History: 0,
  Insight: 0,
  Intimidation: 0,
  Investigation: 0,
  Medicine: 0,
  Nature: 0,
  Perception: 0,
  Performance: 0,
  Persuasion: 0,
  Religion: 0,
  SleightOfHand: 0,
  Stealth: 0,
  Survival: 0,
  SkillTotal: 10,
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    addAcrobatics: (state) => {
      state.Acrobatics += 1;
      state.SkillTotal = state.SkillTotal - state.Acrobatics;
    },
    decAcrobatics: (state) => {
      if (state.Acrobatics > 0) {
        state.SkillTotal = state.SkillTotal + state.Acrobatics;
        state.Acrobatics -= 1;
      }
    },
    addAthletics: (state) => {
      state.Athletics += 1;
      state.SkillTotal = state.SkillTotal - state.Athletics;
    },
    decAthletics: (state) => {
      if (state.Athletics > 0) {
        state.SkillTotal = state.SkillTotal + state.Athletics;
        state.Athletics -= 1;
      }
    },
    addAnimalHandling: (state) => {
      state.AnimalHandling += 1;
      state.SkillTotal = state.SkillTotal - state.AnimalHandling;
    },
    decAnimalHandling: (state) => {
      if (state.AnimalHandling > 0) {
        state.SkillTotal = state.SkillTotal + state.AnimalHandling;
        state.AnimalHandling -= 1;
      }
    },
    addArcana: (state) => {
      state.Arcana += 1;
      state.SkillTotal = state.SkillTotal - state.Arcana;
    },
    decArcana: (state) => {
      if (state.Arcana > 0) {
        state.SkillTotal = state.SkillTotal + state.Arcana;
        state.Arcana -= 1;
      }
    },
    addDeception: (state) => {
      state.Deception += 1;
      state.SkillTotal = state.SkillTotal - state.Deception;
    },
    decDeception: (state) => {
      if (state.Deception > 0) {
        state.SkillTotal = state.SkillTotal + state.Deception;
        state.Deception -= 1;
      }
    },
    addHistory: (state) => {
      state.History += 1;
      state.SkillTotal = state.SkillTotal - state.History;
    },
    decHistory: (state) => {
      if (state.History > 0) {
        state.SkillTotal = state.SkillTotal + state.History;
        state.History -= 1;
      }
    },
    addInsight: (state) => {
      state.Insight += 1;
      state.SkillTotal = state.SkillTotal - state.Insight;
    },
    decInsight: (state) => {
      if (state.Insight > 0) {
        state.SkillTotal = state.SkillTotal + state.Insight;
        state.Insight -= 1;
      }
    },
    addIntimidation: (state) => {
      state.Intimidation += 1;
      state.SkillTotal = state.SkillTotal - state.Intimidation;
    },
    decIntimidation: (state) => {
      if (state.Intimidation > 0) {
        state.SkillTotal = state.SkillTotal + state.Intimidation;
        state.Intimidation -= 1;
      }
    },
    addInvestigation: (state) => {
      state.Investigation += 1;
      state.SkillTotal = state.SkillTotal - state.Investigation;
    },
    decInvestigation: (state) => {
      if (state.Investigation > 0) {
        state.SkillTotal = state.SkillTotal + state.Investigation;
        state.Investigation -= 1;
      }
    },
    addMedicine: (state) => {
      state.Medicine += 1;
      state.SkillTotal = state.SkillTotal - state.Medicine;
    },
    decMedicine: (state) => {
      if (state.Medicine > 0) {
        state.SkillTotal = state.SkillTotal + state.Medicine;
        state.Medicine -= 1;
      }
    },
    addNature: (state) => {
      state.Nature += 1;
      state.SkillTotal = state.SkillTotal - state.Nature;
    },
    decNature: (state) => {
      if (state.Nature > 0) {
        state.SkillTotal = state.SkillTotal + state.Nature;
        state.Nature -= 1;
      }
    },
    addPerception: (state) => {
      state.Perception += 1;
      state.SkillTotal = state.SkillTotal - state.Perception;
    },
    decPerception: (state) => {
      if (state.Perception > 0) {
        state.SkillTotal = state.SkillTotal + state.Perception;
        state.Perception -= 1;
      }
    },
    addPerformance: (state) => {
      state.Performance += 1;
      state.SkillTotal = state.SkillTotal - state.Performance;
    },
    decPerformance: (state) => {
      if (state.Performance > 0) {
        state.SkillTotal = state.SkillTotal + state.Performance;
        state.Performance -= 1;
      }
    },
    addPersuasion: (state) => {
      state.Persuasion += 1;
      state.SkillTotal = state.SkillTotal - state.Persuasion;
    },
    decPersuasion: (state) => {
      if (state.Persuasion > 0) {
        state.SkillTotal = state.SkillTotal + state.Persuasion;
        state.Persuasion -= 1;
      }
    },
    addReligion: (state) => {
      state.Religion += 1;
      state.SkillTotal = state.SkillTotal - state.Religion;
    },
    decReligion: (state) => {
      if (state.Religion > 0) {
        state.SkillTotal = state.SkillTotal + state.Religion;
        state.Religion -= 1;
      }
    },
    addSleightOfHand: (state) => {
      state.SleightOfHand += 1;
      state.SkillTotal = state.SkillTotal - state.SleightOfHand;
    },
    decSleightOfHand: (state) => {
      if (state.SleightOfHand > 0) {
        state.SkillTotal = state.SkillTotal + state.SleightOfHand;
        state.SleightOfHand -= 1;
      }
    },
    addStealth: (state) => {
      state.Stealth += 1;
      state.SkillTotal = state.SkillTotal - state.Stealth;
    },
    decStealth: (state) => {
      if (state.Stealth > 0) {
        state.SkillTotal = state.SkillTotal + state.Stealth;
        state.Stealth -= 1;
      }
    },
    addSurvival: (state) => {
      state.Survival += 1;
      state.SkillTotal = state.SkillTotal - state.Survival;
    },
    decSurvival: (state) => {
      if (state.Survival > 0) {
        state.SkillTotal = state.SkillTotal + state.Survival;
        state.Survival -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  addAcrobatics,
  decAcrobatics,
  addAnimalHandling,
  decAnimalHandling,
  addArcana,
  decArcana,
  addDeception,
  decDeception,
  addHistory,
  decHistory,
  addInsight,
  decInsight,
  addIntimidation,
  decIntimidation,
  addInvestigation,
  decInvestigation,
  addMedicine,
  decMedicine,
  addNature,
  decNature,
  addPerception,
  decPerception,
  addPerformance,
  decPerformance,
  addPersuasion,
  decPersuasion,
  addReligion,
  decReligion,
  addSleightOfHand,
  decSleightOfHand,
  addStealth,
  decStealth,
  addSurvival,
  decSurvival,
  addAthletics,
  decAthletics,
  incrementByAmount,
} = skillsSlice.actions;

export default skillsSlice.reducer;
