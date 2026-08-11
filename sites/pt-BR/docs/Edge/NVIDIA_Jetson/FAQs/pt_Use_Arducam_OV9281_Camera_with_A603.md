---
description: usar câmeras Arducam Jetvariety (OV9281) com a placa carrier A603 Jetson no JetPack 6.2
title: Usar câmera Arducam OV9281 (Jetvariety) com a placa carrier A603 Jetson
keywords:
  - reComputer
  - Arducam
  - OV9281
  - Jetvariety
  - A603
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /use_arducam_ov9281_camera_with_a603_jetson_carrier_board
last_update:
  date: 07/08/2026
  author: Jonathan van der Maas
---

As câmeras Arducam Jetvariety oferecem suporte oficial à placa carrier do kit de desenvolvimento NVIDIA, não à A603, e o overlay do instalador da Arducam não funciona na A603. A própria câmera funciona bem assim que você cria uma pequena device tree personalizada. Esta página documenta a configuração funcional para a Arducam OV9281 (B0223) no JetPack 6.2 (L4T R36.4.3), os motivos pelos quais o overlay padrão falha e uma armadilha que pode desativar todas as portas USB da placa.

Resultado: OV9281 em `/dev/video0`, formatos GREY / Y10 / Y16 em 1280x800, 1280x720 e 640x400, até 80 fps, com disparo externo disponível.

## Por que o overlay da própria Arducam não pode funcionar na A603

1. O único conector CSI da A603 é o `serial_a` no i2c-2 (`i2c@3180000`). O overlay do kit de desenvolvimento da Arducam conecta seus nós de sensor a `serial_b`/`serial_c` sob um nó `cam_i2cmux`, um mux que nunca é instanciado nesta placa, então os nós de sensor nunca são sondados. Não há mensagem de erro; a câmera simplesmente nunca aparece.
2. O controlador Jetvariety responde no endereço i2c `0x0c`. Verifique com `i2cdetect -y -r 2`.
3. O BSP da A603 traz seu próprio kernel recompilado e reutiliza os nomes de arquivo de device tree da NVIDIA, então a árvore que deve ser modificada é a da A603, não a de um kit de desenvolvimento.

## Segurança de boot em primeiro lugar

:::caution
O instalador da Arducam adiciona uma entrada de boot (comumente rotulada `JetsonIO`) que emparelha o kernel deles com a device tree do kit de desenvolvimento. Inicializar essa entrada na A603 desativa todas as portas USB, incluindo a rede USB gadget e qualquer teclado. O menu de boot UEFI/extlinux da A603 não aceita entrada de teclado, então o que quer que `DEFAULT` aponte em `/boot/extlinux/extlinux.conf` é o que inicializa, sempre. Nunca deixe `DEFAULT` apontando para uma entrada não testada. A recuperação desse estado exige inicializar em RCM o initrd de gravação a partir de outra máquina (jumper de recuperação nos pinos 3 e 4 de W7).
:::

Antes de experimentar, faça backup do kernel e do DTB originais e considere instalar um timer do systemd que redefina `DEFAULT` para uma entrada conhecida e funcional cerca de 180 segundos após cada boot, a menos que exista um arquivo de sinalização de manutenção:

```bash
# /usr/local/sbin/a603-boot-revert.sh
#!/bin/sh
[ -e /etc/a603-keep-boot-default ] && exit 0
sed -i 's/^DEFAULT .*/DEFAULT seeed/' /boot/extlinux/extlinux.conf
```

Fluxo de trabalho para qualquer experimento de boot: remova a sinalização de manutenção, aponte `DEFAULT` para a entrada experimental e reinicie. Se funcionar, crie novamente a sinalização de manutenção. Se a placa se tornar inacessível, desligue e ligue a alimentação e ela voltará sozinha para a entrada conhecida e funcional.

## A configuração funcional

Entrada de boot em `/boot/extlinux/extlinux.conf`:

```
LABEL arducam
      MENU LABEL Arducam kernel + A603 sensor-swapped DTB
      LINUX /boot/arducam/Image
      FDT /boot/kernel_a603-arducam.dtb
      APPEND ${cbootargs} root=/dev/nvme0n1p1 rw rootwait rootfstype=ext4 ...
```

