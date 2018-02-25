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
var Alert = (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        return _super.call(this) || this;
    }
    Alert.prototype.initContent = function () {
        this.content = game.UI_Alert.createInstance();
    };
    Object.defineProperty(Alert.prototype, "mContent", {
        get: function () {
            return this.content;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 预显示
     */
    Alert.prototype.preShow = function (data) {
        App.SoundUtils.stopSoundByID("bg");
        this.msgVo = data;
        this.mContent.m_txt_info.text = this.msgVo.content;
        this.mContent.m_btn_ok.addClickListener(this.onOkClick, this);
        if (this.msgVo.handleNo != null) {
            this.mContent.m_c1.setSelectedIndex(1);
            this.mContent.m_btn_cancel.addClickListener(this.onCancleClick, this);
        }
        else {
            this.mContent.m_c1.setSelectedIndex(0);
        }
        this.preShowCpl();
    };
    Alert.prototype.show = function (data) {
        _super.prototype.show.call(this, data);
    };
    Alert.prototype.onOkClick = function () {
        ModuleMgr.ins.closeModule(ModuleEnum.GAME_Alert);
        this.msgVo.handleYes.method.apply(this.msgVo.handleYes.caller);
    };
    Alert.prototype.onCancleClick = function () {
        ModuleMgr.ins.closeModule(ModuleEnum.GAME_Alert);
        this.msgVo.handleNo.method.apply(this.msgVo.handleNo.caller);
    };
    return Alert;
}(PopModuleView));
__reflect(Alert.prototype, "Alert");
//# sourceMappingURL=Alert.js.map