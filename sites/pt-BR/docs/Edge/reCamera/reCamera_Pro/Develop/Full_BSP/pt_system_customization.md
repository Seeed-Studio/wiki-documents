---
description: Personalize o sistema por meio de DTS, kernel, Buildroot, overlay, partição e configuração do MCU.
title: Personalização do Sistema
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_system_customization
sku: 10003420
sidebar_position: 9
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_bsp_system_customization/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Personalização do Sistema

Esta página abrange quatro caminhos comuns de personalização do sistema: device tree, configuração do kernel, pacotes Buildroot e substituições de arquivos de overlay. Para uma lista completa de opções de configuração, consulte `project/cfg-all-items-introduction.txt`.

## Arquivos de Configuração da Placa

A configuração da reCamera Pro está em:

```text
project/cfg/BoardConfig_Recamera2/
├── BoardConfig-EMMC-RK801-RV1126B_V1-IPC.mk        # 32-bit
├── BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk  # 64-bit (recommended)
├── RECAMERA2-IPC-RELEASE-NOTES.md
└── overlay/                                        # 15 overlay directories
```

Após `./build.sh lunch`, `.BoardConfig.mk` na raiz do SDK é um link simbólico para o arquivo selecionado. **Edite o arquivo de configuração real**; as alterações serão capturadas por meio do symlink.

Configurações principais na configuração de 64 bits:

```bash
export RK_ARCH=arm64
export RK_CHIP=rv1126b
export RK_TOOLCHAIN_CROSS=aarch64-rockchip1240-linux-gnu
export RK_BOOT_MEDIUM=emmc
export RK_UBOOT_DEFCONFIG=rv1126b_recamera2_defconfig
export RK_UBOOT_DEFCONFIG_FRAGMENT="rk-emmc.config rv1126b-ipc.config"
export RK_UBOOT_RKBIN_MINIALL_INI_FILE=RV1126BMINIALL_IPC.ini
export RK_KERNEL_DEFCONFIG=rv1126b_ipc_defconfig
export RK_KERNEL_DEFCONFIG_FRAGMENT="rv1126b-display.config rv1126b-sdiowifi.config rv1126b-bt.config rv1126b-recamera2.config"
export RK_KERNEL_DTS=rv1126b-recamera2-v1.dts
export RK_KERNEL_RC_DTO=y
export RK_BUILDROOT_DEFCONFIG=recamera2_buildroot_aarch64_defconfig
export RK_APP_TYPE=RKIPC_RV1126B_RECAMERA2
export RK_PARTITION_CMD_IN_ENV="32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),"
export RK_PARTITION_FS_TYPE_CFG=rootfs@IGNORE@ext4,userdata@/userdata@ext4
export RK_ENABLE_RECOVERY=y
export RK_MISC=recovery-misc.img
export RK_OTA_RESOURCE="boot.img rootfs.img"
export RK_OTA_VERSION=V1.0.10
export RK_BOOTARGS_CMA_SIZE="8M"
export RK_AIISP_MODEL=NONE
export RK_ENABLE_WIFI=y
export RK_ENABLE_WIFI_CHIP=AP6XXX
export RK_ENABLE_BLUETOOTH=y
export RK_APP_RECAMERA_WEB=y
export RK_APP_RECAMERA_NOTIFY=y
export RK_APP_RECAMERA_ONVIF=y
export RK_APP_RECAMERA_SERVICES=y
export RK_APP_RKLLM_INFERENCE=y
export RK_BUILD_APP_TO_OEM_PARTITION=n
export RK_FREETYPE_USE_BUILDROOT=y
export RK_CAMERA_SENSOR_IQFILES="ainr/sc450ai_default_default.json ainr/sc450ai ainr/sc850sl ainr/sc850sl_default_default.json"
```

> Após alterar a configuração da placa, limpe os componentes afetados com `./build.sh clean` antes de recompilar, para evitar misturar saídas de configurações diferentes.

## 1. Personalização do Device Tree

### Estrutura de Arquivos

Os arquivos DTS do kernel estão em `sysdrv/source/kernel/arch/arm64/boot/dts/rockchip/`:

