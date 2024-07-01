(function(){"use strict";var e={7141:function(e,t,r){var o=r(5130),n=r(6768),s=r(4232);const a=e=>((0,n.Qi)("data-v-6927387b"),e=e(),(0,n.jt)(),e),l=a((()=>(0,n.Lk)("link",{rel:"stylesheet",href:"/styles.css"},null,-1))),i={key:0},c={class:"title-bar"},d={class:"search-sort"},u={class:"search-container"},p={class:"sort-checkout-container"},h=["disabled"],v=a((()=>(0,n.Lk)("span",{class:"fa-solid fa-cart-shopping"},null,-1))),k={key:1,class:"sidebar"},m={class:"sidebar-content"},f=a((()=>(0,n.Lk)("h4",null,"Sort by:",-1))),b={class:"sort-container"},C=["id","value"],g=["for"],L={class:"ascending-descending-options"},y=a((()=>(0,n.Lk)("label",{for:"ascending",class:"ascending-label"},"Ascending",-1))),w={key:2},I={key:3,class:"cart"};function E(e,t,r,a,E,F){const P=(0,n.g2)("LessonComponent"),A=(0,n.g2)("CheckoutForm");return(0,n.uX)(),(0,n.CE)(n.FK,null,[l,(0,n.Lk)("div",null,[E.showProduct?((0,n.uX)(),(0,n.CE)("header",i,[(0,n.Lk)("div",c,[(0,n.Lk)("h1",null,(0,s.v_)(E.sitename),1),(0,n.Lk)("div",d,[(0,n.Lk)("div",u,[(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>E.searchQuery=e),placeholder:"Search..."},null,512),[[o.Jo,E.searchQuery]])]),(0,n.Lk)("div",p,[(0,n.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>F.toggleCheckout&&F.toggleCheckout(...e)),disabled:0===E.cart.length,class:"button"},[(0,n.eW)((0,s.v_)(E.cart.length)+" ",1),v,(0,n.eW)(" Checkout ")],8,h)])])])])):(0,n.Q3)("",!0),E.showProduct?((0,n.uX)(),(0,n.CE)("aside",k,[(0,n.Lk)("div",m,[f,(0,n.Lk)("div",b,[((0,n.uX)(),(0,n.CE)(n.FK,null,(0,n.pI)(["subject","location","price","availableInventory"],((e,r)=>(0,n.Lk)("div",{key:r},[(0,n.bo)((0,n.Lk)("input",{type:"checkbox",id:e,value:e,"onUpdate:modelValue":t[2]||(t[2]=e=>E.sortAttributes=e),class:"sort-checkbox"},null,8,C),[[o.lH,E.sortAttributes]]),(0,n.Lk)("label",{for:e,class:"sort-label"},(0,s.v_)(e),9,g)]))),64))]),(0,n.Lk)("div",L,[(0,n.bo)((0,n.Lk)("input",{type:"checkbox",id:"ascending","onUpdate:modelValue":t[3]||(t[3]=e=>E.ascendingOrder=e),class:"ascending-checkbox"},null,512),[[o.lH,E.ascendingOrder]]),y])]),E.showInstallPrompt?((0,n.uX)(),(0,n.CE)("button",{key:0,onClick:t[4]||(t[4]=(...e)=>F.promptInstall&&F.promptInstall(...e)),class:"install-button"},"Install App")):(0,n.Q3)("",!0)])):(0,n.Q3)("",!0),E.showProduct?((0,n.uX)(),(0,n.CE)("div",w,[(0,n.bF)(P,{"show-product":E.showProduct,"cart-count":F.cartCount,lessons:F.filteredLessons,"can-add-to-cart":F.canAddToCart,onAddToCart:F.addToCart},null,8,["show-product","cart-count","lessons","can-add-to-cart","onAddToCart"])])):((0,n.uX)(),(0,n.CE)("div",I,[(0,n.bF)(A,{"cart-count":F.cartCount,"order-submitted":E.orderSubmitted,"save-order":F.saveOrder,onRemoveItemFromCart:F.removeFromCart,cart:E.cart},null,8,["cart-count","order-submitted","save-order","onRemoveItemFromCart","cart"])])),E.showInstallPrompt?((0,n.uX)(),(0,n.CE)("button",{key:4,onClick:t[5]||(t[5]=(...e)=>F.promptInstall&&F.promptInstall(...e)),class:"install-button"},"Install App")):(0,n.Q3)("",!0),(0,n.Lk)("button",{class:"button cart-toggle-button",onClick:t[6]||(t[6]=(...e)=>F.toggleCheckout&&F.toggleCheckout(...e))},(0,s.v_)(E.showProduct?"View Cart":"Back to Lessons"),1)])],64)}r(4114);const F=e=>((0,n.Qi)("data-v-0671dcbf"),e=e(),(0,n.jt)(),e),P={class:"checkout-form"},A={class:"checkout"},O=F((()=>(0,n.Lk)("h2",null,"Checkout",-1))),X=F((()=>(0,n.Lk)("strong",null,"First Name:",-1))),_=F((()=>(0,n.Lk)("strong",null,"Last Name:",-1))),N=F((()=>(0,n.Lk)("strong",null,"Phone:",-1))),Q={key:0,style:{color:"red"}},T=F((()=>(0,n.Lk)("h2",null,"Order Information",-1))),S=["disabled"],j={key:1},x={class:"cart"},U=F((()=>(0,n.Lk)("h2",null,"Shopping Cart",-1))),V={class:"cart-list"},q={class:"cart-item"},K=["src"],B={class:"product-details"},J=F((()=>(0,n.Lk)("strong",null,"Location:",-1))),W=F((()=>(0,n.Lk)("strong",null,"Price:",-1))),$=F((()=>(0,n.Lk)("strong",null,"Slots Available:",-1))),R={class:"rating"},D=["onClick"];function H(e,t,r,a,l,i){return(0,n.uX)(),(0,n.CE)("div",P,[(0,n.Lk)("div",A,[O,(0,n.Lk)("p",null,[X,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>l.order.firstName=e)},null,512),[[o.Jo,l.order.firstName,void 0,{trim:!0}]])]),(0,n.Lk)("p",null,[_,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.order.lastName=e)},null,512),[[o.Jo,l.order.lastName,void 0,{trim:!0}]])]),(0,n.Lk)("p",null,[N,(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>l.order.phone=e),type:"tel"},null,512),[[o.Jo,l.order.phone,void 0,{number:!0}]])]),l.isFormValid?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("p",Q,"Please fill in all fields.")),T,(0,n.Lk)("p",null,"First Name: "+(0,s.v_)(l.order.firstName),1),(0,n.Lk)("p",null,"Last Name: "+(0,s.v_)(l.order.lastName),1),(0,n.Lk)("p",null,"Phone Number: "+(0,s.v_)(l.order.phone),1),(0,n.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>i.submitOrder&&i.submitOrder(...e)),disabled:!l.isFormValid},"Place Order",8,S),r.orderSubmitted?((0,n.uX)(),(0,n.CE)("p",j,"Order Submitted!")):(0,n.Q3)("",!0)]),(0,n.Lk)("div",x,[U,(0,n.Lk)("ul",V,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.cart,((e,t)=>((0,n.uX)(),(0,n.CE)("li",{key:t},[(0,n.Lk)("div",q,[(0,n.Lk)("figure",null,[(0,n.Lk)("img",{src:e.Image,alt:"Product Image"},null,8,K)]),(0,n.Lk)("div",B,[(0,n.Lk)("h3",null,(0,s.v_)(e.title),1),(0,n.Lk)("p",null,[J,(0,n.eW)(" "+(0,s.v_)(e.Location),1)]),(0,n.Lk)("p",null,[W,(0,n.eW)(" "+(0,s.v_)(e.price),1)]),(0,n.Lk)("p",null,[$,(0,n.eW)(" "+(0,s.v_)(e.availableInventory),1)]),(0,n.Lk)("div",R,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.rating,((e,t)=>((0,n.uX)(),(0,n.CE)("span",{key:t},"★")))),128)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(5-e.rating,((e,t)=>((0,n.uX)(),(0,n.CE)("span",{key:t},"☆")))),128))])]),(0,n.Lk)("button",{onClick:t=>i.removeFromCart(e.id),class:"remove-button"},"Remove",8,D)])])))),128))])])])}var M={name:"CheckoutForm",props:{cart:{type:Array,required:!0},saveOrder:{type:Function,required:!0},orderSubmitted:{type:Boolean,required:!0},cartCount:{type:Function,required:!0}},data(){return{order:{firstName:"",lastName:"",phone:""},isFormValid:!1}},watch:{order:{handler(){this.validateForm()},deep:!0}},methods:{validateForm(){this.isFormValid=!!this.order.firstName&&!!this.order.lastName&&!!this.order.phone},submitOrder(){this.isFormValid&&(this.order.lessonIds=this.cart.map((e=>e._id)),this.saveOrder(this.order))},removeFromCart(e){this.$emit("remove-item-from-cart",e)}}},z=r(1241);const G=(0,z.A)(M,[["render",H],["__scopeId","data-v-0671dcbf"]]);var Y=G;const Z=e=>((0,n.Qi)("data-v-0fccccda"),e=e(),(0,n.jt)(),e),ee={id:"main-wrapper"},te={class:"product-container"},re=["src"],oe={class:"lesson-details"},ne=["onClick","disabled"],se=Z((()=>(0,n.Lk)("br",null,null,-1))),ae=Z((()=>(0,n.Lk)("br",null,null,-1))),le={key:1},ie={key:2},ce={key:3};function de(e,t,r,o,a,l){return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("main",ee,[(0,n.Lk)("div",te,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.lessons,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{class:"product",key:t},[(0,n.Lk)("figure",null,[(0,n.Lk)("img",{src:e.Image,alt:"Lesson Image"},null,8,re)]),(0,n.Lk)("div",oe,[(0,n.Lk)("h2",null,(0,s.v_)(e.title),1),(0,n.Lk)("p",null,"Location: "+(0,s.v_)(e.Location),1),(0,n.Lk)("p",null,"Price: "+(0,s.v_)(e.price),1),(0,n.Lk)("p",null,"Slots Available: "+(0,s.v_)(e.availableInventory),1),r.canAddToCart(e)?((0,n.uX)(),(0,n.CE)("button",{key:0,class:"success-button",style:{"background-color":"gold"},onClick:t=>l.addToCart(e),disabled:0===e.availableInventory},"Add to Cart",8,ne)):(0,n.Q3)("",!0),se,ae,0===e.availableInventory?((0,n.uX)(),(0,n.CE)("span",le,"All out!")):e.availableInventory<5?((0,n.uX)(),(0,n.CE)("span",ie,"Only "+(0,s.v_)(e.availableInventory-r.cartCount(e.id))+" left!",1)):((0,n.uX)(),(0,n.CE)("span",ce,"Buy Now!")),(0,n.Lk)("div",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e.rating,(e=>((0,n.uX)(),(0,n.CE)("span",{key:e},"★")))),128)),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(5-e.rating,(e=>((0,n.uX)(),(0,n.CE)("span",{key:e},"☆")))),128))])])])))),128))])])])}var ue={name:"LessonComponent",props:{lessons:{type:Array,required:!0},canAddToCart:{type:Function,required:!0},cartCount:{type:Function,required:!0},showProduct:{type:Boolean,required:!0}},data(){return{}},computed:{},methods:{addToCart(e){this.$emit("add-to-cart",e)}}};const pe=(0,z.A)(ue,[["render",de],["__scopeId","data-v-0fccccda"]]);var he=pe,ve={name:"App",components:{CheckoutForm:Y,LessonComponent:he},data(){return{sitename:"MDX University",products:[],cart:[],searchQuery:"",showProduct:!0,sortAttributes:[],ascendingOrder:!1,showShoppingCart:!1,showCheckout:!1,orderSubmitted:!1,baseUrl:"https://cw2-backend-eywd.onrender.com",showInstallPrompt:!1,deferredPrompt:null}},created(){this.fetchLessons(),window.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),this.deferredPrompt=e,this.showInstallPrompt=!0}))},methods:{fetchLessons(){fetch(`${this.baseUrl}/lessons`).then((e=>e.json())).then((e=>{this.products=e})).catch((e=>{console.error("Error fetching lessons:",e)}))},saveOrder(e){fetch(`${this.baseUrl}/new-orders`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log("Order saved:",e),this.orderSubmitted=!0,setTimeout((function(){location.reload()}),1e3)})).catch((e=>{console.error("Error saving order:",e)}))},addToCart(e){if(this.canAddToCart(e)){const t=this.products.findIndex((t=>t.id===e.id));-1!==t&&(this.products[t].availableInventory--,this.cart.push({...e}))}},canAddToCart(e){return e.availableInventory>this.cartCount(e.id)&&e.availableInventory>0},cartCount(e){return this.cart.filter((t=>t.id===e)).length},toggleCheckout(){this.showProduct=!this.showProduct},removeFromCart(e){const t=this.cart.findIndex((t=>t.id===e));if(-1!==t){const r=this.products.findIndex((t=>t.id===e));-1!==r&&this.products[r].availableInventory++,this.cart.splice(t,1)}},promptInstall(){this.deferredPrompt&&(this.deferredPrompt.prompt(),this.deferredPrompt.userChoice.then((e=>{"accepted"===e.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt"),this.deferredPrompt=null,this.showInstallPrompt=!1})))}},computed:{filteredLessons(){return console.log(this.sortAttributes),this.sortAttributes.length>0&&this.sortAttributes.forEach((e=>{function t(t,r){return t[e]>r[e]?1:t[e]<r[e]?-1:0}this.ascendingOrder?this.products.sort(t):this.products.sort(t).reverse()})),this.searchQuery.length>1?this.products.filter((e=>e.title&&e.title.toLowerCase().includes(this.searchQuery)||e.Location&&e.Location.toLowerCase().includes(this.searchQuery))):this.products}}};const ke=(0,z.A)(ve,[["render",E],["__scopeId","data-v-6927387b"]]);var me=ke,fe=r(4458);(0,fe.k)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,o.Ef)(me).mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,s){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],n=e[d][1],s=e[d][2];for(var l=!0,i=0;i<o.length;i++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](o[i])}))?o.splice(i--,1):(l=!1,s<a&&(a=s));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,n,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,s,a=o[0],l=o[1],i=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(i)var d=i(r)}for(t&&t(o);c<a.length;c++)s=a[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(d)},o=self["webpackChunkcoursework_app"]=self["webpackChunkcoursework_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[504],(function(){return r(7141)}));o=r.O(o)})();
//# sourceMappingURL=app.3a573da5.js.map