import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Routes, Route, useNavigate } from "react-router-dom";
import Splash from "./components/splash/splashscreen";
import Breath from "./components/breath/breathin";
import SignIn from "./components/signin/signin";
import CreateAccount from "./components/createaccount/createaccount";
import Ipromise from "./components/Promise/promise";
import Iphone from "./components/iphone/iphone";
import Iphone2 from "./components/iphone/iphone2";
import Home from "./components/home/home";
import Post from "./components/post/post";
import AddPost from "./components/post/addpost";
import Profile from "./components/profile/profile";
import ProfileOne from "./components/profile/profile1";
import ProfileTwo from "./components/profile/profile2";
import MainProfile from "./components/mainprofile/mainprofile";
import SocialPost from "./components/socialservice/socialpost";
import AnxietyPost from "./components/anxietypost/anxiety";
import AddPostTwo from "./components/post/addpost2";
import SocialPostTwo from "./components/socialservice/socailposttwo";
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/breath" element={<Breath />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/iprom" element={<Ipromise />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/iphone2" element={<Iphone2 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profileone" element={<ProfileOne />} />
          <Route path="/profiletwo" element={<ProfileTwo />} />
          <Route path="/main" element={<MainProfile />} />
          <Route path="/social" element={<SocialPost />} />
          <Route path="/anxiety" element={<AnxietyPost />} />
          <Route path="/addtwo" element={<AddPostTwo />} />
          <Route path="/socialtwo" element={<SocialPostTwo />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
