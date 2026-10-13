---
description: "Conheça as funções, opções de compilação e relações de inicialização dos serviços de produto reCamera no pacote de código-fonte completo."
title: "Arquitetura de Serviços do Produto"
keywords:
  - "reCamera"
  - "reCamera Pro"
  - "RV1126B"
  - "SDK"
  - "BSP"
  - "Linux"
  - "Firmware"
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_services
sku: 10003420
sidebar_position: 10
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_bsp_services/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Arquitetura de Serviços do Produto

Esta página descreve as responsabilidades, linguagens, opções de compilação, métodos de inicialização e pontos de entrada de personalização para aplicações em `project/app/`. **É aqui que a Seeed fez as maiores adições ao SDK original da Rockchip e onde a personalização de produto ocorre com mais frequência.**

## Visão Geral dos Serviços

```text
                        ┌──────────────────────────────┐
   sensor ──► rockit ──►│  recamera_ipc (rkipc, C)     │──► Internal RTSP 127.0.0.1:5554
      ▲                 │  Main application for video, audio, recording, and AI inference │        │
      │                 └──────────────┬───────────────┘        ▼
   rkaiq(ISP)                          │ protobuf          ┌─────────┐
   rockiva(NPU)                        │ Unix socket       │ go2rtc  │──► WebRTC :8555
   librknnrt(NPU)                      ▼                   └─────────┘   RTSP :554 (optional)
                        ┌──────────────────────────────┐
                        │ recamera_notify (Python)     │──► MQTT / HTTP / UART / WebSocket
                        └──────────────────────────────┘

   ┌────────────────────┐   ┌─────────────────────┐   ┌──────────────────────┐
   │ recamera_web       │   │ recamera_services   │   │ recamera_onvif (C)   │
   │ React frontend + backend  │   │ Rust: gmgr/skt2ws/  │   │ ONVIF device discovery and control │
   │ nginx static assets     │   │ tmir/rcisd          │   └──────────────────────┘
   └────────────────────┘   └─────────────────────┘
                                    │
   ┌────────────────────┐   ┌───────▼─────────────┐
   │ overlay system services   │   │ recamera_utils      │
   │ ttyd/sshd/syslog/  │   │ Factory and test tools      │
   │ watchdog/board-id  │   └─────────────────────┘
   └────────────────────┘
```

## Índice de Aplicações e Opções de Compilação

| Aplicação | Linguagem | Opção de compilação da placa | Descrição |
| --- | --- | --- | --- |
| `recamera_ipc` | C (CMake + protobuf) | `RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` | Aplicação IPC de nível de produto **principal** |
| `recamera_web` | React/Node + C/C++ | `RK_APP_RECAMERA_WEB=y` | Interface de configuração web (frontend + backend) |
| `recamera_services` | Rust | `RK_APP_RECAMERA_SERVICES=y` | Serviços de sistema incluindo gmgr, skt2ws, tmir e rcisd |
| `recamera_notify` | Python | `RK_APP_RECAMERA_NOTIFY=y` | Notificações de inferência de IA (MQTT/HTTP/UART/WebSocket) |
| `recamera_onvif` | C | `RK_APP_RECAMERA_ONVIF=y` | Implementação do protocolo ONVIF |
| `recamera_utils` | Shell / Python / C | Sem opção de compilação explícita | Testes de fábrica, ferramentas de número de série e testes de estresse |
| `rkai` | C++ (CMake) | Controlado por `RK_APP_TYPE` | Wrappers RKAI (LLM/VLM) e exemplos |
| `rkllm-inference` | C++ | `RK_APP_RKLLM_INFERENCE=y` | Demo de inferência multimodal RKNN + RKLLM |
| `rkipc` | C | Implementação de referência Rockchip | Base upstream para `recamera_ipc` |
| `wifi_app` | C + código de terceiros | `RK_ENABLE_WIFI=y` | wpa_supplicant / hostapd / bluez / GATT |
| `cvr` | C | — | Gravação veicular |
| `aov_sample` | C | — | Exemplo de visão sempre ativa e de baixo consumo (AOV) |
| `ao_record_demo` | C | `RK_APP_TYPE` inclui `RK_AO_RECORD_DEMO` | Demo de gravação de áudio |
| `uvc_app_tiny` | C | — | Modo câmera UVC |
| `ipcweb` | Frontend e backend | — | Implementação de referência web original da Rockchip |
| `testdemo` | C/C++ | — | `low_delay_net_display`、`yoloworld_demo` |
| `fastboot_client` | C | `RK_ENABLE_FASTBOOT` | Cliente Fastboot |
| `nginx_mk` | — | — | Empacotamento do nginx |
| `component/` | Misto | — | Componentes comuns:`ao_record_service`、`fastboot_server`、`lvgl`、`rkadk`、`rkfsmk` |

`RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2` é um identificador composto. Algumas aplicações (como `ao_record_demo`) usam `$(filter RK_XXX, $(RK_APP_TYPE))` para determinar se devem ser compiladas.

## recamera_ipc (Aplicação Principal)

### Estrutura

```text
project/app/recamera_ipc/
├── CMakeLists.txt / Makefile / cmake/ / format.sh
├── LICENSE
├── docs/                       # Rockchip_Developer_Guide_Linux_RKIPC_{CN,EN}.md (V1.7.6) + resources
├── protobufs/                  # Message definitions for communication with notify and web
├── model/rknn/                 # yolox_s.rknn(+json)、nanodet-plus-m_416.rknn(+json)
├── lib/
├── system/
└── src/rv1126b_ipc/
    ├── main.c
    ├── CMakeLists.txt
    ├── RkLunch.sh              # ★ System-wide application startup entry point
    ├── RkLunch-stop.sh
    ├── rkipc-3840x2160.ini     # ★ Default configuration (resolution/bitrate/RTSP/ONVIF options)
    └── video/
```

### Módulos common (Mapa de Funcionalidades)

O código em `project/app/recamera_ipc/common/` é organizado por funcionalidade. Use esta tabela para encontrar o diretório relevante:

| Módulo | Responsabilidade |
| --- | --- |
| `audio/` | `audio.c` captura e codificação;`rkaudio_mp3.c` áudio de aviso em MP3 |
| `isp/` | Wrapper rkaiq |
| `venc/` | Codificação de vídeo |
| `rtsp/` | Serviço RTSP interno (127.0.0.1:5554) |
| `rtmp/` | Streaming RTMP |
| `osd/` | Sobreposição de carimbo de data/hora e texto |
| `region_clip/`、`roi/` | Recorte de região e ROI |
| `rockiva/` | Integração do algoritmo ROCKIVA |
| `rc_infer/`、`rc_model/` | Framework de inferência personalizado e gerenciamento de modelos |
| `rc_notify/` | Envia resultados de inferência para `recamera_notify` |
| `event/` | Sistema de eventos |
| `storage/` | Armazenamento de gravações e gerenciamento de cartão SD |
| `network/` | Configuração de rede |
| `socket_server/` | Serviço de socket para o backend web e notify |
| `system/`、`sysutil/` | Informações de sistema e funções utilitárias |
| `param/` | Leitura/gravação de parâmetros INI |
| `vendor_storage/` | Área de armazenamento do fornecedor (número de série, endereço MAC e mais) |
| `vigil/`、`vigil_device_support/` | Código relacionado a vigil (depende de protobuf e libblkid) |
| `player/` | Player |
| `lvgl/`、`ui/` | UI na tela (LVGL) |
| `uvc/` | Modo UVC |
| `ivm/` | Monitoramento de vídeo inteligente |
| `gstreamer/` | Código relacionado ao GStreamer |

### Inicialização e Encerramento

No dispositivo, scripts init gerados chamam estes comandos:

```bash
# sh /oem/usr/bin/RkLunch.sh         # Start
# sh /oem/usr/bin/RkLunch-stop.sh    # Stop
```

`RkLunch.sh` faz `source` de `/etc/profile.d/RkEnv.sh` e então inicia rkipc e processos relacionados. **Para iniciar sua própria aplicação na inicialização, modifique este script primeiro**, em vez de adicionar outro script init.

### Configuração

A configuração em tempo de execução no dispositivo é `/userdata/config/rkipc.ini` (em uma partição gravável), inicialmente populada a partir de `rkipc-3840x2160.ini`. O script de inicialização do go2rtc lê suas seções `[video.0.rtsp]`、`[video.0.onvif]`、`[video.1.rtsp]` para determinar se deve expor a porta 554.

Após alterar a configuração, reinicie rkipc e **reinicie também o go2rtc** (sua configuração é gerada na inicialização em `/tmp/go2rtc/go2rtc.yaml`):

```bash
# sh /oem/usr/bin/RkLunch-stop.sh && sh /oem/usr/bin/RkLunch.sh
# /oem/usr/etc/init.d/S50go2rtc restart
```

## recamera_services (Serviços de Sistema em Rust)

