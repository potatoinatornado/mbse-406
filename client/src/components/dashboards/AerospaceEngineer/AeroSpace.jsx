
import FeaturedInfo from "../../AeroSpcaeComponents/featuredInfo/FeaturedInfo";
import "./AeroSpace.css";
import WidgetLg from "../../AeroSpcaeComponents/widgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="homeWidgets">
        <WidgetLg />
      </div>
    </div>
  );
}
