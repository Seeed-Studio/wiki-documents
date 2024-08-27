"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96869],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>c});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),u=p(r),y=n,c=u["".concat(s,".").concat(y)]||u[y]||m[y]||o;return r?a.createElement(c,l(l({ref:t},g),{},{components:r})):a.createElement(c,l({ref:t},g))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},86852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(9668),n=(r(96540),r(15680));const o={description:"reComputer R1000 Flash OS",title:"reComputer R1000 Flash OS",keywords:["Edge","reComputer R1000","Flash OS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/recomputer_r1000_flash_OS",last_update:{date:"05/8/2023",author:"Parker Hu"}},l="reComputer R1000 Raspbian OS to eMMC",i={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_flash_os",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_flash_os",title:"reComputer R1000 Flash OS",description:"reComputer R1000 Flash OS",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_flash_os.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000",slug:"/recomputer_r1000_flash_OS",permalink:"/recomputer_r1000_flash_OS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_flash_os.md",tags:[],version:"current",lastUpdatedBy:"Parker Hu",lastUpdatedAt:1683504e3,formattedLastUpdatedAt:"May 8, 2023",frontMatter:{description:"reComputer R1000 Flash OS",title:"reComputer R1000 Flash OS",keywords:["Edge","reComputer R1000","Flash OS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/recomputer_r1000_flash_OS",last_update:{date:"05/8/2023",author:"Parker Hu"}},sidebar:"ProductSidebar",previous:{title:"reComputer R1000 Getting Started",permalink:"/recomputer_r"},next:{title:"reComputer R1000 Assembly Guide",permalink:"/recomputer_r1000_assembly_guide"}},s={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Software Requirements",id:"software-requirements",level:2},{value:"Steps for Flashing Raspbian OS",id:"steps-for-flashing-raspbian-os",level:2},{value:"For Windows",id:"for-windows",level:3},{value:"For MAC",id:"for-mac",level:3},{value:"For Linux",id:"for-linux",level:3},{value:"Install Drivers",id:"install-drivers",level:2},{value:"Access reComputer R1000 via SSH",id:"access-recomputer-r1000-via-ssh",level:3},{value:"For Windows",id:"for-windows-1",level:5},{value:"For Mac/Linux",id:"for-maclinux",level:5},{value:"Install reComputer R1000 drivers after flashing new Raspbian OS",id:"install-recomputer-r1000-drivers-after-flashing-new-raspbian-os",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"recomputer-r1000-raspbian-os-to-emmc"},"reComputer R1000 Raspbian OS to eMMC"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,n.yg)("br",null),(0,n.yg)("p",null,"The reComputer R1000 edge IoT controller is built on the high-performance Raspberry Pi CM4 platform, featuring a quad-core A72 processor with a maximum support of 8GB RAM and 32GB eMMC. Equipped with dual Ethernet interfaces that can be flexibly configured, it also includes 3 isolated RS485 channels supporting BACnet, Modbus RTU, Modbus TCP/IP ,and KNX protocols.\nWith robust IoT network communication capabilities, the R1000 series supports multiple wireless communication options including 4G, LoRa\xae, Wi-Fi/BLE, allowing for flexible configurations to serve as corresponding wireless gateways. This controller is well-suited for remote device management, energy management, and various other scenarios in the field of smart buildings."),(0,n.yg)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,n.yg)("p",null,"You need to prepare the following hardware"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"reComputer R1000 x 1"),(0,n.yg)("li",{parentName:"ul"},"Host Computer (Windows/Mac/Linux) x 1"),(0,n.yg)("li",{parentName:"ul"},"Ethernet cable x 1"),(0,n.yg)("li",{parentName:"ul"},"Power adapter (12V-24V) BYO"),(0,n.yg)("li",{parentName:"ul"},"USB Type-C cable x 1 ")),(0,n.yg)("h2",{id:"software-requirements"},"Software Requirements"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/raspberrypi/usbboot"},"usbboot tool")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi Imager APP"))),(0,n.yg)("h2",{id:"steps-for-flashing-raspbian-os"},"Steps for Flashing Raspbian OS"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Make sure switch is set to ",(0,n.yg)("inlineCode",{parentName:"li"},"Flash mode")," according to the diagram below:")),(0,n.yg)("div",{class:"table-center"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Switch Position"),(0,n.yg)("th",{parentName:"tr",align:null},"Mode"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"nRPI-BOOT"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png",alt:"image",width:"80"})),(0,n.yg)("td",{parentName:"tr",align:null},"Normal mode"),(0,n.yg)("td",{parentName:"tr",align:null},"Boot from eMMC"),(0,n.yg)("td",{parentName:"tr",align:null},"Low")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png",alt:"image",width:"80"})),(0,n.yg)("td",{parentName:"tr",align:null},"Flash mode"),(0,n.yg)("td",{parentName:"tr",align:null},"Boot from USB"),(0,n.yg)("td",{parentName:"tr",align:null},"High"))))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Please use the USB Type-C data cable connect to the Type-C port on the reComputer R1000, as shown in the below image,")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/33.png"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Please connect the Power Cord from the power supply to the reComputer R1000 power port.")),(0,n.yg)("div",{style:{textAlign:"left",marginLeft:"40px"}},(0,n.yg)("img",{width:"100",src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png",style:{transform:"rotate(90deg)"}})),(0,n.yg)("br",null),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"The power solution utilizes a bridge rectifier diode for reverse polarity protection and is compatible with both AC and DC inputs. This ensures that regardless of how the power supply's positive and negative terminals are connected, the circuit will not be damaged. By using a bridge rectifier, the output voltage polarity remains fixed irrespective of the input DC polarity, providing effective reverse polarity protection.")),(0,n.yg)("p",null,"Now let's move on to software set up on your host computer. Please follow the steps according to your desired operating system"),(0,n.yg)("h3",{id:"for-windows"},"For Windows"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.yg)("strong",{parentName:"p"},"rpiboot setup installer")," by click ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe"},"here"))," to install the necessary drivers and the boot tool")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Connect reComputer R1000 the PC via USB Type-C cable"))),(0,n.yg)("p",null,"Windows will now find the hardware and install the necessary drivers"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 3.")," Search for ",(0,n.yg)("strong",{parentName:"p"},"rpiboot")," tool that we installed before and open it")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 4.")," Open ",(0,n.yg)("strong",{parentName:"p"},"file explorer")," and you will see the eMMC of the Computer Module 4 shown as a ",(0,n.yg)("strong",{parentName:"p"},"USB mass storage device"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 5.")," Download ",(0,n.yg)("strong",{parentName:"p"},"Raspberry Pi Imager")," software from ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://www.raspberrypi.org/software/"},"here")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 6.")," Open Raspberry Pi Imager software"))),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 7.")," Press ",(0,n.yg)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,n.yg)("strong",{parentName:"li"},"Advanced options")," window")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("p",null,"Here you can ",(0,n.yg)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wiFi, set locale settings")," and more"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},'The system has preset a username and password. Please set the default username to "',(0,n.yg)("strong",{parentName:"p"},"recomputer"),'" and the default password to "',(0,n.yg)("strong",{parentName:"p"},"12345678"),'" when logging in. If you set different credentials and encounter issues, please reflash OS if your purchase the first batch of reComputer R1000. ')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 8.")," Click ",(0,n.yg)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"NOTE:")," You can select other OS such as ",(0,n.yg)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,n.yg)("strong",{parentName:"p"},"Other general purpose OS")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png"})),(0,n.yg)("p",null,"Or you can use this link to download the image file:"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi"},"Ubuntun for raspberry-pi")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 9.")," Click ",(0,n.yg)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 10.")," Finally, click ",(0,n.yg)("strong",{parentName:"p"},"WRITE")))),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 11.")," Flip the ",(0,n.yg)("strong",{parentName:"li"},"Boot Mode switch")," back to the ",(0,n.yg)("strong",{parentName:"li"},"Normal mode")," position")),(0,n.yg)("p",null,"Now you can skip to ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"#install-drivers"},"here"))),(0,n.yg)("h3",{id:"for-mac"},"For MAC"),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"You need to install ",(0,n.yg)("a",{parentName:"strong",href:"https://brew.sh/"},"homebrew")," before proceed the following steps."),"\nPlease open a terminal and type ",(0,n.yg)("inlineCode",{parentName:"p"},"brew -V")," to check if you have setup the correct homebrew environment, you should see the version of the homebrew environment you have installed.")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Clone the ",(0,n.yg)("strong",{parentName:"li"},"usbboot")," repository")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"git clone --depth=1 https://github.com/raspberrypi/usbboot\ncd usbboot\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Install ",(0,n.yg)("strong",{parentName:"li"},"libusb"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"brew install libusb\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Install ",(0,n.yg)("strong",{parentName:"li"},"pkg-config"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"brew install pkg-config\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," Build using make")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 5.")," Run the binary")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpiboot\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 6.")," Connect reComputer R1000 to the your Mac computer via USB Type-C cable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 7.")," Download and Install ",(0,n.yg)("strong",{parentName:"p"},"Raspberry Pi Imager")," Application by visiting ",(0,n.yg)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/"},"this link"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 8.")," Open the ",(0,n.yg)("strong",{parentName:"p"},"Raspberry Pi Imager")," Application"))),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 9.")," Press ",(0,n.yg)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,n.yg)("strong",{parentName:"li"},"Advanced options")," window")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("p",null,"Here you can ",(0,n.yg)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wifi, set locale settings")," and more"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},'The system has preset a username and password. Please set the default username to "',(0,n.yg)("strong",{parentName:"p"},"recomputer"),'" and the default password to "',(0,n.yg)("strong",{parentName:"p"},"12345678"),'" when logging in. If you set different credentials and encounter issues, please reflash OS if your purchase the first batch of reComputer R1000. ')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 10.")," Click ",(0,n.yg)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"NOTE:")," You can select other OS such as ",(0,n.yg)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,n.yg)("strong",{parentName:"p"},"Other general purpose OS")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png"})),(0,n.yg)("p",null,"Or you can use this link to download the image file:"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi"},"Ubuntun for raspberry-pi")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 11.")," Click ",(0,n.yg)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 12.")," Finally, click ",(0,n.yg)("strong",{parentName:"p"},"WRITE")))),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 13.")," Flip the ",(0,n.yg)("strong",{parentName:"li"},"Boot Mode switch")," back to the ",(0,n.yg)("strong",{parentName:"li"},"Normal mode")," position")),(0,n.yg)("p",null,"Now you can skip to ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"#install-drivers"},"here"))),(0,n.yg)("h3",{id:"for-linux"},"For Linux"),(0,n.yg)("p",null,"We will use Git to obtain the ",(0,n.yg)("strong",{parentName:"p"},"rpiboot")," source code, so make sure Git is installed"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Open a ",(0,n.yg)("strong",{parentName:"li"},"Terminal")," window and type the following to update the ",(0,n.yg)("strong",{parentName:"li"},"packages list"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Install ",(0,n.yg)("strong",{parentName:"li"},"Git")," by the following command")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt install git pkg-config make gcc libusb-1.0-0-dev\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Git might produce an error if the date is not set properly. Type the following to correct this")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"sudo date MMDDhhmm\n")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"NOTE:")," Where ",(0,n.yg)("strong",{parentName:"p"},"MM")," is the month, ",(0,n.yg)("strong",{parentName:"p"},"DD")," is the date, and ",(0,n.yg)("strong",{parentName:"p"},"hh")," and ",(0,n.yg)("strong",{parentName:"p"},"mm")," are hours and minutes respectively."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," Clone the ",(0,n.yg)("strong",{parentName:"li"},"usbboot")," tool repository")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"git clone --depth=1 https://github.com/raspberrypi/usbboot\ncd usbboot\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 5.")," Build and install the usbboot tool")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 6.")," Connect reComputer R1000 to the PC via USB Type-C cable")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 7.")," Run the usbboot tool and it will wait for a connection"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpiboot\n")),(0,n.yg)("p",null,"The result is shown as below:"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png",alt:"pir",width:"1000",height:"auto"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 8.")," Download snap ")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt install snap\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 9.")," Download ",(0,n.yg)("strong",{parentName:"li"},"rpi-imager")," ")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"snap install rpi-imager\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 10.")," Open Raspberry Pi Imager software")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"rpi-imager\n")),(0,n.yg)("p",null,"The result is shown as below:"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png",alt:"pir",width:"1000",height:"auto"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 11.")," Press ",(0,n.yg)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,n.yg)("strong",{parentName:"li"},"Advanced options")," window")),(0,n.yg)("p",null,"Set a hostname, set a password, configure wifi, set locale settings"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("p",null,"Enable SSH"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("p",null,"Here you can ",(0,n.yg)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wifi, set locale settings")," and more"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},'The system has preset a username and password. Please set the default username to "',(0,n.yg)("strong",{parentName:"p"},"recomputer"),'" and the default password to "',(0,n.yg)("strong",{parentName:"p"},"12345678"),'" when logging in. If you set different credentials and encounter issues, please reflash OS if your purchase the first batch of reComputer R1000. ')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 11.")," Click ",(0,n.yg)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"NOTE:")," You can select other OS such as ",(0,n.yg)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,n.yg)("strong",{parentName:"p"},"Other general purpose OS")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png"})),(0,n.yg)("p",null,"Or you can use this link to download the image file:"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi"},"Ubuntun for raspberry-pi")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 12.")," Click ",(0,n.yg)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 13.")," Finally, click ",(0,n.yg)("strong",{parentName:"p"},"NEXT")," and ",(0,n.yg)("strong",{parentName:"p"},"YES")))),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("p",null,"Please wait a few minutes until the flashing process is complete.\nThe result is shown as below:"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png",alt:"pir",width:"600",height:"auto"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 14.")," Flip the ",(0,n.yg)("strong",{parentName:"li"},"Boot Mode switch")," back to the ",(0,n.yg)("strong",{parentName:"li"},"Normal mode")," position")),(0,n.yg)("h2",{id:"install-drivers"},"Install Drivers"),(0,n.yg)("h3",{id:"access-recomputer-r1000-via-ssh"},"Access reComputer R1000 via SSH"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"The following steps require some basic Linux command line knowledge, Please prepare yourself a cup of coffee and getting ready.")),(0,n.yg)("p",null,"As following the above flashing OS steps, the reComputer R1000 should have SSH enabled with the hostname of ",(0,n.yg)("inlineCode",{parentName:"p"},"raspberrypi.local"),"."),(0,n.yg)("p",null,"Now please connect the Ethernet cable to the reComputer R1000 and a router which is on the same network as your host computer."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"To test if your reComputer R1000 is on the same network with host computer, you can use ",(0,n.yg)("inlineCode",{parentName:"p"},"ping raspberrypi.local")),(0,n.yg)("p",{parentName:"admonition"},"if you see the following output after the ping command which means both devices are on the same network:"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ping.png",alt:"pir",width:"600",height:"auto"}))),(0,n.yg)("h5",{id:"for-windows-1"},"For Windows"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Open ",(0,n.yg)("strong",{parentName:"li"},"Command Prompt")," and type the following")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"ssh pi@raspberrypi.local\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Type ",(0,n.yg)("strong",{parentName:"li"},"yes")," for the prompt")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png",alt:"pir",width:"750",height:"auto"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Enter the password as follows")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"raspberry\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," If you have sucessfully logged into the Raspberry Pi OS, you will see the following output")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png",alt:"pir",width:"1000",height:"auto"})),(0,n.yg)("h5",{id:"for-maclinux"},"For Mac/Linux"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Open ",(0,n.yg)("strong",{parentName:"li"},"Terminal")," on the computer and type the following")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"# ssh username@hostname\nssh pi@raspberrypi.local\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Type ",(0,n.yg)("strong",{parentName:"li"},"yes")," for the following message")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"ECDSA key fingerprint is SHA256:XXXXXXX.\nAre you sure you want to continue connecting (yes/no/[fingerprint])?\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," When it asks for the password, type the following")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"# password for user\nraspberry\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," If you have sucessfully logged into the Raspberry Pi OS, you will see the following output")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png",alt:"pir",width:"900",height:"auto"})),(0,n.yg)("h3",{id:"install-recomputer-r1000-drivers-after-flashing-new-raspbian-os"},"Install reComputer R1000 drivers after flashing new Raspbian OS"),(0,n.yg)("p",null,"reComputer R1000 comes with the necessary drivers pre-installed out-of-the-box so you don't need to install any additional drivers. However, if you flash new OS by yourself, you need to install the necessary drivers separately."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},(0,n.yg)("strong",{parentName:"p"},"For install 32-bit OS driver, Please carefully follow the steps below:")),(0,n.yg)("p",{parentName:"admonition"},"The Operating System that pre-installed on reComputer R1000 is 64-bit, if you wish to install 32-bit OS please use the following method to install the DTS drivers."),(0,n.yg)("p",{parentName:"admonition"},"Please follow the ",(0,n.yg)("a",{parentName:"p",href:"#access-recomputer-r1000-via-ssh"},(0,n.yg)("strong",{parentName:"a"},"Access reComputer R1000 via SSH"))," step, and then enter the following command:"),(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"echo arm_64bit=0 | sudo tee -a /boot/config.txt\n")),(0,n.yg)("p",{parentName:"admonition"},"Then continue the ",(0,n.yg)("a",{parentName:"p",href:"#install-recomputer-r1000-drivers-after-flashing-new-raspbian-os"},(0,n.yg)("strong",{parentName:"a"},"Install drivers after flashing new Raspbian OS process")))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Clone the following repo in the ssh shell you have connected to reComputer R1000 from the above steps")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt install git -y\ngit clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Enter the repo")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"cd seeed-linux-dtoverlays\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Type the following to install the drivers")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"sudo ./scripts/reTerminal.sh --device reComputer-R100x\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," Reboot the reComputer R1000")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,n.yg)("p",null,"This process will ensure that your drivers are up to date before updating the firmware."),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);