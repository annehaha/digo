var HOST = "/digo";
angular.$ = function (object) {
    return object = angular.isString(object) ? document.querySelectorAll(object) : object,
        angular.element(object)
},
    angular.element.prototype.parent = function (object) {
        if (!object)
            return angular.$(this[0].parentNode);
        for (var b, c = [].slice.call(document.querySelectorAll(object)), d = this[0]; "HTML" !== d.nodeName;) {
            d = d.parentNode;
            var e = c.indexOf(d);
            -1 === e || (b = d, d = document.documentElement)
        }
        return angular.$(b)
    },
    angular.element.prototype.param = function (object) {
        if (object) {
            var b = "";
            for (var index in object)
                / ^ \ $ /.test(index) || (b += encodeURIComponent(index) + "=" + encodeURIComponent(object[index]) + "&");
            return b.slice(0, -1)
        }
    },
    angular.element.prototype.toArray = function (object) {
        if (object) {

            var buildParams = function (prefix, obj, add) {
                var name;

                if (typeof obj == 'object') {
                    // Serialize object item.
                    for (name in obj) {
                        buildParams(prefix + "[" + name + "]", obj[name], add);
                    }
                } else {
                    // Serialize scalar item.
                    add(prefix, obj);
                }
            }

            var prefix,
                s = [],
                add = function (key, value) {
                    // If value is a function, invoke it and return its value
                    value = typeof value == 'function' ? value() : (value == null ? "" : value);
                    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
                };

            for (prefix in object) {
                buildParams(prefix, object[prefix], add);
            }

            // Return the resulting serialization
            return s.join("&").replace('/%20/g', "+");

        }
    },
    angular.element.prototype.find = function (object) {
        if (!object)
            return angular.$();
        var b = [].slice.call(document.querySelectorAll(object)),
            c = [].slice.call(this[0].getElementsByTagName("*")),
            d = [];
        return b.forEach(function (a) {
            -1 !== c.indexOf(a) && d.push(a)
        }),
            angular.$(d)
    };


var digo = angular.module('digo', ['ngRoute', 'ngResource', 'digo.services', 'digo.directives', 'digo.controllers', 'digo.filters']);

