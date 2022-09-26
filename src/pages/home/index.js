import { Layout } from "../../shared_components/layout";
import AboutComponent from "./homeComponents/homeAbout";
import BookingComp from "./homeComponents/booking";
import HomeCardComponent from "./homeCard/index.js";
import RestoranMenu from "./homeComponents/menu";
import SpecialDrinkComponent from "./homeComponents/homeDrinks";
import TheKeyToFineDiningPage from "./homeComponents/homeWelcome";

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
