---
description: Construa seu braço robótico inteligente controlado por voz com reSpeaker + HorizonArm-Mark
title: Implantando Seu Braço Robótico Inteligente Controlado por Voz com reSpeaker + HorizonArm-Mark
keywords:
  - reSpeaker_XVF3800_USB_4_Mic_Array
  - reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_arm
sku: 114993702,114993700
last_update:
  date: 2/6/2026
  author: Mingxi
createdAt: '2026-02-09'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf_3800_arm/
---


> **Objetivo**: Fazer o braço robótico HorizonArm-Mark funcionar com o reSpeaker XVF3800 para realizar a operação de braço robótico controlado por voz.
> 
> **Seeed-Projects**: https://github.com/Seeed-Projects

reSpeaker XVF3800 é um array circular profissional de 4 microfones baseado no chip XMOS XVF3800. Ele oferece modo dual, captação de campo distante 360° (até 5 metros), Cancelamento de Eco Acústico (AEC), Controle Automático de Ganho (AGC), Direção de Chegada (DoA), desreverberação, formação de feixe (beamforming) e supressão de ruído, proporcionando captação de voz confiável em ambientes ruidosos. Com seu poderoso recurso de captura de áudio e redução de ruído, ele fornece “ouvidos” excelentes para aplicações de controle por voz.

![reSpeaker banner](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)

---

## Parte 1: Preparação de Hardware e Firmware do reSpeaker

Esta seção explica como gravar o firmware USB para o reSpeaker XVF3800. O firmware USB suporta o modo plug-and-play, permitindo conexão direta a PCs, Raspberry Pi e outros dispositivos.
O firmware USB suporta apenas USB DFU (não I2C DFU). Se o dispositivo estiver atualmente executando firmware I2S, entre primeiro no **Modo de Segurança** e então grave o firmware USB usando USB DFU. O Modo de Segurança suporta tanto USB DFU quanto I2C DFU.

