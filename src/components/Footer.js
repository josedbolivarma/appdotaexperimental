import { BoxContentFooter, BoxFooter, FooterContainer, FooterStyled, IconFooter, Paragraht } from "../styled/styledcomponents";

const Footer = () => {
    
    return (
        <FooterStyled>
            <FooterContainer>
                <BoxFooter>
                    <IconFooter src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png"/>
                    <IconFooter src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png"/>
                </BoxFooter>
                <BoxContentFooter>
                <Paragraht>
                Dota y el logotipo de Dota son marcas comerciales y/o marcas comerciales registradas de Valve Corporation. 2021 Valve Corporation, todos los derechos reservados.
                </Paragraht>
                </BoxContentFooter>
            </FooterContainer>
        </FooterStyled>
    )
}

export default Footer;