import{A as p,B as d,C as c,D as g,E as x,I as J,J as K,K as $,L as W,M as E,N as Y,O as q,P as Q,Q as X,R as Z,S as ee,T as te,U as ie,V as ne,W as ae,X as oe,aa as A,ba as re,c as R,ca as _,d as G,g as h,i as b,j as B,k as C,ka as y,la as I,ma as pe,n as a,na as le,oa as me,p as S,q as u,qa as se,r as e,s as t,t as w,u as v,v as i,w as s,x as m,y as L,z}from"./chunk-I6LEXP7I.js";var T=class r{nameLower="angular";nameUpper="ANGULAR  ";fullName="aNgUlAr jS ";customDate=new Date;static \u0275fac=function(o){return new(o||r)};static \u0275cmp=b({type:r,selectors:[["app-basics-page"]],decls:75,vars:51,consts:[["header","Pipes Basicos",1,"p-1"],[1,"grid"],[1,"col-12","md:col-4"],["header","uppercase"],["header","lowercase"],["header","titlecase"],[1,"col-12","md:col-6"],["header","Titulos"],["header","Date Formateada"]],template:function(o,n){o&1&&(e(0,"p-panel",0)(1,"p"),i(2,"Pipes incluidos en Angular - Usuaomente en el Common Module"),t()(),e(3,"div",1)(4,"div",2)(5,"p-card",3),i(6),p(7,"uppercase"),t()(),e(8,"div",2)(9,"p-card",4),i(10),p(11,"lowercase"),t()(),e(12,"div",2)(13,"p-card",5),i(14),p(15,"titlecase"),t()(),e(16,"div",6)(17,"p-card",7)(18,"ol")(19,"li"),i(20,"Fecha"),t(),e(21,"li"),i(22,"fecha | date"),t(),e(23,"li"),i(24,"fecha | date:'short'"),t(),e(25,"li"),i(26,"fecha | date:'long'"),t(),e(27,"li"),i(28,"fecha | date:'MMM'"),t(),e(29,"li"),i(30,"fecha | date:'MMM dd, yyyy'"),t()(),w(31,"hr"),e(32,"ol")(33,"li"),i(34,"fecha | date:'long':'GMT-6'"),t(),e(35,"li"),i(36,"fecha | date:'long':'GMT-4'"),t(),e(37,"li"),i(38,"fecha | date:'long':'':'es-HN'"),t(),e(39,"li"),i(40,"fecha | date:'long':'':'fr-CA'"),t()()()(),e(41,"div",6)(42,"p-card",8)(43,"ol")(44,"li"),i(45),t(),e(46,"li"),i(47),p(48,"date"),t(),e(49,"li"),i(50),p(51,"date"),t(),e(52,"li"),i(53),p(54,"date"),t(),e(55,"li"),i(56),p(57,"date"),t(),e(58,"li"),i(59),p(60,"date"),t()(),w(61,"hr"),e(62,"ol")(63,"li"),i(64),p(65,"date"),t(),e(66,"li"),i(67),p(68,"date"),t(),e(69,"li"),i(70),p(71,"date"),t(),e(72,"li"),i(73),p(74,"date"),t()()()()()),o&2&&(a(6),m(" ",d(7,13,n.nameUpper)," "),a(4),m(" ",d(11,15,n.nameLower)," "),a(4),m(" ",d(15,17,n.fullName)," "),a(31),m(" ",n.customDate," "),a(2),m(" ",d(48,19,n.customDate)," "),a(3),m(" ",c(51,21,n.customDate,"short")," "),a(3),m(" ",c(54,24,n.customDate,"long")," "),a(3),m(" ",c(57,27,n.customDate,"MMM")," "),a(3),m(" ",c(60,30,n.customDate,"MMM dd,yyyy")," "),a(5),s(g(65,33,n.customDate,"long","GMT-6")),a(3),s(g(68,37,n.customDate,"long","GMT-4")),a(3),s(x(71,41,n.customDate,"long","","es-CO")),a(3),s(x(74,46,n.customDate,"long","","fr-CA")))},dependencies:[_,y,Y,W,E,q]})};function fe(r,l){if(r&1&&(e(0,"li")(1,"b"),i(2),p(3,"titlecase"),t(),i(4),t()),r&2){let o=l.$implicit;a(2),m("",d(3,2,o.key),":"),a(2),m(" ",o.value," ")}}function ge(r,l){r&1&&(e(0,"pre"),i(1,"Resolviendo observable"),t())}function be(r,l){r&1&&(e(0,"pre"),i(1,"Resolviendo promesa"),t())}var M=class r{name="Alejandro";gender="male";invitationMap={male:"invitarlo",female:"invitarla"};changeClient(){this.name="Yurani",this.gender="female"}clients=["Maria","Pedro","Fernando","Hernando","Eduardo","Melissa","Natalia"];clientsMap={"=0":"no tenemos ning\xFAn cliente esperando.","=1":"tenemos un cliente esperando.","=2":"tenemos 2 personas esperando.",other:"tenemos # clientes esperando."};deleteClient(){this.clients.shift()}person={name:"Alejandro",age:27,address:"Tulua, Colombia"};myObservableTimer=R(2e3).pipe(G(l=>console.log("tap:",l)));promiseValue=new Promise((l,o)=>{setTimeout(()=>{l("Tenemos data en la promesa."),console.log("Tenemos data en la promesa."),this.person.name="Otro nombre"},3500)});static \u0275fac=function(o){return new(o||r)};static \u0275cmp=b({type:r,selectors:[["app-uncommon-page"]],decls:69,vars:59,consts:[["header","Pipes no tan comunes",1,"p-1"],[1,"grid"],[1,"col-12","md:col-6"],["legend","i18nSelect Pipe",3,"toggleable"],["label","Cambiar persona",3,"click"],["legend","i18nPlural Pipe",3,"toggleable"],["label","Borrar cliente",3,"click"],["legend","Slice Pipe",3,"toggleable"],["legend","Json Pipe",3,"toggleable"],["legend","KeyValue Pipe",3,"toggleable"],[4,"ngFor","ngForOf"],["legend","Async Pipe",3,"toggleable"],[4,"ngIf"]],template:function(o,n){o&1&&(e(0,"p-panel",0)(1,"p"),i(2," Pipes inclu\xEDdos en Angular - Usualmente en el Common Module "),t()(),e(3,"div",1)(4,"div",2)(5,"p-fieldset",3)(6,"p"),i(7),p(8,"i18nSelect"),t(),e(9,"p-button",4),v("click",function(){return n.changeClient()}),t()()(),e(10,"div",2)(11,"p-fieldset",5)(12,"p"),i(13),p(14,"i18nPlural"),t(),e(15,"p-button",6),v("click",function(){return n.deleteClient()}),t()()(),e(16,"div",2)(17,"p-fieldset",7)(18,"b"),i(19,"Original"),t(),e(20,"pre"),i(21),t(),e(22,"b"),i(23,"slice:0:2"),t(),e(24,"pre"),i(25),p(26,"slice"),t(),e(27,"b"),i(28,"slice:1:2"),t(),e(29,"pre"),i(30),p(31,"slice"),t(),e(32,"b"),i(33,"slice:1:3"),t(),e(34,"pre"),i(35),p(36,"slice"),t(),e(37,"b"),i(38,"slice:3:4"),t(),e(39,"pre"),i(40),p(41,"slice"),t(),e(42,"b"),i(43,"slice:0:-3"),t(),e(44,"pre"),i(45),p(46,"slice"),t()()(),e(47,"div",2)(48,"p-fieldset",8)(49,"pre"),i(50),p(51,"json"),t()()(),e(52,"div",2)(53,"p-fieldset",9)(54,"ul"),S(55,fe,5,4,"li",10),p(56,"keyvalue"),t()()(),e(57,"div",2)(58,"p-fieldset",11),S(59,ge,2,0,"pre",12),p(60,"async"),e(61,"pre"),i(62),p(63,"async"),t(),S(64,be,2,0,"pre",12),p(65,"async"),e(66,"pre"),i(67),p(68,"async"),t()()()()),o&2&&(a(5),u("toggleable",!0),a(2),L(" Saludos ",n.name,", es un placer ",c(8,21,n.gender,n.invitationMap)," a nuestro evento. "),a(4),u("toggleable",!0),a(2),m(" Actualmente ",c(14,24,n.clients.length,n.clientsMap)," "),a(4),u("toggleable",!0),a(4),s(n.clients),a(4),s(g(26,27,n.clients,0,2)),a(5),s(g(31,31,n.clients,1,2)),a(5),s(g(36,35,n.clients,1,3)),a(5),s(g(41,39,n.clients,3,4)),a(5),s(g(46,43,n.clients,0,-3)),a(3),u("toggleable",!0),a(2),s(d(51,47,n.person)),a(3),u("toggleable",!0),a(2),u("ngForOf",d(56,49,n.person)),a(3),u("toggleable",!0),a(),u("ngIf",!d(60,51,n.myObservableTimer)),a(3),s(d(63,53,n.myObservableTimer)),a(2),u("ngIf",!d(65,55,n.promiseValue)),a(3),s(d(68,57,n.promiseValue)))},dependencies:[J,K,I,pe,y,$,Z,ae,E,Q,X,ee]})};var F=class r{totalSells=25677895567e-4;percent=.4856;static \u0275fac=function(o){return new(o||r)};static \u0275cmp=b({type:r,selectors:[["app-numbers-page"]],decls:16,vars:14,consts:[["header","Pipes num\xE9ricos",1,"p-1"],[1,"grid"],[1,"col-12","md:col-4"],["header","Ventas Netas","subheader","del presente a\xF1o"],["header","Ventas Brutas","subheader","del presente a\xF1o"],["header","Ganancia porcentual","subheader","del presente a\xF1o"]],template:function(o,n){o&1&&(e(0,"p-panel",0)(1,"p"),i(2," Pipes inclu\xEDdos en Angular - Usualmente en el Common Module "),t()(),e(3,"div",1)(4,"div",2)(5,"p-card",3),i(6),p(7,"number"),t()(),e(8,"div",2)(9,"p-card",4),i(10),p(11,"currency"),t()(),e(12,"div",2)(13,"p-card",5),i(14),p(15,"percent"),t()()()),o&2&&(a(6),m(" ",c(7,3,n.totalSells+1235,"1.2-2")," "),a(4),m(" ",x(11,6,n.totalSells,"COP","symbol-narrow","1.4-4")," "),a(4),m(" ",c(15,11,n.percent,"1.2-2")," "))},dependencies:[_,y,te,ie,ne]})};var D=class r{transform(l,o=!1){return o?l.toUpperCase():l.toLowerCase()}static \u0275fac=function(o){return new(o||r)};static \u0275pipe=C({name:"toggleCase",type:r,pure:!0})};var N=class r{transform(l){return l?"vuela":"no vuela"}static \u0275fac=function(o){return new(o||r)};static \u0275pipe=C({name:"canFly",type:r,pure:!0})};var O=class r{transform(l,o){switch(o){case"name":return l.sort((n,f)=>n.name>f.name?1:-1);case"canFly":return l.sort((n,f)=>n.canFly>f.canFly?1:-1);case"color":return l.sort((n,f)=>n.color>f.color?1:-1);default:return l}}static \u0275fac=function(o){return new(o||r)};static \u0275pipe=C({name:"sortBy",type:r,pure:!0})};var Ce=()=>({"min-width":"50rem"});function Se(r,l){r&1&&(e(0,"tr")(1,"th"),i(2,"Nombre"),t(),e(3,"th"),i(4,"Vuela"),t(),e(5,"th"),i(6,"Color"),t()())}function Ee(r,l){if(r&1&&(e(0,"tr")(1,"td"),i(2),t(),e(3,"td"),i(4),p(5,"canFly"),p(6,"titlecase"),t(),e(7,"td"),i(8),t()()),r&2){let o=l.$implicit;a(2),s(o.name),a(2),s(d(6,5,d(5,3,o.canFly))),a(4),s(o.color)}}var k=class r{isUpperCase=!1;orderBy="";heroes=[{name:"Batman",canFly:!1,color:1},{name:"Superman",canFly:!0,color:2},{name:"Spiderman",canFly:!0,color:0},{name:"Iron Man",canFly:!0,color:0},{name:"Hulk",canFly:!1,color:3},{name:"Wolverine",canFly:!1,color:5},{name:"Captain America",canFly:!1,color:2},{name:"Thor",canFly:!0,color:4}];toggleUpperCase(){this.isUpperCase=!this.isUpperCase}changeOrder(l){this.orderBy=l}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=b({type:r,selectors:[["products-order"]],decls:18,vars:10,consts:[["header","Pipes personalizados",1,"p-1"],[1,"p-toolbar-group-start"],["label","ToogleCase","icon","pi pi-search",3,"click"],[1,"p-toolbar-group-end"],["label","Por nombre","icon","pi pi-sort","styleClass","p-button-success",1,"mr-2",3,"onClick"],["label","Por volar","icon","pi pi-sort","styleClass","p-button-danger",1,"mr-2",3,"onClick"],["label","Por color","icon","pi pi-sort","styleClass","p-button-help",1,"mr-2",3,"onClick"],[1,"grid"],[1,"col","mt-2"],["header","H\xE9roes"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"]],template:function(o,n){o&1&&(e(0,"p-panel",0)(1,"p"),i(2),p(3,"toggleCase"),t()(),e(4,"p-toolbar")(5,"div",1)(6,"p-button",2),v("click",function(){return n.toggleUpperCase()}),t()(),e(7,"div",3)(8,"p-button",4),v("onClick",function(){return n.changeOrder("name")}),t(),e(9,"p-button",5),v("onClick",function(){return n.changeOrder("canFly")}),t(),e(10,"p-button",6),v("onClick",function(){return n.changeOrder("color")}),t()()(),e(11,"div",7)(12,"div",8)(13,"p-panel",9)(14,"p-table",10),p(15,"sortBy"),S(16,Se,7,0,"ng-template",11)(17,Ee,9,7,"ng-template",12),t()()()()),o&2&&(a(2),m(" Pipes personalizados - creados por ",c(3,3,"nosotros",n.isUpperCase)," "),a(12),u("value",c(15,6,n.heroes,n.orderBy))("tableStyle",z(9,Ce)))},dependencies:[re,I,y,le,me,E,D,N,O]})};var xe=[{path:"",component:T},{path:"numbers",component:F},{path:"uncommon",component:M},{path:"custom",component:k},{path:"**",redirectTo:""}],U=class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=B({type:r});static \u0275inj=h({imports:[A.forChild(xe),A]})};var de=class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=B({type:r});static \u0275inj=h({imports:[oe,U,se]})};export{de as ProductsModule};