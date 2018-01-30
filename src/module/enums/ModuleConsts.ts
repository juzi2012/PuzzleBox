class ModuleConsts {
	public constructor() {
	}

	public static MODULE_SERVER_CPL:string = "MODULE_SERVER_CPL";
	public static MODULE_PRE_SHOW_CPL:string = "MODULE_PRE_SHOW_CPL";
	public static MODULE_PRE_CLOSE_CPL:string = "MODULE_PRE_CLOSE_CPL";
	public static MODULE_CLOSE_CPL:string = "MODULE_CLOSE_CPL";

	public static MODULE_ADD_TO_STAGE:string = "MODULE_ADD_TO_STAGE";

	public static MODULE_FADE_IN_CPL:string = "MODULE_FADE_IN_CPL";
	public static MODULE_FADE_OUT_CPL:string = "MODULE_FADE_OUT_CPL";
	
	/** 无效果 */
	public static MODULE_FADE_IN_TYPE_0:number = 0;
	/** 从中间放大，默认效果 */
	public static MODULE_FADE_IN_TYPE_1:number = 1;
	/** 向上移动，渐显 */
	public static MODULE_FADE_IN_TYPE_2:number = 2;

	/** 无效果 */
	public static MODULE_FADE_OUT_TYPE_0:number = 0;
	/** 向中间缩小，默认效果 */
	public static MODULE_FADE_OUT_TYPE_1:number = 1;
	/** 向下移动，渐隐 */
	public static MODULE_FADE_OUT_TYPE_2:number = 2;

	public static STATE_NULL:number = 0;
	public static STATE_SHOW:number = 1;
	public static STATE_CLOSE:number = 3;
	public static STATE_DISPOSE:number = 4;

	public static PHASE_LOAD_ASSET:number = 11;
	public static PHASE_SERVER:number = 12;
	public static PHASE_PRE_SHOW:number = 13;
	public static PHASE_MODULE_FADE_IN:number = 14;
	public static PHASE_SHOW:number = 15;

	public static PHASE_PRE_CLOSE:number = 21;
	public static PHASE_MODULE_FADE_OUT:number = 22;
	public static PHASE_CLOSE:number = 23;
}