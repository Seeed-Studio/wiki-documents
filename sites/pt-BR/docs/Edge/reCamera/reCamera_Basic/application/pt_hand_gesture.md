---
title: Portando o modelo de reconhecimento de gestos de mão do MediaPipe para a reCamera
description: Este documento descreve como portar completamente o conjunto oficial de reconhecimento de gestos de mão do Google MediaPipe para a reCamera (Sophon/Bitmain SG200X), construindo um pipeline de "detecção da palma → detecção de pontos de referência → incorporação → classificação" e transmitindo os resultados para um PC via UDP para visualização.
keywords:
  - reCamera
  - Reconhecimento de gestos de mão
  - MediaPipe
  - Inferência em TPU
  - Quantização INT8
  - Transmissão UDP
slug: /recamera_hand_gesture
sku: 102991897, 100029708, 108990120
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 18
last_update:
  date: 06/26/2026
  author: Xuanjun Zhu
createdAt: '2026-06-26'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/pt-br/recamera_hand_gesture/
---

# Portando o modelo de reconhecimento de gestos de mão do MediaPipe para a reCamera

## Introdução

Este projeto demonstra como portar completamente o **conjunto de reconhecimento de gestos de mão MediaPipe** oficial do Google para a **reCamera** para realizar reconhecimento de gestos em tempo real e transmitir o vídeo e os resultados de reconhecimento para um PC para visualização via UDP.

O sistema pode reconhecer **8 categorias de gestos** (None / Closed_Fist / Open_Palm / Pointing_Up / Thumb_Down / Thumb_Up / Victory / ILoveYou), além de também fornecer **21 pontos de referência da mão** e informações de **lateralidade (mão esquerda/direita)**. Ele é adequado para os seguintes cenários de aplicação:

- **Controle de gestos para casa inteligente**: Controle luzes, cortinas e interruptores de eletrodomésticos por meio de gestos predefinidos, sem necessidade de voz ou aplicativo de celular.
- **Interação industrial sem toque**: Trabalhadores usando luvas ou com ambas as mãos ocupadas podem enviar comandos para equipamentos por meio de gestos simples.
- **Interação em educação e exposições**: Em museus de ciência ou salas de exposição, visitantes podem acionar conteúdo multimídia por meio de gestos para uma experiência imersiva.
- **Assistência em acessibilidade**: Fornece um ponto de entrada de controle de dispositivos baseado em gestos para usuários com deficiência auditiva ou mobilidade reduzida.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/hand_gesture/test.gif" />
</div>
## Preparação de hardware

Para executar esta demonstração, o seguinte hardware é necessário:

- **Um dispositivo reCamera** (todas as variantes de reCamera são suportadas)
- **Um PC** (usado para executar o receptor em Python para visualização; ele deve estar na mesma rede local que a reCamera)

Você pode escolher **qualquer versão da reCamera** de acordo com suas necessidades de implantação:

- reCamera 2002 series (Wi-Fi)
- reCamera Gimbal
- reCamera HQ PoE (Ethernet + PoE)

> **Observação:**  
> A versão PoE não suporta Wi-Fi e deve ser conectada à mesma rede local por meio de um switch compatível com PoE.

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## Como funciona


### Pipeline de conversão de modelo (TFLite → ONNX → cvimodel)

Baixe os modelos em formato TFLite do repositório oficial do MediaPipe. Eles precisam ser convertidos para o formato `.cvimodel` suportado pela TPU da reCamera:

```
MediaPipe TFLite (FLOAT16)
    │  tf2onnx (--channel_format none, keep NHWC)
    ▼
ONNX (FLOAT32, NHWC)  ← numerical reference (cos=1.0 vs TFLite)
    │  tpu-mlir model_transform + model_deploy
    ├─ BF16
    └─ INT8 (per-channel + real-data calibration)
        ▼
CVIMODEL (cv181x)
```

#### Verificação de precisão

Após a conversão, os modelos são verificados por meio de uma comparação tripla (TFLite vs ONNX vs cvimodel):

| Modelo | Saída | BF16 cos | INT8 cos |
|------|------|----------|----------|
| detector | scores | 1.0000 | 0.9896 |
| detector | boxes | 0.9999 | 0.9748 |
| landmark | lm63 | 1.0000 | 0.9999 |
| landmark | **world63** | 0.9997 | **0.8098**  |
| embedder | embedding | 1.0000 | 0.9992 |
| classifier | probs | 1.0000 | 0.9978 |

> **Observação**: Após a quantização INT8, a precisão de `world63` (pontos de referência em coordenadas de mundo) apresenta alguma perda (cos=0.81), mas o resultado de classificação de gestos de ponta a ponta é consistente com o TFLite (o julgamento de categoria é confiável). Se sua aplicação depender fortemente da precisão em coordenadas de mundo, é recomendável usar a versão BF16 deste modelo.


