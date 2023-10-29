import AutoGUI from "@silver-zepp/autogui";
import { createWidget, widget, prop } from "@zos/ui";
import { create, id } from "@zos/media";

const player = create(id.PLAYER);
const gui = new AutoGUI();

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
  build() {
    const img_hour = createWidget(widget.IMG);
    img_hour.setProperty(prop.MORE, {
      x: 0,
      y: 0,
      w: 500,
      h: 500,
      src: "mapImage3.png",
    });
  },
});
