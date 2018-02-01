/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_GameOverPanel extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_btn_restart:UI_BtnRestart;
		public m_txt_now:fairygui.GTextField;
		public m_n8:UI_Btn_rank;
		public m_n9:UI_Btn_share;
		public m_n10:UI_Btn_star;
		public m_n11:fairygui.GImage;
		public m_txt_max:fairygui.GTextField;
		public m_n13:fairygui.GTextField;

		public static URL:string = "ui://7cac2uhfhlxd8";

		public static createInstance():UI_GameOverPanel {
			return <UI_GameOverPanel><any>(fairygui.UIPackage.createObject("game","GameOverPanel"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_btn_restart = <UI_BtnRestart><any>(this.getChildAt(1));
			this.m_txt_now = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_n8 = <UI_Btn_rank><any>(this.getChildAt(3));
			this.m_n9 = <UI_Btn_share><any>(this.getChildAt(4));
			this.m_n10 = <UI_Btn_star><any>(this.getChildAt(5));
			this.m_n11 = <fairygui.GImage><any>(this.getChildAt(6));
			this.m_txt_max = <fairygui.GTextField><any>(this.getChildAt(7));
			this.m_n13 = <fairygui.GTextField><any>(this.getChildAt(8));
		}
	}
}