import React, { useState } from 'react';
import Menu from "../menuApi.js";
import Menucard from "../Menucard";
import Navbar from './Navbar';


const uniqueList = [
  ...new Set(Menu.map((curElem) => { /* jo ish line me (...dot dot dot)likha hua hn usko spread opretor khate h  */
    return curElem.category;
  })),
  "All",
];
console.log(uniqueList)

const Resturent = () => {
  const [menuData, setmenuData] = useState(Menu);  /*usestate hook ko ishtemal karne ke time usestate harmesha upper import react ke bagal me curlibracket me likha hoaga {usestate} ese he likha hoga */
  // console.log(menuData);
  const [menuList, setmenuList] = useState(uniqueList);


  const filterItem = (category) => {
    if (category==="All") {
      setmenuData(Menu);
      return;
      
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updatedList)


  };
  return (
    <>
      < Navbar filterItem={filterItem} menuList={menuList} />
      <Menucard menuData={menuData} />
    </>
  );

};

export default Resturent

