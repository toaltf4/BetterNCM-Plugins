(()=>{function u(n,o,l){return{function:function(...e){o instanceof Function&&(o=[o]),l instanceof Function&&(l=[l]);let t={cancel:!1,args:void 0},i;for(let r of o??[]){if(t=r(...e),t?.cancel)return;t?.args&&(i=i??t?.args)}i&&console.log(i,e);let c;c=n.apply(this,i??e);for(let r of l??[])c=r?.apply(c,e)??c;return c},origin:n}}var f={};window.registeredCalls=f;channel.registerCall=u(channel.registerCall,(n,o)=>{f[n]??=[],f[n].push(o)}).function;localStorage["libfrontendplay.debug"]==="true"&&(channel.call=u(channel.call,(n,o,l)=>{if(n!=="audioplayer.onPlayProgress")return n.includes("audio")||n.includes("player")?console.log(n,o,l):console.debug(n,o,l),{args:[n,u(o,(...e)=>{n.includes("audio")||n.includes("player")?console.log("[Callback]",n,e):console.debug("[Callback]",n,e)}).function,l]}}).function);})();
