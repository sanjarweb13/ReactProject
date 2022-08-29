import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUsPage } from "./pages/about";
import { BlogPage } from "./pages/blog";
import { ContactPage } from "./pages/contact";
import DetailPage from "./pages/detail";
import { FAQPage } from "./pages/faq";
import { HomePage } from "./pages/home";
import BarMenu from "./pages/home/homeComponents/homeMenu/barMenu";
import FoodMenu from "./pages/home/homeComponents/homeMenu/foodMenu";
import DesertMenu from "./pages/home/homeComponents/homeMenu/desertMenu";
import ViewMorePage from "./pages/home/viewMore/viewMore";
import ViewMoreDetailPage from "./pages/home/viewMore/viewMoreDetail";
import LoginPage from "./pages/login";
import { ServicePage } from "./pages/services";
import { TeamUsPage } from "./pages/team";
import AuthProvider from "./utilis/authContext";
import FoodDetail from "./pages/home/homeComponents/homeMenu/foodCard/foodDetail";
import BarDetail from "./pages/home/homeComponents/homeMenu/barCard/barDetail";
import DesertDetail from "./pages/home/homeComponents/homeMenu/desertCard/desertDetail";

function App() {
  return (
    <>
      <div className="font-cormorant">
        <AuthProvider>

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
                <Route path="/foodMenu" element={<FoodMenu/>} />
                <Route path="/desertMenu" element={<DesertMenu />} />
                <Route path="/detailPage/:id" element={<DetailPage />} />
                <Route path="/viewMore" element={<ViewMorePage />} />
                <Route path="/viewMore/:id" element={<ViewMoreDetailPage />} />
                <Route path="/foodDetail/:id" element={<FoodDetail />} />
                <Route path="/barDetail/:id" element={<BarDetail />} />
                <Route path="/desertDetail/:id" element={<DesertDetail />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </BrowserRouter>

        </AuthProvider>
      </div>
    </>
  );
}

export default App;
