import { Layout } from "../../shared_components/layout";
import SubscribeComp from "../../shared_components/subscribeNewsletter";
import ChefInfo from "./aboutComponents/aboutChefInfo";
import HistorySlice from "./aboutComponents/aboutHistoryComponent";
import AboutVideSlice from "./aboutComponents/aboutVideoComponent";
import WelcomeSlice from "./aboutComponents/aboutWelcomeSliceComponent";
export function AboutUsPage() {
  return (
    <Layout>
      <WelcomeSlice/>
      <HistorySlice/>
      <AboutVideSlice/>
      <ChefInfo/>
    </Layout>
  );
}
