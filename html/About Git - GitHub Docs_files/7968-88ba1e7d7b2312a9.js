(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7968],{73824:function(e,t,l){"use strict";l.d(t,{M:function(){return h}});var r=l(85893),s=l(57798),a=l(75308),n=l(67294),i=l(94184),c=l.n(i),o=l(72459),d=l(56411),u=l.n(d);function m(e){let[t,l]=(0,n.useState)("");return(0,n.useEffect)(()=>{let e=()=>{l(window.location.hash)};return window.addEventListener("hashchange",e),()=>{window.removeEventListener("hashchange",e)}},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.$.Item,{"aria-current":e.contents.href===t&&"location",href:e.contents.href,className:c()(u().nested,e.platform),children:e.contents.title}),e.items&&e.items.length>0&&(0,r.jsx)("ul",{className:c()(u().indentNested),children:e.items.map(e=>(0,r.jsx)(m,{contents:e.contents,items:e.items,platform:e.platform},e.contents.href))})]})}function h(e){let{miniTocItems:t}=e,{t:l}=(0,o.$)("pages");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{as:"h2",id:"in-this-article",className:"mb-1 ml-3",sx:{"@media (min-width: 1012px) and (max-width: 1400px)":{marginTop:"2rem"},fontSize:1},"aria-label":l("miniToc"),children:l("miniToc")}),(0,r.jsx)(s.$,{"data-testid":"minitoc",className:c()(u().miniToc,"my-2"),"aria-labelledby":"in-this-article",children:t.map((e,t)=>(0,r.jsx)(m,{contents:e.contents,items:e.items,platform:e.platform},e.contents.href+t))})]})}},7968:function(e,t,l){"use strict";l.r(t),l.d(t,{__N_SSP:function(){return eK},default:function(){return eV}});var r,s,a=l(85893),n=l(11163),i=l(38696),c=l(56484);function o(e){return"beside"===e||"inline"===e?e:"beside"}function d(e,t){let l=[];if(t=o(t),e.forEach(e=>{e.getAttribute("value")===t?(e.ariaCurrent="true",e.classList.add("selected"),l.push(e)):(e.removeAttribute("aria-current"),e.classList.remove("selected"))}),!l.length)throw Error("No annotationBtn item is active for code annotation.");return l}function u(e,t){if(t&&"beside"!==t){if("inline"===t)e.forEach(e=>{var t;null===(t=e.closest(".annotate"))||void 0===t||t.classList.replace("beside","inline")});else throw Error("Invalid target mode set for annotation.")}else e.forEach(e=>{var t;null===(t=e.closest(".annotate"))||void 0===t||t.classList.replace("inline","beside")});d(e,t)}(r=s||(s={})).Beside="beside",r.Inline="inline";var m=l(7187),h=l.n(m);let f=/[\S]{18,}/g,p=/([a-z])([A-Z])/g,x=/([\w:]{12}[^_]*?)_/g,g=/([/\\])/g;var j=l(4172),v=l(69693),b=l(67294);l(78718);let y=(0,b.createContext)(null),N=()=>{let e=(0,b.useContext)(y);if(!e)throw Error('"useProductGuidesContext" may only be used inside "ProductGuidesContext.Provider"');return e},w=(0,b.createContext)(null),_=()=>{let e=(0,b.useContext)(w);if(!e)throw Error('"useArticleContext" may only be used inside "ArticleContext.Provider"');return e};var L=l(5152),E=l.n(L),k=l(94184),A=l.n(k),P=l(85529),S=l(49991),C=l(57104),T=l(94794),q=l(65994),I=l(37061),R=l(67210),B=l(91353),H=l(42483),$=l(1199),Z=l(93846),M=l.n(Z);let U=e=>{let{breadcrumbs:t,intro:l,introCallOuts:r,topper:s,toc:n,children:i,className:c,supportPortalVaIframeProps:o}=e;return(0,a.jsxs)(H.Z,{className:A()(M().containerBox,c),children:[t&&(0,a.jsx)(H.Z,{gridArea:"breadcrumbs",className:A()("d-none d-xxl-block mt-3 mr-auto width-full"),children:t}),(0,a.jsxs)(H.Z,{className:A()(M().contentBox),children:[s&&(0,a.jsx)(H.Z,{gridArea:"topper",children:s}),l&&(0,a.jsx)(H.Z,{id:"article-intro",gridArea:"intro",className:"f4",children:l}),r&&(0,a.jsx)(H.Z,{gridArea:"intro",className:"f4",children:r}),n&&(0,a.jsx)(H.Z,{"data-container":"toc",gridArea:"sidebar",alignSelf:"flex-start",className:A()(M().sidebarBox,"border-bottom border-lg-0 pb-4 mb-5 pb-xl-0 mb-xl-0"),children:n}),(0,a.jsxs)(H.Z,{"data-container":"article",gridArea:"content","data-search":"article-body",className:A()(M().articleContainer,c),children:[o&&o.supportPortalUrl&&o.vaFlowUrlParameter&&(0,a.jsx)($.v,{supportPortalVaIframeProps:o}),i]})]})]})};var D=l(13385),F=l(94139);let V=e=>{let{defaultValue:t,fallbackValue:l,cookieKey:r,queryStringKey:s,onValue:o,preferenceName:d,options:u,ariaLabel:m}=e,h=(0,n.useRouter)(),{query:f,locale:p}=h,[x,g]=(0,b.useState)("");(0,b.useEffect)(()=>{let e=f[s],a="";e&&(a=Array.isArray(e)?e[0]:e);let n=u.map(e=>e.value);if(!a||!n.includes(a)){let e=i.Z.get(r);a=t||(e&&n.includes(e)?e:l)}g(a)},[f,l,t,u]);let[j,v=""]=h.asPath.split("#")[0].split("?");(0,b.useEffect)(()=>{x&&o(x)},[x,j]),(0,b.useEffect)(()=>()=>{},[x]);let y=new URLSearchParams(v);return(0,a.jsx)("div",{"data-testid":"".concat(s,"-picker"),children:(0,a.jsx)(F.J,{"aria-label":m,children:u.map(e=>{y.set(s,e.value);let t={["data-".concat(s)]:e.value};return(0,a.jsx)(F.J.Item,{href:"?".concat(y),"aria-current":e.value===x?"page":void 0,onSelect:t=>{t.preventDefault(),function(e){let t=new URLSearchParams(v);t.set(s,e);let l="/".concat(p).concat(j,"?").concat(t);h.push(l,void 0,{shallow:!0,locale:p}),(0,c.qP)({type:c.tw.preference,preference_name:d,preference_value:e}),i.Z.set(r,e)}(e.value)},...t,children:e.label},e.value)})},h.asPath)})},K=[{value:"mac",label:"Mac"},{value:"windows",label:"Windows"},{value:"linux",label:"Linux"}];function W(e){Array.from(document.querySelectorAll(".ghd-tool")).filter(e=>K.some(t=>e.classList.contains(t.value))).forEach(t=>{t.style.display=t.classList.contains(e)?"":"none","A"===t.tagName&&t.parentElement&&"LI"===t.parentElement.tagName&&(t.parentElement.style.display=t.classList.contains(e)?"":"none")}),Array.from(document.querySelectorAll(K.map(e=>".platform-".concat(e.value)).join(", "))).forEach(t=>{t.style.display=t.classList.contains("platform-".concat(e))?"":"none"})}let z=()=>{let{defaultPlatform:e,detectedPlatforms:t}=_(),[l,r]=(0,b.useState)("");if((0,b.useEffect)(()=>{let e=(0,D.r)().os;"ios"===e&&(e="mac"),r(e)},[]),!t.length)return null;let s=K.filter(e=>t.includes(e.value));return(0,a.jsx)(V,{defaultValue:e,fallbackValue:t.includes(l)?l:t[t.length-1],cookieKey:"osPreferred",queryStringKey:"platform",onValue:W,preferenceName:"os",ariaLabel:"Platform",options:s})};var G=l(96776);let O=()=>{let{defaultTool:e,detectedTools:t,allTools:l}=_();if(!t.length)return null;let r=t.map(e=>({value:e,label:l[e]}));return(0,a.jsx)(V,{fallbackValue:e&&t.includes(e)?e:t.includes("webui")?"webui":t.includes("cli")?"cli":t[0],cookieKey:"toolPreferred",queryStringKey:"tool",onValue:e=>{(0,G._8)(document,()=>{var t;t=Object.keys(l),Array.from(document.querySelectorAll(".ghd-tool")).filter(e=>t.some(t=>e.classList.contains(t))).forEach(t=>{t.style.display=t.classList.contains(e)?"":"none","A"===t.tagName&&t.parentElement&&"LI"===t.parentElement.tagName&&(t.parentElement.style.display=t.classList.contains(e)?"":"none")}),Array.from(document.querySelectorAll(t.map(e=>".tool-".concat(e)).join(", "))).forEach(t=>{t.style.display=t.classList.contains("tool-".concat(e))?"":"none"})})},preferenceName:"application",ariaLabel:"Tool",options:r})};var J=l(73824),Y=l(74727),Q=l(72459);function X(e){let{track:t}=e,{locale:l}=(0,n.useRouter)(),{t:r}=(0,Q.$)("learning_track_nav"),{trackTitle:s,trackName:i,nextGuide:c,trackProduct:o,numberOfGuides:d,currentGuideIndex:u}=t;return(0,a.jsx)("div",{"data-testid":"learning-track-card",className:"py-3 px-4 rounded color-bg-default border d-flex flex-justify-between mb-4 mx-2",children:(0,a.jsxs)("div",{className:"d-flex flex-column width-full",children:[(0,a.jsx)("h2",{className:"h4",children:(0,a.jsx)(Y.r,{href:"/".concat(l,"/").concat(o,"/guides"),className:"mb-1 text-underline",children:s})}),(0,a.jsx)("span",{className:"f5 color-fg-muted",children:r("current_progress").replace("{n}","".concat(d)).replace("{i}","".concat(u+1))}),(0,a.jsx)("hr",{}),(0,a.jsx)("span",{className:"h5 color-fg-default",children:c?(0,a.jsxs)(a.Fragment,{children:[r("next_guide"),":",(0,a.jsx)(Y.r,{href:"".concat(c.href,"?").concat(new URLSearchParams({learn:i,learnProduct:o})),className:"text-bold color-fg f5 ml-1",children:c.title})]}):(0,a.jsx)(Y.r,{href:"/".concat(l,"/").concat(o,"/guides"),className:"h5 text-bold color-fg f5 ml-1",children:r("more_guides")})})]})})}var ee=l(67666),et=l(65624);let el=null,er=null,es=null,ea="popover-describedby",en="_hc_first_focusable",ei="_hc_title";function ec(){let e=document.querySelector("div.Popover");if(!e){let l=document.createElement("div");l.setAttribute("data-testid","popover"),l.classList.add("Popover","position-absolute"),l.style.display="none",l.style.outline="none",l.style.zIndex="100",l.setAttribute("role","dialog"),l.setAttribute("aria-modal","true"),l.setAttribute("aria-labelledby",ei);let r=document.createElement("span");r.setAttribute("tabindex","0"),r.setAttribute("aria-hidden","true"),l.appendChild(r);let s=document.createElement("div");s.classList.add(..."Popover-message Popover-message--large p-3 Box color-shadow-large".split(/\s+/g)),s.style.width="360px";let a=document.createElement("h3");a.classList.add("product"),a.classList.add("f6"),a.classList.add("color-fg-muted");let n=document.createElement("a");n.href="",n.id=en,a.appendChild(n),s.appendChild(a);let i=document.createElement("h4");i.classList.add("title"),i.classList.add("h5"),i.classList.add("my-1");let c=document.createElement("a");c.href="",c.id=ei,i.appendChild(c),s.appendChild(i);let o=document.createElement("p");o.classList.add("intro"),o.classList.add("f6"),o.classList.add("color-fg-muted"),s.appendChild(o);let d=document.createElement("p");d.classList.add("anchor"),d.classList.add("hover-card-anchor"),d.classList.add("f6"),d.classList.add("color-fg-muted"),s.appendChild(d),l.appendChild(s);let u=document.createElement("span");u.setAttribute("aria-hidden","true"),u.setAttribute("tabindex","0"),l.appendChild(u),document.body.appendChild(l),l.addEventListener("mouseover",()=>{el&&window.clearTimeout(el)}),l.addEventListener("mouseout",()=>{el=window.setTimeout(()=>{l.style.display="none",es=null},200)}),e=l,r.addEventListener("keyup",e=>{"Tab"===e.key&&e.shiftKey?c.focus():"Tab"===e.key&&n.focus()}),u.addEventListener("keyup",e=>{t(c,n,e)}),u.addEventListener("focus",()=>{t(n)})}function t(e,t,l){l&&"Tab"===l.key&&l.shiftKey?e.focus():l&&"Tab"===l.key&&t?t.focus():l||e.focus()}return e}function eo(e,t){if(e.parentElement&&e.parentElement.classList.contains("Popover"))return;let l="",r="",s="",a="";if(e.href.includes("#")&&e.href.split("#")[1]&&e.href.startsWith("".concat(window.location.href.split("#")[0],"#"))){let n=e.href.split("#")[1],i=document.querySelector("#".concat(n));if(i&&i.textContent){(a=i.textContent).endsWith(" #")&&(a=a.slice(0,-2));let e=document.querySelector("h1");if(e&&e.textContent){l=e.textContent,s="",r="";let t=document.querySelector("._product-title");t&&t.textContent&&(r=t.textContent);let a=document.querySelector("._page-intro");a&&a.textContent&&(s=a.textContent)}}l&&ed(e,{product:r,title:l,intro:s,anchor:a},t);return}let{pathname:n}=new URL(e.href);fetch("/api/pageinfo/v1?".concat(new URLSearchParams({pathname:n}))).then(async l=>{if(l.ok){let{info:r}=await l.json();ed(e,r,t)}})}function ed(e,t,l){let{product:r,title:s,intro:a,anchor:n}=t,i=ec(),c=i.querySelector(".product");if(c){let t=c.querySelector(".product a");if(r){if(t){t.textContent=r;let l=new URL(e.href);t.href=l.pathname.split("/").slice(0,3).join("/"),c.style.display="block"}}else c.style.display="none"}let o=i.querySelector(".anchor");o&&(n?(o.textContent=n,o.style.display="block"):o.style.display="none"),el&&window.clearTimeout(el);let d=i.querySelector(".title");if(d){let t=d.querySelector("a");t&&(t.href=e.href,t.textContent=s)}let u=i.querySelector("p.intro");u&&(a?(u.textContent=a,u.style.display="block"):u.style.display="none");let[m,h]=function(e){let t=e.offsetTop,l=e.offsetLeft,r=e.offsetParent;for(;r;)l+=r.offsetLeft,t+=r.offsetTop,r=r.offsetParent;return[t,l]}(e),[f]=function(e){let{top:t,left:l}=e.getBoundingClientRect();return[t,l]}(e),p=i.querySelector(".Popover-message"),x=f<300;x?(p.classList.remove("Popover-message--bottom-left"),p.classList.add("Popover-message--top-left")):(p.classList.remove("Popover-message--top-left"),p.classList.add("Popover-message--bottom-left")),i.style.top="".concat(m,"px"),i.style.left="".concat(h,"px"),i.style.display="block",x?i.style.top="".concat(m+33,"px"):i.style.top="".concat(m-i.offsetHeight-10,"px"),i.style.setProperty("top",i.style.top,"important"),l&&l(i)}function eu(e,t){er&&window.clearTimeout(er),e===es?eo(e,t):er=window.setTimeout(()=>{eo(e,t),es=e},300)}function em(){er&&window.clearTimeout(er),el=window.setTimeout(()=>{ec().style.display="none",es=null},200)}let eh=null;function ef(){let{t:e}=(0,Q.$)("popovers"),{locale:t}=(0,n.useRouter)();return(0,b.useEffect)(()=>{let t;let l=((t=document.querySelector("#".concat(ea)))||((t=document.createElement("p")).id=ea,t.classList.add("visually-hidden"),(document.querySelector("main")||document.body).appendChild(t)),t);l&&(l.textContent=e("keyboard_shortcut_description"))},[t]),(0,b.useEffect)(()=>{function e(){em()}return window.addEventListener("blur",e),()=>{window.removeEventListener("blur",e)}},[]),(0,b.useEffect)(()=>{function t(e){eu(e.currentTarget),eh=null}function l(){em()}function r(e){if("ArrowUp"===e.key&&e.altKey){e.preventDefault();let t=e.currentTarget;eu(t,e=>{let l=e.querySelector(".product a"),r=document.getElementById(en);l&&r&&(r.focus(),eh=t)})}else"ArrowDown"===e.key&&e.altKey&&(e.preventDefault(),em())}function s(e){"Escape"===e.key&&"none"!==ec().style.display&&(em(),eh&&eh.focus())}let a=Array.from(document.querySelectorAll("#article-contents a[href], #article-intro a[href]")).filter(e=>{let{pathname:t}=new URL(e.href);return e.href.startsWith(window.location.origin)&&!e.classList.contains("heading-link")&&!t.startsWith("/public/")&&!t.startsWith("/assets/")&&!e.dataset.tool&&!e.dataset.platform});for(let s of a)s.addEventListener("mouseover",t),s.addEventListener("mouseout",l),s.addEventListener("keydown",r),s.getAttribute("aria-roledescription")||s.setAttribute("aria-roledescription",e("role_description")),s.getAttribute("aria-describedby")||s.setAttribute("aria-describedby",ea);return document.addEventListener("keydown",s),()=>{for(let e of a)e.removeEventListener("mouseover",t),e.removeEventListener("mouseout",l),e.removeEventListener("keydown",r);document.removeEventListener("keydown",s)}}),null}E()(()=>Promise.all([l.e(9734),l.e(5318)]).then(l.bind(l,55318)),{loadableGenerated:{webpack:()=>[55318]},ssr:!1});let ep=()=>{let e=(0,n.useRouter)(),{title:t,intro:l,effectiveDate:r,renderedPage:s,permissions:i,includesPlatformSpecificContent:c,includesToolSpecificContent:o,product:d,productVideoUrl:u,miniTocItems:m,currentLearningTrack:h,supportPortalVaIframeProps:f,currentLayout:p}=_(),x=!!(null==h?void 0:h.trackName),{t:g}=(0,Q.$)(["pages"]),j=(0,a.jsx)(a.Fragment,{children:l&&(0,a.jsx)(I.r,{"data-testid":"lead","data-search":"lead",className:"_page-intro",children:l})}),v=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(R.n,{permissions:i,product:d}),c&&(0,a.jsx)(z,{}),o&&(0,a.jsx)(O,{})]}),b=(0,a.jsxs)(a.Fragment,{children:[x&&(0,a.jsx)(X,{track:h}),m.length>1&&(0,a.jsx)(J.M,{miniTocItems:m})]}),y=(0,a.jsxs)("div",{id:"article-contents",children:[u&&(0,a.jsx)("div",{className:"my-2",children:(0,a.jsxs)(Y.r,{id:"product-video",href:u,target:"_blank",children:[(0,a.jsx)(P.LinkExternalIcon,{"aria-label":"(external site)",className:"octicon-link mr-2"}),g("video_from_transcript")]})}),(0,a.jsx)(q.S,{children:s}),r&&(0,a.jsxs)("div",{className:"mt-4",id:"effectiveDate",children:["Effective as of:"," ",(0,a.jsx)("time",{dateTime:new Date(r).toISOString(),children:new Date(r).toDateString()})]})]});return(0,a.jsxs)(S.H,{children:[(0,a.jsx)(ef,{}),!1,e.pathname.includes("/rest/")&&(0,a.jsx)(ee.b,{}),"inline"===p?(0,a.jsx)(U,{supportPortalVaIframeProps:f,topper:(0,a.jsx)(C.j,{children:t}),intro:j,introCallOuts:v,toc:b,breadcrumbs:(0,a.jsx)(et.O,{}),children:y}):(0,a.jsxs)("div",{className:"container-xl px-3 px-md-6 my-4",children:[(0,a.jsx)("div",{className:A()("d-none d-xxl-block mt-3 mr-auto width-full"),children:(0,a.jsx)(et.O,{})}),(0,a.jsx)(B.A,{supportPortalVaIframeProps:f,topper:(0,a.jsx)(C.j,{children:t}),intro:(0,a.jsxs)(a.Fragment,{children:[j,v]}),toc:b,children:y}),x?(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsx)(T.V,{track:h})}):null]})]})};var ex=l(26882);let eg=()=>{let{productVideo:e,productVideoTranscript:t,shortTitle:l,title:r,beta_product:s,intro:n,introLinks:i}=(0,v.on)(),{t:c}=(0,Q.$)(["product_landing"]),[o,d]=(0,b.useState)(!1);return(0,b.useEffect)(()=>{d(!0)},[]),(0,a.jsxs)("header",{className:"d-lg-flex gutter-lg mb-6",children:[(0,a.jsxs)("div",{className:A()("col-12 mb-3 mb-lg-0",e&&"col-lg-6"),children:[(0,a.jsxs)("h1",{id:"title-h1",children:[r," ",s&&(0,a.jsx)("span",{className:"Label Label--success v-align-middle",children:"Beta"})]}),n&&(0,a.jsx)(I.r,{"data-search":"lead",children:n}),(0,a.jsx)("div",{"data-search":"hide",children:i&&Object.entries(i).filter(e=>{let[t,l]=e;return l&&!t.includes("raw")}).map((e,t)=>{let[l,r]=e;return r?(0,a.jsx)(ej,{id:r,href:r,className:A()("btn btn-large f4 mt-3 mr-3 ",0===t&&"btn-primary"),children:c(l)},r):null})})]}),e&&(0,a.jsxs)("div",{className:"col-12 col-lg-6","data-search":"hide",children:[(0,a.jsx)("div",{className:"position-relative",style:{paddingBottom:"56.25%"},children:(0,a.jsx)("iframe",{title:"".concat(l||r," Video"),className:"top-0 left-0 position-absolute color-shadow-large rounded-1 width-full height-full",src:o?e:"",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),t&&(0,a.jsx)("div",{className:"position-relative my-2",children:(0,a.jsxs)(ej,{id:"product-video",href:t,children:[(0,a.jsx)(P.NoteIcon,{className:"octicon-link mr-2",size:"small",verticalAlign:"middle"}),c("view_transcript")]})})]})]})},ej=e=>{let{href:t,id:l,children:r,className:s}=e,i=(0,n.useRouter)(),{currentVersion:c}=(0,ex.a)(),o=t.startsWith("https"),d=t;if(!o){let e=i.locale||"en";d="/".concat(e).concat("free-pro-team@latest"!==c?"/".concat(c):"").concat(t)}return(0,a.jsxs)(Y.r,{id:l,href:d,className:s,children:[r," ",o&&(0,a.jsx)("span",{className:"ml-1",children:(0,a.jsx)(P.LinkExternalIcon,{"aria-label":"(external site)",size:"small"})})]})};var ev=l(14351);let eb=()=>{let{featuredArticles:e=[],whatsNewChangelog:t,changelogUrl:l}=(0,v.on)(),r=t&&t.length>0,{t:s}=(0,Q.$)("toc");return(0,a.jsxs)("div",{className:"d-lg-flex gutter my-6 py-6",children:[e.map((e,t)=>{let l="startHere"===e.key?"All '".concat(e.label,"' content"):"All ".concat(e.label);return(0,a.jsx)("div",{className:A()("col-12 mb-4 mb-lg-0",r?"col-lg-4":"col-lg-6"),children:(0,a.jsx)(ev.w,{title:e.label,viewAllHref:e.viewAllHref,...e.viewAllHref?{viewAllTitleText:l}:{},articles:e.articles})},e.label+t)}),r&&(0,a.jsx)("div",{className:A()("col-12 mb-4 mb-lg-0 col-lg-4"),children:(0,a.jsx)(ev.w,{title:s("whats_new"),viewAllHref:l,viewAllTitleText:s("all_changelogs"),articles:(t||[]).map(e=>({title:e.title,date:e.date,href:e.href}))})})]})},ey=e=>{let{guide:t}=e,l=t.authors&&t.authors.length>0?t.authors:["GitHub"],r="@".concat(l.join(", @"));return(0,a.jsx)("li",{className:"col-lg-4 col-12 mb-4 list-style-none",children:(0,a.jsxs)("a",{className:"Box color-shadow-medium height-full d-block hover-shadow-large no-underline color-fg-default p-5",href:t.href,children:[(0,a.jsx)("h3",{className:"f2",children:t.title}),(0,a.jsx)("p",{className:"mt-2 mb-4 color-fg-muted",children:t.intro||""}),(0,a.jsx)("footer",{className:"d-flex",children:(0,a.jsx)("div",{children:r})})]})})},eN=()=>{let e=(0,n.useRouter)(),{currentCategory:t}=(0,j.Hv)(),{featuredLinks:l,hasGuidesPage:r}=(0,v.on)(),{t:s}=(0,Q.$)("product_landing"),i="/".concat(e.locale).concat(e.asPath.split("?")[0]);return l.guideCards?(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"d-lg-flex flex-items-stretch",children:(0,a.jsx)("ul",{className:"d-flex flex-wrap gutter",children:(l.guideCards||[]).map(e=>(0,a.jsx)(ey,{guide:e},e.href))})}),!t&&r&&(0,a.jsxs)(Y.r,{href:"".concat(i,"/guides"),className:"btn btn-outline float-right",children:[s("explore_guides")," ",(0,a.jsx)(P.ArrowRightIcon,{})]})]}):null},ew=e=>{let{user:t,href:l}=e;return(0,a.jsxs)("a",{className:"Box d-flex height-full color-shadow-medium hover-shadow-large no-underline color-fg-default p-4",href:l||"https://github.com/".concat(t.username),children:[(0,a.jsx)("div",{className:"flex-shrink-0 mr-3",children:(0,a.jsx)("img",{src:"https://github.com/".concat(t.username,".png"),alt:t.username,className:"avatar avatar-8 circle"})}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("h3",{className:"wb-break-word",children:t.username}),(0,a.jsx)("p",{className:"mt-1 color-fg-muted",children:t.description})]})]})},e_=()=>{let{productUserExamples:e}=(0,v.on)();return e?(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"d-flex flex-wrap gutter",children:e.map(e=>(0,a.jsx)("div",{className:"col-12 col-xl-4 col-lg-6 mb-4",children:(0,a.jsx)(ew,{href:"https://github.com/sponsors/".concat(e.username),user:e})},e.username))})}):null},eL=e=>{let{repo:t,href:l}=e;return(0,a.jsxs)("a",{className:"Box d-flex height-full color-shadow-medium hover-shadow-large no-underline color-fg-default p-4",href:l||"https://github.com/".concat(t.repo),children:[(0,a.jsx)("div",{className:"flex-shrink-0 mr-3",children:(0,a.jsx)("img",{src:"https://github.com/".concat(t.repo.split("/")[0],".png"),alt:t.repo,className:"avatar avatar-8"})}),(0,a.jsxs)("div",{className:"flex-auto",children:[(0,a.jsx)("h3",{className:"wb-break-word",children:t.repo}),(0,a.jsx)("p",{className:"mt-1 color-fg-muted",children:t.description})]})]})},eE=()=>{let{productCommunityExamples:e}=(0,v.on)();return e?(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"d-flex flex-wrap gutter",children:e.map(e=>(0,a.jsx)("div",{className:"col-12 col-xl-4 col-lg-6 mb-4",children:(0,a.jsx)(eL,{repo:e})},e.repo))})}):null};var ek=l(6432);let eA=e=>{let{title:t,children:l,className:r,sectionLink:s,description:n}=e;return(0,a.jsxs)("div",{className:A()("container-xl px-3 px-md-6 mt-6",r),children:[(0,a.jsxs)("div",{className:"mb-4",children:[t&&(0,a.jsx)(ek.P,{as:"h2",slug:s,children:t}),n&&(0,a.jsx)("div",{className:"color-fg-muted f4",dangerouslySetInnerHTML:{__html:n}})]}),l]})};var eP=l(81214);let eS=()=>{let{currentProductTree:e}=(0,j.Hv)();return e?(0,a.jsx)("div",{className:"d-flex gutter flex-wrap","data-testid":"product-articles-list",children:e.childPages.filter(e=>e.childPages.length).map(e=>(0,a.jsx)(eC,{treeNode:e},e.href))}):null},eC=e=>{let{treeNode:t}=e;return(0,a.jsxs)("div",{className:"col-12 col-lg-4 mb-6 height-full",children:[(0,a.jsx)("h3",{className:"mb-3 f4",children:(0,a.jsx)(Y.r,{className:"text-underline",href:t.href,children:t.title})}),(0,a.jsx)(eP.S,{variant:"full",children:t.childPages.map((e,t)=>(0,a.jsx)(eP.S.Item,{as:"li",className:A()("width-full pl-0"),sx:{borderRadius:0,":hover":{borderRadius:0}},children:(0,a.jsxs)(Y.r,{className:"d-block width-full text-underline",href:e.href,children:[e.title,e.childPages.length>0?(0,a.jsxs)("small",{className:"color-fg-muted d-inline-block",children:["\xa0• ",e.childPages.length," articles"]}):null]})},e.href+t))})]})};function eT(){let{t:e}=(0,Q.$)("product_landing"),t=(0,n.useRouter)(),{enterpriseServerReleases:l,allVersions:r}=(0,j.Hv)(),{ghesReleases:s,title:i,shortTitle:c}=(0,v.on)(),o=t.asPath.split("?")[0];return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"d-lg-flex gutter-lg flex-items-stretch",children:s.slice(0,4).map(s=>{let n=s.version;if(!l.supported.includes(n))return null;let o="enterprise-server@".concat(n),d=s.patches[0],u="enterprise-server@".concat(s.firstPreviousRelease),m="enterprise-server@".concat(s.secondPreviousRelease);return(0,a.jsx)("div",{className:"col-lg-4 col-12 mb-4",children:(0,a.jsxs)("div",{className:"Box color-shadow-medium height-full d-block hover-shadow-large no-underline color-fg-default p-5",children:[(0,a.jsx)("h3",{className:"f2",children:r[o].versionTitle}),(0,a.jsxs)("p",{className:"mt-2 mb-4 color-fg-muted",children:[(0,a.jsx)(P.ListUnorderedIcon,{})," ",(0,a.jsxs)(Y.r,{className:"text-bold",href:"/".concat(t.locale,"/").concat(o,"/admin/release-notes#").concat(d.version),children:[e("release_notes_for")," ",d.version]})," ","(",d.date,")"]}),(0,a.jsxs)("p",{className:"mt-2 mb-4 color-fg-muted",children:[(0,a.jsx)(P.ArrowUpIcon,{})," ",e("upgrade_from")," ",(0,a.jsx)(Y.r,{className:"text-bold",href:"/".concat(t.locale,"/").concat(u,"/admin/enterprise-management/upgrading-github-enterprise-server"),children:s.firstPreviousRelease})," ","or"," ",(0,a.jsx)(Y.r,{className:"text-bold",href:"/".concat(t.locale,"/").concat(m,"/admin/enterprise-management/upgrading-github-enterprise-server"),children:s.secondPreviousRelease})]}),(0,a.jsxs)("p",{className:"mt-2 mb-4 color-fg-muted",children:[(0,a.jsx)(P.FileIcon,{})," ",(0,a.jsx)(Y.r,{className:"text-bold","aria-label":"".concat(c||i," - ").concat(e("browse_all")," ").concat(n," ").concat(e("docs")),href:"/".concat(t.locale,"/").concat(o),children:e("browse_all_docs")})]})]})},n)})}),(0,a.jsxs)(Y.r,{href:"".concat(o,"/release-notes"),className:"btn btn-outline float-right",children:[e("explore_release_notes")," ",(0,a.jsx)(P.ArrowRightIcon,{})]})]})}let eq=()=>{var e;let t=(0,n.useRouter)(),{isEnterpriseServer:l}=(0,ex.a)(),{title:r,shortTitle:s,featuredLinks:i,productUserExamples:c,productCommunityExamples:o}=(0,v.on)(),{t:d}=(0,Q.$)("product_landing");return(0,a.jsx)(S.H,{children:(0,a.jsxs)("div",{"data-search":"article-body",children:["rest"===t.query.productId&&(0,a.jsx)(ee.b,{}),(0,a.jsx)(eA,{className:"pt-3",children:(0,a.jsx)(eg,{})}),(0,a.jsxs)("div",{"data-search":"hide",children:[(0,a.jsx)(eA,{children:(0,a.jsx)(eb,{})}),o.length>0&&(0,a.jsx)(eA,{title:d("communities_using_discussions"),className:"my-6 pb-6",children:(0,a.jsx)(eE,{})}),c.length>0&&(0,a.jsx)(eA,{title:d("sponsor_community"),className:"my-6 pb-6",children:(0,a.jsx)(e_,{})}),"admin"===t.query.productId&&l&&(0,a.jsx)(eA,{title:d("supported_releases"),className:"my-6 pb-6",children:(0,a.jsx)(eT,{})}),(null===(e=i.guideCards)||void 0===e?void 0:e.length)>0&&(0,a.jsx)("div",{className:"color-bg-subtle py-6",children:(0,a.jsx)(eA,{title:d("guides"),sectionLink:"guides-2",className:"my-6",children:(0,a.jsx)(eN,{})})}),(0,a.jsx)(eA,{title:d("all_docs").replace("{{ title }}",s||r),sectionLink:"all-docs",className:"pt-9",children:(0,a.jsx)(eS,{})})]})]})})};function eI(){let{title:e,intro:t}=N();return(0,a.jsx)("div",{children:(0,a.jsx)("header",{className:"gutter mb-6 my-4",children:(0,a.jsxs)("div",{className:"col-12",children:[(0,a.jsx)("h1",{id:"title-h1",children:e}),t&&(0,a.jsx)(I.r,{"data-search":"lead",children:t})]})})})}let eR=e=>{var t;let{track:l}=e,{t:r,tObject:s}=(0,Q.$)("product_guides");return l?(0,a.jsxs)("div",{"data-testid":"learning-track",className:"col-12 col-md-6 my-3 px-4",children:[(0,a.jsx)(ek.P,{as:"h3",children:l.title}),(0,a.jsx)("p",{className:"color-text f4 color-fg-muted",children:l.description}),(0,a.jsxs)(Y.r,{"aria-label":"".concat(null==l?void 0:l.title," - ").concat(r("start_path")),className:"d-inline-flex btn",href:"".concat(null===(t=l.guides)||void 0===t?void 0:t[0].href,"?learn=").concat(l.trackName,"&learnProduct=").concat(l.trackProduct),children:[(0,a.jsx)("span",{children:r("start_path")}),(0,a.jsx)(P.ArrowRightIcon,{size:20,className:"ml-2"})]}),l.guides&&(0,a.jsx)("ol",{className:"pl-4 my-3 f4",children:l.guides.map(e=>{var t;return(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:"color-fg-muted mr-2",children:s("guide_types")[(null===(t=e.page)||void 0===t?void 0:t.type)||""]}),(0,a.jsx)(Y.r,{href:"".concat(e.href,"?learn=").concat(l.trackName,"&learnProduct=").concat(l.trackProduct),children:e.title})]},e.href+l.trackName)})})]}):(0,a.jsx)("div",{})},eB=()=>{let{learningTracks:e}=N();return(0,a.jsx)("div",{className:"d-flex flex-wrap flex-items-start my-5 gutter",children:e.map(e=>(0,a.jsx)(eR,{track:e},e.title))})};var eH=l(63309);let e$=e=>{let{tabIndex:t,card:l,typeLabel:r}=e;return(0,a.jsx)("li",{tabIndex:t,"data-testid":"article-card",className:"d-flex col-12 col-md-4 pr-0 pr-md-6 pr-lg-8",children:(0,a.jsxs)(Y.r,{className:"no-underline d-flex flex-column py-3 border-bottom",href:l.href,children:[(0,a.jsx)("h3",{className:"h4 color-fg-default mb-1",children:l.title}),(0,a.jsx)("div",{className:"h6 text-uppercase","data-testid":"article-card-type",children:r}),(0,a.jsx)("p",{className:"color-fg-muted my-3",children:l.intro}),l.topics.length>0&&(0,a.jsx)("ul",{style:{listStyleType:"none"},children:l.topics.map(e=>(0,a.jsx)("li",{className:"d-inline-block",children:(0,a.jsx)(eH.Z,{"data-testid":"article-card-topic",size:"small",variant:"accent",sx:{mr:1},children:e})},e))})]})})},eZ=()=>{let{t:e,tObject:t}=(0,Q.$)("product_guides"),l=t("guide_types"),{includeGuides:r}=N(),s=(0,b.useRef)(null),n=r||[];return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{"data-search":"hide",children:(0,a.jsx)("div",{role:"status",className:"color-fg-muted",children:0===n.length?e("guides_found.none"):1===n.length?e("guides_found.one"):e("guides_found.multiple").replace("{n}","".concat(n.length))})}),(0,a.jsx)("ul",{"data-testid":"article-cards",ref:s,className:"d-flex flex-wrap mr-0 mr-md-n6 mr-lg-n8",children:n.map((e,t)=>(0,a.jsx)(e$,{tabIndex:-1,card:e,typeLabel:l[e.type]},e.href+t))})]})},eM=()=>{let{title:e,learningTracks:t,includeGuides:l}=N(),{t:r}=(0,Q.$)("product_guides"),{currentProductName:s}=(0,j.Hv)(),n=s||e,i=/{{\s*name\s*}}/;return(0,a.jsxs)(S.H,{children:[(0,a.jsx)(eA,{className:"pt-3",children:(0,a.jsx)(eI,{})}),(0,a.jsxs)("div",{"data-search":"article-body",children:[t&&t.length>0&&(0,a.jsx)(eA,{title:r("learning_paths_title").replace(i,n),className:"border-top py-6",sectionLink:"learning-paths",description:r("learning_paths_desc"),children:(0,a.jsx)(eB,{})}),l&&(0,a.jsx)(eA,{title:r("all_guides_title").replace(i,n),className:"border-top py-6 color-border-default",sectionLink:"all-guides",children:(0,a.jsx)(eZ,{})})]})]})};var eU=l(35828),eD=l(38640);function eF(){!function(){let e=Array.from(document.querySelectorAll("button.js-btn-copy"));e&&e.forEach(e=>e.addEventListener("click",async()=>{let t=e.dataset.clipboard;if(!t)return;let l=document.querySelector('pre[data-clipboard="'.concat(t,'"]'));if(!l)return;let r=l.innerText;if(!r)return;await navigator.clipboard.writeText(r);let s=e.getAttribute("aria-label")||"";e.setAttribute("aria-label","Copied!"),setTimeout(()=>{e.setAttribute("aria-label",s)},2e3)}))}(),function(){let e=document.querySelectorAll("#article-contents table code");e&&e.forEach(e=>{let t=h()(e.textContent||""),l=e.querySelector("a"),r=t.replace(f,e=>e.replace(p,"$1<wbr>$2").replace(x,"$1_<wbr>").replace(g,"$1<wbr>"));l&&1===e.childNodes.length?l.innerHTML=l.innerHTML.replace(t,r):e.innerHTML=e.innerHTML.replace(t,r)})}(),function(){let e=Array.from(document.querySelectorAll("div.BtnGroup button"));if(e.length)for(let t of(u(e,o(i.Z.get("annotate-mode"))),e))t.addEventListener("click",l=>{l.preventDefault();let r=o(t.getAttribute("value"));i.Z.set("annotate-mode",r),(0,c.qP)({type:c.tw.preference,preference_name:"code_display",preference_value:r}),d(e,r),u(e,r)})}()}var eV=e=>{let t,{mainContext:l,productLandingContext:r,productGuidesContext:s,tocLandingContext:i,articleContext:c}=e,o=(0,n.useRouter)();if((0,b.useEffect)(()=>(eF(),o.events.on("routeChangeComplete",eF),()=>{o.events.off("routeChangeComplete",eF)}),[o.events]),r)t=(0,a.jsx)(v.u6.Provider,{value:r,children:(0,a.jsx)(eq,{})});else if(s)t=(0,a.jsx)(y.Provider,{value:s,children:(0,a.jsx)(eM,{})});else if(i)t=(0,a.jsx)(eD.qj.Provider,{value:i,children:(0,a.jsx)(eU.Y,{})});else if(c)t=(0,a.jsx)(w.Provider,{value:c,children:(0,a.jsx)(ep,{})});else if(!(o.asPath.startsWith("/_next/static/")||o.asPath.startsWith("/_next/webpack")))throw Error("No context provided to page (".concat(o.asPath,")"));return(0,a.jsx)(j.Tr.Provider,{value:l,children:t})},eK=!0},93846:function(e){e.exports={containerBox:"ArticleInlineLayout_containerBox__p5DcK",contentBox:"ArticleInlineLayout_contentBox__Guuxy",articleContainer:"ArticleInlineLayout_articleContainer__Sb_Af",sidebarBox:"ArticleInlineLayout_sidebarBox__nMJ_o"}},56411:function(e){e.exports={indentNested:"Minitocs_indentNested__i3Cq9",nested:"Minitocs_nested__JSAov",miniToc:"Minitocs_miniToc__NaGol"}}}]);