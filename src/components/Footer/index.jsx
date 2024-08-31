import logoImg from "../../assets/logo-white.png";
import Logo from "../Logo";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-darkGray text-white grid grid-cols-4 pt-[72px] px-24">
      <div >
        <Logo imgLogo={logoImg} textColor="text-white" />
        <p className="mt-[40px] mb-[35px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <div className="flex gap-4">
          <div>
            <img src={Facebook} className="size-5" />
            <span className="sr-only">Logo do Facebook</span>
          </div>
          <div>
            <img src={Instagram} className="size-5" />
            <span className="sr-only">Logo do Instagram</span>
          </div>
          <div>
            <img src={Twitter}  className="size-5"/>
            <span className="sr-only">Logo do Twitter</span>
          </div>
        </div>
      </div>
      <div className="ml-[100px]">
        <h5 className="text-medium-bold text-white mb-[28px]">Informação</h5>
        <ul>
          <li className="text-small text-white">Sobre Drip Store</li>
          <li className="text-small text-white">Segurança</li>
          <li className="text-small text-white">Wishlist</li>
          <li className="text-small text-white">Blog</li>
          <li className="text-small text-white">Trabalhe conosco</li>
          <li className="text-small text-white">Meus Pedidos</li>
        </ul>
      </div>
      <div className="ml-[50px]">
        <h5 className="text-medium-bold text-white mb-[28px]">Categorias</h5>
        <ul>
          <li className="text-small text-white">Camisetas</li>
          <li className="text-small text-white">Calças</li>
          <li className="text-small text-white">Bonés</li>
          <li className="text-small text-white">Headphones</li>
          <li className="text-small text-white">Tênis</li>
        </ul>
      </div>
      <div>
        <h5 className="text-medium-bold text-white mb-[28px]">Contato</h5>
        <p>
          Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
        </p>
        <p>(85) 3051-3411</p>
      </div>
      <p className="col-span-4 text-center mt-[34px] border-t border-t-darkGray2 pt-[22px] text-xsmall text-white">@ 2024 Digital College - Feito pelos Guerreiros da FS27</p>
      <a href="https://github.com/orgs/Digital-FS27/repositories" target="_blank" className="col-span-4 text-center pb-[22px] text-xsmall text-white hover:underline">GitHub do Projeto</a>
    </footer>
  );
};

export default Footer;
