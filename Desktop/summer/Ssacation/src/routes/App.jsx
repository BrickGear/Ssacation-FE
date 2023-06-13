import { Outlet } from 'react-router-dom';

import Home from "../components/Home"

function App() {
  return (
    <>
      <Outlet />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
