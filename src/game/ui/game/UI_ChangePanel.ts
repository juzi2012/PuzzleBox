/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_ChangePanel extends fairygui.GComponent {

		public m_bg:UI_popBg;
		public m_l1:fairygui.GImage;
		public m_n16:fairygui.GImage;
		public m_l2:fairygui.GImage;
		public m_n18:fairygui.GImage;
		public m_l3:fairygui.GImage;
		public m_n20:fairygui.GImage;
		public m_r1:fairygui.GImage;
		public m_r2:fairygui.GImage;
		public m_r3:fairygui.GImage;
		public m_info:fairygui.GTextField;
		public m_btn_ok:UI_Btn_normal;
		public m_n27:fairygui.GImage;
		public m_txt_star:fairygui.GTextField;
		public m_add1:fairygui.GImage;
		public m_add2:fairygui.GImage;
		public m_add3:fairygui.GImage;

		public static URL:string = "ui://7cac2uhfoxah1i";

		public static createInstance():UI_ChangePanel {
			return <UI_ChangePanel><any>(fairygui.UIPackage.createObject("game","ChangePanel"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bg = <UI_popBg><any>(this.getChildAt(0));
			this.m_l1 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_n16 = <fairygui.GImage><any>(this.getChildAt(2));
			this.m_l2 = <fairygui.GImage><any>(this.getChildAt(3));
			this.m_n18 = <fairygui.GImage><any>(this.getChildAt(4));
			this.m_l3 = <fairygui.GImage><any>(this.getChildAt(5));
			this.m_n20 = <fairygui.GImage><any>(this.getChildAt(6));
			this.m_r1 = <fairygui.GImage><any>(this.getChildAt(7));
			this.m_r2 = <fairygui.GImage><any>(this.getChildAt(8));
			this.m_r3 = <fairygui.GImage><any>(this.getChildAt(9));
			this.m_info = <fairygui.GTextField><any>(this.getChildAt(10));
			this.m_btn_ok = <UI_Btn_normal><any>(this.getChildAt(11));
			this.m_n27 = <fairygui.GImage><any>(this.getChildAt(12));
			this.m_txt_star = <fairygui.GTextField><any>(this.getChildAt(13));
			this.m_add1 = <fairygui.GImage><any>(this.getChildAt(14));
			this.m_add2 = <fairygui.GImage><any>(this.getChildAt(15));
			this.m_add3 = <fairygui.GImage><any>(this.getChildAt(16));
		}
	}
}