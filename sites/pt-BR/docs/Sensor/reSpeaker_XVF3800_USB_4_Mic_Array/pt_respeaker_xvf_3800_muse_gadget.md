---
description: Construa um Muse Gadget no reSpeaker XVF3800 + XIAO ESP32-S3 — grave o firmware XMOS I2S, faça o build com ESP-IDF, faça o pareamento via BLE e transmita notas de voz para sua VM Muse.
title: Muse Gadget no reSpeaker XVF3800
keywords:
  - reSpeaker
  - XIAO ESP32-S3
  - Muse
  - Assistente de Voz
  - BLE
  - ESP-IDF
  - TTS
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_muse_gadget
last_update:
  date: 11/09/2026
  author: Kasun Thushara
createdAt: '2026-11-09'
updatedAt: '2026-11-09'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_muse_gadget/
---

## Introdução

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/WEcYu1k428E"
          title="Muse Gadget on reSpeaker XVF3800"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

Este projeto transforma o array de 4 microfones **reSpeaker XVF3800** e um **XIAO ESP32-S3** em um **Muse Gadget**. O gadget faz pareamento com o app Muse no telefone via BLE, entra na sua rede Wi‑Fi e mantém uma sessão Noise criptografada com sua VM Muse na nuvem.

- **Segure** o botão: grave uma nota de voz. O Muse a transcreve e responde; a resposta é exibida no app e falada no alto-falante via TTS.
- **Toque** (menos de 1 s): inicie uma chamada de voz ao vivo (se `MUSE_REALTIME_VOICE` estiver ativado).
- **Toque** novamente: desligue.

Em resumo, o caminho dos dados é assim:

```text
XIAO ESP32-S3 ──BLE──> Muse app (pairing)
      │
      └──Wi-Fi──> encrypted Noise session ──> Muse VM
                        │
                        ├── /link-control : device.health, voice.configure, …
                        └── /chat/stream  : voice note → transcript → reply
```

O XIAO é o **mestre I2S**; o XVF3800 roda o firmware **I2S slave 16 kHz** e controla seu anel de 12 LEDs e o amplificador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="reSpeaker XVF3800 with XIAO ESP32-S3" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>



## O que você precisa

- [ ] **Token do SDK** do Muse (`mgst_…`)
- [ ] Chave **AssemblyAI** opcional para respostas faladas
- [ ] **App Muse** no telefone, modo Desenvolvedor ativado
- [ ] **ESP-IDF v6.0.3** instalado
- [ ] XVF3800 com o firmware **I2S slave 16 kHz**
- [ ] Alto-falante **5 W** com conector JST (ou fones de ouvido 3,5 mm)
- [ ] Credenciais de Wi‑Fi 2,4 GHz
- [ ] Cabo USB‑C **de dados**

## Contas e chaves de API

