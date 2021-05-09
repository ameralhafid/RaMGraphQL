import React from "react";
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Characters',
        path: '/characters',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Episode',
        path: '/episode',
        icon: <IoIcons.IoIosFilm/>,
        cName: 'nav-text'
    }
]