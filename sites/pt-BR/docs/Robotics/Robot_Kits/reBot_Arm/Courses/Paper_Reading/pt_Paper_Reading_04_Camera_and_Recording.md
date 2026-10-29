---
description: "Configure uma ou duas câmeras, encontre dispositivos, grave conjuntos de dados LeRobot e visualize, reproduza, adicione e exclua dados."
title: "Como gravar demonstrações multivista no reBot Arm"
hide_title: true
keywords:
  - Implantação prática
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - Braço robótico
  - IA física
  - Curso
  - Tutorial
  - SO101
  - SO-ARM101
  - Hugging Face
  - Braço
  - Robótica
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_camera_recording
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/robotics/hands_on_camera_recording/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-camera_recording-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · IMPLANTAÇÃO PRÁTICA</span>
  <h1 id="hands-on-camera_recording-title">Como gravar demonstrações multivista no reBot Arm</h1>
  <p className="paper-reading-lead">Configure uma ou duas câmeras, identifique dispositivos, grave demonstrações LeRobot, visualize e reproduza conjuntos de dados e adicione ou remova episódios.</p>
  <ul className="paper-reading-badges" aria-label="Neste guia">
    <li>Configuração de câmera</li>
    <li>Gravação de dados</li>
    <li>Visualização e reprodução</li>
    <li>Adicionar e remover episódios</li>
  </ul>
</section>

## Configurações com Uma e Duas Câmeras

- **Uma câmera**: use apenas a câmera superior. Isso é útil para uma verificação inicial do ambiente, pois remove uma variável da solução de problemas.

- **Duas câmeras** (a configuração principal para este curso): superior + punho. A configuração ACT também usa essas duas entradas por padrão.

    - Uma visão superior + lateral é outra opção.

Você também pode coletar dados e treinar com três ou quatro câmeras. O próprio ACT não impõe uma contagem fixa de câmeras: cada visão passa por um backbone ResNet18 compartilhado para produzir uma sequência de tokens de características, e as sequências são concatenadas para o codificador Transformer. A configuração bimanual ALOHA do artigo original do ACT usou quatro câmeras: duas superiores e duas no punho.

- **Custo**: a memória e a computação da GPU crescem aproximadamente de forma linear com a contagem de câmeras, e visões adicionais podem aumentar os requisitos de dados. Mantenha cada visão sincronizada e sua posição de montagem fixa.

---

## Câmeras Superior e de Punho

- **Câmera superior (`front`)**: fixa em um suporte acima da área de trabalho, mostrando ao modelo onde está o alvo e a configuração geral do braço.

- **Câmera de punho (`wrist`)**: montada perto do efetuador final e se movendo com a garra, mostrando sua posição em relação ao alvo e quando fechar.

![Configuração de Câmera e Gravação de Dados: Câmeras Superior e de Punho (Figura 1)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/camera-recording-01-camera-views-en.png)

---

## Encontrar IDs de Dispositivo das Câmeras

Primeiro, execute o seguinte comando para encontrar os índices das câmeras:

```bash
lerobot-find-cameras opencv
```

A saída mostra `Id: 0`; aqui, `0` é o índice da câmera.

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

O comando lista o nome, o ID e a resolução padrão de cada câmera. As imagens capturadas são salvas em `~/rebot_lerobot/outputs/captured_images/`. Inspecione-as para verificar a posição e o enquadramento da câmera.

Em um laptop, a varredura também detecta sua câmera integrada, geralmente no índice 0. Desconecte e reconecte as câmeras externas para identificar os índices corretos da câmera superior e da câmera de punho.

- **Reconectar câmeras pode alterar seus índices.** Uma câmera que hoje é 0 pode receber um índice diferente da próxima vez. Execute `lerobot-find-cameras` antes de cada sessão de gravação para confirmar.

- **Conecte câmeras USB diretamente ao computador.** Evite hubs: disputa de largura de banda em um hub sem alimentação pode causar perda de imagens e quadros descartados. Se possível, conecte as duas câmeras a controladores USB diferentes.

---

## Sincronizar Imagens e Ações

1. Para uma câmera:

