"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[252],{4929:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},l="Launch",c={unversionedId:"overview/launch",id:"overview/launch",isDocsHomePage:!1,title:"Launch",description:"Cyclic apps are hosted on AWS serverless infrastructure. This means any lambda constraints are inherited. This also means there are no servers to manage, no OS patches to apply, no maintenance windows to schedule and no networking headaches.",source:"@site/docs/overview/launch.md",sourceDirName:"overview",slug:"/overview/launch",permalink:"/docs/overview/launch",editUrl:"https://github.com/cyclic-software/docs/edit/main/website/docs/overview/launch.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Deploy",permalink:"/docs/overview/deploy"},next:{title:"Limits",permalink:"/docs/overview/limits"}},u=[{value:"Start",id:"start",children:[]},{value:"Failures",id:"failures",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"launch"},"Launch"),(0,o.kt)("p",null,"Cyclic apps are hosted on AWS serverless infrastructure. This means any lambda constraints are inherited. This also means there are no servers to manage, no OS patches to apply, no maintenance windows to schedule and no networking headaches."),(0,o.kt)("p",null,"There at no servers to start or stop. When your app gets more requests Lambda will intialize more runtimes for you. We will then start your app and send it all the http traffic."),(0,o.kt)("h2",{id:"start"},"Start"),(0,o.kt)("p",null,"Cyclic launches your app by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),". We will then send requests to your app on port ",(0,o.kt)("inlineCode",{parentName:"p"},"3000"),". The suggested best practices is to listen like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var port = process.env.PORT || 3000\n")),(0,o.kt)("h2",{id:"failures"},"Failures"),(0,o.kt)("p",null,"If you code fails to initialize then you may get an error at your URL endpoint that says: ",(0,o.kt)("inlineCode",{parentName:"p"},"Unable to proxy"),". This is due to your app either not listening on the correct port or failing to start properly from the call to ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),"."))}d.isMDXComponent=!0}}]);