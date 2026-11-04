---
description: APIs de captura e reprodução de áudio, roteamento de matriz de microfones e algoritmos de áudio na reCamera Pro.
title: Desenvolvimento de Áudio
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - C/C++
  - RKNN
  - Application Development
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_audio_development
sku: 10003420
sidebar_position: 4
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_audio_development/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Desenvolvimento de Áudio

Esta página descreve as interfaces de áudio de aplicação e a configuração do dispositivo no firmware atual do produto. Para builds de aplicações C/C++ comuns, use [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain). Você só precisa do código-fonte completo do BSP para modificar ALSA, áudio do kernel ou roteamento de áudio do produto.

## Suporte de Hardware e Kernel

As opções de kernel relacionadas a áudio estão em `sysdrv/source/kernel/arch/arm64/configs/rv1126b-recamera2.config`:

| Configuração | Significado |
| --- | --- |
| `CONFIG_SND_SOC_ES7202=y` | ADC multicanal Everest ES7202 para captura da matriz de microfones |
| `CONFIG_SND_SOC_ROCKCHIP_PDM_V2=y` | Interface de microfone digital PDM v2 |
| `CONFIG_SND_SOC_RK817=y` | Codec RK817 (áudio no PMIC; caminho de saída para o alto-falante) |
| `CONFIG_SND_SOC_RK_DSM=y` | Processamento digital de alto-falante Rockchip |
| `CONFIG_SND_SOC_ROCKCHIP_ASRC=y` | Conversão assíncrona de taxa de amostragem |
| `CONFIG_SND_SOC_ROCKCHIP_MULTI_DAIS=y` | Vários links DAI; captura e reprodução usam DAIs separados |
| `CONFIG_SND_SOC_DUMMY_CODEC=y` | Codec fictício |
| `CONFIG_SND_HRTIMER=y`, `CONFIG_SND_PCM_TIMER=y` | Drivers de temporizador |

Os nós de áudio são definidos em `rv1126b-recamera2-v1.dts` e nos arquivos DTSI que ele inclui. O código-fonte da biblioteca em espaço de usuário é `media/alsa-lib/`. Ela é compilada por `./build.sh media`; as saídas ficam em `output/out/media_out/lib/`.

## Caminho de Captura: Seis Canais de Hardware → Quatro Canais Virtuais

Este elemento-chave do design de áudio da reCamera Pro é definido em `/etc/asound.conf` em um overlay. Fonte: `project/cfg/BoardConfig_Recamera2/overlay/overlay-buildroot-asound/etc/asound.conf`.

### Três Camadas

**Camada 1 · Hardware compartilhado (`dsnoop`)** — permite que vários processos leiam o mesmo dispositivo de hardware:

~~~text
pcm.mic_hw_shared
  type       dsnoop
  ipc_key    2026
  ipc_perm   0666
  slave.pcm  "hw:0,0"
  channels   6
  rate       16000
  format     S16_LE
  period_size 1024
  buffer_size 4096
~~~

**Camada 2 · Mapeamento de canais (`route`)** — mapeia seis canais físicos para quatro canais virtuais `[Mic1, Mic2, Ref, Ref]`:

~~~text
pcm.ai_2mic_2ref
  type          route
  slave.pcm     "mic_hw_shared"
  slave.channels 6
  ttable {
      0.0 1    # Canal de hardware Ch0 → canal de saída Ch0 (Mic 1)
      1.2 1    # Canal de hardware Ch2 → canal de saída Ch1 (Mic 2)
      2.4 1    # Canal de hardware Ch4 → canal de saída Ch2 (Referência)
      3.4 1    # Canal de hardware Ch4 → canal de saída Ch3 (Cópia da referência)
  }
~~~

**Camada 3 · Dispositivos virtuais de aplicação (`plug`)** — fornecem dispositivos nomeados com conversão automática de formato para diferentes módulos:

| Dispositivo PCM | Finalidade |
| --- | --- |
| `ai_main` | Entrada de áudio principal |
| `ai_kws` | Detecção de palavra-chave |
| `ai_asr` | Reconhecimento de fala (ASR) |
| `ai_debug` | Depuração / gravação bruta |

Todos os quatro usam `type plug` com `slave.pcm "ai_2mic_2ref"`. Seus dispositivos de controle são:

~~~text
ctl.ai_main / ctl.ai_kws / ctl.ai_asr / ctl.ai_debug  →  type hw; card 0
~~~

### Por Que Este Design é Usado

