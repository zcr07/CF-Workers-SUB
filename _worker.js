
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
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:ff00::109e:3f22]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CM-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:8394::67f3:7fe3]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CM-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2a06:98c1:56::4244:64dd]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CN-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:9a62::1952:6bc2]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#j
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:8ca2::6bce:23b0]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CM-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:99e2::5fac:7711]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#e
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:99e2::5fac:7711]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CM-TG%40Warp_Key
trojan://zbb@96110.cf.090227.xyz:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#%E5%8A%A0%E5%85%A5%E6%88%91%E7%9A%84%E9%A2%91%E9%81%93t.me%2FCMLiussss%E8%A7%A3%E9%94%81%E6%9B%B4%E5%A4%9A%E4%BC%98%E9%80%89%E8%8A%82%E7%82%B9
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:8ca2::6bce:23b0]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#j
trojan://zbb@110.12.241.155:27017?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@198.62.62.81:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3036:82:8ebd:c471:8d28:b133]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:82:8ebd:da50:d63e:26bf]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:d4:5d64:b00e:a914:68]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:8974:42a9:b6cf:7eeb:83cb]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
trojan://zbb@198.62.62.186:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:89d5:c0eb:8cab:36e6:6af9]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
trojan://zbb@198.62.62.21:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@175.194.225.225:16004?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:1e:6451:f54a:5bce:ac16]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
trojan://zbb@[2606:4700:3036:b1d2:b3c6:f1c0:1098:a5fe]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
vless://37691131-db68-49bc-b1bb-840277c54390@cf.0sm.com:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#5z
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:8974:426a:57bc:4c1d:dd4f]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
trojan://zbb@[2606:4700:3036:82:8ebd:da50:d63e:26bf]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3036:d4:5d64:b00e:be3d:d6d5]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
vless://37691131-db68-49bc-b1bb-840277c54390@8.889288.xyz:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#5z
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:89d5:c056:bfad:63d9:ef63]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
trojan://zbb@198.62.62.67:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036::a774:45f9:b829]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
trojan://zbb@69.84.182.104:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3036:1e:647b:d28a:508b:fe95]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@[2606:4700:3036:0:db05:e84b:1896:9bba]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@198.62.62.176:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3036:d4:5d64:b00e:a914:68]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@69.84.182.116:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:1e:647b:d28a:508b:fe95]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
trojan://zbb@198.62.62.161:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@132.226.230.124:4434?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
trojan://zbb@198.62.62.10:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@198.62.62.233:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:311e::252a:255b]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CT-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:0:db05:e84b:1896:9bba]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
trojan://zbb@time.is:443?security=tls&sni=vm.zcr07.filegear-sg.me&fp=randomized&type=ws&host=vm.zcr07.filegear-sg.me&path=%2F%3Fed%3D2560#%E4%BD%A0%E5%8F%AF%E4%BB%A5%E5%8F%AA%E6%94%BE%E5%9F%9F%E5%90%8D%20%E5%A6%82%E4%B8%8B
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3004::2e86:1676]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CT-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:b1d2:b3c6:f1c0:1098:a5fe]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:59::450:4bb8]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CU-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2a06:98c1:310c::4035:246f]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#e
vless://37691131-db68-49bc-b1bb-840277c54390@[2a06:98c1:51::4f9a:5fda]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CN-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:e4::d76:1c7c]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#e
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:1e::3726:e37]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#e
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:b::5425:2040]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#e
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:311e::252a:255b]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#j
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:311a::1b2c:10a0]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CT-TG%40Warp_Key
trojan://zbb@172.247.129.92:7771?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://37691131-db68-49bc-b1bb-840277c54390@[2a06:98c1:51::40a8:2edb]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CN-TG%40Warp_Key
trojan://zbb@69.84.182.27:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3003::5ac5:346d]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CM-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3036:82:126d:414a:5388:517b]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CMCC-IPV6
vless://37691131-db68-49bc-b1bb-840277c54390@[2a06:98c1:3108::7a81:431a]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CT-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2a06:98c1:310c::4035:246f]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CT-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3004::2e86:1676]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#j
trojan://zbb@69.84.182.208:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@[2606:4700:3036:82:126d:414a:5388:517b]:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:4700::12de:79f8]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CU-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:e4::491c:7bf5]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#j
vless://37691131-db68-49bc-b1bb-840277c54390@[2a06:98c1:3108::7a81:431a]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#j
vless://37691131-db68-49bc-b1bb-840277c54390@[2a06:98c1:51::4f9a:5fda]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#j
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:e::e99:6994]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CU-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2803:f800:53::1bae:566c]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CN-TG%40Warp_Key
trojan://zbb@69.84.182.236:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:a9::3f49:6f57]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#j
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:b::5425:2040]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CT-TG%40Warp_Key
trojan://zbb@144.202.86.226:12001?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@icook.hk:443?security=tls&sni=vm.zcr07.filegear-sg.me&fp=randomized&type=ws&host=vm.zcr07.filegear-sg.me&path=%2F%3Fed%3D2560#%E8%8B%A5%E4%B8%8D%E5%B8%A6%E7%AB%AF%E5%8F%A3%E5%8F%B7%E9%BB%98%E8%AE%A4%E7%AB%AF%E5%8F%A3%E4%B8%BA443
trojan://zbb@[2606:4700:e7:25:4b9:f8f8:9bfb:774a]:443?security=tls&sni=vm.zcr07.filegear-sg.me&fp=randomized&type=ws&host=vm.zcr07.filegear-sg.me&path=%2F%3Fed%3D2560#IPv6%E4%B9%9FOK
trojan://zbb@69.84.182.192:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:4700::12de:79f8]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#j
trojan://zbb@166.1.221.30:18888?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@210.91.8.234:30042?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#KR
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:e4::491c:7bf5]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CU-TG%40Warp_Key
trojan://zbb@219.76.13.164:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@198.62.62.14:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@207.90.239.107:18888?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
trojan://zbb@69.84.182.198:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#US
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:a9::3f49:6f57]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#CU-TG%40Warp_Key
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:3003::5ac5:346d]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#j
trojan://zbb@219.76.13.183:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
trojan://zbb@www.wto.org:8443?security=tls&sni=vm.zcr07.filegear-sg.me&fp=randomized&type=ws&host=vm.zcr07.filegear-sg.me&path=%2F%3Fed%3D2560#www.wto.org
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:311a::1b2c:10a0]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#e
trojan://zbb@218.102.12.37:9999?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#HK
vless://37691131-db68-49bc-b1bb-840277c54390@[2606:4700:ff00::109e:3f22]:443?encryption=none&security=tls&sni=xb.zcr07.isgre.at&fp=random&type=ws&host=xb.zcr07.isgre.at&path=%2FproxyIP%3Dproxyip.multacom.fxxk.dedyn.io#j
trojan://zbb@104.19.55.182:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#CMCC-IPV6
trojan://zbb@cf.090227.xyz:443?security=tls&sni=vm.zcr07.filegear-sg.me&fp=randomized&type=ws&host=vm.zcr07.filegear-sg.me&path=%2F%3Fed%3D2560#%E5%8A%A0%E5%85%A5%E6%88%91%E7%9A%84%E9%A2%91%E9%81%93t.me%2FCMLiussss%E8%A7%A3%E9%94%81%E6%9B%B4%E5%A4%9A%E4%BC%98%E9%80%89%E8%8A%82%E7%82%B9
trojan://zbb@219.76.13.169:443?security=tls&sni=tr7.zbb07.us.kg&alpn=h3&fp=randomized&type=ws&host=tr7.zbb07.us.kg&path=%2F%3Fed%3D2560#HK


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
