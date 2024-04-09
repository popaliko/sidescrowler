namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const FinalBoss = SpriteKind.create()
    export const BossProcetile = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.FinalBoss, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    if (info.score() <= 0) {
        game.over(false)
        game.splash(info.highScore())
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    projectile.setPosition(Crow.x, Crow.y)
    projectile.setVelocity(50, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 50)
    otherSprite.destroy()
})
info.onCountdownEnd(function () {
    FinalBossFight = 1
    Boss = sprites.create(assets.image`HungryWorm`, SpriteKind.FinalBoss)
    tiles.placeOnTile(Boss, tiles.getTileLocation(28, 3))
    scroller.scrollBackgroundWithSpeed(0, 0)
    BossLife = 8
    animation.runImageAnimation(
    Boss,
    [img`
        .............333bbbbbbbbbbbb............
        ...........333333bbbbbbbbbbbb...........
        .........333333333bbbbbbbbbbbb3.........
        ........33333333333bbbbbbbbbbb33........
        ......33333333333333bbbbbbbbbb33........
        ......33333333333333bbbbbbbbbb3333......
        .....3333333333333333bbbbbbbbb33333.....
        ....33333333333333333bbbbbbbbbb33333....
        ....333333333333333333bbbbbbbbb33333....
        ...3333333333333333333bbbbbbbbb333333...
        ..33333333333f33333333bbbbbbbbb3333333..
        ..3333333333f333333333bbbbbbbbbb333333..
        .3333333333f22222333333bbbbbbbbb333333b.
        .3333333333322222333333bbbbbbbbb333333b.
        33333333333322222333333bbbbbbbbb333333bb
        3f333333333322222333333bbbbbbbbb333333bb
        33f333333333f2222333333bffbbbbbb333333bb
        222f3333333333333333333bfbbbbbbb333333bb
        222333333333333333333ffffbbbbbbb333333bb
        f22333fffff3333333333ffffbbbbbbb33333bbb
        33333fffffff333333333333ffbbbbbb33333bbb
        3333ffffffffff3333333333bbbbbbbb33333bbb
        3333fffffffffff333333333bbbbbbb33333bbbb
        333ffff22222fff333333333bbbbbbb33333bbbb
        333fff2233333ff333333333bbbbbbb3333bbbbb
        333ff223333333333333333bbbbbbbb333bbbbbb
        333ff223333333333333333bbbbbbb333bbbbbbb
        .33ff333333333333333333bbbbbbb33.bbbbbbb
        .33ff333333333333333333bbbbbbb3...bbbbbb
        ..333333333333333333333bbbbbb33...bbbbbb
        ..333333333333333333333bbbbbb....3333333
        ...3333333333333333333bbbbbb....33333333
        ....333333333333333333bbbb......33333333
        ........33333333333333bbb......bbbbbbbb.
        ..............3333333..........bbbbbbb..
        ..............................bbbbbbb...
        .............................3bbbbbb....
        ............................333bbbb.....
        ...........................33333b.......
        .........................33333..........
        `,img`
        .............33333bbbbbbb333333.........
        ...........3333333bbbbbb333333333.......
        .........333333333bbbbbb33333333bb......
        ..............3333bbbbb333333333bbb.....
        ..................bbbbb33333333bbbbb....
        ......................b3333333bbbbbbb...
        ........33333333........333333bbbbbbb3..
        ......3333333333333......3333bbbbbbb333.
        .....333333333333333b......33bbbbbb3333.
        ....3333333333333333bb......3bbbbb333333
        ...3333333333f333333bb.......bbbb3333333
        ..3333333333f3333333bbbb......bbb3333333
        ..333333333f222223333bbbb.......33333333
        .33333333333222223333bbbbbb......3333333
        333333333333222223333bbbbbbb.....3333333
        3f33333333332222233333bbbbbbb....bbb3333
        33f333333333f222233333bbffbbbb...bbbbbb3
        222f333333333333333333bbfbbbbb...bbbbbbb
        222333333333333333333ffffbbbbbb333bbbbbb
        f22333fffff3333333333ffffbbbbbb3333bbbbb
        33333fffffff33333333333bffbbbbb33333bbbb
        3333ffffffffff333333333bbbbbbbb33333bbbb
        3333fffffffffff33333333bbbbbbbb333333bbb
        333ffff22222fff33333333bbbbbbbbb33333bbb
        333fff2233333ff33333333bbbbbbbbb333333bb
        333ff223333333333333333bbbbbbbbb333333bb
        333ff223333333333333333bbbbbbbbb333333bb
        333ff333333333333333333bbbbbbbbb3333333b
        333ff333333333333333333bbbbbbbbb3333333b
        33333333333333333333333bbbbbbbbb3333333b
        3333333333333333333333bbbbbbbbbb3333333b
        .333333333333333333333bbbbbbbbb33333333b
        ..33333333333333333333bbbbbbbbb33333333b
        ...333333333333333333bbbbbbbbbb33333333.
        ....33333333333333333bbbbbbbbbb3333333..
        ....33333333333333333bbbbbbbbbb3333333..
        .....333333333333333bbbbbbbbbb3333333...
        ......33333333333333bbbbbbbbb3333333....
        .......333333333333bbbbbbbbbb333333.....
        ........3333333333bbbbbbbbbb333333......
        `],
    200,
    true
    )
    animation.runMovementAnimation(
    Boss,
    animation.animationPresets(animation.shake),
    2000,
    true
    )
})
function AbfragePunktestand () {
    if (info.score() <= 0) {
        game.over(false)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 50)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.FinalBoss, function (sprite, otherSprite) {
    if (BossLife <= 0) {
        otherSprite.destroy(effects.ashes, 100)
        FinalBossFight = 0
        game.over(true)
        game.splash(info.highScore())
    } else {
        BossLife += -1
    }
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.BossProcetile, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    AbfragePunktestand()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    AbfragePunktestand()
    pause(500)
})
let projectile2: Sprite = null
let Fruits: Sprite = null
let HungryWorm: Sprite = null
let BossLife = 0
let Boss: Sprite = null
let projectile: Sprite = null
let FinalBossFight = 0
let Crow: Sprite = null
scene.setBackgroundImage(img`
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7776677777777767777777777777777777777777777667777777776777777777777777777777777777766777777777677777777777777777777777777776677777777767777777777777777777777777
    7666777777777667777777777777777777777767766677777777766777777777777777777777776776667777777776677777777777777777777777677666777777777667777777777777777777777767
    7767766777667766777766777777777777777766776776677766776677776677777777777777776677677667776677667777667777777777777777667767766777667766777766777777777777777766
    6666667767766766776766777777777777776676666666776776676677676677777777777777667666666677677667667767667777777777777766766666667767766766776766777777777777776676
    6666677766766666766667777777777777666677666667776676666676666777777777777766667766666777667666667666677777777777776666776666677766766666766667777777777777666677
    6666676666666676666677767777776667776667666667666666667666667776777777666777666766666766666666766666777677777766677766676666676666666676666677767777776667776667
    6666666666666776677666667766677766777666666666666666677667766666776667776677766666666666666667766776666677666777667776666666666666666776677666667766677766777666
    6666666666666766667766677677667766666666666666666666676666776667767766776666666666666666666667666677666776776677666666666666666666666766667766677677667766666666
    66b666666666666666666667667776676666666666b666666666666666666667667776676666666666b666666666666666666667667776676666666666b6666666666666666666676677766766666666
    66b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b6776666666666666b6666666666666666666666b67766666666666
    66b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb676666666666666b6666666666666666666666bb6766666666666
    66b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb66666666666666b66666669bb666666669966bbb666666666666
    66b66666699dbb666666dd9666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb66666666666666b666666999bb666666999666bb666666666666
    6bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb6666666666666bb6669669966bbb69666d9966bb666666666666
    6bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb666666666666bb666d96696d9bbb9966d9966bbb66666666666
    6bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb666666666666bb66dd9999d996bb99ddd96666bb66666666666
    bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666bbb666d9999d996bb99dd99669dbbb6696666666
    bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666bbbdd6d9999d999bbb9dd999996bbb6699966666
    bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666bbb6ddd9999d9999bb9dd9999d6bbb9699666666
    bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966bbb6ddd999d99999bbbdd9999d9bbb9999669966
    bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996bbbdddd999d999999bbdd9999d9bbbb9999d9996
    bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999bb9dddd99dd9999999bb9999dd9bbbb9999d9999
    bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999bb99ddddd999999999bbb999d999bbb9999d9999
    bb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999bbb99dddd9999999999dbbbbdd999bbb9999d999b
    bb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999bbb99ddd99999999999ddbbbb9999bbbb999d999b
    bb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999bbb99ddd99999999999ddbbbbbb99bbbb999d999b
    b9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99bb9999dd9999999999ddddbbbbbbbbbbbb999d99b
    b9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99bb9999ddd999999999dd99999bbbbbbbbb999d99b
    b9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bbb9999dddd99999999dd999999bbbbbbbb999d9bb
    b9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbbb9999ddddd999999ddd9999999bbbbbbb999dbbb
    dd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbbdd99999ddddd9999ddd999999999bbbbb999bbbb
    9d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb99d99999ddddddd9ddd9999999999bbbbb99bbbb9
    9d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb999d999999dddddddddd9999999999bbbbb99bbb99
    9d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb9999d999999ddddddddd99999999999bbbbb99bb999
    9dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd999dd99999ddddddd9999999999999bbbbb99bbd99
    99dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd9999dd9999dddddd99999999999999bbbbb99bbd99
    99ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd999ddd999dddddd99999999999999bbbbb9bbbdd9
    9999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d99999dddddddddd9999999999999bbbbbb9bbb9d9
    9999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d99999dddddddddd9999999999999bbbbbbbbb99d9
    999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd999999dddddddd9999999999999bbbbbbbbb99dd
    d9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999dd9999999dddddd999999999999bbbbbbbbb9999d
    dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999dd9999999ddddd999999999999bbbbbbbbb99999
    dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999dd9999999ddddd999999999999bbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb9999999d9999999ddddd99999999999bbbbbbbbb999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    9dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb99999999dd999999ddddd99999999999bbbbbbbb9999999
    ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999ddd999999ddddd99999999999bbbbbbbb9999999
    dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999dd9999999ddddd99999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999dd9999999dddddd9999999999bbbbbbbb9999999
    dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999dd9999999dddddd9999999999bbbbbbb99999999
    d99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999dd99999999dddddd9999999999bbbbbbb9999999d
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    d99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999ddd99999999dddddd9999999999bbbbbbb999999dd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd999999999ddddddd999999999bbbbbbb99999ddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd999999999dddddddd99999999bbbbbbb9999dddd
    999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9999999999dddddddd99999999bbbbbbb9999ddd9
    9999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd99999999999dddddddd999999bbbbbbbb9999ddd9
    d999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbddddddddd999999999dddddddd999999bbbbbbbbdddddddd
    ddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbdddddddddddd99999dddddddd999999bbbbbbbbbddddddd
    dddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddddddddddd99ddddddddd999ddbbbbbbbbbddddddd
    ddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbdddddddddddddddddddddddddd9ddddbbbbbbbbbddddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    ddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddddddddddddddddddddddddddbbbbbbbbbbbdddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    dddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddddddddddddddddddddddddddbbbbbbbbbbbbddddd
    ddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbdddddddddddddddddddddddd7777777777bbbbbbddddd
    dddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddddddddddddddddd77777777777777777777bddddd
    ddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777ddddddddddddddd7777777777777777777777777dddd
    dddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dddddddddd777777777777777777777777777777dd
    ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777ddddd77777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
tiles.setTilemap(tilemap`Level5`)
Crow = sprites.create(assets.image`Crow`, SpriteKind.Player)
controller.moveSprite(Crow, 125, 125)
Crow.setStayInScreen(true)
animation.runImageAnimation(
Crow,
[img`
    . . . . . . . . f f f . . . . . 
    . f f f f . . . f f f f . . . . 
    . f f f f . . f f f 1 f f . . . 
    . . f f f f . f f f f f f f 4 4 
    . . f f f f . f f f f f f f 4 4 
    . . . f f f f f f f f f f f . 4 
    . . . . f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . . f f f f f f f f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f f f f f f . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . 4 4 4 . . . . . . . . . 
    `,img`
    . . . . . . . . f f f . . . . . 
    . . . . . . . . f f f f . . . . 
    . . . . . . . f f f 1 f f . . . 
    . . . . . . . f f f f f f f 4 4 
    . . f f f f . f f f f f f f 4 4 
    . . . f f f f f f f f f f f . 4 
    . . . . f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . . f f f f f f f f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f f f f f f . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . 4 4 4 . . . . . . . . . 
    `,img`
    . . . . . . . . f f f . . . . . 
    . . . . . . . . f f f f . . . . 
    . . . . . . . f f f 1 f f . . . 
    . . . . . . . f f f f f f f 4 4 
    . . . . . . . f f f f f f f 4 4 
    . . . . . f f f f f f f f f . 4 
    . . . . f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . . f f f f f f f f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f f f f f f . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . 4 4 4 . . . . . . . . . 
    `,img`
    . . . . . . . . f f f . . . . . 
    . . . . . . . . f f f f . . . . 
    . . . . . . . f f f 1 f f . . . 
    . . . . . . . f f f f f f f 4 4 
    . . f f f f . f f f f f f f 4 4 
    . . . f f f f f f f f f f f . 4 
    . . . . f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . . f f f f f f f f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f f f f f f . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . 4 4 4 . . . . . . . . . 
    `,img`
    . . . . . . . . f f f . . . . . 
    . f f f f . . . f f f f . . . . 
    . f f f f . . f f f 1 f f . . . 
    . . f f f f . f f f f f f f 4 4 
    . . f f f f . f f f f f f f 4 4 
    . . . f f f f f f f f f f f . 4 
    . . . . f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . . f f f f f f f f f . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f f f f f f . . . . . . . 
    . . . . . 4 4 . . . . . . . . . 
    . . . . 4 4 4 . . . . . . . . . 
    `],
100,
true
)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.setScore(2)
info.startCountdown(10)
FinalBossFight = 0
game.onUpdate(function () {
    if (FinalBossFight == 0) {
        scene.centerCameraAt(scene.cameraProperty(CameraProperty.X) + 2, scene.screenHeight() / 2)
    }
})
forever(function () {
    if (FinalBossFight == 0) {
        HungryWorm = sprites.createProjectileFromSide(assets.image`HungryWorm`, -75, 0)
        HungryWorm.y = randint(10, 115)
        HungryWorm.setKind(SpriteKind.Enemy)
        animation.runImageAnimation(
        HungryWorm,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 3 b b 3 3 b b 3 3 b b 3 . . 
            3 2 3 b b 3 3 b b 3 3 b b 3 b . 
            f f 3 b b 3 3 b b 3 3 b b 3 b b 
            3 3 3 b b 3 3 b b 3 3 b b 3 b b 
            . . . . . . . . . . . . . . 3 3 
            . . . . . . . . . . . . . 3 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b 3 3 b b 3 3 b . . . . 
            . 3 3 b b 3 3 b b 3 3 b b 3 . . 
            3 2 3 b b 3 3 b b 3 3 b b 3 b . 
            f f 3 b . . . . . . . . b 3 b b 
            3 3 3 . . . . . . . . . . 3 b b 
            . . . . . . . . . . . . . . 3 3 
            . . . . . . . . . . . . . 3 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . 3 b b 3 . . . . . . 
            . . . . b 3 3 b b 3 3 b . . . . 
            . 3 3 b b 3 3 . . 3 3 b b 3 . . 
            3 2 3 b b 3 . . . . 3 b b 3 b . 
            f f 3 b . . . . . . . . b 3 b b 
            3 3 3 . . . . . . . . . . 3 b b 
            . . . . . . . . . . . . . . 3 3 
            . . . . . . . . . . . . . 3 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . b 3 3 b b 3 3 b . . . . 
            . 3 3 b b 3 3 b b 3 3 b b 3 . . 
            3 2 3 b b 3 3 b b 3 3 b b 3 b . 
            f f 3 b . . . . . . . . b 3 b b 
            3 3 3 . . . . . . . . . . 3 b b 
            . . . . . . . . . . . . . . 3 3 
            . . . . . . . . . . . . . 3 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 3 b b 3 3 b b 3 3 b b 3 . . 
            3 2 3 b b 3 3 b b 3 3 b b 3 b . 
            f f 3 b b 3 3 b b 3 3 b b 3 b b 
            3 3 3 b b 3 3 b b 3 3 b b 3 b b 
            . . . . . . . . . . . . . . 3 3 
            . . . . . . . . . . . . . 3 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 3 b . . . . . . . . . 3 . . 
            3 2 3 b b . . . . . . . b 3 b . 
            f f 3 b b 3 3 b b 3 3 b b 3 b b 
            3 3 3 b b 3 3 b b 3 3 b b 3 b b 
            . . . . b 3 3 b b 3 3 b . . 3 3 
            . . . . . . . . . . . . . 3 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 3 b . . . . . . . . . 3 . . 
            3 2 3 b b . . . . . . . b 3 b . 
            f f 3 b b 3 . . . . 3 b b 3 b b 
            3 3 3 b b 3 3 . . 3 3 b b 3 b b 
            . . . . b 3 3 b b 3 3 b . . 3 3 
            . . . . . . 3 b b 3 . . . 3 3 . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 3 b . . . . . . . . . 3 . . 
            3 2 3 b b . . . . . . . b 3 b . 
            f f 3 b b 3 3 b b 3 3 b b 3 b b 
            3 3 3 b b 3 3 b b 3 3 b b 3 b b 
            . . . . b 3 3 b b 3 3 b . . 3 3 
            . . . . . . . . . . . . . 3 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 3 b b 3 3 b b 3 3 b b 3 . . 
            3 2 3 b b 3 3 b b 3 3 b b 3 b . 
            f f 3 b b 3 3 b b 3 3 b b 3 b b 
            3 3 3 b b 3 3 b b 3 3 b b 3 b b 
            . . . . . . . . . . . . . . 3 3 
            . . . . . . . . . . . . . 3 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        pause(randint(1000, 2500))
    }
})
forever(function () {
    if (FinalBossFight == 0) {
        Fruits = sprites.createProjectileFromSide(img`
            . . . . . . . e c 7 . . . . . . 
            . . . . e e e c 7 7 e e . . . . 
            . . c e e e e c 7 e 2 2 e e . . 
            . c e e e e e c 6 e e 2 2 2 e . 
            . c e e e 2 e c c 2 4 5 4 2 e . 
            c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
            c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
            c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
            . e e e 2 2 2 2 2 2 2 2 2 4 e . 
            . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
            . . 2 e e 2 2 2 2 2 4 4 2 e . . 
            . . . 2 2 e e 4 4 4 2 e e . . . 
            . . . . . 2 2 e e e e . . . . . 
            `, -50, 0)
        Fruits.y = randint(10, 115)
        Fruits.setKind(SpriteKind.Food)
        pause(randint(1000, 3000))
    }
})
forever(function () {
    if (FinalBossFight == 1) {
        if (Crow.y < 65) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 6 6 6 6 6 6 . . . . . 
                . . . . . 6 6 6 6 6 6 . . . . . 
                . . . 6 6 7 7 7 7 7 7 6 6 . . . 
                . . . 6 6 7 7 7 7 7 7 6 6 . . . 
                . . . 6 6 7 7 7 7 7 7 6 6 . . . 
                . . . 3 3 7 7 7 7 7 7 3 3 . . . 
                . . . 3 3 7 7 7 7 7 7 3 3 . . . 
                . . . 3 3 7 7 7 7 7 7 3 3 . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Boss, -75, -5)
        } else {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 6 6 6 6 6 6 . . . . . 
                . . . . . 6 6 6 6 6 6 . . . . . 
                . . . 6 6 7 7 7 7 7 7 6 6 . . . 
                . . . 6 6 7 7 7 7 7 7 6 6 . . . 
                . . . 6 6 7 7 7 7 7 7 6 6 . . . 
                . . . 3 3 7 7 7 7 7 7 3 3 . . . 
                . . . 3 3 7 7 7 7 7 7 3 3 . . . 
                . . . 3 3 7 7 7 7 7 7 3 3 . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . 3 3 3 3 3 3 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Boss, -75, 5)
        }
        projectile2.setKind(SpriteKind.BossProcetile)
        projectile2.y = Crow.y
        pause(500)
    }
})
forever(function () {
    if (FinalBossFight == 1) {
        if (Boss.y <= 15) {
            Boss.vy = 25
        } else if (Boss.y >= 100) {
            Boss.vy = -25
        }
    }
})
