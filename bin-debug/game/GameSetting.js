var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameSetting = (function () {
    function GameSetting() {
        this.soundOff = false; //为true的时候，静音
        if (egret.localStorage.getItem(GameConsts.GAME_LOCALSAVE_SOUND) == "1") {
            this.soundOff = true;
        }
        else {
            this.soundOff = false;
        }
    }
    Object.defineProperty(GameSetting, "ins", {
        get: function () {
            if (GameSetting.s_instance == null) {
                GameSetting.s_instance = new GameSetting();
            }
            return GameSetting.s_instance;
        },
        enumerable: true,
        configurable: true
    });
    GameSetting.prototype.setSoundOnOff = function (value) {
        this.soundOff = value;
        if (value == true) {
            egret.localStorage.setItem(GameConsts.GAME_LOCALSAVE_SOUND, "1");
            App.SoundUtils.stopSoundByID("bg");
        }
        else {
            egret.localStorage.setItem(GameConsts.GAME_LOCALSAVE_SOUND, "0");
            App.SoundUtils.playSound("bg", 1, -1);
        }
    };
    return GameSetting;
}());
__reflect(GameSetting.prototype, "GameSetting");
//# sourceMappingURL=GameSetting.js.map