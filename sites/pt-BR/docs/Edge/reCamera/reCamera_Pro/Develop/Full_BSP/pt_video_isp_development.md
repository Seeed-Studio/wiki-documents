---
description: "Desenvolva aplicações com recursos de vídeo, rockit/MPI, ISP, sensor e RGA da reCamera Pro."
title: "Desenvolvimento de Vídeo e ISP"
keywords:
  - "reCamera"
  - "reCamera Pro"
  - "RV1126B"
  - "SDK"
  - "C/C++"
  - "RKNN"
  - "Application Development"
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_video_isp_development
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_video_isp_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Desenvolvimento de Vídeo e ISP

Esta página foca no pipeline de vídeo do produto e nas interfaces de ISP. Para um ambiente de aplicação C/C++ comum e implantação, siga o guia de início rápido em [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain). Os detalhes de configuração de `rockit`, IQ e sensor referenciados aqui são tópicos avançados do pacote de código-fonte completo.

## Conceito Central: O Pipeline rockit MPI

O processamento de vídeo da Rockchip usa o modelo **rockit** (MPI, Media Process Interface) de módulos, canais e ligações. Evite operar V4L2 diretamente. Abreviações de módulos:

| Módulo | Nome Completo | Finalidade |
| --- | --- | --- |
| `VI` | Video Input | Captura quadros do sensor através do ISP |
| `VPSS` | Video Process Sub System | Redimensionamento multicanal, corte e conversão de formato |
| `VENC` | Video Encoder | Codificação H.264 / H.265 / JPEG / MJPEG |
| `VDEC` | Video Decoder | Decodificação |
| `VO` | Video Output | Envia quadros para um display |
| `RGN` | Region | Sobreposições de OSD e marcas d'água |
| `AI` / `AO` | Audio In / Out | Captura / reprodução |
| `AENC` / `ADEC` | Audio Encoder / Decoder | Codificação / decodificação de áudio |
| `AVS` | Around View System | Costura de visão surround de múltiplas câmeras |
| `IVS` | Intelligent Video Surveillance | Análise inteligente, como detecção de movimento |
| `TDE` | Two Dimensional Engine | Aceleração 2D |
| `MB` | Media Buffer | Gerenciamento de pool de buffers de mídia |
| `SYS` | System | Inicialização, ligação e gerenciamento de memória |

Os cabeçalhos correspondentes estão em `output/out/media_out/include/`. Eles seguem a convenção de nomenclatura `rk_mpi_<module>.h` (por exemplo, `rk_mpi_vi.h`, `rk_mpi_venc.h` e `rk_mpi_sys.h`). Outros cabeçalhos incluem `rk_debug.h`, `rk_defines.h` e `rk_errno.h`.

Pipeline típico:

```text
sensor → VI(dev0/pipe0/chn0) → VPSS(grp0) → VENC(chn0) → RTSP/File
                              ↘ RGN overlay
                              ↘ IVS intelligent analysis
```

Conecte módulos com `RK_MPI_SYS_Bind()`. Os dados então fluem automaticamente, portanto você não precisa mover os quadros manualmente.

## Índice de Exemplos Existentes

### `media/samples/simple_test/` — Exemplos Mínimos de Arquivo Único (Ponto de Partida Recomendado)

Cada arquivo `.c` é um programa completo, compilável de forma independente. O nome do arquivo descreve o pipeline:

| Arquivo | Demonstração |
| --- | --- |
| `simple_vi_get_frame.c` | Captura quadros de VI; o menor exemplo de VI |
| `simple_vi_get_frame_rkaiq.c` | Captura quadros e inicializa rkaiq manualmente |
| `simple_vi_bind_venc.c` | VI para VENC, codificando para um arquivo |
| `simple_vi_bind_venc_jpeg.c` | Captura de snapshot JPEG |
| `simple_vi_bind_venc_rtsp.c` | **VI para VENC para streaming RTSP; o ponto de partida mais comum** |
| `simple_vi_bind_venc_rtsp_lowdelay.c` | RTSP de baixa latência |
| `simple_vi_bind_venc_rtsp_eptz.c` | PTZ eletrônico |
| `simple_vi_bind_venc_svc_rtsp.c` | Codificação escalável SVC |
| `simple_vi_bind_venc_osd.c` | Sobreposição OSD |
| `simple_vi_bind_vpss_bind_venc.c` | Adiciona VPSS para múltiplos streams |
| `simple_vi_bind_vpss_bind_vo.c` | Adiciona saída de display |
| `simple_vi_bind_ivs.c` | Conecta análise inteligente |
| `simple_vi_bind_avs_bind_venc.c` | Costura de visão surround |
| `simple_vi_gdc_vo.c` | Correção de distorção |
| `simple_vdec_bind_vo.c` / `simple_vdec_bind_vo_rtsp_lowdelay.c` | Decodificar e exibir / re-streaming de baixa latência |
| `simple_ai_bind_aenc.c` / `simple_adec_bind_ao.c` / `simple_ao_send_frame.c` | Captura e codificação de áudio / decodificação e reprodução / reprodução direta de quadros |
| `simple_multi_ahd_vpss_test.c` | AHD multicanal |
| `rv1126b/simple_irfpa_vi_bind_venc_rtsp.c` | **Apenas RV1126B**: matriz de plano focal infravermelho e streaming |

