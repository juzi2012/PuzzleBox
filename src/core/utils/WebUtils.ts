module core {
    export class WebUtils {

        public static isKeyboard: boolean = true;

        public static addKeyboardListener(): void {
            document.onkeydown = function (event: KeyboardEvent): any {
                if (event && WebUtils.isKeyboard) {
                    App.EventCenter.dispatch(core.EventID.KEYBOARD_DOWN,event)
                }
            }
            document.onkeyup = function (event: KeyboardEvent): any {
                if (event && WebUtils.isKeyboard) {
                    App.EventCenter.dispatch(core.EventID.KEYBOARD_UP,event)
                }
            }
        }
    }
}