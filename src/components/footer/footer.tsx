export default function Footer() {
  return (
    <div className="mt-10 bg-[url('./assets/background-footer.png')] w-auto h-screen bg-cover bg-center bg-invert bg">
      <div className=' w-[700px] h-full ml-[800px] flex items-center justify-center '>
        <div className='px-4 bg-transparent backdrop-blur-sm rounded-xl'>
          <span className=' text-white text-7xl text-right mb-8 block'>Mustang</span>
          <p className='text-zinc-300 text-2xl leading-relaxed '>
            O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público em abril de 1964 durante a Feira Mundial de Nova York. O Mustang, apesar de
            ter sofrido grandes alterações ao longo dos anos, é a linha de automóveis mais antiga da Ford.
          </p>

          <div className="flex justify-end py-4">
            <button className='w-[200px] mt-6 text-zinc-300 px-4 py-2 text-center border-2 border-gray-400 rounded-lg hover:text-zinc-200 hover:border-zinc-200'>
              <a href='#'>Ver Carros</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
