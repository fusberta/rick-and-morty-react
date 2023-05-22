import React, { useState, useEffect } from "react"
import './header.css'
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from 'react-icons/hi'
import Sidebar from "../sidebar/sidebar";

const Header = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('home');
  const [open, setOpen] = useState(false);
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  const items = [
    { id: 1, value: 'Главная', href: '/' },
    { id: 2, value: 'Персонажи', href: '/characters' },
    { id: 3, value: 'Локации', href: '/locations' },
    { id: 4, value: 'Эпизоды', href: '/episodes' }
  ]

  const controlHeader = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlHeader);

      return () => {
        window.removeEventListener('scroll', controlHeader);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {

    function handleResize() {
      setClientWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header className={`header ${!show || open ? 'hidden' : ''}`}>
        <div className="logo">
          <Link to={"/"}>
            Rick & Morty WiKi
          </Link>
        </div>
        <nav className="menu">
          {clientWidth > 1280 ? <ul className="menu-container">
            <li className="menu-item">
              <Link to={"/"}
                className={`menu-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}>
                Главная
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/characters"}
                className={`menu-link ${activeTab === 'characters' ? 'active' : ''}`}
                onClick={() => setActiveTab('characters')}>
                Персонажи
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/locations"}
                className={`menu-link ${activeTab === 'locations' ? 'active' : ''}`}
                onClick={() => setActiveTab('locations')}>
                Локации
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/episodes"}
                className={`menu-link ${activeTab === 'episodes' ? 'active' : ''}`}
                onClick={() => setActiveTab('episodes')}>
                Эпизоды
              </Link>
            </li>
          </ul>
            :
            <button className='menu-open-btn' onClick={() => setOpen(!open)}>
              <HiMenuAlt1 className="menu-icon" size={30} />
            </button>}
        </nav>
      </header>
      <Sidebar head_text={'Бургер меню'} open={open} setOpen={setOpen} items={items} />
    </>
  )
};

export default Header;
