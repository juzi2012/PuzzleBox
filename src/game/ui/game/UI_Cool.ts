/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_Cool extends fairygui.GComponent {

		public m_n0:fairygui.GImage;
		public m_t0:fairygui.Transition;

		public static URL:string = "ui://7cac2uhfrzcx11";

		public static createInstance():UI_Cool {
			return <UI_Cool><any>(fairygui.UIPackage.createObject("game","Cool"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_n0 = <fairygui.GImage><any>(this.getChildAt(0));
			this.m_t0 = this.getTransitionAt(0);
		}
	}
}