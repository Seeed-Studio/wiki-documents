---
description: This wiki provides tutorial for Feetech Servo motors.
title: 飞特舵机
keywords:
- actuator
- motor
- arm
- robotics
image: https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech servo all.webp
slug: /cn/feetech_servo
last_update:
  date: 11/24/2025
  author: Li Shanghang
---

# 飞特STS系列舵机文档中心

<div align="center">

<img width={800} src="https://files.seeedstudio.com/wiki/robotics/Actuator/feetech/Feetech servo all.webp" className="nav-icon" alt="Slamtec LiDAR"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item"  href="https://www.seeedstudio.com/STS3215-19kg-cm-7-4V-Serial-Servo-p-6338.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 购买链接 🖱</font></span></strong>
    </a>
</div>

<div class="category-group">
  <div class="category-card robot-kits">

## 产品手册

  <a href="https://files.seeedstudio.com/products/Feetech/108090003_FEETECH_ST-3215-C047-Datasheet.pdf" className="nav-item">
    <span className="text">ST3215-C047 12V 1:345</span>
  </a>
  <a href="https://files.seeedstudio.com/products/Feetech/101090142_Feetech_ST-3215-C046_Datasheet.pdf" className="nav-item">
    <span className="text">ST3215-C046 7.4v 1:147</span>
  </a>
  <a href="https://files.seeedstudio.com/products/Feetech/101090141_Feetech_ST-3215-C044_Datasheet.pdf" className="nav-item">
    <span className="text">ST3215-C044 7.4v 1:191</span>
  </a>
  <a href="https://files.seeedstudio.com/products/Feetech/108090023_STS3215-C001_Datasheet.pdf" className="nav-item">
    <span className="text">ST3215-C001 7.4v 1:345</span>
  </a>
    <a href="https://files.seeedstudio.com/products/Feetech/HL-3915-C001%2012V%201%20320%20.xlsx" className="nav-item">
    <span className="text">HL-3915-C001 12V 1:320 </span>
  </a>
  <a href="https://files.seeedstudio.com/products/Feetech/HL-3615-C002%206V%201%2096%20.xlsx" className="nav-item">
    <span className="text">HL-3615-C002 6V 1:96  </span>
  </a>
  <a href="https://files.seeedstudio.com/products/Feetech/URT-1%E4%B8%AD%E6%96%87%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E.pdf" className="nav-item">
    <span className="text">FE-URT-1  </span>
  </a>

## SDK

  <a href="https://gitee.com/ftservo/FTServo_Arduino" className="nav-item">
    <span className="text">Arduino</span>
  </a>
  <a href="https://gitee.com/ftservo/FTServo_Python" className="nav-item">
    <span className="text">Python</span>
  </a>
  <a href="https://gitee.com/ftservo/FTServo_Linux" className="nav-item">
    <span className="text">Linux</span>
  </a>
  <a href="https://gitee.com/ftservo/FTServo_stm32HAL" className="nav-item">
    <span className="text">Stm32HAL</span>
  </a>
  <a href="http://doc.feetech.cn/#/prodinfodownload?srcType=FT-SMS-STS-emanual-229f4476422d4059abfb1cb0" className="nav-item">
    <span className="text">内存表</span>
  </a>
  <a href="http://doc.feetech.cn/#/prodinfodownload?srcType=FT-SCS-Protocol-41ad23fe8a244712ba160b93" className="nav-item">
    <span className="text">通信协议</span>
  </a>
  <a href="http://md.feetech.cn/wenjian-maxbase-100001/pub/%E4%BA%A7%E5%93%81%E8%A7%84%E6%A0%BC/MD%E6%96%87%E6%A1%A3/202505/5af0e85ab1cb45f596d7cc2b-%E7%A3%81%E7%BC%96%E7%A0%81SMS&STS&HTS-%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E6%8C%87%E4%BB%A4%E7%94%9F%E6%88%90%E8%A1%A8-250508.xlsx" className="nav-item">
    <span className="text">十六进制指令生成集</span>
  </a>

## 上位机

  <a href="https://gitee.com/ftservo/fddebug" className="nav-item">
    <span className="text">FDServo</span>
  </a>

