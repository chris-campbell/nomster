(function(){WebSocketRails.Event=function(){function t(t,s,n){var i;this.success_callback=s,this.failure_callback=n,this.name=t[0],null!=(i=t[1])&&(this.id=null!=i.id?i.id:65536*(1+Math.random())|0,this.channel=null!=i.channel?i.channel:void 0,this.data=null!=i.data?i.data:i,this.token=null!=i.token?i.token:void 0,this.connection_id=t[2],null!=i.success&&(this.result=!0,this.success=i.success))}return t.prototype.is_channel=function(){return null!=this.channel},t.prototype.is_result=function(){return"undefined"!=typeof this.result},t.prototype.is_ping=function(){return"websocket_rails.ping"===this.name},t.prototype.serialize=function(){return JSON.stringify([this.name,this.attributes()])},t.prototype.attributes=function(){return{id:this.id,channel:this.channel,data:this.data,token:this.token}},t.prototype.run_callbacks=function(t,s){return this.success=t,this.result=s,!0===this.success?"function"==typeof this.success_callback?this.success_callback(this.result):void 0:"function"==typeof this.failure_callback?this.failure_callback(this.result):void 0},t}()}).call(this);