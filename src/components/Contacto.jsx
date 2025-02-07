import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (

    <div className="container">
        <h1 className="main-title">Contacto</h1>
        <div className="formulario" onSubmit={handleSubmit(enviar)}>

            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu correo electrónico" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
            <textarea></textarea>
            <a href="mailto:cristianmaida@outlook.com" className="enviar" type="submit">Enviar</a>

        </div>
    </div>

  )
}

export default Contacto
