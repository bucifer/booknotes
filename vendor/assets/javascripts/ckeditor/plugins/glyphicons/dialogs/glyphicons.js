﻿var glyphicon="";function klik(b){glyphicon=b.getAttribute("title");ckDialog=window.CKEDITOR.dialog.getCurrent();ckOk=ckDialog._.buttons.ok;ckOk.click()}function searchIcon(b){for(var a=document.getElementById("glyphicons").getElementsByTagName("a"),c=0,f=a.length,d,e;c<f;c++)d=a[c],e=d.getAttribute("title"),d.style.display=e&&0<=e.indexOf(b)?"block":"none"}
function setSpanColor(b){el=document.getElementById("glyphicons");el=el.getElementsByTagName("span");for(i=0;i<el.length;i++)el[i].setAttribute("style","color:"+b)}
CKEDITOR.dialog.add("glyphiconsDialog",function(b){return{title:"Insert Glyphicon",minWidth:600,minHeight:400,resizable:!1,contents:[{id:"insertGlyphicon",label:"insertGlyphicon",elements:[{type:"hbox",widths:["50%","50%"],children:[{type:"hbox",widths:["75%","25%"],children:[{type:"text",id:"colorChooser",className:"colorChooser",label:"Color",onKeyUp:function(a){setSpanColor(a.sender.$.value)}},{type:"button",label:"Select",style:"margin-top:1.35em",onClick:function(){b.getColorFromDialog(function(a){document.getElementsByClassName("colorChooser")[0].getElementsByTagName("input")[0].value=
a;setSpanColor(a)},this)}}]},{type:"text",id:"size",className:"size",label:"Size"}]},{type:"text",id:"glyphiconsSearch",className:"glyphiconsSearch cke_dialog_ui_input_text",label:"Search",onKeyUp:function(a){searchIcon(a.sender.$.value)}},{type:"html",html:'<link rel="stylesheet" type="text/css" href="'+CKEDITOR.basePath+'plugins/glyphicons/bootstrap/css/bootstrap.css" />'},{type:"html",html:' \t\t\t\t\t\t\t<div id="glyphicons"> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-adjust"><span class="glyphicon glyphicon-adjust"></span> Adjust</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-align-center"><span class="glyphicon glyphicon-align-center"></span> Align Center</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-align-justify"><span class="glyphicon glyphicon-align-justify"></span> Align Justify</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-align-left"><span class="glyphicon glyphicon-align-left"></span> Align Left</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-align-right"><span class="glyphicon glyphicon-align-right"></span> Align Right</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-arrow-down"><span class="glyphicon glyphicon-arrow-down"></span> Arrow Down</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-arrow-left"><span class="glyphicon glyphicon-arrow-left"></span> Arrow Left</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-arrow-right"><span class="glyphicon glyphicon-arrow-right"></span> Arrow Right</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-arrow-up"><span class="glyphicon glyphicon-arrow-up"></span> Arrow Up</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-asterisk"><span class="glyphicon glyphicon-asterisk"></span> Asterisk</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-backward"><span class="glyphicon glyphicon-backward"></span> Backward</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-ban-circle"><span class="glyphicon glyphicon-ban-circle"></span> Ban Circle</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-barcode"><span class="glyphicon glyphicon-barcode"></span> Barcode</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-bell"><span class="glyphicon glyphicon-bell"></span> Bell</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-bold"><span class="glyphicon glyphicon-bold"></span> Bold</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-book"><span class="glyphicon glyphicon-book"></span> Book</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-bookmark"><span class="glyphicon glyphicon-bookmark"></span> Bookmark</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-briefcase"><span class="glyphicon glyphicon-briefcase"></span> Briefcase</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-bullhorn"><span class="glyphicon glyphicon-bullhorn"></span> Bullhorn</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-calendar"><span class="glyphicon glyphicon-calendar"></span> Calendar</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-camera"><span class="glyphicon glyphicon-camera"></span> Camera</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-certificate"><span class="glyphicon glyphicon-certificate"></span> Certificate</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-check"><span class="glyphicon glyphicon-check"></span> Check</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-chevron-down"><span class="glyphicon glyphicon-chevron-down"></span> Chevron Down</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-chevron-left"><span class="glyphicon glyphicon-chevron-left"></span> Chevron Left</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-chevron-right"><span class="glyphicon glyphicon-chevron-right"></span> Chevron Right</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-chevron-up"><span class="glyphicon glyphicon-chevron-up"></span> Chevron Up</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-circle-arrow-down"><span class="glyphicon glyphicon-circle-arrow-down"></span> Circle Arrow Down</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-circle-arrow-left"><span class="glyphicon glyphicon-circle-arrow-left"></span> Circle Arrow Left</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-circle-arrow-right"><span class="glyphicon glyphicon-circle-arrow-right"></span> Circle Arrow Right</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-circle-arrow-up"><span class="glyphicon glyphicon-circle-arrow-up"></span> Circle Arrow Up</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-cloud"><span class="glyphicon glyphicon-cloud"></span> Cloud</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-cloud-download"><span class="glyphicon glyphicon-cloud-download"></span> Cloud Download</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-cloud-upload"><span class="glyphicon glyphicon-cloud-upload"></span> Cloud Upload</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-cog"><span class="glyphicon glyphicon-cog"></span> Cog</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-collapse-down"><span class="glyphicon glyphicon-collapse-down"></span> Collapse Down</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-collapse-up"><span class="glyphicon glyphicon-collapse-up"></span> Collapse Up</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-comment"><span class="glyphicon glyphicon-comment"></span> Comment</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-compressed"><span class="glyphicon glyphicon-compressed"></span> Compressed</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-copyright-mark"><span class="glyphicon glyphicon-copyright-mark"></span> Copyright Mark</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-credit-card"><span class="glyphicon glyphicon-credit-card"></span> Credit Card</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-cutlery"><span class="glyphicon glyphicon-cutlery"></span> Cutlery</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-dashboard"><span class="glyphicon glyphicon-dashboard"></span> Dashboard</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-download"><span class="glyphicon glyphicon-download"></span> Download</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-download-alt"><span class="glyphicon glyphicon-download-alt"></span> Download Alt</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-earphone"><span class="glyphicon glyphicon-earphone"></span> Earphone</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-edit"><span class="glyphicon glyphicon-edit"></span> Edit</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-eject"><span class="glyphicon glyphicon-eject"></span> Eject</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-envelope"><span class="glyphicon glyphicon-envelope"></span> Envelope</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-euro"><span class="glyphicon glyphicon-euro"></span> Euro</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-exclamation-sign"><span class="glyphicon glyphicon-exclamation-sign"></span> Exclamation Sign</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-expand"><span class="glyphicon glyphicon-expand"></span> Expand</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-export"><span class="glyphicon glyphicon-export"></span> Export</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-eye-close"><span class="glyphicon glyphicon-eye-close"></span> Eye Close</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-eye-open"><span class="glyphicon glyphicon-eye-open"></span> Eye Open</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-facetime-video"><span class="glyphicon glyphicon-facetime-video"></span> Facetime Video</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-fast-backward"><span class="glyphicon glyphicon-fast-backward"></span> Fast Backward</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-fast-forward"><span class="glyphicon glyphicon-fast-forward"></span> Fast Forward</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-file"><span class="glyphicon glyphicon-file"></span> File</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-film"><span class="glyphicon glyphicon-film"></span> Film</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-filter"><span class="glyphicon glyphicon-filter"></span> Filter</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-fire"><span class="glyphicon glyphicon-fire"></span> Fire</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-flag"><span class="glyphicon glyphicon-flag"></span> Flag</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-flash"><span class="glyphicon glyphicon-flash"></span> Flash</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-floppy-disk"><span class="glyphicon glyphicon-floppy-disk"></span> Floppy Disk</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-floppy-open"><span class="glyphicon glyphicon-floppy-open"></span> Floppy Open</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-floppy-remove"><span class="glyphicon glyphicon-floppy-remove"></span> Floppy Remove</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-floppy-saved"><span class="glyphicon glyphicon-floppy-saved"></span> Floppy Saved</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-floppy-save"><span class="glyphicon glyphicon-floppy-save"></span> Floppy Save</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-folder-close"><span class="glyphicon glyphicon-folder-close"></span> Folder Close</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-folder-open"><span class="glyphicon glyphicon-folder-open"></span> Folder Open</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-font"><span class="glyphicon glyphicon-font"></span> Font</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-forward"><span class="glyphicon glyphicon-forward"></span> Forward</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-fullscreen"><span class="glyphicon glyphicon-fullscreen"></span> Fullscreen</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-gbp"><span class="glyphicon glyphicon-gbp"></span> Gbp</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-gift"><span class="glyphicon glyphicon-gift"></span> Gift</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-glass"><span class="glyphicon glyphicon-glass"></span> Glass</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-globe"><span class="glyphicon glyphicon-globe"></span> Globe</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-hand-down"><span class="glyphicon glyphicon-hand-down"></span> Hand Down</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-hand-left"><span class="glyphicon glyphicon-hand-left"></span> Hand Left</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-hand-right"><span class="glyphicon glyphicon-hand-right"></span> Hand Right</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-hand-up"><span class="glyphicon glyphicon-hand-up"></span> Hand Up</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-hd-video"><span class="glyphicon glyphicon-hd-video"></span> Hd Video</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-hdd"><span class="glyphicon glyphicon-hdd"></span> Hdd</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-header"><span class="glyphicon glyphicon-header"></span> Header</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-headphones"><span class="glyphicon glyphicon-headphones"></span> Headphones</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-heart"><span class="glyphicon glyphicon-heart"></span> Heart</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-heart-empty"><span class="glyphicon glyphicon-heart-empty"></span> Heart Empty</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-home"><span class="glyphicon glyphicon-home"></span> Home</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-import"><span class="glyphicon glyphicon-import"></span> Import</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-inbox"><span class="glyphicon glyphicon-inbox"></span> Inbox</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-indent-left"><span class="glyphicon glyphicon-indent-left"></span> Indent Left</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-indent-right"><span class="glyphicon glyphicon-indent-right"></span> Indent Right</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-info-sign"><span class="glyphicon glyphicon-info-sign"></span> Info Sign</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-italic"><span class="glyphicon glyphicon-italic"></span> Italic</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-leaf"><span class="glyphicon glyphicon-leaf"></span> Leaf</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-link"><span class="glyphicon glyphicon-link"></span> Link</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-list-alt"><span class="glyphicon glyphicon-list-alt"></span> List Alt</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-list"><span class="glyphicon glyphicon-list"></span> List</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-lock"><span class="glyphicon glyphicon-lock"></span> Lock</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-log-in"><span class="glyphicon glyphicon-log-in"></span> Log In</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-log-out"><span class="glyphicon glyphicon-log-out"></span> Log Out</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-magnet"><span class="glyphicon glyphicon-magnet"></span> Magnet</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-map-marker"><span class="glyphicon glyphicon-map-marker"></span> Map Marker</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-minus"><span class="glyphicon glyphicon-minus"></span> Minus</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-minus-sign"><span class="glyphicon glyphicon-minus-sign"></span> Minus Sign</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-move"><span class="glyphicon glyphicon-move"></span> Move</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-music"><span class="glyphicon glyphicon-music"></span> Music</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-new-window"><span class="glyphicon glyphicon-new-window"></span> New Window</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-off"><span class="glyphicon glyphicon-off"></span> Off</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-ok"><span class="glyphicon glyphicon-ok"></span> Ok</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-ok-circle"><span class="glyphicon glyphicon-ok-circle"></span> Ok Circle</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-ok-sign"><span class="glyphicon glyphicon-ok-sign"></span> Ok Sign</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-open"><span class="glyphicon glyphicon-open"></span> Open</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-paperclip"><span class="glyphicon glyphicon-paperclip"></span> Paperclip</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-pause"><span class="glyphicon glyphicon-pause"></span> Pause</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-pencil"><span class="glyphicon glyphicon-pencil"></span> Pencil</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-phone"><span class="glyphicon glyphicon-phone"></span> Phone</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-phone-alt"><span class="glyphicon glyphicon-phone-alt"></span> Phone Alt</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-picture"><span class="glyphicon glyphicon-picture"></span> Picture</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-plane"><span class="glyphicon glyphicon-plane"></span> Plane</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-play"><span class="glyphicon glyphicon-play"></span> Play</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-play-circle"><span class="glyphicon glyphicon-play-circle"></span> Play Circle</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-plus"><span class="glyphicon glyphicon-plus"></span> Plus</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-plus-sign"><span class="glyphicon glyphicon-plus-sign"></span> Plus Sign</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-print"><span class="glyphicon glyphicon-print"></span> Print</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-pushpin"><span class="glyphicon glyphicon-pushpin"></span> Pushpin</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-qrcode"><span class="glyphicon glyphicon-qrcode"></span> Qr Code</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-question-sign"><span class="glyphicon glyphicon-question-sign"></span> Question Sign</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-random"><span class="glyphicon glyphicon-random"></span> Random</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-record"><span class="glyphicon glyphicon-record"></span> Record</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-refresh"><span class="glyphicon glyphicon-refresh"></span> Refresh</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-registration-mark"><span class="glyphicon glyphicon-registration-mark"></span> Registration Mark</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-remove"><span class="glyphicon glyphicon-remove"></span> Remove</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-remove-circle"><span class="glyphicon glyphicon-remove-circle"></span> Remove Circle</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-remove-sign"><span class="glyphicon glyphicon-remove-sign"></span> Remove Sign</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-repeat"><span class="glyphicon glyphicon-repeat"></span> Repeat</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-resize-full"><span class="glyphicon glyphicon-resize-full"></span> Resize Full</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-resize-horizontal"><span class="glyphicon glyphicon-resize-horizontal"></span> Resize Horizontal</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-resize-small"><span class="glyphicon glyphicon-resize-small"></span> Resize Small</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-resize-vertical"><span class="glyphicon glyphicon-resize-vertical"></span> Resize Vertical</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-retweet"><span class="glyphicon glyphicon-retweet"></span> Retweet</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-road"><span class="glyphicon glyphicon-road"></span> Road</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-save"><span class="glyphicon glyphicon-save"></span> Save</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-saved"><span class="glyphicon glyphicon-saved"></span> Saved</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-screenshot"><span class="glyphicon glyphicon-screenshot"></span> Screenshot</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sd-video"><span class="glyphicon glyphicon-sd-video"></span> Sd Video</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-search"><span class="glyphicon glyphicon-search"></span> Search</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-send"><span class="glyphicon glyphicon-send"></span> Send</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-share"><span class="glyphicon glyphicon-share"></span> Share</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-share-alt"><span class="glyphicon glyphicon-share-alt"></span> Share Alt</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-shopping-cart"><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-signal"><span class="glyphicon glyphicon-signal"></span> Signal</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sort"><span class="glyphicon glyphicon-sort"></span> Sort</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sort-by-alphabet"><span class="glyphicon glyphicon-sort-by-alphabet"></span> Sort By Alphabet</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sort-by-alphabet-alt"><span class="glyphicon glyphicon-sort-by-alphabet-alt"></span> Sort By Alphabet Alt</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sort-by-attributes"><span class="glyphicon glyphicon-sort-by-attributes"></span> Sort By Attributes</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sort-by-attributes-alt"><span class="glyphicon glyphicon-sort-by-attributes-alt"></span> Sort By Attributes Alt</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sort-by-order"><span class="glyphicon glyphicon-sort-by-order"></span> Sort By Order</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sort-by-order-alt"><span class="glyphicon glyphicon-sort-by-order-alt"></span> Sort By Order Alt</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sound-5-1"><span class="glyphicon glyphicon-sound-5-1"></span> Sound 5.1</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sound-6-1"><span class="glyphicon glyphicon-sound-6-1"></span> Sound 6.1</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sound-7-1"><span class="glyphicon glyphicon-sound-7-1"></span> Sound 7.1</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sound-dolby"><span class="glyphicon glyphicon-sound-dolby"></span> Sound Dolby</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-sound-stereo"><span class="glyphicon glyphicon-sound-stereo"></span> Sound Stereo</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-star"><span class="glyphicon glyphicon-star"></span> Star</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-star-empty"><span class="glyphicon glyphicon-star-empty"></span> Star Empty</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-stats"><span class="glyphicon glyphicon-stats"></span> Stats</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-step-backward"><span class="glyphicon glyphicon-step-backward"></span> Step Backward</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-step-forward"><span class="glyphicon glyphicon-step-forward"></span> Step Forward</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-stop"><span class="glyphicon glyphicon-stop"></span> Stop</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-subtitles"><span class="glyphicon glyphicon-subtitles"></span> Subtitles</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-tag"><span class="glyphicon glyphicon-tag"></span> Tag</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-tags"><span class="glyphicon glyphicon-tags"></span> Tags</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-tasks"><span class="glyphicon glyphicon-tasks"></span> Tasks</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-text-height"><span class="glyphicon glyphicon-text-height"></span> Text Height</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-text-width"><span class="glyphicon glyphicon-text-width"></span> Text Width</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-th"><span class="glyphicon glyphicon-th"></span> Th</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-th-large"><span class="glyphicon glyphicon-th-large"></span> Th Large</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-th-list"><span class="glyphicon glyphicon-th-list"></span> Th List</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-thumbs-down"><span class="glyphicon glyphicon-thumbs-down"></span> Thumbs Down</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-thumbs-up"><span class="glyphicon glyphicon-thumbs-up"></span> Thumbs Up</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-time"><span class="glyphicon glyphicon-time"></span> Time</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-tint"><span class="glyphicon glyphicon-tint"></span> Tint</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-tower"><span class="glyphicon glyphicon-tower"></span> Tower</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-transfer"><span class="glyphicon glyphicon-transfer"></span> Transfer</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-trash"><span class="glyphicon glyphicon-trash"></span> Trash</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-tree-conifer"><span class="glyphicon glyphicon-tree-conifer"></span> Tree Conifer</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-tree-deciduous"><span class="glyphicon glyphicon-tree-deciduous"></span> Tree Decideuous</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-unchecked"><span class="glyphicon glyphicon-unchecked"></span> Unchecked</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-upload"><span class="glyphicon glyphicon-upload"></span> Upload</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-usd"><span class="glyphicon glyphicon-usd"></span> Usd</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-user"><span class="glyphicon glyphicon-user"></span> User</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-volume-down"><span class="glyphicon glyphicon-volume-down"></span> Volume Down</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-volume-off"><span class="glyphicon glyphicon-volume-off"></span> Volume Off</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-volume-up"><span class="glyphicon glyphicon-volume-up"></span> Volume Up</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-warning-sign"><span class="glyphicon glyphicon-warning-sign"></span> Warning Sign</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-wrench"><span class="glyphicon glyphicon-wrench"></span> Wrench</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-zoom-in"><span class="glyphicon glyphicon-zoom-in"></span> Zoom In</a> <a href="#" onclick="klik(this);return false;" title="glyphicon glyphicon-zoom-out"><span class="glyphicon glyphicon-zoom-out"></span> Zoom Out</a> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t'}]}],
onOk:function(){glyphs=document.getElementById("glyphicons");glyphs=glyphs.getElementsByTagName("a");for(i=0;i<glyphs.length;i++)glyphs[i].style.display="",glyphs[i].getElementsByTagName("span")[0].style.color="";var a=this.element;this.commitContent(a);istayl="";istayl+=""!=this.getValueOf("insertGlyphicon","colorChooser")?"color:"+this.getValueOf("insertGlyphicon","colorChooser")+";":"";istayl+=""!=this.getValueOf("insertGlyphicon","size")?"font-size:"+parseInt(this.getValueOf("insertGlyphicon",
"size"))+"px;":"";a=b.document.createElement("span");a.setAttribute("class",glyphicon);""!=istayl&&a.setAttribute("style",istayl);b.insertElement(a)}}});