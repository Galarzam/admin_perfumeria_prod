(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-products-products-module"], {
    /***/
    "0DDq":
    /*!****************************************************************!*\
      !*** ./src/app/modules/products/_services/products.service.ts ***!
      \****************************************************************/

    /*! exports provided: ProductsService */

    /***/
    function DDq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
        return ProductsService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/config/config */
      "0np6");
      /* harmony import */


      var _auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../auth */
      "tmEo");

      var ProductsService = /*#__PURE__*/function () {
        function ProductsService(http, authservice) {
          _classCallCheck(this, ProductsService);

          this.http = http;
          this.authservice = authservice;
          this.isLoadingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.isLoading$ = this.isLoadingSubject.asObservable();
        }

        _createClass(ProductsService, [{
          key: "getInfo",
          value: function getInfo() {
            var _this = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Authorization': 'Bearer ' + this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/products/get_info";
            return this.http.get(URL, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "allProducts",
          value: function allProducts() {
            var _this2 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var LINK = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Authorization': 'Bearer ' + this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/products/all?page=" + page + LINK;
            return this.http.get(URL, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this2.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "showProduct",
          value: function showProduct(product_id) {
            var _this3 = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Authorization': 'Bearer ' + this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/products/show_product/" + product_id;
            return this.http.get(URL, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this3.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "createProduct",
          value: function createProduct(data) {
            var _this4 = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Authorization': 'Bearer ' + this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/products/add";
            return this.http.post(URL, data, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this4.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "updateProduct",
          value: function updateProduct(product_id, data) {
            var _this5 = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Authorization': 'Bearer ' + this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/products/update/" + product_id;
            return this.http.post(URL, data, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this5.isLoadingSubject.next(false);
            }));
          } // GALERIA DE IMAGENES DEL PRODUCTO

        }, {
          key: "addImagenProduct",
          value: function addImagenProduct(data) {
            var _this6 = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Authorization': 'Bearer ' + this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/products/imgs/add";
            return this.http.post(URL, data, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this6.isLoadingSubject.next(false);
            }));
          }
        }, {
          key: "deleteImagenProduct",
          value: function deleteImagenProduct(imagen_id) {
            var _this7 = this;

            this.isLoadingSubject.next(true);
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Authorization': 'Bearer ' + this.authservice.token
            });
            var URL = src_app_config_config__WEBPACK_IMPORTED_MODULE_4__["URL_SERVICIOS"] + "/products/imgs/delete/" + imagen_id;
            return this.http["delete"](URL, {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              return _this7.isLoadingSubject.next(false);
            }));
          }
        }]);

        return ProductsService;
      }();

      ProductsService.ɵfac = function ProductsService_Factory(t) {
        return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ProductsService,
        factory: ProductsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: _auth__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "264E":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/products/delete-product/delete-product.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: DeleteProductComponent */

    /***/
    function E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteProductComponent", function () {
        return DeleteProductComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DeleteProductComponent = /*#__PURE__*/function () {
        function DeleteProductComponent() {
          _classCallCheck(this, DeleteProductComponent);
        }

        _createClass(DeleteProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DeleteProductComponent;
      }();

      DeleteProductComponent.ɵfac = function DeleteProductComponent_Factory(t) {
        return new (t || DeleteProductComponent)();
      };

      DeleteProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeleteProductComponent,
        selectors: [["app-delete-product"]],
        decls: 2,
        vars: 0,
        template: function DeleteProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "delete-product works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteProductComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-product',
            templateUrl: './delete-product.component.html',
            styleUrls: ['./delete-product.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "4cR6":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/products/edit-product/delete-imagen-p/delete-imagen-p.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: DeleteImagenPComponent */

    /***/
    function cR6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DeleteImagenPComponent", function () {
        return DeleteImagenPComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../_services/products.service */
      "0DDq");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function DeleteImagenPComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function DeleteImagenPComponent_ng_container_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      var DeleteImagenPComponent = /*#__PURE__*/function () {
        function DeleteImagenPComponent(_productService, modal) {
          _classCallCheck(this, DeleteImagenPComponent);

          this._productService = _productService;
          this.modal = modal;
          this.imagen_ = null;
          this.ImagenE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.isLoading = false;
        }

        _createClass(DeleteImagenPComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLoading$ = this._productService.isLoading$;
          }
        }, {
          key: "delete",
          value: function _delete() {
            var _this8 = this;

            this._productService.deleteImagenProduct(this.imagen_.id).subscribe(function (resp) {
              console.log(resp);

              _this8.modal.close();

              _this8.ImagenE.emit(_this8.imagen_);
            });
          }
        }]);

        return DeleteImagenPComponent;
      }();

      DeleteImagenPComponent.ɵfac = function DeleteImagenPComponent_Factory(t) {
        return new (t || DeleteImagenPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]));
      };

      DeleteImagenPComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DeleteImagenPComponent,
        selectors: [["app-delete-imagen-p"]],
        inputs: {
          imagen_: "imagen_"
        },
        outputs: {
          ImagenE: "ImagenE"
        },
        decls: 17,
        vars: 4,
        consts: [[4, "ngIf"], [1, "modal-content"], [1, "modal-header"], ["id", "example-modal-sizes-title-lg", 1, "modal-title", "h4"], [1, "icon-2x", "text-dark-50", "fas", "fa-user-times", "mx-2"], [1, "overlay", "overlay-block", "cursor-default", "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "btn-elevate", "mr-2", 3, "click"], ["type", "submit", 1, "btn", "btn-danger", "btn-elevate", "mr-2", 3, "click"], [1, "progress", "progress-modal"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "bg-primary", 2, "width", "100%"], [1, "overlay-layer", "bg-transparent"], [1, "spinner", "spinner-lg", "spinner-success"]],
        template: function DeleteImagenPComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeleteImagenPComponent_ng_container_0_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DeleteImagenPComponent_ng_container_7_Template, 3, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\xBFESTAS SEGURO DE ELIMINAR ESTA IMAGEN?: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteImagenPComponent_Template_button_click_13_listener() {
              return ctx.modal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Cancel ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeleteImagenPComponent_Template_button_click_15_listener() {
              return ctx["delete"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " ELIMINAR ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Iliminar Imagen : ", ctx.imagen_.file_name, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading$);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.imagen_.file_name);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtaW1hZ2VuLXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeleteImagenPComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-delete-imagen-p',
            templateUrl: './delete-imagen-p.component.html',
            styleUrls: ['./delete-imagen-p.component.scss']
          }]
        }], function () {
          return [{
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
          }];
        }, {
          imagen_: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ImagenE: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "DZYb":
    /*!*****************************************************!*\
      !*** ./src/app/modules/products/products.module.ts ***!
      \*****************************************************/

    /*! exports provided: ProductsModule */

    /***/
    function DZYb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
        return ProductsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./products-routing.module */
      "ZasE");
      /* harmony import */


      var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./products.component */
      "nl5/");
      /* harmony import */


      var _add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-new-product/add-new-product.component */
      "fnIT");
      /* harmony import */


      var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-products/list-products.component */
      "lajE");
      /* harmony import */


      var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./edit-product/edit-product.component */
      "Y1ZY");
      /* harmony import */


      var _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./delete-product/delete-product.component */
      "264E");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ng-inline-svg */
      "e8Ap");
      /* harmony import */


      var src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/_metronic/shared/crud-table */
      "Br0f");
      /* harmony import */


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      "fB2i");

      var ProductsModule = /*#__PURE__*/_createClass(function ProductsModule() {
        _classCallCheck(this, ProductsModule);
      });

      ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProductsModule
      });
      ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProductsModule_Factory(t) {
          return new (t || ProductsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_12__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_13__["EditorModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, {
          declarations: [_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_4__["AddNewProductComponent"], _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_5__["ListProductsComponent"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"], _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_7__["DeleteProductComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_12__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_13__["EditorModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_4__["AddNewProductComponent"], _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_5__["ListProductsComponent"], _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_6__["EditProductComponent"], _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_7__["DeleteProductComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], ng_inline_svg__WEBPACK_IMPORTED_MODULE_11__["InlineSVGModule"], src_app_metronic_shared_crud_table__WEBPACK_IMPORTED_MODULE_12__["CRUDTableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_13__["EditorModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Y1ZY":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/products/edit-product/edit-product.component.ts ***!
      \*************************************************************************/

    /*! exports provided: EditProductComponent */

    /***/
    function Y1ZY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditProductComponent", function () {
        return EditProductComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/componets/notifications/noticy-alert/noticy-alert.component */
      "/rCd");
      /* harmony import */


      var _delete_imagen_p_delete_imagen_p_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./delete-imagen-p/delete-imagen-p.component */
      "4cR6");
      /* harmony import */


      var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toast-notifications */
      "7Dfe");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../_services/products.service */
      "0DDq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      "fB2i");

      function EditProductComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function EditProductComponent_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var categorie_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", categorie_r6.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](categorie_r6.name);
        }
      }

      function EditProductComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.imagen_previzualiza, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function EditProductComponent_tr_81_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProductComponent_tr_81_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var i_r8 = ctx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.removeTags(i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r7);
        }
      }

      function EditProductComponent_span_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("IMAGEN: ", ctx_r4.img_files.name, "");
        }
      }

      function EditProductComponent_tr_104_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProductComponent_tr_104_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var imagen__r11 = ctx.$implicit;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.removeImages(imagen__r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var imagen__r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", imagen__r11.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](imagen__r11.file_name);
        }
      }

      var _c0 = "advlist autolink lists link image charmap print preview anchor";
      var _c1 = "insertdatetime media table paste code help wordcount";

      var _c2 = function _c2() {
        return [_c0, "searchreplace visualblocks code fullscreen", _c1];
      };

      var _c3 = "undo redo | formatselect | bold italic backcolor | \n                        alignleft aligncenter alignright alignjustify | \n                        bullist numlist outdent indent | removeformat | help";

      var _c4 = function _c4(a2) {
        return {
          height: 250,
          language: "es",
          plugins: a2,
          toolbar: _c3
        };
      };

      var EditProductComponent = /*#__PURE__*/function () {
        function EditProductComponent(toaster, _productService, router, activerouter, modelService) {
          _classCallCheck(this, EditProductComponent);

          this.toaster = toaster;
          this._productService = _productService;
          this.router = router;
          this.activerouter = activerouter;
          this.modelService = modelService;
          this.title = null;
          this.sku = null;
          this.categorie_id = '';
          this.price_soles = '';
          this.price_usd = '';
          this.resumen = null;
          this.description = null;
          this.categories = [];
          this.text = null;
          this.tags = [];
          this.imagen_file = null;
          this.imagen_previzualiza = null;
          this.images_files = [];
          this.img_files = null;
          this.img_previzualizar = null;
          this.product_id = null;
          this.product = {
            title: ''
          };
          this.state = 1;
          this.stock = '';
        }

        _createClass(EditProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.isLoading$ = this._productService.isLoading$;
            this.activerouter.params.subscribe(function (resp) {
              _this9.product_id = resp["id"] || "";
            });

            this._productService.getInfo().subscribe(function (resp) {
              _this9.categories = resp.categories;
            });

            this._productService.showProduct(this.product_id).subscribe(function (resp) {
              console.log(resp);
              _this9.product = resp.product;
              _this9.title = _this9.product.title;
              _this9.sku = _this9.product.sku;
              _this9.categorie_id = _this9.product.categorie_id;
              _this9.price_soles = _this9.product.price_soles;
              _this9.price_usd = _this9.product.price_usd;
              _this9.resumen = _this9.product.resumen;
              _this9.description = _this9.product.description;
              _this9.tags = _this9.product.tags_a;
              _this9.imagen_previzualiza = _this9.product.imagen;
              _this9.images_files = _this9.product.images;
              _this9.stock = _this9.product.stock;
              _this9.state = _this9.product.state;
            });
          }
        }, {
          key: "loadServices",
          value: function loadServices() {
            var _this10 = this;

            this._productService.isLoadingSubject.next(true);

            setTimeout(function () {
              _this10._productService.isLoadingSubject.next(false);
            }, 50);
          }
        }, {
          key: "processFile",
          value: function processFile($event) {
            var _this11 = this;

            if ($event.target.files[0].type.indexOf("image") < 0) {
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'EL ARCHIVO CARGADO NO ES UNA IMAGEN'"
              });
              return;
            }

            this.imagen_file = $event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(this.imagen_file);

            reader.onloadend = function () {
              return _this11.imagen_previzualiza = reader.result;
            };

            this.loadServices();
          }
        }, {
          key: "addTags",
          value: function addTags() {
            this.tags.push(this.text);
            this.text = null;
          }
        }, {
          key: "removeTags",
          value: function removeTags(index) {
            this.tags.splice(index, 1);
          }
        }, {
          key: "addFile",
          value: function addFile($event) {
            var _this12 = this;

            if ($event.target.files[0].type.indexOf("image") < 0) {
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'EL ARCHIVO CARGADO NO ES UNA IMAGEN'"
              });
              return;
            }

            this.img_files = $event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(this.img_files);

            reader.onloadend = function () {
              return _this12.img_previzualizar = reader.result;
            };
          }
        }, {
          key: "addImages",
          value: function addImages() {
            var _this13 = this;

            if (!this.img_files) {
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'DEBES AGREGAR UNA IMAGEN'"
              });
              return;
            }

            var formaData = new FormData();
            formaData.append("product_id", this.product_id);
            formaData.append("file", this.img_files);

            this._productService.addImagenProduct(formaData).subscribe(function (resp) {
              _this13.img_files = null;
              _this13.img_previzualizar = null;

              _this13.images_files.unshift(resp.imagen);
            });
          }
        }, {
          key: "removeImages",
          value: function removeImages(imagen_) {
            var _this14 = this;

            // this.images_files.splice(index,1);
            var modalRef = this.modelService.open(_delete_imagen_p_delete_imagen_p_component__WEBPACK_IMPORTED_MODULE_2__["DeleteImagenPComponent"], {
              centered: true,
              size: 'sm'
            });
            modalRef.componentInstance.imagen_ = imagen_;
            modalRef.result.then(function () {}, function () {});
            modalRef.componentInstance.ImagenE.subscribe(function (resp) {
              var INDEX = _this14.images_files.findIndex(function (item) {
                return item.id == resp.id;
              });

              _this14.images_files.splice(INDEX, 1);
            });
          }
        }, {
          key: "createProduct",
          value: function createProduct() {
            var _this15 = this;

            if (!this.title || !this.sku || !this.categorie_id || !this.price_soles || !this.price_usd || !this.resumen || !this.description) {
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'TODOS LOS CAMPOS SON OBLIGATORIOS'"
              });
              return;
            }

            if (this.images_files.length == 0) {
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'Debes ingresar un conjunto de imagenes'"
              });
              return;
            }

            var formaData = new FormData();
            formaData.append("title", this.title);
            formaData.append("sku", this.sku);
            formaData.append("categorie_id", this.categorie_id);
            formaData.append("price_soles", this.price_soles);
            formaData.append("price_usd", this.price_usd);
            formaData.append("resumen", this.resumen);
            formaData.append("description", this.description);
            formaData.append("imagen_file", this.imagen_file);
            formaData.append("tags", this.tags);
            formaData.append("stock", this.stock);
            formaData.append("state", this.state); // let index = 0;
            // for (const imagen of this.images_files) {
            //   formaData.append("files["+index+"]",imagen.file);
            //   index++;
            // }

            this._productService.updateProduct(this.product_id, formaData).subscribe(function (resp) {
              console.log(resp);

              _this15.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "primary-'SE REGISTRO LOS CAMBIOS DEL PRODUCTO'"
              });
            });
          }
        }]);

        return EditProductComponent;
      }();

      EditProductComponent.ɵfac = function EditProductComponent_Factory(t) {
        return new (t || EditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]));
      };

      EditProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditProductComponent,
        selectors: [["app-edit-product"]],
        decls: 114,
        vars: 23,
        consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "icon-2x", "text-dark-50", "flaticon-bag", "mx-2"], [1, "card-toolbar"], [1, "card-body"], [4, "ngIf"], [1, "form-group", "row"], [1, "col-5"], [1, "form-label"], ["type", "text", "name", "title", "placeholder", "Nombre", "autocomplete", "off", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "col-3"], ["type", "text", "name", "sku", "placeholder", "SKU", "autocomplete", "off", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], ["name", "categorie_id", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], ["value", ""], [4, "ngFor", "ngForOf"], ["type", "text", "name", "price_pen", "placeholder", "100", "autocomplete", "off", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "price_usd", "placeholder", "200", "autocomplete", "off", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "col-2"], ["value", "1"], ["value", "2"], ["value", "3"], [1, "col-4"], [1, "row"], [1, "col-12"], [1, "custom-file"], ["type", "file", "id", "customFile", "accept", ".jpeg, .bmp, .jpg, .png, .gif, .webp", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], ["class", "col-12 py-2", 4, "ngIf"], ["name", "descriptions", "placeholder", "", "rows", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-6"], [3, "ngModel", "init", "ngModelChange"], [1, "d-flex"], ["type", "text", "name", "TAGS", "placeholder", "Nombre", "autocomplete", "off", 1, "form-control", "form-control-solid", "form-control-lg", "w-50", 3, "ngModel", "ngModelChange"], [1, "ml-5", "btn", "btn-sm", "btn-primary", 3, "click"], [1, "table-responsive", "w-50"], ["id", "kt_advance_table_widget_1", 1, "table", "table-head-custom", "table-vertical-center"], [1, "text-left"], [1, "table-responsive", "w-100"], ["type", "number", "name", "stock", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-md", "btn-primary", 3, "click"], [1, "spinner", "spinner-primary", "ml-5"], [3, "value"], [1, "col-12", "py-2"], ["alt", "", 1, "w-100", 3, "src"], [1, "ml-5", "btn", "btn-sm", "btn-danger", 3, "click"], ["alt", "", 1, "w-50", 3, "src"]],
        template: function EditProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditProductComponent_ng_container_8_Template, 2, 0, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nombre del producto: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SKU: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.sku = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "CATEGORIA : *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_select_ngModelChange_22_listener($event) {
              return ctx.categorie_id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ninguno");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EditProductComponent_ng_container_25_Template, 3, 2, "ng-container", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "PRECIO EN PEN: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.price_soles = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "PRECIO EN USD: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.price_usd = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "ESTADO DEL PRODUCTO : *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_select_ngModelChange_38_listener($event) {
              return ctx.state = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " DEMO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " PUBLICO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " BLOQUEADO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "IMAGEN DE PORTADA: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditProductComponent_Template_input_change_51_listener($event) {
              return ctx.processFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Elija el archivo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EditProductComponent_div_54_Template, 2, 1, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "RESUMEN DEL PRODUCTO: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "textarea", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_textarea_ngModelChange_59_listener($event) {
              return ctx.resumen = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "DESCRIPCI\xD3N DEL PRODUCTO: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "editor", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_editor_ngModelChange_63_listener($event) {
              return ctx.description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "ETIQUETAS: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_input_ngModelChange_69_listener($event) {
              return ctx.text = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProductComponent_Template_button_click_70_listener() {
              return ctx.addTags();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "table", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "PALABRA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "ACCI\xD3N");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, EditProductComponent_tr_81_Template, 6, 1, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "IMAGENES: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditProductComponent_Template_input_change_87_listener($event) {
              return ctx.addFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Choose file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProductComponent_Template_button_click_90_listener() {
              return ctx.addImages();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, EditProductComponent_span_92_Template, 3, 1, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "table", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "IMAGEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "NOMBRE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "ACCI\xD3N");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, EditProductComponent_tr_104_Template, 8, 2, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Stock: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditProductComponent_Template_input_ngModelChange_109_listener($event) {
              return ctx.stock = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditProductComponent_Template_button_click_112_listener() {
              return ctx.createProduct();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "EDITAR PRODUCTO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" EDITAR PRODUCTO : ", ctx.product.title, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 18, ctx.isLoading$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sku);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.categorie_id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price_soles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price_usd);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagen_previzualiza);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resumen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description)("init", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.img_files);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images_files);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stock);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_9__["EditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NumberValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2R1Y3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditProductComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-product',
            templateUrl: './edit-product.component.html',
            styleUrls: ['./edit-product.component.scss']
          }]
        }], function () {
          return [{
            type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_3__["Toaster"]
          }, {
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZasE":
    /*!*************************************************************!*\
      !*** ./src/app/modules/products/products-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: ProductsRoutingModule */

    /***/
    function ZasE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
        return ProductsRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-new-product/add-new-product.component */
      "fnIT");
      /* harmony import */


      var _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-products/list-products.component */
      "lajE");
      /* harmony import */


      var _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./edit-product/edit-product.component */
      "Y1ZY");
      /* harmony import */


      var _products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./products.component */
      "nl5/");

      var routes = [{
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_5__["ProductsComponent"],
        children: [{
          path: 'add-product',
          component: _add_new_product_add_new_product_component__WEBPACK_IMPORTED_MODULE_2__["AddNewProductComponent"]
        }, {
          path: 'list-product',
          component: _list_products_list_products_component__WEBPACK_IMPORTED_MODULE_3__["ListProductsComponent"]
        }, {
          path: 'edit-product/:id',
          component: _edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_4__["EditProductComponent"]
        }, {
          path: '',
          redirectTo: 'add-product',
          pathMatch: 'full'
        }, {
          path: '**',
          redirectTo: 'add-product',
          pathMatch: 'full'
        }]
      }];

      var ProductsRoutingModule = /*#__PURE__*/_createClass(function ProductsRoutingModule() {
        _classCallCheck(this, ProductsRoutingModule);
      });

      ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProductsRoutingModule
      });
      ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProductsRoutingModule_Factory(t) {
          return new (t || ProductsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "fB2i":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js ***!
      \************************************************************************************************/

    /*! exports provided: EditorComponent, EditorModule, TINYMCE_SCRIPT_SRC, ɵa */

    /***/
    function fB2i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorComponent", function () {
        return EditorComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditorModule", function () {
        return EditorModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TINYMCE_SCRIPT_SRC", function () {
        return TINYMCE_SCRIPT_SRC;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return Events;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /**
       * Copyright (c) 2017-present, Ephox, Inc.
       *
       * This source code is licensed under the Apache 2 license found in the
       * LICENSE file in the root directory of this source tree.
       *
       */


      function EditorComponent_ng_template_0_Template(rf, ctx) {}

      var getTinymce = function getTinymce() {
        var w = typeof window !== 'undefined' ? window : undefined;
        return w && w.tinymce ? w.tinymce : null;
      };

      var ɵ0$2 = getTinymce;

      var Events = /*#__PURE__*/_createClass(function Events() {
        _classCallCheck(this, Events);

        this.onBeforePaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onCut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDblclick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragGesture = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDragOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocusIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onFocusOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyPress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onKeyUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseLeave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeAddUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeRenderUI = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onBeforeSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClearUndos = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeactivate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDirty = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onExecCommand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onGetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onInitNgModel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLoadContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNodeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPostProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPostRender = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPreInit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPreProcess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onProgressState = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRedo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onReset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onResizeEditor = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSaveContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSetAttrib = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onObjectResizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onObjectResized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onObjectSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSetContent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onUndo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onVisualAid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      });

      Events.ɵfac = function Events_Factory(t) {
        return new (t || Events)();
      };

      Events.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: Events,
        outputs: {
          onBeforePaste: "onBeforePaste",
          onBlur: "onBlur",
          onClick: "onClick",
          onContextMenu: "onContextMenu",
          onCopy: "onCopy",
          onCut: "onCut",
          onDblclick: "onDblclick",
          onDrag: "onDrag",
          onDragDrop: "onDragDrop",
          onDragEnd: "onDragEnd",
          onDragGesture: "onDragGesture",
          onDragOver: "onDragOver",
          onDrop: "onDrop",
          onFocus: "onFocus",
          onFocusIn: "onFocusIn",
          onFocusOut: "onFocusOut",
          onKeyDown: "onKeyDown",
          onKeyPress: "onKeyPress",
          onKeyUp: "onKeyUp",
          onMouseDown: "onMouseDown",
          onMouseEnter: "onMouseEnter",
          onMouseLeave: "onMouseLeave",
          onMouseMove: "onMouseMove",
          onMouseOut: "onMouseOut",
          onMouseOver: "onMouseOver",
          onMouseUp: "onMouseUp",
          onPaste: "onPaste",
          onSelectionChange: "onSelectionChange",
          onActivate: "onActivate",
          onAddUndo: "onAddUndo",
          onBeforeAddUndo: "onBeforeAddUndo",
          onBeforeExecCommand: "onBeforeExecCommand",
          onBeforeGetContent: "onBeforeGetContent",
          onBeforeRenderUI: "onBeforeRenderUI",
          onBeforeSetContent: "onBeforeSetContent",
          onChange: "onChange",
          onClearUndos: "onClearUndos",
          onDeactivate: "onDeactivate",
          onDirty: "onDirty",
          onExecCommand: "onExecCommand",
          onGetContent: "onGetContent",
          onHide: "onHide",
          onInit: "onInit",
          onInitNgModel: "onInitNgModel",
          onLoadContent: "onLoadContent",
          onNodeChange: "onNodeChange",
          onPostProcess: "onPostProcess",
          onPostRender: "onPostRender",
          onPreInit: "onPreInit",
          onPreProcess: "onPreProcess",
          onProgressState: "onProgressState",
          onRedo: "onRedo",
          onRemove: "onRemove",
          onReset: "onReset",
          onResizeEditor: "onResizeEditor",
          onSaveContent: "onSaveContent",
          onSetAttrib: "onSetAttrib",
          onObjectResizeStart: "onObjectResizeStart",
          onObjectResized: "onObjectResized",
          onObjectSelected: "onObjectSelected",
          onSetContent: "onSetContent",
          onShow: "onShow",
          onSubmit: "onSubmit",
          onUndo: "onUndo",
          onVisualAid: "onVisualAid"
        }
      });
      Events.propDecorators = {
        onBeforePaste: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBlur: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onContextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onCopy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onCut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDblclick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDragDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDragEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDragGesture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDragOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFocusIn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onFocusOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeyDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeyPress: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onKeyUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseEnter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseLeave: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseOut: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseOver: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onMouseUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onPaste: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onActivate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onAddUndo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBeforeAddUndo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBeforeExecCommand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBeforeGetContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBeforeRenderUI: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onBeforeSetContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClearUndos: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDeactivate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onDirty: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onExecCommand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onGetContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onInitNgModel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onLoadContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onNodeChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onPostProcess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onPostRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onPreInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onPreProcess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onProgressState: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onRedo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onRemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onReset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onResizeEditor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSaveContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSetAttrib: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onObjectResizeStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onObjectResized: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onObjectSelected: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSetContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onShow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onUndo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onVisualAid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      };
      var validEvents = ['onActivate', 'onAddUndo', 'onBeforeAddUndo', 'onBeforeExecCommand', 'onBeforeGetContent', 'onBeforeRenderUI', 'onBeforeSetContent', 'onBeforePaste', 'onBlur', 'onChange', 'onClearUndos', 'onClick', 'onContextMenu', 'onCopy', 'onCut', 'onDblclick', 'onDeactivate', 'onDirty', 'onDrag', 'onDragDrop', 'onDragEnd', 'onDragGesture', 'onDragOver', 'onDrop', 'onExecCommand', 'onFocus', 'onFocusIn', 'onFocusOut', 'onGetContent', 'onHide', 'onInit', 'onKeyDown', 'onKeyPress', 'onKeyUp', 'onLoadContent', 'onMouseDown', 'onMouseEnter', 'onMouseLeave', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onNodeChange', 'onObjectResizeStart', 'onObjectResized', 'onObjectSelected', 'onPaste', 'onPostProcess', 'onPostRender', 'onPreProcess', 'onProgressState', 'onRedo', 'onRemove', 'onReset', 'onResizeEditor', 'onSaveContent', 'onSelectionChange', 'onSetAttrib', 'onSetContent', 'onShow', 'onSubmit', 'onUndo', 'onVisualAid'];
      /**
       * Copyright (c) 2017-present, Ephox, Inc.
       *
       * This source code is licensed under the Apache 2 license found in the
       * LICENSE file in the root directory of this source tree.
       *
       */

      var bindHandlers = function bindHandlers(ctx, editor) {
        var allowedEvents = getValidEvents(ctx);
        allowedEvents.forEach(function (eventName) {
          var eventEmitter = ctx[eventName];
          editor.on(eventName.substring(2), function (event) {
            return ctx.ngZone.run(function () {
              return eventEmitter.emit({
                event: event,
                editor: editor
              });
            });
          });
        });
      };

      var ɵ0$1 = bindHandlers;

      var getValidEvents = function getValidEvents(ctx) {
        var ignoredEvents = parseStringProperty(ctx.ignoreEvents, []);
        var allowedEvents = parseStringProperty(ctx.allowedEvents, validEvents).filter(function (event) {
          return validEvents.includes(event) && !ignoredEvents.includes(event);
        });
        return allowedEvents;
      };

      var ɵ1$1 = getValidEvents;

      var parseStringProperty = function parseStringProperty(property, defaultValue) {
        if (typeof property === 'string') {
          return property.split(',').map(function (value) {
            return value.trim();
          });
        }

        if (Array.isArray(property)) {
          return property;
        }

        return defaultValue;
      };

      var ɵ2 = parseStringProperty;
      var unique = 0;

      var uuid = function uuid(prefix) {
        var date = new Date();
        var time = date.getTime();
        var random = Math.floor(Math.random() * 1000000000);
        unique++;
        return prefix + '_' + random + unique + String(time);
      };

      var ɵ3 = uuid;

      var isTextarea = function isTextarea(element) {
        return typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
      };

      var ɵ4 = isTextarea;

      var normalizePluginArray = function normalizePluginArray(plugins) {
        if (typeof plugins === 'undefined' || plugins === '') {
          return [];
        }

        return Array.isArray(plugins) ? plugins : plugins.split(' ');
      };

      var ɵ5 = normalizePluginArray;

      var mergePlugins = function mergePlugins(initPlugins, inputPlugins) {
        return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
      };

      var ɵ6 = mergePlugins; // eslint-disable-next-line @typescript-eslint/no-empty-function

      var noop = function noop() {};

      var ɵ7 = noop;

      var isNullOrUndefined = function isNullOrUndefined(value) {
        return value === null || value === undefined;
      };

      var ɵ8 = isNullOrUndefined;
      /**
       * Copyright (c) 2017-present, Ephox, Inc.
       *
       * This source code is licensed under the Apache 2 license found in the
       * LICENSE file in the root directory of this source tree.
       *
       */

      var createState = function createState() {
        return {
          listeners: [],
          scriptId: uuid('tiny-script'),
          scriptLoaded: false
        };
      };

      var ɵ0 = createState;

      var CreateScriptLoader = function CreateScriptLoader() {
        var state = createState();

        var injectScriptTag = function injectScriptTag(scriptId, doc, url, callback) {
          var scriptTag = doc.createElement('script');
          scriptTag.referrerPolicy = 'origin';
          scriptTag.type = 'application/javascript';
          scriptTag.id = scriptId;
          scriptTag.src = url;

          var handler = function handler() {
            scriptTag.removeEventListener('load', handler);
            callback();
          };

          scriptTag.addEventListener('load', handler);

          if (doc.head) {
            doc.head.appendChild(scriptTag);
          }
        };

        var load = function load(doc, url, callback) {
          if (state.scriptLoaded) {
            callback();
          } else {
            state.listeners.push(callback);

            if (!doc.getElementById(state.scriptId)) {
              injectScriptTag(state.scriptId, doc, url, function () {
                state.listeners.forEach(function (fn) {
                  return fn();
                });
                state.scriptLoaded = true;
              });
            }
          }
        }; // Only to be used by tests.


        var reinitialize = function reinitialize() {
          state = createState();
        };

        return {
          load: load,
          reinitialize: reinitialize
        };
      };

      var ɵ1 = CreateScriptLoader;
      var ScriptLoader = CreateScriptLoader();
      /* eslint-disable @typescript-eslint/no-parameter-properties */

      var TINYMCE_SCRIPT_SRC = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('TINYMCE_SCRIPT_SRC');
      var EDITOR_COMPONENT_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return EditorComponent;
        }),
        multi: true
      };

      var EditorComponent = /*#__PURE__*/function (_Events) {
        _inherits(EditorComponent, _Events);

        var _super = _createSuper(EditorComponent);

        function EditorComponent(elementRef, ngZone, platformId, tinymceScriptSrc) {
          var _this16;

          _classCallCheck(this, EditorComponent);

          _this16 = _super.call(this);
          _this16.platformId = platformId;
          _this16.tinymceScriptSrc = tinymceScriptSrc;
          _this16.cloudChannel = '5';
          _this16.apiKey = 'no-api-key';
          _this16.id = '';
          _this16.modelEvents = 'change input undo redo';
          _this16.onTouchedCallback = noop;
          _this16._elementRef = elementRef;
          _this16.ngZone = ngZone;
          _this16.initialise = _this16.initialise.bind(_assertThisInitialized(_this16));
          return _this16;
        }

        _createClass(EditorComponent, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(val) {
            this._disabled = val;

            if (this._editor && this._editor.initialized) {
              this._editor.setMode(val ? 'readonly' : 'design');
            }
          }
        }, {
          key: "editor",
          get: function get() {
            return this._editor;
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            if (this._editor && this._editor.initialized) {
              this._editor.setContent(isNullOrUndefined(value) ? '' : value);
            } else {
              this.initialValue = value === null ? undefined : value;
            }
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChangeCallback = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouchedCallback = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            if (this._editor) {
              this._editor.setMode(isDisabled ? 'readonly' : 'design');
            } else if (isDisabled) {
              this.init = Object.assign(Object.assign({}, this.init), {
                readonly: true
              });
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _a;

            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
              this.id = this.id || uuid('tiny-angular');
              this.inline = this.inline !== undefined ? this.inline !== false : !!((_a = this.init) === null || _a === void 0 ? void 0 : _a.inline);
              this.createElement();

              if (getTinymce() !== null) {
                this.initialise();
              } else if (this._element && this._element.ownerDocument) {
                ScriptLoader.load(this._element.ownerDocument, this.getScriptSrc(), this.initialise.bind(this));
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (getTinymce() !== null) {
              getTinymce().remove(this._editor);
            }
          }
        }, {
          key: "createElement",
          value: function createElement() {
            var tagName = typeof this.tagName === 'string' ? this.tagName : 'div';
            this._element = document.createElement(this.inline ? tagName : 'textarea');

            if (this._element) {
              if (document.getElementById(this.id)) {
                /* eslint no-console: ["error", { allow: ["warn"] }] */
                console.warn("TinyMCE-Angular: an element with id [".concat(this.id, "] already exists. Editors with duplicate Id will not be able to mount"));
              }

              this._element.id = this.id;

              if (isTextarea(this._element)) {
                this._element.style.visibility = 'hidden';
              }

              this._elementRef.nativeElement.appendChild(this._element);
            }
          }
        }, {
          key: "initialise",
          value: function initialise() {
            var _this17 = this;

            var finalInit = Object.assign(Object.assign({}, this.init), {
              target: this._element,
              inline: this.inline,
              readonly: this.disabled,
              plugins: mergePlugins(this.init && this.init.plugins, this.plugins),
              toolbar: this.toolbar || this.init && this.init.toolbar,
              setup: function setup(editor) {
                _this17._editor = editor;
                editor.on('init', function (_e) {
                  _this17.initEditor(editor);
                });
                bindHandlers(_this17, editor);

                if (_this17.init && typeof _this17.init.setup === 'function') {
                  _this17.init.setup(editor);
                }
              }
            });

            if (isTextarea(this._element)) {
              this._element.style.visibility = '';
            }

            this.ngZone.runOutsideAngular(function () {
              getTinymce().init(finalInit);
            });
          }
        }, {
          key: "getScriptSrc",
          value: function getScriptSrc() {
            return isNullOrUndefined(this.tinymceScriptSrc) ? "https://cdn.tiny.cloud/1/".concat(this.apiKey, "/tinymce/").concat(this.cloudChannel, "/tinymce.min.js") : this.tinymceScriptSrc;
          }
        }, {
          key: "initEditor",
          value: function initEditor(editor) {
            var _this18 = this;

            editor.on('blur', function () {
              return _this18.ngZone.run(function () {
                return _this18.onTouchedCallback();
              });
            });
            editor.on(this.modelEvents, function () {
              return _this18.ngZone.run(function () {
                return _this18.emitOnChange(editor);
              });
            });

            if (typeof this.initialValue === 'string') {
              this.ngZone.run(function () {
                editor.setContent(_this18.initialValue);

                if (editor.getContent() !== _this18.initialValue) {
                  _this18.emitOnChange(editor);
                }

                if (_this18.onInitNgModel !== undefined) {
                  _this18.onInitNgModel.emit(editor);
                }
              });
            }
          }
        }, {
          key: "emitOnChange",
          value: function emitOnChange(editor) {
            if (this.onChangeCallback) {
              this.onChangeCallback(editor.getContent({
                format: this.outputFormat
              }));
            }
          }
        }]);

        return EditorComponent;
      }(Events);

      EditorComponent.ɵfac = function EditorComponent_Factory(t) {
        return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TINYMCE_SCRIPT_SRC, 8));
      };

      EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditorComponent,
        selectors: [["editor"]],
        inputs: {
          cloudChannel: "cloudChannel",
          apiKey: "apiKey",
          id: "id",
          modelEvents: "modelEvents",
          disabled: "disabled",
          initialValue: "initialValue",
          init: "init",
          inline: "inline",
          outputFormat: "outputFormat",
          tagName: "tagName",
          plugins: "plugins",
          toolbar: "toolbar",
          allowedEvents: "allowedEvents",
          ignoreEvents: "ignoreEvents"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([EDITOR_COMPONENT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        template: function EditorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditorComponent_ng_template_0_Template, 0, 0, "ng-template");
          }
        },
        styles: ["[_nghost-%COMP%] { display: block; }"]
      });

      EditorComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [TINYMCE_SCRIPT_SRC]
          }]
        }];
      };

      EditorComponent.propDecorators = {
        cloudChannel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        apiKey: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        init: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        outputFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inline: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        tagName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        plugins: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toolbar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        modelEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        allowedEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        ignoreEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      };
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'editor',
            template: '<ng-template></ng-template>',
            providers: [EDITOR_COMPONENT_VALUE_ACCESSOR],
            styles: [':host { display: block; }']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [TINYMCE_SCRIPT_SRC]
            }]
          }];
        }, {
          cloudChannel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          apiKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          modelEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          init: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          inline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          outputFormat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tagName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          plugins: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          toolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          allowedEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ignoreEvents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();

      var EditorModule = /*#__PURE__*/_createClass(function EditorModule() {
        _classCallCheck(this, EditorModule);
      });

      EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: EditorModule
      });
      EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function EditorModule_Factory(t) {
          return new (t || EditorModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorModule, {
          declarations: function declarations() {
            return [EditorComponent];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]];
          },
          exports: function exports() {
            return [EditorComponent];
          }
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [EditorComponent],
            exports: [EditorComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=tinymce-tinymce-angular.js.map

      /***/

    },

    /***/
    "fnIT":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/products/add-new-product/add-new-product.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: AddNewProductComponent */

    /***/
    function fnIT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewProductComponent", function () {
        return AddNewProductComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/componets/notifications/noticy-alert/noticy-alert.component */
      "/rCd");
      /* harmony import */


      var ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toast-notifications */
      "7Dfe");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/products.service */
      "0DDq");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @tinymce/tinymce-angular */
      "fB2i");

      function AddNewProductComponent_ng_container_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function AddNewProductComponent_ng_container_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var categorie_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", categorie_r6.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](categorie_r6.name);
        }
      }

      function AddNewProductComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.imagen_previzualiza, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function AddNewProductComponent_tr_71_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewProductComponent_tr_71_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var i_r8 = ctx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.removeTags(i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r7);
        }
      }

      function AddNewProductComponent_span_82_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Imagen: ", ctx_r4.img_files.name, "");
        }
      }

      function AddNewProductComponent_tr_94_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewProductComponent_tr_94_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var i_r12 = ctx.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.removeImages(i_r12);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var imagen__r11 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", imagen__r11.show, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", imagen__r11.file.name, " ");
        }
      }

      var _c0 = "advlist autolink lists link image charmap print preview anchor";
      var _c1 = "insertdatetime media table paste code help wordcount";

      var _c2 = function _c2() {
        return [_c0, "searchreplace visualblocks code fullscreen", _c1];
      };

      var _c3 = "undo redo | formatselect | bold italic backcolor | \n                        alignleft aligncenter alignright alignjustify | \n                        bullist numlist outdent indent | removeformat | help";

      var _c4 = function _c4(a2) {
        return {
          height: 250,
          language: "es",
          plugins: a2,
          toolbar: _c3
        };
      };

      var AddNewProductComponent = /*#__PURE__*/function () {
        function AddNewProductComponent(toaster, _productService) {
          _classCallCheck(this, AddNewProductComponent);

          this.toaster = toaster;
          this._productService = _productService;
          this.title = null;
          this.sku = null;
          this.categorie_id = '';
          this.price_soles = '';
          this.price_usd = '';
          this.stock = 0;
          this.resumen = null;
          this.description = null;
          this.state = '1';
          this.tags = [];
          this.text = null;
          this.categories = [];
          this.imagen_file = null;
          this.imagen_previzualiza = null;
          this.images_files = [];
          this.img_files = null;
          this.img_previzualizar = null;
        }

        _createClass(AddNewProductComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.isLoading$ = this._productService.isLoading$;

            this._productService.getInfo().subscribe(function (resp) {
              _this19.categories = resp.categories;
            });
          }
        }, {
          key: "loadServices",
          value: function loadServices() {
            var _this20 = this;

            this._productService.isLoadingSubject.next(true);

            setTimeout(function () {
              _this20._productService.isLoadingSubject.next(false);
            }, 50);
          }
        }, {
          key: "processFile",
          value: function processFile($event) {
            var _this21 = this;

            if ($event.target.files[0].type.indexOf("image") < 0) {
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'El Archivo Cargado No Es Una Imagen'"
              });
              return;
            }

            this.imagen_file = $event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(this.imagen_file);

            reader.onloadend = function () {
              return _this21.imagen_previzualiza = reader.result;
            };

            this.loadServices();
          }
        }, {
          key: "addTags",
          value: function addTags() {
            this.tags.push(this.text);
            this.text = null;
          }
        }, {
          key: "removeTags",
          value: function removeTags(index) {
            this.tags.splice(index, 1);
          }
        }, {
          key: "addFile",
          value: function addFile($event) {
            var _this22 = this;

            if ($event.target.files[0].type.indexOf("image") < 0) {
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'El Archivo Cargado No Es Una Imagen'"
              });
              return;
            }

            this.img_files = $event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(this.img_files);

            reader.onloadend = function () {
              return _this22.img_previzualizar = reader.result;
            };
          }
        }, {
          key: "addImages",
          value: function addImages() {
            this.images_files.push({
              file: this.img_files,
              show: this.img_previzualizar
            });
            this.img_files = null;
            this.img_previzualizar = null;
          }
        }, {
          key: "removeImages",
          value: function removeImages(index) {
            this.images_files.splice(index, 1);
          }
        }, {
          key: "createProduct",
          value: function createProduct() {
            var _this23 = this;

            if (!this.title || !this.sku || !this.categorie_id || !this.price_soles || !this.price_usd || !this.resumen || !this.description || !this.stock || !this.imagen_file) {
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'Todos los campos son obligatorios'"
              });
              return;
            }

            if (this.images_files.length == 0) {
              this.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "danger-'Debes ingresar un conjunto de imagenes'"
              });
              return;
            }

            var formaData = new FormData();
            formaData.append("title", this.title);
            formaData.append("sku", this.sku);
            formaData.append("categorie_id", this.categorie_id);
            formaData.append("price_soles", this.price_soles);
            formaData.append("price_usd", this.price_usd);
            formaData.append("resumen", this.resumen);
            formaData.append("description", this.description);
            formaData.append("imagen_file", this.imagen_file);
            formaData.append("tags", this.tags);
            formaData.append("stock", this.stock);
            var index = 0;

            var _iterator = _createForOfIteratorHelper(this.images_files),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var imagen = _step.value;
                formaData.append("files[" + index + "]", imagen.file);
                index++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this._productService.createProduct(formaData).subscribe(function (resp) {
              console.log(resp);

              _this23.toaster.open(src_app_componets_notifications_noticy_alert_noticy_alert_component__WEBPACK_IMPORTED_MODULE_1__["NoticyAlertComponent"], {
                text: "primary-'El Producto se Resgistro Correctamente'"
              });

              _this23.title = null;
              _this23.sku = null;
              _this23.categorie_id = null;
              _this23.price_soles = null;
              _this23.price_usd = null;
              _this23.resumen = null;
              _this23.description = null;
              _this23.imagen_file = null;
              _this23.imagen_previzualiza = null;
              _this23.tags = [];
              _this23.images_files = [];
              _this23.stock = null;
            });
          }
        }]);

        return AddNewProductComponent;
      }();

      AddNewProductComponent.ɵfac = function AddNewProductComponent_Factory(t) {
        return new (t || AddNewProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]));
      };

      AddNewProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddNewProductComponent,
        selectors: [["app-add-new-product"]],
        decls: 104,
        vars: 21,
        consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "icon-2x", "text-dark-50", "flaticon-bag", "mx-2"], [1, "card-toolbar"], [1, "card-body"], [4, "ngIf"], [1, "form-group", "row"], [1, "col-5"], [1, "form-label"], ["type", "text", "name", "title", "placeholder", "Ingrese un nombre", "autocomplete", "off", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "col-3"], ["type", "text", "name", "sku", "placeholder", "SKU", "autocomplete", "off", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], ["name", "categorie_id", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], ["value", ""], [4, "ngFor", "ngForOf"], ["type", "text", "name", "price_soles", "placeholder", "/S", "autocomplete", "off", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "price_usd", "placeholder", "$", "autocomplete", "off", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "col-4"], [1, "row"], [1, "col-12"], [1, "custom-file"], ["type", "file", "id", "customFile", "accept", ".jpeg, .bmp, .jpg, .png, .gif, .webp", 1, "custom-file-input", 3, "change"], ["for", "customFile", 1, "custom-file-label"], ["class", "col-12 py-2", 4, "ngIf"], ["name", "resumen", "rows", "4", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "ngModel", "init", "ngModelChange"], [1, "col-6"], [1, "d-flex"], ["type", "text", "name", "TASG", "placeholder", "Ingrese un nombre", "autocomplete", "off", 1, "form-control", "form-control-solid", "form-control-lg", "w-50", 3, "ngModel", "ngModelChange"], [1, "ml-5", "btn", "btn-sm", "btn-primary", 3, "click"], [1, "table-responsive", "w-50"], ["id", "kt_advance_table_widget_1", 1, "table", "table-head-custom", "table-vertical-center"], [1, "text-left"], [1, "table-responsive", "w-100"], ["type", "number", "name", "stock", 1, "form-control", "form-control-solid", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-md", "btn-primary", 3, "click"], [1, "spinner", "spinner-primary", "ml-5"], [3, "value"], [1, "col-12", "py-2"], ["alt", "", 1, "w-100", 3, "src"], [1, "ml-5", "btn", "btn-sm", "btn-danger", 3, "click"], ["alt", "", 1, "w-40", 3, "src"]],
        template: function AddNewProductComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Agregar Nuevo Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AddNewProductComponent_ng_container_8_Template, 2, 0, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nombres del Producto: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.title = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SKU: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.sku = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Categoria: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_select_ngModelChange_22_listener($event) {
              return ctx.categorie_id = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ninguno");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddNewProductComponent_ng_container_25_Template, 3, 2, "ng-container", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Precio en Soles: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.price_soles = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Precio en USD: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_input_ngModelChange_34_listener($event) {
              return ctx.price_usd = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Portada del producto: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddNewProductComponent_Template_input_change_41_listener($event) {
              return ctx.processFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Buscar Archivo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddNewProductComponent_div_44_Template, 2, 1, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Resumen del Producto: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "textarea", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_textarea_ngModelChange_49_listener($event) {
              return ctx.resumen = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Descripci\xF3n del Producto: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "editor", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_editor_ngModelChange_53_listener($event) {
              return ctx.description = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Etiquetas: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_input_ngModelChange_59_listener($event) {
              return ctx.text = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewProductComponent_Template_button_click_60_listener() {
              return ctx.addTags();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "table", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Palabras:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Accion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, AddNewProductComponent_tr_71_Template, 6, 1, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Imagenes: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddNewProductComponent_Template_input_change_77_listener($event) {
              return ctx.addFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Choose file");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewProductComponent_Template_button_click_80_listener() {
              return ctx.addImages();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, AddNewProductComponent_span_82_Template, 3, 1, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "table", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "tr", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Imagen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Accion");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, AddNewProductComponent_tr_94_Template, 8, 2, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Stock: *");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddNewProductComponent_Template_input_ngModelChange_99_listener($event) {
              return ctx.stock = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNewProductComponent_Template_button_click_102_listener() {
              return ctx.createProduct();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Cargar Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 16, ctx.isLoading$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sku);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.categorie_id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price_soles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.price_usd);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagen_previzualiza);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resumen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.description)("init", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.img_files);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.images_files);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stock);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_6__["EditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtbmV3LXByb2R1Y3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewProductComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-new-product',
            templateUrl: './add-new-product.component.html',
            styleUrls: ['./add-new-product.component.scss']
          }]
        }], function () {
          return [{
            type: ngx_toast_notifications__WEBPACK_IMPORTED_MODULE_2__["Toaster"]
          }, {
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lajE":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/products/list-products/list-products.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ListProductsComponent */

    /***/
    function lajE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListProductsComponent", function () {
        return ListProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/products.service */
      "0DDq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      function ListProductsComponent_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }
      }

      function ListProductsComponent_tr_44_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "DEMO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListProductsComponent_tr_44_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PUBLICO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ListProductsComponent_tr_44_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "BLOQUEADO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-image": a0
        };
      };

      var _c1 = function _c1(a1) {
        return ["/products/edit-product", a1];
      };

      function ListProductsComponent_tr_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ListProductsComponent_tr_44_span_14_Template, 2, 0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ListProductsComponent_tr_44_span_15_Template, 2, 0, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ListProductsComponent_tr_44_span_16_Template, 2, 0, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "g", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "rect", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var product_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, "url(" + product_r2.imagen + ")"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r2.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r2.categorie.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r2.price_soles, " PEN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r2.price_usd, " USD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r2.state == 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r2.state == 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_r2.state == 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, product_r2.id));
        }
      }

      var ListProductsComponent = /*#__PURE__*/function () {
        function ListProductsComponent(_productServices) {
          _classCallCheck(this, ListProductsComponent);

          this._productServices = _productServices;
          this.products = [];
          this.isLoading$ = null;
          this.search = null;
        }

        _createClass(ListProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isLoading$ = this._productServices.isLoadingSubject;
            this.allProducts();
          }
        }, {
          key: "allProducts",
          value: function allProducts() {
            var _this24 = this;

            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var LINK = "";

            if (this.search) {
              LINK = LINK + "&search=" + this.search;
            }

            this._productServices.allProducts(page, LINK).subscribe(function (resp) {
              console.log(resp);
              _this24.products = resp.products.data;
            });
          }
        }, {
          key: "reset",
          value: function reset() {
            this.search = null;
            this.allProducts();
          }
        }, {
          key: "edit",
          value: function edit(product) {}
        }, {
          key: "delete",
          value: function _delete(product) {}
        }]);

        return ListProductsComponent;
      }();

      ListProductsComponent.ɵfac = function ListProductsComponent_Factory(t) {
        return new (t || ListProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]));
      };

      ListProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListProductsComponent,
        selectors: [["app-list-products"]],
        decls: 45,
        vars: 7,
        consts: [[1, "card", "card-custom", "gutter-b"], [1, "card-header"], [1, "card-title"], [1, "card-label"], [1, "icon-2x", "text-dark-50", "flaticon2-box", "mx-2"], [1, "card-toolbar"], ["type", "button", "routerLink", "/products/add-product", 1, "btn", "btn-primary"], [1, "icon-2x", "text-white", "flaticon-add-circular-button"], [1, "card-body"], [4, "ngIf"], [1, "row"], [1, "col-6"], ["type", "text", "name", "search", "placeholder", "Buscar", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-text", "text-muted"], [1, "col-3"], ["placement", "top", 1, "btn", "btn-primary", "ml-2", 3, "ngbTooltip", "click"], [1, "icon", "text-white", "flaticon-search-1"], ["placement", "top", 1, "btn", "btn-dark", "ml-2", 3, "ngbTooltip", "click"], [1, "icon", "text-white", "flaticon-refresh"], [1, "table-responsive"], ["id", "kt_advance_table_widget_1", 1, "table", "table-head-custom", "table-vertical-center"], [1, "text-left"], [2, "min-width", "100px"], [1, "pr-0", "text-right", 2, "min-width", "150px"], [4, "ngFor", "ngForOf"], [1, "spinner", "spinner-primary", "ml-5"], [1, "symbol", "symbol-50", "flex-shrink-0", "mr-4"], [1, "symbol-label", 3, "ngStyle"], ["class", "label label-lg label-inline label-light-danger", 4, "ngIf"], ["class", "label label-lg label-inline label-light-success", 4, "ngIf"], ["class", "label label-lg label-inline label-light-warning", 4, "ngIf"], ["ngbTooltip", "Editar Producto", "ngbTooltipClass", "kt-tooltip", 1, "btn", "btn-icon", "btn-light", "btn-hover-primary", "btn-sm", "mx-1", 3, "routerLink"], [1, "svg-icon", "svg-icon-md", "svg-icon-primary"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "width", "24px", "height", "24px", "viewBox", "0 0 24 24", "version", "1.1"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["x", "0", "y", "0", "width", "24", "height", "24"], ["d", "M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z", "fill", "#000000", "fill-rule", "nonzero", "transform", "translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"], ["d", "M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z", "fill", "#000000", "fill-rule", "nonzero", "opacity", "0.3"], [1, "label", "label-lg", "label-inline", "label-light-danger"], [1, "label", "label-lg", "label-inline", "label-light-success"], [1, "label", "label-lg", "label-inline", "label-light-warning"]],
        template: function ListProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lista de Productos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nuevo Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListProductsComponent_ng_container_11_Template, 2, 0, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ListProductsComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.search = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "small", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Buscar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "producto por nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListProductsComponent_Template_button_click_21_listener() {
              return ctx.allProducts();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListProductsComponent_Template_button_click_23_listener() {
              return ctx.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "table", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Imagen");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Nombre del Producto");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Categoria");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Precio PEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Precio USD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Acci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ListProductsComponent_tr_44_Template, 25, 13, "tr", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 5, ctx.isLoading$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", "Filtro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-products',
            templateUrl: './list-products.component.html',
            styleUrls: ['./list-products.component.scss']
          }]
        }], function () {
          return [{
            type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nl5/":
    /*!********************************************************!*\
      !*** ./src/app/modules/products/products.component.ts ***!
      \********************************************************/

    /*! exports provided: ProductsComponent */

    /***/
    function nl5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
        return ProductsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ProductsComponent = /*#__PURE__*/function () {
        function ProductsComponent() {
          _classCallCheck(this, ProductsComponent);
        }

        _createClass(ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProductsComponent;
      }();

      ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
        return new (t || ProductsComponent)();
      };

      ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductsComponent,
        selectors: [["app-products"]],
        decls: 1,
        vars: 0,
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-products-products-module-es5.js.map