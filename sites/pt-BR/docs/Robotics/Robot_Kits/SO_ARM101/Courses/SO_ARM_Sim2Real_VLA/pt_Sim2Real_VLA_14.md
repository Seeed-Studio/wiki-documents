---
description: "Capítulo 14 do curso Sim-to-Real VLA do SO-ARM101 — preparar seu Jetson: escolha o alvo, instale o SDK Manager, entre em force recovery, faça flash do JetPack 7.2 e verifique a placa."
title: Capítulo 14 - Preparar seu Jetson
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - AGX Orin
  - AGX Thor
  - JetPack
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_14
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_14/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 4 · Capítulo 14 · Deploy on Jetson</span>
    <h2>14. Preparar seu Jetson</h2>
    <p>
      Prepare a plataforma Jetson para o deploy de GR00T N1.7 com TensorRT:
      escolha o alvo, faça flash do JetPack 7.2 e verifique a placa antes
      de conectar o robô.
    </p>
    <div className="hero-actions">
      <a href="#targets">Alvos</a>
      <a href="#host">PC host</a>
      <a href="#recovery">Force recovery</a>
      <a href="#flash">Flash</a>
      <a href="#verify">Verificar</a>
    </div>
  </div>
</section>

## 14.1 Alvos suportados

<section id="targets" className="section-card">
  <div className="section-title">
    <span>Orin ou Thor</span>
    <h2>14.1 Alvos suportados</h2>
  </div>

Os alvos validados para o pipeline SO-ARM101 são:

| Alvo | Caminho de software validado | Ambiente usado depois |
|---|---|---|
| Jetson AGX Orin | JetPack 7.2 / L4T R39.2 | `.venv-jp72` com `scripts/deployment/orin_jp72/run_full_trt.sh` |
| Jetson AGX Thor | JetPack 7.2 / L4T R39.2 | `.venv` com `scripts/activate_thor.sh` |

:::caution Engines são específicas do alvo
As engines TensorRT dependem da arquitetura de GPU. Orin e Thor podem
compartilhar o mesmo checkpoint e dataset compatíveis, mas cada alvo deve
construir seu próprio pacote de engines (capítulo 18).
:::

</section>

## 14.2 Preparar o computador host

<section id="host" className="section-card">
  <div className="section-title">
    <span>Host Ubuntu</span>
    <h2>14.2 Preparar o computador host</h2>
  </div>

Prepare um host Ubuntu com:

- pelo menos 25 GB livres para o SDK Manager e pacotes do JetPack;
- um cabo USB Type-C de dados confiável;
- conexão de rede estável;
- acesso de administrador.

Instale o NVIDIA SDK Manager da página oficial:
[https://developer.nvidia.com/sdk-manager](https://developer.nvidia.com/sdk-manager).

</section>

## 14.3 Entrar em modo force recovery

<section id="recovery" className="section-card">
  <div className="section-title">
    <span>Dança dos botões</span>
    <h2>14.3 Entrar em modo force recovery</h2>
  </div>

### Jetson AGX Thor Developer Kit

1. Desligue o Jetson.
2. Conecte a porta USB Type-C de recuperação ao host.
3. Segure o botão Force Recovery.
4. Pressione e solte o Reset sem soltar o Force Recovery.
5. Solte o Force Recovery.
6. Confirme que o SDK Manager detecta o alvo.

| Marca | Botão |
|---|---|
| 11 | Power |
| 12 | Force Recovery |
| 13 | Reset |

### Jetson AGX Orin Developer Kit

O kit Orin precisa estar **ligado** antes deste procedimento; use o botão
2 (Force Recovery) e o 3 (Reset):

1. Conecte a porta USB Type-C 10 — ao lado do header de 40 pinos — ao
   host Ubuntu.
2. Conecte a alimentação e confirme que o kit está ligado.
3. Segure o botão 2 (Force Recovery).
4. Sem soltar o Force Recovery, segure o botão 3 (Reset).
5. Solte os dois botões.
6. Confirme que o SDK Manager detecta o alvo Orin.

| Marca | Botão ou porta |
|---|---|
| 1 | Botão de energia |
| 2 | Botão Force Recovery |
| 3 | Botão Reset |
| 10 | Porta USB Type-C de flash |

### Alternativa: recovery com o kit desligado

1. Confirme que o kit está desligado.
2. Segure o botão 2 (Force Recovery).
3. Conecte a alimentação. Se o LED de energia não acender, pressione e
   solte o botão 1 (Power).
4. Solte o Force Recovery.
5. Confirme a detecção no SDK Manager.

Referência: [Guia do usuário do Jetson AGX Orin — Force Recovery Mode](https://docs.nvidia.com/jetson/agx-orin-devkit/user-guide/latest/setup_bsp.html#hardware-setup).

</section>

## 14.4 Instalar o JetPack

<section id="flash" className="section-card">
  <div className="section-title">
    <span>SDK Manager</span>
    <h2>14.4 Instalar o JetPack</h2>
  </div>

No SDK Manager:

1. Selecione **Jetson AGX Thor / Jetson AGX Orin** como hardware-alvo.
2. Selecione **JetPack 7.2**.
3. Use **Direct Flash** exceto se seu deploy exigir fluxo ISO.
4. Conclua a instalação do alvo e a configuração inicial do Ubuntu.

Siga o assistente até **Installation completed successfully** antes de
desconectar o cabo de recuperação.

</section>

## 14.5 Verificar o Jetson

<section id="verify" className="section-card">
  <div className="section-title">
    <span>No dispositivo</span>
    <h2>14.5 Verificar o Jetson</h2>
  </div>

Rode estes comandos no alvo:

```bash
tr -d '\0' < /proc/device-tree/model
cat /etc/nv_tegra_release
df -h /
free -h
```

Confirme que:

- o modelo detectado corresponde ao alvo Orin ou Thor pretendido;
- o sistema informa o release JetPack/L4T esperado;
- o NVMe ou o sistema raiz tem espaço para checkpoint, backbone, ONNX e
  engines TensorRT;
- o sistema inicia normalmente após reiniciar.

Reserve cerca de 45–50 GB para um fluxo TensorRT local completo.

Próximo: [Capítulo 15 — Conectar o hardware do robô](pt_Sim2Real_VLA_15.md).

</section>

</div>