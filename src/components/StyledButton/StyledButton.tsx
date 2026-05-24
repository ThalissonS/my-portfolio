import { styled } from "@mui/material";
import type { ReactNode } from "react";
import theme from "../../theme";

// Interface que diz ao TypeScript o que o botão aceita
interface StyledButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    download?: boolean;
    target?: string;
}

// Estilos compartilhados entre o <button> e o <a> (link), para não repetir
const buttonStyles = {
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "10px 15px",
    width: "100%",
    maxWidth: "300px",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "1rem",
    fontFamily: "inherit",
    "&:hover": {
        backgroundColor: theme.palette.secondary.light,
    },
};

const CustomButton = styled("button")(buttonStyles);
const CustomLink = styled("a")(buttonStyles);

// Se receber "href", vira um link <a>; senão, é um <button> com onClick
const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick, href, download, target }) => {
    if (href) {
        return (
            <CustomLink
                href={href}
                download={download}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                onClick={onClick}
            >
                {children}
            </CustomLink>
        );
    }

    return (
        <CustomButton onClick={onClick}>
            {children}
        </CustomButton>
    );
};

export default StyledButton;
