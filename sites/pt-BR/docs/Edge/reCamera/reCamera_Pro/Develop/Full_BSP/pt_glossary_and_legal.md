---
description: Consulte a terminologia do SDK, os documentos técnicos incluídos e as informações de licenciamento.
title: Glossário, Mapa de Documentação e Licenciamento
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Referência
  - Documentação
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_reference
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_sdk_reference/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Glossário, Mapa de Documentação e Licenciamento

## Glossário

### Plataforma e Hardware

| Termo | Significado |
| --- | --- |
| **RV1126B** | SoC Rockchip focado em IPC com um NPU e ISP35. Chip principal na reCamera Pro; RK_CHIP=rv1126b, RK_ARCH=arm64 |
| **RV1126BP** | Variante de encapsulamento / derivada do RV1126B usada por algumas configurações de placa EVB |
| **RK801** | PMIC usado pela reCamera Pro |
| **RK817** | PMIC com codec de áudio integrado (CONFIG_SND_SOC_RK817=y) |
| **ES7202** | ADC multicanal Everest para captura de matriz de microfones |
| **ISP35** | Versão ISP do RV1126B; arquivos de IQ relacionados estão em iqfiles/isp35/ |
| **eMMC** | Armazenamento onboard (RK_BOOT_MEDIUM=emmc) |
| **Maskrom** | Modo de download embutido na ROM do SoC; ponto de entrada para gravação (USB VID 2207) |
| **loader / idblock** | Inicialização de DDR e primeiro estágio do bootloader; as saídas incluem idblock.img e download.bin |
| **board ID** | Variante de placa base / placa de expansão detectada por níveis de divisor de tensão em ADC; o resultado é gravado em /run/board_id.env |
| **DTBO** | Device Tree Blob Overlay, usado em tempo de execução para suportar múltiplas variantes de hardware com uma única imagem de firmware |

### SDK e Sistema de Build

| Termo | Significado |
| --- | --- |
| **BSP** | Board Support Package: suporte em nível de placa incluindo U-Boot, kernel, rootfs e drivers |
| **BoardConfig** | `project/cfg/<series>/BoardConfig-*.mk`; o conjunto completo de parâmetros de placa para um build |
| **lunch** | Seleciona um BoardConfig; terminologia do sistema de build do Android. Gera o link simbólico .BoardConfig.mk |
| **sysdrv** | SDK do componente de drivers de sistema contendo fontes de U-Boot / kernel / MCU; pode ser compilado de forma independente com make |
| **media** | SDK de componentes multimídia contendo mpp / rockit / rkaiq / rga / iva, etc.; pode ser compilado de forma independente com make |
| **app** | Aplicativos em espaço de usuário em project/app/ |
| **fragment** | Defconfig incremental de kernel / U-Boot aplicado em ordem sobre o defconfig base |
| **overlay** | Diretório de arquivos copiados sobre o rootfs durante o empacotamento; entradas habilitadas são listadas em RK_POST_OVERLAY |
| **IQ file** | Arquivo de Image Quality contendo parâmetros de ajuste de sensor rkaiq (JSON) |
| **rootfs** | Sistema de arquivos raiz ext4 gerado pelo Buildroot na partição de 3 G |
| **oem** | Diretório /oem. Esta placa define RK_BUILD_APP_TO_OEM_PARTITION=n, então é um diretório comum dentro do rootfs, não uma partição separada |
| **userdata** | Partição gravável montada em /userdata; armazena configuração e dados do usuário e é o HOME padrão |
| **misc** | Pequena partição contendo flags de recuperação / restauração de fábrica |
| **RK_APP_TYPE** | Tipo de aplicação de referência; esta placa usa RKIPC_RV1126B_RECAMERA2 |
| **allsave** | all + save; comportamento padrão quando ./build.sh é executado sem argumentos |
| **RK_APP_xxx** | Chave de configuração de placa que controla se um aplicativo é compilado |
| **MAROC_\*** | Família de macros em Makefile.param, incluindo MAROC_COPY_PKG_TO_APP_OUTPUT, MAROC_STRIP_DEBUG_SYMBOL e MAROC_PKG_RELEASE |

### Multimídia (rockit / MPI)

