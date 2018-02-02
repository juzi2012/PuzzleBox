/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_Alert extends fairygui.GComponent {

		public m_c1:fairygui.Controller;
		public m_n0:fairygui.GImage;
		public m_btn_ok:UI_Btn_normal;
		public m_btn_ok_2:UI_Btn_normal;
		public m_txt_info:fairygui.GTextField;

		public static URL:string = "ui://7cac2uhfoxah1w";

		public static createInstance():UI_Alert {
			return <UI_Alert><any>(fairygui.UIPackage.createObject("game","Alert"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_c1 = this.getControllerAt(0);
			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_btn_ok = <UI_Btn_normal><any>(this.getChildAt(1));
			this.m_btn_ok_2 = <UI_Btn_normal><any>(this.getChildAt(2));
			this.m_txt_info = <fairygui.GTextField><any>(this.getChildAt(3));
		}
	}
}