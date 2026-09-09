---
description: Crie uma demonstração de visão surround com olho de peixe e quatro câmeras no Jetson AGX Thor. Faça a fusão em tempo real de uma visão BEV para posicionamento do chassi, use YOLO para auxiliar a preensão com braço robótico e use um VLM para ajudar a entender a cena.
title: Crie uma Demonstração de Visão Surround com Quatro Câmeras Olho de Peixe no Jetson AGX Thor
keywords:
  - Jetson AGX Thor
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
  - Sensing
image: https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif
slug: /jetson_fisheye_surround_view_demo
sku: 100066562, 101090101
last_update:
  date: 08/24/2026
  author: haochen
createdAt: '2026-08-18'
updatedAt: '2026-08-24'
url: https://wiki.seeedstudio.com/pt-br/jetson_fisheye_surround_view_demo/
---

## Introdução

Esta demonstração executa um pipeline de **visão surround com quatro câmeras olho de peixe** no **NVIDIA Jetson AGX Thor**. Quatro câmeras ao redor do chassi são calibradas e fundidas em uma **visão de cima (BEV)** em tempo real. A ocupação indica o movimento do chassi, o YOLO-World localiza alvos de preensão e um VLM gera legendas da cena.

{/* <div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_01.gif" />
</div> */}

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/o0NTeeLV4Vk" title="Four-Camera Fisheye Surround View Demo on Jetson AGX Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Layout BEV após a fusão:

- **Parte superior da imagem** = frente do veículo
- **Centro da imagem** = corpo do veículo
- As câmeras apontam para **frente, trás, esquerda e direita**

:::note
YOLO responde **onde está o alvo**. O VLM responde **como é a cena**. A ocupação é uma indicação 2D no solo, não um mapa de LiDAR.
:::

Esta demonstração foi verificada no **reComputer Robotics J601**.

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> reComputer Robotics J601 </th>
        <th> Sensing SG3S-ISX031C-GMSL2F </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-101090101-3mp-gmsl2-camera-module-190-degree.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thor-p-6937.html" target="_blank" rel="noopener noreferrer">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html" target="_blank" rel="noopener noreferrer">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

## Principais Recursos

- Fusão na GPU com CUDA OpenCV
- Calibração via web para intrínsecos, extrínsecos e emendas
- Ocupação, YOLO-World e VLM em um único BEV compartilhado
- Verificado em **Jetson AGX Thor** / **reComputer Robotics J601**

## Pré-requisitos

### Hardware

