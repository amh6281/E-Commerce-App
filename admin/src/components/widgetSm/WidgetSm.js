import React from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://user-images.githubusercontent.com/83646986/156501089-92b5bf79-321b-4868-a8e9-314fa164ff4e.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">amh</span>
            <span className="widgetSmUserTitle">hma</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://user-images.githubusercontent.com/83646986/156501089-92b5bf79-321b-4868-a8e9-314fa164ff4e.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">amh</span>
            <span className="widgetSmUserTitle">hma</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://user-images.githubusercontent.com/83646986/156501089-92b5bf79-321b-4868-a8e9-314fa164ff4e.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">amh</span>
            <span className="widgetSmUserTitle">hma</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://user-images.githubusercontent.com/83646986/156501089-92b5bf79-321b-4868-a8e9-314fa164ff4e.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">amh</span>
            <span className="widgetSmUserTitle">hma</span>
          </div>
          <button className="widgetSmButton">
            <Visibility />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://user-images.githubusercontent.com/83646986/156501089-92b5bf79-321b-4868-a8e9-314fa164ff4e.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">amh</span>
            <span className="widgetSmUserTitle">hma</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
