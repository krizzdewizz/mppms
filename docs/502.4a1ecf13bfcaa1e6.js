"use strict";(self.webpackChunkmppm=self.webpackChunkmppm||[]).push([[502],{502:(P,c,r)=>{r.r(c),r.d(c,{MarkerDetailPageModule:()=>M});var m=r(1048),s=r(9508),u=r(3957),a=r(1412),t=r(257),d=r(1038),p=r(4863),g=r(8321);let k=(()=>{class n{constructor(e,i,o){this.activatedRoute=e,this.tracksService=i,this.nav=o}ngOnInit(){const{paramMap:e}=this.activatedRoute.snapshot;this.trackIndex=Number(e.get("trackIndex")),this.track=this.tracksService.tracks[this.trackIndex];const i=Number(e.get("markerIndex"));this.marker=this.track.markers[i],this.title=this.marker.title}ngAfterViewInit(){setTimeout(()=>this.ionInput.setFocus(),1e3)}save(){this.marker.title=this.title,this.tracksService.saveTracks(),this.nav.back()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.gz),t.Y36(d.X),t.Y36(a.SH))},n.\u0275cmp=t.Xpm({type:n,selectors:[["mppm-marker-detail"]],viewQuery:function(e,i){if(1&e&&t.Gf(a.pK,5),2&e){let o;t.iGM(o=t.CRH())&&(i.ionInput=o.first)}},decls:15,vars:13,consts:[[1,"marker-detail-content"],["clear-input","",3,"placeholder","ngModel","ngModelChange"],[1,"save",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons"),t._UZ(3,"ion-back-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.ALo(6,"xlate"),t.ALo(7,"marker"),t.qZA()()(),t.TgZ(8,"ion-content")(9,"div",0)(10,"ion-input",1),t.NdJ("ngModelChange",function(f){return i.title=f}),t.ALo(11,"xlate"),t.qZA(),t.TgZ(12,"ion-button",2),t.NdJ("click",function(){return i.save()}),t._uU(13),t.ALo(14,"xlate"),t.qZA()()()),2&e&&(t.xp6(5),t.AsE("",t.lcZ(6,5,"C_MARKER")," ",t.lcZ(7,7,null==i.marker?null:i.marker.value),""),t.xp6(5),t.Q6J("placeholder",t.lcZ(11,9,"C_DESCRIPTION"))("ngModel",i.title),t.xp6(3),t.Oqu(t.lcZ(14,11,"C_SAVE")))},directives:[a.Gu,a.sr,a.Sm,a.oU,a.cs,a.wd,a.W2,a.pK,a.j9,s.JJ,s.On,a.YG],pipes:[p.j,g.x],styles:[".marker-detail-content[_ngcontent-%COMP%]{padding:16px;display:grid}.save[_ngcontent-%COMP%]{margin-top:20px}"]}),n})();var h=r(9174);const v=[{path:"",component:k}];let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,h.q,s.u5,a.Pc,u.Bz.forChild(v)]]}),n})()}}]);