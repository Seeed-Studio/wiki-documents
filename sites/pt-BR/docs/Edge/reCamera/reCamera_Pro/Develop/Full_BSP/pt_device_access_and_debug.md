---
description: Manter o dispositivo e depurar firmware personalizado usando o console serial, SSH, logs e ferramentas de rede.
title: Acesso ao Dispositivo e Depuração
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - BSP
  - Linux
  - Firmware
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_bsp_device_debug
sku: 10003420
sidebar_position: 7
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_bsp_device_debug/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Acesso ao Dispositivo e Depuração

Esta página resume os canais de depuração **realmente incluídos** no firmware. As informações vêm da configuração de overlay da placa em `project/cfg/BoardConfig_Recamera2/overlay/`. Canais podem ser adicionados ou removidos com a opção `RK_POST_OVERLAY`; consulte [Customização do Sistema (DTS / Kernel / Buildroot / Overlay)](/pt-br/recamera_pro_bsp_system_customization/).

## Visão Geral dos Canais

| Canal | Porta | Habilitado por | Finalidade |
| --- | --- | --- | --- |
| Console serial | `ttyFIQ0`, **1500000** 8N1 | U-Boot `CONFIG_BAUDRATE` | Logs de boot, interação com U-Boot, recuperação |
| SSH | 22 | `overlay-buildroot-sshd` (`S50sshd`) | Canal principal de desenvolvimento |
| Terminal web ttyd | **7681** | `overlay-buildroot-ttyd` (`S50ttyd`) | Abrir um shell em um navegador |
| Logs via WebSocket | **8765** (apenas loopback) | `overlay-buildroot-log` (`S10log`) | Ver logs em tempo real na interface web |
| go2rtc API | **1984** (apenas 127.0.0.1) | `overlay-buildroot-go2rtc` (`S50go2rtc`) | API de gerenciamento de streams |
| go2rtc WebRTC | **8555** | Igual ao acima | Receber streams WebRTC |
| go2rtc RTSP | **554** (habilitado conforme necessário) | Igual ao acima | RTSP externo |
| RTSP interno rkipc | **5554** (127.0.0.1) | `recamera_ipc` | Fonte upstream para go2rtc |
| vsftpd | 21 | `overlay-buildroot-vsftpd` (`S70vsftpd`) | Transferência de arquivos |

## Console Serial

O U-Boot define `CONFIG_BAUDRATE=1500000` (`sysdrv/source/uboot/u-boot/configs/rv1126b_recamera2_defconfig:162`). A linha de comando do kernel usa `console=ttyFIQ0` e `earlycon=uart8250,mmio32,0x20810000`.

```bash
# On the host (USB-to-serial adapter)
picocom -b 1500000 /dev/ttyUSB0
# Or
minicom -D /dev/ttyUSB0 -b 1500000
```

A taxa de baud é **1500000**, não os comuns 115200. Uma taxa de baud incorreta produz saída ilegível.

O console serial é o único canal disponível quando o sistema não consegue inicializar. Use-o para depurar problemas de inicialização, como kernel panics, falhas de montagem da rootfs e inicialização da DDR.

## SSH

Configurações principais em `overlay-buildroot-sshd/etc/ssh/sshd_config`:

```text
PermitRootLogin yes
PasswordAuthentication yes
AuthorizedKeysFile  .ssh/authorized_keys
UsePAM yes
UseDNS no
Subsystem sftp /usr/libexec/sftp-server
```

Por padrão, **login de root por senha está habilitado**, e autenticação por chave pública também é suportada. SFTP está disponível para transferências de arquivos.

```bash
ssh root@<device-IP>
scp my_app root@<device-IP>:/userdata/
sftp root@<device-IP>
```

### Bloqueio por Falha de Login (PAM)

`overlay-buildroot-sshd/usr/libexec/ssh-login-lock.py` usa PAM para proteger contra tentativas de força bruta:

- Após **5 falhas consecutivas** (`MAX_ATTEMPTS = 5`), a conta é bloqueada por **300 segundos** (`LOCKOUT_SECONDS = 300`).
- As tentativas são contadas por IP do cliente (`PAM_RHOST`), usando `/proc/uptime` como base de tempo, portanto **um reboot limpa o contador**.
- Arquivo de estado: `/userdata/config/system/login_lock.json`; o arquivo de bloqueio associado é `login_lock.json.lock`.

