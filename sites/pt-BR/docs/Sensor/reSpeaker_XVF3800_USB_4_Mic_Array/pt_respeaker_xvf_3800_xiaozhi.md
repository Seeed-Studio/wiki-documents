---
description: Construa seu assistente de voz Xiaozhi com IA em nuvem usando ESP32S3 + reSpeaker
title: Faça o deploy do seu assistente de voz Xiaozhi com IA em nuvem usando ESP32S3 + reSpeaker
keywords:
  - reSpeaker_XVF3800_USB_4_Mic_Array
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_xiaozhi
sku: 114993702,114993700
last_update:
  date: 1/29/2026
  author: Mingxi
createdAt: '2026-01-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf_3800_xiaozhi/
---


> Objetivo: Fazer o ESP32S3 funcionar com o reSpeaker XVF3800 e executar o assistente Xiaozhi aproveitando modelos grandes em nuvem.
> Código-fonte do projeto: https://github.com/Seeed-Projects/Xiaozhi_Esp32S3_reSpeaker
> Seeed-Projects: https://github.com/Seeed-Projects

O reSpeaker XVF3800 é uma matriz circular profissional de 4 microfones baseada no chip XMOS XVF3800. Ele oferece captação de voz confiável em ambientes ruidosos com recursos que incluem modos duplos, captação em campo distante de 360° (até 5 m), cancelamento de eco acústico (AEC), controle automático de ganho (AGC), direção de chegada (DoA), desreverberação, formação de feixe e supressão de ruído. Com suas robustas capacidades de captura e redução de ruído, o Xiaozhi ganha um "ouvido" muito melhor.

![reSpeaker banner](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)

---

## Parte 1: Preparação de firmware de hardware do reSpeaker

Esta seção é voltada para o próprio hardware reSpeaker XVF3800. O firmware USB padrão não oferece suporte a saída I2S, portanto você deve gravar um firmware I2S dedicado para usá-lo com hosts como o XIAO ESP32S3.

