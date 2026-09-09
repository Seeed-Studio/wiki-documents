---
description: Construa um fluxo completo de trabalho de aprendizado por reforço do Microduck no Jetson, desde a implantação do ambiente e inferência com políticas oficiais até o treinamento de movimentos personalizados.
title: Microduck RL no Jetson
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_on_jetson
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# Microduck RL no Jetson

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png" alt="Microduck reinforcement learning on Jetson" />
</div>

Esta demonstração constrói um fluxo de trabalho completo de aprendizado de robôs para o **Microduck** em um **Seeed reComputer com NVIDIA Jetson Orin NX 16GB**. Ela abrange a implantação do ambiente com GPU, treinamento PPO com MuJoCo, visualização de checkpoints locais, inferência controlada por teclado com políticas oficiais em ONNX e o desenvolvimento de novos movimentos personalizados.

A plataforma de referência verificada usa **JetPack 7.2**, **Ubuntu 24.04**, **CUDA 13.2**, **Python 3.12** e **MuJoCo 3.10**. Este tutorial é baseado no repositório [`jjjadand/microduck_rl`](https://github.com/jjjadand/microduck_rl), que contém o código-fonte, script de implantação, políticas oficiais em ONNX e checkpoints treinados no Jetson usados ao longo do guia.

<div align="center">
  <a href="https://github.com/jjjadand/microduck_rl" target="_blank" rel="noopener noreferrer" style={{display:'inline-block', padding:'14px 30px', margin:'12px 0 26px', borderRadius:'10px', background:'linear-gradient(135deg, #00a86b, #007c55)', color:'#ffffff', fontSize:'19px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 28px rgba(0,168,107,0.28)'}}>
    <span style={{display:'inline-flex', alignItems:'center', gap:'12px'}}>Abrir o repositório Microduck RL <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'22px', lineHeight:'1'}}>↗</span></span>
  </a>
</div>

## Opções de hardware

O tutorial foi reproduzido no Jetson Orin NX 16GB. Os seguintes sistemas da Seeed Studio fornecem plataformas Jetson adequadas para seguir o fluxo de trabalho. O reComputer Classic J5011 oferece capacidade adicional de GPU e memória, enquanto a taxa exata de treinamento depende do modo de energia selecionado e do número de ambientes paralelos.

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
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
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
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
      </div>
    </div>
  </div>
</div>

## Escolha um capítulo

Clique em um cartão para abrir o capítulo correspondente. Apenas esta página inicial é listada na barra lateral de Physical AI; os três capítulos permanecem páginas focadas acessadas a partir daqui.

<div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'22px', margin:'30px 0 40px'}}>
  <a href="/pt-br/ai_robotics_microduck_rl_jetson_environment/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #e3ad00', background:'linear-gradient(145deg, #fff5c2, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(227,173,0,0.24)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#9a7200', marginBottom:'14px'}}>01</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>Implantar o ambiente</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>Prepare o JetPack 7.2, implante o ambiente Python com suporte a CUDA, entenda os diretórios do projeto e verifique o treinamento na GPU.</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#b88700', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(154,114,0,.28)'}}>ABRIR CAPÍTULO <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>

  <a href="/pt-br/ai_robotics_microduck_rl_official_policies/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #00a86b', background:'linear-gradient(145deg, #d9fcef, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(0,168,107,0.22)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#007c55', marginBottom:'14px'}}>02</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>Treinar e executar movimentos oficiais</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>Execute um teste rápido de treinamento, visualize um checkpoint PT, inicie a demonstração oficial de múltiplas políticas em ONNX e controle-a pelo teclado.</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#00875a', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(0,135,90,.28)'}}>ABRIR CAPÍTULO <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>

  <a href="/pt-br/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'flex', flexDirection:'column', padding:'28px', minHeight:'330px', borderRadius:'16px', border:'3px solid #3182ce', background:'linear-gradient(145deg, #dceeff, #ffffff)', color:'#172b4d', textDecoration:'none', boxShadow:'0 14px 36px rgba(49,130,206,0.22)', transition:'transform .2s ease, box-shadow .2s ease'}}>
    <div style={{fontSize:'42px', fontWeight:'800', color:'#2368a2', marginBottom:'14px'}}>03</div>
    <div style={{fontSize:'24px', lineHeight:'1.35', color:'#172b4d', fontWeight:'900', marginBottom:'14px'}}>Criar um movimento personalizado</div>
    <div style={{lineHeight:'1.7', color:'#344563', fontWeight:'500'}}>Selecione um modelo de tarefa, defina fases de movimento e recompensas, registre uma nova tarefa, teste-a no MuJoCo, treine-a e exporte para ONNX.</div>
    <div style={{marginTop:'auto', paddingTop:'24px'}}><span style={{display:'inline-flex', alignItems:'center', gap:'14px', padding:'11px 12px 11px 18px', borderRadius:'9px', background:'#2368a2', color:'#ffffff', fontWeight:'900', letterSpacing:'.3px', boxShadow:'0 7px 18px rgba(35,104,162,.28)'}}>ABRIR CAPÍTULO <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'30px', height:'30px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'22px', lineHeight:'1'}}>➜</span></span></div>
  </a>
</div>

## O que você irá reproduzir

- Um ambiente de treinamento do Microduck com suporte a CUDA no Jetson Orin NX.
- Treinamento PPO com ambientes MuJoCo paralelos.
- Visualização de simulação nativa e baseada em navegador.
- Inferência oficial em ONNX para movimentos de caminhada, ficar em pé, sentar/levantar, pegar objetos no chão, rolamento, chutar e rolar.
- Entrada de comandos pelo teclado e troca de comportamento em tempo real.
- Um fluxo de trabalho reutilizável para criar um movimento personalizado baseado em fases, como uma reverência.

## Arquitetura da demonstração

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
Para a validação mais rápida, implemente o ambiente, execute o teste rápido de fumaça de 64 ambientes e cinco iterações e, em seguida, inicie a demonstração oficial de teclado ONNX. Você pode concluir o capítulo de movimento personalizado depois.
:::