| Arquivo | Finalidade |
| --- | --- |
| `rv1126b-recamera2-v1.dts` | **Ponto de entrada de nível superior** (selecionado por `RK_KERNEL_DTS`); `model = "Rockchip RV1126B RECAMERA PRO Board"` |
| `rv1126b-recamera2-cam-csi0.dtsi` | Caminho da câmera CSI0 |
| `rv1126b-recamera2-cam-csi1.dtsi` | Caminho da câmera CSI1 |
| `rv1126b-recamera2-disp.dtsi` | Caminho de exibição |
| `rv1126b-recamera2-ext-cam-csi1.dts` | **Câmera da placa de expansão**, compilada como `.dtbo` |
| `rv1126b-recamera2-baseboard-0.dts` / `-baseboard-1.dts` | Variantes da baseboard |
| `rv1126b-recamera2-extboard-0.dts` / `-extboard-1.dts` | Variantes da placa de expansão |

Os includes comentados em `rv1126b-recamera2-v1.dts` (`rv1126b-aoa.dtsi`, `rv1126b-recamera2.dtsi` e `rv1126b-recamera2-v1.dtsi`) indicam que este DTS é **autocontido**: a árvore de alimentação (`vcc12v_dcin` → `vcc5v0_sys` → `vdd_npu`, etc.) é definida diretamente no arquivo de nível superior usando `regulator-fixed`.

### Alterar a Linha de Comando do Kernel

O nó `chosen` de nível superior é:

```dts
chosen {
    bootargs = "earlycon=uart8250,mmio32,0x20810000 console=ttyFIQ0 rw root=PARTUUID=614e0000-0000 rootfstype=ext4 rootwait snd_soc_core.prealloc_buffer_size_kbytes=16 coherent_pool=32K";
};
```

Não altere o tamanho da CMA aqui. Defina `RK_BOOTARGS_CMA_SIZE` na configuração da placa; `build.sh` o adiciona a um fragmento da linha de comando (`__PREPARE_BOARD_CFG` → `RK_KERNEL_CMDLINE_FRAGMENT`).

### DTBO (Overlays de Device Tree em Tempo de Execução)

Com `RK_KERNEL_RC_DTO=y` e `CONFIG_OF_OVERLAY=y` no kernel, a reCamera Pro usa DTBOs para oferecer suporte a **uma imagem de firmware única para várias baseboards e placas de expansão**:

1. Em tempo de compilação, cada `rv1126b-recamera2-ext-*.dts` é compilado em um `.dtbo` correspondente.
2. `__PACKAGE_OEM()` em `build.sh` copia `sysdrv/source/objs_kernel/arch/arm64/boot/dts/rockchip/rv1126b-recamera2-ext-*.dtbo` para `/oem/usr/share/`.
3. Na inicialização, o overlay `S00board-id` lê o ADC para identificar a placa e grava o resultado em `/run/board_id.env`.
4. Um script de inicialização usa o ID detectado para selecionar um `.dtbo` a ser aplicado.

**Mecanismo de identificação da placa** (`overlay-buildroot-board-id/etc/init.d/S00board-id`):

```text
ADC device       : /sys/bus/iio/devices/iio:device0
Output file      : /run/board_id.env
Samples          : Average of 3 readings
Tolerance        : 440
ADC levels       : 0 1365 2730 4094 5460 6824 8191
Corresponding V  : 0.0 0.3 0.6 0.9 1.2 1.5 1.8 V
Baseboard revs   : V0.9 V1.0 V1.1 V1.2 V1.3 V1.4 V1.5 (BASEBOARD_VERSIONS)
Baseboard models : TYPE0 ... TYPE6 (BASEBOARD_MODELS)
Expansion revs   : V0.9 ... V1.5 (EXPBOARD_VERSIONS)
Expansion models : TYPE0 ... TYPE6 (EXPBOARD_MODELS)
```

