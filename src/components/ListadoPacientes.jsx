import Paciente from "./Paciente";


const ListadoPacientes = ({ pacientes, setPaciente, eliminandoPaciente }) => {
  console.log("pacientes", pacientes);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y">
      {pacientes.length > 0 ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              Pacientes y citas
            </span>
          </p>
          {pacientes &&
            pacientes.map((el, key) => <Paciente 
            el={el} 
            key={el.id}
            setPaciente={setPaciente}
            eliminandoPaciente={eliminandoPaciente}
            />)}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agregue pacientes y{""}
            <span className="text-indigo-600 font-bold "> agende sus citas</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
