import { Link } from 'react-router-dom'
import { HeaderBar, Links, Linkitem, LinkCart } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <Linkitem>
            <Link to="/categories">Categorias</Link>
          </Linkitem>
          <Linkitem>
            <a href="#">Novidades</a>
          </Linkitem>
          <Linkitem>
            <a href="#">Promoções</a>
          </Linkitem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)
export default Header
