

import { useEffect } from 'react';

function App() {

  useEffect(() => {
    console.log(process.env)
  }, []);



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
