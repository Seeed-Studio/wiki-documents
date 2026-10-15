---
description: Crie imagens OTA e de fábrica, prepare arquivos de release e verifique os registros de versão de release.
title: Releases de OTA e Firmware
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_ota_release
sku: 10003420
sidebar_position: 11
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_bsp_ota_release/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Releases de OTA e Firmware

## Onde encontrar a versão

| Local | Valor | Descrição |
| --- | --- | --- |
| Configuração da placa `RK_OTA_VERSION` | `V1.0.10` | Gravado em `/etc/ota_version` no rootfs durante o empacotamento |
| Nome do arquivo compactado | `recamera-pro-sdk-v1.0.10` | Nome do pacote de distribuição |
| Dispositivo `/etc/ota_version` | Igual ao acima | Versão reportada em tempo de execução |
| Dispositivo `/bin/sdkinfo` | Hora da compilação / Versão do SDK / BoardConfig | Gerado por `build.sh` durante o empacotamento |
| `project/cfg/BoardConfig_Recamera2/RECAMERA2-IPC-RELEASE-NOTES.md` | Registro de alterações | Atualmente contém apenas `v0.0.1 - init`; **mantenha-o atualizado** |

Verifique a versão no dispositivo:

```bash
# cat /etc/ota_version
# /bin/sdkinfo
```

A saída de `/bin/sdkinfo` se parece com isto:

```sh
#!/bin/sh
echo Build Time:  2026-08-28-09:28:00
echo SDK Version: NONE
echo SDK BoardConfig: BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk
```

> O snapshot de código-fonte atual não inclui `.repo/`, portanto a Versão do SDK em `sdkinfo` pode aparecer como `NONE`. Consulte [Revisão do código-fonte e problemas conhecidos](/pt-br/recamera_pro_sdk_source_notes/) para a explicação baseada no código-fonte. Verifique a versão do dispositivo usando tanto `/etc/ota_version` quanto o registro de compilação.

Para cada release, **atualize tanto** `RK_OTA_VERSION` na configuração da placa quanto `RECAMERA2-IPC-RELEASE-NOTES.md`.

## Mecanismo de OTA

### Configuração relacionada

```bash
export RK_ENABLE_RECOVERY=y
export RK_MISC=recovery-misc.img
export RK_OTA_RESOURCE="boot.img rootfs.img"
export RK_ENABLE_OTA=y          # Comment: Used for set/get factory reset flag
```

Portanto, o OTA atualiza **apenas as partições `boot` e `rootfs`**. Ele não atualiza o U-Boot, idblock, env ou userdata. Isso é intencional: atualizações de bootloader e da tabela de partições trazem mais risco, e os dados do usuário devem ser preservados.

### Criar um pacote OTA

```bash
./build.sh all        # First create boot.img and rootfs.img under output/image/
./build.sh ota
ls -lh output/image/update_ota.tar
```

### Conteúdo do pacote e script de atualização

`build_ota()` gera `RK_OTA_update.sh` e o empacota com as imagens em `update_ota.tar` usando `tar -cvhf` (observe que `-h` segue links simbólicos). O ramo de eMMC do script é:

```sh
#!/bin/sh
set -e
COMMON_DIR=`dirname $(realpath $0)`
TOP_DIR=$(realpath $COMMON_DIR/../..)
cd $TOP_DIR
echo "Start to write partitions"
for image in $(ls /dev/block/by-name)
do
    if [ -f $COMMON_DIR/${image}.img ]; then
        echo "Writing $image..."
        dd if=$COMMON_DIR/${image}.img of=/dev/block/by-name/$image || exit 1
    fi
done
echo "Erase misc partition"
dd if=/dev/zero of=/dev/block/by-name/misc bs=32 count=1 seek=512 || exit 2
```

Pontos principais:

- O script itera sobre cada partição em `/dev/block/by-name/` e **grava uma partição se o arquivo compactado contiver uma imagem com o mesmo nome**. Adicione uma imagem a `RK_OTA_RESOURCE` para incluí-la no pacote OTA; o próprio script não precisa ser alterado.
- Ele limpa o flag na partição misc ao final (offset 512 blocos de 32 bytes), para que o próximo boot não entre novamente em recovery.
- Com `RK_ENABLE_RECOVERY=y`, o script é empacotado usando `-C $OTA_SCRIPT_PATH RK_OTA_update.sh`.
- Mídias NAND usam um ramo diferente com `flash_eraseall` + `nandwrite -p`. Esta placa usa eMMC, portanto esse ramo não se aplica.

### Fluxo de OTA (conceitual)

