import React from 'react'
import { useState } from 'react';
import logo from '../img/logo.png'
import logomini from '../img/logomini.png'
import curvas from '../img/curvaHome2.png'
import quienes from '../img/quieneSomoss.jpg'
import mision from '../img/mision.gif'
import vision from '../img/vision.png'
import arboles from '../img/arboles.jpg'
import esteban from '../img/esteban.png'
import karla from '../img/karla.png'
import andres from '../img/andres.png'
import mariana from '../img/mariana.png'
import jose from '../img/jose.png'
import wistin from '../img/wistin.png'
import leyri from '../img/leyri.png'
import { Card, CardHeader, CardBody, CardFooter, IconButton, SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction } from "@material-tailwind/react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { FaWhatsapp, FaHome, FaPlus, FaUsers  } from "react-icons/fa";
import { MdOutlineDiversity1 } from "react-icons/md";
import { LuBrainCircuit } from "react-icons/lu";
import { FaUsersGear, FaPuzzlePiece } from "react-icons/fa6";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";



const Home = () => {

    const labelProps = {
        variant: "small",
        color: "blue-gray",
        className:
            "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
    };



    const [open, setOpen] = useState(false);

    const [informacion, setInformacion] = useState({
        img: "",
        titulo: "",
        descripcion: "",
        nombre: ""
    });

    const perfil = (nom) => {
        const nombre = document.getElementById(nom)

        console.log(nombre.id)

        switch (nombre.id !== "") {
            case nombre.id === "esteban":
                setInformacion({
                    img: esteban,
                    titulo: "Desarrollador",
                    descripcion: "el mejor programando",
                    nombre: "Esteban Silvera"
                });
                break;
            case nombre.id === "andres":
                setInformacion({
                    img: andres,
                    titulo: "Ingeniero Electrico",
                    descripcion: "El mejor ingeniero electrico de colombia ",
                    nombre: "Andres Noguera"
                });
                break;
            case nombre.id === "jose":
                setInformacion({
                    img: jose,
                    titulo: "Ingeniero Electrico",
                    descripcion: "El mejor ingeniero electrico de colombia ",
                    nombre: "Andres Noguera"
                });
                break;
            case nombre.id === "karla":
                setInformacion({
                    img: karla,
                    titulo: "Ingeniero Electrico",
                    descripcion: "El mejor ingeniero electrico de colombia ",
                    nombre: "Andres Noguera"
                });
                break;
            case nombre.id === "justin":
                setInformacion({
                    img: wistin,
                    titulo: "Ingeniero Electrico",
                    descripcion: "El mejor ingeniero electrico de colombia ",
                    nombre: "Andres Noguera"
                });
                break;
            case nombre.id === "mariana":
                setInformacion({
                    img: mariana,
                    titulo: "Ingeniero Electrico",
                    descripcion: "El mejor ingeniero electrico de colombia ",
                    nombre: "Andres Noguera"
                });
                break;
            case nombre.id === "leyri":
                setInformacion({
                    img: leyri,
                    titulo: "Ingeniero Electrico",
                    descripcion: "El mejor ingeniero electrico de colombia ",
                    nombre: "Andres Noguera"
                });
                break;
            default:
                console.log("prueba")
        }
    }

    return (
        <div>

            <div className="fixed backdrop-blur-sm text-green-600 z-50" style={{ bottom: "4vh", right: "2vw" }}>
                <SpeedDial className='w-20 h-40'>
                    <SpeedDialHandler>
                        <IconButton size="lg" className="rounded-full">
                            <FaPlus className="h-5 w-5 transition-transform group-hover:rotate-45" />
                        </IconButton>
                    </SpeedDialHandler>
                    <SpeedDialContent>
                        <SpeedDialAction className="relative">
                            <FaHome className="h-5 w-5" />
                            <Typography {...labelProps}>Home</Typography>
                        </SpeedDialAction>
                        <SpeedDialAction className="relative">
                            <FaWhatsapp className="h-5 w-5" />
                            <Typography {...labelProps}>Settings</Typography>
                        </SpeedDialAction>
                        <SpeedDialAction className="relative">
                            <FaWhatsapp className="h-5 w-5" />
                            <Typography {...labelProps}>Pages</Typography>
                        </SpeedDialAction>
                    </SpeedDialContent>
                </SpeedDial>
            </div>

            {/* **************************************************************************************************************************** */}
            <Carousel transition={{ duration: 2 }}>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                        alt="image1"
                        className=" w-full object-cover"
                        style={{ height: "80vh" }}
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                        alt="image 2"
                        className=" w-full object-cover"
                        style={{ height: "80vh" }}
                    />
                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography>
                            <div className="flex gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative h-full w-full">
                    <img
                        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                        alt="image 3"
                        className="w-full object-cover"
                        style={{ height: "80vh" }}
                    />
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography>
                            <div className="flex gap-2">
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                                <Button size="lg" color="white" variant="text">
                                    Gallery
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
            <img src={curvas} alt='' className='relative w-full -top-10' style={{ transform: "scaleX(-1)" }} />
            {/* **************************************************************************************************************************** */}


            <div className='py-10'>
                <h1 className='text-center text-3xl font-bold py-6'>¿Por que elegir EMPREMREC?</h1>

                <div className='flex justify-evenly items-center rounded-xl shadow-2xl hover:shadow-green-500 duration-300 container mx-auto my-8'>

                    <div className='w-[20vw] h-72 bg-white flex flex-col justify-center items-center border-r-2 border-dashed border-black hover:bg-green-100 duration-500 rounded-l-lg'>
                        <MdOutlineDiversity1 className='size-20 text-green-500' />
                        <h1 className='text-xl font-bold'>Diversidad de Perspectivas</h1>
                        <h3 className='text-justify p-4'>
                            Contamos con un equipo de profesionales provenientes de diversas carreras y disciplinas, fomentando la innovación y la creatividad.
                        </h3>
                    </div>
                    <div className='w-[20vw] h-72  bg-white flex flex-col justify-center items-center border-r-2 border-dashed border-black hover:bg-green-100 duration-500'>
                        <FaUsersGear className='size-20 text-green-500' />
                        <h1 className='text-xl font-bold'>Sinergia Interdisciplinaria</h1>
                        <h3 className='text-justify p-4'>
                            La combinación de habilidades y conocimientos de nuestros profesionales de distintas carreras crea una sinergia interdisciplinaria única.
                        </h3>
                    </div>
                    <div className='w-[20vw] h-72 bg-white flex flex-col justify-center items-center border-r-2 border-dashed border-black hover:bg-green-100 duration-500'>
                        <FaPuzzlePiece className='size-20 text-green-500' />
                        <h1 className='text-xl font-bold'>Adaptabilidad y Flexibilidad</h1>
                        <h3 className='text-justify p-4'>
                            La variedad de carreras en nuestro equipo no solo aporta diversidad de habilidades, sino también adaptabilidad y flexibilidad.
                        </h3>
                    </div>
                    <div className='w-[20vw] h-72 bg-white  flex flex-col justify-center items-center border-black rounded-r-lg hover:bg-green-100 duration-500'>
                        <LuBrainCircuit className='size-20 text-green-500' />
                        <h1 className='text-xl font-bold'>Enfoque Holístico</h1>
                        <h3 className='text-justify p-4'>
                            Optar por nuestros profesionales de diversas carreras significa elegir un enfoque holístico para resolver problemas.
                        </h3>
                    </div>

                </div>

            </div>


            <div className='flex flex-wrap justify-center items-center py-10'>

                <Card className="m-6 py-4 shadow-2xl shadow-black hover:-translate-y-1 hover:bg-green-100 duration-300 animate__backInRight" style={{ width: "80vh" }}>
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>

                <Card className="m-6 py-4 shadow-2xl shadow-black hover:-translate-y-1 hover:bg-green-100 duration-300" style={{ width: "80vh" }}>
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img
                            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                            alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            UI/UX Review Check
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to &quot;Naviglio&quot; where you can enjoy the main
                            night life in Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button>Read More</Button>
                    </CardFooter>
                </Card>

            </div>

            <section>

                <div className="md:h-[80vh] flex justify-center items-center bg-gray-100 py-5">
                    <div className="relative w-4/5 md:h-[70vh] bg-white shadow-lg rounded-lg overflow-hidden flex justify-center items-center">

                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={3}
                            //navigation
                            autoplay={{ delay: 3000 }}
                            scrollbar={{ draggable: true }}
                            breakpoints={{
                                350: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            <SwiperSlide >
                                <div className='bg-white rounded-3xl mx-auto text-center px-6 py-10'>
                                    <div className='rounded-full size-52 mx-auto shadow-2xl shadow-green-100 z-0 border-2 border-white bg-green-100 m-4'>
                                        <img src={esteban} alt='img' className='relative bottom-20 z-50 rounded-full' style={{ height: "140%" }} />
                                    </div>
                                    <h1 className='text-2xl' id='esteban'>Esteban Silvera</h1>
                                    <h3 className='text-md text-red-500 '>Desarrollador de software</h3>
                                    <p className='py-4 text-justify'>Código que transforma ideas en realidad. Nuestro desarrollador, apasionado por la innovación, crea soluciones digitales impactantes. Desde aplicaciones hasta sitios web, su habilidad técnica y creatividad impulsan proyectos hacia el éxito.</p>
                                    <Button onClick={() => { setOpen(!open); perfil("esteban") }} variant="gradient" >
                                        Ver mas
                                    </Button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='bg-white rounded-3xl mx-auto text-center px-6 py-10'>
                                    <div className='rounded-full size-52 mx-auto shadow-2xl shadow-green-100 z-0 border-2 border-white bg-green-100 m-4'>
                                        <img src={andres} alt='img' className='relative bottom-20 z-50 rounded-full' style={{ height: "140%" }} />
                                    </div>
                                    <h1 className='text-2xl ' id='andres'><strong>Andres Noguera</strong></h1>
                                    <h3 className='text-md text-red-500 '>Ingeniero electrico</h3>
                                    <p className='py-4 text-justify'>Potenciando innovación, nuestro ingeniero eléctrico lidera proyectos energéticos. Con experiencia y creatividad en energias limpias, transforma desafíos en soluciones. Descubre la excelencia en ingeniería eléctrica para impulsar el éxito de tus proyectos futuros.</p>
                                    <Button onClick={() => { setOpen(!open); perfil("andres") }} variant="gradient">
                                        Ver mas
                                    </Button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='bg-white rounded-3xl mx-auto text-center px-6 py-10'>
                                    <div className='rounded-full size-52 mx-auto shadow-2xl shadow-green-100 z-0 border-2 border-white bg-green-100 m-4'>
                                        <img src={jose} alt='img' className='relative bottom-20 w-96 z-50 rounded-full' style={{ height: "140%" }} />
                                    </div>
                                    <h1 className='text-2xl' id='jose'><strong>Jose Silvera</strong></h1>
                                    <h3 className='text-md text-red-500 '>Ingeniero Ambiental</h3>
                                    <p className='py-4 text-justify'>Guiando hacia un futuro sostenible, nuestro ingeniero ambiental lidera proyectos que equilibran desarrollo y conservación. Trabaja incansablemente para preservar el entorno. Descubre cómo la ingeniería ambiental marca la diferencia en comunidades y empresas ecoeficientes.</p>
                                    <Button onClick={() => { setOpen(!open); perfil("jose") }} variant="gradient">
                                        Ver mas
                                    </Button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className='bg-white rounded-3xl mx-auto text-center px-6 py-10'>
                                    <div className='rounded-full size-52 mx-auto shadow-2xl shadow-green-100 z-0 border-2 border-white bg-green-100 m-4'>
                                        <img src={karla} alt='img' className='relative bottom-10 z-50 w-96 rounded-full' style={{ height: "120%" }} />
                                    </div>
                                    <h1 className='text-2xl' id='karla'><strong>karla Rodriguez</strong></h1>
                                    <h3 className='text-md text-red-500 '>nutricionista Dietista</h3>
                                    <p className='py-4 text-justify'>Transforma tu bienestar con el asesoramiento experto de nuestra nutricionista. Diseña planes personalizados; esta profesional apasionada te guiará hacia hábitos saludables. Descubre el equilibrio y vitalidad que una dieta adecuada puede ofrecer.</p>
                                    <Button onClick={() => { setOpen(!open); perfil("karla") }} variant="gradient">
                                        Ver mas
                                    </Button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='bg-white rounded-3xl mx-auto text-center px-6 py-10'>
                                    <div className='rounded-full size-52 mx-auto shadow-2xl shadow-white z-0 border-2 border-white bg-green-100 m-4'>
                                        <img src={wistin} alt='img' className='relative bottom-10 w-96 z-50 rounded-full' style={{ height: "120%" }} />
                                    </div>
                                    <h1 className='text-2xl' id='justin'><strong>Justin Imitola</strong></h1>
                                    <h3 className='text-md text-red-500 '>Ingeniero Indrustrial</h3>
                                    <p className='py-4 text-justify'>Impulsando eficiencia y productividad, nuestro ingeniero industrial lidera con innovación. Diseña sistemas y estrategias eficaces, transformando procesos y aumentando rentabilidad. Descubre la excelencia en ingeniería industrial para potenciar tu éxito empresarial.</p>
                                    <Button onClick={() => { setOpen(!open); perfil("justin") }} variant="gradient">
                                        Ver mas
                                    </Button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='bg-white rounded-3xl mx-auto text-center px-6 py-10'>
                                    <div className='rounded-full size-52 mx-auto shadow-2xl shadow-white z-0 border-2 border-white bg-green-100 m-4'>
                                        <img src={mariana} alt='img' className='relative bottom-20 w-96 z-50 rounded-full' style={{ height: "140%" }} />
                                    </div>
                                    <h1 className='text-2xl' id='mariana'><strong>Mariana Rodriguez</strong></h1>
                                    <h3 className='text-md text-red-500'>Fisioterapeuta</h3>
                                    <p className='py-4 text-justify'>Guiando hacia el bienestar físico, nuestra fisioterapeuta ofrece tratamientos personalizados. Con empatía y profesionalismo, promueve la recuperación y la salud. Descubre el camino hacia el equilibrio y la vitalidad con nuestra experta en fisioterapia.</p>
                                    <Button onClick={() => { setOpen(!open); perfil("mariana") }} variant="gradient">
                                        Ver mas
                                    </Button>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='bg-white rounded-3xl mx-auto text-center px-6 py-10'>
                                    <div className='rounded-full size-52 mx-auto shadow-2xl shadow-white z-0 border-2 border-white bg-green-100 m-4'>
                                        <img src={leyri} alt='img' className='relative bottom-10 w-96 z-50 rounded-full' style={{ height: "120%" }} />
                                    </div>
                                    <h1 className='text-2xl' id='leyri'><strong>Leyri Scaldaferro</strong></h1>
                                    <h3 className='text-md text-red-500 '>Psicologa</h3>
                                    <p className='py-4 text-justify'>Con empatía y experiencia, nuestra psicóloga guía hacia el bienestar mental. Ofrece apoyo profesional y herramientas en un espacio seguro. Descubre fortaleza interior y soluciones para superar desafíos emocionales. Tu bienestar es nuestra prioridad.</p>
                                    <Button onClick={() => { setOpen(!open); perfil("leyri") }} variant="gradient">
                                        Ver mas
                                    </Button>
                                </div>
                            </SwiperSlide>


                        </Swiper>

                    </div>
                </div>

            </section>

            <section className='bg-green-500 py-8 my-4'>

                <h1 className='text-white text-4xl text-center font-sans py-8'>Todo lo que necesitas</h1>

                <Swiper
                    className='container'
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        350: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <SwiperSlide >
                        <div className='bg-white h-64 rounded-3xl flex justify-center items-center'>
                            <img src={logo} alt='logo' className='size-40' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='bg-white h-64 rounded-3xl flex justify-center items-center'>
                            <img src={logomini} alt='logo' className='size-40 mx-auto' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='bg-white h-64 rounded-3xl flex justify-center items-center'>
                            <img src={logomini} alt='logo' className='size-40 mx-auto' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white h-64 rounded-3xl flex justify-center items-center'>
                            <img src={logo} alt='logo' className='size-40 mx-auto' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white h-64 rounded-3xl flex justify-center items-center'>
                            <img src={logo} alt='logo' className='size-40 mx-auto' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-white h-64 rounded-3xl flex justify-center items-center'>
                            <img src={logo} alt='logo' className='size-40 mx-auto' />
                        </div>
                    </SwiperSlide>

                </Swiper>

            </section>



            <section>
                <div className="bg-gray-100 py-8">
                    <div className="container mx-auto md:flex md:items-center md:justify-between">
                        <div className="md:w-1/2 px-4">
                            <h1 className="text-4xl font-bold mb-4">Quiénes Somos</h1>
                            <p className="text-gray-700 text-justify">
                                Es una empresa
                                creada con el propósito de prestar
                                servicios de mantenimiento, reparación y
                                administración de equipos de cómputo,
                                redes y todo lo relacionado con las TIC’s;
                                además propendemos por la protección
                                del ambiente dándole un buen trato a los
                                desechos eléctricos y electrónicos con el
                                proceso de reciclaje ya que estos
                                contienen químicos los cuales pueden
                                causar daños (cáncer, malformaciones
                                entre otros) irreversibles al ambiente y a
                                los seres vivos en general.<br /><br />

                                Tras estudiar la problemática de lo que generan los componentes eléctricos y
                                electrónicos hemos decido ofrecer a empresas, comerciantes y a la comunidad en
                                general, seguridad a sus equipos de cómputos afiliándolos en diversos planes para la
                                mayor comodidad de nuestros clientes, está conformada por grupos de especialistas
                                en temas de última generación, asesorías, soporte y mantenimiento sobre equipos
                                informáticos, así también, contamos con un conjunto de expertos en el área de diseño
                                y desarrollo de aplicaciones web y de escritorio, para satisfacer a nuestros clientes en
                                todos los campos informáticos.

                            </p>
                        </div>
                        <div className="md:w-1/2 px-4">
                            <img src={quienes} alt="Quiénes Somos" className="rounded-lg shadow-lg mx-auto" />
                        </div>
                    </div>
                </div>

                <div className="bg-white py-8">
                    <div className="container mx-auto md:flex md:items-center md:justify-between">
                        <div className="md:w-1/2">
                            <img src={vision} alt="Visión" className="rounded-lg mx-auto" />
                        </div>
                        <div className="md:w-1/2 px-4">
                            <h1 className="text-4xl font-bold mb-4">Visión</h1>
                            <p className="text-gray-700 text-justify">
                                En el 2017 EMPREMREC S.A.S, se ha convertido en una empresa que a través de una
                                estrategia integral y sostenible le permitirá que el 100% de los desechos electrónicos
                                de nuestro municipio y el departamento del Atlántico sean manipulada de forma
                                conveniente y posteriormente reciclada, contribuyendo así a la prosperidad de
                                nuestra región siendo amable con el medio ambiente.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 py-8">
                    <div className="container mx-auto md:flex md:items-center md:justify-between">
                        <div className="md:w-1/2 px-4">
                            <h1 className="text-4xl font-bold mb-4">Misión</h1>
                            <p className="text-gray-700 text-justify">
                                EMPREMREC S.A.S es una empresa que contribuye al mejoramiento integral del medio
                                ambiente; el uso y aprovechamiento de las tecnologías que en dicho caso hayan
                                cumplido su vida útil tanto, en las sedes educativas públicas como en los distintos
                                hogares del municipio; lo anterior se realiza a partir del reúso tecnológico el cual
                                genera beneficios ambientales, económicos y educativos, por medio de estrategias
                                que incluyen el reacondicionamiento, la adquisición y el mantenimiento de equipos de
                                cómputo.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <img src={mision} alt="Misión" className="rounded-lg mx-auto" />
                        </div>
                    </div>
                </div>

            </section>

            <section className='h-[100%] py-20 shadow-inner flex justify-center items-center' style={{ backgroundImage: `url(${arboles})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>

                <div className='mx-auto md:flex md:justify-center md:items-center'>

                    <div className='w-56 h-56 rounded-full bg-white border-dashed border-2 border-green-500 mx-4 flex flex-col justify-center items-center'>
                        <FaWhatsapp className='size-20' />
                        <h1>10.000</h1>
                        <h3>prueba</h3>
                    </div>
                    <div className='w-56 h-56 rounded-full bg-white border-dashed border-2 border-green-500 mx-4 flex flex-col justify-center items-center'>
                        <FaWhatsapp className='size-20' />
                        <h1>10.000</h1>
                        <h3>prueba</h3>
                    </div>
                    <div className='w-56 h-56 rounded-full bg-white border-dashed border-2 border-green-500 mx-4 flex flex-col justify-center items-center'>
                        <FaUsers className='size-20' />
                        <h1>10.000</h1>
                        <h3>prueba</h3>
                    </div>
                    <div className='w-56 h-56 rounded-full bg-white border-dashed border-2 border-green-500 mx-4 flex flex-col justify-center items-center'>
                        <FaWhatsapp className='size-20' />
                        <h1>10.000</h1>
                        <h3>prueba</h3>
                    </div>

                </div>

            </section>

            <Perfil open={open} handler={() => setOpen(!open)} informacion={informacion} />
        </div >
    )
}

function Perfil(props) {
    return (
        <Dialog
            {...props}
            size='lg'
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
        >
            <DialogHeader>{props.informacion.nombre}</DialogHeader>
            <DialogBody>
                {props.informacion.descripcion}
                <img src={props.informacion.img} alt='imagen' />

            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    color="red"
                    onClick={props.handler}
                    className="mr-1"
                >
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={props.handler}>
                    <span>Confirm</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default Home