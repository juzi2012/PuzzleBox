/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_ListItem extends fairygui.GComponent {

		public m_n0:fairygui.GImage;

		public static URL:string = "ui://7cac2uhfifkr23";

		public static createInstance():UI_ListItem {
			return <UI_ListItem><any>(fairygui.UIPackage.createObject("game","ListItem"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}