import{a as be}from"./chunk-LNJBVCBG.js";import{a as M}from"./chunk-VXSPSS7T.js";import{G as we}from"./chunk-RWMPFRQJ.js";import{$ as X,$b as me,Ba as te,Db as y,Eb as C,Fb as P,Gb as se,I as G,Ib as ae,Ka as re,Kb as ce,Mc as ye,P as v,Pb as m,Qb as u,Rb as b,S as E,Sb as I,V as Q,Wb as le,Y as J,Z as Y,_b as de,ac as pe,ca as f,cc as ue,db as d,dc as he,ec as ge,jb as _,k as K,l as S,lb as ie,na as R,oa as Z,q as x,rc as fe,sb as T,tb as ne,uc as _e,w,wa as ee,xb as oe,yb as k,yc as j}from"./chunk-UWFC3BX3.js";import{a as p,b as V,f as $}from"./chunk-SE5JAREP.js";var Fe="https://stackblitz.com",ve=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],Ne=["project","search","ports","settings"],Le=["light","dark"],ze=["editor","preview"],Ee={clickToLoad:e=>h("ctl",e),devToolsHeight:e=>Se("devtoolsheight",e),forceEmbedLayout:e=>h("embed",e),hideDevTools:e=>h("hidedevtools",e),hideExplorer:e=>h("hideExplorer",e),hideNavigation:e=>h("hideNavigation",e),openFile:e=>A("file",e),showSidebar:e=>Ue("showSidebar",e),sidebarView:e=>F("sidebarView",e,Ne),startScript:e=>A("startScript",e),terminalHeight:e=>Se("terminalHeight",e),theme:e=>F("theme",e,Le),view:e=>F("view",e,ze),zenMode:e=>h("zenMode",e),organization:e=>`${A("orgName",e?.name)}&${A("orgProvider",e?.provider)}`,crossOriginIsolated:e=>h("corp",e)};function Te(e={}){let i=Object.entries(e).map(([t,r])=>r!=null&&Ee.hasOwnProperty(t)?Ee[t](r):"").filter(Boolean);return i.length?`?${i.join("&")}`:""}function h(e,i){return i===!0?`${e}=1`:""}function Ue(e,i){return typeof i=="boolean"?`${e}=${i?"1":"0"}`:""}function Se(e,i){if(typeof i=="number"&&!Number.isNaN(i)){let t=Math.min(100,Math.max(0,i));return`${e}=${encodeURIComponent(Math.round(t))}`}return""}function F(e,i="",t=[]){return t.includes(i)?`${e}=${encodeURIComponent(i)}`:""}function A(e,i){return(Array.isArray(i)?i:[i]).filter(r=>typeof r=="string"&&r.trim()!=="").map(r=>`${e}=${encodeURIComponent(r)}`).join("&")}function ke(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function U(e,i){return`${Ce(i)}${e}${Te(i)}`}function W(e,i){let t={forceEmbedLayout:!0};return i&&typeof i=="object"&&Object.assign(t,i),`${Ce(t)}${e}${Te(t)}`}function Ce(e={}){return(typeof e.origin=="string"?e.origin:Fe).replace(/\/$/,"")}function q(e,i,t){if(!i||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(i.id=e.id),e.className&&(i.className=e.className),We(i,t),qe(e,i,t),e.replaceWith(i)}function H(e){if(typeof e=="string"){let i=document.getElementById(e);if(!i)throw new Error(`Could not find element with id '${e}'`);return i}else if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function B(e){return e&&e.newWindow===!1?"_self":"_blank"}function We(e,i={}){let t=Object.hasOwnProperty.call(i,"height")?`${i.height}`:"300",r=Object.hasOwnProperty.call(i,"width")?`${i.width}`:void 0;e.setAttribute("height",t),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}function qe(e,i,t={}){let r=e.allow?.split(";")?.map(n=>n.trim())??[];t.crossOriginIsolated&&!r.includes("cross-origin-isolated")&&r.push("cross-origin-isolated"),r.length>0&&(i.allow=r.join("; "))}var N=class{constructor(i){this.pending={},this.port=i,this.port.onmessage=this.messageListener.bind(this)}request({type:i,payload:t}){return new Promise((r,n)=>{let o=ke();this.pending[o]={resolve:r,reject:n},this.port.postMessage({type:i,payload:V(p({},t),{__reqid:o})})})}messageListener(i){if(typeof i.data.payload?.__reqid!="string")return;let{type:t,payload:r}=i.data,{__reqid:n,__success:o,__error:s}=r;this.pending[n]&&(o?this.pending[n].resolve(this.cleanResult(r)):this.pending[n].reject(s?`${t}: ${s}`:t),delete this.pending[n])}cleanResult(i){let t=p({},i);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}},L=class{constructor(i,t){this.editor={openFile:r=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:r}}),setCurrentFile:r=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:r}}),setTheme:r=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:r}}),setView:r=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:r}}),showSidebar:(r=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:r}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then(r=>r?.url??null),setUrl:(r="/")=>{if(typeof r!="string"||!r.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${r}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:r}})}},this._rdc=new N(i),Object.defineProperty(this.preview,"origin",{value:typeof t.previewOrigin=="string"?t.previewOrigin:null,writable:!1})}applyFsDiff(i){let t=r=>r!==null&&typeof r=="object";if(!t(i)||!t(i.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(i.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:i})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}},D=[],z=class{constructor(i){this.id=ke(),this.element=i,this.pending=new Promise((t,r)=>{let n=({data:c,ports:l})=>{c?.action==="SDK_INIT_SUCCESS"&&c.id===this.id&&(this.vm=new L(l[0],c.payload),t(this.vm),s())},o=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function s(){window.clearInterval(g),window.removeEventListener("message",n)}window.addEventListener("message",n),o();let a=0,g=window.setInterval(()=>{if(this.vm){s();return}if(a>=20){s(),r("Timeout: Unable to establish a connection with the StackBlitz VM"),D.forEach((c,l)=>{c.id===this.id&&D.splice(l,1)});return}a++,o()},500)}),D.push(this)}},He=e=>{let i=e instanceof Element?"element":"id";return D.find(t=>t[i]===e)??null};function Be(e,i){let t=document.createElement("input");return t.type="hidden",t.name=e,t.value=i,t}function Ve(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}function Pe({template:e,title:i,description:t,dependencies:r,files:n,settings:o}){if(!ve.includes(e)){let c=ve.map(l=>`'${l}'`).join(", ");console.warn(`Unsupported project.template: must be one of ${c}`)}let s=[],a=(c,l,Re="")=>{s.push(Be(c,typeof l=="string"?l:Re))};a("project[title]",i),typeof t=="string"&&t.length>0&&a("project[description]",t),a("project[template]",e,"javascript"),r&&(e==="node"?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a("project[dependencies]",JSON.stringify(r))),o&&a("project[settings]",JSON.stringify(o)),Object.entries(n).forEach(([c,l])=>{a(`project[files][${Ve(c)}]`,l)});let g=document.createElement("form");return g.method="POST",g.setAttribute("style","display:none!important;"),g.append(...s),g}function Ke(e,i){let t=Pe(e);return t.action=W("/run",i),t.id="sb_run",`<!doctype html>
<html>
<head><title></title></head>
<body>
  ${t.outerHTML}
  <script>document.getElementById('${t.id}').submit();<\/script>
</body>
</html>`}function Ge(e,i){let t=Pe(e);t.action=U("/run",i),t.target=B(i),document.body.appendChild(t),t.submit(),document.body.removeChild(t)}function O(e){return e?.contentWindow?(He(e)??new z(e)).pending:Promise.reject("Provided element is not an iframe.")}function Qe(e,i){Ge(e,i)}function Je(e,i){let t=U(`/edit/${e}`,i),r=B(i);window.open(t,r)}function Ye(e,i){let t=U(`/github/${e}`,i),r=B(i);window.open(t,r)}function Xe(e,i,t){let r=H(e),n=Ke(i,t),o=document.createElement("iframe");return q(r,o,t),o.contentDocument?.write(n),O(o)}function Ze(e,i,t){let r=H(e),n=document.createElement("iframe");return n.src=W(`/edit/${i}`,t),q(r,n,t),O(n)}function et(e,i,t){let r=H(e),n=document.createElement("iframe");return n.src=W(`/github/${i}`,t),q(r,n,t),O(n)}var Ie={connect:O,embedGithubProject:et,embedProject:Xe,embedProjectId:Ze,openGithubProject:Ye,openProject:Qe,openProjectId:Je};function tt(e){return e.replace(/(^\w|-\w)/g,rt)}function rt(e){return e.replace(/-/,"").toUpperCase()}function je(e,i,t){return{files:p({"src/main.ts":e[0].replace(/###/g,tt(t)+"Component"),"angular.json":e[1],"src/index.html":"<showcase-demo></showcase-demo>","src/styles.css":`
html, body {
  display: flex;
  flex: 1;
  min-height: 100vh;
  margin: 0;
}
`,"src/polyfills.ts":"import 'zone.js';"},i),title:"",description:"",template:"angular-cli",dependencies:{tslib:"*","maplibre-gl":"*","@maplibre/maplibre-gl-style-spec":"*","@maplibre/ngx-maplibre-gl":"*","@angular/animations":"^19","@angular/common":"^19","@angular/compiler":"^19","@angular/core":"^19","@angular/forms":"^19","@angular/platform-browser":"^19","@angular/router":"^19","@angular/material":"^19","@angular/cdk":"^19",url:"*",querystring:"*",events:"*","@types/supercluster":"*","@types/geojson":"*"}}}var it=["determinateSpinner"];function nt(e,i){if(e&1&&(R(),m(0,"svg",11),b(1,"circle",12),u()),e&2){let t=le();y("viewBox",t._viewBox()),d(),P("stroke-dasharray",t._strokeCircumference(),"px")("stroke-dashoffset",t._strokeCircumference()/2,"px")("stroke-width",t._circleStrokeWidth(),"%"),y("r",t._circleRadius())}}var ot=new X("mat-progress-spinner-default-options",{providedIn:"root",factory:st});function st(){return{diameter:Ae}}var Ae=100,at=10,De=(()=>{class e{_elementRef=f(te);_noopAnimations;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;_defaultColor="primary";_determinateCircle;constructor(){let t=f(re,{optional:!0}),r=f(ot);this._noopAnimations=t==="NoopAnimations"&&!!r&&!r._forceAnimations,this.mode=this._elementRef.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",r&&(r.color&&(this.color=this._defaultColor=r.color),r.diameter&&(this.diameter=r.diameter),r.strokeWidth&&(this.strokeWidth=r.strokeWidth))}mode;get value(){return this.mode==="determinate"?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,t||0))}_value=0;get diameter(){return this._diameter}set diameter(t){this._diameter=t||0}_diameter=Ae;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=t||0}_strokeWidth;_circleRadius(){return(this.diameter-at)/2}_viewBox(){let t=this._circleRadius()*2+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static \u0275fac=function(r){return new(r||e)};static \u0275cmp=T({type:e,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(r,n){if(r&1&&de(it,5),r&2){let o;me(o=pe())&&(n._determinateCircle=o.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(r,n){r&2&&(y("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",n.mode==="determinate"?n.value:null)("mode",n.mode),ae("mat-"+n.color),P("width",n.diameter,"px")("height",n.diameter,"px")("--mdc-circular-progress-size",n.diameter+"px")("--mdc-circular-progress-active-indicator-width",n.diameter+"px"),se("_mat-animation-noopable",n._noopAnimations)("mdc-circular-progress--indeterminate",n.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[2,"value","value",j],diameter:[2,"diameter","diameter",j],strokeWidth:[2,"strokeWidth","strokeWidth",j]},exportAs:["matProgressSpinner"],features:[oe],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(r,n){if(r&1&&(k(0,nt,2,8,"ng-template",null,0,fe),m(2,"div",2,1),R(),m(4,"svg",3),b(5,"circle",4),u()(),Z(),m(6,"div",5)(7,"div",6)(8,"div",7),I(9,8),u(),m(10,"div",9),I(11,8),u(),m(12,"div",10),I(13,8),u()()()),r&2){let o=ge(1);d(4),y("viewBox",n._viewBox()),d(),P("stroke-dasharray",n._strokeCircumference(),"px")("stroke-dashoffset",n._strokeDashOffset(),"px")("stroke-width",n._circleStrokeWidth(),"%"),y("r",n._circleRadius()),d(4),C("ngTemplateOutlet",o),d(2),C("ngTemplateOutlet",o),d(2),C("ngTemplateOutlet",o)}},dependencies:[ye],styles:[".mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}"],encapsulation:2,changeDetection:0})}return e})();var Oe=(()=>{class e{static \u0275fac=function(r){return new(r||e)};static \u0275mod=ne({type:e});static \u0275inj=Y({imports:[we]})}return e})();var $e="app/demo/examples/",xe=(()=>{class e{constructor(){this.http=f(M),this.fileCache=new Map,this.loadFile("example.css")}getDemoFiles(t){let r=this.fileCache.get(t);return r||(r=this.http.get(`${$e}${t}.component.ts`,{responseType:"text"}).pipe(E(n=>this.loadAdditionnalFilesIfNecessary(n)),v(1)),this.fileCache.set(t,r),r)}loadAdditionnalFilesIfNecessary(t){let r=/'\.\/([\w-.]+\.\w+)'/g,n,o=[],s={"src/demo.ts":t};for(;n=r.exec(t);)o.push(this.loadFile(n[1]));return o.length?w(o).pipe(x(a=>p(p({},Object.assign({},...a)),s))):S(s)}loadFile(t){let r=this.fileCache.get(t);return r||(r=this.http.get(`${$e}${t}`,{responseType:"text"}).pipe(x(n=>({[`src/${t}`]:n})),v(1)),this.fileCache.set(t,r),r)}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var dt=["container"];function mt(e,i){e&1&&(m(0,"div",1),b(1,"mat-spinner")(2,"div"),u())}var Ut=(()=>{class e{constructor(t,r,n,o,s){this.zone=t,this.activatedRoute=r,this.demoFileLoaderService=n,this.http=o,this.changeDetectorRef=s,this.stackblitzContainer=ie.required("container"),this.loading=!0,this.projectbase$=w([this.http.get("assets/stackblitz/main.notts",{responseType:"text"}),this.http.get("assets/stackblitz/angular.json",{responseType:"text"})]).pipe(v(1))}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}ngAfterViewInit(){this.sub=this.activatedRoute.params.pipe(Q(()=>{this.loading=!0,this.changeDetectorRef.markForCheck()}),E(t=>w([this.projectbase$,this.demoFileLoaderService.getDemoFiles(t.demoUrl),S(t.demoUrl)])),E(([t,r,n])=>K(this.openExample(t,r,n)).pipe(G(()=>{this.loading=!1,this.changeDetectorRef.markForCheck()})))).subscribe()}openExample(t,r,n){return $(this,null,function*(){if(this.vm){yield this.vm.applyFsDiff({create:r,destroy:[]});return}let o=je(t,r,n);yield this.zone.runOutsideAngular(()=>$(this,null,function*(){this.vm=yield Ie.embedProject(this.stackblitzContainer().nativeElement,o,{hideExplorer:!0,hideNavigation:!0,forceEmbedLayout:!0,openFile:"src/demo.ts"})}))})}static{this.\u0275fac=function(r){return new(r||e)(_(ee),_(be),_(xe),_(M),_(_e))}}static{this.\u0275cmp=T({type:e,selectors:[["ng-component"]],viewQuery:function(r,n){r&1&&ue(n.stackblitzContainer,dt,5),r&2&&he()},decls:3,vars:1,consts:[["container",""],[1,"loader"]],template:function(r,n){r&1&&(b(0,"div",null,0),k(2,mt,3,0,"div",1)),r&2&&(d(2),ce(n.loading?2:-1))},dependencies:[Oe,De],styles:[`[_nghost-%COMP%]{display:flex;flex:1;position:relative}[_nghost-%COMP%]     iframe{height:100%;width:100%;border:0}.loader[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}
/*# sourceMappingURL=stackblitz-edit.component-3DMTXAYM.css.map */`],changeDetection:0})}}return e})();export{Ut as StackblitzEditComponent};
//# sourceMappingURL=chunk-ZMVDCHJF.js.map
