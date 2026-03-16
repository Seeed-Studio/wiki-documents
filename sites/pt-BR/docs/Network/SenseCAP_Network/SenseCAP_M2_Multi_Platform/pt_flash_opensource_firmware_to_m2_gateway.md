---
description: Este wiki irá guiá-lo sobre como gravar firmware LoRaWAN® de código aberto no seu gateway M2. Com base no firmware LoRaWAN® de código aberto, você pode personalizar profundamente o seu gateway M2.
title: Gravar Firmware Open Source no Gateway M2
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp
slug: /flash_opensource_firmware_to_m2_gateway
last_update:
  date: 4/22/2025
  author: Leo
createdAt: '2024-12-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/flash_opensource_firmware_to_m2_gateway/
---

Os gateways SenseCAP M2 representam uma solução econômica para gateways LoRa, alimentados pela solução de hardware madura MT7628 e pelo chip baseband Long Range Semtech SX1302. Os modelos específicos são diferenciados pela banda de frequência configurada de fábrica (EU868/US915/AS923/AU915), módulo opcional (4G/GPS) e rede LoRa suportada (rede LoRaWAN®/Helium)

Este wiki irá guiá-lo sobre como gravar firmware de código aberto no seu gateway M2. Com base no firmware de código aberto, você pode personalizar profundamente o seu gateway M2, como adicionar recursos adicionais ou alterar a banda de operação (as antenas precisam ser adaptadas à banda)

:::danger Aviso
Após gravar o firmware de código aberto, você **NÃO PODE** reverter para o **firmware de fábrica**.

A Seeed studio **NÃO é responsável** por qualquer dano ao dispositivo causado pelo usuário **ao usar firmware de código aberto ou firmware de terceiros**.
:::

## Lista de Produtos Suportados

- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html" target="_blank"><span> <b>M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-4G-EU868-p-5599.html" target="_blank"><span> <b>M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302-4G)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5339.html" target="_blank"><span> <b>M2 Data-Only LoRaWAN Indoor Gateway(SX1302)</b></span></a>

:::note
Devido a variações de hardware, gravar o M2 gateway para Helium (modelos: `114992751`, `114992752`, `114992755`, `114992808`, `114992826`, `114992828`) com firmware de código aberto requer não apenas a imagem do firmware, mas também o carregador U-Boot correspondente. Para instruções detalhadas, consulte a seção **Flash the U-Boot**.
:::

## Prepare o firmware

### Baixe o firmware pré-compilado

Se você quiser experimentar o firmware de código aberto de forma conveniente, nós fornecemos alguns firmwares compilados. Você pode baixar em <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT/releases" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT/Release</span></a>

:::tip Nota
Verifique o sufixo do arquivo .bin para confirmar se o firmware é compatível com o seu gateway M2

Por exemplo, o firmware **openwrt-...-EU868-4G.bin** é compilado para gateways M2 operando na **banda EU868 com um módulo 4G**
:::

### Compile seu firmware

Se o seu gateway não for compatível com o nosso firmware pré-compilado ou se você quiser desenvolvê-lo ainda mais, você pode compilar o seu próprio firmware da seguinte forma

Para compilar o seu próprio firmware você precisa de um sistema **GNU/Linux, BSD ou MacOSX** (é necessário um sistema de arquivos sensível a maiúsculas e minúsculas). Cygwin não é suportado devido à falta de um sistema de arquivos sensível a maiúsculas e minúsculas

**Passo 1:** clone o código-fonte de <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT</span></a>

```git
git clone https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT.git
```

**Passo 2:** Instale os pacotes pré-requisitos consultando <a  href="https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem" target="_blank"><span> Build system setup</span></a>

:::caution Nota
Execute os seguintes passos com um usuário **não-root**.
:::

**Passo 3:** Vá para a pasta do código-fonte, execute `./scripts/feeds update -a` para obter todas as definições de pacotes mais recentes definidas em feeds.conf / feeds.conf.default

