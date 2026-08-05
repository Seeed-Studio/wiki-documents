---
description: "Caminho ponta a ponta desde uma máquina limpa até um reSpeaker Clip que inicializa, grava e é controlável pelo SDK no host — a base antes de qualquer trabalho de firmware personalizado ou assistido por IA, e como decidir se o trabalho de firmware é o caminho certo."
title: Introdução ao reSpeaker Clip Firmware SDK
keywords:
  - reSpeaker clip
  - firmware
  - sdk
  - introdução
  - nRF5340
  - Zephyr
  - NCS
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_firmware_quick_start
sku: 100020126
last_update:
  date: 07/28/2026
  author: Ray
createdAt: '2026-07-28'
updatedAt: '2026-07-28'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_firmware_quick_start/
---

# Introdução ao reSpeaker Clip Firmware SDK

Caminho ponta a ponta desde uma máquina limpa até um reSpeaker Clip que inicializa, grava e é controlável pelo SDK no host — a base antes de qualquer trabalho de firmware personalizado ou assistido por IA. Também indica se o trabalho de firmware é mesmo o caminho certo para a sua tarefa.

> **Dispositivo lacrado.** O Clip é enviado em um invólucro selado — os pads SWD/J-Link não são acessíveis sem abrir o case. **Usuários finais fazem upgrade via USB ou BLE**, nunca com um probe. A gravação via SWD abaixo é o caminho de *desenvolvimento* (unidades de bancada com o case removido ou um breakout de debug).

## Introdução

O **Firmware SDK** é o firmware de dispositivo baseado em Zephyr RTOS no Nordic nRF5340 (dual-core: núcleo de aplicação + núcleo de rede). Ele é destinado a desenvolvedores que precisam **modificar o comportamento no lado do dispositivo** — o pipeline de áudio, a superfície de comandos AT ou serviço BLE GATT, o modelo de interação botão / OLED / háptico, a estratégia de energia ou de produtização, ou o bring-up de hardware personalizado.

O código-fonte do firmware obtido por checkout é a referência autoritativa; a documentação apenas o resume. Quando houver divergência, o código-fonte prevalece.

## Escolha o Caminho de Desenvolvimento Correto

Nem toda tarefa precisa de trabalho de firmware. Escolha o caminho que corresponde ao seu objetivo:

| Você quer… | Use isto | Envolve firmware? |
|---|---|---|
| Controlar gravação e baixar arquivos a partir de um host ou telefone | **Basic SDK** ([sdk/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/sdk/)) ou **mobile SDKs** ([mobile/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/mobile/)) | Não |
| Modificar o pipeline de áudio, AT/GATT, botão/OLED/háptico, energia ou hardware | **Firmware SDK** (este guia + o [Firmware Development Guide](./respeaker_clip_firmware_development_guide.md)) | Sim |
| Fazer um agente de IA modificar o repositório dentro das restrições reais do firmware | skill [`skills/clip-dev/`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) | Sim |

Os SDKs Basic e mobile se comunicam com o Clip via BLE e AP Wi-Fi do dispositivo e não exigem código-fonte de firmware. Eles são o caminho suportado para integração de aplicativos.

**Fora do escopo do firmware do dispositivo** (não espere essas capacidades):

- **Transcrição em nuvem / resumo por IA** — o Clip grava Opus no cartão SD; a transcrição roda fora do dispositivo. Não há caminho de reconhecimento de fala para texto no dispositivo.
- **Streaming de áudio em tempo real via BLE** — o link BLE carrega comandos AT, quadros de transferência de arquivos e apenas uma notificação de visualização de *nível de energia* de áudio. Ele não faz streaming de áudio ao vivo.

## Capacidades do Firmware e Limites de Personalização

