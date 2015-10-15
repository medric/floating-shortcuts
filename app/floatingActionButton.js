/**
 *
 * @constructor
 */
var FloatingActionButton = function () {
    this._render();
    this._addListeners();
};

FloatingActionButton.prototype = {
    /**
     * A cached reference to the button element.
     *
     * @type {Element}
     * @private
     */
    _$fab: null,
    
    /**
     * Creates floating button element
     * 
     * @private
     */
    _render: function() {
        $.get(chrome.extension.getURL('./render/fab.html'), function(data) {
            this.$fab_ = $($.parseHTML(data)).appendTo('body');
        });
    },
    
    /**
     * Adds event listeners to the button in order to capture a user's click, and
     * perform some action in response.
     *
     * @private
     */
    _addListeners: function () {
        this._$fab.bind('click', this._handleClick.bind(this));
    },

    /**
     *
     * @private
     */
    _handleCallback: function () {
    },

    /**
     *
     * @private
     */
    _handleClick: function () {
        
    }   
};

document.addEventListener('DOMContentLoaded', function () {
    window.FAB = new FloatingActionButton();
});