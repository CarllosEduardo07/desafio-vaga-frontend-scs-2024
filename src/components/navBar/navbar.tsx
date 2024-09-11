import logo from '../../assets/logo.png';

export default function NavBar() {
  return (
    <div className="bg-[url('./assets/background.png')] w-full h-screen bg-cover bg-bottom clip-bottom-arc">
      <nav className='flex items-center justify-around text-white bg-transparent '>
        <img src={logo} alt='logo' width={60} height={60} />

        <ul className='flex items-center space-x-28'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Sobre</a>
          </li>
          <li>
            <a href='#'>Tabela</a>
          </li>
          <li>
            <a href='#'>Fale Conosco</a>
          </li>
        </ul>

        <div>
          <a href='#'>Entrar</a>
        </div>
      </nav>
    </div>
  );
}
