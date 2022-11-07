import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import { TfiArrowRight } from "react-icons/tfi"
import { SlSocialInstagram } from "react-icons/sl"
import useIsMobile from '../hooks/isMobile'
import Collapse from 'react-bootstrap/Collapse'
import {Link} from 'react-router-dom'

const Footer = () => {
    const {mobile} = useIsMobile()
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)

    return (
        (mobile)
        ? <footer className='mobile'>
            <div>
                <button type='button' onClick={() => setOpen(!open)} aria-expanded={open}>Выбор языка:</button>
                <Collapse in={open}>
                    <ul className='list-unstyled mt-3'>
                        <li>Русский</li>
                        <li>English</li>
                        <li>日本語</li>
                    </ul>
                </Collapse>
            </div>
            <div>
                <button type='button' onClick={() => setOpen2(!open2)} aria-expanded={open2}>Информация:</button>
                <Collapse in={open2}>
                    <ul className='list-unstyled mt-3'>
                        <li><Link to='/about'>О Компании</Link></li>
                        <li><Link to='/sales'>Точки продаж</Link></li>
                        <li><Link to='/payment'>Оплата</Link></li>
                        <li><Link to='/delivery'>Доставка</Link></li>
                        <li><Link to='/public-offer'>Публичная оферта</Link></li>
                        <li><Link to='/contacts'>Контакты</Link></li>
                    </ul>
                </Collapse>
            </div>
            <div className='d-flex justify-content-between'>
                <div>© 22|11 Cosmetics</div>
                <div>
                    <a href='https://www.instagram.com/2211cosmetics/' target='_blank' rel="noreferrer">
                        <SlSocialInstagram className='fs-15'/>
                    </a>
                </div>
            </div>
        </footer>
        : <footer className='desktop'>
            <Container>
                <div className='d-flex justify-content-between'>
                    <div>
                        <div className='d-block mb-3'>Подписаться на рассылку:</div>
                        <form className='search'>
                            <input type='email' placeholder='email адрес' className='inverse'/>
                            <button type='submit'><TfiArrowRight/></button>
                        </form>
                    </div>
                    <nav>
                        <ul className='list-unstyled'>
                            <li><Link to='/about'>О Компании</Link></li>
                            <li><Link to='/sales'>Точки продаж</Link></li>
                            <li><Link to='/payment'>Оплата</Link></li>
                            <li><Link to='/delivery'>Доставка</Link></li>
                            <li><Link to='/public-offer'>Публичная оферта</Link></li>
                            <li><Link to='/contacts'>Контакты</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='d-flex justify-content-between'>
                    <div>© 22|11 Cosmetics</div>
                    <div>
                        <a href='https://www.instagram.com/2211cosmetics/' target='_blank' rel="noreferrer">
                            <SlSocialInstagram className='fs-20'/>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;