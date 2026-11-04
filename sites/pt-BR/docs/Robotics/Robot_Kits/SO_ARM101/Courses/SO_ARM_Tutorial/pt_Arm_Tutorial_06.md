---
description: "Capítulo 6 do curso para iniciantes em SO-ARM Physical AI — imprima as peças em 3D, cabear e alimente o barramento de servos, grave IDs e baud rates com lerobot-setup-motors, e depois monte os braços líder e seguidor passo a passo."
title: Capítulo 6 - Configurar motores e montar os braços
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - montagem
  - servo
  - calibração
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_6
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_6/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 2 · Capítulo 6 · Prática</span>
    <h2>6. Configurar motores e montar os braços</h2>
    <p>
      Capítulo 6 do curso para iniciantes em SO-ARM Physical AI — imprima as peças em 3D, cabear e alimente o barramento de servos, grave IDs e baud rates com lerobot-setup-motors, e depois monte os braços líder e seguidor passo a passo.
    </p>
    <div className="hero-actions">
      <a href="#printing">Impressão 3D</a>
      <a href="#configure">Configurar motores</a>
      <a href="#assembly">Montagem</a>
    </div>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Aviso de segurança: limpe o espaço de trabalho do braço antes de rodar programas de movimento</strong>
    <p>
      Antes de executar qualquer programa capaz de mover o braço, retire itens de valor, objetos frágeis, ferramentas, cabos e itens alheios a até 1 metro do espaço de trabalho. Durante depuração e operação, mantenha as pessoas afastadas do alcance do braço.
    </p>
    <ul>
      <li>Não toque em juntas, motores, elos, garras ou ferramentas do extremo com o braço energizado.</li>
      <li>Antes de configurar servos, calibrar, teleoperar, gravar dados, reproduzir ou avaliar políticas, confirme que o braço está bem fixado.</li>
      <li>Mantenha pelo menos 1 metro de distância e certifique-se de que os presentes saibam que o braço pode se mover de repente.</li>
      <li>Em caso de movimento anormal, ruído, tremor, cabos soltos, mau contato de energia ou perda de comunicação, interrompa o programa imediatamente e desligue antes de inspecionar.</li>
      <li>Desligue antes de conectar ou desconectar cabos de servo, USB, conectores de energia ou cabos da placa.</li>
    </ul>
  </div>
</div>

:::tip
Se você comprou um braço robótico pré-montado, pule este capítulo e vá direto ao Capítulo 10 (calibração do braço completo).
:::

## 6.1 Guia de impressão 3D (versão kit)

<section id="printing" className="section-card">
  <div className="section-title">
    <span>Impressão 3D</span>
    <h2>6.1 Guia de impressão 3D (versão kit)</h2>
  </div>

Se comprou a versão em kit (servos e hardware sem peças impressas), imprima primeiro a estrutura. As peças saem em impressoras FDM comuns:

- **Material:** PLA+
- **Bico / altura de camada:** bico de 0.4mm com camada de 0.2mm, ou bico de 0.6mm com camada de 0.4mm
- **Preenchimento:** 15%
- **Suportes:** em toda parte, ignorando inclinações acima de 45°; sem suportes nos furos de parafuso horizontais

Todas as peças do Leader e do Follower estão empacotadas em um único arquivo STL, já orientadas para minimizar os suportes:

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <a href="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/soarm101.stl" target="_blank" rel="noopener noreferrer"><strong>Baixar o arquivo de impressão do SO-ARM101 (soarm101.stl)</strong></a>
</div>

