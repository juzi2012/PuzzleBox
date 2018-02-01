	////////////////////////////////////////////////////////////////////
	
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
class App {

	public constructor() {
	}
	/**
     * 全局配置数据
     * @type {null}
     */
    public static GlobalData:any = null;
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
	public static get TimerManager():core.TimerManager {
		return core.TimerManager.getInstance();
	}
	/**
     * 调试工具
     * @type {DebugUtils}
     */
    public static get DebugUtils():core.DebugUtils {
        return core.DebugUtils.getInstance();
    }
	/**
     * 随机数工具类
     * @type {RandomUtils}
     */
    public static get RandomUtils():core.RandomUtils {
        return core.RandomUtils.getInstance();
    }
	/**
     * 显示对象工具类
     * @type {DisplayUtils}
     */
    public static get DisplayUtils():core.DisplayUtil {
        return core.DisplayUtil.getInstance();
    }
	/**
     * 数学计算工具类
     * @type {MathUtils}
     */
    public static get MathUtils():core.MathUtils {
        return core.MathUtils.getInstance();
    }
	/**
     * 资源加载工具类
     */
    public static get ResourceUtils():core.ResourceUtils {
        return core.ResourceUtils.getInstance();
    }
	/**
     * 设备工具类
     */
    public static get DeviceUtils():core.DeviceUtils {
        return core.DeviceUtils.getInstance();
    }
	/**
     * 震动类
     */
    public static get ShockUtils():core.ShockUtils {
        return core.ShockUtils.getInstance();
    }
	/**
     * 引擎扩展类
     */
    public static get EgretExpandUtils():core.EgretExpandUtils {
        return core.EgretExpandUtils.getInstance();
    }
	/**
     * 引擎sound类
     */
    public static get SoundUtils():core.SoundUtils {
        return core.SoundUtils.getInstance();
    }
	/**
     * 消息通知中心 及时执行
     */
    private static _eventCenter:core.MessageCenter;

    public static get EventCenter():core.MessageCenter {
        if (App._eventCenter == null) {
            App._eventCenter = new core.MessageCenter(1);
        }
        return App._eventCenter;
    }
	/**
     * 服务器返回的消息处理中心 分针执行
     * @type {MessageCenter}
     */
    public static get MessageCenter():core.MessageCenter {
        return core.MessageCenter.getInstance(0);
    }
	/**
     * Stage操作相关工具类
     */
    public static get StageUtils():core.StageUtils {
        return core.StageUtils.getInstance();
    }
    /**
     * Socket
     */
    // public static get Socket():webSocket.Socket
    // {
    //     return webSocket.Socket.getInstance();
    // }
	public static run(stage: egret.Stage): void {
		egret.ImageLoader.crossOrigin = 'anonymous';
		//全局配置数据
        App.GlobalData = RES.getRes("config_json");
		//开启调试
        App.DebugUtils.isOpen(App.GlobalData.IsDebug);//
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
	}
	
}