> Observação: O firmware I2S usa I2C DFU (não USB DFU). Se o dispositivo já tiver firmware I2S, mas se comportar de forma anormal, primeiro entre no "modo de segurança" e então use USB DFU para recuperar ou alternar o firmware. O modo de segurança oferece suporte a ambos USB DFU e I2C DFU.
> Consulte as referências oficiais:
> - [reSpeaker XVF3800 Primeiros Passos](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_getting_started/)
> - [repositório de firmware do reSpeaker XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)
> - [repositório de código do reSpeaker](https://github.com/respeaker)

### 1.1 Preparação

#### Hardware

- reSpeaker XVF3800 USB 4-Mic Array
- Cabo de dados USB Tipo-C (energia + dados)
- Computador: Windows / macOS / Linux
- Se integrado com XIAO ESP32S3, garanta soldagem adequada para conexões de I2S / I2C / alimentação

#### Software (instalar dfu-util)

Windows:

1. Baixe e descompacte um binário `dfu-util` (por exemplo, `D:\dfu-util-0.11-binaries\win64\`).
2. Adicione o diretório que contém `dfu-util.exe` ao PATH.
3. Verifique com `dfu-util -V`.
4. Se `dfu-util -l` retornar `LIBUSB_ERROR_NOT_SUPPORTED`, use o Zadig para substituir o driver do dispositivo por WinUSB.

macOS (Homebrew):

```bash
brew install dfu-util
dfu-util -l
```

Linux (Debian / Ubuntu / Raspberry Pi OS):

```bash
sudo apt update
sudo apt install dfu-util
sudo dfu-util -l
```

#### Baixar o firmware I2S

- Acesse o repositório de firmware: https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares
- Baixe um arquivo `.bin` com nome começando com `i2s` (por exemplo, `respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin`).

### 1.2 Conectar e entrar no modo DFU

#### Observação sobre a fiação

- Use a porta USB-C próxima ao conector de fone de ouvido de 3,5 mm (o lado XMOS) ao conectar ao computador; NÃO use a porta do lado XIAO.

#### Entrar no modo de segurança (recomendado)

Use isto quando: o firmware atual é I2S, mas você quer USB, o firmware está corrompido ou o firmware errado foi gravado.

1. Remova completamente a alimentação.
2. Mantenha pressionado o botão "Mute" onboard.
3. Enquanto o mantém pressionado, reconecte a alimentação.
4. Quando o LED vermelho começar a piscar, solte o botão — o dispositivo agora está em modo de segurança.

### 1.3 Gravar o firmware I2S usando dfu-util

#### Confirmar que o dispositivo está visível

```bash
# Linux / Raspberry Pi OS
sudo dfu-util -l
# macOS / Windows
dfu-util -l
```

A saída esperada contém `Found DFU: [2886:001a] ... alt=1, name="reSpeaker DFU Upgrade"`.

#### Comando de gravação

```bash
# Linux / Raspberry Pi OS (replace path)
sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin
# macOS / Windows (no sudo)
dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin
```

Parâmetros: `-R` (reset/reiniciar), `-e` (apagar), `-a 1` (escrever no Upgrade alt), `-D` (arquivo de firmware).

### 1.4 Verificação e solução de problemas

#### Verificar firmware

Após a gravação, o dispositivo será reiniciado automaticamente e o firmware I2S deverá estar ativo. Você pode verificar lendo os dados de áudio do dispositivo com o ESP32S3 como host I2S.

#### Perguntas frequentes (FAQ)

- P: `dfu-util -l` não mostra o dispositivo?
  - Verifique o cabo USB e a porta (é obrigatório usar o conector do lado XMOS).
  - Se o dispositivo estiver executando atualmente firmware I2S, entre no modo de segurança antes de gravar.
  - Usuários Windows: garanta o driver WinUSB via Zadig.
- P: Erro durante a gravação?
  - Tente um cabo USB ou porta de host diferente e tente novamente no modo de segurança.
- P: Sem áudio após a gravação?
  - Verifique se a configuração do host I2S (taxa de amostragem, canais) corresponde às configurações do firmware.

---

## Parte 2: Ajustes de adaptação de software do Xiaozhi

Esta seção aborda as alterações de código para fazer o projeto Xiaozhi oferecer suporte ao reSpeaker XVF3800.

### 2.1 Visão geral das alterações

Principais alterações:

1. Adicionado um wrapper de barramento I2C compartilhado para gerenciar centralmente o master I2C e evitar conflitos.
2. Adicionada sondagem de hardware durante a inicialização: sondar o XVF3800 via I2C antes do início da aplicação.
3. Desacoplada a configuração em nível de placa: usar macros `config.h` para pinos e endereços para facilitar a portabilidade.
4. Atualizações de build: incluir os novos arquivos fonte de BSP na compilação.

### 2.2 Principais locais de alteração de código

A. Novo: barramento I2C compartilhado

- Arquivos: `main/shared_i2c_bus.h` / `main/shared_i2c_bus.c`
- Finalidade: Fornecer `shared_i2c_master_bus_get()` que usa a API de master I2C do ESP-IDF com pull-ups internos ativados por padrão.

B. Novo: inicialização do hardware de áudio do reSpeaker

- Arquivo: `main/audio_bsp.c`
- Função: `audio_hardware_init()`
- Lógica: Adquirir o barramento I2C compartilhado, chamar `i2c_master_probe()` para detectar `XVF3800_I2C_ADDR` (0x2C) e imprimir logs de sondagem.

C. Alteração: ordem de inicialização

- Arquivo: `main/main.cc`
- Alteração: Chamar `audio_hardware_init()` antes de `Application::GetInstance().Start()`.

D. Alteração: build e configuração da placa

- `CMakeLists.txt`: adicionar `audio_bsp.c` e `shared_i2c_bus.c` às fontes de compilação.
- `boards/xiao-esp32s3-sense/config.h`:
  - Adicionar `I2C_SDA_PIN` (5), `I2C_SCL_PIN` (6).
  - Adicionar `XVF3800_I2C_ADDR` (0x2C).
  - Completar configurações de pinos e largura de bits de I2S.

---

## Parte 3: Compilar, gravar e fazer deploy

Esta seção orienta na compilação do firmware adaptado e na gravação dele no ESP32S3.

### 3.1 Confirmar conexões de hardware

Garanta as conexões entre o ESP32S3 e o reSpeaker XVF3800:

- Linhas de áudio I2S conectadas corretamente.
- Linhas de controle I2C conectadas: ESP32S3 GPIO5 (SDA) / GPIO6 (SCL) ao XVF3800.

### 3.2 Selecionar o alvo de compilação

```bash
idf.py set-target esp32s3
```

### 3.3 Menuconfig

```bash
idf.py menuconfig
```

Ajustes necessários:

1. Selecionar placa: `Xiaozhi Assistant -> Board Type -> Seeed Studio XIAO ESP32S3 Sense`.
2. Evitar conflitos de pinos: se o I2S usar GPIO43/44, altere a saída do console para USB:
   `Component config -> ESP System Settings -> Channel for console output -> USB Serial/JTAG`.
3. Configurações de flash:
   `Serial flasher config -> Flash size -> 8 MB` e
   `Partition Table -> Custom partition CSV file -> partitions/v1/8m.csv`.

### 3.4 Compilar e gravar

```bash
idf.py build
idf.py flash
```

### 3.5 Monitorar logs e verificar

```bash
idf.py monitor
```

---

## Parte 4: Configuração de rede e ativação

Após a gravação, o dispositivo precisa de configuração de rede e vinculação à nuvem para usar recursos de conversa com IA.

### 4.1 Conectar ao hotspot do dispositivo

1. Use seu celular para encontrar o SSID Wi-Fi chamado `Xiaozhi-XXXXXX`.
2. Abra um navegador e acesse `http://192.168.4.1`.

### 4.2 Configurar o Wi-Fi

1. No portal cativo, aguarde ~5 s pela varredura de rede.
2. Escolha seu Wi-Fi de 2,4 GHz (hotspot do iPhone: ative "Max Compatibility").
3. Digite a senha e clique em "Connect".
4. Após "Login successful", o dispositivo será reiniciado em ~3 segundos.
  ![configure-wifi](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/wifilist.png)

### 4.3 Adicionar o dispositivo ao backend de gerenciamento

1. Obtenha o ID do dispositivo: depois que o dispositivo estiver online, acorde-o dizendo "Hello Xiaozhi" e ouça o código de verificação de 6 dígitos.
2. Acesse https://xiaozhi.me e crie uma conta / faça login.
3. Na seção "Agents" ou de gerenciamento de dispositivos, selecione "Add device", insira o ID de dispositivo de 6 dígitos e envie.
  ![login-success-2](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/workbench.png)
  ![history-dialogs](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/history_talk.png)


Depois de concluído, seu dispositivo reSpeaker–Xiaozhi deve estar pronto e operacional.
E não se esqueça de alterar o idioma de saída para a sua preferência nas configurações!
![language](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/xiaozhi_language.png)


## Suporte Técnico e Discussão sobre o Produto

Agradecemos por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




