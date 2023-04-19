import React from 'react';
import Skill from './Skill';
import { useSelector, useDispatch } from 'react-redux';
import {
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
} from '../features/attributes/attributesSlice';

function Creator() {
  const dispatch = useDispatch();

  const { Siła, Zręczność, Kondycja, Inteligencja, Mądrość, Charyzma, Total } =
    useSelector((state) => state.attributes);

  const onClick = (e) => {
    dispatch(addSila());
  };
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
        <div className="atributs">
          <Skill text="Siła" value={Siła} add={addSila} dec={decSila} />
          <Skill
            text="Zręczność"
            value={Zręczność}
            add={addZrecznosc}
            dec={decZrecznosc}
          />
          <Skill
            text="Kondycja"
            value={Kondycja}
            add={addKondycja}
            dec={decKondycaj}
          />
          <Skill
            text="Inteligencja"
            value={Inteligencja}
            add={addInteligencja}
            dec={decInteligencja}
          />
          <Skill
            text="Mądrość"
            value={Mądrość}
            add={addMadrosc}
            dec={decMadrosc}
          />
          <Skill
            text="Charyzma"
            value={Charyzma}
            add={addCharyzma}
            dec={decCharyzma}
          />
        </div>
        <div className="skill">
          <Skill text="Atletyka" value={0} />
          <Skill text="Akrobatyka" value={0} />
          <Skill text="Złodziejstwo" value={0} />
          <Skill text="Ukrywanie się" value={0} />
          <Skill text="Ukrywanie się" value={0} />
          <Skill text="Wiedza o magii arkanicznej" value={0} />
          <Skill text="Wiedza o historii" value={0} />
          <Skill text="Śledztwo" value={0} />
          <Skill text="Wiedza o naturze" value={0} />
          <Skill text="Wiedza o religiach" value={0} />
          <Skill text="Opieka nad zwierzętami" value={0} />
          <Skill text="Wnikliwość" value={0} />
          <Skill text="Percepcja" value={0} />
          <Skill text="Sztuka przetrwania" value={0} />
          <Skill text="Kłamanie i oszukiwanie" value={0} />
          <Skill text="Zastraszanie" value={0} />
          <Skill text="Występ" value={0} />
          <Skill text="Perswazja" value={0} />
          <Skill text="Atletyka" value={0} />
        </div>
      </section>
      <button onClick={onClick} /> <div>{Total}</div>
    </div>
  );
}

export default Creator;