Para adicionar uma variante de hardware: **adicione um nível de divisor resistivo → atualize os arrays `LEVELS` / `VERSIONS` / `MODELS` em `S00board-id` → adicione o `.dts` correspondente → adicione um branch ao script de inicialização**. Mantenha todas as três partes em sincronia; caso contrário, a nova placa pode ser identificada como um modelo existente.

### Alterar o Sensor da Câmera

1. Confirme que o driver correspondente está definido como `m` ou `y` no fragmento do kernel (`rv1126b-recamera2.config` já inclui muitos drivers, como SC450AI, SC850SL, GC2053 e IMX415). Habilite a opção apropriada `CONFIG_VIDEO_xxx` se o driver estiver ausente.
2. Atualize o `compatible`, o endereço I2C, o clock e os reguladores de alimentação do nó da câmera no DTS.
3. Coloque o arquivo IQ em `media/isp/camera_engine_rkaiq/rkaiq/iqfiles/isp35/` e atualize `RK_CAMERA_SENSOR_IQFILES` na configuração da placa.
4. Recompile `kernel` + `media` + `firmware`.

## 2. Configuração do Kernel

```bash
./build.sh kernelconfig      # Open menuconfig; savedefconfig runs on exit
./build.sh kernel            # Rebuild the kernel
./build.sh clean kernel      # Clean the kernel outputs
```

`kernelconfig` salva primeiro um snapshot `defconfig.before`. Ao sair, ele compara a configuração e **grava o defconfig apenas se houver alterações reais**, evitando diffs irrelevantes.

A configuração é composta por `RK_KERNEL_DEFCONFIG=rv1126b_ipc_defconfig` mais quatro fragmentos aplicados em ordem:

| Fragmento | Conteúdo |
| --- | --- |
| `rv1126b-display.config` | Configurações de exibição |
| `rv1126b-sdiowifi.config` | Wi-Fi SDIO |
| `rv1126b-bt.config` | Bluetooth |
| **`rv1126b-recamera2.config`** | **Personalizações da Seeed**; edite este arquivo |

`rv1126b-recamera2.config` está em `sysdrv/source/kernel/arch/arm64/configs/` (a versão de 32 bits é o arquivo com o mesmo nome em `arch/arm/configs/`; para a placa de 64 bits, edite o arquivo arm64). Ele termina com um marcador `#### recamera2 defconfig ####`. As adições da Seeed vêm após esse marcador, incluindo:

```text
CONFIG_CAN=y / CONFIG_CAN_RK3576=y            # CAN bus
CONFIG_STMMAC_ETHTOOL=y / CONFIG_DWMAC_ROCKCHIP_TOOL=y / CONFIG_REALTEK_PHY=y / CONFIG_MAXIO_PHY=y
CONFIG_GENERIC_ADC_BATTERY=y / CONFIG_CHARGER_GPIO=y / CONFIG_POWER_SUPPLY_DEBUG=y
CONFIG_SND_SOC_ES7202=y                        # Microphone-array ADC
CONFIG_TYPEC_AW35615=y / CONFIG_TYPEC_TCPM=y   # USB Type-C
CONFIG_NEW_LEDS=y / CONFIG_LEDS_CLASS=y / CONFIG_LEDS_PWM=y / CONFIG_LEDS_TRIGGERS=y
CONFIG_LEDS_TRIGGER_TIMER=y / _HEARTBEAT=y / _PATTERN=y
CONFIG_RTC_DRV_PCF8563=y                       # RTC
CONFIG_INV_ICM42670_I2C=y                     # IMU (used by recamera_utils/hw_test/imu_test.py)
CONFIG_FANOTIFY=y
CONFIG_CRYPTO*=m / CONFIG_CRYPTO_DEV_ROCKCHIP=m
CONFIG_OF_OVERLAY=y                            # DTBO support
CONFIG_DRM_PANEL_ILITEK_ILI9881C=y / CONFIG_REGULATOR_RASPBERRYPI_TOUCHSCREEN_V2=y
CONFIG_INPUT_TOUCHSCREEN=y / CONFIG_TOUCHSCREEN_GOODIX=y
CONFIG_USB_CONFIGFS_NCM=y
CONFIG_NETFILTER=y / CONFIG_IP_NF_IPTABLES=y / CONFIG_IP_NF_FILTER=y / CONFIG_BPFILTER=y
```

