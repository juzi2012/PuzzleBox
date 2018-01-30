var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var LayerCenter = (function () {
    function LayerCenter() {
    }
    Object.defineProperty(LayerCenter, "Instance", {
        get: function () {
            if (LayerCenter.s_instance == null) {
                LayerCenter.s_instance = new LayerCenter();
            }
            return LayerCenter.s_instance;
        },
        enumerable: true,
        configurable: true
    });
    LayerCenter.prototype.init = function (stage) {
        if (stage) {
            this.stage = stage;
            stage.addEventListener(egret.Event.RESIZE, this.onStageResize, this);
            this.m_layerDic = new Dictionary();
            LayerCenter.stageWidth = stage.stageWidth;
            LayerCenter.stageHeight = stage.stageHeight;
            this.stage.addChild(fairygui.GRoot.inst.displayObject);
        }
        //初始化游戏的层级
        this.initLayers();
    };
    LayerCenter.prototype.initLayers = function () {
        this.addLayer(LayerEnum.SCENE, new SceneModuleLayer());
        this.addLayer(LayerEnum.UI, new UIModuleLayer());
        this.addLayer(LayerEnum.STATIC, new StaticModuleLayer());
        this.addLayer(LayerEnum.POPUP, new PopModuleLayer());
        this.addLayer(LayerEnum.TOP, new TopModuleLayer());
    };
    LayerCenter.prototype.addLayer = function (index, layer) {
        this.m_layerDic.add(index, layer);
        egret.callLater(this.updateLayer, this);
    };
    LayerCenter.prototype.onStageResize = function (event) {
        LayerCenter.stageWidth = this.stage.stageWidth;
        LayerCenter.stageHeight = this.stage.stageHeight;
        fairygui.GRoot.inst.setSize(LayerCenter.stageWidth, LayerCenter.stageHeight);
        App.EventCenter.dispatch(egret.Event.RESIZE);
    };
    LayerCenter.prototype.updateLayer = function () {
        var keys = this.m_layerDic.keys.concat();
        keys.sort(function (a, b) {
            return a - b;
        });
        for (var i = 0, iLen = keys.length; i < iLen; i++) {
            var layer = this.m_layerDic.get(keys[i]);
            if (!layer.parent) {
                fairygui.GRoot.inst.addChildAt(layer, i);
            }
            else {
                fairygui.GRoot.inst.setChildIndex(layer, i);
            }
        }
    };
    LayerCenter.prototype.getLayer = function (index) {
        return this.m_layerDic.get(index);
    };
    LayerCenter.prototype.removeLayer = function (index) {
        var layer = this.m_layerDic.remove(index);
        this.updateLayer();
        return layer;
    };
    return LayerCenter;
}());
__reflect(LayerCenter.prototype, "LayerCenter");
//# sourceMappingURL=LayerCenter.js.map