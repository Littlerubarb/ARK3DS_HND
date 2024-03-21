// Internet Explorer 6-11

if (window.location.protocol == 'http:') {

    console.log("you are accessing us via "
        + "an insecure protocol (HTTP). "
        + "Redirecting you to HTTPS.");

    window.location.href =
        window.location.href.replace(
            'http:', 'https:');
}
else {
    (window.location.protocol == "https:")
    console.log("you are accessing us via"
        + " our secure HTTPS protocol.");
}

var ua = window.navigator.userAgent;
var trident = ua.indexOf('Trident/');
if (trident > 0) {

    if (window.confirm("Windows Explorer 11 does not work with all the features of this site; Please Install Chrome or Firefox from Software Centre.")) //, or use Microsoft Edge. Click ok to open Microsoft Edge."))
    {
        //window.open("microsoft-edge:https://win-edm1-v502.wst.pwgsc.gc.ca/wstvault/");
        var imported = document.createElement('script');
        imported.src = './js/indexeventListenerIE.js';
        document.head.appendChild(imported);
    }

} else {
    var imported = document.createElement('script');
    imported.src = './js/indexeventListener.js';
    document.head.appendChild(imported);

}


