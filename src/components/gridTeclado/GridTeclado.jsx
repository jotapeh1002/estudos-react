export function GridTeclado({tecla, width = 'h-[50px]',higth = 'w-[50px]'}){

    
    return(
        <button  className={`bg-blue-500 p-1 px-2 ${width} ${higth} text-white shadow-sm rounded-lg
        sm:hover:-translate-y-1 outline-none my-1 ` }> {tecla}</button>
    )
}