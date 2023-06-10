import styled, {css} from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'neutral';

interface ButtonContainerProps {
    variant: ButtonVariant
}

const ButtonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green',
    neutral: 'gray'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`

width: 100px;
height: 40px;
border-radius: 4px;
border:0;
margin: 8px;


background-color: ${props => props.theme.primary};
color: ${props => props.theme.white};


/*${props =>{
    return css 
    `background-color: ${ButtonVariants[props.variant]}`
}}
*/
`