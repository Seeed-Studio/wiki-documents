"use strict";(self.webpackChunkwiki_zh_CN=self.webpackChunkwiki_zh_CN||[]).push([["56345"],{71690(e,a,s){s.r(a),s.d(a,{metadata:()=>t,default:()=>m,frontMatter:()=>d,contentTitle:()=>c,toc:()=>n,assets:()=>l});var t=JSON.parse('{"id":"Robotics/Robot_Sensor/Lidar/cn_SLAMTEC","title":"\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE","description":"\u4ECB\u7ECD\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE\u7684\u4E0A\u624B\u4F7F\u7528\u53CA\u4EA7\u54C1\u8D44\u6599\u3002","source":"@site/docs/Robotics/Robot_Sensor/Lidar/cn_SLAMTEC.md","sourceDirName":"Robotics/Robot_Sensor/Lidar","slug":"/slamtec","permalink":"/cn/slamtec","draft":false,"unlisted":false,"editUrl":"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/sites/zh-CN/docs/Robotics/Robot_Sensor/Lidar/cn_SLAMTEC.md","tags":[],"version":"current","lastUpdatedBy":"ZhuYaohui","lastUpdatedAt":1750204800000,"frontMatter":{"description":"\u4ECB\u7ECD\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE\u7684\u4E0A\u624B\u4F7F\u7528\u53CA\u4EA7\u54C1\u8D44\u6599\u3002","title":"\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE","keywords":["\u6FC0\u5149\u96F7\u8FBE","Robotics","ROS","SLAM","Lidar"],"image":"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png","slug":"/slamtec","last_update":{"date":"2025/06/18","author":"ZhuYaohui"},"createdAt":"2025-06-19","updatedAt":"2025-11-27","url":"https://wiki.seeedstudio.com/cn/slamtec/"},"sidebar":"CNSidebar","previous":{"title":"\u8FD0\u884C A-LOAM 3D SLAM","permalink":"/cn/a_loam"},"next":{"title":"AC1 \u5165\u95E8\u6307\u5357","permalink":"/cn/ac1"}}'),r=s(31085),i=s(71184);let d={description:"\u4ECB\u7ECD\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE\u7684\u4E0A\u624B\u4F7F\u7528\u53CA\u4EA7\u54C1\u8D44\u6599\u3002",title:"\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE",keywords:["\u6FC0\u5149\u96F7\u8FBE","Robotics","ROS","SLAM","Lidar"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/slamtec",last_update:{date:"2025/06/18",author:"ZhuYaohui"},createdAt:"2025-06-19",updatedAt:"2025-11-27",url:"https://wiki.seeedstudio.com/cn/slamtec/"},c="\u{1F4E1}\u601D\u5C9A\u7CFB\u5217\u96F7\u8FBE\u4E0A\u624B\u8D44\u6599\u5408\u96C6",l={},n=[{value:"\u{1F4E6} Aurora",id:"-aurora",level:2},{value:"Datasheet",id:"datasheet",level:2},{value:"\u7528\u6237\u624B\u518C",id:"\u7528\u6237\u624B\u518C",level:2},{value:"SDK",id:"sdk",level:2},{value:"\u4E09\u7EF4\u6A21\u578B",id:"\u4E09\u7EF4\u6A21\u578B",level:2},{value:"\u{1F4E6} A1\u7CFB\u5217\u96F7\u8FBE",id:"A1-series",level:2},{value:"Datasheet",id:"datasheet-1",level:2},{value:"\u7528\u6237\u624B\u518C",id:"\u7528\u6237\u624B\u518C-1",level:2},{value:"SDK",id:"sdk-1",level:2},{value:"\u4E09\u7EF4\u6A21\u578B",id:"\u4E09\u7EF4\u6A21\u578B-1",level:2},{value:"\u{1F4E6} S\u7CFB\u5217\u96F7\u8FBE",id:"S2-series",level:2},{value:"Datasheet",id:"datasheet-2",level:2},{value:"\u7528\u6237\u624B\u518C",id:"\u7528\u6237\u624B\u518C-2",level:2},{value:"SDK",id:"sdk-2",level:2},{value:"\u4E09\u7EF4\u6A21\u578B",id:"\u4E09\u7EF4\u6A21\u578B-2",level:2},{value:"\u{1F4E6} C\u7CFB\u5217\u96F7\u8FBE",id:"C1-series",level:2},{value:"Datasheet",id:"datasheet-3",level:2},{value:"\u7528\u6237\u624B\u518C",id:"\u7528\u6237\u624B\u518C-3",level:2},{value:"SDK",id:"sdk-3",level:2},{value:"\u4E09\u7EF4\u6A21\u578B",id:"\u4E09\u7EF4\u6A21\u578B-3",level:2}];function o(e){let a={h1:"h1",h2:"h2",header:"header",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"\u601D\u5C9A\u7CFB\u5217\u96F7\u8FBE\u4E0A\u624B\u8D44\u6599\u5408\u96C6",children:"\u{1F4E1}\u601D\u5C9A\u7CFB\u5217\u96F7\u8FBE\u4E0A\u624B\u8D44\u6599\u5408\u96C6"})}),"\n",(0,r.jsx)("div",{className:"quick-nav-container",children:(0,r.jsxs)("nav",{className:"quick-nav",children:[(0,r.jsxs)("a",{href:"#Aurora-S",className:"nav-item",children:[(0,r.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/aurora_s.png",className:"nav-icon",alt:"Slamtec LiDAR"}),(0,r.jsx)("span",{className:"text",children:"Aurora-S"}),(0,r.jsx)("div",{className:"hover-effect"})]}),(0,r.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,r.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A1M8.png",className:"nav-icon",alt:"\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE"}),(0,r.jsx)("span",{className:"text",children:"A1M8"}),(0,r.jsx)("div",{className:"hover-effect"})]}),(0,r.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,r.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A2_1.png",className:"nav-icon",alt:"\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE"}),(0,r.jsx)("span",{className:"text",children:"A2M8"}),(0,r.jsx)("div",{className:"hover-effect"})]}),(0,r.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,r.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A2M12.png",className:"nav-icon",alt:"\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE"}),(0,r.jsx)("span",{className:"text",children:"A2M12"}),(0,r.jsx)("div",{className:"hover-effect"})]}),(0,r.jsxs)("a",{href:"#A1-series",className:"nav-item",children:[(0,r.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/A3M1.png",className:"nav-icon",alt:"\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE"}),(0,r.jsx)("span",{className:"text",children:"A3M1"}),(0,r.jsx)("div",{className:"hover-effect"})]}),(0,r.jsxs)("a",{href:"#S2-series",className:"nav-item",children:[(0,r.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/S2.png",className:"nav-icon",alt:"\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE"}),(0,r.jsx)("span",{className:"text",children:"S2\u7CFB\u5217"}),(0,r.jsx)("div",{className:"hover-effect"})]}),(0,r.jsxs)("a",{href:"#S2-series",className:"nav-item",children:[(0,r.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/S3.png",className:"nav-icon",alt:"\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE"}),(0,r.jsx)("span",{className:"text",children:"S3"}),(0,r.jsx)("div",{className:"hover-effect"})]}),(0,r.jsxs)("a",{href:"#C1-series",className:"nav-item",children:[(0,r.jsx)("img",{width:100,src:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/C1.png",className:"nav-icon",alt:"\u601D\u5C9A\u6FC0\u5149\u96F7\u8FBE"}),(0,r.jsx)("span",{className:"text",children:"C1M1"}),(0,r.jsx)("div",{className:"hover-effect"})]})]})}),"\n",(0,r.jsxs)("div",{className:"nav-grid",children:[(0,r.jsx)(a.h2,{id:"-aurora",children:"\u{1F4E6} Aurora"}),(0,r.jsx)("div",{class:"category-group",children:(0,r.jsxs)("div",{className:"category-card robot-kits",children:[(0,r.jsx)(a.h2,{id:"datasheet",children:"Datasheet"}),(0,r.jsx)("div",{className:"card-container",children:(0,r.jsx)("a",{href:"https://files.seeedstudio.com/products/SLAMTEC_Aurora_S/Aurora_S_datasheet_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Aurora S"})})}),(0,r.jsx)(a.h2,{id:"\u7528\u6237\u624B\u518C",children:"\u7528\u6237\u624B\u518C"}),(0,r.jsx)("div",{className:"card-container",children:(0,r.jsx)("nav",{className:"quick-nav",children:(0,r.jsx)("a",{href:"https://files.seeedstudio.com/products/SLAMTEC_Aurora_S/Aurora_S_user_manual_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Aurora S"})})})}),(0,r.jsx)(a.h2,{id:"sdk",children:"SDK"}),(0,r.jsx)("div",{className:"card-container",children:(0,r.jsx)("a",{href:"https://www.slamtec.com/en/Support#aurora",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"\u5F00\u53D1\u8005\u4E2D\u5FC3"})})}),(0,r.jsx)(a.h2,{id:"\u4E09\u7EF4\u6A21\u578B",children:"\u4E09\u7EF4\u6A21\u578B"}),(0,r.jsx)("div",{className:"card-container",children:(0,r.jsx)("a",{href:"https://www.slamtec.com/en/Support#aurora",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:" A3M1.stl"})})})]})}),(0,r.jsx)(a.h2,{id:"A1-series",children:"\u{1F4E6} A1\u7CFB\u5217\u96F7\u8FBE"}),(0,r.jsx)("div",{class:"category-group",children:(0,r.jsxs)("div",{className:"category-card robot-kits",children:[(0,r.jsx)(a.h2,{id:"datasheet-1",children:"Datasheet"}),(0,r.jsxs)("div",{className:"card-container",children:[(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LD310_SLAMTEC_rplidar_datasheet_A3M1_v1.9_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A3M1"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LD208_SLAMTEC_rplidar_datasheet_A2M8_v2.6_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A2M8"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LD310_SLAMTEC_rplidar_datasheet_A2M12_v1.0_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A2M12"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LD108_SLAMTEC_rplidar_datasheet_A1M8_v3.0_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A1M8"})})]}),(0,r.jsx)(a.h2,{id:"\u7528\u6237\u624B\u518C-1",children:"\u7528\u6237\u624B\u518C"}),(0,r.jsx)("div",{className:"card-container",children:(0,r.jsxs)("nav",{className:"quick-nav",children:[(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LM310_SLAMTEC_rplidarkit_usermanual_A3M1_v1.4_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A3M1"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LM310_SLAMTEC_rplidarkit_usermanual_A2%20series_v1.2_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A2 Series"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LM108_SLAMTEC_rplidarkit_usermanual_A1M8_v2.1_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A1M8"})})]})}),(0,r.jsx)(a.h2,{id:"sdk-1",children:"SDK"}),(0,r.jsxs)("div",{className:"card-container",children:[(0,r.jsx)("a",{href:"https://wiki.slamtec.com/display/SD#Slamtec%E5%BC%80%E5%8F%91%E8%80%85%E4%B8%AD%E5%BF%83-rplidar",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"\u5F00\u53D1\u8005\u4E2D\u5FC3"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LR001_SLAMTEC_rplidar_protocol_v2.4_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"\u901A\u4FE1\u534F\u8BAE"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LR002_SLAMTEC_rplidar_sdk_v2.0_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"SDK\u7528\u6237\u624B\u518C"})}),(0,r.jsx)("a",{href:"https://github.com/slamtec/rplidar_sdk",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Github"})}),(0,r.jsx)("a",{href:"https://github.com/slamtec/rplidar_ros",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"ROS1"})}),(0,r.jsx)("a",{href:"https://github.com/Slamtec/rplidar_ros/tree/ros2",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"ROS2"})})]}),(0,r.jsx)(a.h2,{id:"\u4E09\u7EF4\u6A21\u578B-1",children:"\u4E09\u7EF4\u6A21\u578B"}),(0,r.jsxs)("div",{className:"card-container",children:[(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-a2m4-r1-model-3d-stl/1.0?lang=netural",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:" A3M1.stl"})}),(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-a2m4-r1-model-2d-pdf/1.0?lang=zh-cn",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A3M1.pdf"})}),(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-a2m4-r1-model-3d-stl/1.0?lang=netural",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A2.stl"})}),(0,r.jsx)("a",{href:"https://bucket-download.slamtec.com/f71d89934463d52c770e1e471d72e9adea2de88b/rplidar-a2m4-r1.2d.zh-cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A2.pdf"})}),(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-devkit-a1m8-r1-model-3d-stl/2.0?lang=netural",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A1.stl"})}),(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-devkit-a1m8-r1-model-2d-pdf/2.0?lang=zh-cn",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"A1.pdf"})})]})]})}),(0,r.jsx)(a.h2,{id:"S2-series",children:"\u{1F4E6} S\u7CFB\u5217\u96F7\u8FBE"}),(0,r.jsx)("div",{class:"category-group",children:(0,r.jsxs)("div",{className:"category-card robot-kits",children:[(0,r.jsx)(a.h2,{id:"datasheet-2",children:"Datasheet"}),(0,r.jsxs)("div",{className:"card-container",children:[(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/SLAMTEC_rplidar_datasheet_S2M1_v2.3_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"S2"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/SLAMTEC_rplidar_datasheet_S2L_v2.2_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"S2L"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/SLAMTEC_rplidar_datasheet_S2E_v1.8_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"S2E"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/SLAMTEC_rplidar_datasheet_S3_v1.1_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"S3"})})]}),(0,r.jsx)(a.h2,{id:"\u7528\u6237\u624B\u518C-2",children:"\u7528\u6237\u624B\u518C"}),(0,r.jsxs)("div",{className:"card-container",children:[(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/SLAMTEC_rplidarkit_usermanual_S2_v1.2_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"S2 S2L"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/SLAMTEC_rplidarkit_usermanual_S2E_v1.1_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"S2E"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/SLAMTEC_rplidarkit_usermanual_S3_v1.0_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"S3"})})]}),(0,r.jsx)(a.h2,{id:"sdk-2",children:"SDK"}),(0,r.jsxs)("div",{className:"card-container",children:[(0,r.jsx)("a",{href:"https://wiki.slamtec.com/display/SD#Slamtec%E5%BC%80%E5%8F%91%E8%80%85%E4%B8%AD%E5%BF%83-rplidar",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"\u5F00\u53D1\u8005\u4E2D\u5FC3"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LR001_SLAMTEC_rplidar_protocol_v2.4_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"S2 S2L\u901A\u4FE1\u534F\u8BAE"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/SLAMTEC_rplidarkit_usermanual_S2E_v1.1_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"S2E\u901A\u4FE1\u534F\u8BAE"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LR001_SLAMTEC_rplidar_S series_protocol_v1.0_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"S3\u901A\u4FE1\u534F\u8BAE"})}),(0,r.jsx)("a",{href:"https://files.seeedstudio.com/wiki/robotics/Sensor/Lidar/slamtec/LR002_SLAMTEC_rplidar_sdk_v2.0_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"SDK\u7528\u6237\u624B\u518C"})}),(0,r.jsx)("a",{href:"https://github.com/slamtec/rplidar_sdk",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Github"})}),(0,r.jsx)("a",{href:"https://github.com/slamtec/rplidar_ros",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"ROS1"})}),(0,r.jsx)("a",{href:"https://github.com/Slamtec/rplidar_ros/tree/ros2",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"ROS2"})})]}),(0,r.jsx)(a.h2,{id:"\u4E09\u7EF4\u6A21\u578B-2",children:"\u4E09\u7EF4\u6A21\u578B"}),(0,r.jsx)("div",{className:"card-container",children:(0,r.jsxs)("nav",{className:"quick-nav",children:[(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s2-model-3d-stl/1.0?lang=netural",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:" S2.stl"})}),(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-s2-model-2d-pdf/1.0?lang=netural",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"S2.pdf"})}),(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-c1-model-3d-stp/1?lang=netural",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:" S3.stp"})})]})})]})}),(0,r.jsx)(a.h2,{id:"C1-series",children:"\u{1F4E6} C\u7CFB\u5217\u96F7\u8FBE"}),(0,r.jsx)("div",{class:"category-group",children:(0,r.jsxs)("div",{className:"category-card robot-kits",children:[(0,r.jsx)(a.h2,{id:"datasheet-3",children:"Datasheet"}),(0,r.jsx)("div",{className:"card-container",children:(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-c1-datasheet/1?lang=zh-cn",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"C1M1"})})}),(0,r.jsx)(a.h2,{id:"\u7528\u6237\u624B\u518C-3",children:"\u7528\u6237\u624B\u518C"}),(0,r.jsx)("div",{className:"card-container",children:(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-c1-usermanual/1.1?lang=zh-cn",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"C1M1"})})}),(0,r.jsx)(a.h2,{id:"sdk-3",children:"SDK"}),(0,r.jsxs)("div",{className:"card-container",children:[(0,r.jsx)("a",{href:"https://wiki.slamtec.com/display/SD#Slamtec%E5%BC%80%E5%8F%91%E8%80%85%E4%B8%AD%E5%BF%83-rplidar",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"\u5F00\u53D1\u8005\u4E2D\u5FC3"})}),(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-c1-protocol/1?lang=zh-cn",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"C1\u901A\u4FE1\u534F\u8BAE"})}),(0,r.jsx)("a",{href:"https://bucket-download.slamtec.com/6a128ec31e98b713a855a4f40648f5accb0a699a/LR002_SLAMTEC_rplidar_sdk_v2.0_cn.pdf",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"SDK\u7528\u6237\u624B\u518C"})}),(0,r.jsx)("a",{href:"https://github.com/slamtec/rplidar_sdk",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"Github"})}),(0,r.jsx)("a",{href:"https://github.com/slamtec/rplidar_ros",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"ROS1"})}),(0,r.jsx)("a",{href:"https://github.com/Slamtec/rplidar_ros/tree/ros2",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:"ROS2"})})]}),(0,r.jsx)(a.h2,{id:"\u4E09\u7EF4\u6A21\u578B-3",children:"\u4E09\u7EF4\u6A21\u578B"}),(0,r.jsx)("div",{className:"card-container",children:(0,r.jsx)("nav",{className:"quick-nav",children:(0,r.jsx)("a",{href:"https://download.slamtec.com/api/download/rplidar-c1-model-3d-stp/1?lang=netural",className:"nav-item",children:(0,r.jsx)("span",{className:"text",children:" C1.stp"})})})})]})})]}),"\n",(0,r.jsx)("style",{children:`
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
`}),"\n",(0,r.jsx)("style",{children:`
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
`})]})}function m(e={}){let{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},71184(e,a,s){s.d(a,{R:()=>d,x:()=>c});var t=s(14041);let r={},i=t.createContext(r);function d(e){let a=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);