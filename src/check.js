'use strict';

exports.init = function () {
    // Я не знаю, почему это не работает
    // var keys = Object.keys(methods);
    // console.log(keys);
    // for (var index = 0; index < keys.length; index++) {
    //     console.log(keys[index]);
    //     Object.prototype.keys[index] = methods[keys[index]];
    // }
    Object.prototype.checkContainsKeys = methods.checkContainsKeys;
    Object.prototype.checkHasKeys = methods.checkHasKeys;
    Object.prototype.checkContainsValues = methods.checkContainsValues;
    Object.prototype.checkHasValues = methods.checkHasValues;
    Object.prototype.checkHasValueType = methods.checkHasValueType;
    Object.prototype.checkHasLength = methods.checkHasLength;
    Object.prototype.checkHasParamsCount = methods.checkHasParamsCount;
    Object.prototype.checkHasWordsCount = methods.checkHasWordsCount;

};

var methods = {
    checkContainsKeys: function (keys) {
        if (Object.getPrototypeOf(this) === Array.prototype ||
        Object.getPrototypeOf(this) === Object.prototype) {
            var objectKeys = Object.keys(this);
            for (var item = 0; item < keys.length; item++) {
                if (objectKeys.indexOf(keys[item]) < 0) {
                    return false;
                }
            }
            return true;
        }
    },

    checkHasKeys: function (keys) {
        if (Object.getPrototypeOf(this) === Array.prototype ||
        Object.getPrototypeOf(this) === Object.prototype) {
            var objectKeys = Object.keys(this);
            for (var item = 0; item < keys.length; item++) {
                if (objectKeys.indexOf(keys[item]) < 0) {
                    return false;
                }
            }
            return keys.length === objectKeys.length;
        }
    },

    checkContainsValues: function (values) {
        if (Object.getPrototypeOf(this) === Array.prototype ||
        Object.getPrototypeOf(this) === Object.prototype) {
            for (var index = 0; index < values.length; index++) {
                if (this.indexOf(values[index]) === -1) {
                    return false;
                }
            }
            return true;
        }
    },

    checkHasValues: function (values) {
        if (Object.getPrototypeOf(this) === Array.prototype ||
        Object.getPrototypeOf(this) === Object.prototype) {
            var objectKeys = Object.keys(this);
            for (var item = 0; item < objectKeys.length; item++) {
                if (values.indexOf(this[objectKeys[item]]) < 0) {
                    return false;
                }
            }
            return values.length === objectKeys.length;
        }
    },

    checkHasValueType: function (key, type) {
        if (Object.getPrototypeOf(this) === Array.prototype ||
        Object.getPrototypeOf(this) === Object.prototype) {
            var types = ['string', 'number', 'function', 'array'];
            return (types.indexOf(typeof key) !== -1 && typeof key === typeof type());
        }
    },

    checkHasLength: function (length) {
        if (Object.getPrototypeOf(this) === Array.prototype ||
        Object.getPrototypeOf(this) === String.prototype) {
            return this.length === length;
        }
    },

    checkHasParamsCount: function (count) {
        if (Object.getPrototypeOf(this) === Function.prototype) {
            return this.length === count;
        }
    },

    checkHasWordsCount: function (count) {
        if (Object.getPrototypeOf(this) === String.prototype) {
            var words = this.split(' ');
            return words.length === count;
        }
    }
};
