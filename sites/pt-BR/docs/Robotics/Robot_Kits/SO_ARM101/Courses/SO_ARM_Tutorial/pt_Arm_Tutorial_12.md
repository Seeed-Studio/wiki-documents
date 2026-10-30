---
description: "Capítulo 12 do curso para iniciantes em SO-ARM Physical AI — conecte e verifique as câmeras frontal e lateral, entenda a sincronização imagem/ação, grave seu primeiro dataset LeRobot com lerobot-record e domine os controles de teclado."
title: Capítulo 12 - Configuração de câmeras e coleta de dados LeRobot
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - câmera
  - dataset
  - gravação
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_12
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/robotics/soarm_physical_ai_course_chapter_12/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Fase 3 · Capítulo 12 · Prática</span>
    <h2>12. Configuração de câmeras e coleta de dados LeRobot</h2>
    <p>
      Capítulo 12 do curso para iniciantes em SO-ARM Physical AI — conecte e verifique as câmeras frontal e lateral, entenda a sincronização imagem/ação, grave seu primeiro dataset LeRobot com lerobot-record e domine os controles de teclado durante a gravação.
    </p>
    <div className="hero-actions">
      <a href="#cameras">Câmeras</a>
      <a href="#sync">Sincronização</a>
      <a href="#record">Gravar</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ No-code · Sem configuração de ambiente</span>
    <p className="sensecraft-banner__title">Pule a configuração — execute o reBot Arm e o LeRobot a partir de um único aplicativo</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics é a plataforma no-code da Seeed para o SO-ARM101, reBot Arm 102 + B601-RS e B601-DM. Conecte os braços, calibre, colete demonstrações, treine e execute inferência a partir de uma interface guiada — sem ambiente Python, sem terminal.</p>
    <ul className="sensecraft-banner__points">
      <li>✅ Fluxo de trabalho guiado em 6 etapas</li>
      <li>✅ Treinamento em nuvem — sem GPU local</li>
      <li>✅ Cliente para Windows / macOS</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">Ir para SenseCraft Robotics ↗</a>
    <a className="sensecraft-banner__link" href="/pt-br/sensecraft_robotics/">Guia de software</a>
  </div>
</div>

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Verificação de segurança antes de executar</strong>
    <p>
      Retire itens de valor e pessoas alheias a até 1 metro do espaço de trabalho. Antes deste capítulo, confirme que o braço está bem fixado e que energia e cabos estão corretos.
    </p>
  </div>
</div>

## 12.1 Configuração de uma câmera vs. duas

<section id="cameras" className="section-card">
  <div className="section-title">
    <span>Layout</span>
    <h2>12.1 Configuração de uma câmera vs. duas</h2>
  </div>

A coleta e o treinamento deste curso exigem duas câmeras e duas vistas. Conforme a posição, os layouts comuns são:

| Layout | Instalação e propósito | Cenários |
|:---|:---|:---|
| **Vista da garras** | Câmera superior cobrindo a área; câmera na garras observando o detalhe do agarre | Operações finas que exigem ver o contato garras-objeto |
| **Vista lateral de apoio** | Câmera superior na frente da mesa; câmera lateral observando a altura do braço e o movimento da garras | Pegar, transportar e colocar |

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/sensecraft-robotics/guide-assets/soarm/03-2-5-eye-to-hand-soarm-en.webp" alt="Layout de câmera lateral de apoio" />
</div>

Este curso usa o **layout de vista lateral de apoio** (frontal + lateral), o mesmo do Capítulo 22 sem código.

</section>

## 12.2 Localizar os nomes de dispositivo das câmeras

<section id="find-cameras" className="section-card">
  <div className="section-title">
    <span>Detecção</span>
    <h2>12.2 Localizar os nomes de dispositivo das câmeras</h2>
  </div>

O índice de uma câmera pode mudar ao reiniciar ou reconectar — comportamento que depende sobretudo do sistema operacional. Antes de cada sessão, detecte as câmeras ligadas:

```bash
lerobot-find-cameras opencv
```

O terminal imprime algo assim:

```text
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

As fotos de cada câmera ficam em `outputs/captured_images` — abra-as para confirmar qual índice é a frontal e qual a lateral.

:::tip
Evite ligar câmeras USB num hub. Conecte direto, de preferência em portas USB 3.0, para garantir banda suficiente.
:::

</section>

## 12.3 Verificar as câmeras durante a teleoperação

<section id="teleop-cameras" className="section-card">
  <div className="section-title">
    <span>Pré-visualização</span>
    <h2>12.3 Verificar as câmeras durante a teleoperação</h2>
  </div>

Antes de gravar, confirme que as duas vistas estão ativas e bem enquadradas teleoperando com exibição ligada:

```bash
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

