import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Linkedin </FooterLinkTitle>
              <SocialIconLink href="/" target="_blank" aria-label="Eric">
                Eric Martins
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Gustavo">
                Gustavo Oliveira
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Rodrigo">
                Rodrigo Hardt
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/smilly-delmondes-307927207/"
                target="_blank"
                aria-label="smilly"
              >
                Smilly Aguilar
              </SocialIconLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Contate-Nos </FooterLinkTitle>
              <FooterLink to="/">Contato</FooterLink>
              <FooterLink to="/">Suport</FooterLink>
              <FooterLink to="/">Endereço</FooterLink>
              <FooterLink to="/">Patrocínios</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Videos </FooterLinkTitle>
              <FooterLink to="/">Enviar Video</FooterLink>
              <FooterLink to="/">Embaixadores</FooterLink>
              <FooterLink to="/">Agencia</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Media Sócial </FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Kenzie-IMDB
            </SocialLogo>
            <WebsiteRights>
              KenzieIMDB © {new Date().getFullYear()} Todos os direitos
              reservados.
            </WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
