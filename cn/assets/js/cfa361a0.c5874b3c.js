"use strict";(self.webpackChunkwiki_zh_CN=self.webpackChunkwiki_zh_CN||[]).push([["63605"],{87890(e,t,n){n.r(t),n.d(t,{metadata:()=>r,default:()=>h,frontMatter:()=>s,contentTitle:()=>a,toc:()=>l,assets:()=>d});var r=JSON.parse('{"id":"Robotics/Robot_Actuator/HighTorque/cn_HighTorque","title":"\u9AD8\u64CE\u7CFB\u5217\u7535\u673A","description":"\u672C\u6587\u6863\u5C06\u4ECB\u7ECD\u5982\u4F55\u5FEB\u901F\u4E0A\u624B\u9AD8\u64CE\u7CFB\u5217\u7535\u673A.","source":"@site/docs/Robotics/Robot_Actuator/HighTorque/cn_HighTorque.md","sourceDirName":"Robotics/Robot_Actuator/HighTorque","slug":"/hightorque_series","permalink":"/cn/hightorque_series","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/zh-CN/docs/Robotics/Robot_Actuator/HighTorque/cn_HighTorque.md","tags":[],"version":"current","lastUpdatedBy":"ZhuYaoHui","lastUpdatedAt":1750723200000,"frontMatter":{"description":"\u672C\u6587\u6863\u5C06\u4ECB\u7ECD\u5982\u4F55\u5FEB\u901F\u4E0A\u624B\u9AD8\u64CE\u7CFB\u5217\u7535\u673A.","title":"\u9AD8\u64CE\u7CFB\u5217\u7535\u673A","keywords":["\u5173\u8282\u6A21\u7EC4","\u7535\u673A","\u673A\u5668\u4EBA","\u673A\u68B0\u81C2"],"image":"https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp","slug":"/hightorque_series","sku":"114090071,114090072","last_update":{"date":"06/24/2025","author":"ZhuYaoHui"},"createdAt":"2025-06-24","updatedAt":"2026-01-07","url":"https://wiki.seeedstudio.com/cn/hightorque_series/"},"sidebar":"CNSidebar","previous":{"title":"\u5DE5\u5177API\u53C2\u8003","permalink":"/cn/reachymini_api_utils"},"next":{"title":"\u9AD8\u626D\u77E9\u7535\u673A\u5165\u95E8\u6307\u5357","permalink":"/cn/hightorque_getting_started"}}'),o=n(31085),i=n(71184);let s={description:"\u672C\u6587\u6863\u5C06\u4ECB\u7ECD\u5982\u4F55\u5FEB\u901F\u4E0A\u624B\u9AD8\u64CE\u7CFB\u5217\u7535\u673A.",title:"\u9AD8\u64CE\u7CFB\u5217\u7535\u673A",keywords:["\u5173\u8282\u6A21\u7EC4","\u7535\u673A","\u673A\u5668\u4EBA","\u673A\u68B0\u81C2"],image:"https://files.seeedstudio.com/wiki/robotics/Actuator/damiao/damiao.webp",slug:"/hightorque_series",sku:"114090071,114090072",last_update:{date:"06/24/2025",author:"ZhuYaoHui"},createdAt:"2025-06-24",updatedAt:"2026-01-07",url:"https://wiki.seeedstudio.com/cn/hightorque_series/"},a="\u9AD8\u64CE\u7CFB\u5217\u7535\u673A\u4F7F\u7528\u6587\u6863",d={},l=[{value:"\u6280\u672F\u89C4\u683C",id:"\u6280\u672F\u89C4\u683C",level:2},{value:"\u884C\u661F\u5173\u8282\u6A21\u7EC4\u53C2\u6570\u5BF9\u6BD4\u8868",id:"\u884C\u661F\u5173\u8282\u6A21\u7EC4\u53C2\u6570\u5BF9\u6BD4\u8868",level:3},{value:"\u7535\u673A\u5B89\u88C5\u5C3A\u5BF8",id:"\u7535\u673A\u5B89\u88C5\u5C3A\u5BF8",level:3},{value:"\u7535\u673A\u8C03\u8BD5\u52A9\u624B\u53CA\u4F7F\u7528\u8BF4\u660E\u4E66",id:"\u7535\u673A\u8C03\u8BD5\u52A9\u624B\u53CA\u4F7F\u7528\u8BF4\u660E\u4E66",level:2},{value:"C++\u793A\u4F8B",id:"c\u793A\u4F8B",level:2},{value:"\u4F7F\u7528reComputer Mini Jetson Orin\u63A7\u5236\u7535\u673A",id:"\u4F7F\u7528recomputer-mini-jetson-orin\u63A7\u5236\u7535\u673A",level:2},{value:"\u542F\u7528CAN\u63A5\u53E3",id:"\u542F\u7528can\u63A5\u53E3",level:3},{value:"\u542F\u7528Jetson CAN\u901A\u4FE1",id:"\u542F\u7528jetson-can\u901A\u4FE1",level:4},{value:"Python\u63A7\u5236",id:"python\u63A7\u5236",level:3},{value:"\u6280\u672F\u652F\u6301\u4E0E\u4EA7\u54C1\u8BA8\u8BBA",id:"\u6280\u672F\u652F\u6301\u4E0E\u4EA7\u54C1\u8BA8\u8BBA",level:2}];function c(e){let t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components},{Details:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"\u9AD8\u64CE\u7CFB\u5217\u7535\u673A\u4F7F\u7528\u6587\u6863",children:"\u9AD8\u64CE\u7CFB\u5217\u7535\u673A\u4F7F\u7528\u6587\u6863"})}),"\n",(0,o.jsx)("div",{className:"quick-nav-container",children:(0,o.jsxs)("nav",{className:"quick-nav",children:[(0,o.jsxs)("a",{className:"nav-item",children:[(0,o.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438.png",className:"nav-icon",alt:"4438-32"}),(0,o.jsx)("span",{className:"text",children:"4438-32"}),(0,o.jsx)("div",{className:"hover-effect"})]}),(0,o.jsxs)("a",{className:"nav-item",children:[(0,o.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047-3.png",className:"nav-icon",alt:"5047-36"}),(0,o.jsx)("span",{className:"text",children:"5047-36"}),(0,o.jsx)("div",{className:"hover-effect"})]})]})}),"\n",(0,o.jsx)(t.h1,{id:"\u9AD8\u64CE\u7CFB\u5217\u7535\u673A\u5FEB\u901F\u5165\u95E8\u6307\u5357",children:"\u9AD8\u64CE\u7CFB\u5217\u7535\u673A\u5FEB\u901F\u5165\u95E8\u6307\u5357"}),"\n",(0,o.jsx)(t.p,{children:"\u672C\u6587\u6863\u5C06\u4ECB\u7ECD\u5982\u4F55\u5FEB\u901F\u4E0A\u624B\u9AD8\u64CE\u7CFB\u5217\u7535\u673A\u3002"}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{width:400,src:"https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/hightorque.png"})}),"\n",(0,o.jsx)(t.h2,{id:"\u6280\u672F\u89C4\u683C",children:"\u6280\u672F\u89C4\u683C"}),"\n",(0,o.jsx)(t.h3,{id:"\u884C\u661F\u5173\u8282\u6A21\u7EC4\u53C2\u6570\u5BF9\u6BD4\u8868",children:"\u884C\u661F\u5173\u8282\u6A21\u7EC4\u53C2\u6570\u5BF9\u6BD4\u8868"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:"\u6280\u672F\u89C4\u683C\u4E66\u4E0B\u8F7D"})}),(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-5047-36-NE.pdf",children:"HTDW-5047-36-NE"})})}),(0,o.jsx)(t.th,{children:(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/HTDW-4438-32-NE.pdf",children:"HTDW-4438-32-NE"})})})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u51CF\u901F\u6BD4"})}),(0,o.jsx)(t.td,{children:"36"}),(0,o.jsx)(t.td,{children:"30"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u5CF0\u503C\u626D\u77E9(Nm)"})}),(0,o.jsx)(t.td,{children:"16"}),(0,o.jsx)(t.td,{children:"6"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u989D\u5B9A\u626D\u77E9(Nm)"})}),(0,o.jsx)(t.td,{children:"4"}),(0,o.jsx)(t.td,{children:"1.5"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u5835\u8F6C\u626D\u77E9(Nm)"})}),(0,o.jsx)(t.td,{children:"24"}),(0,o.jsx)(t.td,{children:"10"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u989D\u5B9A\u8F6C\u901F(RPM)"})}),(0,o.jsx)(t.td,{children:"40"}),(0,o.jsx)(t.td,{children:"36"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u7A7A\u8F7D\u8F6C\u901F(RPM)"})}),(0,o.jsx)(t.td,{children:"60"}),(0,o.jsx)(t.td,{children:"75"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u989D\u5B9A\u529F\u7387(W)"})}),(0,o.jsx)(t.td,{children:"17"}),(0,o.jsx)(t.td,{children:"13"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u626D\u77E9\u5E38\u6570(Nm/A)"})}),(0,o.jsx)(t.td,{children:"0.062"}),(0,o.jsx)(t.td,{children:"0.039"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u6781\u5BF9\u6570"})}),(0,o.jsx)(t.td,{children:"14"}),(0,o.jsx)(t.td,{children:"-"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u989D\u5B9A\u7535\u538B(V)"})}),(0,o.jsx)(t.td,{children:"12-48"}),(0,o.jsx)(t.td,{children:"12-48"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u989D\u5B9A\u7535\u6D41(A)"})}),(0,o.jsx)(t.td,{children:"2"}),(0,o.jsx)(t.td,{children:"1"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u5CF0\u503C\u7535\u6D41(A)"})}),(0,o.jsx)(t.td,{children:"10"}),(0,o.jsx)(t.td,{children:"5"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u626D\u77E9\u63A7\u5236\u7CBE\u5EA6"})}),(0,o.jsx)(t.td,{children:"\xb110%"}),(0,o.jsx)(t.td,{children:"\xb120%"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u8F6C\u901F\u63A7\u5236\u7CBE\u5EA6"})}),(0,o.jsx)(t.td,{children:"\xb18%"}),(0,o.jsx)(t.td,{children:"\xb110%"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u54CD\u5E94\u65F6\u95F4(\u03BCs)"})}),(0,o.jsx)(t.td,{children:"\u2264200"}),(0,o.jsx)(t.td,{children:"\u2264200"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u9AD8\u901F\u7AEF\u7F16\u7801\u5668\u5206\u8FA8\u7387"})}),(0,o.jsx)(t.td,{children:"14bit"}),(0,o.jsx)(t.td,{children:"14bit"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u4F4E\u901F\u7AEF\u7F16\u7801\u5668\u5206\u8FA8\u7387"})}),(0,o.jsx)(t.td,{children:"12bit"}),(0,o.jsx)(t.td,{children:"12bit"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u901A\u8BAF\u6CE2\u7279\u7387(Mbps)"})}),(0,o.jsx)(t.td,{children:"5"}),(0,o.jsx)(t.td,{children:"5"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.strong,{children:"\u63A7\u5236\u9891\u7387(Hz)"})}),(0,o.jsx)(t.td,{children:"3k"}),(0,o.jsx)(t.td,{children:"3k"})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"\u7535\u673A\u5B89\u88C5\u5C3A\u5BF8",children:"\u7535\u673A\u5B89\u88C5\u5C3A\u5BF8"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"HTDM-4438-32"}),"\uFF1A"]}),"\n"]}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{width:800,src:"https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/4438_install.png"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"HTDM-5047-36"}),"\uFF1A"]}),"\n"]}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{width:800,src:"https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/5047_install.png"})}),"\n",(0,o.jsx)(t.h2,{id:"\u7535\u673A\u8C03\u8BD5\u52A9\u624B\u53CA\u4F7F\u7528\u8BF4\u660E\u4E66",children:"\u7535\u673A\u8C03\u8BD5\u52A9\u624B\u53CA\u4F7F\u7528\u8BF4\u660E\u4E66"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Windows PC\u7AEF\u51C6\u5907"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\u4E0B\u8F7D",(0,o.jsx)(t.a,{href:"https://www.hightorque.cn/wp-content/uploads/2025/03/%E9%AB%98%E6%93%8E%E7%94%B5%E6%9C%BA%E8%B0%83%E8%AF%95%E5%8A%A9%E6%89%8Bv1.2.1.zip",children:"\u7535\u673A\u8C03\u8BD5\u52A9\u624Bv1.2.1"})]}),"\n",(0,o.jsxs)(t.li,{children:["\u4E0B\u8F7D",(0,o.jsx)(t.a,{href:"https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/zn_user.pdf",children:"\u4E0A\u4F4D\u673A\u8C03\u8BD5\u8BF4\u660E\u4E66"})]}),"\n",(0,o.jsxs)(t.li,{children:["\u4E0B\u8F7D",(0,o.jsx)(t.a,{href:"https://www.hightorque.cn/wp-content/uploads/2024/12/%E9%AB%98%E6%93%8E%E7%94%B5%E6%9C%BAcan%E5%8D%8F%E8%AE%AE%E8%A7%A3%E6%9E%90v1.5.5.zip",children:"CAN\u901A\u4FE1\u534F\u8BAE"})]}),"\n",(0,o.jsx)(t.li,{children:"\u8D2D\u4E70CAN-USB\u9A71\u52A8\u677F"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"c\u793A\u4F8B",children:"C++\u793A\u4F8B"}),"\n",(0,o.jsxs)(t.p,{children:["C++\u63A7\u5236\u9700\u8981\u989D\u5916\u7684CAN-USB\u9A71\u52A8\u677F\uFF0C\u8BF7\u53C2\u8003",(0,o.jsx)(t.a,{href:"https://github.com/HighTorque-Robotics/livelybot_hardware_sdk",children:"livelybot_hardware_sdk"})]}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{width:400,src:"https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/USB-CAN.png"})}),"\n",(0,o.jsxs)(t.h2,{id:"\u4F7F\u7528recomputer-mini-jetson-orin\u63A7\u5236\u7535\u673A",children:["\u4F7F\u7528",(0,o.jsx)(t.a,{href:"/cn/recomputer_jetson_mini_getting_started",children:"reComputer Mini Jetson Orin"}),"\u63A7\u5236\u7535\u673A"]}),"\n",(0,o.jsxs)(t.p,{children:["\u76EE\u524D\u5E02\u573A\u4E0A\u7535\u673A\u6700\u5E38\u7528\u7684CAN\u901A\u4FE1\u63A5\u53E3\u91C7\u7528XT30(2+2)\u548CJST\u8FDE\u63A5\u5668\u3002\u6211\u4EEC\u7684",(0,o.jsx)(t.strong,{children:"reComputer Mini Jetson Orin"}),"\u548C",(0,o.jsx)(t.strong,{children:"reComputer Robotics"}),"\u8BBE\u5907\u914D\u5907\u4E86\u53CCXT30(2+2)\u7AEF\u53E3\u548C\u57FA\u4E8EJST\u7684CAN\u63A5\u53E3\uFF0C\u63D0\u4F9B\u65E0\u7F1D\u517C\u5BB9\u6027\u3002"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"reComputer Mini:"})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{width:"600",src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/1-reComputer-Mini-bundle.jpg"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"reComputer Robotics"})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/robotics/Sensor/IMU/hexfellow/fig5.jpg"})}),"\n",(0,o.jsxs)(t.p,{children:["\u6709\u5173CAN\u4F7F\u7528\u7684\u66F4\u591A\u7EC6\u8282\uFF0C\u53EF\u53C2\u8003\u6B64",(0,o.jsx)(t.a,{href:"https://wiki.seeedstudio.com/cn/recomputer_jetson_mini_hardware_interfaces_usage/#can",children:"wiki"}),"\u3002"]}),"\n",(0,o.jsx)(t.h3,{id:"\u542F\u7528can\u63A5\u53E3",children:"\u542F\u7528CAN\u63A5\u53E3"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"\u6B65\u9AA41:"})," \u4F7F\u7528CAN0\u548CCAN1\u524D\uFF0C\u8BF7\u79FB\u9664\u5E95\u76D6\u5E76\u5C06\u4E24\u4E2A120\u03A9\u7EC8\u7AEF\u7535\u963B\u62E8\u81F3ON\u4F4D\u7F6E"]}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{width:300,src:"https://files.seeedstudio.com/wiki/robotics/Actuator/myactuator/7.png"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"\u6B65\u9AA42:"})," \u901A\u8FC7XT30(2+2)\u63A5\u53E3\u5C06\u7535\u673A\u76F4\u63A5\u8FDE\u63A5\u5230reComputer Mini\u7684CAN0"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"reComputer Mini\u7684CAN\u63A5\u53E3H/L\u5F15\u811A\u4E0E\u7535\u673A\u7684H/L\u76F8\u53CD\uFF0C\u56E0\u6B64\u9700\u8981\u53CD\u8F6CXT30 2+2\u7EBF\u675F\u4E2D\u7684H/L\u8FDE\u63A5"})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/recomputer_mini/can0-datasheet.png"})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{width:800,src:"https://files.seeedstudio.com/wiki/robotics/Actuator/hightorque/reComputer_mini_control.png"})}),"\n",(0,o.jsx)(t.admonition,{type:"danger",children:(0,o.jsx)(t.p,{children:"\u6B64\u7535\u6E90\u65B9\u6848\u4EC5\u9002\u7528\u4E8E\u5355\u7535\u673A\u5B66\u4E60\u6D4B\u8BD5\u3002\u591A\u7535\u673A\u4F7F\u7528\u65F6\u8BF7\u8BBE\u8BA1\u72EC\u7ACB\u7535\u6E90\u677F\uFF0C\u5C06Jetson\u7535\u6E90\u4E0E\u7535\u673A\u7535\u6E90\u9694\u79BB\uFF0C\u907F\u514D\u5927\u7535\u6D41\u76F4\u63A5\u901A\u8FC7Jetson"})}),"\n",(0,o.jsx)(t.h4,{id:"\u542F\u7528jetson-can\u901A\u4FE1",children:"\u542F\u7528Jetson CAN\u901A\u4FE1"}),"\n",(0,o.jsx)(t.p,{children:"\u6253\u5F00\u7EC8\u7AEF\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\u62C9\u9AD8GPIO\u5F15\u811A\u6FC0\u6D3BCAN0:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"gpioset --mode=wait 0 43=0\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u82E5\u4F7F\u7528JST\u63A5\u53E3\u7684CAN1\uFF0C\u5219\u62C9\u9AD8106\u5F15\u811A"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"gpioset --mode=wait 0 106=0\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u4FDD\u6301\u6B64\u7EC8\u7AEF\u5F00\u542F\uFF0C\u65B0\u5EFA\u7EC8\u7AEF\u914D\u7F6ECAN0"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"sudo modprobe mttcan\nsudo ip link set can0 type can bitrate 1000000\nsudo ip link set can0 up\n"})}),"\n",(0,o.jsx)(t.h3,{id:"python\u63A7\u5236",children:"Python\u63A7\u5236"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"\u5B89\u88C5Python\u73AF\u5883"})}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"pip install python-can numpy\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"\u521B\u5EFA\u811A\u672C\u76EE\u5F55"})}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"mkdir -p ~/hightorque/scripts\n"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"\u521B\u5EFAhightorque_motor.py\u6587\u4EF6"})}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cd ~/hightorque/scripts\ntouch hightorque_motor.py\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u5C06\u4EE5\u4E0B\u4EE3\u7801\u590D\u5236\u5230hightorque_motor.py"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"hightorque_motor.py"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'import can\nimport numpy as np\nfrom time import sleep\nfrom enum import IntEnum\n\nclass MotorType(IntEnum):\n    """\u7535\u673A\u578B\u53F7\u679A\u4E3E"""\n    HT5046 = 0  # 5046\u7535\u673A\n    HT4538 = 1  # 4538\u7535\u673A\n    HT5047_36 = 2  # 5047/6056\u53CC\u678136\u51CF\u901F\u6BD4\n    HT5047_9 = 3  # 5047\u5355\u67819\u51CF\u901F\u6BD4\n\nclass ControlMode(IntEnum):\n    """\u63A7\u5236\u6A21\u5F0F\u679A\u4E3E"""\n    NORMAL = 0  # \u666E\u901A\u6A21\u5F0F\n    TORQUE = 1  # \u529B\u77E9\u6A21\u5F0F\n    COOPERATIVE = 2  # \u534F\u540C\u63A7\u5236\u6A21\u5F0F\n\nclass Motor:\n    def __init__(self, motor_type: MotorType, slave_id: int, master_id: int):\n        """\n        \u521D\u59CB\u5316\u7535\u673A\u5BF9\u8C61\n        :param motor_type: \u7535\u673A\u578B\u53F7\n        :param slave_id: \u4ECE\u673AID\n        :param master_id: \u4E3B\u673AID\n        """\n        self.motor_type = motor_type\n        self.slave_id = slave_id\n        self.master_id = master_id\n        self.position = 0\n        self.velocity = 0\n        self.torque = 0\n        self.temperature = 0\n        \n        # \u6839\u636E\u7535\u673A\u578B\u53F7\u8BBE\u7F6E\u626D\u77E9\u8F6C\u6362\u53C2\u6570\n        if motor_type == MotorType.HT5046:\n            self.torque_k = 0.005397\n            self.torque_d = -0.455107\n        elif motor_type == MotorType.HT4538:\n            self.torque_k = 0.004587\n            self.torque_d = -0.290788\n        elif motor_type == MotorType.HT5047_36:\n            self.torque_k = 0.004563\n            self.torque_d = -0.493257\n        elif motor_type == MotorType.HT5047_9:\n            self.torque_k = 0.005332\n            self.torque_d = -0.072956\n\n    def update_status(self, position: float, velocity: float, torque: float, temperature: float):\n        """\u66F4\u65B0\u7535\u673A\u72B6\u6001"""\n        self.position = position\n        self.velocity = velocity\n        self.torque = torque\n        self.temperature = temperature\n\nclass MotorControl:\n    def __init__(self, channel: str, bitrate: int = 1000000):\n        """\n        \u521D\u59CB\u5316\u7535\u673A\u63A7\u5236\u5668\n        :param channel: CAN\u901A\u9053\n        :param bitrate: CAN\u6CE2\u7279\u7387\n        """\n        self.bus = can.interface.Bus(channel=channel, bustype=\'socketcan\', bitrate=bitrate)\n        self.motors = {}\n\n    def add_motor(self, motor: Motor):\n        """\u6DFB\u52A0\u7535\u673A\u5230\u63A7\u5236\u5668"""\n        self.motors[motor.slave_id] = motor\n\n    def __send_data(self, motor_id: int, data: bytes):\n        """\n        \u53D1\u9001CAN\u6570\u636E\n        :param motor_id: \u7535\u673AID\n        :param data: \u8981\u53D1\u9001\u7684\u6570\u636E\n        """\n        msg = can.Message(\n            arbitration_id=0x8000 | motor_id,\n            data=data,\n            is_extended_id=True\n        )\n        self.bus.send(msg)\n\n    def enable(self, motor: Motor):\n        """\u4F7F\u80FD\u7535\u673A"""\n        data = bytes([0x01, 0x00, 0x01])\n        self.__send_data(motor.slave_id, data)\n        sleep(0.1)\n\n    def disable(self, motor: Motor):\n        """\u5931\u80FD\u7535\u673A"""\n        data = bytes([0x01, 0x00, 0x00])\n        self.__send_data(motor.slave_id, data)\n        sleep(0.1)\n\n    def set_zero_position(self, motor: Motor):\n        """\u8BBE\u7F6E\u7535\u673A\u96F6\u4F4D"""\n        data = bytes([0x40, 0x01, 0x04, 0x64, 0x20, 0x63, 0x0a])\n        self.__send_data(motor.slave_id, data)\n        sleep(1.0)  # \u7B49\u5F851\u79D2\n        self.save_settings(motor)\n\n    def save_settings(self, motor: Motor):\n        """\u4FDD\u5B58\u7535\u673A\u8BBE\u7F6E\u5230flash"""\n        data = bytes([0x05, 0xb3, 0x02, 0x00, 0x00])\n        self.__send_data(motor.slave_id, data)\n\n    def control_position(self, motor: Motor, position: float, torque: float):\n        """\n        \u4F4D\u7F6E\u63A7\u5236\n        :param motor: \u7535\u673A\u5BF9\u8C61\n        :param position: \u76EE\u6807\u4F4D\u7F6E(\u5355\u4F4D: 0.0001\u5708)\n        :param torque: \u529B\u77E9\u9650\u5236\n        """\n        pos_bytes = int(position).to_bytes(2, \'little\')\n        tqe_bytes = int(torque).to_bytes(2, \'little\')\n        data = bytes([0x07, 0x07]) + pos_bytes + bytes([0x80, 0x00]) + tqe_bytes\n        self.__send_data(motor.slave_id, data)\n\n    def control_velocity(self, motor: Motor, velocity: float, torque: float):\n        """\n        \u901F\u5EA6\u63A7\u5236\n        :param motor: \u7535\u673A\u5BF9\u8C61\n        :param velocity: \u76EE\u6807\u901F\u5EA6(\u5355\u4F4D: 0.00025\u8F6C/\u79D2)\n        :param torque: \u529B\u77E9\u9650\u5236\n        """\n        vel_bytes = int(velocity).to_bytes(2, \'little\')\n        tqe_bytes = int(torque).to_bytes(2, \'little\')\n        data = bytes([0x07, 0x07, 0x00, 0x80]) + vel_bytes + tqe_bytes\n        self.__send_data(motor.slave_id, data)\n\n    def control_torque(self, motor: Motor, torque: float):\n        """\n        \u529B\u77E9\u63A7\u5236\n        :param motor: \u7535\u673A\u5BF9\u8C61\n        :param torque: \u76EE\u6807\u529B\u77E9\n        """\n        tqe_bytes = int(torque).to_bytes(2, \'little\')\n        data = bytes([0x05, 0x13]) + tqe_bytes\n        self.__send_data(motor.slave_id, data)\n\n    def control_cooperative(self, motor: Motor, position: float, velocity: float, torque: float):\n        """\n        \u534F\u540C\u63A7\u5236(\u4F4D\u7F6E\u3001\u901F\u5EA6\u3001\u529B\u77E9\u540C\u65F6\u63A7\u5236)\n        :param motor: \u7535\u673A\u5BF9\u8C61\n        :param position: \u76EE\u6807\u4F4D\u7F6E(\u5355\u4F4D: 0.0001\u5708)\n        :param velocity: \u76EE\u6807\u901F\u5EA6(\u5355\u4F4D: 0.00025\u8F6C/\u79D2)\n        :param torque: \u529B\u77E9\u9650\u5236\n        """\n        vel_bytes = int(velocity).to_bytes(2, \'little\')\n        tqe_bytes = int(torque).to_bytes(2, \'little\')\n        pos_bytes = int(position).to_bytes(2, \'little\')\n        data = bytes([0x07, 0x35]) + vel_bytes + tqe_bytes + pos_bytes\n        self.__send_data(motor.slave_id, data)\n\n    def read_motor_status(self, motor: Motor):\n        """\u8BFB\u53D6\u7535\u673A\u72B6\u6001"""\n        data = bytes([0x17, 0x01])\n        self.__send_data(motor.slave_id, data)\n        sleep(0.01)  # \u7B49\u5F85\u63A5\u6536\u6570\u636E\n        \n        # \u63A5\u6536\u5E76\u89E3\u6790\u6570\u636E\n        msg = self.bus.recv(timeout=0.1)\n        if msg and msg.arbitration_id == (0x8000 | motor.slave_id):\n            data = msg.data\n            if len(data) >= 8 and data[0] == 0x27:\n                position = int.from_bytes(data[2:4], \'little\')\n                velocity = int.from_bytes(data[4:6], \'little\')\n                torque = int.from_bytes(data[6:8], \'little\')\n                motor.update_status(position, velocity, torque, 0)\n\n    def periodic_read_status(self, motor: Motor, period_ms: int):\n        """\n        \u8BBE\u7F6E\u5468\u671F\u6027\u8BFB\u53D6\u7535\u673A\u72B6\u6001\n        :param motor: \u7535\u673A\u5BF9\u8C61\n        :param period_ms: \u5468\u671F(\u6BEB\u79D2)\n        """\n        period_bytes = int(period_ms).to_bytes(2, \'little\')\n        data = bytes([0x05, 0xb4, 0x02, 0x00]) + period_bytes\n        self.__send_data(motor.slave_id, data)\n\n    def close(self):\n        """\u5173\u95EDCAN\u603B\u7EBF"""\n        self.bus.shutdown() \n'})})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"\u521B\u5EFAhightorque_test.py\u6587\u4EF6"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"\u5C06\u4EE5\u4E0B\u4EE3\u7801\u590D\u5236\u5230hightorque_test.py"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"hightorque_test.py"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:'#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n\nimport time\nimport math\nimport numpy as np\nfrom hightorque_motor import Motor, MotorControl, MotorType\n\n# \u914D\u7F6E\u53C2\u6570\nNUM_MOTORS = 2  # \u63A7\u5236\u7535\u673A\u6570\u91CF\nCAN_INTERFACE = "can0"  # CAN\u63A5\u53E3\u540D\u79F0\nCAN_BITRATE = 1000000  # CAN\u6CE2\u7279\u7387\nMOTOR_TYPE = MotorType.HT5047_36  # \u7535\u673A\u7C7B\u578B\n\n# \u6B63\u5F26\u6CE2\u53C2\u6570\nFREQUENCY = 0.1  # \u9891\u7387 (Hz)\nAMPLITUDE = 2500  # \u5E45\u5EA6 (0.0001\u5708)\nOFFSET = 2500    # \u504F\u79FB\u91CF\uFF0C\u786E\u4FDD\u4F4D\u7F6E\u59CB\u7EC8\u4E3A\u6B63\nDURATION = 60.0  # \u8FD0\u884C\u65F6\u95F4 (s)\n\ndef main():\n    # \u521B\u5EFA\u7535\u673A\u63A7\u5236\u5BF9\u8C61\n    controller = MotorControl(channel=CAN_INTERFACE, bitrate=CAN_BITRATE)\n    \n    try:\n        # \u521B\u5EFA\u5E76\u6DFB\u52A0\u7535\u673A\n        motors = []\n        for i in range(NUM_MOTORS):\n            motor = Motor(MOTOR_TYPE, slave_id=i+1, master_id=0)\n            controller.add_motor(motor)\n            motors.append(motor)\n            \n            # \u4F7F\u80FD\u7535\u673A\n            print(f"\u4F7F\u80FD\u7535\u673A {i+1}...")\n            controller.enable(motor)\n            time.sleep(1)  # \u7B49\u5F85\u7535\u673A\u4F7F\u80FD\u5B8C\u6210\n            \n            # \u8BBE\u7F6E\u96F6\u4F4D\n            print(f"\u8BBE\u7F6E\u7535\u673A {i+1} \u96F6\u4F4D...")\n            controller.set_zero_position(motor)\n            time.sleep(1)\n            \n            # \u4FDD\u5B58\u8BBE\u7F6E\u5230flash\n            print(f"\u4FDD\u5B58\u7535\u673A {i+1} \u8BBE\u7F6E...")\n            controller.save_settings(motor)\n            time.sleep(1)\n            \n            # \u8BFB\u53D6\u521D\u59CB\u72B6\u6001\n            controller.read_motor_status(motor)\n            print(f"\u7535\u673A {i+1} \u521D\u59CB\u72B6\u6001:")\n            print(f"\u4F4D\u7F6E: {motor.position * 0.0001:.4f}\u5708")\n            print(f"\u901F\u5EA6: {motor.velocity * 0.00025:.4f}\u8F6C/\u79D2")\n            print(f"\u529B\u77E9: {motor.torque * motor.torque_k + motor.torque_d:.4f}Nm")\n        \n        # \u5F00\u59CB\u6B63\u5F26\u6CE2\u4F4D\u7F6E\u63A7\u5236\n        print("\\n\u5F00\u59CB\u6B63\u5F26\u6CE2\u4F4D\u7F6E\u63A7\u5236...")\n        start_time = time.time()\n        while time.time() - start_time < DURATION:\n            current_time = time.time() - start_time\n            \n            # \u8BA1\u7B97\u6B63\u5F26\u6CE2\u4F4D\u7F6E\uFF0C\u52A0\u4E0A\u504F\u79FB\u91CF\u786E\u4FDD\u59CB\u7EC8\u4E3A\u6B63\n            position = AMPLITUDE * math.sin(2 * math.pi * FREQUENCY * current_time) + OFFSET\n            \n            # \u63A7\u5236\u6240\u6709\u7535\u673A\n            for motor in motors:\n                # \u4F7F\u7528\u4F4D\u7F6E\u63A7\u5236\u6A21\u5F0F\uFF0C\u8BBE\u7F6E\u6700\u5927\u529B\u77E9\u4E3A1000\n                controller.control_position(motor, position=int(position), torque=1000)\n            \n            # \u63A7\u5236\u9891\u7387\n            time.sleep(0.001)  # 1kHz\u63A7\u5236\u9891\u7387\n            \n    except KeyboardInterrupt:\n        print("\\n\u7A0B\u5E8F\u88AB\u7528\u6237\u4E2D\u65AD")\n    finally:\n        # \u5931\u80FD\u6240\u6709\u7535\u673A\n        for motor in motors:\n            print(f"\u5931\u80FD\u7535\u673A {motor.slave_id}...")\n            controller.disable(motor)\n        \n        # \u5173\u95EDCAN\u603B\u7EBF\n        controller.close()\n        print("CAN\u603B\u7EBF\u5DF2\u5173\u95ED")\n\nif __name__ == "__main__":\n    main() \n\n'})})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.strong,{children:"\u8FD0\u884Chightorque_test.py"})}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"python hightorque_test.py\n"})}),"\n",(0,o.jsx)("iframe",{width:"960",height:"640",src:"//player.bilibili.com/player.html?isOutside=true&aid=114737031417384&bvid=BV1EFKGzYEYy&cid=30669933724&p=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}),"\n",(0,o.jsx)(t.h2,{id:"\u6280\u672F\u652F\u6301\u4E0E\u4EA7\u54C1\u8BA8\u8BBA",children:"\u6280\u672F\u652F\u6301\u4E0E\u4EA7\u54C1\u8BA8\u8BBA"}),"\n",(0,o.jsx)(t.p,{children:"\u611F\u8C22\u9009\u62E9\u6211\u4EEC\u7684\u4EA7\u54C1\uFF01\u6211\u4EEC\u63D0\u4F9B\u591A\u79CD\u652F\u6301\u6E20\u9053\u786E\u4FDD\u60A8\u83B7\u5F97\u6700\u4F73\u4F7F\u7528\u4F53\u9A8C\u3002"}),"\n",(0,o.jsxs)("div",{class:"button_tech_support_container",children:[(0,o.jsx)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.jsx)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})]}),"\n",(0,o.jsxs)("div",{class:"button_tech_support_container",children:[(0,o.jsx)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.jsx)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})]}),"\n",(0,o.jsx)("style",{children:`
/* \u{5BFC}\u{822A}\u{5BB9}\u{5668} */
.quick-nav-container {
margin: 2rem 0;
padding: 1rem;
background: linear-gradient(135deg, #f8f9fa 0%, #f8f9fa 100%);
border-radius: 16px;
box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.card-container {
margin: 0.1rem 0;
padding: 0.5rem;
border-radius: 16px;
box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* Dark\u{6A21}\u{5F0F} - \u{5BFC}\u{822A}\u{5BB9}\u{5668} */
html[data-theme='dark'] .quick-nav-container {
background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

/* \u{5BFC}\u{822A}\u{4E3B}\u{4F53} */
.quick-nav {
display: flex;
justify-content: space-around;
gap: 1rem;
flex-wrap: wrap; /* \u{5173}\u{952E}\u{5C5E}\u{6027} */
justify-content: left; /* \u{53EF}\u{9009}\u{5C45}\u{4E2D} */
}

/* \u{5BFC}\u{822A}\u{9879} */
.nav-item {
position: relative;
padding: 0.8rem 1.5rem;
border-radius: 12px;
display: flex;
flex-direction: column;
flex: 0 0 calc(20% - 20px);
margin-bottom: 20px;
align-items: center;
text-decoration: none !important;
color: #333;
font-weight: 500;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
background: white;
box-shadow: 0 2px 4px rgba(0,0,0,0.05);
z-index: 1;
}

/* Dark\u{6A21}\u{5F0F} - \u{5BFC}\u{822A}\u{9879} */
html[data-theme='dark'] .nav-item {
color: #e5e7eb;
background: #374151;
box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* \u{56FE}\u{6807}\u{6837}\u{5F0F} */
.nav-item .icon {
font-size: 1.8rem;
margin-bottom: 0.5rem;
transition: transform 0.3s;
}

/* \u{6587}\u{5B57}\u{6837}\u{5F0F} */
.nav-item .text {
font-size: 0.95rem;
white-space: nowrap;
}

/* \u{60AC}\u{6D6E}\u{7279}\u{6548} */
.nav-item .hover-effect {
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 0;
background: linear-gradient(135deg, #4a90e2 0%, #50e3c2 100%);
border-radius: 12px;
transition: height 0.3s ease;
z-index: -1;
}

/* \u{60AC}\u{6D6E}\u{52A8}\u{753B} */
.nav-item:hover {
transform: translateY(-3px);
box-shadow: 0 6px 12px rgba(0,0,0,0.1);
color: white;
}

/* Dark\u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{52A8}\u{753B} */
html[data-theme='dark'] .nav-item:hover {
box-shadow: 0 6px 12px rgba(0,0,0,0.6);
color: white;
}

.nav-item:hover .icon {
transform: scale(1.2) rotate(10deg);
}

.nav-item:hover .hover-effect {
height: 100%;
}

.nav-item img {
pointer-events: none;
}

/* \u{54CD}\u{5E94}\u{5F0F}\u{8BBE}\u{8BA1} */
@media (max-width: 768px) {
.quick-nav {
  flex-direction: column;
  gap: 0.5rem;
}
.nav-item {
  flex-direction: row;
  justify-content: start;
  padding: 0.8rem 1rem;
}
.nav-item .icon {
  margin-bottom: 0;
  margin-right: 0.8rem;
}
}
`}),"\n",(0,o.jsx)("style",{children:`
/* \u{5185}\u{5BB9}\u{5361}\u{7247}\u{589E}\u{5F3A}\u{7248}\u{6837}\u{5F0F} */
.nav-grid {
display: block;
gap: 2rem;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
margin-top: 2rem;
}

.category-card {
position: relative;
padding: 1.5rem;
border-radius: 16px;
background: white;
box-shadow: 0 4px 6px rgba(0,0,0,0.05);
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
overflow: hidden;
z-index: 1;
}

/* Dark\u{6A21}\u{5F0F} - \u{5185}\u{5BB9}\u{5361}\u{7247} */
html[data-theme='dark'] .category-card {
background: #374151;
box-shadow: 0 4px 6px rgba(0,0,0,0.4);
color: #e5e7eb;
}

.category-group {
margin-bottom: 2rem;
}

/* \u{5206}\u{7C7B}\u{8272}\u{6807} */
.category-card::before {
content: "";
position: absolute;
top: 0;
left: 0;
width: 6px;
height: 100%;
}

.robot-kits::before { background: linear-gradient(to bottom, #4a90e2, #50e3c2); }
.actuators::before { background: linear-gradient(to bottom, #50e3c2, #a0e3c2); }
.sensors::before { background: linear-gradient(to bottom, #ff6b6b, #ff8e8e); }
.software::before { background: linear-gradient(to bottom, #f5a623, #f5c623); }

/* \u{60AC}\u{6D6E}\u{7279}\u{6548} */
.category-card:hover {
transform: translateY(-5px);
box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{7279}\u{6548} */
html[data-theme='dark'] .category-card:hover {
box-shadow: 0 12px 20px rgba(0,0,0,0.6);
}

.category-card:hover::after {
content: "";
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
z-index: -1;
}

/* Dark\u{6A21}\u{5F0F} - \u{60AC}\u{6D6E}\u{5149}\u{6548} */
html[data-theme='dark'] .category-card:hover::after {
background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* \u{94FE}\u{63A5}\u{52A8}\u{753B} */
.category-card a {
position: relative;
display: inline-block;
transition: all 0.2s;
text-decoration: none !important;
color: #333;
}

/* Dark\u{6A21}\u{5F0F} - \u{94FE}\u{63A5} */
html[data-theme='dark'] .category-card a {
color: #d1d5db;
}

.category-card a:hover {
color: #4a90e2;
transform: translateX(5px);
}

/* Dark\u{6A21}\u{5F0F} - \u{94FE}\u{63A5}\u{60AC}\u{6D6E} */
html[data-theme='dark'] .category-card a:hover {
color: #60a5fa;
}

.category-card a::after {
content: "";
position: absolute;
bottom: -2px;
left: 0;
width: 0;
height: 2px;
background: #4a90e2;
transition: width 0.3s;
}

/* Dark\u{6A21}\u{5F0F} - \u{94FE}\u{63A5}\u{4E0B}\u{5212}\u{7EBF} */
html[data-theme='dark'] .category-card a::after {
background: #60a5fa;
}

.category-card a:hover::after {
width: 100%;
}

/* \u{6807}\u{7B7E}\u{6837}\u{5F0F}\u{589E}\u{5F3A} */
.tag {
font-size: 0.75rem;
padding: 2px 8px;
border-radius: 12px;
margin-left: 8px;
transition: all 0.3s;
}

.stable { 
background: #e6f4ea; 
color: #137333;
box-shadow: 0 2px 4px rgba(0,100,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - Stable\u{6807}\u{7B7E} */
html[data-theme='dark'] .stable {
background: #065f46;
color: #a7f3d0;
box-shadow: 0 2px 4px rgba(0,100,0,0.3);
}

.recommended { 
background: #fce8e6; 
color: #a50e0e;
box-shadow: 0 2px 4px rgba(200,0,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - Recommended\u{6807}\u{7B7E} */
html[data-theme='dark'] .recommended {
background: #7f1d1d;
color: #fca5a5;
box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
transform: translateY(-2px) scale(0.98);
box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark\u{6A21}\u{5F0F} - \u{70B9}\u{51FB}\u{6548}\u{679C} */
html[data-theme='dark'] .category-card:active {
box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* \u{54CD}\u{5E94}\u{5F0F}\u{4F18}\u{5316} */
@media (max-width: 768px) {
.nav-grid {
  grid-template-columns: 1fr;
}

.category-card {
  width: 100%;
  margin-top: 0.5rem; /* \u{5361}\u{7247}\u{7D27}\u{8D34}\u{6807}\u{9898} */
}
}

/* Dark\u{6A21}\u{5F0F} - \u{6807}\u{9898}\u{6587}\u{5B57} */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
color: #f9fafb;
}

/* Dark\u{6A21}\u{5F0F} - \u{6B63}\u{6587}\u{6587}\u{5B57} */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
color: #e5e7eb;
}

/* Dark\u{6A21}\u{5F0F} - \u{5F15}\u{7528}\u{5757} */
html[data-theme='dark'] blockquote {
color: #9ca3af;
border-left-color: #4b5563;
}
`})]})}function h(e={}){let{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},71184(e,t,n){n.d(t,{R:()=>s,x:()=>a});var r=n(14041);let o={},i=r.createContext(o);function s(e){let t=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);