As informações a seguir são de `recamera_services/README.md`:

| Componente | Finalidade | Configuração |
| --- | --- | --- |
| **gmgr** | Gerenciador de GPIO; fornece uma API HTTP/WebSocket para controle e monitoramento de GPIO | `gmgr/config.json` |
| **skt2ws** | Ponte Socket → WebSocket que encaminha dados de socket Unix (usado por `rkipc-record-events`) | `skt2ws/config.json` |
| **tmir** | TTY Mirror; multiplexa uma porta serial para um socket/WebSocket (espelha `ttyS4`) | `tmir/config.json` |
| **rcisd** | reCamera Intellisense daemon; coloca eventos em fila e transfere arquivos | Sem configuração externa |

Outros diretórios incluem `inotify_passwd/` (observa alterações no arquivo de senha), `key_factory/` (botão de fábrica), `led/` (controle de LED) e `scripts/init.d/`.

### Compilação

```bash
cd project/app/recamera_services
make                                          # Default target: armv7-unknown-linux-gnueabihf
make SERVICE_TARGET=aarch64-unknown-linux-gnu # Use 64-bit for reCamera Pro
make gmgr                                     # Build one component
make clean && make help
```

Rust e Docker são necessários (`cross` usa Docker para compilação cruzada). `gmgr/setup-libgpiod.sh` prepara a dependência libgpiod.

> **O alvo padrão é armv7 de 32 bits.** A reCamera Pro usa aarch64, portanto passe `SERVICE_TARGET=aarch64-unknown-linux-gnu` explicitamente; caso contrário, os binários não serão executados. O SDK define o alvo correto quando você usa `./build.sh app`, mas é fácil esquecer ao invocar `make` manualmente.

### Layout de Saída

```text
out/
├── etc/init.d/{S40gmgr,S40skt2ws,S40tmir,S49rcisd}
└── usr/
    ├── bin/{gmgr,skt2ws,tmir,rcisd}
    └── share/{gmgr_config.json,skt2ws_config.json,tmir_config.json}
```

### API do gmgr

Escuta na porta HTTP `8080` e também fornece o socket Unix `/dev/shm/gmgr.sock`:

```text
GET    /api/v1/gpios                     # Lists all pins and their full descriptions
GET    /api/v1/gpios/events              # WebSocket stream of events from all pins
GET    /api/v1/gpio/{pin_id}             # Full description of one pin
GET    /api/v1/gpio/{pin_id}/info        # Configuration information
GET/POST /api/v1/gpio/{pin_id}/settings  # state / edge / debounce_ms
GET/POST /api/v1/gpio/{pin_id}/value     # Reads or writes the pin level
GET    /api/v1/gpio/{pin_id}/event       # Most recent event
GET    /api/v1/gpio/{pin_id}/events?limit=5
```

O desenvolvimento local habilita o recurso `mock-gpio` por padrão. Para uma compilação para hardware, adicione `--features hardware-gpio`:

```bash
cargo build --release --features hardware-gpio
cargo test
```

## recamera_notify (Serviço de Notificação em Python)

Este serviço recebe dados de inferência protobuf de `rkipc` e encaminha os resultados da câmera de IA por vários canais.

| Capacidade | Descrição |
| --- | --- |
| Servidor de socket | Recebe dados de inferência de rkipc |
| Análise | protobuf (`protobufs/inference_pb2.py`) |
| Formatação | Saída baseada em modelo |
| Canais de notificação | **MQTT、HTTP、UART、WebSocket** |
| Confiabilidade | Reconecta automaticamente após uma desconexão MQTT |
| Configuração | JSON (`notify_config_default.json`) |
| Status | O status de execução de MQTT/HTTP/UART é gravado em um arquivo JSON temporário |

Módulos: `core/` (`config_manager`, `inference_parser`, `template_formatter`, `socket_server`, `notifier_manager`), `notifiers/` (`base_notifier`, `mqtt_notifier`, `http_notifier`, `uart_notifier`, `websocket_server`, `notifier_factory`) e `tests/` (incluindo `run_all_tests.py`).

### Compilar e Implantar

```bash
export RK_APP_RECAMERA_NOTIFY=y
make -C project/app/recamera_notify
```

Caminhos de instalação no dispositivo:

| Item | Caminho |
| --- | --- |
| Pacote Python | `/usr/lib/python3.11/site-packages/recamera_notify/` |
| Script de inicialização | `/usr/bin/notify_server.sh` |
| Serviço de sistema | `/etc/init.d/S49notify` |