**Passo 4:** Execute `./scripts/feeds install -a` para instalar links simbólicos para todos os pacotes obtidos em package/feeds/

**Passo 5:** Execute `cp diffconfig-sensecap-general .config` para usar o arquivo diff do SenseCAP, e execute `make defconfig` para expandir a configuração completa

**Passo 6:** Execute `make menuconfig` para selecionar as informações de hardware do seu SenseCAP

- SenseCAP Hardware->Have 4G ( Se contém hardware 4G)

- SenseCAP Hardware->Have GPS ( Se contém hardware GPS)

- SenseCAP Hardware->REGION (selecione sua REGIÃO padrão)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource2.png" alt="pir" width={800} height="auto" /></p>

**Passo 7:** Execute `make` para compilar o seu firmware

Isso irá baixar todos os fontes, compilar a ferramenta de cross-compilação e então cross-compilar o kernel GNU/Linux e todos os aplicativos escolhidos para o seu sistema de destino

Após a compilação, você poderá encontrar o firmware chamado `openwrt-21.02.0-ramips-mt76x8-sensecap_wm7628n-squashfs-sysupgrade.bin` no diretório `<prj>/bin/targets/ramips/mt76x8/`

## Gravar o firmware

Você pode gravar o firmware no seu gateway de uma das três maneiras

### Gravar firmware via Luci

Faça login no Luci e navegue até **System** > **Backup/Flash Firmware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource5.png" alt="pir" width={800} height="auto" /></p>

Role para baixo e navegue até **Local upgrade** e clique em **Flash image...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource6.png" alt="pir" width={800} height="auto" /></p>

Navegue pelas pastas e envie o firmware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource7.png" alt="pir" width={800} height="auto" /></p>

Quando o envio estiver completo, confirme que as informações do firmware enviado estão corretas e clique em **Continue**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource8.png" alt="pir" width={800} height="auto" /></p>

Depois disso, o gateway começará a instalar o firmware e o LED entrará no estado de piscar lentamente em laranja até que a instalação seja concluída.

### Gravar firmware via TFTP

Antes de começar, você precisará instalar a ferramenta de servidor TFTP no seu computador e colocar o firmware no diretório apropriado.

**Passo 1:** Use um cabo Type-C para conectar o dispositivo ao computador, e use um cabo de rede para colocar o dispositivo e o computador na mesma LAN.

**Passo 2:** Conecte-se ao dispositivo usando a porta serial chamada `USB-SERIAL CH340` com **baudrate 57600**.

**Passo 3:** Reinicie o dispositivo. Quando o dispositivo entrar no uboot, **selecione o comando 2** para entrar na atualização do sistema.

**Passo 4:** Insira o **ip do dispositivo**, onde o segmento de rede do ip do dispositivo deve ser o segmento de rede da sua própria rede; insira o **ip do servidor**, que é o IP do seu computador, e insira **o nome do firmware** a ser gravado (o sufixo do arquivo deve ser incluído).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource3.png" alt="pir" width={800} height="auto" /></p>

**Passo 5:** Aguarde a conclusão da atualização do firmware. O gateway começará a instalar o firmware e o LED entrará no estado de piscar lentamente em laranja até que a instalação seja concluída.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource4.png" alt="pir" width={800} height="auto" /></p>

### Gravar firmware via Serial

