---
description: Diagnostique problemas do pacote de código-fonte completo com base em sintomas de compilação, gravação, boot e tempo de execução.
title: Solução de Problemas do BSP
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_troubleshooting
sku: 10003420
sidebar_position: 8
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_bsp_troubleshooting/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Solução de Problemas do BSP

A regra geral é **identificar primeiro a camada com falha**. Este SDK possui cinco camadas, cada uma com métodos de depuração diferentes:

```text
1. Host environment     → setup_build_env.sh --check / ./build.sh check
2. Build                → build.sh logs, make info, help <component>
3. Images and flashing  → output/image/, upgrade_tool, serial console
4. System boot          → serial console at 1500000, init scripts, /var/log
5. Application/runtime  → /var/log/Recamera2_developer.log, processes, ports, configuration
```

## 1. Ferramentas Gerais de Diagnóstico

| Comando | Finalidade |
| --- | --- |
| `./build.sh check` | Verificar dependências de compilação no host |
| `./build.sh info` | Imprimir o BoardConfig atual, todas as variáveis `RK_*` não vazias, `make info` dos três SDKs de componentes e verificações de domínio de energia |
| `./build.sh help <component>` | Imprimir o comando `make` real e os argumentos de um componente para que você possa reproduzi-lo manualmente |
| `make -C project/app/<app> V=1` | Habilitar saída detalhada para a compilação de um aplicativo |
| `make V=1 -C media/samples` | Habilitar saída detalhada para mídia (um `V` não vazio desativa o modo silencioso `CMD_DBG=@`) |
| `./build.sh DEBUG app` | Recompilar com `-O0 -g` e pular o stripping durante o empacotamento |
| `./build.sh ASAN app` | Recompilar com AddressSanitizer para investigar problemas de memória |
| `/bin/sdkinfo` no dispositivo | Identificar a compilação e o BoardConfig em execução no dispositivo |
| `cat /etc/ota_version` no dispositivo | Verificar a versão do firmware |

`build.sh` define `trap 'err_handler' ERR`; em caso de falha, ele imprime a função e o número da linha que falharam. Procure no log por `err_handler` ou `Error:` para localizar o problema rapidamente.

## 2. Problemas de Ambiente do Host e de Compilação

| Sintoma | Causa | Solução |
| --- | --- | --- |
| `./build.sh --help` abre o menu de seleção de placa | `lunch` não foi executado; o script verifica `.BoardConfig.mk` antes de analisar os argumentos | Execute `./build.sh lunch` primeiro; depois `help` / `--help` irão funcionar |
| `Not found tool aarch64-rockchip1240-linux-gnu-gcc, please install first !!!` | Diretório da toolchain ausente ou não executável | Confirme que `tools/linux/toolchain/aarch64-rockchip1240-linux-gnu/bin/` existe; se necessário, faça `source` em `tools/linux/toolchain/<tc>/env_install_toolchain.sh` |
| `*** error: Please Check Configure !!!` / `build app depend on media libs and header files` | A compilação do app foi iniciada antes da mídia ser compilada | Execute `./build.sh media` primeiro e confirme que `output/out/media_out/{include,lib}` existe |
| `Build rootfs is not yet complete, packaging cannot proceed!` | O arquivo tar do rootfs não foi gerado | Execute `./build.sh rootfs` e verifique `output/out/sysdrv_out/rootfs_glibc_rv1126b.tar` |
| Não está claro qual app falhou na compilação | `project/app/Makefile` compila apps em série com `$(foreach)` e sai na primeira falha | Reproduza a compilação com `make -C project/app/<app> V=1` |
| App em Rust (`recamera_services`) produz um binário armv7 | O Makefile do app usa por padrão `armv7-unknown-linux-gnueabihf` | Execute `make SERVICE_TARGET=aarch64-unknown-linux-gnu` |
| `cross` relata um erro ou trava | Docker está parado ou o usuário não está no grupo docker | Execute `sudo systemctl start docker`; faça logout e login novamente |
| Compilação do frontend em Node falha | Versão do Node.js é inferior a 18 | Execute `nvm use 18` ou use a versão instalada por `setup_build_env.sh` |
| Versão do CMake é muito antiga | `recamera_ipc` requer CMake ≥3.21 | Use o CMake instalado por `setup_build_env.sh` e verifique a ordem do PATH |
| Erros de compilação relacionados a protobuf | `libprotobuf-dev` / `protobuf-compiler` ausente | Execute `sudo apt install libprotobuf-dev protobuf-compiler` |
| Erros inesperados após trocar de placa | Saídas das configurações antiga e nova estão misturadas | Execute `./build.sh clean` e depois compile novamente |
| Disco cheio | As saídas do Buildroot, kernel e mídia são grandes | Mantenha pelo menos 20 GB livres (100 GB recomendados); use `du -sh output sysdrv/source/buildroot` para localizar o uso |
| Problemas de permissão após uma compilação como root | Saídas de compilação pertencem ao root | Execute `sudo chown -R $USER:$USER .` e compile novamente |
| Scripts se comportam incorretamente porque links simbólicos estão ausentes | Arquivos foram transferidos via Windows | Extraia novamente o arquivo tar original; veja [Download and Extract](/pt-br/recamera_pro_bsp_download/) |

