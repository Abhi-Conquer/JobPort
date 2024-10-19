import Header from "../components/Header";
import { Box, Typography, Button, styled } from "@mui/material";
import animatedImage from "../assets/animated.png";
import { useNavigate } from "react-router-dom";
import { routhpath } from "../routes/route";

const Component = styled(Box)({
    display: 'flex',
    height: '100vh',
    alignItems: 'center',  // Remove duplicate 'alignItems'
    margin: '0 150px',
    '& > div': {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '& > p': {
            fontSize: 56,
            lineHeight: 1.25,
            letterSpacing: -1,  // Fix property name to 'letterSpacing'
        },
        '& > button': {
            width: 220,
            height: 60,
            background: 'rgb(37,87,167)',  // Correct 'rgb' syntax
            textTransform: 'none',
            fontSize: 16,
            fontWeight: 700,
            marginTop: 48,
        },
    },
});

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <Component>
                <Box>
                    <Typography>Let's make your next great hire. Fast.</Typography>
                    <Button variant="contained" onClick={() => navigate(routhpath.create)}> Post a Job</Button>
                </Box>
                <Box>
                    <img src={animatedImage} alt="home" style={{ width: '600px', height: 'auto' }} />
                </Box>
            </Component>
        </div>
    );
};

export default Home;
