/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_TopUI extends fairygui.GComponent {

		public m_btnctrl:fairygui.Controller;
		public m_n12:fairygui.GImage;
		public m_txt_score:fairygui.GTextField;
		public m_btn_home:UI_Btn_home;
		public m_btn_sound:UI_Btn_sound;
		public m_btnrefresh:UI_Btn_refresh;
		public m_btn_pause:UI_Btn_pause;
		public m_img_star:fairygui.GImage;
		public m_txt_star:fairygui.GTextField;

		public static URL:string = "ui://7cac2uhfhlxda";

		public static createInstance():UI_TopUI {
			return <UI_TopUI><any>(fairygui.UIPackage.createObject("game","TopUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btnctrl = this.getControllerAt(0);
			this.m_n12 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_txt_score = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_btn_home = <UI_Btn_home><any>(this.getChildAt(2));
			this.m_btn_sound = <UI_Btn_sound><any>(this.getChildAt(3));
			this.m_btnrefresh = <UI_Btn_refresh><any>(this.getChildAt(4));
			this.m_btn_pause = <UI_Btn_pause><any>(this.getChildAt(5));
			this.m_img_star = <fairygui.GImage><any>(this.getChildAt(6));
			this.m_txt_star = <fairygui.GTextField><any>(this.getChildAt(7));
		}
	}
}