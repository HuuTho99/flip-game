import { useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Timeline from "./components/Timeline";

import data from "./data";

const AppStyled = styled.div`
  max-width: 1200px;
  margin: auto;
  .title {
    text-align: center;
    font-size: 3.5rem;
  }
  .result {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  .list-card {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .card {
      width: 12rem;
      height: 12rem;
      padding: 1rem;
    }
  }
`;

function App() {
  const [currentChoose, setCurrentChoose] = useState([]);
  const [listDone, setListDone] = useState([]);
  const [countFlip, setCountFlip] = useState(0);

  const handleChooseCurrent = (current) => {
    const checkCurrent = currentChoose.findIndex(
      (item) => item.id === current.id
    );
    const checkDone = listDone.findIndex((item) => item === current.id);

    if (checkDone !== -1) {
      return;
    }
    if (checkCurrent !== -1) {
      return;
    }
    setCurrentChoose((prev) => [...prev, current]);

    if (currentChoose.length === 1) {
      setCountFlip(countFlip + 1);
      if (currentChoose[0].code === current.code) {
        setTimeout(() => {
          setListDone((prev) => [...prev, currentChoose[0].id, current.id]);
        }, 1000);
      }
      setTimeout(() => {
        setCurrentChoose([]);
      }, 1000);
      return;
    }
  };
  // console.log(listDone);
  return (
    <AppStyled>
      <h1 className="title">Game Lật Mặt</h1>
      <Timeline countFlip={countFlip} />
      <div className="list-card">
        {data.map((item) => (
          <div key={item.id} className="card">
            <Card
              image={item.image}
              card={item}
              currentChoose={
                currentChoose[0]?.id === item.id ||
                currentChoose[1]?.id === item.id
                  ? true
                  : false
              }
              setCurrentChoose={(value) => handleChooseCurrent(value)}
              isDone={
                listDone.findIndex((doneItem) => doneItem === item.id) === -1
                  ? false
                  : true
              }
            />
          </div>
        ))}
      </div>
    </AppStyled>
  );
}

export default App;
