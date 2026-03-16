---
description: Habilitar interface SPI no Jetson-Nano
title: Habilitar interface SPI no Jetson-Nano
keywords:
  - SPI
  - Jetson-nano
  - BSP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /enable_spi_interface_on_jetsonnano
last_update:
  date: 07/02/2025
  author: Dayu
createdAt: '2025-07-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/enable_spi_interface_on_jetsonnano/
---

## Introdução

O Jetson Nano possui duas interfaces SPI multiplexadas com GPIOs, mas o SPI não vem habilitado por padrão. Diferente de outras séries Jetson, como a Orin, que suportam habilitar o SPI por meio da ferramenta de configuração `/opt/nvidia/jetson-io/jetson-io.py`, este método **não é aplicável ao Jetson Nano**.

Esta seção usa o controlador **SPI1** como exemplo e fornece um método para habilitar a funcionalidade SPI no Jetson Nano. Observe que este método deve ser aplicado antes de gravar a imagem no dispositivo Jetson.

:::note
O método deste wiki deve ser aplicado antes de gravar a imagem no dispositivo Jetson.
:::

## Modificar o SPI e gravar a imagem

Primeiro, você precisa fazer um curto entre o pino `REC` e o pino `GND` no Jetson Nano para entrar no modo de recuperação. Em seguida, no seu PC host, prepare a imagem que você pretende gravar. No entanto, não a grave no Jetson Nano até que você tenha concluído as modificações do SPI.
Você pode consultar o [**tutorial de gravação do JetPack para o J101**](https://wiki.seeedstudio.com/pt-br/reComputer_J1010_J101_Flash_Jetpack/#:~:text=On%20the%20Linux%20host%20PC%2C%20we%20need%20to%20open%20a%20browser%20and%20go%20the%20Jetson%20Linux%20Archive.%20First%20we%20should%20check%20if%20the%20version%20of%20Jetson%20Linux%20is%20supported%20our%20reComputer%20Jetson%20module), e certificar‑se de usar apenas o método de linha de comando.

  Baixe a versão de sua escolha a partir do [NIVIDIA DEVELOPER](https://developer.nvidia.com/embedded/jetson-linux-archive#:~:text=Previous%20Jetson%20Linux%20Versions), incluindo o **BSP** e o **Simple Root Filesystem**.
Neste guia, usamos o **L4T 32.7.2** como exemplo.

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/source_nvidia_jetson-nao.png" /></div>

Coloque o **BSP** e o **Simple Root Filesystem** no mesmo diretório e, em seguida, siga as instruções abaixo para extraí‑los e executar o `apply_binaries.sh`:

```bash
tar xf Jetson-210_Linux_R32.7.2_aarch64.tbz2
cd Linux_for_Tegra/rootfs/
sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2
cd ..
sudo ./apply_binaries.sh
```

Crie um novo arquivo `.sh` no diretório **Linux_for_Tegra** e execute o script. O conteúdo do script é o seguinte:
<details>

<summary> modify_spi.sh </summary>

```shell
#!/bin/bash
set -e


cd "$(dirname "$0")"
cd kernel/dtb

DTS=tegra210-p3448-0002-p3449-0000-b00.dts
DTB=tegra210-p3448-0002-p3449-0000-b00.dtb


echo "📥 Decompiling $DTB to $DTS..."
sudo dtc -I dtb -O dts -o "$DTS" "$DTB"

fix_spi_node() {
    local node=$1
    if grep -A5 "$node {" "$DTS" | grep -q 'status'; then
        sudo sed -i "/$node {/,/spi-max-frequency/ s/status = \".*\";/status = \"okay\";/" "$DTS"
    else
        sudo sed -i "/$node {/,/spi-max-frequency/ s/compatible = \"tegra-spidev\";/&\n\t\tstatus = \"okay\";/" "$DTS"
    fi
}

echo "🔧 Enabling spi@0 and spi@1..."
fix_spi_node "spi@0"
fix_spi_node "spi@1"


patch_pin() {
    local pin=$1
    sudo sed -i "/${pin} {/,/nvidia,enable-input/ {
        s/nvidia,function = \"rsvd1\"/nvidia,function = \"spi1\"/
        s/nvidia,tristate = <0x01>/nvidia,tristate = <0x00>/
        s/nvidia,enable-input = <0x00>/nvidia,enable-input = <0x01>/
    }" "$DTS"
}

echo "🔧 Patching pinmux blocks..."
for pin in spi1_mosi_pc0 spi1_miso_pc1 spi1_sck_pc2 spi1_cs0_pc3 spi1_cs1_pc4; do
    patch_pin "$pin"
done

echo "🔧 Fixing tristate and input-enable for SPI1 pins..."


fix_pinmux_field() {
  local pin=$1
  awk -v pin="$pin" '
  BEGIN { in_block = 0 }
  {
    if ($0 ~ pin " {") {
      in_block = 1
    }
    if (in_block && /nvidia,tristate =/) {
      sub(/<0x1>/, "<0x0>")
    }
    if (in_block && /nvidia,enable-input =/) {
      sub(/<0x0>/, "<0x1>")
    }
    print
    if (in_block && /}/) {
      in_block = 0
    }
  }' "$DTS" | sudo tee "$DTS.fixed" > /dev/null && sudo mv "$DTS.fixed" "$DTS"
}

fix_pinmux_field "spi1_mosi_pc0"
fix_pinmux_field "spi1_miso_pc1"
fix_pinmux_field "spi1_sck_pc2"
fix_pinmux_field "spi1_cs0_pc3"
fix_pinmux_field "spi1_cs1_pc4"


echo "📦 Recompiling DTS to $DTB..."
sudo dtc -I dts -O dtb -o "$DTB" "$DTS"

echo "✅ SPI DTS patch applied and DTB regenerated successfully."
```

</details>

```bash
sudo bash modify_spi.sh
```

Após executar o `modify_spi.sh`. Este script irá atualizar a configuração do **SPI1** na device tree, recompilá‑la e sobrescrever a antiga. Se você quiser habilitar o **SPI2**, simplesmente substitua a palavra‑chave `spi1` por `spi2` no script `modify_spi.sh`.

Após modificar a device tree, grave a imagem no Jetson-Nano:

```bash
sudo ./flash.sh jetson-nano-emmc mmcblk0p1
```

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/flashing_over_jetson-nano.png" /></div>

Após a reinicialização, os pinos `SPI0_MOSI`, `SPI0_MISO`, `SPI0_CS0` e `SPI0_CS1` no conector de **40 pinos** estarão disponíveis para uso.

## Testando o SPI1 no Jetson-nano

Faça um curto entre o pino 19 e o pino 21, que correspondem respectivamente a `SPI0_MOSI` e `SPI0_MISO`, para executar um teste de loopback usando o controlador **SPI1**.
O datasheet do Jetson-Nano pode ser baixado e visualizado [aqui](https://developer.download.nvidia.com/assets/embedded/secure/jetson/Nano/docs/DA-09753-001_v1.0.pdf?__token__=exp=1751957680~hmac=6683559201b449f5191cbe0069e9299b1c3b373e82307d09a6a92d596bee4745&t=eyJscyI6ImdzZW8iLCJsc2QiOiJodHRwczovL3d3dy5nb29nbGUuY29tLyJ9
), em particular a **página 6**.
<div align="center"><img width="{200}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/40-pin_jetson-nano.jpg" /></div>

O diagrama de conexão física é mostrado abaixo:
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/real-connecr-spi.png
" /></div>

Carregue o módulo de driver SPI e, em seguida, baixe e compile o programa de teste:

```bash
sudo modprobe spidev
git clone https://github.com/rm-hull/spidev-test
cd spidev-test/
gcc spidev_test.c -o spidev_test
```

Execute o programa de teste e especifique `spidev0.0` (correspondente ao **SPI1**):

```bash
./spidev_test -v -D /dev/spidev0.0 -p "Test"
```

O resultado do teste é mostrado abaixo, indicando que o **SPI1** concluiu com sucesso a transmissão em loopback. Você também pode executar `ls /dev/spidev*` para verificar os controladores SPI disponíveis.
<div align="center"><img width="{400}" src="https://files.seeedstudio.com/wiki/reComputer_J2021/spi_res_jetson-nano.png
" /></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
