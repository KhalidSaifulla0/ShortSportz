import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "@repo/pages/signup";
import { Signin } from "@repo/pages/signin";
import { Blog } from "@repo/pages/blog";
import Blogs from "@repo/pages/blogs";
import { NewBlog } from "@repo/pages/newBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/" element={<Signin />} />
          <Route path="/newblog" element={<NewBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