| Termo | Significado |
| --- | --- |
| **MPI** | Media Process Interface, a interface de programação unificada para rockit |
| **rockit** | Implementação de runtime MPI da Rockchip; vincular com -lrockit |
| **MPP** | Media Process Platform, bibliotecas de codec de nível mais baixo; vincular com -lrockchip_mpp |
| **VI** | Video Input; captura quadros de um sensor através do ISP |
| **VPSS** | Video Process Sub System; escalonamento / corte / conversão de formato multicanal |
| **VENC / VDEC** | Codificação / decodificação de vídeo |
| **VO** | Saída de vídeo para um display |
| **RGN** | Módulo de região para sobreposições OSD e marcas d'água |
| **AI / AO** | Audio In / Audio Out |
| **AENC / ADEC** | Codificação / decodificação de áudio |
| **AVS** | Around View System para costura de visão panorâmica com múltiplas câmeras |
| **IVS** | Intelligent Video Surveillance para análises como detecção de movimento |
| **TDE** | Two Dimensional Engine para aceleração 2D |
| **RGA** | Raster Graphic Acceleration, um acelerador 2D para escalonamento, conversão NV12↔RGB e rotação |
| **MB** | Media Buffer / pool de buffers |
| **Bind** | RK_MPI_SYS_Bind() conecta canais de dois módulos para que os dados fluam automaticamente |
| **EIS / DIS** | Estabilização eletrônica / digital de imagem |
| **ePTZ** | Pan-tilt-zoom eletrônico |
| **SVC** | Scalable Video Coding |
| **AOV** | Always-On Vision, visão sempre ativa de baixo consumo |
| **FEC** | Hardware de correção de olho de peixe / distorção (CONFIG_VIDEO_ROCKCHIP_FEC=y) |
| **IRFPA** | Matriz de plano focal infravermelho (imagem térmica) |
| **rkaiq** | Engine Rockchip AI ISP para 3A e ajuste; vincular com -lrkaiq |
| **uAPI / uAPI2** | Duas gerações de interfaces em espaço de usuário do rkaiq; novo código deve usar uAPI2 (rk_aiq_user_api2_*.h) |
| **AINR** | Redução de ruído com IA; arquivos de IQ relacionados estão em iqfiles/isp35/ainr/ |
| **AI-ISP** | Usa o NPU para aprimorar a saída do ISP; desativado nesta placa (RK_AIISP_MODEL=NONE) |

### IA / NPU

| Termo | Significado |
| --- | --- |
| **NPU** | Neural Processing Unit integrada no RV1126B |
| **RKNN** | Formato e runtime de modelo de rede neural da Rockchip (.rknn + librknnrt.so) |
| **RKNN-Toolkit2** | Ferramenta de conversão de modelos para PC em x86_64 / Python; **não incluída no SDK** e deve ser instalada separadamente. Versão de referência interna: 2.3.2 |
| **rknn-toolkit-lite2** | Wrapper de inferência em Python para o dispositivo; adequado apenas para validação. Use a API em C em aplicações de produção |
| **RKLLM** | Runtime de large-language-model da Rockchip (.rkllm + librkllmrt.so) |
| **rkllm-toolkit** | Ferramenta de conversão de LLM para PC em media/rknn-llm-mk/rknn-llm/rkllm-toolkit/ |
| **ROCKIVA** | Algoritmos de visão empacotados da Rockchip (detecção de pessoa / rosto / animal de estimação, etc.); vincular com -lrockiva |
| **RKAI** | Wrapper de IA da Rockchip em project/app/rkai/, cobrindo fluxos de trabalho de LLM e VLM |
| **VLM** | Vision-Language Model; modelo multimodal para imagem e texto |
| **TTFT** | Time To First Token, uma métrica de benchmark do RKLLM |
| **RKNN_NPU_CORE_x** | Máscara de alocação de núcleos do NPU (AUTO / 0 / 0_1 / 0_1_2) |
| **INT8 quantization / calibration set** | A quantização usa uma lista de imagens representativa; mantenha o conjunto de calibração separado do conjunto de validação |

### Rede e Streaming

| Termo | Significado |
| --- | --- |
| **rkipc** | Aplicação de referência Rockchip IPC; o aplicativo principal da reCamera Pro (recamera_ipc) é baseado nela |
| **go2rtc** | Gateway de streaming open-source que converte RTSP interno para WebRTC / HLS, etc.; fornecido como binário pré-compilado em um overlay |
| **RTSP** | Real-Time Streaming Protocol. Fonte interna 127.0.0.1:5554; porta externa :554 é habilitada conforme necessário |
| **WebRTC** | Áudio/vídeo em tempo real baseado em navegador; go2rtc escuta em :8555 |
| **ONVIF** | Padrão de interoperabilidade de dispositivos de rede implementado por recamera_onvif |
| **ttyd** | Expõe um terminal por meio de uma página web na porta 7681 |
| **main / sub stream** | Nomes de stream do go2rtc correspondentes a live/0 e live/1 |