## Construindo a demonstração

Para compilar este exemplo, você precisa:

1. Fazer a compilação cruzada do programa em C++ no seu PC
2. Executar o executável compilado na reCamera
3. Executar o script receptor em Python no seu PC

### Etapa 1: Compilar o programa em C++

:::note
Antes de compilar esta solução, certifique-se de que você configurou o ambiente **ReCamera-OS** (versão 0.2.1 ou superior) de acordo com a [documentação principal do projeto](https://wiki.seeedstudio.com/pt-br/recamera_develop_with_c_cpp/), incluindo o caminho do SDK e a cadeia de ferramentas de compilação cruzada.
:::

Defina a variável de ambiente da cadeia de ferramentas de compilação cruzada:

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

Clone o [repositório](https://github.com/RobotXTeam/sscma-example-sg200x/tree/main) e entre no diretório da solução para compilar:

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/hand_gesture
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
rm -rf build && mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

O executável compilado está localizado em: `build/hand_gesture`

### Etapa 2: Preparar os arquivos de modelo

Este exemplo requer 4 arquivos de modelo `.cvimodel` (versões quantizadas em INT8) já fornecidos no [repositório](https://github.com/RobotXTeam/sscma-example-sg200x/tree/main/solutions/sesg-project/hand_gesture/model). Se você precisar converter os modelos por conta própria, consulte o [Guia de conversão de modelo](https://wiki.seeedstudio.com/pt-br/recamera_model_conversion/):

| Modelo | Nome do arquivo | Descrição |
|------|--------|------|
| Detecção da palma | `hand_detector_cv181x_int8.cvimodel` | Modelo 1: detecção de palma SSD |
| Detecção de pontos de referência | `hand_landmarks_detector_cv181x_int8.cvimodel` | Modelo 2: 21 pontos de referência |
| Incorporação de gestos | `gesture_embedder_cv181x_int8.cvimodel` | Modelo 3: incorporação de 128 dimensões |
| Classificação de gestos | `canned_gesture_classifier_cv181x_int8.cvimodel` | Modelo 4: classificação em 8 classes |

Envie o executável compilado e os arquivos de modelo para `/home/recamera/` na reCamera:

```bash
scp hand_gesture hand_detector_cv181x_int8.cvimodel hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel canned_gesture_classifier_cv181x_int8.cvimodel \
    recamera@<reCamera_IP>:/home/recamera/ # Make sure the PC and reCamera are on the same network segment, then replace <reCamera_IP> with the corresponding IP address
```

### Etapa 3: Configurar a reCamera

:::warning
Antes de executar o programa em C++, você deve parar os serviços padrão do Node-RED porque eles ocuparão os recursos da câmera. Execute os seguintes comandos via SSH:
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### Etapa 4: Executar o executável na reCamera

Faça login na reCamera via SSH, conceda permissão de execução e então execute:

```bash
cd /home/recamera/
chmod +x hand_gesture
```

#### Descrição dos parâmetros

| Parâmetro | Descrição | Padrão |
|------|------|--------|
| `palm_model` | Modelo de detecção da palma (obrigatório) | - |
| `landmark_model` | Modelo de detecção de pontos de referência (obrigatório) | - |
| `embedder_model` | Modelo de incorporação de gestos (obrigatório) | - |
| `classifier_model` | Modelo de classificação de gestos (obrigatório) | - |
| `min_score` | Limite de detecção da palma | `0.5` |
| `udp_ip` | Endereço IP do PC (habilita transmissão UDP) | - |
| `udp_port` | Número da porta UDP | - |
| `jpeg_w` | Largura do quadro de transmissão JPEG | `320` |
| `jpeg_h` | Altura do quadro de transmissão JPEG | `240` |
| `jpeg_fps` | Taxa de quadros da transmissão JPEG | `10` |
| `skip_multi` | Com múltiplas mãos (≥2), executar inferência a cada N quadros | `3` |
| `skip_single` | Com uma única mão, executar inferência a cada quadro | `1` |

#### Comandos de exemplo

**Uso básico (sem transmissão UDP, apenas inferência local)**:

```bash
sudo ./hand_gesture \
    hand_detector_cv181x_int8.cvimodel \
    hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel \
    canned_gesture_classifier_cv181x_int8.cvimodel
```

**Uso completo (transmissão UDP + parâmetros personalizados)**:

```bash
sudo ./hand_gesture \
    hand_detector_cv181x_int8.cvimodel \
    hand_landmarks_detector_cv181x_int8.cvimodel \
    gesture_embedder_cv181x_int8.cvimodel \
    canned_gesture_classifier_cv181x_int8.cvimodel \
    0.5 \
    192.168.XX.XX 5001 \
    320 240 10 \
    3 1
```

:::note
1. Substitua `192.168.XX.XX` pelo endereço IP real do PC que está na mesma rede que sua reCamera. A transmissão UDP só é habilitada quando ambos `udp_ip` e `udp_port` são fornecidos.
2. Se o programa exibir "[Heartbeat] Before the first retrieveFrame(RGB888) call..." e então travar, reinicie a reCamera.
:::

### Etapa 5: Executar o receptor em Python no PC

No seu PC, certifique-se de que as bibliotecas Python necessárias estejam instaladas:

```bash
pip install opencv-python numpy
```

Entre no diretório da solução e execute o script do receptor:

```bash
cd sscma-example-sg200x/solutions/sesg-project/hand_gesture
python3 tools/udp_receiver.py 5001
```

O PC exibirá uma janela de vídeo em tempo real, incluindo:

- **Fluxo de vídeo JPEG**
- **Caixa de detecção da palma** (retângulo azul)
- **21 pontos de referência da mão** (pontos vermelhos + esqueleto conectado)
- **Rótulo de classificação de gesto** (nome do gesto e confiança exibidos no canto superior esquerdo)
- **Informações de lateralidade (mão esquerda/direita)**

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/hand_gesture/test.png" />
</div>
<p align="center">Resultado de reconhecimento de gestos em tempo real no PC</p>

## Saída Esperada

### No terminal da reCamera

Após a execução do programa, serão exibidos logs de desempenho de inferência:

```log

[Perf] FPS=5.88 (inference=2.94) | palm=120.7ms | landmark=169.1ms | gesture=0.6ms | total=290.4ms | avg_hands=1.00
[Gesture] Open_Palm (70%) [R] palm=(0.43,0.34,0.69,0.69) score=0.85
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=80.7
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (70%) [R] palm=(0.45,0.36,0.72,0.73) score=0.85
[Gesture] Open_Palm (70%) [R] palm=(0.45,0.36,0.72,0.73) score=0.85
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=82.0
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (60%) [R] palm=(0.45,0.41,0.72,0.77) score=0.88
[Gesture] Open_Palm (60%) [R] palm=(0.45,0.41,0.72,0.77) score=0.88
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=81.9
[DET-DIAG] setInput ret=0, run ret=0
[Gesture] Open_Palm (60%) [R] palm=(0.47,0.42,0.73,0.76) score=0.81
[Perf] FPS=5.93 (inference=2.97) | palm=120.6ms | landmark=177.2ms | gesture=0.6ms | total=298.4ms | avg_hands=1.00
[Gesture] Open_Palm (60%) [R] palm=(0.47,0.42,0.73,0.76) score=0.81
[LB-DIAG] #2 warpAffine sx=0.3000 sy=0.3000 tx=0.0 ty=24.0
[LB-DIAG] #2 canvas 192x192: nonzero=82944 min=0 max=255 mean=81.8
```

> **Note**: The palm model requires a 192×192 input, which is below the minimum scaling resolution of the VPSS. Therefore, CH0 uses 640×480 (supported by the VPSS), and the model internally scales it to 192×192 via software letterbox.

### Erro de acesso à câmera

Se você vir um erro "No camera" ou "Camera device not found":

- Certifique-se de que os serviços do Node-RED estejam parados (veja a Etapa 3)
- Verifique a conexão da câmera

### Falha na conexão UDP

Se o PC não receber dados:

- Confirme se o PC e a reCamera estão na mesma rede
- Verifique as configurações de firewall no PC
- Certifique-se de que a porta UDP não esteja bloqueada
- Use `ping` para testar a conectividade entre os dispositivos

### Confiança anormal no reconhecimento de gestos

Se a confiança do gesto reconhecido estiver claramente errada:

- Confirme se o **patch de softmax em C++** após o modelo classificador foi implementado corretamente
- Verifique se a saída ONNX (contendo Softmax) não foi usada por engano em vez da saída cvimodel (logits)

## Estrutura do código C++

```
hand_gesture/
├── main/
│   ├── main.cpp                  # Entry: get frame → mmap → inference → UDP push
│   ├── hand_detector.{h,cpp}     # Model 1: palm detection (SSD post-processing + NMS)
│   ├── hand_landmarker.{h,cpp}   # Model 2: 21 landmarks (ROI warpAffine)
│   ├── gesture_recognizer.{h,cpp}# Model 3+4: embedder + classifier (with softmax patch)
│   ├── gesture_math.{h,cpp}      # letterbox / math utilities
│   ├── engine_utils.h            # tensor packing helpers
│   └── hand_types.h              # data structures + UDP POD protocol
├── tools/udp_receiver.py         # Python host receiver
└── CMakeLists.txt
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>