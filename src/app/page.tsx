import Image from "next/image";
import airplaneSvg from '../../src/assets/airplane.svg';
import logosvg from '../../src/assets/logo.svg';
import Link from "next/link";

export default function Home() {  
  return (
    <>
      <section className="mx-auto flex flex-col h-14 w-full max-w-screen-xl bg-white">
        <nav className="mt-8 w-full flex items-center justify-between">
          <Image className="w-14 h-14" src={logosvg} alt="Marca da Airplaner" />
          <div className="flex p-4 rounded-full gap-8 items-center">
            <Link href="/"><p className="font-bold text-stone-700 transition-colors hover:text-fuchsia-500">Preço</p></Link>
            <Link href="#hero"><p className="font-bold text-stone-700 transition-colors hover:text-fuchsia-500">Sobre</p></Link>
            <Link href="#hero"><p className="font-bold text-stone-700 transition-colors hover:text-fuchsia-500">Blog</p></Link>
            <Link href="#hero"><p className="font-bold text-white transition-colors bg-fuchsia-400 hover:bg-fuchsia-700 px-5 py-3 rounded-full">Começar</p></Link>
          </div>
        </nav>
        
        <div className="flex w-full items-center justify-between">
          <div>
            <h1 className="text-left font-black text-5xl font-sans text-stone-800">Planeje sua viagem com o <span className="text-fuchsia-400">Airplanner</span>.</h1>
            <p className="text-lg font-medium mt-8 text-stone-700">Nunca foi tão fácil planejar uma viagem<br />sem dor de cabeça</p>
          </div>
          <div className="items-center justify-between">
            <Image src={airplaneSvg} className="w-96 h-96" alt="Voando pelo mundo" />
      
            <Link className="font-bold text-white transition-colors bg-fuchsia-400 hover:bg-fuchsia-700   mr-[500px] px-5 py-3 rounded-full" href='#hero '>
            Comecar Agora 
          </Link>
          </div>

        </div>

      </section> 
    </>
  );
}
