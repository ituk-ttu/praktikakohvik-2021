import styled from "styled-components"

import { Container } from "../../global"

export const Nav = styled.nav`
  padding: ${props => (props.scrolled ? `16px 0` : `24px 0`)};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: ${props => (props.scrolled ? `white` : null)};
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  border-bottom: 5px solid;
  border-image: linear-gradient(to right, ${props => props.theme.color.secondary}, ${props => props.theme.color.tertiary} ) 1;
`

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.medium};
  ${props => props.theme.font_size.xsmall};

  a {
    text-decoration: none;
    opacity: 0.9;
    color: ${props => props.theme.color.black.regular};
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`

export const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: ${props => props.theme.color.regular};
`

export const Brand = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      color: ${props => props.theme.color.black.regular};
      text-decoration: none;
    }
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.xs}) {
    display: none;
  }

  button {
    font-family: ${props => props.theme.font.normal};
    ${props => props.theme.font_size.xsmall};
    color: white;
    background: #4c3b8e;
    border-radius: 15px;
    padding: 10px 16px;
    text-transform: uppercase;
    font-size: 12px;
  }
`

export const Mobile = styled.div`
  display: none;

  @media (max-width: ${props => props.theme.screen.xs}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.xs}) {
      display: none;
    }
  `}
`

export const HeaderButton = styled.button`
  font-weight: 700;
  font-size: 12px;
  color: ${props => props.theme.color.primary};
  letter-spacing: 1px;
  height: 42px;
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.background.white};
  padding: 0px 35px;
  border-width: 1px;
  border-radius: 25px;
  border-style: solid;
  border-color: ${props => props.theme.color.primary};
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

// Background blur info
// background-color: ${props => props.scrolled && `rgba(245, 245, 250, .8`};
// box-shadow:  ${props =>
//   props.scrolled &&
//   `0 0 0 1px rgba(0,0,50,.02) inset, 0 1px 1px rgba(0,0,50,.05) inset, 0 2px 4px rgba(0,0,50,.04) inset`};
//   backdrop-filter: ${props => props.scrolled && `blur(15px)`};
