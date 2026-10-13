---
description: Gravar uma imagem de firmware autogerada na reCamera Pro e verificar o processo de boot.
title: Gravação e Boot
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_flash_boot
sku: 10003420
sidebar_position: 6
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_bsp_flash_boot/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Gravação e Boot

## Tabela de Partições

As partições da reCamera Pro são definidas por `RK_PARTITION_CMD_IN_ENV` na configuração da placa:

```text
32K(env),512K@32K(idblock),4M@1M(uboot),64K(misc),10M(recovery),11M(boot),3G(rootfs),-(userdata),
```

| Partição | Tamanho | Offset | Conteúdo | Arquivo de imagem |
| --- | --- | --- | --- | --- |
| `env` | 32 K | 0 | Tabela de partições + argumentos de boot | `env.img` |
| `idblock` | 512 K | 32 K | Loader (incluindo inicialização da DDR) | `idblock.img` |
| `uboot` | 4 M | 1 M | U-Boot | `uboot.img` |
| `misc` | 64 K | — | Flag de boot de recuperação, etc. | `misc.img` (esta placa usa `recovery-misc.img`) |
| `recovery` | 10 M | — | Sistema de recuperação | `recovery.img` |
| `boot` | 11 M | — | Kernel + DTB | `boot.img` |
| `rootfs` | 3 G | — | Sistema de arquivos raiz, ext4 | `rootfs.img` |
| `userdata` | Espaço restante | — | ext4, montado em `/userdata` | `userdata.img` |

Os tipos de sistema de arquivos são especificados por `RK_PARTITION_FS_TYPE_CFG=rootfs@IGNORE@ext4,userdata@/userdata@ext4`: `rootfs` não é montado explicitamente no fstab (o kernel o monta com `root=PARTUUID=`), enquanto `userdata` é montado em `/userdata`.

Linha de comando do kernel a partir de `chosen/bootargs` em `rv1126b-recamera2-v1.dts`:

```text
earlycon=uart8250,mmio32,0x20810000 console=ttyFIQ0 rw root=PARTUUID=614e0000-0000 rootfstype=ext4 rootwait snd_soc_core.prealloc_buffer_size_kbytes=16 coherent_pool=32K
```

O tamanho da CMA é controlado por `RK_BOOTARGS_CMA_SIZE="8M"`.

## Permitir que o Host Detecte o Dispositivo (Configuração Única)

A ferramenta de gravação se comunica via USB Rockusb e precisa de uma regra udev (VID `2207` é Rockchip):

```bash
sudo cp tools/linux/Linux_Upgrade_Tool/88-rockusb.rules /etc/udev/rules.d/
sudo udevadm control --reload-rules
sudo udevadm trigger
```

`tools/linux/SocToolKit/` também inclui `88-rockusb.rules` e `38-disk.rules`; instale ambas ao usar a ferramenta GUI.

## Entrar no Modo de Gravação

O dispositivo deve estar em modo **Maskrom** ou **Loader** para que o `upgrade_tool` o detecte:

- **Maskrom:** desligue completamente o dispositivo, então mantenha pressionado o botão Maskrom/Recovery enquanto o liga (ou faça curto entre o pino CLK do eMMC e o terra). O host deve mostrar um dispositivo Rockchip como `2207:xxxx` em `lsusb`.
- **Loader:** se um U-Boot funcional estiver instalado, execute `upgrade_tool db <loader>` ou interrompa a contagem regressiva do U-Boot para entrar no modo Loader.

> Verifique o manual de hardware ou o esquemático para a localização exata do botão e a serigrafia na reCamera Pro. Confirme isso em um dispositivo físico antes de adicionar detalhes aqui.

Verifique se o dispositivo foi detectado:

```bash
sudo tools/linux/Linux_Upgrade_Tool/upgrade_tool ld
```

`ListDevice` deve mostrar dispositivos em modo de gravação.

## Gravar com `rkflash.sh` (Recomendado)

O script `./rkflash.sh` na raiz do SDK encapsula o `upgrade_tool`; os caminhos das imagens são fixos em `output/image/`.

