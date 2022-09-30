input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    music.playMelody("C C D C F E - - ", 120)
    basic.showString("Happy Birthday!!!")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
music.playMelody("C C D C F E - - ", 120)
basic.showString("Happy Birthday!!!")
