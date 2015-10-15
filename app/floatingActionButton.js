/**
 *
 * @constructor
 */
var FloatingActionButton = function () {
    this._render(function(done) {
        if(done) {
            this._addListeners();
        }
    });
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
    _render: function(next) {
        var self = this;
        $.get(chrome.extension.getURL('/render/fab.html'), function(data) {
            self._$fab = $($.parseHTML(data)).appendTo('body');
            next.call(self, true);
        });
    },
    
    /**
     * Adds event listeners to the button in order to capture a user's click, and
     * perform some action in response.
     *
     * @private
     */
    _addListeners: function () {
        this._$fab.bind('click', this._handleClick.bind(this))
                    .bind('hover', this._handleHover.bind(this));
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