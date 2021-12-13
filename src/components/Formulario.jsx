import React, { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({pacientes, setPacientes, paciente}) => {

   const [mascota, setMascota] = useState('');
   const [propietario, setPropietario] = useState('');
   const [email, setEmail] = useState('');
   const [alta, setAlta] = useState('');
   const [sintomas, setSintomas] = useState('');

   const [error, setError] = useState(false);

   useEffect(() => {
     if(Object.keys(paciente).length > 0) { //Si el objeto paciente no tiene nada voy a querer que cuando apriete en editar lo pueda agregar al form.
        setMascota(paciente.mascota)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setAlta(paciente.alta)
        setSintomas(paciente.sintomas)
     }
   }, [paciente])
   
   const generarId = () => {
      const random = Math.random().toString(36).substr(2);
      const fecha = Date.now().toString(36);
      const id = random + fecha;
      return id;
   }

    const handleSubmit = e => {
       e.preventDefault();
         //Valido
         if([mascota, propietario, email, alta ,sintomas].includes('')) {
            console.log('Todos los campos son obligatorios')
            setError(true)
            return;
         }
         //Si pasó la validación lo dejo en false.
          console.log('Enviando...')
          //Reseteo el form
          setMascota('');
          setPropietario('')
          setEmail('')
          setAlta('')
          setSintomas('')

          //Oculto el componente de error.
          setError(false);

          //Objeto paciente
          const objetoPaciente = {
            mascota, 
            propietario, 
            email,
            alta,
            sintomas,
          };
          console.log(objetoPaciente)
         //  setPacientes(mascota)

         if(paciente.id) {
            objetoPaciente.id = paciente.id;
            const pacientesActualizados = pacientes.map( pacientesState => 
               paciente.id ? objetoPaciente : pacientesState)
               setPacientes(pacientesActualizados)
         } else {
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);

         }



    }
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form  
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
               {error ? <Error /> : null}
               <div className="mb-5">
                <label htmlFor ="mascota"className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
                <input 
                   id="mascota"
                   type="text"
                   placeholder="Nombre mascota"
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                   value={mascota}
                   onChange={ (e) => setMascota(e.target.value)}
                  
                />
                </div>

                <div className="mb-5">
                <label htmlFor ="propietario"className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
                <input 
                   
                   id="propietario"
                   type="text"
                   placeholder="Nombre propietario"
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                   value={propietario}
                   onChange={ (e) => setPropietario(e.target.value)}
                />
                </div>

                <div className="mb-5">
                <label htmlFor ="email"className="block text-gray-700 uppercase font-bold">Email</label>
                <input 
                   
                   id="email"
                   type="email"
                   placeholder="Email"
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                   value={email}
                   onChange={ (e) => setEmail(e.target.value)}
                />
                </div>

                <div className="mb-5">
                <label htmlFor ="alta"className="block text-gray-700 uppercase font-bold">Alta</label>
                <input 
                   
                   id="alta"
                   type="date"
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                   value={alta}
                   onChange={ (e) => setAlta(e.target.value)}
                />
                </div>

                <div className="mb-5">
                <label htmlFor ="Síntomas"className="block text-gray-700 uppercase font-bold">Síntomas</label>
                <textarea 
                  
                   id="sintomas"
                   className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                   placeholder="Describe los síntomas"
                   value={sintomas}
                   onChange={ (e) => setSintomas(e.target.value)}
                />
                </div>

                <input 
                   type="submit"
                   className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                   value= {paciente.id ? 'Editar paciente' : 'Agregar paciente'} //Si tiene id quiere decir que lo voy a editar, sino lo voy a agregar.
                />
            </form>
        </div>
    )
}

export default Formulario