**Versão RS:**

```text
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

```text
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

**Versão SO-ARM:**

```text
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

Para adicionar mais câmeras, edite `--robot.cameras`. Defina `index_or_path` usando o ID da câmera informado por `python -m lerobot.find_cameras opencv`.

2. Para duas câmeras:

**Versão RS:**

```text
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

```text
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

**Versão SO-ARM:**

```text
lerobot-teleoperate \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true
```

A pré-visualização mostra as visões das câmeras dentro do sandbox de coleta.

![Configuração de Câmera e Gravação de Dados: Sincronizar Imagens e Ações (Figura 2)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/camera-recording-02-capture-preview.png)

Configurações recomendadas: **640 × 480 a 30 fps, `fourcc: "MJPG"`**. Cada configuração tem um propósito:

- **Resolução 640 × 480** equilibra detalhes e desempenho em tempo real. Dobrar ambas as dimensões quadruplica a largura de banda USB e os custos de armazenamento, enquanto o modelo redimensiona as entradas de qualquer maneira, limitando o benefício.

- **30 fps**: combine com a taxa de coleta (a Seção 12.3 explica carimbos de tempo lógicos). Se a câmera funcionar mais lentamente, a gravação reutilizará repetidamente quadros antigos.

- **`fourcc: "MJPG"`** comprime as imagens antes da transferência e reduz substancialmente o uso de largura de banda USB. Você pode tentar `YUYV`, mas seus requisitos maiores de largura de banda podem forçar resoluções ou taxas de quadros menores e causar travamentos. A configuração descrita aqui suporta três câmeras em `1920*1080` e `30FPS` com `MJPG`.

---

## Criar um Conjunto de Dados LeRobot

![Configuração de Câmera e Gravação de Dados: Criar um Conjunto de Dados LeRobot (Figura 3)](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/camera-recording-03-dataset-recording-en.png)

Esteja pronto para demonstrar a tarefa antes de executar o comando a seguir. Um aviso de áudio sinaliza a gravação; se o som não estiver disponível, observe o terminal para ver quando a gravação começa.

**Versão RS:**

```text
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

```text
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

**Versão SO-ARM:**

```text
lerobot-record \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --robot.can_adapter=damiao \
    --robot.cameras="{ front: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30, fourcc: "MJPG"}, side: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30, fourcc: "MJPG"}}" \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=my_awesome_leader_arm \
    --display_data=true \
    --dataset.repo_id=seeed_soarm101/test \
    --dataset.num_episodes=5 \
    --dataset.single_task="Grab the crayfish into the box" \
    --dataset.push_to_hub=false \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=20 
```

Os seguintes parâmetros controlam o conjunto de dados e a sessão de gravação:

| Parâmetro | Significado | Recomendação |
|---|---|---|
| `--dataset.repo_id` | Nome do conjunto de dados e nome da pasta local | Use nomes separados para teste e produção, como `rebot_b601/grab_cube_test` e `rebot_b601/grab_cube_v1`. |
| `--dataset.single_task` | Descrição da tarefa armazenada no conjunto de dados | Escreva uma descrição precisa em inglês. |
| `--dataset.num_episodes` | Número de episódios a serem gravados | Use 5 para um teste e 50 para a coleta completa; 50 é o padrão. |
| `--dataset.push_to_hub` | Se deve fazer upload após a gravação | `false` mantém o conjunto de dados local. |
| `--dataset.episode_time_s=30` | Tempo de gravação por episódio | Ajuste conforme a complexidade da tarefa. |
| `--dataset.reset_time_s=20` | Tempo para redefinir a cena entre episódios | Reserve tempo suficiente para restaurar a cena inicial. |
| `--display_data=true` | Mostrar visualizações da câmera em tempo real | |

O conjunto de dados é armazenado em `~/.cache/huggingface/lerobot`, na pasta especificada, como `seeed_rebot_b601_rs/test`.

---

## Fazer upload para o Hugging Face Hub (Opcional)

Para gerenciar conjuntos de dados no Hugging Face Hub, faça login com um token que tenha permissão de escrita. Crie um em [Hugging Face settings](https://huggingface.co/settings/tokens).

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
```