```bash
# /etc/init.d/S49notify start
# /etc/init.d/S49notify stop
# ps aux | grep notify_server
```

> O dispositivo de destino usa Python **3.11**. Verifique a compatibilidade de sintaxe e dependências se você desenvolver no host com outra versão.

## recamera_onvif (C)

Implementa descoberta e controle de dispositivo ONVIF padrão. O diretório contém `src/` (`dom.c`, `authenticate.c`, `cJSON.c` e outro código de manipulação SOAP/XML), `socket_client/` e `script/`. Também inclui `RECV.log`, `SENT.log` e `TEST.log` para depuração de captura de pacotes.

Habilitado por `RK_APP_RECAMERA_ONVIF=y` Quando o ONVIF está habilitado, o go2rtc também habilita RTSP externo (consulte [Device Access and Debugging](/pt-br/recamera_pro_bsp_device_debug/) para as regras de precedência).

## recamera_web (Frontend e Backend)

```text
project/app/recamera_web/
├── recamera_web_react/     # React frontend
│   ├── package.json / src / public / backend / nginx.conf / requirements.txt
└── recamera_web_backend/   # C/C++ backend (CMake + thirdparty + ipcweb-env-rv1126b)
```

Recursos do frontend (do seu README):

- Internacionalização (inglês e chinês), temas claro/escuro e layout responsivo
- **Informações do dispositivo:** modelo, número de série, monitoramento de CPU/memória/armazenamento, salvar configuração, reinicializar e restaurar para configurações de fábrica
- **Visualização ao vivo:** pré-visualização do stream, reproduzir/pausar, capturas de tela, gravação e controles de resolução/taxa de quadros/taxa de bits/codec
- **Configurações de gravação:** gravação contínua, agendada, acionada por movimento ou acionada por evento de IA; caminho de armazenamento, segmentos, sobrescrita em loop e navegação, reprodução, download e exclusão de arquivos
- **Inferência de IA:** detecção de objetos (série YOLO), segmentação de imagem, detecção de pontos-chave (pose/rosto/mão) e classificação de imagem (ResNet, EfficientNet). Cada tarefa pode configurar seu modelo, limite de confiança, tamanho de lote, dispositivo de inferência (GPU/CPU/NPU) e visualização.
- **Terminal:** gerencie o dispositivo por meio de uma interface de linha de comando (integrada com ttyd)

O frontend requer Node.js 18 ou superior. A saída da compilação é implantada de acordo com `nginx.conf` (nginx é fornecido por `nginx_mk`). A pré-visualização de vídeo usa go2rtc WebRTC na porta `:8555`.

## recamera_utils (Utilitários de Fábrica e Teste)

| Diretório | Item |
| --- | --- |
| `hw_test/` | `bt_adv.sh` (teste de publicidade Bluetooth), `imu_test.py` (teste de IMU; corresponde à opção de kernel `CONFIG_INV_ICM42670_I2C=y`) |
| `emc_test/` | `AP6256_MFG.bin`, o utilitário `wl` e `BT RF Test Commands for Linux-v09.pdf` — testes de certificação RF de Wi-Fi/Bluetooth |
| `rf_range_test/` | `bt_client.py`、`bt_server.py`、`wifi_ap.py`、`wifi_sta.py` —— testes de alcance RF |
| `stress_test/` | `cpu_stress.py`、`npu_stress.py`、`emmc_sd_stress.py`、`emc_test.py` |
| `sn_tool/` | `SN_TOOL` — grava o número de série (usado com `upgrade_tool sn`) |

Use essas ferramentas como base para instruções de trabalho de fábrica. Cada diretório contém um `README.md`.

## Outros Aplicativos

