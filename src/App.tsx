import React from 'react';
import { WelcomePage } from './components/Pages/WelcomePage';
import { Route, Routes} from "react-router-dom";
import { MainPage } from './components/Pages/MainPage';
import { AddPointPage } from './components/Pages/AddPointPage';
import { ListPointPage } from './components/Pages/ListPointPage';
import { Layout } from './components/Layout';
import { PointsProvider } from './context/contextProvider';

const App:React.FC = () => {
  return (
    <>
 <PointsProvider>
      <Routes>
            <Route index element={<WelcomePage/>}/>
          <Route path="/" element={<Layout/>}>
              <Route path="/main" element={<MainPage/>}/>
              <Route path="/add" element={<AddPointPage/>}/>
              <Route path="/list" element={<ListPointPage/>}/>
        </Route>
      </Routes>
</PointsProvider>
</>
  );
}

export default App;
