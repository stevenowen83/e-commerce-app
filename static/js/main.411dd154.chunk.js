(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),i=a.n(r),l=a(2),s=a(3),o=a(5),u=a(4),d=a(6),m=a(12),p=a(13),h=a(11),E=a(10),y=a(23);var f=Object(y.a)(function(e,t){switch(t.type){case"SET_PRODUCT":return Object(E.a)({},e,{products:t.products});case"SEARCH":return Object(E.a)({},e,{search:t.value});case"ADD_PRODUCT":var a=e.cart.findIndex(function(e){return e.id===t.product.id}),n=Object(h.a)(e.cart);return-1===a?(t.product.qty=1,n.push(t.product),Object(E.a)({},e,{cart:n})):(n[a].qty+=1,Object(E.a)({},e,{cart:n}));case"ADD_WISH":var c=Object(h.a)(e.list);return c.push(t.product),Object(E.a)({},e,{list:c});case"REMOVE_PRODUCT":return Object(E.a)({},e,{cart:[].concat(Object(h.a)(e.cart.slice(0,t.index)),Object(h.a)(e.cart.slice(t.index+1,e.cart.length)))});case"REMOVE_WISH":return Object(E.a)({},e,{list:[].concat(Object(h.a)(e.list.slice(0,t.index)),Object(h.a)(e.list.slice(t.index+1,e.list.length)))});case"INCREMENT":var r=Object(h.a)(e.cart);return r[e.cart.findIndex(function(e){return e.id===t.id})].qty+=t.amount,Object(E.a)({},e,{cart:r});case"DECREMENT":var i=Object(h.a)(e.cart),l=e.cart.findIndex(function(e){return e.id===t.id});return e.cart[l].qty>0&&(i[l].qty-=t.amount),Object(E.a)({},e,{cart:i});case"EMPTY_CART":return Object(E.a)({},e,{cart:[]});default:return e}},{products:[],search:"",cart:[],list:[]}),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={value:""},a.saveChange=function(e){e.preventDefault(),f.dispatch({type:"SEARCH",value:a.state.value})},a.handleChange=function(e){a.setState({value:e.target.value})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("form",{className:"ui icon input",onSubmit:this.saveChange},c.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.value,onChange:this.handleChange}),c.a.createElement("i",{className:"search icon"}))}}]),t}(n.Component),v=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderWishIcon",value:function(){return 0===f.getState().list.length?c.a.createElement("i",{className:"icons"},c.a.createElement("i",{className:"large shopping bag icon"}),c.a.createElement("i",{className:"red heart outline icon",style:{paddingRight:"20px",paddingTop:"4px"}})):c.a.createElement("i",{className:"icons"},c.a.createElement("i",{className:"large shopping bag icon"}),c.a.createElement("i",{className:"red heart icon",style:{paddingRight:"20px",paddingTop:"4px"}}))}},{key:"renderCartIcon",value:function(){return 0===f.getState().cart.length?c.a.createElement("i",{className:"large cart icon"}):c.a.createElement("i",{className:"icons"},c.a.createElement("i",{className:"large cart icon"}),c.a.createElement("i",{className:"top right corner red circle icon"}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"ui inverted large menu"},c.a.createElement("span",{className:"item"},"Electronic Store"),c.a.createElement(m.b,{className:"item",to:"/"},c.a.createElement("i",{className:"home icon"}),"Home"),c.a.createElement("div",{className:"right item"},c.a.createElement(m.b,{style:{marginRight:"10px"},to:"/wishList"},this.renderWishIcon()),c.a.createElement(m.b,{style:{marginRight:"10px"},to:"/cartList"},this.renderCartIcon()),c.a.createElement(g,null)))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.props.history.push("/products/"+e)}},{key:"addProduct",value:function(e){f.dispatch({type:"ADD_PRODUCT",product:e})}},{key:"addWish",value:function(e){f.dispatch({type:"ADD_WISH",product:e})}},{key:"render",value:function(){var e=this,t=f.getState().products,a=f.getState().search;return""!==a&&(t=t.filter(function(e){return e.category===a||-1!==e.category.indexOf(a)})),t.map(function(t,a){return c.a.createElement("div",{className:"ui raised link card",key:a},c.a.createElement("div",{className:"ui centered images"},c.a.createElement("img",{style:{maxHeight:"175px",padding:"15px"},alt:t.title,src:t.img})),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"center aligned header"},t.title),c.a.createElement("div",{className:"meta"},t.category.toUpperCase()),c.a.createElement("button",{className:"right floated ui blue mini button",onClick:function(){return e.handleClick(t.id)}},"Details...")),c.a.createElement("div",{className:"extra content"},c.a.createElement("button",{className:"right floated heart",onClick:function(){return e.addWish(t)}},c.a.createElement("i",{className:"heart icon"}),"Add To Wish List"),c.a.createElement("button",{className:"floated cart",onClick:function(){return e.addProduct(t)}},c.a.createElement("i",{className:"cart plus icon"}),"Add To Cart")))})}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={product:[]},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({product:f.getState().products.filter(function(t){return t.id===Number(e.props.match.params.id)})})}},{key:"addProduct",value:function(e){f.dispatch({type:"ADD_PRODUCT",product:e})}},{key:"addWish",value:function(e){f.dispatch({type:"ADD_WISH",product:e})}},{key:"renderProduct",value:function(){var e=this;return this.state.product.map(function(t,a){return c.a.createElement("div",{key:a,className:"ui raised very padded container segment"},c.a.createElement("img",{className:"ui centered image",alt:t.title,src:t.img,style:{maxHeight:"300px"}}),c.a.createElement("h2",{className:"ui centered header segment"},t.title),c.a.createElement("div",{className:"ui center aligned container"},t.category.toUpperCase()),c.a.createElement("div",{className:"ui centered segment"},c.a.createElement("div",{style:{fontWeight:"bold"}},"Description: "),c.a.createElement("span",null,t.description," "),c.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("div",null,c.a.createElement("span",{style:{fontWeight:"bold"}},"Price: "),c.a.createElement("span",null,"$",t.price)),c.a.createElement("div",null,c.a.createElement("span",{style:{fontWeight:"bold"}},"Rating: "),c.a.createElement("span",{style:{fontWeight:"bold"}},t.rating)))),c.a.createElement("div",{className:"ui center aligned container",style:{display:"flex",justifyContent:"space-between"}},c.a.createElement("button",{onClick:function(){return e.addProduct(t)}},c.a.createElement("i",{className:"cart icon"}),"Add To Cart"),c.a.createElement("button",{onClick:function(){return e.addWish(t)}},c.a.createElement("i",{className:"heart icon"}),"Add To Wish List")))})}},{key:"render",value:function(){return c.a.createElement("div",null,this.renderProduct())}}]),t}(n.Component),C=function(e){return c.a.createElement("div",{style:{position:"absolute",right:"20px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},c.a.createElement("div",null,"Quantity"),c.a.createElement("button",{onClick:function(){return f.dispatch({type:"INCREMENT",id:e.id,amount:1})}},c.a.createElement("i",{className:"up chevron icon"})),c.a.createElement("div",null,e.qty),c.a.createElement("button",{onClick:function(){return f.dispatch({type:"DECREMENT",id:e.id,amount:1})}},c.a.createElement("i",{className:"down chevron icon"})))},N=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"removeProduct",value:function(e){f.dispatch({type:"REMOVE_PRODUCT",index:e})}},{key:"getTotal",value:function(){var e=0;return f.getState().cart.forEach(function(t){e+=t.qty*t.price}),e.toFixed(2)}},{key:"emptyCart",value:function(e){f.dispatch({type:"EMPTY_CART",product:e})}},{key:"renderMessage",value:function(){var e=this;return 0===f.getState().cart.length?c.a.createElement("h2",{className:"ui center aligned container"},"Your Cart is Empty"):c.a.createElement("div",null,this.renderCart(),c.a.createElement("div",{style:{position:"absolute",right:"20px",bottom:"10px",display:"flex"}},c.a.createElement(m.b,{to:"/checkout"},c.a.createElement("button",{className:"ui green small button",style:{marginRight:"5px"},onClick:function(){return e.emptyCart()}},c.a.createElement("i",{className:"credit card icon"}),"Checkout")),c.a.createElement("div",{style:{fontWeight:"bold",fontSize:"1.28571429rem",marginTop:"7px"}},"Cart Total: $",this.getTotal())))}},{key:"renderCart",value:function(){var e=this;return f.getState().cart.map(function(t,a){return c.a.createElement("div",{key:a,className:"ui raised container segment",style:{display:"flex",position:"relative"}},c.a.createElement("img",{style:{maxHeight:"100px"},alt:t.title,src:t.img}),c.a.createElement("div",{style:{display:"block",marginLeft:"10px"}},c.a.createElement("h4",null,t.title),c.a.createElement("h4",null,"Price: $",t.price),c.a.createElement("button",{onClick:function(){return e.removeProduct(a)}},c.a.createElement("i",{className:"x icon"}),"Remove")),c.a.createElement(C,{qty:t.qty,id:t.id}))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"ui raised very padded container segment"},c.a.createElement("h3",{style:{textDecoration:"underline"}},"Shopping Cart"),this.renderMessage())}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"addProduct",value:function(e){f.dispatch({type:"ADD_PRODUCT",product:e})}},{key:"removeWish",value:function(e){f.dispatch({type:"REMOVE_WISH",index:e})}},{key:"renderMessage",value:function(){return 0===f.getState().list.length?c.a.createElement("h2",{className:"ui center aligned container"},"There is No Wish's on Your List"):this.renderWishList()}},{key:"renderWishList",value:function(){var e=this;return f.getState().list.map(function(t,a){return c.a.createElement("div",{key:a,className:"ui raised container segment",style:{display:"flex"}},c.a.createElement("img",{style:{maxHeight:"100px"},alt:t.title,src:t.img}),c.a.createElement("div",{style:{display:"block",marginLeft:"10px"}},c.a.createElement("h4",null,t.title),c.a.createElement("h4",null,"Price: $",t.price),c.a.createElement("button",{onClick:function(){return e.addProduct(t)}},c.a.createElement("i",{className:"cart plus icon"}),"Add To Cart"),c.a.createElement("button",{onClick:function(){return e.removeWish(a)},style:{marginLeft:"22px"}},c.a.createElement("i",{className:"x icon"}),"Remove")))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"ui raised very padded container segment"},c.a.createElement("h3",{style:{textDecoration:"underline"}},"Wish List"),c.a.createElement("div",null,this.renderMessage()))}}]),t}(n.Component),k=function(){return c.a.createElement("div",null,"Checkout is Complete")},x=function(){return c.a.createElement("div",{className:"ui bottom fixed inverted menu"},c.a.createElement("span",{className:"ui right floated item"},"Powered By Steven"))},D=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.subscribe(function(){return e.forceUpdate()}),fetch("https://my-json-server.typicode.com/tdmichaelis/typicode/products").then(function(e){return e.json()}).then(function(e){f.dispatch({type:"SET_PRODUCT",products:e})})}},{key:"render",value:function(){return c.a.createElement(m.a,null,c.a.createElement(v,null),c.a.createElement("div",{className:"ui centered cards",style:{marginBottom:"50px"}},c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",component:b}),c.a.createElement(p.a,{path:"/products/:id",component:O}),c.a.createElement(p.a,{path:"/cartList",component:N}),c.a.createElement(p.a,{path:"/wishList",component:j}),c.a.createElement(p.a,{path:"/checkout",component:k}))),c.a.createElement(x,null))}}]),t}(n.Component);i.a.render(c.a.createElement(D,null),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.411dd154.chunk.js.map