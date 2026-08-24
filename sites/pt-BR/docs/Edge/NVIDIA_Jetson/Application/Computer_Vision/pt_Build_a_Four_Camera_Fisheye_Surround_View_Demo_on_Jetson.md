---
description: Crie uma demonstração de visão surround com olho de peixe de quatro câmeras no Jetson. Faça a fusão de uma visão de cima (BEV) em tempo real para posicionamento do chassi, use YOLO para auxiliar a preensão com braço robótico e use um VLM para ajudar a entender a cena.
title: Crie uma Demonstração de Visão Surround com Olho de Peixe de Quatro Câmeras no Jetson
keywords:
  - Jetson
  - Visão Computacional
  - visão surround
  - olho de peixe
  - BEV
  - visão de cima
  - YOLO
  - VLM
  - braço robótico
  - reComputer
image: https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif
slug: /jetson_fisheye_surround_view_demo
sku: 100066562
last_update:
  date: 08/19/2026
  author: haochen
createdAt: '2026-08-18'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/pt-br/jetson_fisheye_surround_view_demo/
---

## Introdução

Este projeto mostra um **sistema de visão surround com olho de peixe de quatro câmeras** no NVIDIA Jetson. Quatro câmeras olho de peixe ao redor do chassi são calibradas, corrigidas de distorção e fundidas em uma **visão de cima (BEV)** em tempo real.

A BEV é então usada como uma camada de percepção compartilhada:

- **Análise de ocupação** fornece dicas de espaço livre e obstáculos próximos para **movimento do chassi**
- **YOLO-World** detecta e localiza alvos para **auxiliar a preensão com braço robótico**
- **Um VLM** gera uma breve legenda em inglês para **ajudar você a entender a cena**

Esta demonstração tem como objetivo auxiliar a **preensão com braço robótico** e fornecer **suporte de posicionamento para o movimento do chassi**.

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif" />
</div>

Na demonstração, as quatro câmeras apontam para **frente, trás, esquerda e direita**. Após calibração e fusão via GPU, a BEV de cima segue este layout:

- **Parte superior da imagem** = frente do veículo
- **Centro da imagem** = corpo do veículo
- Obstáculos próximos e direções livres são visíveis ao redor do chassi
- Alvos como garrafas, caixas ou cadeiras podem ser localizados no referencial do veículo para assistência à preensão
- O VLM pode resumir a visão atual em um breve texto em inglês para entendimento da cena

## O Que Cada Módulo Faz

| Módulo | O que faz | Para que serve |
| --- | --- | --- |
| Fusão surround | Constrói uma BEV de cima em tempo real a partir de quatro câmeras olho de peixe | Visão surround compartilhada ao redor do chassi |
| Análise de ocupação | Estima espaço livre e obstáculos próximos no plano do solo | Auxiliar o movimento e o posicionamento do chassi |
| YOLO-World | Detecta alvos de vocabulário aberto e informa a posição 2D no referencial do veículo | Auxiliar a preensão com braço robótico |
| Legenda com VLM | Gera uma breve descrição em inglês da BEV atual | Ajudar um operador ou agente a entender a cena |

:::note
YOLO serve para **onde o alvo está**. O VLM serve para **como a cena se parece**. A ocupação é uma dica 2D do solo, não um mapa de LiDAR, e a legenda do VLM não é uma fonte de coordenadas.
:::

## Principais Recursos

- **Fusão surround com olho de peixe de quatro câmeras** em tempo real
- **Remapeamento, deformação e mesclagem via GPU** com CUDA OpenCV
- **Calibração baseada na Web** para intrínsecos, extrínsecos e emendas
- **Grade de ocupação** para assistência ao movimento do chassi
- **Detecção de vocabulário aberto com YOLO-World** para assistência à preensão
- **Legenda de cena com VLM** para entendimento da cena
- Suporte para fluxos de trabalho com **Jetson Thor** e **AGX Orin / Jetson genérico**

## O Que é Esta Demonstração

