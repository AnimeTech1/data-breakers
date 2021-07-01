// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004040202020202020202020202020202040404040402020202020202040404040204020204020404040402020402020202040404040404020204020204040404020204020204020202040404040202020202040202040402020202020202020202020402020204040404040202020202020204020202020202020402040402020202040404040404020404020402020202020202020202040204040404040402020202040404040402020402020204020204040402020202020204040404040202040204040204040402040202020202020404020404040204040404020202020202040202020402040202040404040302020402040404020202020202020202`, img`
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 2 2 2 2 2 . . . . 
2 . 2 2 . 2 . . . . 2 2 . 2 2 2 
2 . . . . . . 2 2 . 2 2 . . . . 
2 2 . 2 2 . 2 2 2 . . . . 2 2 2 
2 2 . 2 2 . . 2 2 2 2 2 2 2 2 2 
2 2 . 2 2 2 . . . . . 2 2 2 2 2 
2 2 . 2 2 2 2 2 2 2 . 2 . . 2 2 
2 2 . . . . . . 2 . . 2 . 2 2 2 
2 2 2 2 2 2 2 . 2 . . . . . . 2 
2 2 2 . . . . . 2 2 . 2 2 2 . 2 
2 . . . 2 2 2 2 2 2 . . . . . 2 
2 . 2 . . 2 . . . 2 . 2 2 2 2 2 
2 . . 2 . . . 2 . . . . 2 2 2 2 
2 2 . 2 2 2 . 2 . 2 2 . . . . . 
2 2 . 2 . . . 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile3,myTiles.tile4,sprites.dungeon.buttonOrange,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
