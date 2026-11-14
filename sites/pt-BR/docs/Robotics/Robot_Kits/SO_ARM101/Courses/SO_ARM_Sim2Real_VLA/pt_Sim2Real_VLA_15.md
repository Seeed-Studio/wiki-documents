---
description: "Capítulo 15 do curso Sim-to-Real VLA do SO-ARM101 — conectar o hardware do robô: o seguidor SO-101 por USB serial ao Jetson, as duas câmeras, a calibração e o checklist de prontidão."
title: Capítulo 15 - Conectar o hardware do robô
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Jetson
  - Hardware
  - USB serial
  - Curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_15
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_sim2real_vla_chapter_15/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Módulo 4 · Capítulo 15 · Deploy on Jetson</span>
    <h2>15. Conectar o hardware do robô</h2>
    <p>
      Conecte o seguidor SO-101 ao Jetson via USB serial, ligue as duas
      câmeras e traga a calibração — a partir daí o dispositivo de borda
      não precisa mais da estação em runtime.
    </p>
    <div className="hero-actions">
      <a href="#requirements">Requisitos</a>
      <a href="#connect">Conexão</a>
      <a href="#serial">Porta serial</a>
      <a href="#cameras">Câmeras</a>
      <a href="#checklist">Checklist</a>
    </div>
  </div>
</section>

## 15.1 Requisitos de hardware

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>O que você precisa</span>
    <h2>15.1 Requisitos de hardware</h2>
  </div>

- Jetson AGX Orin ou AGX Thor com JetPack 7.2 (capítulo 14);
- seguidor SO-ARM101 — USB serial, **sem adaptador CAN**;
- duas câmeras USB (punho + externa, como no capítulo 8);
- um hub USB 3.0 alimentado — o Thor tem só duas portas Type-A, insuficientes
  para seguidor + duas câmeras;
- a fonte de 12 V do seguidor e o cabo USB de dados.

:::note O líder não é necessário na borda
O braço líder serve apenas para coleta de dados. Um deploy Jetson precisa
do seguidor, das câmeras e da política — nada mais.
:::

</section>

## 15.2 Conectar os dispositivos

<section id="connect" className="section-card">
  <div className="section-title">
    <span>A ordem importa</span>
    <h2>15.2 Conectar os dispositivos</h2>
  </div>

1. Deixe a alimentação de 12 V do seguidor desligada.
2. Conecte a porta USB serial do seguidor ao Jetson (direto ou pelo hub
   alimentado).
3. Conecte as câmeras de punho e externa pelo hub alimentado.
4. Copie o diretório de calibração da estação (veja abaixo).
5. Ligue a alimentação do seguidor por último.

:::tip Copie também a calibração, não só o código
O seguidor reproduz a calibração escrita para o ID exato dele. Copie a
calibração da estação para o mesmo caminho no Jetson:

```bash
# na estação
rsync -av ~/.cache/huggingface/lerobot/calibration/ \
  jetson:/home/<jetson-user>/.cache/huggingface/lerobot/calibration/
```
:::

</section>

## 15.3 Identificar a porta serial

<section id="serial" className="section-card">
  <div className="section-title">
    <span>USB serial</span>
    <h2>15.3 Identificar a porta serial</h2>
  </div>

Energize o seguidor e confira o nó de dispositivo:

```bash
ls /dev/ttyACM*
```

Confirme a porta com o localizador do LeRobot (desconecte e reconecte
quando solicitado):

```bash
lerobot-find-port
```

Exporte as variáveis usadas nos próximos comandos — os mesmos nomes da
estação:

```bash
export ROBOT_PORT=/dev/ttyACM0
export ROBOT_ID=so101_follower
```

Se a porta não abrir, corrija as permissões no Jetson:

```bash
sudo usermod -aG dialout $USER   # encerre e reabra a sessão
sudo chmod 666 /dev/ttyACM*
```

</section>

## 15.4 Identificar as câmeras

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>Dois nós de vídeo</span>
    <h2>15.4 Identificar as câmeras</h2>
  </div>

```bash
ls /dev/video*
lerobot-find-cameras opencv
```

Mapeie as prévias (os nomes contêm o índice) e exporte — as mesmas
variáveis do capítulo 8:

```bash
export CAMERA_GRIPPER=4
export CAMERA_EXTERNAL=6
```

Índices podem mudar após reiniciar ou reconectar; refaça a checagem antes
de cada sessão de deploy.

</section>

## 15.5 Checklist de prontidão de hardware

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Antes do capítulo 16</span>
    <h2>15.5 Checklist de prontidão de hardware</h2>
  </div>

- [ ] Jetson no JetPack/L4T validado, inicializando de forma confiável;
- [ ] Seguidor presente no nó `/dev/ttyACM*` esperado;
- [ ] Calibração em `~/.cache/huggingface/lerobot/calibration/`;
- [ ] As duas câmeras enumeram e pré-visualizam a 640×480 e 30 FPS;
- [ ] `ROBOT_PORT`, `ROBOT_ID`, `CAMERA_GRIPPER`, `CAMERA_EXTERNAL`
      exportados;
- [ ] Hub alimentado em uso; nenhum dispositivo cai sob carga.

Próximo: [Capítulo 16 — Configurar o ambiente GR00T](pt_Sim2Real_VLA_16.md).

</section>

</div>