O diretório `simple_test/` também inclui `rk_2_1920x1080.json` / `.xml` como um exemplo de calibração AVS de câmera dupla 1080p.

### `media/samples/example/` — Exemplos Completos

| Subdiretório | Arquivo |
| --- | --- |
| `vi/` | `sample_vi.c`, `sample_multi_vi.c`, `sample_vi_eis.c` (estabilização eletrônica de imagem) |
| `venc/` | `sample_vi_vpss_osd_venc.c`、`sample_multi_vi_avs_osd_venc.c` |
| `vo/` | `sample_vi_vo.c` |
| `audio/` | `sample_ai.c`、`sample_ai_aenc.c` |
| `avs/` | `sample_avs.c`、`sample_multi_vi_avs.c` |
| `demo/` | `sample_demo_vi_venc.c`、`sample_demo_dual_camera.c`、`sample_demo_dual_camera_wrap.c`、`sample_demo_multi_cam.c`、`sample_demo_multi_camera_eptz.c`、`sample_demo_eis.c`、`sample_demo_aiisp.c`、`sample_demo_dual_aiisp.c`、`sample_demo_vi_avs_venc.c` |
| `test/` | Testes de estresse:`sample_venc_stresstest.c`、`sample_vpss_stresstest.c`、`sample_isp_stresstest.c`、`sample_mulit_isp_stresstest.c`、`sample_multi_cam_stresstest.c`、`sample_rgn_stresstest.c`、`sample_ai_aenc_adec_ao_stresstest.c`、`sample_avs_stresstest.c`、`sample_vdec_vo_stresstest.c`、`sample_vdec_vpss_vo_stresstest.c`、`sample_demo_*_stresstest.c` |

Para testes de estabilidade, execute o teste de estresse correspondente em `test/`.

### Exemplos em Nível de Aplicação em `project/app/`

| Diretório | Conteúdo |
| --- | --- |
| `testdemo/low_delay_net_display` | Display de rede de baixa latência |
| `testdemo/yoloworld_demo` | Demo de detecção YOLO-World (inclui `3rdparty`, `resources` e `RkLunch.sh`) |
| `aov_sample/` | Visão sempre ativa de baixo consumo:`sample_aov_aiisp_iva_venc.c`、`sample_aoa_capture.c`、`sample_aov_audio.c`、`resume_suspend_test.sh` |
| `cvr/` | Gravação veicular |
| `ao_record_demo/` | Demo de gravação de áudio; seu Makefile é um modelo útil para linkar rockit |
| `uvc_app_tiny/` | Modo de câmera UVC |
| `recamera_ipc/` | A implementação completa do produto; veja [Arquitetura de Serviço do Produto](/pt-br/recamera_pro_bsp_services/) |

## Compilar e Executar Exemplos

Os exemplos são compilados com media (`make -C ./samples` é chamado pelo alvo `all` em `media/Makefile`):

```bash
./build.sh media
ls output/out/media_out/           # should contain the sample binaries
```

Para RV1126B, a compilação adiciona automaticamente `-DRV1126B` e usa arquivos-fonte específicos do chip em `simple_test/rv1103_rv1106_rv1103b_rv1126b/` e `simple_test/rv1126b/`.

Copie um exemplo para o dispositivo e execute-o:

```bash
scp output/out/media_out/bin/simple_vi_bind_venc_rtsp root@<device-ip>:/userdata/
ssh root@<device-ip>
# /userdata/simple_vi_bind_venc_rtsp --help
```

> **Aviso de conflito de recursos:** No firmware do produto, `rkipc` (`recamera_ipc`) já está em execução e possui os recursos de VI/VENC/ISP e o serviço RTSP na porta 5554. Um exemplo pode falhar porque os nós de dispositivo já estão em uso. Pare o aplicativo antes de depurar:
>
> ```bash
> # sh /oem/usr/bin/RkLunch-stop.sh
> # Or use /etc/init.d/S21appinit stop
> ```
>
> **Não mate serviços do sistema indiscriminadamente para acessar nós de dispositivo.** Reinicie-os após a depuração. Em produção, coordene o acesso por meio de configuração compartilhada ou de um procedimento explícito de parada de serviço.