- Kernel: o da Arducam, do pacote `arducam-nvidia-l4t-kernel` (o instalador deles o baixa). Ele contém o driver Jetvariety `arducam-csi2`.
- DTB: personalizado, compilado conforme descrito abaixo. Observe que a linha `FDT` no extlinux substitui o DTB da partição nesta placa.

### Estratégia de device tree: trocar o sensor, manter todo o resto

Enxertar o grafo de câmera da Arducam na árvore da A603 falha por incompatibilidades de phandle e de cabeamento. O que funciona é o oposto: manter o grafo de câmera completo e correto da A603 (canal CSI, cabeamento VI, portas e endpoints, phandles, tudo construído para o IMX219 que a placa suporta de fábrica) e trocar apenas a identidade do nó do sensor:

1. Descompile o DTB padrão da A603: `dtc -I dtb -O dts -o seeed.dts <stock DTB>`
2. Descompile qualquer DTB que contenha o bloco de sensor da Arducam (por exemplo, a partir do overlay deles) para obter seu nó `mode0`
3. Em `seeed.dts`, dentro de `i2c@3180000`, substitua o nó `rbpcv2_imx219_a@10` por um nó `arducam_a@0c`:
   - `compatible = "arducam,arducam-csi2"`, `reg = <0x0c>`, `sensor_model = "arducam-csi2"`, `use_sensor_mode_id = "true"`
   - mantenha o `devnode`, `reset-gpios`, `phandle` originais e todo o bloco `ports` literalmente; isso mantém todos os phandles válidos
   - insira o bloco `mode0` da Arducam com `tegra_sinterface` alterado para `"serial_a"`
4. Inverta o GPIO hog `cam0-rst` de `output-low` para `output-high` (a árvore padrão mantém a câmera em reset)
5. Atualize as strings de caminho e `__symbols__` de `tegra-camera-platform` de `.../rbpcv2_imx219_a@10` para `.../arducam_a@0c`
6. Recompile e instale: `dtc -I dts -O dtb -o /boot/kernel_a603-arducam.dtb a603-arducam.dts`

Um script Python que realiza essa transformação automaticamente está disponível [neste repositório](https://github.com/vdmaas98/a603-arducam).

Assinatura de sucesso no dmesg:

```
arducam-csi2 2-000c: firmware version: 0x10003
arducam-csi2 2-000c: Sensor ID: 0x9281
arducam-csi2 2-000c: sensor arducam-csi2 2-000c registered
```

## Verifique o cabo flat antes de depurar o software

Se o sensor não responder no i2c, verifique primeiro a camada física:

- Na extremidade da câmera, os contatos dourados do cabo flat devem ficar voltados para longe da PCB da câmera, e ambas as travas devem estar totalmente e uniformemente fechadas.
- Um diagnóstico decisivo é o teste de alimentação na extremidade livre: encaixe o cabo apenas na A603, deixe a extremidade da câmera solta, ligue a placa e meça os contatos mais externos da extremidade solta com um multímetro. Ler 3,3 V prova que a placa, o cabo e a orientação na extremidade da placa estão todos corretos, isolando qualquer falha restante para a extremidade da câmera.
- Cabo: 22 pinos, tipo A (contatos dourados na mesma face em ambas as extremidades), ligação direta.

## Captura

:::note
A exposição e o ganho padrão do driver produzem quadros pretos, o que parece exatamente uma câmera quebrada. Defina os controles na mesma invocação de `v4l2-ctl` que a captura, porque os valores são redefinidos toda vez que um novo fluxo é aberto.
:::

```bash
v4l2-ctl -d /dev/video0 --set-fmt-video=width=1280,height=800,pixelformat=GREY \
  --set-ctrl exposure=10000 --set-ctrl analogue_gain=400 \
  --stream-mmap --stream-count=10 --stream-to=/tmp/frames.raw
```

Faixas: `exposure` de 1 a 65523, `analogue_gain` de 100 a 1500. Também disponíveis: `trigger_mode` (disparo externo), `frame_rate` de 5 a 80, espelhamento horizontal e vertical.

Embora a abordagem tenha sido testada com a OV9281 B0223, ela deve se aplicar a outros módulos Jetvariety na A603, já que o projeto Jetvariety coloca a lógica de modo no controlador onboard da câmera em vez da device tree.


<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