- **`dsnoop` evita acesso exclusivo:** dispositivos de hardware ALSA são exclusivos por padrão, mas KWS, ASR, áudio de gravação de vídeo e gravação de depuração podem precisar capturar ao mesmo tempo. `ipc_key 2026` + `ipc_perm 0666` permitem que vários processos compartilhem o fluxo de captura.
- **`route` fornece o sinal de referência de AEC:** o Cancelamento de Eco Acústico (AEC) precisa de uma referência do que está sendo reproduzido no alto-falante. O canal de hardware 4 carrega essa referência e é copiado para os canais de saída 2 e 3.
- **`plug` resolve incompatibilidades de formato:** módulos podem exigir taxas ou formatos diferentes; `plug` converte automaticamente.

### Como Usar

~~~bash
# Grave quatro canais (2 microfones + 2 referências), 16 kHz S16_LE
# arecord -D ai_debug -c 4 -r 16000 -f S16_LE -d 10 /userdata/test.wav

# Gravação para ASR
# arecord -D ai_asr -c 4 -r 16000 -f S16_LE -d 5 /userdata/asr.wav
~~~

Ao usar a API ALSA, passe `"ai_main"`, `"ai_kws"`, `"ai_asr"` ou `"ai_debug"` como o nome do dispositivo. Não use `"hw:0,0"`; ele é exclusivo e não aplica o mapeamento de canais.

> Abrir `hw:0,0` diretamente fornece dados brutos de seis canais. Para o layout de dois microfones + duas referências, use `ai_2mic_2ref` ou um de seus wrappers `plug`.

## Caminho de Reprodução

O alto-falante usa o codec RK817 / RK_DSM. O dispositivo de reprodução ALSA padrão é `default` (`hw:0,x`; verifique o número exato do dispositivo no hardware com `aplay -l`).

~~~bash
# aplay -l                              # Listar dispositivos de reprodução
# aplay -D default /oem/usr/share/xxx.wav
~~~

`recamera_ipc` inclui um arquivo de áudio de teste em `project/app/recamera_ipc/common/speaker_test.wav` para verificação do alto-falante.

## Código de Áudio em Nível de Aplicação

| Caminho | Conteúdo |
| --- | --- |
| `project/app/recamera_ipc/common/audio/audio.c` / `audio.h` | Lógica principal de áudio do rkipc: captura, codificação e multiplexação com vídeo |
| `project/app/recamera_ipc/common/audio/rkaudio_mp3.c` / `.h` | Decodificação e reprodução de MP3 (para prompts, etc.) |
| `project/app/ao_record_demo/ao_record_demo.c` | Demo de gravação; seu Makefile é um modelo para linkar o rockit |
| `project/app/aov_sample/sample_aov_audio.c` | Captura de áudio em modo de baixo consumo |
| `project/app/component/ao_record_service/` | Componente de serviço de gravação, coletado explicitamente por `project/app/Makefile` |
| `media/samples/simple_test/simple_ai_get_frame.c` | Exemplo mínimo de captura |
| `media/samples/simple_test/simple_ai_bind_aenc.c` | Vincular captura à codificação |
| `media/samples/simple_test/simple_ai_bind_aenc_external_encoder.c` | Usar um codificador externo |
| `media/samples/simple_test/simple_adec_bind_ao.c` | Vincular decodificação à reprodução |
| `media/samples/simple_test/simple_adec_bind_ao_external_decoder.c` | Usar um decodificador externo |
| `media/samples/simple_test/simple_ao_send_frame.c` | Enviar frames diretamente para reprodução |
| `media/samples/example/audio/sample_ai.c`, `sample_ai_aenc.c` | Exemplos completos |
| `media/samples/example/test/sample_ai_aenc_adec_ao_stresstest.c` | Teste de estresse de áudio |

## Módulos de Áudio do rockit

Ao usar MPI, o áudio usa o mesmo modelo de módulo que o vídeo:

| Módulo | Header | Finalidade |
| --- | --- | --- |
| `AI` | `rk_mpi_ai.h` | Captura de áudio |
| `AO` | `rk_mpi_ao.h` | Reprodução de áudio |
| `AENC` | `rk_mpi_aenc.h` | Codificação de áudio (G.711/AAC, etc.) |
| `ADEC` | `rk_mpi_adec.h` | Decodificação de áudio |

Caminho típico: `AI → AENC → (multiplexar com VENC em um stream)`; a reprodução usa `ADEC → AO`. Conecte os módulos com `RK_MPI_SYS_Bind()`.

