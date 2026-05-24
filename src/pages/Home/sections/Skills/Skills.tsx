import { Container, styled, Typography, Box, Chip, Grid } from "@mui/material";

const StyledSkills = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: "80px 0",
}));

const groups = [
    { title: "Salesforce", items: ["Apex", "LWC", "Flows", "Triggers", "Experience Cloud", "Administrator"] },
    { title: "Uso frequente", items: ["Python", "SQL", "JavaScript"] },
    { title: "Conhecimento", items: ["Java", "Spring Boot", "Angular", "React", "TypeScript"] },
    { title: "Dados & Ferramentas", items: ["Oracle", "Supabase", "Git/GitHub", "APIs REST", "ETL"] },
];

const Skills = () => {
    return (
        <StyledSkills id="skills">
            <Container maxWidth="lg">
                <Typography variant="h4" color="secondary" textAlign="center" pb={1}>
                    Habilidades
                </Typography>
                <Box sx={{ width: "60px", height: "3px", backgroundColor: "secondary.main", margin: "0 auto 40px" }} />
                <Grid container spacing={4}>
                    {groups.map((g) => (
                        <Grid size={{ xs: 12, md: 6 }} key={g.title}>
                            <Typography variant="h6" color="primary.contrastText" pb={2}>
                                {g.title}
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                                {g.items.map((item) => (
                                    <Chip
                                        key={item}
                                        label={item}
                                        sx={{
                                            color: "primary.contrastText",
                                            border: "1px solid",
                                            borderColor: "secondary.main",
                                            backgroundColor: "transparent",
                                        }}
                                    />
                                ))}
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledSkills>
    );
};

export default Skills;
