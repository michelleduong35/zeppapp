import * as hmUI from "@zos/ui";
import AutoGUI from "@silver-zepp/autogui";
import { log as Logger } from "@zos/utils";
import { TEXT_STYLE } from "zosLoader:./index.page.[pf].layout.js";
import { createWidget, widget, prop, event } from "@zos/ui";
const gui = new AutoGUI();
const logger = Logger.getLogger("button1");

/*
const button1 = gui.button("Need Safety!", () => {
  my_text.update({ text: "click when safe" });

  const props = my.text.getProperties();
  console.log(`Text: ${props.text}
              Height: ${props.h}`);
});*/

Page({
  build() {
    const my_text = gui.text("click if in danger");
    gui.newRow();
    const button1 = gui.button("Danger", () => {
      AutoGUI.SetColor(0x6aa84f);
      my_text.update({ text: "click when safe" });
      gui.render(true);
    });
    gui.render();
  },
});
