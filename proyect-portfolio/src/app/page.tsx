import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main className='my-5'>
        <div className='contenedor bg-neutral-950 max-w-4xl mx-auto rounded-tl-2xl rounded-tr-2xl   h-14'>
          <div className="pelota roja"></div>
          <div className="pelota verde"></div>
          <div className="pelota azul"></div>
        </div>
        <div className='bg-neutral-900 max-w-4xl mx-auto h-screen rounded-bl-2xl rounded-br-2xl'>
          <div className='grid grid-cols-5 gap-4 px-4 py-4 pt-20'>
            <section className='col-span-2 bg-green-300'>
              <div className='mx-auto bg-neutral-950 rounded-full w-72 h-72 flex items-center justify-center'>
                <Image alt='Logo' width={150} height={150} src="/Logo-jp-sin-fondo-blanco.png" />
              </div>
              <div className='mx-6 my-2 mt-10 text-white'>
                <h1 className='text-4xl font-bold'>Jonatan Isaac Pizarro Orellana</h1>
                <p className='text-base font-sans mt-5'>Soy ingeniero en Informática. Me apasiona la programación Web, tanto FrontEnd como BackEnd, aunque desarrollo mas en FrontEnd. Además, tengo conocimientos en otras tecnologías como desarrollo móvil y aplicaciones de escritorio.</p>
              </div>
            </section>
            <aside className='col-span-3 bg-lime-300'>
              a
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
{/* <div className='bg-neutral-950 rounded-full mx-6'>
                <Image alt='Logo' width={200} height={200} src="/Logo-jp-sin-fondo-blanco.png" />
              </div> */}