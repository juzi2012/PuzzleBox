/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Loading {

	export class UI_LoadingModule extends fairygui.GComponent {

		public m_bar:UI_LoadingBar;

		public static URL:string = "ui://0lf0k2bwrzcx6";

		public static createInstance():UI_LoadingModule {
			return <UI_LoadingModule><any>(fairygui.UIPackage.createObject("Loading","LoadingModule"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_bar = <UI_LoadingBar><any>(this.getChildAt(0));
		}
	}
}