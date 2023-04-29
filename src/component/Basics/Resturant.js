import React, { useState } from 'react'
import "./style.css";
import MenuCard from './menuCard';
import Menu from './menuApi';
import Navbar from './Navbar';

const Resturant = () => {

    const uniqueList = [
        ...new Set(
            Menu.map((curEle) => {
                return curEle.category;
            })
        ),
        "All"
    ];
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);





    const filteritem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curEle) => {
            return curEle.category === category;
        });
        setMenuData(updatedList);
        console.log("Hiii");

    };
    return (
        <>
            <Navbar filteritem={filteritem} menuList={menuList} />

            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturant