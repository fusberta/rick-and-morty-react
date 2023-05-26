import React, { useState, useEffect } from "react"
import './sidebar.css'
import {CgClose} from 'react-icons/cg'

const Sidebar = ({ open, setOpen, head_text, items }) => {

    const [activeTab, setActiveTab] = useState(sessionStorage.getItem('activeTab') || 'Главная');

    useEffect(() => {
        sessionStorage.setItem('activeTab', activeTab);
      }, [activeTab]);
    
    return (
        <div className={open ? "sidebar active" : "sidebar"} onClick={() => setOpen(false)}>
            <div className="sidebar-content" onClick={(e) => e.stopPropagation()}>
                <div className="sidebar-header">
                    <h2>{head_text}</h2>
                    <button onClick={() => setOpen(false)}><CgClose /></button>
                </div>
                <ul className="sidebar-nav">
                    {items.map(item =>
                        <li className="sidebar-item" key={item.id}>
                            <a href={item.href} className={`sidebar-link ${activeTab === item.value ? 'active' : ''}`}
                               onClick={() => setActiveTab(item.value)}>
                                {item.value}
                            </a>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    )
};

export default Sidebar;
