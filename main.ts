let cliente = 0
input.onButtonPressed(Button.A, function () {
    if (cliente >= 1) {
        cliente += -1
        basic.showNumber(cliente)
    } else {
        basic.showNumber(cliente)
    }
})
input.onButtonPressed(Button.AB, function () {
    cliente = 0
    basic.showNumber(cliente)
})
input.onButtonPressed(Button.B, function () {
    cliente += 1
    basic.showNumber(cliente)
})
