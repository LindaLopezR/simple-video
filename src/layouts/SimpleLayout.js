import { Outlet } from "react-router-dom";
import { Footer, NavbarMainSimple, NavbarMenuSimple } from "../components/navbar/Navbars";
import { BasicAds } from "../components/other/Ads";

export default function SimpleLayout() {
  return (
    <>
      <div className="ads ads-top centered leaderboard-sm leaderboard-md banner-lg">
        <BasicAds />
      </div>

      <NavbarMainSimple />
      <NavbarMenuSimple />
      <div
        className="container container-layout"
      >
        <div className="ads skyscraper-xl left">
          <BasicAds />
        </div>

        <div className="ads ads-home centered mobile-xs leaderboard-xs leaderboard-sm leaderboard-md banner-lg">
          <BasicAds />
        </div>

        <Outlet />

        <div className="ads skyscraper-xl right">
          <BasicAds />
        </div>
      </div>
      <Footer />
    </>
  );
}
