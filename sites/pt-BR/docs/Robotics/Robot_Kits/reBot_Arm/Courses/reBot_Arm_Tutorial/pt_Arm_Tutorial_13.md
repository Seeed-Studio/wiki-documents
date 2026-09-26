---
description: "Capítulo 13 do Curso para Iniciantes em IA Física da Seeed — configuração de câmera e coleta de dados com LeRobot: configuração com câmera única vs dupla, encontrando nomes de dispositivos de câmera, sincronização de imagem/ação, criação de dataset, gravação e regravação, visualização e complementação ou exclusão de dados."
title: Capítulo 13 - Configuração de Câmera e Coleta de Dados com LeRobot
keywords:
  - reBot
  - LeRobot
  - Camera
  - Data Collection
  - Dataset
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_13
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/pt-br/rebot_physical_ai_course_chapter_13/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Estágio 3 · Capítulo 13 · Prática</span>
    <h2>13. Configuração de Câmera e Coleta de Dados com LeRobot</h2>
    <p>
      Capítulo 13 do Curso para Iniciantes em IA Física da Seeed — configuração com câmera única vs dupla,
      encontrando nomes de dispositivos de câmera, sincronização de imagem/ação, criação de um dataset, gravação e
      regravação, visualização e complementação ou exclusão de dados.
    </p>
    <div className="hero-actions">
      <a href="#camera-setup">Câmeras</a>
      <a href="#sync">Sincronização</a>
      <a href="#create-dataset">Dataset</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>Neste capítulo</strong>
    <span>13.1 Configuração com Câmera Única vs Dupla</span>
    <span>13.2 Câmeras Superior e de Pulso</span>
    <span>13.3 Encontrando Nomes de Dispositivos de Câmera</span>
    <span>13.4 Sincronização de Imagem e Ação</span>
    <span>13.5 Criar Dataset do LeRobot</span>
    <span>13.6 Gravar, Pausar e Regravar Episódios</span>
    <span>13.7 Visualizar e Reproduzir um Dataset</span>
    <span>13.8 Complementar e Excluir Dados</span>
  </div>
</section>

<RebotCourseNav />

## 13.1 Configuração com Câmera Única vs Dupla

<section id="camera-setup" className="section-card">
  <div className="section-title">
    <span>Configuração</span>
    <h2>13.1 Configuração com Câmera Única vs Dupla</h2>
  </div>

- **Configuração com câmera única:** apenas a câmera superior conectada. Boa para uma primeira execução do pipeline e verificação do ambiente — uma câmera a menos significa uma variável a menos na depuração.
- **Configuração com duas câmeras** (trilha principal do curso, para coleta formal): superior + pulso; o modelo ACT também usa por padrão dois fluxos de entrada. Você também pode escolher superior + vista lateral.

Três ou quatro câmeras também podem ser usadas para treinamento e coleta. O próprio ACT não tem limite rígido de quantidade de câmeras: cada fluxo de imagem passa por um backbone ResNet18 compartilhado para produzir uma sequência de tokens de características, que é concatenada no codificador Transformer. O artigo original do ACT (ALOHA dual-arm) usou 4 câmeras (2 superiores + 2 de pulso).

- **Custo:** cada câmera adicional aumenta aproximadamente de forma linear a VRAM e o custo computacional, e também aumenta a necessidade de dados (mais pontos de vista significam mais coisas para aprender); cada fluxo deve manter sincronização e posicionamento fixo.

</section>

## 13.2 Câmeras Superior e de Pulso

<section id="camera-roles" className="section-card">
  <div className="section-title">
    <span>Câmeras</span>
    <h2>13.2 Câmeras Superior e de Pulso</h2>
  </div>

- **Câmera superior (frontal):** fixa em um suporte com vista de todo o espaço de trabalho; informa ao modelo "onde está o alvo e o estado geral do braço".
- **Câmera de pulso (pulso):** montada na extremidade do braço, seguindo o gripper; informa ao modelo "a posição relativa entre o gripper e o alvo, e se deve fechar".

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-01.png" alt="Câmeras superior e de pulso" />
</div>

</section>

## 13.3 Encontrando Nomes de Dispositivos de Câmera

<section id="camera-names" className="section-card">
  <div className="section-title">
    <span>Dispositivos</span>
    <h2>13.3 Encontrando Nomes de Dispositivos de Câmera</h2>
  </div>

Para verificar os índices das câmeras, primeiro execute:

```bash
lerobot-find-cameras opencv
```

Você verá `Id: 0`, onde 0 é o índice da câmera.