```bash
sudo ./rkflash.sh              # Same as all: flash every partition
sudo ./rkflash.sh all
sudo ./rkflash.sh loader
sudo ./rkflash.sh uboot
sudo ./rkflash.sh boot         # Flash the kernel only
sudo ./rkflash.sh rootfs       # Flash the root filesystem only
sudo ./rkflash.sh userdata
sudo ./rkflash.sh recovery
sudo ./rkflash.sh misc
sudo ./rkflash.sh trust
sudo ./rkflash.sh rd           # Reboot the device only
sudo ./rkflash.sh erase        # Erase the entire flash
```

O segundo argumento pode especificar um caminho de imagem personalizado:

```bash
sudo ./rkflash.sh boot /path/to/my_boot.img
```

A sequência real de comandos para o modo `all` (veja `project/rkflash.sh`) é:

```text
upgrade_tool ul -noreset download.bin     # Download loader without resetting
upgrade_tool di -p parameter.txt          # Write partition table
upgrade_tool di -uboot uboot.img
upgrade_tool di -m misc.img
upgrade_tool di -r recovery.img
upgrade_tool di -b boot.img
upgrade_tool di -rootfs rootfs.img
upgrade_tool di -userdata userdata.img
upgrade_tool rd                           # Reset and reboot
```

**Dois pontos importantes de atenção:**

- O branch de gravação de `update.img` em `rkflash.sh` está **comentado**, então `./rkflash.sh update` não faz nada. Para gravar o pacote completo, execute `upgrade_tool uf` diretamente.
- O modo `all` não grava `env.img`; ele grava apenas `parameter.txt`. Se você alterou `RK_PARTITION_CMD_IN_ENV`, execute manualmente `upgrade_tool di -p env.img` ou grave `update.img` com `uf`.

## Usar `upgrade_tool` Diretamente

Versão da ferramenta v2.26 (`tools/linux/Linux_Upgrade_Tool/revision.txt`). Comandos comuns:

| Comando | Finalidade |
| --- | --- |
| `ld` | ListDevice: lista dispositivos em modo de gravação |
| `cd <n>` | ChooseDevice: seleciona um dispositivo quando vários estão conectados |
| `ul <loader> [-noreset] [EMMC]` | UpgradeLoader: faz download do loader para a memória |
| `db <loader>` | DownloadBoot |
| `uf <update.img> [-noreset]` | UpgradeFirmware: grava o pacote completo |
| `di -p [parameter.txt]` | Grava a tabela de partições |
| `di -b [boot.img]` | Grava a partição boot |
| `di -rootfs [rootfs.img]` | Grava a partição rootfs |
| `di -u [userdata.img]` | Grava a partição userdata |
| `di -r [recovery.img]` | Grava a partição recovery |
| `di -m [misc.img]` | Grava a partição misc |
| `pl` | PartitionList: lê a tabela de partições do dispositivo |
| `ef [loader|firmware]` | EraseFlash: apaga a flash |
| `rd` | ResetDevice: reinicia |
| `sn [serial-number]` / `rsn` | Grava / lê o número de série (com `project/app/recamera_utils/sn_tool`) |
| `sfi [firmware]` | ShowFirmwareInfo: mostra informações do firmware |
| `exf [firmware|loader] [dir]` | ExtractFirmware: extrai uma imagem ou loader |
| `gpt [parameter] [out.gpt]` | Gera GPT a partir da tabela de partições |
| `rl [startSec] [len] [file]` / `wl [startSec] [sizeSec] [file]` | Lê / grava dados LBA |

Exemplo:

```bash
cd tools/linux/Linux_Upgrade_Tool
sudo ./upgrade_tool ld
sudo ./upgrade_tool ul ../../../output/image/download.bin
sudo ./upgrade_tool uf ../../../output/image/update.img
sudo ./upgrade_tool rd
```

Para detalhes completos dos comandos, consulte `命令行开发工具使用文档.pdf` e `readme.txt` no mesmo diretório.

## Gravação via GUI

- **Linux:** `tools/linux/SocToolKit/SocToolKit` (GUI em Qt; instale primeiro `38-disk.rules` e `88-rockusb.rules`).
- **Windows:** baixe o Rockchip RKDevTool separadamente; o SDK **não** inclui a ferramenta para Windows.

