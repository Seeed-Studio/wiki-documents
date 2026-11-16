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

# Coleta de Dados do SO-ARM101 com Isaac Sim 6.1

![Demonstração de coleta de dados do SO-ARM101 no Isaac Sim](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/isaac%20sim/isaac_sim_dli.gif)

## 1. Requisitos

> ⚠️ **Requisito de GPU.** Use uma GPU NVIDIA RTX com pelo menos 12 GB de VRAM, como a RTX 3080 12 GB ou a RTX 4070 Ti SUPER 16 GB, e um driver recente.
> O robô, três visões de câmera e a simulação física são executados juntos. Com 8 GB de VRAM, o renderizador padrão pode sobrecarregar o compositor da área de trabalho em poucos minutos. A tela pode congelar e parar de responder ao mouse e ao teclado, exigindo uma reinicialização forçada. O próprio Isaac Sim pode ainda estar em execução e gravando logs. Durante o desenvolvimento, um laptop com 8 GB travou duas vezes mesmo com as mitigações integradas e `--single-viewport` ativado. Use uma GPU com pelo menos 12 GB de VRAM para operação confiável.
> Se sua GPU tiver 8 GB de VRAM, consulte a seção 10 para maneiras de reduzir a carga de renderização. O sistema ainda pode travar.

- Ubuntu 22.04. O Isaac Sim 6.1 também oferece suporte ao Ubuntu 24.04.
- GPU NVIDIA RTX com **pelo menos 12 GB de VRAM**.
- Um driver NVIDIA recente.
- O pacote standalone do Isaac Sim 6.1.
- Um braço líder SO-ARM101 conectado via USB para teleoperação física. Conecte também um braço seguidor SO-ARM101 para vincular um seguidor físico à simulação.

Use o seguinte layout de diretórios.

```text
~
├── isaacsim/                 # Isaac Sim 6.1 installation directory
└── rebot_lerobot/
    └── .venv/bin/python      # LeRobot virtual environment
```

## 2. Instalar o Isaac Sim 6.1

Baixe `isaac-sim-standalone-6.1.0-linux-x86_64.zip` (cerca de 12,4 GB) da NVIDIA. Extraia em `~/isaacsim` e execute o script de pós-instalação.

```bash
unzip isaac-sim-standalone-6.1.0-linux-x86_64.zip -d ~/isaacsim
cd ~/isaacsim
./post_install.sh
```

Execute o verificador de compatibilidade para confirmar que seu sistema atende aos requisitos.

```bash
./isaac-sim.compatibility_check.sh     # Expected output: System checking result: PASSED
```

- No primeiro lançamento com `./isaac-sim.sh`, a compilação de shaders pode levar vários minutos.
- Se você instalou o Isaac Sim em outro lugar, defina `ISAACSIM_ROOT` para o diretório de instalação antes de iniciar a simulação. Consulte a seção 6.
- Avisos de IOMMU, DLSS-RR e largura de link PCIe no log de inicialização não impedem a execução do tutorial.

## 3. Obter o Código (Git LFS Necessário)

> ⚠️ O robô, o suporte da câmera, a bancada, os frascos e o rack de frascos usam assets USD armazenados no Git LFS. Instale `git-lfs` antes de clonar para que o Isaac Sim possa carregar todos os assets.

```bash
sudo apt update
sudo apt install -y git-lfs

cd ~
git clone https://github.com/Seeed-Projects/rebot-arm-dli-isaacsim.git
cd rebot-arm-dli-isaacsim
git lfs install
git lfs pull
```

Verifique se os assets foram baixados corretamente.

```bash
du -sh assets/
# Expected size: about 157 MB

head -c 8 assets/so101/SO-ARM101-USD-NO-CAMERA.usd
# Expected output: PXR-USDC. If you see version, run git lfs pull again.
```

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

### Calibrar o Braço Líder

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM1 \
  --teleop.id=so101_leader
```

Quando solicitado, mova cada junta para o ponto médio de seu alcance e pressione Enter. Em seguida, mova cada junta por todo o seu alcance de movimento e pressione Enter novamente para salvar. Veja a [demonstração de calibração do LeRobot SO-101](https://huggingface.co/docs/lerobot/so101#calibrate).

### Calibrar o Braço Seguidor

Calibre o seguidor antes de vinculá-lo à simulação. Use o mesmo procedimento de ponto médio e alcance completo e aguarde o comando para salvar a calibração e sair.

```bash
source ~/rebot_lerobot/.venv/bin/activate

lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=so101_follower
```

## 6. Iniciar Teleoperação e Coletar Dados

Abra o diretório do projeto. Se o Isaac Sim estiver instalado em outro lugar, execute `export ISAACSIM_ROOT=/path/to/isaacsim` no terminal atual.

```bash
cd ~/rebot-arm-dli-isaacsim
```

### Escolher um Modo de Teleoperação

Use o líder físico para controlar o braço simulado. O status `src=LEADER` indica que a simulação está seguindo o líder.

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --no-follower
```

Para vincular o seguidor físico, primeiro coloque ambos os braços físicos em poses semelhantes e, em seguida, execute o seguinte comando. O status `src=FOLLOWER` indica que a simulação está seguindo as posições articulares medidas do seguidor.

