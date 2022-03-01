// import { Routes, Route } from 'react-router-dom';

import './App.css';
import OilsList from './OilsList';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Container } from 'reactstrap'
import { useState, useEffect } from 'react'



function App() {
  const [oils, setOils]= useState({})
  const BASE_URL= "http://localhost:8000/api/oils/"

  useEffect(()=> {
      getOils()
  }, [])


  const getOils= () => {
      axios.get(BASE_URL).then((res)=> {
          console.log(res.data)
          setOils(res.data)
          console.log(oils)
      })
  }




  return (
    <>
    <div className="app-container">
      <Container>
      <Header/>
      {/* <Routes>
        <Route path="/" element={ <OilsList /> } /> */}
          <OilsList oils={oils}/>
      {/* </Routes> */}
      </Container>
      </div>
    </>
  );
}

export default App;
