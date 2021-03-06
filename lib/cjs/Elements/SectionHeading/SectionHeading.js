"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionHeading = exports.SectionHeadingComponent = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var __1 = require("../..");
var SectionHeadingComponent = function (_a) {
    var _b = _a.className, className = _b === void 0 ? 'bg-white px-8 py-8' : _b, _c = _a.title, title = _c === void 0 ? 'Back End Developer' : _c, _d = _a.tabs, tabs = _d === void 0 ? undefined : _d, _e = _a.actions, actions = _e === void 0 ? undefined : _e;
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, __1.classNames)(className) }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "relative pb-5 border-b border-gray-200 sm:pb-0" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "sm:flex sm:items-center sm:justify-between" }, { children: [typeof title === 'string' ? ((0, jsx_runtime_1.jsx)("h3", __assign({ className: (0, __1.classNames)(!tabs && !actions
                                ? 'mb-4'
                                : 'text-lg leading-6 font-medium text-gray-900') }, { children: title }), void 0)) : (title), actions && ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, __1.classNames)(tabs
                                ? 'md:mt-0 md:absolute md:top-3 md:right-0'
                                : 'sm:mt-0 sm:ml-4 mb-4', 'mt-3 flex') }, { children: actions }), void 0))] }), void 0), tabs && (0, jsx_runtime_1.jsx)("div", __assign({ className: "mt-4 sm:mt-2" }, { children: tabs }), void 0)] }), void 0) }), void 0));
};
exports.SectionHeadingComponent = SectionHeadingComponent;
exports.SectionHeading = Object.assign(exports.SectionHeadingComponent, {});
exports.default = exports.SectionHeading;
