"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?s.createElement(y,o(o({ref:t},d),{},{components:n})):s.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var s=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},o="Stateless",i={unversionedId:"serverless/stateless",id:"serverless/stateless",title:"Stateless",description:"Cyclic apps run on read-only file systems amd do not retain or share memory across compute instances.",source:"@site/docs/serverless/stateless.md",sourceDirName:"serverless",slug:"/serverless/stateless",permalink:"/serverless/stateless",draft:!1,editUrl:"https://github.com/cyclic-software/docs/blob/main/docs/serverless/stateless.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"On-Demand",permalink:"/serverless/on-demand"},next:{title:"Add a Private Repository",permalink:"/how-to/add-private-repository"}},l={},p=[{value:"Limitations and Solutions",id:"limitations-and-solutions",level:2},{value:"In-Memory Sessions",id:"in-memory-sessions",level:3},{value:"File Upload",id:"file-upload",level:3},{value:"Processing and Uploading",id:"processing-and-uploading",level:4},{value:"db.json",id:"dbjson",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stateless"},"Stateless"),(0,a.kt)("p",null,"Cyclic apps run on read-only file systems amd do not retain or share memory across compute instances."),(0,a.kt)("h2",{id:"limitations-and-solutions"},"Limitations and Solutions"),(0,a.kt)("p",null,"Special precautions should be used for the following use-cases:"),(0,a.kt)("h3",{id:"in-memory-sessions"},"In-Memory Sessions"),(0,a.kt)("p",null,"Basic session implementations are usually built with the assumption that the server process is never interrupted. This can be an issue even in stateful environments, where a server re-start will cause sessions to be lost. With serverless runtimes, re-starts happen quickly ",(0,a.kt)("em",{parentName:"p"},"(~0.2s)")," and frequently."),(0,a.kt)("admonition",{title:"Database backed sessions",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Best practices for stateful environments will dictate that sessions should be backed up to a database. With serverless, storing sessions in a database is a must. There are many libraries and session extensions that enable this for a variety of databases."),(0,a.kt)("p",{parentName:"admonition"}," Check out our npm package that will let you use apps' built-in AWS DynamoDB database for session storage. >> ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@cyclic.sh/session-store"},"@cyclic.sh/session-store"))),(0,a.kt)("h3",{id:"file-upload"},"File Upload"),(0,a.kt)("p",null,"Serverless apps run on read-only file systems. This means it is impossible to persistently store files to disk. "),(0,a.kt)("admonition",{title:"AWS S3 and Uploading/Downloading Files ",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Cyclic exposes many features of AWS S3 directly to your apps. To handle uploads directly to the object store, S3 can be used to generate pre-signed GET, PUT and POST urls than can be used by a client to upload and download files over the 6MB api size limitation. "),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/"},"Read more on presigned URLs"))),(0,a.kt)("h4",{id:"processing-and-uploading"},"Processing and Uploading"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," directory can be written to. But it should only be used for intermediary processing. Either upload the result to an object store or download to the client. An example use case for ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," may be to create thumbnail images, store them in /tmp, and then upload them to S3."),(0,a.kt)("h3",{id:"dbjson"},"db.json"),(0,a.kt)("p",null,"A popular pattern with many tutorials is to simulate a database by reading and writing records to and from a ",(0,a.kt)("inlineCode",{parentName:"p"},"db.json")," file. In traditional server environments, this pattern may work for some ",(0,a.kt)("em",{parentName:"p"},"very")," low volume of read's and write's, it will very quickly become vulnerable to race conditions and should be avoided even in those environments."),(0,a.kt)("p",null,"While it is possible to write to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," directory in a stateless runtime, the ",(0,a.kt)("inlineCode",{parentName:"p"},"/tmp")," directory is not shared between multiple instances of the application and is lost after each shutdown. This makes the same issues that arise in a stateful environment immediately apparent. "),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Do not use a ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," file as your database. Cyclic ",(0,a.kt)("a",{parentName:"p",href:"/concepts/database"},"has a database")," you can use for free. ")))}c.isMDXComponent=!0}}]);