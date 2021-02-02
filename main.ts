sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    info.changeLifeBy(2)
    myCorg.startEffect(effects.trail, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let myCorg: Sprite = null
myCorg = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . 4 4 4 . . . . 4 4 4 . . . . 
    . 4 5 5 5 e . . e 5 5 5 4 . . . 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
    . e e 5 5 5 5 5 5 5 5 e e . . . 
    . . e 1 f 5 5 5 5 f 1 e . . . . 
    . . f 1 f 5 3 3 5 f 1 f . f f . 
    . . . 4 5 5 f f 5 5 6 f f 5 f . 
    . . . f 6 6 6 6 6 6 4 f 5 5 f . 
    . . . f 5 5 5 5 5 5 5 4 5 f . . 
    . . . . f 5 4 5 f 5 f f f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Player)
let grrrrr = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . c c c . . . . c c c . . . . 
    . c e e e e . . e e e e c . . . 
    c e e e e e e e e e e e e c . . 
    c e e c c e e e e c c e e c . . 
    e e c c e e e e e e c c e e . . 
    . e e e e e e e e e e e e . . . 
    . . e 1 f e e e e f 1 e . . . . 
    . . f 1 f e 2 2 e f 1 f . f f . 
    . . . c e e f f e e 6 f f e f . 
    . . . f 6 6 6 6 6 6 c f e e f . 
    . . . f e e e e e e e c e f . . 
    . . . . f e c e f e f f f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Enemy)
let food_1 = sprites.create(img`
    . . 2 2 2 2 2 2 2 . . . . . . . 
    . 2 2 4 4 4 4 4 4 2 . . . . . . 
    2 2 4 4 4 4 d d 4 4 2 . . . . . 
    2 2 4 4 4 4 4 4 d 4 2 . . . . . 
    2 2 4 4 4 4 4 4 4 d 4 2 . . . . 
    2 2 4 4 4 4 4 4 4 4 4 2 . . . . 
    2 2 4 4 4 4 4 4 4 4 4 e . . . . 
    2 2 2 4 4 4 4 4 4 4 2 e . . . . 
    . 2 2 2 2 4 4 4 2 2 2 e . . . . 
    . . e 2 2 2 2 2 2 2 e e . . . . 
    . . . e e 2 4 4 2 e e e b . . . 
    . . . . . e e e e e e b d b b . 
    . . . . . . . . . . . b 1 1 1 b 
    . . . . . . . . . . . c 1 d d b 
    . . . . . . . . . . . c 1 b c . 
    . . . . . . . . . . . . c c . . 
    `, SpriteKind.Food)
let food_2 = sprites.create(img`
    . . 2 2 2 2 2 2 2 . . . . . . . 
    . 2 2 4 4 4 4 4 4 2 . . . . . . 
    2 2 4 4 4 4 d d 4 4 2 . . . . . 
    2 2 4 4 4 4 4 4 d 4 2 . . . . . 
    2 2 4 4 4 4 4 4 4 d 4 2 . . . . 
    2 2 4 4 4 4 4 4 4 4 4 2 . . . . 
    2 2 4 4 4 4 4 4 4 4 4 e . . . . 
    2 2 2 4 4 4 4 4 4 4 2 e . . . . 
    . 2 2 2 2 4 4 4 2 2 2 e . . . . 
    . . e 2 2 2 2 2 2 2 e e . . . . 
    . . . e e 2 4 4 2 e e e b . . . 
    . . . . . e e e e e e b d b b . 
    . . . . . . . . . . . b 1 1 1 b 
    . . . . . . . . . . . c 1 d d b 
    . . . . . . . . . . . c 1 b c . 
    . . . . . . . . . . . . c c . . 
    `, SpriteKind.Food)
scene.cameraFollowSprite(myCorg)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(myCorg)
forever(function () {
    pause(1000)
    grrrrr.follow(myCorg)
})
forever(function () {
    pause(1000)
    tiles.placeOnRandomTile(food_1, assets.tile`transparency16`)
    pause(1000)
    tiles.placeOnRandomTile(food_2, assets.tile`transparency16`)
    pause(1000)
    tiles.placeOnRandomTile(grrrrr, assets.tile`transparency16`)
})
forever(function () {
	
})
