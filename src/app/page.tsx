import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';
import { projectsArray } from '../constants/projects';

export default function Home() {
  return (
    <div className="container p-6 md:mx-auto">
      <header className="md:flex md:items-center">
        <h1 className="text-center font-josefin text-2xl font-bold text-[#AEAEAE] md:flex-grow md:text-left">
          LOGO TIPO
        </h1>
        <button className="mr-12 hidden font-dmSans uppercase text-[#AEAEAE] md:block">
          Meu Github
        </button>
        <button className="mt-12 w-full rounded-md border border-[#873EFF] py-6 px-7 font-dmSans text-base font-bold uppercase text-[#AEAEAE] md:mt-0 md:w-auto">
          Entrar em Contato
        </button>
      </header>
      <section className="mt-12 md:mt-28">
        <p className="animate-fadeDown font-ibmPlexMono text-sm font-bold uppercase tracking-wider text-[#04D361] md:text-2xl">
          Adson Martins & Vitor Conceição
        </p>
        <h1 className="mt-2 mb-4 animate-fadeDown font-ibmPlexMono text-2xl font-semibold text-[#AEAEAE] animation-delay-100 md:mt-3 md:mb-8 md:w-1/2 md:text-6xl">
          Projetos produzidos em conjunto
        </h1>
        <p className="font-base font-base animate-fadeDown font-dmSans font-medium text-zinc-500 animation-delay-200 md:w-1/2 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis
          ligula, accumsan nec cursus in, eleifend sit amet dui.
        </p>
      </section>
      <section className="mt-7 grid gap-7 md:mt-32 md:grid-cols-3">
        {projectsArray.map((project) => (
          <ProjectCard data={project} key={project.title} />
        ))}
      </section>
      <footer className="mt-14 flex flex-col items-center justify-center md:flex-row md:justify-between">
        <h1 className="mb-3 text-center font-ibmPlexMono text-sm font-normal text-[#AEAEAE]">
          © {new Date().getFullYear()} -{' '}
          <a
            href="https://www.linkedin.com/in/adson-martins-743ab01b5/"
            className="hover:text-zinc-500 hover:underline"
          >
            Adson Martins
          </a>{' '}
          &{' '}
          <a
            href="https://www.linkedin.com/in/vitor-c-01b881223/"
            className="hover:text-zinc-500 hover:underline"
          >
            Vitor Conceição
          </a>
        </h1>
        <div className="flex items-center">
          <span className="mr-5 font-ibmPlexMono text-sm font-normal text-[#AEAEAE]">
            Powered by
          </span>
          <Image
            src="/images/spaceship-logo.svg"
            width={150}
            height={150}
            alt="Spaceship Logo"
          />
        </div>
      </footer>
    </div>
  );
}
