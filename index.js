import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Text from "./Text/Text.js";
import Button from "./Button/Button.js";
import Dikkat from "./Dikkat/Dikkat.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Text: new Text({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Button: new Button({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Dikkat: new Dikkat({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
