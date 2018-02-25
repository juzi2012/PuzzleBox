var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Map = (function (_super) {
    __extends(Map, _super);
    function Map() {
        var _this = _super.call(this) || this;
        _this.tileDic = new Dictionary();
        _this.createTile();
        return _this;
    }
    Map.prototype.createTile = function () {
        var bg = Utils.createBitmapByName("kuang");
        // bg.scale9Grid = new egret.Rectangle( 12,12,12,12 );
        // bg.width=640-GameConsts.GAME_PADDING*2;
        // bg.height=640-GameConsts.GAME_PADDING*2;
        this.addChild(bg);
        for (var i = 0; i < GameConsts.GAME_TILE_ROW; i++) {
            for (var j = 0; j < GameConsts.GAME_TILE_COLUMN; j++) {
                var tile = new Tile(i, j);
                this.addChild(tile);
                tile.x = GameConsts.GAME_KUANG_SIDE + GameConsts.GAME_TILE_WIDHT_AND_HEIGHT / 2 + GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * j;
                tile.y = GameConsts.GAME_KUANG_SIDE + GameConsts.GAME_TILE_WIDHT_AND_HEIGHT / 2 + GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * i;
                this.tileDic.add(i + "_" + j, tile);
            }
        }
    };
    Map.prototype.checkLine = function () {
        var rawLineArray = [];
        var columnLineArray = [];
        for (var i = 0; i < GameConsts.GAME_TILE_ROW; i++) {
            var isRawFull = true;
            for (var j = 0; j < GameConsts.GAME_TILE_COLUMN; j++) {
                if (this.getTileByRawAndColumn(i, j).isEmpty == true) {
                    isRawFull = false;
                    break;
                }
            }
            if (isRawFull) {
                rawLineArray.push(i);
            }
        }
        for (var i = 0; i < GameConsts.GAME_TILE_COLUMN; i++) {
            var isColumnFull = true;
            for (var j = 0; j < GameConsts.GAME_TILE_ROW; j++) {
                if (this.getTileByRawAndColumn(j, i).isEmpty == true) {
                    isColumnFull = false;
                    break;
                }
            }
            if (isColumnFull) {
                columnLineArray.push(i);
            }
        }
        for (var i = 0; i < rawLineArray.length; i++) {
            for (var j = 0; j < GameConsts.GAME_TILE_COLUMN; j++) {
                if (this.getTileByRawAndColumn(rawLineArray[i], j).isEmpty == false) {
                    this.getTileByRawAndColumn(rawLineArray[i], j).doDipsear();
                }
            }
        }
        for (var i = 0; i < columnLineArray.length; i++) {
            for (var j = 0; j < GameConsts.GAME_TILE_ROW; j++) {
                if (this.getTileByRawAndColumn(j, columnLineArray[i]).isEmpty == false) {
                    this.getTileByRawAndColumn(j, columnLineArray[i]).doDipsear();
                }
            }
        }
        ///
        var xx;
        var yy;
        var rawSum = 0;
        for (var i = 0; i < rawLineArray.length; i++) {
            rawSum += Number(rawLineArray[i] + 1);
        }
        yy = rawSum > 0 ? this.y + (rawSum / rawLineArray.length) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT : (this.y + GameConsts.GAME_TILE_ROW / 2 * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
        var columnSum = 0;
        for (var i = 0; i < columnLineArray.length; i++) {
            columnSum += Number(columnLineArray[i] + 1);
        }
        xx = columnSum > 0 ? this.x + (columnSum / columnLineArray.length) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT : (this.x + GameConsts.GAME_TILE_COLUMN / 2 * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT);
        return [xx, yy, columnLineArray.length + rawLineArray.length];
    };
    Map.prototype.checkPos = function (raw, column, boxType, color) {
        for (var i = 0; i < boxType.length; i++) {
            for (var j = 0; j < boxType[i].length; j++) {
                if (boxType[i][j] == 1) {
                    var tile = this.tileDic.get((raw + i) + "_" + (column + j));
                    if (tile == null) {
                        return false;
                    }
                    if (tile.isEmpty == false) {
                        return false;
                    }
                }
            }
        }
        for (var i = 0; i < boxType.length; i++) {
            for (var j = 0; j < boxType[i].length; j++) {
                if (boxType[i][j] == 1 && this.tileDic.get((raw + i) + "_" + (column + j)).isEmpty == true) {
                    this.tileDic.get((raw + i) + "_" + (column + j)).addTemporary(color);
                }
            }
        }
        this.checkLineTemporary(raw, column, boxType, color);
        return true;
    };
    Map.prototype.checkLineTemporary = function (raw, column, boxType, color) {
        var rawLineArray = [];
        var columnLineArray = [];
        for (var i = 0; i < boxType.length; i++) {
            var isRawFull = true;
            for (var j = 0; j < GameConsts.GAME_TILE_COLUMN; j++) {
                if (this.getTileByRawAndColumn(raw + i, j).isEmpty == true && this.getTileByRawAndColumn(raw + i, j).isTemporary == false) {
                    isRawFull = false;
                    break;
                }
            }
            if (isRawFull == true)
                rawLineArray.push(raw + i);
        }
        for (var i = 0; i < boxType[0].length; i++) {
            var isColumnFull = true;
            for (var j = 0; j < GameConsts.GAME_TILE_ROW; j++) {
                if (this.getTileByRawAndColumn(j, column + i).isEmpty == true && this.getTileByRawAndColumn(j, column + i).isTemporary == false) {
                    isColumnFull = false;
                    break;
                }
            }
            if (isColumnFull == true)
                columnLineArray.push(column + i);
        }
        if (rawLineArray.length > 0) {
            for (var i = 0; i < rawLineArray.length; i++) {
                for (var j = 0; j < GameConsts.GAME_TILE_COLUMN; j++) {
                    this.tileDic.get(rawLineArray[i] + "_" + j).addTemporary(color);
                }
            }
        }
        if (columnLineArray.length > 0) {
            for (var i = 0; i < columnLineArray.length; i++) {
                for (var j = 0; j < GameConsts.GAME_TILE_ROW; j++) {
                    this.tileDic.get(j + "_" + columnLineArray[i]).addTemporary(color);
                }
            }
        }
        return true;
    };
    Map.prototype.clearTemporary = function () {
        var len = this.tileDic.values.length;
        for (var i = 0; i < len; i++) {
            this.tileDic.values[i].clearTemporary();
        }
    };
    Map.prototype.getTileByRawAndColumn = function (raw, column) {
        return this.tileDic.get(raw + "_" + column);
    };
    Map.prototype.addOfficial = function (raw, column, boxType, color) {
        for (var i = 0; i < boxType.length; i++) {
            for (var j = 0; j < boxType[i].length; j++) {
                if (boxType[i][j] == 1 && this.tileDic.get((raw + i) + "_" + (column + j)).isEmpty == true) {
                    this.tileDic.get((raw + i) + "_" + (column + j)).addOfficial(color);
                }
            }
        }
    };
    Map.prototype.checkCanGoOn = function (box) {
        var result = false;
        for (var i = 0; i < GameConsts.GAME_TILE_ROW; i++) {
            for (var j = 0; j < GameConsts.GAME_TILE_COLUMN; j++) {
                if (this.getTileByRawAndColumn(i, j).isEmpty == true) {
                    var tt = true;
                    var row = i;
                    var column = j;
                    for (var m = 0; m < box.style.length; m++) {
                        for (var n = 0; n < box.style[m].length; n++) {
                            if (box.style[m][n] == 1) {
                                var tile = this.tileDic.get((row + m) + "_" + (column + n));
                                if (tile == null) {
                                    tt = false;
                                }
                                else if (tile.isEmpty == false) {
                                    tt = false;
                                }
                            }
                        }
                    }
                    if (tt == true) {
                        result = true;
                    }
                }
            }
        }
        return result;
    };
    Map.prototype.addRandom = function (randomType) {
        var randomRow = App.MathUtils.random(0, GameConsts.GAME_TILE_ROW - 1);
        var randomColumn = App.MathUtils.random(0, GameConsts.GAME_TILE_COLUMN - 1);
        this.tileDic.get(randomRow + "_" + randomColumn).addRandom(randomType);
    };
    Map.prototype.dispose = function () {
        var len = this.tileDic.values.length;
        for (var i = 0; i < len; i++) {
            this.tileDic.values[i].dispose();
        }
    };
    return Map;
}(egret.DisplayObjectContainer));
__reflect(Map.prototype, "Map");
//# sourceMappingURL=Map.js.map