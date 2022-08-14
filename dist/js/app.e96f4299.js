(()=>{"use strict";var e={448:(e,a,s)=>{var t=s(963),i=s(252),n=s(577);const o=(0,i._)("div",{class:"btn-line"},null,-1),r=(0,i._)("div",{class:"btn-line"},null,-1),l=(0,i._)("div",{class:"btn-line"},null,-1),c=[o,r,l],d=(0,i._)("div",{class:"portrait"},null,-1),u=[d],g={class:"nav-item"},h=(0,i.Uk)("Home"),m={class:"nav-item"},p=(0,i.Uk)("About"),f={class:"nav-item"},v=(0,i.Uk)("Projects"),b={class:"nav-item"},_=(0,i.Uk)("Contacts"),w=(0,i._)("footer",{id:"main-footer"},"Copyright © 2021",-1);function k(e,a,s,t,o,r){const l=(0,i.up)("router-link"),d=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("header",null,[(0,i._)("div",{class:(0,n.C_)(["menu-btn",{close:o.showMenu,show:!o.showMenu}]),onClick:a[0]||(a[0]=e=>r.toggleMenu())},c,2),(0,i._)("nav",{class:(0,n.C_)(["menu",{show:o.showMenu,close:!o.showMenu}])},[(0,i._)("div",{class:(0,n.C_)(["menu-branding",{show:o.showMenu,close:!o.showMenu}])},u,2),(0,i._)("ul",{class:(0,n.C_)(["menu-nav",{show:o.showMenu,close:!o.showMenu}])},[(0,i._)("li",g,[(0,i.Wm)(l,{onClick:a[1]||(a[1]=e=>r.closeWindow()),to:"/",class:"nav-link",exact:""},{default:(0,i.w5)((()=>[h])),_:1})]),(0,i._)("li",m,[(0,i.Wm)(l,{onClick:a[2]||(a[2]=e=>r.closeWindow()),to:{name:"about"},class:"nav-link"},{default:(0,i.w5)((()=>[p])),_:1})]),(0,i._)("li",f,[(0,i.Wm)(l,{onClick:a[3]||(a[3]=e=>r.closeWindow()),to:{name:"projects"},class:"nav-link"},{default:(0,i.w5)((()=>[v])),_:1})]),(0,i._)("li",b,[(0,i.Wm)(l,{onClick:a[4]||(a[4]=e=>r.closeWindow()),to:{name:"contact"},class:"nav-link"},{default:(0,i.w5)((()=>[_])),_:1})])],2)],2)]),(0,i.Wm)(d),w],64)}const y={data(){return{showMenu:!1}},methods:{closeWindow(){const e=document.querySelectorAll(".nav-item");this.showMenu=!1,e.forEach((e=>e.classList.remove("show")))},toggleMenu(){this.showMenu=!this.showMenu;const e=document.querySelectorAll(".nav-item");this.showMenu?e.forEach((e=>e.classList.add("show"))):e.forEach((e=>e.classList.remove("show")))}}};var x=s(744);const j=(0,x.Z)(y,[["render",k]]),C=j;var M=s(201);const D={class:"home",id:"bg-img"},P={class:"overlay"},E={class:"home-heading"},O=(0,i._)("h1",{class:"lg-heading"},[(0,i.Uk)("Karl Louise "),(0,i._)("span",{class:"text-secondary"},"Rito")],-1),H=(0,i._)("h2",{class:"sm-heading"},"Web Developer, Programmer, Designer & Entrepreneur",-1),S={class:"icons"},W=["href"],K={id:"divider"},L=(0,i._)("h1",{class:"lg-heading expertise-lg-heading"},[(0,i.Uk)("Exper"),(0,i._)("span",{class:"text-secondary"},"tise")],-1),q={class:"container"},I=(0,i._)("div",{style:{padding:"0 1rem"}},[(0,i._)("h2",{class:"sm-heading expertise-sm-heading"},"My Artillery")],-1),T={class:"row"},G={class:"card"},A=["src","alt"],U={class:"card-layer"},Y={key:0,class:"loader"};function Z(e,a,s,t,o,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",D,[(0,i._)("div",P,[(0,i._)("main",E,[O,H,(0,i._)("div",S,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.icons,(e=>((0,i.wg)(),(0,i.iD)("a",{key:e.id,href:e.target_url,target:"_blank"},[(0,i._)("i",{class:(0,n.C_)(e.code)},null,2)],8,W)))),128))])])])]),(0,i._)("section",K,[L,(0,i._)("div",q,[I,(0,i._)("div",T,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.expertise,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"col",key:e.name},[(0,i._)("div",G,[(0,i._)("img",{src:e.img_source,alt:e.name,class:"card-img"},null,8,A),(0,i._)("div",U,[(0,i._)("h3",null,(0,n.zw)(e.name),1)])])])))),128))])])]),o.is_loading?((0,i.wg)(),(0,i.iD)("div",Y)):(0,i.kq)("",!0)],64)}let B="../../../dist/img/logo";const F={created(){this.loadContent()},methods:{loadContent(){this.is_loading=!0,setTimeout((()=>{this.is_loading=!1}),1e3)}},data(){return{is_loading:!0,icons:[{id:1,code:"fab fa-facebook fa-2x",target_url:"https://www.facebook.com/karllouise08"},{id:2,code:"fab fa-twitter fa-2x",target_url:"https://twitter.com/karl_rito"},{id:3,code:"fab fa-linkedin fa-2x",target_url:"https://www.linkedin.com/in/karllouise08"},{id:4,code:"fab fa-github fa-2x",target_url:"https://github.com/Karllouise-code"},{id:5,code:"fab fa-instagram fa-2x",target_url:"https://www.instagram.com/kalowies_"},{id:6,code:"fas fa-cloud fa-2x",target_url:"https://trailblazer.me/id/karllouise08"},{id:7,code:"fas fa-pen-nib fa-2x",target_url:"https://karllouiserito.hashnode.dev/"},{id:8,code:"fab fa-goodreads fa-2x",target_url:"https://www.goodreads.com/user/show/128431182-karl-louise-rito"},{id:9,code:"fab fa-dev fa-2x",target_url:"https://dev.to/kalowies_"}],expertise:[{name:"Laravel",img_source:B+"/laravel.png"},{name:"Vuejs",img_source:B+"/vuejs-icon.svg"},{name:"GraphQL",img_source:B+"/graphql.png"},{name:"VS Code",img_source:B+"/vscode.svg"},{name:"Postman",img_source:B+"/postman.svg"},{name:"MySQL",img_source:B+"/mysql-icon.svg"},{name:"NodeJS",img_source:B+"/nodejs-icon.svg"},{name:"Git",img_source:B+"/git-scm-icon.svg"},{name:"Bootstrap",img_source:B+"/getbootstrap-icon.svg"},{name:"Sass",img_source:B+"/sass-lang-icon.svg"},{name:"jQuery",img_source:B+"/jquery-icon.svg"},{name:"JavaScript",img_source:B+"/javascript-icon.svg"},{name:"PHP",img_source:B+"/php-icon.svg"},{name:"HTML",img_source:B+"/w3_html5-icon.svg"},{name:"CSS",img_source:B+"/w3_css-icon.svg"},{name:"Canva",img_source:B+"/canva-icon.svg"}]}}},N=(0,x.Z)(F,[["render",Z]]),Q=N,V=s.p+"img/1x1.f3390d36.png",z=(0,i.uE)('<main id="about"><h1 class="lg-heading">About <span class="text-secondary">Me</span></h1><h2 class="sm-heading">Let me tell you a few things...</h2><div class="about-info"><img class="bio-image" src="'+V+'" alt="Karl Louise Rito"><div class="bio"><h3 class="text-secondary">BIO</h3><p> Experienced Web Developer adept in bringing forth expertise in design, installation, testing and maintenance of software systems with proficiency in various platforms, languages, and embedded systems. </p></div><div class="job job-1"><h6>Outline</h6><p> For a number of coding year experience, I am confident that that it is me who can bring an impact to your business needs. Design, implement, and develop is my forte. </p></div><div class="job job-2"><h6>Full-stack Developer</h6><p> I am an experienced mid-level full stack web developer from an international company assuring you to deliver top-notch website just what your business or personal need. </p></div><div class="job job-3"><h6>Strength</h6><p> I am a very fast learner which means I will get up and running in the role quickly that means you will see positive return by hiring me and I will demonstrate outstanding values in my work. </p></div></div></main>',1),J={key:0,class:"loader"};function R(e,a,s,t,n,o){return(0,i.wg)(),(0,i.iD)(i.HY,null,[z,n.is_loading?((0,i.wg)(),(0,i.iD)("div",J)):(0,i.kq)("",!0)],64)}const X={data(){return{is_loading:!0}},created(){this.loadContent()},methods:{loadContent(){setTimeout((()=>{this.is_loading=!1}),1e3)}}},$=(0,x.Z)(X,[["render",R]]),ee=$,ae=s.p+"img/project2_fyloPage.f28885ef.jpg",se=s.p+"img/project3_trimexPage.67e345c7.png",te=s.p+"img/project4_tributePage.26cf1dd8.png",ie=s.p+"img/project5_dataStructMenu.aad1cccd.png",ne=s.p+"img/project1_orderingSystem.e83cd822.png",oe=(0,i.uE)('<main id="work"><h1 class="lg-heading">My <span class="text-secondary">Projects</span></h1><h2 class="sm-heading">Check out some of my works...</h2><div class="projects"><div class="item"><a href="#!"><img src="'+ae+'" alt="project1"></a><a target="_blank" href="https://karllouise-code.github.io/fylo-dark-theme-page/" class="btn-light"><i class="fas fa-eye"></i> Project</a><a target="_blank" href="https://github.com/Karllouise-code/fylo-dark-theme-page" class="btn-dark"><i class="fab fa-github"></i> GitHub</a></div><div class="item"><a href="#!"><img src="'+se+'" alt="project1"></a><a target="_blank" href="https://trimexlanding.ga/" class="btn-light"><i class="fas fa-eye"></i> Project</a><a target="_blank" href="https://github.com/Karllouise-code/trimexlanding" class="btn-dark"><i class="fab fa-github"></i> GitHub</a></div><div class="item"><a href="#!"><img src="'+te+'" alt="project1"></a><a target="_blank" href="https://mambatribute.ml/" class="btn-light"><i class="fas fa-eye"></i> Project</a><a target="_blank" href="https://github.com/Karllouise-code/mambatribute" class="btn-dark"><i class="fab fa-github"></i> GitHub</a></div><div class="item"><a href="#!"><img src="'+ie+'" alt="project1"></a><a target="_blank" href="https://github.com/Karllouise-code/dataStructures" class="btn-light"><i class="fas fa-eye"></i> Project</a><a target="_blank" href="https://github.com/Karllouise-code/dataStructures" class="btn-dark"><i class="fab fa-github"></i> GitHub</a></div><div class="item"><a href="#!"><img src="'+ne+'" alt="project1"></a><a target="_blank" href="https://github.com/Karllouise-code/ordering-system" class="btn-light"><i class="fas fa-eye"></i> Project</a><a target="_blank" href="https://github.com/Karllouise-code/ordering-system" class="btn-dark"><i class="fab fa-github"></i> GitHub</a></div></div></main>',1),re={key:0,class:"loader"};function le(e,a,s,t,n,o){return(0,i.wg)(),(0,i.iD)(i.HY,null,[oe,n.is_loading?((0,i.wg)(),(0,i.iD)("div",re)):(0,i.kq)("",!0)],64)}const ce={data(){return{is_loading:!0}},created(){this.loadContent()},methods:{loadContent(){setTimeout((()=>{this.is_loading=!1}),1e3)}}},de=(0,x.Z)(ce,[["render",le]]),ue=de,ge=(0,i.uE)('<main id="contact"><h1 class="lg-heading">Contact <span class="text-secondary">Me</span></h1><h2 class="sm-heading">If you want to reach me...</h2><div class="boxes"><div><span class="text-secondary">Email: </span>karllouiserito.1@gmail.com</div><div><span class="text-secondary">Phone: </span>09756824235</div><div><span class="text-secondary">Email: </span>Biñan Laguna 4024</div></div></main>',1),he={key:0,class:"loader"};function me(e,a,s,t,n,o){return(0,i.wg)(),(0,i.iD)(i.HY,null,[ge,n.is_loading?((0,i.wg)(),(0,i.iD)("div",he)):(0,i.kq)("",!0)],64)}const pe={data(){return{is_loading:!0}},created(){this.loadContent()},methods:{loadContent(){setTimeout((()=>{this.is_loading=!1}),1e3)}}},fe=(0,x.Z)(pe,[["render",me]]),ve=fe,be={id:"not-found"},_e=(0,i.uE)('<h1 class="lg-heading expertise-lg-heading">404 PAGE <span class="text-secondary">NOT FOUND</span></h1><div class="container"><div style="padding:0 1rem;"><h2 class="sm-heading expertise-sm-heading">The page you are looking for does not exist.</h2></div></div>',2),we={class:"icons",style:{"text-align":"center"}},ke=(0,i._)("i",{class:"fas fa-home fa-2x"},null,-1);function ye(e,a){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("main",be,[(0,i._)("section",null,[_e,(0,i._)("div",we,[(0,i.Wm)(s,{to:"/",style:{"text-align":"center"}},{default:(0,i.w5)((()=>[ke])),_:1})])])])}const xe={},je=(0,x.Z)(xe,[["render",ye]]),Ce=je,Me=[{path:"/",name:"home",component:Q},{path:"/about",name:"about",component:ee},{path:"/projects",name:"projects",component:ue},{path:"/contacts",name:"contact",component:ve},{path:"/:catchError(.*)",name:"not_found",component:Ce}],De=(0,M.p7)({history:(0,M.PO)("/"),routes:Me,linkActiveClass:"current",scrollBehavior(){document.getElementById("app").scrollIntoView({behavior:"smooth"})}}),Pe=De;(0,t.ri)(C).use(Pe).mount("#app")}},a={};function s(t){var i=a[t];if(void 0!==i)return i.exports;var n=a[t]={exports:{}};return e[t](n,n.exports,s),n.exports}s.m=e,(()=>{var e=[];s.O=(a,t,i,n)=>{if(!t){var o=1/0;for(d=0;d<e.length;d++){for(var[t,i,n]=e[d],r=!0,l=0;l<t.length;l++)(!1&n||o>=n)&&Object.keys(s.O).every((e=>s.O[e](t[l])))?t.splice(l--,1):(r=!1,n<o&&(o=n));if(r){e.splice(d--,1);var c=i();void 0!==c&&(a=c)}}return a}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[t,i,n]}})(),(()=>{s.d=(e,a)=>{for(var t in a)s.o(a,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{s.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a)})(),(()=>{s.p="/"})(),(()=>{var e={143:0};s.O.j=a=>0===e[a];var a=(a,t)=>{var i,n,[o,r,l]=t,c=0;if(o.some((a=>0!==e[a]))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(l)var d=l(s)}for(a&&a(t);c<o.length;c++)n=o[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(d)},t=self["webpackChunkportfolio2"]=self["webpackChunkportfolio2"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var t=s.O(void 0,[998],(()=>s(448)));t=s.O(t)})();
//# sourceMappingURL=app.e96f4299.js.map