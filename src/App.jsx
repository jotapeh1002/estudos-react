import { useState } from 'react'
import { GridPalavras } from './components/gridPalavras/GridPalavras'
import { Navbar } from './components/navbar/Navbar'
import { GridTeclado } from './components/gridTeclado/GridTeclado'
// import viteLogo from '/vite.svg' assim que se importa uma imagem ou outro arquivo

export function App() {
  const [count, setCount] = useState(0)
  function alert(){

    alert()
    
  }

  return (

    <div div className = "bg-zinc-300 h-[100dvh] flex flex-col justify-between" >

      <div className='sm:w-[70vw] sm:mx-auto'>
        <Navbar />
      </div>

      <div className='flex pt-4 justify-center '>
        <GridPalavras />
      </div>

      <div className="mb-8 px-3">
        <div className='flex gap-1 justify-center'>
          <GridTeclado tecla={'Q'} />
          <GridTeclado tecla={'W'} />
          <GridTeclado tecla={'E'} />
          <GridTeclado tecla={'R'} />
          <GridTeclado tecla={'T'} />
          <GridTeclado tecla={'Y'} />
          <GridTeclado tecla={'U'} />
          <GridTeclado tecla={'I'} />
          <GridTeclado tecla={'O'} />
          <GridTeclado tecla={'P'} />
        </div>
        <div className='flex gap-1 justify-center'>
          <GridTeclado tecla={'A'} />
          <GridTeclado tecla={'S'} />
          <GridTeclado tecla={'D'} />
          <GridTeclado tecla={'R'} />
          <GridTeclado tecla={'T'} />
          <GridTeclado tecla={'H'} />
          <GridTeclado tecla={'J'} />
          <GridTeclado tecla={'K'} />
          <GridTeclado tecla={'L'} />
          <GridTeclado tecla={'<-'} width={'w-[70px]'} />
        </div>
        <div className='flex gap-1 justify-center'>
          <GridTeclado tecla={'Z'} />
          <GridTeclado tecla={'X'} />
          <GridTeclado tecla={'C'} />
          <GridTeclado tecla={'V'} />
          <GridTeclado tecla={'B'} />
          <GridTeclado tecla={'N'} />
          <GridTeclado tecla={'M'} />
          <GridTeclado tecla={'ENTER'} width={'w-[80px]'} />
        </div>
      </div>

    </div >
  )
}
