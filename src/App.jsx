import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Homepge from './components/empHompge/homepage'
import Providers from './components/contexts/providers'
import Newemp from './components/addnewEmpupdate/newemp'
import Updatempdata from './components/addnewEmpupdate/updateEmpdata'

import Ques1 from './sectionBques/LoyaltypntCal'

function App() {
 

  return (

     <BrowserRouter>
     <Providers>

     <Routes>
         <Route path="/" element={<Homepge/>}/>
         <Route path="setnewemp" element={<Newemp/>}/>
         <Route path="updateempdata/:id" element={<Updatempdata/>}/>
         <Route path="ques" element={<Ques1/>}/>
     </Routes>

     
     </Providers>
     </BrowserRouter>

  );
}

export default App
