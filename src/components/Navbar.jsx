import React, { useRef, useState, useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa6";
import ClubIcon from "../assets/icons/Icon.png";
import LoaderContext from "../context/loaderContext";
import LoadingBar from 'react-top-loading-bar'


const Navbar = () => {
  const [overflow, setOverflow] = useState(true)
  const navbar = useRef(null);
  const checkBox = useRef(null);

  const {progress, setProgress}  = useContext(LoaderContext);

  const handleOnClick = () => {
    setOverflow(!overflow);
    navbar.current.classList.toggle("right-0");
    navbar.current.classList.toggle("right-[-100%]");
  }

  const handleOnLinkClick = () => {
    setProgress(60);
    checkBox.current.checked = !checkBox.current.checked;
    window.scrollTo({
      top: 0,
      left: 0
    });
    setProgress(70);
    handleOnClick();
  }



  return (
    <>
      <LoadingBar
        color='#00c252'
        height={3}
        progress={progress}
        shadow={true}
        onLoaderFinished={() => setProgress(0)}
      />
      
      <nav className={`flex py-2 px-4 justify-end w-full sticky top-0 left-0 z-10 md:py-3 md:justify-around ${overflow ? "overflow-hidden" : ""}  bg-[#dedede] text-black items-center shadow-[0px_2px_10px_#636363]`}>
        <div className='absolute top-full py-12 space-y-8 w-full flex flex-col z-10 right-[-100%] ease-in-out duration-500 bg-[#dedede] md:space-y-0 md:p-0 md:w-fit  md:top-0 md:flex-row items-center md:space-x-7 md:relative md:right-0' ref={navbar}>
          <img src={ClubIcon} alt="" className='h-44 w-44 md:h-12 md:w-12' />
          <ul className='text-center text-xl  md:text-base pb-5 space-y-3 md:flex md:space-x-5 md:space-y-0 md:p-0'>
            <li><NavLink onClick={handleOnLinkClick} to="/" className="font-semibold md:text-base">Home</NavLink></li>
            <li><NavLink onClick={handleOnLinkClick} to="/about" className="font-semibold md:text-base">About</NavLink></li>
            <li><NavLink onClick={handleOnLinkClick} to="/events" className="font-semibold md:text-base">Events</NavLink></li>
            <li><NavLink onClick={handleOnLinkClick} to="/members" className="font-semibold md:text-base">Members</NavLink></li>
            <li><NavLink onClick={handleOnLinkClick} to="/contact" className="font-semibold md:text-base">Contact</NavLink></li>
          </ul>
        </div>
        <div className='flex justify-center items-center space-x-5'>
          <a href="https://instagram.com/ecoharitima?utm_source=qr&igshid=YzU1NGVlODEzOA==" target="_blank" rel="noreferrer" className='h-8 w-8 grid place-items-center bg-[#d62976] rounded-md md:cursor-pointer'><FaInstagram className='h-6 w-6 text-white' /></a>
          <div className='md:hidden'>
            <input type="checkbox" className='hidden' id="checkbox" ref={checkBox} />
            <label onClick={handleOnClick} htmlFor="checkbox" className="toggle relative w-8 h-8 flex flex-col items-center justify-center gap-[6.5px] duration-500">
              <div id="bar1" className="bars w-9/12 h-1 bg-[#1DB954] rounded-md "></div>
              <div id="bar2" className="bars w-full h-1 bg-[#1DB954] rounded-md duration-700"></div>
              <div id="bar3" className="bars w-9/12 h-1 bg-[#1DB954] rounded-md"></div>
            </label>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default Navbar;