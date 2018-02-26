//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends egret.DisplayObjectContainer {



    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })



    }

    private async runGame() {
        //预加载部分资源，主要是用来显示loading的部分素材
        await this.loadPreLoadResource()
        this.startEngine();
        const result = await RES.getResAsync("description_json");
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

        this.loadGameResource();
    }

    private async loadPreLoadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView); 
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }
    private loadGameResource()
    {
        fairygui.UIPackage.addPackage("Loading");
        ModuleMgr.ins.showModule(ModuleEnum.LOADING,[]);
    }

    /**
     * 开始初始化引擎
     * Create a game scene
     */
    private startEngine() {
        //适配方式(全屏适配)//主要是针对UI的
        App.StageUtils.startFullscreenAdaptation(640, 960);
        
		//初始化层级
		LayerCenter.Instance.init(this.stage);
        App.run(this.stage);
        new RegModuleTask();
        new BindFGuiTask();
        new RegRunTimeClassTask();


        App.EventCenter.addListener(AlertMsgVo.SYSTEM_CONFIRM,this.showAlert,this);

        // TypeScript 代码
        egret.ExternalInterface.addCallback("sendToTs", function (message:string) {
            console.log("message form native : " + message);//message form native : message from native
            GameModel.ins.star+=3;
        });
        // this.startGame();
    }
    private showAlert(msg:AlertMsgVo):void
    {
        ModuleMgr.ins.showModule(ModuleEnum.GAME_Alert,msg);
    }
    private startGame():void
    {
        fairygui.UIPackage.addPackage("game");
        ModuleMgr.ins.showModule(ModuleEnum.GAME_TOP,[]);
        ModuleMgr.ins.showModule(ModuleEnum.GAME_MENU,[]);
    }
}