Se for bloqueado, aguarde 300 segundos, reinicie ou faça login pelo console serial e remova `/userdata/config/system/login_lock.json`.

## Terminal Web (`ttyd`)

`overlay-buildroot-ttyd/oem/usr/etc/init.d/S50ttyd` inicia:

```text
ttyd -p 7681 /oem/usr/bin/ssh-login-whitelist.sh
```

Abra `http://<device-IP>:7681` em um navegador; será solicitado um nome de usuário. O script wrapper `ssh-login-whitelist.sh` permite apenas usuários em sua lista de permissão e então executa `exec ssh <user>@localhost`:

```bash
ALLOWED_USERS=("root" "admin")
```

Em outras palavras, **ttyd é efetivamente um cliente SSH no navegador**. A autenticação ainda usa SSH (incluindo a política de bloqueio PAM acima); usuários fora da lista de permissão são rejeitados. Para adicionar um usuário, edite o array `ALLOWED_USERS` e reconstrua a rootfs, ou edite o script diretamente no dispositivo (`/oem` pode precisar ser remontado se estiver somente leitura).

## Sistema de Logs

O firmware possui três camadas de logging. Entender seus papéis pode economizar tempo de depuração.

### 1. syslog-ng (`overlay-buildroot-syslog-ng/etc/syslog-ng.conf`, @version 3.38)

| Saída | Caminho / destino | Formato |
| --- | --- | --- |
| `d_Recamera2` | `/var/log/Recamera2.log` | JSON: `{"sTimestamp","sLevel","sData"}` |
| `d_Recamera2_developer` | `/var/log/Recamera2_developer.log` | Texto: `ISODATE HOST PROGRAM[PID]: [LEVEL] MESSAGE` |
| `d_python_udp` | UDP `127.0.0.1:5140` | Encaminhado para o serviço de log via WebSocket |

Os arquivos de log pertencem a `root:adm` com permissões `0640`. Para depuração, comece com `Recamera2_developer.log` (legível por humanos); use `Recamera2.log` (JSON) para análise programática.

```bash
# tail -f /var/log/Recamera2_developer.log
# tail -n 200 /var/log/Recamera2.log
```

### 2. Serviço de Log via WebSocket (`overlay-buildroot-log/oem/usr/bin/websocket_log.py`)

`S10log` inicia o serviço com python3:

- Escuta em UDP `127.0.0.1:5140` por mensagens encaminhadas pelo syslog-ng.
- Fornece um serviço WebSocket na porta **8765**, vinculado a `127.0.0.1` (`SERVER_IP = "127.0.0.1"`).
- Mantém as últimas **2000** mensagens em memória (`MAX_LOG_SIZE = 2000`).

Como ele se vincula ao loopback, encaminhe a porta via SSH para acessá-lo a partir do host:

```bash
ssh -L 8765:127.0.0.1:8765 root@<device-IP>
# Then connect a browser or script to ws://localhost:8765
```

O painel de log em tempo real da interface web usa esse caminho.

### 3. Console Serial / `dmesg`

Mensagens do kernel são enviadas para `console=ttyFIQ0`. No dispositivo, use `dmesg` para inspecionar o buffer de anel do kernel.

## Streams de Vídeo (go2rtc)

Configuração padrão em `overlay-buildroot-go2rtc/oem/usr/etc/go2rtc/go2rtc.yaml`:

```yaml
streams:
  main:
    - rtsp://127.0.0.1:5554/live/0
  sub:
    - rtsp://127.0.0.1:5554/live/1
api:
  listen: "127.0.0.1:1984"
webrtc:
  listen: ":8555"
rtsp:
  listen: ""        # Not listening by default
```

A arquitetura é: **`recamera_ipc` (rkipc) fornece uma fonte RTSP interna em 127.0.0.1:5554 → go2rtc puxa o stream e o expõe por protocolos como WebRTC/HLS**. `main` é o stream principal e `sub` é o substream.