**Opcional:** garra macia (dedos de TPU) ou inserto do suporte de câmera — arquivos no repositório [soarm_soft_gripper](https://github.com/xiehuangbao888/soarm_soft_gripper.git).

</section>

## 6.2 Planejar os motores: etiquetas, IDs e relações

<section id="plan-motors" className="section-card">
  <div className="section-title">
    <span>Preparação</span>
    <h2>6.2 Planejar os motores: etiquetas, IDs e relações</h2>
  </div>

Designe um adaptador de barramento e 6 motores para o braço líder, e outro adaptador e 6 motores para o seguidor. Etiquete cada motor **F1–F6** (juntas 1–6 do seguidor) ou **L1–L6** (juntas 1–6 do líder) — escrever na carcaça do servo poupa horas de depuração.

| Modelo de servo | Relação | Juntas |
| :--- | :--- | :--- |
| ST-3215-C044 (7.4V) | 1:191 | L1 |
| ST-3215-C001 (7.4V) | 1:345 | L2 |
| ST-3215-C044 (7.4V) | 1:191 | L3 |
| ST-3215-C046 (7.4V) | 1:147 | L4–L6 |
| ST-3215-C001 (7.4V) / C018 (12V) / C047 (12V) | 1:345 | F1–F6 |

:::danger
Alimente o barramento com a fonte que corresponde aos motores: 5V para os STS3215 de 7.4V e 12V para os de 12V. O braço líder sempre usa motores de 7.4V — confira o adaptador antes de plugá-lo se tiver ambos os tipos, senão você pode queimar os motores! O cabo USB não fornece energia: a fonte e o USB precisam estar ambos conectados.
:::

<div className="image-frame" style={{margin: '0.5rem 0'}}>
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/all_motos.png" alt="Todos os motores ligados ao barramento" />
</div>

:::tip
O processo de calibração e inicialização de servos do SO-ARM101 é igual ao do SO-ARM100 em método e código — mas as relações das três primeiras juntas do líder do SO-ARM101 diferem das do SO-ARM100, então distinga e configure com cuidado.
:::

</section>

## 6.3 Localizar as portas USB

<section id="find-ports" className="section-card">
  <div className="section-title">
    <span>Portas</span>
    <h2>6.3 Localizar as portas USB</h2>
  </div>

Rode o utilitário para descobrir qual porta serial cada placa ocupa:

```bash
lerobot-find-port
```

Exemplo de saída:

```text
Finding all available ports for the MotorBus.
['/dev/ttyACM0', '/dev/ttyACM1']
Remove the usb cable from your MotorsBus and press Enter when done.

[...Disconnect corresponding leader or follower arm and press Enter...]

The port of this MotorsBus is /dev/ttyACM1
Reconnect the USB cable.
```

Dicas que poupam tempo:

- Desconecte mesmo o USB quando pedido, senão a interface não é detectada.
- No Linux e Jetson, o primeiro dispositivo plugado mapeia para `ttyACM0` (normalmente o seguidor), o segundo para `ttyACM1` (líder).
- Se o LeRobot depois reclamar `Could not connect on port '/dev/ttyACM0'`, conceda permissões e confira:

```bash
sudo chmod 666 /dev/ttyACM*
```

</section>

## 6.4 Configurar IDs e baud rates

<section id="configure" className="section-card">
  <div className="section-title">
    <span>Configuração</span>
    <h2>6.4 Configurar IDs e baud rates</h2>
  </div>

A ferramenta grava o ID e o baud rate corretos em cada servo, **um servo por vez** (o Capítulo 4 explicou o porquê: todos compartilham o barramento e um ID duplicado seria regravado em todos).

Use estas fotos de referência para a postura padrão de cabeamento de cada junta antes de calibrar:

**Imagens de referência para calibração dos servos do líder**

| **Junta 6** | **Junta 5** | **Junta 4** | **Junta 3** | **Junta 2** | **Junta 1** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L4.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L3.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L2.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_L1.jpg) |

**Imagens de referência para calibração dos servos do seguidor**

| **Junta 6** | **Junta 5** | **Junta 4** | **Junta 3** | **Junta 2** | **Junta 1** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F5.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F4.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F3.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F2.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/cal_F1.jpg) |

**Configure os servos do seguidor.** Ligue o cabo USB e a fonte na placa do seguidor e execute:

```bash
lerobot-setup-motors \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0  # <- cole aqui a porta do passo anterior
```

A ferramenta guia junta por junta:

```text
Connect the controller board to the 'gripper' motor only and press enter.
```