## 3. Problemas de Gravação (Flashing)

| Sintoma | Causa | Solução |
| --- | --- | --- |
| `upgrade_tool ld` não lista o dispositivo | Não está em modo Maskrom / Loader; regra udev ausente; não executado com sudo | Instale `88-rockusb.rules`, depois execute `udevadm control --reload-rules && udevadm trigger`; confirme que `lsusb` mostra um dispositivo `2207:`; use `sudo` |
| `Permission denied` ao executar `upgrade_tool` | Permissão de execução foi perdida durante a extração | Execute `chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool` |
| `./rkflash.sh update` não faz nada | O branch está comentado no script | Execute `sudo upgrade_tool uf output/image/update.img` |
| Comportamento inesperado da partição após `./rkflash.sh all` | `all` não grava `env.img` | Execute `upgrade_tool di -p output/image/env.img` manualmente (ou use `parameter.txt`) |
| `./build.sh sdcard_upgrade` não produz saída | A configuração de placa Recamera2 não define `RK_SDCARD_UPGRADE_UBOOT_DEFCONFIG`; `check_config` retorna silenciosamente | Adicione as variáveis necessárias à configuração da placa; veja [System Customization (DTS / Kernel / Buildroot / Overlay)](/pt-br/recamera_pro_bsp_system_customization/) |
| Dispositivo fica inutilizável após interrupção da gravação | Loader não foi gravado completamente | Force o modo Maskrom, execute `upgrade_tool ul download.bin` e depois grave novamente |
| `Writing 'xxx' failed` | Tamanho da imagem não corresponde ao tamanho da partição | Verifique se `boot.img` tem menos de 11 M e `rootfs.img` tem menos de 3 G |

## 4. Problemas de Boot

**O console serial é o único canal confiável:** 1500000 8N1, `console=ttyFIQ0`.

| Sintoma no console serial | Diagnóstico | Solução |
| --- | --- | --- |
| Nenhuma saída | Loader / DDR não iniciou, ou a conexão serial / taxa de baud está errada | Confirme 1500000 baud; regrave `idblock.img` + `download.bin`; meça o sinal TX serial |
| U-Boot aparece e depois para | Problema na imagem do kernel ou no DTB | Regrave `boot.img`; verifique `RK_KERNEL_DTS` |
| `Kernel panic - not syncing: VFS: Unable to mount root fs` | rootfs não corresponde ao boot, ou o PARTUUID mudou | Use `boot` e `rootfs` da mesma compilação; após mudanças de partição, regrave o env |
| Reinicializações repetidas com mensagens de watchdog no serial | Um processo bloqueado impediu a atualização do watchdog (`-T 30`) | Pare `S15watchdog` e investigue; verifique se há um processo travado |
| Sistema inicia mas não tem rede | Script udhcpc ou problema de prioridade de DNS | Veja a seção de solução de problemas de rede em [Device Access and Debugging](/pt-br/recamera_pro_bsp_device_debug/) |
| Hora está errada por um número inteiro de horas | `S20hwclock` usa `--hctosys --utc`, embora o comentário diga que o RTC armazena hora local | Confirme se o RTC armazena UTC ou hora local e ajuste o script se necessário |
| Não é possível entrar no Linux, mas o U-Boot funciona | rootfs está corrompido | Grave apenas o rootfs com `sudo ./rkflash.sh rootfs` |

