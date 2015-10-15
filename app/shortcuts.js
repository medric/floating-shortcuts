// 

var __KEY_PREFIX__ = 'fab.shortcuts.';

var fetchShortcuts = function() {
}

/**
 * Removes all shortcuts
 */
var dumpShortcuts = function() {
}

/**
 * Saves a shortcut into localstorage
 */
var addShortcut = function(options) {
    if(!options.hasOwnProperty('uid')) {
        options.uid = generateUuid();
    }
    
    var key = __KEY_PREFIX__ + options.uuid;
    
    // Sets locally
    var shortcut = {};
    
    shortcut[key] = options;
    
    chrome.storage.local.set(shortcut, function() {
        // Notify that we saved.
        message('Shortcut saved');
    });
}

/**
 * Remove a shortcut
 */
var removeShortcut = function (uuid) {
    var key = __KEY_PREFIX__ + uuid;
    
    chrome.storage.local.remove(key, function() {
        message('Shortcut deleted');
    });
}
