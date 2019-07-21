(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};WebSocketRails.Channel=function(){function e(e,i,n,s,c){var r,h,o;this.name=e,this._dispatcher=i,this.is_private=null!=n&&n,this.on_success=s,this.on_failure=c,this._failure_launcher=t(this._failure_launcher,this),this._success_launcher=t(this._success_launcher,this),this._callbacks={},this._token=void 0,this._queue=[],h=this.is_private?"websocket_rails.subscribe_private":"websocket_rails.subscribe",this.connection_id=null!=(o=this._dispatcher._conn)?o.connection_id:void 0,r=new WebSocketRails.Event([h,{data:{channel:this.name}},this.connection_id],this._success_launcher,this._failure_launcher),this._dispatcher.trigger_event(r)}return e.prototype.destroy=function(){var t,e,i;return this.connection_id===(null!=(i=this._dispatcher._conn)?i.connection_id:void 0)&&(e="websocket_rails.unsubscribe",t=new WebSocketRails.Event([e,{data:{channel:this.name}},this.connection_id]),this._dispatcher.trigger_event(t)),this._callbacks={}},e.prototype.bind=function(t,e){var i;return null==(i=this._callbacks)[t]&&(i[t]=[]),this._callbacks[t].push(e)},e.prototype.trigger=function(t,e){var i;return i=new WebSocketRails.Event([t,{channel:this.name,data:e,token:this._token},this.connection_id]),this._token?this._dispatcher.trigger_event(i):this._queue.push(i)},e.prototype.dispatch=function(t,e){var i,n,s,c,r,h;if("websocket_rails.channel_token"===t)return this.connection_id=null!=(c=this._dispatcher._conn)?c.connection_id:void 0,this._token=e.token,this.flush_queue();if(null!=this._callbacks[t]){for(h=[],n=0,s=(r=this._callbacks[t]).length;n<s;n++)i=r[n],h.push(i(e));return h}},e.prototype._success_launcher=function(t){if(null!=this.on_success)return this.on_success(t)},e.prototype._failure_launcher=function(t){if(null!=this.on_failure)return this.on_failure(t)},e.prototype.flush_queue=function(){var t,e,i,n;for(e=0,i=(n=this._queue).length;e<i;e++)t=n[e],this._dispatcher.trigger_event(t);return this._queue=[]},e}()}).call(this);