A forma recomendada de adicionar opções ao kernel é **acrescentá-las após a seção Recamera2 em `rv1126b-recamera2.config`**, em vez de editar diretamente `rv1126b_ipc_defconfig`. Este último é um arquivo upstream da Rockchip e tem maior probabilidade de entrar em conflito durante upgrades do SDK.

Escolhas existentes importantes:

- `CONFIG_PANIC_ON_OOPS=y` + `CONFIG_BOOTPARAM_SOFTLOCKUP_PANIC=y` + `CONFIG_BOOTPARAM_HARDLOCKUP_PANIC=y`: oops, soft lockup e hard lockup todos causam um panic. **Considere desabilitar isso temporariamente durante o desenvolvimento**; caso contrário, uma falha reinicia o sistema imediatamente e remove o estado em tempo real necessário para depuração.
- `CONFIG_ROCKCHIP_DEBUG=y`, `CONFIG_DEBUG_FS=y`, `CONFIG_RK_CMA_PROCFS=y`, `CONFIG_RK_DMABUF_PROCFS=y`, `CONFIG_RK_MEMBLOCK_PROCFS=y` e `CONFIG_ROCKCHIP_RGA_PROC_FS=y`: nós de depuração estão habilitados. Estatísticas de memória e RGA em `/proc/rk*` e `/sys/kernel/debug/` são úteis para investigar vazamentos de memória.
- `CONFIG_ELF_CORE=y` + `CONFIG_CORE_DUMP_DEFAULT_ELF_HEADERS=y`: habilita coredumps. `__BUILD_ENABLE_COREDUMP_SCRIPT()` em `build.sh` pode gerar um script para habilitá-los.
- `CONFIG_VIDEO_RK_IRCUT` **não está habilitado**. Habilite-o se você precisar de controle de IRCUT.

## 3. Personalização do Buildroot

### Localização e Extração

As fontes do Buildroot são fornecidas como um arquivo compactado:

```text
sysdrv/tools/board/buildroot/buildroot-2023.02.6.tar.gz
sysdrv/tools/board/buildroot/recamera2_buildroot_aarch64_defconfig   # 64-bit (this board)
sysdrv/tools/board/buildroot/recamera2_buildroot_defconfig           # 32-bit
sysdrv/tools/board/buildroot/busybox.config
sysdrv/tools/board/buildroot/{busybox_patch,mpv_patch,qemu_patch,hcitool_patch,prelink-cross_patch}
sysdrv/tools/board/buildroot/font
```

O primeiro `./build.sh rootfs` o extrai para `sysdrv/source/buildroot/buildroot-2023.02.6/`. As saídas de compilação ficam em:

```text
sysdrv/source/buildroot/buildroot-2023.02.6/output/
├── staging/    # Buildroot development sysroot (headers + libraries)
├── target/     # Target rootfs contents
├── host/       # Host-side tools
└── build/      # Package build directories
```

