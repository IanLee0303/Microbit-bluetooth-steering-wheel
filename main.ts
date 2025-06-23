let steer = 0
let x = 0
gamepad.startGamepadService()
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    steer = Math.map(x, -1024, 1024, -127, 127)
    steer = Math.constrain(steer, -127, 127)
    let throttle = input.buttonIsPressed(Button.B) ? 127 : 0
let brake = input.buttonIsPressed(Button.A) ? 127 : 0
gamepad.send(
    gamepad._buttons(GameButton.none, true),
    steer,
    0,
    gamepad._dpad(GameDirection.noDirection),
    throttle,
    brake
    )
    led.plotBarGraph(
    Math.abs(steer),
    127
    )
    basic.pause(50)
})
