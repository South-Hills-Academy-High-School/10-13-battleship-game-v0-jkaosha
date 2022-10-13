function moveBoat (boatArray: Sprite[]) {
    if (grid.spriteRow(cursor) == 6) {
        grid.move(cursor, 0, -1)
    }
    iterator = 0
    cursor.setFlag(SpriteFlag.Invisible, true)
    for (let value of boatArray) {
        grid.place(value, tiles.getTileLocation(grid.spriteCol(cursor), grid.spriteRow(cursor) + iterator))
        iterator += 1
    }
    if (controller.A.isPressed()) {
        cursor.setFlag(SpriteFlag.Invisible, false)
        moveBoatFlag = 0
    }
}
let iterator = 0
let cursor: Sprite = null
let moveBoatFlag = 0
moveBoatFlag = 1
tiles.setCurrentTilemap(0)
cursor = sprites.create(, SpriteKind.Player)
grid.snap(cursor)
grid.moveWithButtons(cursor)
let smallBoatArray = [sprites.create(, SpriteKind.Player), sprites.create(, SpriteKind.Player)]
game.onUpdate(function () {
    if (moveBoatFlag == 1) {
        moveBoat(smallBoatArray)
    }
})
