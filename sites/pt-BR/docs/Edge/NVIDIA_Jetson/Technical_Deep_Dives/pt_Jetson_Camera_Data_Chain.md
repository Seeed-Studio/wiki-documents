---
description: Com base na análise de arquitetura e em experimentos em dispositivo real com reComputer Classic J3010 + Sony IMX219, explicar como a Jetson Camera funciona ao longo de toda a cadeia de dados Sensor → MIPI CSI-2 → NVCSI → VI → ISP, e comparar os dois caminhos de captura - V4L2 RAW e Argus ISP.
title: Jetson Camera
keywords:
  - jetson
  - camera
  - sensor
  - csi
  - nvcsi
  - vi
  - isp
  - imx219
  - v4l2
  - argus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_camera_data_chain
last_update:
  date: 11/02/2026
  author: youjiang
---

**Análise de arquitetura e experimentos em dispositivo real com reComputer Classic J3010 + Sony IMX219**

## Introdução

A câmera é um dos periféricos mais comuns na plataforma Jetson. Desde visão robótica e inspeção industrial até direção autônoma e inteligência incorporada, a câmera é um ponto de entrada importante para o sistema perceber o mundo real. Porém, durante o desenvolvimento com Jetson, muitas vezes encontramos alguns problemas aparentemente contraditórios:

- A câmera já foi reconhecida pelo sistema — por que ainda não consegue capturar imagens?
- `/dev/video0` já existe — por que ao executar `v4l2-ctl` ainda é relatado Timeout?
- O que fazem, respectivamente, NVCSI, VI e ISP?
- Como os dados RAW10 do Sensor se tornam uma imagem colorida visualizável?

Para entender esses problemas, não basta apenas conhecer V4L2 ou GStreamer. Precisamos começar pelo hardware e entender por quais módulos um único quadro de imagem passa dentro do Jetson e como esses módulos trabalham em conjunto. Este artigo apresentará a seguinte cadeia de dados:

**Sensor → MIPI CSI-2 → NVCSI → VI → ISP → Aplicação**