## Arquitetura de Streaming RTSP (Importante)

O streaming na reCamera Pro usa **duas etapas**:

```text
recamera_ipc(rkipc) internal RTSP service listening on 127.0.0.1:5554
        ↓ rtsp://127.0.0.1:5554/live/0 (main)  /live/1 (sub)
     go2rtc converts the stream
        ↓ WebRTC :8555 / RTSP :554 (optional) / HLS, etc.
      External clients
```

A configuração está em `project/cfg/BoardConfig_Recamera2/overlay/overlay-buildroot-go2rtc/oem/usr/etc/go2rtc/go2rtc.yaml`. Se a porta 554 é exposta externamente é controlado pelas configurações `enable` nas seções `[video.0.rtsp]`, `[video.0.onvif]` e `[video.1.rtsp]` de `/userdata/config/rkipc.ini`. Veja [Acesso e Depuração do Dispositivo](/pt-br/recamera_pro_bsp_device_debug/).

O arquivo de configuração padrão para `recamera_ipc` é `project/app/recamera_ipc/src/rv1126b_ipc/rkipc-3840x2160.ini`. Ele contém configurações de resolução, taxa de bits, taxa de quadros e RTSP/ONVIF.

Para uma aplicação de streaming personalizada, há duas opções:

1. **Usar rockit e `librtsp`:** Inicie seu próprio serviço RTSP como em `simple_vi_bind_venc_rtsp.c` (faça o link com `-lrtsp`) e escolha uma porta diferente de 5554.
2. **Usar GStreamer:** O dispositivo possui GStreamer 1.22 (**a lista de plugins ainda precisa ser verificada no hardware**) e pode capturar com `v4l2src`. O seguinte comando de sondagem foi registrado como funcional:

```bash
# gst-launch-1.0 -v v4l2src device=/dev/video13 num-buffers=30 \
#   ! 'video/x-raw,format=NV12,width=1920,height=1080,framerate=30/1' \
#   ! videoconvert ! fakesink
```

Os números dos nós de dispositivo (como `/dev/video13`) **dependem do firmware** e podem mudar entre versões. Confirme-os no dispositivo com `v4l2-ctl --list-devices`.

## ISP e rkaiq

### Localizações do Código-Fonte

- Código-fonte do mecanismo:`media/isp/camera_engine_rkaiq/`
- Arquivo IQ：`media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/`(esta configuração de placa usa **isp35**) |
- Calibração FEC:`media/isp/camera_engine_rkaiq/IspFec/fec_calib/`
- Cabeçalhos (após a compilação): `output/out/media_out/include/rkaiq/`, com subdiretórios como `uAPI`, `uAPI2`, `algos`, `common`, `xcore`, `iq_parser`, `iq_parser_v2` e `smartIr`
- Bibliotecas: `-lrkaiq` (também faça o link com `-lstdc++ -lm`)

O código mais recente usa consistentemente **uAPI2** (`rk_aiq_user_api2_*.h`); apenas compilações com a macro `RV1126_RV1109` usam a uAPI mais antiga.

### Arquivos IQ na Configuração da Placa

A configuração da placa especifica:

```bash
export RK_CAMERA_SENSOR_IQFILES="ainr/sc450ai_default_default.json ainr/sc450ai ainr/sc850sl ainr/sc850sl_default_default.json"
export RK_CAMERA_SENSOR_CAC_BIN=""
export RK_AIISP_MODEL=NONE
```

Isso empacota arquivos IQ de AINR (redução de ruído por IA) para os sensores **SC450AI** e **SC850SL** na imagem. O modelo AI-ISP está desativado (`RK_AIISP_MODEL=NONE`).

No dispositivo, os arquivos empacotados estão localizados em `/oem/usr/share/iqfiles/`, e `/etc/iqfiles` é um link simbólico para este diretório (criado por `__PACKAGE_OEM()` / `__PACKAGE_ROOTFS()` em `build.sh`).

### Substituir ou Ajustar Arquivos IQ

- Durante a depuração, substitua o arquivo diretamente no dispositivo: `/oem/usr/share/iqfiles/<sensor>/<Module>.json`(remonte `/oem` se estiver somente leitura), depois reinicie `rkipc` para aplicar a alteração.
- Para uma versão de release, coloque o arquivo JSON ajustado de volta em `media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/ainr/` e liste-o em `RK_CAMERA_SENSOR_IQFILES`, depois recompile media e o firmware.

