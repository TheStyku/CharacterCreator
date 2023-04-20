import React from 'react';
import Skill from './Skill';
import { useSelector, useDispatch } from 'react-redux';
import {
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
} from '../features/attributes/attributesSlice';
import {
  addAthletics,
  decAthletics,
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
} from '../features/skills/skillsSlice';

function Creator() {
  const dispatch = useDispatch();

  const {
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma,
    AttributesTotal,
  } = useSelector((state) => state.attributes);

  const {
    Acrobatics,
    AnimalHandling,
    Arcana,
    Athletics,
    Deception,
    History,
    Insight,
    Intimidation,
    Investigation,
    Medicine,
    Nature,
    Perception,
    Performance,
    Persuasion,
    Religion,
    SleightOfHand,
    Stealth,
    Survival,
    SkillTotal,
  } = useSelector((state) => state.skills);

  return (
    <div className="creator">
      <section className="name-place">
        <div className="flex">
          <p>Nazwa:</p>
          <input type="text" />
        </div>
        <div className="flex">
          <p>Rasa:</p>
          <input type="text" />
        </div>
        <div className="flex">
          <p>Klasa:</p>
          <input type="text" />
        </div>
      </section>
      <section className="skill-place">
        <div className="atributs p1">
          <div>Atrybuty</div>
          <Skill
            text="Siła"
            value={Strength}
            add={addStrength}
            dec={decStrength}
          />
          <Skill
            text="Zręczność"
            value={Dexterity}
            add={addDexterity}
            dec={decDexterity}
          />
          <Skill
            text="Kondycja"
            value={Constitution}
            add={addConstitution}
            dec={decConstitution}
          />
          <Skill
            text="Inteligencja"
            value={Intelligence}
            add={addIntelligence}
            dec={decIntelligence}
          />
          <Skill
            text="Mądrość"
            value={Wisdom}
            add={addWisdom}
            dec={decWisdom}
          />
          <Skill
            text="Charyzma"
            value={Charisma}
            add={addCharisma}
            dec={decCharisma}
          />
        </div>
        <div className="skill p1">
          <Skill
            text="Atletyka"
            value={Athletics}
            add={addAthletics}
            dec={decAthletics}
          />
          <Skill
            text="Akrobatyka"
            value={Acrobatics}
            add={addAcrobatics}
            dec={decAcrobatics}
          />
          <Skill
            text="Złodziejstwo"
            value={SleightOfHand}
            add={addSleightOfHand}
            dec={decSleightOfHand}
          />
          <Skill
            text="Ukrywanie się"
            value={Stealth}
            add={addStealth}
            dec={decStealth}
          />
          <Skill
            text="Wiedza o magii arkanicznej"
            value={Arcana}
            add={addArcana}
            dec={decArcana}
          />
          <Skill
            text="Wiedza o historii"
            value={History}
            add={addHistory}
            dec={decHistory}
          />
          <Skill
            text="Śledztwo"
            value={Investigation}
            add={addInvestigation}
            dec={decInvestigation}
          />
          <Skill
            text="Wiedza o naturze"
            value={Nature}
            add={addNature}
            dec={decNature}
          />
          <Skill
            text="Wiedza o religiach"
            value={Religion}
            add={addReligion}
            dec={decReligion}
          />
          <Skill
            text="Opieka nad zwierzętami"
            value={AnimalHandling}
            add={addAnimalHandling}
            dec={decAnimalHandling}
          />
          <Skill
            text="Wnikliwość"
            value={Insight}
            add={addInsight}
            dec={decInsight}
          />
          <Skill
            text="Percepcja"
            value={Perception}
            add={addPerception}
            dec={decPerception}
          />
          <Skill
            text="Medycyna"
            value={Medicine}
            add={addMedicine}
            dec={decMedicine}
          />
          <Skill
            text="Sztuka przetrwania"
            value={Survival}
            add={addSurvival}
            dec={decSurvival}
          />
          <Skill
            text="Kłamanie i oszukiwanie"
            value={Deception}
            add={addDeception}
            dec={decDeception}
          />
          <Skill
            text="Zastraszanie"
            value={Intimidation}
            add={addIntimidation}
            dec={Intimidation}
          />
          <Skill
            text="Występ"
            value={Performance}
            add={addPerformance}
            dec={decPerformance}
          />
          <Skill
            text="Perswazja"
            value={Persuasion}
            add={addPersuasion}
            dec={decPersuasion}
          />
        </div>
      </section>
    </div>
  );
}

export default Creator;