Os valores de `index_or_path` vêm do último dígito do ID reportado por `lerobot-find-cameras opencv`.

:::tip
`fourcc: "MJPG"` pede quadros comprimidos. Com MJPG, esta configuração suporta 3 câmeras a 1920×1080 @ 30FPS. `YUYV` é sem compressão — reduz a resolução útil e o FPS e pode travar o braço. Não ligue duas câmeras no mesmo hub USB.
:::

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/EUcXlLlOjGE?si=6ncQ7o5ZFLR4PGTU" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## 12.4 Opcional: câmeras de profundidade (RealSense / Orbbec)

<section id="depth-cameras" className="section-card">
  <div className="section-title">
    <span>Opcional</span>
    <h2>12.4 Opcional: câmeras de profundidade (RealSense / Orbbec)</h2>
  </div>

<Tabs defaultValue="realsense">

<TabItem value="realsense" label="RealSense D435i / D405">

As RealSense trazem percepção RGB-D para tarefas de reconhecimento e manipulação próxima. Recomendadas: **D405** (estéreo de curto alcance, 7–50 cm, ideal para mesa) e **D435i** (profundidade + RGB + IMU).

**1. Mude para a ramificação de câmeras** — o suporte a profundidade está em `DepthCameraSupport`:

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
git branch --show-current   # esperado: DepthCameraSupport
```

**2. Instale o extra RealSense:**

```bash
pip install -e ".[realsense]"
```

**3. Permissões e detecção:**

```bash
chmod a+rw /dev/bus/usb/*/*
lerobot-find-cameras realsense
```

**4. Exemplo** — teleoperação com color+profundidade de uma D435i (use o número de série detectado em `serial_number_or_name`):

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    d435i_color: {
      type: realsense_d435i_color,
      serial_number_or_name: "419522072950",
      width: 640, height: 480, fps: 30,
      color_mode: rgb, color_stream_format: rgb8,
      rotation: 0, warmup_s: 1
    },
    d435i_depth: {
      type: realsense_d435i_depth,
      serial_number_or_name: "419522072950",
      width: 640, height: 480, fps: 30,
      max_depth_m: 2.0, depth_alpha: 0.2,
      rotation: 0, warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

**Notas de parâmetros:** `depth_alpha` escala a imagem de profundidade (comece em 0.2); com 3+ câmeras de profundidade, reduza `fps` a 15; mantenha 640×480 por estabilidade.

</TabItem>

<TabItem value="orbbec" label="Orbbec Gemini 2 / Gemini 336">

A [Orbbec Gemini 2](https://www.seeedstudio.com/Orbbec-Gemini-2-3D-Camera-p-6464.html) é uma RGB-D de alto desempenho com fluxos RGB e profundidade sincronizados; a Gemini 336 melhora a profundidade em áreas refletivas e escuras.

**1. Mude para a ramificação de câmeras:**

```bash
git checkout DepthCameraSupport
git pull origin DepthCameraSupport
```

**2. Instale o extra Orbbec:**

```bash
pip install -e ".[orbbec]"
```

**3. Permissões e cache USBFS** (os 16MB padrão são pouco para fluxos de profundidade):

```bash
chmod a+rw /dev/bus/usb/*/*
cat /sys/module/usbcore/parameters/usbfs_memory_mb                 # ver
sudo sh -c 'echo 128> /sys/module/usbcore/parameters/usbfs_memory_mb'  # subir para 128MB
```

**4. Detecte as câmeras** e anote o número de série:

```bash
lerobot-find-cameras orbbec
```

**5. Exemplo** — teleoperação com uma Orbbec color+profundidade:

```bash
lerobot-teleoperate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_follower_arm \
  --robot.cameras='{
    orbbec_color: {
      type: orbbec_color,
      serial_number_or_name: "CP9JA530003A",
      width: 640, height: 480, fps: 30,
      color_mode: rgb, rotation: 0, warmup_s: 1
    },
    orbbec_depth: {
      type: orbbec_depth,
      serial_number_or_name: "CP9JA530003A",
      width: 640, height: 400, fps: 30,
      depth_alpha: 0.2, rotation: 0, warmup_s: 5
    }
  }' \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=my_awesome_leader_arm \
  --display_data=true
