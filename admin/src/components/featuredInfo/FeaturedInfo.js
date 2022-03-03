import React from "react";
import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">수익</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₩2,415,000</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">전월 대비</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">매출</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₩4,415,000</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">전월 대비</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">원가</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">₩2,225,000</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">전월 대비</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
