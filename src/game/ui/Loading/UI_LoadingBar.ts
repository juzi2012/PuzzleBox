/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Loading {

	export class UI_LoadingBar extends fairygui.GProgressBar {

		public m_bar:fairygui.GImage;
		public m_n1:fairygui.GImage;
		public m_title:fairygui.GTextField;

		public static URL:string = "ui://0lf0k2bwrzcx3";

		public static createInstance():UI_LoadingBar {
			return <UI_LoadingBar><any>(fairygui.UIPackage.createObject("Loading","LoadingBar"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bar = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(1));
			this.m_title = <fairygui.GTextField><any>(this.getChildAt(2));
		}
	}
}