### Serviços da reCamera

| Termo | Significado |
| --- | --- |
| **gmgr** | GPIO Manager: serviço Rust de GPIO via HTTP / WebSocket na porta 8080 e /dev/shm/gmgr.sock |
| **skt2ws** | Ponte Socket-para-WebSocket que encaminha rkipc-record-events |
| **tmir** | TTY Mirror; multiplexa o tráfego da porta serial ttyS4 para um socket / WebSocket |
| **rcisd** | reCamera Intellisense daemon para enfileiramento de eventos e transferência de arquivos |
| **RkLunch.sh** | Ponto de entrada de inicialização de aplicativos em todo o sistema em /oem/usr/bin/ |
| **vigil** | Módulo em recamera_ipc/common/vigil*; depende de protobuf e libblkid |
| **VQE** | Voice Quality Enhancement, algoritmos de front-end de áudio (AEC / ANS / AGC) |
| **AEC** | Acoustic Echo Cancellation; requer um sinal de referência do alto-falante (Ch4 em asound.conf) |
| **dsnoop** | Plugin ALSA de captura compartilhada que permite que múltiplos processos leiam um único dispositivo de hardware |
| **KWS / ASR** | Keyword Spotting / Automatic Speech Recognition; os dispositivos virtuais correspondentes são ai_kws / ai_asr |

## Mapa de Documentação

O diretório docs/ contém **90 arquivos PDF**: 52 em chinês e 38 em inglês. O conjunto em chinês é mais completo, então **verifique-o primeiro**.

### Contagem por Idioma e Tópico

| Tópico | Chinês (docs/zh/) | Inglês (docs/en/) |
| --- | --- | --- |
| audio/ | 6 | 6 |
| bsp/ | 17 | 15 |
| ipc/ | 3 | 3 |
| isp/ | 8 | **2** |
| media/ | 9 | 7 |
| npu_iva/ | 1 | **0 (diretório ausente)** |
| security/ | 3 | 3 |
| wifibt/ | 3 | **0 (diretório ausente)** |
| Diretório raiz | — | 2 (Bug System, SDK Application and Synchronization) |

Documentos importantes disponíveis apenas em chinês incluem o ROCKIVA SDK, o conjunto completo de Wi-Fi / Bluetooth, a maior parte dos guias de ajuste e driver de ISP, EIS / DIS, System Suspend, RGB_MCU, SDMMC / SDIO / eMMC e alguns documentos de mídia além da calibração de AVS. Para documentação de clientes no exterior, traduza esses materiais ou deixe claro que nenhuma versão em inglês está incluída.

### Encontrar um Documento por Tarefa

