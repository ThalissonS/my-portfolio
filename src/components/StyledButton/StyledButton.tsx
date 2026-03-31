import { styled } from "@mui/material";
import type { ReactNode } from "react";
import theme from "../../theme";


// 1. Definimos uma "Interface" para dizer ao TypeScript o que o botão aceita
interface StyledButtonProps {
    children: ReactNode; // Isso permite texto, ícones, outros componentes, etc.
}

const CustomButton = styled("button")(() => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "10px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
    }
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  return (
    <CustomButton>
        {children}
    </CustomButton>
  )
}

export default StyledButton;