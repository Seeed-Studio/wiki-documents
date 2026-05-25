---
description: Primeiros passos com o AI Assistant.
title: Primeiros passos com o AI Assistant
image: https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top_Pic.webp
slug: /ai_assistant_getting_started
sku: 114993645
last_update:
  date: 08/07/2025
  author: Robin(STMicroelectronics),Atom
createdAt: '2025-08-07'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/ai_assistant_getting_started/
---

# Primeiros passos com o AI Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/1-114993645-Al-Assistant-v1.1.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://www.seeedstudio.com/AI-Assistant-p-6510.html">
   <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
 </a>
</div>

## Introdução

O kit de desenvolvimento AI Assistant foi criado em conjunto pela Seeed Studio e pela STMicroelectronics. Esta é uma plataforma de desenvolvimento projetada para aplicações de ponta em IA na borda. Centralizada no MCU de alto desempenho STM32N657, com seu acelerador de IA ST Neural-ART integrado, ela combina perfeitamente poderosas capacidades de computação de IA com as vantagens clássicas de um MCU: baixo consumo de energia, formato compacto e boa relação custo-benefício. O kit vem equipado com uma câmera `global shutter` integrada, um sensor IMU com unidade de processamento de IA, uma tela sensível ao toque de alta definição e um módulo Wi-Fi, oferecendo uma solução completa de hardware e software para desenvolver produtos de próxima geração em visão inteligente e interação por voz.

### Recursos

- **Recurso 1: Microcontrolador de IA topo de linha**
 Alimentado pelo ST STM32N657, com um núcleo Arm® Cortex®-M55 de alto desempenho e uma NPU ST Neural-ART integrada que oferece até 600 GOPS para aceleração eficiente de modelos de IA.
- **Recurso 2: Sensor de Visão de nível profissional**
Equipado com uma câmera ST VD55G1 `global shutter`, fornecendo imagens nítidas e sem distorção de objetos em movimento rápido, o que é fundamental para tarefas de visão computacional de alta precisão.
- **Recurso 3: Sensoriamento inteligente com ISPU**
Conta com uma IMU LSM6DSO16IS com Unidade Inteligente de Processamento de Sensor (ISPU) integrada, permitindo reconhecimento de gestos e atividades com consumo ultrabaixo de energia, sem acordar o processador principal.
- **Recurso 4: Periféricos interativos ricos**
Integra um display tátil capacitivo de 4,0 polegadas 480x480, um microfone digital de alta fidelidade e um codec de áudio, fornecendo uma base completa de hardware para desenvolver aplicações de IA interativas prontas para uso.
- **Recurso 5: Conectividade abrangente**
Inclui um módulo Wi-Fi integrado para conectividade IoT perfeita, além de uma porta USB-C e múltiplos cabeçalhos de expansão para máxima flexibilidade de desenvolvimento.

## Visão geral do hardware

Antes de começar qualquer coisa, é essencial conhecer alguns parâmetros básicos do produto. A tabela a seguir fornece informações sobre as características do **AI Assistant**.

| Categoria             | Recurso               | Especificação                                                                 |
|----------------------|------------------------|-------------------------------------------------------------------------------|
| **Sistema central**      | Controlador principal        | STMicroelectronics STM32N657X0H3Q                                             |
|                      | Arquitetura do núcleo      | Arm® Cortex®-M55                                             |
|                      | Unidade de Processamento Neural | ST Neural-ART, 600 GOPS                                                       |
|                      | Memória externa        | 128MB NOR Flash, 32MB DRAM                                                    |
| **Sensores**          | Câmera                 | STMicroelectronics VD55G1 (800x700, Global Shutter)                           |
|                      | IMU                    | STMicroelectronics LSM6DSO16IS (6 eixos com ISPU integrado)                    |
|                      | Magnetômetro           | STMicroelectronics LIS2MDL                                                    |
| **Periféricos**      | Display                | LCD TFT 4,0" (480x480), Toque Capacitivo                                      |
|                      | Áudio                  | Codec Cirrus Logic WM8994 e Microfone Digital ST MP34DT06JTR                  |
| **Conectividade**     | Sem fio               | Módulo Wi-Fi MXCHIP EMW3080                                                   |
|                      | Interfaces             | USB-C x1, Porta SWD x1, Expansão de Microfone x1, Interface de Câmera RPi x1  |
| **Mecânica e Energia**| Dimensões (Carcaça)    | 130mm x 90mm                                                                  |
|                      | Fonte de alimentação           | 5V via USB-C ou Porta para Bateria de Lítio                                   |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Hardware_Overview.png" style={{width:800, height:'auto'}}/></div>

