/*! For license information please see components-UI-UiInput-UiInput-stories.f81b218b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkproject_movies_site_redux=self.webpackChunkproject_movies_site_redux||[]).push([[346],{"./src/components/UI/UiInput/UiInput.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>UiInput_stories});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const cancel=__webpack_require__.p+"static/media/cancel.b69cec7594fb67865300bf53ff6f6b50.svg";__webpack_require__("./src/components/UI/index.css");const UiInput_module_wrapper__input="UiInput_wrapper__input__jMEhG",UiInput_module_input="UiInput_input__rGprP",UiInput_module_clear="UiInput_clear__UPE9t",UiInput_module_clear__disabled="UiInput_clear__disabled__C7NyU";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const UiInput=_ref=>{let{value,handleInputChange,placeholder,classes}=_ref;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(UiInput_module_wrapper__input,classes),children:[(0,jsx_runtime.jsx)("input",{type:"text",value,onChange:e=>handleInputChange(e.target.value),placeholder,className:UiInput_module_input}),(0,jsx_runtime.jsx)("img",{onClick:()=>value&&handleInputChange(""),src:cancel,className:classnames_default()(UiInput_module_clear,!value&&UiInput_module_clear__disabled),alt:"Clear"})]})},UiInput_UiInput=UiInput;UiInput.__docgenInfo={description:"",methods:[],displayName:"UiInput",props:{value:{description:"",type:{name:"string"},required:!1},handleInputChange:{description:"",type:{name:"func"},required:!1},placeholder:{description:"",type:{name:"string"},required:!1},classes:{description:"",type:{name:"string"},required:!1}}};const UiInput_stories={title:"Ui-Kit/UiInput",component:UiInput_UiInput},props={value:"",handleInputChange:()=>console.log("Input Change"),placeholder:"Placeholder",classes:""},Default=(arg=>{const[value,setValue]=(0,react.useState)("");return(0,jsx_runtime.jsx)(UiInput_UiInput,{...arg,value,handleInputChange:value=>{setValue(value)}})}).bind({});Default.args={...props};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'arg => {\n  const [value, setValue] = useState("");\n  const handleInputChange = value => {\n    setValue(value);\n  };\n  return <UiInput {...arg} value={value} handleInputChange={handleInputChange} />;\n}',...Default.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/UI/index.css":()=>{},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);