```text
--- Detected Cameras ---
Camera #0:
  Name: OpenCV Camera @ 0
  Type: OpenCV
  Id: 0
  Backend api: AVFOUNDATION
  Default stream profile:
    Format: 16.0
    Width: 1920
    Height: 1080
    Fps: 15.0
--------------------
(more cameras ...)
```

Ele lista o nome, o ID e a resolução padrão de cada câmera. Você pode encontrar `~/rebot_lerobot/outputs/captured_images/` no diretório para visualizar as imagens capturadas por cada câmera, verificando se o posicionamento das câmeras está correto e adequado.

Observe também: se estiver usando um laptop, a câmera embutida será escaneada; você precisará desconectar/conectar novamente para encontrar os índices corretos das câmeras superior e de pulso. A câmera embutida do laptop geralmente é o índice 0.

- **A ordem de conexão altera os índices.** Hoje a câmera superior é 0; amanhã, após reconectar, pode mudar. Gaste 10 segundos reexecutando `lerobot-find-cameras` antes de cada sessão de gravação para confirmar.
- **Câmeras USB devem ser conectadas diretamente ao computador, não por um dock.** Contenção de largura de banda em hubs passivos se manifesta diretamente como imagens ilegíveis ou quadros perdidos; idealmente, as duas câmeras devem ser conectadas a controladores USB diferentes.

</section>

## 13.4 Sincronização de Imagem e Ação

<section id="sync" className="section-card">
  <div className="section-title">
    <span>Sincronização</span>
    <h2>13.4 Sincronização de Imagem e Ação</h2>
  </div>

### Câmera Única

**Versão RS:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**Versão DM:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

Se você tiver mais câmeras, pode adicioná-las alterando o parâmetro `--robot.cameras`. Observe o formato `index_or_path`, que é determinado pelo último dígito do ID da câmera exibido pelo comando `python -m lerobot.find_cameras opencv`.

### Duas Câmeras

**Versão RS:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

**Versão DM:**

```bash
lerobot-teleoperate \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true
```

Você pode ver que esta é a imagem de dentro da caixa de coleta de dados:

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-02.png" alt="Fluxo de câmera de dentro da caixa de coleta" />
</div>

Parâmetros recomendados: **640 × 480 @ 30 fps, `fourcc: "MJPG"`**. Cada um dos três parâmetros é importante:

- **Resolução 640×480:** um equilíbrio entre clareza e desempenho em tempo real. Dobrar a resolução quadruplica a largura de banda USB e o overhead de armazenamento, enquanto a entrada do modelo já redimensiona as imagens de qualquer forma — benefício limitado.
- **FPS 30:** corresponde ao FPS de coleta. Se o FPS da câmera for menor, a gravação reutilizará repetidamente quadros antigos.
- **`fourcc: "MJPG"`:** a imagem é comprimida antes da transmissão, reduzindo a pressão de largura de banda USB em uma ordem de grandeza. Você pode, é claro, tentar imagens no formato `YUYV`, mas isso reduzirá a resolução e o FPS, causando engasgos no braço. Atualmente o formato `MJPG` suporta 3 câmeras em resolução 1920×1080 mantendo 30 FPS.

</section>

## 13.5 Criar Dataset do LeRobot

<section id="create-dataset" className="section-card">
  <div className="section-title">
    <span>Dataset</span>
    <h2>13.5 Criar Dataset do LeRobot</h2>
  </div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-13/ch13-03.png" alt="Criar dataset do LeRobot" />
</div>

Antes de executar o comando abaixo, esteja pronto para gravar dados; haverá um aviso sonoro ao entrar na fase de gravação. Se não houver, verifique os avisos no terminal para ver se iniciou.

**Versão RS:**

```bash
lerobot-record \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.id=follower1 \
    --robot.can_adapter=socketcan \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the crayfish into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20
```

**Versão DM:**

```bash
lerobot-record \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=follower1 \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=rebot_arm_102_leader \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=rebot_arm_102_leader \
    --display_data=true \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the crayfish into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20
```

Há vários parâmetros relacionados ao próprio conjunto de dados:

| Parâmetro | Significado | Recomendação |
| :--- | :--- | :--- |
| `--dataset.repo_id` | Nome do conjunto de dados (também o nome da pasta local) | Nomes separados para conjuntos de teste e formais, por exemplo, `rebot_b601/grab_cube_test` / `rebot_b601/grab_cube_v1` |
| `--dataset.single_task` | Descrição da tarefa (armazenada no conjunto de dados) | Em inglês, correspondendo à descrição da tarefa |
| `--dataset.num_episodes` | Quantos Episódios gravar | Teste: 5; formal: 50 (o padrão é 50) |
| `--dataset.push_to_hub` | Se deve enviar para o Hub após a gravação | `false` = não enviar |
| `--dataset.episode_time_s=30` | Tempo de gravação por Episódio | Ajuste com base na complexidade da tarefa |
| `--dataset.reset_time_s=20` | Tempo para redefinir a cena para a próxima gravação | Ajuste com base no tempo de redefinição da cena |
| `--display_data=true` | Mostrar o feed da câmera em tempo real | - |

