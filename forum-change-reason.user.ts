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
	const reasonText: string = 'Moved from %1$s to %2$s.';
	const currentForum: string = ( document.querySelector( '.topic-forum a' ) as HTMLAnchorElement ).innerText;
	const chooseForum: HTMLSelectElement = document.querySelector( '#bbp_forum_id' ) as HTMLSelectElement;
	let newReason: string = '';
	chooseForum.addEventListener( 'change', ( e: Event ) => {
		const editReason: HTMLInputElement = document.querySelector( '#bbp_topic_edit_reason' ) as HTMLInputElement;
		let oldReason: string = editReason.value;
		if ( newReason !== '' ) {
			oldReason = oldReason.replace( newReason, '' );
			newReason = '';
		}
		if ( currentForum !== ( e.target as HTMLSelectElement ).options[ ( e.target as HTMLSelectElement ).selectedIndex].text ) {
			if ( oldReason !== '' ) {
				newReason += ', ';
			}
			newReason += reasonText.replace( '%1$s', currentForum ).replace( '%2$s', ( e.target as HTMLSelectElement ).options[ ( e.target as HTMLSelectElement ).selectedIndex].text );
		}
		editReason.value = oldReason + newReason;
	} );
} )();
