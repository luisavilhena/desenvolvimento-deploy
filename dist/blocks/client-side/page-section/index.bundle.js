!function(){"use strict";function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var e={themeName:"desenvolvimentoDeployWpTheme",themeId:"dd",themeColors:[{id:"skyblue",label:"Skyblue",code:"skyblue",contrastingColorId:"black"},{id:"darkred",label:"Darkred",code:"darkred",contrastingColorId:"white"},{id:"black",label:"Black",code:"#000000",contrastingColorId:"white"},{id:"white",label:"White",code:"#FFFFFF",contrastingColorId:"black"}]};var t,d=(function(e){!function(){var l={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var n=typeof o;if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var a=c.apply(null,o);a&&e.push(a)}else if("object"===n)for(var r in o)l.call(o,r)&&o[r]&&e.push(r)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):window.classNames=c}()}(t={exports:{}},t.exports),t.exports),s=(wp.blocks.registerBlockType,wp.editor.InnerBlocks,wp.element.Fragment,e.themeColors.map(function(e){return{name:e.label,color:e.code}})),u=function(e,t,o){return e.find(function(e){return e[t]===o})}.bind(null,e.themeColors),o=wp.blocks.registerBlockType,n=wp.editor,p=n.InspectorControls,b=(n.BlockAlignmentToolbar,n.BlockControls,n.InnerBlocks),a=wp.components,m=a.ColorPalette,g=a.PanelBody,f=wp.element.Fragment,r=wp.i18n.__;o("".concat(e.themeId,"/page-section"),{title:r("Page section"),category:e.themeId,attributes:{backgroundColorId:{type:"string",default:null},applyWebsiteMaxWidth:{type:"boolean",default:!0},applyWebsiteSidePadding:{type:"boolean",default:!0}},edit:function(e){e.className;var t,o,n,a,r=e.attributes,l=e.setAttributes,c=r.backgroundColorId,i=u("id",c);return React.createElement(f,null,React.createElement(p,null,React.createElement(g,null,React.createElement(m,{colors:s,value:i&&i.code,onChange:function(e){var t=u("code",e);l({backgroundColorId:t?t.id:null})}}))),React.createElement("div",{style:(t=r,o=t.backgroundColorId,n=u("id",o),a=n&&n.contrastingColorId&&u("id",n.contrastingColorId),{backgroundColor:n?n.code:"transparent",color:a?a.code:"inherit"})},React.createElement(b,{template:[["dd/row",{},[["dd/column",{width:6,offset:0}],["dd/column",{width:6,offset:0}]]]]})))},save:function(e){var t,o=e.attributes,n=o.backgroundColorId,a=o.applyWebsiteMaxWidth,r=o.applyWebsiteSidePadding,l=e.className,c=!!n&&"bg-".concat(n);return React.createElement("section",{className:d((t={},i(t,l,Boolean(l)),i(t,"page-section",!0),i(t,"page-section--transparent",!Boolean(n)),i(t,"page-section--with-bg",Boolean(n)),i(t,c,Boolean(c)),t))},React.createElement("div",{className:d({"website-max-width":a,"website-side-padding":r})},React.createElement(b.Content,null)))}})}();