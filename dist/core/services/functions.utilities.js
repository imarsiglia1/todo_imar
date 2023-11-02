"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.randomSecondIntervalSleep = void 0;
const randomSecondIntervalSleep = async (min, max) => {
    const random = Math.random() * (max - min) + min;
    await (0, exports.sleep)(random);
};
exports.randomSecondIntervalSleep = randomSecondIntervalSleep;
const sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms * 1000));
};
exports.sleep = sleep;
//# sourceMappingURL=functions.utilities.js.map