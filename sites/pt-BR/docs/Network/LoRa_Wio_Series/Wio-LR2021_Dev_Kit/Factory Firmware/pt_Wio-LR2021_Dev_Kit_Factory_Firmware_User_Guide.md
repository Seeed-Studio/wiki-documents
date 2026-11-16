---
title: Guia do Usuário do Firmware de Fábrica do Wio-LR2021 Dev Kit
description: 'Guia do firmware de fábrica para o Wio-LR2021 Dev Kit'
keywords:
  - Wio-LR2021
  - ESP32-S3
  - firmware de fábrica
  - console serial
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_factory_firmware_user_guide
sku: 100038329
sidebar_position: 1
last_update:
  date: 11/05/2026
  author: David Du
createdAt: '2026-11-05'
updatedAt: '2026-11-05'
url: https://wiki.seeedstudio.com/pt-br/wio_lr2021_dev_kit_factory_firmware_user_guide/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Guia do Usuário do Firmware de Fábrica do Wio-LR2021 Dev Kit

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

Todo Wio-LR2021 Dev Kit é enviado com um firmware de teste que expõe os rádios, sensores, display, câmera, caminho de áudio e flash da placa por meio de um único console serial. Este guia leva você desde o primeiro acionamento até uma verificação funcional completa e descreve como é um resultado aprovado em cada etapa.

:::note
O firmware na sua placa é a autoridade para esta página. Digite `help` para listar os comandos que a build realmente registrou; se um comando aqui estiver ausente, sua placa está executando uma versão diferente.
:::

### O que os comandos do firmware fornecem

- **Links Sub-GHz e 2,4 GHz**: `lora_tx` com `lora_rx` em duas placas; a contagem do receptor aumenta.
- **Modos de modulação**: `gfsk_tx`, `flrc_rx`, `lr_fhss_tx`; pacotes válidos e erros de CRC contados.
- **Potência de RF**: `lora_cw`; um medidor mostra a portadora.
- **BLE** — `ble -a 1`; um scanner lista `wio-lr2021-*`.
- **Wi-Fi e IP**: `sta_connect`, `ap_set`, `ping`; `got ip:` e contagens de respostas.
- **GPIO, I²C e trilhos de alimentação**: `gpio_get`, `i2c_scan`, `io_exp_print`; `0x21` e `0x3D` respondem.
- **Bateria**: `battery_get`; milivolts e uma estimativa de carga.
- **Display, câmera, áudio**: `oled_test`, `camera_capture`, `audio_slot_play`; padrão, `PASS`, reprodução.
- **Flash**: `flash_info`, `flash_speed`; código de retorno `0` significa aprovado.

## Preparação

### Etapa 1. Instale as antenas e conecte a placa

Rosqueie a antena Sub-GHz em `SUB-1G` e a antena de 2,4 GHz em `LR-2.4G`. Conecte o USB-C com um cabo de dados — um cabo apenas de carga alimenta a placa, mas não fornece porta serial.

:::caution
Nunca transmita sem uma antena. O PA fornece até +22 dBm em Sub-GHz e +12 dBm em 2,4 GHz em uma carga desadaptada, o que pode danificar o LR2021.
:::

### Etapa 2. Encontre a porta serial

<Tabs groupId="operating-systems">
<TabItem value="win" label="Windows">

Abra o **Device Manager** e expanda **Ports (COM & LPT)**. A placa aparece como **USB Serial Device** com uma porta como `COM5`.

</TabItem>
<TabItem value="mac" label="macOS">

```bash
ls /dev/cu.*
```

Procure por `/dev/cu.usbmodem*`.

</TabItem>
<TabItem value="linux" label="Linux">

```bash
ls /dev/ttyACM*
```

A placa geralmente é `/dev/ttyACM0`. Se a porta não abrir, adicione seu usuário ao grupo `dialout`.

</TabItem>
</Tabs>

### Etapa 3. Abra um terminal

