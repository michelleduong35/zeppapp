import { TEXT_STYLE } from "zosLoader:./index.page.[pf].layout.js";
import { createWidget, widget, prop, event } from "@zos/ui";
import { Vibrator, VIBRATOR_SCENE_DURATION } from "@zos/sensor";
import { push } from "@zos/router";
import * as hmUI from "@zos/ui";
import { log as Logger } from "@zos/utils";
import { BasePage } from "@zeppos/zml/base-page";
import { Geolocation } from "@zos/sensor";

import {
  FETCH_BUTTON,
  FETCH_RESULT_TEXT,
} from "zosLoader:./index.[pf].layout.js";

const logger = Logger.getLogger("fetch_api");
//create vibrator
const vibrator = new Vibrator();
vibrator.setMode(VIBRATOR_SCENE_STRONG_REMINDER);

const geolocation = new Geolocation();
geolocation.start();

var lattext = 0;
var lontext = 0;

var callback = () => {
  if (geolocation.getStatus() === "A") {
    lattext = geolocation.getLatitude();
    lontext = geolocation.getLongitude();
  }
};
geolocation.onChange(callback);

let textWidget;

Page({
  build() {
    // Create a non-clickable filled circle beneath the clickable one
    const shadowSOS = createWidget(widget.CIRCLE, {
      center_x: 240,
      center_y: 250,
      radius: 150,
      color: 0x3f2222,
      alpha: 255,
    });

    //create sos button, on click moves, vibrates, and redirects to map (where it sounds on open)
    const buttonSOS = createWidget(widget.BUTTON, {
      x: 100,
      y: 90,
      w: 300,
      h: 300,
      radius: 300,
      normal_color: 0x9e2828,
      press_color: 0x9e2828,
      text: "SOS",
      text_size: 120,
      click_func: (button_widget) => {
        button_widget.setProperty(prop.MORE, {
          x: 90,
          y: 115,
          w: 300,
          h: 300,
          radius: 300,
          TEXT_STYLE,
        });
        vibrator.start();
        console.log(lattext);
        this.fetchData();
        push({
          url: "page/gt/home/map.page",
        });
      },
    });
  },
});