Esta demonstração transforma quatro fluxos olho de peixe em uma imagem BEV e, em seguida, executa percepção nessa visão compartilhada.

Comparado com um pipeline de câmera única, o fluxo de trabalho de visão surround oferece:

- **Consciência de solo em 360 graus** ao redor do chassi
- **Visualização de cima** que é mais fácil de usar para navegação e assistência à preensão
- **Uma BEV compartilhada** para ocupação, localização de alvos e legendagem de cena
- **Um fluxo de calibração** que pode ser repetido em hardware real

O pipeline é:

1. Capturar imagens de quatro câmeras olho de peixe
2. Executar calibração intrínseca das lentes olho de peixe
3. Estimar alinhamento extrínseco e homografias
4. Corrigir a distorção e deformar cada imagem de câmera para uma BEV no plano do solo
5. Mesclar as quatro visões em uma imagem surround
6. Executar ocupação, assistência à preensão com YOLO e entendimento de cena com VLM na BEV fundida

## Pré-requisitos

### Hardware

- Um dispositivo Jetson como **Seeed reComputer Thor J601** ou **Jetson AGX Orin**
- **Quatro câmeras USB olho de peixe**
- Um monitor ou uma sessão de área de trabalho remota
- Acesso à rede se você abrir a página de calibração de outro computador

Opcional:

- Um chassi móvel, se você quiser usar a ocupação para assistência ao movimento
- Um braço robótico, se você quiser usar as posições de alvo do YOLO para assistência à preensão

### Software

- JetPack compatível com sua placa Jetson de destino
- OpenCV com suporte a CUDA para fusão em tempo real
- Ambiente Python para a interface Web de calibração
- Dependências do YOLO-World e do modelo VLM opcional

## Instalação e Configuração

### Etapa 1. Clonar o Repositório

```bash
git clone https://github.com/xbs0325/j601-surround-demo.git
cd j601-surround-demo
```

### Etapa 2. Compilar o OpenCV com CUDA

Antes de executar a demonstração de visão surround ao vivo, certifique-se de que o OpenCV com suporte a CUDA esteja disponível.

```bash
cd ~/j601-surround-demo
./scripts/build_opencv_cuda.sh --jobs $(nproc)
source scripts/env_opencv_cuda.sh
python3 -c "import cv2; print(cv2.__version__, cv2.cuda.getCudaEnabledDeviceCount())"
```

Se a configuração estiver correta, a contagem de dispositivos CUDA deve ser `1`.

### Etapa 3. Instalar Dependências da Calibração Web

A interface Web de calibração depende de `aiortc` e pacotes Python relacionados.

```bash
./scripts/install_web_deps.sh
```

:::tip
No Ubuntu 24.04, não execute um simples `pip3 install -r requirements.txt` no Python do sistema. Este projeto mantém o ambiente de fusão separado do ambiente de modelos de percepção.
:::

### Etapa 4. Instalar Dependências de Percepção

Para habilitar a assistência à preensão com YOLO-World e o entendimento de cena com VLM, execute:

```bash
./scripts/setup_perception_thor.sh
./scripts/download_perception_models.sh
```

Isso prepara o ambiente de percepção e baixa os arquivos de modelo necessários.

## Como Usar

Calibre primeiro as quatro câmeras e depois inicie a demonstração de visão surround ao vivo. **Não** execute ambos ao mesmo tempo; eles precisam de acesso exclusivo às câmeras.

### Etapa 1. Verificar o Mapeamento das Câmeras

O mapeamento de dispositivos de câmera é definido em:

```bash
config/camera_profile.json
```

Mapeamento típico no repositório:

- `front`: `/dev/video0`
- `back`: `/dev/video2`
- `left`: `/dev/video3`
- `right`: `/dev/video1`

Confirme esses nós de dispositivo antes da calibração. Depois que a demonstração estiver em execução, você pode conferir novamente cobrindo a câmera **front**: a **parte superior** da imagem BEV deve escurecer. Se frente e trás estiverem trocadas, altere o mapeamento de dispositivos no arquivo de configuração. Não edite os arquivos de resultado da calibração para isso.