| Capacidade | Implementado? | Controlável pelo Basic/mobile SDK? | Personalizável via firmware? |
|---|---|---|---|
| Iniciar/parar/pausar/retomar/marcar gravação | Sim (`AT+START/STOP/PAUSE/RESUME/MARK`) | Sim | Sim (`clip_event.c`, `button.c`) |
| Modo Normal/Enhanced | Sim (`AT+MODE=normal\|enhanced`, persistido) | Sim | Sim (`audio.c` + Kconfig por modo) |
| Bitrate/complexidade do Opus | Sim (Kconfig por modo) | Não — apenas em tempo de build | Sim (Kconfig) |
| Supressão de ruído (SpeexDSP NS) | Parcial — apenas Enhanced, padrão em tempo de boot, **sem AT em tempo de execução** (`AT+NOISE` legado removido) | Não | Sim (Kconfig + `config.c`; adicione um handler AT para expor em tempo de execução) |
| Desreverberação | Parcial — apenas Enhanced, padrão em tempo de boot, **sem AT em tempo de execução** | Não | Sim (Kconfig + `config.c`) |
| AGC | Sim — inteiro feito à mão, sempre ligado | Não — não configurável | Não — edite `audio.c` |
| Motor háptico | Sim (`haptic.c`), desativado por padrão (`CONFIG_CLIP_HAPTIC_MOTOR_ENABLED=n`, mas `prj.conf` define `=y` para este app) | Não | Sim |
| Transferência de arquivos (BLE + Wi-Fi UDP) | Sim (`AT+DOWNLOAD/CANCEL`) | Sim | Sim (`transport.c`, `transfer.c`) |
| Stream de áudio em tempo real via BLE | Não (apenas notificação de nível de energia) | N/A | Fora do escopo |

A lista completa de comandos AT registrados, quadros de protocolo, arquitetura, matriz de validação e detalhes de produção/release está no [Firmware Development Guide](./respeaker_clip_firmware_development_guide.md) — esta página apenas resume o que você precisa para começar.

## Fatos sobre o Modo de Gravação e o Pipeline de Áudio

> Documentos mais antigos descrevem `MODE_NORMAL` como **estéreo**. Isso está errado. Ambos os modos gravam em **mono**.

- **Ambos os modos** gravam em **mono** via uma mescla L+R. `clip_event.c` sempre chama `audio_start_recording(AUDIO_MODE_MERGE)`. `MODE_NORMAL` **não** é estéreo — o nome é legado.
- **`MODE_NORMAL`** (padrão) = mescla + um caminho DSP feito à mão apenas (mescla com alinhamento de atraso, passa-alta de 100 Hz, AGC inteiro, limitador suave). **Sem SpeexDSP.**
- **`MODE_ENHANCED`** = mescla + supressão de ruído e desreverberação SpeexDSP, condicionadas a `mode == ENHANCED && noise_suppress > 0` (`audio.c:506`). Com `noise == 0`, Enhanced se comporta como Normal.
- Bitrate e complexidade do Opus são **constantes Kconfig por modo** (`CLIP_NORMAL_*`/`CLIP_ENHANCED_*`), não configuráveis em tempo de execução.
- Defina o modo com `AT+MODE=normal|enhanced` (persistido) ou `AT+START mode=enhanced` (apenas para a sessão, não persistido).

## Pré-requisitos

