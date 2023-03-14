import Grid from "./components/Grid";
import Header from "./components/Header";
import {activities} from './assets/testData/demoData';

const TEST_DATA = activities;

function App() {
  console.log(activities);
  return (
    <>
      <Header />
      <Grid data />
    </>
  );
}

export default App;
