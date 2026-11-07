// Real product catalogue (approximate launch prices in USD - verify with the manufacturer before selling).
// Format per line: Brand|Model|Price . "*" after the model marks a recent release (NEW badge). "#kind" sets the picture type for the lines below it.
const NOUN={phone:"Smartphone",laptop:"Laptop",tablet:"Tablet",reader:"E-reader",drawing:"Pen tablet / digital paper",watch:"Smartwatch",band:"Fitness band",ring:"Smart ring",glasses:"Smart / AR glasses",tracker:"Tracker / sensor",buds:"True wireless earbuds",headphones:"Wireless headphones",speaker:"Bluetooth speaker",camera:"Camera",action:"Action camera",drone:"Drone",instant:"Instant camera",keyboard:"Keyboard",mouse:"Mouse",console:"Game console / handheld",headset:"Gaming headset",controller:"Game controller",monitor:"Gaming monitor",chair:"Gaming chair",mic:"Microphone",hub:"Smart home device",seccam:"Security camera / doorbell",bulb:"Smart lighting",vacuum:"Robot vacuum",thermo:"Smart thermostat",plug:"Smart plug"};
const CATALOG=`Phones|Smartphones|phone
Apple|iPhone 15|799
Apple|iPhone 15 Plus|899
Apple|iPhone 15 Pro|999
Apple|iPhone 15 Pro Max|1199
Apple|iPhone 16*|799
Apple|iPhone 16 Plus*|899
Apple|iPhone 16 Pro*|999
Apple|iPhone 16 Pro Max*|1199
Apple|iPhone 16e*|599
Apple|iPhone SE (3rd gen)|429
Samsung|Galaxy S24|799
Samsung|Galaxy S24+|999
Samsung|Galaxy S24 Ultra|1299
Samsung|Galaxy S24 FE|649
Samsung|Galaxy S25*|799
Samsung|Galaxy S25+*|999
Samsung|Galaxy S25 Ultra*|1299
Samsung|Galaxy S23 Ultra|1199
Samsung|Galaxy A55 5G|439
Samsung|Galaxy A35 5G|399
Samsung|Galaxy Z Fold6|1899
Samsung|Galaxy Z Flip6|1099
Google|Pixel 8|699
Google|Pixel 8 Pro|999
Google|Pixel 8a|499
Google|Pixel 9*|799
Google|Pixel 9 Pro*|999
Google|Pixel 9 Pro XL*|1099
Google|Pixel 9 Pro Fold*|1799
Google|Pixel 9a*|499
Xiaomi|Xiaomi 14|999
Xiaomi|Xiaomi 14T|649
Xiaomi|Xiaomi 14T Pro|799
Xiaomi|Xiaomi 15*|999
Xiaomi|Redmi Note 13 Pro|299
Xiaomi|Redmi Note 13|199
Xiaomi|POCO X6 Pro|299
Xiaomi|POCO F6|329
OnePlus|OnePlus 12|799
OnePlus|OnePlus 13*|899
OnePlus|OnePlus 12R|499
OnePlus|OnePlus Nord 4|499
OnePlus|OnePlus Nord CE4|349
Motorola|Razr 50 Ultra|999
Nothing|Phone (2a)|349
Nothing|Phone (2)|599
Sony|Xperia 1 VI|1399
ASUS|ROG Phone 8 Pro|1199
Honor|Magic6 Pro|1199
Fairphone|Fairphone 5|699
Bluetooth Headphones|Audio|headphones
#buds
Apple|AirPods (3rd gen)|169
Apple|AirPods 4*|129
Apple|AirPods Pro (2nd gen)|249
Samsung|Galaxy Buds2 Pro|229
Samsung|Galaxy Buds3*|179
Samsung|Galaxy Buds3 Pro*|249
Samsung|Galaxy Buds FE|99
Google|Pixel Buds Pro|199
Google|Pixel Buds Pro 2*|229
Google|Pixel Buds A-Series|99
Sony|WF-1000XM4|279
Sony|WF-1000XM5|299
Sony|LinkBuds S|199
Sony|WF-C700N|119
Bose|QuietComfort Earbuds II|299
Bose|QuietComfort Ultra Earbuds|299
Jabra|Elite 10|249
Jabra|Elite 8 Active|199
Jabra|Elite 4|79
Sennheiser|Momentum True Wireless 4|299
Sennheiser|CX Plus True Wireless|129
Nothing|Ear (2)|149
Nothing|Ear (a)|99
Beats|Studio Buds +|169
Beats|Fit Pro|199
Beats|Powerbeats Pro 2*|249
OnePlus|Buds Pro 3*|179
Anker|Soundcore Liberty 4 NC|99
#headphones
Sony|WH-1000XM4|349
Sony|WH-1000XM5|399
Sony|WH-1000XM6*|449
Sony|WH-CH720N|149
Bose|QuietComfort 45|329
Bose|QuietComfort Headphones|349
Bose|QuietComfort Ultra Headphones|429
Bose|Noise Cancelling Headphones 700|379
Apple|AirPods Max|549
Sennheiser|Momentum 4 Wireless|379
Beats|Studio Pro|349
Beats|Solo 4*|199
Anker|Soundcore Space One|99
Marshall|Major V|149
Marshall|Monitor II A.N.C.|329
JBL|Tune 770NC|129
JBL|Live 770NC|199
Bowers & Wilkins|Px7 S2e|399
Audio-Technica|ATH-M50xBT2|199
Skullcandy|Crusher Evo|199
Sonos|Ace|449
Shure|AONIC 50 Gen 2|349
Bluetooth Speakers|Audio|speaker
JBL|Flip 6|130
JBL|Flip 7*|150
JBL|Charge 5|180
JBL|Xtreme 3|380
JBL|Xtreme 4*|380
JBL|Go 3|40
JBL|Go 4*|50
JBL|Clip 4|80
JBL|Clip 5*|80
JBL|Boombox 3|500
JBL|PartyBox 110|450
JBL|PartyBox 310|550
JBL|Pulse 5|250
Bose|SoundLink Flex|149
Bose|SoundLink Flex (2nd Gen)*|149
Bose|SoundLink Max*|399
Bose|SoundLink Micro|119
Bose|SoundLink Revolve+ II|329
Sonos|Roam|179
Sonos|Roam 2|179
Sonos|Move 2|449
Sonos|Era 100|249
Sonos|Era 300|449
Ultimate Ears|Wonderboom 3|100
Ultimate Ears|Boom 3|150
Ultimate Ears|Megaboom 3|200
Ultimate Ears|Hyperboom|440
Ultimate Ears|Miniroll|70
Marshall|Emberton II|169
Marshall|Stockwell II|249
Marshall|Willen|109
Marshall|Kilburn II|299
Marshall|Acton III|279
Marshall|Stanmore III|379
Marshall|Woburn III|549
Sony|SRS-XB100|60
Sony|SRS-XE300|130
Sony|SRS-XG300|250
Sony|ULT Field 1*|130
Sony|ULT Field 7*|450
Sony|SRS-XB13|60
Anker|Soundcore 2|40
Anker|Soundcore Motion+|100
Anker|Soundcore Boom 2|150
Anker|Soundcore Motion 300|130
Beats|Pill|150
Bang & Olufsen|Beosound A1 (2nd Gen)|279
Bang & Olufsen|Beosound Explore|249
Tribit|StormBox Micro 2|60
Harman Kardon|Onyx Studio 8|350
Laptops|Laptops|laptop
Apple|MacBook Air 13-inch (M2)|1099
Apple|MacBook Air 13-inch (M3)|1099
Apple|MacBook Air 15-inch (M3)|1299
Apple|MacBook Air 13-inch (M4)*|999
Apple|MacBook Air 15-inch (M4)*|1199
Apple|MacBook Pro 14-inch (M3)|1599
Apple|MacBook Pro 14-inch (M4)*|1599
Apple|MacBook Pro 14-inch (M4 Pro)*|1999
Apple|MacBook Pro 16-inch (M4 Pro)*|2499
Apple|MacBook Pro 16-inch (M4 Max)*|3499
Dell|XPS 13 9340|1299
Dell|XPS 14 9440|1699
Dell|XPS 15 9530|1899
Dell|XPS 16 9640|2299
Dell|Inspiron 14 Plus|849
Dell|Alienware m16 R2|1999
Dell|Alienware x14 R2|1599
HP|Spectre x360 14|1599
HP|Envy x360 14|949
HP|Pavilion Plus 14|799
HP|Omen 16|1299
HP|Victus 15|799
HP|Dragonfly G4|1899
Lenovo|ThinkPad X1 Carbon Gen 12|1899
Lenovo|ThinkPad T14s Gen 4|1399
Lenovo|ThinkPad E14 Gen 5|799
Lenovo|Yoga 9i 2-in-1|1599
Lenovo|IdeaPad Slim 5|649
Lenovo|Legion 5i Gen 9|1199
Lenovo|Legion Pro 7i Gen 9|2399
Lenovo|LOQ 15|799
ASUS|Zenbook 14 OLED|1099
ASUS|Zenbook S 14|1499
ASUS|Vivobook S 15 OLED|1099
ASUS|Vivobook 15|599
ASUS|ROG Zephyrus G14|1599
ASUS|ROG Zephyrus G16|1999
ASUS|ROG Strix G16|1499
ASUS|TUF Gaming A15|899
ASUS|ROG Flow X13|1499
Acer|Swift Go 14|799
Acer|Aspire 5|649
Acer|Nitro V 15|799
Acer|Predator Helios Neo 16|1199
Acer|Chromebook Spin 714|699
Acer|Predator Triton 14|1799
Microsoft|Surface Laptop 7*|999
Microsoft|Surface Laptop Go 3|799
Microsoft|Surface Laptop Studio 2|1999
Razer|Blade 14|2199
Tablets|Tablets|tablet
Apple|iPad (10th gen)|349
Apple|iPad (A16)*|349
Apple|iPad Air 11-inch (M2)|599
Apple|iPad Air 13-inch (M2)|799
Apple|iPad Air 11-inch (M3)*|599
Apple|iPad Air 13-inch (M3)*|799
Apple|iPad Pro 11-inch (M4)|999
Apple|iPad Pro 13-inch (M4)|1299
Apple|iPad mini (6th gen)|499
Apple|iPad mini (A17 Pro)*|499
Apple|iPad (9th gen)|329
Samsung|Galaxy Tab S9|799
Samsung|Galaxy Tab S9+|999
Samsung|Galaxy Tab S9 Ultra|1199
Samsung|Galaxy Tab S9 FE|449
Samsung|Galaxy Tab S10+*|999
Samsung|Galaxy Tab S10 Ultra*|1199
Samsung|Galaxy Tab A9+|219
Samsung|Galaxy Tab A9|149
Samsung|Galaxy Tab S6 Lite (2024)|349
Google|Pixel Tablet|499
Lenovo|Tab P12|349
Lenovo|Tab M10 Plus (3rd Gen)|209
Lenovo|Tab M11|179
Xiaomi|Pad 6|349
Xiaomi|Pad 6 Pro|449
Xiaomi|Pad 7*|349
Xiaomi|Redmi Pad Pro|299
OnePlus|Pad|479
OnePlus|Pad 2|549
Microsoft|Surface Pro 9|999
Microsoft|Surface Pro 10|1199
Microsoft|Surface Pro 11*|999
Microsoft|Surface Go 4|579
Amazon|Fire HD 8|100
Amazon|Fire HD 10|140
Amazon|Fire 7|60
Amazon|Fire Max 11|230
#reader
Amazon|Kindle (2022)|100
Amazon|Kindle Paperwhite|160
Amazon|Kindle Paperwhite Signature Edition|190
Amazon|Kindle Oasis|250
Amazon|Kindle Scribe|340
Kobo|Clara 2E|130
Kobo|Libra 2|180
Kobo|Sage|260
Kobo|Elipsa 2E|400
#drawing
reMarkable|reMarkable 2|399
Wacom|Intuos Medium|100
Wacom|Cintiq 16|650
Smart Watches|Wearables|watch
Apple|Watch Series 8|399
Apple|Watch Series 9|399
Apple|Watch Series 10*|399
Apple|Watch Ultra 2|799
Apple|Watch SE (2nd gen)|249
Samsung|Galaxy Watch5 Pro|449
Samsung|Galaxy Watch6|299
Samsung|Galaxy Watch6 Classic|399
Samsung|Galaxy Watch7*|299
Samsung|Galaxy Watch Ultra*|649
Samsung|Galaxy Watch FE*|199
Google|Pixel Watch|349
Google|Pixel Watch 2|349
Google|Pixel Watch 3*|349
Fitbit|Sense 2|250
Fitbit|Versa 4|230
Garmin|Forerunner 55|200
Garmin|Forerunner 165|250
Garmin|Forerunner 255|350
Garmin|Forerunner 265|450
Garmin|Forerunner 965|600
Garmin|Fenix 7|700
Garmin|Fenix 8*|1000
Garmin|Venu 3|450
Garmin|Venu Sq 2|250
Garmin|Instinct 2|300
Garmin|Instinct 3 AMOLED*|450
Garmin|Vivoactive 5|300
Garmin|Lily 2|250
Garmin|Epix Gen 2|900
Amazfit|GTR 4|200
Amazfit|GTS 4|200
Amazfit|Balance|230
Amazfit|Active|130
Amazfit|T-Rex 3|280
Amazfit|Bip 5|90
Huawei|Watch GT 4|250
Huawei|Watch Fit 3*|100
Huawei|Watch Ultimate|800
OnePlus|Watch 2|299
Polar|Vantage V3|600
Suunto|Race|450
#band
Samsung|Galaxy Fit3|60
Fitbit|Charge 6|160
Fitbit|Inspire 3|100
Garmin|Vivosmart 5|150
Amazfit|Band 7|50
Xiaomi|Smart Band 8|50
Xiaomi|Smart Band 9*|50
Huawei|Band 9*|70
Wearables|Wearables|tracker
#glasses
Meta|Ray-Ban Meta Wayfarer|299
Meta|Ray-Ban Meta Skyler|299
Meta|Ray-Ban Meta Headliner|299
Oakley|Meta HSTN*|399
Amazon|Echo Frames (3rd gen)|270
XREAL|Air 2|399
XREAL|Air 2 Pro|449
XREAL|Air 2 Ultra|699
XREAL|One*|499
VITURE|One|439
VITURE|Pro|449
Rokid|Max|439
Brilliant Labs|Frame|349
Even Realities|G1*|599
Apple|Vision Pro|3499
#ring
Oura|Ring Gen3|299
Oura|Ring 4*|349
Ultrahuman|Ring Air|349
Samsung|Galaxy Ring*|399
RingConn|Gen 2*|299
Amazfit|Helio Ring*|299
#tracker
Apple|AirTag|29
Tile|Mate|25
Tile|Pro|35
Tile|Slim|35
Samsung|Galaxy SmartTag2|30
Samsung|Galaxy SmartTag+|30
Chipolo|ONE|28
Chipolo|CARD Spot|35
Chipolo|ONE Spot|28
Pebblebee|Clip|30
Pebblebee|Card|35
Garmin|HRM-Pro Plus|130
Garmin|HRM 600*|170
Garmin|HRM-Dual|70
Polar|H10|90
Polar|Verity Sense|90
Wahoo|Tickr|50
Wahoo|Tickr X|80
Coros|Heart Rate Armband|90
Garmin|Index Sleep Monitor|170
Withings|Sleep Analyzer|130
Withings|BPM Connect|100
Withings|Thermo|100
Interaxon|Muse 2|250
Interaxon|Muse S|400
#band
Garmin|vivofit jr. 3|80
Fitbit|Ace LTE|230
Garmin|Bounce 2|150
Amazfit|Helio Strap*|100
Cameras|Cameras|camera
Sony|A7 IV|2499
Sony|A7C II|2199
Sony|A7R V|3899
Sony|A7S III|3499
Sony|A6700|1399
Sony|A6400|899
Sony|ZV-E10 II|999
Sony|ZV-1 II|899
Sony|ZV-E1|2199
Canon|EOS R5|3899
Canon|EOS R6 Mark II|2499
Canon|EOS R8|1499
Canon|EOS R10|979
Canon|EOS R7|1499
Canon|EOS R50|679
Canon|EOS R100|479
Canon|PowerShot G7 X Mark III|749
Nikon|Z8|3999
Nikon|Z6III*|2499
Nikon|Zf|1999
Nikon|Zfc|959
Nikon|Z50|859
Fujifilm|X-T5|1699
Fujifilm|X-S20|1299
Fujifilm|X100VI*|1599
Fujifilm|X-T50*|1399
Fujifilm|X-H2|1999
Fujifilm|X-E4|849
Panasonic|Lumix S5 II|1999
Panasonic|Lumix GH6|2199
Leica|Q3|5995
OM System|OM-1 Mark II|2399
#instant
Fujifilm|Instax Mini 12|80
Fujifilm|Instax Mini 99|200
Fujifilm|Instax Wide 400|100
Polaroid|Now+ Gen 2|150
Polaroid|Go|100
#action
GoPro|Hero 11 Black|350
GoPro|Hero 12 Black|400
GoPro|Hero 13 Black*|400
DJI|Osmo Action 4|400
DJI|Osmo Action 5 Pro*|340
Insta360|X4*|500
Insta360|Ace Pro 2*|400
Insta360|GO 3|380
#drone
DJI|Mini 3|469
DJI|Mini 4 Pro|759
DJI|Air 3|1099
DJI|Mavic 3 Pro|2199
DJI|Avata 2*|999
Gaming & Accessories|Gaming|console
Sony|PlayStation 5 Slim|499
Sony|PlayStation 5 Digital Edition|449
Sony|PlayStation 5 Pro*|699
Microsoft|Xbox Series X|499
Microsoft|Xbox Series S|299
Nintendo|Switch OLED Model|349
Nintendo|Switch Lite|199
Nintendo|Switch 2*|449
Valve|Steam Deck OLED|549
ASUS|ROG Ally X*|799
#controller
Sony|DualSense Wireless Controller|75
Sony|DualSense Edge|200
Microsoft|Xbox Wireless Controller|65
Microsoft|Xbox Elite Wireless Controller Series 2|180
Nintendo|Switch Pro Controller|70
8BitDo|Pro 2|50
Razer|Kishi V2|100
SCUF|Instinct Pro|200
#keyboard
Logitech|G915 TKL|230
Logitech|G Pro X TKL|200
Razer|BlackWidow V4 Pro|230
Razer|Huntsman V3 Pro|200
Corsair|K70 RGB Pro|170
Corsair|K100 RGB|230
SteelSeries|Apex Pro TKL|190
Keychron|Q1 Pro|200
#mouse
Logitech|G502 X|80
Logitech|G Pro X Superlight 2|160
Logitech|MX Master 3S|100
Razer|DeathAdder V3 Pro|150
Razer|Viper V3 Pro|160
Razer|Basilisk V3|70
SteelSeries|Aerox 5 Wireless|150
#headset
SteelSeries|Arctis Nova Pro Wireless|350
SteelSeries|Arctis Nova 7|180
Logitech|G Pro X 2 Lightspeed|250
HyperX|Cloud II|100
HyperX|Cloud III|100
Razer|BlackShark V2 Pro|180
Corsair|HS80 RGB Wireless|150
#monitor
Dell|Alienware AW3423DW|1300
Samsung|Odyssey G9 49-inch|1400
LG|UltraGear 27GP850-B|450
Gigabyte|M27Q|300
MSI|Optix MAG274QRF-QD|400
#chair
Secretlab|Titan Evo|549
Secretlab|Omega|400
Razer|Iskur|500
#mic
Blue|Yeti|130
Shure|MV7|250
Smart Home|Smart Home|hub
Amazon|Echo Dot (5th Gen)|50
Amazon|Echo Pop|40
Amazon|Echo (4th Gen)|100
Amazon|Echo Show 5 (3rd Gen)|90
Amazon|Echo Show 8 (3rd Gen)|150
Amazon|Echo Studio|200
Google|Nest Mini|50
Google|Nest Audio|100
Google|Nest Hub (2nd Gen)|100
Apple|HomePod mini|99
Philips Hue|Bridge|60
Yale|Assure Lock 2|250
August|Wi-Fi Smart Lock (4th Gen)|230
SwitchBot|Hub Mini|40
#seccam
Ring|Video Doorbell (2nd Gen)|100
Ring|Video Doorbell Pro 2|250
Ring|Stick Up Cam Battery|100
Ring|Indoor Cam (2nd Gen)|60
Google|Nest Cam (battery)|180
Google|Nest Doorbell (battery)|180
Arlo|Pro 5S 2K|250
Blink|Mini|35
Blink|Outdoor (4th Gen)|100
Wyze|Cam v3|36
TP-Link|Tapo C200|25
#bulb
Philips Hue|White and Color Ambiance Starter Kit|200
Philips Hue|Play Light Bars (2-pack)|140
Philips Hue|Go Portable Light|80
Philips Hue|Lightstrip Plus|80
Nanoleaf|Essentials Smart Bulb|20
LIFX|Mini Color|25
Govee|LED Strip Lights|25
#vacuum
iRobot|Roomba i3+ EVO|400
iRobot|Roomba j7+|600
Roborock|S8 Pro Ultra|1600
Roborock|Q Revo|650
Eufy|RoboVac 11S|200
Ecovacs|Deebot X2 Omni|1000
#thermo
Google|Nest Learning Thermostat (3rd Gen)|250
Google|Nest Thermostat|130
Ecobee|Smart Thermostat Premium|250
Ecobee|ecobee3 lite|170
Honeywell Home|T9 Smart Thermostat|200
Honeywell Home|T6 Pro Smart Thermostat|130
#plug
TP-Link|Kasa Smart Plug Mini EP10|15
Wyze|Plug|15
Amazon|Smart Plug|25
Meross|Smart Plug Mini|15
Eve|Energy|40
TP-Link|Tapo P100|12`;
const PRODUCTS=[];
(()=>{let sc="",cat="",dk="",k0="",id=1;CATALOG.split("\n").forEach(l=>{const f=l.split("|");if(l[0]==="#"){k0=l.slice(1);return}if(f.length===3&&isNaN(f[2])){sc=f[0];cat=f[1];dk=f[2];k0=dk;return}let [brand,model,price]=f;const isNew=model.endsWith("*");if(isNew)model=model.slice(0,-1);PRODUCTS.push({id:id++,name:brand+" "+model,brand,model,category:cat,shopCategory:sc,kind:k0,price:+price,oldPrice:+price,badge:isNew?"NEW":"",description:brand+" "+model+" \u2014 "+NOUN[k0]+"."})})})();
const HERO_PHONE="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 400"><defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7898ff"/><stop offset="1" stop-color="#2b3f9e"/></linearGradient><linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d2a66"/><stop offset="1" stop-color="#0a0e1c"/></linearGradient><linearGradient id="c" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".25"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><ellipse cx="250" cy="392" rx="150" ry="9" fill="#000" opacity=".4"/><g transform="rotate(13 335 210)"><rect x="262" y="44" width="170" height="332" rx="36" fill="url(#a)" stroke="#fff4" stroke-width="3"/><rect x="262" y="44" width="170" height="332" rx="36" fill="url(#c)"/><rect x="280" y="62" width="70" height="70" rx="20" fill="#0b1020" stroke="#fff3" stroke-width="2"/><circle cx="302" cy="84" r="11" fill="#1a2350" stroke="#cfd6e6" stroke-width="3"/><circle cx="328" cy="84" r="11" fill="#1a2350" stroke="#cfd6e6" stroke-width="3"/><circle cx="315" cy="109" r="11" fill="#1a2350" stroke="#cfd6e6" stroke-width="3"/><circle cx="365" cy="76" r="6" fill="#fff" opacity=".8"/></g><rect x="108" y="18" width="184" height="364" rx="40" fill="#0d1119" stroke="#fff5" stroke-width="3"/><rect x="118" y="28" width="164" height="344" rx="32" fill="url(#b)"/><rect x="172" y="38" width="56" height="15" rx="7.5" fill="#000"/><text x="200" y="98" text-anchor="middle" font-family="Inter,Arial" font-size="9" font-weight="800" letter-spacing="3" fill="#7898ff">TECHZONE</text><text x="200" y="146" text-anchor="middle" font-family="Inter,Arial" font-size="46" font-weight="700" fill="#fff">9:41</text><rect x="134" y="168" width="132" height="64" rx="16" fill="#fff" opacity=".1"/><rect x="148" y="184" width="60" height="8" rx="4" fill="#fff" opacity=".7"/><rect x="148" y="204" width="96" height="7" rx="3.5" fill="#fff" opacity=".35"/><rect x="134" y="244" width="62" height="62" rx="16" fill="#527bff"/><rect x="204" y="244" width="62" height="62" rx="16" fill="#26b98a" opacity=".75"/><path d="M148 290l12-14 10 8 14-18" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="235" cy="275" r="14" fill="none" stroke="#fff" stroke-width="4"/><rect x="132" y="326" width="136" height="36" rx="18" fill="#fff" opacity=".14"/><circle cx="158" cy="344" r="8" fill="#7898ff"/><circle cx="186" cy="344" r="8" fill="#26b98a"/><circle cx="214" cy="344" r="8" fill="#ffb24d"/><circle cx="242" cy="344" r="8" fill="#ff6b8a"/><rect x="118" y="28" width="164" height="344" rx="32" fill="url(#c)"/></svg>`);
const REAL={}; // optional: put a real photo URL per product id, e.g. REAL[1]="img/nova-x.jpg" -> used instead of the generated picture
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function kind(p){if(p.kind)return p.kind;const n=p.name.toLowerCase(),c=p.shopCategory,t=r=>r.test(n);
 if(c==="Phones")return"phone";
 if(c==="Bluetooth Headphones")return t(/earbud|earphone/)?"buds":"headphones";
 if(c==="Bluetooth Speakers")return"speaker";
 if(c==="Laptops")return"laptop";
 if(c==="Tablets")return t(/reader/)?"reader":t(/drawing|stylus/)?"drawing":"tablet";
 if(c==="Smart Watches")return t(/ring/)?"ring":t(/band/)?"band":"watch";
 if(c==="Wearables")return t(/glasses/)?"glasses":"tracker";
 if(c==="Cameras")return t(/lens/)?"lens":t(/drone/)?"drone":t(/action/)?"action":t(/instant/)?"instant":t(/tripod/)?"tripod":"camera";
 if(c==="Gaming & Accessories")return t(/keyboard/)?"keyboard":t(/mouse/)?"mouse":t(/console|handheld/)?"console":t(/headset/)?"headset":t(/controller/)?"controller":t(/monitor/)?"monitor":t(/chair/)?"chair":t(/microphone/)?"mic":"keyboard";
 return t(/camera|doorbell/)?"seccam":t(/\bled\b|light/)?"bulb":t(/vacuum/)?"vacuum":t(/thermostat/)?"thermo":t(/plug/)?"plug":t(/speaker|display/)?"speaker":"hub"}
