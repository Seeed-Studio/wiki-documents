"use strict";(self.webpackChunkwiki_ja=self.webpackChunkwiki_ja||[]).push([["48020"],{70306(e,a,r){r.r(a),r.d(a,{metadata:()=>t,default:()=>m,frontMatter:()=>l,contentTitle:()=>i,toc:()=>o,assets:()=>c});var t=JSON.parse('{"id":"Robotics/Robot_Sensor/Lidar/ja_SLAMTEC","title":"Slamtec LiDAR \u30B7\u30EA\u30FC\u30BA","description":"Slamtec LiDAR\u88FD\u54C1\u3068\u4F7F\u7528\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u7D39\u4ECB\u3002","source":"@site/docs/Robotics/Robot_Sensor/Lidar/ja_SLAMTEC.md","sourceDirName":"Robotics/Robot_Sensor/Lidar","slug":"/slamtec","permalink":"/ja/slamtec","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/ja/docs/Robotics/Robot_Sensor/Lidar/ja_SLAMTEC.md","tags":[],"version":"current","lastUpdatedBy":"ZhuYaohui","lastUpdatedAt":1750204800000,"frontMatter":{"description":"Slamtec LiDAR\u88FD\u54C1\u3068\u4F7F\u7528\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u7D39\u4ECB\u3002","title":"Slamtec LiDAR \u30B7\u30EA\u30FC\u30BA","keywords":["LiDAR","Robotics","ROS","SLAM","Lidar"],"image":"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png","slug":"/slamtec","last_update":{"date":"2025/06/18","author":"ZhuYaohui"},"createdAt":"2025-06-19","updatedAt":"2025-11-28","url":"https://wiki.seeedstudio.com/ja/slamtec/"},"sidebar":"jaSidebar","previous":{"title":"A-LOAM 3D SLAM\u306E\u5B9F\u884C","permalink":"/ja/a_loam"},"next":{"title":"AC1 \u5165\u9580\u30AC\u30A4\u30C9","permalink":"/ja/ac1"}}'),s=r(31085),n=r(71184);let l={description:"Slamtec LiDAR\u88FD\u54C1\u3068\u4F7F\u7528\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u306E\u7D39\u4ECB\u3002",title:"Slamtec LiDAR \u30B7\u30EA\u30FC\u30BA",keywords:["LiDAR","Robotics","ROS","SLAM","Lidar"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/slamtec",last_update:{date:"2025/06/18",author:"ZhuYaohui"},createdAt:"2025-06-19",updatedAt:"2025-11-28",url:"https://wiki.seeedstudio.com/ja/slamtec/"},i="\u{1F4E1} Slamtec LiDAR \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30CF\u30D6",c={},o=[{value:"\u{1F4E6} Aurora",id:"-aurora",level:2},{value:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8",id:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8",level:3},{value:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB",id:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB",level:3},{value:"SDK",id:"sdk",level:3},{value:"3D\u30E2\u30C7\u30EB",id:"3d\u30E2\u30C7\u30EB",level:3},{value:"\u{1F4E6} A1 \u30B7\u30EA\u30FC\u30BA LiDAR",id:"A1-series",level:2},{value:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8",id:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8-1",level:3},{value:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB",id:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB-1",level:3},{value:"SDK",id:"sdk-1",level:3},{value:"3D\u30E2\u30C7\u30EB",id:"3d\u30E2\u30C7\u30EB-1",level:3},{value:"\u{1F4E6} S \u30B7\u30EA\u30FC\u30BA LiDAR",id:"S2-series",level:2},{value:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8",id:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8-2",level:3},{value:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB",id:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB-2",level:3},{value:"SDK",id:"sdk-2",level:3},{value:"3D \u30E2\u30C7\u30EB",id:"3d-\u30E2\u30C7\u30EB",level:3},{value:"\u{1F4E6} C \u30B7\u30EA\u30FC\u30BA LiDAR",id:"C1-series",level:2},{value:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8",id:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8-3",level:3},{value:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB",id:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB-3",level:3},{value:"SDK",id:"sdk-3",level:3},{value:"3D \u30E2\u30C7\u30EB",id:"3d-\u30E2\u30C7\u30EB-1",level:3}];function d(e){let a={h1:"h1",h2:"h2",h3:"h3",header:"header",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.header,{children:(0,s.jsx)(a.h1,{id:"-slamtec-lidar-\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30CF\u30D6",children:"\u{1F4E1} Slamtec LiDAR \u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\u30CF\u30D6"})}),"\n",(0,s.jsx)("div",{className:"quick-nav-container",children:(0,s.jsxs)("nav",{className:"quick-nav",children:[(0,s.jsxs)("a",{href:"#Aurora-S",className:"nav-item",children:[(0,s.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/aurora_s.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,s.jsx)("span",{className:"text",children:"Aurora-S"}),(0,s.jsx)("div",{className:"hover-effect"})]}),(0,s.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,s.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A1M8.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,s.jsx)("span",{className:"text",children:"A1M8"}),(0,s.jsx)("div",{className:"hover-effect"})]}),(0,s.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,s.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A2_1.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,s.jsx)("span",{className:"text",children:"A2M8"}),(0,s.jsx)("div",{className:"hover-effect"})]}),(0,s.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,s.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A2M12.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,s.jsx)("span",{className:"text",children:"A2M12"}),(0,s.jsx)("div",{className:"hover-effect"})]}),(0,s.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,s.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A3M1.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,s.jsx)("span",{className:"text",children:"A3M1"}),(0,s.jsx)("div",{className:"hover-effect"})]}),(0,s.jsxs)("a",{href:"#S2-series",className:"nav-item",children:[(0,s.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/S2.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,s.jsx)("span",{className:"text",children:"S2 \u30B7\u30EA\u30FC\u30BA"}),(0,s.jsx)("div",{className:"hover-effect"})]}),(0,s.jsxs)("a",{href:"#S2-series",className:"nav-item",children:[(0,s.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/S3.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,s.jsx)("span",{className:"text",children:"S3"}),(0,s.jsx)("div",{className:"hover-effect"})]}),(0,s.jsxs)("a",{href:"#C1-series",className:"nav-item",children:[(0,s.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/C1.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,s.jsx)("span",{className:"text",children:"C1M1"}),(0,s.jsx)("div",{className:"hover-effect"})]})]})}),"\n",(0,s.jsxs)("div",{className:"nav-grid",children:[(0,s.jsx)(a.h2,{id:"-aurora",children:"\u{1F4E6} Aurora"}),(0,s.jsx)("div",{class:"category-group",children:(0,s.jsxs)("div",{className:"category-card robot-kits",children:[(0,s.jsx)(a.h3,{id:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8",children:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8"}),(0,s.jsx)("div",{className:"card-container",children:(0,s.jsx)("a",{href:"https://files.seeedstudio.com/products/SLAMTEC_Aurora_S/Aurora_S_datasheet.pdf",className:"nav-item",children:(0,s.jsx)("span",{className:"text",children:"Aurora S"})})}),(0,s.jsx)(a.h3,{id:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB",children:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB"}),(0,s.jsx)("div",{className:"card-container",children:(0,s.jsx)("nav",{className:"quick-nav",children:(0,s.jsx)("a",{href:"https://files.seeedstudio.com/products/SLAMTEC_Aurora_S/Aurora_S_user_manual.pdf",className:"nav-item",children:(0,s.jsx)("span",{className:"text",children:"Aurora S"})})})}),(0,s.jsx)(a.h3,{id:"sdk",children:"SDK"}),(0,s.jsx)("div",{className:"card-container",children:(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#aurora",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"\u958B\u767A\u8005\u30BB\u30F3\u30BF\u30FC"})})}),(0,s.jsx)(a.h3,{id:"3d\u30E2\u30C7\u30EB",children:"3D\u30E2\u30C7\u30EB"}),(0,s.jsx)("div",{className:"card-container",children:(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#aurora",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A3M1.stl"})})})]})}),(0,s.jsx)(a.h2,{id:"A1-series",children:"\u{1F4E6} A1 \u30B7\u30EA\u30FC\u30BA LiDAR"}),(0,s.jsx)("div",{class:"category-group",children:(0,s.jsxs)("div",{className:"category-card robot-kits",children:[(0,s.jsx)(a.h3,{id:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8-1",children:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8"}),(0,s.jsxs)("div",{className:"card-container",children:[(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=Documents-,Datasheet,-A3M1%20Datasheet",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A3M1"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=Documents-,Datasheet,-A3M1%20Datasheet",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A2M8"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=Documents-,Datasheet,-A3M1%20Datasheet",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A2M12"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=Documents-,Datasheet,-A3M1%20Datasheet",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A1M8"})})]}),(0,s.jsx)(a.h3,{id:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB-1",children:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB"}),(0,s.jsx)("div",{className:"card-container",children:(0,s.jsxs)("nav",{className:"quick-nav",children:[(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=A1M8%20Datasheet-,Dev%20Kit%20User%20Manual,-A3M1%20Dev%20Kit",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A3M1"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=A1M8%20Datasheet-,Dev%20Kit%20User%20Manual,-A3M1%20Dev%20Kit",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A2 \u30B7\u30EA\u30FC\u30BA"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=A1M8%20Datasheet-,Dev%20Kit%20User%20Manual,-A3M1%20Dev%20Kit",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A1M8"})})]})}),(0,s.jsx)(a.h3,{id:"sdk-1",children:"SDK"}),(0,s.jsxs)("div",{className:"card-container",children:[(0,s.jsx)("a",{href:"https://wiki.slamtec.com/display/SD#Slamtec%E5%BC%80%E5%8F%91%E8%80%85%E4%B8%AD%E5%BF%83-rplidar",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"\u958B\u767A\u8005\u30BB\u30F3\u30BF\u30FC"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=SDK%20%26-,Protocol,-Online%20documents",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"\u901A\u4FE1\u30D7\u30ED\u30C8\u30B3\u30EB"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=and%20Repair%20Guide-,SDK%20%26,-Protocol",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"SDK \u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB"})}),(0,s.jsx)("a",{href:"https://github.com/slamtec/rplidar_sdk",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"Github"})}),(0,s.jsx)("a",{href:"https://github.com/slamtec/rplidar_ros",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"ROS1"})}),(0,s.jsx)("a",{href:"https://github.com/Slamtec/rplidar_ros/tree/ros2",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"ROS2"})})]}),(0,s.jsx)(a.h3,{id:"3d\u30E2\u30C7\u30EB-1",children:"3D\u30E2\u30C7\u30EB"}),(0,s.jsxs)("div",{className:"card-container",children:[(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=RPLIDAR%20A3M1%20Dev%20Kit",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A3M1.stl"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=RPLIDAR%20A3M1%20Dev%20Kit",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A3M1.pdf"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=RPLIDAR%20A2M4%20Dev%20Kit",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A2.stl"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=RPLIDAR%20A2M4%20Dev%20Kit",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A2.pdf"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=RPLIDAR%20A1M8%20Dev%20Kit",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A1.stl"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-a-series:~:text=RPLIDAR%20A1M8%20Dev%20Kit",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"A1.pdf"})})]})]})}),(0,s.jsx)(a.h2,{id:"S2-series",children:"\u{1F4E6} S \u30B7\u30EA\u30FC\u30BA LiDAR"}),(0,s.jsx)("div",{class:"category-group",children:(0,s.jsxs)("div",{className:"category-card robot-kits",children:[(0,s.jsx)(a.h3,{id:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8-2",children:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8"}),(0,s.jsxs)("div",{className:"card-container",children:[(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s2:~:text=Documents-,Datasheet,-S2%20Datasheet",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S2"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s2:~:text=Documents-,Datasheet,-S2%20Datasheet",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S2E"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s2:~:text=Documents-,Datasheet,-S2%20Datasheet",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S2L"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s3:~:text=Documents-,Datasheet,-S3%20Datasheet",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S3"})})]}),(0,s.jsx)(a.h3,{id:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB-2",children:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB"}),(0,s.jsxs)("div",{className:"card-container",children:[(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s2:~:text=S2P%20Datasheet-,User%20Manual,-S2%20S2L%20S2P",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S2 S2L"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s2:~:text=S2P%20Datasheet-,User%20Manual,-S2%20S2L%20S2P",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S2E"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s3:~:text=S3%20Datasheet-,User%20Manual,-S3%20User%20Manual",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S3"})})]}),(0,s.jsx)(a.h3,{id:"sdk-2",children:"SDK"}),(0,s.jsxs)("div",{className:"card-container",children:[(0,s.jsx)("a",{href:"https://wiki.slamtec.com/display/SD#Slamtec%E5%BC%80%E5%8F%91%E8%80%85%E4%B8%AD%E5%BF%83-rplidar",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"\u958B\u767A\u8005\u30BB\u30F3\u30BF\u30FC"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s2:~:text=Kit%20User%20Manual-,Protocol,-S2%20S2L%20S2P",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S2 S2L \u30D7\u30ED\u30C8\u30B3\u30EB"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s2:~:text=Kit%20User%20Manual-,Protocol,-S2%20S2L%20S2P",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S2E \u30D7\u30ED\u30C8\u30B3\u30EB"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s3:~:text=S3%20User%20Manual-,Protocol,-Protocol",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S3 \u30D7\u30ED\u30C8\u30B3\u30EB"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s2:~:text=S2E%20Protocol-,SDk,-SDK%20User%20Manual",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"SDK \u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB"})}),(0,s.jsx)("a",{href:"https://github.com/slamtec/rplidar_sdk",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"Github"})}),(0,s.jsx)("a",{href:"https://github.com/slamtec/rplidar_ros",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"ROS1"})}),(0,s.jsx)("a",{href:"https://github.com/Slamtec/rplidar_ros/tree/ros2",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"ROS2"})})]}),(0,s.jsx)(a.h3,{id:"3d-\u30E2\u30C7\u30EB",children:"3D \u30E2\u30C7\u30EB"}),(0,s.jsx)("div",{className:"card-container",children:(0,s.jsxs)("nav",{className:"quick-nav",children:[(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s2:~:text=3D%20Models-,RPLIDAR%20S2%20Dev%20Kit,-STL",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S2.stl"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s2:~:text=3D%20Models-,RPLIDAR%20S2%20Dev%20Kit,-STL",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S2.pdf"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-s2:~:text=3D%20Models-,RPLIDAR%20S2%20Dev%20Kit,-STL",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"S3.stp"})})]})})]})}),(0,s.jsx)(a.h2,{id:"C1-series",children:"\u{1F4E6} C \u30B7\u30EA\u30FC\u30BA LiDAR"}),(0,s.jsx)("div",{class:"category-group",children:(0,s.jsxs)("div",{className:"category-card robot-kits",children:[(0,s.jsx)(a.h3,{id:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8-3",children:"\u30C7\u30FC\u30BF\u30B7\u30FC\u30C8"}),(0,s.jsx)("div",{className:"card-container",children:(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-c1:~:text=Documents-,Datasheet,-C1%20Datasheet",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"C1M1"})})}),(0,s.jsx)(a.h3,{id:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB-3",children:"\u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB"}),(0,s.jsx)("div",{className:"card-container",children:(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-c1:~:text=C1%20Datasheet-,User%20Manual,-C1%20User%20Manual",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"C1M1"})})}),(0,s.jsx)(a.h3,{id:"sdk-3",children:"SDK"}),(0,s.jsxs)("div",{className:"card-container",children:[(0,s.jsx)("a",{href:"https://wiki.slamtec.com/display/SD#Slamtec%E5%BC%80%E5%8F%91%E8%80%85%E4%B8%AD%E5%BF%83-rplidar",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"\u958B\u767A\u8005\u30BB\u30F3\u30BF\u30FC"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-c1:~:text=C1%20User%20Manual-,Protocol,-Protocol",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"C1 \u30D7\u30ED\u30C8\u30B3\u30EB"})}),(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-c1:~:text=GitHub%20Repository-,SDk,-SDK%20User%20Manual",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"SDK \u30E6\u30FC\u30B6\u30FC\u30DE\u30CB\u30E5\u30A2\u30EB"})}),(0,s.jsx)("a",{href:"https://github.com/slamtec/rplidar_sdk",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"Github"})}),(0,s.jsx)("a",{href:"https://github.com/slamtec/rplidar_ros",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"ROS1"})}),(0,s.jsx)("a",{href:"https://github.com/Slamtec/rplidar_ros/tree/ros2",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"ROS2"})})]}),(0,s.jsx)(a.h3,{id:"3d-\u30E2\u30C7\u30EB-1",children:"3D \u30E2\u30C7\u30EB"}),(0,s.jsx)("div",{className:"card-container",children:(0,s.jsx)("nav",{className:"quick-nav",children:(0,s.jsx)("a",{href:"https://www.slamtec.com/en/Support#rplidar-c1:~:text=ROS2-,3D%20Models,-RPLIDAR%20C1%20Dev",className:"nav-item",target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)("span",{className:"text",children:"C1.stp"})})})})]})})]}),"\n",(0,s.jsx)("style",{children:`
/* \u{30CA}\u{30D3}\u{30B2}\u{30FC}\u{30B7}\u{30E7}\u{30F3}\u{30B3}\u{30F3}\u{30C6}\u{30CA} */
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

/* Dark\u{30E2}\u{30FC}\u{30C9} - \u{30CA}\u{30D3}\u{30B2}\u{30FC}\u{30B7}\u{30E7}\u{30F3}\u{30B3}\u{30F3}\u{30C6}\u{30CA} */
html[data-theme='dark'] .quick-nav-container {
background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

/* \u{30CA}\u{30D3}\u{30B2}\u{30FC}\u{30B7}\u{30E7}\u{30F3}\u{672C}\u{4F53} */
.quick-nav {
display: flex;
justify-content: space-around;
gap: 1rem;
flex-wrap: wrap; /* \u{91CD}\u{8981}\u{306A}\u{30D7}\u{30ED}\u{30D1}\u{30C6}\u{30A3} */
justify-content: left; /* \u{30AA}\u{30D7}\u{30B7}\u{30E7}\u{30F3}\u{FF1A}\u{4E2D}\u{592E}\u{63C3}\u{3048} */
}

/* \u{30CA}\u{30D3}\u{30B2}\u{30FC}\u{30B7}\u{30E7}\u{30F3}\u{9805}\u{76EE} */
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

/* Dark\u{30E2}\u{30FC}\u{30C9} - \u{30CA}\u{30D3}\u{30B2}\u{30FC}\u{30B7}\u{30E7}\u{30F3}\u{9805}\u{76EE} */
html[data-theme='dark'] .nav-item {
color: #e5e7eb;
background: #374151;
box-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

/* \u{30A2}\u{30A4}\u{30B3}\u{30F3}\u{30B9}\u{30BF}\u{30A4}\u{30EB} */
.nav-item .icon {
font-size: 1.8rem;
margin-bottom: 0.5rem;
transition: transform 0.3s;
}

/* \u{30C6}\u{30AD}\u{30B9}\u{30C8}\u{30B9}\u{30BF}\u{30A4}\u{30EB} */
.nav-item .text {
font-size: 0.95rem;
white-space: nowrap;
}

/* \u{30DB}\u{30D0}\u{30FC}\u{52B9}\u{679C} */
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

/* \u{30DB}\u{30D0}\u{30FC}\u{30A2}\u{30CB}\u{30E1}\u{30FC}\u{30B7}\u{30E7}\u{30F3} */
.nav-item:hover {
transform: translateY(-3px);
box-shadow: 0 6px 12px rgba(0,0,0,0.1);
color: white;
}

/* Dark\u{30E2}\u{30FC}\u{30C9} - \u{30DB}\u{30D0}\u{30FC}\u{30A2}\u{30CB}\u{30E1}\u{30FC}\u{30B7}\u{30E7}\u{30F3} */
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

/* \u{30EC}\u{30B9}\u{30DD}\u{30F3}\u{30B7}\u{30D6}\u{30C7}\u{30B6}\u{30A4}\u{30F3} */
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
`}),"\n",(0,s.jsx)("style",{children:`
/* \u{30B3}\u{30F3}\u{30C6}\u{30F3}\u{30C4}\u{30AB}\u{30FC}\u{30C9}\u{5F37}\u{5316}\u{7248}\u{30B9}\u{30BF}\u{30A4}\u{30EB} */
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

/* Dark\u{30E2}\u{30FC}\u{30C9} - \u{30B3}\u{30F3}\u{30C6}\u{30F3}\u{30C4}\u{30AB}\u{30FC}\u{30C9} */
html[data-theme='dark'] .category-card {
background: #374151;
box-shadow: 0 4px 6px rgba(0,0,0,0.4);
color: #e5e7eb;
}

.category-group {
margin-bottom: 2rem;
}

/* \u{30AB}\u{30C6}\u{30B4}\u{30EA}\u{8272}\u{6A19} */
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

/* \u{30DB}\u{30D0}\u{30FC}\u{52B9}\u{679C} */
.category-card:hover {
transform: translateY(-5px);
box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark\u{30E2}\u{30FC}\u{30C9} - \u{30DB}\u{30D0}\u{30FC}\u{52B9}\u{679C} */
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

/* Dark\u{30E2}\u{30FC}\u{30C9} - \u{30DB}\u{30D0}\u{30FC}\u{5149}\u{52B9}\u{679C} */
html[data-theme='dark'] .category-card:hover::after {
background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* \u{30EA}\u{30F3}\u{30AF}\u{30A2}\u{30CB}\u{30E1}\u{30FC}\u{30B7}\u{30E7}\u{30F3} */
.category-card a {
position: relative;
display: inline-block;
transition: all 0.2s;
text-decoration: none !important;
color: #333;
}

/* Dark\u{30E2}\u{30FC}\u{30C9} - \u{30EA}\u{30F3}\u{30AF} */
html[data-theme='dark'] .category-card a {
color: #d1d5db;
}

.category-card a:hover {
color: #4a90e2;
transform: translateX(5px);
}

/* Dark\u{30E2}\u{30FC}\u{30C9} - \u{30EA}\u{30F3}\u{30AF}\u{30DB}\u{30D0}\u{30FC} */
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

/* Dark\u{30E2}\u{30FC}\u{30C9} - \u{30EA}\u{30F3}\u{30AF}\u{4E0B}\u{7DDA} */
html[data-theme='dark'] .category-card a::after {
background: #60a5fa;
}

.category-card a:hover::after {
width: 100%;
}

/* \u{30BF}\u{30B0}\u{30B9}\u{30BF}\u{30A4}\u{30EB}\u{5F37}\u{5316} */
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

/* Dark\u{30E2}\u{30FC}\u{30C9} - Stable\u{30BF}\u{30B0} */
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

/* Dark\u{30E2}\u{30FC}\u{30C9} - Recommended\u{30BF}\u{30B0} */
html[data-theme='dark'] .recommended {
background: #7f1d1d;
color: #fca5a5;
box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
transform: translateY(-2px) scale(0.98);
box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark\u{30E2}\u{30FC}\u{30C9} - \u{30AF}\u{30EA}\u{30C3}\u{30AF}\u{52B9}\u{679C} */
html[data-theme='dark'] .category-card:active {
box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* \u{30EC}\u{30B9}\u{30DD}\u{30F3}\u{30B7}\u{30D6}\u{6700}\u{9069}\u{5316} */
@media (max-width: 768px) {
.nav-grid {
  grid-template-columns: 1fr;
}

.category-card {
  width: 100%;
  margin-top: 0.5rem; /* \u{30AB}\u{30FC}\u{30C9}\u{304C}\u{30BF}\u{30A4}\u{30C8}\u{30EB}\u{306B}\u{5BC6}\u{7740} */
}
}

/* \u{30C0}\u{30FC}\u{30AF}\u{30E2}\u{30FC}\u{30C9} - \u{30BF}\u{30A4}\u{30C8}\u{30EB}\u{30C6}\u{30AD}\u{30B9}\u{30C8} */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
color: #f9fafb;
}

/* \u{30C0}\u{30FC}\u{30AF}\u{30E2}\u{30FC}\u{30C9} - \u{672C}\u{6587}\u{30C6}\u{30AD}\u{30B9}\u{30C8} */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
color: #e5e7eb;
}

/* \u{30C0}\u{30FC}\u{30AF}\u{30E2}\u{30FC}\u{30C9} - \u{5F15}\u{7528}\u{30D6}\u{30ED}\u{30C3}\u{30AF} */
html[data-theme='dark'] blockquote {
color: #9ca3af;
border-left-color: #4b5563;
}
`})]})}function m(e={}){let{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},71184(e,a,r){r.d(a,{R:()=>l,x:()=>i});var t=r(14041);let s={},n=t.createContext(s);function l(e){let a=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(n.Provider,{value:a},e.children)}}}]);