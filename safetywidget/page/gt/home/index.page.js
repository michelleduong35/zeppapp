import * as hmUI from "@zos/ui";
import AutoGUI from "@silver-zepp/autogui";
import { log as Logger } from "@zos/utils";
import { TEXT_STYLE } from "zosLoader:./index.page.[pf].layout.js";
import { createWidget, widget, prop, event } from "@zos/ui";
const gui = new AutoGUI();
/*const logger = Logger.getLogger("button1");

const button1 = gui.button("Need Safety!", () => {
  my_text.update({ text: "click when safe" });

  const props = my.text.getProperties();
  console.log(`Text: ${props.text}
              Height: ${props.h}`);
});*/

Page({
  build() {
    // Create a non-clickable filled circle beneath the clickable one
    const shadowSOS = createWidget(widget.CIRCLE, {
      center_x: 240,
      center_y: 250,
      radius: 120,
      color: 0x3f2222,
      alpha: 255,
    });

    //create sos button
    const buttonSOS = createWidget(widget.BUTTON, {
      x: 120,
      y: 105,
      w: 240,
      h: 240,
      radius: 240,
      normal_color: 0x9e2828,
      press_color: 0x9e2828,
      text: "SOS",
      click_func: (button_widget) => {
        button_widget.setProperty(prop.MORE, {
          x: 120,
          y: 130,
          w: 240,
          h: 240,
          radius: 240,
        });
      },
    });
  },
});
