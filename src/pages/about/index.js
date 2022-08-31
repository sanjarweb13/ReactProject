import { Layout } from "../../shared_components/layout";
import ChefInfo from "./aboutComponents/aboutChefInfo";
import HappyCustomers from "./aboutComponents/aboutHAppyCustomersComponent";
import HistorySlice from "./aboutComponents/aboutHistoryComponent";
import AboutVideSlice from "./aboutComponents/aboutVideoComponent";
import WelcomeSlice from "./aboutComponents/aboutWelcomeSliceComponent";
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
