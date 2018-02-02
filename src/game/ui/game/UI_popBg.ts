/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_popBg extends fairygui.GComponent {

		public m_n3:fairygui.GImage;
		public m_n4:fairygui.GImage;
		public m_btn_close:UI_Btn_close;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://7cac2uhfoxah1l";

		public static createInstance():UI_popBg {
			return <UI_popBg><any>(fairygui.UIPackage.createObject("game","popBg"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n3 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n4 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_btn_close = <UI_Btn_close><any>(this.getChildAt(2));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(3));
		}
	}
}