| Ferramenta | Plataforma | Onde obtê-la |
| --- | --- | --- |
| PuTTY | Windows | [putty.org](https://www.putty.org/) |
| screen | macOS / Linux | Integrado; execute `screen /dev/cu.usbmodem* 115200` |
| Minicom | macOS / Linux | Instale via o gerenciador de pacotes; execute `minicom -D /dev/ttyUSB* -b 115200` |

Todas as ferramentas precisam das mesmas configurações de linha:

| Configuração | Valor |
| --- | --- |
| Baud rate | 115200 |
| Bits de dados | 8 |
| Paridade | Nenhuma |
| Bits de parada | 1 |
| Controle de fluxo | Nenhum |

### Etapa 4. Confirme o prompt

Pressione **Enter**. A placa responde com seu prompt:

```bash
cmd>
```

Digite `help` para listar todos os comandos registrados.

```bash
cmd> help
```

## Início Rápido

### 1. Liste os comandos

```bash
cmd> help
```

### 2. Leia a bateria

```bash
cmd> battery_get
I (737306) bsp_battery: calibration scheme version is Curve Fitting
I (737306) bsp_battery: Calibration Success
I (737386) bsp_battery: VBAT channel=7 raw_max=0 sense=0 mV battery=0 mV
I (737516) bsp_battery: VBAT channel=7 raw_max=2362 sense=2068 mV battery=4136 mV
I (737516) SENSOR_TEST: Battery probe: BAT_ADC_EN=0 -> 0 mV, BAT_ADC_EN=1 -> 4136 mV
I (737516) SENSOR_TEST: Battery voltage: 4136 mV, estimated level: 92%
```

Ele informa a tensão da célula em milivolts e uma estimativa de carga. Sem bateria instalada, a leitura acompanha a alimentação USB.

### 3. Transmita um pacote LoRa

:::caution
Instale a antena Sub-GHz em `SUB-1G` antes de transmitir. Mantenha a placa a um metro de distância de outras antenas enquanto estiver em operação.
:::

```bash
cmd> lora_tx -f 868000000 -d hello -n 1
I (922806) LR20XX: Power          = 10 dB
I (922806) LR20XX: Frequency      = 868000000 Hz
I (922806) LR20XX: SF             = RAL_LORA_SF7
I (922806) LR20XX: BandWidth      = RAL_LORA_BW_125_KHZ
I (922806) LR20XX: CodingRate     = RAL_LORA_CR_4_5
I (922816) LR20XX: CRC            = 1
I (922816) LR20XX: IQ             = 0
I (922816) LR20XX: SyncWord       = 0x34
I (922816) LR20XX: LDO            = 0
I (922816) LR20XX: Interval       = 0
I (922816) LR20XX: Num            = 1
I (922816) LR20XX: half_power     = 0
I (922816) LR20XX: duty_cycle     = 0
I (922816) LR20XX: lf_slices      = 0
I (922816) LR20XX: is_config_pa   = 0
I (922816) LR20XX: tx len 5, payload: hello
I (922836) LR20XX: Starting LoRa TX #0
I (922876) LR20XX: LoRa tx done

I (923886) LR20XX: End of send!
```

### 4. Receba pacotes Sub-GHz

```bash
cmd> lora_rx -f 868000000 -s 7 -b 3               
I (47044) LR20XX: Frequency      = 868000000 Hz
I (47044) LR20XX: SF             = RAL_LORA_SF7
I (47044) LR20XX: BandWidth      = RAL_LORA_BW_125_KHZ
I (47044) LR20XX: CodingRate     = RAL_LORA_CR_4_5
I (47044) LR20XX: Header_type    = RAL_LORA_PKT_EXPLICIT
I (47044) LR20XX: CRC            = 1
I (47044) LR20XX: IQ             = 0
I (47044) LR20XX: SyncWord       = 0x34
I (47044) LR20XX: LDO            = 0

W (82904) LR20XX: rx_done 0
W (82904) LR20XX: rx_hdr_err 0
W (82904) LR20XX: rx_crc_err 0

I (82904) LR20XX: End of receive!
```

Execute o comando `lora_rx -f 868000000 -s 7 -b 3` na placa A e `lora_tx -f 868000000 -s 7 -b 3 -p 14 -d hello -n 10` na placa B. O contador de A aumenta a cada pacote e B retorna após dez. Pare A com `Ctrl+C` para imprimir os totais. Uma contagem travada em zero significa que as placas discordam em alguma configuração de rádio ou que uma antena está ausente. Mantenha `-i` em `200` ou acima, ou o receptor registrará linhas `hdr err`.

**Encerre o teste** com `Ctrl+C` em ambas as placas, para que nenhuma permaneça em modo de recepção.

### 5. Estação Wi-Fi e ping

```bash
cmd> sta_connect <ssid> <pass>
cmd> ping 192.168.1.1 -c 4
```

A associação foi bem-sucedida quando aparecer uma linha contendo `got ip:`.

### 6. Câmera pelo hotspot

```bash
cmd> camera_start
cmd> camera_http_start
```

Conecte-se a `wio-lr2021-camera` com a senha `12345678` e abra `http://192.168.4.1`. Quadros ao vivo comprovam a câmera e a pilha Wi-Fi ao mesmo tempo.

**Encerre o teste** com `camera_http_stop` e `camera_stop`, depois reconecte-se à sua rede normal.

### 7. Desenhe um padrão no display

```bash
cmd> oled_test -m text
I (2177034) bsp_oled_ssd13xx: OLED initialized (128x64, addr 0x3d)
I (2177064) OLED_TEST: OLED test pattern displayed: text
```

```bash
cmd> oled_test -m checker
I (2262024) OLED_TEST: OLED test pattern displayed: checker
```

```bash
cmd> oled_test -m clear
I (2316714) OLED_TEST: OLED test pattern displayed: clear
```

### 8. Grave e reproduza áudio

```bash
audio_slot_record -d 5000
audio_slot_play
```

### 9. Identifique o chip de flash

```bash
cmd> flash_info
I (2491984) FLASH_TEST: ==== SPI flash identification ====
I (2491984) FLASH_TEST:  JEDEC ID        : 0xEF4018
I (2491984) FLASH_TEST:  Manufacturer    : 0xEF (Winbond)
I (2491984) FLASH_TEST:  Memory type     : 0x40
I (2491984) FLASH_TEST:  Capacity (ID)   : 0x18 => 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Physical size   : 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Configured size : 16777216 bytes (16.00 MB)
I (2491984) FLASH_TEST:  Partition "flashtest" : addr=0x00C10000 size=1048576 (1.00 MB) subtype=0x06
I (2491984) FLASH_TEST: ==== Tail boundary authentication ====
I (2491994) FLASH_TEST:  head sector off=0x00000000, tail sector off=0x000FF000
I (2492114) FLASH_TEST:  head verify : PASS
I (2492124) FLASH_TEST:  tail verify : PASS
I (2492124) FLASH_TEST:  boundary auth: PASS
```

## Comportamento e Limites

| Comportamento | Comandos | O que acontece | Como sair |
| --- | --- | --- | --- |
| Recepção contínua | `lora_rx`, `flrc_rx` | Conta pacotes, sem prompt | `Ctrl+C` |
| Transmissão infinita | `lora_tx -n 0`, `flrc_tx -c 0` | Envia sem parar | `Ctrl+C` |
| Onda contínua | `lora_cw`, `lora_cw_pa` | Portadora não modulada, sem payload | `lora_cw_stop` |
| Tarefa em segundo plano | `flash_endurance -a start` | Retorna imediatamente, continua apagando | `flash_endurance -a stop` |
| Duração do hotspot | `ap_set`, `camera_http_start`, `audio_slot_send` | Rádio permanece ativo até ser fechado | `wifi stop`, `camera_http_stop`, `audio_slot_stop` |

- Um comando é dono do console: durante um loop de recepção ou transmissão o firmware ignora a entrada.
- A saída é texto simples; ative o log do terminal para registrar o teste.
- Alguns terminais associam `Ctrl+C` a copiar; confirme que o seu envia a interrupção.

## Segurança e Conformidade

**1. Uma antena por banda.** O conector SMA e o pad U.FL de uma banda compartilham uma única malha de RF por meio de um link de 0 Ω. Instalar ambos deixa nenhuma antena adaptada.

**2. Nunca deixe uma portadora ativa.** `lora_cw` e `lora_cw_pa` transmitem uma portadora contínua sem payload. Pare-as com `lora_cw_stop` antes de mover a placa.

**3. Verifique seu plano de bandas.** A saída Sub-GHz atinge +22 dBm e 2,4 GHz atinge +12 dBm. 868 MHz atende à Europa, 902 ~ 928 MHz às Américas. Confirme seus limites nacionais e use uma caixa blindada para execuções de certificação.

**4. Bateria e solar.** Use uma célula Li-ion de 3,7 V em `BAT-3.7V`, observando a polaridade serigrafada. O carregador CN3165 fornece cerca de 495 mA e não possui entrada de termistor, portanto não carregue sem supervisão.

**5. Credenciais padrão.** Os hotspots de câmera e áudio são enviados com a senha `12345678`, e a página da câmera não tem login. Altere a senha e feche o hotspot em uma bancada compartilhada.

**6. A resistência do flash desgasta o chip.** `flash_endurance` apaga setores reais da partição `flashtest`. Execute-o apenas em unidades de amostra, nunca em uma placa de que você ainda precise.

## Recurso

- [**Referência de Comandos do Firmware de Fábrica**](/pt-br/wio_lr2021_dev_kit_command_reference)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