```text
Application downloads update_ota.tar → extracts it to a directory
        ↓
Write the recovery flag to the misc partition (RK_ENABLE_OTA provides set/get factory-reset flag interfaces)
        ↓
Reboot → U-Boot reads misc → enters recovery
        ↓
Recovery runs RK_OTA_update.sh → writes boot/rootfs with dd → clears the misc flag
        ↓
Reboot into the new system → verify with cat /etc/ota_version
```

Compile a imagem de recovery separadamente com `./build.sh recovery` (`RK_KERNEL_RECOVERY_DEFCONFIG=rv1126b_ipc_defconfig` mais o fragmento `rv1126b-recovery.config`); o conteúdo do ramdisk fica em `output/out/ramdisk/`.

> O **código da aplicação de camada superior** que aciona o recovery e o OTA está em `recamera_ipc` / `recamera_services` (as ações “Firmware Update” e “Factory Reset” da interface Web). Esta página cobre apenas o empacotamento do lado do SDK. As chamadas específicas de API ainda precisam ser verificadas em um dispositivo.

### Restauração de fábrica

O comentário para `RK_ENABLE_OTA=y` diz que ele fornece funções de set/get de flag de restauração de fábrica. Na prática, uma restauração de fábrica grava um flag em misc e limpa ou recria `userdata`. Os dados do usuário residem em `/userdata`, incluindo `/userdata/config/rkipc.ini`, `/userdata/config/system/login_lock.json` e `eth0_dns_mode`; uma restauração de fábrica redefine essas configurações.

## Imagem completa de firmware

```bash
./build.sh updateimg     # Package all partition images as output/image/update.img
./build.sh unpackimg     # Extract update.img
```

Use `update.img` com:

```bash
sudo tools/linux/Linux_Upgrade_Tool/upgrade_tool uf output/image/update.img
```

> `./rkflash.sh update` **não funciona** porque esse ramo está comentado no script. Use `upgrade_tool uf` diretamente.

## Imagem de fábrica

```bash
./build.sh factory
ls output/image/factory/
```

Internamente, isso chama `tools/linux/SocToolKit/bin/linux/programmer_image_tool -i output/image/update.img -o output/image/factory/ -t emmc`. O tipo de imagem é determinado por `RK_BOOT_MEDIUM`. Mídias NAND usam `-b <blockKB> -p <pageKB> [-s <oobB>]`; substitua os padrões (0x20000 / 2048 / 128) com `RK_NAND_BLOCK_SIZE`, `RK_NAND_PAGE_SIZE` e `RK_NAND_OOB_SIZE`.

## Arquivos de release: `save` / `allsave`

```bash
./build.sh save          # Create an archive
./build.sh save xml      # Generate only the repo manifest XML, then exit
./build.sh allsave       # all + save; default when ./build.sh is run without arguments
```

`build_save()` constrói o caminho do arquivo compactado e o converte para **maiúsculas**:

```text
IMAGE/<application-scenario>_<boot-medium>_<power-scheme>_<hardware-version>_<YYYYMMDD.HHMM>_RELEASE_TEST/
```

Para esta configuração de placa, o caminho se parece com:

```text
IMAGE/IPC_64BIT_EMMC_RK801_RV1126B_V1_20260828.0928_RELEASE_TEST/
├── IMAGES/                        # All contents of output/image/
├── PATCHES/                       # Patches and repo information (__GET_REPO_INFO)
├── DEBUG_FILES/
│   ├── kernel/vmlinux.tar.bz2     # Unstripped kernel for crash analysis
│   ├── media_out.tar.bz2          # Complete media outputs
│   ├── app_out.tar                # Complete application outputs
│   └── uboot/uboot.debug.tar.bz2
└── build_info.txt                 # BUILD-ID: <hostname>:<user> + build_info output
```

> `build_save()` converte o caminho do arquivo compactado para maiúsculas, portanto o diretório é chamado **`IMAGE/`**, como mostrado no guia de início rápido do SDK.
>
> O sufixo é sempre `_RELEASE_TEST`, mesmo para um release de produção real. Para diferenciar builds de produção e de teste, renomeie o arquivo compactado ou registre o status em `build_info.txt`.

`DEBUG_FILES` são essenciais para investigar problemas em campo. **Mantenha o arquivo compactado para cada release externo**, especialmente `vmlinux`, que é necessário para decodificar pilhas de chamadas de panic do kernel.

## Registrar informações e configuração da compilação

`./build.sh info` imprime:

- O caminho real do `BOARD_CONFIG` atual
- Todas as variáveis de ambiente `RK_*` não vazias, ordenadas
- A saída de `make info` dos SDKs de componentes sysdrv, media e app
- Resultados da verificação de domínio de energia (`build_check_power_domain`)

Anexe essa saída ao registro de release para evitar ter que adivinhar depois como o firmware foi compilado.

