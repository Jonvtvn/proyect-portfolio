"use client";

import Image from "next/image";
import { Tabs } from "@/app/components/ui/tabs";
import { LayoutGridDemo } from "./LayoutGrid";

export function TabsDemo() {
    const tabs = [
        {
            title: "Experiencias",
            value: "Experiencias",
            content: (
                <div className="w-full overflow-hidden relative rounded-2xl p-5 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-200 to-gray-300">
                    <ContentExperience />
                </div>
            ),
        },
        {
            title: "Aptitudes",
            value: "Aptitudes",
            content: (
                <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <ContentAptitud />
                </div>
            ),
        },
        {
            title: "Proyectos",
            value: "Proyectos",
            content: (
                <div className="w-full h-[600px] overflow-hidden relative rounded-2xl text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-200 to-gray-300">
                    <ContentProyects />
                </div>
            ),
        }
    ];

    return (
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
            <Tabs tabs={tabs} />
        </div>
    );
}

const ContentExperience = () => {
    return (
        <section id="Experiencias">
            <h2 className='text-neutral-900 font-extrabold text-3xl'>Experiencias</h2>
            <ol className="relative border-s mt-4 border-neutral-900 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-900 rounded-full mt-1.5 -start-1.5 border border-neutral-900 dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800 ">Marzo 2019 - Diciembre 2023</time>
                    <h3 className="text-lg font-semibold text-neutral-900">Carrera Ingenieria en Informatica Duoc Uc</h3>
                    <div className="flex items-center gap-2 text-neutral-700 my-3">
                        <span className='bg-green-300 p-1 px-2 text-xs rounded-full'>Estudios</span>
                    </div>
                    <p className="mb-4 text-sm font-normal text-neutral-800">Cuatro años de estudios en el Instituto Profesional Duoc UC, para aprender sobre Ingeniería en Informática, durante los cuales adquirí conocimientos en gestión, control de calidad y programación. Aplicamos estos aprendizajes en numerosos proyectos prácticos para poner en práctica todo lo aprendido, los cuales están disponibles en mi GitHub.</p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-neutral-900 rounded-full mt-1.5 -start-1.5 border border-neutral-900 dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800 ">Diciembre 2023 - Abril 2024</time>

                    <h3 className="text-lg font-semibold text-neutral-900">Practica Profesional en Ribu Dynamics</h3>
                    <div className="flex items-center gap-2 text-neutral-700 my-3">
                        <span className='bg-blue-300 p-1 px-2 text-xs rounded-full'>Practica Profesional</span>
                        <span className='bg-yellow-300 p-1 px-2 text-xs rounded-full'>Desarrollo Front-End</span>
                    </div>

                    <p className="text-sm font-normal text-neutral-800">En Ribu Dynamics, una empresa especializada en soluciones de software, tuve el privilegio de formar parte de un emocionante proyecto web (DynaToon) lo cual estara disponible muy pronto. Mi responsabilidad incluía la interacción con APIs para funciones esenciales como Inicio de Sesión, Registro, Compras y gestión de Datos. Además, desempeñé un papel crucial en el desarrollo tanto visual como funcional del sitio web, trabajando en la creación de mockups y asegurando una experiencia de usuario óptima. Todo esto lo logramos utilizando Next.js en TypeScript, mientras colaboraba estrechamente con el equipo de backend, lo que resultó en una sinergia excepcional y un trabajo eficiente.</p>
                </li>
            </ol>
        </section>
    );
};
const ContentAptitud = () => {
    return (
        <Image
            src="/linear.webp"
            alt="dummy image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
const ContentProyects = () => {
    return (
        <LayoutGridDemo />
    );
};