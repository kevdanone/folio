import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import bgimg from "../images/bg.jpg"
import {Overlay} from "./header"
import {H2} from "../pages/index"
import { IconContext } from "react-icons";
import { FaLinkedin , FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa'

const Foot = styled.footer`
    display:flex;
    justify-content:center;
    position:relative;
    height: 60vh;
    margin-top: -5em;
    background: url(${bgimg}) fixed center no-repeat;
    background-size: cover;
    clip-path: polygon(0 7%,100% 0%,100% 100%,0 100%);
`
const Text= styled.p`
    font-size: 1.4em;
    color: hsla(0,0%,100%,.9);
`

const FooterContent = styled.div`
    position:relative;
    z-index:2;
    padding-top:5em;
    width: 70%;
    color:white;
`
const Icons = styled.div`
    display:flex;
    justify-content:space-around;
    padding: 0 30% 3em;
    border-bottom: 2px solid hsla(0,0%,100%,.125);
`
const A = styled.a`
    color: white;
`
const CreateBy= styled.p`
    text-align:center;
    padding-top:2em;
    color:hsla(0,0%,100%,.5);
`

const Footer = ({data}) => (

    <Foot>
        <FooterContent>
            <H2>Contact Me</H2>
            <Text>to better know about me.</Text>
            <IconContext.Provider value={{ size: "3em"}}>
                <Icons>
                    <A href={data.linkedin} target="_blank" ><FaLinkedin /></A>
                    <A href={data.twitter} target="_blank" ><FaTwitter /></A>
                    <A href={data.github} target="_blank" ><FaGithub /></A>
                    <A href={data.mail} target="_blank" ><FaEnvelope /></A>
                </Icons>
            </IconContext.Provider>
            <CreateBy>
                © 2021, By Kevin Lauro
            </CreateBy>
        </FooterContent>
    <Overlay/>   
    </Foot>

)

Footer.propTypes = {
    data: PropTypes.object,
  }
  
  export default Footer