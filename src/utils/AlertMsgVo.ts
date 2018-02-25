class AlertMsgVo {
    public static SYSTEM_CONFIRM:string="system_confirm";
    public content:string;
    public handleYes:core.Handler;
    public handleNo:core.Handler;
    public constructor(content:string,handleYes?:core.Handler,handleNo?:core.Handler) {
        this.content=content;
        this.handleYes=handleYes;
        this.handleNo=handleNo;
	}
}