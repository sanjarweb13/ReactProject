import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUsPage } from "./pages/about";
import { BlogPage } from "./pages/blog";
import { ContactPage } from "./pages/contact";
import DetailPage from "./pages/detail";
import { FAQPage } from "./pages/faq";
import { HomePage } from "./pages/home";
import BarMenu from "./pages/home/homeComponents/barMenu";
import DesertMenu from "./pages/home/homeComponents/desertMenu";
import FoodMenu from "./pages/home/homeComponents/foodMenu";
import ViewMorePage from "./pages/home/viewMore/viewMore";
import ViewMoreDetailPage from "./pages/home/viewMore/viewMoreDetail";
import { ServicePage } from "./pages/services";
import { TeamUsPage } from "./pages/team";

function App() {
  return (
    <>
      <div className="font-cormorant">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/team" element={<TeamUsPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/barMenu" element={<BarMenu />} />
            <Route path="/foodMenu" element={<FoodMenu />} />
            <Route path="/desertMenu" element={<DesertMenu />} />
            <Route path="/detailPage/:id" element={<DetailPage />} />
            <Route path="/viewMore" element={<ViewMorePage />} />
            <Route path="/viewMore/:id" element={<ViewMoreDetailPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
