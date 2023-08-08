// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <main>
        {/* the outlet is how to toggle through the children of the router */}
        <Outlet />
      </main>
    </>
  );
}

export default App;
