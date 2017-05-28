Object.defineProperty(exports, "__esModule", { value: true });
exports.uptime = global.android ? org.nativescript.Process.getUpTime : global.__tns_uptime;
var timers = {};
var anyGlobal = global;
var profileNames = [];
var instrumentationEnabled = false;
function enable() {
    instrumentationEnabled = true;
}
exports.enable = enable;
function disable() {
    instrumentationEnabled = false;
}
exports.disable = disable;
exports.time = global.__time || Date.now;
function start(name) {
    var info = timers[name];
    if (info) {
        if (info.isRunning) {
            throw new Error("Timer already running: " + name);
        }
        info.currentStart = exports.time();
        info.isRunning = true;
    }
    else {
        info = {
            totalTime: 0,
            count: 0,
            currentStart: exports.time(),
            isRunning: true
        };
        timers[name] = info;
    }
}
exports.start = start;
function pause(name) {
    var info = pauseInternal(name);
    return info;
}
exports.pause = pause;
function stop(name) {
    var info = pauseInternal(name);
    console.log("---- [" + name + "] STOP total: " + info.totalTime + " count:" + info.count);
    timers[name] = undefined;
    return info;
}
exports.stop = stop;
function isRunning(name) {
    var info = timers[name];
    return !!(info && info.isRunning);
}
exports.isRunning = isRunning;
function pauseInternal(name) {
    var info = timers[name];
    if (!info) {
        throw new Error("No timer started: " + name);
    }
    if (info.isRunning) {
        info.lastTime = exports.time() - info.currentStart;
        info.totalTime += info.lastTime;
        info.count++;
        info.currentStart = 0;
        info.isRunning = false;
    }
    return info;
}
function profileFunction(fn, customName) {
    var name = customName || fn.name;
    profileNames.push(name);
    return function () {
        start(name);
        try {
            return fn.apply(this, arguments);
        }
        finally {
            pause(name);
        }
    };
}
var profileMethodUnnamed = function (target, key, descriptor) {
    if (descriptor === undefined) {
        descriptor = Object.getOwnPropertyDescriptor(target, key);
    }
    var originalMethod = descriptor.value;
    var className = "";
    if (target && target.constructor && target.constructor.name) {
        className = target.constructor.name + ".";
    }
    var name = className + key;
    profileNames.push(name);
    descriptor.value = function () {
        start(name);
        try {
            return originalMethod.apply(this, arguments);
        }
        finally {
            pause(name);
        }
    };
    return descriptor;
};
function profileMethodNamed(name) {
    return function (target, key, descriptor) {
        if (descriptor === undefined) {
            descriptor = Object.getOwnPropertyDescriptor(target, key);
        }
        var originalMethod = descriptor.value;
        profileNames.push(name);
        descriptor.value = function () {
            start(name);
            try {
                return originalMethod.apply(this, arguments);
            }
            finally {
                pause(name);
            }
        };
        return descriptor;
    };
}
var voidMethodDecorator = function () {
};
function profile(nameFnOrTarget, fnOrKey, descriptor) {
    if (typeof nameFnOrTarget === "object" && (typeof fnOrKey === "string" || typeof fnOrKey === "symbol")) {
        if (!instrumentationEnabled) {
            return;
        }
        return profileMethodUnnamed(nameFnOrTarget, fnOrKey, descriptor);
    }
    else if (typeof nameFnOrTarget === "string" && typeof fnOrKey === "function") {
        if (!instrumentationEnabled) {
            return fnOrKey;
        }
        return profileFunction(fnOrKey, nameFnOrTarget);
    }
    else if (typeof nameFnOrTarget === "function") {
        if (!instrumentationEnabled) {
            return nameFnOrTarget;
        }
        return profileFunction(nameFnOrTarget);
    }
    else if (typeof nameFnOrTarget === "string") {
        if (!instrumentationEnabled) {
            return voidMethodDecorator;
        }
        return profileMethodNamed(nameFnOrTarget);
    }
    else {
        if (!instrumentationEnabled) {
            return voidMethodDecorator;
        }
        return profileMethodUnnamed;
    }
}
exports.profile = profile;
function dumpProfiles() {
    profileNames.forEach(function (name) {
        var info = timers[name];
        if (info) {
            console.log("---- [" + name + "] STOP total: " + info.totalTime + " count:" + info.count);
        }
        else {
            console.log("---- [" + name + "] Never called");
        }
    });
}
exports.dumpProfiles = dumpProfiles;
function resetProfiles() {
    profileNames.forEach(function (name) {
        var info = timers[name];
        if (info) {
            if (!info.isRunning) {
                timers[name] = undefined;
            }
            else {
                console.log("---- timer with name [" + name + "] is currently running and won't be reset");
            }
        }
    });
}
exports.resetProfiles = resetProfiles;
function startCPUProfile(name) {
    if (anyGlobal.android) {
        __startCPUProfiler(name);
    }
}
exports.startCPUProfile = startCPUProfile;
function stopCPUProfile(name) {
    if (anyGlobal.android) {
        __stopCPUProfiler(name);
    }
}
exports.stopCPUProfile = stopCPUProfile;
//# sourceMappingURL=profiling.js.map