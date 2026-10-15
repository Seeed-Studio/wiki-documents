---
description: Firmware Arduino para uma ponte de áudio e controle USB com ESP32-S3 conectada a um reSpeaker XVF3800. Uma única conexão USB nativa fornece captura estéreo, reprodução estéreo e uma interface serial CDC para controle do reSpeaker XVF3800 via I2C.
title: Ponte de Áudio USB reSpeaker XVF3800 com XIAO ESP32S3
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
  - USB Audio
  - I2S
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_xvf3800_i2s_usb_bridge
last_update:
  date: 10/12/2026
  author: Kasun Thushara
createdAt: '2026-10-12'
updatedAt: '2026-10-12'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_i2s_usb_bridge/
---

# Ponte de Áudio USB reSpeaker XVF3800 com XIAO ESP32S3

## Visão geral

Este projeto fornece **firmware Arduino para uma ponte de áudio e controle USB com ESP32-S3** conectada a um **reSpeaker XVF3800**. Uma única conexão USB nativa fornece **captura estéreo**, **reprodução estéreo** e uma **interface serial CDC** para controle do reSpeaker XVF3800 via **I2C**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="reSpeaker XVF3800 with XIAO ESP32S3" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Recursos do firmware

- Captura e reprodução USB Audio Class 1 (UAC1) via USB Full-Speed.
- PCM estéreo assinado de 32 bits little-endian, com slots I2S Philips de 32 bits.
- Seleção em tempo de compilação de operação em 16 kHz ou 48 kHz e da fonte de clock I2S.
- Captura e reprodução USB simultâneas. USB e I2S usam a mesma taxa de amostragem nominal.
- Bufferização de reprodução e correção de desvio de clock por software, com controles de volume e mute do host USB para o canal mestre e canais individuais.
- Captura sem processamento de volume de reprodução ou reamostragem por software.
- Comandos USB CDC encaminhados para a interface de controle I2C do reSpeaker XVF3800, com um utilitário de host em Python e diagnósticos de áudio/USB somente leitura.
- Um driver TinyUSB DWC2 local ao projeto e descritores USB que encaixam áudio duplex e CDC no orçamento de FIFO de hardware do ESP32-S3.

## Modos de áudio

Defina `BRIDGE_MODE` em `bridge_config.h` e então reconstrua o sketch completo. **Master e Slave nos nomes das macros descrevem o papel do reSpeaker XVF3800.** O ESP32-S3 usa o papel oposto.

| Modo | Taxa de amostragem | Papel do reSpeaker | Papel do ESP32-S3 | Fonte de clock |
| --- | --- | --- | --- | --- |
| `BRIDGE_I2S_MASTER_48K` | 48 kHz | Master | Slave | reSpeaker |
| `BRIDGE_I2S_MASTER_16K` | 16 kHz | Master | Slave | reSpeaker |
| `BRIDGE_I2S_SLAVE_16K` | 16 kHz | Slave | Master | ESP32-S3 |

O reSpeaker XVF3800 deve executar um firmware configurado para a taxa de amostragem e o papel I2S correspondentes. A ponte não configura nem grava firmware no reSpeaker. A seleção de modo requer recompilação; não há troca de taxa em tempo de execução nem conversão entre 16/48 kHz.

## Requisitos

- Uma placa ESP32-S3 com USB nativo; o perfil fornecido é direcionado ao Seeed Studio XIAO ESP32S3.
- Arduino IDE ou Arduino CLI com o pacote de placas Espressif disponível.
- Arduino-ESP32 **3.3.11**.

Nenhuma biblioteca USB de áudio separada é necessária. Use a versão fixada do core: a substituição local do driver USB e os descritores dependem da implementação TinyUSB dele.

## Configurações de compilação (Arduino IDE)

Abra `reSpeaker_ESP32S3_USB_BRIDGE.ino`, instale/selecione Arduino-ESP32 3.3.11 e use estas configurações:

| Configuração | Valor |
| --- | --- |
| Board | Seeed Studio XIAO_ESP32S3 |
| USB Mode | USB-OTG (TinyUSB) |
| USB CDC On Boot | Disabled |
| Upload Mode | USB-OTG CDC (TinyUSB) |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz |
| PSRAM | Disabled |