Verifique a sequência de boot com:

```bash
# ls /etc/init.d/ /oem/usr/etc/init.d/          # Available startup scripts
# dmesg | head -50                               # Early kernel logs
# cat /var/log/Recamera2_developer.log | head    # Application logs
# ps w                                             # Processes that actually started
```

## 5. Problemas em Tempo de Execução e de Aplicação

### Biblioteca Compartilhada Não Encontrada

```bash
# ldd /userdata/my_app
```

- `librockit.so`, `librknnrt.so` etc. ausentes → `LD_LIBRARY_PATH` não inclui `/oem/usr/lib`. Shells de login o definem via `/etc/profile.d/RkEnv.sh`; para contextos sem login (scripts de init, cron), faça `source` nesse arquivo ou exporte a variável explicitamente.
- Biblioteca de terceiros ausente → a biblioteca não está no rootfs. Habilite o pacote Buildroot correspondente; veja [System Customization (DTS / Kernel / Buildroot / Overlay)](/pt-br/recamera_pro_bsp_system_customization/).
- Em tempo de link, você também pode precisar de `-Wl,-rpath,/oem/usr/lib`; veja [Choose a Development Path](/pt-br/recamera_pro_dev_path/).

### Incompatibilidade de Arquitetura / ABI

```bash
# file /userdata/my_app        # Must be ARM aarch64
```

`Exec format error` significa que o binário foi compilado para x86-64. `GLIBC_2.xx not found` significa que a toolchain do host é mais nova que o runtime do dispositivo de destino.

### Problemas de Vídeo

| Sintoma | Causa | Solução |
| --- | --- | --- |
| Sample não consegue abrir VI / nó de dispositivo está ocupado | `rkipc` já possui o dispositivo | Execute `sh /oem/usr/bin/RkLunch-stop.sh` e tente novamente; restaure o serviço ao terminar |
| Imagem toda preta ou verde | Sensor não detectado ou arquivo de IQ ausente | Execute `dmesg | grep -i [sensor]` e verifique `/oem/usr/share/iqfiles/` |
| Cores erradas ou muito ruído | Arquivo de IQ não corresponde ao sensor | Compare `RK_CAMERA_SENSOR_IQFILES` com o sensor instalado |
| Não é possível receber o stream RTSP | go2rtc não habilitou a porta externa 554 | Verifique `[video.0.rtsp] enable` em `/userdata/config/rkipc.ini` e depois reinicie `S50go2rtc` |
| Interface Web mostra vídeo, mas um player externo não | API do go2rtc está vinculada a 127.0.0.1 | Use WebRTC em `:8555` ou encaminhe a porta `1984` via SSH |
| Número de `/dev/videoN` mudou | Versões diferentes de firmware enumeram dispositivos de forma diferente | Verifique no dispositivo com `v4l2-ctl --list-devices`; não codifique o número de forma fixa |

Consulte `docs/zh/media/Rockchip_Trouble_Shooting_Linux_VENC_CN.pdf` para o guia de solução de problemas de vídeo da Rockchip.

### Problemas de NPU / IA

| Sintoma | Causa | Solução |
| --- | --- | --- |
| `rknn_init` falha | Modelo não foi convertido para rv1126b, ou as versões do Toolkit e do Runtime não correspondem | Converta novamente com `target_platform='rv1126b'`; verifique a versão de `librknnrt.so` da placa (baseline interno 2.3.2) |
| Saída de inferência completamente errada | Incompatibilidade de pré-processamento (mean/std, RGB/BGR, NCHW/NHWC, política de resize) | Verifique os parâmetros do script de exportação em vez de adivinhar |
| Resultados imprecisos | Conjunto de calibração INT8 não é representativo | Primeiro estabeleça um baseline FP16, depois quantize novamente com um conjunto de calibração melhor |
| OOM / processo encerrado | LLM / VLM usa memória demais | Verifique `memory_usage` com `rkllm_benchmark_demo`; tente uma quantização menor |
| Inferência lenta | Apenas um núcleo da NPU está em uso | Defina `rknn_set_core_mask(ctx, RKNN_NPU_CORE_0_1)` |
| Desempenho degrada após longa execução | Thermal throttling | Verifique o status térmico; veja `docs/zh/bsp/Rockchip_Developer_Guide_Thermal_CN.pdf` |
| Saída do VLM ilegível ou inesperada | Tokens especiais de visão não correspondem | Passe `img_start` / `img_end` / `img_content` em tempo de execução |