## 控制案例

  <a href="https://wiki.seeedstudio.com/cn/bus_servo_driver_board/" className="nav-item">
    <span className="text">XIAO总线舵机驱动板控制STS3215</span>
  </a>

</div>
</div>


## 技术支持

感谢您选择我们的产品！我们将为您提供全方位的支持，确保您获得顺畅的产品使用体验。我们开通了多种沟通渠道，以满足不同用户的需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

<style>{`
/* 导航容器基础样式 */
.quick-nav-container {
  margin: 2rem 0;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 16px;
}

/* 卡片容器基础样式 */
.card-container {
  margin: 0.1rem 0;
  padding: 0.5rem;
  border-radius: 16px;
}

/* 导航项基础样式 */
.nav-item {
  padding: 0.8rem 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  background: white;
}

/* 导航项文字样式 */
.nav-item .text {
  font-size: 0.95rem;
  white-space: nowrap;
}

/* 内容卡片基础样式 */
.category-card {
  padding: 1.5rem;
  border-radius: 16px;
  background: white;
}

.category-group {
  margin-bottom: 2rem;
}

/* 分类色标 */
.robot-kits::before {
  background: #4a90e2;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-item {
    padding: 0.8rem 1rem;
  }
}

/* Dark模式样式 */
html[data-theme='dark'] {
  .quick-nav-container {
    background: #1f2937;
  }
  .nav-item {
    background: #374151;
    color: #e5e7eb;
  }
  .category-card {
    background: #374151;
    color: #e5e7eb;
  }
}

`}</style>





<style>{`

/* 内容卡片增强版样式 */
.nav-grid {
  display: block;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 2rem;
}

/* Dark模式 - 内容卡片 */
html[data-theme='dark'] .category-card {
  background: #374151;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);
  color: #e5e7eb;
}

.category-group {
  margin-bottom: 2rem;
}

/* 分类色标 */
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

/* 悬浮特效 */
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0,0,0,0.1);
}

/* Dark模式 - 悬浮特效 */
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

/* Dark模式 - 悬浮光效 */
html[data-theme='dark'] .category-card:hover::after {
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
}

/* 链接动画 */
.category-card a {
  position: relative;
  display: inline-block;
  transition: all 0.2s;
  text-decoration: none !important;
  color: #333;
}

/* Dark模式 - 链接 */
html[data-theme='dark'] .category-card a {
  color: #d1d5db;
}

.category-card a:hover {
  color: #4a90e2;
  transform: translateX(5px);
}

/* Dark模式 - 链接悬浮 */
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

/* Dark模式 - 链接下划线 */
html[data-theme='dark'] .category-card a::after {
  background: #60a5fa;
}

.category-card a:hover::after {
  width: 100%;
}

/* 标签样式增强 */
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

/* Dark模式 - Stable标签 */
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

/* Dark模式 - Recommended标签 */
html[data-theme='dark'] .recommended {
  background: #7f1d1d;
  color: #fca5a5;
  box-shadow: 0 2px 4px rgba(200,0,0,0.3);
}

.category-card:active {
  transform: translateY(-2px) scale(0.98);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}

/* Dark模式 - 点击效果 */
html[data-theme='dark'] .category-card:active {
  box-shadow: 0 6px 10px rgba(0,0,0,0.4);
}

/* 响应式优化 */
@media (max-width: 768px) {
  .nav-grid {
    grid-template-columns: 1fr;
  }
  
  .category-card {
    width: 100%;
    margin-top: 0.5rem; /* 卡片紧贴标题 */
  }
}

/* Dark模式 - 标题文字 */
html[data-theme='dark'] h1,
html[data-theme='dark'] h2,
html[data-theme='dark'] h3,
html[data-theme='dark'] h4,
html[data-theme='dark'] h5,
html[data-theme='dark'] h6 {
  color: #f9fafb;
}

/* Dark模式 - 正文文字 */
html[data-theme='dark'] p,
html[data-theme='dark'] li,
html[data-theme='dark'] strong {
  color: #e5e7eb;
}

/* Dark模式 - 引用块 */
html[data-theme='dark'] blockquote {
  color: #9ca3af;
  border-left-color: #4b5563;
}
`}</style>