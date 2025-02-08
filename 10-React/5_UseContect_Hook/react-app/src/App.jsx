import { createContext, useState } from 'react'
import './App.css'
import BoxA from './BoxA';

// By using the Context API along with the useContext hook,
//We can directly access the value of the context in any child 
// component without passing it explicitly as a prop. 
// This is one of the primary benefits of React Context: 
// it eliminates the need for "prop drilling.


const creatTheme = createContext();

function App() {
  const [isTheme, setisTheme] = useState(false);
  return (
    <>
     <creatTheme.Provider value={{isTheme,setisTheme}}>
      <div className="box" style={{backgroundColor:isTheme?"gray":""}} >
        <BoxA/>
      </div>
 
     </creatTheme.Provider>
    </>
  )
}

export default App;
export { creatTheme };


