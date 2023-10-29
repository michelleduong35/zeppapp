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
      src: "mapImage2.png",
    });
    const locationText = createWidget(widget.BUTTON, {
      x: (480 - 400) / 2,
      y: 100,
      w: 400,
      h: 50,
      radius: 12,
      text_size: 22,
      normal_color: 0xbfafaf,
      press_color: 0xbfafaf,
      text: "Nearest Open:" + this.fetchData(),
    });
  },
  fetchData() {
    console.log("watch fetch data");

    this.request({
      method: "GET_DATA",
      lat: geolocation.getLatitude(),
      lon: geolocation.getLongitude(),
    })
      .then((data) => {
        console.log(data);

        if (!textWidget) {
          textWidget = hmUI.createWidget(hmUI.widget.TEXT, {
            ...FETCH_RESULT_TEXT,
            text,
          });
        } else {
          textWidget.setProperty(hmUI.prop.TEXT, text);
        }
      })
      .catch((res) => {
        console.log("watch fetch data failed");
        console.log(res);
      });
  },
});
