import Grid from "./components/Grid";
import Header from "./components/Header";
import { activities } from "./assets/testData/demoData";
import { parseData } from "./dataHandler";
import React, { useState, useEffect } from "react";

const TEST_DATA = activities;

const LOCAL_STORAGE_KEY = "user.stats";

function App() {
  let dynamicStatsObj = parseData(TEST_DATA);
  let activitiesList = TEST_DATA;
  // console.log("dynamicStats object from parseData:");
  // console.log(dynamicStatsObj);

  // state for stats
  const [stats, setStats] = useState(dynamicStatsObj);

  // useEffect for local data storage
  // runs once at page load - init
  useEffect(() => {
    const storedStats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (localStorage.getItem(LOCAL_STORAGE_KEY)) setStats(storedStats);
  }, []);

  // runs whenever stats is modified (state change) 
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stats));
  }, [stats]);

  // useEffect(() => {
  //   const storedStats = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   setStats(storedStats);
  // }, [])

  // function to pass to Grid for data retreival
  const addUserData = (newData) => {
    // update activitiesList NOTE: could use parseData here but that would iter entire list
    activitiesList.push(newData);
    // only runs expensive parseData operation on the new data
    let stats = parseData([newData]);
    // console.log("Stats object from parseData:");
    // console.log(stats);

    // update dynamicStatsObject with new scores - only updates one attribute and power, saves iterating through all
    dynamicStatsObj[newData.attribute]["xp"] += stats[newData.attribute]["xp"];
    dynamicStatsObj[newData.attribute]["level"] +=
      stats[newData.attribute]["level"] - 1;
    // update power
    dynamicStatsObj["power"]["xp"] += stats["power"]["xp"];
    dynamicStatsObj["power"]["level"] += stats["power"]["level"] - 1;

    // TESTING
    // console.log("Stats object after add:");
    // console.log(dynamicStatsObj);

    // update state and activities list
    // setUserData([...userData, newData]);
    setStats(dynamicStatsObj);
  };

  // Header component: logo
  // stats, addUserData function -> Grid component
  return (
    <>
      <Header />
      <Grid stats={stats} dataHandler={addUserData} />
    </>
  );
}

export default App;
