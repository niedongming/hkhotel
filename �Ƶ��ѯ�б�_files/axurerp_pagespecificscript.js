
var PageName = '酒店查询列表';
var PageId = '92b00380db9c439f9d7b8d5501f4278c'
var PageUrl = '酒店查询列表.html'
document.title = '酒店查询列表';
var PageNotes = 
{
"pageName":"酒店查询列表",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '25');
  value = value.replace(/\[\[GenMonth\]\]/g, '10');
  value = value.replace(/\[\[GenMonthName\]\]/g, '十月');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, '星期二');
  value = value.replace(/\[\[GenYear\]\]/g, '2011');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'top';
var u21 = document.getElementById('u21');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u156 = document.getElementById('u156');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'top';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'top';
var u153 = document.getElementById('u153');

if (bIE) u153.attachEvent("onmouseover", MouseOveru153);
else u153.addEventListener("mouseover", MouseOveru153, true);
function MouseOveru153(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u153',e)) return;
if (true) {

	SetPanelVisibility('u159','','none',500);

}

}

if (bIE) u153.attachEvent("onmouseout", MouseOutu153);
else u153.addEventListener("mouseout", MouseOutu153, true);
function MouseOutu153(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u153',e)) return;
if (true) {

	SetPanelVisibility('u159','hidden','none',500);

}

}

var u140 = document.getElementById('u140');

if (bIE) u140.attachEvent("onmouseover", MouseOveru140);
else u140.addEventListener("mouseover", MouseOveru140, true);
function MouseOveru140(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u140',e)) return;
if (true) {

	SetPanelVisibility('u143','','none',500);

}

}

if (bIE) u140.attachEvent("onmouseout", MouseOutu140);
else u140.addEventListener("mouseout", MouseOutu140, true);
function MouseOutu140(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u140',e)) return;
if (true) {

	SetPanelVisibility('u143','hidden','none',500);

}

}

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'top';
var u212 = document.getElementById('u212');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u159 = document.getElementById('u159');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u101 = document.getElementById('u101');

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'top';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u105 = document.getElementById('u105');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u52 = document.getElementById('u52');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u65 = document.getElementById('u65');

var u120 = document.getElementById('u120');

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u110 = document.getElementById('u110');

var u6 = document.getElementById('u6');

var u205 = document.getElementById('u205');

if (bIE) u205.attachEvent("onmouseover", MouseOveru205);
else u205.addEventListener("mouseover", MouseOveru205, true);
function MouseOveru205(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u205',e)) return;
if (true) {

	SetPanelVisibility('u209','','none',500);

}

}