| Eu quero... | Ler |
| --- | --- |
| Começar a usar o SDK | docs/zh/ipc/Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_CN.pdf |
| Construir um pipeline de vídeo | docs/zh/media/Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf |
| Consultar APIs MPI | docs/zh/media/Rockchip_Developer_Guide_MPI_C_CN.pdf |
| Ajustar qualidade de imagem / trocar um sensor | docs/zh/isp/Rockchip_Tuning_Guide_ISP35_CN.pdf, Rockchip_Development_Guide_ISP35_CN.pdf |
| Desenvolver um driver de câmera | docs/zh/isp/Rockchip_Developer_Guide_Camera_Driver_CN.pdf, Rockchip_Driver_Guide_VI_CN.pdf |
| Calibrar correção de distorção | docs/zh/isp/Rockchip_Development_Guide_FEC_CN.pdf; para AVS veja docs/zh/media/Rockchip_Developer_Guide_AVS_Calib_*_CN.pdf |
| Desenvolver imagem térmica infravermelha | docs/zh/isp/Rockchip_Development_Guide_IRFPA_CN.pdf |
| Solucionar problemas de codificação de vídeo | docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf |
| IPC de baixo consumo / bateria | docs/zh/media/Rockchip_Developer_Guide_Linux_AOV_CN.pdf, docs/zh/wifibt/Rockchip_Developer_Guide_Linux_Low_Power_Wi-Fi_CN.pdf |
| Boot rápido | docs/zh/ipc/Rockchip_Developer_Guide_Linux_RKAI_CN.pdf, docs/zh/isp/Rockchip_ISP_Tuning_Guide_for_Thunder_Boot_CN.pdf |
| Algoritmos de visão | docs/zh/npu_iva/Rockchip_Developer_Guide_ROCKIVA_SDK_CN.pdf |
| Codec de áudio | docs/zh/audio/Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf |
| Cancelamento de eco / redução de ruído | docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf |
| Teste de matriz de microfones | docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf |
| Solução de problemas de áudio | docs/zh/audio/Rockchip_Trouble_Shooting_Linux_Audio_CN.pdf |
| Wi-Fi / Bluetooth | docs/zh/wifibt/Rockchip_Developer_Guide_Linux_WIFI_BT_CN.pdf |
| GPIO | docs/zh/bsp/RV1126B_User_Manual_GPIO.pdf, RV1126B-P_User_Manual_GPIO.pdf |
| I2C / SPI / PWM / USB / WDT | Guias com nomes correspondentes em docs/zh/bsp/ |
| eMMC / SD | docs/zh/bsp/Rockchip_Developer_Guide_SDMMC_SDIO_eMMC_CN.pdf |
| Solução de gravação open-source | docs/zh/bsp/Rockchip_Developer_Guide_Linux_Flash_Open_Source_Solution_CN.pdf |
| Controle térmico / escalonamento de frequência | docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf, Rockchip_Developer_Guide_CPUFreq_CN.pdf, Rockchip_Developer_Guide_Devfreq_CN.pdf |
| Suspender e retomar | docs/zh/bsp/Rockchip_RV1126B_Developer_Guide_System_Suspend_CN.pdf |
| Display | docs/zh/bsp/Rockchip_Developer_Guide_DRM_Display_Driver_CN.pdf |
| Barramento CAN | docs/zh/bsp/Rockchip_Developer_Guide_CAN_FD_CN.pdf |
| Desenvolvimento de MCU | sysdrv/source/mcu/docs/Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf (também referenciado a partir da raiz do SDK) |
| U-Boot | docs/zh/bsp/Rockchip_Developer_Guide_UBoot_Nextdev_CN.pdf |
| Secure boot / OTP / TEE | Três documentos em docs/zh/security/ |
| Armazenamento do fornecedor (número de série, etc.) | docs/en/bsp/Rockchip_Application_Notes_VendorStorage_EN.pdf (**apenas em inglês**) |
| RKLLM | media/rknn-llm-mk/rknn-llm/doc/Rockchip_RKLLM_SDK_CN_1.2.3.pdf |
| Aplicação RKIPC | project/app/recamera_ipc/docs/Rockchip_Developer_Guide_Linux_RKIPC_CN.md (V1.7.6, Markdown) |
| Aplicação RKAI | project/app/rkai/rkai/doc/Rockchip_Developer_Guide_Linux_RKAI_CN.md |
| Ferramenta de gravação | tools/linux/Linux_Upgrade_Tool/命令行开发工具使用文档.pdf |
| Todas as opções de configuração | project/cfg-all-items-introduction.txt |
| Registrar um issue para a Rockchip | docs/en/Rockchip_User_Guide_Bug_System_EN.pdf |
| Aplicação do SDK e sincronização | docs/en/Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf |

A raiz do SDK também possui links simbólicos para documentos usados com frequência: `Rockchip_RV1126B_Quick_Start_Linux_IPC_SDK_{CN,EN}.pdf`, Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf, Copyright_Statement.md, RECAMERA2-IPC-RELEASE-NOTES.md e RK-RELEASE-NOTES-IPC.txt.

## Direitos autorais e conformidade

### Declaração de direitos autorais da Rockchip

docs/Copyright_Statement.md (também com link na raiz do SDK):

> Copyright(C) 2024 Rockchip Electronics Co., Ltd. Todos os direitos reservados.
>
> O SOFTWARE ROCKCHIP é fornecido “NO ESTADO EM QUE SE ENCONTRA”, sem garantias expressas ou implícitas, incluindo titularidade, comerciabilidade, adequação a um determinado fim ou não violação. A Rockchip não oferece garantia para tecnologias de terceiros, de código aberto ou baseadas em padrões. Os destinatários são responsáveis por obter todas as licenças e direitos exigidos junto aos respectivos proprietários. O único e exclusivo recurso do destinatário, e toda a responsabilidade cumulativa da Rockchip, é, a critério da Rockchip, revisar ou substituir o SOFTWARE ROCKCHIP relevante ou reembolsar as taxas pagas pelo destinatário.

Implicações práticas:

