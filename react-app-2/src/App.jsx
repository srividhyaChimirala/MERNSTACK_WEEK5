import './App.css'
import Navbar from "./components/Navbar";
import UsersList from './components/UsersList';
import Footer from "./components/Footer";
import Counter from './Counter';
function App(){
  //state
  //return
  return(
  <div>
    <Navbar/>
     <div className="m-8 min-h-screen">
      <UsersList/>
     
  </div>
  
            <Counter/>     
          <Footer/>
        </div>
   
  )
}
export default App;