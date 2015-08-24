/**
 * File: jquery.InputNumbers.js
 *
 * Dependencies: jQuery
 */

(function ( W, D, $, U ) {
  'use strict';

  var DATA_EVENT_NAME = 'inputNumber',

  /*
   * Read the entered input and perform the following steps to sanitize:
   *
   * 1. Remove the currency symbols
   * 2. Remove all the alphabets
   *
   * */
    _onInputBlur = function ( e ) {
      var jInput = $( e.target ),
        inputValue = jInput.val(),
        strippedNumbers, finalNumberVal;

      if ( !inputValue ) {
        return;
      }

      strippedNumbers = inputValue.replace( /[^\d.-]/g, '' );
      finalNumberVal = parseFloat( strippedNumbers ) || '';

      jInput.val( finalNumberVal );
    };

  var publicMethods = {

      destroy: function () {
        var that = this,
          klassName = settings.baseClass;

        if ( that.hasClass( klassName ) ) {
          that.off( 'change', _onInputBlur );
        } else {
          that.off( 'change', ('.' + klassName), _onInputBlur );
        }

        that.data( DATA_EVENT_NAME, false );
      }
    },

    initialize = function ( options ) {
      var that = this,
        klassName = settings.baseClass;

      //Prevent multiple initialization
      if ( that.data( DATA_EVENT_NAME ) ) {
        return;
      }

      if ( that.hasClass( klassName ) ) {
        that.on( 'change', _onInputBlur );
      } else {
        that.on( 'change', ('.' + klassName), _onInputBlur );
      }

      that.data( DATA_EVENT_NAME, true );
    },

    settings = {
      baseClass: 'inp-num' //class which is to be added on the element on which change event is listened
    };

  $.fn.inputNumber = function ( action, opts ) {
    var that = this;

    if ( typeof action === 'string' ) {
      var functionToExecute = publicMethods[ action ];

      if ( typeof functionToExecute === 'function' ) {
        return functionToExecute.call( that, opts );
      } else {
        $.error( 'Method ' + functionToExecute + ' does not exist' );
      }
    } else {
      opts = action;

      return initialize.call( that, opts );
    }
  };
})( window, document, jQuery );