- Os componentes da Rockchip no SDK são fornecidos **NO ESTADO EM QUE SE ENCONTRAM (AS IS)**. Se algo falhar, investigue por conta própria ou abra um issue com a Rockchip.
- **Somos responsáveis por regularizar as licenças de terceiros.** O SDK inclui uma quantidade significativa de software de terceiros (bluez 5.77, wpa_supplicant, hostapd, openssl, libnl, freetype, libjpeg, libpng, zlib, go2rtc, ttyd, syslog-ng, vsftpd, o ecossistema React, crates Rust, etc.). Antes da distribuição do produto, revise cada componente quanto às obrigações de conformidade com GPL / LGPL / Apache / MIT / BSD.
- Os PDFs da Rockchip em docs/ possuem marcações de confidencialidade (muitos estão marcados como “Public”), mas **confirme a classificação antes da distribuição**. Não redistribua material marcado como “Internal”.

### Licenças dos componentes do SDK

| Componente | Licença |
| --- | --- |
| media/mpp/ | Consulte media/mpp/mpp/LICENSES/ (Apache-2.0 e MIT) |
| sysdrv/source/kernel/ | GPL-2.0 (veja COPYING e LICENSES/) |
| sysdrv/source/uboot/ | GPL-2.0+ |
| Buildroot | GPL-2.0; cada pacote pode ter sua própria licença |
| project/app/recamera_ipc/ | Inclui um arquivo LICENSE; siga seus termos |
| project/app/rkai/ | Inclui um arquivo LICENSE; siga seus termos |
| Bibliotecas binárias Rockchip (librknnrt.so, librockiva.so, rkaiq, arquivos IQ, etc.) | Licença proprietária Rockchip, distribuída com o SDK |

### Antes de publicar este Wiki externamente

- **Este Wiki é material interno da Seeed.** Antes de publicá-lo publicamente (por exemplo, em wiki.seeedstudio.com), remova endereços internos do GitLab (iteam-gitlab.seeed.cn), caminhos internos, detalhes de hardware como níveis de resistores de board-ID, ferramentas de teste de produção e planos de produtos ainda não publicados.
- **Não envie PDFs da Rockchip para sites públicos.** Em vez disso, crie links para canais oficiais de distribuição da Rockchip ou informe “solicitar à Seeed / Rockchip”.
- Não exponha senhas padrão, política de login root via SSH ou parâmetros de bloqueio do PAM em documentação pública. [Device Access and Debugging](/pt-br/recamera_pro_bsp_device_debug/) inclui esses detalhes e deve ser reduzido em uma versão pública.
- Peça ao Jurídico para confirmar a política de licenciamento externo para componentes desenvolvidos pela Seeed (recamera_*).

## Referência de abreviações

| Abreviação | Forma completa |
| --- | --- |
| BSP | Board Support Package (Pacote de Suporte à Placa) |
| IPC | IP Camera (Câmera IP) |
| MPI | Media Process Interface (Interface de Processamento de Mídia) |
| MPP | Media Process Platform (Plataforma de Processamento de Mídia) |
| ISP | Image Signal Processor (Processador de Sinal de Imagem) |
| NPU | Neural Processing Unit (Unidade de Processamento Neural) |
| RGA | Raster Graphic Acceleration (Aceleração Gráfica Raster) |
| IVA | Intelligent Video Analysis (ROCKIVA) (Análise Inteligente de Vídeo (ROCKIVA)) |
| AOV | Always-On Vision (Visão Sempre Ativa) |
| CVR | Car Video Recorder (Gravador de Vídeo Veicular) |
| ONVIF | Open Network Video Interface Forum (Fórum de Interface de Vídeo em Rede Aberta) |
| OTA | Over-The-Air update (Atualização Over-The-Air) |
| DTBO | Device Tree Blob Overlay (Sobreposição de Device Tree Blob) |
| CMA | Contiguous Memory Allocator (Alocador de Memória Contígua) |
| AEC / ANS / AGC | Acoustic Echo Cancellation / Acoustic Noise Suppression / Automatic Gain Control (Cancelamento de Eco Acústico / Supressão de Ruído Acústico / Controle Automático de Ganho) |
| KWS / ASR | Keyword Spotting / Automatic Speech Recognition (Detecção de Palavra-Chave / Reconhecimento Automático de Fala) |
| TTFT | Time To First Token (Tempo até o Primeiro Token) |
| UVC | USB Video Class (Classe de Vídeo USB) |
| VQE | Voice Quality Enhancement (Melhoria da Qualidade de Voz) |
| AHD | Analog High Definition (Alta Definição Analógica) |

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
