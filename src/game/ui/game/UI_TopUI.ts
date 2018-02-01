/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_TopUI extends fairygui.GComponent {

		public m_txt_score:fairygui.GTextField;
		public m_btn_pause:UI_Btn_pause;

		public static URL:string = "ui://7cac2uhfhlxda";

		public static createInstance():UI_TopUI {
			return <UI_TopUI><any>(fairygui.UIPackage.createObject("game","TopUI"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_score = <fairygui.GTextField><any>(this.getChildAt(0));
			this.m_btn_pause = <UI_Btn_pause><any>(this.getChildAt(1));
		}
	}
}