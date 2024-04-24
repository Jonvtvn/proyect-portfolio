'use client'
import { useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { CgClipboard } from "react-icons/cg";
import { FaGithubAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import ReactPlayer from 'react-player';
import { LayoutGridDemo } from './components/LayoutGrid';
import { TabsDemo } from './components/Tabs';

export default function HomeContent() {
  const PDF_FILE = 'http://localhost:3000/CURRICULUM.pdf';

  return (
    <>
      <main className='my-5'>
        <div className='contenedor bg-neutral-950 max-w-6xl mx-auto rounded-tl-2xl rounded-tr-2xl   h-14'>
          <div className="pelota roja"></div>
          <div className="pelota verde"></div>
          <div className="pelota azul"></div>
        </div>
        <div className='bg-neutral-900 max-w-6xl mx-auto rounded-bl-2xl h-[1000px] rounded-br-2xl p-5'>
          <div className='grid grid-cols-6 gap-4 px-4 py-4 pt-10 h-full'>
            <section className='col-span-2 '>
              <div className='mx-auto bg-neutral-950 rounded-full w-72 h-72 flex items-center justify-center'>
                <Image alt='Logo' width={150} height={150} src="/Logo-jp-sin-fondo-blanco.png" />
              </div>
              <div className='mx-6 my-2 mt-10 text-white'>
                <h1 className='text-4xl font-bold'>Jonatan Isaac Pizarro Orellana</h1>
                <p className='text-base font-sans mt-5 text-neutral-400'>Soy ingeniero en Informática. Me apasiona la programación Web, tanto FrontEnd como BackEnd, aunque me especializo en FrontEnd. Además, tengo conocimientos en otras tecnologías como desarrollo móvil y aplicaciones de escritorio.</p>
              </div>
              <div className='mx-6 my-2 mt-5 inline-flex gap-2'>
                <button className=' hover:text-red-600 text-white transition-all'>
                  <Link target="_blank" href={PDF_FILE} download="CV JONATAN PIZARRO.pdf"><CgClipboard className='mr-1 h-7 w-7' /></Link>
                </button>
                <button className=' hover:text-black text-white transition-all'>
                  <Link target="_blank" href={PDF_FILE} download="CV JONATAN PIZARRO.pdf"><FaGithubAlt className='mr-1 h-7 w-7' /></Link>
                </button>
                <button className=' hover:text-sky-600 text-white transition-all'>
                  <Link target="_blank" href={PDF_FILE} download="CV JONATAN PIZARRO.pdf"><FaLinkedin className='mr-1 h-7 w-7' /></Link>
                </button>
                <button className=' hover:text-pink-600 text-white transition-all'>
                  <Link target="_blank" href={PDF_FILE} download="CV JONATAN PIZARRO.pdf"><FaInstagram className='mr-1 h-7 w-7' /></Link>
                </button>
              </div>
            </section>
            <aside className='col-span-4 bg-neutral-950 rounded-xl p-5 mr-5 h-full'>
              {/* <section id="Experiencias">
                <h2 className='text-white font-extrabold text-3xl'>Experiencias</h2>
                <ol className="relative border-s mt-4 border-gray-200 dark:border-gray-700">
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Marzo 2019 - Diciembre 2023</time>
                    <div className='flex items-center gap-4'>
                      <h3 className="text-lg font-semibold text-white ">Carrera Ingenieria en Informatica Duoc Uc</h3>
                      <span className='bg-green-300 p-1 px-2 text-xs rounded-full'>Estudios</span>
                    </div>
                    <p className="mb-4 text-sm font-normal text-gray-300">Cuatro años de estudios en el Instituto Profesional Duoc UC, para aprender sobre Ingeniería en Informática, durante los cuales adquirí conocimientos en gestión, control de calidad y programación. Aplicamos estos aprendizajes en numerosos proyectos prácticos para poner en práctica todo lo aprendido, los cuales están disponibles en mi GitHub.</p>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Diciembre 2023 - Abril 2024</time>
                    <div className='flex items-center gap-4'>
                      <h3 className="text-lg font-semibold text-white">Practica Profesional en Ribu Dynamics</h3>
                      <span className='bg-blue-300 p-1 px-2 text-xs rounded-full'>Practica Profesional</span>
                      <span className='bg-yellow-300 p-1 px-2 text-xs rounded-full'>Desarrollo Front-End</span>
                    </div>
                    <p className="text-sm font-normal text-gray-300 ">En Ribu Dynamics, una empresa especializada en soluciones de software, tuve el privilegio de formar parte de un emocionante proyecto web (DynaToon) lo cual estara disponible muy pronto. Mi responsabilidad incluía la interacción con APIs para funciones esenciales como Inicio de Sesión, Registro, Compras y gestión de Datos. Además, desempeñé un papel crucial en el desarrollo tanto visual como funcional del sitio web, trabajando en la creación de mockups y asegurando una experiencia de usuario óptima. Todo esto lo logramos utilizando Next.js en TypeScript, mientras colaboraba estrechamente con el equipo de backend, lo que resultó en una sinergia excepcional y un trabajo eficiente.</p>
                  </li>
                </ol>
              </section> */}
              <section>
                <TabsDemo />
              </section>
            </aside>

          </div>
          <section id="Proyectos">
            <div>
              {/* <LayoutGridDemo /> */}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}



{/* <div className='bg-neutral-950 rounded-full mx-6'>
                <Image alt='Logo' width={200} height={200} src="/Logo-jp-sin-fondo-blanco.png" />
              </div> */}