const O='stroke="#fff4" stroke-width="3"';
const SH={
phone:(b,a)=>`<rect x="128" y="48" width="144" height="304" rx="30" fill="${b}" ${O}/><rect x="138" y="58" width="124" height="284" rx="22" fill="${a}"/><rect x="138" y="58" width="124" height="284" rx="22" fill="url(#g)"/><rect x="180" y="68" width="40" height="10" rx="5" fill="#000b"/><rect x="156" y="130" width="88" height="10" rx="5" fill="#fff6"/><rect x="156" y="152" width="58" height="8" rx="4" fill="#fff4"/><circle cx="200" cy="270" r="32" fill="#fff3"/>`,
laptop:(b,a)=>`<rect x="86" y="96" width="228" height="150" rx="12" fill="${b}" ${O}/><rect x="96" y="106" width="208" height="130" rx="5" fill="${a}"/><rect x="96" y="106" width="208" height="130" rx="5" fill="url(#g)"/><path d="M56 252h288l-18 24H74z" fill="#c9d0de"/><rect x="170" y="252" width="60" height="6" rx="3" fill="#8f98ab"/>`,
tablet:(b,a)=>`<rect x="88" y="64" width="224" height="272" rx="24" fill="${b}" ${O}/><rect x="100" y="76" width="200" height="248" rx="14" fill="${a}"/><rect x="100" y="76" width="200" height="248" rx="14" fill="url(#g)"/><rect x="124" y="120" width="110" height="10" rx="5" fill="#fff6"/><rect x="124" y="144" width="150" height="8" rx="4" fill="#fff4"/><rect x="124" y="164" width="130" height="8" rx="4" fill="#fff4"/>`,
reader:(b,a)=>`<rect x="104" y="60" width="192" height="280" rx="20" fill="${b}" ${O}/><rect x="116" y="72" width="168" height="256" rx="8" fill="#e4e7ee"/>${[100,124,148,172,196,220].map(y=>`<rect x="132" y="${y}" width="${y%48?120:136}" height="7" rx="3" fill="#59627a"/>`).join("")}<rect x="132" y="260" width="60" height="8" rx="4" fill="${a}"/>`,
drawing:(b,a)=>`<rect x="66" y="110" width="268" height="190" rx="16" fill="${b}" ${O}/><rect x="78" y="122" width="244" height="166" rx="8" fill="${a}"/><rect x="78" y="122" width="244" height="166" rx="8" fill="url(#g)"/><path d="M106 260Q156 160 216 206T296 150" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".75"/><rect x="304" y="70" width="12" height="150" rx="6" fill="#e9ecf3" transform="rotate(28 310 145)"/>`,
watch:(b,a)=>`<rect x="168" y="36" width="64" height="328" rx="24" fill="${b}"/><rect x="128" y="128" width="144" height="144" rx="40" fill="#0d1220" stroke="${a}" stroke-width="5"/><rect x="138" y="138" width="124" height="124" rx="32" fill="${a}" opacity=".35"/><circle cx="200" cy="200" r="38" fill="none" stroke="#fff" stroke-width="4" opacity=".8"/><path d="M200 200v-24M200 200l16 10" stroke="#fff" stroke-width="5" stroke-linecap="round"/><rect x="272" y="170" width="8" height="30" rx="4" fill="#9aa4bb"/>`,
ring:(b,a)=>`<circle cx="200" cy="215" r="88" fill="none" stroke="${a}" stroke-width="30"/><circle cx="200" cy="215" r="88" fill="none" stroke="url(#g)" stroke-width="30"/><rect x="176" y="96" width="48" height="26" rx="8" fill="${b}" stroke="#fff6" stroke-width="2"/>`,
band:(b,a)=>`<rect x="40" y="168" width="320" height="64" rx="32" fill="${b}"/><rect x="138" y="160" width="124" height="80" rx="26" fill="#0d1220" stroke="${a}" stroke-width="4"/><rect x="150" y="172" width="100" height="56" rx="16" fill="${a}" opacity=".4"/><path d="M162 208l16-18 16 10 18-22 22 14" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
glasses:(b,a)=>`<rect x="60" y="150" width="120" height="90" rx="38" fill="${a}" fill-opacity=".35" stroke="${b}" stroke-width="12"/><rect x="220" y="150" width="120" height="90" rx="38" fill="${a}" fill-opacity=".35" stroke="${b}" stroke-width="12"/><path d="M180 180q20-14 40 0" stroke="${b}" stroke-width="10" fill="none"/><path d="M60 175L30 160M340 175l30-15" stroke="${b}" stroke-width="10" stroke-linecap="round"/>`,
tracker:(b,a)=>`<rect x="118" y="118" width="164" height="164" rx="52" fill="${b}" ${O}/><circle cx="200" cy="200" r="44" fill="${a}"/><circle cx="200" cy="200" r="44" fill="url(#g)"/><circle cx="200" cy="200" r="16" fill="#fff" opacity=".8"/>`,
buds:(b,a)=>`<rect x="100" y="210" width="200" height="110" rx="44" fill="${b}" ${O}/><rect x="100" y="244" width="200" height="6" fill="#0006"/><circle cx="262" cy="282" r="6" fill="${a}"/><g fill="#eef1f7"><circle cx="150" cy="120" r="34"/><rect x="138" y="128" width="20" height="70" rx="10"/><circle cx="250" cy="120" r="34"/><rect x="242" y="128" width="20" height="70" rx="10"/></g><circle cx="150" cy="116" r="12" fill="${a}"/><circle cx="250" cy="116" r="12" fill="${a}"/>`,
headphones:(b,a)=>`<path d="M110 240v-40a90 90 0 0 1 180 0v40" fill="none" stroke="${b}" stroke-width="20" stroke-linecap="round"/><path d="M112 230v-30a88 88 0 0 1 176 0v30" fill="none" stroke="${a}" stroke-width="5" stroke-linecap="round" opacity=".8"/><rect x="82" y="212" width="58" height="110" rx="26" fill="${b}" stroke="${a}" stroke-width="4"/><rect x="260" y="212" width="58" height="110" rx="26" fill="${b}" stroke="${a}" stroke-width="4"/>`,
speaker:(b,a)=>`<rect x="128" y="76" width="144" height="248" rx="38" fill="${b}" ${O}/><circle cx="200" cy="148" r="32" fill="#0d1220" stroke="${a}" stroke-width="4"/><circle cx="200" cy="148" r="12" fill="${a}"/><circle cx="200" cy="244" r="48" fill="#0d1220" stroke="${a}" stroke-width="4"/><circle cx="200" cy="244" r="22" fill="${a}" opacity=".6"/>`,
camera:(b,a)=>`<rect x="76" y="130" width="248" height="156" rx="18" fill="${b}" ${O}/><path d="M146 130l12-26h50l12 26z" fill="${b}" ${O}/><circle cx="200" cy="208" r="62" fill="#0d1220" stroke="#cfd6e6" stroke-width="6"/><circle cx="200" cy="208" r="38" fill="${a}" opacity=".5"/><circle cx="200" cy="208" r="14" fill="#fff" opacity=".7"/><circle cx="290" cy="156" r="8" fill="${a}"/>`,
lens:(b,a)=>`<rect x="150" y="66" width="100" height="44" rx="8" fill="${b}"/><rect x="132" y="110" width="136" height="190" rx="12" fill="${b}" ${O}/><rect x="132" y="140" width="136" height="10" fill="${a}"/><rect x="132" y="236" width="136" height="26" fill="#0006"/><rect x="144" y="300" width="112" height="22" rx="8" fill="#0d1220" stroke="${a}" stroke-width="3"/>`,
drone:(b,a)=>`<path d="M170 190L90 130M230 190l80-60M170 210L90 270M230 210l80 60" stroke="${b}" stroke-width="10" stroke-linecap="round"/><g fill="${a}" opacity=".5"><ellipse cx="82" cy="124" rx="40" ry="10"/><ellipse cx="318" cy="124" rx="40" ry="10"/><ellipse cx="82" cy="276" rx="40" ry="10"/><ellipse cx="318" cy="276" rx="40" ry="10"/></g><rect x="156" y="176" width="88" height="56" rx="20" fill="${b}" ${O}/><circle cx="200" cy="248" r="16" fill="#0d1220" stroke="${a}" stroke-width="3"/>`,
action:(b,a)=>`<rect x="140" y="104" width="50" height="36" rx="6" fill="${b}"/><rect x="110" y="140" width="180" height="130" rx="26" fill="${b}" ${O}/><circle cx="170" cy="205" r="42" fill="#0d1220" stroke="#cfd6e6" stroke-width="5"/><circle cx="170" cy="205" r="20" fill="${a}" opacity=".6"/><rect x="232" y="160" width="46" height="34" rx="8" fill="${a}" opacity=".5"/>`,
instant:(b,a)=>`<rect x="86" y="120" width="228" height="170" rx="26" fill="${b}" ${O}/><rect x="86" y="120" width="228" height="56" rx="26" fill="#fff" opacity=".12"/><circle cx="200" cy="224" r="48" fill="#0d1220" stroke="#cfd6e6" stroke-width="6"/><circle cx="200" cy="224" r="22" fill="${a}" opacity=".6"/><rect x="262" y="140" width="36" height="14" rx="5" fill="${a}"/><rect x="120" y="290" width="160" height="14" rx="4" fill="#eef1f7"/>`,
tripod:(b,a)=>`<path d="M200 130L120 340M200 130v214M200 130l80 210" stroke="${b}" stroke-width="12" stroke-linecap="round"/><rect x="146" y="84" width="108" height="40" rx="12" fill="${a}"/><rect x="178" y="58" width="44" height="28" rx="6" fill="${b}" ${O}/>`,
keyboard:(b,a)=>`<rect x="40" y="128" width="320" height="150" rx="16" fill="${b}" ${O}/>`+[0,1,2].map(r=>Array.from({length:10},(_,c)=>`<rect x="${54+c*29.5}" y="${142+r*30}" width="24" height="24" rx="5" fill="${(r+c)%7===0?a:"#e6e9f2"}" opacity=".9"/>`).join("")).join("")+`<rect x="110" y="236" width="180" height="24" rx="6" fill="#e6e9f2" opacity=".9"/>`,
mouse:(b,a)=>`<rect x="146" y="80" width="108" height="210" rx="54" fill="${b}" ${O}/><path d="M200 80v80M146 160h108" stroke="#fff4" stroke-width="3"/><rect x="190" y="112" width="20" height="34" rx="10" fill="${a}"/>`,
console:(b,a)=>`<rect x="112" y="64" width="176" height="272" rx="40" fill="#e9ecf3"/><rect x="112" y="64" width="176" height="272" rx="40" fill="url(#g)"/><rect x="236" y="64" width="52" height="272" rx="26" fill="${b}"/><circle cx="170" cy="250" r="22" fill="${a}"/><rect x="150" y="120" width="40" height="6" rx="3" fill="#8f98ab"/>`,
controller:(b,a)=>`<path d="M110 150h180c40 0 60 60 52 110-6 34-40 40-60 10l-20-30H138l-20 30c-20 30-54 24-60-10-8-50 12-110 52-110z" fill="${b}" ${O}/><path d="M126 190v32M110 206h32" stroke="#e6e9f2" stroke-width="8" stroke-linecap="round"/><circle cx="272" cy="190" r="9" fill="${a}"/><circle cx="296" cy="212" r="9" fill="#e6e9f2"/><circle cx="248" cy="212" r="9" fill="#e6e9f2"/><circle cx="272" cy="234" r="9" fill="#e6e9f2"/><circle cx="168" cy="240" r="14" fill="#0d1220"/><circle cx="232" cy="240" r="14" fill="#0d1220"/>`,
monitor:(b,a)=>`<rect x="56" y="84" width="288" height="184" rx="14" fill="${b}" ${O}/><rect x="66" y="94" width="268" height="164" rx="6" fill="${a}"/><rect x="66" y="94" width="268" height="164" rx="6" fill="url(#g)"/><path d="M100 240l50-60 40 40 40-50 70 70z" fill="#fff" opacity=".25"/><rect x="186" y="268" width="28" height="48" fill="#aab3c5"/><rect x="140" y="316" width="120" height="12" rx="6" fill="#aab3c5"/>`,
headset:(b,a)=>SH.headphones(b,a)+`<path d="M96 322q-6 30 50 30" stroke="${b}" stroke-width="8" fill="none" stroke-linecap="round"/><circle cx="152" cy="352" r="9" fill="${a}"/>`,
chair:(b,a)=>`<rect x="138" y="52" width="124" height="190" rx="36" fill="${b}" ${O}/><rect x="170" y="70" width="60" height="120" rx="20" fill="${a}" opacity=".7"/><rect x="116" y="246" width="168" height="40" rx="18" fill="${b}" ${O}/><rect x="194" y="286" width="12" height="44" fill="#aab3c5"/><path d="M200 330L120 352M200 330l80 22M200 330v26" stroke="#aab3c5" stroke-width="8" stroke-linecap="round"/>`,
mic:(b,a)=>`<rect x="166" y="64" width="68" height="140" rx="34" fill="${b}" ${O}/><path d="M174 100h52M174 124h52M174 148h52" stroke="${a}" stroke-width="4"/><path d="M130 180a70 70 0 0 0 140 0" fill="none" stroke="#aab3c5" stroke-width="8" stroke-linecap="round"/><path d="M200 250v70" stroke="#aab3c5" stroke-width="8"/><rect x="150" y="318" width="100" height="14" rx="7" fill="#aab3c5"/>`,
hub:(b,a)=>`<circle cx="200" cy="200" r="96" fill="${b}" ${O}/><circle cx="200" cy="200" r="68" fill="none" stroke="${a}" stroke-width="6"/><circle cx="200" cy="200" r="16" fill="${a}"/>`,
seccam:(b,a)=>`<rect x="140" y="300" width="120" height="18" rx="9" fill="#aab3c5"/><circle cx="200" cy="190" r="100" fill="${b}" ${O}/><circle cx="200" cy="190" r="54" fill="#0d1220" stroke="#cfd6e6" stroke-width="5"/><circle cx="200" cy="190" r="24" fill="${a}" opacity=".7"/><circle cx="268" cy="126" r="6" fill="${a}"/>`,
bulb:(b,a)=>`<circle cx="200" cy="160" r="124" fill="${a}" opacity=".15"/><circle cx="200" cy="160" r="86" fill="${a}"/><circle cx="200" cy="160" r="86" fill="url(#g)"/><rect x="164" y="240" width="72" height="56" rx="10" fill="#c9d0de"/><path d="M168 262h64M168 278h64" stroke="#8f98ab" stroke-width="5"/>`,
vacuum:(b,a)=>`<circle cx="200" cy="210" r="116" fill="${b}" ${O}/><circle cx="200" cy="210" r="70" fill="#0d1220" stroke="${a}" stroke-width="5"/><circle cx="200" cy="210" r="18" fill="${a}"/><rect x="170" y="108" width="60" height="14" rx="7" fill="${a}" opacity=".6"/>`,
thermo:(b,a)=>`<circle cx="200" cy="200" r="108" fill="${b}" ${O}/><circle cx="200" cy="200" r="86" fill="#0d1220" stroke="${a}" stroke-width="8"/><text x="200" y="222" text-anchor="middle" font-family="Inter,Arial" font-size="60" font-weight="800" fill="#fff">21°</text>`,
plug:(b,a)=>`<rect x="132" y="96" width="136" height="200" rx="34" fill="#e9ecf3"/><rect x="132" y="96" width="136" height="200" rx="34" fill="url(#g)"/><rect x="172" y="160" width="12" height="40" rx="5" fill="#2b3245"/><rect x="216" y="160" width="12" height="40" rx="5" fill="#2b3245"/><circle cx="200" cy="248" r="12" fill="${a}"/>`};
const hx=(h,s,l)=>{s/=100;l/=100;const k=n=>(n+h/30)%12,a=s*Math.min(l,1-l),f=n=>l-a*Math.max(-1,Math.min(k(n)-3,Math.min(9-k(n),1)));return"#"+[f(0),f(8),f(4)].map(x=>Math.round(x*255).toString(16).padStart(2,"0")).join("")};
const SH0={buds:SH.buds,headphones:SH.headphones,tablet:SH.tablet,speaker:SH.speaker,tracker:SH.tracker,camera:SH.camera};
const LENS=(cx,cy,r,a)=>`<circle cx="${cx}" cy="${cy}" r="${r}" fill="#0d1220" stroke="#cfd6e6" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="${r/2.4}" fill="${a}" opacity=".6"/>`;
Object.assign(SH,{
phone:(b,a,vr=0,p={})=>{const n=(p.name||"").toLowerCase();
 if(/fold/.test(n))return `<rect x="70" y="80" width="260" height="240" rx="28" fill="${b}" ${O}/><rect x="80" y="90" width="240" height="220" rx="20" fill="${a}"/><rect x="80" y="90" width="240" height="220" rx="20" fill="url(#g)"/><path d="M200 90v220" stroke="#0008" stroke-width="3"/><circle cx="296" cy="108" r="5" fill="#000b"/><rect x="104" y="130" width="70" height="8" rx="4" fill="#fff6"/><rect x="104" y="150" width="50" height="7" rx="3.5" fill="#fff4"/><circle cx="250" cy="230" r="32" fill="#fff3"/>`;
 if(/flip|razr/.test(n))return `<rect x="130" y="50" width="140" height="150" rx="30" fill="${b}" ${O}/><rect x="138" y="58" width="124" height="134" rx="22" fill="${a}"/><rect x="138" y="58" width="124" height="134" rx="22" fill="url(#g)"/><rect x="130" y="206" width="140" height="150" rx="30" fill="${b}" ${O}/><rect x="138" y="214" width="124" height="134" rx="22" fill="${a}" opacity=".85"/><circle cx="200" cy="66" r="4" fill="#000b"/><rect x="160" y="120" width="80" height="9" rx="4.5" fill="#fff6"/>`;
 const w=/compact|mini|lite/.test(n)?124:144,x=200-w/2,rx=[30,24,36,20][vr%4],cut=vr%4,wp=(vr+p.id)%4;
 const co=[`<rect x="180" y="68" width="40" height="11" rx="5.5" fill="#000b"/>`,`<circle cx="200" cy="74" r="5" fill="#000b"/>`,`<path d="M170 58h60v6q0 12-12 12h-36q-12 0-12-12z" fill="${b}"/>`,`<circle cx="${x+30}" cy="74" r="5" fill="#000b"/>`][cut];
 const wpp=[`<rect x="${x+28}" y="130" width="${w-56}" height="10" rx="5" fill="#fff6"/><rect x="${x+28}" y="152" width="${(w-56)*.65}" height="8" rx="4" fill="#fff4"/><circle cx="200" cy="270" r="30" fill="#fff3"/>`,`<circle cx="200" cy="210" r="${w*.42}" fill="none" stroke="#fff5" stroke-width="3"/><circle cx="200" cy="210" r="${w*.27}" fill="#fff2"/>`,`<path d="M${x+10} 250q${w/4} -40 ${w/2-10} 0t${w/2-10} 0v92h-${w-20}z" fill="#fff3"/><path d="M${x+10} 285q${w/4} -40 ${w/2-10} 0t${w/2-10} 0v57h-${w-20}z" fill="#fff3"/>`,Array.from({length:12},(_,i)=>`<circle cx="${x+34+(i%3)*((w-68)/2)}" cy="${120+Math.floor(i/3)*40}" r="9" fill="#fff${i%5?"3":"6"}"/>`).join("")][wp];
 return `<rect x="${x}" y="48" width="${w}" height="304" rx="${rx+2}" fill="${b}" ${O}/><rect x="${x+w}" y="130" width="4" height="44" rx="2" fill="#aab3c5"/><rect x="${x+10}" y="58" width="${w-20}" height="284" rx="${rx-8}" fill="${a}"/><rect x="${x+10}" y="58" width="${w-20}" height="284" rx="${rx-8}" fill="url(#g)"/>${wpp}${co}`},
back:(b,a,vr=0)=>{const m=vr%4,L=(cx,cy,r=13)=>LENS(cx,cy,r,a);
 const mod=[`<rect x="146" y="66" width="70" height="70" rx="20" fill="#0b1020" stroke="#fff3" stroke-width="2"/>${L(168,88)}${L(194,88)}${L(181,113)}`,`<rect x="144" y="64" width="40" height="86" rx="20" fill="#0b1020" stroke="#fff3" stroke-width="2"/>${L(164,88)}${L(164,126)}`,`<circle cx="200" cy="112" r="46" fill="#0b1020" stroke="#cfd6e6" stroke-width="3"/>${L(200,112,30)}`,`<rect x="128" y="64" width="144" height="56" rx="26" fill="#0b1020" stroke="#fff3" stroke-width="2"/>${L(166,92)}${L(204,92)}<circle cx="244" cy="92" r="7" fill="#fff" opacity=".8"/>`][m];
 return `<rect x="128" y="48" width="144" height="304" rx="30" fill="${a}" ${O}/><rect x="128" y="48" width="144" height="304" rx="30" fill="url(#g)"/>${mod}<circle cx="200" cy="250" r="20" fill="#fff" opacity=".18"/>`},
laptop:(b,a,vr=0,p={})=>{const gm=/gaming|workstation/.test((p.name||"").toLowerCase()),deck=vr%2?"#c9d0de":"#2d3446";
 const wp=[`<path d="M96 220l50-56 40 36 36-44 82 64z" fill="#fff" opacity=".25"/>`,`<circle cx="200" cy="170" r="46" fill="none" stroke="#fff6" stroke-width="3"/><circle cx="200" cy="170" r="26" fill="#fff3"/>`,`<path d="M96 200q50-40 104 0t104 0v36H96z" fill="#fff3"/>`,`<rect x="116" y="130" width="90" height="10" rx="5" fill="#fff6"/><rect x="116" y="152" width="140" height="8" rx="4" fill="#fff4"/><rect x="116" y="172" width="120" height="8" rx="4" fill="#fff4"/>`][vr%4];
 return `<rect x="86" y="96" width="228" height="150" rx="12" fill="${b}" ${O}/><rect x="96" y="106" width="208" height="130" rx="5" fill="${a}"/><rect x="96" y="106" width="208" height="130" rx="5" fill="url(#g)"/>${wp}<circle cx="200" cy="101" r="2.5" fill="#000a"/>`+(gm?`<path d="M52 250h296l-12 38H64z" fill="${deck}"/><rect x="64" y="284" width="272" height="4" fill="${a}"/><path d="M150 264h100M150 272h100" stroke="#0007" stroke-width="3"/>`:`<path d="M56 252h288l-18 24H74z" fill="${deck}"/><rect x="170" y="252" width="60" height="6" rx="3" fill="#0004"/>`)},
watch:(b,a,vr=0,p={})=>{const sh=vr%3,fc=(vr+(p.id||0))%3,sp=(vr>>1)%3,sw=sh===2?56:64;
 const strap=`<rect x="${200-sw/2}" y="30" width="${sw}" height="340" rx="24" fill="${b}"/>`+(sp===1?[60,84,306,330].map(y=>`<circle cx="200" cy="${y}" r="5" fill="#0008"/>`).join(""):sp===2?[50,70,90,310,330,350].map(y=>`<rect x="${200-sw/2}" y="${y}" width="${sw}" height="6" fill="#0004"/>`).join(""):"");
 const cs=sh===1?`<circle cx="200" cy="200" r="78" fill="#0d1220" stroke="${a}" stroke-width="6"/>`:sh===2?`<rect x="140" y="116" width="120" height="168" rx="34" fill="#0d1220" stroke="${a}" stroke-width="5"/>`:`<rect x="128" y="128" width="144" height="144" rx="40" fill="#0d1220" stroke="${a}" stroke-width="5"/>`;
 const face=[`<circle cx="200" cy="200" r="38" fill="none" stroke="#fff" stroke-width="4" opacity=".85"/><path d="M200 200v-24M200 200l16 10" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`,`<text x="200" y="${sh===2?206:212}" text-anchor="middle" font-family="Inter,Arial" font-size="${sh===2?32:40}" font-weight="800" fill="#fff">10:09</text><rect x="${sh===2?164:166}" y="${sh===2?222:228}" width="${sh===2?72:68}" height="6" rx="3" fill="${a}"/>`,`<circle cx="200" cy="200" r="46" fill="none" stroke="${a}" stroke-width="8" stroke-dasharray="190 100"/><circle cx="200" cy="200" r="30" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="90 100" opacity=".8"/>`][fc];
 return strap+cs+face+`<rect x="${sh===1?280:sh===2?260:272}" y="180" width="8" height="30" rx="4" fill="#9aa4bb"/>`},
buds:(b,a,vr=0)=>{const k=vr%3;
 if(k===1)return `<circle cx="200" cy="266" r="64" fill="${b}" ${O}/><path d="M142 254a58 58 0 0 1 116 0z" fill="#fff" opacity=".1"/><circle cx="200" cy="266" r="8" fill="${a}"/><ellipse cx="148" cy="128" rx="32" ry="42" fill="#eef1f7" transform="rotate(-18 148 128)"/><ellipse cx="252" cy="128" rx="32" ry="42" fill="#eef1f7" transform="rotate(18 252 128)"/><circle cx="148" cy="124" r="12" fill="${a}"/><circle cx="252" cy="124" r="12" fill="${a}"/>`;
 if(k===2)return `<path d="M110 150c0-44 52-54 62-14" fill="none" stroke="#eef1f7" stroke-width="16" stroke-linecap="round"/><circle cx="116" cy="188" r="24" fill="${a}"/><path d="M290 150c0-44-52-54-62-14" fill="none" stroke="#eef1f7" stroke-width="16" stroke-linecap="round"/><circle cx="284" cy="188" r="24" fill="${a}"/><rect x="120" y="260" width="160" height="80" rx="30" fill="${b}" ${O}/><circle cx="200" cy="300" r="8" fill="${a}"/>`;
 return SH0.buds(b,a)},
headphones:(b,a,vr=0)=>{const k=vr%3;
 if(k===1)return `<path d="M120 230v-30a80 80 0 0 1 160 0v30" fill="none" stroke="${b}" stroke-width="12" stroke-linecap="round"/><rect x="92" y="220" width="52" height="84" rx="24" fill="${b}" ${O}/><circle cx="118" cy="262" r="12" fill="${a}"/><rect x="256" y="220" width="52" height="84" rx="24" fill="${b}" ${O}/><circle cx="282" cy="262" r="12" fill="${a}"/>`;
 if(k===2)return `<path d="M106 250v-50a94 94 0 0 1 188 0v50" fill="none" stroke="${b}" stroke-width="22" stroke-linecap="round"/><ellipse cx="102" cy="266" rx="36" ry="56" fill="${b}" stroke="${a}" stroke-width="5"/><ellipse cx="298" cy="266" rx="36" ry="56" fill="${b}" stroke="${a}" stroke-width="5"/><ellipse cx="102" cy="266" rx="16" ry="30" fill="${a}" opacity=".5"/><ellipse cx="298" cy="266" rx="16" ry="30" fill="${a}" opacity=".5"/>`;
 return SH0.headphones(b,a)},
tablet:(b,a,vr=0)=>{const k=vr%3;
 if(k===1)return `<rect x="70" y="70" width="260" height="170" rx="18" fill="${b}" ${O}/><rect x="80" y="80" width="240" height="150" rx="10" fill="${a}"/><rect x="80" y="80" width="240" height="150" rx="10" fill="url(#g)"/><path d="M52 248h296l-10 46H62z" fill="#2d3446" ${O}/>`+Array.from({length:3},(_,r)=>Array.from({length:9},(_,c)=>`<rect x="${74+c*29}" y="${256+r*13}" width="24" height="9" rx="2" fill="#aab3c5" opacity=".6"/>`).join("")).join("");
 if(k===2)return SH0.tablet(b,a)+`<rect x="318" y="96" width="9" height="210" rx="4.5" fill="#e9ecf3"/>`;
 return SH0.tablet(b,a)},
speaker:(b,a,vr=0)=>{const k=vr%4;
 if(k===1)return `<rect x="50" y="150" width="300" height="120" rx="56" fill="${b}" ${O}/>`+Array.from({length:14},(_,i)=>`<rect x="${92+i*16}" y="172" width="6" height="76" rx="3" fill="#fff" opacity=".22"/>`).join("")+`<circle cx="76" cy="210" r="9" fill="${a}"/><circle cx="324" cy="210" r="9" fill="${a}"/>`;
 if(k===2)return `<circle cx="200" cy="200" r="112" fill="${b}" ${O}/>`+[34,58,82].map(r=>`<circle cx="200" cy="200" r="${r}" fill="none" stroke="${a}" stroke-width="3" stroke-dasharray="4 8" opacity=".9"/>`).join("")+`<circle cx="200" cy="200" r="12" fill="${a}"/>`;
 if(k===3)return `<path d="M160 100q40-58 80 0" stroke="${b}" stroke-width="12" fill="none" stroke-linecap="round"/><rect x="118" y="92" width="164" height="236" rx="56" fill="${b}" ${O}/><circle cx="200" cy="170" r="42" fill="#0d1220" stroke="${a}" stroke-width="4"/><circle cx="200" cy="170" r="16" fill="${a}"/><rect x="170" y="260" width="60" height="10" rx="5" fill="${a}" opacity=".6"/>`;
 return SH0.speaker(b,a)},
tracker:(b,a,vr=0)=>{const k=vr%3;
 if(k===1)return `<circle cx="200" cy="200" r="86" fill="${b}" ${O}/><circle cx="200" cy="200" r="56" fill="none" stroke="${a}" stroke-width="8"/><circle cx="200" cy="200" r="14" fill="#fff" opacity=".8"/>`;
 if(k===2)return `<rect x="150" y="84" width="100" height="232" rx="44" fill="${b}" ${O}/><rect x="244" y="140" width="28" height="86" rx="12" fill="${a}"/><circle cx="200" cy="170" r="24" fill="${a}"/><rect x="176" y="236" width="48" height="8" rx="4" fill="#fff" opacity=".4"/>`;
 return SH0.tracker(b,a)},
camera:(b,a,vr=0)=>{const k=vr%3;
 if(k===1)return `<rect x="76" y="146" width="248" height="140" rx="18" fill="${b}" ${O}/><path d="M168 146l10-38h44l10 38z" fill="${b}" ${O}/><rect x="262" y="146" width="62" height="140" rx="20" fill="#0007"/><circle cx="188" cy="216" r="66" fill="#0d1220" stroke="#cfd6e6" stroke-width="6"/><circle cx="188" cy="216" r="42" fill="${a}" opacity=".5"/><circle cx="188" cy="216" r="16" fill="#fff" opacity=".7"/>`;
 if(k===2)return `<rect x="76" y="120" width="248" height="56" rx="14" fill="#c9d0de" ${O}/><rect x="76" y="170" width="248" height="120" rx="18" fill="${b}" ${O}/><circle cx="200" cy="224" r="52" fill="#0d1220" stroke="#cfd6e6" stroke-width="6"/><circle cx="200" cy="224" r="30" fill="${a}" opacity=".5"/><rect x="104" y="136" width="40" height="24" rx="5" fill="#0d1220"/><circle cx="288" cy="148" r="9" fill="${a}"/>`;
 return SH0.camera(b,a)}});