| Aplicativo | Descrição |
| --- | --- |
| `rkai` | Biblioteca wrapper RKAI (`rkai_LLM`, `rkai_VLM`), exemplos (`rkai_samples_llm.cpp`, `rkai_samples_vlm.cpp`, `rkai_samples_vlm_vision.cpp`) e documentação `doc/Rockchip_Developer_Guide_Linux_RKAI_{CN,EN}.md`; `common/include/` contém `rknn_api.h`, `rknn_custom_op.h`, `cJSON.h`, `cnpy.h` e `easy_timer.h` |
| `rkllm-inference` | Consulte [AI and NPU Development](/pt-br/recamera_pro_ai_npu_development/) |
| `wifi_app` | Compila wpa_supplicant (2.6, ou 2.10 para WPA3), hostapd, libnl 3.9.0, openssl 3.2.1, bluez 5.77, `rtk_hciattach` e ferramentas de servidor/cliente GATT; a configuração está em `/userdata/rk96x/conf`. `RK_ENABLE_WIFI_CHIP` seleciona o prefixo RK960 ou RK962 |
| `aov_sample` | Exemplos de baixo consumo AOV:`sample_aov_aiisp_iva_venc.c`、`sample_aoa_capture.c`、`sample_aov_audio.c`、`resume_suspend_test.sh` |
| `testdemo/yoloworld_demo` | Demo YOLO-World ponta a ponta |
| `component/` | `ao_record_service` (serviço de gravação de áudio), `fastboot_server` (inicialização rápida), `lvgl` (GUI), `rkadk` (kit de desenvolvimento de aplicativos), `rkfsmk` (sistema de arquivos) |

## Visão Geral da Ordem de Inicialização

Scripts em `/etc/init.d/` e `/oem/usr/etc/init.d/` são executados em ordem numérica no dispositivo:

| Ordem | Script | Origem |
| --- | --- | --- |
| S00 | `board-id` | overlay |
| S10 | `log`(log via WebSocket) | overlay |
| S15 | `watchdog` | overlay |
| S20 | `hwclock` | overlay |
| S20/S21 | `linkmount` / `appinit` | gerado automaticamente por `build.sh` (monta partições / chama `RkLunch.sh`) |
| S40 | `gmgr`、`skt2ws`、`tmir` | recamera_services |
| S49 | `rcisd` | recamera_services |
| S49 | `notify` | recamera_notify |
| S50 | `sshd`、`ttyd`、`go2rtc` | overlay |
| S70 | `vsftpd` | overlay |
| S99 | `factorykey`、`inotify_passwd`、`led` | recamera_services |

Ao adicionar um serviço, escolha um número de sequência não utilizado e leve em conta as dependências. Por exemplo, inicie serviços que dependem de rede após S40 e serviços que precisam de `/userdata` após `S20linkmount`.

## Repositórios de Código-Fonte

Este é um snapshot do código-fonte sem metadados `.git`. Os arquivos README identificam esses aplicativos como correspondentes a repositórios internos do GitLab da Seeed:

| Aplicativo | Repositório |
| --- | --- |
| `recamera_onvif` | `https://iteam-gitlab.seeed.cn/rockchip/linux-ipc-app-recamera2-onvif.git` |
| `recamera_utils` | `https://iteam-gitlab.seeed.cn/rockchip/linux-ipc-app-recamera2-utils.git` |

O padrão de nomenclatura é `rockchip/linux-ipc-app-recamera2-<module>`. Outros aplicativos `recamera_*` provavelmente seguem a mesma convenção (**verifique isso no GitLab interno antes de completar a tabela**). Faça alterações upstream no repositório correspondente em vez deste snapshot do SDK, ou elas podem ser perdidas durante a próxima sincronização.

## Referência Rápida de Impacto de Mudanças

| Se você quiser alterar… | Edite aqui | Recompile |
| --- | --- | --- |
| Resolução de vídeo/stream/opções RTSP/ONVIF | `recamera_ipc/src/rv1126b_ipc/rkipc-3840x2160.ini` ou no dispositivo `/userdata/config/rkipc.ini` | `app` + `firmware`(ou edite o INI do dispositivo diretamente) |
| Páginas da interface web | `recamera_web/recamera_web_react/src/` | `app` + `firmware` |
| APIs de backend web | `recamera_web/recamera_web_backend/src/` | Igual ao acima |
| Definições/API de GPIO | `recamera_services/gmgr/config.json` e `src/` | Igual ao acima |
| Formato/canais de notificação de inferência | `recamera_notify/notify-server/`、`notify_config_default.json` | Igual ao acima |
| Modelos de IA | `recamera_ipc/model/rknn/` e os arquivos `.json` correspondentes | `app` + `firmware` |
| Aplicativos de inicialização | `recamera_ipc/src/rv1126b_ipc/RkLunch.sh` | `app` + `firmware` |
| Formato/saída de log | `overlay-buildroot-syslog-ng/etc/syslog-ng.conf` | `rootfs` + `firmware` |
| Política de Serial/SSH/ttyd | `overlay-buildroot-sshd`、`overlay-buildroot-ttyd` | `rootfs` + `firmware` |
| Mapeamento de canais de áudio | `overlay-buildroot-asound/etc/asound.conf` | `rootfs` + `firmware` |

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