```bash
./run_so101.sh --leader-port /dev/ttyACM1 --follower-port /dev/ttyACM0
```

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

### Gravar a Tarefa de Triagem de Frascos

1. Clique na viewport da simulação e pressione `R` para redefinir os três frascos e randomizar a cena novamente.
2. Pressione `S` no modo líder ou `T` no modo de teclado para iniciar a gravação.
3. Coloque os três frascos na posição vertical no rack, um de cada vez. À medida que o gripper se aproxima de um frasco, a linha guia ajuda você a julgar a distância de preensão. O terminal relata `[GRASP]` e `[RELEASE]`.
4. Pressione a tecla de gravação novamente para salvar o episódio. No modo líder, você também pode pressionar `C` para descartá-lo.

O dataset é gravado em `~/rebot-arm-dli-isaacsim/datasets/so101_vials_front_side` com o ID `local/so101_vials_front_side` e o texto de tarefa `Put the three vials into the vial rack`. Cada gravação contém dados das juntas e do gripper do SO-ARM101 juntamente com filmagens em 30 FPS das câmeras de punho e aérea.

### Visões de Câmera

| ![frontal](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_front.png) | ![lateral](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_side.png) | ![externa](https://media.githubusercontent.com/media/Seeed-Projects/rebot-arm-dli-isaacsim/6235773b9475f56b434d30be47105e8d34f9c4ac/media/so101_camera_previews/so101_external.png) |
| --- | --- | --- |
| Câmera de punho `front` (gravada) | Câmera lateral `side` (para visualização) | Câmera aérea `external` (gravada) |

## 7. Inspecionar, Visualizar e Reproduzir o Dataset

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

## 8. Validar Sem Hardware

Os comandos a seguir usam um líder simulado para verificar o rastreamento das juntas. O segundo comando também verifica ambas as câmeras, a codificação H.264 e a saída de dataset do LeRobot.

```bash
cd ~/rebot-arm-dli-isaacsim
./run_so101.sh --headless --test
./run_so101.sh --headless --test --test-recording
```

Para gerar duas gravações simuladas, execute o seguinte comando. O exemplo grava dados de validação em um diretório separado das suas gravações regulares.

```bash
./run_so101.sh --headless --auto-record 2 \
  --dataset-root datasets/so101_vials_smoke_test \
  --repo-id local/so101_vials_smoke_test
```

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

- **Não é possível acessar a porta serial.** Verifique a porta do dispositivo e o cabo de dados. Se sua conta não tiver permissões de porta serial, execute `sudo usermod -aG dialout "$USER"`, saia e entre novamente e tente outra vez.
- **Os braços simulado e físico apresentam poses diferentes.** Verifique as portas seriais e os IDs de calibração de ambos os braços. Confira novamente o ponto médio de calibração e a amplitude de movimento de cada junta.
- **Isaac Sim Python não pode ser encontrado.** Verifique se o diretório de instalação contém `python.sh` e defina `ISAACSIM_ROOT` para esse diretório.
- **Recursos de cena estão ausentes.** Execute `git lfs pull` a partir do diretório do projeto e verifique os recursos conforme descrito na seção 3.
- **A gravação informa `[dataset-error]`.** Verifique o ambiente virtual do LeRobot e os extras `[dataset,viz]` da seção 4.
- **O terminal informa `[watchdog] Leader data timed out`.** Verifique a conexão USB do líder e o processo de ponte serial. A simulação mantém seu último alvo enquanto a comunicação estiver interrompida.

<details>
<summary>Licença MIT upstream</summary>

Licença MIT

Copyright (c) 2026 reBot Arm DLI Isaac Sim contributors

É concedida permissão, gratuitamente, a qualquer pessoa que obtenha uma cópia
deste software e dos arquivos de documentação associados (o "Software"), para lidar
com o Software sem restrições, incluindo, sem limitação, os direitos
de usar, copiar, modificar, mesclar, publicar, distribuir, sublicenciar e/ou vender
cópias do Software, e de permitir que pessoas a quem o Software é
fornecido o façam, sujeitas às seguintes condições:

O aviso de copyright acima e este aviso de permissão devem ser incluídos em todas
as cópias ou partes substanciais do Software.

O SOFTWARE É FORNECIDO "NO ESTADO EM QUE SE ENCONTRA", SEM GARANTIA DE QUALQUER TIPO,
EXPRESSA OU IMPLÍCITA, INCLUINDO, MAS NÃO SE LIMITANDO ÀS GARANTIAS DE
COMERCIABILIDADE, ADEQUAÇÃO A UM DETERMINADO FIM E NÃO VIOLAÇÃO. EM NENHUMA
HIPÓTESE OS AUTORES OU DETENTORES DOS DIREITOS AUTORAIS SERÃO RESPONSÁVEIS POR QUALQUER
REIVINDICAÇÃO, DANOS OU OUTRAS RESPONSABILIDADES, SEJA EM AÇÃO CONTRATUAL, DELITO OU
DE OUTRA FORMA, DECORRENTES DE, OU EM CONEXÃO COM, O SOFTWARE OU O USO OU OUTRAS
NEGOCIAÇÕES NO SOFTWARE.

</details>