**Recursos de Referência**:
- [Guia de Introdução ao reSpeaker XVF3800](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/)
- [Repositório de Firmware do reSpeaker XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)
- [Repositório de Código do reSpeaker](https://github.com/respeaker)

### 1.1 Preparação

#### Requisitos de Hardware

| Itens | Descrição |
|------|------|
| reSpeaker XVF3800 USB 4-Mic Array | Array de microfones controlador principal |
| Cabo USB Type-C | Usado para alimentação e transmissão de dados |
| Computador | Compatível com Windows / macOS / Linux |

#### Preparação de Software (Instalando dfu-util)

**Windows**:

1. Baixe e extraia os binários do `dfu-util` (por exemplo, `D:\dfu-util-0.11-binaries\win64\`)
2. Adicione o diretório que contém `dfu-util.exe` à variável PATH do sistema
3. Abra um prompt de comando e execute `dfu-util -V` para verificar a instalação
4. Se `dfu-util -l` retornar `LIBUSB_ERROR_NOT_SUPPORTED`, use o Zadig para substituir o driver do dispositivo por WinUSB

**macOS (Homebrew)**:

```bash
brew install dfu-util
dfu-util -l
```

**Linux (Debian / Ubuntu / Raspberry Pi OS)**:

```bash
sudo apt update
sudo apt install dfu-util
sudo dfu-util -l
```

#### Baixar o Firmware USB

Visite o repositório de firmware: https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares

Selecione um dos seguintes firmwares USB com base em suas necessidades (a versão de 2 canais geralmente é suficiente):

| Firmware | Canais | Descrição |
|------|--------|------|
| `respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin` | 2 | Saída processada de dois canais<br />Canal 0: Conferência<br />Canal 1: ASR |
| `respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin` | 6 | Canal 0: Áudio processado (Conferência)<br />Canal 1: Áudio processado (ASR)<br />Canais 2-5: Dados brutos para Microfones 0-3 |

### 1.2 Conectar e Entrar no Modo DFU

#### Instruções de Fiação

Ao conectar a um computador, use a **porta USB-C próxima ao conector de fone de ouvido de 3,5 mm** (lado XMOS). Não use a porta do lado XIAO.

#### Entrando no Modo de Segurança

O modo de segurança é necessário nas seguintes situações:
- O firmware atual está em modo I2S e precisa ser comutado para o modo USB
- O firmware está corrompido ou um firmware incorreto foi gravado

**Passos de Operação**:

1. Desconecte completamente o dispositivo da alimentação
2. Pressione e segure o botão **Mute** onboard
3. Mantendo o botão pressionado, reconecte a alimentação
4. Quando o LED vermelho começar a piscar, solte o botão — o dispositivo entrou no Modo de Segurança

### 1.3 Gravar o Firmware USB Usando dfu-util

#### Confirmar Visibilidade do Dispositivo

Execute o seguinte comando para verificar se o dispositivo é reconhecido:

```bash
# Linux / Raspberry Pi OS
sudo dfu-util -l

# macOS / Windows
dfu-util -l
```

A saída esperada deve incluir: `Found DFU: [2886:001a] ... alt=1, name="reSpeaker DFU Upgrade"`

#### Executar o Comando de Gravação

```bash
# Linux / Raspberry Pi OS (needs sudo)
sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin

# macOS / Windows (no sudo needed)
dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin
```

**Descrição dos Parâmetros**:
- `-R`: Reinicia/reinicializa o dispositivo após a conclusão da gravação
- `-e`: Apaga o firmware original
- `-a 1`: Grava na partição Upgrade
- `-D`: Especifica o caminho para o arquivo de firmware

Após a conclusão da gravação, o dispositivo será reiniciado automaticamente e carregará o firmware USB.

### 1.4 Verificação e Solução de Problemas

#### Verificar o Firmware

Após gravar o firmware USB, você pode verificá-lo da seguinte forma:

1. **Detecção pelo Gerenciador de Dispositivos**
   - **Windows**: Abra o Gerenciador de Dispositivos; você deverá ver “reSpeaker 3800” em “Controladores de som, vídeo e jogos”
   - **macOS/Linux**: Execute o comando `lsusb` para verificar se o dispositivo é reconhecido como um dispositivo de áudio USB

   ![usbset](https://files.seeedstudio.com/wiki/reSpeaker-arm/respeaker_usb.png)

2. **Teste de Gravação**
   - Use Audacity ou outro software de gravação
   - Selecione “reSpeaker 3800” como dispositivo de gravação
   - Defina a taxa de amostragem para 16000 Hz e o número de canais de acordo com o firmware gravado (2 ou 6 canais)
   - Inicie a gravação e teste a captura de voz

#### Perguntas Comuns

**P: Não é possível detectar o dispositivo com `dfu-util -l`?**
- Verifique o cabo e a porta USB (você deve usar o conector do lado XMOS, a porta USB-C próxima ao conector de fone de ouvido de 3,5 mm)
- Se o dispositivo estiver atualmente executando firmware I2S, entre primeiro no Modo de Segurança
- Usuários de Windows: certifiquem-se de que o driver WinUSB está sendo usado via Zadig

**P: Erro durante a gravação?**
- Tente trocar o cabo USB ou a porta do host
- Regrave em Modo de Segurança

**P: O computador não reconhece o dispositivo após a gravação?**
- Certifique-se de que você está usando o arquivo de firmware USB (nome do arquivo começa com `usb`), e não o firmware I2S
- Tente reconectar o dispositivo ou trocar a porta USB

**P: Sem som ou som anormal durante a gravação?**
- Verifique se a taxa de amostragem do software de gravação está definida para 16000 Hz
- Confirme se a contagem de canais corresponde ao firmware (2 ou 6 canais)
- Verifique se o microfone está no mudo (observe se o LED vermelho de mute está aceso; pressione o botão de mute para desmutar)

---

## Parte 2: Configuração de Software e Conexão

### 2.1 Conexão de Hardware

Certifique-se de que o computador de controle esteja conectado tanto ao braço robótico quanto ao array de microfones via USB.

### 2.2 Conectando o Braço Robótico

1. Abra o software de controle do braço robótico, HorizonArm
2. Clique no botão **Connect** no canto superior esquerdo
3. Selecione a porta serial correspondente (por exemplo, COM3) e a taxa de transmissão (500000)
4. Selecione **Motor ID Settings** → **Robotic Arm** → **Custom ID**, e confirme que são exibidos: 1, 2, 3, 4, 5, 6
5. Clique em **Connect**

![armset](https://files.seeedstudio.com/wiki/reSpeaker-arm/armset.png)

Quando a conexão for bem-sucedida, você poderá ver o status do braço robótico na interface do HorizonArm. Clique em **Go to Zero** para retornar o braço à posição inicial (estado reto a 90 graus).

### 2.3 Configurando o Sistema de IA

1. Clique na interface **Embodied Intelligence**
2. Configure os parâmetros:
   - Insira o endereço de API e a chave para o LLM (Large Language Model)
   - Selecione o ID da Câmera (normalmente 1, ou 0 para alguns modelos)
3. Clique em **Initialize AI System**
4. Entre na interface **Embodied Drive** para começar a usar

![aiset](https://files.seeedstudio.com/wiki/reSpeaker-arm/aiset.png)

### 2.4 Operação por Controle de Voz

Após entrar na interface de execução, você verá quatro botões de controle:

![monitor](https://files.seeedstudio.com/wiki/reSpeaker-arm/monitor.png)

**Métodos de Operação**:

| Função | Instruções de Operação |
|------|----------|
| **Execute Command** | Insira um comando na caixa de texto e clique no botão para executá-lo |
| **Run Dialogue** | Semelhante a uma função de gravação:<br />• Primeiro clique: Inicia a gravação<br />• Segundo clique: Encerra a gravação<br />A gravação será enviada ao LLM para processamento, os resultados serão exibidos na interface e o braço robótico executará ações com base nas instruções |
| **Enable Dialogue Mode** | O braço robótico entra em um estado de escuta contínua. Após dizer a palavra de ativação **"Mark"**, a fala subsequente será reconhecida como um comando e executada |

---

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nosso produto! Oferecemos múltiplos canais de comunicação para garantir que você tenha uma experiência tranquila com o produto.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
