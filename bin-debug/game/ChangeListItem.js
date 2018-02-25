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
var ChangeListItem = (function (_super) {
    __extends(ChangeListItem, _super);
    function ChangeListItem() {
        var _this = _super.call(this) || this;
        _this.index = 0;
        return _this;
    }
    ChangeListItem.prototype.setData = function (index, color) {
        this.index = index;
        var box = BoxFactory.createPuzzleBox(index + 1, color, 0.3);
        box.x = 45 - (box.style_w / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.3;
        box.y = 45 - (box.style_h / 2 - 0.5) * GameConsts.GAME_TILE_WIDHT_AND_HEIGHT * 0.3;
        this.displayListContainer.addChild(box);
    };
    return ChangeListItem;
}(game.UI_ListItem));
__reflect(ChangeListItem.prototype, "ChangeListItem");
//# sourceMappingURL=ChangeListItem.js.map