Resumindo: **USB Mode = USB-OTG (TinyUSB); CDC/MSC/DFU On Boot = Disabled; CPU = 240 MHz; PSRAM = Disabled.**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/arduino_settings.jpg" alt="pir" width={400} height="auto" /></p>

O firmware cria sua própria interface CDC, portanto CDC On Boot deve permanecer desativado. No perfil CLI fixado, `CDCOnBoot=cdc` corresponde a Disabled. O sketch verifica essas três configurações USB em tempo de compilação. O Upload Mode é verificado por meio de `ARDUINO_FQBN`, porque o core não define uma macro separada para o modo de upload. O perfil CLI seleciona explicitamente `UploadMode=cdc` para solicitar o reset a 1200 baud e aguardar a porta de download.

<!-- TODO: add Arduino IDE build settings screenshot here -->

Selecione **Verify** para compilar e depois **Upload**.

## Download e instalação

1. Baixe o firmware no GitHub: [reSpeaker_ESP32S3_USB_BRIDGE](https://github.com/respeaker/reSpeaker_ESP32S3_USB_BRIDGE).
2. Copie todo o conteúdo do repositório baixado para uma nova pasta `Documents\Arduino\reSpeaker_ESP32S3_USB_BRIDGE`. Inclua todos os arquivos: o `.ino`, headers, arquivos `.cpp`, `sketch.yaml`, `host\`, `src\` e `docs`. Copiar apenas o arquivo `.ino` é insuficiente.
3. Edite `bridge_config.h` na nova pasta para selecionar o modo de 16 kHz, se você estiver usando:

```cpp
// #define BRIDGE_MODE BRIDGE_I2S_MASTER_48K
#define BRIDGE_MODE BRIDGE_I2S_SLAVE_16K
```

4. No Arduino IDE, abra **File > Sketchbook > reSpeaker_ESP32S3_USB_BRIDGE** (o nome da pasta agora corresponde ao do `.ino`).

## Verificar enumeração USB

Desconecte e reconecte o cabo USB. Você deverá ver:

- Uma **porta serial CDC** (por exemplo, `COM5` no Windows) — esta é a porta de controle.
- Um **dispositivo de áudio** chamado `BRIDGE I2S Slave 16k` (estéreo, 32 bits, 16 kHz de entrada e saída).

Feche qualquer programa (como um monitor serial) que esteja mantendo a porta ocupada antes de continuar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/device_tree.jpg" alt="pir" width={800} height="auto" /></p>

## Verificar o lado de controle (ferramenta de host)

A partir do repositório, entre na pasta `host` e instale a dependência:

```sh
cd host
python -m venv .venv
.venv\Scripts\activate.bat
python -m pip install -r requirements.txt
python bridge_host.py --list-ports
python bridge_host.py --port COMx --ping
python bridge_host.py --port COMx VERSION
```

Substitua `x` em `COMx` pelo número real da sua porta COM. No Linux ou macOS, ative o ambiente virtual com `source .venv/bin/activate` e use um caminho como `/dev/ttyACM0` ou `/dev/cu.usbmodemXXXX` em vez de `COMx`.

Resultados esperados 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/listports.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/ping.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/mic_again.jpg" alt="pir" width={800} height="auto" /></p>

<!-- TODO: add host tool output screenshot here -->

## Testar áudio

- **Reprodução:** reproduza um arquivo WAV estéreo de 32 bits a 16 kHz na saída `BRIDGE I2S Slave 16k`; o som deve sair do codec/alto-falante do reSpeaker.
- **Captura:** grave áudio estéreo de 32 bits a 16 kHz a partir da entrada dele.

**Snapshot de referência do Audacity**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/audio_settings.jpg" alt="pir" width={600} height="auto" /></p>

<!-- TODO: add audio test screenshot here -->

## Recursos

- [Firmware reSpeaker_ESP32S3_USB_BRIDGE (GitHub)](https://github.com/respeaker/reSpeaker_ESP32S3_USB_BRIDGE)
- `README.md` — visão geral do firmware, modos de áudio e instruções de compilação.
- `PLAYBACK.md` — fiação de áudio, bufferização de reprodução, diagnósticos e status de áudio/USB.
- `CONTROL.md` — fiação I2C, utilitário de host em Python e protocolo serial CDC.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
