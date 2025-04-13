controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    mySprite.changeScale(1, ScaleAnchor.Middle)
})
let mySprite: Sprite = null
// controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
// 
// MOUSE_Y += -1
// 
// })
// 
// controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
// 
// MOUSE_X += -1
// 
// })
// 
// controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
// 
// MOUSE_X += 1
// 
// })
// 
// controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
// 
// MOUSE_Y += 1
// 
// })
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b c . . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    b d d d b b d 5 5 5 4 4 4 4 4 b 
    b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
    b d c 5 5 5 5 d 5 5 5 5 5 b . . 
    c d d c d 5 5 b 5 5 5 5 5 5 b . 
    c b d d c c b 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
