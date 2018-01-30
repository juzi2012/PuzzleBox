/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_TopUI extends fairygui.GComponent {

		public m_btn_restart:UI_BtnRestart;
		public m_txt_score:fairygui.GTextField;
		public m_n3:fairygui.GTextField;
		public m_txt_score_max:fairygui.GTextField;
		public m_n5:fairygui.GTextField;

		public static URL:string = "ui://7cac2uhfhlxda";

		public static createInstance():UI_TopUI {
			return <UI_TopUI><any>(fairygui.UIPackage.createObject("game","TopUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_btn_restart = <UI_BtnRestart><any>(this.getChildAt(0));
			this.m_txt_score = <fairygui.GTextField><any>(this.getChildAt(1));
			this.m_n3 = <fairygui.GTextField><any>(this.getChildAt(2));
			this.m_txt_score_max = <fairygui.GTextField><any>(this.getChildAt(3));
			this.m_n5 = <fairygui.GTextField><any>(this.getChildAt(4));
		}
	}
}