## Criar uma Imagem de Fábrica

```bash
./build.sh factory
```

Isso usa `tools/linux/SocToolKit/bin/linux/programmer_image_tool` para descompactar `output/image/update.img` em `output/image/factory/`. O tipo de imagem é selecionado a partir de `RK_BOOT_MEDIUM` (definido como `emmc` para esta placa). Mídias NAND também passam parâmetros de bloco/página/OOB, que podem ser sobrescritos com `RK_NAND_BLOCK_SIZE` e variáveis relacionadas.

## Imagem de Atualização via Cartão SD

```bash
./build.sh sdcard_upgrade
```

O diretório de saída é `output/image/sdcard_upgrade/`.

> **Não disponível para esta configuração de placa:** `sdcard_upgrade` requer `RK_SDCARD_UPGRADE_UBOOT_DEFCONFIG` e `..._FRAGMENT`, mas nenhuma das variáveis está definida em `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk`. `check_config` em `build.sh` ignora silenciosamente o comando com `return 0`. Para habilitar atualizações via cartão SD, adicione ambas as variáveis à configuração da placa (geralmente também `RK_SDCARD_UPGRADE_SCREEN_ENABLE`).

## Fluxo de Boot e Recuperação

- `RK_ENABLE_RECOVERY=y`, `RK_MISC=recovery-misc.img`: a partição misc contém a flag de boot de recuperação.
- A recuperação é acionada escrevendo a flag em misc e reiniciando, ou disparando-a a partir de uma aplicação de camada superior (fluxo de OTA).
- `RK_OTA_RESOURCE="boot.img rootfs.img"`: OTA atualiza apenas as partições boot e rootfs.
- O reset de fábrica usa o mecanismo de flag fornecido por `RK_ENABLE_OTA=y` (o comentário na configuração da placa diz “Used for set/get factory reset flag”).

Veja [OTA e Lançamentos de Firmware](/pt-br/recamera_pro_bsp_ota_release/) para detalhes.

## Verificar Após a Gravação

Conecte o console serial após ligar o dispositivo (1500000 8N1; veja [Acesso ao Dispositivo e Depuração](/pt-br/recamera_pro_bsp_device_debug/)). Você deve ver os logs de boot de U-Boot → kernel → rootfs, seguidos pelo banner ASCII da reCamera de `overlay-buildroot-banner/etc/motd`.

Após abrir um shell, verifique:

```bash
# cat /proc/version              # Kernel 6.1.157
# uname -m                       # aarch64
# cat /proc/cmdline              # Should match bootargs in the DTS
# cat /etc/os-release            # Buildroot version information
# ls /oem /userdata              # Confirm partitions are mounted
# cat /run/board_id.env          # Baseboard / expansion-board detection result
```

## Problemas Comuns

| Sintoma | Causa | Solução |
| --- | --- | --- |
| `upgrade_tool ld` não lista o dispositivo | Regra udev ausente / não está em modo de gravação / não foi executado como root | Instale a regra e execute `udevadm trigger`; confirme o modo Maskrom; execute com `sudo` |
| `Permission denied` ao executar `upgrade_tool` | Permissão de execução foi perdida durante a extração | Execute `chmod +x tools/linux/Linux_Upgrade_Tool/upgrade_tool` |
| Nenhuma saída serial após a gravação; o sistema não inicia | Loader/idblock não foi gravado ou as versões não correspondem | Execute `rkflash.sh all` novamente e confirme que `download.bin` e `idblock.img` vieram da mesma build |
| Kernel panic ao montar o rootfs | `boot.img` e `rootfs.img` vieram de builds diferentes | Recompile tudo e grave novamente, ou pelo menos grave boot e rootfs juntos |
| Problemas após alterar os tamanhos das partições | env / parameter não foi atualizado | Grave `env.img` (`di -p`) separadamente ou grave `update.img` com `uf` |
| `./rkflash.sh update` não faz nada | O branch está comentado | Use `upgrade_tool uf output/image/update.img` |

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