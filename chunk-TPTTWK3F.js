import{i as x,m as w,n as F}from"./chunk-SSRDN3DC.js";import{Ab as C,Bb as s,Ib as v,Wa as c,Xb as M,Yb as l,Zb as k,ha as u,nb as m,pb as a,sb as d,vb as y,wb as f,xb as g,yb as _,zb as h}from"./chunk-QWK6OLOI.js";import{f as p}from"./chunk-ZQQCSEKW.js";var q=()=>[3],L=e=>[e,40.66995747013945],O=()=>["!=","cluster",!0],T=()=>({"circle-color":"rgba(0,255,0,0.5)","circle-radius":20,"circle-blur":1});function D(e,t){if(e&1&&s(0,"mgl-layer",2),e&2){let i=t.$implicit;a("id",i.id)("type",i.type)("filter",i.filter)("paint",i.paint)}}function S(e,t){if(e&1&&(s(0,"mgl-geojson-source",1),g(1,D,1,4,"mgl-layer",2,f),s(3,"mgl-layer",3)),e&2){let i=v();a("data",i.earthquakes)("cluster",!0)("clusterMaxZoom",15)("clusterRadius",20),c(),_(i.clusterLayers),c(2),a("filter",l(6,O))("paint",l(7,T))}}var b=(()=>{let t=class t{ngOnInit(){return p(this,null,function*(){this.earthquakes=yield import("./chunk-7QD5PLJS.js");let n=[[0,"green"],[20,"orange"],[200,"red"]];this.clusterLayers=n.map((r,o)=>({type:"circle",id:`cluster-${o}`,paint:{"circle-color":r[1],"circle-radius":70,"circle-blur":1},filter:o===n.length-1?[">=","point_count",r[0]]:["all",[">=","point_count",r[0]],["<","point_count",n[o+1][0]]]}))})}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=u({type:t,selectors:[["showcase-demo"]],standalone:!0,features:[M],decls:2,vars:9,consts:[[3,"zoom","center","preserveDrawingBuffer"],["id","earthquakes",3,"data","cluster","clusterMaxZoom","clusterRadius"],["source","earthquakes",3,"id","type","filter","paint"],["id","unclustered-point","type","circle","source","earthquakes",3,"filter","paint"]],template:function(r,o){r&1&&(h(0,"mgl-map",0),m(1,S,4,8),C()),r&2&&(d("https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL"),a("zoom",l(6,q))("center",k(7,L,-103.59179687498357))("preserveDrawingBuffer",!0),c(),y(o.earthquakes?1:-1))},dependencies:[F,x,w],styles:[`[_nghost-%COMP%]{display:flex;flex:1}mgl-map[_ngcontent-%COMP%]{height:100%;width:100%}
/*# sourceMappingURL=examples-UPBTEGPO.css.map */`]});let e=t;return e})();export{b as HeatMapComponent};
//# sourceMappingURL=chunk-TPTTWK3F.js.map
