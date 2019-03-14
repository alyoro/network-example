(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76a063f1"],{"60d0":function(e,t,i){},6104:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"add"},[i("h1",{staticClass:"subheading"},[e._v("Add New")]),i("v-container",{staticClass:"my-5"},[i("AddNewStepper")],1)],1)},r=[],n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-stepper",{model:{value:e.stepperStage,callback:function(t){e.stepperStage=t},expression:"stepperStage"}},[i("v-stepper-header",[i("v-stepper-step",{attrs:{complete:e.stepperStage>1,step:"1"}},[e._v("Chose device type")]),i("v-divider"),i("v-stepper-step",{attrs:{complete:e.stepperStage>2,step:"2"}},[e._v("Fill device info")]),i("v-divider"),i("v-stepper-step",{attrs:{complete:e.stepperStage>3,step:"3"}},[e._v("Checking info and save")]),i("v-divider")],1),i("v-stepper-items",[i("v-stepper-content",{attrs:{step:"1"}},[i("v-card",{staticClass:"mb-5",attrs:{flat:"",height:"260px"}},[i("v-radio-group",{staticClass:"ma-2 pa-2",model:{value:e.radioDevice,callback:function(t){e.radioDevice=t},expression:"radioDevice"}},e._l(e.getDeviceTypes,function(e){return i("v-radio",{key:""+e.idType,attrs:{label:""+e.name,value:""+e.idType}})}),1)],1),i("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.stepperStage=2}}},[e._v("Continue")])],1),i("v-stepper-content",{attrs:{step:"2"}},[i("v-card",{staticClass:"mb-5",attrs:{flat:""}},["PatchPanel"===e.radioDevice?i("div",[i("PatchPanelAddForm")],1):e._e(),"RoomSocket"===e.radioDevice?i("div"):e._e(),"Switch"===e.radioDevice?i("div"):e._e(),"Router"===e.radioDevice?i("div"):e._e(),"Server"===e.radioDevice?i("div"):e._e(),"Printer"===e.radioDevice?i("div"):e._e(),"AccessPoint"===e.radioDevice?i("div"):e._e(),"IPPhone"===e.radioDevice?i("div"):e._e()]),i("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.stepperStage=3}}},[e._v("Continue")]),i("v-btn",{attrs:{flat:""},on:{click:function(t){e.stepperStage-=1}}},[e._v("Back")])],1),i("v-stepper-content",{attrs:{step:"3"}},[i("v-card",{staticClass:"mb-5",attrs:{color:"grey lighten-5",flat:""}},["PatchPanel"===e.radioDevice?i("div",[i("PatchPanelInfoToSend")],1):e._e(),"RoomSocket"===e.radioDevice?i("div"):e._e(),"Switch"===e.radioDevice?i("div"):e._e(),"Router"===e.radioDevice?i("div"):e._e(),"Server"===e.radioDevice?i("div"):e._e(),"Printer"===e.radioDevice?i("div"):e._e(),"AccessPoint"===e.radioDevice?i("div"):e._e(),"IPPhone"===e.radioDevice?i("div"):e._e()]),i("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.stepperStage=1}}},[e._v("Add New Device")]),i("v-btn",{attrs:{flat:""},on:{click:function(t){e.stepperStage-=1}}},[e._v("Back")])],1)],1)],1)},a=[],o=i("cebc"),c=(i("cadf"),i("551c"),i("097d"),i("2f62")),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"pa-4"},[i("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-text-field",{attrs:{label:"Building",required:""},model:{value:e.deviceInfo.building,callback:function(t){e.$set(e.deviceInfo,"building",t)},expression:"deviceInfo.building"}}),i("v-text-field",{attrs:{label:"Room",required:""},model:{value:e.deviceInfo.room,callback:function(t){e.$set(e.deviceInfo,"room",t)},expression:"deviceInfo.room"}}),i("v-text-field",{attrs:{label:"Identifier",required:""},model:{value:e.deviceInfo.identifier,callback:function(t){e.$set(e.deviceInfo,"identifier",t)},expression:"deviceInfo.identifier"}}),i("v-text-field",{attrs:{label:"Localization",required:""},model:{value:e.deviceInfo.localization,callback:function(t){e.$set(e.deviceInfo,"localization",t)},expression:"deviceInfo.localization"}}),i("v-text-field",{attrs:{label:"Description",required:""},model:{value:e.deviceInfo.description,callback:function(t){e.$set(e.deviceInfo,"description",t)},expression:"deviceInfo.description"}}),i("v-text-field",{attrs:{label:"Number of Ports",required:"",type:"number"},model:{value:e.deviceInfo.numberOfPorts,callback:function(t){e.$set(e.deviceInfo,"numberOfPorts",t)},expression:"deviceInfo.numberOfPorts"}}),i("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.saveToStore()}}},[e._v("Save changes")])],1)],1)},d=[],u={data:function(){return{valid:!1,deviceInfo:{type:"PatchPanel",building:"",room:"",identifier:"",localization:"",description:"",numberOfPorts:0}}},methods:{saveToStore:function(){this.$store.commit("moduleAdding/saveDeviceInfo",this.deviceInfo)}}},p=u,v=i("2877"),h=i("6544"),f=i.n(h),m=i("8336"),g=i("4bd4"),b=i("2677"),_=Object(v["a"])(p,l,d,!1,null,null,null),y=_.exports;f()(_,{VBtn:m["a"],VForm:g["a"],VTextField:b["a"]});var S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{attrs:{flat:"",xl2:""}},[i("v-layout",{staticClass:"pa-2",attrs:{column:""}},[i("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[i("div",{staticClass:"grey--text subheading"},[e._v("Building")]),i("div",[e._v(e._s(e.getDeviceInfo("PatchPanel").building))])]),i("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[i("div",{staticClass:"grey--text subheading"},[e._v("Room")]),i("div",[e._v(e._s(e.getDeviceInfo("PatchPanel").room))])]),i("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[i("div",{staticClass:"grey--text subheading"},[e._v("Identifier")]),i("div",[e._v(e._s(e.getDeviceInfo("PatchPanel").identifier))])]),i("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[i("div",{staticClass:"grey--text subheading"},[e._v("Localization")]),i("div",[e._v(e._s(e.getDeviceInfo("PatchPanel").localization))])]),i("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[i("div",{staticClass:"grey--text subheading"},[e._v("Description")]),i("div",[e._v(e._s(e.getDeviceInfo("PatchPanel").description))])]),i("v-flex",{staticClass:"pa-2",attrs:{xs12:"",md6:""}},[i("div",{staticClass:"grey--text subheading"},[e._v("Number of Ports")]),i("div",[e._v(e._s(e.getDeviceInfo("PatchPanel").numberOfPorts))])])],1),i("v-btn",{on:{click:e.sendDataToServer}},[e._v("Save in Database")])],1)},I=[],C={data:function(){return{}},computed:Object(o["a"])({},Object(c["b"])({getDeviceInfo:"moduleAdding/getDeviceInfo"})),methods:{sendDataToServer:function(){this.$store.dispatch("moduleAdding/sendDataToServer",{url:"/patchpanels",type:"PatchPanel"})}}},x=C,D=i("b0af"),P=i("0e8f"),$=i("a722"),k=Object(v["a"])(x,S,I,!1,null,null,null),A=k.exports;f()(k,{VBtn:m["a"],VCard:D["a"],VFlex:P["a"],VLayout:$["a"]});var V={components:{PatchPanelAddForm:y,PatchPanelInfoToSend:A},data:function(){return{stepperStage:0,radioDevice:""}},computed:Object(o["a"])({},Object(c["b"])({getDeviceTypes:"getDeviceTypes"}))},w=V,R=i("ce7e6"),O=(i("a14d"),i("9d26")),T=i("ba87"),B=i("b64a"),E=i("ad54"),j=i("6a18"),N=i("5368"),F=i("94ab"),L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e};function q(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}var z={name:"v-radio",mixins:[B["a"],E["a"],Object(F["a"])("radio","v-radio","v-radio-group"),j["a"]],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:L({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var e,t=arguments.length,i=Array(t),s=0;s<t;s++)i[s]=arguments[s];return(e=N["a"].options.methods.genInput).call.apply(e,[this].concat(q(i)))},genLabel:function(){return this.$createElement(T["a"],{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||!1,dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",L({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(O["a"],this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(e){return e("div",this.computedData,[this.genRadio(),this.genLabel()])}},H=(i("94a7"),i("60d0"),i("c37a")),J=i("5e28"),G=H["a"].extend({name:"v-radio-group",mixins:[J["a"],Object(F["b"])("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},H["a"].options.methods.genDefaultSlot.call(this))},onRadioChange:function(e){this.disabled||(this.hasInput=!0,this.internalValue=e,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(e){e.relatedTarget&&e.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",e))},register:function(e){e.isActive=this.valueComparator(this.internalValue,e.value),e.$on("change",this.onRadioChange),e.$on("blur",this.onRadioBlur),this.radios.push(e)},setErrorState:function(e){for(var t=this.radios.length;--t>=0;)this.radios[t].parentError=e},setActiveRadio:function(){for(var e=this.radios.length;--e>=0;){var t=this.radios[e];t.isActive=this.valueComparator(this.internalValue,t.value)}},unregister:function(e){e.$off("change",this.onRadioChange),e.$off("blur",this.onRadioBlur);var t=this.radios.findIndex(function(t){return t===e});t>-1&&this.radios.splice(t,1)}}}),K=(i("bff6"),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e}),M={name:"v-stepper",mixins:[Object(F["b"])("stepper"),j["a"]],provide:function(){return{stepClick:this.stepClick,isVertical:this.vertical}},props:{nonLinear:Boolean,altLabels:Boolean,vertical:Boolean,value:[Number,String]},data:function(){return{inputValue:null,isBooted:!1,steps:[],content:[],isReverse:!1}},computed:{classes:function(){return K({"v-stepper":!0,"v-stepper--is-booted":this.isBooted,"v-stepper--vertical":this.vertical,"v-stepper--alt-labels":this.altLabels,"v-stepper--non-linear":this.nonLinear},this.themeClasses)}},watch:{inputValue:function(e,t){this.isReverse=Number(e)<Number(t);for(var i=this.steps.length;--i>=0;)this.steps[i].toggle(this.inputValue);for(var s=this.content.length;--s>=0;)this.content[s].toggle(this.inputValue,this.isReverse);this.$emit("input",this.inputValue),t&&(this.isBooted=!0)},value:function(){var e=this;this.$nextTick(function(){return e.inputValue=e.value})}},mounted:function(){this.inputValue=this.value||this.steps[0].step||1},methods:{register:function(e){"v-stepper-step"===e.$options.name?this.steps.push(e):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content.push(e))},unregister:function(e){"v-stepper-step"===e.$options.name?this.steps=this.steps.filter(function(t){return t!==e}):"v-stepper-content"===e.$options.name&&(e.isVertical=this.vertical,this.content=this.content.filter(function(t){return t!==e}))},stepClick:function(e){var t=this;this.$nextTick(function(){return t.inputValue=e})}},render:function(e){return e("div",{class:this.classes},this.$slots.default)}},Q=i("0789"),U=i("80d2"),W={name:"v-stepper-content",mixins:[Object(F["a"])("stepper","v-stepper-content","v-stepper")],inject:{isVerticalProvided:{from:"isVertical"}},props:{step:{type:[Number,String],required:!0}},data:function(){return{height:0,isActive:null,isReverse:!1,isVertical:this.isVerticalProvided}},computed:{classes:function(){return{"v-stepper__content":!0}},computedTransition:function(){return this.isReverse?Q["d"]:Q["e"]},styles:function(){return this.isVertical?{height:Object(U["b"])(this.height)}:{}},wrapperClasses:function(){return{"v-stepper__wrapper":!0}}},watch:{isActive:function(e,t){if(e&&null==t)return this.height="auto";this.isVertical&&(this.isActive?this.enter():this.leave())}},mounted:function(){this.$refs.wrapper.addEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.$refs.wrapper.removeEventListener("transitionend",this.onTransition,!1),this.stepper&&this.stepper.unregister(this)},methods:{onTransition:function(e){this.isActive&&"height"===e.propertyName&&(this.height="auto")},enter:function(){var e=this,t=0;requestAnimationFrame(function(){t=e.$refs.wrapper.scrollHeight}),this.height=0,setTimeout(function(){return e.isActive&&(e.height=t||"auto")},450)},leave:function(){var e=this;this.height=this.$refs.wrapper.clientHeight,setTimeout(function(){return e.height=0},10)},toggle:function(e,t){this.isActive=e.toString()===this.step.toString(),this.isReverse=t}},render:function(e){var t={class:this.classes},i={class:this.wrapperClasses,style:this.styles,ref:"wrapper"};this.isVertical||(t.directives=[{name:"show",value:this.isActive}]);var s=e("div",i,[this.$slots.default]),r=e("div",t,[s]);return e(this.computedTransition,{on:this.$listeners},[r])}},X=i("3ccf"),Y={name:"v-stepper-step",directives:{Ripple:X["a"]},mixins:[B["a"],Object(F["a"])("stepper","v-stepper-step","v-stepper")],inject:["stepClick"],props:{color:{type:String,default:"primary"},complete:Boolean,completeIcon:{type:String,default:"$vuetify.icons.complete"},editIcon:{type:String,default:"$vuetify.icons.edit"},errorIcon:{type:String,default:"$vuetify.icons.error"},editable:Boolean,rules:{type:Array,default:function(){return[]}},step:[Number,String]},data:function(){return{isActive:!1,isInactive:!0}},computed:{classes:function(){return{"v-stepper__step":!0,"v-stepper__step--active":this.isActive,"v-stepper__step--editable":this.editable,"v-stepper__step--inactive":this.isInactive,"v-stepper__step--error":this.hasError,"v-stepper__step--complete":this.complete,"error--text":this.hasError}},hasError:function(){return this.rules.some(function(e){return!0!==e()})}},mounted:function(){this.stepper&&this.stepper.register(this)},beforeDestroy:function(){this.stepper&&this.stepper.unregister(this)},methods:{click:function(e){e.stopPropagation(),this.$emit("click",e),this.editable&&this.stepClick(this.step)},toggle:function(e){this.isActive=e.toString()===this.step.toString(),this.isInactive=Number(e)<Number(this.step)}},render:function(e){var t={class:this.classes,directives:[{name:"ripple",value:this.editable}],on:{click:this.click}},i=void 0;i=this.hasError?[e(O["a"],{},this.errorIcon)]:this.complete?this.editable?[e(O["a"],{},this.editIcon)]:[e(O["a"],{},this.completeIcon)]:this.step;var s=!(this.hasError||!this.complete&&!this.isActive)&&this.color,r=e("span",this.setBackgroundColor(s,{staticClass:"v-stepper__step__step"}),i),n=e("div",{staticClass:"v-stepper__label"},this.$slots.default);return e("div",t,[r,n])}},Z=Object(U["d"])("v-stepper__header"),ee=Object(U["d"])("v-stepper__items"),te=Object(v["a"])(w,n,a,!1,null,null,null),ie=te.exports;f()(te,{VBtn:m["a"],VCard:D["a"],VDivider:R["a"],VRadio:z,VRadioGroup:G,VStepper:M,VStepperContent:W,VStepperHeader:Z,VStepperItems:ee,VStepperStep:Y});var se={components:{AddNewStepper:ie}},re=se,ne=i("a523"),ae=Object(v["a"])(re,s,r,!1,null,null,null);t["default"]=ae.exports;f()(ae,{VContainer:ne["a"]})},a14d:function(e,t,i){},bff6:function(e,t,i){}}]);
//# sourceMappingURL=chunk-76a063f1.8cad6304.js.map