| Chave / credencial | Obrigatório? | Onde obter | Onde é usada |
|---|---|---|---|
| **Token do Muse SDK** (`mgst_…`, 48 caracteres) | **Sim** | [gadgets.muse.ai](https://gadgets.muse.ai/settings/sdk-tokens) | `CONFIG_GADGET_SDK_TOKEN` no `sdkconfig` de build |
| **Chave AssemblyAI** (32 caracteres) | Opcional — respostas faladas | [assemblyai.com](https://www.assemblyai.com/dashboard) | `CONFIG_MUSE_TTS_API_KEY` no `sdkconfig` de build |
| **Chave Groq** (`gsk_…`) | TTS alternativo | [console.groq.com](https://console.groq.com/keys) | Mesmo campo, com a URL/modelo da Groq |
| **SSID + senha do Wi‑Fi** | Sim | Sua rede/hotspot 2,4 GHz | App Muse durante o pareamento |




### Configurações do provedor de TTS

O provedor padrão é o AssemblyAI:

```ini
CONFIG_MUSE_TTS_ENABLE=y
CONFIG_MUSE_TTS_URL="https://tts.us.assemblyai.com/v1/openai/audio/speech"
CONFIG_MUSE_TTS_MODEL="assemblyai-tts-en"
CONFIG_MUSE_TTS_VOICE="alloy"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="mp3"
CONFIG_MUSE_TTS_MAX_CHARS=800
CONFIG_MUSE_TTS_TIMEOUT_MS=15000
CONFIG_MUSE_TTS_API_KEY="YOUR_ASSEMBLYAI_KEY"
```

Groq (Orpheus, limite de 200 caracteres de entrada) é uma alternativa:

```ini
CONFIG_MUSE_TTS_URL="https://api.groq.com/openai/v1/audio/speech"
CONFIG_MUSE_TTS_MODEL="canopylabs/orpheus-v1-english"
CONFIG_MUSE_TTS_VOICE="hannah"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="wav"
CONFIG_MUSE_TTS_MAX_CHARS=200
CONFIG_MUSE_TTS_API_KEY="gsk_..."
```

O app no telefone **não tem configuração de provedor de TTS**; o TTS é totalmente no lado do firmware.

## Configuração do app no telefone

- Instale o app **Muse** (Meta) em Android ou iOS.
- Faça login com sua conta Muse.
- Ative **Settings → Devices → Developer mode**.
- O Muse foi lançado nos **EUA e Canadá**; a conta/app é necessária para o pareamento e para exibir o texto da resposta.
- O app mostra as respostas como **texto**; o gadget as fala se o TTS estiver configurado.


### Botão externo opcional (Grove Button)

Você pode adicionar um [Grove Button](https://www.seeedstudio.com/Grove-Button.html) para push-to-talk: **VCC → D3, SIG → D0, GND → GND**.

| Grove Button | XIAO | GPIO |
|---|---|---|
| GND | GND | — |
| VCC | **D3** | 4 (forçado em nível alto) |
| SIG | **D0** | 1 (entrada, ativo em nível alto) |
| NC | — | — |

As configurações de firmware já estão no overlay:

```ini
CONFIG_HOMEHUB_BUTTON_GPIO=1
CONFIG_HOMEHUB_BUTTON_POWER_GPIO=4
CONFIG_HOMEHUB_BUTTON_ACTIVE_HIGH=y
CONFIG_HOMEHUB_BUTTON_LABEL="TALK"
```

O Grove Button é **ativo em nível alto**; o firmware coloca o GPIO4 em nível alto para alimentá-lo e lê o GPIO1 com pull-down.

## Grave o firmware XMOS I2S

O XIAO é o **mestre I2S**, então o XVF3800 deve rodar o firmware **I2S slave 16 kHz**. O firmware USB **não** funciona com o XIAO.

Grave a imagem `respeaker_xvf3800_i2s_slave_v1.0.9_16k.bin` seguindo o guia oficial de atualização de firmware:

- [Atualização de firmware do reSpeaker XVF3800](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#firmware-usb)

> Selecione **`respeaker_xvf3800_i2s_slave_v1.0.9_16k.bin`** (I2S slave, 16 kHz) — não o firmware USB padrão.

### Verificar

O firmware do Muse registra:

```text
link.xvf3800: XVF3800 firmware 1.0.9; 16 kHz I2S slave, ESP32 is master
```

Ou execute:

```sh
xvf_host VERSION
```

## Clone o projeto

Clone o fork mantido. Ele é baseado no SDK upstream e já contém a porta para o XVF3800 e a integração de TTS:

```sh
git clone https://github.com/KasunThushara/muse-gadget-sdk.git
cd muse-gadget-sdk
```

> A porta `seeed-respeaker-xvf3800` **não está upstream** em `facebookincubator/muse-gadget-sdk`. Se você usar o upstream, precisará aplicar você mesmo as adições abaixo.

Arquivos adicionados pelo fork:

```text
esp32/devices/sdkconfig.seeed-respeaker-xvf3800
esp32/main/voice_board_xvf3800.c
esp32/main/xvf3800.c
esp32/main/xvf3800.h
```

Arquivos alterados pelo fork:

```text
esp32/main/Kconfig.projbuild      (HOMEHUB_LED_BACKEND_XVF3800, button options)
esp32/main/CMakeLists.txt         (xvf3800.c, voice_board_xvf3800.c)
esp32/main/led_status.c           (XVF3800 ring over I2C)
esp32/main/button.c               (active-high button, optional power GPIO)
esp32/main/voice.c                (tap-vs-hold measurement)
esp32/tools/board.sh              (seeed-respeaker-xvf3800 case)
esp32/components/muse/Kconfig     (MUSE_TTS_*)
esp32/components/muse/muse_chat_session.cpp  (start_tts / WAV / MP3)
```

## Faça o build do firmware

### Instale o ESP-IDF v6.0.3

`esp32/cmake/validate_config.cmake` requer **ESP-IDF v6.0.3**:

```sh
git clone -b v6.0.3 --recursive https://github.com/espressif/esp-idf.git ~/esp/esp-idf-v6.0.3
~/esp/esp-idf-v6.0.3/install.sh esp32s3
. ~/esp/esp-idf-v6.0.3/export.sh
```

Você também precisa de **Git**, **Python 3** e um **cabo USB‑C de dados**. No Windows, o console do XIAO é USB nativo (`303a:1001`) e aparece como `COMx`. `tools/board.sh` é bash, então execute em **Git Bash** ou chame `idf.py` diretamente.

### Defina as chaves

```sh
cd esp32
idf.py -B build-seeed-respeaker-xvf3800 menuconfig
```

Defina em **ESP32 Device SDK**:

- **Muse Gadgets SDK token** → `mgst_…`
- Opções de TTS (no menu **Muse**) → provedor, URL, modelo, voz, chave de API

Ou edite `build-seeed-respeaker-xvf3800/sdkconfig` diretamente:

```ini
CONFIG_GADGET_SDK_TOKEN="mgst_…"
CONFIG_MUSE_TTS_ENABLE=y
CONFIG_MUSE_TTS_URL="https://tts.us.assemblyai.com/v1/openai/audio/speech"
CONFIG_MUSE_TTS_MODEL="assemblyai-tts-en"
CONFIG_MUSE_TTS_VOICE="alloy"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="mp3"
CONFIG_MUSE_TTS_MAX_CHARS=800
CONFIG_MUSE_TTS_API_KEY="YOUR_ASSEMBLYAI_KEY"
```

> O `build-*/sdkconfig` gerado substitui o overlay. Depois de alterar `devices/sdkconfig.seeed-respeaker-xvf3800`, atualize ou apague o `sdkconfig` gerado.

### Compilar

```sh
tools/board.sh seeed-respeaker-xvf3800 build
```

Ou diretamente:

```sh
idf.py -B build-seeed-respeaker-xvf3800 \
  -DIDF_TARGET=esp32s3 \
  -DSDKCONFIG=build-seeed-respeaker-xvf3800/sdkconfig \
  -DSDKCONFIG_DEFAULTS="sdkconfig.defaults;devices/sdkconfig.seeed-respeaker-xvf3800" \
  build
```

A imagem fica em:

```text
esp32/build-seeed-respeaker-xvf3800/muse-gadget.bin
```

## Grave o firmware

```sh
tools/board.sh seeed-respeaker-xvf3800 flash COM10
```

Ou diretamente:

```sh
idf.py -B build-seeed-respeaker-xvf3800 \
  -DIDF_TARGET=esp32s3 \
  -DSDKCONFIG=build-seeed-respeaker-xvf3800/sdkconfig \
  -DSDKCONFIG_DEFAULTS="sdkconfig.defaults;devices/sdkconfig.seeed-respeaker-xvf3800" \
  -p COM10 flash
```

- Substitua `COM10` pela porta do XIAO (`ls /dev/cu.usbmodem*` no macOS, `/dev/ttyACM*` no Linux).
- Se o processo de gravação não conseguir conectar: segure **BOOT**, toque em **RESET**, solte **BOOT** e tente novamente.
- Feche qualquer monitor serial que esteja usando a porta.
- Regravar mantém o pareamento/Wi‑Fi. `erase-flash` apaga tudo, incluindo NVS e pareamento.

## Fazer pareamento e testar

1. App Muse → **Settings → Devices → Developer mode ON**.
2. **Add Device (+)** → `MuseGadget-respeaker-XXXXXX`.
3. **Pressione** o botão (ou o Grove Button) para confirmar.
4. Escolha o Wi‑Fi **2,4 GHz** e digite a senha.
5. Aguarde o **anel verde**.
6. **Segure** o botão, fale e solte:
   - `link.voice: recorded X.Xs`
   - `muse_chat_session: TTS: N chars`
   - `link.voice: reply: X.Xs of speech`
   - A resposta é falada no alto-falante e exibida no app.
7. **Volume:** peça ao Muse ("Set volume to 80") ou use `voice.configure`.
8. **Mute:** use o botão Mute do XVF3800; quando em mute, o botão mantém seu papel de configuração.
9. **Redefinir configuração:** segure o botão por **5 segundos** para esquecer o pareamento/Wi‑Fi.



Linhas de log úteis:

```text
link.xvf3800: AIC3104 outputs powered (DAC 0 dB, HP + line out)
link.xvf3800: XVF3800 firmware 1.0.9; 16 kHz I2S slave, ESP32 is master
link.xvf3800: reSpeaker XVF3800 audio ready
link.voice:   ready
link.ble:     advertising as MuseGadget-respeaker-XXXXXX
muse_chat_session: connected to VM …
muse_chat_session: TTS: N chars
muse_chat_session: reply audio: 16000 Hz, 1 ch, 64 kbps
link.xvf3800: amp on: X0D30=0 X0D31=0 X0D33=1
```

## Notas de segurança

- O token do SDK é enviado dentro do firmware (ou NVS). Trate-o como um identificador, não como uma senha; revogue/rotacione em `gadgets.muse.ai` se ele vazar.
- A chave de TTS fica em `esp32/build-*/sdkconfig`, que está no `.gitignore`. Não a faça commit.
- O pareamento da comunidade não possui atestação do fabricante e não consegue impedir um MITM ativo; faça a configuração em uma rede confiável.
- Secure Boot e criptografia de flash permanecem **desativados**; o app é assinado com a chave de desenvolvimento em commit para que você possa regravar livremente.
- A criptografia de NVS é recomendada (`CONFIG_HOMEHUB_NVS_ENCRYPTION`) e é derivada automaticamente de uma chave HMAC de eFuse; decida antes de armazenar credenciais.
- Não habilite `CONFIG_HOMEHUB_PAIRING_EFUSE_AUTH` a menos que você tenha Secure Boot.

## Recursos

- Este projeto (fork com a porta XVF3800): [KasunThushara/muse-gadget-sdk](https://github.com/KasunThushara/muse-gadget-sdk)
- Muse Gadget SDK (upstream): [facebookincubator/muse-gadget-sdk](https://github.com/facebookincubator/muse-gadget-sdk)
- Seeed reSpeaker XVF3800 + XIAO: [Guia de primeiros passos](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_getting_started/)
- Atualização de firmware XMOS: [Guia de atualização de firmware](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_introduction/#update-firmware)
- Reprodução/gravação I2S: [Gravar e reproduzir](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_record_playback/)
- Lista de comandos I2C: [Lista de comandos I2C](https://wiki.seeedstudio.com/pt-br/respeaker_xvf_3800_i2c_list/)
- Controle GPIO/GPI: [Controle GPIO](https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_gpio/)
- Repositório de firmware do fornecedor: [reSpeaker_XVF3800_USB_4MIC_ARRAY](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)
- AssemblyAI TTS: [AssemblyAI TTS API](https://www.assemblyai.com/docs/tts/api-reference/http-api/create-speech-openai)
- Groq TTS: [Groq text-to-speech](https://console.groq.com/docs/text-to-speech)

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
