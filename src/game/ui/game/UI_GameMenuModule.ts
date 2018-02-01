/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_GameMenuModule extends fairygui.GComponent {

		public m_btn_start:UI_BtnStart;

		public static URL:string = "ui://7cac2uhfrzcx1f";

		public static createInstance():UI_GameMenuModule {
			return <UI_GameMenuModule><any>(fairygui.UIPackage.createObject("game","GameMenuModule"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_start = <UI_BtnStart><any>(this.getChildAt(0));
		}
	}
}