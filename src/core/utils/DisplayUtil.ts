module core {
	export class DisplayUtil extends BaseClass {
		/**
		 * 构造函数
		 */
		public constructor() {
			super();
		}

		/**
		 * 创建一个Bitmap
		 * @param resName resource.json中配置的name
		 * @returns {egret.Bitmap}
		 */
		public createBitmap(resName:string):egret.Bitmap {
			var result:egret.Bitmap = new egret.Bitmap();
			var texture:egret.Texture = RES.getRes(resName);
			result.texture = texture;
			return result;
		}

		/**
		 * 创建一张Gui的图片
		 * @param resName
		 * @returns {egret.Bitmap}
		 */
		/*public createEuiImage(resName:string):eui.Image {
			var result:eui.Image = new eui.Image();
			var texture:egret.Texture = RES.getRes(resName);
			result.source = texture;
			return result;
		}*/

		/**
		 * 从父级移除child
		 * @param child
		 */
		public removeFromParent(child:egret.DisplayObject) {
			if (child.parent == null)
				return;

			child.parent.removeChild(child);
		}
		public addChildAbove(newObj:fairygui.GObject, aimObj:fairygui.GObject):void
		{
			if(newObj.parent == aimObj.parent){
				if(newObj.parent.getChildIndex(newObj) < aimObj.parent.getChildIndex(aimObj)){
					aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj));
				}else{
					aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj) + 1);
				}
			}else{
				aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj) + 1);
			}
		}

		public addChildBelow(newObj:fairygui.GObject, aimObj:fairygui.GObject):void
		{
			if(newObj.parent == aimObj.parent){
				if(newObj.parent.getChildIndex(newObj) < aimObj.parent.getChildIndex(aimObj)){
					aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj) - 1);
				}else{
					aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj));
				}
			}else{
				aimObj.parent.addChildAt(newObj, aimObj.parent.getChildIndex(aimObj));
			}
		}
	}
}