:::tip
Antes de começar o passo a seguir, recomendamos baixar a versão mais recente do [TeraTerm](https://github.com/TeraTermProject/teraterm/releases), pois as operações a seguir neste wiki são todas baseadas no TeraTerm.
:::

**Passo 1:** Use um cabo Type-C para conectar o dispositivo ao computador.

**Passo 2:** Conecte-se ao dispositivo usando a porta serial chamada `USB-SERIAL CH340` com **baudrate 57600**.

**Passo 3:** Reinicie o dispositivo. Quando o dispositivo entrar no uboot, **selecione o comando 0** para entrar na atualização do sistema.

**Passo 4:** Altere o buadrate para 230400, então pressione ENTER. O dispositivo irá então exibir `Ready for binary (kermit) download to 0x80100000 at 230400 bps...`

**Passo 5:** Envie o firmware usando o protocolo kermit. O Teraterm fornece uma ferramenta de transmissão kermit. Você pode consultar a imagem abaixo para enviar o firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource12.png" alt="pir" width={800} height="auto" /></p>

**Passo 6:** Aguarde o término do envio do firmware, após o qual o dispositivo exibirá `Switch baudrate to 57600 bps and press ESC...`. Siga as instruções do dispositivo. Em seguida, o dispositivo irá instalar o firmware automaticamente e reiniciar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource11.png" alt="pir" width={800} height="auto" /></p>

## Gravar o U-Boot

:::note
Ao gravar o firmware de código aberto no Helium M2 LoRaWAN Indoor Gateway, certifique-se também de [Download](https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/uboot_v1.1.3-8-general.bin) e gravar a imagem U-Boot correspondente no dispositivo. Este passo é necessário para que o gateway funcione corretamente.
:::

### Gravar firmware via Serial

**Passo 1:** Use um cabo Type-C para conectar o dispositivo ao computador.

**Passo 2:** Conecte-se ao dispositivo usando a porta serial chamada `USB-SERIAL CH340` com **Baudrate 57600**.

**Passo 3:** Reinicie o dispositivo. Quando o dispositivo entrar no U-Boot, selecione `Command 7` para entrar na atualização do sistema.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/flash_uboot_1.png" alt="pir" width={800} height="auto" /></p>

**Passo 4:** Envie o firmware usando o protocolo kermit. O Teraterm fornece uma ferramenta de transmissão kermit. Você pode consultar a imagem abaixo para enviar o U-Boot.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource12.png" alt="pir" width={800} height="auto" /></p>

**Passo 5:** Aguarde o término do processo de gravação e reinicie o dispositivo. Quando o dispositivo entrar no U-Boot, selecione `Command 4` para entrar no comando U-Boot. Em seguida, insira `spi erase 0x50000 0x1FB0000` para apagar o bloco a seguir.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/flash_uboot_2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/flash_uboot_3.png" alt="pir" width={800} height="auto" /></p>

Depois você pode reiniciar o dispositivo e gravar a imagem do firmware conforme indicado na seção **Flash the firmware**.

## Fazer login no Console

Depois que o firmware for instalado, o dispositivo abrirá automaticamente um hotspot AP, com o nome **SenseCAP_XXXX**

Use seu telefone ou computador para se conectar ao hotspot, sem senha

Digite **192.168.168.1** no navegador para entrar na interface LuCI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource9.png" alt="pir" width={800} height="auto" /></p>

Faça login no console com o nome de usuário **root** e **sem senha**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource10.png" alt="pir" width={800} height="auto" /></p>

## Recursos

- \[**Website**\] <a  href="https://koen.vervloesem.eu/blog/how-to-install-alternative-firmware-to-the-sensecap-m2-data-only-lorawan-indoor-gateway/" target="_blank"><span> Como instalar firmware alternativo no SenseCAP M2 Data Only LoRaWAN Indoor Gateway - Por Koen Vervloesem</span></a>
- \[**Website**\] <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> GitHub-Seeed-Solution/Lora_Gateway_OpenWRT</span></a>
- \[**Website**\] <a  href="https://openwrt.org/" target="_blank"><span> Site oficial do OpenWrt</span></a>
- \[**PDF**\] <a  href="https://files.seeedstudio.com/products/SenseCAP/M2OpensourceHarewareDescription.pdf" target="_blank"><span> Descrição de Hardware do Gateway M2</span></a>

## Suporte Técnico

**Está tendo problemas com o firmware open source? Sinta-se à vontade para discutir isso com membros da comunidade através do link do Discord abaixo.**

<div class="button_tech_support_container">
<a href="https://discord.gg/nFByJZnC5H" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