Salve seu nome de usuário do Hugging Face em uma variável para comandos posteriores:

```bash
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

Execute novamente o comando de coleta com duas alterações: `--dataset.repo_id=${HF_USER}/grab_cube_v1` e `--dataset.push_to_hub=true`. A gravação então faz upload do resultado para o seu repositório no Hub. Use esse nome de repositório com `lerobot-dataset-viz --repo-id` para visualizá-lo.

> **Dica:** O upload é opcional. Conjuntos de dados locais gravados com `push_to_hub=false` podem ser usados diretamente para treinamento no Capítulo 16. O upload altera onde os dados ficam armazenados, não se eles podem ser usados para treinamento.

---

## Gravar, Parar e Regravar Episódios

**Gravação**

Controles de teclado durante a coleta:

| Tecla | Ação |
|---|---|
| → (Seta para a direita) | Encerra o episódio atual mais cedo e prossegue para o reset / próximo episódio. |
| ← (Seta para a esquerda) | Descarta o episódio atual e o grava novamente. |
| ESC | Encerra a sessão de coleta, codifica os vídeos, calcula estatísticas e salva o conjunto de dados. |

Se as teclas não responderem, a versão do `pynput` pode ser a causa. Faça downgrade com `pip install pynput==1.6.8`.

**Regravação**

Depois de gravar cinco episódios de teste e verificar que a reprodução funciona, inicie a coleta completa. Altere `repo_id` para o nome final do conjunto de dados e defina `num_episodes=50`. Siga o método de cinco pontos marcado a lápis no Capítulo 12: um episódio por ponto, cinco pontos por rodada e dez rodadas.

**Parando a gravação**

Use **Esc**, em vez de Ctrl+C, para parar a gravação; interromper com Ctrl+C pode causar uma saída anormal.

---

## Visualizar e Reproduzir um Conjunto de Dados

**Visualizar o conjunto de dados**

Se você fez upload do conjunto de dados, visualize-o localmente com:

```bash
echo ${HF_USER}/rebot_test  
```

```bash
lerobot-dataset-viz \
  --repo-id ${HF_USER}/rebot_test \
  --episode-index 0 \
  --display-compressed-images=false
```

Se você usou `--dataset.push_to_hub=false`, visualize o conjunto de dados local com:

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

**Versão SO-ARM:**

```bash
lerobot-dataset-viz \
  --repo-id seeed_soarm101/test \
  --episode-index 0 \
  --display-compressed-images=false
```

Aqui, `seeed_rebot_b601_rs/test` é o `repo_id` escolhido durante a gravação.

**Reproduzir um conjunto de dados**

Agora reproduza o primeiro episódio no seu robô. `--dataset.episode=0` seleciona o primeiro episódio gravado; incremente o índice para reproduzir os demais.

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

**Versão SO-ARM:**

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeed_soarm101/test \
    --dataset.episode=0
```

O robô deve reproduzir os movimentos gravados durante a teleoperação.

---

## Adicionar e Remover Episódios

- Checkpoints são criados automaticamente durante a gravação.

- Adicione `--resume=true` ao comando original para continuar gravando dados adicionais.

- Ao retomar, defina `--dataset.num_episodes` para o número de **episódios adicionais**, em vez do tamanho total desejado do conjunto de dados.

- Para recomeçar, **exclua manualmente** o diretório do conjunto de dados.

Use os seguintes comandos para remover episódios selecionados. `--operation.episode_indices "[0]"` remove o primeiro episódio; altere os índices conforme necessário. Substitua o nome do conjunto de dados e aguarde o término da operação.

**Versão RS:**

```bash
lerobot-edit-dataset \
  --repo_id seeed_rebot_b601_rs/test \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

**Versão DM:**

```bash
lerobot-edit-dataset \
  --repo_id seeed_rebot_b601_dm/test \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

**Versão SO-ARM:**

```bash
lerobot-edit-dataset \
  --repo_id seeed_soarm101/test \
  --operation.type delete_episodes \
  --operation.episode_indices "[0]"
```

</div>
