

// import Body from "./components/Body"
import { Route,Routes } from 'react-router-dom'
import Body from './components/Body'
// import Header from './components/Header'
function App() {


  return (
    <>
      <>
      <Routes>
        <Route path="/" element={<Body/>}/>
        {/* <Route path="body" element={<Header/>}/> */}
      </Routes>
      </>
    </>
  )
}

export default App