function art(p,v=0){const vr=((p.id*31)^(p.id>>2))>>>0,h=(p.id*47)%360,k=SH[kind(p)]||SH.hub,col=x=>[hx(x,28,22),hx(x,72,56)],[b,a]=col(h);
 const body=v===1&&kind(p)==="phone"&&!/fold|flip|razr/i.test(p.name)?SH.back(b,a,vr,p):v===3?[10,116,222].map((x,i)=>`<g transform="translate(${x} 112) scale(.42)">${k(...col((h+i*80)%360),vr,p)}</g>`).join(""):`<g transform="${["","rotate(-12 200 200) translate(8 14) scale(.92)","translate(-100 -92) scale(1.5)"][v]}">${k(b,a,vr,p)}</g>`;
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><rect width="400" height="400" fill="#171d29"/><circle cx="200" cy="200" r="${v===2?190:150}" fill="${a}" opacity=".13"/>${body}<text x="200" y="388" text-anchor="middle" font-family="Inter,Arial" font-size="14" font-weight="700" letter-spacing="3" fill="#fff" fill-opacity=".4">${esc(p.brand.toUpperCase())} · TZ-${String(p.id).padStart(4,"0")}</text></svg>`;
 return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg)}
const CAT_KINDS={"Phones":["phone","phone","phone"],"Bluetooth Headphones":["buds","headphones","buds"],"Bluetooth Speakers":["speaker","speaker","speaker"],"Laptops":["laptop","laptop","laptop"],"Tablets":["tablet","reader","drawing"],"Smart Watches":["band","watch","ring"],"Cameras":["camera","lens","drone"],"Gaming & Accessories":["controller","mouse","headset"],"Smart Home":["seccam","hub","bulb"],"Wearables":["glasses","tracker","tracker"]};
function catArt(n){const i=Object.keys(CAT_KINDS).indexOf(n),h=(i*36+215)%360,[l,c,r]=CAT_KINDS[n]||["hub","hub","hub"],col=x=>[hx(x%360,28,22),hx(x%360,72,56)],g=(k,x,t)=>`<g transform="${t}">${SH[k](...col(x))}</g>`;
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".38"/><stop offset=".6" stop-color="#fff" stop-opacity="0"/></linearGradient><radialGradient id="r" cx=".5" cy=".45" r=".6"><stop offset="0" stop-color="${hx(h,72,56)}" stop-opacity=".35"/><stop offset="1" stop-color="${hx(h,72,56)}" stop-opacity="0"/></radialGradient></defs><rect width="480" height="400" fill="#11151e"/><rect width="480" height="400" fill="url(#r)"/><circle cx="240" cy="190" r="150" fill="${hx(h,72,56)}" opacity=".1"/>${g(l,h+50,"translate(0 75) scale(.55)")}${g(r,h+110,"translate(262 75) scale(.55)")}${g(c,h,"translate(70 -8) scale(.85)")}</svg>`;
 return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg)}
