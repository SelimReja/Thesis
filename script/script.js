/*var main= document.getElementById('main');
main.addEventListener('keyup', function(e){
    if(main.firstElementChild.childElementCount < 1){
        var p= document.createElement("p");
        var a=main.firstElementChild.appendChild(p);
        a.innerHTML='&nbsp;';
        setCursor(a);
    }
    if(e.keyCode==13){
        var curObj=getCursorElement();
        while(curObj.tagName!='P'){
            curObj.outerHTML=curObj.innerHTML;
            curObj=curObj.parentElement;
        }
    }
});
function setCursor(obj) {
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(obj, obj.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
};
function getCursorElement() {
    var node = document.getSelection().anchorNode;
    return (node.nodeType == 3 ? node.parentNode : node);
 };

var activePage;
function getActivePage(){
    var ap= document.activeElement;
    if(ap.tagName == "PAGE"){
        activePage= ap.target;
    }
    return activePage;
};

var o;
main.addEventListener('click', function(e){
    o=e.target;
    if(o.parentElement.tagName=="PAGE" && o.tagName== "DIV"){
        o.outerHTML= "<p>"+o.innerHTML+"</p>";
    }
    getActivePage();
});

function bold(){
    if(o.parentElement.tagName=="PAGE"){
        o.innerHTML= '<b>'+o.innerHTML+'</b>';
    }
}*/
var colors= {
    '00FF00': 'Lime',
    '32CD32': 'LimeGreen',
    '0000FF': 'Blue',
    '8A2BE2': 'BlueViolet ',
    'A52A2A': 'Brown ',
    'DEB887': 'BurlyWood ',
    '5F9EA0': 'CadetBlue ',
    '7FFF00': 'Chartreuse ',
    'D2691E': 'Chocolate ',
};

(function(){
    starting();
    for(var key in colors){
        console.log(key);
        $('.colors').append('<a href="#" style="background-color: #'+key+'"  data-command="'+colors[key]+'"></a>');
    }
})();

function starting(){
    if(!main.firstElementChild.firstElementChild){
        var c=document.createElement('p');
        c.innerHTML='&nbsp;'
        main.firstElementChild.appendChild(c);
    }
};

function getCursorElement() {
    var node = document.getSelection().anchorNode;
    return (node.nodeType == 3 ? node.parentNode : node);
};

main.addEventListener('keyup', function(e){
    if(e.keyCode==8){
        starting();
    }
    if(e.keyCode==13){
        var curObj=getCursorElement();
        var otag=curObj.tagName;
        var objs=[];
        while(otag != 'P'){
            objs.push(curObj);
            curObj= curObj.parentElement;
            otag= curObj.tagName;
        }
        for(var i=0; i<objs.length; i++){
            objs[i].outerHTML= objs[i].innerHTML;
        }
    }
});

$('#tool > a').click(function(){
    var command= $(this).data('command');
    if(command== 'bold' || command== 'italic' || command== 'underline' || command== 'strikethrough' || command== 'justifyLeft' || command== 'justifyRight' || command== 'justifyCenter' || command== 'justifyFull' || command== 'insertOrderedList' || command== 'insertUnorderedList' || command== 'increaseIndent'){
        document.execCommand(command);
    }
});

$('#fore-palette a').click(function(){
    var command= $(this).data('command');
    document.execCommand('foreColor', false, command);
    $('#fore-palette > a').css('color', command);
    $('#fore-palette #fore-corn').css('backgroundColor', command);
    $('#fore-palette > a').removeAttr('data-command');
    $('#fore-palette > a').attr('data-command', command);
});

$('#back-palette a').click(function(){
    var command= $(this).data('command');
    document.execCommand('backColor', false, command);
    $('#back-palette > a').css('color', command);
    $('#back-palette #fore-corn').css('backgroundColor', command);
    $('#back-palette > a').removeAttr('data-command');
    $('#back-palette > a').attr('data-command', $(this).data('command'));
});

$('#fore-palette #fore-corn').hover(function(){
    $('#fore-colors').css('display', 'block');
});

$('#fore-palette').mouseleave(function(){
    $('#fore-colors').css('display', 'none');
});

$('#back-palette #fore-corn').hover(function(){
    $('#back-colors').css('display', 'block');
});

$('#back-palette').mouseleave(function(){
    $('#back-colors').css('display', 'none');
});