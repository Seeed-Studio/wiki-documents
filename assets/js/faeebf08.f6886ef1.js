"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47650],{15680:(e,t,i)=>{i.d(t,{xA:()=>h,yg:()=>p});var a=i(96540);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,o=function(e,t){if(null==e)return{};var i,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(i),g=o,p=u["".concat(l,".").concat(g)]||u[g]||d[g]||n;return i?a.createElement(p,r(r({ref:t},h),{},{components:i})):a.createElement(p,r({ref:t},h))}));function p(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,r=new Array(n);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<n;c++)r[c]=i[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}g.displayName="MDXCreateElement"},19320:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=i(58168),o=(i(96540),i(15680));const n={description:"Delves into the customization options available for Watcher's appearance and explores the various tools provided by the SenseCraft platform.",title:"2# Watcher Looks & SenseCraft Tools",image:"https://files.seeedstudio.com/wiki/watcher_getting_started/30.png",slug:"/getting_started_with_watcher_look_tool",sidebar_position:3,last_update:{date:"07/05/2024",author:"Citric"}},r="Watcher Looks & SenseCraft Tools",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Watcher/Getting_Started/sensecap_watcher_looks_tool",id:"Sensor/SenseCAP/SenseCAP_Watcher/Getting_Started/sensecap_watcher_looks_tool",title:"2# Watcher Looks & SenseCraft Tools",description:"Delves into the customization options available for Watcher's appearance and explores the various tools provided by the SenseCraft platform.",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Watcher/Getting_Started/sensecap_watcher_looks_tool.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Watcher/Getting_Started",slug:"/getting_started_with_watcher_look_tool",permalink:"/getting_started_with_watcher_look_tool",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Watcher/Getting_Started/sensecap_watcher_looks_tool.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1720137600,formattedLastUpdatedAt:"Jul 5, 2024",sidebarPosition:3,frontMatter:{description:"Delves into the customization options available for Watcher's appearance and explores the various tools provided by the SenseCraft platform.",title:"2# Watcher Looks & SenseCraft Tools",image:"https://files.seeedstudio.com/wiki/watcher_getting_started/30.png",slug:"/getting_started_with_watcher_look_tool",sidebar_position:3,last_update:{date:"07/05/2024",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"1# How to assign tasks to Watcher",permalink:"/getting_started_with_watcher_task"},next:{title:"3# As a sensor & Use Grove",permalink:"/watcher_as_grove"}},l={},c=[{value:"Watcher Bluetooth-based settings",id:"watcher-bluetooth-based-settings",level:2},{value:"Wi-Fi",id:"wi-fi",level:3},{value:"Basic Settings",id:"basic-settings",level:3},{value:"SenseCraft Remote Control",id:"sensecraft-remote-control",level:3},{value:"HTTP Message Block",id:"http-message-block",level:3},{value:"Device AI Server",id:"device-ai-server",level:3},{value:"Restore Device Setting",id:"restore-device-setting",level:3},{value:"Other Settings",id:"other-settings",level:2},{value:"Device Name &amp; Device Group",id:"device-name--device-group",level:3},{value:"Check Update",id:"check-update",level:3},{value:"Delete Detected History",id:"delete-detected-history",level:3},{value:"Delete Device",id:"delete-device",level:3},{value:"Watcher Animation",id:"watcher-animation",level:2},{value:"Creating Custom Animations",id:"creating-custom-animations",level:3},{value:"Converting and Resizing Images",id:"converting-and-resizing-images",level:3},{value:"Uploading Your Custom Animation",id:"uploading-your-custom-animation",level:3},{value:"A Call to Designers: Let Your Creativity Shine!",id:"a-call-to-designers-let-your-creativity-shine",level:2},{value:"Showcase and Inspiration",id:"showcase-and-inspiration",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],h={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.yg)(u,(0,a.A)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"watcher-looks--sensecraft-tools"},"Watcher Looks & SenseCraft Tools"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/30.png",style:{width:800,height:"auto"}})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},'SenseCAP Watcher, is now pre-launched on Kickstarter proudly with the official KS badge of "Project We Love"!')),(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.kickstarter.com/projects/seeed/sensecap-watcher-open-source-ai-assistant-for-smarter-spaces?ref=aulzfo"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now"))))),(0,o.yg)("br",null),(0,o.yg)("p",null,"Welcome to the world of Watcher customization and SenseCraft tools! In this article, we'll dive into the exciting possibilities of personalizing your Watcher device and explore the powerful features offered by the SenseCraft APP. Whether you're a new user looking to give your Watcher a unique look or an experienced enthusiast seeking to unlock the full potential of your device, this guide will provide you with the knowledge and inspiration to make your Watcher truly your own. Get ready to embark on a creative journey as we uncover the secrets of Watcher expression design and SenseCraft APP settings."),(0,o.yg)("h2",{id:"watcher-bluetooth-based-settings"},"Watcher Bluetooth-based settings"),(0,o.yg)("p",null,"This part of the setting must be available with Bluetooth enabled on both the device and the phone."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/31.png",style:{width:250,height:"auto"}})),(0,o.yg)("h3",{id:"wi-fi"},"Wi-Fi"),(0,o.yg)("p",null,"The Wi-Fi settings on your Watcher device allow you to connect to available wireless networks, enabling access to online services. This is particularly useful when you need to update your Watcher's firmware, sync data with the SenseCraft APP, or stream real-time monitoring data to the cloud."),(0,o.yg)("p",null,"To set up Wi-Fi on your Watcher, simply navigate to the Wi-Fi settings menu and scan for available networks. Select the desired network and enter the corresponding credentials (SSID and password) when prompted. Once connected, your Watcher will automatically reconnect to the saved network whenever it is in range, ensuring a stable and reliable connection."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/32.png",style:{width:700,height:"auto"}})),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"Note that Watcher only supports connection to 2.4GHz networks, not 5GHz.")),(0,o.yg)("h3",{id:"basic-settings"},"Basic Settings"),(0,o.yg)("p",null,"The Basic Settings menu on your Watcher device provides a range of options to customize your user experience. One of the key features is the ability to control the RGB LED on your Watcher. You can easily turn the RGB LED on or off, depending on your preference or the environment you're in. This can be useful when you want to conserve battery life or minimize visual distractions."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/33.png",style:{width:250,height:"auto"}})),(0,o.yg)("p",null,"Sound settings are also accessible within the Basic Settings menu. Here, you can adjust the volume of your Watcher's audio output to suit your needs. Whether you prefer loud and clear notifications or a more subtle audio experience, you can fine-tune the sound settings to your liking."),(0,o.yg)("p",null,"Display brightness is another crucial aspect of your Watcher's user experience. The Basic Settings menu allows you to adjust the brightness of your Watcher's display, ensuring optimal visibility in various lighting conditions. By customizing the display brightness, you can make your Watcher easier to read in bright sunlight or dimmer in low-light situations, all while conserving battery life when needed."),(0,o.yg)("p",null,"Lastly, the Basic Settings menu enables you to set and manage your Watcher's date, time, and time zone. Accurate timekeeping is essential for proper data logging and synchronization with other devices and services. By setting the correct date, time, and time zone, you can ensure that your Watcher's monitoring data is accurately timestamped and aligned with your local time."),(0,o.yg)("p",null,"To access and modify these settings, simply navigate to the Basic Settings menu on your Watcher device and use the intuitive interface to make your desired changes."),(0,o.yg)("h3",{id:"sensecraft-remote-control"},"SenseCraft Remote Control"),(0,o.yg)("p",null,"The SenseCraft Remote Control feature is a crucial setting that determines how your Watcher device communicates with the SenseCraft cloud services. When enabled, this feature establishes a connection channel between your Watcher and the SenseCraft cloud, allowing you to access a wide range of advanced features and services, such as cloud-based Large Language Models (LLMs) and remote notification capabilities."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/34.png",style:{width:250,height:"auto"}})),(0,o.yg)("p",null,"However, if you choose to disable the SenseCraft Remote Control feature, your Watcher will only communicate with your mobile device via Bluetooth. While this can be useful for local control and configuration, it also means that you will lose access to the powerful cloud-based services and remote notification capabilities. Additionally, if your Watcher moves out of Bluetooth range from your mobile device, you risk losing control of your Watcher altogether."),(0,o.yg)("p",null,"To manage the SenseCraft Remote Control setting, simply navigate to the corresponding menu on your Watcher device and toggle the feature on or off as desired. By carefully considering your needs and weighing the benefits of cloud connectivity, you can make an informed decision on how to configure this essential setting for your Watcher."),(0,o.yg)("h3",{id:"http-message-block"},"HTTP Message Block"),(0,o.yg)("p",null,"The HTTP Message Block feature in Watcher is a localized alarm service that operates alongside other alarm methods such as RGB alarms, APP alarms, and UART alarms. Its primary purpose is to provide users with a fully localized message pushing service, aimed at protecting user privacy. Unlike other alarm services that may rely on external platforms or servers, the HTTP Message Block is designed to work exclusively with the user's own HTTP endpoint, ensuring that all data and notifications remain within the user's local environment."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/83.png",style:{width:250,height:"auto"}})),(0,o.yg)("p",null,"To set up the HTTP Message Block, users need to configure two essential pieces of information: the ",(0,o.yg)("strong",{parentName:"p"},"HTTP URL")," and the ",(0,o.yg)("strong",{parentName:"p"},"HTTP Token"),". These details are provided by the software that accompanies the ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"#device-ai-server"},"Device AI Service")),", ensuring a seamless integration between the two features. By keeping the configuration data local, Watcher maintains a high level of privacy and security for its users."),(0,o.yg)("p",null,"Once configured, the HTTP Message Block allows Watcher to send notifications and alerts directly to the user's specified HTTP URL. This localized approach eliminates the need for data to be transmitted to external servers or platforms, providing users with complete control over their data and notifications. The user's local system or application running at the configured HTTP URL can then process and handle the information according to the user's preferences."),(0,o.yg)("p",null,"It's important to note that, at present, the HTTP Message Block is designed to work hand-in-hand with the Device AI Service. While the HTTP Message Block sends notifications to the user's configured HTTP URL, the Device AI Service plays a crucial role in processing and analyzing the data locally, enabling intelligent decision-making and event triggering."),(0,o.yg)("p",null,"By leveraging the HTTP Message Block in conjunction with the Device AI Service, users can enjoy the benefits of a fully localized and privacy-focused alarm system. This powerful combination enables Watcher to deliver timely and relevant notifications while ensuring that sensitive data remains within the user's trusted environment, empowering users with complete control and privacy over their data and alerts."),(0,o.yg)("p",null,"Detailed information on setting up and configuring the Device AI Service, along with in-depth explanations of each AI capability, can be found in the ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/watcher_local_deploy/"},"Deploy Watcher's AI capabilities locally")),"."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"If you want to use completely local notification service without going through SenseCraft, then when you configure the message notification, please ",(0,o.yg)("strong",{parentName:"p"},"don't")," tick ",(0,o.yg)("strong",{parentName:"p"},"APP Push Notification"),", otherwise your notification will still go through SenseCraft and then pushed to your app. and remember to ",(0,o.yg)("strong",{parentName:"p"},"tick the HTTP Push Notification option"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/84.jpg",style:{width:300,height:"auto"}}))),(0,o.yg)("h3",{id:"device-ai-server"},"Device AI Server"),(0,o.yg)("p",null,"The Device AI Service in Watcher is a powerful feature that allows users to deploy AI capabilities directly on their local devices, such as PCs or high-performance machines like Jetson. To set up the Device AI Service, users need to provide the URL and the Watcher Service Token, which are displayed in the user interface of the accompanying Device AI Service software."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/82.png",style:{width:250,height:"auto"}})),(0,o.yg)("p",null,"Once configured, the Device AI Service enables Watcher to leverage the user's local computing resources for a variety of AI-powered functionalities, including voice interaction, task decomposition, image analysis, and chatbot services."),(0,o.yg)("p",null,"For users who value the flexibility and control of running AI services locally, the Device AI Service in Watcher offers a comprehensive and customizable solution. Detailed information on setting up and configuring the Device AI Service, along with in-depth explanations of each AI capability, can be found in the ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/watcher_local_deploy/"},"Deploy Watcher's AI capabilities locally")),"."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"If you have previously clicked Private Watcher Service, then you will not be able to use SenseCraft's cloud service. When you suddenly find that you can't get messages from the cloud service, please check if ",(0,o.yg)("strong",{parentName:"p"},"SenseCraft")," is not selected.")),(0,o.yg)("h3",{id:"restore-device-setting"},"Restore Device Setting"),(0,o.yg)("p",null,"The Restore Device Setting feature allows you to reset your Watcher to its default factory settings, which can be useful when encountering an issue that cannot be resolved through other means or when you want to start fresh with a clean slate."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/35.png",style:{width:250,height:"auto"}})),(0,o.yg)("p",null,"However, it's crucial to exercise caution when using this feature, as all of your Watcher's settings, including customizations, historical alert records, and custom expressions, will be permanently lost. There is no built-in backup functionality, so once you initiate the restoration process, your previous settings and data cannot be recovered."),(0,o.yg)("p",null,"To access the Restore Device Setting feature, navigate to the corresponding menu on your Watcher device. Before confirming the restoration process, carefully consider whether resetting your Watcher to its factory defaults is absolutely necessary. If you proceed, your Watcher will be restored to its original state, ready for you to reconfigure and customize according to your needs."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"After Restore Device, you need to manually delete the corresponding device in the app and then add it again.")),(0,o.yg)("h2",{id:"other-settings"},"Other Settings"),(0,o.yg)("p",null,"The following settings do not rely on a Bluetooth connection to the phone, just make sure that both the Watcher and the phone are connected to the Internet and that the SenseCraft Remote Control feature is turned on."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/36.png",style:{width:250,height:"auto"}})),(0,o.yg)("h3",{id:"device-name--device-group"},"Device Name & Device Group"),(0,o.yg)("p",null,"The Device Name & Device Group settings allow you to personalize your Watcher and organize multiple devices for easier management. By assigning a unique name to your Watcher, you can quickly identify it when connecting via Bluetooth or managing it through the SenseCraft APP. This is particularly helpful if you have multiple Watcher devices in your possession."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/37.png",style:{width:250,height:"auto"}})),(0,o.yg)("p",null,"Additionally, you can assign your Watcher to a specific Device Group, which is useful when managing a large number of devices for different purposes or locations. For example, you might create separate Device Groups for home, office, or outdoor monitoring. By grouping your Watcher devices logically, you can easily locate, configure, and control them based on their designated purpose or location."),(0,o.yg)("h3",{id:"check-update"},"Check Update"),(0,o.yg)("p",null,"The Check Update feature ensures that your Watcher is always running the latest firmware and software versions. By regularly checking for updates, you can access new features, performance improvements, bug fixes, and security enhancements as soon as they become available."),(0,o.yg)("p",null,"To check for updates, simply navigate to the Check Update menu on your Watcher device or within the SenseCraft APP. If an update is available, you will be prompted to download and install it. It is recommended to keep your Watcher updated to ensure optimal performance, stability, and security."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/57.png",style:{width:250,height:"auto"}})),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Some OTA versions may require Watcher users to force an update to continue using it. This may be due to fixing a major software bug or a service upgrade in the background.")),(0,o.yg)("h3",{id:"delete-detected-history"},"Delete Detected History"),(0,o.yg)("p",null,"The Delete Detected History feature allows you to clear the historical alert data stored within the SenseCraft APP. This can be useful when you want to declutter your alert history or maintain a more focused view of recent events."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/38.png",style:{width:250,height:"auto"}})),(0,o.yg)("p",null,"To delete the detected history, access the Delete Detected History menu within the SenseCraft APP. Before confirming the deletion, carefully review the implications, as this action is irreversible, and all historical alert data will be permanently erased from the APP."),(0,o.yg)("h3",{id:"delete-device"},"Delete Device"),(0,o.yg)("p",null,"The Delete Device feature is used when you want to remove a Watcher device from your SenseCraft account or Bluetooth connections. This can be necessary when you no longer need to use a particular Watcher, when you want to transfer ownership of the device, or when you encounter persistent issues that require starting anew."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/39.png",style:{width:250,height:"auto"}})),(0,o.yg)("p",null,"To delete a device, locate the Delete Device option within the Watcher's settings or the SenseCraft APP. Before confirming the deletion, ensure that you have known this process is irreversible. Once you delete a device, it will no longer be associated with your account, and you will need to re-add it if you wish to use it again in the future."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"After the app deletes the device and you want to rebind the device, you also need to do a Factory Reset in the device's settings.")),(0,o.yg)("h2",{id:"watcher-animation"},"Watcher Animation"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/44.png",style:{width:650,height:"auto"}})),(0,o.yg)("p",null,"The Watcher device offers a unique and engaging way to personalize your monitoring experience through custom animations. By uploading your own images, you can create bespoke expressions that reflect your style, convey specific messages, or simply add a touch of fun to your Watcher's status indicators."),(0,o.yg)("h3",{id:"creating-custom-animations"},"Creating Custom Animations"),(0,o.yg)("p",null,"There are several ways to create custom animations for your Watcher, depending on your skills and preferences:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Using Animation Software"),": If you're familiar with animation software like Adobe After Effects or Lottie, you can create your own animations from scratch. Design your animation with up to 5 frames, keeping in mind that each frame will be displayed for approximately 500ms. Once you've created your animation, select up to 5 key frames, take screenshots, and upload them using the SenseCraft APP.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Using Graphic Design Software"),": If you prefer working with graphic design software like Figma or Adobe Illustrator, you can create a series of static images to form your animation. Design up to 5 frames, keeping in mind that each frame will be displayed for around 500ms. Export your designs as individual PNG images and upload them using the SenseCraft APP.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Using Existing GIFs"),": If you find a GIF online that you'd like to use for your Watcher's custom animation, you can easily convert it into a series of PNG images. Use a free online tool like ",(0,o.yg)("a",{parentName:"p",href:"https://www.ezgif.com/split"},"EZGif")," to split your GIF into individual frames. Select up to 5 frames that best represent the animation you want to achieve, then upload these PNG images using the SenseCraft APP."))),(0,o.yg)("p",null,"Regardless of the method you choose, each image should be in ",(0,o.yg)("strong",{parentName:"p"},"PNG")," format and have a resolution of ",(0,o.yg)("strong",{parentName:"p"},"412x412")," pixels to ensure optimal display quality on the Watcher's screen. When uploaded, these images will be combined to form a seamless animation, bringing your Watcher to life with your personalized expressions."),(0,o.yg)("h3",{id:"converting-and-resizing-images"},"Converting and Resizing Images"),(0,o.yg)("p",null,"If your desired images are not already in the PNG format or don't meet the required 412x412 resolution, you can easily convert and resize them using various tools:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Adobe Photoshop"),': Open your image in Photoshop, go to "Image" > "Image Size", set the width and height to 412 pixels (maintaining aspect ratio), and save the image as a PNG file.')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"GIMP"),': Open your image in GIMP, navigate to "Image" > "Scale Image", enter 412 in both the width and height fields (maintaining aspect ratio), and export the image as a PNG file.')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Online Tools"),": Use websites like ",(0,o.yg)("a",{parentName:"p",href:"https://www.resizeimage.net"},"Resize Image")," or ",(0,o.yg)("a",{parentName:"p",href:"https://www.cloudconvert.com"},"CloudConvert")," to resize your images to 412x412 pixels and convert them to PNG format."))),(0,o.yg)("h3",{id:"uploading-your-custom-animation"},"Uploading Your Custom Animation"),(0,o.yg)("p",null,"Once you have your series of PNG images ready, it's time to bring your custom animations to life on your Watcher. Connect your Watcher to the SenseCraft APP and navigate to the \"Animation\" page. Here, you'll find several Watcher states that allow for animation customization, including ",(0,o.yg)("strong",{parentName:"p"},"Standby"),", ",(0,o.yg)("strong",{parentName:"p"},"Listening"),", ",(0,o.yg)("strong",{parentName:"p"},"Speaking"),", ",(0,o.yg)("strong",{parentName:"p"},"Watching Space"),", and ",(0,o.yg)("strong",{parentName:"p"},"Greeting"),"."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/43.png",style:{width:250,height:"auto"}})),(0,o.yg)("p",null,"To replace the animations for the Watching Space or Greeting states, simply select the desired state and follow the prompts to upload your PNG images. Make sure to ",(0,o.yg)("strong",{parentName:"p"},"upload the same number of images as shown in the examples")," for each state to ensure a seamless animation experience."),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"When uploading your custom animations, keep in mind that each image should be in ",(0,o.yg)("strong",{parentName:"p"},"PNG")," format and have a resolution of ",(0,o.yg)("strong",{parentName:"p"},"412x412")," pixels for optimal display quality on the Watcher's screen. Your uploaded images will replace the default animations for the selected Watcher states, allowing you to personalize your device's expressions and add a unique touch to your monitoring experience.")),(0,o.yg)("h2",{id:"a-call-to-designers-let-your-creativity-shine"},"A Call to Designers: Let Your Creativity Shine!"),(0,o.yg)("p",null,"At SenseCraft, we believe that the power of creativity and collaboration can lead to incredible innovations. That's why we're inviting designers from all backgrounds to contribute their unique perspectives and skills to help expand the animation possibilities for the Watcher."),(0,o.yg)("p",null,"If you're a designer with a passion for creating engaging and expressive animations, we encourage you to take part in this exciting opportunity. By sharing your creative ideas and designs, you can help shape the future of the Watcher's animation capabilities and contribute to a more vibrant and personalized user experience."),(0,o.yg)("p",null,"Whether you specialize in character animation, motion graphics, or any other style, your expertise and imagination can make a significant impact. We welcome animations that convey a wide range of emotions, from joy and excitement to calm and contemplation, as well as designs that showcase the Watcher's unique capabilities and potential."),(0,o.yg)("p",null,"To participate, simply create your custom animations following the guidelines outlined above and share them with the SenseCraft community. You can upload your designs directly through the SenseCraft APP or share them on social media using the hashtag ",(0,o.yg)("inlineCode",{parentName:"p"},"#WatcherAnimations"),". We can't wait to see the incredible ideas and designs that our talented community of designers will bring to life!"),(0,o.yg)("p",null,"By working together and leveraging the power of collaboration, we can push the boundaries of what's possible with the Watcher's animation features. So let your creativity run wild, share your unique vision, and join us in shaping the future of Watcher animations. Together, we can create a more expressive, engaging, and personalized monitoring experience for Watcher users around the world."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/42.png",style:{width:250,height:"auto"}})),(0,o.yg)("h3",{id:"showcase-and-inspiration"},"Showcase and Inspiration"),(0,o.yg)("p",null,"Discover a world of creativity and inspiration in our Watcher Animation Showcase! This is where we celebrate the incredible talent and imagination of our designer community, featuring some of the most stunning and innovative custom animations created for the Watcher."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/45.png",style:{width:1e3,height:"auto"}})),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/getting_started_with_watcher/"},"Getting Started with SenseCAP Watcher"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/getting_started_with_watcher_task/"},"Watcher Quick Start Series 1# : How to assign tasks to Watcher"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/getting_started_with_watcher_look_tool"},"Watcher Quick Start Series 2# : Watcher Looks & SenseCraft Tools"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/watcher_as_grove"},"Watcher Quick Start Series 3# : As a sensor & Use Grove"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/watcher_local_deploy"},"Watcher Quick Start Series 4# : Deploy Watcher's AI capabilities locally"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Watcher Quick Start Series 5# : Training a model for Watcher")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/what_does_watcher_do"},"Watcher Quick Start Series 6# : What does Watcher do")))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}d.isMDXComponent=!0}}]);