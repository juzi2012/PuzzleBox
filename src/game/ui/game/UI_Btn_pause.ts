/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_Btn_pause extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n1:fairygui.GImage;

		public static URL:string = "ui://7cac2uhfrzcxu";

		public static createInstance():UI_Btn_pause {
			return <UI_Btn_pause><any>(fairygui.UIPackage.createObject("game","Btn_pause"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}