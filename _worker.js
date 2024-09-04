
// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=auto或/auto或

let mytoken = 'zbb'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
let BotToken =''; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
let ChatID =''; //可以为空，或者@userinfobot中获取，/start
let TG = 0; //小白勿动， 开发者专用，1 为推送所有的访问信息，0 为不推送订阅转换后端的访问信息与异常访问
let FileName = 'CF-Workers-SUB';
let SUBUpdateTime = 6; //自定义订阅更新时间，单位小时
let total = 99;//TB
let timestamp = 4102329600000;//2099-12-31

let cacheTTL = 24 ;//小时，缓存时长

//节点链接 + 订阅链接
let MainData = `
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:8d93::580f:286f]:8443?encryption=none&security=tls&sni=ygc.z07.us.kg&fp=random&type=ws&host=ygc.z07.us.kg&path=%2Fpyip%3Dts.hpc.tw#08
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:9b0f::3664:19c5]:8443?encryption=none&security=tls&sni=ygc.z07.us.kg&fp=random&type=ws&host=ygc.z07.us.kg&path=%2Fpyip%3Dts.hpc.tw#03%20Fr
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:8dd4::6295:422b]:443?encryption=none&security=tls&sni=ygcf.zcr07.us.kg&fp=random&type=ws&host=ygcf.zcr07.us.kg&path=%2Fpyip%3Dts.hpc.tw#09
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3008::9d6:302e]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#0007
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036::ea:b28d:467]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#00006
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:9a9c::2d94:24c7]:443?encryption=none&security=tls&sni=ygcf.zbb.dns-dynamic.net&fp=random&type=ws&host=ygcf.zbb.dns-dynamic.net&path=%2Fpyip%3Dts.hpc.tw#07
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:0:8ec2:d368:19f8:db00]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#00008
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:33:83e8:fb67:6d54:5167]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#00004
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2a06:98c1:310c::4237:466d]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#0008
vless://2f0afcf4-5b46-49c7-8d15-5aa08edf9226@bintpashtrade.com:2087?encryption=none&security=tls&sni=BPB.ZcR07.Us.kG&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Bpb.zCR07.US.kg&path=%2F7u07kA0qyMqxpN17%2FdHMuaHBjLnR3%3Fed%3D2560#0000002
vless://2f0afcf4-5b46-49c7-8d15-5aa08edf9226@h4p9z1.t7t7i7.com:2053?encryption=none&security=tls&sni=bPb.zcr07.us.Kg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bpB.ZcR07.uS.Kg&path=%2FjKcPyo636Nbs0Tdb%2FdHMuaHBjLnR3%3Fed%3D2560#0000006
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:0:6c:dc3f:4290:cbe3]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#00007
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2803:f800:51::3b18:6764]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#0009
vless://37691131-db68-49bc-b1bb-840277c54390@cnstats.org:443?encryption=none&security=tls&sni=xb.zCr07.RR.NU&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=xb.zCR07.RR.Nu&path=%2FCrWeg4bf1ko5RFt3%2FdHMuaHBjLnR3%3Fed%3D2560#0000000001
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:e5::22ad:5671]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#00009
vless://a66b4e21-3a80-4b08-8ce3-7c312538f847@[2606:4700:e2::3e80:4f3a]:443?encryption=none&security=tls&sni=ygc.zbb07.filegear-sg.me&fp=random&type=ws&host=ygc.zbb07.filegear-sg.me&path=%2Fpyip%3Dts.hpc.tw#04
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:15::2195:1b51]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#02
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@www.copymm666.ru:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2Fpyip%3D2c0f%3Af248%3A%3A#0002
trojan://zbb@www.taokong8.com:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#0003
trojan://trojan@[2606:4700:3036:33:d6ea:8dba:5115:ab94]:2053?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#05
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:0:6c:dc3f:fe74:90e7]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#00005
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@877jj.com:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#000008
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@wikiwiki.t7t7i7.com:443?encryption=none&security=tls&sni=bp.zcr07.findhERE.oRg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bP.Zcr07.fINDhEre.org&path=%2FLZzA2TPulz9om2vO%2FdHMuaHBjLnR3%3Fed%3D2560#0000004
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:33:88c0:cc29:7006:df9d]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#00001%60
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@wowowo14.top:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#000002
trojan://trojan@www.anypornxvideos.com:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#009
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@www.4hu12r.com:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#000007
trojan://trojan@8a8c8.com:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#001
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036::aa:1fb2:918b]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#00003
trojan://zbb@www.bdbo1231.com:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#0001
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:3036:f036:bdb9:7d5e:c711:5668]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#00002
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@www.811xe.com:443?encryption=none&security=tls&sni=jP.ZCR07.ClOudNs.BIz&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=jP.zCR07.CloudNs.BIZ&path=%2Fx6dcVfeDL0wETXnc%2FdHMuaHBjLnR3%3Fed%3D2560#0000008
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@tp482.cc:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#000004
trojan://zbb@famslut.com:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2Fpyip%3Dts.hpc.tw#002
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@[2606:4700:24::3b5a:7d0a]:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#0006%60
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@www.877jj.com:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#000003
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@4hu12r.com:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#000006
trojan://trojan@www.8a8c8.com:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#008
vless://8abf406e-95c3-4886-aba4-dae9dd66124a@ios.wowowo14.top:8443?encryption=none&security=tls&sni=zbpB.R07.cLouDNS.BE&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=zBPb.R07.cloUdNs.Be&path=%2FV4hx2LWdjbfCJLLI%2FdHMuaHBjLnR3%3Fed%3D2560#0000001
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@www.bcrenb.top:2087?encryption=none&security=tls&sni=BP.zCR07.FINDHeRe.oRG&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=BP.zcR07.FiNDhere.ORG&path=%2Fv43uwvtEZXkoYPaV%2FdHMuaHBjLnR3%3Fed%3D2560#0000003
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@www.ultraflighty.com:2053?encryption=none&security=tls&sni=jP.zCr07.CLOuDNs.BIz&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=Jp.ZCr07.CLOUDns.Biz&path=%2FZG5ZNwc3mTsy824v%2FdHMuaHBjLnR3%3Fed%3D2560#0000009
trojan://trojan@tudoujiasu5.com:443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#007
vless://2b152099-977d-4b23-9e00-a7f9108c65ea@cc867.com:8443?encryption=none&security=tls&sni=Bp.zCr07.FINdherE.ORg&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=bP.zCr07.FinDhERE.Org&path=%2F4tZWfB6zd6hKVb8N%2FdHMuaHBjLnR3%3Fed%3D2560#0000007
vless://b9b4bbd0-2579-468e-8cb3-c86bc0953036@[2606:4700:3036:cc:b3c2:483c:e3a5:58d8]:443?encryption=none&security=tls&sni=notls.zcr07.us.kg&fp=randomized&type=ws&host=notls.zcr07.us.kg&path=%2Fpyip%3Dts.hpc.tw#01
trojan://zbb@www.tudoujiasu5.com:443?security=tls&sni=tr7.zbb07.us.kg&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2Fpyip%3Dts.hpc.tw#0004
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@www.8a7c5.com:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#000001
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@738mm.com:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#000005
vless://6bf3079b-b0c4-4206-9578-e0b6813b102b@gogo.wowowo14.top:443?encryption=none&security=tls&sni=edg.zbb07.us.kg&alpn=h3&fp=random&type=ws&host=edg.zbb07.us.kg&path=%2F%3Fed%3D2560#000009
trojan://trojan@hs.taokong8.com:8443?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#004
vless://c0b15b55-80dc-4afb-b49d-c109175c9bd6@game.wowowo14.top:8443?encryption=none&security=tls&sni=jp.zcR07.cLouDnS.BiZ&alpn=h2%2Chttp%2F1.1&fp=randomized&type=ws&host=jP.zcR07.CLOUdNs.biz&path=%2FSfVWWuPidHBmfGdD%2FdHMuaHBjLnR3%3Fed%3D2560#0000005
trojan://trojan@[2606:4700:9aeb::2993:8fe]:2087?security=tls&sni=ygt.n06.us.kg&fp=randomized&type=ws&host=ygt.n06.us.kg&path=%2Fpyip%3Dts.hpc.tw#06
trojan://zbb@gg.taokong8.com:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#003
trojan://zbb@lz.taokong8.com:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#005
trojan://zbb@pt.taokong8.com:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#006
trojan://zbb@xs.taokong8.com:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#0005



`

