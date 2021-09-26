// ==UserScript==
// @name         Autocomplete edit reason on Forum change
// @namespace    wordpress.org
// @version      0.1
// @description  Adds reason of edit on forum change
// @author       Vlad Timotei
// @match        https://*.wordpress.org/support/topic/*/edit/
// @match        https://wordpress.org/support/topic/*/edit/

// ==/UserScript==

( function() {
	'use strict';
	const reasonText = 'Moved from %1$s to %2$s.';
	const currentForum = document.querySelector( '.topic-forum a' ).innerText;
	const chooseForum = document.querySelector( '#bbp_forum_id' );
	let newReason = '';
	chooseForum.addEventListener( 'change', ( e ) => {
		const editReason = document.querySelector( '#bbp_topic_edit_reason' );
		let oldReason = editReason.value;
		if ( newReason !== '' ) {
			oldReason = oldReason.replace( newReason, '' );
			newReason = '';
		}
		if ( currentForum !== e.target.options[ e.target.selectedIndex].text ) {
			if ( oldReason !== '' ) {
				newReason += ', ';
			}
			newReason += reasonText.replace( '%1$s', currentForum ).replace( '%2$s', e.target.options[ e.target.selectedIndex].text );
		}
		editReason.value = oldReason + newReason;
	} );
} )();