if (bIE) u205.attachEvent("onmouseout", MouseOutu205);
else u205.addEventListener("mouseout", MouseOutu205, true);
function MouseOutu205(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u205',e)) return;
if (true) {

	SetPanelVisibility('u209','hidden','none',500);

}

}
gv_vAlignTable['u205'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u200 = document.getElementById('u200');
gv_vAlignTable['u200'] = 'top';
var u34 = document.getElementById('u34');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u89 = document.getElementById('u89');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u47 = document.getElementById('u47');

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'top';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u103 = document.getElementById('u103');

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u179 = document.getElementById('u179');

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u16 = document.getElementById('u16');

var u203 = document.getElementById('u203');

if (bIE) u203.attachEvent("onmouseover", MouseOveru203);
else u203.addEventListener("mouseover", MouseOveru203, true);
function MouseOveru203(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u203',e)) return;
if (true) {

	SetPanelVisibility('u209','','none',500);

}

}

if (bIE) u203.attachEvent("onmouseout", MouseOutu203);
else u203.addEventListener("mouseout", MouseOutu203, true);
function MouseOutu203(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u203',e)) return;
if (true) {

	SetPanelVisibility('u209','hidden','none',500);

}

}

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u41 = document.getElementById('u41');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u54 = document.getElementById('u54');

var u208 = document.getElementById('u208');

var u118 = document.getElementById('u118');

var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'center';
var u88 = document.getElementById('u88');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u38 = document.getElementById('u38');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'top';
var u26 = document.getElementById('u26');

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'top';
var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'top';
var u85 = document.getElementById('u85');

if (bIE) u85.attachEvent("onmouseover", MouseOveru85);
else u85.addEventListener("mouseover", MouseOveru85, true);
function MouseOveru85(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u85',e)) return;
if (true) {

	SetPanelVisibility('u88','','none',500);

}

}

if (bIE) u85.attachEvent("onmouseout", MouseOutu85);
else u85.addEventListener("mouseout", MouseOutu85, true);
function MouseOutu85(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u85',e)) return;
if (true) {

	SetPanelVisibility('u88','hidden','none',500);

}

}

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'top';
var u100 = document.getElementById('u100');

if (bIE) u100.attachEvent("onmouseover", MouseOveru100);
else u100.addEventListener("mouseover", MouseOveru100, true);
function MouseOveru100(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u100',e)) return;
if (true) {

	SetPanelVisibility('u104','','none',500);

}

}

if (bIE) u100.attachEvent("onmouseout", MouseOutu100);
else u100.addEventListener("mouseout", MouseOutu100, true);
function MouseOutu100(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u100',e)) return;
if (true) {

	SetPanelVisibility('u104','hidden','none',500);

}

}
gv_vAlignTable['u100'] = 'top';
var u23 = document.getElementById('u23');

var u144 = document.getElementById('u144');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u36 = document.getElementById('u36');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u61 = document.getElementById('u61');

if (bIE) u61.attachEvent("onmouseover", MouseOveru61);
else u61.addEventListener("mouseover", MouseOveru61, true);
function MouseOveru61(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u61',e)) return;
if (true) {

	SetPanelVisibility('u110','','none',500);

}

}

if (bIE) u61.attachEvent("onmouseout", MouseOutu61);
else u61.addEventListener("mouseout", MouseOutu61, true);
function MouseOutu61(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u61',e)) return;
if (true) {

	SetPanelVisibility('u110','hidden','none',500);

}

}

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u158 = document.getElementById('u158');

var u74 = document.getElementById('u74');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u160 = document.getElementById('u160');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u198 = document.getElementById('u198');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u98 = document.getElementById('u98');

if (bIE) u98.attachEvent("onmouseover", MouseOveru98);
else u98.addEventListener("mouseover", MouseOveru98, true);
function MouseOveru98(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u98',e)) return;
if (true) {

	SetPanelVisibility('u104','','none',500);

}

}

if (bIE) u98.attachEvent("onmouseout", MouseOutu98);
else u98.addEventListener("mouseout", MouseOutu98, true);
function MouseOutu98(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u98',e)) return;
if (true) {

	SetPanelVisibility('u104','hidden','none',500);

}

}

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'top';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'top';
var u43 = document.getElementById('u43');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'top';
var u142 = document.getElementById('u142');

if (bIE) u142.attachEvent("onmouseover", MouseOveru142);
else u142.addEventListener("mouseover", MouseOveru142, true);
function MouseOveru142(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u142',e)) return;
if (true) {

	SetPanelVisibility('u143','','none',500);

}

}

if (bIE) u142.attachEvent("onmouseout", MouseOutu142);
else u142.addEventListener("mouseout", MouseOutu142, true);
function MouseOutu142(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u142',e)) return;
if (true) {

	SetPanelVisibility('u143','hidden','none',500);

}

}
gv_vAlignTable['u142'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u168 = document.getElementById('u168');

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u87 = document.getElementById('u87');

if (bIE) u87.attachEvent("onmouseover", MouseOveru87);
else u87.addEventListener("mouseover", MouseOveru87, true);
function MouseOveru87(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u87',e)) return;
if (true) {

	SetPanelVisibility('u88','','none',500);

}

}

if (bIE) u87.attachEvent("onmouseout", MouseOutu87);
else u87.addEventListener("mouseout", MouseOutu87, true);
function MouseOutu87(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u87',e)) return;
if (true) {

	SetPanelVisibility('u88','hidden','none',500);

}

}
gv_vAlignTable['u87'] = 'top';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'top';
var u193 = document.getElementById('u193');

var u104 = document.getElementById('u104');

var u192 = document.getElementById('u192');

if (bIE) u192.attachEvent("onmouseover", MouseOveru192);
else u192.addEventListener("mouseover", MouseOveru192, true);
function MouseOveru192(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u192',e)) return;
if (true) {

	SetPanelVisibility('u193','','none',500);

}

}

if (bIE) u192.attachEvent("onmouseout", MouseOutu192);
else u192.addEventListener("mouseout", MouseOutu192, true);
function MouseOutu192(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u192',e)) return;
if (true) {

	SetPanelVisibility('u193','hidden','none',500);

}

}
gv_vAlignTable['u192'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u19 = document.getElementById('u19');

var u155 = document.getElementById('u155');

if (bIE) u155.attachEvent("onmouseover", MouseOveru155);
else u155.addEventListener("mouseover", MouseOveru155, true);
function MouseOveru155(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u155',e)) return;
if (true) {

	SetPanelVisibility('u159','','none',500);

}

}

if (bIE) u155.attachEvent("onmouseout", MouseOutu155);
else u155.addEventListener("mouseout", MouseOutu155, true);
function MouseOutu155(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u155',e)) return;
if (true) {

	SetPanelVisibility('u159','hidden','none',500);

}

}
gv_vAlignTable['u155'] = 'top';
var u206 = document.getElementById('u206');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u50 = document.getElementById('u50');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u63 = document.getElementById('u63');

var u170 = document.getElementById('u170');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u209 = document.getElementById('u209');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u190 = document.getElementById('u190');

if (bIE) u190.attachEvent("onmouseover", MouseOveru190);
else u190.addEventListener("mouseover", MouseOveru190, true);
function MouseOveru190(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u190',e)) return;
if (true) {

	SetPanelVisibility('u193','','none',500);

}

}

if (bIE) u190.attachEvent("onmouseout", MouseOutu190);
else u190.addEventListener("mouseout", MouseOutu190, true);
function MouseOutu190(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u190',e)) return;
if (true) {

	SetPanelVisibility('u193','hidden','none',500);

}

}

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u91 = document.getElementById('u91');

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u24 = document.getElementById('u24');

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'top';
var u162 = document.getElementById('u162');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u210 = document.getElementById('u210');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u29 = document.getElementById('u29');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'top';
var u129 = document.getElementById('u129');

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u58 = document.getElementById('u58');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u111 = document.getElementById('u111');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u0 = document.getElementById('u0');

var u31 = document.getElementById('u31');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u8 = document.getElementById('u8');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u146 = document.getElementById('u146');

var u196 = document.getElementById('u196');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u148 = document.getElementById('u148');

var u93 = document.getElementById('u93');

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'top';
var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u12 = document.getElementById('u12');
gv_vAlignTable['u12'] = 'top';
var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'top';
var u165 = document.getElementById('u165');

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u45 = document.getElementById('u45');

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u143 = document.getElementById('u143');

var u107 = document.getElementById('u107');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u194 = document.getElementById('u194');

if (window.OnLoad) OnLoad();
