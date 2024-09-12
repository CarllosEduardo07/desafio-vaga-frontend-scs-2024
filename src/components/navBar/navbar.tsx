import logo from '../../assets/logo.png';

export default function NavBar() {
  return (
    <div className="bg-[url('./assets/background1.png')] py-4 w-full h-screen bg-cover bg-bottom clip-bottom-arc">
      <nav className='flex items-center justify-around text-white bg-transparent '>
        <img src={logo} alt='logo' width={60} height={60}  className='cursor-pointer'/>

        <ul className='flex items-center space-x-28'>
          <li>
            <a href='#' className='hover:text-gray-400 '>
              Home
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-400 '>
              Sobre
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-400 '>
              Tabela
            </a>
          </li>
          <li>
            <a href='#' className='hover:text-gray-400 '>
              Fale Conosco
            </a>
          </li>
        </ul>

        <div>
          <a href='#' className='hover:text-gray-400 '>
            Entrar
          </a>
        </div>
      </nav>
    </div>
  );
}