```bash
./build.sh info > release_info_$(date +%Y%m%d).txt 2>&1
```

`build_info()` também tenta criar um link ou copiar `project/cfg/BoardConfig_Recamera2/RK-RELEASE-NOTES-Recamera2.txt` para a raiz do SDK se esse arquivo existir. O arquivo atual se chama `RECAMERA2-IPC-RELEASE-NOTES.md`, o que **não corresponde** ao padrão `RK-RELEASE-NOTES-<board-name>.txt` que o script procura, portanto ele não será promovido automaticamente. O `RECAMERA2-IPC-RELEASE-NOTES.md` no nível da raiz é um link simbólico para ele.

## Checklist de release

### Antes da compilação

- [ ] Sincronize os repositórios `git` / internos para a tag de destino e confirme que a árvore de trabalho está limpa.
- [ ] Atualize `RK_OTA_VERSION` na configuração da placa.
- [ ] Atualize `RECAMERA2-IPC-RELEASE-NOTES.md` com as alterações deste release (ele atualmente contém apenas `v0.0.1 - init`; mantenha-o atualizado).
- [ ] Execute `./build.sh lunch` e selecione `BoardConfig_Recamera2/BoardConfig-EMMC-RK801-RV1126B_V1-IPC_64BIT.mk`.
- [ ] Execute `./setup_build_env.sh --check`; confirme que nenhuma ferramenta está faltando.

### Compilação

- [ ] Execute `./build.sh clean` ao alternar versões ou configurações de placa.
- [ ] Execute `./build.sh allsave` e mantenha o log de compilação.
- [ ] Verifique se `boot.img` é menor que 11 M e `rootfs.img` é menor que 3 G em `output/image/`.
- [ ] Confirme que `IMAGE/.../build_info.txt` foi gerado.

### Verificação

- [ ] Grave uma placa limpa com `sudo ./rkflash.sh all` e confirme que ela inicializa até o banner.
- [ ] Confirme o nome do BoardConfig em `/bin/sdkinfo` e verifique se `cat /etc/ota_version` corresponde à nova versão.
- [ ] Vídeo: confirme que a interface Web exibe vídeo e que o go2rtc WebRTC em `:8555` consegue receber um stream.
- [ ] Inferência de IA: confirme que o modelo NPU é carregado e que `recamera_notify` recebe e encaminha eventos.
- [ ] Áudio: verifique se `ai_debug` consegue gravar quatro canais e se o alto-falante emite áudio.
- [ ] OTA: faça upgrade a partir do release anterior usando `update_ota.tar` e confirme que a configuração em `/userdata` é preservada.
- [ ] Restauração de fábrica: confirme que o dispositivo retorna à sua configuração padrão.
- [ ] Estabilidade: execute os testes de estresse relevantes em `media/samples/example/test/` e `recamera_utils/stress_test/`.
- [ ] Watchdog: confirme que um teste de longa duração não aciona um reset (`S15watchdog`, timeout de 30 segundos).

### Arquivamento

- [ ] Envie todo o diretório `IMAGE/`, incluindo `DEBUG_FILES/`, para o repositório interno de artefatos.
- [ ] Registre juntos `update.img`, `update_ota.tar`, a versão e o SHA-256.
- [ ] Anexe a saída de `./build.sh info` ao registro de release.

## Referência Rápida de Comandos

| Comando | Saída |
| --- | --- |
| `./build.sh firmware` | Imagens de partição em `output/image/` |
| `./build.sh updateimg` | `output/image/update.img` |
| `./build.sh ota` | `output/image/update_ota.tar` |
| `./build.sh factory` | `output/image/factory/` |
| `./build.sh recovery` | `output/image/recovery.img` |
| `./build.sh save` | `IMAGE/<...>_RELEASE_TEST/` |
| `./build.sh info` | Imprime a configuração atual; não grava nenhum arquivo |
| `./build.sh unpackimg` | Extrai `update.img` |

## Documentos Relacionados

- `docs/en/Rockchip_User_Guide_SDK_Application_And_Synchronization_EN.pdf`: aplicação e sincronização do SDK (solicitar atualizações de SDK da Rockchip)
- `docs/en/Rockchip_User_Guide_Bug_System_EN.pdf`: registrar problemas junto à Rockchip
- `docs/zh/ipc/Rockchip_RV1126B_Linux_IPC_SDK_Release_V1.0.0_20250620_CN.pdf`: notas de versão do SDK upstream
- `project/cfg/BoardConfig_IPC/RK-RELEASE-NOTES-IPC.txt`: formato de notas de versão para a placa de referência Rockchip IPC; use como modelo para manter `RECAMERA2-IPC-RELEASE-NOTES.md`

## Suporte Técnico e Discussão de Produtos

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>