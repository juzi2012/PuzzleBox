////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// MIT License
//
// Copyright (c) 2017-2027 yuxuefeng
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
///////////////////////////////////////////////////////////////////////
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "TimerManager", {
        /**
         * DragonBones工厂类
         * @returns {any}
         * @constructor
         */
        /*public static get DragonBonesFactory():core.DragonBonesFactory {
            return core.DragonBonesFactory.getInstance();
        }*/
        /**
         * 统一的计时器和帧刷管理类
         * @type {TimerManager}
         */
        get: function () {
            return core.TimerManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DebugUtils", {
        /**
         * 调试工具
         * @type {DebugUtils}
         */
        get: function () {
            return core.DebugUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "RandomUtils", {
        /**
         * 随机数工具类
         * @type {RandomUtils}
         */
        get: function () {
            return core.RandomUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DisplayUtils", {
        /**
         * 显示对象工具类
         * @type {DisplayUtils}
         */
        get: function () {
            return core.DisplayUtil.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MathUtils", {
        /**
         * 数学计算工具类
         * @type {MathUtils}
         */
        get: function () {
            return core.MathUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ResourceUtils", {
        /**
         * 资源加载工具类
         */
        get: function () {
            return core.ResourceUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "DeviceUtils", {
        /**
         * 设备工具类
         */
        get: function () {
            return core.DeviceUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ShockUtils", {
        /**
         * 震动类
         */
        get: function () {
            return core.ShockUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EgretExpandUtils", {
        /**
         * 引擎扩展类
         */
        get: function () {
            return core.EgretExpandUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "EventCenter", {
        get: function () {
            if (App._eventCenter == null) {
                App._eventCenter = new core.MessageCenter(1);
            }
            return App._eventCenter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "MessageCenter", {
        /**
         * 服务器返回的消息处理中心 分针执行
         * @type {MessageCenter}
         */
        get: function () {
            return core.MessageCenter.getInstance(0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "StageUtils", {
        /**
         * Stage操作相关工具类
         */
        get: function () {
            return core.StageUtils.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Socket
     */
    // public static get Socket():webSocket.Socket
    // {
    //     return webSocket.Socket.getInstance();
    // }
    App.run = function (stage) {
        egret.ImageLoader.crossOrigin = 'anonymous';
        //全局配置数据
        App.GlobalData = RES.getRes("config_json");
        //开启调试
        App.DebugUtils.isOpen(App.GlobalData.IsDebug); //
        App.DebugUtils.setThreshold(5);
        //扩展功能初始化
        App.EgretExpandUtils.init();
        //实例化ProtoBuf和Socket请求
        // App.ProtoFile = dcodeIO.ProtoBuf.loadProto(RES.getRes(App.GlobalData.ProtoFile));
        // App.ProtoConfig = RES.getRes(App.GlobalData.ProtoConfig);
        // App.Socket.initServer(App.GlobalData.SocketServer, App.GlobalData.SocketPort,true);
        ///初始化enterframe事件
        core.FrameEventCenter.getInstance().init(stage);
        if (egret.Capabilities.runtimeType == egret.RuntimeType.WEB) {
            core.WebUtils.addKeyboardListener();
            egret.Logger.logLevel = egret.Logger.ALL;
        }
        RES.setMaxRetryTimes(2);
    };
    /**
     * 全局配置数据
     * @type {null}
     */
    App.GlobalData = null;
    return App;
}());
__reflect(App.prototype, "App");
//# sourceMappingURL=App.js.map