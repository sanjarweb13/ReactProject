import { Layout } from "../../shared_components/layout";
import SubscribeComp from "../../shared_components/subscribeNewsletter";
import ChefInfo from "./aboutComponents/aboutChefInfo";
import HappyCustomers from "./aboutComponents/aboutHAppyCustomersComponent";
import HistorySlice from "./aboutComponents/aboutHistoryComponent";
import ImageSlide from "./aboutComponents/aboutImageSlideComponent";
import AboutVideSlice from "./aboutComponents/aboutVideoComponent";
import WelcomeSlice from "./aboutComponents/aboutWelcomeSliceComponent";
import SimpleSlider from "./aboutComponents/SLickSlider";
export function AboutUsPage() {
  return (
    <Layout>
      <WelcomeSlice/>
      <HistorySlice/>
      <AboutVideSlice/>
      <ChefInfo/>
      <HappyCustomers/>
      <ImageSlide/>
      <SimpleSlider/>
    </Layout>
  );
}
