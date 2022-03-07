(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{437:function(t,e,n){"use strict";n.r(e);var r=n(2);n(26),n(407),n(29),n(10),n(12),n(13),n(4),n(15),n(11),n(16);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"TimeSelector",props:{value:{type:Object,default:function(){return{date:null,timeRange:[null,null],id:null}}},stepMinutes:{type:Number,default:30},startTime:{type:Number,default:8},endTime:{type:Number,default:18}},data:function(){return{menu:!1,daysName:["日","月","火","水","木","金","土"]}},computed:{date:{get:function(){return this.value.date},set:function(t){this.updateValue({date:t})}},timeLabels:function(){var t=(this.endTime-this.startTime)/this.stepMinutes*60,e=Array(t);return e[0]=this.timeFormatter(this.startTime),e.push(this.timeFormatter(this.endTime)),e},timeRange:{get:function(){return this.value.timeRange},set:function(t){this.updateValue({timeRange:t})}},sliderMin:function(){return this.startTime},sliderMax:function(){return this.endTime},sliderStep:function(){return this.stepMinutes/60},datetime:function(){var t=new Date(this.date),e=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0"),r=this.daysName[t.getDay()];return"".concat(e,"/").concat(n,"（").concat(r,"）")}},methods:{timeFormatter:function(time){var t=Math.floor(time),e=60*(time-Math.floor(time));return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")},save:function(t){this.$refs.menu.save(t)},updateValue:function(t){this.$emit("input",c(c({},this.value),t))},deleteValue:function(){this.$emit("delete")}}},d=n(93),v=n(124),m=n.n(v),f=n(206),h=n(498),_=n(402),y=n(502),O=n(183),S=n(439),V=n(506),w=n(499),x=n(433),j=n(438),T=n(500),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"px-8"},[n("v-row",{attrs:{align:"end"}},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mr-6 mb-7",attrs:{icon:""},on:{click:t.deleteValue}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-delete")])],1)]}}])},[t._v(" "),n("span",[t._v("削除")])]),t._v(" "),n("v-col",{attrs:{"align-self":"start",cols:"10",md:"4"}},[n("v-subheader",[t._v("日付選択")]),t._v(" "),n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.attrs,o=e.on;return[n("v-text-field",t._g(t._b({attrs:{"prepend-icon":"mdi-calendar",dense:"",readonly:""},model:{value:t.datetime,callback:function(e){t.datetime=e},expression:"datetime"}},"v-text-field",r,!1),o))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{color:"teal darken-2",locale:"ja","show-adjacent-months":"","day-format":function(t){return new Date(t).getDate()}},on:{change:t.save},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],1),t._v(" "),n("v-col",{attrs:{"align-self":"start"}},[n("v-subheader",[t._v("時刻選択")]),t._v(" "),n("v-range-slider",{attrs:{min:t.sliderMin,max:t.sliderMax,step:t.sliderStep,color:"teal darken-1","thumb-label":"always","thumb-size":"40",ticks:"","tick-size":"4","tick-labels":t.timeLabels},scopedSlots:t._u([{key:"thumb-label",fn:function(e){var n=e.value;return[t._v("\n          "+t._s(t.timeFormatter(n))+"\n        ")]}}]),model:{value:t.timeRange,callback:function(e){t.timeRange=e},expression:"timeRange"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:f.a,VCol:h.a,VContainer:_.a,VDatePicker:y.a,VIcon:O.a,VMenu:S.a,VRangeSlider:V.a,VRow:w.a,VSubheader:x.a,VTextField:j.a,VTooltip:T.a})},504:function(t,e,n){"use strict";n.r(e);n(12),n(13),n(15),n(16);var r=n(2),o=n(17);n(4),n(11),n(51),n(83),n(61),n(10),n(407),n(29),n(193),n(161);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"SchedulePage",data:function(){return{values:[{date:(new Date).toISOString().substr(0,10),timeRange:[10,12],id:0}],stepMinutesChoices:[{text:"15分刻み",value:15},{text:"30分刻み",value:30},{text:"1時間刻み",value:60}],stepMinutes:30,startTimeChoices:[{text:"00:00",value:0},{text:"06:00",value:6},{text:"08:00",value:8}],startTime:8,endTimeChoices:[{text:"18:00",value:18},{text:"20:00",value:20},{text:"24:00",value:24}],endTime:18}},head:function(){return{title:"スケジュール調整文"}},computed:{formattedValues:function(){var t={};return this.values.forEach((function(e){t[e.date]?t[e.date].push(e.timeRange):t[e.date]=[e.timeRange]})),t},schedule:function(){var t=this;return Object.keys(this.formattedValues).map((function(e){return t.dateFormatter(e)+t.timeListFormatter(t.formattedValues[e])})).join("\n")}},methods:{dateFormatter:function(t){var e=new Date(t),n=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),o=["日","月","火","水","木","金","土"][e.getDay()];return"".concat(n,"/").concat(r,"（").concat(o,"）")},timeListFormatter:function(t){var e=this;return t.map((function(t){var n=Object(o.a)(t,2),r=n[0],c=n[1],l=e.timeFormatter(r),d=e.timeFormatter(c);return"".concat(l,"～").concat(d)})).join("、")},timeFormatter:function(time){var t=Math.floor(time),e=60*(time-Math.floor(time));return String(t).padStart(2,"0")+":"+String(e).padStart(2,"0")},addValue:function(){var t=0===this.values.length?{date:(new Date).toISOString().substr(0,10),timeRange:[0,10],id:-1}:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.values[this.values.length-1]);t.id+=1,this.values.push(t)},deleteValue:function(t){var e=this.values.findIndex((function(e){return e.id===t}));this.values.splice(e,1)},updateValue:function(t){var e=this.values.findIndex((function(e){return e.id===t.id}));this.values.splice(e,1,t)},copyToClipboard:function(){navigator.clipboard.writeText(this.schedule).then((function(){console.log("copied!")})).catch((function(t){console.error(t)}))}}},d=l,v=n(93),m=n(124),f=n.n(m),h=n(206),_=n(406),y=n(404),O=n(498),S=n(402),V=n(435),w=n(183),x=n(439),j=n(499),T=n(503),k=n(433),M=n(501),D=n(500),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("h1",[t._v("スケジュール整形")])]),t._v(" "),n("v-row",[n("p",[t._v("ああああああ")])]),t._v(" "),n("v-row",[n("v-col",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("v-textarea",{attrs:{readonly:"",solo:"",rows:"3",flat:""},model:{value:t.schedule,callback:function(e){t.schedule=e},expression:"schedule"}})],1),t._v(" "),n("v-btn",{on:{click:t.copyToClipboard}},[t._v("コピー")])],1)],1)],1),t._v(" "),n("v-row",[n("v-col",[n("v-card",{attrs:{flat:""}},[n("v-container",[n("v-row",t._l(t.values,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12"}},[n("TimeSelector",{attrs:{value:t.values.find((function(t){return t.id==e.id})),"step-minutes":t.stepMinutes,"start-time":t.startTime,"end-time":t.endTime},on:{input:t.updateValue,delete:function(n){return t.deleteValue(e.id)}}}),t._v(" "),n("v-divider")],1)})),1)],1),t._v(" "),n("v-card-actions",[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"ml-6 mb-2",attrs:{icon:""},on:{click:t.addValue}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-plus-circle-outline")])],1)]}}])},[t._v(" "),n("span",[t._v("追加")])]),t._v(" "),n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){return[n("v-menu",{attrs:{"close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(r){return[n("v-btn",t._g(t._b({staticClass:"mx-6 mb-2",attrs:{icon:""}},"v-btn",r.attrs,!1),Object.assign({},e.on,r.on)),[n("v-icon",[t._v("mdi-cog")])],1)]}}],null,!0)},[t._v(" "),n("v-card",{attrs:{flat:""}},[n("v-container",[n("v-row",[n("v-col",[n("v-subheader",[t._v(" 時刻幅選択 ")]),t._v(" "),n("v-card-text",[n("v-select",{attrs:{dense:"",items:t.startTimeChoices},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v(" "),n("v-select",{attrs:{dense:"",items:t.endTimeChoices},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",[n("v-col",[n("v-subheader",[t._v(" 選択ステップ ")]),t._v(" "),n("v-card-text",[n("v-select",{attrs:{dense:"",items:t.stepMinutesChoices},model:{value:t.stepMinutes,callback:function(e){t.stepMinutes=e},expression:"stepMinutes"}})],1)],1)],1)],1)],1)],1)]}}])},[t._v(" "),n("span",[t._v("設定")])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{TimeSelector:n(437).default}),f()(component,{VBtn:h.a,VCard:_.a,VCardActions:y.a,VCardText:y.b,VCol:O.a,VContainer:S.a,VDivider:V.a,VIcon:w.a,VMenu:x.a,VRow:j.a,VSelect:T.a,VSubheader:k.a,VTextarea:M.a,VTooltip:D.a})}}]);