basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        led.plot(2, 0)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        led.plot(2, 0)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        led.plot(0, 2)
    }
})
