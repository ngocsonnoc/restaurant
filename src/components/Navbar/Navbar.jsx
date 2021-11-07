import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { BagBadge, BagIcon, CartContent, CartItem, ItemImg, ItemName, ItemPrice, ItemQty, CartFooter, CartLinkWr, CartLink, Flag, CartHeader, ItemWrap, Language, LanguageWrapper, Link, Logo, MenuIcon, NavbarLink, NavbarLogo, NavbarRight, NavbarWrapper, Search, SearchIcon, SearchWrapper, CartWrapper, Message } from './nav.elm'
import logo from '../../assets/img/logo.png'
import vi from '../../assets/img/vi.png'
import en from '../../assets/img/us.png'
const NavItem = ({ label, to, activeOnlyWhenExact, click }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 1 : 0
            return (
                <ItemWrap active={active ? active : null} >
                    <Link onClick={click} active={active ? active : null} to={to}>{label}</Link>
                </ItemWrap>
            )
        }} />
    )
}
const HandleCartItem = ({ item }) => <CartItem >
    <ItemImg src={item.image} alt={item.name} />
    <ItemName>{item.name}</ItemName>
    <ItemPrice>${item.price}</ItemPrice>
    <ItemQty>x{item.qty}</ItemQty>
</CartItem>
const Navbar = ({ data, cartItems }) => {
    const [active, setActive] = useState(false)
    const [search, setSearch] = useState(false)
    const [language, setLanguage] = useState('en')
    const [cart, setCart] = useState([])
    const [onScroll, setOnScroll] = useState(false)
    const handleActiveNavbar = () => {
        setActive(!active)
    }
    const handleActiveSearch = () => {
        setSearch(!search)
    }
    const handleSwitchLanguage = (e) => {
        localStorage.setItem('language', e.target.value)
        setLanguage(e.target.value)
    }
    const handleCartItem = (cart) => {
        var uniqueArr = [];
        var objStrings = [];
        var resultArr = []
        var counts = {}
        cart.forEach((element) => {
            if (typeof element === "object" && element !== null) {
                var eleString = JSON.stringify(element);
                if (!objStrings.includes(eleString)) {
                    uniqueArr.push(element);
                    objStrings.push(eleString);
                }
            }
        });
        cart.forEach(function (obj) {
            var key = JSON.stringify(obj)
            counts[key] = (counts[key] || 0) + 1
        })
        uniqueArr.forEach((item) => {
            var key = JSON.stringify(item)
            resultArr.push(item = { ...item, qty: counts[key] })
        })
        return resultArr;
    }
    useEffect(() => {
        const handleResetNavbar = () => {
            if (window.innerWidth > 992) {
                setActive(false)
            }
        }
        window.addEventListener('resize', handleResetNavbar)
        return () => {
            window.removeEventListener('resize', handleResetNavbar)
        }
    }, [active])
    useEffect(() => {
        const handleActiveNav = () => {
            var y = window.pageYOffset
           if(y!=null&&y>100){
               setOnScroll(true)
           }
           else{
               setOnScroll(false)
           }
        }
        window.addEventListener('scroll', handleActiveNav)
        return () => {
            window.removeEventListener('scroll', handleActiveNav)
        }
    }, [onScroll])
    useEffect(() => {
        localStorage.setItem('cart-item', JSON.stringify(handleCartItem(cartItems)))
        setCart(JSON.parse(localStorage.getItem('cart-item')))
    }, [cartItems])
    const renderNavLink = (data, click) => {
        var result = null
        if (data) {
            result = data.map((item, index) => {
                return (
                    <NavItem click={click} label={item.label} to={item.to} activeOnlyWhenExact={item.exact} key={index} />
                )
            })
        }
        return result
    }
    return (
        <NavbarWrapper active={active} onScroll={onScroll}>
            <NavbarLogo>
                <Logo src={logo} alt='logo' />
                <MenuIcon onClick={handleActiveNavbar} />
            </NavbarLogo>
            <NavbarLink active={active}>
                {renderNavLink(data, handleActiveNavbar)}
            </NavbarLink>
            <NavbarRight active={active}>
                <BagBadge badgeContent={cart.length?cart.length:''} color='error'>
                    <BagIcon />
                    <CartWrapper>
                        <div className='bridge'></div>
                        <CartHeader>
                            Your Order
                        </CartHeader>
                        <CartContent>
                            {cart.length > 0 ? cart.map((item, index) => <HandleCartItem item={item} key={index} />) : <Message>Bạn chưa chọn sản phẩm nào!</Message>}
                        </CartContent>
                        <CartFooter>
                            {cart.length > 0 ? <CartLinkWr>
                                <CartLink to='/cart'>View Cart</CartLink>
                                <CartLink to='/cart/checkout'>Check Out</CartLink>
                            </CartLinkWr> : <CartLinkWr><CartLink to='/category'>Let Buy Something!</CartLink></CartLinkWr>
                            }
                        </CartFooter>
                    </CartWrapper>
                </BagBadge>

                <SearchIcon onClick={handleActiveSearch} />
                <SearchWrapper search={search}>
                    <Search type='text' placeholder='Search for...' />
                </SearchWrapper>
                <LanguageWrapper>
                    <Language onChange={(e) => handleSwitchLanguage(e)}>
                        <option value="en" key="en"  >EN </option>
                        <option value="vi" key="vi">VI </option>
                    </Language>
                    <Flag src={language === 'vi' ? vi : en} alt='vi' />
                </LanguageWrapper>

            </NavbarRight>
        </NavbarWrapper>
    )
}

export default Navbar
