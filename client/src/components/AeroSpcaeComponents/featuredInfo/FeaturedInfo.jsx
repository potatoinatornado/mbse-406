import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Logs</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Order</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Track</span>
      </div>
    </div>
  );
}
