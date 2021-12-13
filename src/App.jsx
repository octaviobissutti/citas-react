import React, { useState, useEffect } from 'react';
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminandoPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados);
  } 
  
  //Vamos a averiguar si hay algo en el local storage
  useEffect(() => {
   const obtenerLS = () => {
     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; //Nos devuelve un objeto si hay algo y sino un array vacío.
     setPacientes(pacientesLS)
   }
   obtenerLS();
  }, [])
  
  //Si no hay nada en LS lo vamos a setear.
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes])

  return (
    <div className="container mx-auto mt-20">
    <Header />
    <div className="mt-12 md:flex">
      <Formulario  
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      />
      <ListadoPacientes 
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminandoPaciente={eliminandoPaciente}
      />

    </div>
    </div>
  )
}

export default App
