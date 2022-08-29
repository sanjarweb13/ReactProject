import { Layout } from "../../shared_components/layout";
import AboutComponent from "./homeComponents/aboutComponent";
import BookingComp from "./homeComponents/booking";
import HomeCardComponent from "./homeComponents/homeCardComp";
import RestoranMenu from "./homeComponents/menu";
import SpecialDrinkComponent from "./homeComponents/specialDringkComp";
import TheKeyToFineDiningPage from "./homeComponents/theKeyToFineDiningPage";

export function HomePage() {
  return (
    <Layout>
      <TheKeyToFineDiningPage />
      <AboutComponent />
      <BookingComp />
      <RestoranMenu />
      <HomeCardComponent/>
      <SpecialDrinkComponent />
    </Layout>
  );
}