digo.config(["$routeProvider", "$locationProvider", "$interpolateProvider", "$httpProvider",function (route, location, interpolate,$httpProvider) {
    interpolate.startSymbol("[[").endSymbol("]]"),//修改绑定方式
        location.html5Mode(!0).hashPrefix('!'),
        route.when(HOST + "/index.html", {
            templateUrl: "tmpl/base_index.html",
            controller: "indexCtrl"
        }),
        route.when(HOST + "/delivery.html", {
            templateUrl: "tmpl/base_delivery.html",
            controller: "deliveryCtrl"
        }),
        route.when(HOST + "/address.html", {
            templateUrl: "tmpl/base_address.html",
            controller: "addressCtrl"
        }),
        route.when(HOST + "/sum.html", {
            templateUrl: "tmpl/base_sum.html",
            controller: "sumupCtrl"
        }),
        route.when(HOST + "/pay.html", {
            templateUrl: "tmpl/base_pay.html",
            controller: "payCtrl"
        }),
        route.when(HOST + "/order_success.html", {
            templateUrl: "tmpl/base_order_success.html",
            controller: "orderSuccessCtrl"
        }),
		route.when(HOST + "/order_fail.html", {
            templateUrl: "tmpl/base_order_fail.html",
            controller: "orderFailCtrl"
        }),
        route.when(HOST + "/order.html", {
            templateUrl: "tmpl/base_trade_order.html",
            controller: "tradeOrderCtrl"
        }),
        route.when(HOST + "/pack_detail.html", {
            templateUrl: "tmpl/base_pack_detail.html",
            controller: "packDetailCtrl"
        }),
        route.when(HOST + "/cart.html", {
            templateUrl: "tmpl/base_cart.html",
            controller: "cartCtrl"
        }),
		 route.when(HOST + "/coupon.html", {
            templateUrl: "tmpl/base_coupon.html",
            controller: "couponCtrl"
        }),
        route.when(HOST + "/trade.html", {
            templateUrl: "tmpl/base_order_list.html",
            controller: "tradeCtrl"
        }),
        route.when(HOST + "/recharge.html", {
            templateUrl: "tmpl/base_recharge.html",
            controller: "rechargeCtrl"
        }),
        route.when(HOST + "/pay_by_recharge.html", {
            templateUrl: "tmpl/base_pay_by_recharge.html",
            controller: "rechargeCtrl"
        }),
        route.when(HOST + "/out_area.html", {
            templateUrl: "tmpl/base_out_area.html",
            controller: "areaOutCtrl"
        }),
        route.when(HOST + "/404.html", {
            templateUrl: "tmpl/base_404.html"
        }),
        route.otherwise({
            redirectTo: HOST + "/404.html"
        })

        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
//        $httpProvider.defaults.useXDomain = true;
//        delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

/**
 * 服务
 */
angular.module('digo.services', [])
      //payment
    .factory("PayService",["$http",function($http){
        'use strict';
        var STORAGE_ID = 'pay';
        var store={
            getRemote: function (data) {//异步
                return $http({
                    method: 'POST',
                    url: "http://mydgsd.com/wxpayment/api/js_api_call.php",
                    data: angular.$().param(data)
                })
            },
            get: function () {
                return JSON.parse(sessionStorage.getItem(STORAGE_ID));
            },
            set: function (data) {
                sessionStorage.setItem(STORAGE_ID, JSON.stringify(data));
            }
        }
        return store;
    }])
    .factory("WechatService",["$http",function($http){
        'use strict';
        var STORAGE_ID = 'wechat';
        var store={
            getRemote: function (data) {//异步
                return $http({
                    method: 'POST',
                    url: "action/getUserinfo.php",
                    data: angular.$().param(data)
                })
            },
            get: function () {
			//	alert("In wechatService this is json string:"+sessionStorage.getItem(STORAGE_ID));
				try{
					var parse_by = JSON.parse(localStorage.getItem(STORAGE_ID));
					return parse_by;
				}catch(e){
					alert(e);
				}
                //return JSON.parse(sessionStorage.getItem(STORAGE_ID));
            },
            set: function (data) {
                localStorage.setItem(STORAGE_ID, JSON.stringify(data));
            }
        }
        return store;
    }])
	.factory("CouponService",["$http",function($http){
        'use strict';
        var STORAGE_ID = 'coupon';
        var store={
            getAll: function (data) {//异步
                return $http({
                    method: 'POST',
                    url: "http://mydgsd.com/api/coupon/couponAPI.php",//getAllcoupons
                   // data:angular.$().param({act:'getMyCoupons',token:'69ea1626674af13b8c215b5c4fa0e98a'})
					data: angular.$().param(angular.extend(data,{act:'getMyCoupons',token:'69ea1626674af13b8c215b5c4fa0e98a'}))
                })
            },
            get: function () {
                return JSON.parse(sessionStorage.getItem(STORAGE_ID));
            },
            set: function (data) {
                sessionStorage.setItem(STORAGE_ID, JSON.stringify(data));
				console.log(JSON.stringify(data));
            }
        }
        return store;
    }])
    .factory("PackService",["$http",function($http){
        'use strict';
        var STORAGE_ID = 'pack';
        var store={
            getAll: function () {//异步
                return $http({
                    method: 'POST',
                    url: "http://mydgsd.com/api/menu/menuAPI.php",//getAllPacks
                    data:angular.$().param({act:'getAllSetMeals',token:'dhklfao3jsdlaj89cvsadas476'})
                })
            },
            get: function () {
                return JSON.parse(sessionStorage.getItem(STORAGE_ID));
            },
            set: function (data) {
                sessionStorage.setItem(STORAGE_ID, JSON.stringify(data));
            }
        }
        return store;
    }])
    .factory("AllianceService",["$http",function($http){
        'use strict';
        var STORAGE_ID = 'allience';
        var store={
            getByAddr:function (data) {//异步
                return $http({
                    method: 'POST',
                    url: "action/getAllianceByAddr.php",
                    data: angular.$().param(data)
                })
            },
            get: function () {
                return JSON.parse(sessionStorage.getItem(STORAGE_ID));
            },
            set: function (data) {
                sessionStorage.setItem(STORAGE_ID, JSON.stringify(data));
            }
        }
        return store;
    }])
    .factory("SoupService",["$http",function($http){
        'use strict';
        var STORAGE_ID = 'soup';
        var store={
            get: function () {
                return JSON.parse(sessionStorage.getItem(STORAGE_ID));
            },
            set: function (data) {
                sessionStorage.setItem(STORAGE_ID, JSON.stringify(data));
            }
        }
        return store;
    }])
    .factory("AddressService",["$http",function($http){
        'use strict';
        var STORAGE_ID = 'address';
        var store={
            get: function () {
                return JSON.parse(sessionStorage.getItem(STORAGE_ID));
            },
            set: function (data) {
                sessionStorage.setItem(STORAGE_ID, JSON.stringify(data));
            }
        }
        return store;
    }])
	.factory("UserService",["$http",function($http){
        'use strict';
        var STORAGE_ID = 'user';
        var store={
            getAddListByWechat: function (data) {//异步
                return $http({
                    method: 'POST',
                    url: "http://mydgsd.com/api/member/userAPI.php",//getUserAllAddress
                   // data:angular.$().param({act:'getMyCoupons',token:'69ea1626674af13b8c215b5c4fa0e98a'})
					data: angular.$().param(angular.extend(data,{act:'getAddrList',token:'07e630ef9cd20355ceaac09a01e90038'}))
                })
            },
            get: function () {
                return JSON.parse(sessionStorage.getItem(STORAGE_ID));
            },
            set: function (data) {
                sessionStorage.setItem(STORAGE_ID, JSON.stringify(data));
				console.log(JSON.stringify(data));
            }
        }
        return store;
    }])
    .factory("OrderService",["$http",function($http){
        'use strict';
        var STORAGE_ID = 'order';
        var store={
            getById:function (data) {//异步
                return $http({
                    method: 'POST',
                    url: "http://mydgsd.com/api/order/orderAPI.php",//getOrderById
                    data: angular.$().param(angular.extend(data,{act:'getSelOrder',token:'31wdfaa311ef9cd20aa89dnkmdka476'}))
                })
            },
            getByWechat:function(data){
                return $http({
                    method: 'POST',
                    url: "http://mydgsd.com/api/order/orderAPI.php",//getOrderByWechat
                    data: angular.$().param(angular.extend(data,{act:'getMyOrders',token:'31wdfaa311ef9cd20aa89dnkmdka476'}))
                })
            },
            submit:function(data){
                return $http({
                    method: 'POST',
                    url: "http://mydgsd.com/api/order/orderAPI.php",//postOrder
                    data: angular.$().toArray(angular.extend(data,{act:'addOrder',token:'31wdfaa311ef9cd20aa89dnkmdka476'}))
                })
            },
            cancel:function(data){
                return $http({
                    method: 'POST',
                    url: "http://mydgsd.com/api/order/orderAPI.php",//cancelOrder
                    data: angular.$().param(angular.extend(data,{act:'cancelOrder',token:'31wdfaa311ef9cd20aa89dnkmdka476'}))
                })
            },
            checkOutOrder:function(data){
                return $http({
                    method: 'POST',
                    url: "http://mydgsd.com/api/order/orderAPI.php",//checkoutOrder
                    data: angular.$().param(angular.extend(data,{act:'checkOutOrder',token:'31wdfaa311ef9cd20aa89dnkmdka476'}))
                })
            },
            get: function () {
                return JSON.parse(localStorage.getItem(STORAGE_ID));
            },
            set: function (data) {
                localStorage.setItem(STORAGE_ID, JSON.stringify(data));
            }
        }
        return store;
    }])
    .factory("Page", [function () {
        return {
            title: "蒂锅时代",
            city: {}
        }
    }])
    .factory("Cart", function () {
        var cart = {
            pack: [],
            soup: [],
            list: [],//对象
           totalPieces: function () {
                var totalPieces = 0,
                    list = this.list;

                for (var index in list)
                    if(list[index]&&list[index].quantity) {
                        totalPieces += list[index].quantity;
                    }
                return totalPieces
            },
            totalFood: function () {
                var total = 0,
                    list = this.list,
                    pack = this.pack;
                for (var index in list)
                    if(list[index]&&list[index].quantity) {
                        total += list[index].quantity;
                    }
                for (var index in pack)
                    if(pack[index]&&pack[index].quantity) {
                        total += pack[index].quantity;
                    }
                return total
            },
            totalPack: function () {
                var totalPack = 0,
                    pack = this.pack;
                //if(pack){
                    for (var index in pack)
                    if(pack[index]&&pack[index].quantity) {
                        totalPack += pack[index].quantity;
                    }
                //}
                return totalPack
            },
            totalCost: function () {
                var totalCost = 0,
                    list = this.list;

                for (var index in list)
                    if(list[index]&&list[index].quantity&& list[index].price) {
                        totalCost += list[index].price * list[index].quantity;
                    }
                return /\./.test(totalCost) ? totalCost.toFixed(2) : totalCost
            },
            totalAllCost: function () {
                var totalCost = 0,
                    list = this.list,
                    pack=this.pack;
                for (var index in list)
                    if(list[index]&&list[index].quantity&& list[index].price) {
                        totalCost += list[index].price * list[index].quantity;
                    }
               for (var index in pack)
                   if(pack[index]&&pack[index].quantity) {
                       totalCost += pack[index].price * pack[index].quantity;
                   }
            //    var pack = this.pack;
                return totalCost
            },
            reset: function (c) {//清空
                sessionStorage.removeItem("cartList"),
                    sessionStorage.setItem("cartName", c);
                for (var index in this.list)
                    this.sync(index, angular.$("#id_" + index));
                this.list = {},
                   this.pack = {},
                    this.name = c
            },
            syncFood: function (index, element) {
                if (cart.list) {
                    var item = cart.list[index];
                    item && element[0] && (element.text(item.quantity), element.parent().find('[data-count="-1"]').addClass("ui_show"))
                }

            },
            syncPack: function (index, element) {
                if (cart.pack) {
                    var item = cart.pack[index];
                    item && element[0] && (element.text(item.quantity), element.parent().find('[data-count="-1"]').addClass("ui_show"))
                }

            },
            syncSoup: function (index, element) {
                if (cart.soup) {
                    var item = cart.soup[index];
                    item && element[0] && (element.text(item.quantity), element.parent().find('[data-count="-1"]').addClass("ui_show"))
                }
            }
        };
        return cart
    })
    .factory("CheckCart", ["$resource", function ($resource) {
        return $resource("action/getAllExtraItems.php")

    }])
    .factory("Extra", ["$resource", function ($resource) {
        return $resource("action/getAllExtras.php")
    }])
    .factory("ExtraItem", ["$resource", function ($resource) {
        return $resource("action/getAllExtraItems.php")

    }])
    .factory("PackDetail", ["$resource", function ($resource) {
        return $resource("action/getPackById.php")
    }])
;

/**
 * 控制器
 */
angular.module('digo.controllers', [])
    .controller("rootCtrl", ["$rootScope", "$scope", "$route", "$location", "$routeParams","Page","WechatService","Cart","PackService","SoupService",function ($rootScope, $scope, $route, $location, $routeParams,page,wechatService,cart,packService,soupService) {
		$rootScope.Page = page,
            $rootScope.$on("$routeChangeStart", function () {
                $rootScope.loading = 1
            }),
            $rootScope.$on("$routeChangeSuccess", function () {
                $rootScope.loading = 0;
            });

		
        $rootScope.wechat = wechatService.get();
	//	alert("In rootCtrl this is json object:"+$rootScope.wechat);

        var cartList = sessionStorage.getItem("cartList");//从sessionStorage获得cartList
        cartList && (cart.list = JSON.parse(cartList));//如果cartList不为空

        var pack = sessionStorage.getItem("pack");
        pack && (cart.pack = JSON.parse(pack));

   //     cart.pack=packService.get();
  //      cart.soup=soupService.get();

        //微信图文
        $rootScope.wechatData = {
            img: "http://mydgsd.com/images/favicon.ico",
            app: "wx2a416286e96100ed",
            link: function () {
                return $location.absUrl()
            },
            title: "蒂锅时代",
            desc: "火锅送上门"
        }
//        wechat("timeline", $rootScope.wechatData).on("friend", $rootScope.wechatData);
    }
    ])
	
    .controller('indexCtrl', ["$rootScope", "$scope", "$routeParams", "PackService", "AllianceService", "WechatService","SoupService","AddressService", "Cart", "Extra", "ExtraItem",function ($rootScope, $scope, $routeParams, packService, allianceService, wechatService,soupService,addressService, Cart, Extra, ExtraItem) {
		//alert("In indexCtrl this is code: "+$routeParams.code);
		
		$rootScope.wechat = wechatService.get();
		if (!$rootScope.wechat) {
		//    alert("In indexCtrl rootScope.wechat为空");
            var code = $routeParams.code,
                test = "0",//值非0测试，值0关闭测试
                postData = {
                    code: code,
                    test: test
                };
            if (1)
                wechatService.getRemote(postData).success(function (resp, status, headers, config) {
                    if (resp.errcode) {
                        alert(resp.errmsg+"?");
                    } else {
						console.log(resp);
                        wechatService.set(resp);
                    }
                });
            else return alert("未获取您的微信号,请刷新或重试!"), window.location = "404.html";
        }
		else {
			//console.log("In indexCtrl print $rootScope.wechat");
			console.log($rootScope.wechat);
		}
		
        packService.getAll().success(function (resp) {
            $scope.packs = resp.data;
			//console.log(resp);
        });

        var soupList;
        var packList;

        $scope.toggle = function (pack) {
            $scope["show" + pack.id] = !$scope["show" + pack.id]
                $scope.currentPack = {
                    id: pack.id,
                    title: pack.title,
                    price: pack.price
                //    isSel:1
                };
                soupList = [];
                for (i in  pack.soups)
                    soupList[i] = {
                        id: pack.soups[i].id,
                        name: pack.soups[i].title,
                        quantity: pack.soups[i].quantity
                    }
        }

        $scope.detail = function (pack) {
            window.location="pack_detail.html?id="+pack.id;
        }
        $scope.message = function (b, c) {
            $scope["invalid" + b] = $scope[c][b].$invalid
        };
		
		$scope.isInCart=function(pack) {
            for (var i in Cart.pack) {
                if (Cart.pack[i]&&Cart.pack[i].id == pack.id) {
                 // alert("已添加")
                    return true;
				}	
            }
            return false;
        }

        $scope.isExInCart=function(food) {
            for (var i in Cart.list) {
                if (Cart.list[i]&&Cart.list[i].id ==food.id) {
                    return true;
                }
            }
            return false;
        }

        $scope.addExtraCart=function(food) {
            if (!$scope.isExInCart(food)) {
               alert("添加"+food.product+"1份");
                Cart.list.push(
                    {
                        name: food.product,
                        id: food.id,
                        price: food.price,
                        quantity: 1

                    }
                );
            }
			else {
               alert("再添加"+food.product+"1份");
                 for (var i in Cart.list) {
                       if (Cart.list[i]&&Cart.list[i].id ==food.id) {
                           Cart.list[i].quantity+=1;
                       }
                   }
            }
            sessionStorage.setItem("cartList", JSON.stringify( Cart.list)),
            $scope.$broadcast("Cart:update", Cart);
			$scope.total=Cart.totalFood();
        }
		
        $scope.addCart=function(pack) {
            if (!$scope.isInCart(pack)) {
				alert("添加"+pack.title+"1份");
                $scope.total=Cart.totalFood();
                 Cart.pack.push(
                    {
                        title: pack.title,
                        id: pack.id,
                        price: pack.price,
                        quantity: 1
                    }
                 );
                Cart.soup.push(
                    {
						id: pack.soups.id,
                        name: pack.soups.title,
                        price: pack.soups.price,
                        quantity: pack.soups.quantity
                    })
            }
            else {
			    alert("再添加"+pack.title+"1份");
				for (var i in Cart.pack) {
                    if (Cart.pack[i]&&Cart.pack[i].id == pack.id) {
                       Cart.pack[i].quantity+=1;
                    }
                } 
			}
            sessionStorage.setItem("pack", JSON.stringify( Cart.pack)),
            sessionStorage.setItem("soup", JSON.stringify( Cart.soup)),
            $scope.$broadcast("Cart:update", Cart);
			$scope.total=Cart.totalFood();
        }
        $scope.total=Cart.totalFood();
		//ExtraItem.get({alliance: $scope.alliance.id}, function (result) {
        ExtraItem.get({}, function (result) {
            $scope.extraFood = result;
        });

//        //切换目录
//        var l;
//        $scope.itemShow = function (b) {
//            if (l !== b) {
//                l = b;
//                var c = b === $scope.itemLength ? "MenuItemHot" : "MenuItemNormal";
//                $scope.itemIndex = b,
//                    setTimeout(function () {
//                        $scope.menuScroll.refresh(),
//                            $scope.menuScroll.scrollTo(0, 0, 0)
//                    }, 100)
//            }
//        };
        var m = {
            click: !0,
            mouseWheel: !0
        };
        //滚动
        $scope.scrollSide = function () {
            new IScroll("#itemWrapper", m);
        };

        $scope.scrollMenu = function () {
            $scope.menuScroll = new IScroll("#packShow", m);
        }
    }])
	
    .controller('packDetailCtrl', ["$scope", "$location", "Page", "PackDetail", "Cart",
        function ($scope, $location, Page, PackDetail, Cart) {

            var packId    = $location.search().id || 0;

            PackDetail.get({ id: packId}, function (result) {

                $scope.packDetail = result;
                $scope.soups=  $scope.packDetail.soups;

            });
            $scope.isInCart=function() {
                for (var i in Cart.pack) {
                    if (Cart.pack[i]&&Cart.pack[i].id == $scope.packDetail.id) {
                      //  alert("已添加")
                        return true;
                    }
                }
                return false;
            }
            $scope.addCart=function() {
                if (!$scope.isInCart()) {
                    alert("已添加"+$scope.packDetail.title+"1份");
                    $scope.total = Cart.totalFood();
                    Cart.pack.push(
                        {
                            title: $scope.packDetail.title,
                            id: $scope.packDetail.id,
                            price: $scope.packDetail.price,
                            quantity: 1

                        }
                    );
                    Cart.soup.push(
                        {
                            id: $scope.packDetail.soups.id,
                            name: $scope.packDetail.soups.title,
                            price: $scope.packDetail.soups.price,
                            quantity: $scope.packDetail.soups.quantity
                        })
                }

               else {
				   alert("已添加"+$scope.packDetail.title+"1份");

                   for (var i in Cart.pack) {
                      
                       if (Cart.pack[i]&&Cart.pack[i].id == $scope.packDetail.id) {
                           Cart.pack[i].quantity+=1;
                       }
                   }
				   
			   }

              
                sessionStorage.setItem("pack", JSON.stringify(Cart.pack)),
                    sessionStorage.setItem("soup", JSON.stringify(Cart.soup)),
                    sessionStorage.setItem("cartList", JSON.stringify(Cart.list)),
                    $scope.$broadcast("Cart:update", Cart);

            }
            $scope.total=Cart.totalFood();
            //高度
            $scope.getWinHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            var m = {
                click: !0,
                mouseWheel: !0
            };
            $scope.scrollDetail = function () {
                new IScroll("#packWrapper", m);
            };

        }])

    .controller('addressCtrl', ["$rootScope", "$scope", "$routeParams", "PackService", "AllianceService", "WechatService","SoupService","AddressService", "Cart", "Extra", "ExtraItem",function ($rootScope, $scope, $routeParams, packService, allianceService, wechatService,soupService,addressService, Cart, Extra, ExtraItem) {
        if (!$rootScope.wechat) {
            var code = $routeParams.code,
                test = "0",//值非0测试，值0关闭测试
                postData = {
                    code: code,
                    test: test
                };
            if (code)
                wechatService.getRemote(postData).success(function (resp, status, headers, config) {
                    if (resp.errcode) {
                        alert(resp.errmsg);
                    } else {
                        wechatService.set(resp);
                    }
                });
            else return alert("未获取您的微信号,请刷新或重试!"),window.location="404.html";
        }

         $scope.addr = {
             address: "上海野生动物园",
             phone: "13073787819",
			 district: "徐汇区"
        }
        // $scope.getScope = function () {
            // return $scope;
        // }

        $scope.message = function (b, c) {
            $scope["invalid" + b] = $scope[c][b].$invalid
        };
        $scope.getAlliance = function () {
            if (!$scope.addr) return;
            allianceService.getByAddr({address:$scope.addr.address}).success(function(resp) {
                console.log(resp);
                if (resp.r)
                    $scope.allianceMsg = "提示：离您最近的门店为" + resp.data.name, $scope.alliance = resp.data;
                if (0 === resp.r)
                    $scope.allianceMsg = "提示：" + resp.msg;
                else if (0 === resp.data.inScope) {
                    var miles = resp.data.distance / 1000;
                    $scope.allianceMsg = "提示：离您最近的门店为" + resp.data.name + "，距离" + miles.toFixed() + "公里，不在配送范围内。";
                }
                else {
                    var miles = resp.data.distance / 1000;
                    var minutes = resp.data.time / 60;
                    $scope.allianceMsg = "提示：离您最近的门店为" + resp.data.name + "，距离" + miles.toFixed() + "公里，预计路程时间" + minutes.toFixed() + "分钟。";
                    $scope.alliance = {
                        id: resp.data.id,
                        name: resp.data.name
                    }
                }
            });
        };


        $scope.submit = function () {
            if (!$scope.alliance)
                allianceService.getByAddr({address:$scope.addr.address}).success(function(resp) {
                    console.log(resp);
				try{
                    if (resp.r)
                        $scope.allianceMsg = "提示：大人，离您最近的门店为" + resp.data.name, $scope.alliance = resp.data;
                    if (0 === resp.r)
                        $scope.allianceMsg = "提示：" + resp.msg;
                    else if (0 === resp.data.inScope) {
                        var miles = resp.data.distance / 1000;
                        $scope.allianceMsg = "提示：大人，离您最近的门店为" + resp.data.name + "，距离" + miles.toFixed() + "公里，不在配送范围内。";
                    }
                    else {
                        var miles = resp.data.distance / 1000;
                        var minutes = resp.data.time / 60;
                        $scope.allianceMsg = "提示：大人，离您最近的门店为" + resp.data.name + "，距离" + miles.toFixed() + "公里，预计路程时间" + minutes.toFixed() + "分钟。";
                        $scope.alliance = {
                            id: resp.data.id,
                            name: resp.data.name
                        };
//                        sessionStorage.setItem("currentAddr", JSON.stringify($scope.addr)),
//                            sessionStorage.setItem("currentAlliance", JSON.stringify($scope.alliance)),
//                            sessionStorage.setItem("pack", JSON.stringify($scope.currentPack)),
//                            sessionStorage.setItem("soup", JSON.stringify(soupList)),
                        addressService.set($scope.addr),
                       //     packService.set($scope.currentPack),
                            allianceService.set($scope.alliance),
                       //     soupService.set(soupList),
//                            $scope.$broadcast("Cart:update", Cart);
                            window.location = "delivery.html";
                    }
				}catch(e){
					$scope.allianceMsg = "";
					$scope.allianceMsgWrong="大人，地址请更详细些，方便我们尽快找到您！";
				}
                });
            else {
//                sessionStorage.setItem("currentAddr", JSON.stringify($scope.addr)),
//                            sessionStorage.setItem("currentAlliance", JSON.stringify($scope.alliance)),
//                            sessionStorage.setItem("pack", JSON.stringify($scope.currentPack)),
//                            sessionStorage.setItem("soup", JSON.stringify(soupList)),
                addressService.set($scope.addr),
                //    packService.set($scope.currentPack),
                    allianceService.set($scope.alliance),
               //     soupService.set(soupList),
//                            $scope.$broadcast("Cart:update", Cart);
                    window.location = "delivery.html";
            }
        };
    }])
	 .controller('sumupCtrl', ["$rootScope", "$scope", "$routeParams", "PackService", "AllianceService", "WechatService","SoupService","AddressService", "UserService","Cart", "Extra", "ExtraItem",function ($rootScope, $scope, $routeParams, packService, allianceService, wechatService,soupService,addressService, userService, Cart, Extra, ExtraItem) {
		 $rootScope.wechat = wechatService.get();
	   // if (!$rootScope.wechat) {
            // var code = $routeParams.code,
                // test = "0",//值非0测试，值0关闭测试
                // postData = {
                    // code: code,
                    // test: test
                // };
            // if (code)
                // wechatService.getRemote(postData).success(function (resp, status, headers, config) {
                    // if (resp.errcode) {
                        // alert(resp.errmsg);
                    // } else {
                        // wechatService.set(resp);
                    // }
                // });
            // else return alert("未获取您的微信号,请刷新或重试!"),window.location="404.html";
        // }
		//console.log($scope.addr);
		$scope.districts = [
			{name: '闵行区'},{name: '长宁区'},{name: '徐汇区'},{name: '浦东新区'},{name: '虹口区'},{name: '静安区'},{name: '普陀区'},{name: '闸北区'},{name: '杨浦区'},{name: '黄浦区'},{name: '青浦区'},{name: '宝山区'},{name: '金山区'},{name: '嘉定区'},{name: '卢湾区'},{name: '松江区'},{name: '南汇区'},{name: '奉贤区'}
		];
        //$scope.getScope = function () {
        //   return $scope;
        //}
		$scope.addr=addressService.get();
		if($scope.addr==null){
			$scope.addr = {
				address: "",
				phone: ""
			}
			//console.log($scope.addr);	
		}
		
        $scope.message = function (b, c) {
            $scope["invalid" + b] = $scope[c][b].$invalid
        };

		if($rootScope.wechat){//getUserAllAddressByWechat
			$scope.wechat = $rootScope.wechat,userService.getAddListByWechat({wechat: $scope.wechat ? $scope.wechat.openid : "onAC0t_R9CSTBY0w9C_g3R6d5ZlI" }).success(function (result) {
				if(0 != result.r)
					$rootScope.loading = !1,
					$scope.addrLists = result
				console.log(result)
			});
		}
		$scope.chooseAddr = function(address,phone){
			$scope.addr.address=address;
			$scope.addr.phone=phone;
			console.log($scope.addr);
		};
        $scope.getAlliance = function () {
            if (!$scope.addr) return;
            allianceService.getByAddr({address:$scope.addr.address}).success(function(resp) {
				console.log(resp);
			try{
                //if (resp.r)
                //    $scope.allianceMsg = "提示：大人，离您最近的门店为" + resp.data.name, $scope.alliance = resp.data;
                if (0 === resp.r)
                    $scope.allianceMsg = "提示：" + resp.msg;
                else if (0 === resp.data.inScope) {
                    $scope.allianceMsg = "提示：大人，离您最近的门店为" + resp.data.name + "。超出配送范围...";
					addressService.set($scope.addr);
                }
                else {
                    var miles = resp.data.distance / 1000;
                    var minutes = resp.data.time / 60;
                    $scope.allianceMsg = "提示：大人，离您最近的门店为" + resp.data.name + "，距离" + miles.toFixed(1) + "公里，预计路程时间" + minutes.toFixed() + "分钟。";
                    $scope.alliance = {
                        id: resp.data.id,
                        name: resp.data.name
                    }
                }
			}catch(e){
				$scope.allianceMsg = "";
				$scope.allianceMsgWrong="大人，地址请更详细些，方便我们尽快找到您！";
			}
            });
        };
        $scope.submit = function () {
            if (!$scope.alliance)
                allianceService.getByAddr({address:$scope.addr.address}).success(function(resp) {
					//console.log($scope.addre.district.name+$scope.addr.address);
					//console.log(resp);
				try{
                    //if (resp.r)
                    //    $scope.allianceMsg = "提示：大人，离您最近的门店为" + resp.data.name, $scope.alliance = resp.data;
                    if (0 === resp.r)
                        $scope.allianceMsg = "提示：" + resp.msg;
                    else if (0 === resp.data.inScope) {
                        $scope.allianceMsg = "提示：大人，离您最近的门店为" + resp.data.name + "。超出配送范围...";
						addressService.set($scope.addr);
						window.location = "out_area.html";
                    }
                    else {
                        var miles = resp.data.distance / 1000;
                        var minutes = resp.data.time / 60;
                        $scope.allianceMsg = "提示：大人，离您最近的门店为" + resp.data.name + "，距离" + miles.toFixed(1) + "公里，预计路程时间" + minutes.toFixed() + "分钟。";
                        $scope.alliance = {
                            id: resp.data.id,
                            name: resp.data.name
                        };
//                        sessionStorage.setItem("currentAddr", JSON.stringify($scope.addr)),
//                            sessionStorage.setItem("currentAlliance", JSON.stringify($scope.alliance)),
//                            sessionStorage.setItem("pack", JSON.stringify($scope.currentPack)),
//                            sessionStorage.setItem("soup", JSON.stringify(soupList)),
                        addressService.set($scope.addr),
                       //     packService.set($scope.currentPack),
                        allianceService.set($scope.alliance),
                       //     soupService.set(soupList),
//                            $scope.$broadcast("Cart:update", Cart);
                        window.location = "delivery.html";
                    }
				}catch(e){
					$scope.allianceMsg = "";
					$scope.allianceMsgWrong="大人，地址请更详细些，方便我们尽快找到您！";					
				}
                });
            else {
//                sessionStorage.setItem("currentAddr", JSON.stringify($scope.addr)),
//                            sessionStorage.setItem("currentAlliance", JSON.stringify($scope.alliance)),
//                            sessionStorage.setItem("pack", JSON.stringify($scope.currentPack)),
//                            sessionStorage.setItem("soup", JSON.stringify(soupList)),
                addressService.set($scope.addr),
                //    packService.set($scope.currentPack),
                allianceService.set($scope.alliance),
               //     soupService.set(soupList),
//                            $scope.$broadcast("Cart:update", Cart);
                window.location = "delivery.html";
            }
        };

		//判断订单总计total是否足够起送价 29元
		$scope.total=Cart.totalAllCost()<29?0:1;
		
        $scope.pack = Cart.pack,
            $scope.soups = Cart.soup,
            $scope.totalPieces = Cart.totalPieces(),
			$scope.totalPack = Cart.totalPack(),
            $scope.totalCost = Cart.totalCost(),
            $scope.totalAllCost =Cart.totalAllCost(),
            $scope.list = Cart.list,

            $scope.$on("Cart:update", function (event, Cart) {
                $scope.pack = Cart.pack,
                    $scope.soup = Cart.soup,
                    $scope.list = Cart.list,
                    $scope.totalPieces = Cart.totalPieces(),
					$scope.totalPack = Cart.totalPack(),
                    $scope.totalCost = Cart.totalCost(),
                    $scope.totalAllCost = Cart.totalAllCost();
					$scope.total=$scope.totalAllCost<29?0:1;
                try {
                    $scope.$digest()
                } catch (d) {
                }
            })

        $scope.checkCart = function () {
            if (Cart.pack && Cart.soup) {
                window.location = "delivery.html";
            }
        }
    }])
	
    .controller("extraCtrl", ["$scope", "$rootScope", "$routeParams", "$location", "$timeout", "Cart", "Extra", "ExtraItem", function ($scope, $rootScope, $routeParams, $location, $timeout, Cart, Extra, ExtraItem) {
        $scope.itemScroll = null;
        $rootScope.loading = !0,

            //高度
            $scope.getWinHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    //    var alliance = sessionStorage.getItem("currentAlliance");
    //    $scope.alliance = alliance && JSON.parse(alliance),
            $scope.extraItems = [];
        Extra.get({}, function (result) {
            $rootScope.loading = !1;
            $scope.$broadcast("Cart:update", Cart);
            $scope.itemIndex = 0;
            $scope.itemLength = result.data.length;
            result.data.forEach(function (extraType) {
                $scope.extraItems.push(
                    {
                        data: {
                            cateId: extraType.id,
                            cateName: extraType.name,
                            cateStatus: extraType.status,
                            foods: []
                        }
                    }
                );
            });
            $scope.extraCates = result;

        }),
       //     ExtraItem.get({alliance: $scope.alliance.id}, function (result) {
            ExtraItem.get({alliance: 0}, function (result) {
                for (var id in result) {
                    if (0 === result[id].status) return
                    var cateId = result[id].type;
                    //万一cateId变呢？
                    $scope.extraItems [cateId - 1].data.foods.push(result[id]);

                }
            });

        //切换目录
        var l;
        $scope.itemShow = function (b) {
            if (l !== b) {
                l = b;
                var c = b === $scope.itemLength ? "MenuItemHot" : "MenuItemNormal";
                $scope.itemIndex = b,
                    setTimeout(function () {
                        $scope.menuScroll.refresh(),
                            $scope.menuScroll.scrollTo(0, 0, 0)
                    }, 100)
            }
        };
        var m = {
            click: !0,
            mouseWheel: !0
        };
        //滚动
        $scope.scrollSide = function () {
            new IScroll("#itemWrapper", m);
        };

        $scope.scrollMenu = function () {
            $scope.menuScroll = new IScroll("#menuWrapper", m);
        }
    }
    ])
	
    .controller("cartCtrl", ["$scope", "$rootScope", "$location", "Cart", function ($scope, $rootScope, $location, Cart) {

        $rootScope.bodyWhite = 0, $scope.cartTitle = "我的锅锅", $scope.cartStyle = "下单";

        $scope.pack = Cart.pack,
            $scope.soups = Cart.soup,
            $scope.totalPieces = Cart.totalPieces(),
			$scope.totalPack = Cart.totalPack(),
            $scope.totalCost = Cart.totalCost(),
            $scope.totalAllCost =Cart.totalAllCost(),
            $scope.list = Cart.list,

            $scope.$on("Cart:update", function (event, Cart) {
                $scope.pack = Cart.pack,
                    $scope.soup = Cart.soup,
                    $scope.list = Cart.list,
                    $scope.totalPieces = Cart.totalPieces(),
					$scope.totalPack = Cart.totalPack(),
                    $scope.totalCost = Cart.totalCost(),
                    $scope.totalAllCost = Cart.totalAllCost();
                try {
                    $scope.$digest()
                } catch (d) {
                }
            })

        $scope.checkCart = function () {

            if (Cart.pack && Cart.soup) {
                window.location = "address.html";
            }
        }
        $scope.total=Cart.totalFood();
        //高度
        $scope.getWinHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        var m = {
            click: !0,
            mouseWheel: !0
        };
        $scope.scrollCart = function () {
            new IScroll("#cartWrapper", m);
        };
    }
    ])
	
    .controller("deliveryCtrl", ["$scope", "$rootScope", "$location", "AllianceService", "OrderService", "WechatService","SoupService","AddressService","Cart", "CouponService" ,function ($scope, $rootScope, $location,  allianceService, orderService, wechatService,soupService,addressService,cart, couponService) {
		//暂时不管打烊
        var book_times = ["10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"];
        var now = new Date();
        var nowHour = now.getHours();
        var nowMin = now.getMinutes();
        var start = (nowHour - 8) * 2;
        //if (start >= 0 && start < book_times.length)
        //    if (nowMin < 30)
        //        $scope.book_times = book_times.slice(start);
        //    else
        //        $scope.book_times = book_times.slice(start + 1);
		$scope.book_times = book_times;

		$scope.toggleTime = function (index) {
            $scope.orderTime = index;
			alert($scope.orderTime);
        };
		
        $scope.payInfo = {
            item: [ "在线支付","餐到付款"],
            index: 0
        },$scope.toggle = function (index) {
                $scope.payInfo.index = index;
        };
		
		//小火锅可选模式
        $scope.potInfo = {
			//请将“不要锅”该选项置于最后
            item: [
			{name:"30元 =“锅+30券”",desc1:"首次付30元，获得锅锅(现金结付)",desc2:"同时获得3张10元共计30元私房钱哦"},
			{name:"30元押金=吃完退锅(现金结付)",desc1:"支付30元押金(现金结付)",desc2:"吃完后联系回收并退款"},
			{name:"我已有锅锅",desc1:"大人，火锅可爱，无锅难食",desc2:"赶紧屋里看看锅还在不？"}
			],
			sum: 3,//多少个选项 此时3个
			index:0,
            selected: [1, 0]
        }, $scope.togglePot = function (index) {
			$scope.potInfo.index=index;
			if(index == 2){//选择的是最后一项 “我不要锅”
				for(var i = 0; i<2; i++)
					$scope.potInfo.selected[i] = 0;//最末项之前所有置0
			}
			else if(index == 0){
				$scope.potInfo.selected[0]=0;
				$scope.potInfo.selected[1]=1;
			}
			else if(index == 1){
				$scope.potInfo.selected[0]=1;
				$scope.potInfo.selected[1]=0;
			}
			
        };

/* 原大火锅可选锅具模式		
		$scope.potInfo = {
			//
            item: ["鸳鸯锅", "电磁炉"],
            selected: [0, 0]
        }, $scope.togglePot = function (index) {
				$scope.potInfo.selected[index] = 1 - $scope.potInfo.selected[index];
        };
*/

//      $scope.discount = 10;
        $scope.cost = {
            total:cart.totalAllCost(),
            pack: cart.totalFood,
            extra: cart.totalCost()
//            discount: $scope.discount
        };
//        var setLocal = function (item, value) {
//            sessionStorage.setItem(item, JSON.stringify(value)),
//                $scope[item] = value
//        };

        $scope.wechat=wechatService.get();
        $scope.currentAlliance=allianceService.get();
        $scope.currentAddr=addressService.get();

//      var currentAddr = sessionStorage.getItem("currentAddr");
//      var currentAlliance = sessionStorage.getItem("currentAlliance");
//      var wechat = sessionStorage.getItem("wechat");
//      $scope.currentAlliance = currentAlliance && JSON.parse(currentAlliance),
//          $scope.wechat = wechat && JSON.parse(wechat),
//          $scope.currentAddr = currentAddr && JSON.parse(currentAddr);

       

//      $scope.addr = $scope.currentAddr;
//      $scope.addAddr = function () {
//          $scope.addr.phone_bk = $scope.addr.phone_bk || "",
//              angular.extend(order, $scope.addr),
//              angular.extend(order, {belong: $scope.currentAlliance.id}),
//              setLocal("currentAddr", $scope.addr, $scope),
//              $scope.showNewAddr = null,
//              $scope.addressNotFill = !1
//      };
//      $scope.message = function (b, c) {
//          $scope["invalid" + b] = $scope[c][b].$invalid
//      };

		$scope.coupon=couponService.get();
		$scope.booktime="N";
        $scope.checkout = function () {
			$scope.order = order = {
		//      coupon_no: "69ea1626674af13b8c215b5c4fa0e98a",
				coupon_no: $scope.coupon?$scope.coupon.coupon_no:"",
		//      wechat: "zhouhanlong",
				book_time: $scope.booktime,//时间
				note: "",//备注
				pot: [],////锅具
				payment: $scope.payInfo.item[ $scope.payInfo.index],
				if_pay:0
			};
		//		alert($scope.book_times[1]);
            if (!$scope.currentAddr || !$scope.currentAlliance)
                return $scope.addressNotFill = !0;
            if (!(order.address || order.belong) && !(angular.extend(order, $scope.currentAddr), order.address, angular.extend(order, {belong: $scope.currentAlliance.id}), order.belong))
                return $scope.addressNotFill = !0;

            angular.extend(order, {foods: {
                pack: cart.pack,
			//	soup:cart.soup,
                soup:{
                    id: "1",
                    name: "秘制大骨汤底",
                    price: 25,
                    quantity: cart.totalPack
                },
                extra: cart.list}}),
                $scope.wechat && (order.wechat = $scope.wechat.openid),
                $scope.note && (order.note = $scope.note),
                $scope.potInfo && (order.pot = $scope.potInfo.selected),
                console.log(order);

            if ($scope.payInfo.index == 1) {
                //选择货到付款，直接生成订单
                orderService.submit(order).success(function (resp) {
					if(1 === resp.r){
						if(resp.msg.indexOf("首次消费")> -1)
							alert(resp.msg);
						orderService.set({id: resp.data.order_no});
                        window.location = "order_success.html";
					}
                    else console.log(resp),alert(resp.msg);
//					alert(resp.msg);
                });
            }
            else {
                //在线支付，跳转到支付页面
                 orderService.submit(order).success(function (resp) {
                    if (1 === resp.r){
						orderService.set({id: resp.data.order_no});
						if(resp.msg.indexOf("首次消费")> -1){
							if(resp.msg.replace(/[^0-9]/ig,"")=="10"){
								alert(resp.msg);
								window.location = "pay.html?first=1";
							}
							else if(resp.msg.replace(/[^0-9]/ig,"")=="15"){
								alert(resp.msg);
								window.location = "pay.html?first=2";
							}
						}
						else{
							window.location = "pay.html";
						}
					}
                    else console.log(resp), alert(resp.msg);
                });
            }
        }
		$scope.chooseCoupon= function () {
				window.location = "coupon.html";
		}
    }
    ])

	 .controller("couponCtrl", ["$scope", "$location", "CouponService","WechatService", function ($scope, $location, couponService,wechatService) {
        $scope.wechat = wechatService.get();
       // alert( $scope.wechat+"jjj");
        couponService.getAll({wechat: $scope.wechat ? $scope.wechat.openid : ""}).success(function (resp) {
            console.log(resp);
            $scope.coupons=resp.data;
			//couponService.set($scope.coupons[0]);
			//alert($scope.wechat.openid);
			//alert($scope.coupons[0]);
			console.log($scope.coupons[0]);
        });
		$scope.couponInfo = {
			index: -1
		},
		$scope.choose=function(coupon,index){
			if($scope.couponInfo.index === index){
				$scope.couponInfo.index=-1;
				couponService.set(null);
			}
			else{
				$scope.couponInfo.index=index;
				couponService.set(coupon);
				console.log(coupon);
				//alert(coupon.coupon_no);
			}
		}
	}])

    .controller("areaOutCtrl", ["$scope", "$rootScope", "$location","AllianceService", "OrderService","AddressService",function ($scope, $rootScope, $location, allianceService, orderService,addressService) {
		//$rootScope.wechat = wechatService.get();
		$scope.addr=addressService.get();
		$scope.confirm = function (){
			if(document.getElementById("address").value && document.getElementById("phone").value)
				alert("好的,我们会尽快根据您的信息开展布局！感谢您！");
			else
				alert("请完整输入信息,便于我们第一时间通知您!");
		}
    }
    ])

    .controller("payCtrl", ["$scope", "$rootScope", "$location", "CouponService","AllianceService", "OrderService", "SoupService","AddressService","Cart","PayService",function ($scope, $rootScope, $location, couponService, allianceService, orderService, soupService,addressService,cart,payService) {
		var firstPay = $location.search().first || 0;
		//alert(firstPay);
		$scope.coupon=couponService.get();
        $scope.payInfo = {
            item: [ "微信支付"],
            index: 0
        };
        $scope.cost = {
            total: cart.totalAllCost(),
            pack: cart.pack.price,
            extra: cart.totalCost()
//          discount: $scope.discount
        };
		if(firstPay == 1){
			$scope.cost.total = $scope.cost.total-10;
			//alert("已优惠10元~");
		}
		else if(firstPay == 2){
			$scope.cost.total = $scope.cost.total-15;
			//alert("已优惠15元~");
		}
        $scope.callpay = function () {
		//pay cost
		//  orderService.checkOutOrder({order_no:resp.data.order_no}).success(function (resp) {}),
			if($scope.coupon){
				var price=($scope.cost.total - $scope.coupon.cut_price)*100;
				window.location = "js_api_call.php?money="+price;
			}
			else{
				var price=$scope.cost.total*100;
			//	document.cookie="money="+price;
				window.location = "js_api_call.php?money="+price;
			//	window.location = "call.php?money="+price;
			}
        };
    }
    ])
	
    .controller("rechargeCtrl", ["$scope", "$rootScope", "$location", "CouponService","AllianceService", "OrderService", "SoupService","AddressService","Cart","PayService",function ($scope, $rootScope, $location, couponService, allianceService, orderService, soupService,addressService,cart,payService) {
	
    }
    ])
	
    .controller("orderSuccessCtrl", ["$rootScope","$scope", "$location", "OrderService","WechatService", function ($rootScope,$scope, $location, orderService,wechatService) {
		$rootScope.wechat = wechatService.get(); 
	    var pay = $location.search().isPay || 0;
		
		$scope.currentOrder=orderService.get();
		//alert($scope.currentOrder.id);
		//alert(pay);
		if(pay){
			orderService.checkOutOrder({order_no:$scope.currentOrder.id}).success(function (resp) {
			})
		}
        console.log($scope.currentOrder.id),
            orderService.getById({order_no: $scope.currentOrder.id}).success(function (resp) {
                    console.log(resp),
                    $scope.expect_time = resp.data.expect_time;
                })
    }
	])
	 .controller("orderFailCtrl", ["$rootScope","$scope", "$location", "OrderService","WechatService", function ($rootScope,$scope, $location, orderService,wechatService) {

	    $rootScope.wechat = wechatService.get(); 
		$scope.currentOrder=orderService.get();
		//alert($scope.currentOrder.id);
		
        console.log($scope.currentOrder.id),
            orderService.getById({order_no: $scope.currentOrder.id}).success(function (resp) {
                    console.log(resp),
                    $scope.expect_time = resp.data.expect_time;
                })
    }])
	
    .controller("tradeOrderCtrl", ["$rootScope", "$scope", "$routeParams", "OrderService","WechatService", function ($rootScope, $scope, $routeParams, orderService,wechatService) {
        $rootScope.wechat = wechatService.get();    
		$rootScope.loading = !0;
		
        orderService.getById({	
            order_no: $routeParams.id
        }).success(function (resp) {
            $scope.order = resp.data;
            $rootScope.loading = !1,
                console.log(resp)
        });

        $scope.cancelOrder = function (orderId) {
            $scope.order = orderService.cancel({order_no: orderId}).success(function (resp) {
                console.log(resp);
            });
        }
    }])
	
    .controller("tradeCtrl", ["$rootScope", "$scope", "$routeParams","OrderService","WechatService", function ($rootScope, $scope,$routeParams, orderService,wechatService) {
		$rootScope.wechat = wechatService.get();       
	    $rootScope.loading = !0;
        if (!$rootScope.wechat) {
			//alert("还没下过单哦");
			//window.location="404.html";
			
            var code = $routeParams.code,
                test = "0",//值非0测试，值0关闭测试
				
                postData = {
                    code: code,
                    test: test
                };
            if (code){
			//	alert("got code");
                wechatService.getRemote(postData).success(function (resp, status, headers, config) {
					$rootScope.loading = !1;
                    if (resp.errcode) {
                        alert(resp.errmsg);
                    } else {
                        wechatService.set(resp);
                    }
                });
			}
            else return alert("未获取您的微信号,请刷新或重试!"), window.location = "404.html";
			//location.replace(location.href) ;
			//window.location.reload();
        }
        $scope.wechat = $rootScope.wechat,orderService.getByWechat({wechat: $scope.wechat ? $scope.wechat.openid : "" }).success(function (result) {
            if (0 != result.r)
                $rootScope.loading = !1,
                $scope.orders = result,
				//alert($scope.orders.data.length),
                console.log($scope.orders)
        });
    }])
;

/*自定义属性*/
angular.module("digo.directives", [])
    .directive("scrollIt", ["$timeout", function ($timeout) {
        var b = {
            restrict: "A",
            link: function (scope, iElement, iAttrs) {
                console.log(scope[iAttrs.scrollIt]),
                    $timeout(scope[iAttrs.scrollIt], 300)
            }
        };
        return b
    }])//
    .directive("menuList", ["$timeout", function () {
        return {
            restrict: "E",
            scope: {
                foods: "=",
                restaurant: "=",
                menu: "=",
                limit: "="
            },

            templateUrl: "tmpl/base_extra_item.html"

        }
    }])

    .directive("fillheight", [function () {
        return {
            link: function (scope, iElement) {
                scope.$watch("loading", function (c) {
                    c || setTimeout(function () {
                        iElement.css("height", scope.getWinHeight - 42 - iElement[0].offsetTop + "px")
                    }, 500)
                })
            }
        }
    }])//
    .directive("observePack", ["$timeout", "Cart", function ($timeout, Cart) {
        var time = 0;
        return function (scope, iElement) {
            iElement.on("click", function (event) {
                if (!scope.toggleClick) {
                    scope.toggleClick = !0,
                        setTimeout(function () {
                            scope.toggleClick = !1
                        }, 320);//持续等待click
                    var target = event.target,
                        dataCount = target.getAttribute("data-count");
                    if (time = 0, dataCount) {//如果有dataCount属性
                        var sum = 0;
                        for (var i in Cart.pack)
                            sum += Cart.pack[i].quantity;

                       dataCount = +dataCount;
                        var dataset = target.dataset,//data-food-price
                            packId = dataset.packId,
                            packName = dataset.packName,
                            packPrice = dataset.packPrice,
                            packList = Cart.pack; //|| {};

                        function isIn(packId){
                            for(var i in packList){
                                if( packList[i].id==packId)
                                return i;
                            }
                            return -1;
                        }

                        if (packList[isIn(packId)] && 0 === dataCount) {//购物车中已有某food的数量归0
                            packList[isIn(packId)].quantity = 0;
                        }
                        else if (packList[isIn(packId)]) {//增减购物车中已有某food的数量
                            packList[isIn(packId)].quantity += dataCount;
                        }
                        else {
                            if (!(dataCount>0))
                                return;

                            packList[isIn(packId)] = {
                                quantity: dataCount,
                                name: packName,
                                id: packId,
                                price: packPrice
                            }
                        }//end else
                        var packQuantity = packList[isIn(packId)].quantity;
                        0 === packQuantity ?
                            (angular.$("#packid_" + packId).text(""), angular.$("#packid_" + packId + "_minus").removeClass("ui_show"), delete packList[isIn(packId)]):
                            (angular.$("#packid_" + packId).text(packQuantity), angular.$("#packid_" +packId + "_minus").addClass("ui_show"));
//                            if( 0 == packQuantity){
//                                document.getElementById("cdish-detail").remove();
//                            }

                        sessionStorage.setItem("pack", JSON.stringify(packList)),
                            scope.$broadcast("Cart:update", Cart)
                    }//end datacount
                }//end click
            })//end on
        }//end return
    }])
    .directive("observeOrder", ["$timeout", "$rootScope", "Cart", function ($timeout, $rootScope, Cart) {
        var time = 0;
        return function (scope, iElement, iAttrs) {
            var h = iAttrs.observeOrder;
            //如果observeOrder的值是函数，则执行该函数
            "function" == typeof scope[h] && scope[h](),

                iElement.on("click", function (event) {
                    if (!scope.toggleClick) {
                        scope.toggleClick = !0,
                            setTimeout(function () {
                                scope.toggleClick = !1
                            }, 320);//持续等待click
                        var target = event.target,
                            dataCount = target.getAttribute("data-count");
                        if (time = 0, dataCount) {//如果有dataCount属性
                            //这里
							/*
                            var i = scope.restaurant ? scope.packName : Cart.name;
                            if (Cart.name !== i) {
                                if ("{}" !== JSON.stringify(Cart.list) && !confirm("你的美食篮子里有其它餐厅的美食，清空美食篮子吗？"))
                                    return;
                                Cart.reset(i),
                                   time = 300
                            }
							*/
							
                            dataCount = +dataCount;
                            var dataset = target.dataset,//data-food-price
                                k = dataset.foodPrice,
                                foodId = dataset.foodId,
                                n = dataset.foodName,
                                q = dataset.categId,
                                cartList = Cart.list || {};


                            function isIn(foodId){
                                for(var i in cartList){
                                    if( cartList[i].id==foodId)
                                        return i;
                                }
                                return -1;
                            }

                            /////////////////////////////setRemoveList//////////////////////////////
                            if (cartList[isIn(foodId)] && 0 === dataCount) {//购物车中已有某food的数量归0
                                cartList[isIn(foodId)].quantity = 0;
                            }
                            else if (cartList[isIn(foodId)]) {//增减购物车中已有某food的数量
                                cartList[isIn(foodId)].quantity += dataCount;
                            }
                            else {
                                if (!(dataCount > 0))
                                    return;
                                cartList[isIn(foodId)] = {
                                    price: k,
                                    quantity: 1,
                                    name: n,
                                    id: foodId

                                }
                            }//end else

                            var foodQuantity = cartList[isIn(foodId)].quantity;
                            0 === foodQuantity ?
                                (angular.$("#foodid_" + foodId).text(""), angular.$("#foodid_" + foodId + "_minus").removeClass("ui_show"), delete cartList[isIn(foodId)]):
                                (angular.$("#foodid_" + foodId).text(foodQuantity), angular.$("#foodid_" +foodId + "_minus").addClass("ui_show"));
//

//                                u = angular.$("#item_" + cartList[isIn(foodId)].categ),
//                                v = 0 | u.text();
//                            //菜单前数字
//                            v + dataCount > 0 ? (u.text(v + dataCount), u.addClass("rst-item-show")) : (u.text("0"), u.removeClass("rst-item-show")),
//                                //减号是否显示
//                                    0 === foodQuantity ? (angular.$("#id_" + foodId).text(""), angular.$("#id_" + foodId + "_minus").removeClass("ui_show"), delete cartList[foodId]) : (angular.$("#id_" + foodId).text(foodQuantity), angular.$("#id_" + foodId + "_minus").addClass("ui_show")),
//
                                sessionStorage.setItem("cartList", JSON.stringify(Cart.list)),
                                scope.$broadcast("Cart:update", Cart)
                        }//end datacount
                    }//end click
                })
        }
    }])
    .directive("winheight", [function () {
        return {
            link: function (scope, iElement) {
                iElement.css("height", scope.getWinHeight - 86 + "px")//限制div高度，才能滑动
            }
        }
    }])//
    .directive("syncFood", ["$timeout", "Cart", function (a, b) {
        return {
            scope: {
                syncFood: "="
            },
            link: function (a, c) {
                var d = a.syncFood;
                b.syncFood(d, c)
            }
        }
    }])
    .directive("syncPack", ["$timeout", "Cart", function (a, b) {
        return {
            scope: {
                syncPack: "="
            },
            link: function (a, c) {
                var d = a.syncPack;
                b.syncPack(d, c)
            }
        }
    }])
    .directive("syncSoup", ["$timeout", "Cart", function ($timeout, Cart) {
        return {
            scope: {
                syncSoup: "="
            },
            link: function (a, c) {
                var d = a.syncSoup;
                Cart.syncSoup(d, c)
            }
        }
    }])
    .directive("goback", ["$location", function ($location) {
        return function (scope, iElems, iAttrs) {
            iElems.on("click", function () {
                history.back(-1)
            })
        }
    }])//
    .directive("addNote", [function () {
        return function (scope, iElem) {
            scope.note = scope.note || "",
                iElem.children().on("click", function () {
                    var b = angular.$(this),
                        c = b.text(),
                        d = scope.note;
                    d.indexOf(c) > -1 ? (d = d.replace(c, ""), b.removeClass("ui_selected")) : (d = d + " " + c, b.addClass("ui_selected")),
                        scope.$apply(function () {
                            scope.note = d.trim()
                        })
                })
        }
    }])//
    .directive("autoAddress", ["Address", "$timeout", function (Address) {
        return {
            require: "ngModel",
            link: function (scope, iElement, iAttrs, ngModel) {
                "undefined" != typeof navigator.geolocation && iElement.on("focus", function () {
                    0 === scope.loading && (
                        scope.$apply(function () {
                            scope.loading = 1
                        }),
                            setTimeout(function () {
                                2 !== scope.loading && (console.log("不好意思，找不到地址!"), scope.$apply(function () {
                                    scope.loading = -1
                                }))
                            }, 5e3),
                            navigator.geolocation.getCurrentPosition(function (position) {
                                Address.get({
                                    lon: position.coords.longitude,
                                    lat: position.coords.latitude
                                }, function (result) {
                                    if (0 !== result.status)
                                        return scope.loading = -1, alert("不好意思，找不到地址!");
                                    var val = result.result.formatted_address;
                                    iElement.val(val),
                                        ngModel.$setViewValue(val),
                                        scope.loading = 2
                                })
                            }, function () {
                            }))
                })
            }
        }
    }])
    .directive("timer", ["$timeout", function () {
        return {
            link: function (scope, iElem, iAttrs) {
                var id = setInterval(function () {
                    var countDown = function (expect_time) {
                        if (!expect_time) return;
                        var now = new Date();
                        var endDate = new Date(expect_time);
                        var leftTime = endDate.getTime() - now.getTime();
                        if (leftTime < 0) return iElem.text("叮叮叮！大人，火锅送到了吗~"), clearInterval(id);
                        var leftAllSecond = parseInt(leftTime / 1000);
                        var leftDay = Math.floor(leftAllSecond / 86400);
                        var leftHour = Math.floor((leftAllSecond - leftDay * 86400) / 3600);
                        var leftMinute = Math.floor((leftAllSecond - leftDay * 86400 - leftHour * 3600) / 60);
                        var leftSecond = Math.floor(leftAllSecond - leftDay * 86400 - leftHour * 3600 - leftMinute * 60);
                        var val = "我们将在";
                        val += leftDay ? leftDay + "天" : "",
                            val += leftHour ? leftHour + "小时" : "",
                            val += leftMinute ? leftMinute + "分" : "",
                            val += leftSecond + "秒内送达～";
//                        var val="";
//                        val+=leftHour?leftHour+":": "",
//                            val+=leftMinute?leftMinute+":":"",
//                            val+=leftSecond?leftSecond:"",
                        iElem.text(val);
                    }

                    countDown(iAttrs.expectTime);//送达时间
                }, 1e2);
            }
        }
    }])//
    .directive("orderStatus", [function () {
        function a(elem, status) {
            switch (status) {
                case "未支付":
                    elem.addClass("orange");
                    break;
                case "配送中":
                    elem.addClass("orange")
                    break;
                case "待发货":
                    elem.addClass("orange");
                    break;
                case "支付":
                    elem.addClass("gray"),
                        elem.text("已支付");
                    break;
                case "完成":
                    elem.addClass("gray"),
                        elem.text("订单已完成");
                    break;
                case "已发货":
                    elem.addClass("gray");
                    break;
                case "已拒绝":
                    elem.addClass("gray");
					break;
				default:
				    elem.addClass("gray");
            }
        }

        return {
            scope: {
                status: "="
            },
            link: function (scope, iElem) {
                scope.$watch("status", function (target) {
                    "object" == typeof target && a(iElem, target.status.toString())
                })
            }
        }
    }
    ])//
;

angular.module("digo.filters", [])
    .filter("abs", [function () {
        return function (a) {
            return Math.abs(+a)
        }
    }])
    .filter("round", [function () {
        return function (a) {
            return Math.round(+a)
        }
    }]);
