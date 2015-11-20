'use strict';

exports.init = function () {
    var keys = Object.keys(methods);
    for (var index = 0; index < keys.length; index++) {
        var temp = keys[index];
        Object.prototype[temp] = methods[temp];
    }
};

function isArray(object) {
    return Object.getPrototypeOf(object) === Array.prototype;
}
function isObject(object) {
    return Object.getPrototypeOf(object) === Object.prototype;
}
function isFunction(object) {
    return Object.getPrototypeOf(object) === Function.prototype;
}
function isString(object) {
    return Object.getPrototypeOf(object) === String.prototype;
}

var methods = {
    checkContainsKeys: function (keys) {
        if (isArray(this) || isObject(this)) {
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
        if (isArray(this) || isObject(this)) {
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
        if (isArray(this) || isObject(this)) {
            for (var index = 0; index < values.length; index++) {
                if (this.indexOf(values[index]) === -1) {
                    return false;
                }
            }
            return true;
        }
    },

    checkHasValues: function (values) {
        if (isArray(this) || isObject(this)) {
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
        if (isArray(this) || isObject(this)) {
            var types = ['string', 'number', 'function', 'array'];
            return (types.indexOf(typeof type) !== -1 && typeof this[key] === typeof type());
        }
    },

    checkHasLength: function (length) {
        if (isArray(this) || isString(this)) {
            return this.length === length;
        }
    },

    checkHasParamsCount: function (count) {
        if (isFunction(this)) {
            return this.length === count;
        }
    },

    checkHasWordsCount: function (count) {
        if (isString(this)) {
            var words = this.split(' ');
            return words.length === count;
        }
    }
};