`staging/` é para aplicativos no BSP completo que fazem link com pacotes do Buildroot. Para desenvolvimento de aplicativos comuns, use o [`recamera_pro_toolchain`](https://github.com/Seeed-Projects/recamera_pro_toolchain).

### Comandos comuns

```bash
./build.sh buildrootconfig   # Open Buildroot menuconfig; savedefconfig runs on exit
./build.sh rootfs            # Rebuild rootfs
./build.sh clean rootfs      # Clean rootfs outputs
```

### Adicionar um pacote

1. Selecione o pacote em `./build.sh buildrootconfig`, depois saia e salve; o defconfig é atualizado automaticamente.
2. Se o defconfig não for atualizado automaticamente (alguns pacotes são selecionados por meio de dependências), adicione `BR2_PACKAGE_XXX=y` manualmente em `sysdrv/tools/board/buildroot/recamera2_buildroot_aarch64_defconfig`.
3. Recompile com `./build.sh rootfs`.
4. Verifique o pacote, por exemplo com `ls sysdrv/source/buildroot/buildroot-2023.02.6/output/target/usr/bin/`.

Para adicionar um pequeno utilitário BusyBox como `i2cdetect` ou `nc`, edite `busybox.config`. A configuração da placa já possui opções como `RK_ENABLE_SYSSTAT=y`, `RK_ENABLE_FIO=y` e `RK_ENABLE_I2C_TOOLS=y`, mostrando que ferramentas comuns podem ser habilitadas por meio de chaves `RK_ENABLE_*`. **Procure uma chave existente antes de editar o defconfig diretamente.**

### Sobre `/oem`

`RK_BUILD_APP_TO_OEM_PARTITION=n`, portanto **`/oem` é um diretório comum dentro do rootfs, não uma partição separada**. Durante o empacotamento, `build.sh` copia `output/out/oem/` para o subdiretório `oem/` da área de staging do rootfs e então remove o diretório OEM separado. Portanto:

- Arquivos sob `oem/` em um overlay (por exemplo, `overlay-buildroot-go2rtc/oem/usr/bin/go2rtc`) acabam em `/oem/usr/bin/go2rtc` no dispositivo.
- `/oem` é atualizado junto com o rootfs. Para alterá-lo, reflashe `rootfs.img`; ele não pode ser gravado separadamente como uma partição OEM.

## 4. Substituições de arquivos por overlay

Overlays são o principal mecanismo para as customizações de rootfs da Seeed e muitas vezes o caminho mais fácil para começar.

### Como funciona

Implementação em `build.sh` (por volta da linha 2971):

```bash
for overlay_dir in $RK_POST_OVERLAY; do
    if [ -d "$tmp_path/overlay/$overlay_dir" ]; then
        rsync -a --ignore-times --keep-dirlinks --chmod=u=rwX,go=rX --exclude .empty \
            $tmp_path/overlay/$overlay_dir/* $RK_PROJECT_PACKAGE_ROOTFS_DIR/
    fi
done
```

Em outras palavras, arquivos sob `project/cfg/BoardConfig_Recamera2/overlay/<name>/` são copiados com rsync para o diretório de staging do rootfs, preservando seus caminhos relativos.

`cfg-all-items-introduction.txt` descreve `RK_POST_OVERLAY` da seguinte forma:

> Arquivos de recursos de overlay são copiados para o sistema de arquivos. Por exemplo, crie `overlay/user_overlay_files` sob o diretório `BoardConfig.mk` correspondente e defina `RK_POST_OVERLAY=user_overlay_files`.

### Overlays atualmente habilitados

`RK_POST_OVERLAY` lista 14 entradas que mapeiam para 15 diretórios (go2rtc tem três diretórios, mas apenas dois estão habilitados):

| Diretório de overlay | Conteúdo instalado | Finalidade |
| --- | --- | --- |
| `overlay-buildroot-banner` | `/etc/motd`, `/etc/profile.d/banner.sh` | Logotipo ASCII da reCamera; impresso apenas em sessões interativas não SSH |
| `overlay-buildroot-hwclock` | `/etc/init.d/S20hwclock` | Sincronizar RTC e hora do sistema |
| `overlay-buildroot-sshd` | `/etc/ssh/sshd_config`, `/etc/pam.d/sshd`, `/etc/init.d/S50sshd`, `/usr/libexec/ssh-login-lock.py` | Serviço SSH e bloqueio após falhas de login (5 tentativas / 300 segundos) |
| `overlay-buildroot-syslog-ng` | `/etc/syslog-ng.conf` | Direcionar logs para arquivos e UDP |
| `overlay-buildroot-vsftpd` | `/etc/vsftpd.conf`, `/etc/pam.d/vsftpd`, `/etc/shells`, `/etc/vsftpd.{chroot_,user_}list`, `/etc/init.d/S70vsftpd` | FTP; oculta o diretório de configuração |
| `overlay-buildroot-log` | `/oem/usr/bin/websocket_log.py`, `/oem/usr/etc/init.d/S10log` | UDP 5140 → WebSocket 8765 |
| `overlay-buildroot-ttyd` | `/oem/usr/etc/init.d/S50ttyd`, `/oem/usr/bin/ssh-login-whitelist.sh` | Terminal via navegador (7681), lista de permissão `root` / `admin` |
| `overlay-buildroot-udhcpc` | `/usr/share/udhcpc/default.script` | Script de DHCP; o DNS de eth0 tem prioridade |
| `overlay-buildroot-go2rtc` | `/oem/usr/etc/go2rtc/go2rtc.yaml`, `/oem/usr/etc/init.d/S50go2rtc` | Configuração de stream e script de inicialização |
| `overlay-buildroot-go2rtc-arm64` | `/oem/usr/bin/go2rtc` | Binário go2rtc de 64 bits |
| `overlay-buildroot-board-id` | `/etc/init.d/S00board-id` | Ler o ID da placa do ADC → `/run/board_id.env` |
| `overlay-buildroot-asound` | `/etc/asound.conf` | Captura de seis canais → dispositivos virtuais para dois microfones + dois canais de referência |
| `overlay-buildroot-watchdog` | `/etc/init.d/S15watchdog` | Watchdog de hardware (`-T 30 -t 15`) |
| `overlay-buildroot-rkenv` | `/etc/profile.d/RkEnv.sh` | `OEM_HOME`, `PATH`, `LD_LIBRARY_PATH`, `HOME=/userdata` |

**Presente, mas não habilitado:** `overlay-buildroot-go2rtc-arm` (binário go2rtc de 32 bits); a placa de 64 bits não o utiliza.

### Adicionar seu próprio overlay

```bash
# 1. Create a directory and arrange files by their target absolute paths
mkdir -p project/cfg/BoardConfig_Recamera2/overlay/my_overlay/etc/init.d
cp my_script.sh project/cfg/BoardConfig_Recamera2/overlay/my_overlay/etc/init.d/S60myservice

# 2. Append it to RK_POST_OVERLAY in the board configuration (keep the line-continuation backslash)
#    export RK_POST_OVERLAY="... overlay-buildroot-rkenv \
#    my_overlay"

# 3. Rebuild rootfs and package the firmware
./build.sh rootfs && ./build.sh firmware
```

### Três armadilhas de overlay

- **rsync reescreve permissões:** `--chmod=u=rwX,go=rX` significa que grupo e outros usuários nunca recebem permissão de escrita. O `X` maiúsculo preserva a permissão de execução apenas para diretórios ou arquivos que já eram executáveis. Torne os scripts executáveis no overlay de origem antes de compilar.
- **Arquivos `.empty` são excluídos:** arquivos de placeholder usados para criar diretórios vazios não entram na imagem. Isso é intencional e preserva a estrutura de diretórios.
- **Overlays sobrescrevem, mas não removem:** rsync não é chamado com `--delete`, portanto remover um arquivo de um overlay **não** o remove do rootfs. Para remover um arquivo, use um script pós-compilação de rootfs do Buildroot ou `RK_POST_CLEAN_FILES` (`__RUN_POST_CLEAN_FILES` em `build.sh`).

## 5. Personalização do U-Boot

```bash
./build.sh uboot
./build.sh clean uboot
```

Configuração: `RK_UBOOT_DEFCONFIG=rv1126b_recamera2_defconfig` em `sysdrv/source/uboot/u-boot/configs/`, além dos fragmentos `rk-emmc.config` e `rv1126b-ipc.config`.

Uma configuração chave é `CONFIG_BAUDRATE=1500000`. Altere o atraso de boot, o alvo de boot padrão, o suporte a fastboot e opções relacionadas nesse defconfig.

O firmware de inicialização da DDR é selecionado por `RK_UBOOT_RKBIN_MINIALL_INI_FILE=RV1126BMINIALL_IPC.ini`; as saídas incluem `idblock.img` / `download.bin`. **Alterar parâmetros da DDR é de alto risco**; evite isso a menos que seja necessário.

`build.sh` contém `__modify_file()` e `__modify_file_ddr_bin()`, que modificam parâmetros do firmware DDR rkbin a partir da configuração da placa durante as compilações do U-Boot. Verifique essas funções primeiro ao investigar problemas de DDR.

## 6. Personalização da tabela de partições

Edite `RK_PARTITION_CMD_IN_ENV`. As entradas usam `size(name)` ou `size@offset(name)`; `-` significa usar todo o espaço restante:

```text
32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),
```

Atualize também `RK_PARTITION_FS_TYPE_CFG`, cujo formato é `partition@mount-point@filesystem`; `IGNORE` significa que a partição não é montada pelo fstab:

```text
rootfs@IGNORE@ext4,userdata@/userdata@ext4
```

Depois de alterar esses valores, execute:

```bash
./build.sh env          # Regenerate env.img
./build.sh firmware     # Repackage the firmware
```

**Regrave a tabela de partições ao fazer o flash:** execute `sudo ./rkflash.sh all`, ou pelo menos `upgrade_tool di -p output/image/parameter.txt`. Gravar apenas o rootfs sem atualizar a tabela de partições pode desalinhá-las.

`parse_partition_env()`, `parse_partition_file()`, `get_partition_dev_node()` e `get_partition_num()` em `build.sh` lidam com o parsing; inspecione essas funções ao depurar problemas de partição.

Considerações importantes:

- `boot` tem apenas 11 M. O empacotamento falha se o kernel + DTB exceder esse tamanho. Após habilitar muitos recursos do kernel, verifique com `ls -lh output/image/boot.img`.
- `rootfs` é fixo em 3 G; `userdata` usa o espaço restante. Aumentar o rootfs reduz a capacidade de userdata.
- A linha de comando do kernel usa `root=PARTUUID=614e0000-0000`. Alterar a ordem das partições pode afetar o PARTUUID; após qualquer alteração de partição, verifique se os bootargs do DTS continuam corretos.

## 7. Lado do MCU (RT-Thread)

`sysdrv/source/mcu/` contém o firmware RT-Thread para o MCU integrado ao RV1126B. Ele é independente do Linux:

```text
sysdrv/source/mcu/
├── build.sh
├── docs/          # Rockchip_RV1126B_Quick_Start_RT-Thread_MCU_CN.pdf
├── prebuilts/
├── project/
├── readme.txt
└── rt-thread/
```

Compile-o com:

```bash
./build.sh mcu              # From the SDK root
# Or enter sysdrv/source/mcu/ and use its own build.sh
```

O argumento `mcu` é tratado separadamente **antes** da análise normal de argumentos em `build.sh` (`if [ "$1" = "mcu" ]; then shift; build_mcu $@; fi`). Compilações do MCU também podem ser acionadas automaticamente durante compilações do U-Boot / kernel de acordo com a configuração via `build_mcu amp` ou `build_mcu $RK_UBOOT_RKBIN_MCU_CFG`.

A configuração atual da placa não habilita explicitamente o MCU. Verifique `./build.sh info` para ver se ele está incluído na compilação.

## Verificação pós-personalização

```bash
./build.sh info                      # Confirm that the configuration took effect
./build.sh kernel && ./build.sh rootfs && ./build.sh firmware
ls -lh output/image/                 # Check that image sizes are reasonable (boot < 11M, rootfs < 3G)
sudo ./rkflash.sh all                # A partition-table change requires flashing everything
```

No dispositivo:

```bash
# /bin/sdkinfo                       # Print Build Time / SDK Version / BoardConfig name
# cat /etc/ota_version               # Should be V1.0.10 (or your updated value)
# cat /proc/cmdline                  # Check that the command line matches expectations
# cat /run/board_id.env              # Check the detected board ID
# ls /oem/usr/share/*.dtbo           # Confirm the DTBO files are present
# zcat /proc/config.gz | grep XXX    # Check a kernel option (if IKCFG is enabled)
```

`/bin/sdkinfo` é gerado por `build.sh` durante a criação do pacote. Ele informa a versão do SDK e o nome do arquivo BoardConfig, sendo a **maneira mais rápida de identificar qual compilação de firmware está em execução no dispositivo**.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>