PRODUCTS.forEach(p=>{p.specs=[["Brand",p.brand],["Model",p.model],["Category",p.shopCategory]];p.image=REAL[p.id]||art(p,0)});
const $ = (s,root=document)=>root.querySelector(s);
const money = n => "$"+Number(n).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
const read = (key,fallback=[]) => {try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}};
const write = (key,value)=>localStorage.setItem(key,JSON.stringify(value));
let cart=read("tz-cart"), wishlist=read("tz-wishlist");
const page=document.body.dataset.page || "home";
function sync(){write("tz-cart",cart);write("tz-wishlist",wishlist);document.querySelectorAll("[data-cart-count]").forEach(e=>e.textContent=cart.reduce((s,x)=>s+x.qty,0));document.querySelectorAll("[data-wish-count]").forEach(e=>e.textContent=wishlist.length)}
function toast(message){const old=$(".toast");if(old)old.remove();const el=document.createElement("div");el.className="toast";el.textContent=message;document.body.append(el);setTimeout(()=>el.remove(),2400)}
function header(){
 const el=$("#site-header");if(!el)return;
 const homePage=page==="home", base=homePage?"pages/":"", homeHref=homePage?"index.html":"../index.html";
 el.innerHTML=`<div class="announcement">COMPLIMENTARY SHIPPING ON ORDERS OVER $100 · DISCOVER WHAT'S NEXT</div><header class="header"><div class="container nav"><a class="logo" href="${homeHref}">TECH<span>ZONE</span><b>.</b></a><nav class="nav-links"><a href="${homeHref}" class="${page==="home"?"active":""}">Home</a><a href="${base}shop.html" class="${page==="shop"?"active":""}">Shop</a><a href="${homeHref}#categories">Categories</a><a href="${homeHref}#about">About</a><a href="${base}contact.html">Contact</a></nav><div class="nav-actions"><form class="hsearch" action="${base}shop.html"><input name="q" placeholder="Search products…" aria-label="Search products"></form><a href="${base}wishlist.html">♡ <span class="count" data-wish-count>0</span></a><a href="${base}cart.html">Cart <span class="count" data-cart-count>0</span></a><button class="menu-toggle" aria-label="Toggle menu">☰</button></div></div><nav class="mobile-nav"><form class="hsearch" action="${base}shop.html"><input name="q" placeholder="Search products…" aria-label="Search products"></form><a href="${homeHref}">Home</a><a href="${base}shop.html">Shop</a><a href="${homeHref}#categories">Categories</a><a href="${base}wishlist.html">Wishlist</a><a href="${base}cart.html">Cart</a><a href="${base}contact.html">Contact</a></nav></header>`;
 $(".menu-toggle",el).addEventListener("click",()=>$(".mobile-nav",el).classList.toggle("open"))
}
function footer(){
 const el=$("#site-footer");if(!el)return;
 const homePage=page==="home", base=homePage?"pages/":"", homeHref=homePage?"index.html":"../index.html";
 el.innerHTML=`<footer class="footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><a class="logo" href="${homeHref}">TECH<span>ZONE</span><b>.</b></a><p>Technology that moves you forward. Discover carefully selected gadgets for work, play and everything in between.</p></div><div class="footer-col"><h4>Explore</h4><a href="${homeHref}">Home</a><a href="${base}shop.html">Shop all</a><a href="${homeHref}#categories">Categories</a></div><div class="footer-col"><h4>Customer care</h4><a href="${base}contact.html">Contact us</a><a href="${base}cart.html">Your cart</a><a href="${base}wishlist.html">Wishlist</a></div><div class="footer-col"><h4>Stay in the loop</h4><p>Get product news and store updates.</p><form id="newsletter" class="newsletter"><input type="email" required placeholder="Email address" aria-label="Email address"><button aria-label="Subscribe">↗</button></form></div></div><div class="footer-bottom"><span>© 2026 TECHZONE. Demo storefront.</span><span>Designed for the future ✦</span></div></div></footer>`;
 $("#newsletter")?.addEventListener("submit",e=>{e.preventDefault();toast("Thanks for subscribing!");e.target.reset()})
}
function productCard(p){const productBase=page==="home"?"pages/":"";return `<article class="product-card"><div class="product-photo">${p.badge?`<span class="tag">${p.badge}</span>`:""}${p.oldPrice>p.price?`<span class="off">−${Math.round((1-p.price/p.oldPrice)*100)}%</span>`:""}<button class="heart ${wishlist.includes(p.id)?"active":""}" data-wish="${p.id}" aria-label="Toggle wishlist">${wishlist.includes(p.id)?"♥":"♡"}</button><a href="${productBase}product.html?id=${p.id}"><img src="${p.image}" alt="${p.name}" loading="lazy"></a></div><div class="product-info"><span class="product-cat">${(p.shopCategory||p.category).toUpperCase()}</span><h3><a href="${productBase}product.html?id=${p.id}">${p.name}</a></h3><div class="product-row"><div><span class="price">${money(p.price)}</span>${p.oldPrice?`<span class="old-price">${money(p.oldPrice)}</span>`:""}</div><button class="icon-btn" data-add="${p.id}" aria-label="Add ${p.name} to cart">+</button></div></div></article>`}
function bindProductActions(root=document){root.querySelectorAll("[data-add]").forEach(b=>b.addEventListener("click",()=>addToCart(Number(b.dataset.add))));root.querySelectorAll("[data-wish]").forEach(b=>b.addEventListener("click",()=>toggleWish(Number(b.dataset.wish))))}
function addToCart(id,qty=1){const item=cart.find(x=>x.id===id);if(item)item.qty+=qty;else cart.push({id,qty});sync();toast("Added to your cart")}
function toggleWish(id){const on=!wishlist.includes(id);wishlist=on?[...wishlist,id]:wishlist.filter(x=>x!==id);sync();document.querySelectorAll(`[data-wish="${id}"]`).forEach(b=>{b.classList.toggle("active",on);b.textContent=on?"♥":"♡"});const d=$("#detail-wish");if(d)d.textContent=on?"♥":"♡";if(page==="wishlist")render();toast(on?"Added to wishlist":"Removed from wishlist")}
function home(){const app=$("#app");app.innerHTML=`<section class="hero"><div class="container hero-grid"><div><span class="eyebrow">THE NEXT GENERATION OF TECH</span><h1>Technology<br>meets <span>Luxury.</span></h1><p class="hero-copy">Discover the latest innovations, premium gadgets and everyday essentials. Curated technology for people who expect more.</p><div class="hero-buttons"><a class="btn btn-primary" href="pages/shop.html">Explore collection ↗</a><a class="btn btn-ghost" href="#categories">Discover more</a></div><div class="hero-stats"><div><strong>${PRODUCTS.length}</strong><small>Products</small></div><div><strong>${new Set(PRODUCTS.map(p=>p.brand)).size}</strong><small>Top brands</small></div><div><strong>10</strong><small>Categories</small></div></div></div><div class="hero-visual"><img src="${HERO_PHONE}" alt="Premium smartphone"><div class="floating-note"><small>EDITOR'S PICK</small><strong>Innovation in your hands.</strong></div></div></div></section><section class="section" id="categories"><div class="container"><div class="section-head"><div><span class="eyebrow">FIND YOUR NEXT FAVORITE</span><h2>Shop by <span>category.</span></h2></div><a class="btn btn-ghost" href="pages/shop.html">View all ↗</a></div><div class="category-grid">${[
 ["Phones","photo-1511707171634-5f897ff02aa9","ALL SMARTPHONE BRANDS"],
 ["Bluetooth Headphones","photo-1505740420928-5e560c06d30e","HEADPHONES & EARBUDS"],
 ["Bluetooth Speakers","photo-1608043152269-423dbba4e7e1","PORTABLE & HOME SPEAKERS"],
 ["Laptops","photo-1496181133206-80ce9b88a853","WORK & GAMING LAPTOPS"],
 ["Tablets","photo-1546054454-aa26e2b734c7","TABLETS & E-READERS"],
 ["Smart Watches","photo-1523275335684-37898b6baf30","WATCHES & FITNESS BANDS"],
 ["Cameras","photo-1516035069371-29a1b244cc32","PHOTO & VIDEO"],
 ["Gaming & Accessories","photo-1587829741301-dc798b83add3","GAMING GEAR"],
 ["Smart Home","photo-1558002038-1055907df827","CONNECTED HOME"],
 ["Wearables","photo-1617038220319-276d3cfab638","SMART ACCESSORIES"]
].map(([n,img,sub])=>`<a class="category-card" href="pages/shop.html?category=${encodeURIComponent(n)}"><img src="${catArt(n)}" alt="${n}"><div class="category-info"><small>${sub}</small><h3>${n} <span class="category-count">${PRODUCTS.filter(p=>p.shopCategory===n).length}</span></h3></div></a>`).join("")}</div></div></section><section class="section" style="background:var(--panel)"><div class="container"><div class="section-head"><div><span class="eyebrow">HANDPICKED FOR YOU</span><h2>Featured <span>products.</span></h2></div><a class="btn btn-ghost" href="pages/shop.html">Shop all ↗</a></div><div class="product-grid">${["Phones","Laptops","Bluetooth Headphones","Smart Watches","Tablets","Cameras","Gaming & Accessories","Smart Home"].map(c=>PRODUCTS.find(p=>p.shopCategory===c&&p.badge==="NEW")||PRODUCTS.find(p=>p.shopCategory===c)).map(productCard).join("")}</div></div></section><section class="container section"><div class="section-head"><div><span class="eyebrow">PREMIUM PICKS</span><h2>Top <span>flagships.</span></h2></div><a class="btn btn-ghost" href="pages/shop.html">All products ↗</a></div><div class="product-grid">${[...PRODUCTS].sort((a,b)=>b.price-a.price).slice(0,4).map(productCard).join("")}</div></section><section class="container" style="padding-bottom:40px"><div class="section-head"><div><span class="eyebrow">JUST LANDED</span><h2>New <span>arrivals.</span></h2></div></div><div class="product-grid">${[...new Set(PRODUCTS.map(p=>p.shopCategory))].map(c=>PRODUCTS.find(p=>p.shopCategory===c&&p.badge==="NEW")).filter(Boolean).slice(0,4).map(productCard).join("")}</div></section><section class="container"><div class="brand-strip">${[...new Set(PRODUCTS.map(p=>p.brand))].map(b=>`<a href="pages/shop.html?brand=${encodeURIComponent(b)}">${b}</a>`).join("")}</div></section><section class="container section" style="padding-top:20px"><div class="section-head"><div><span class="eyebrow">GOOD TO KNOW</span><h2>Frequently asked <span>questions.</span></h2></div></div><div class="faq"><details><summary>How long does delivery take?</summary><p>Orders usually arrive within 2–5 business days. Shipping is free on orders over $100.</p></details><details><summary>Can I return a product?</summary><p>Yes. Unused products can be returned within 30 days in their original packaging.</p></details><details><summary>Do products come with a warranty?</summary><p>Every product includes a 12-month warranty.</p></details><details><summary>Which payment methods are accepted?</summary><p>Card payments and cash on delivery are supported at checkout.</p></details><details><summary>How can I contact support?</summary><p>Use the contact page and we will reply as soon as possible.</p></details></div></section><section class="container section"><div class="promo"><div><span class="eyebrow">LIMITED-TIME INSPIRATION</span><h2>Upgrade your<br><span>digital lifestyle.</span></h2><p>Find the right technology for your next big idea.</p><a class="btn btn-primary" href="pages/shop.html">Shop now ↗</a></div><div class="promo-mark">TECHZONE</div></div></section><section class="container benefits" id="about"><div class="benefit"><span class="benefit-icon">✦</span><div><strong>Curated quality</strong><small>Products selected with care</small></div></div><div class="benefit"><span class="benefit-icon">↗</span><div><strong>Delivery options</strong><small>Convenient order fulfilment</small></div></div><div class="benefit"><span class="benefit-icon">◇</span><div><strong>Secure experience</strong><small>Clear and simple checkout</small></div></div><div class="benefit"><span class="benefit-icon">♡</span><div><strong>Helpful support</strong><small>We're here when you need us</small></div></div></section>`;bindProductActions(app)}
function shop(){const app=$("#app");app.innerHTML=`<section class="page-wrap"><div class="container"><div class="page-intro"><span class="eyebrow">THE TECHZONE COLLECTION</span><h1 class="page-title">Explore <span>products.</span></h1><p>Find the technology that fits your world.</p></div><div class="toolbar"><input id="search" class="field search-field" placeholder="Search products or brands..." aria-label="Search products"><select id="category" class="select"><option value="">All categories</option>${[...new Set(PRODUCTS.map(p=>p.shopCategory))].map(c=>`<option>${c}</option>`).join("")}</select><select id="brand" class="select"><option value="">All brands</option>${[...new Set(PRODUCTS.map(p=>p.brand))].sort().map(b=>`<option>${b}</option>`).join("")}</select><select id="price" class="select"><option value="">Any price</option><option value="100">Under $100</option><option value="300">Under $300</option><option value="700">Under $700</option><option value="1500">Under $1,500</option></select><select id="sort" class="select"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="name">Name: A to Z</option></select></div><div class="chips">${["",...new Set(PRODUCTS.map(p=>p.shopCategory))].map(c=>`<button class="chip" data-c="${c}">${c||"All"}</button>`).join("")}</div><p id="result-count" class="muted" style="font-size:11px;margin-bottom:15px"></p><div id="shop-grid" class="product-grid"></div></div></section>`;const search=$("#search"),cat=$("#category"),brand=$("#brand"),price=$("#price"),sort=$("#sort"),grid=$("#shop-grid");const params=new URLSearchParams(location.search);if(params.get("q"))search.value=params.get("q");if(params.get("brand"))brand.value=params.get("brand");if(params.get("category")){cat.value=params.get("category");const heading=document.querySelector(".page-title");if(heading)heading.innerHTML=`Explore <span>${cat.value}.</span>`;}let shown=24;function update(reset){if(reset!==false)shown=24;document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("on",c.dataset.c===cat.value));let list=PRODUCTS.filter(p=>(p.name+" "+p.brand+" "+p.category+" "+p.shopCategory).toLowerCase().includes(search.value.toLowerCase())&&(!cat.value||p.shopCategory===cat.value)&&(!brand.value||p.brand===brand.value)&&(!price.value||p.price<=Number(price.value)));if(sort.value==="low")list.sort((a,b)=>a.price-b.price);if(sort.value==="high")list.sort((a,b)=>b.price-a.price);if(sort.value==="name")list.sort((a,b)=>a.name.localeCompare(b.name));$("#result-count").textContent=`${list.length} products found`;grid.innerHTML=list.length?list.slice(0,shown).map(productCard).join("")+(list.length>shown?`<div style="grid-column:1/-1;text-align:center;margin-top:10px"><button class="btn btn-ghost" id="more">Show more (${list.length-shown})</button></div>`:""):`<div class="empty" style="grid-column:1/-1"><h3>No products found</h3><p>Try another search or category.</p></div>`;bindProductActions(grid);const mb=$("#more");if(mb)mb.onclick=()=>{shown+=24;update(false)}}[search,cat,brand,price,sort].forEach(el=>el.addEventListener(el===search?"input":"change",update));document.querySelectorAll(".chip").forEach(c=>c.onclick=()=>{cat.value=c.dataset.c;const h=document.querySelector(".page-title");if(h)h.innerHTML=`Explore <span>${cat.value||"products"}.</span>`;update()});update()}
function product(){const app=$("#app"),id=Number(new URLSearchParams(location.search).get("id"))||1,p=PRODUCTS.find(x=>x.id===id)||PRODUCTS[0],off=Math.round((p.oldPrice-p.price)/p.oldPrice*100),rel=PRODUCTS.filter(x=>x.shopCategory===p.shopCategory&&x.id!==p.id).slice(0,4);document.title=p.name+" | TECHZONE";p.gallery=[0,1,2,3].map(v=>v?art(p,v):p.image);app.innerHTML=`<section class="page-wrap"><div class="container"><p class="muted" style="font-size:11px;margin-bottom:25px"><a href="../index.html">Home</a> / <a href="shop.html">Shop</a> / <a href="shop.html?category=${encodeURIComponent(p.shopCategory)}">${p.shopCategory}</a> / ${p.name}</p><div class="detail-grid"><div class="gallery"><div class="detail-image"><img id="main-img" src="${p.gallery[0]}" alt="${p.name}"></div><div class="thumbs">${p.gallery.map((g,i)=>`<button class="thumb ${i?"":"on"}" data-img="${g}" aria-label="Photo ${i+1}"><img src="${g.replace("w=800","w=200")}" alt=""></button>`).join("")}</div></div><div class="detail-copy"><span class="eyebrow">${p.shopCategory} · ${p.brand}</span><h1>${p.name}</h1><div class="meta-line">SKU TZ-${String(p.id).padStart(4,"0")}</div><div class="detail-price" style="margin-top:14px">${money(p.price)}</div><p class="stock">● Available to order</p><p>${p.description}</p><div class="detail-actions"><div class="qty"><button id="minus">−</button><span id="qty">1</span><button id="plus">+</button></div><button class="btn btn-primary" id="detail-add">Add to cart ↗</button><button class="btn btn-ghost" id="detail-buy">Buy now</button><button class="btn btn-ghost" id="detail-wish">${wishlist.includes(p.id)?"♥":"♡"}</button></div><div class="perks"><div class="perk"><strong>Free delivery</strong>On orders over $100</div><div class="perk"><strong>12-month warranty</strong>Official coverage</div><div class="perk"><strong>30-day returns</strong>Simple and fast</div><div class="perk"><strong>Secure checkout</strong>Your data stays safe</div></div></div></div><div class="detail-extra"><div class="form-card"><h3>Specifications</h3><table class="specs">${p.specs.map(([k,v])=>`<tr><th>${k}</th><td>${v}</td></tr>`).join("")}<tr><th>Type</th><td>${NOUN[p.kind]||""}</td></tr><tr><th>SKU</th><td>TZ-${String(p.id).padStart(4,"0")}</td></tr></table></div><div class="form-card"><h3>Delivery &amp; returns</h3><ul class="plain"><li>✓ Free shipping over $100</li><li>✓ Delivery in 2–5 business days</li><li>✓ 30-day easy returns</li><li>✓ Pay on delivery or by card</li></ul></div></div>${rel.length?`<div class="section-head" style="margin:55px 0 22px"><h2>You may <span>also like.</span></h2></div><div class="product-grid">${rel.map(productCard).join("")}</div>`:""}</div></section>`;let qty=1;$("#minus").onclick=()=>{qty=Math.max(1,qty-1);$("#qty").textContent=qty};$("#plus").onclick=()=>{qty=Math.min(20,qty+1);$("#qty").textContent=qty};$("#detail-add").onclick=()=>addToCart(p.id,qty);$("#detail-buy").onclick=()=>{addToCart(p.id,qty);location.href="cart.html"};$("#detail-wish").onclick=()=>toggleWish(p.id);app.querySelectorAll(".thumb").forEach(t=>t.onclick=()=>{$("#main-img").src=t.dataset.img;app.querySelectorAll(".thumb").forEach(x=>x.classList.toggle("on",x===t))});bindProductActions(app)}
function wishlistPage(){const app=$("#app"),list=PRODUCTS.filter(p=>wishlist.includes(p.id));app.innerHTML=`<section class="page-wrap"><div class="container"><div class="page-intro"><span class="eyebrow">SAVED FOR LATER</span><h1 class="page-title">Your <span>wishlist.</span></h1><p>Your favorite products, all in one place.</p></div>${list.length?`<div class="product-grid">${list.map(productCard).join("")}</div>`:`<div class="empty"><h3>Your wishlist is empty</h3><p>Save products you love and find them here.</p><a class="btn btn-primary" style="margin-top:18px" href="shop.html">Explore products</a></div>`}</div></section>`;bindProductActions(app)}
function cartPage(){const app=$("#app");const items=cart.map(x=>({...x,product:PRODUCTS.find(p=>p.id===x.id)})).filter(x=>x.product);const subtotal=items.reduce((s,x)=>s+x.product.price*x.qty,0),shipping=subtotal===0||subtotal>=100?0:9.99;app.innerHTML=`<section class="page-wrap"><div class="container"><div class="page-intro"><span class="eyebrow">YOUR SELECTION</span><h1 class="page-title">Shopping <span>cart.</span></h1><p>Review your items before checkout.</p></div>${items.length?`<div class="cart-layout"><div class="cart-list">${items.map(x=>`<div class="cart-item"><a href="product.html?id=${x.id}"><img src="${x.product.image}" alt="${x.product.name}"></a><div><h3>${x.product.name}</h3><small>${money(x.product.price)} each</small><div class="qty" style="margin-top:8px;width:max-content"><button data-qty="${x.id}" data-delta="-1">−</button><span>${x.qty}</span><button data-qty="${x.id}" data-delta="1">+</button></div></div><div style="text-align:right"><strong>${money(x.product.price*x.qty)}</strong><br><button class="remove" data-remove="${x.id}">Remove</button></div></div>`).join("")}</div><aside class="summary"><h3>Order summary</h3><div class="summary-line"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div class="summary-line"><span>Shipping</span><strong>${shipping===0?"FREE":money(shipping)}</strong></div><div class="summary-line summary-total"><span>Total</span><strong>${money(subtotal+shipping)}</strong></div><div class="ship-bar"><i style="width:${Math.min(100,subtotal)}%"></i></div><p class="muted" style="font-size:10px;margin-top:10px">${subtotal>=100?"You've unlocked free shipping!":`Add ${money(100-subtotal)} more for free shipping`}</p><a class="btn btn-primary" href="checkout.html">Continue to checkout ↗</a><a class="btn btn-ghost" href="shop.html" style="width:100%;margin-top:9px">Continue shopping</a></aside></div>`:`<div class="empty"><h3>Your cart is empty</h3><p>Looks like you haven't added anything yet.</p><a class="btn btn-primary" style="margin-top:18px" href="shop.html">Start shopping</a></div>`}</div></section>`;app.querySelectorAll("[data-qty]").forEach(b=>b.onclick=()=>{const id=Number(b.dataset.qty),item=cart.find(x=>x.id===id);if(item){item.qty+=Number(b.dataset.delta);if(item.qty<1)cart=cart.filter(x=>x.id!==id);sync();cartPage()}});app.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{cart=cart.filter(x=>x.id!==Number(b.dataset.remove));sync();cartPage();toast("Item removed")})}
function checkout(){const app=$("#app");const items=cart.map(x=>({...x,product:PRODUCTS.find(p=>p.id===x.id)})).filter(x=>x.product);if(!items.length){app.innerHTML=`<section class="page-wrap"><div class="container"><div class="empty"><h3>Nothing to checkout yet</h3><p>Add a product to your cart first.</p><a class="btn btn-primary" href="shop.html" style="margin-top:18px">Browse products</a></div></div></section>`;return}const subtotal=items.reduce((s,x)=>s+x.product.price*x.qty,0),shipping=subtotal>=100?0:9.99;app.innerHTML=`<section class="page-wrap"><div class="container"><div class="page-intro"><span class="eyebrow">ALMOST THERE</span><h1 class="page-title">Secure <span>checkout.</span></h1><p>Enter your details to create a demo order.</p></div><div class="cart-layout"><form id="checkout-form" class="form-card"><div class="form-grid"><div class="form-group"><label for="first">First name *</label><input class="field" id="first" name="first" required></div><div class="form-group"><label for="last">Last name *</label><input class="field" id="last" name="last" required></div><div class="form-group full"><label for="email">Email address *</label><input class="field" id="email" name="email" type="email" required></div><div class="form-group full"><label for="phone">Phone number *</label><input class="field" id="phone" name="phone" type="tel" required></div><div class="form-group full"><label for="address">Delivery address *</label><input class="field" id="address" name="address" required></div><div class="form-group"><label for="city">City *</label><input class="field" id="city" name="city" required></div><div class="form-group"><label for="postcode">Postal code</label><input class="field" id="postcode" name="postcode"></div><div class="form-group full"><label for="notes">Order notes</label><textarea class="textarea" id="notes" name="notes" placeholder="Optional delivery notes"></textarea></div></div><div class="notice">This is a front-end demo checkout. It does not collect payment or send a real order to a store.</div><button class="btn btn-primary" type="submit">Place demo order ↗</button></form><aside class="summary"><h3>Your order</h3>${items.map(x=>`<div class="summary-line"><span>${x.product.name} × ${x.qty}</span><strong>${money(x.product.price*x.qty)}</strong></div>`).join("")}<div class="summary-line"><span>Shipping</span><strong>${shipping?money(shipping):"FREE"}</strong></div><div class="summary-line summary-total"><span>Total</span><strong>${money(subtotal+shipping)}</strong></div></aside></div></div></section>`;$("#checkout-form").onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target).entries());const order={number:"TZ"+Date.now().toString().slice(-8),date:new Date().toISOString(),customer:data,items,total:subtotal+shipping};const orders=read("tz-orders");orders.push(order);write("tz-orders",orders);cart=[];sync();app.innerHTML=`<section class="page-wrap"><div class="container"><div class="form-card success-box"><div class="success-icon">✓</div><h2>Demo order created!</h2><p class="muted">Thank you, ${data.first}. Your demo order number is <strong>${order.number}</strong>.</p><p class="muted" style="font-size:11px;margin-top:10px">No payment was processed and no real shipment was arranged.</p><a class="btn btn-primary" style="margin-top:22px" href="../index.html">Back to homepage</a></div></div></section>`}}
function contact(){const app=$("#app");app.innerHTML=`<section class="page-wrap"><div class="container"><div class="page-intro"><span class="eyebrow">WE'D LOVE TO HEAR FROM YOU</span><h1 class="page-title">Get in <span>touch.</span></h1><p>Questions about products or your demo shopping experience? Send us a message.</p></div><div class="cart-layout"><form id="contact-form" class="form-card"><div class="form-grid"><div class="form-group"><label for="cname">Your name *</label><input class="field" id="cname" required></div><div class="form-group"><label for="cemail">Email address *</label><input class="field" id="cemail" type="email" required></div><div class="form-group full"><label for="subject">Subject *</label><input class="field" id="subject" required></div><div class="form-group full"><label for="message">Message *</label><textarea class="textarea" id="message" required></textarea></div></div><button class="btn btn-primary" style="margin-top:17px">Send message ↗</button></form><aside class="summary"><h3>TECHZONE support</h3><p class="muted" style="font-size:12px">This sample storefront is a front-end project. Contact messages are demonstrated locally and are not sent to a real business.</p><div class="summary-line"><span>Support</span><strong>Demo only</strong></div><div class="summary-line"><span>Availability</span><strong>24/7 sample</strong></div></aside></div></div></section>`;$("#contact-form").onsubmit=e=>{e.preventDefault();const messages=read("tz-messages");messages.push({name:$("#cname").value,email:$("#cemail").value,subject:$("#subject").value,message:$("#message").value,date:new Date().toISOString()});write("tz-messages",messages);e.target.reset();toast("Demo message saved on this device")}}
function render(){if(page==="home")home();else if(page==="shop")shop();else if(page==="product")product();else if(page==="wishlist")wishlistPage();else if(page==="cart")cartPage();else if(page==="checkout")checkout();else if(page==="contact")contact()}
const fav=document.createElement("link");fav.rel="icon";fav.href="data:image/svg+xml,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#527bff"/><path d="M18 20h28v7H35v21h-7V27H18z" fill="#fff"/></svg>');document.head.append(fav);
const toTopBtn=document.createElement("button");toTopBtn.className="totop";toTopBtn.textContent="↑";toTopBtn.setAttribute("aria-label","Back to top");toTopBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});document.body.append(toTopBtn);window.addEventListener("scroll",()=>toTopBtn.classList.toggle("show",window.scrollY>600));
header();footer();sync();render();
