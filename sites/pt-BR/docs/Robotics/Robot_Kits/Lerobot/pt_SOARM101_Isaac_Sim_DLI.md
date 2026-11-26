---
title: SO-ARM101 Simulação Isaac Sim DLI e Coleta de Dados
description: Use o Isaac Sim 6.1 para executar a cena de triagem de frascos do SO-ARM101, teleoperar o robô, vincular um seguidor físico e coletar dados para o LeRobot.
keywords:
  - SO-ARM101
  - Isaac Sim
  - NVIDIA DLI
  - LeRobot
slug: /soarm101_isaac_sim_dli
last_update:
  date: 11/16/2026
  author: ZhuYuan
url: https://wiki.seeedstudio.com/pt-br/soarm101_isaac_sim_dli/
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Coleta de Dados do SO-ARM101 com Isaac Sim 6.1

<div className="rebot-page soarm-guide">

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaac%20sim/isaac_sim_dli.gif" width={800} height={500} style={{height: 'auto'}} alt="Demonstração de coleta de dados do SO-ARM101 no Isaac Sim" />
</div>

Use o Isaac Sim 6.1 para separar frascos com o SO-ARM101, gravar dados no formato LeRobot e validar o treinamento de ACT. Você pode usar o teclado, conectar um líder físico ou vincular um seguidor físico à simulação.

## Roteiro de Aprendizado Recomendado

<div className="rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4><a href="#2-instalar-o-isaac-sim-61">Preparar o ambiente</a></h4>
    <p>Instale o Isaac Sim, baixe os assets da cena e configure o LeRobot.</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4><a href="#5-conectar-e-calibrar-o-so-arm101">Calibrar os braços</a></h4>
    <p>Verifique as portas seriais e calibre os braços físicos que você usar.</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4><a href="#6-iniciar-teleoperação-e-coletar-dados">Teleoperar e gravar</a></h4>
    <p>Escolha um modo de controle e grave a tarefa de triagem de frascos.</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4><a href="#7-inspecionar-visualizar-e-reproduzir-o-dataset">Inspecionar e reproduzir</a></h4>
    <p>Compare os dois fluxos de câmera com as ações e depois reproduza um episódio.</p>
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">5</span>
  <div className="rebot-step-content">
    <h4><a href="#9-treinar-uma-política-act">Treinar o ACT</a></h4>
    <p>Verifique o fluxo de trabalho de treinamento com as suas gravações.</p>
  </div>
</section>

</div>

## 1. Requisitos

:::warning
**Requisito de GPU.** Use uma GPU NVIDIA RTX com pelo menos 12 GB de VRAM, como a RTX 3080 12 GB ou a RTX 4070 Ti SUPER 16 GB, e um driver recente.

O robô, três visões de câmera e a simulação física são executados juntos. Com 8 GB de VRAM, o renderizador padrão pode sobrecarregar o compositor da área de trabalho em poucos minutos. A tela pode congelar e parar de responder ao mouse e ao teclado, exigindo uma reinicialização forçada. O próprio Isaac Sim pode ainda estar em execução e gravando logs. Durante o desenvolvimento, um laptop com 8 GB travou duas vezes mesmo com as mitigações integradas e `--single-viewport` ativado. Use uma GPU com pelo menos 12 GB de VRAM para operação confiável.

Se sua GPU tiver 8 GB de VRAM, consulte a seção 10 para maneiras de reduzir a carga de renderização. O sistema ainda pode travar.
:::

