---
description: Build a complete Microduck reinforcement learning workflow on Jetson, from environment deployment and official policy inference to custom motion training.
title: Microduck RL on Jetson
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_on_jetson
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# Microduck RL on Jetson

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png" alt="Microduck reinforcement learning on Jetson" />
</div>

This demo builds a complete robot-learning workflow for **Microduck** on a **Seeed reComputer powered by NVIDIA Jetson Orin NX 16GB**. It covers GPU environment deployment, PPO training with MuJoCo, visualization of local checkpoints, keyboard-controlled inference with official ONNX policies, and the development of new custom motions.

The verified reference platform uses **JetPack 7.2**, **Ubuntu 24.04**, **CUDA 13.2**, **Python 3.12**, and **MuJoCo 3.10**. This tutorial is based on the [`jjjadand/microduck_rl`](https://github.com/jjjadand/microduck_rl) repository, which contains the source code, deployment script, official ONNX policies, and Jetson-trained checkpoints used throughout the guide.

<div align="center">
  <a href="https://github.com/jjjadand/microduck_rl" target="_blank" rel="noopener noreferrer" style={{display:'inline-block', padding:'14px 30px', margin:'12px 0 26px', borderRadius:'10px', background:'linear-gradient(135deg, #00a86b, #007c55)', color:'#ffffff', fontSize:'19px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 28px rgba(0,168,107,0.28)'}}>
    <span style={{display:'inline-flex', alignItems:'center', gap:'12px'}}>Open the Microduck RL Repository <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'22px', lineHeight:'1'}}>↗</span></span>
  </a>
</div>

## Hardware Options

The tutorial was reproduced on Jetson Orin NX 16GB. The following Seeed Studio systems provide suitable Jetson platforms for following the workflow. The reComputer Classic J5011 offers additional GPU and memory capacity, while exact training throughput depends on the selected power mode and number of parallel environments.

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
          <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
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
          <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
      </div>
    </div>
  </div>
</div>

## Choose a Chapter

Click a card to open the corresponding chapter. Only this landing page is listed in the Physical AI sidebar; the three chapters remain focused pages accessed from here.

<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'22px', margin:'30px 0 40px'}}>
  <a href="/ai_robotics_microduck_rl_jetson_environment/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #e3ad00', background:'linear-gradient(145deg, #fff5c2, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(227,173,0,0.24)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#9a7200', marginBottom:'14px'}}>01</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>Deploy the Environment</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>Prepare JetPack 7.2, deploy the CUDA-enabled Python environment, understand the project directories, and verify GPU training.</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#b88700', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(154,114,0,.28)'}}>OPEN CHAPTER <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>

  <a href="/ai_robotics_microduck_rl_official_policies/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #00a86b', background:'linear-gradient(145deg, #d9fcef, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(0,168,107,0.22)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#007c55', marginBottom:'14px'}}>02</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>Train and Run Official Motions</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>Run a training smoke test, visualize a PT checkpoint, launch the official multi-policy ONNX demo, and control it from the keyboard.</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#00875a', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(0,135,90,.28)'}}>OPEN CHAPTER <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>

  <a href="/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #3182ce', background:'linear-gradient(145deg, #dceeff, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(49,130,206,0.22)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#2368a2', marginBottom:'14px'}}>03</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>Create a Custom Motion</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>Select a task template, define motion phases and rewards, register a new task, test it in MuJoCo, train it, and export ONNX.</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#2368a2', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(35,104,162,.28)'}}>OPEN CHAPTER <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>
</div>

## What You Will Reproduce

- A CUDA-enabled Microduck training environment on Jetson Orin NX.
- PPO training with parallel MuJoCo environments.
- Native and browser-based simulation visualization.
- Official ONNX inference for walking, standing, sit/stand, ground pick, roulade, kicking, and roller motions.
- Keyboard command input and live behavior switching.
- A reusable workflow for creating a custom phase-based motion such as a bow.

## Demo Architecture

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
For the fastest validation, deploy the environment, run the 64-environment five-iteration smoke test, and then launch the official ONNX keyboard demo. You can complete the custom-motion chapter afterward.
:::
