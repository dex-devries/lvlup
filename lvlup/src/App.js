import Grid from "./components/Grid";
import Header from "./components/Header";
import {activities} from './assets/testData/demoData';
import {parseData} from './dataHandler';

const TEST_DATA = activities;
const INIT_STATS_OBJ = parseData(TEST_DATA);

function App() {
  console.log("Stats object from parseData:");
  console.log(INIT_STATS_OBJ);
  return (
    <>
      <Header />
      <Grid data />
    </>
  );
}

export default App;
