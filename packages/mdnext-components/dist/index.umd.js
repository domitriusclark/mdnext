(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global = global || self, global.components = factory(global.react));
}(this, (function (react) {
	react = react && Object.prototype.hasOwnProperty.call(react, 'default') ? react['default'] : react;

	var index = {};

	return index;

})));
//# sourceMappingURL=index.umd.js.map