let urls = [];
let subconverter = "SUBAPI.fxxk.dedyn.io"; //在线订阅转换后端，目前使用CM的订阅转换功能。支持自建psub 可自行搭建https://github.com/bulianglin/psub
let subconfig = "https://raw.githubusercontent.com/cmliu/ACL4SSR/main/Clash/config/ACL4SSR_Online_MultiCountry.ini"; //订阅配置文件
let subProtocol = 'https';

export default {
	async fetch (request,env) {
		const userAgentHeader = request.headers.get('User-Agent');
		const userAgent = userAgentHeader ? userAgentHeader.toLowerCase() : "null";
		const url = new URL(request.url);
		const token = url.searchParams.get('token');
		mytoken = env.TOKEN || mytoken;
		BotToken = env.TGTOKEN || BotToken;
		ChatID = env.TGID || ChatID; 
		TG =  env.TG || TG; 
		subconverter = env.SUBAPI || subconverter;
		if( subconverter.includes("http://") ){
			subconverter = subconverter.split("//")[1];
			subProtocol = 'http';
		} else {
			subconverter = subconverter.split("//")[1] || subconverter;
		}
		subconfig = env.SUBCONFIG || subconfig;
		FileName = env.SUBNAME || FileName;
		MainData = env.LINK || MainData;
		if(env.LINKSUB) urls = await ADD(env.LINKSUB);

		const currentDate = new Date();
		currentDate.setHours(0, 0, 0, 0); 
		const timeTemp = Math.ceil(currentDate.getTime() / 1000);
		const fakeToken = await MD5MD5(`${mytoken}${timeTemp}`);
		//console.log(`${fakeUserID}\n${fakeHostName}`); // 打印fakeID

		let UD = Math.floor(((timestamp - Date.now())/timestamp * total * 1099511627776 )/2);
		total = total * 1099511627776 ;
		let expire= Math.floor(timestamp / 1000) ;
		SUBUpdateTime = env.SUBUPTIME || SUBUpdateTime;

		let 重新汇总所有链接 = await ADD(MainData + '\n' + urls.join('\n'));
		let 自建节点 ="";
		let 订阅链接 ="";
		for (let x of 重新汇总所有链接) {
			if (x.toLowerCase().startsWith('http')) {
				订阅链接 += x + '\n';
			} else {
				自建节点 += x + '\n';
			}
		}
		MainData = 自建节点;
		urls = await ADD(订阅链接);

		if ( !(token == mytoken || token == fakeToken || url.pathname == ("/"+ mytoken) || url.pathname.includes("/"+ mytoken + "?")) ) {
			if ( TG == 1 && url.pathname !== "/" && url.pathname !== "/favicon.ico" ) await sendMessage(`#异常访问 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgent}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
			if (envKey) {
				const URLs = await ADD(env[envKey]);
				const URL = URLs[Math.floor(Math.random() * URLs.length)];
				return envKey === 'URL302' ? Response.redirect(URL, 302) : fetch(new Request(URL, request));
			}
			return new Response(await nginx(), { 
				status: 200 ,
				headers: {
					'Content-Type': 'text/html; charset=UTF-8',
				},
			});
		} else {
			await sendMessage(`#获取订阅 ${FileName}`, request.headers.get('CF-Connecting-IP'), `UA: ${userAgentHeader}</tg-spoiler>\n域名: ${url.hostname}\n<tg-spoiler>入口: ${url.pathname + url.search}</tg-spoiler>`);
			let 订阅格式 = 'base64';
			if (userAgent.includes('null') || userAgent.includes('subconverter') || userAgent.includes('nekobox') || userAgent.includes(('CF-Workers-SUB').toLowerCase())){
				订阅格式 = 'base64';
			} else if (userAgent.includes('clash') || ( url.searchParams.has('clash') && !userAgent.includes('subconverter'))){
				订阅格式 = 'clash';
			} else if (userAgent.includes('sing-box') || userAgent.includes('singbox') || ( (url.searchParams.has('sb') || url.searchParams.has('singbox')) && !userAgent.includes('subconverter'))){
				订阅格式 = 'singbox';
			} else if (userAgent.includes('surge') || ( url.searchParams.has('surge') && !userAgent.includes('subconverter'))){
				订阅格式 = 'surge';
			}

			let subconverterUrl ;
			let 订阅转换URL = `${url.origin}/${await MD5MD5(fakeToken)}?token=${fakeToken}`;
			//console.log(订阅转换URL);
			let req_data = MainData;

			// 初始化缓存
			const cache = caches.default;

			let 追加UA = 'v2rayn';
			if (url.searchParams.has('clash')){
				追加UA = 'clash';
			} else if(url.searchParams.has('singbox')){
				追加UA = 'singbox';
			} else if(url.searchParams.has('surge')){
				追加UA = 'surge';
			}
			
			try {
				const responses = await Promise.all(urls.map(async url => {
					const cacheKey = new Request(url);
					
					try {
						// 设置2秒超时
						const controller = new AbortController();
						const timeoutId = setTimeout(() => controller.abort(), 2000);
	
						const response = await fetch(url, {
							method: 'get',
							headers: {
								'Accept': 'text/html,application/xhtml+xml,application/xml;',
								'User-Agent': `${追加UA} cmliu/CF-Workers-SUB ${userAgentHeader}`
							},
							signal: controller.signal
						});
	
						clearTimeout(timeoutId);
	
						if (response.ok) {
							const content = await response.text();
							
							// 请求成功，写入缓存，设置24小时的缓存时间
							const cacheResponse = new Response(content, {
								headers: {
									...response.headers,
									'Cache-Control': `public, max-age=${cacheTTL * 60 * 60}`
								}
							});
							await cache.put(cacheKey, cacheResponse);
							console.log(`更新缓存 ${url}:\n${content.slice(0, 10)}...`);
							if (content.includes('dns') && content.includes('proxies') && content.includes('proxy-groups')) {
								// Clash 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else if (content.includes('dns') && content.includes('outbounds') && content.includes('inbounds')){
								// Singbox 配置
								订阅转换URL += "|" + url;
								return ""; // 返回空字符串，因为这种情况下我们不需要内容
							} else {
								return content;
							}
						} else {
							throw new Error('请求失败');
						}
					} catch (error) {
						// 请求失败或超时，尝试从缓存读取
						const cachedResponse = await cache.match(cacheKey);
						if (cachedResponse) {
							const cachedContent = await cachedResponse.text();
							console.log(`使用缓存内容 ${url}:\n${cachedContent.slice(0, 10)}...`);
							return cachedResponse.text();
						} else {
							console.log(`无缓存可用 ${url}`);
							return ""; // 缓存中也没有，返回空字符串
						}
					}
				}));	
			
				for (const response of responses) {
					if (response) {
						req_data += base64Decode(response) + '\n';
					}
				}
			
			} catch (error) {
				console.error('处理 URL 时发生错误：', error);
			}
			if(env.WARP) 订阅转换URL += "|" + (await ADD(env.WARP)).join("|");
			//修复中文错误
			const utf8Encoder = new TextEncoder();
			const encodedData = utf8Encoder.encode(req_data);
			const text = String.fromCharCode.apply(null, encodedData);
			
			//去重
			const uniqueLines = new Set(text.split('\n'));
			const result = [...uniqueLines].join('\n');
			//console.log(result);
			
			const base64Data = btoa(result);

			if (订阅格式 == 'base64' || token == fakeToken){
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			} else if (订阅格式 == 'clash'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=clash&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'singbox'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=singbox&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			} else if (订阅格式 == 'surge'){
				subconverterUrl = `${subProtocol}://${subconverter}/sub?target=surge&url=${encodeURIComponent(订阅转换URL)}&insert=false&config=${encodeURIComponent(subconfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
			}
			//console.log(订阅转换URL);
			try {
				const subconverterResponse = await fetch(subconverterUrl);
				
				if (!subconverterResponse.ok) {
					return new Response(base64Data ,{
						headers: { 
							"content-type": "text/plain; charset=utf-8",
							"Profile-Update-Interval": `${SUBUpdateTime}`,
							"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
						}
					});
					//throw new Error(`Error fetching subconverterUrl: ${subconverterResponse.status} ${subconverterResponse.statusText}`);
				}
				let subconverterContent = await subconverterResponse.text();
				if (订阅格式 == 'clash') subconverterContent =await clashFix(subconverterContent);
				return new Response(subconverterContent, {
					headers: { 
						"Content-Disposition": `attachment; filename*=utf-8''${encodeURIComponent(FileName)}; filename=${FileName}`,
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,

					},
				});
			} catch (error) {
				return new Response(base64Data ,{
					headers: { 
						"content-type": "text/plain; charset=utf-8",
						"Profile-Update-Interval": `${SUBUpdateTime}`,
						"Subscription-Userinfo": `upload=${UD}; download=${UD}; total=${total}; expire=${expire}`,
					}
				});
			}
		}
	}
};

async function ADD(envadd) {
	var addtext = envadd.replace(/[	"'|\r\n]+/g, ',').replace(/,+/g, ',');  // 将空格、双引号、单引号和换行符替换为逗号
	//console.log(addtext);
	if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
	if (addtext.charAt(addtext.length -1) == ',') addtext = addtext.slice(0, addtext.length - 1);
	const add = addtext.split(',');
	//console.log(add);
	return add ;
}

async function nginx() {
	const text = `
	<!DOCTYPE html>
	<html>
	<head>
	<title>Welcome to nginx!</title>
	<style>
		body {
			width: 35em;
			margin: 0 auto;
			font-family: Tahoma, Verdana, Arial, sans-serif;
		}
	</style>
	</head>
	<body>
	<h1>Welcome to nginx!</h1>
	<p>If you see this page, the nginx web server is successfully installed and
	working. Further configuration is required.</p>
	
	<p>For online documentation and support please refer to
	<a href="http://nginx.org/">nginx.org</a>.<br/>
	Commercial support is available at
	<a href="http://nginx.com/">nginx.com</a>.</p>
	
	<p><em>Thank you for using nginx.</em></p>
	</body>
	</html>
	`
	return text ;
}

async function sendMessage(type, ip, add_data = "") {
	if ( BotToken !== '' && ChatID !== ''){
		let msg = "";
		const response = await fetch(`http://ip-api.com/json/${ip}?lang=zh-CN`);
		if (response.status == 200) {
			const ipInfo = await response.json();
			msg = `${type}\nIP: ${ip}\n国家: ${ipInfo.country}\n<tg-spoiler>城市: ${ipInfo.city}\n组织: ${ipInfo.org}\nASN: ${ipInfo.as}\n${add_data}`;
		} else {
			msg = `${type}\nIP: ${ip}\n<tg-spoiler>${add_data}`;
		}
	
		let url = "https://api.telegram.org/bot"+ BotToken +"/sendMessage?chat_id=" + ChatID + "&parse_mode=HTML&text=" + encodeURIComponent(msg);
		return fetch(url, {
			method: 'get',
			headers: {
				'Accept': 'text/html,application/xhtml+xml,application/xml;',
				'Accept-Encoding': 'gzip, deflate, br',
				'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
			}
		});
	}
}

function base64Decode(str) {
	const bytes = new Uint8Array(atob(str).split('').map(c => c.charCodeAt(0)));
	const decoder = new TextDecoder('utf-8');
	return decoder.decode(bytes);
}

async function MD5MD5(text) {
	const encoder = new TextEncoder();
  
	const firstPass = await crypto.subtle.digest('MD5', encoder.encode(text));
	const firstPassArray = Array.from(new Uint8Array(firstPass));
	const firstHex = firstPassArray.map(b => b.toString(16).padStart(2, '0')).join('');

	const secondPass = await crypto.subtle.digest('MD5', encoder.encode(firstHex.slice(7, 27)));
	const secondPassArray = Array.from(new Uint8Array(secondPass));
	const secondHex = secondPassArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
	return secondHex.toLowerCase();
}

function clashFix(content) {
	if(content.includes('wireguard') && !content.includes('remote-dns-resolve')){
		let lines;
		if (content.includes('\r\n')){
			lines = content.split('\r\n');
		} else {
			lines = content.split('\n');
		}
	
		let result = "";
		for (let line of lines) {
			if (line.includes('type: wireguard')) {
				const 备改内容 = `, mtu: 1280, udp: true`;
				const 正确内容 = `, mtu: 1280, remote-dns-resolve: true, udp: true`;
				result += line.replace(new RegExp(备改内容, 'g'), 正确内容) + '\n';
			} else {
				result += line + '\n';
			}
		}

		content = result;
	}
	return content;
}
