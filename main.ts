let strip: neopixel.Strip = null
let stop = 8
let vooruit = 94
let achteruit = 95
let links = 93
let rechts = 92
basic.forever(function () {
    let ir_waarden = 0
    if (ir_waarden == vooruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 53)
        strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (ir_waarden == achteruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 53)
        strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (ir_waarden == links) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 53)
        strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (ir_waarden == rechts) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 53)
        strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (ir_waarden == stop) {
        maqueen.motorStop(maqueen.Motors.All)
        strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    }
})
