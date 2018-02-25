class AlertUtils {
	public constructor() {
	}
	public static comfirm(content:string,handleYes?:core.Handler,handleNo?:core.Handler):void
	{
		let vo:AlertMsgVo = new AlertMsgVo(content,handleYes,handleNo);
		App.EventCenter.dispatch(AlertMsgVo.SYSTEM_CONFIRM,vo);
	}
}