import { Container, styled, Typography, Box } from "@mui/material";

const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.contrastText,
    padding: "80px 0",
}));

const About = () => {
    return (
        <StyledAbout id="about">
            <Container maxWidth="md">
                <Typography variant="h4" color="secondary" textAlign="center" pb={1}>
                    Sobre mim
                </Typography>
                <Box sx={{ width: "60px", height: "3px", backgroundColor: "secondary.main", margin: "0 auto 32px" }} />
                <Typography variant="h6" textAlign="center" fontWeight={400} sx={{ lineHeight: 1.8 }}>
                    Sou desenvolvedor de software com foco no ecossistema Salesforce
                    (Apex, LWC, Flows e Experience Cloud) e estudante de Ciência da
                    Computação. No dia a dia trabalho com integração de APIs REST,
                    automação de processos e tratamento de dados com Python e SQL.
                    Gosto de transformar processos manuais em soluções automáticas e confiáveis.
                </Typography>
            </Container>
        </StyledAbout>
    );
};

export default About;
