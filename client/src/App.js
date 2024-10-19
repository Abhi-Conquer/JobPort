import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import {routhpath} from "../src/routes/route";
import AllPosts from "./pages/AllPosts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={routhpath.home} element={<Home/>}/>
        <Route path={routhpath.create} element={<CreatePost/>}/>
        <Route path={routhpath.posts} element={<AllPosts/>}/>
      </Routes>
    </Router>
  );
}

export default App;
