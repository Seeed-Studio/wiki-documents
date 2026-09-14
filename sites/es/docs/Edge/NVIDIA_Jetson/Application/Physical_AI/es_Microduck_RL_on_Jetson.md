---
description: Crea un flujo de trabajo completo de aprendizaje por refuerzo de Microduck en Jetson, desde el despliegue del entorno y la inferencia de políticas oficiales hasta el entrenamiento de movimientos personalizados.
title: Microduck RL en Jetson
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_on_jetson
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# Microduck RL en Jetson

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png" alt="Microduck reinforcement learning on Jetson" />
</div>

Esta demo construye un flujo de trabajo completo de aprendizaje de robots para **Microduck** en un **Seeed reComputer con NVIDIA Jetson Orin NX 16GB**. Cubre el despliegue del entorno con GPU, el entrenamiento PPO con MuJoCo, la visualización de checkpoints locales, la inferencia controlada por teclado con políticas oficiales ONNX y el desarrollo de nuevos movimientos personalizados.

La plataforma de referencia verificada utiliza **JetPack 7.2**, **Ubuntu 24.04**, **CUDA 13.2**, **Python 3.12** y **MuJoCo 3.10**. Este tutorial se basa en el repositorio [`jjjadand/microduck_rl`](https://github.com/jjjadand/microduck_rl), que contiene el código fuente, el script de despliegue, las políticas oficiales ONNX y los checkpoints entrenados en Jetson utilizados a lo largo de la guía.

<div align="center">
  <a href="https://github.com/jjjadand/microduck_rl" target="_blank" rel="noopener noreferrer" style={{display:'inline-block', padding:'14px 30px', margin:'12px 0 26px', borderRadius:'10px', background:'linear-gradient(135deg, #00a86b, #007c55)', color:'#ffffff', fontSize:'19px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 28px rgba(0,168,107,0.28)'}}>
    <span style={{display:'inline-flex', alignItems:'center', gap:'12px'}}>Abrir el repositorio de Microduck RL <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'22px', lineHeight:'1'}}>↗</span></span>
  </a>
</div>

## Opciones de hardware

El tutorial se reprodujo en Jetson Orin NX 16GB. Los siguientes sistemas de Seeed Studio proporcionan plataformas Jetson adecuadas para seguir el flujo de trabajo. El reComputer Classic J5011 ofrece capacidad adicional de GPU y memoria, mientras que el rendimiento exacto de entrenamiento depende del modo de potencia seleccionado y del número de entornos paralelos.

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
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
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
          <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
        </a>
      </div>
    </div>
  </div>
</div>

## Elige un capítulo

Haz clic en una tarjeta para abrir el capítulo correspondiente. Solo esta página de inicio aparece en la barra lateral de Physical AI; los tres capítulos siguen siendo páginas enfocadas a las que se accede desde aquí.

<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'22px', margin:'30px 0 40px'}}>
  <a href="/es/ai_robotics_microduck_rl_jetson_environment/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #e3ad00', background:'linear-gradient(145deg, #fff5c2, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(227,173,0,0.24)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#9a7200', marginBottom:'14px'}}>01</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>Desplegar el entorno</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>Prepara JetPack 7.2, despliega el entorno de Python con CUDA, comprende los directorios del proyecto y verifica el entrenamiento en GPU.</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#b88700', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(154,114,0,.28)'}}>ABRIR CAPÍTULO <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>

  <a href="/es/ai_robotics_microduck_rl_official_policies/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #00a86b', background:'linear-gradient(145deg, #d9fcef, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(0,168,107,0.22)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#007c55', marginBottom:'14px'}}>02</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>Entrenar y ejecutar movimientos oficiales</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>Ejecuta una prueba rápida de entrenamiento, visualiza un checkpoint PT, lanza la demo oficial ONNX multipolítica y contrólala desde el teclado.</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#00875a', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(0,135,90,.28)'}}>ABRIR CAPÍTULO <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>

  <a href="/es/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #3182ce', background:'linear-gradient(145deg, #dceeff, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(49,130,206,0.22)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#2368a2', marginBottom:'14px'}}>03</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>Crear un movimiento personalizado</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>Selecciona una plantilla de tarea, define las fases de movimiento y las recompensas, registra una nueva tarea, pruébala en MuJoCo, entrena y exporta ONNX.</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#2368a2', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(35,104,162,.28)'}}>ABRIR CAPÍTULO <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>
</div>

## Lo que vas a reproducir

- Un entorno de entrenamiento de Microduck con CUDA en Jetson Orin NX.
- Entrenamiento PPO con entornos MuJoCo en paralelo.
- Visualización de simulación nativa y basada en navegador.
- Inferencia oficial ONNX para caminar, estar de pie, sentarse/levantarse, recoger del suelo, voltereta, patadas y movimientos con rodillos.
- Entrada de comandos por teclado y cambio de comportamiento en vivo.
- Un flujo de trabajo reutilizable para crear un movimiento personalizado basado en fases, como una reverencia.

## Arquitectura de la demo

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
Para la validación más rápida, despliega el entorno, ejecuta la prueba rápida de humo de 64 entornos y cinco iteraciones, y luego inicia la demo oficial de teclado ONNX. Puedes completar el capítulo de movimiento personalizado después.
:::