### Visão geral da camada superior da placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Top.png" style={{width:800, height:'auto'}}/></div>

### Visão geral da camada inferior da placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Bottom.png" style={{width:800, height:'auto'}}/></div>

***

## Comece com o aplicativo de referência do AI Assistant

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/stm32-hotspot/STM32N6-AI-Assistant-People-Detection" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

Para começar, **clone o repositório a partir do link do GitHub**`git clone https://github.com/stm32-hotspot/STM32N6-AI-Assistant-People-Detection.git` na sua pasta local de preferência.

Aplicação de Visão Computacional para permitir a implantação de modelos de detecção de objetos na placa AI Assistant. É baseada na versão oficial do pacote de aplicação n6-ai-people-detection-v1.0.0 para a placa STM32N6570-DK.

Esta aplicação vem pré-compilada com um modelo de detecção de pessoas "TinyYOLOv2".

Esta seção fornece uma visão geral da aplicação. Documentação adicional está disponível em [Documentação adicional da aplicação](#documentação-adicional-da-aplicação).

### Recursos demonstrados neste exemplo

- Fluxo de aplicação multithread (Azure RTOS ThreadX)
- Inferência de modelo de IA quantizado acelerada por NPU
- Dois `pipes` DCMIPP
- Recorte, dizimação e redução de escala DCMIPP
- Implementação LTDC de dupla camada
- Uso do ISP DCMIPP
- Modo de desenvolvimento
- Boot a partir da Flash Externa

### Suporte de hardware

- Kit AI Assistant

- 3 Câmeras são suportadas:
  - MB1854B IMX335

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/3-114993645-Al-Assistant-v1.1.jpg" style={{width:800, height:'auto'}}/></div>
Kit AI Assistant com câmera VD55G1.

### Versão das ferramentas

- STM32CubeIDE (**STM32CubeIDE 1.18.0**)
- STM32CubeProgrammer (**v2.18.0**)
- [STEdgeAI](https://www.st.com/en/development-tools/stedgeai-core.html) (**v2.1.0**)

### Conexão ST-Link

**Conectores do lado direito**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC1.PNG" style={{width:1000, height:'auto'}}/></div>

**Conectores do lado esquerdo**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC2.PNG" style={{width:1000, height:'auto'}}/></div>

**Conexão do depurador**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC3.PNG" style={{width:1000, height:'auto'}}/></div>

**Pinagem dos headers**
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/STLC4.PNG" style={{width:1000, height:'auto'}}/></div>

### Modos de boot

O STM32N6 não possui nenhuma flash interna. Para manter o seu firmware após uma reinicialização, você deve programá-lo na flash externa.
Como alternativa, você pode carregar seu firmware diretamente da SRAM (modo de desenvolvimento). No entanto, no modo de desenvolvimento, se você desligar a placa, seu programa será perdido.

**Modos de boot:**

- Modo de desenvolvimento: carregar o firmware a partir da sessão de depuração na RAM (chave de boot para a direita)
- Boot a partir da flash: programar o firmware na flash externa (chave de boot para a esquerda)

### Início rápido usando binários pré-compilados

#### Gravar binários pré-compilados

Três binários devem ser programados na flash externa da placa usando o procedimento a seguir:

  1. Coloque a chave BOOT na posição superior.
  2. Grave `Binary/ai_assistant_fsbl.hex` (a ser feito uma vez) (bootloader de primeira etapa).
  3. Grave `Binary/network_data.hex` (parâmetros das redes; a ser alterado apenas quando a rede for modificada).
  4. Grave `Binary/AI_Assistant_Ref_Project.hex` (aplicação de firmware).
  5. Coloque a chave BOOT na posição inferior.
  6. Execute uma sequência de desligar/ligar a alimentação.

#### Como programar arquivos Hex usando a interface do STM32CubeProgrammer

Veja [Como programar arquivos Hex STM32CubeProgrammer](#como-programar-arquivos-hex).

#### Como programar arquivos Hex usando a linha de comando

Certifique-se de ter a pasta bin do STM32CubeProgrammer adicionada ao seu path.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# First Stage Boot Loader
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/ai_fsbl.hex

# Network Parameters and Biases
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/network_data.hex

# Application Firmware
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Binary/x-cube-n6-ai-people-detection.hex
```

### Início Rápido Usando Código-Fonte

Antes de compilar e executar a aplicação, você precisa programar `network_data.hex` (pesos e vieses do modelo).

Esta etapa só precisa ser feita uma vez, a menos que você altere o modelo de IA.
Consulte [Início Rápido Usando Binários Pré‑compilados](#início-rápido-usando-binários-pré‑compilados) para mais detalhes.

Mais informações sobre os modos de boot estão disponíveis em [Visão Geral do Boot](#visão-geral-do-boot) .

#### Compilação e Execução da Aplicação - Modo Dev

**Certifique‑se de deixar a chave na posição da direita.**

##### STM32CubeIDE

Clique duas vezes em `STM32CubeIDE/.project` para abrir o projeto no STM32CubeIDE. Compile e execute com os botões de build e run.

##### Makefile

Antes de executar os comandos abaixo, certifique‑se de que eles estejam no seu PATH.

1. Compile o projeto usando o `Makefile` fornecido:

```bash
make -j8
```

2. Abra um servidor GDB conectado ao alvo STM32:

```bash
ST-LINK_gdbserver -p 61234 -l 1 -d -s -cp <path-to-stm32cubeprogramer-bin-dir> -m 1 -g
```

3. Em uma sessão de terminal separada, inicie uma sessão GDB para carregar a imagem do firmware na memória do dispositivo:

```bash
$ arm-none-eabi-gdb build/Project.elf
(gdb) target remote :61234
(gdb) monitor reset
(gdb) load
(gdb) continue
```

#### Compilação e Execução da Aplicação - Boot a partir da Flash

**Certifique‑se de deixar a chave na posição da direita.**

##### STM32CubeIDE

Clique duas vezes em `STM32CubeIDE/.project` para abrir o projeto no STM32CubeIDE. Compile com o botão de build.

##### Makefile

Antes de executar os comandos abaixo, certifique‑se de que eles estejam no seu PATH.

1. Compile o projeto usando o `Makefile` fornecido:

```bash
make -j8
```

Depois que seu app for compilado com Makefile, STM32CubeIDE ou EWARM, você pode adicionar uma assinatura ao arquivo bin:

```bash
STM32_SigningTool_CLI -bin build/Project.bin -nk -t ssbl -hv 2.3 -o build/Project_sign.bin
```

Você pode programar o arquivo bin assinado no endereço `0x70100000`.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# Adapt build path to your IDE
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w build/Project_sign.bin 0x70100000
```

Nota: Somente o binário do App precisa ser programado se o FSBL e o network_data.hex já tiverem sido programados anteriormente.

### Problemas Conhecidos e Limitações

- (NN_WIDTH * NN_BPP) deve ser múltiplo de 16.
- (LCD_BG_WIDTH * 2) deve ser múltiplo de 16.

***

## Documentação Adicional da Aplicação

### Visão Geral da Aplicação

#### Fluxo de Dados da Aplicação

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DataFlow.JPG" style={{width:1000, height:'auto'}}/></div>

#### Diagrama de Temporização da Aplicação

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/ThreadTiming.JPG" style={{width:1000, height:'auto'}}/></div>

### Detalhes da Pegada de Memória

#### Dados Somente Leitura

| Nome           | Tamanho | Local    | Notas            |
|----------------|---------|----------|------------------|
| `network_data` | 10.59 MB | .rodata  | FLASH xSPI2 8b   |

#### Dados de Leitura e Escrita

| Nome               | Tamanho  | Local      | Notas                             |
|--------------------|----------|------------|-----------------------------------|
| `lcd_bg_buffer`    | 2300 KB  | .psram_bss | PSRAM / (800x480x2) x 3 / RGB565  |
| `lcd_fg_buffer`    | 1500 KB  | .psram_bss | PSRAM / (800x480x2) x 2 / ARGB4444|
| `nn_input_buffers` | 294 KB   | .psram_bss | PSRAM / (224x224x3) x 2 / RGB888  |
| `nn_output_buffers`| 12 KB    | .bss       | SRAM / 5880 x 2                   |
| `activations`      | 507 KB   | 0x34200000 | NPURAMS                           |
| `threads stacks`   | 20 KB    | .bss       | SRAM / 4096 * 5                   |

### DCMIPP e ISP

#### Visão Geral do DCMIPP

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/DCMIPP.JPG" style={{width:1000, height:'auto'}}/></div>

- O Pipe 1 é habilitado usando `CMW_CAMERA_Start(DCMIPP_PIPE1, *ptr_dst, CAMERA_MODE_CONTINUOUS);` para transmitir continuamente imagens do imx335 para o `lcd_bg_buffer[]` com DISPLAY_BUFFER_NB em buffer. Observe que `ptr_dst` será atualizado no frame_event do pipe1.
- O Pipe 2 é habilitado usando `CMW_CAMERA_Start(DCMIPP_PIPE2, *ptr_dst, CAMERA_MODE_CONTINUOUS);` para transmitir continuamente imagens do imx335 para o `nn_input_buffers[]` com buffer duplo. Observe que `ptr_dst` será atualizado no frame_event do pipe2. Isso permite descartar o quadro anterior se o buffer ainda estiver em uso pela thread de nn.
- Para cada captura, a configuração do ISP é atualizada para melhorar a qualidade da imagem dependendo das condições de iluminação. Ela é inicializada por meio de `ISP_Init` e então executada com `ISP_BackgroundProcess`.

Para mais detalhes sobre o DCMIPP, consulte a seção Digital Camera Interface Pixel Pipeline (DCMIPP) no Manual de Referência do STM32N6.

### Visão Geral do Boot

#### Modo Dev

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/Dev_mode.png" style={{width:1000, height:'auto'}}/></div>

#### Boot a partir da Flash com First Stage Boot Loader

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/FSBL1.png" style={{width:1000, height:'auto'}}/></div>

### Opções de Compilação

Alguns recursos são habilitados usando opções de compilação ou por meio de `app_config.h`:

- [Orientação da Câmera](#orientação-da-câmera)

Esta documentação explica esses recursos e como modificá‑los.

#### Orientação da Câmera

As câmeras permitem inverter a imagem ao longo de dois eixos.

- `CMW_MIRRORFLIP_MIRROR`: modo selfie
- `CMW_MIRRORFLIP_FLIP`: inverter de cabeça para baixo
- `CMW_MIRRORFLIP_FLIP_MIRROR`: inverter em ambos os eixos
- `CMW_MIRRORFLIP_NONE`: padrão

1. Abra **app_config.h**.

2. Altere a definição de `CAMERA_FLIP`:

```c
/* Defines: CMW_MIRRORFLIP_NONE; CMW_MIRRORFLIP_FLIP; CMW_MIRRORFLIP_MIRROR; CMW_MIRRORFLIP_FLIP_MIRROR; */

#define CAMERA_FLIP CMW_MIRRORFLIP_NONE
```

### Faça o Deploy do Seu Modelo TFLite

Para executar seu próprio modelo de detecção de objetos, siga estas etapas:

- [1. Gerar Modelo em C a partir do Modelo TFLite](#1-gerar-modelo-em-c-a-partir-do-modelo-tflite)
- [2. Programar Seus Dados de Rede](#2-programar-seus-dados-de-rede)
- [3. Fornecer Informações de NN em `app_config.h`](#3-fornecer-informações-de-nn-em-app_configh)
  - [Tipo de Pós‑processamento](#tipo-de-pós‑processamento)
  - [Configurar Parâmetros de Pós‑processamento por Arquivo de Usuário](#configurar-parâmetros-de-pós‑processamento-por-arquivo-de-usuário)
  - [Informações de Tamanho da NN](#informações-de-tamanho-da-nn)
  - [Rótulos de Classe](#rótulos-de-classe)
  - [Atraso de Exibição](#atraso-de-exibição)
- [4. Compilar a Aplicação](#4-compilar-a-aplicação)
- [5. Executar a Aplicação](#5-executar-a-aplicação)
  - [Modo Dev](#modo-dev)
  - [Boot a partir da Flash](#boot-a-partir-da-flash)

#### 1. Gerar Modelo em C a partir do Modelo TFLite

Para gerar o `network.c`, `network_ecblobs.h` e o arquivo que contém os parâmetros da rede, você deve instalar o STM32Cube.AI

1. Adicione `<folderInstall>/Utilities/<your_os>/` ao seu path para que `stedgeai` seja reconhecido pelo seu bash.

2. Adicione `<stm32cubeide_folderInstall>/plugins/com.st.stm32cube.ide.mcu.externaltools.gnu-tools-for-<plugin_version>/tools/bin` ao seu path para que `arm-none-eabi-objcopy` seja reconhecido pelo seu bash.

```bash
cd Model
stedgeai generate --no-inputs-allocation --no-outputs-allocation --model quantized_tiny_yolo_v2_224_.tflite --target stm32n6 --st-neural-art default@user_neuralart.json
cp st_ai_output/network_ecblobs.h .
cp st_ai_output/network.c .
cp st_ai_output/network_atonbuf.xSPI2.raw network_data.xSPI2.bin
arm-none-eabi-objcopy -I binary network_data.xSPI2.bin --change-addresses 0x70380000 -O ihex network_data.hex
```

Você pode encontrar o seguinte script em **Model/generate-n6-model.sh**

#### 2. Programar Seus Dados de Rede

Agora você pode programar seus dados de rede na flash externa.

```bash
export DKEL="<STM32CubeProgrammer_N6 Install Folder>/bin/ExternalLoader/MX66UW1G45G_STM32N6570-DK.stldr"

# Weights and parameters
STM32_Programmer_CLI -c port=SWD mode=HOTPLUG -el $DKEL -hardRst -w Model/network_data.hex
```

#### 3. Fornecer Informações de NN em `app_config.h`

Você precisa editar as últimas linhas de **Inc/app_config.h** para tornar o app compatível com sua rede.

##### Tipo de Pós‑processamento

Esta aplicação suporta quatro tipos de pós‑processamento de detecção de objetos. Você pode selecionar um deles. Edite `POSTPROCESS_TYPE` com um destes valores.

```c
#define POSTPROCESS_OD_YOLO_V2_UF       (10) /* Yolov2 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V5_UU       (11) /* Yolov5 postprocessing; Input model: uint8; output: uint8           */
#define POSTPROCESS_OD_YOLO_V8_UF       (12) /* Yolov8 postprocessing; Input model: uint8; output: float32         */
#define POSTPROCESS_OD_YOLO_V8_UI       (13) /* Yolov8 postprocessing; Input model: uint8; output: int8            */
```

##### Informações de Tamanho da NN

Edite seus `NN_WIDTH` e `NN_HEIGHT`.

**AVISO:** `NN_WIDTH * NN_BPP` deve ser múltiplo de 16.

**AVISO:** Somente o formato RGB888 foi testado.

##### Rótulos de Classe

Modifique `NB_CLASSES` e `classes_table` com seus próprios rótulos de classe e número de classes.

##### Atraso de Exibição

Usar `DISPLAY_DELAY` permite atrasar a imagem exibida para que as informações exibidas pelo modelo fiquem alinhadas com a imagem mostrada. Ajuste esse valor de acordo com o tempo de inferência do modelo.

##### Configurar Parâmetros de Pós‑processamento por Arquivo de Usuário

Para alterar seus parâmetros de pós‑processamento, você precisa editar o **Inc/postprocess_conf.h**.

A documentação da biblioteca de pós‑processamento está disponível em **Postprocess lib**.

Você pode editar os limiares de IOU, valores de âncora e outros parâmetros.

Alguns desses parâmetros precisam estar alinhados com seu modelo (número de classes, por exemplo).

##### Configurar Tamanho do Buffer de Saída

Edite `NN_BUFFER_OUT_SIZE` para que ele tenha o tamanho em bytes do seu tensor de saída.

#### 4. Compilar a Aplicação

Depois que seus dados de rede tiverem sido programados (etapa 2) e os detalhes da rede configurados (etapa 3), você pode compilar sua aplicação seguindo:

[Compilação e execução da aplicação](#compilação-e-execução-da-aplicação---modo-dev)

#### 5. Executar o Aplicativo

##### Modo de Desenvolvimento

Consulte a seção [Compilar e executar o aplicativo](#Compilar-e-executar-o-aplicativo---modo-de-desenvolvimento) para mais detalhes.

##### Inicializar a partir da Flash

Consulte [Programar aplicativo na flash externa](#Compilar-e-executar-o-aplicativo---Inicializar-a-partir-da-Flash) para programar o seu firmware.

### Como Programar Arquivos Hex

0. Certifique-se de que a placa está em modo de desenvolvimento (chave de boot na posição de modo de desenvolvimento).
1. Abra o STM32CubeProgrammer.
2. Selecione a flash MX66UW1G45G_STM32N6570-DK na aba External loaders.
3. Configuração do ST-Link: defina o modo como "Hot plug".
4. Conecte a placa.
5. Na aba "Erasing & programming", selecione o arquivo `Binary/ai_assistant_fsbl.hex`.
6. Aguarde a conclusão da gravação.
7. Na aba "Erasing & programming", selecione o arquivo `Binary/network_data.hex`.
8. Aguarde a conclusão da gravação.
9. Na aba "Erasing & programming", selecione o arquivo `Binary/AI_Assistant_Ref_Project.hex`.
10. Aguarde a conclusão da gravação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/selectBoard.JPG" style={{width:1000, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/img/flashHex.JPG" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Esquemático do AI Assistant](https://files.seeedstudio.com/wiki/AI_Assistant_V1.1/res/SCH_AI%20ASSISTANT_V1-1%20RELEASE_20250314.pdf)

## Suporte Técnico

Este produto é suportado pela **STMicroelectronics**.
Para qualquer problema técnico ou dúvida, entre em contato:
**Contato de Suporte Técnico:
 [[Clique aqui](https://ols.st.com/s/)]**
