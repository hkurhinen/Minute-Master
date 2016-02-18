(function(){
  'use strict';
  
  $('#issueContainer')
    .accordion({
      header: '> div > h3'
    })
    .sortable({
      axis: 'y',
      handle: 'h3',
      stop: function( event, ui ) {
        ui.item.children( 'h3' ).triggerHandler( 'focusout' );
        $( this ).accordion( 'refresh' );
      }
  });
  
})();