(window.webpackJsonp=window.webpackJsonp||[]).push([[8,6],{407:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(17),o=(n(412),n(29),n(83),n(61),n(4),n(11),n(57),n(50),n(272),n(43),n(10),function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t?2:0,r=new Date(e),o=String(r.getMonth()+1).padStart(n,"0"),c=String(r.getDate()).padStart(n,"0"),l=["日","月","火","水","木","金","土"],d=l[r.getDay()];return"".concat(o,"/").concat(c,"（").concat(d,"）")}),c=function(time){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=e?2:0,n=Math.floor(time),r=String(n).padStart(t,"0"),o=60*(time-Math.floor(time)),c=String(o).padStart(t,"0");return"".concat(r,":").concat(c)},l=function(e){var t=Array.from(e).sort((function(a,b){return a[0]-b[0]})),n=[t[0]];return t.slice(1).forEach((function(e){var t=n[n.length-1];e[0]<=t[1]?t[1]=Math.max(e[1],t[1]):n.push(e)})),n},d=function(e){var t=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n={};if(e.forEach((function(e){n[e.date]?n[e.date].push(Array.from(e.timeRange)):n[e.date]=[Array.from(e.timeRange)]})),t)for(var r in n)n[r]=l(n[r]);return n}(e);return Object.keys(t).map((function(e){var n=o(e),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"～",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"、";return e.map((function(e){var n=Object(r.a)(e,2),o=n[0],l=n[1],d=c(o),v=c(l);return"".concat(d).concat(t).concat(v)})).join(n)}(t[e]);return n+l})).join("\n")}},451:function(e,t,n){"use strict";n.r(t);n(4),n(51);var r=n(407),o={name:"SchaduleFormatter",props:{values:{type:Array,default:function(){return[{date:null,timeRange:[null,null],id:null}]}}},data:function(){return{snackbar:!1,noticeText:""}},computed:{schedule:function(){return Object(r.b)(this.values)}},methods:{copyToClipboard:function(){var e=this;navigator.clipboard.writeText(this.schedule).then((function(){e.noticeText="コピー成功"})).catch((function(){e.noticeText="コピーできませんでした"})),this.snackbar=!0}}},c=n(91),l=n(124),d=n.n(l),v=n(207),f=n(406),m=n(404),h=n(463),_=n(464),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-textarea",{attrs:{readonly:"",solo:"",rows:"3",flat:""},model:{value:e.schedule,callback:function(t){e.schedule=t},expression:"schedule"}})],1),e._v(" "),n("v-btn",{on:{click:e.copyToClipboard}},[e._v("コピー")])],1),e._v(" "),n("v-snackbar",{model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.noticeText)+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardText:m.b,VSnackbar:h.a,VTextarea:_.a})},452:function(e,t,n){"use strict";n.r(t);n(10),n(12),n(13),n(4),n(15),n(11),n(16);var r=n(2),o=(n(26),n(407));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"TimeSelector",props:{value:{type:Object,default:function(){return{date:null,timeRange:[null,null],id:null}}},stepMinutes:{type:Number,default:30},startTime:{type:Number,default:8},endTime:{type:Number,default:18}},data:function(){return{menu:!1}},computed:{date:{get:function(){return this.value.date},set:function(e){this.updateValue({date:e})}},timeLabels:function(){var e=(this.endTime-this.startTime)/this.stepMinutes*60,t=Array(e);return t[0]=Object(o.c)(this.startTime),t.push(Object(o.c)(this.endTime)),t},timeRange:{get:function(){return this.value.timeRange},set:function(e){this.updateValue({timeRange:e})}},formattedDate:function(){return Object(o.a)(this.date)}},methods:{timeFormatter:o.c,save:function(e){this.$refs.menu.save(e)},updateValue:function(e){this.$emit("input",l(l({},this.value),e))},deleteValue:function(){this.$emit("delete")}}},v=n(91),f=n(124),m=n.n(f),h=n(207),_=n(512),O=n(402),y=n(517),x=n(183),k=n(443),V=n(521),j=n(514),w=n(448),T=n(438),S=n(515),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"px-8"},[n("v-row",{attrs:{align:"end"}},[n("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mr-6 mb-7",attrs:{icon:""},on:{click:e.deleteValue}},"v-btn",o,!1),r),[n("v-icon",[e._v("mdi-delete")])],1)]}}])},[e._v(" "),n("span",[e._v("削除")])]),e._v(" "),n("v-col",{attrs:{"align-self":"start",cols:"10",md:"4"}},[n("v-subheader",[e._v("日付選択")]),e._v(" "),n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.attrs,o=t.on;return[n("v-text-field",e._g(e._b({attrs:{"prepend-icon":"mdi-calendar",dense:"",readonly:""},model:{value:e.formattedDate,callback:function(t){e.formattedDate=t},expression:"formattedDate"}},"v-text-field",r,!1),o))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{color:"teal darken-2",locale:"ja","show-adjacent-months":"","day-format":function(e){return new Date(e).getDate()}},on:{change:e.save},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),e._v(" "),n("v-col",{attrs:{"align-self":"start"}},[n("v-subheader",[e._v("時刻選択")]),e._v(" "),n("v-range-slider",{attrs:{min:e.startTime,max:e.endTime,step:e.stepMinutes/60,color:"teal darken-1","thumb-label":"always","thumb-size":"40",ticks:"","tick-size":"4","tick-labels":e.timeLabels},scopedSlots:e._u([{key:"thumb-label",fn:function(t){var n=t.value;return[e._v("\n          "+e._s(e.timeFormatter(n))+"\n        ")]}}]),model:{value:e.timeRange,callback:function(t){e.timeRange=t},expression:"timeRange"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:h.a,VCol:_.a,VContainer:O.a,VDatePicker:y.a,VIcon:x.a,VMenu:k.a,VRangeSlider:V.a,VRow:j.a,VSubheader:w.a,VTextField:T.a,VTooltip:S.a})},519:function(e,t,n){"use strict";n.r(t);n(10),n(12),n(13),n(15),n(11),n(16);var r=n(2);n(4),n(51),n(197),n(162);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var c={name:"SchedulePage",data:function(){return{values:[{date:(new Date).toISOString().substr(0,10),timeRange:[10,12],id:0}],stepMinutes:30,stepMinutesChoices:[{text:"15分刻み",value:15},{text:"30分刻み",value:30},{text:"1時間刻み",value:60}],startTime:8,startTimeChoices:[{text:"00:00",value:0},{text:"06:00",value:6},{text:"08:00",value:8}],endTime:18,endTimeChoices:[{text:"18:00",value:18},{text:"20:00",value:20},{text:"24:00",value:24}],setting:!1}},head:function(){return{title:"スケジュール調整文"}},methods:{addValue:function(){var e=0===this.values.length?{date:(new Date).toISOString().substr(0,10),timeRange:[0,10],id:-1}:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.values[this.values.length-1]);e.id+=1,this.values.push(e)},deleteValue:function(e){var t=this.values.findIndex((function(t){return t.id===e}));this.values.splice(t,1)},updateValue:function(e){var t=this.values.findIndex((function(t){return t.id===e.id}));this.values.splice(t,1,e)}}},l=c,d=n(91),v=n(124),f=n.n(v),m=n(207),h=n(406),_=n(404),O=n(512),y=n(402),x=n(516),k=n(449),V=n(183),j=n(514),w=n(518),T=n(448),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("h1",[e._v("スケジュール整形")])]),e._v(" "),n("v-row",[n("p",[e._v("ああああああ")])]),e._v(" "),n("v-row",[n("v-col",[n("ScheduleFormatter",{attrs:{values:e.values}})],1)],1),e._v(" "),n("v-row",[n("v-col",[n("v-card",{attrs:{flat:""}},[n("v-container",[n("v-row",e._l(e.values,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12"}},[n("TimeSelector",{attrs:{value:e.values.find((function(e){return e.id==t.id})),"step-minutes":e.stepMinutes,"start-time":e.startTime,"end-time":e.endTime},on:{input:e.updateValue,delete:function(n){return e.deleteValue(t.id)}}}),e._v(" "),n("v-divider")],1)})),1)],1),e._v(" "),n("v-card-actions",[n("v-btn",{staticClass:"ml-6 mb-2",attrs:{icon:""},on:{click:e.addValue}},[n("v-icon",[e._v("mdi-plus-circle-outline")])],1),e._v(" "),n("v-dialog",{attrs:{width:"500"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mx-6 mb-2",attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[e._v("mdi-cog")])],1)]}}]),model:{value:e.setting,callback:function(t){e.setting=t},expression:"setting"}},[e._v(" "),n("v-card",{attrs:{color:"grey darken-2"}},[n("v-container",[n("v-row",[n("v-col",[n("v-subheader",[e._v(" 時刻幅選択 ")]),e._v(" "),n("v-card-text",[n("v-select",{attrs:{label:"開始時刻",dense:"",items:e.startTimeChoices},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),e._v(" "),n("v-select",{attrs:{label:"終了時刻",dense:"",items:e.endTimeChoices},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1)],1)],1),e._v(" "),n("v-divider"),e._v(" "),n("v-row",[n("v-col",[n("v-subheader",[e._v(" 時刻選択ステップ ")]),e._v(" "),n("v-card-text",[n("v-select",{attrs:{dense:"",items:e.stepMinutesChoices},model:{value:e.stepMinutes,callback:function(t){e.stepMinutes=t},expression:"stepMinutes"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{ScheduleFormatter:n(451).default,TimeSelector:n(452).default}),f()(component,{VBtn:m.a,VCard:h.a,VCardActions:_.a,VCardText:_.b,VCol:O.a,VContainer:y.a,VDialog:x.a,VDivider:k.a,VIcon:V.a,VRow:j.a,VSelect:w.a,VSubheader:T.a})}}]);