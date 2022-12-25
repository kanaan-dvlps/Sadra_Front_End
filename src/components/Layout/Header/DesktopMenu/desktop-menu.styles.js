import styled, { css } from "styled-components";


const orange = `var(--orange)`;

const borderStyles = css`
            content: '';
            border:1px solid ${orange};
            width: 80%;
            position: absolute;
            bottom: 0;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`
export const DesktopNav = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 120px;
    height: 100%;
    @media screen and (max-width:1200px){
        gap: 40px;
    }
`;

export const NavItem = styled.div`
    min-width: 150px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: end;
    padding-bottom: 37px;
    position: relative;
    &:hover{
        &::after{
         ${borderStyles}
        }
    }
    ${props => props.active && css`
        &::after{
         ${borderStyles}
        }
    `}
    
`;
export const NavLink = styled.a`
    font-weight:400;
    font-size: 1rem;
    color:#000;
    &:hover{
    color:#000;

    }
    
`;