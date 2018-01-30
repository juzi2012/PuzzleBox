/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_FloatScore extends fairygui.GComponent {

		public m_txt_score:fairygui.GTextField;
		public m_showmovie:fairygui.Transition;

		public static URL:string = "ui://7cac2uhfrzcxm";

		public static createInstance():UI_FloatScore {
			return <UI_FloatScore><any>(fairygui.UIPackage.createObject("game","FloatScore"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_txt_score = <fairygui.GTextField><any>(this.getChildAt(0));
			this.m_showmovie = this.getTransitionAt(0);
		}
	}
}