```

:::tip
Uma Orbbec ocupa 3 números consecutivos de `/dev/video`. Ao misturá-la com câmeras USB comuns, ligue a Orbbec primeiro e as comuns por último para os índices delas ficarem no fim. Se os quadros expirarem (`Timed out waiting for frame ...`), reconecte a câmera.
:::

</TabItem>

</Tabs>

</section>

## 12.5 Sincronização de imagem e ação

<section id="sync" className="section-card">
  <div className="section-title">
    <span>Sincronização</span>
    <h2>12.5 Sincronização de imagem e ação</h2>
  </div>

Ao gravar, o LeRobot executa um ciclo por quadro:

- ler as duas câmeras (frontal, lateral);
- ler as juntas do líder → ações;
- ler as juntas do seguidor → estado;
- carimbar e anexar uma linha.

Como as câmeras entregam no próprio ritmo, o ciclo **alinha por carimbo de tempo**, não por desejo: cada linha do dataset emparelha as imagens mais frescas com os dados de juntas do mesmo instante. É por isso que o `--dataset.fps` não pode superar o que suas câmeras entregam com estabilidade (30 fps a 640×480 MJPG é a escolha segura).

</section>

## 12.6 Gravar seu primeiro dataset

<section id="record" className="section-card">
  <div className="section-title">
    <span>Gravação</span>
    <h2>12.6 Gravar seu primeiro dataset</h2>
  </div>

Grave localmente a tarefa do Capítulo 11 (A para B):

```bash
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeedstudio123/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the black cube" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30
```

O `repo_id` é personalizável; com `push_to_hub=false` o dataset fica em `~/.cache/huggingface/lerobot/seeedstudio123/test/`.

### Parâmetros de gravação

| Parâmetro | Descrição | Padrão |
|-----------|-------------|---------|
| `--dataset.episode_time_s` | Duração por episódio (segundos) | 60 |
| `--dataset.reset_time_s` | Tempo de reset do ambiente após cada episódio (segundos) | 60 |
| `--dataset.num_episodes` | Total de episódios a gravar | 50 |

### Controles de teclado durante a gravação

| Tecla | Ação |
|-----|--------|
| → (seta à direita) | Encerrar cedo o episódio/reset atual; passar ao próximo |
| ← (seta à esquerda) | Cancelar o episódio atual; regravá-lo |
| ESC | Parar a sessão imediatamente, codificar vídeos e salvar o dataset |

:::tip
Se os atalhos não responderem, confira se `$DISPLAY` está definido, ou rebaixe o pynput: `pip install pynput==1.6.8`
:::

Durante a gravação verá linhas como:

```text
INFO ol_robot.py:219 dt:33.34 (30.0hz) dtRlead: 5.06 (197.5hz) dtWfoll: 0.25 (3963.7hz) dtRfoll: 6.22 (160.7hz) dtRlaptop: 32.57 (30.7hz) dtRphone: 33.84 (29.5hz)
```

Um `dt` perto de 33 ms indica que o ciclo sustenta 30 Hz — sessão saudável.

### Checkpoints e retomada

- Checkpoints são criados automaticamente durante a gravação.
- Para retomar após uma interrupção, rode o mesmo comando com `--resume=true`.
- **Nesse caso `--dataset.num_episodes` conta os episódios DESTA sessão**, não o total — 15 gravados de 50 → ponha 35.
- Para recomeçar do zero, apague o diretório do dataset.

### Gravar no Hugging Face Hub (opcional)

Entre uma vez com um token de escrita das [configurações da HF](https://huggingface.co/settings/tokens):

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
```

Depois use `--dataset.repo_id=${HF_USER}/record-test` e `--dataset.push_to_hub=true` para publicá-lo.

<div className="video-container">
<iframe
  loading="lazy" width="900" height="600" src="https://www.youtube.com/embed/wc-qh7UFkuQ?si=-eDB73KgUksyJXa-" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>

</section>

## 12.7 Dicas para coletar bons dados

<section id="tips" className="section-card">
  <div className="section-title">
    <span>Qualidade</span>
    <h2>12.7 Dicas para coletar bons dados</h2>
  </div>

- **Tarefa**: pegar objetos nos pontos marcados e colocá-los em B (a cruz do Capítulo 11).
- **Escala**: 50 episódios ou mais (10 por ponto).
- **Consistência**:
  - Câmeras fixas;
  - Comportamento de agarre idêntico;
  - Objeto visível nas duas vistas.
- **Progressão**: domine o agarre confiável antes de variar (novas posições, técnicas, câmeras). Evite subir a complexidade de supetão.
- **Ambiente**: posições, ângulos e luz estáveis; sem fundos instáveis ou gente atravessando — grandes diferenças entre coleta e implantação derrubam as políticas.

💡 **Regra de bolso**: você deveria conseguir fazer a tarefa olhando só as imagens das câmeras. Se você não consegue, o modelo também não.

Defina `--dataset.num_episodes` alto o bastante antes de começar e não pare no meio sem necessidade — as estatísticas (média e variância) são calculadas ao final e o treinamento precisa delas.

</section>

</div>
