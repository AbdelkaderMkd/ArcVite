import{d as n}from"./calcite-input-time-picker-adc20a3f.js";import"./index-383689b1.js";import"./form-cc58016b.js";import"./guid-166f1061.js";import"./interactive-364bcea7.js";import"./key-dbc4d2a7.js";import"./label2-5cf979e7.js";import"./loadable-2a1426c8.js";import"./t9n-c0210700.js";import"./observers-4d9125e3.js";import"./focusTrapComponent-f453d48b.js";import"./icon-fa7683a7.js";import"./action-8606171f.js";import"./loader-8291380e.js";import"./input-d8145628.js";import"./progress-118cb034.js";import"./popover-9f5be460.js";import"./openCloseComponent-c1a3e1b0.js";import"./debounce-00dc07ae.js";import"./FloatingArrow-7412e9bc.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.8.0
 */var o={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function e(i,t,a){var r=o[a];return Array.isArray(r)&&(r=r[t?0:1]),r.replace("%d",i)}var m={name:"de-ch",weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),ordinal:function(t){return t+"."},weekStart:1,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},relativeTime:{future:"in %s",past:"vor %s",s:e,m:e,mm:e,h:e,hh:e,d:e,dd:e,M:e,MM:e,y:e,yy:e}};n.locale(m,null,!0);export{m as default};