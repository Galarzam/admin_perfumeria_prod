!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{VC8i:function(e,i,c){"use strict";c.r(i),c.d(i,"SalesModule",function(){return _});var o,b=c("ofXK"),a=c("tyNb"),r=c("fXoL"),l=((o=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=r.Mb({type:o,selectors:[["app-sales"]],decls:1,vars:0,template:function(t,e){1&t&&r.Tb(0,"router-outlet")},directives:[a.l],styles:[""]}),o),s=c("1kSV");function d(t,e){if(1&t&&(r.Wb(0),r.Tb(1,"br"),r.Yb(2,"small"),r.Nc(3),r.Xb(),r.Tb(4,"br"),r.Yb(5,"small"),r.Nc(6),r.Xb(),r.Vb()),2&t){var n=r.mc().$implicit,i=r.mc();r.Fb(3),r.Pc("CUPON: ",n.code_cupon,""),r.Fb(3),r.Qc("PRECIO UNITARIO: ",n.precio_unitario," ",i.sale.currency_payment," ")}}function u(t,e){if(1&t&&(r.Yb(0,"tr"),r.Yb(1,"td"),r.Nc(2),r.Xb(),r.Yb(3,"td"),r.Tb(4,"img",13),r.Xb(),r.Yb(5,"td",14),r.Nc(6),r.Xb(),r.Yb(7,"td",14),r.Nc(8),r.Lc(9,d,7,3,"ng-container",15),r.Xb(),r.Yb(10,"td",14),r.Nc(11),r.Xb(),r.Tb(12,"td"),r.Xb()),2&t){var n=e.$implicit;r.Fb(2),r.Oc(n.title),r.Fb(2),r.sc("src",n.imagen,r.Ec),r.Fb(2),r.Oc(n.cantidad),r.Fb(2),r.Pc(" ",n.total," "),r.Fb(1),r.sc("ngIf",n.code_cupon),r.Fb(2),r.Oc(n.total)}}var h,p,f=((h=function(){function e(n){t(this,e),this.modal=n}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||h)(r.Sb(s.d))},h.\u0275cmp=r.Mb({type:h,selectors:[["app-detail-sales-list"]],inputs:{sale:"sale"},decls:27,vars:2,consts:[[1,"modal-content"],[1,"modal-header"],["id","example-modal-sizes-title-lg",1,"modal-title","h4"],[1,"icon-2x","text-dark-50","flaticon-file-1","mx-2"],[1,"overlay","overlay-block","cursor-default","modal-body"],[1,"row"],[1,"col-12"],[1,"table-responsive"],["id","kt_advance_table_widget_1",1,"table","table-head-custom","table-vertical-center"],[1,"text-left"],[4,"ngFor","ngForOf"],[1,"modal-footer"],["type","button",1,"btn","btn-light","btn-elevate","mr-2",3,"click"],["width","100","alt","","srcset","",3,"src"],[1,"text-nowrap"],[4,"ngIf"]],template:function(t,e){1&t&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Tb(3,"i",3),r.Nc(4),r.Xb(),r.Xb(),r.Yb(5,"div",4),r.Yb(6,"div",5),r.Yb(7,"div",6),r.Yb(8,"div",7),r.Yb(9,"table",8),r.Yb(10,"thead"),r.Yb(11,"tr",9),r.Yb(12,"th"),r.Nc(13,"PRODUCTO"),r.Xb(),r.Yb(14,"th"),r.Nc(15,"PORTADA"),r.Xb(),r.Yb(16,"th"),r.Nc(17,"CANTIDAD"),r.Xb(),r.Yb(18,"th"),r.Nc(19,"SUBTOTAL"),r.Xb(),r.Yb(20,"th"),r.Nc(21,"TOTAL"),r.Xb(),r.Xb(),r.Xb(),r.Yb(22,"tbody"),r.Lc(23,u,13,6,"tr",10),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Yb(24,"div",11),r.Yb(25,"button",12),r.ic("click",function(){return e.modal.dismiss()}),r.Nc(26," Cerrar "),r.Xb(),r.Xb(),r.Xb()),2&t&&(r.Fb(4),r.Pc(" Orden: ",e.sale.user.full_name," "),r.Fb(19),r.sc("ngForOf",e.sale.items))},directives:[b.m,b.n],styles:[""]}),h),v=c("tk/3"),m=c("2Vo4"),X=c("nYR2"),Y=c("0np6"),g=c("tmEo"),y=((p=function(){function e(n,i){t(this,e),this.http=n,this.authservice=i,this.isLoadingSubject=new m.a(!1),this.isLoading$=this.isLoadingSubject.asObservable()}return n(e,[{key:"allSales",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0;this.isLoadingSubject.next(!0);var i=new v.d({Authorization:"Bearer"+this.authservice.token});return this.http.post(Y.b+"/sales/all?page="+e,n,{headers:i}).pipe(Object(X.a)(function(){return t.isLoadingSubject.next(!1)}))}}]),e}()).\u0275fac=function(t){return new(t||p)(r.fc(v.b),r.fc(g.a))},p.\u0275prov=r.Ob({token:p,factory:p.\u0275fac,providedIn:"root"}),p),w=c("3Pt+");function k(t,e){1&t&&(r.Wb(0),r.Tb(1,"span",21),r.Vb())}function T(t,e){if(1&t){var n=r.Zb();r.Yb(0,"tr"),r.Yb(1,"td"),r.Nc(2),r.Xb(),r.Yb(3,"td"),r.Nc(4),r.Xb(),r.Yb(5,"td"),r.Nc(6),r.Xb(),r.Yb(7,"td"),r.Nc(8),r.Xb(),r.Yb(9,"td"),r.Nc(10),r.Xb(),r.Yb(11,"td"),r.Yb(12,"a",22),r.ic("click",function(){r.Cc(n);var t=e.$implicit;return r.mc().showDetail(t)}),r.Yb(13,"span",23),r.lc(),r.Yb(14,"svg",24),r.Yb(15,"g",25),r.Tb(16,"rect",26),r.Tb(17,"path",27),r.Tb(18,"path",28),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb(),r.Xb()}if(2&t){var i=e.$implicit;r.Fb(2),r.Oc(i.n_transaccion),r.Fb(2),r.Oc(i.method_payment),r.Fb(2),r.Oc(i.currency_total),r.Fb(2),r.Oc(i.user.full_name.toUpperCase()),r.Fb(2),r.Oc(i.total)}}var C,N,O,L=[{path:"",component:l,children:[{path:"lista-de-ordenes",component:(C=function(){function e(n,i){t(this,e),this._salesServices=n,this._modelService=i,this.SALES=[],this.isLoading$=null,this.search=null}return n(e,[{key:"ngOnInit",value:function(){this.isLoading$=this._salesServices.isLoadingSubject,this.allSales()}},{key:"allSales",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this._salesServices.allSales(e,{search:this.search}).subscribe(function(e){console.log(e),t.SALES=e.orders.data})}},{key:"reset",value:function(){this.search=null,this.allSales()}},{key:"showDetail",value:function(t){var e=this._modelService.open(f,{centered:!0,size:"md"});e.componentInstance.sale=t,e.result.then(function(){},function(){})}}]),e}(),C.\u0275fac=function(t){return new(t||C)(r.Sb(y),r.Sb(s.y))},C.\u0275cmp=r.Mb({type:C,selectors:[["app-sales-list"]],decls:40,vars:7,consts:[[1,"card","card-custom","gutter-b"],[1,"card-header"],[1,"card-title"],[1,"card-label"],[1,"icon-2x","text-dark-50","lista","de","flaticon","mx-2"],[1,"card-toolbar"],[1,"card-body"],[4,"ngIf"],[1,"row"],[1,"col-6"],["type","text","name","search","placeholder","Buscar","value","",1,"form-control",3,"ngModel","ngModelChange"],[1,"form-text","text-muted"],[1,"col-3"],["placement","top",1,"btn","btn-primary","ml-2",3,"ngbTooltip","click"],[1,"icon","text-white","flaticon-search-1"],["placement","top",1,"btn","btn-dark","ml-2",3,"ngbTooltip","click"],[1,"icon","text-white","flaticon-refresh"],[1,"table-responsive"],["id","kt_advance_table_widget_1",1,"table","table-head-custom","table-vertical-center"],[1,"text-left"],[4,"ngFor","ngForOf"],[1,"spinner","spinner-primary","ml-5"],["ngbTooltip","Detalle de la Orden","ngbTooltipClass","kt-tooltip",1,"btn","btn-icon","btn-light","btn-hover-info","btn-sm",3,"click"],[1,"svg-icon","svg-icon-md","svg-icon-info"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","width","24px","height","24px","viewBox","0 0 24 24","version","1.1"],["stroke","none","stroke-width","1","fill","none","fill-rule","evenodd"],["x","0","y","0","width","24","height","24"],["d","M18.1446364,11.84388 L17.4471627,16.0287218 C17.4463569,16.0335568 17.4455155,16.0383857 17.4446387,16.0432083 C17.345843,16.5865846 16.8252597,16.9469884 16.2818833,16.8481927 L4.91303792,14.7811299 C4.53842737,14.7130189 4.23500006,14.4380834 4.13039941,14.0719812 L2.30560137,7.68518803 C2.28007524,7.59584656 2.26712532,7.50338343 2.26712532,7.4104669 C2.26712532,6.85818215 2.71484057,6.4104669 3.26712532,6.4104669 L16.9929851,6.4104669 L17.606173,3.78251876 C17.7307772,3.24850086 18.2068633,2.87071314 18.7552257,2.87071314 L20.8200821,2.87071314 C21.4717328,2.87071314 22,3.39898039 22,4.05063106 C22,4.70228173 21.4717328,5.23054898 20.8200821,5.23054898 L19.6915238,5.23054898 L18.1446364,11.84388 Z","fill","#000000","opacity","0.3"],["d","M6.5,21 C5.67157288,21 5,20.3284271 5,19.5 C5,18.6715729 5.67157288,18 6.5,18 C7.32842712,18 8,18.6715729 8,19.5 C8,20.3284271 7.32842712,21 6.5,21 Z M15.5,21 C14.6715729,21 14,20.3284271 14,19.5 C14,18.6715729 14.6715729,18 15.5,18 C16.3284271,18 17,18.6715729 17,19.5 C17,20.3284271 16.3284271,21 15.5,21 Z","fill","#000000"]],template:function(t,e){1&t&&(r.Yb(0,"div",0),r.Yb(1,"div",1),r.Yb(2,"div",2),r.Yb(3,"h3",3),r.Tb(4,"i",4),r.Nc(5," Listado de las Ordenes"),r.Xb(),r.Xb(),r.Tb(6,"div",5),r.Xb(),r.Yb(7,"div",6),r.Lc(8,k,2,0,"ng-container",7),r.nc(9,"async"),r.Yb(10,"div",8),r.Yb(11,"div",9),r.Yb(12,"input",10),r.ic("ngModelChange",function(t){return e.search=t}),r.Xb(),r.Yb(13,"small",11),r.Yb(14,"b"),r.Nc(15,"Buscar"),r.Xb(),r.Nc(16,"producto por nombre Cliente"),r.Xb(),r.Xb(),r.Xb(),r.Yb(17,"div",12),r.Yb(18,"button",13),r.ic("click",function(){return e.allSales()}),r.Tb(19,"i",14),r.Xb(),r.Yb(20,"button",15),r.ic("click",function(){return e.reset()}),r.Tb(21,"i",16),r.Xb(),r.Xb(),r.Xb(),r.Yb(22,"div",17),r.Yb(23,"table",18),r.Yb(24,"thead"),r.Yb(25,"tr",19),r.Yb(26,"th"),r.Nc(27,"Transacci\xf3n"),r.Xb(),r.Yb(28,"th"),r.Nc(29,"Metodo de pago"),r.Xb(),r.Yb(30,"th"),r.Nc(31,"Tipo de Moneda de la Venta"),r.Xb(),r.Yb(32,"th"),r.Nc(33,"Cliente"),r.Xb(),r.Yb(34,"th"),r.Nc(35,"Total"),r.Xb(),r.Yb(36,"th"),r.Nc(37,"Acci\xf3n"),r.Xb(),r.Xb(),r.Xb(),r.Yb(38,"tbody"),r.Lc(39,T,19,5,"tr",20),r.Xb(),r.Xb(),r.Xb(),r.Xb()),2&t&&(r.Fb(8),r.sc("ngIf",r.oc(9,5,e.isLoading$)),r.Fb(4),r.sc("ngModel",e.search),r.Fb(6),r.sc("ngbTooltip","Filtro"),r.Fb(2),r.sc("ngbTooltip","Reset"),r.Fb(19),r.sc("ngForOf",e.SALES))},directives:[b.n,w.d,w.n,w.q,s.Y,b.m],pipes:[b.b],styles:[""]}),C)},{path:"",redirectTo:"lista-de-ordenes",pathMatch:"full"},{path:"**",redirectTo:"lista-de-ordenes",pathMatch:"full"}]}],S=((N=n(function e(){t(this,e)})).\u0275mod=r.Qb({type:N}),N.\u0275inj=r.Pb({factory:function(t){return new(t||N)},imports:[[a.k.forChild(L)],a.k]}),N),F=c("e8Ap"),x=c("Br0f"),_=((O=n(function e(){t(this,e)})).\u0275mod=r.Qb({type:O}),O.\u0275inj=r.Pb({factory:function(t){return new(t||O)},imports:[[b.c,S,v.c,w.j,s.A,w.t,F.b,x.a,s.z,s.r]]}),O)}}])}();