### Problemas de áudio

Consulte a tabela de problemas em [Audio Development](/pt-br/recamera_pro_audio_development/). O problema mais comum é abrir `hw:0,0` diretamente em vez de usar dsnoop, resultando em `Device or resource busy`.

### Serviços e portas

```bash
# netstat -tlnp        # 22 / 7681 / 21 / 8555 / 1984 / 8765 / 554 / 5554
# ps w | grep -E 'rkipc|gmgr|skt2ws|tmir|rcisd|go2rtc|ttyd|notify'
# /etc/init.d/S49notify start|stop
# /oem/usr/etc/init.d/S50go2rtc restart
```

Se o SSH rejeitar uma senha correta, o bloqueio do PAM pode ter sido acionado (5 falhas / 300 segundos). O arquivo de estado é `/userdata/config/system/login_lock.json`; reiniciar limpa esse estado.

Se a página do ttyd indicar que o usuário não é permitido, a lista de permissão em `ssh-login-whitelist.sh` contém apenas `root` e `admin`.

Se o FTP não mostrar o diretório de configuração, `hide_file` / `deny_file` em `vsftpd.conf` o ocultam intencionalmente. Use SFTP em vez disso.

### Logs

```bash
# tail -f /var/log/Recamera2_developer.log    # Human-readable
# tail -n 100 /var/log/Recamera2.log          # JSON for programmatic parsing
# dmesg                                        # Kernel logs
```

Os logs ao vivo via WebSocket na porta 8765 vinculam-se a 127.0.0.1. A partir do host, use `ssh -L 8765:127.0.0.1:8765 root@<IP>`.

### Memória e desempenho

O kernel tem nós de depuração habilitados; inspecione-os com:

```bash
# cat /proc/rk_cma/*        2>/dev/null      # CONFIG_RK_CMA_PROCFS
# cat /proc/rk_dmabuf/*     2>/dev/null      # CONFIG_RK_DMABUF_PROCFS
# cat /proc/rk_memblock/*   2>/dev/null      # CONFIG_RK_MEMBLOCK_PROCFS
# cat /proc/rk_rga/*        2>/dev/null      # CONFIG_ROCKCHIP_RGA_PROC_FS
# ls /sys/kernel/debug/                       # CONFIG_DEBUG_FS
```

Os nomes exatos dos nós dependem do dispositivo e ainda precisam de verificação de hardware. Observe que `RK_BOOTARGS_CMA_SIZE="8M"` define uma região CMA pequena; verifique isso primeiro se grandes alocações contíguas falharem.

Coredumps estão habilitados com `CONFIG_ELF_CORE=y`. `__BUILD_ENABLE_COREDUMP_SCRIPT()` em `build.sh` pode gerar um script de habilitação. Use-o junto com `IMAGE/.../DEBUG_FILES/kernel/vmlinux.tar.bz2` e um cross-gdb para analisar um dump.

## 6. Informações a incluir em um relatório de bug

Para um relatório interno ou um problema Rockchip (consulte `docs/en/Rockchip_User_Guide_Bug_System_EN.pdf`), colete estas informações em uma única passagem:

```bash
# On the host
./build.sh info > info.txt 2>&1
cat IMAGE/*/build_info.txt

# On the device
/bin/sdkinfo
cat /etc/ota_version
uname -a && cat /proc/cmdline
dmesg > dmesg.txt
cat /var/log/Recamera2_developer.log > app.log
cat /run/board_id.env
netstat -tlnp
ps w
```

Inclua também o log completo de boot serial (1500000 baud), os passos de reprodução e o caminho para o arquivo `IMAGE/..._RELEASE_TEST/`.

Constatações de análise estática de código-fonte, suas evidências, impacto e status de verificação são coletados em [Source Review and Known Issues](/pt-br/recamera_pro_sdk_source_notes/) para manter as auditorias de manutenção separadas dos procedimentos operacionais. Se você encontrar um comportamento relacionado, verifique-o primeiro em relação aos arquivos e à versão atual do SDK.

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