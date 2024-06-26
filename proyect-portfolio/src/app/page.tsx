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
  const PDF_FILE = 'Curriculum Vitae Jonatan Pizarro.pdf';

  return (
    <>
      <main className='my-5'>
        <span className='text-neutral-800 flex justify-center'>Aviso, proximamente responsive</span>
        <div className='contenedor bg-neutral-950 max-w-6xl mx-auto rounded-tl-2xl rounded-tr-2xl   h-14'>
          <div className="pelota roja"></div>
          <div className="pelota verde"></div>
          <div className="pelota azul"></div>
        </div>

        <div className='bg-neutral-900 max-w-6xl mx-auto rounded-bl-2xl h-[950px] rounded-br-2xl p-5'>
          <div className='grid grid-cols-6 gap-4 px-4 py-4 pt-10 h-full'>
            <section className='col-span-2 '>
              <div className='mx-auto bg-neutral-950 rounded-full w-72 h-72 flex items-center justify-center'>
                <Image alt='Logo' width={150} height={150} src="/Logo-jp-sin-fondo-blanco.png" />
              </div>
              <div className='mx-6 my-2 mt-10 text-white'>
                <h1 className='text-4xl font-bold'>Jonatan Isaac Pizarro Orellana</h1>
                <p className='text-base font-sans mt-5 text-neutral-400'>Soy ingeniero en Informática. Me apasiona la programación, tanto FrontEnd como BackEnd, aunque me especializo en FrontEnd. Además, tengo conocimientos en otras tecnologías como desarrollo móvil y aplicaciones de escritorio.</p>
              </div>
              <div className='mx-6 my-2 mt-5 inline-flex gap-2'>
                <button className=' hover:text-red-600 text-white transition-all'>
                  <Link target="_blank" href={`https://proyect-portfolio-iota.vercel.app/${PDF_FILE}`} download="Curriculum Vitae de JONATAN PIZARRO.pdf"><CgClipboard className='mr-1 h-7 w-7' /></Link>
                </button>
                <button className=' hover:text-black text-white transition-all'>
                  <Link target="_blank" href={`https://github.com/Jonvtvn`} ><FaGithubAlt className='mr-1 h-7 w-7' /></Link>
                </button>
                <button className=' hover:text-sky-600 text-white transition-all'>
                  <Link target="_blank" href={`https://www.linkedin.com/in/jonatan-isaac-pizarro-orellana-a021001ba/`}><FaLinkedin className='mr-1 h-7 w-7' /></Link>
                </button>
                <button className=' hover:text-pink-600 text-white transition-all'>
                  <Link target="_blank" href={`https://www.instagram.com/jnv.ispior._/`}><FaInstagram className='mr-1 h-7 w-7' /></Link>
                </button>
              </div>
            </section>
            <aside className='col-span-4 bg-neutral-950 rounded-xl p-5 mr-5 h-[850px]'>
              <section>
                <TabsDemo />
              </section>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}