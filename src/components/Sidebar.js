import React from 'react'
import styled from 'styled-components'
import cpLogo from '../assets/cplogo.png'
import {getAuth, signOut} from 'firebase/auth'

const Sidebar = ({user, setUser}) => {
  /* A state hook that is used to set the active icon in the sidebar. */
    const [activeIcon, setActiveIcon] = React.useState('inbox')
  /* Getting the authentication from the firebase. */
    const auth = getAuth()
  return (
    <Wrapper>
        <LogoContainer> 
            <img src={cpLogo} alt="logo" />
        </LogoContainer>
        <SidebarIcons>
            <SidebarIcon onClick={() => setActiveIcon('inbox')}>
                <i className="fas fa-inbox" style={{color: activeIcon === "inbox" && "#1d90f4"}}/>
            </SidebarIcon>
            <SidebarIcon onClick={() => setActiveIcon('cog')}>
                <i className="fas fa-cog" style={{color: activeIcon === "cog" && "#1d90f4"}}/>
            </SidebarIcon>
            <SidebarIcon onClick={() => setActiveIcon('user')}>
                <i className="fas fa-user" style={{color: activeIcon === "user" && "#1d90f4"}}/>
            </SidebarIcon>
            <SidebarIcon onClick={() => setActiveIcon('bolt')}>
                <i className="fas fa-bolt" style={{color: activeIcon === "bolt" && "#1d90f4"}}/>
            </SidebarIcon>
         </SidebarIcons>
        <ProfileIcon onClick={() => signOut(auth)}> 
                <img src={user.avatar} alt={user.name} />
        </ProfileIcon>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
    height: calc( 100vh - 100px);	
    padding: 50px 0;
    width: 100px;	
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const LogoContainer = styled.div`
    height: 70px;
    object-fit: contain;
    & > img {
        height: 100%;

    }
`
const SidebarIcons = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

const SidebarIcon = styled.div`
     & > i {
         color: #767789;
        font-size: 28px;
        padding: 28px;
        border-radius: 50%;


        &:hover{
         color: #184773;
         cursor: pointer;
     }
     }
   
`

const ProfileIcon = styled.div`
    height: 70px;
    object-fit: contain;
    display: flex;

& > img{
    height: 80%;
    border-radius: 50%;
    object-fit: contain;

    &:hover{
        --webkit-box-shadow: 0px 5px 24px -3px #000;
        box-shadow: 0px 5px 24px -3px #000;
    }
}

&:hover {
    cursor: pointer;
    transform: scale(1.01);
}


`
