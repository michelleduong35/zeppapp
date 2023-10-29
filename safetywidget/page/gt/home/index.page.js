import { TEXT_STYLE } from "zosLoader:./index.page.[pf].layout.js";
import { createWidget, widget, prop, event } from "@zos/ui";
import { Vibrator, VIBRATOR_SCENE_DURATION } from "@zos/sensor";
import { push } from "@zos/router";

//create vibrator
const vibrator = new Vibrator();
vibrator.setMode(VIBRATOR_SCENE_STRONG_REMINDER);

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
        push({
          url: "page/gt/home/map.page",
        });
      },
    });
  },
});
