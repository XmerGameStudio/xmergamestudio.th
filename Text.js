/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Text extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Text", "./Text/costumes/Text.svg", {
        x: 87.09667418711078,
        y: 116.432986692032
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}
