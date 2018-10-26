$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
});

var ref;
function onDeviceReady() {		
     $('#inapp').click( function() 
		{	
			
		    try {				
				ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes,closebuttoncaption=close');				
			}
			catch(err) {
				alert("Plugin Error - " + err.message);
			}
			
		});		
}