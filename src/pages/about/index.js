import { Layout } from "../../shared_components/layout";
import ChefInfo from "./AboutComponents/aboutChefInfo";
import HappyCustomers from "./AboutComponents/aboutHappyCustomers";
import HistorySlice from "./AboutComponents/aboutHistory";
import AboutVideSlice from "./AboutComponents/aboutVideo";
import WelcomeSlice from "./AboutComponents/aboutWelcome";
import SimpleSlider from "./SLickSlider";
export function AboutUsPage() {
  return (
    <Layout>
      <WelcomeSlice/>
      <HistorySlice/>
      <AboutVideSlice/>
      <ChefInfo/>
      <HappyCustomers/>
      <SimpleSlider/>
    </Layout>
  );
}
