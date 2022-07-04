/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("kostüm 1", "./Button/costumes/kostüm 1.svg", {
        x: 87.68421052631578,
        y: 24.5
      }),
      new Costume("kostüm 2", "./Button/costumes/kostüm 2.svg", {
        x: 87.68421052631578,
        y: 16.5
      })
    ];

    this.sounds = [
      new Sound("2", "./Button/sounds/2.wav"),
      new Sound("1", "./Button/sounds/1.mp3")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        this.costume = "kostüm 2";
      } else {
        this.costume = "kostüm 1";
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (
        new Date().getHours() == 21 &&
        new Date().getMinutes() > 29 && new Date().getMinutes() < 60 &&
        !(new Date().getDate() == this.stage.vars.Ktd)
      ) {
        this.stage.vars.Alarm = 1;
      } else {
        this.stage.vars.Alarm = 0;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      if (
        this.stage.vars.Alarm == 1 &&
        this.touching("mouse") && this.mouse.down
      ) {
        this.stage.vars.Ktd = new Date().getDate();
        this.stage.vars.Alarm = 0;
      }
      if (
        this.stage.vars.Alarm == 0 &&
        this.touching("mouse") && this.mouse.down
      ) {
        this.broadcast("Dikkat");
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.stage.vars.Alarm == 1) {
        yield* this.playSoundUntilDone(1);
        yield* this.wait(1);
      }
      yield;
    }
  }

  *whenKeyRPressed() {
    if (this.keyPressed("e")) {
      if (this.keyPressed("s")) {
        if (this.keyPressed("t")) {
          this.stage.vars.Ktd = new Date().getDate();
        } else {
          yield* this.wait(0);
          return;
        }
      } else {
        yield* this.wait(0);
        return;
      }
    } else {
      yield* this.wait(0);
      return;
    }
  }
}
