(this["webpackJsonpgrocery-list"]=this["webpackJsonpgrocery-list"]||[]).push([[0],{17:function(t,e,n){t.exports=n(25)},24:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(9),u=n.n(c),o=n(16),l=n(1),i=n(2),m=n(5),d=n(4),s=n(10),p=n(11);function h(){var t=Object(p.a)(["\n\nform {\n    display: flex;\n    flex-wrap: wrap;\n}\n\ninput {\n    width: 50%;\n    margin-right: 20px;\n}\n    "]);return h=function(){return t},t}var v=n(12).a.div(h()),f=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).initialState={product:"",quantity:""},t.state=t.initialState,t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(s.a)({},a,r))},t.onFormSubmit=function(e){e.preventDefault(),t.props.onFormSubmit(t.state),t.setState(t.initialState),e.currentTarget.reset()},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.product,n=t.quantity;return r.a.createElement(v,null,r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("input",{type:"text",name:"product",id:"product",value:e,placeholder:"Product Name",onChange:this.handleChange}),r.a.createElement("input",{type:"number",name:"quantity",value:n,placeholder:"Quantity",onChange:this.handleChange}),r.a.createElement("button",{type:"Submit"},"Add Item")))}}]),n}(r.a.Component),b=function(t){var e=t.productData.map((function(e,n){return r.a.createElement("tr",{key:n},r.a.createElement("td",null,e.product),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return t.removeProduct(n)}},"Delete")))}));return r.a.createElement("tbody",null,e)},y=function(t){var e=t.productData,n=t.removeProduct;return r.a.createElement("table",null,r.a.createElement(b,{productData:e,removeProduct:n}))},E=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={products:[]},t.removeProduct=function(e){var n=t.state.products;t.setState({products:n.filter((function(t,n){return n!==e}))})},t.onFormSubmit=function(e){t.setState({products:[].concat(Object(o.a)(t.state.products),[e])})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.products;return r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Grocery List"),r.a.createElement("p",null,"Add Grocery Items to the List"),r.a.createElement(y,{productData:t,removeProduct:this.removeProduct}),r.a.createElement("h3",null,"Add New"),r.a.createElement(f,{onFormSubmit:this.onFormSubmit}))}}]),n}(r.a.Component);n(24);u.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1ae018be.chunk.js.map