//import AutoGUI from "@silver-zepp/autogui";
//import * as hmUI from "@zos/ui";
//import { log as Logger } from "@zos/utils";
//import { TEXT_STYLE } from "zosLoader:./index.page.[pf].layout.js";
//import { createWidget, widget, prop, event } from "@zos/ui";
//import { Vibrator, VIBRATOR_SCENE_DURATION } from "@zos/sensor";
import { push } from "@zos/router";
import { create, id } from "@zos/media";

const player = create(id.PLAYER);

player.addEventListener(player.event.PREPARE, function (result) {
  if (result) {
    console.log("=== prepare succeed ===");
    player.start();
  } else {
    console.log("=== prepare fail ===");
    player.release();
  }
});

player.addEventListener(player.event.COMPLETE, function (result) {
  console.log("=== play end ===");
  player.stop();
  player.release();
});

player.setSource(player.source.FILE, {
  file: "raw/SOS_Siren.mp3",
});

Page({
  onInit() {
    //plays alarm on creation
    player.prepare();
  },
  build() {},
});
