import React from 'react'
import styled from 'styled-components'
const IncomingMessage = ({message}) => {
  return (
    <Wrapper>
        <Bubble>{message.message}</Bubble>
        <Details>
            <Name>{message.name}</Name>
            <Avatar>
                <img src={message.avatar} alt={message.name}/>
            </Avatar>
        </Details>
    </Wrapper>
  )
}

export default IncomingMessage
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    width: calc(100% - 24px);

`
const Bubble = styled.div`
    background: #424657;
    padding: 20px;
    margin-left: 70px;
    border-radius: 28px 28px 28px 4px;
    font-weight: 500;
`
const Details = styled.div`
    display: flex;

`
const Name = styled.div`
    font-weight: 500;
`
const Avatar = styled.div`
   margin-left: 12px;

   & > img {width: 22px;
    border-radius: 50%;
   }
`