Ao mesmo tempo, usaremos um [reComputer Classic J3010](https://www.seeedstudio.com/reComputer-J3010-p-5589.html) rodando JetPack 6.2.1, juntamente com uma [Sony IMX219 CSI Camera](https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html), para verificar essa cadeia de dados passo a passo. Após ler este artigo, você aprenderá o seguinte. Espero que seja útil:

1. A arquitetura de hardware e o fluxo de dados completo da Jetson Camera.
2. As responsabilidades específicas do Sensor, NVCSI, VI e ISP.
3. A diferença entre os dois caminhos de captura: V4L2 RAW e Argus ISP.
4. Como usar ferramentas do Linux para observar a topologia real da Camera.
5. Como capturar imagens RAW e imagens coloridas processadas pelo ISP.
6. Como localizar problemas de câmera usando informações como VI Timeout e RTCPU Trace.

---

## 1. Plataforma de Teste em Dispositivo Real

O dispositivo de teste usado neste artigo é o reComputer Classic J3010 da Seeed Studio, com uma câmera Sony IMX219. O IMX219 é um Sensor de Imagem CMOS de 8 MP comum, também usado no Raspberry Pi Camera Module v2.

| Item | Configuração |
|---|---|
| Dispositivo | reComputer Classic J3010 |
| SoC | NVIDIA Jetson Orin Nano |
| JetPack | 6.2.1 |
| Jetson Linux | R36.4.3 |
| Ubuntu | 22.04.5 LTS |
| Kernel Linux | 5.15.148-tegra |
| Sensor da Câmera | Sony IMX219 |
| Interface da Câmera | MIPI CSI-2 |
| Resolução Máxima do Sensor | 3280 × 2464 |
| Formato de Dados da Câmera | RAW Bayer |
| Driver da Câmera | imx219 |

Observe que as especificações do sensor IMX219 podem não corresponder exatamente aos modos realmente expostos pelo driver atual. Os experimentos posteriores são baseados nos resultados de enumeração do dispositivo.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/test_platform.jpg"/></div>

Os arquivos experimentais no restante deste artigo são salvos de forma uniforme no diretório `~/jetson-camera-test` no Jetson.

---

## 2. Arquitetura Geral da Jetson Camera

Primeiro, precisamos construir um entendimento básico: **depois que os dados de imagem entram no Jetson, eles não são entregues diretamente ao CPU para processamento.**

Para uma câmera típica MIPI CSI Bayer, os dados precisam passar por vários módulos de hardware.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/camera_data_path.png"/></div>

Observe que o diagrama acima mostra a relação lógica; isso não significa que o ISP esteja necessariamente conectado fisicamente após a saída de DMA do VI. A transferência real de dados e o acesso à memória são gerenciados pelo hardware interno do SoC e pelo NVIDIA Camera Framework.

**Que trabalho cada módulo realiza?**

| Módulo | Nome Completo | Função Principal |
|---|---|---|
| Sensor | Image Sensor | Converte luz em dados de pixels digitais |
| CSI-2 | Camera Serial Interface 2 | Transmite dados de imagem por meio de uma interface serial de alta velocidade |
| NVCSI | NVIDIA Camera Serial Interface | Recebe, analisa e roteia dados CSI |
| VI | Video Input | Captura quadros de imagem e os grava na memória |
| ISP | Image Signal Processor | Realiza processamento de cor e qualidade de imagem em imagens RAW |

Essa cadeia pode ser ainda dividida em três estágios.

**Primeiro Estágio: Geração da Imagem**

O Sensor é responsável pela conversão fotoelétrica, exposição e conversão analógico-digital.

**Segundo Estágio: Transmissão e Captura da Imagem**

MIPI CSI-2, NVCSI e VI são responsáveis por transferir os dados de imagem para o Jetson e concluir a captura de quadros.

**Terceiro Estágio: Processamento de Imagem e Aplicações**

O ISP pode processar os dados RAW e, por fim, entregar a imagem ao Argus, GStreamer, OpenCV ou outras aplicações.

Observe que, no Jetson, imagens RAW Bayer **podem contornar o ISP**: os dados de imagem brutos podem ser obtidos diretamente por meio de V4L2, ou você pode usar o NVIDIA Camera Core e o Argus para processar imagens com o ISP. Estes são dois caminhos de uso de software diferentes.

---

## 3. Sensor: De Onde Vêm os Dados de Imagem?

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/image_sensor.png"/></div>

O ponto de partida da cadeia de dados da Camera é o Image Sensor, cujo papel principal é converter a imagem óptica capturada pela lente em dados de imagem digitais. Tomando o Sony IMX219 como exemplo, o sensor contém internamente principalmente uma matriz de pixels fotossensíveis, circuitos de processamento de sinal analógico, um conversor analógico-digital (ADC) e uma interface de saída de dados MIPI CSI-2.

Quando a luz é projetada na superfície do sensor através da lente, todo o processo de aquisição de imagem pode ser dividido nas seguintes etapas:

1. **Conversão Fotoelétrica**: A matriz de pixels fotossensíveis recebe luz, e cada pixel gera uma carga correspondente com base no número de fótons recebidos, convertendo assim o sinal óptico em um sinal elétrico.
2. **Processamento de Sinal Analógico**: O sensor lê a carga acumulada de cada pixel, converte-a em um sinal de tensão e realiza a amplificação e supressão de ruído necessárias.
3. **Conversão Analógico-Digital**: O ADC converte a tensão analógica em valores de pixels digitais. Por exemplo, no modo RAW10, cada pixel usa 10 bits para representar seu resultado amostrado.
4. **Transmissão de Dados**: O sensor empacota os dados de pixels digitais de acordo com o protocolo MIPI CSI-2 e os transmite através da interface física MIPI D-PHY para o módulo NVCSI do Jetson.

### 3.1 Entendendo RAW Bayer

As imagens coloridas que vemos todos os dias geralmente contêm três canais de cor: Vermelho, Verde e Azul. Mas, para um sensor Bayer típico, um único pixel geralmente registra apenas o valor amostrado de uma cor. Por exemplo, o arranjo RGGB é mostrado na figura abaixo.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/bayer_rggb.png"/></div>

Portanto, os dados RAW Bayer emitidos pelo sensor não são equivalentes a uma imagem colorida RGB completa. Para obter uma imagem colorida completa, as informações de cor precisam ser reconstruídas por meio de algoritmos como Demosaicing.

### 3.2 O Que Significa RAW10?

O modo de saída comum do IMX219 usa Bayer RAW de 10 bits. RAW10 significa que cada pixel contém 10 bits de informações brutas de amostragem válidas.

Por exemplo, uma imagem de 1920 × 1080 tem um total de:

1920 × 1080 = 2.073.600 pixels

Considerando apenas os dados de pixels válidos, o volume de dados necessário para RAW10 é:

2.073.600 × 10 / 8 = 2.592.000 Bytes

o que é cerca de 2,47 MiB.

No entanto, este é apenas o volume teórico de dados dos pixels válidos, e isso não significa que o arquivo RAW salvo na memória do Jetson deva ter exatamente esse tamanho. O método de empacotamento dos dados CSI-2, o layout de memória da saída do VI e o alinhamento de linha podem todos afetar o tamanho final real do Buffer. Isso será verificado mais adiante no experimento de captura RAW.

### 3.3 Interface de Controle e Interface de Dados do Sensor

O IMX219 possui duas interfaces com finalidades diferentes:

- **Interface de controle:** I2C, usada para configurar registradores como tempo de exposição, ganho analógico, taxa de quadros e modos de operação.
- **Interface de dados:** MIPI CSI-2, usada para emitir continuamente dados de pixels de imagem.

As duas são independentes uma da outra.

Por exemplo, o fato de o Jetson acessar com sucesso o IMX219 via I2C apenas mostra que a comunicação de controle do Sensor pode ter sido estabelecida.

Isso não pode provar que o Sensor começou a emitir imagens normalmente, nem pode provar que CSI e VI capturaram dados com sucesso.

### 3.4 Experimento em Dispositivo Real 1: Reconhecendo o Sony IMX219

Primeiro, instale as ferramentas v4l2:

```bash
sudo apt update
sudo apt install v4l-utils -y
v4l2-ctl --version
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/install_v4l2.png"/></div>

Em seguida, execute:

```text
ls -l /dev/video*
v4l2-ctl --list-devices
```

Uma CSI Camera registrada corretamente geralmente mostra o dispositivo de vídeo correspondente.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/video_devices.png"/></div>

Aqui você pode ver que o Jetson reconheceu uma câmera IMX219 e criou dois nós de dispositivo de vídeo. Em seguida, vamos ver as informações detalhadas do dispositivo:

```text
v4l2-ctl -d /dev/video0 --all
```

<details>

<summary> log de saída do v4l2-ctl </summary>

```yaml
seeed@ubuntu:~$ v4l2-ctl -d /dev/video0 --all
Driver Info:
        Driver name      : tegra-video
        Card type        : vi-output, imx219 9-0010
        Bus info         : platform:tegra-capture-vi:2
        Driver version   : 5.15.148
        Capabilities     : 0x84a00001
                Video Capture
                Metadata Capture
                Streaming
                Extended Pix Format
                Device Capabilities
        Device Caps      : 0x04200001
                Video Capture
                Streaming
                Extended Pix Format
Media Driver Info:
        Driver name      : tegra-camrtc-ca
        Model            : NVIDIA Tegra Video Input Device
        Serial           :
        Bus info         :
        Media version    : 5.15.148
        Hardware revision: 0x00000003 (3)
        Driver version   : 5.15.148
Interface Info:
        ID               : 0x0300000b
        Type             : V4L Video
Entity Info:
        ID               : 0x00000009 (9)
        Name             : vi-output, imx219 9-0010
        Function         : V4L2 I/O
        Pad 0x0100000a   : 0: Sink
          Link 0x0200000f: from remote pad 0x1000006 of entity '13e00000.host1x:nvcsi@15a00000-' (Unknown sub-device (0002000a)): Data, Enabled
Priority: 2
Video input : 0 (Camera 2: ok)
Format Video Capture:
        Width/Height      : 3280/2464
        Pixel Format      : 'RG10' (10-bit Bayer RGRG/GBGB)
        Field             : None
        Bytes per Line    : 6592
        Size Image        : 16242688
        Colorspace        : sRGB
        Transfer Function : Default (maps to sRGB)
        YCbCr/HSV Encoding: Default (maps to ITU-R 601)
        Quantization      : Default (maps to Full Range)
        Flags             :
Streaming Parameters Video Capture:
        Capabilities     : timeperframe
        Frames per second: 21.000 (21/1)
        Read buffers     : 0

Camera Controls

                     group_hold 0x009a2003 (bool)   : default=0 value=0 flags=execute-on-write
                    sensor_mode 0x009a2008 (int64)  : min=0 max=5 step=1 default=0 value=0 flags=slider
                           gain 0x009a2009 (int64)  : min=16 max=171 step=1 default=16 value=16 flags=slider
                       exposure 0x009a200a (int64)  : min=13 max=683710 step=1 default=2495 value=13 flags=slider
                     frame_rate 0x009a200b (int64)  : min=2000000 max=21000000 step=1 default=21000000 value=2000000 flags=slider
           sensor_configuration 0x009a2032 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[22] flags=read-only, volatile, has-payload
         sensor_mode_i2c_packet 0x009a2033 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[1026] flags=read-only, volatile, has-payload
      sensor_control_i2c_packet 0x009a2034 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[1026] flags=read-only, volatile, has-payload
                    bypass_mode 0x009a2064 (intmenu): min=0 max=1 default=0 value=0 (0 0x0)
                                0: 0 (0x0)
                                1: 1 (0x1)
                override_enable 0x009a2065 (intmenu): min=0 max=1 default=0 value=0 (0 0x0)
                                0: 0 (0x0)
                                1: 1 (0x1)
                   height_align 0x009a2066 (int)    : min=1 max=16 step=1 default=1 value=1
                     size_align 0x009a2067 (intmenu): min=0 max=2 default=0 value=0 (1 0x1)
                                0: 1 (0x1)
                                1: 65536 (0x10000)
                                2: 131072 (0x20000)
               write_isp_format 0x009a2068 (int)    : min=1 max=1 step=1 default=1 value=1
       sensor_signal_properties 0x009a2069 (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][18] flags=read-only, has-payload
        sensor_image_properties 0x009a206a (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][16] flags=read-only, has-payload
      sensor_control_properties 0x009a206b (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][36] flags=read-only, has-payload
              sensor_dv_timings 0x009a206c (u32)    : min=0 max=4294967295 step=1 default=0 dims=[30][16] flags=read-only, has-payload
               low_latency_mode 0x009a206d (bool)   : default=0 value=0
               preferred_stride 0x009a206e (int)    : min=0 max=65535 step=1 default=0 value=0
    override_capture_timeout_ms 0x009a206f (int)    : min=-1 max=2147483647 step=1 default=2500 value=2500
                   sensor_modes 0x009a2082 (int)    : min=0 max=30 step=1 default=30 value=5 flags=read-only
seeed@ubuntu:~$ v4l2-ctl -d /dev/video1 --all
Driver Info:
        Driver name      : tegra-embedded
        Card type        : tegra-capture-vi-metadata-2
        Bus info         : platform:tegra-capture-vi:2
        Driver version   : 5.15.148
        Capabilities     : 0x84a00001
                Video Capture
                Metadata Capture
                Streaming
                Extended Pix Format
                Device Capabilities
        Device Caps      : 0x04a00000
                Metadata Capture
                Streaming
                Extended Pix Format
Media Driver Info:
        Driver name      : tegra-camrtc-ca
        Model            : NVIDIA Tegra Video Input Device
        Serial           :
        Bus info         :
        Media version    : 5.15.148
        Hardware revision: 0x00000003 (3)
        Driver version   : 5.15.148
Interface Info:
        ID               : 0x03000013
        Type             : V4L Video
Entity Info:
        ID               : 0x00000011 (17)
        Name             : tegra-capture-vi-metadata-2
        Function         : V4L2 I/O
        Pad 0x01000012   : 0: Sink
Priority: 2
Format Metadata Capture:
        Sample Format   : 'G2XX' (Orbbec G2xx UVC Metadata)
        Buffer Size     : 96
```

</details>

Este comando pode fornecer as informações do driver, capacidades de captura, formato de imagem e alguns parâmetros de funcionamento do dispositivo atual.

Se o driver do Sensor falhar ao carregar, você pode procurar pistas no log do sistema. O log pode conter falhas de acesso I2C, problemas de alimentação ou erros relacionados ao Probe. Para o comando de captura de log, consulte o comando abaixo:

```text
sudo dmesg | grep -i imx219
```

---

## 4. MIPI CSI-2: Como a imagem vai do Sensor para o Jetson?

Depois que o Sensor gera a imagem, ele precisa enviar os dados para o Jetson por meio de uma interface física. O IMX219 envia imagens pela interface MIPI CSI-2. CSI-2 é um protocolo serial de alta velocidade usado para transmissão de dados de câmera, amplamente utilizado em sistemas embarcados.

### 4.1 CSI-2 e D-PHY

CSI-2 define o protocolo de transmissão dos dados da câmera, enquanto D-PHY é a implementação comum da camada física. Para uma conexão D-PHY típica, a Câmera transmite informações por meio de trilhas diferenciais de dados e uma trilha de clock. O que o CSI-2 envia não é apenas dado de pixel; ele também inclui informações de pacotes usadas para distinguir quadros, tipos de dados e canais, tais como: Início de Quadro (Frame Start), Fim de Quadro (Frame End), Tipo de Dado (Data Type), Canal Virtual (Virtual Channel), Carga de Pixels (Pixel Payload), etc. O receptor precisa identificar corretamente essas informações para restaurar o fluxo contínuo de dados nos quadros de imagem correspondentes.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/mipi_csi2_dphy.png"/></div>

*Fonte da imagem:* *https://blog.zhaw.ch/high-performance/2017/02/28/mipi-csidsi-interface-for-general-purpose-data-acquisition/*

### 4.2 Como o número de trilhas CSI afeta a largura de banda?

Pegue 1920 × 1080, 30 FPS, RAW10 como exemplo.

A taxa teórica de dados de pixels válidos por segundo é:

1920 × 1080 × 30 × 10 = 622.08 Mbps

O reComputer Classic J3010 usa duas Trilhas de Dados, então a taxa de dados de pixels válidos por trilha após distribuição uniforme é de cerca de:

311.04 Mbps/Trilha

Isso significa que, nas condições de captura acima, cada Trilha de Dados precisa carregar em média cerca de **311 Mbps de dados de pixels válidos** por segundo. Mas essa não é a exigência real de taxa da trilha. O cálculo real também precisa considerar a sobrecarga de pacotes CSI-2, o timing do sensor e a margem de largura de banda correspondente.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/csi2_circuit.png"/></div>

*Fonte da imagem:* *https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf*

---

## 5. NVCSI: Como o Jetson recebe dados da câmera?

Quando o IMX219 envia dados para o Jetson por meio de MIPI CSI-2, os dados entram no NVCSI. Ele é o módulo de recepção de Câmera dentro do SoC do Jetson. Aqui precisamos distinguir dois conceitos: **CSI-2 é um protocolo de transmissão de dados, enquanto NVCSI é o módulo de hardware dentro do Jetson que implementa a função correspondente de recepção de dados.** O NVCSI recebe dados CSI-2 do Sensor externo e os recebe, analisa e roteia de acordo com a configuração.

### 5.1 NVCSI e Canal Virtual

Para uma única câmera, o fluxo de dados geralmente é relativamente simples. Mas em cenários onde várias câmeras compartilham um link de dados CSI, o Canal Virtual pode ser usado. O Canal Virtual permite que diferentes fluxos lógicos de dados sejam transmitidos no mesmo link CSI-2. Por exemplo:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/virtual_channel.png"/></div>

Em um sistema de câmera GMSL2, vários Sensores podem passar por Serializer e Deserializer para enviar dados ao Jetson, e então diferentes fluxos de vídeo são distinguidos por meio de Canal Virtual. Portanto, em depuração com múltiplas câmeras, o mapeamento de Porta CSI, Canal Virtual e Canal VI é muito importante.

### 5.2 Experimento em dispositivo real 2: Visualizando o grafo de mídia da câmera

O Linux Media Controller Framework pode representar as relações de conexão entre dispositivos multimídia como um grafo de topologia.

No J3010, consulte os Dispositivos de Mídia registrados no sistema:

```bash
ls /dev/media*
# If a media0 device exists, view its details
media-ctl -d /dev/media0 -p
# Where:
# -d /dev/media0: specifies the Media Device to view.
# -p: prints the Media Controller topology information.
```

*Log retornado*

```bash
seeed@ubuntu:~$ ls /dev/media*
/dev/media0
seeed@ubuntu:~$ media-ctl -d /dev/media0 -p
Media controller API version 5.15.148

Media device information
------------------------
driver          tegra-camrtc-ca
model           NVIDIA Tegra Video Input Device
serial
bus info
hw revision     0x3
driver version  5.15.148

Device topology
- entity 1: 13e00000.host1x:nvcsi@15a00000- (2 pads, 0 link)
            type V4L2 subdev subtype Unknown flags 0
            device node name /dev/v4l-subdev0
        pad0: Sink
        pad1: Source

- entity 4: 13e00000.host1x:nvcsi@15a00000- (2 pads, 2 links)
            type V4L2 subdev subtype Unknown flags 0
            device node name /dev/v4l-subdev1
        pad0: Sink
                <- "imx219 9-0010":0 [ENABLED]
        pad1: Source
                -> "vi-output, imx219 9-0010":0 [ENABLED]

- entity 7: imx219 9-0010 (1 pad, 1 link)
            type V4L2 subdev subtype Sensor flags 0
            device node name /dev/v4l-subdev2
        pad0: Source
                [fmt:SRGGB10_1X10/3280x2464@1/21 field:none colorspace:srgb]
                -> "13e00000.host1x:nvcsi@15a00000-":0 [ENABLED]

- entity 9: vi-output, imx219 9-0010 (1 pad, 1 link)
            type Node subtype V4L flags 0
            device node name /dev/video0
        pad0: Sink
                <- "13e00000.host1x:nvcsi@15a00000-":1 [ENABLED]

- entity 17: tegra-capture-vi-metadata-2 (1 pad, 0 link)
             type Node subtype V4L flags 0
             device node name /dev/video1
        pad0: Sink

seeed@ubuntu:~$
```

Combinado com o log real, a topologia atual do Media Controller do IMX219 pode ser simplificada no diagrama a seguir.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/media_topology.png"/></div>

**Observe que o Media Graph descreve a topologia registrada no kernel; por si só ele não pode provar que dados CSI de alta velocidade estão sendo transmitidos normalmente.**

Além da cadeia de dados completa, o log atual também contém duas Media Entities adicionais.

**Sub-dispositivo NVCSI desconectado**

```text
entity 1: 13e00000.host1x:nvcsi@15a00000-
    (2 pads, 0 link)

    device node name /dev/v4l-subdev0
```

Este Sub-dispositivo NVCSI atualmente não possui nenhum Media Link estabelecido, portanto ele não pertence ao caminho de captura IMX219 conectado acima.

**Nó de Captura de Metadados**

```text
entity 17: tegra-capture-vi-metadata-2
    (1 pad, 0 link)

    device node name /dev/video1
```

Combinado com o resultado de `v4l2-ctl -d /dev/video1 --all`, pode-se confirmar que `/dev/video1` é um dispositivo de Captura de Metadados, não um nó normal de captura de imagem para uma segunda câmera.

Isso mostra que, **no Linux, o número de nós `/dev/video*` não é necessariamente igual ao número de câmeras realmente conectadas.** Os desenvolvedores devem determinar a função real de um dispositivo combinando as Capacidades de Dispositivo V4L2 e o Media Graph.

---

## 6. VI: Como os dados CSI se tornam quadros de imagem?

NVCSI é responsável por receber os dados CSI, enquanto a principal responsabilidade do VI (Video Input) é concluir a captura de quadros de acordo com a configuração e gravar os dados de imagem na memória. Em um caminho típico de captura RAW V4L2:

`IMX219` -> `MIPI CSI-2` -> `NVCSI` -> `VI` -> `Memory Buffer` -> `V4L2` -> `Application`

O VI transfere dados de imagem por meio de mecanismos como DMA, evitando que a CPU tenha que mover os dados da câmera pixel a pixel.

### 6.1 Quadro e Buffer

Para captura de vídeo, as aplicações geralmente não leem diretamente o sinal serial CSI. Em vez disso, elas solicitam Buffers de imagem por meio do V4L2, iniciam o Streaming e leem o Buffer correspondente após a conclusão da captura.

O processo de captura simplificado é o seguinte:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/v4l2_frame_capture.png"/></div>

Este também é o motivo pelo qual o V4L2 usa mecanismos de Buffer como MMAP.

### 6.2 Experimento em dispositivo real 3: Capturando dados RAW

Primeiro, verifique o formato de imagem atual do IMX219:

```text
v4l2-ctl -d /dev/video0 --get-fmt-video
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/get_fmt_video.png"/></div>

Execute um teste de captura RAW de 100 quadros:

```text
v4l2-ctl -d /dev/video0 \
  --stream-mmap \
  --stream-count=100 \
  --verbose
```

Se os quadros puderem ser capturados continuamente, isso significa que, no modo atual, o caminho de Buffer de Sensor, NVCSI, VI e V4L2 já possui capacidade básica de captura de dados.

Em seguida, salve um quadro RAW:

```text
v4l2-ctl -d /dev/video0 \
  --stream-mmap \
  --stream-count=1 \
  --stream-to=imx219.raw
```

Verifique o tamanho do arquivo:

```text
ls -lh imx219.raw
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/raw_file.png"/></div>

### 6.3 Por que o RAW10 não ocupa necessariamente apenas 10 bits?

Na cadeia de dados da Câmera do Jetson, precisamos distinguir o **formato de transmissão MIPI CSI-2** do **formato de dados que o VI grava na memória**. O IMX219 transmite dados RAW10 sobre MIPI CSI-2, onde cada pixel válido contém 10 bits de informação. Mas, no formato de captura V4L2 atual, o VI armazena cada pixel em um **container de 16 bits (2 Bytes)**, com alinhamento de linha aplicado.

Portanto, o tamanho real do Buffer não pode ser simplesmente calculado como 10 bit/Pixel.

Vamos analisar com base na captura de log acima. A resolução atual é 3280 × 2464:

- **Calculado como empacotamento RAW10 compacto:** 3280 × 2464 × 10 / 8 = 10.102.400 Bytes, cerca de **9,63 MiB**.
- **Calculado como container de 16 bits:** 3280 × 2464 × 2 = 16.163.840 Bytes, cerca de **15,42 MiB**.
- **Calculado a partir dos Bytes Por Linha reais:** 6592 × 2464 = 16.242.688 Bytes, cerca de **15,49 MiB**.

Quando 100 quadros foram capturados com sucesso, a taxa de quadros real foi de cerca de **21,19 FPS**, e cada Buffer de quadro usou 16.242.688 Bytes.

A imagem RAW de quadro único salva posteriormente tinha cerca de 16 MB, consistente com o tamanho do Buffer de captura.

**Conclusão: os 10 bits em RAW10 descrevem a profundidade de bits efetiva de dados de cada pixel e não significam que a imagem ocupa apenas 10 bit/Pixel na memória.** Na configuração atual de captura do Jetson VI, RAW10 é armazenado em um contêiner de 16 bits e é afetado pelo alinhamento de Bytes Por Linha, portanto o uso real de memória é maior do que o volume de dados RAW10 compactado.

### 6.4 Como exibir dados RAW?

Após capturar com sucesso a imagem RAW por meio do V4L2, obtivemos o arquivo `imx219.raw`. Mas os dados RAW Bayer não são uma imagem de cor RGB comum e não podem ser exibidos corretamente por um visualizador de imagens comum. Para convertê-la em uma imagem colorida, primeiro é necessário ler os dados de pixel de acordo com o layout real de memória e, em seguida, recuperar a imagem RGB por meio do algoritmo de **Demosaicing**.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/bayer_demosaic.png"/></div>

*Fonte da imagem:* *https://jetsonhacks.com/2022/01/13/in-depth-cameras/*

Com base na captura de tela acima, podemos determinar as seguintes características da imagem RAW atual:

- A resolução da imagem é 3280 × 2464.
- O arranjo Bayer é RGGB, com 10 bits de dados válidos por pixel.
- O V4L2 armazena cada pixel em um contêiner de 16 bits.
- Cada linha ocupa, na verdade, 6592 Bytes, enquanto os dados de pixel válidos ocupam apenas 6560 Bytes.

Pode-se determinar que cada linha tem 32 Bytes extras de Padding. Ao ler o arquivo RAW, você deve considerar o Padding de linha e não pode simplesmente remodelar todos os dados em um array bidimensional de 3280 × 2464.

A seguir, é usada a combinação de Python + OpenCV para a conversão:

```python
import cv2
import numpy as np

# IMX219 V4L2 capture configuration
WIDTH = 3280
HEIGHT = 2464
BYTES_PER_LINE = 6592

# 1. Read RAW data as 16-bit little-endian
raw = np.fromfile("imx219.raw", dtype="<u2")

expected = HEIGHT * BYTES_PER_LINE // 2
assert raw.size == expected, "RAW file size mismatch"

# 2. Restore row layout and remove padding
raw = raw.reshape(HEIGHT, BYTES_PER_LINE // 2)
raw = raw[:, :WIDTH]

# 3. Extract 10-bit values for preview
# Experimental decoding based on observed image structure
raw10 = raw >> 6

# 4. Normalize brightness for visualization
low, high = np.percentile(raw10, [1, 99.5])

if high <= low:
    raise ValueError("Invalid RAW intensity range")

normalized = np.clip(
    (raw10.astype(np.float32) - low) / (high - low),
    0, 1
)

# 5. Apply gamma correction
gamma = 0.65
raw8 = (np.power(normalized, gamma) * 255).astype(np.uint8)

# 6. Save grayscale preview
cv2.imwrite("imx219-gray.png", raw8)

# 7. Bayer demosaicing
# RGGB Bayer pattern
bgr = cv2.cvtColor(raw8, cv2.COLOR_BayerRG2BGR)

# 8. Save color image
cv2.imwrite("imx219-demosaic.png", bgr)

print("RAW conversion completed")
print("Output: imx219-gray.png")
print("Output: imx219-demosaic.png")
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/imx219_demosaic.png"/></div>

:::info
**A imagem convertida pelo OpenCV não é equivalente à imagem processada pelo NVIDIA ISP.** Devido à falta de processamento completo de balanço de branco, correção de cor, redução de ruído e outros, a imagem final pode ficar mais escura em brilho e com cores imprecisas.
:::

---

## 7. ISP: Como os dados RAW se tornam uma imagem colorida?

O ISP (Image Signal Processor) é responsável por converter a imagem bruta do Sensor em uma imagem adequada para exibição, codificação ou algoritmos subsequentes. Para RAW Bayer, as funções típicas de processamento de imagem incluem:

| Function | Role |
|---|---|
| Black Level Correction | Correção de nível de preto |
| Demosaicing | Reconstrução de cor Bayer |
| White Balance | Balanço de branco |
| Color Correction | Correção de cor |
| Noise Reduction | Redução de ruído da imagem |
| Tone Mapping | Processamento de brilho e faixa dinâmica |
| Sharpening | Nitidez da imagem |

Ao mesmo tempo, o Jetson Camera Framework também pode coordenar o controle 3A:

- AE: Exposição Automática
- AWB: Balanço de Branco Automático
- AF: Foco Automático

Observe que 3A não pertence totalmente ao próprio processamento de pixels do ISP. Por exemplo, AE precisa ajustar a exposição e o ganho por meio do Sensor Control, enquanto AF depende de o módulo de sensor ter um mecanismo de foco controlável.

### 7.1 Por que o ISP precisa de Tuning?

Mesmo que duas Câmeras usem o mesmo Sensor, isso não significa que, após o ISP, elas produzirão exatamente a mesma imagem. Isso ocorre porque a qualidade da imagem depende não apenas do Sensor, mas também de fatores como a Lente, Filtro IR, parâmetros de calibração do Sensor e condições reais de iluminação. Essas diferenças podem fazer com que as imagens diferem em brilho, cor, balanço de branco e desempenho de ruído.

Portanto, é necessário usar o **ISP Tuning** para ajustar os parâmetros relevantes de processamento de imagem para um Módulo de Câmera específico, como balanço de branco, correção de cor, redução de ruído e nitidez, a fim de obter resultados de imagem mais precisos e estáveis. Em resumo, **o ISP é responsável por processar imagens, enquanto o ISP Tuning decide como otimizar o efeito de processamento para diferentes câmeras.**

### 7.2 Experimento em dispositivo real 4: Capturando imagens do ISP por meio do Argus

Nos experimentos anteriores, obtivemos os dados RAW10 do IMX219 por meio do V4L2 e usamos o OpenCV para concluir o Demosaicing básico. Em seguida, usamos o **NVIDIA Argus Camera Framework** para deixar a imagem passar pelo ISP do Jetson e observar a diferença na qualidade da imagem entre as duas abordagens.

Este experimento usa o reComputer Classic J3010 + IMX219, conectando-se ao Jetson remotamente via SSH para concluir a captura de imagem.

**step1. Verificar o plugin do GStreamer:**

```text
gst-inspect-1.0 nvarguscamerasrc
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/gst_inspect.png"/></div>

Se as informações do plugin forem exibidas normalmente, significa que o GStreamer pode encontrar o plugin.

**step2. Testar a captura de imagem por meio do Argus**

Em um ambiente SSH, especialmente quando o X11 Forwarding está habilitado, variáveis de ambiente como `DISPLAY` podem afetar a inicialização do EGLStream do NVIDIA Argus. Se você estiver acessando o dispositivo Jetson remotamente, use `env -u` para remover temporariamente as variáveis de ambiente relevantes:

```text
env -u DISPLAY -u WAYLAND_DISPLAY -u LD_LIBRARY_PATH \
gst-launch-1.0 -e \
  nvarguscamerasrc sensor-id=0 num-buffers=100 ! \
  'video/x-raw(memory:NVMM),width=1920,height=1080,framerate=30/1,format=NV12' ! \
  fakesink
```

Onde:

- `nvarguscamerasrc`: obtém imagens da Câmera por meio do NVIDIA Argus.
- `sensor-id=0`: seleciona o primeiro Sensor Argus disponível.
- `num-buffers=100`: captura 100 quadros.
- `memory:NVMM`: usa buffers multimídia da NVIDIA.
- `format=NV12`: especifica o formato de imagem de saída.
- `fakesink`: recebe e descarta a imagem sem exibi-la ou salvá-la.

O uso de `env -u` aqui afeta apenas o comando atual e não modifica permanentemente as variáveis de ambiente do sistema.

Se o programa capturar normalmente e terminar sem nenhum erro no log, isso significa que a Câmera atual pode gerar imagens básicas por meio do Argus.

**step3. Salvar a imagem colorida processada pelo ISP**

Depois de confirmar que a captura do Argus funciona normalmente, execute o comando a seguir para salvar uma imagem JPEG:

```text
env -u DISPLAY -u WAYLAND_DISPLAY -u LD_LIBRARY_PATH \
gst-launch-1.0 -e \
  nvarguscamerasrc sensor-id=0 num-buffers=1 ! \
  'video/x-raw(memory:NVMM),width=1920,height=1080,framerate=30/1,format=NV12' ! \
  nvvidconv ! \
  'video/x-raw,format=I420' ! \
  jpegenc ! \
  filesink location=imx219-isp.jpg
```

Neste Pipeline:

- **nvarguscamerasrc**: aciona o caminho de captura da Câmera e processamento do ISP por meio do Argus.
- **nvvidconv**: converte a imagem NVMM em um formato de memória e de pixel suportado pelo codificador subsequente.
- **jpegenc**: codifica a imagem como JPEG.
- **filesink**: salva os dados JPEG em um arquivo.

Após salvar, verifique:

```text
ls -lh imx219-isp.jpg
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/isp_ls.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/imx219_isp.jpg"/></div>

Comparada com a imagem de Demosaic do OpenCV acima, a imagem processada pelo ISP possui otimização mais completa de cor, brilho e ruído. A conclusão aqui é: **V4L2 é usado principalmente para obter a imagem RAW do Sensor, enquanto o Argus pode acionar o NVIDIA ISP para gerar imagens coloridas com processamento de imagem mais completo.**

> Observe que a imagem salva ainda apresenta problemas de desfoque e franja roxa, porque o foco da lente e os parâmetros do ISP ainda não foram ajustados.

---

## 8. V4L2 e Argus: dois caminhos diferentes de dados de Câmera

Por meio dos experimentos anteriores, usamos duas maneiras diferentes de capturar imagens. Uma é o V4L2 e a outra é o Argus. Ambos podem usar o hardware subjacente de Câmera do Jetson, mas os caminhos de uso e os cenários aplicáveis são diferentes.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/v4l2_vs_argus.png"/></div>

### 8.1 Captura RAW com V4L2

O V4L2 pode obter diretamente os dados RAW de saída do Sensor Bayer sem passar pelo ISP do Jetson.

Essa abordagem é adequada para **desenvolvimento de driver de Sensor, depuração de Câmera CSI, análise de dados RAW e desenvolvimento de algoritmos personalizados de processamento de imagem**.

### 8.2 Captura com ISP via Argus

Argus é um Camera Framework fornecido pela NVIDIA. Ele pode combinar o Sensor Control e o ISP para realizar demosaicing, balanço de branco, correção de cor, redução de ruído e outros processamentos em imagens RAW, e gerar formatos de imagem como NV12.

Essa abordagem é mais adequada para **pré-visualização de câmera em tempo real, captura de vídeo e aplicações de visão que exigem boa qualidade de imagem**.

### 8.3 Comparação

| Item | V4L2 RAW | Argus ISP |
|---|---|---|
| Saída típica | RAW Bayer | NV12 / YUV |
| Usa ISP | Não é necessário | Pode ser usado |
| Controle do sensor | Controles V4L2 | Argus Camera Core |
| Cenários aplicáveis | Depuração de driver, análise RAW | Imagens coloridas, aplicações de vídeo |
| Ferramentas comuns | v4l2-ctl | nvarguscamerasrc |
| Necessita de ajuste de ISP | Não é necessário para captura RAW | A qualidade da imagem pode depender do Tuning |

Observe que **V4L2 não se limita a fornecer dados RAW**. "V4L2 RAW" aqui refere-se especificamente ao cenário de capturar diretamente os dados brutos Bayer do Sensor através do Jetson VI.

### 8.4 Por que o Argus falha enquanto o V4L2 funciona?

Mesmo que o V4L2 consiga capturar imagens RAW normalmente, isso não significa que o Argus necessariamente funcionará.

Isso ocorre porque o Argus não depende apenas do Sensor subjacente, NVCSI e VI, mas também envolve Camera Core, controle do Sensor, configuração do ISP, gerenciamento de Buffer da NVIDIA e outros aspectos.

Portanto, quando o V4L2 funciona mas o Argus falha, você pode priorizar a verificação de:

- **Configuração do Camera Core**: se o Sensor Mode e os parâmetros relacionados estão corretos.
- **Controles do Sensor**: se controles como exposição e ganho funcionam normalmente.
- **Serviço Argus**: se o `nvargus-daemon` apresenta alguma exceção.
- **Ambiente de execução**: se há conflito entre SSH X11 Forwarding, EGL e ambientes de bibliotecas dinâmicas.

---

## 9. Device Tree: como o Jetson sabe onde a câmera está conectada?

Do ponto de vista de hardware, o Sensor se conecta ao Jetson através da interface CSI. Mas simplesmente conectar o cabo não é suficiente para que a Câmera funcione automaticamente. O Jetson também precisa conhecer a relação de conexão e o modo de funcionamento específico do Sensor. Essas informações geralmente são fornecidas pelo Device Tree e pelo Driver correspondente do Sensor.

### 9.1 Device Tree da câmera

Tomando o reComputer Classic J401 com um IMX219 como exemplo, a Seeed Studio fornece a configuração correspondente do Device Tree no repositório [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra). Ela envolve principalmente dois arquivos:

**① Arquivo de configuração da placa carrier J401**
[recomputer-orin-j401.conf](https://github.com/Seeed-Studio/Linux_for_Tegra/blob/r36.4.3/recomputer-orin-j401.conf)

Este arquivo especifica o Device Tree base usado pelo J401 e faz referência ao Overlay da câmera IMX219:

**② Overlay da câmera IMX219**
[tegra234-p3767-camera-p3768-imx219-dual-seeed.dts](https://github.com/Seeed-Studio/Linux_for_Tegra/blob/r36.4.3/source/hardware/nvidia/t23x/nv-public/overlay/tegra234-p3767-camera-p3768-imx219-dual-seeed.dts)

Este arquivo configura duas câmeras IMX219 para o J401, definindo informações de conexão de hardware como o I2C MUX, GPIO e interface CSI, e faz referência à configuração base do Sensor IMX219.

Observe que isso é apenas parte da configuração no Overlay. O Sensor Mode completo também inclui parâmetros como resolução, quantidade de lanes CSI, profundidade de bits de pixel e clocks.

### 9.2 Sensor Mode: como o IMX219 transmite imagens?

O Sensor Mode no Device Tree é usado para descrever o método específico de funcionamento da câmera. Neste experimento em dispositivo real com o J401, lemos os seguintes parâmetros do `mode0` do IMX219 a partir do Device Tree em tempo de execução:

```text
mode0 {
    num_lanes = "2";
    tegra_sinterface = "serial_a";
    phy_mode = "DPHY";

    mode_type = "bayer";
    pixel_phase = "rggb";

    active_w = "3280";
    active_h = "2464";

    csi_pixel_bit_depth = "10";
    pix_clk_hz = "182400000";
};
```

*Os itens acima são os campos-chave extraídos e organizados a partir do Device Tree em tempo de execução do J401, não a configuração completa do Sensor Mode.*

### 9.3 Experimento em dispositivo real 5: visualizando o Device Tree em uso

O que está salvo no GitHub é o código-fonte do Device Tree, enquanto o Jetson na verdade usa o Device Tree após o Overlay ter sido carregado e aplicado durante o processo de boot. Podemos visualizar diretamente a configuração atualmente efetiva via SSH.

Aqui pesquisamos diretamente por propriedades que contenham `imx219` no Device Tree em tempo de execução:

```text
sudo grep -rla 'imx219' /proc/device-tree 2>/dev/null
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/grep_imx219.png"/></div>

Leia os parâmetros reais do Sensor Mode:

```text
CAM=/proc/device-tree/bus@0/cam_i2cmux/i2c@0/rbpcv2_imx219_a@10
ls "$CAM"

for key in \
  num_lanes \
  tegra_sinterface \
  phy_mode \
  mode_type \
  pixel_phase \
  active_w \
  active_h \
  csi_pixel_bit_depth \
  pix_clk_hz
do
  printf "%-25s : " "$key"
  tr -d '\0' < "$CAM/mode0/$key" 2>/dev/null || echo "Not found"
  echo
done
```

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_camera/sensor_mode.png"/></div>

---

## Resumo

Por meio da análise da cadeia de dados da câmera do Jetson, podemos entender todo o processo de captura de imagem como os seguintes elos: **o Sensor é responsável por gerar os dados de imagem, o MIPI CSI-2 é responsável pela transmissão, o NVCSI é responsável pelo recebimento, o VI é responsável pela captura e o ISP é responsável pelo processamento de imagem.**

No nível de software, o Jetson também fornece diferentes maneiras de acessar a câmera. Para depuração de driver e análise de dados brutos, você pode capturar dados RAW através do V4L2; para aplicações que exigem processamento de cor, autoexposição e pré-visualização em tempo real, você pode obter imagens processadas através do Argus e do ISP.

**O verdadeiro valor de entender essa cadeia de dados é poder localizar problemas com mais precisão.**

Claro, o conhecimento envolvido na câmera do Jetson vai muito além disso. Este artigo se concentra em como os dados de imagem entram no Jetson, mas ainda há muito que vale a pena discutir em profundidade sobre o formato dos próprios dados RAW e os princípios do processamento de imagem.

---

## Referências

- https://docs.nvidia.com/jetson/archives/r36.4/DeveloperGuide/SD/CameraDevelopment.html
- https://docs.nvidia.com/jetson/archives/r36.4.4/DeveloperGuide/SD/Multimedia/AcceleratedGstreamer.html
- https://docs.nvidia.com/jetson/archives/r36.4/ApiReference/l4t_mm_10_argus_camera_recording.html
- https://github.com/Seeed-Studio/Linux_for_Tegra
- https://wiki.seeedstudio.com/pt-br/J401_carrierboard_Hardware_Interfaces_Usage/
- https://wiki.seeedstudio.com/pt-br/how_to_use_camera_imx219/

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