- **reComputer Robotics J601** (Jetson AGX Thor)
- **Quatro câmeras olho de peixe GMSL2 [Sensing SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)**
- **Um [cabo Mini-Fakra 4 em 1](https://www.seeedstudio.com/Mini-fakra-Coaxial-Cable-4-in-1-0-5m-Female-to-Female-p-6484.html)** para que todas as quatro câmeras compartilhem uma única porta GMSL
- Um monitor ou uma sessão de área de trabalho remota
- Acesso à rede se você abrir a página de calibração a partir de outro computador

Opcional:

- Um chassi móvel, se você quiser usar a ocupação para assistência de movimento
- Um braço robótico, se você quiser usar as posições de alvo do YOLO para assistência de preensão

### Software

- JetPack com suporte a driver GMSL para o J601
- OpenCV com CUDA habilitado para fusão em tempo real
- Ambiente Python para a interface web de calibração
- Dependências do YOLO-World e do modelo VLM opcional

## Conexão de Hardware

Conecte quatro câmeras olho de peixe Sensing GMSL2 a **uma porta Mini-Fakra GMSL** no **reComputer Robotics J601** antes da calibração. O J601 possui dois conectores Mini-Fakra (até oito câmeras GMSL2). Esta demonstração usa **uma porta GMSL** e um cabo Mini-Fakra 4 em 1.

1. Alimente a placa J601 pela entrada DC XT30.
2. Se estiver usando a placa de expansão GMSL, encaixe-a primeiro no conector de expansão de câmera.
3. Conecte o cabo Mini-Fakra 4 em 1 em **uma porta Mini-Fakra GMSL**.
4. Conecte as quatro câmeras olho de peixe Sensing às quatro pontas Fakra desse cabo.
5. Monte as câmeras ao redor do chassi de forma que apontem para **frente, trás, esquerda e direita**.
6. Opcionalmente conecte um monitor HDMI se quiser assistir à janela BEV ao vivo na placa.

Para inicialização do GMSL no J601, consulte [Robotics J601 Hardware Interfaces Usage](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_robotics_j601_interfaces_usage/).

<div align="center">
  <img width={900}
   src="https://files.seeedstudio.com/wiki/Thor/jetson_fisheye_surround_view_demo_03.png" />
</div>

:::tip
Depois que as câmeras estiverem conectadas, confirme os nós `/dev/video*` e o mapeamento em `config/camera_profile.json`. Consulte [Step 1. Check Camera Mapping](#step-1-check-camera-mapping).
:::

## Instalação e Configuração

### Etapa 1. Clonar o Repositório

```bash
git clone https://github.com/xbs0325/j601-surround-demo.git
cd j601-surround-demo
```

### Etapa 2. Compilar o CUDA OpenCV

Antes de executar a demonstração de visão surround ao vivo, certifique-se de que o OpenCV com CUDA habilitado esteja disponível.

```bash
cd ~/j601-surround-demo
./scripts/build_opencv_cuda.sh --jobs $(nproc)
source scripts/env_opencv_cuda.sh
python3 -c "import cv2; print(cv2.__version__, cv2.cuda.getCudaEnabledDeviceCount())"
```

Se a configuração estiver correta, a contagem de dispositivos CUDA deve ser `1`.

### Etapa 3. Instalar Dependências da Calibração Web

A interface web de calibração depende de `aiortc` e pacotes Python relacionados.

```bash
./scripts/install_web_deps.sh
```

:::tip
No Ubuntu 24.04, não execute um simples `pip3 install -r requirements.txt` no Python do sistema. Este projeto mantém o ambiente de fusão separado do ambiente de modelos de percepção.
:::

### Etapa 4. Instalar Dependências de Percepção

Para habilitar a assistência de preensão com YOLO-World e o entendimento de cena com VLM, execute:

```bash
./scripts/setup_perception_thor.sh
./scripts/download_perception_models.sh
```

Isso prepara o ambiente de percepção e baixa os arquivos de modelo necessários.

## Como Usar

Calibre primeiro as quatro câmeras e depois inicie a demonstração de visão surround ao vivo. **Não** execute ambos ao mesmo tempo; eles precisam de acesso exclusivo às câmeras.

### Etapa 1. Verificar o Mapeamento das Câmeras

O mapeamento dos dispositivos de câmera é definido em:

```bash
config/camera_profile.json
```

Mapeamento típico no repositório:

- `front`: `/dev/video0`
- `back`: `/dev/video2`
- `left`: `/dev/video3`
- `right`: `/dev/video1`

Confirme esses nós de dispositivo antes da calibração. Depois que a demonstração estiver em execução, você pode conferir novamente cobrindo a câmera **frontal**: a **parte superior** da imagem BEV deve escurecer. Se frente e trás estiverem trocadas, altere o mapeamento de dispositivos no arquivo de configuração. Não edite os arquivos de resultado da calibração para isso.

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

Coloque o tabuleiro de xadrez na região de sobreposição entre as duas visões de câmera. Quando ambas as visões detectarem o tabuleiro e mostrarem status pronto, o sistema poderá refinar aquela emenda.

### Etapa 3. Executar a Demonstração

Após a conclusão da calibração, inicie a demonstração de visão surround:

```bash
./run.sh
```

Isso inicia o pipeline BEV ao vivo: fusão, ocupação, assistência de preensão com YOLO e legendagem de cena opcional com VLM.

Você também pode iniciar o lançador de percepção diretamente:

```bash
./scripts/run_perception.sh --vlm off --mode nav --range 2.5
./scripts/run_perception.sh --mode grasp --target bottle
```

### Modos Comuns

| Objetivo | Comando |
| --- | --- |
| Assistência ao movimento do chassi | `./scripts/run_perception.sh --vlm off --mode nav --range 2.5` |
| Assistência de preensão com braço robótico | `./scripts/run_perception.sh --mode grasp --target bottle` |
| Execução sem interface gráfica (headless) | `./scripts/run_perception.sh --no-window` |
| Teste rápido offline | `/usr/bin/python3 -m perception.smoke_offline` |

- `--mode nav` foca na ocupação ao redor do chassi
- `--mode grasp --target bottle` faz o YOLO procurar um alvo de preensão
- `--vlm off` ignora a legendagem de cena quando você só precisa de posicionamento ou detecção

## Resultado da Demonstração e Controles

Quando a janela da demonstração estiver em execução, estes atalhos de teclado estarão disponíveis:

| Tecla | Ação |
| --- | --- |
| `ESC` ou `q` | Sair |
| `o` | Executar YOLO-World uma vez para assistência de preensão |
| `a` | Disparar uma legenda de VLM para entendimento da cena |
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
| Origem de `base_link` | Aproximadamente o centro do BEV |
| `+X` | Para frente |
| `+Y` | Esquerda |

O YOLO pode, portanto, relatar posições-alvo 2D aproximadas, como direção, distância à frente e deslocamento lateral, para auxiliar a preensão.

O resultado ainda é uma **aproximação no plano do solo**. Não é uma pose de preensão com 6 DoF e não deve ser tratada como verdade de base para manipulação precisa.

## Observações e Limitações

- Esta demonstração fornece **assistência de percepção**. Ela **não** envia comandos de controle para o chassi ou para o braço
- O **YOLO** localiza alvos para auxiliar a preensão; ele não fecha o loop de preensão por conta própria
- A saída do **VLM** é para **entendimento de cena**, não para coordenadas
- A ocupação é uma **indicação 2D no solo**, não um mapa de SLAM com LiDAR
- A fusão em tempo real é destinada ao **Jetson AGX Thor com CUDA habilitado**
- O modo apenas CPU é útil para depuração, mas não é recomendado para implantação ao vivo

## Recursos

- [Vídeo de demonstração](https://www.youtube.com/watch?v=o0NTeeLV4Vk)
- [Primeiros passos com o reComputer Robotics J601](https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/)
- [Uso das interfaces de hardware do Robotics J601](https://wiki.seeedstudio.com/pt-br/recomputer_jetson_robotics_j601_interfaces_usage/)
- [GitHub](https://github.com/xbs0325/j601-surround-demo)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