Para ferramentas e procedimentos de ajuste, consulte `docs/zh/isp/Rockchip_Tuning_Guide_ISP35_CN.pdf`、`Rockchip_Color_Optimization_Guide_ISP39_ISP33_ISP35_CN.pdf`、`Rockchip_Development_Guide_IRFPA_CN.pdf` (infravermelho) e `Rockchip_Development_Guide_FEC_CN.pdf` (calibração de distorção).

## Sensores e drivers de kernel

O fragmento de kernel `rv1126b-recamera2.config` compila muitos drivers de sensor como **módulos**:

```text
SC450AI SC850SL SC200AI SC3336 SC401AI SC4336 SC530AI SC635HAI SC00AI series
GC2053 GC8613 GST412C IMX415 IMX464 IMX586 IMX708 OS04A10 PS5458
TECHPOINT(AHD Decoding)
```

Ele também habilita `CONFIG_VIDEO_ROCKCHIP_FEC=y` (hardware de correção de distorção) e `CONFIG_OF_OVERLAY=y` (DTBO overlays em tempo de execução); `CONFIG_VIDEO_RK_IRCUT` está **desativado**.

Device trees relacionados à câmera:

| Arquivo | Finalidade |
| --- | --- |
| `rv1126b-recamera2-v1.dts` | Ponto de entrada de nível superior, `model = "Rockchip RV1126B RECAMERA PRO Board"` |
| `rv1126b-recamera2-cam-csi0.dtsi` / `-cam-csi1.dtsi` | Caminhos de câmera CSI0 / CSI1 |
| `rv1126b-recamera2-ext-cam-csi1.dts` | Câmera da **placa de expansão** (compilada como `.dtbo`) |
| `rv1126b-recamera2-baseboard-0.dts` / `-baseboard-1.dts` | Variantes da placa base |
| `rv1126b-recamera2-extboard-0.dts` / `-extboard-1.dts` | Variantes da placa de expansão |
| `rv1126b-recamera2-disp.dtsi` | Display |

`RK_KERNEL_RC_DTO=y` habilita DTBO (Runtime Device Tree Overlay). As saídas de compilação `rv1126b-recamera2-ext-*.dtbo` são copiadas pelo `build.sh` para `/oem/usr/share/`. Na inicialização, a identificação da placa (`S00board-id`) lê o ADC e grava `/run/board_id.env`; o sistema usa essas informações para selecionar um overlay dinamicamente. Esse mecanismo permite que uma única imagem de firmware ofereça suporte a várias configurações de hardware do reCamera Pro. Consulte [Personalização do sistema (DTS / Kernel / Buildroot / Overlay)](/pt-br/recamera_pro_bsp_system_customization/).

## RGA e conversão de formato

`media/rga/` fornece aceleração 2D para redimensionamento, conversão NV12↔RGB, rotação e mesclagem. Faça o link com `-lrga`.

Um caso de uso comum: VENC requer NV12, enquanto o modelo de NPU requer RGB. Converter com RGA é muito mais rápido e usa menos CPU do que `videoconvert`.

**Não passe bytes NV12 brutos diretamente para um modelo RGB/BGR.** Converta o formato de pixel e normalize os dados explicitamente.

## Documentação relacionada

| Documento | Caminho |
| --- | --- |
| Guia do desenvolvedor Rockit Runtime | `docs/zh/media/Rockchip_Developer_Guide_Linux_Rockit_Runtime_CN.pdf` |
| Guia da API MPI em C | `docs/zh/media/Rockchip_Developer_Guide_MPI_C_CN.pdf` |
| Guia do driver VI | `docs/zh/isp/Rockchip_Driver_Guide_VI_CN.pdf` |
| Guia do driver de câmera | `docs/zh/isp/Rockchip_Developer_Guide_Camera_Driver_CN.pdf` |
| Desenvolvimento e ajuste do ISP35 | `docs/zh/isp/Rockchip_Development_Guide_ISP35_CN.pdf`、`Rockchip_Tuning_Guide_ISP35_CN.pdf` |
| Estabilização eletrônica de imagem EIS | `docs/zh/media/Rockchip_Developer_Guide_EIS_CN.pdf`、`Rockchip_RV1126B_Development_Guide_DIS_CN.pdf` |
| Modo de baixo consumo AOV | `docs/zh/media/Rockchip_Developer_Guide_Linux_AOV_CN.pdf` |
| Gravação veicular DVR | `docs/zh/media/Rockchip_Developer_Guide_Linux_DVR_CN.pdf` |
| Solução de problemas do VENC | `docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf` |
| Calibração AVS | `docs/zh/media/Rockchip_Developer_Guide_AVS_Calib_Product_CN.pdf` |
| Inicialização rápida | `docs/zh/ipc/Rockchip_Developer_Guide_Linux_RKAI_CN.pdf` (Thunder Boot) |

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>