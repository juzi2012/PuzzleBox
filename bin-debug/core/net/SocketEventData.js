var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var core;
(function (core) {
    /**
     *
     * @author
     *
     */
    var SocketEventData = (function (_super) {
        __extends(SocketEventData, _super);
        function SocketEventData(messageID, messageData) {
            return _super.call(this, messageID, messageData) || this;
        }
        return SocketEventData;
    }(core.EventData));
    core.SocketEventData = SocketEventData;
    __reflect(SocketEventData.prototype, "core.SocketEventData");
})(core || (core = {}));
//# sourceMappingURL=SocketEventData.js.map