| Ferramenta | Por quê | Instalação |
|------|-----|---------|
| Código-fonte do [NCS **v3.3.0**](https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/index.html) | Árvore de código-fonte Zephyr + nRF + nrfxlib + mcuboot. **v3.2.1 foi descontinuado** — `main` precisa de Kconfig exclusivo da v3.3.0 e não irá compilar contra ele. | `west` (veja [Set Up NCS](#set-up-ncs-v330)) |
| Toolchain Zephyr SDK **0.16.4** | Compilador/depurador `arm-zephyr-eabi-gcc` para nRF5340 | instalação separada (veja [Set Up NCS](#set-up-ncs-v330)) |
| `west` | Meta-ferramenta do Zephyr (build/flash) | `pip install west` |
| [`nrfutil`](https://www.nordicsemi.com/Products/Development-tools/nrf-util) (≥ 8.x, com `device` + `mcu-manager`) | Reset após flash; DFU via serial USB | Site da Nordic |
| Python **3.10+** | Ferramentas de teste/SDK no host (`clip-cli`, `udp_sync`, `decode_opus`) | python.org |
| J-Link (opcional, apenas dev) | Gravação via SWD em uma unidade de bancada | SEGGER |

Instale as dependências das ferramentas Python uma vez:

```sh
pip install -r applications/clip/tests/requirements.txt
```

## Obtenha o Código-Fonte

O repositório é um **módulo Zephyr** (ele traz sua própria placa, drivers e libs via `zephyr/module.yml`). Clone-o em qualquer lugar e então aponte o ambiente NCS para ele.

> **Baseline verificado.** Este guia tem como alvo a tag de firmware **`v0.0.9`**, NCS **v3.3.0**, placa **`clip/nrf5340/cpuapp`**, em Ubuntu 24.04. Fixe a mesma tag para uma build reprodutível, em vez de clonar o branch `main` em movimento:

```sh
git clone --branch v0.0.9 https://github.com/Seeed-Studio/reSpeaker_Clip.git
cd reSpeaker_Clip
git describe --tags    # confirm: v0.0.9
```

**Hardware suportado:** reSpeaker Clip (nRF5340 + nRF7002 + PMIC NPM1300). Outras revisões de placa não são cobertas por este guia.

## Configure o NCS v3.3.0

O NCS v3.3.0 é instalado como um **workspace west** — a árvore de código-fonte do NCS mais um **toolchain Zephyr SDK** separado. É assim que a configuração de referência o instala.

> **Não use `nrfutil toolchain-manager`.** O binário `nrfutil` v6.1.7 na verdade não possui os comandos `toolchain-manager`/`self-upgrade`, então a etapa de instalação do NCS no CI do firmware está atualmente quebrada (as execuções de [`firmware.yml`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/.github/workflows/firmware.yml) estão falhando). Use as etapas com west abaixo. Se você já tiver o NCS v3.3.0 (por exemplo, instalado via nRF Connect for Desktop), pule para [Enter the NCS environment](#enter-the-ncs-environment--register-this-repo-as-a-module).

### 1. Instale dependências de build + `west`

```sh
sudo apt install -y cmake ninja-build g++ make device-tree-compiler \
    python3 python3-pip git curl ca-certificates
sudo pip3 install --break-system-packages west
west --version          # expect west 1.x
```

### 2. Instale o código-fonte do NCS v3.3.0 (manifesto west)

Isso cria o workspace em `~/ncs/v3.3.0` e busca os módulos do NCS (zephyr, nrf, nrfxlib, mcuboot, HALs, crypto, …) — cerca de 2 GB a partir do GitHub.

```sh
west init -m https://github.com/nrfconnect/sdk-nrf --mr v3.3.0 ~/ncs/v3.3.0
cd ~/ncs/v3.3.0
west update
```

### 3. Instale o toolchain Zephyr SDK (separado)

O workspace west fornece o **código-fonte**; o **compilador** vem do Zephyr SDK. Baixe a versão **0.16.4** em [Zephyr SDK releases](https://github.com/zephyrproject-rtos/sdk/releases) (o artefato `*_linux-x86_64.tar.xz`), extraia-o e execute sua configuração uma vez:

```sh
cd ~
tar xf zephyr-sdk-0.16.4_linux-x86_64.tar.xz     # you downloaded this
cd zephyr-sdk-0.16.4
./setup.sh                                        # registers toolchains + udev rules
# → compiler at ~/zephyr-sdk-0.16.4/arm-zephyr-eabi/bin/arm-zephyr-eabi-gcc
```

> **Acesso a dispositivos no Linux — `nrf-udev` + regras udev do J-Link.** Para gravar ou resetar via USB/J-Link sem root, instale `nrf-udev` (o `.deb` da Nordic) e as regras udev da SEGGER — caso contrário, `/dev/ttyACMx` e probes J-Link serão apenas para root. Veja os [pré-requisitos do nRF Util](https://docs.nordicsemi.com/r/bundle/nrfutil/page/guides/installing.html/prerequisites).

### Entre no ambiente NCS + registre este repositório como módulo

```sh
source ~/ncs/v3.3.0/zephyr/zephyr-env.sh
export ZEPHYR_EXTRA_MODULES=$PWD     # the reSpeaker_Clip checkout
```

> **Por que `ZEPHYR_EXTRA_MODULES` é uma variável de ambiente, não uma variável CMake `-D`.** A descoberta de módulos pelo Kconfig roda *antes* de o CMake configurar. Um `-D` chegaria tarde demais, então o Kconfig nunca veria a placa (`clip`), drivers ou bibliotecas deste repositório. Defina-o no mesmo shell em que você faz o build — ou exporte-o no seu profile de shell.

**Ponto de verificação — seu ambiente está pronto quando todos estes comandos tiverem sucesso:**

```sh
west --version                   # west 1.x
arm-zephyr-eabi-gcc --version    # (Zephyr SDK 0.16.4) gcc 12.x
python3 --version                # Python 3.10+
echo $ZEPHYR_BASE                # .../ncs/v3.3.0/zephyr
```

## Compile o Firmware Padrão

```sh
west build --build-dir build-clip --board clip/nrf5340/cpuapp applications/clip
```

Para uma recompilação totalmente limpa (necessária após mudanças em patches do MCUboot ou um diretório de build obsoleto), adicione `--pristine`:

```sh
west build --build-dir build-clip --pristine --board clip/nrf5340/cpuapp applications/clip
```

Este é um **sysbuild por padrão** — um único comando produz o bootloader MCUboot assinado personalizado + o core de aplicação + a imagem do controlador BLE do core de rede. A placa fornece toda a cola de sysbuild; nenhum `sysbuild.conf` por aplicação é necessário.

> **Identificador da placa**: `clip/nrf5340/cpuapp` — **não** `respeaker/...`.

> **Reprodutibilidade — VM vs. dispositivo.** O caminho de instalação tem como alvo o Ubuntu 24.04 com acesso real à rede (o fetch de vários GB do NCS precisa de conectividade confiável com o GitHub — a rede em modo usuário de uma QEMU/VM tem dificuldades com isso). Uma QEMU/VM pode exercitar as *etapas de instalação e build*, mas **não** substitui um dispositivo — a QEMU não consegue emular o dual-core nRF5340, nRF7002, microfone PDM, SD, OLED, PMIC ou o comportamento real de USB/BLE. Flash, transporte, áudio e recuperação devem ser verificados em um Clip real.

## Build da Configuração de Produção

A variante de baixo consumo: console UART e os backends de log FS/UART desligados, idle ≈170 µA (vs. o build de debug, onde o console vaza ~570 µA). Use isto para builds de bateria/produção em que a corrente do console importa.

```sh
west build --build-dir build-clip-prod --board clip/nrf5340/cpuapp applications/clip \
  -- -DSNIPPET_ROOT=$(pwd)/applications/clip -DSNIPPET=production
```

`SNIPPET_ROOT` deve ser um caminho absoluto. O snippet `production` fica em `applications/clip/snippets/production/`.

## Gravar e Resetar

```sh
west flash --build-dir build-clip          # flash both cores
nrfutil device reset --serial-number <JLINK-SN>
```

> **`--serial-number` mira um J-Link específico.** Omita apenas quando um único dispositivo estiver conectado — com múltiplos probes o simples `nrfutil device reset` é ambíguo. Encontre o SN com `nrfutil device list` ou impresso no corpo do J-Link.

Duas ressalvas específicas desta placa:

- **`west flash --reset` NÃO funciona** aqui. Sempre faça o reset separadamente com `nrfutil device reset`.
- **`--recover` apaga ambos os cores** (ele limpa o lock da access-port do net-core). Use-o apenas quando o AP do net-core estiver travado em `b0n` (por exemplo, após um boot seguro anterior) — não como uma flag de rotina.

Usuários finais (case fechado, sem probe) pulam completamente esta etapa e usam DFU via USB serial — veja [Recover with USB Serial DFU](#Recover-with-USB-Serial-DFU) abaixo.

## Abrir o Console de Debug

```sh
minicom -D /dev/ttyACM0 -b 921600
```

Quando um probe J-Link também está conectado, o J-Link pega o `ttyACM0` e a ponte UART0 do Clip passa para `ttyACM1` — use a porta que for a "USB Single Serial" (não-J-Link).

## Executar o Smoke Test

Critérios de sucesso: o dispositivo dá boot, responde a comandos AT via BLE, grava um arquivo Opus válido e o puxa de volta via Wi-Fi. Todas as respostas AT são JSON — sucesso é `{"ok":true,"data":{...}}`, falha é `{"ok":false,"msg":"..."}`.

### Boot & status

O OLED acende e o dispositivo chega ao estado IDLE. Confirme por qualquer canal AT:

```
AT+GSTAT        →  {"ok":true,"data":{"state":"IDLE","battery":..,"mode":..,...}}
AT+VERSION      →  {"ok":true,"data":{"version":"0.0.6",...}}
```

### Gravar → listar → baixar (via BLE)

`clip-cli.py` é o CLI unificado do host (BLE por padrão, também Wi-Fi). Com o dispositivo anunciando:

```sh
# status over BLE
python applications/clip/tests/tools/clip-cli.py status

# record ~5s, stop, list sessions
python applications/clip/tests/tools/clip-cli.py record --duration 5
python applications/clip/tests/tools/clip-cli.py list
```

`AT+LIST` deve mostrar a nova sessão (ordenada da mais recente para a mais antiga). Puxe os arquivos Opus de volta via BLE e decodifique um para WAV para confirmar que é áudio válido:

```sh
python applications/clip/tests/tools/clip-cli.py sync --session <session_id>
python applications/clip/tests/tools/decode_opus.py recordings/<session_id>/0001.opus out.wav   # plays
```

### Pull via Wi-Fi (sync UDP, verificado por CRC32)

O dispositivo expõe um AP Wi-Fi depois de habilitado. Primeiro via BLE:

```
AT+WIFI=on     →  {"ok":true,"data":{"ssid":"ClipAP_XXXX",...}}
```

Depois, a partir do host, entre no AP e sincronize a sessão:

```sh
# SSID ClipAP_XXXX (last 4 hex of chip ID) · password 12345678 (default;
# becomes random after the first BLE pairing) · IP 192.168.4.1 · UDP 8089
python applications/clip/tests/tools/udp_sync.py --session <session_id>
```

Se todos os quatro passarem — status, gravação, listar/baixar com um arquivo Opus decodificável e o pull via Wi-Fi — o baseline do firmware de fábrica está bom.

## Exportar Artefatos de Build

Ainda não há um export em único zip — o `scripts/build_release.sh` disparado por tag
+ `.github/workflows/release.yml` ainda não estão implementados. Por enquanto, faça o build de ambas as variantes e copie manualmente os quatro artefatos de cada uma:

```sh
VERSION=$(grep APP_VERSION_STRING build-clip/clip/zephyr/include/generated/zephyr/app_version.h | cut -d'"' -f2)
mkdir -p output/$VERSION

# Debug
cp build-clip/merged.hex            output/$VERSION/clip-$VERSION-debug-merged.hex
cp build-clip/merged_CPUNET.hex     output/$VERSION/clip-$VERSION-debug-merged_CPUNET.hex
cp build-clip/dfu_application.zip   output/$VERSION/clip-$VERSION-debug-ota.zip
cp build-clip/clip/zephyr/zephyr.signed.bin output/$VERSION/clip-$VERSION-debug-signed.bin
# Production
cp build-clip-prod/merged.hex            output/$VERSION/clip-$VERSION-production-merged.hex
cp build-clip-prod/merged_CPUNET.hex     output/$VERSION/clip-$VERSION-production-merged_CPUNET.hex
cp build-clip-prod/dfu_application.zip   output/$VERSION/clip-$VERSION-production-ota.zip
cp build-clip-prod/clip/zephyr/zephyr.signed.bin output/$VERSION/clip-$VERSION-production-signed.bin
```

Por release: `*-merged.hex` / `*-merged_CPUNET.hex` (programador), `*-signed.bin` (DFU via USB serial), `*-ota.zip` (pacote multi-imagem mcumgr para BLE/USB).

## Recuperar com DFU via USB Serial

Se um build de bancada deixou o dispositivo em um estado ruim, use o **gatilho USB de 1200 baud** — sem probe, sem abrir o case. Todo app do clip tem isso embutido (nível de placa, `lib/clip_usb_dfu`).

> **Recuperação de desenvolvimento vs. release oficial.** Isto recupera para um `*-signed.bin` *autogerado* que você exportou acima. Um pacote de release publicado e baixável (GitHub Releases + `scripts/build_release.sh`) **ainda não está disponível** — "voltar para o release oficial" depende desse pipeline. Até lá, trate isto como o caminho de recuperação de desenvolvimento; ele não prova um release público.

1. O app do clip mantém o USB desligado por padrão — envie `AT+USB=on` via BLE primeiro (samples e apps customizados com o CDC padrão de auto-enable USB podem pular isso). Depois, dispare a recuperação abrindo a porta CDC-ACM a 1200 baud:

   ```sh
   python3 -c "import serial; s=serial.Serial('/dev/ttyACMx',1200); s.close()"
   ```

   (Segurar o botão de usuário enquanto conecta o USB também entra em modo de recuperação.)

2. Uma nova porta CDC-ACM aparece — **PID `0x8069`** (o app em execução é `0x0069`; o bit `0x8000` marca o modo bootloader; ambos com VID Seeed `0x2886`). Envie o app de release assinado e faça o reset:

   ```sh
   nrfutil mcu-manager serial image-upload --firmware clip-<version>-signed.bin --serial-port /dev/ttyACMx
   nrfutil mcu-manager serial reset     --serial-port /dev/ttyACMx
   ```

O MCUboot verifica a assinatura RSA e dá boot no novo app; a partição do bootloader nunca é tocada. O guia completo (BLE OTA, caminho do botão, `mcumgr`, nRF Connect, troubleshooting) está em [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md).

## Para Onde Ir em Seguida

- **Arquitetura de sistema, protocolo, atualização/recuperação, validação, produção** → [Firmware Development Guide](./respeaker_clip_firmware_development_guide.md) (a referência abrangente).
- **Build / flash / energia / armadilhas (referência completa)** → [CLAUDE.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/CLAUDE.md).
- **Apps de exemplo para copiar** → [samples/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/samples/).
- **Desenvolvimento assistido por IA** → [`skills/clip-dev/`](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) — carregue esta skill no seu agente de IA. Seu `SKILL.md` mais nove referências já codificam as restrições reais do projeto, incluindo que **não existem comandos em tempo de execução para bitrate, complexidade do codec, AGC, supressão de ruído e dereverb** — o modo de áudio é apenas `normal` ou `enhanced`.

Um build de fábrica que dá boot, grava e é controlável a partir do Basic SDK (`clip-cli` / app SenseCraft Voice) é o pré-requisito para qualquer trabalho de firmware assistido por IA ou customizado neste repositório.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
