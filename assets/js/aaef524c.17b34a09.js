"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4},s="File System",a={unversionedId:"concepts/file_system",id:"concepts/file_system",title:"File System",description:"The Node.js file system module gives you access to the file system on your local environment. To include the fs modules use the require() method:",source:"@site/docs/concepts/file_system.md",sourceDirName:"concepts",slug:"/concepts/file_system",permalink:"/concepts/file_system",draft:!1,editUrl:"https://github.com/cyclic-software/docs/blob/main/docs/concepts/file_system.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/concepts/env_vars"},next:{title:"Storage",permalink:"/concepts/storage"}},l={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"file-system"},"File System"),(0,o.kt)("p",null,"The Node.js file system module gives you access to the file system on your local environment. To include the ",(0,o.kt)("inlineCode",{parentName:"p"},"fs")," modules use the ",(0,o.kt)("inlineCode",{parentName:"p"},"require()")," method:\n",(0,o.kt)("inlineCode",{parentName:"p"},"const fs = require('fs');")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"fs")," method is often used for reading, creating, updating, deleting, and renaming files, however there is a long list of methods, which you can see here in the Node documentation: ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/fs.html"},"https://nodejs.org/api/fs.html"),"."),(0,o.kt)("p",null,"Files created by the ",(0,o.kt)("inlineCode",{parentName:"p"},"fs")," module are read-only once the project is deployed to Cyclic.sh. This results in an ",(0,o.kt)("inlineCode",{parentName:"p"},"EROFS: Error Read-Only File System")," error. "),(0,o.kt)("p",null,"If you are hitting the ",(0,o.kt)("inlineCode",{parentName:"p"},"EROFS")," error in processing files, one solution is to write to a file that is located in a ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp")," directory. However, do not use ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp")," for perminant storage, as is it wiped frequently."),(0,o.kt)("p",null,"A more perminant solution to this error is to use the Cyclic S3fs drop-in replacement for Node.js ",(0,o.kt)("inlineCode",{parentName:"p"},"fs"),", which gives you acces to an AWS S3 bucket to access as file storage in place of your local file system."),(0,o.kt)("p",null,"Instructions to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@cyclic.sh/s3fs")," npm module can be found in the README.md for the module. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cyclic-software/s3fs"},"Try the S3fs module.")))}u.isMDXComponent=!0}}]);