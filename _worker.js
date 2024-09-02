
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
trojan://zbb@118.26.39.145:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@162.159.153.224:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@162.159.153.207:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@192.210.213.19:4001?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@213.232.115.234:444?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#DE
trojan://zbb@144.24.169.81:8443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#DE
trojan://zbb@23.94.0.119:43778?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@8.222.212.110:1103?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#SG
trojan://zbb@23.94.94.209:2223?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@75.2.32.4:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@219.76.13.164:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@69.84.182.48:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2Fpyip%3Dts.hpc.hk#US
trojan://zbb@13.56.251.164:80?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3036:cf50:e5e2:ffd4:bed4:dfe0]:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@69.84.182.89:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@218.102.12.37:9999?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@[2606:4700:3036:cf50:e5e2:ff06:d689:9422]:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@[2606:4700:3036:cf13:ca1c:ce76:eadf:91d8]:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@69.84.182.140:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3036:0:43:dfa7:7b3:edbf]:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@198.62.62.185:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2Fpyip%3Dts.hpc.sg#US
trojan://zbb@115.90.136.116:10025?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@69.84.182.52:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@198.62.62.122:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@69.84.182.95:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@69.84.182.21:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3036:0:d8:85d7:4d33:ca00]:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@198.62.62.64:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2Fpyip%3Dts.hpc.sg#US
trojan://zbb@69.84.182.147:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@69.84.182.70:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@69.84.182.33:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@69.84.182.39:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3036:cf50:e5e2:ffd4:be6c:9ce9]:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@[2606:4700:3036:cf13:ca1c:929:4f86:5f80]:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@[2606:4700:3036:cf50:fb89:db72:f6ca:43f7]:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@183.99.100.120:50000?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@118.46.222.183:10443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@150.109.24.233:6666?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#SG
trojan://zbb@43.153.172.128:4321?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#JP
trojan://zbb@185.65.149.44:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#RU
trojan://zbb@cf.090227.xyz:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2Fpyip%3Dts.hpc.jp#%E5%8A%A0%E5%85%A5%E6%88%91%E7%9A%84%E9%A2%91%E9%81%93t.me%2FCMLiussss%E8%A7%A3%E9%94%81%E6%9B%B4%E5%A4%9A%E4%BC%98%E9%80%89%E8%8A%82%E7%82%B9
trojan://zbb@104.19.32.211:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@104.19.35.54:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@104.19.32.142:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@103.220.72.40:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@104.19.32.127:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@104.19.60.108:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@104.19.34.58:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@104.19.32.104:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@104.19.40.160:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@162.159.152.194:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@162.159.152.84:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@162.159.152.76:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@162.159.153.62:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@162.159.152.177:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@104.16.0.73:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@104.16.0.74:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT
trojan://zbb@104.16.0.75:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@www.b7yy.cc:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@m.tvfff.com:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#KR-clone
trojan://zbb@www.lancome.com.tw:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#CT-clone
trojan://zbb@c.w07.us.kg:443?security=tls&sni=epe.zb9.us.kg&alpn=h3&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#US-clone
trojan://zbb@epe.zb9.us.kg:443?security=tls&sni=epe.zb9.us.kg&fp=randomized&type=ws&host=epe.zb9.us.kg&path=%2F%3Fed%3D2560#epe.zb9.us.kg
vless://b4c6b261-922d-4732-b634-1cfdba80ec50@edg.w07.us.kg:443?encryption=none&security=tls&sni=edg.w07.us.kg&fp=randomized&type=ws&host=edg.w07.us.kg&path=%2F%3Fed%3D2560#edg.w07.us.kg
vless://f95fd995-9261-4162-9876-74f17213ec3d@[2a06:98c1:3120::57e:5cd8]:443?encryption=none&security=tls&sni=gj0.v07.us.kg&fp=randomized&type=ws&host=gj0.v07.us.kg&path=%2F%3Fed%3D2048#gj0.v07.us.kg
vless://f95fd995-9261-4162-9876-74f17213ec3d@gj0.v07.us.kg:443?encryption=none&security=tls&sni=gj0.v07.us.kg&fp=randomized&type=ws&host=gj0.v07.us.kg&path=%2F%3Fed%3D2048#gj0.v07.us.kg
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
