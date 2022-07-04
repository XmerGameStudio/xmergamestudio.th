/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Dikkat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostüm 1", "./Dikkat/costumes/kostüm 1.svg", {
        x: 215.6552734375,
        y: -65.26875000000001
      })
    ];

    this.sounds = [new Sound("pop", "./Dikkat/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Dikkat" },
        this.whenIReceiveDikkat
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveDikkat() {
    this.effects.ghost = 0;
    this.effects.clear();
    this.visible = true;
    yield* this.wait(2);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