### A Porta RTSP Externa é Configurada Dinamicamente

Quando `S50go2rtc` inicia, ele lê `/userdata/config/rkipc.ini` e decide se expõe RTSP em `:554`, usando esta ordem de prioridade:

1. Verificar `enable=1` em `[video.0.rtsp]`.
2. Caso contrário, verificar `enable=1` em `[video.0.onvif]`.
3. Caso contrário, verificar `enable=1` em `[video.1.rtsp]`.
4. Se nenhum estiver habilitado, não abrir a porta RTSP; usar apenas a configuração padrão.

Quando o RTSP está habilitado, ele **copia** o YAML padrão para `/tmp/go2rtc/go2rtc.yaml` e adiciona `rtsp: listen: ":554"`. Se `authtype=1`, também inclui o `username` e `password` do arquivo INI. Isso evita modificar a configuração padrão no diretório somente leitura `/oem`.

Comandos úteis de depuração:

```bash
# cat /userdata/config/rkipc.ini | grep -A5 '\[video.0.rtsp\]'
# cat /tmp/go2rtc/go2rtc.yaml          # Active configuration
# cat /var/run/go2rtc.pid
# /oem/usr/etc/init.d/S50go2rtc restart
```

Após alterar as chaves RTSP / ONVIF em `rkipc.ini`, reinicie o go2rtc para que ele regenere a configuração.

URLs de stream (quando RTSP está habilitado):

```text
rtsp://<user>:<pass>@<device-IP>:554/...
http://<device-IP>:8555/            # WebRTC
```

O caminho da URL depende do nome do stream no go2rtc (`main` / `sub`). Adicione um exemplo completo depois de verificá-lo em um dispositivo.

## FTP (`vsftpd`)

`overlay-buildroot-vsftpd/etc/vsftpd.conf` configura a porta 21, `local_enable=YES`, `write_enable=YES`, `chroot_local_user=YES` e `ssl_enable=NO`. A lista de usuários é `root` e `admin`.

O diretório de configuração é oculto e o acesso é negado:

```text
hide_file={config,*/config,config_tar,*/config_tar}
deny_file={config,*/config,config_tar,*/config_tar}
```

Como resultado, `/userdata/config` não é visível via FTP. Este é um design de produto intencional; a configuração deve ser alterada pela interface web ou API. Use SSH/SFTP em vez de FTP durante a depuração.

## Variáveis de Ambiente e Convenções de Diretório

`overlay-buildroot-rkenv/etc/profile.d/RkEnv.sh` define estas variáveis para shells de login:

```bash
export OEM_HOME=/oem
export PATH=$PATH:/oem:/oem/bin:/oem/usr/bin:/oem/sbin:/oem/usr/sbin
export LD_LIBRARY_PATH=/oem/usr/lib:/oem/lib:$LD_LIBRARY_PATH
export HOME=/userdata
```

Isso significa:

- **`/oem`** contém aplicações e bibliotecas da Seeed / Rockchip (incluindo `go2rtc`, o wrapper `ttyd`, `websocket_log.py` e `librknnrt.so`).
- **`/userdata`** é gravável e armazena configuração (`/userdata/config/`) e dados do usuário. Também é o `HOME` padrão.
- Seu programa cross-compilado pode carregar bibliotecas em `/oem/usr/lib` por meio de `LD_LIBRARY_PATH`. Se ele for executado a partir de um script de init, certifique-se de que o ambiente esteja definido ali também.

## Outros Serviços Integrados