Ao definir os atributos do canal de AI, faça a contagem de canais corresponder ao `asound.conf` (quatro canais = dois microfones + duas referências); use taxa de amostragem de 16.000 Hz e formato `S16_LE`.

## Algoritmos de Áudio (VQE / RockAA)

Os algoritmos de front-end da Rockchip — AEC, Supressão de Ruído Acústico (ANS) e Controle Automático de Ganho (AGC) — são fornecidos por meio do RockAA / VQE:

- `docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf` (guia do algoritmo VQE)
- `docs/zh/audio/Rockchip_Developer_Guide_RockAA_Utils_CN.pdf` (ferramentas RockAA)
- `docs/zh/audio/Rockchip_Developer_Guide_Sound_Event_Detection.pdf` (detecção de eventos sonoros)
- `media/common_algorithm/` (bibliotecas de algoritmos comuns)

O canal de referência de eco em `asound.conf` é reservado para o AEC do VQE. Para habilitar o VQE, ative as opções de algoritmo relevantes nos atributos do canal de AI e certifique-se de que os dados do canal de referência estejam roteados corretamente.

## Teste da Matriz de Microfones

`docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf` descreve o teste de consistência da matriz. Para produção, use scripts em `project/app/recamera_utils/hw_test/`, ou grave a entrada bruta de seis canais por meio de `ai_debug` e inspecione cada canal.

Para diagnosticar problemas de ordem de canais, grave um WAV de quatro canais e inspecione suas faixas no Audacity. Toque ou fale em cada microfone e confirme que Mic1, Mic2, Ref, Ref correspondem ao mapeamento `ttable`.

## Problemas Comuns

| Sintoma | Causa | Solução |
| --- | --- | --- |
| `arecord: main:831: audio open error: Device or resource busy` | `hw:0,0` foi aberto diretamente, ignorando o dsnoop | Use um dispositivo virtual como `ai_debug` |
| Abrir `ai_*` informa `Unknown PCM` | `/etc/asound.conf` não foi aplicado | Confirme que o overlay foi empacotado (`RK_POST_OVERLAY` inclui `overlay-buildroot-asound`) e inspecione `cat /etc/asound.conf` no dispositivo |
| Contagem de canais incorreta (esperado 4, obtido 6) | `hw:0,0` foi usado em vez de `ai_2mic_2ref` | Use a camada de roteamento |
| AEC ruim / eco permanece | Canal de referência ausente ou mapeado incorretamente | Verifique as entradas `ttable` `2.4` / `3.4`; confirme que o canal de hardware Ch4 é a referência de eco (verificação de hardware necessária) |
| Gravação está silenciosa | Canais errados selecionados (por exemplo, apenas Ch1 / Ch3 / Ch5) | Grave primeiro todos os seis canais brutos para identificar quais canais carregam sinal |
| Sem som durante a reprodução | Caminho RK817 / DSM desativado ou volume mudo | Verifique com `amixer -c 0 scontrols`; ative o som em `alsamixer` |
| Tom de reprodução incorreto devido a incompatibilidade de taxa de amostragem | `plug` está inativo ou ASRC está desativado | Confirme `CONFIG_SND_SOC_ROCKCHIP_ASRC=y` no kernel e defina explicitamente `-r 16000` |
| Falhas intermitentes quando vários processos gravam | Conflito de `ipc_key` | Mantenha a chave 2026 exclusiva entre as aplicações ou altere `asound.conf` e reconstrua |

## Documentos Relacionados

| Documento | Caminho |
| --- | --- |
| Guia do Desenvolvedor ACodec da Série RV | `docs/zh/audio/Rockchip_Developer_Guide_Linux_RV_Series_ACodec_CN.pdf` |
| Introdução ao Algoritmo VQE | `docs/zh/audio/Rockchip_Developer_Guide_Audio_Algorithm_VQE_Introduction_CN.pdf` |
| Ferramentas RockAA | `docs/zh/audio/Rockchip_Developer_Guide_RockAA_Utils_CN.pdf` |
| Teste de Matriz de Microfones | `docs/zh/audio/Rockchip_Developer_Guide_Microphone_Array_TEST_CN.pdf` |
| Detecção de Eventos Sonoros | `docs/zh/audio/Rockchip_Developer_Guide_Sound_Event_Detection.pdf` |
| Solução de Problemas de Áudio | `docs/zh/audio/Rockchip_Trouble_Shooting_Linux_Audio_CN.pdf` |

As versões em inglês estão em `docs/en/audio/` com nomes semelhantes; `Sound_Event_Detection` está disponível apenas em chinês.

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