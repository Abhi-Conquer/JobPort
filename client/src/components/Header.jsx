import { AppBar, Toolbar, styled} from "@mui/material";
import { Link } from "react-router-dom";
import { routhpath } from "../routes/route";

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 64,
    '& > div > *':{
      textDecoration: 'none',
      color: 'inherit',
      marginRight: 20,
      fontSize: 14
    }
})

const Header = () => {
  const logo = "https://get-staffed.com/wp-content/uploads/2020/07/indeed-logo.png";
  return (
    <StyledAppBar>
      <Toolbar>
        <Link to ={routhpath.home}>
        <img src={logo} alt="logo" style={{ width: 100, marginBottom: 6}} />
        </Link>
        <Link to={routhpath.create}> Post a job </Link>
        <Link to={routhpath.posts}> Find jobs </Link>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
