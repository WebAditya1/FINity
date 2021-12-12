import React, { useEffect, useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'

import useComponentVisible from '../../../hooks/useComponentVisible'
import useWindowSize from '../../../hooks/useWindowSize'
import CONST from '../../../constants'
import ModalContext from '../../../store/modal'
import { AuthContext } from '../../../store/auth'

import Button from '../../button'
import NavigationDropdown from '../../navigation-dropdown'
import { Menu, Close, Logo } from '../../icons'

import styles from './header.module.css'
import {useState} from "react";




const Header = ({ className, ...props }) => {
  const { handleComponentVisible } = useContext(ModalContext)
  const { isAuthenticated, authState, logout } = useContext(AuthContext)
  const [Logout,setLogout] = useState(true);


  const {
    ref,
    toggleRef,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false)
  const size = useWindowSize()

  useEffect(() => {
    if (size.width > CONST.MOBILE_SIZE) {
      setIsComponentVisible(false)
    }
  }, [size])

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <div ref={toggleRef} className={styles.menuContainer}>
          <Button
            className={styles.menu}
            onClick={() => setIsComponentVisible((isOpen) => !isOpen)}
          >
            {isComponentVisible ? <Close /> : <Menu />}
          </Button>
        </div>
        <Button className={styles.logo} href="/">
          <Logo />
        </Button>
        <div className='finhome' style={{display: "flex",justifyContent:"center",textAlign:"center",flex: 1}}>
          <div className='mainpage' style={{color: "white" , paddingRight : "10px",fontFamily: 'Montserrat',fontStyle: "normal",fontWeight: "800",fontSize: "18px",lineHeight: "22px"}}>HOME</div>
          <div className='forum' style={{color: "white" , paddingRight : "10px",fontFamily: 'Montserrat',fontStyle: "normal",fontWeight: "800",fontSize: "18px",lineHeight: "22px"}}>FORUM</div>
        </div>

        {isAuthenticated() ? (
          <div className={styles.userInfo} style={{display:"flex",marginTop:"6px"}}>
            <p>
              {/* Welcome{' '} */}
              <Link
                href="/users/[user]"
                as={`/users/${authState.userInfo.username}`}
              >
                <a style={{fontFamily:'Playfair Display',color:"white",paddingRight:"20px",fontWeight:"900",fontStyle:"normal",fontSize:"14px",lineHeight:"19px"}}>{authState.userInfo.username}</a>
              </Link>
            </p>
            
           <div className='new-div' style={{display:"block"}}>
           
           <img id="avatar" src={authState.userInfo.profilePhoto} onClick={() => setLogout(!Logout)} style={{borderRadius:"50%",width: "24px",height: "24px"}}></img>
            <a className={Logout ? styles.hide:styles.show} onClick={() => logout()} style={{position:"fixed",top:"80px"}}>Log out</a>
           
            </div> 

          </div>
        ) : (
          <>
            <Button
              className={styles.auth}
              secondary
              onClick={() => handleComponentVisible(true, 'login')}
            >
              Log in
            </Button>
            <Button
              className={styles.auth}
              primary
              onClick={() => handleComponentVisible(true, 'signup')}
            >
              Sign up
            </Button>
          </>
        )}
      </div>
      <div ref={ref}>{isComponentVisible && <NavigationDropdown />}</div>
    </header>
  )
}

export default Header