### Etapa 2. Abrir a Interface Web de Calibração

Inicie o serviço de calibração:

```bash
./calib.sh
```

Em seguida, abra a página de calibração no seu navegador:

```text
http://<board-ip>:8787/
```

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_02.png" />
</div>

A interface de calibração é usada para:

- calibração intrínseca
- alinhamento extrínseco
- refinamento de emendas

Para o refinamento de emendas, siga o pareamento do repositório:

- `front + left`
- `front + right`
- `back + left`
- `back + right`

Coloque o tabuleiro de xadrez na região de sobreposição entre as duas visões de câmera. Quando ambas as visões detectarem o tabuleiro e mostrarem status pronto, o sistema pode refinar aquela emenda.

### Etapa 3. Executar a Demonstração

Após a conclusão da calibração, inicie a demonstração de visão surround:

```bash
./run.sh
```

Isso inicia o pipeline BEV ao vivo: fusão, ocupação, assistência à preensão com YOLO e legendagem de cena opcional com VLM.

Você também pode iniciar diretamente o lançador de percepção:

```bash
./scripts/run_perception.sh --vlm off --mode nav --range 2.5
./scripts/run_perception.sh --mode grasp --target bottle
```

### Modos Comuns

| Objetivo | Comando |
| --- | --- |
| Assistência ao movimento do chassi | `./scripts/run_perception.sh --vlm off --mode nav --range 2.5` |
| Assistência à preensão com braço robótico | `./scripts/run_perception.sh --mode grasp --target bottle` |
| Execução sem interface gráfica (headless) | `./scripts/run_perception.sh --no-window` |
| Teste rápido offline | `/usr/bin/python3 -m perception.smoke_offline` |

- `--mode nav` foca na ocupação ao redor do chassi
- `--mode grasp --target bottle` pede ao YOLO para procurar um alvo de preensão
- `--vlm off` ignora a legendagem de cena quando você só precisa de posicionamento ou detecção

## Resultado da Demonstração e Controles

Quando a janela da demonstração estiver em execução, estes atalhos de teclado estarão disponíveis:

| Tecla | Ação |
| --- | --- |
| `ESC` ou `q` | Sair |
| `o` | Executar YOLO-World uma vez para assistência à preensão |
| `a` | Disparar uma legenda VLM para entendimento da cena |
| `s` | Salvar um quadro |
| `m` | Alternar o mapa de ocupação |

Durante a execução, a demonstração também pode gravar:

- `output/perception/preview.jpg`
- `events.jsonl`

Esses arquivos são úteis para depuração, validação e integração posterior.

## Convenção de Coordenadas

O projeto usa esta convenção de BEV:

| Item | Significado |
| --- | --- |
| Parte superior da imagem | Frente do veículo |
| Origem de `base_link` | Aproximadamente o centro da BEV |
| `+X` | Para frente |
| `+Y` | Esquerda |

O YOLO pode, portanto, informar posições 2D aproximadas de alvos, como direção, distância à frente e deslocamento lateral, para auxiliar a preensão.

O resultado ainda é uma **aproximação no plano do solo**. Não é uma pose de preensão com 6 DoF e não deve ser tratada como verdade de base precisa para manipulação.

## Observações e Limitações

- Esta demonstração fornece **assistência de percepção**. Ela **não** envia comandos de controle para o chassi ou para o braço
- **YOLO** localiza alvos para auxiliar a preensão; ele não fecha o loop de preensão por conta própria
- A saída do **VLM** é para **entendimento da cena**, não para coordenadas
- A ocupação é uma **dica 2D do solo**, não um mapa de SLAM com LiDAR
- A fusão em tempo real é destinada a **sistemas Jetson com suporte a CUDA**
- O modo apenas CPU é útil para depuração, mas não é recomendado para implantação ao vivo

## Recursos

- [Primeiros Passos com reComputer Robotics J601](https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/)
- [GitHub](https://github.com/xbs0325/j601-surround-demo)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
