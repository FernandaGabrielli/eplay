import { Link } from 'react-router-dom'
import { HeaderBar, Links, Linkitem, CartButton } from './styles'

import logo from '../../assets/images/logo.svg'
import carrinho from '../../assets/images/carrinho.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
      <CartButton onClick={openCart}>
        {items.length}- produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  )
}
export default Header
