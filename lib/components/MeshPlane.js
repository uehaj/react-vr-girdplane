Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/components/MeshPlane.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactVr=require('react-vr');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}

var MeshLine=function MeshLine(props){var
w=props.w;
return(
_react2.default.createElement(_reactVr.View,{__source:{fileName:_jsxFileName,lineNumber:7}},
[].concat(_toConsumableArray(Array(w*2).keys())).map(function(x){
return(
_react2.default.createElement(_reactVr.Plane,{
key:x,
wireframe:true,
dimWidth:1,
dimHeight:1,
style:{
transform:[{translate:[w-0.5-x,w-0.5-props.y,0]}]},__source:{fileName:_jsxFileName,lineNumber:10}}));



})));


};

var Txt=function Txt(props){return(
_react2.default.createElement(_reactVr.Text,{
style:_extends({
transform:[{translate:[props.x,props.y,0]}]},
styles.digit),__source:{fileName:_jsxFileName,lineNumber:26}},

props.children));};



var MeshPlane=function MeshPlane(props){var
w=props.w;
return(
_react2.default.createElement(_reactVr.View,{__source:{fileName:_jsxFileName,lineNumber:38}},
[].concat(_toConsumableArray(Array(w*2).keys())).map(function(y){return _react2.default.createElement(MeshLine,{y:y,w:w,key:y,__source:{fileName:_jsxFileName,lineNumber:39}});}),
[].concat(_toConsumableArray(Array(w*2+1).keys())).map(function(n){return(
_react2.default.createElement(_reactVr.View,{key:n,__source:{fileName:_jsxFileName,lineNumber:41}},
_react2.default.createElement(Txt,{x:n-w-0.2,y:0.5,__source:{fileName:_jsxFileName,lineNumber:42}},
n-w),

_react2.default.createElement(Txt,{x:0,y:n-w+0.5,__source:{fileName:_jsxFileName,lineNumber:45}},
n-w)));}),



_react2.default.createElement(Txt,{x:w+0.5,y:0.5,__source:{fileName:_jsxFileName,lineNumber:50}},'x-axis'),


_react2.default.createElement(Txt,{x:0,y:w+1.5,__source:{fileName:_jsxFileName,lineNumber:53}},'y-axis')));




};

var styles={
digit:{
fontSize:0.5,
position:'absolute'}};exports.default=



MeshPlane;