Ligue somente o motor da garras (F6) na placa, pressione **Enter**, e o script grava o ID e o baud rate dele automaticamente:

```text
'gripper' motor id set to 6
```

Em seguida:

```text
Connect the controller board to the 'wrist_roll' motor only and press enter.
```

Pode deixar o cabo de 3 fios anterior conectado ao motor da garras na outra ponta; coloque um cabo novo no motor de rotação do punho e conecte só esse à placa. Repita para cada motor conforme instruído — sempre exatamente um conectado.

:::tip
Confira o cabeamento antes de cada Enter — o cabo de alimentação costuma se soltar enquanto você manuseia a placa.
:::

Quando o script terminar, encadeie os motores: plugue o cabo de 3 fios de cada motor no seguinte, e o do primeiro motor (rotação do ombro, ID 1) na placa, que já pode ser fixada na base do braço.

**Configure os servos do líder** do mesmo jeito:

```bash
lerobot-setup-motors \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM0  # <- cole aqui a porta do passo anterior
```

:::tip
Usuários de SO100: os códigos de SO100 e SO101 são compatíveis — usem os mesmos tipos `so101_leader` / `so101_follower` e parâmetros.
:::

</section>

## 6.5 Montagem

<section id="assembly" className="section-card">
  <div className="section-title">
    <span>Montagem</span>
    <h2>6.5 Montagem</h2>
  </div>

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/hbW6eFYkHTg?si=jKdpTyI8wRC-iHxO" title="youtube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

:::tip
A montagem de dupla braço do SO-ARM101 é igual à do SO-ARM100 — as únicas diferenças são os clipes de cabo do SO-ARM101 e as relações diferentes dos servos do líder. Tanto SO100 quanto SO101 podem ser montados com os passos abaixo. Antes de montar, confira modelos de motor, relações e voltagem contra a tabela da seção 6.2.
:::

**Montar o braço líder**

| **Passo 1** | **Passo 2** | **Passo 3** | **Passo 4** | **Passo 5** | **Passo 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L3.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L4.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L5.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L6.jpg) |
| **Passo 7** | **Passo 8** | **Passo 9** | **Passo 10** | **Passo 11** | **Passo 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L7.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L8.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L9.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L10.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L11.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L12.jpg) |
| **Passo 13** | **Passo 14** | **Passo 15** | **Passo 16** | **Passo 17** | **Passo 18** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L15.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L16.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L18.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L21.jpg) |
| **Passo 19** | **Passo 20** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L22.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_L23.jpg) |

**Montar o braço seguidor**

:::tip
A montagem do seguidor é em geral igual à do líder. A única diferença é a instalação do efetor final (garras e punho) depois do passo 12.
:::

| **Passo 1** | **Passo 2** | **Passo 3** | **Passo 4** | **Passo 5** | **Passo 6** |
|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F1.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F2.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F3.5.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F4.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F5.jpg) |
| **Passo 7** | **Passo 8** | **Passo 9** | **Passo 10** | **Passo 11** | **Passo 12** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F6.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F7.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F8.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F9.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F11.jpg) | ![fig6](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F12.jpg) |
| **Passo 13** | **Passo 14** | **Passo 15** | **Passo 16** | **Passo 17** |
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F13.jpg) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F14.jpg) | ![fig3](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F15.jpg) | ![fig4](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F16.jpg) | ![fig5](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/so101/install_F17.jpg) |

</section>

## 6.6 Checklist antes de seguir

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>Checklist</span>
    <h2>6.6 Checklist antes de seguir</h2>
  </div>

- Os dois braços montados; cada servo responde com o ID esperado (verifique com a ferramenta do Capítulo 7);
- Tensões conformes com a edição (Standard: ambos 5V; Pro: líder 5V, seguidor 12V);
- As duas placas aparecem como `/dev/ttyACM0` e `/dev/ttyACM1`;
- Cabos bem encaixados, sem dobras agudas e fora do alcance das juntas.

Se algum servo não aparece, o ID parece duplicado ou o neutro está errado, a ferramenta de depuração do próximo capítulo resolve exatamente esses problemas.

</section>

</div>
