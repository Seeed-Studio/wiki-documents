---
description: Esta é a visão geral de recursos, especificações, interface de hardware e lista de peças.
title: reCamera Gimbal
keywords:
  - Borda
  - reCamera
  - Visão geral de hardware
image: https://files.seeedstudio.com/wiki/reCamera/image.webp
slug: /recamera_gimbal_hardware_and_specs
sidebar_position: 2
last_update:
  date: 02/18/2025
  author: Parker Hu
createdAt: '2024-12-20'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/pt-br/recamera_gimbal_hardware_and_specs/
---

# Visão geral do reCamera Gimbal

A reCamera Gimbal 2002 Série é o primeiro sistema de controle de câmera open-source com câmera de IA de 1TOPS (reCamera) e gimbal de 2 eixos. Seus dois motores brushless permitem guinada de 360° e inclinação de 180° para cobertura total.

## Recursos

- Ecossistema totalmente open-source em hardware e software
  - [Developer Portal](https://github.com/Seeed-Studio/OSHW-reCamera-Series?tab=readme-ov-file#recamera-software-development-guide)
- Configuração rápida e movimento preciso
  - Suporte a pacote de montagem tipo Lego
  - Rotação de guinada de 360° com cobertura total e faixa de inclinação de 180° do chão ao teto
  - Precisão do motor brushless: precisão de passo de 0,01° para rastreamento suave de alvos.
- Controle de movimento com IA
  - Modelos de IA personalizados prontos: YOLO11 integrado com licença comercial, suporte a Roboflow e SenseCraft AI.
  - Rastreamento inteligente: a IA ajusta automaticamente o movimento do gimbal.
- Desenvolvimento flexível para todos os níveis de habilidade
  - Node-RED integrado para personalização de fluxos low-code no movimento do gimbal.
  - SDK em C++ com suporte para desenvolvimento mais profundo.

## Especificações

### Sistema de processamento

| **Parâmetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **SOC**                | SG2002                                                                    |
| **CPU**                | C906@1GHz + C906@700MHz                                                  |
| **Desempenho de IA**   | 1 Tops @ Int8                                                            |
| **MCU**                | 8051 @ 8KB SRAM                                                          |
| **Sistema operacional**| Linux                                                                     |
| **Memória**            | 256 MB                                                                  |
| **Codificador de vídeo** | 5MP @ 30Fps                                                             |

### Básico

| **Parâmetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **eMMC**               | 8GB / 64GB                                                               |
| **Fonte de alimentação** | Conector 12V DC Jack para XT30                                         |
| **Consumo de energia** | 12V, 185mA (estático)                                                   |

### Câmera

| **Parâmetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Sensor**             | OV5647                                                                    |
| **Resolução**          | 5M (2592×1944) Pixels                                                    |
| **Chip**               | Sensor CMOS 1/4"                                                         |
| **Tamanho do pixel**   | 1.4μm                                                                     |
| **Formato de saída**   | RAW 10                                                                    |
| **Taxa de quadros máxima** | Tamanho total: 15fps                                                   |
| **Abertura**           | F2.8                                                                      |
| **Distância focal equivalente** | 3.46mm                                                            |
| **Campo de visão**     | 65°                                                                      |
| **Distorção**          | &lt;1%                                                                      |
| **Estrutura da lente** | 5P                                                                        |

### Interface

| **Parâmetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **USB**                | USB 2.0 Type-C                                                            |
| **Sem fio**            | Wi-Fi 2.4G/5G Bluetooth 4.2/5.0                                          |
| **Botão**              | 1 × botão de reinicialização, 1 × botão de usuário                       |
| **LEDs de preenchimento** | 4 × 0.3W luz branca                                                     |
| **LED**                | 1 × indicador de energia, 2 × indicadores programáveis de IO             |
| **Mic**                | Microfone on-board                                                        |
| **Alto-falante**       | Alto-falante externo                                                      |

### Especificação do motor

| **Parâmetro**          | **MS3008**               | **MS3506**          |
|------------------------|--------------------------|---------------------|
| **Espiras**            | 54                       | 60                  |
| **Tensão nominal (V)** | 12                       | 12                  |
| **Velocidade máxima (rpm)** | 2000                | 2100                |
| **Torque nominal (N·m)** | 0.04                   | 0.05                |
| **Velocidade nominal (rpm)** | 1160               | 1250                |
| **Corrente nominal (A)** | 0.64                   | 0.79                |
| **Potência máxima (W)** | 4.6                     | 6.4                 |
| **Polos do motor**     | 14                       | 14                  |
| **Temperatura de operação (℃)** | -25~60          | -25~60              |
| **Peso (g)**          | 49                       | 63                  |
| **Tensão de entrada do driver (V)** | 6~16        | 6~16                |
| **Comunicação**       | CAN                      | CAN                 |
| **Frequência de comunicação** | CAN@1Mbps:2KHz   | CAN@1Mbps:2KHz      |
| **Encoder**           | Encoder magnético de 15 bits | Encoder magnético de 15 bits      |
| **Taxa de baud CAN**  | 100K、125K、250K、500K、1M   | 100K、125K、250K、500K、1M    |
| **Modo de controle**  | Open Loop(24KHz) / Speed Loop(4KHz) / Position Loop(2KHz)                | Open Loop(24KHz) / Speed Loop(4KHz) / Position Loop(2KHz)                |

### Especificação do gimbal

| **Parâmetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Faixa de inclinação (Pitch)** | 0～180°                                                             |
| **Faixa de guinada (Yaw)**      | 0～360°                                                             |

### Condições ambientais

| **Parâmetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Temperatura de operação** | -20～50 ℃                                                            |
| **Umidade de operação** | 0～90%                                                                 |

### Mecânico

| **Parâmetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Dimensão (L × A × P)** | 68×112×71mm                                                            |
| **Gabinete**           | Poliamida (PA) Nylon                                                     |
| **Peso (líquido)**     | 230g                                                                      |

### Outros

| **Parâmetro**          | **Valor**                                                                 |
|------------------------|---------------------------------------------------------------------------|
| **Garantia**           | 1 ano                                                                     |

## Visão geral de hardware

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

### Placa principal-C101

[**Clique para baixar o arquivo de PCBA de 8GB**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_8GB_v1.zip)

[**Clique para baixar o arquivo de PCBA de 64GB**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_Core_2002w_64GB_v1.zip)

Vista superior         |  Vista inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Up.png" /></div>  |  <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/C1_2002w_Bottom.png" /></div>

#### Diagrama de blocos

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/C101_block.png" /></div>

### Placa de sensor-S101

[**Clique para baixar o arquivo de PCBA**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_OV5647_S101_v1.1.zip)

Vista superior         |  Vista inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_UP.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/S1_ov5647_Bottom.png" /></div>

### Placa base-B401

[**Clique para baixar o arquivo de PCBA**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_B401_v1.zip)

Vista superior         |  Vista inferior
:-------------------------:|:-------------------------:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Top.png" /></div> | <div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_Bottom.png" /></div>

#### Diagrama de blocos

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/B401_block.png" /></div>

### Placa de Fonte de Alimentação

Esta placa de fonte de alimentação fornece funções duplas de fornecimento de energia estável e proteção contra sobretensão. Ela suporta entrada DC de 12V para alimentar tanto os motores quanto os sistemas reCamera.

**Limiares de Proteção contra Sobretensão**:

- Tensão Máxima de Desarme: 25,66V
- Tensão de Operação Normal: 25,54V
- Tensão Mínima Segura: 25,4V

[**Clique para baixar o arquivo de PCBA**](https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera_Gimbal_power_supply_board_v1.zip)

#### Diagrama de Blocos

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/power_supply_block.png" /></div>

## Interface de Hardware

- [Luz](#jump1)
- [Microfone e Alto-falante](#jump2)
- [WIFI](#jump3)
- [Botão](#jump4)
- [Motor](#jump5)
- [CAN](#jump6)

### <span id="jump1">Luz</span>

Há 3 indicadores na reCamera, as luzes **vermelha e azul** são indicadores programáveis, e o indicador **verde** é o indicador de energia, que não é programável. **Vermelho** é o indicador de status da CPU e **azul** é o indicador de status de leitura do eMMC do sistema.

**Status dos Indicadores de Luz**:

| LED(cor) | Status | Descrição |
| ---- | ---- | ---- |
| LED1 - Verde | LIGADO | Energia ligada |
| LED2 - Vermelho | Piscando | CPU em funcionamento (definido pelo usuário) |
| LED3 - Azul | Piscando | Leitura/Gravação do eMMC |

Exemplo 1: Use o comando linux para alterar o brilho do **LED vermelho** para zero

``` bash
echo 0 | sudo tee /sys/class/leds/red/brightness
```

Exemplo 2: desligar completamente a **luz vermelha**

``` bash
echo none | sudo tee /sys/class/leds/red/trigger
```

Há quatro luzes **brancas**, que são as luzes de preenchimento da câmera. O interruptor das luzes de preenchimento pode ser controlado pelas seguintes instruções.

``` bash
echo 1 > /sys/devices/platform/leds/leds/white/brightness //light on
echo 0 > /sys/devices/platform/leds/leds/white/brightness //light off
```

### <span id="jump2">Microfone e Alto-falante</span>

A reCamera possui um microfone e um alto-falante. Você pode invocar o microfone e o alto-falante usando o seguinte comando. A reCamera pode reproduzir arquivos de áudio no formato **wav**.

```bash
sudo arecord -D hw:0,0 -r 16000 -f S16_LE -c 1 -d 5 /home/recamera/test.wav //Record five seconds of audio

sudo aplay -D hw:1,0 /home/recamera/test.wav //Playing audio
```

Arquivos de áudio mp3 locais podem ser convertidos em arquivos wav para reprodução na reCamera usando [Convert audio online](https://www.aconvert.com/audio/).
O formato padrão do player é: taxa de bits de 16 bits; A taxa de amostragem é 16.000

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Convert_audio_online.png" /></div>

### <span id="jump3">Wi-Fi</span>

A versão 2002w da reCamera possui o módulo Wi-Fi em hardware. O Wi-Fi é de modo duplo AP+STA, que pode ser usado para configurar a rede do dispositivo ou configurar o dispositivo no modo AP.

O **SSID** do Wi-Fi em modo AP é: `reCamera_+ os últimos seis bits do MAC`.

A **senha** do Wi-Fi em modo AP é: `12345678`.

O ssid e a senha do WiFi_AP podem ser configurados no arquivo `/etc/hostapd_2g4.conf` no sistema da reCamera.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-2.png" /></div>

O arquivo de configuração STA da reCamera está em **/etc/wpa_supplicant.conf**, onde você configura a conta e a senha do Wi-Fi ao qual deseja se conectar.
No modo STA, conecte-se ao Wi-Fi na banda **5G**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-3.png" /></div>

No terminal, você pode escanear e conectar-se ao Wi-Fi com o seguinte comando:

```bash
wpa_cli -i wlan0 scan                           #Start a scan

wpa_cli -i wlan0 scan_results                   #Returns wifi scan results

wpa_cli add_network                             # Adding a new network,Returns a network ID
wpa_cli set_network ID ssid "your_wifi_name"    # set network SSID
wpa_cli set_network ID psk "your_wifi_password" # set network passwd
wpa_cli enable_network ID                       # enable network and connect
wpa_cli status                                  # Checking connection status
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-4.png" /></div>

### <span id="jump4">Botão</span>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Interface.png" /></div>

#### Botão do Usuário

O **Botão do Usuário 10** está localizado na placa **reCamera Gimbal** Board-B401. Se você quiser redefinir o dispositivo, por exemplo, ao esquecer o código de acesso do dispositivo, você pode manter o Botão do Usuário pressionado por um longo tempo e então conectar o dispositivo à alimentação. Quando a luz vermelha do dispositivo permanecer constantemente acesa em vez de piscar, solte o Botão do Usuário.

Se você quiser restaurar o firmware do seu dispositivo para uma versão específica, visite [os version control](https://wiki.seeedstudio.com/pt-br/recamera_os_version_control).

#### Botão de Reinicialização

O **Botão de Reinicialização 11** está localizado na placa **reCamera Gimbal** Board-B401. Quando o botão é pressionado, o sistema será reiniciado.

### <span id="jump5">Motor</span>

Há um script de Gimbal na reCamera Gimbal que pode ser usado para depurar e controlar os motores do Gimbal.
Para ver o script do gimbal em ação, execute o seguinte comando:

```bash
gimbal --help
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script.png" /></div>

`gimbal` é um script bash; você pode visualizá-lo e modificá-lo para atender às suas necessidades de desenvolvimento secundário. A localização do script é:

```bash
cd /usr/bin
cat gimbal
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/gimbal_script_content.png" /></div>

### <span id="jump6">CAN</span>

Use o comando `ifconfig` para visualizar a interface **can0**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_ifconfig.png" /></div>

Use o comando `cansend can0 can_id#9C.00.00.00.00.00.00.00` para enviar mensagens CAN:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_cansend.png" /></div>

Use o comando `candump can0` para receber mensagens CAN:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/can_command_candump.png" /></div>

## Lista de Peças

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
