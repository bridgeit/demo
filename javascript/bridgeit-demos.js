window.serviceHub = 'http://labs.icesoft.com/bridgeit-services/service';

bridgeit.launchFailed = function(){
    document.getElementById('appStoreLink').href = bridgeit.appStoreLink();
    var popup = document.getElementById('getBridgeItPopup');
    popup.style.opacity = 0.95;
    popup.style.display = 'block';
    var vwidth = document.body.clientWidth;
    //center popup with 30px padding of body
    //popup.style.marginLeft = '' + ((vwidth*0.4)/2)-30 + 'px';
}
bridgeit.notSupported = function(id, command){
    if( !bridgeit.isIOS() && !bridgeit.isAndroid() && !bridgeit.isWindowsPhone8()){
        alert('Would you like to try the full mobile experience with BridgeIt? Grab an iOS, Android, or Windows 8 Phone device and try it out!');
    }
    else{
        alert('Sorry, the command ' + command + ' for BridgeIt is not supported on this platform');
    }
}
function closeGetBridgeItPopup(){
    var popup = document.getElementById('getBridgeItPopup');
    popup.style.opacity = 0;
    popup.style.display = 'none';
}
function ajaxGet(url,cb){
    var request;
    if( window.XMLHttpRequest){
        request = new XMLHttpRequest();
    }
    else if( window.ActiveXObject ){
        try{
            request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e){
            try{
                request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch(e){}
        }
    }
    if( !request ){
        console.log("Unable to invoke XMLHttpRequest for " + url);
        return false;
    }
    request.onreadystatechange = function(){
        if (request.readyState === 4) {
            if (request.status === 200) {
                cb(request.responseText);
            } else {
                console.log("XMLHttpRequest for " + url +
                        " with status " + request.status);
            }
          }
    }
    request.open('GET', url);
    request.send();
}
function adjustContentHeight(){
    var vheight = document.body.clientHeight;
    if( navigator.userAgent.indexOf('iPhone') > -1 ){
        vheight += 62;
    }
    document.querySelectorAll('.ui-content')[0].style.minHeight = ''+( vheight - 120 ) + 'px';
}
window.addEventListener('resize', adjustContentHeight, false);
window.addEventListener('orientationchange', adjustContentHeight, false);

function simpleTime()  {
    var now = new Date();
    return now.getHours() + ":" + 
    ("00" + now.getMinutes()).slice(-2) + ":" +
    ("00" + now.getSeconds()).slice(-2);
}
