import { Container, styled, Typography, Box, Grid, Card, CardContent } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StyledButton from "../../../../components/StyledButton/StyledButton";

const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    padding: "80px 0",
}));

const projects = [
    {
        title: "Salesforce Maps",
        description: "Componente (LWC) que calcula e desenha rotas de visita com múltiplas paradas, integrando a API de roteirização OSRM com Leaflet. Marcadores numerados, calculadora de distância e cache para reduzir chamadas de API.",
        tags: ["LWC", "JavaScript", "API REST"],
        repo: "https://github.com/ThalissonS/SalesforceMap",
    },
    {
        title: "Cash-Flow",
        description: "API de controle financeiro em Spring Boot com arquitetura em camadas e tratamento de exceções. Registra receitas, despesas e investimentos para projetar quanto falta até uma meta. Backend hospedado na Render.",
        tags: ["Java", "Spring Boot", "Angular"],
        repo: "https://github.com/ThalissonS/cashflow-back",
    },
    {
        title: "AjudeAqui",
        description: "Portal de autoatendimento em Experience Cloud que permite ao cliente abrir e acompanhar Cases diretamente, reduzindo chamados manuais. Projeto interno desenvolvido no trabalho.",
        tags: ["LWC", "Apex", "Experience Cloud"],
        repo: null,
    },
];

const Projects = () => {
    return (
        <StyledProjects id="projects">
            <Container maxWidth="lg">
                <Typography variant="h4" color="secondary" textAlign="center" pb={1}>
                    Projetos
                </Typography>
                <Box sx={{ width: "60px", height: "3px", backgroundColor: "secondary.main", margin: "0 auto 40px" }} />
                <Grid container spacing={4}>
                    {projects.map((p) => (
                        <Grid size={{ xs: 12, md: 4 }} key={p.title}>
                            <Card
                                sx={{
                                    height: "100%",
                                    backgroundColor: "background.paper",
                                    color: "primary.contrastText",
                                    display: "flex",
                                    flexDirection: "column",
                                    border: "1px solid",
                                    borderColor: "divider",
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" color="secondary" pb={1}>
                                        {p.title}
                                    </Typography>
                                    <Typography variant="body2" pb={2} sx={{ lineHeight: 1.7 }}>
                                        {p.description}
                                    </Typography>
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                                        {p.tags.map((tag) => (
                                            <Typography
                                                key={tag}
                                                variant="caption"
                                                sx={{ border: "1px solid", borderColor: "secondary.main", borderRadius: "3px", padding: "2px 8px" }}
                                            >
                                                {tag}
                                            </Typography>
                                        ))}
                                    </Box>
                                </CardContent>
                                {p.repo && (
                                    <Box sx={{ p: 2 }}>
                                        <StyledButton href={p.repo} target="_blank">
                                            <GitHubIcon />
                                            <Typography>Ver no GitHub</Typography>
                                        </StyledButton>
                                    </Box>
                                )}
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;
