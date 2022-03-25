import styled from "styled-components";
import { Link } from "react-router-dom";


/*------Pages------*/
//Home
export const HomeStyled = styled.section`
width: 100%;
display: flex;
justify-content: center;
min-height: 100vh;
background: rgb(4,0,11);
background: linear-gradient(90deg, rgba(4,0,11,1) 0%, rgba(8,9,26,1) 37%, rgba(42,47,87,1) 77%, rgba(59,59,93,1) 100%);
`;

//Containers

//ContainerCharacters
export const ContainerCharactersStyled = styled.section`
width: 98%;
margin: 2rem auto;
display:grid;
grid-template-columns: repeat(4 , auto);
gap: 30px;
`;

//Utilities
export const StyledLink = styled(Link)`
    color: #FFF;
    text-decoration: none;
    margin: 0 1rem;
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: bold;
`;

//Components

export const HeaderStyled = styled.header`
width: 100%;
padding: 1.66rem 0;
background: rgb(4,0,11);
background: linear-gradient(90deg, rgba(4,0,11,1) 0%, rgba(20,22,40,1) 37%, rgba(64,67,91,1) 77%, rgba(71,71,97,1) 100%);
color: #FFF;
`;

export const NavStyled = styled.nav`
    width: 98%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;    
`;

export const CharacterStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-end;
    gap: 20px;
    position: relative;
    width: 280px;
    height: 480px;
    color: #FFF;
    background: rgb(15,0,36);
    background: linear-gradient(90deg, rgba(15,0,36,1) 0%, rgba(2,2,56,1) 33%, rgba(1,118,166,1) 77%, rgba(107,59,59,1) 100%);
    border-radius: 22px;
    box-shadow:  15px 15px 30px #acacac,
             -15px -15px 30px #ffffff;
`;

export const BannerStyled = styled.img`
width: 100%;
height: 100%;
border-radius: 22px;
position: absolute;
object-fit: cover;
opacity: .88;
`;

export const CharacterDescription = styled.article`
    padding: 1rem;
    width: 100%;
    z-index: 1000;
`;

export const AtributteStyled = styled.span`
    background: ${props => props.atributo === "fuerza"? "linear-gradient(90deg, rgba(75,7,7,1) 0%, rgba(114,11,11,1) 37%, rgba(165,20,20,1) 77%, rgba(255,0,0,1) 100%)" : props.atributo === "agilidad"? "linear-gradient(90deg, rgba(14,63,28,1) 0%, rgba(10,150,59,1) 37%, rgba(13,207,63,1) 77%, rgba(8,255,35,1) 100%)" : "linear-gradient(90deg, rgba(7,3,51,1) 0%, rgba(41,71,112,1) 37%, rgba(71,216,219,1) 77%, rgba(131,209,255,1) 100%)"};
    padding: .4rem .8rem;
    border-radius: 2px;
    font-size: 1.2rem;
    color: #FFF;
    text-transform: uppercase;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
`;

export const CharacterSkills = styled.div`
    display: flex;
    gap: 10px;
`;

export const FooterStyled = styled.footer`
padding: 2rem 0;
background-color: #000;
color: #FFF
`;

export const FooterContainer = styled.div`
    width: 98%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const IconFooter = styled.img`
    width: 100px;
    height: auto;
    margin: 0 .6rem;
`;

export const BoxFooter = styled.div`
    display: flex;
    align-items: center;
`;

export const BoxContentFooter = styled.div`
    width: 480px;
`;

export const Paragraht = styled.p`
    color: #CCC;
    font-size: 1.1rem;
`;