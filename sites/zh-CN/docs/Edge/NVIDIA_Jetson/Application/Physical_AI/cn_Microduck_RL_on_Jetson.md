---
description: 在 Jetson 上构建完整的 Microduck 强化学习工作流，从环境部署和官方策略推理到自定义动作训练。
title: Microduck RL on Jetson
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_on_jetson
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# Jetson 上的 Microduck 强化学习

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png" alt="Microduck reinforcement learning on Jetson" />
</div>

本演示在一台由 NVIDIA Jetson Orin NX 16GB 驱动的 **Seeed reComputer** 上，为 **Microduck** 构建了一套完整的机器人学习工作流。内容涵盖 GPU 环境部署、基于 MuJoCo 的 PPO 训练、本地检查点可视化、使用官方 ONNX 策略的键盘控制推理，以及新自定义动作的开发。

经验证的参考平台使用 **JetPack 7.2**、**Ubuntu 24.04**、**CUDA 13.2**、**Python 3.12** 和 **MuJoCo 3.10**。本教程基于 [`jjjadand/microduck_rl`](https://github.com/jjjadand/microduck_rl) 仓库，该仓库包含本指南中使用的源代码、部署脚本、官方 ONNX 策略以及在 Jetson 上训练得到的检查点。

<div align="center">
  <a href="https://github.com/jjjadand/microduck_rl" target="_blank" rel="noopener noreferrer" style={{display:'inline-block', padding:'14px 30px', margin:'12px 0 26px', borderRadius:'10px', background:'linear-gradient(135deg, #00a86b, #007c55)', color:'#ffffff', fontSize:'19px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 28px rgba(0,168,107,0.28)'}}>
    <span style={{display:'inline-flex', alignItems:'center', gap:'12px'}}>打开 Microduck RL 仓库 <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'22px', lineHeight:'1'}}>↗</span></span>
  </a>
</div>

## 硬件选项

本教程在 Jetson Orin NX 16GB 上复现。以下 Seeed Studio 系统提供了适合跟随本工作流的 Jetson 平台。reComputer Classic J5011 提供了更高的 GPU 和内存容量，而实际训练吞吐量取决于所选功耗模式和并行环境数量。

<div style={{display:'grid', gridTemplateColumns:'repeat(2, minmax(0, 1fr))', gap:'24px', margin:'28px 0 42px'}}>
  <div style={{display:'flex', flexDirection:'column', overflow:'hidden', borderRadius:'16px', border:'2px solid #00a86b', background:'linear-gradient(145deg, #dce6ee, #cbd8e3)', color:'#172b4d', boxShadow:'0 14px 34px rgba(0,168,107,.18)'}}>
    <div style={{height:'290px', padding:'26px', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(145deg, #d3dfe9, #bccbd8)'}}>
      <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010_1.jpg" alt="reComputer Super J4012 with Jetson Orin NX 16GB" style={{width:'100%', height:'100%', objectFit:'contain', mixBlendMode:'multiply', filter:'contrast(1.06)'}} />
    </div>
    <div style={{display:'flex', flexDirection:'column', flex:'1', padding:'24px'}}>
      <div style={{fontSize:'23px', lineHeight:'1.35', fontWeight:'900', color:'#172b4d'}}>reComputer Super J4012</div>
      <div style={{marginTop:'9px', color:'#526581', fontWeight:'600'}}>NVIDIA Jetson Orin NX 16GB</div>
      <div class="get_one_now_container" style={{textAlign:'center', marginTop:'auto', paddingTop:'24px'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div>
    </div>
  </div>

  <div style={{display:'flex', flexDirection:'column', overflow:'hidden', borderRadius:'16px', border:'2px solid #3182ce', background:'linear-gradient(145deg, #dce6ee, #cbd8e3)', color:'#172b4d', boxShadow:'0 14px 34px rgba(49,130,206,.18)'}}>
    <div style={{height:'290px', padding:'26px', display:'flex', alignItems:'center', justifyContent:'center', background:'linear-gradient(145deg, #d3dfe9, #bccbd8)'}}>
      <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100006184-recomputer-classic-j5011_1.jpg" alt="reComputer Classic J5011 with Jetson AGX Orin 32GB" style={{width:'100%', height:'100%', objectFit:'contain', mixBlendMode:'multiply', filter:'contrast(1.06)'}} />
    </div>
    <div style={{display:'flex', flexDirection:'column', flex:'1', padding:'24px'}}>
      <div style={{fontSize:'23px', lineHeight:'1.35', fontWeight:'900', color:'#172b4d'}}>reComputer Classic J5011</div>
      <div style={{marginTop:'9px', color:'#526581', fontWeight:'600'}}>NVIDIA Jetson AGX Orin 32GB</div>
      <div class="get_one_now_container" style={{textAlign:'center', marginTop:'auto', paddingTop:'24px'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
        </a>
      </div>
    </div>
  </div>
</div>

## 选择章节

点击卡片打开对应章节。Physical AI 侧边栏中只列出此落地页；三个章节保持为从这里访问的聚焦页面。

<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'22px', margin:'30px 0 40px'}}>
  <a href="/cn/ai_robotics_microduck_rl_jetson_environment/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #e3ad00', background:'linear-gradient(145deg, #fff5c2, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(227,173,0,0.24)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#9a7200', marginBottom:'14px'}}>01</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>部署环境</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>准备 JetPack 7.2，部署启用 CUDA 的 Python 环境，理解项目目录结构，并验证 GPU 训练。</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#b88700', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(154,114,0,.28)'}}>打开章节 <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>

  <a href="/cn/ai_robotics_microduck_rl_official_policies/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #00a86b', background:'linear-gradient(145deg, #d9fcef, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(0,168,107,0.22)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#007c55', marginBottom:'14px'}}>02</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>训练并运行官方动作</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>运行训练冒烟测试、可视化 PT 检查点、启动官方多策略 ONNX 演示，并通过键盘进行控制。</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#00875a', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(0,135,90,.28)'}}>打开章节 <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>

  <a href="/cn/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #3182ce', background:'linear-gradient(145deg, #dceeff, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(49,130,206,0.22)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#2368a2', marginBottom:'14px'}}>03</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>创建自定义动作</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>选择任务模板，定义动作阶段和奖励，注册新任务，在 MuJoCo 中测试、训练，并导出 ONNX。</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#2368a2', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(35,104,162,.28)'}}>打开章节 <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>
</div>

## 你将复现的内容

- 在 Jetson Orin NX 上启用 CUDA 的 Microduck 训练环境。
- 使用并行 MuJoCo 环境的 PPO 训练。
- 原生和基于浏览器的仿真可视化。
- 针对行走、站立、坐/站、地面拾取、翻滚、踢腿和滚轮动作的官方 ONNX 推理。
- 键盘指令输入和实时行为切换。
- 一套可复用的工作流，用于创建如鞠躬等基于阶段的自定义动作。

## 演示架构

```text
Jetson Orin NX
├── JetPack 7.2 / CUDA 13.2
├── uv project environment
├── mjlab + MuJoCo Warp + rsl_rl
├── Microduck task configurations
├── PPO checkpoint (.pt)
└── Exported policy (.onnx)
     ├── MuJoCo inference rehearsal
     └── Microduck runtime deployment
```

:::tip
为了最快速地完成验证，请先部署环境，运行 64 个环境、5 次迭代的冒烟测试，然后启动官方的 ONNX 键盘演示。你可以在之后再完成自定义动作章节。
:::