Depois disso, o conjunto de dados será salvo no diretório home em `~/.cache/huggingface/lerobot`. A pasta acima será criada em `seeed_rebot_b601_rs/test`.

</section>

## 13.6 Gravando, Pausando e Regravando Episódios

<section id="recording" className="section-card">
  <div className="section-title">
    <span>Gravação</span>
    <h2>13.6 Gravando, Pausando e Regravando Episódios</h2>
  </div>

### Gravação

Controles de teclado durante a gravação:

| Tecla | Ação |
| :--- | :--- |
| → (Seta para a direita) | Encerrar o Episódio atual mais cedo, prosseguir para redefinir/próximo |
| ← (Seta para a esquerda) | Descartar o Episódio atual, regravar este |
| ESC | Encerrar toda a sessão de coleta: codificar vídeos, calcular estatísticas, salvar conjunto de dados |

:::warning
Se as teclas não responderem, é um problema de versão do `pynput`; faça o downgrade: `pip install pynput==1.6.8`.
:::

### Regravação

Após gravar 5 Episódios e verificar a reprodução, para a coleta formal: altere `repo_id` para o nome formal, `num_episodes=50` para o valor formal e siga o método do lápis de cinco pontos do Capítulo 12 — 1 Episódio por ponto, 5 pontos por rodada, 10 rodadas no total.

### Pausando a Gravação

:::danger
Não pressione Ctrl+C para pausar a gravação — pressione <kbd>Esc</kbd>, caso contrário ela será encerrada de forma anormal.
:::

</section>

## 13.7 Visualizando e Reproduzindo um Conjunto de Dados

<section id="viz-replay" className="section-card">
  <div className="section-title">
    <span>Reprodução</span>
    <h2>13.7 Visualizando e Reproduzindo um Conjunto de Dados</h2>
  </div>

### Visualizando um Conjunto de Dados

Se você enviou dados, também pode visualizá-los localmente com:

```bash
echo ${HF_USER}/rebot_test
```

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

Se você usou `--dataset.push_to_hub=false` e não enviou dados, também pode visualizar localmente com:

**Versão RS:**

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_rs/test \
  --episode-index 0 \
  --display-compressed-images=false
```

**Versão DM:**

```bash
lerobot-dataset-viz \
  --repo-id seeed_rebot_b601_dm/test \
  --episode-index 0 \
  --display-compressed-images=false
```

Aqui, `seeed_rebot_b601_rs/test` é o nome de conjunto de dados personalizado da coleta (`repo_id`).

### Reproduzindo um Conjunto de Dados

Agora, tente reproduzir o primeiro conjunto de dados no seu robô: `--dataset.episode=0` significa reproduzir o primeiro conjunto de dados coletado, e assim por diante.

**Versão RS:**

```bash
lerobot-replay \
    --robot.type=seeed_b601_rs_follower \
    --robot.port=can0 \
    --robot.can_adapter=socketcan \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --dataset.episode=0
```

**Versão DM:**

```bash
lerobot-replay \
    --robot.type=seeed_b601_dm_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.can_adapter=damiao \
    --robot.id=follower1 \
    --dataset.repo_id=seeed_rebot_b601_dm/test \
    --dataset.episode=0
```

O robô agora deve executar as mesmas ações que você gravou durante a teleoperação.

</section>

## 13.8 Suplementando e Excluindo Dados

<section id="edit-dataset" className="section-card">
  <div className="section-title">
    <span>Edição</span>
    <h2>13.8 Suplementando e Excluindo Dados</h2>
  </div>

- Checkpoints são criados automaticamente durante a gravação.
- Adicione `--resume=true` ao comando original para continuar suplementando dados.
- Ao retomar, defina `--dataset.num_episodes` para o número de Episódios adicionais a serem gravados (não o total desejado no conjunto de dados).
- Para começar do zero, **exclua manualmente** o diretório do conjunto de dados.

Use o seguinte comando para excluir Episódios: `--operation.episode_indices "[0]"` exclui o primeiro Episódio, e assim por diante. Tenha paciência durante a exclusão e modifique o nome do conjunto de dados de acordo.

```bash
lerobot-edit-dataset \
  --repo_id rebot_b601/grab_cube_v1 \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

</section>

</div>