| Item | Requisito |
| --- | --- |
| Sistema operacional | Ubuntu 22.04. O Isaac Sim 6.1 também oferece suporte ao Ubuntu 24.04. |
| GPU e driver | NVIDIA RTX com pelo menos 12 GB de VRAM e um driver NVIDIA recente. |
| Software de simulação | Pacote standalone do Isaac Sim 6.1. |
| Ambiente Python | Instale o [uv](https://docs.astral.sh/uv/getting-started/installation/) para criar o ambiente virtual Python 3.12. |
| Braços físicos | Conecte um braço líder SO-ARM101 por USB para teleoperação física. Conecte também um braço seguidor para o modo de seguidor físico. |

Use o seguinte layout de diretórios.

```text
~
├── isaacsim/                 # Isaac Sim 6.1 installation directory
└── rebot_lerobot/
    └── .venv/bin/python      # LeRobot virtual environment
```

## 2. Instalar o Isaac Sim 6.1

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Extrair e instalar</h4>

Baixe `isaac-sim-standalone-6.1.0-linux-x86_64.zip` (cerca de 12,4 GB) na [página de download da NVIDIA](https://docs.isaacsim.omniverse.nvidia.com/latest/installation/download.html). Extraia em `~/isaacsim` e execute o script de pós-instalação.

```bash
unzip isaac-sim-standalone-6.1.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Verificar a compatibilidade</h4>

Execute o verificador de compatibilidade para confirmar que seu sistema atende aos requisitos.

```bash
./isaac-sim.compatibility_check.sh     # Expected output: System checking result: PASSED
```
  </div>
</section>

</div>

- No primeiro lançamento com `./isaac-sim.sh`, a compilação de shaders pode levar vários minutos.
- Se você instalou o Isaac Sim em outro lugar, defina `ISAACSIM_ROOT` para o diretório de instalação antes de iniciar a simulação. Consulte a seção 6.
- Avisos de IOMMU, DLSS-RR e largura de link PCIe no log de inicialização não impedem a execução do tutorial.

## 3. Obter o Código (Git LFS Necessário)

:::warning
O robô, o suporte da câmera, a bancada, os frascos e o rack de frascos usam assets USD armazenados no Git LFS. Instale `git-lfs` antes de clonar para que o Isaac Sim possa carregar todos os assets.
:::

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Clonar o repositório e baixar os assets</h4>

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/Seeed-Projects/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Verificar os arquivos USD</h4>

Verifique se os assets foram baixados corretamente.

```bash
du -sh assets/
# Expected size: about 157 MB

head -c 8 assets/so101/SO-ARM101-USD-NO-CAMERA.usd
# Expected output: PXR-USDC. If you see version, run git lfs pull again.
```
  </div>
</section>

</div>

## 4. Configurar o Ambiente LeRobot

```bash
mkdir ~/rebot_lerobot
cd ~/rebot_lerobot
sudo apt update
sudo apt install -y ffmpeg

# Clone the repository
git clone https://github.com/Seeed-Projects/lerobot.git

# Create a virtual environment with Python 3.12
uv venv --python 3.12 .venv
source .venv/bin/activate

# Install LeRobot with the dataset and visualization extras
uv pip install -e "./lerobot[dataset,viz]"

# Install the SO-ARM101 servo dependency
uv pip install feetech-servo-sdk
```

> Os extras `[dataset,viz]` instalam dependências incluindo `datasets`, `Pillow`, `av` e `rerun`. Se essas dependências estiverem ausentes, a conversão de episódios falha e o terminal exibe `[dataset-error]`.

## 5. Conectar e Calibrar o SO-ARM101

Conecte o braço líder físico à alimentação e conecte seu cabo de dados USB. Execute `lerobot-find-port` para identificar as portas do líder e do seguidor. Os exemplos usam `/dev/ttyACM1` para o líder e `/dev/ttyACM0` para o seguidor. Substitua pelos caminhos reais das suas portas. Salve a calibração como `so101_leader` e `so101_follower` para corresponder aos IDs de dispositivo padrão do projeto.

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
### Calibrar o Braço Líder

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=so101_leader
```

Quando solicitado, mova cada junta para o ponto médio de seu alcance e pressione Enter. Em seguida, mova cada junta por todo o seu alcance de movimento e pressione Enter novamente para salvar. Veja a [demonstração de calibração do LeRobot SO-101](https://huggingface.co/docs/lerobot/so101#calibrate).
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
### Calibrar o Braço Seguidor

Calibre o seguidor antes de vinculá-lo à simulação. Use o mesmo procedimento de ponto médio e alcance completo e aguarde o comando para salvar a calibração e sair.

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=so101_follower
```
  </div>
</section>

</div>

## 6. Iniciar Teleoperação e Coletar Dados

Abra o diretório do projeto. Se o Isaac Sim estiver instalado em outro lugar, execute `export ISAACSIM_ROOT=/path/to/isaacsim` no terminal atual.

```bash
cd ~/rebot-arm-dli-isaacsim
```

### Escolher um Modo de Teleoperação

<Tabs>
<TabItem value="leader" label="Líder físico">

Use o líder físico para controlar o braço simulado. O status `src=LEADER` indica que a simulação está seguindo o líder.

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --no-follower
```

</TabItem>
<TabItem value="follower" label="Seguidor físico">

Para vincular o seguidor físico, primeiro coloque ambos os braços físicos em poses semelhantes e, em seguida, execute o seguinte comando. O status `src=FOLLOWER` indica que a simulação está seguindo as posições articulares medidas do seguidor.

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --follower-port /dev/ttyACM0
```

</TabItem>
<TabItem value="keyboard" label="Teclado">

Para controlar o braço simulado sem um líder físico, inicie a simulação, clique na viewport 3D e pressione `Y` para entrar no modo de teclado.

```bash
./run_so101.sh --no-start-bridge
```

| Tecla | Ação no modo de teclado |
| --- | --- |
| `W` / `S` / `A` / `D` | Move o efetuador final para frente, para trás, para a esquerda ou para a direita |
| `↑` / `↓` | Eleva ou abaixa o efetuador final |
| `Q` / `E` | Gira o punho |
| `Z` / `C` | Ajusta a inclinação do efetuador final |
| `G` | Alterna o gripper |
| `B` | Alterna entre passos de 5 mm e 15 mm |

</TabItem>
</Tabs>

### Gravar a Tarefa de Triagem de Frascos

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Redefinir a cena</h4>

Clique na viewport da simulação e pressione `R` para redefinir os três frascos e randomizar a cena novamente.
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Iniciar a gravação</h4>

Pressione `S` no modo líder ou `T` no modo de teclado para iniciar a gravação.
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">3</span>
  <div className="rebot-step-content">
    <h4>Separar os frascos</h4>

Coloque os três frascos na posição vertical no rack, um de cada vez. À medida que o gripper se aproxima de um frasco, a linha guia ajuda você a julgar a distância de preensão. O terminal relata `[GRASP]` e `[RELEASE]`.
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">4</span>
  <div className="rebot-step-content">
    <h4>Salvar o episódio</h4>

Pressione a tecla de gravação novamente para salvar o episódio. No modo líder, você também pode pressionar `C` para descartá-lo.
  </div>
</section>

</div>

O dataset é gravado em `~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side` com o ID `local/so101_vials_front_side` e o texto de tarefa `Put the three vials into the vial rack`. Cada gravação contém dados das juntas e do gripper do SO-ARM101 juntamente com filmagens em 30 FPS das câmeras de punho e aérea.

### Visões de Câmera

| ![frontal](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_front.png) | ![lateral](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_side.png) | ![externa](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_external.png) |
| --- | --- | --- |
| Câmera de punho `front` (gravada) | Câmera lateral `side` (para visualização) | Câmera aérea `external` (gravada) |

## 7. Inspecionar, Visualizar e Reproduzir o Dataset

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
### Verificar Sincronização de Vídeo e Ações

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-dataset-viz \
  --repo-id local/so101_vials_front_side \
  --root ~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --mode local \
  --episode-index 0
```

Verifique se ambos os vídeos permanecem sincronizados com as ações e estados. Procure por quadros pretos, quadros congelados e objetos que obstruam a visão.
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
### Reproduzir Ações no Isaac Sim

No primeiro terminal, inicie o receptor da simulação.

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --no-start-bridge --no-recording --no-dr
```

Em um segundo terminal, reproduza o episódio 0. Adicione `--loop` para reprodução contínua.

```bash
source ~/rebot_lerobot/.venv/bin/activate
cd ~/rebot-arm-dli-isaacsim
PYTHONPATH=scripts python scripts/replay_episode_so101.py --episode 0
```
  </div>
</section>

</div>

## 8. Validar Sem Hardware

<div className="rebot-step-flow">

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">1</span>
  <div className="rebot-step-content">
    <h4>Verificar o rastreamento das juntas e a gravação</h4>

Os comandos a seguir usam um líder simulado para verificar o rastreamento das juntas. O segundo comando também verifica ambas as câmeras, a codificação H.264 e a saída de dataset do LeRobot.

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --test
./run_so101.sh --headless --test --test-recording
```
  </div>
</section>

<section className="rebot-step-item">
  <span className="rebot-step-number" aria-hidden="true">2</span>
  <div className="rebot-step-content">
    <h4>Gerar um dataset de teste separado</h4>

Para gerar duas gravações simuladas, execute o seguinte comando. O exemplo grava dados de validação em um diretório separado das suas gravações regulares.

```bash
./run_so101.sh --headless --auto-record 2 \
  --dataset-root datasets/so101_vials_smoke_test \
  --repo-id local/so101_vials_smoke_test
```
  </div>
</section>

</div>

## 9. Treinar uma Política ACT

Execute 60 etapas de treinamento ACT em dados do diretório de gravação regular para verificar o fluxo de trabalho de treinamento. O modelo treinado e os arquivos relacionados são salvos em `checkpoints/last/pretrained_model/` dentro do diretório de saída.

```bash
source ~/rebot_lerobot/.venv/bin/activate
lerobot-train \
  --policy.type=act \
  --policy.push_to_hub=false \
  --dataset.repo_id=local/so101_vials_front_side \
  --dataset.root=~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side \
  --output_dir=~/rebot_lerobot/outputs/train/act_so101 \
  --steps=60 --batch_size=4 --num_workers=2
```

## 10. Problemas Conhecidos

A cena do SO-ARM101 usa Path Tracing por padrão. Se a carga de renderização estiver muito alta, use `--single-viewport` para mostrar apenas a viewport principal enquanto ainda grava ambas as câmeras. Use `--realtime-renderer` para alternar para renderização em tempo real. As filmagens em tempo real podem ser mais ruidosas.

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --no-start-bridge --no-recording --single-viewport --realtime-renderer
```

## 11. Solução de problemas

<details className="rebot-demo-details">
<summary>Não é possível acessar a porta serial</summary>

Verifique a porta do dispositivo e o cabo de dados. Se sua conta não tiver permissões de porta serial, execute `sudo usermod -aG dialout "$USER"`, saia e entre novamente e tente outra vez.

</details>

<details className="rebot-demo-details">
<summary>Os braços simulado e físico apresentam poses diferentes</summary>

Verifique as portas seriais e os IDs de calibração de ambos os braços. Confira novamente o ponto médio de calibração e a amplitude de movimento de cada junta.

</details>

<details className="rebot-demo-details">
<summary>Isaac Sim Python não pode ser encontrado</summary>

Verifique se o diretório de instalação contém `python.sh` e defina `ISAACSIM_ROOT` para esse diretório.

</details>

<details className="rebot-demo-details">
<summary>Recursos de cena estão ausentes</summary>

Execute `git lfs pull` a partir do diretório do projeto e verifique os recursos conforme descrito na seção 3.

</details>

<details className="rebot-demo-details">
<summary>A gravação informa <code>[dataset-error]</code></summary>

Verifique o ambiente virtual do LeRobot e os extras `[dataset,viz]` da seção 4.

</details>

<details className="rebot-demo-details">
<summary>O terminal informa <code>[watchdog] Leader data timed out</code></summary>

Verifique a conexão USB do líder e o processo de ponte serial. A simulação mantém seu último alvo enquanto a comunicação estiver interrompida.

</details>

<details className="rebot-demo-details">
<summary>Licença MIT upstream</summary>

Licença MIT

Copyright (c) 2026 reBot Arm DLI Isaac Sim contributors

É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia deste software e dos arquivos de documentação associados (o "Software"), para lidar com o Software sem restrições, incluindo, sem limitação, os direitos de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender cópias do Software, e de permitir que pessoas a quem o Software é fornecido o façam, sujeitas às seguintes condições:

O aviso de copyright acima e este aviso de permissão devem ser incluídos em todas as cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA", SEM GARANTIA DE QUALQUER TIPO, EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE COMERCIABILIDADE, ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. EM NENHUMA HIPÓTESE OS AUTORES OU DETENTORES DOS DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER REIVINDICAÇÃO, DANOS OU OUTRAS RESPONSABILIDADES, SEJA EM AÇÃO CONTRATUAL, DELITO OU DE OUTRA FORMA, DECORRENTES DE, OU EM CONEXÃO COM, O SOFTWARE OU O USO OU OUTRAS NEGOCIAÇÕES NO SOFTWARE.

</details>

</div>
