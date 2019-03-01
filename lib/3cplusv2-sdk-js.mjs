var t=require("./request"),e=require("./v1");module.exports=function(t){function r(e){t.call(this,e),this.client.defaults.baseURL+="/api"}return t&&(r.__proto__=t),(r.prototype=Object.create(t&&t.prototype)).constructor=r,r.prototype.v1=function(){return new e(this.client)},r}(t);
//# sourceMappingURL=3cplusv2-sdk-js.mjs.map
