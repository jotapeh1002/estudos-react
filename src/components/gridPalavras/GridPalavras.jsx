export function GridPalavras() {

    // Criando um array bidimensional com 6 linhas e 5 colunas

    const palavras = Array.from({ length: 6 }, () => Array.from({ length: 5 }, (_, index) => /*Item */ `${index}`));

    return (
        <div className="grid grid-cols-5 grid-rows-6 gap-1  p-4">
            {palavras.map((linha, linhaIndex) => (
                linha.map((item, itemIndex) => (
                    <div
                        key={`${linhaIndex}-${itemIndex}`} // Usando índice da linha e do item para chave única
                        className="flex items-center justify-center text-zinc-600 bg-zinc-400 bg-opacity-30 
                        m-1 w-10 h-10 border-4 border-neutral-400 p-7 rounded-lg text-lg">

                        {/* {item} */}
                        
                    </div>
                ))
            ))}
        </div>
    );
}