| Script | Finalidade |
| --- | --- |
| `overlay-buildroot-board-id/etc/init.d/S00board-id` | Executa cedo durante o boot e lê o ADC (`/sys/bus/iio/devices/iio:device0`) para identificar o modelo da placa base e da placa de expansão; grava o resultado em `/run/board_id.env`. Faz a média de três amostras com tolerância de 440. Os níveis de tensão são 0.0/0.3/0.6/0.9/1.2/1.5/1.8 V e mapeiam para `V0.9`–`V1.5` e `TYPE0`–`TYPE6`. |
| `overlay-buildroot-hwclock/etc/init.d/S20hwclock` | Executa `hwclock --hctosys --utc` na inicialização para sincronizar a partir do RTC e grava a hora de volta no desligamento. |
| `overlay-buildroot-watchdog/etc/init.d/S15watchdog` | Inicia o watchdog de hardware com `watchdog -T 30 -t 15 /dev/watchdog` (timeout de 30 s, intervalo de keepalive de 15 s); grava `V` em `/dev/watchdog` ao parar para desativá-lo. |
| `overlay-buildroot-udhcpc/usr/share/udhcpc/default.script` | Script DHCP personalizado que grava `/tmp/resolv.conf.<iface>` por interface e os mescla em `/etc/resolv.conf` com **eth0 tendo prioridade**; suporta um marcador de modo DNS manual em `/userdata/config/system/eth0_dns_mode`. |
| `overlay-buildroot-banner` | Logo ASCII da reCamera em `/etc/motd`; `/etc/profile.d/banner.sh` o imprime apenas em sessões interativas não-SSH. |

> O comentário em `S20hwclock` diz que o RTC armazena hora local, mas o comando usa `--utc`; estes indicam convenções de horário diferentes. Se um desvio de relógio corresponder ao fuso horário, investigue isso primeiro. **Verifique em um dispositivo.**

Observação sobre o watchdog: `-T 30` significa que **qualquer operação bloqueante que impeça o processo do watchdog de atualizá‑lo por mais de 30 segundos pode causar um hard reset**. Se você precisar de um breakpoint longo durante a depuração, pare `S15watchdog` primeiro.

## Enviar arquivos para o dispositivo sem regravar o firmware

Esta é uma das operações mais comuns no desenvolvimento do dia a dia. Três opções:

```bash
# 1. scp (simplest)
scp output/out/app_out/bin/hello_world root@<device-IP>:/userdata/

# 2. Batch transfer with sftp
sftp root@<device-IP> <<< $'put output/out/app_out/bin/hello_world /userdata/'

# 3. adb (only if adbd is enabled in the firmware) — verify on a device
adb push output/out/app_out/bin/hello_world /userdata/
```

Copie arquivos para `/userdata` em vez de `/oem`: `/oem` geralmente vem de uma imagem somente leitura, enquanto `/userdata` é gravável.

```bash
# ssh root@<device-IP>
# chmod +x /userdata/hello_world && /userdata/hello_world
```

Se o programa não conseguir encontrar uma biblioteca compartilhada, primeiro verifique se `LD_LIBRARY_PATH` inclui `/oem/usr/lib`, ou execute `ldd /userdata/hello_world` para identificar a biblioteca ausente. Consulte [Choose a Development Path](/pt-br/recamera_pro_dev_path/).

## Diagnosticar a configuração de rede

```bash
# ip addr                          # Check whether eth0 / wlan0 received an address
# cat /etc/resolv.conf             # Generated by udhcpc; eth0 takes priority when merging
# cat /tmp/resolv.conf.eth0        # Per-interface file
# cat /userdata/config/system/eth0_dns_mode   # Check for manual DNS mode
# netstat -tlnp                    # Check whether ports such as 22/7681/21/8555 are listening
```

O Wi‑Fi é habilitado por `RK_ENABLE_WIFI=y` + `RK_ENABLE_WIFI_CHIP=AP6XXX`; o aplicativo está em `project/app/wifi_app`.

## Checklist de cinco minutos para uma nova placa

1. Conecte o console serial em 1500000 e confirme que os logs de boot e o banner da reCamera aparecem.
2. Execute `ip addr` para obter o endereço IP e, em seguida, confirme que `ssh root@<IP>` funciona.
3. Verifique com `cat /proc/version` se o kernel é 6.1.157 e com `uname -m` se é `aarch64`.
4. Execute `ls /oem/usr/lib | head` e confirme que bibliotecas de aplicação como `librknnrt.so` estão presentes.
5. Execute `netstat -tlnp` e confirme que go2rtc (8555), ttyd (7681) e sshd (22) estão escutando.
6. Execute `tail -f /var/log/Recamera2_developer.log` para inspecionar os logs da aplicação.
7. Verifique `cat /run/board_id.env` para confirmar que os IDs da placa base e da placa de expansão foram detectados corretamente.

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