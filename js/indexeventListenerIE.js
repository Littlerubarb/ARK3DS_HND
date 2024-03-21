window.onload = function () {
    $("#tc1-prog").load("welcome.html");
    var modal = document.getElementById("myModal");
      
    function displayMessage(evt) {

        var message;

        if (evt.origin !== "https://win-edm1-v502.wst.pwgsc.gc.ca/wstvault/") {

            if (evt.data == "TurnOff") {
               
                //alert("Off :" + evt.data);
                modal.style.display = "none";
            } else {  
                //alert("On :" + evt.data);
                
                modal.style.display = "block";
            }
        }
    }   
       
    if (window.addEventListener) {
        
        // For standards-compliant web browsers
       
        window.addEventListener("message", displayMessage, false);
        
    } else {
        
        window.attachEvent("onmessage", displayMessage);
        
    }

    // Get the button that opens the modal
    var btn = document.getElementById('crePR');
    var btn1 = document.getElementById('userliv');
    var btn2 = document.getElementById('proJliv');
    var btn3 = document.getElementById('chrtProv');
    var btn4 = document.getElementById('chrtCity');
    var btn5 = document.getElementById('chrtStat');
    var btn6 = document.getElementById('chrtBSU');
    var btn7 = document.getElementById('Bim360Map');
    var btn8 = document.getElementById('xBim360');
    var btn9 = document.getElementById('VaultMap');
    var btn10 = document.getElementById('VaultInt');
    var btn15 = document.getElementById('VaultIntPark');
    var btn17 = document.getElementById('VaultIntRCMP');
    var btn18 = document.getElementById('VaultIntCSC');
    var btn11 = document.getElementById('xVault');
    var btn12 = document.getElementById('AccMap');
    var btn13 = document.getElementById('xAcc');
    var btn14 = document.getElementById('Help');
    var btn16 = document.getElementById('RP1');
       // When the user clicks the button, open the modal
    btn.onclick = function (event) {

        // document.getElementById("tc1-prog").innerHTML = '<p>Text</p>' + '<div id="gridDiv"></div>';
        $(function () {
            $("#tc1-prog").html("<iframe src='plugins/php/dbo_BIM360_Project_add.php' style='width:100%; height:750px;'></iframe>");
            bkMap();
            // $("#tc1-prog").load("createtab.html");
        });

    };
    btn1.onclick = function (event) {

        // document.getElementById("tc1-prog").innerHTML = '<p>Text</p>' + '<div id="gridDiv"></div>';
        $(function () {
            $("#tc1-prog").load("users_Tab.html");
            bkMap();
        });


    };

    btn2.onclick = function (event) {

        // document.getElementById("tc1-prog").innerHTML = '<p>Text</p>' + '<div id="gridDiv"></div>';
        $(function () {
            $("#tc1-prog").load("project_liveTab.html");
            bkMap();
        });


    };

    btn3.onclick = function (event) {

        // document.getElementById("tc1-prog").innerHTML = '<p>Text</p>' + '<div id="gridDiv"></div>';
        $(function () {

            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/wstvault/charts/Live_Projects_by_Province_chart.php' style='width:100%; height:650px;'></iframe>");
            bkMap();
        });


    };

    btn4.onclick = function (event) {

        // document.getElementById("tc1-prog").innerHTML = '<p>Text</p>' + '<div id="gridDiv"></div>';
        $(function () {

            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/wstvault/charts/Live_Projects_by_City_chart.php' style='width:100%; height:650px;'></iframe>");
            bkMap();
        });


    };

    btn5.onclick = function (event) {

        // document.getElementById("tc1-prog").innerHTML = '<p>Text</p>' + '<div id="gridDiv"></div>';
        $(function () {

            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/wstvault/charts/Live_Projects_By_Status_chart.php' style='width:100%; height:650px;'></iframe>");
            bkMap();
        });


    };

    btn6.onclick = function (event) {

        // document.getElementById("tc1-prog").innerHTML = '<p>Text</p>' + '<div id="gridDiv"></div>';
        $(function () {

            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/wstvault/charts/Live_Projects_By_BSU_chart.php' style='width:100%; height:650px;'></iframe>");
            bkMap();
        });


    };
    btn7.onclick = function (event) {
        modal.style.display = "block";

        $(function () {
            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/wstvault/BIM360_Map_Interface.html' style='width: 100%; height: 92vh; overflow:hidden;'></iframe>");
            bkMap();
        });

    };
    btn8.onclick = function (event) {

        // document.getElementById("tc1-prog").innerHTML = '<p>Text</p>' + '<div id="gridDiv"></div>';
        $(function () {
            window.location.reload();
            bkMap();
        });


    };
    btn9.onclick = function (event) {
        modal.style.display = "block";
        $(function () {
            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/wstvault/Vault_Map_Interface.html' style='width:100%; height:92vh; overflow:hidden;'></iframe>");
            bkMap();

        });

    };
    btn10.onclick = function (event) {
        $(function () {
            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/AutodeskTC/win-edm1-v502.wst.pwgsc.gc.ca/Geomatics#/' style='width:100%; height:650px;'></iframe>");
            VaultBTNLNCH();
            //$("#tc1-prog").load("Vault_Main.html");
        });

    };
    btn11.onclick = function (event) {

        // document.getElementById("tc1-prog").innerHTML = '<p>Text</p>' + '<div id="gridDiv"></div>';
        $(function () {
            window.location.reload();
            bkMap();
        });


    };
    btn12.onclick = function (event) {
        modal.style.display = "block";
        $(function () {
            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/wstvault/Acc_Map_Interface.html' style='width:100%; height:92vh; overflow:hidden;'></iframe>");
            bkMap();
        });

    };
    btn13.onclick = function (event) {

        // document.getElementById("tc1-prog").innerHTML = '<p>Text</p>' + '<div id="gridDiv"></div>';
        $(function () {
            window.location.reload();
            bkMap();
        });


    };
    btn14.onclick = function (event) {

        // document.getElementById("tc1-prog").innerHTML = '<p>Text</p>' + '<div id="gridDiv"></div>';
        $(function () {
            mywindow = window.open("./WSTVAULT Help.pdf","", "width=1024,height=800");
            mywindow.moveTo(500, 500);

        });


    };
    btn15.onclick = function (event) {
        $(function () {
            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/AutodeskTC/win-edm1-v502.wst.pwgsc.gc.ca/Parks%20Canada#/' style='width:100%; height:650px;'></iframe>");
            VaultBTNLNCH();
            //$("#tc1-prog").load("Vault_Main.html");
        });

    };

    btn16.onclick = function (event) {
        modal.style.display = "block";
        $(function () {
            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/wstvault/RP1_Map_Interface.html' style='width:100%; height:92vh; overflow:hidden;'></iframe>");
            bkMap();

        });

    };
    btn17.onclick = function (event) {
        $(function () {
            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/AutodeskTC/win-edm1-v502.wst.pwgsc.gc.ca/RCMP#/' style='width:100%; height:650px;'></iframe>");
            VaultBTNLNCH();
            //$("#tc1-prog").load("Vault_Main.html");
        });

    };
    btn18.onclick = function (event) {
        $(function () {
            $("#tc1-prog").html("<iframe src='https://win-edm1-v502.wst.pwgsc.gc.ca/AutodeskTC/win-edm1-v502.wst.pwgsc.gc.ca/Correctional%20Service%20Canada#/' style='width:100%; height:650px;'></iframe>");
            VaultBTNLNCH();
            //$("#tc1-prog").load("Vault_Main.html");
        });

    };
    var buttonlogin = document.getElementById("login");
    var userliv = document.getElementById("userliv");
    var proJliv = document.getElementById("proJliv");
    var chrtCity = document.getElementById("chrtCity");
    var chrtStat = document.getElementById("chrtStat");
    var chrtBSU = document.getElementById("chrtBSU");
    var RP1navdrop = document.getElementById("RP1navdrop");
    var emaillogin = document.getElementById("emailInput");
    var passwordlogin = document.getElementById("passwordInput");
    var loginform = document.getElementById("logindropdownMenu1");
    var loginmenu = document.getElementById("loginmenu");
    var loggedin = document.getElementById("loggedin");
    var loggedinmenu = document.getElementById("loggedindropdownMenu");
    var buttonlogout = document.getElementById("logout");
   
    
    var chrtProv = document.getElementById('chrtProv');   
    var Bim360Map = document.getElementById('Bim360Map');   
    var VaultMap = document.getElementById('VaultMap');   
    var AccMap = document.getElementById('AccMap');
    var RP1 = document.getElementById('RP1');
   



    chrtProv.className = "dropdown-item disabled";
    Bim360Map.className = "dropdown-item disabled";
    VaultMap.className = "dropdown-item disabled";
    AccMap.className = "dropdown-item disabled";
    RP1.className = "dropdown-item disabled"; 
   

};


function VaultBTNLNCH() {
    var vaultpasdiv = document.getElementById('Vaultpass');
    vaultpasdiv.hidden = false;
}
function bkMap() {
    var vaultpasdiv = document.getElementById('Vaultpass');
    vaultpasdiv.hidden = true;
}


