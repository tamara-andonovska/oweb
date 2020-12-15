$(document).ready(function() {
    document.getElementById("defaultbtn").style.display = "none";
    $("#christmasbtn").click(function(){
        $('body').removeClass('bodyy').addClass('christmasy');
        $('#sb').removeClass('sidebar').addClass('sidebarC');
        $('#main').removeClass('main').addClass('mainC');
        $('#ddc').removeClass('dropdown-content').addClass('dropdown-contentC');
        $('#dd').removeClass('dropdown').addClass('dropdownC');
        $('#christmasbtn').hide();
        $('#defaultbtn').show();
    });
    $("#defaultbtn").click(function(){
        $('body').removeClass('christmasy').addClass('bodyy');
        $('#sb').removeClass('sidebarC').addClass('sidebar');
        $('#main').removeClass('mainC').addClass('main');
        $('#ddc').removeClass('dropdown-contentC').addClass('dropdown-content');
        $('#dd').removeClass('dropdownC').addClass('dropdown');
        $('#christmasbtn').show();
        $('#defaultbtn').hide();
    });
  });