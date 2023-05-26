import React, { useState, useEffect } from "react"
import './header.css'
import { Link } from "react-router-dom";
import { HiMenuAlt1 } from 'react-icons/hi'
import Sidebar from "../sidebar/sidebar";

const Header = () => {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState(sessionStorage.getItem('activeTab') || 'Главная');
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
      if (window.scrollY > lastScrollY && window.scrollY > 200) {
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
    sessionStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

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
                className={`menu-link ${activeTab === 'Главная' ? 'active' : ''}`}
                onClick={() => setActiveTab('Главная')}>
                Главная
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/characters"}
                className={`menu-link ${activeTab === 'Персонажи' ? 'active' : ''}`}
                onClick={() => setActiveTab('Персонажи')}>
                Персонажи
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/locations"}
                className={`menu-link ${activeTab === 'Локации' ? 'active' : ''}`}
                onClick={() => setActiveTab('Локации')}>
                Локации
              </Link>
            </li>
            <li className="menu-item">
              <Link to={"/episodes"}
                className={`menu-link ${activeTab === 'Эпизоды' ? 'active' : ''}`}
                onClick={() => setActiveTab('Эпизоды')}>
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
