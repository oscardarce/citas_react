import { useState, useEffect } from "react";
import Error from "./Error";
import Paciente from "./Paciente";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  //Escuchar por los cambios que sucedan
  useEffect(()=>{
    if(Object.keys(paciente).length>0){
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación del formulario
    if([nombre,propietario,email,fecha,sintomas].includes("")){
      console.log("Hay al menos un espacio vacio")
      setError(true)
      return
    }
      setError(false)
      
    //Objeto de Paciente
    const objetoPaciente = {  
      nombre,
      propietario,
      email,
      fecha,
      sintomas
    }

    if(paciente.id){
    //Editando el registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
      setPacientes(pacientesActualizados)
      setPaciente({})
  } else {
    //Creando registro
      objetoPaciente.id = generarId()

      setPacientes([...pacientes, objetoPaciente]);
    }
      

    //Reiniciar el form
    setNombre("")
    setPropietario("")
    setEmail("")
    setFecha("")
    setSintomas("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">

        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-xl mt-5 mb-10 font-bold text-center">Añade pacientes y {" "}
          <span className="text-indigo-600 mb-10">Administralos</span>
        </p>

        <form onSubmit={handleSubmit} action="" className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10 mx-3">

          { error && <Error mensaje="Todos los campos son obligatorios"/> }

          <div className="mb-5">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota:</label>
            <input value={nombre} onChange={(e)=>{setNombre(e.target.value)}} id="mascota" type="text" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder:grey-400 rounded-lg"/>
          </div>

          <div className="mb-5">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
            <input value={propietario} onChange={(e)=>{setPropietario(e.target.value)}} id="propietario" type="text" placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder:grey-400 rounded-lg"/>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" type="email" placeholder="Email" className="border-2 w-full p-2 mt-2 placeholder:grey-400 rounded-lg"/>
          </div>

          <div className="mb-5">
            <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
            <input value={fecha} onChange={(e)=>{setFecha(e.target.value)}} id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder:grey-400 rounded-lg"/>
          </div>

          <div className="mb-5">
            <label  htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
            <textarea value={sintomas} onChange={(e)=>{setSintomas(e.target.value)}} placeholder="Describe los sintomas" name="" id="sintomas" cols="30" rows="10" className="border-2 w-full p-2 mt-2 placeholder:grey-400 rounded-lg"/>
          </div>

          <input type="submit" value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-all"/>

        </form>

    </div>
  )
}

export default Formulario
