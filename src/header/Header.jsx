import { useState, useEffect } from 'react';
import logo from '../img/logo.png'
import logomini from '../img/logomini.png'
import '../style/style.css'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea, Typography, Rating, Alert } from "@material-tailwind/react";
import axios from 'axios';
import { TbLayoutNavbarExpandFilled } from "react-icons/tb"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [empresa, setEmpresa] = useState(false);
    const [productos, setProductos] = useState(false);
    const [servicios, setServicio] = useState(false);

    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav className="desvanecer fixed bg-transparent z-50 w-full py-2 ">
                <div className="container mx-auto md:flex md:justify-between md:items-center ">

                    <div className={`${!isMobile ? 'block ' : 'hidden'} `}>
                        <img src={logo} alt='logo' className='size-20 w-52' />
                    </div>

                    <div className="md:hidden flex justify-between items-center">

                        <div className="text-white">
                            <img src={logomini} alt='logo' className='size-20 p-2' />
                        </div>

                        <button
                            onClick={toggleNavbar}
                            className="text-white focus:outline-none "
                        >
                            <svg
                                className="h-8 w-8 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div className={`md:flex md:items-center ${isOpen ? 'block ' : 'hidden'} `} >

                        <div className={`navbar text-xl flex ${isOpen ? 'flex-col' : ''}  items-center justify-center`}>

                            <a href='/' className="text-black hover:text-green-300 px-2 py-2 transition duration-300 ease-in-out hover:scale-110 hover:underline ">
                                Inicio
                            </a>

                            <div className=" relative text-left font-sans ">
                                <div href="/" onMouseEnter={() => setEmpresa(true)} onMouseLeave={() => setEmpresa(false)}
                                    className="text-black hover:text-green-300 px-2 py-2 transition duration-300 hover:scale-110 cursor-pointer hover:underline"
                                    id="options-menu"
                                >
                                    Empresa
                                </div>
                                {empresa && (
                                    <div onMouseEnter={() => setEmpresa(true)} onMouseLeave={() => setEmpresa(false)} className="origin-top-right absolute -left-5 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                        <div
                                            className="py-2 fade"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="options-menu"
                                        >
                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                                                role="menuitem"
                                            >
                                                Quienes somos
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                                                role="menuitem"
                                            >
                                                Vision
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                                                role="menuitem"
                                            >
                                                Mision
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                                                role="menuitem"
                                            >
                                                Objetivo de calidad
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100"
                                                role="menuitem"
                                            >
                                                Reciclaje
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="relative text-left">
                                <div href="/" onMouseEnter={() => setServicio(true)} onMouseLeave={() => setServicio(false)}
                                    className="text-black hover:text-green-300 px-2 py-2 transition duration-300 hover:scale-110 hover:underline z-0 cursor-pointer"
                                    id="options-menu"
                                >
                                    Servicios
                                </div>
                                {servicios && (
                                    <div onMouseEnter={() => setServicio(true)} onMouseLeave={() => setServicio(false)}
                                        className="origin-top-right absolute md:-left-72 md:w-[40vw] w-60 -left-16 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                                    >
                                        <div
                                            className="py-2 md:flex md:flex-wrap md:justify-evenly md:items-center md:gap-3 "
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="options-menu"
                                        >
                                            <a
                                                href="/"
                                                className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Computadores a la medida
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Telefonia movil-voip
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Camara de seguridad y familiar
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Redes sociales
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                electricos
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Software educativo
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="relative text-left">
                                <div href="/" onMouseEnter={() => setProductos(true)} onMouseLeave={() => setProductos(false)}
                                    className="text-black hover:text-green-300 px-2 py-2 transition duration-300 hover:scale-110 hover:underline z-0 cursor-pointer"
                                    id="options-menu"
                                >
                                    Productos
                                </div>
                                {productos && (
                                    <div onMouseEnter={() => setProductos(true)} onMouseLeave={() => setProductos(false)} className="origin-top-right absolute -left-16 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                        <div
                                            className="py-2"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="options-menu"
                                        >
                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Computadores a la medida
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Telefonia movil-voip
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Camara de seguridad y familiar
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Redes sociales
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                electricos
                                            </a>
                                            <a
                                                href="/"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                role="menuitem"
                                            >
                                                Software educativo
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <a href="/"
                                className="text-black hover:text-green-300 px-2 py-2 transition duration-300 ease-in-out hover:scale-110 hover:underline">
                                Tienda
                            </a>

                            <button
                                onClick={() => setOpen(!open)}
                                className="text-black hover:text-green-300 px-2 py-2 transition duration-300 ease-in-out hover:scale-110 hover:underline"
                            >Contactanos</button>


                        </div>


                    </div>
                </div>
            </nav>
            <Message open={open} handler={() => setOpen(!open)} />
        </div>
    )
}

function Message(props) {

    const [nombre, setNombre] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [puntaje, setPuntaje] = useState(4)

    const Guardar = () => {
        const con = [nombre, telefono, email, mensaje, puntaje]
        const contact = con.filter((vacio) => vacio !== "")
        console.log(contact)
        if (contact.length != 5) {
            alert("Por favor llenar todos los campos")
        } else {
            axios.post("http://localhost:3000/api/contact", {
                name: nombre,
                phone: telefono,
                email: email,
                message: mensaje,
                score: puntaje,
            })
                .then((response) => {
                    console.log(response.data.message);
                    alert(response.data.message)
                    window.location.reload();
                })
                .catch((error) => {
                    alert("Error en la para guardar, intentelo de nuevo o mas tarde", error)
                })


        }

    }

    return (
        <Dialog {...props} size="md">
            <div className="flex items-center justify-between">
                <DialogHeader className="flex flex-col items-start">
                    {" "}
                    <Typography className="text-3xl" variant="h4">
                        Quisieramos saber mas de ti!
                    </Typography>
                </DialogHeader>
                <svg

                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-3 h-5 w-5 cursor-pointer"
                    onClick={props.handler}
                >
                    <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <hr />
            <DialogBody>
                <Typography className="mb-5 text-md " color="gray" variant="lead">
                    Nos encantaría conocer tu opinión sobre nuestra página.<br /> ¿Podrías darnos una puntuación y decirnos si necesitas algún asesoramiento?
                </Typography>
                <div className="grid gap-6">
                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Credenciales
                    </Typography>

                    <Input value={nombre} onChange={(e) => setNombre(e.target.value)} type='text' label="Nombre completo" variant="standard" />
                    <Input value={telefono} onChange={(e) => setTelefono(e.target.value)} type='number' label="Telefono" variant="standard" />
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} type='email' label="Correo Electronico" variant="standard" />

                    <Typography className="-mb-1" color="blue-gray" variant="h6">
                        Puntuacion
                    </Typography>

                    <Textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} label="Message" />
                    <div className='flex items-center'>
                        <Rating className='pl-5' value={4} unratedColor="green" ratedColor="green" onChange={(value) => setPuntaje(value)} />
                        <p className='text-xl px-2'>{puntaje}.0</p>
                    </div>
                </div>
            </DialogBody>
            <DialogFooter className="space-x-2">
                <Button variant="text" color="gray" onClick={props.handler}>
                    cancel
                </Button>
                <Button variant="gradient" color="gray" onClick={() => {
                    Guardar();
                }} >
                    Enviar datos
                </Button>
            </DialogFooter>
        </Dialog>
    )
}

export default Header