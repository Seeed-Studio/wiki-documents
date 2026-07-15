---
description: EdgeBox RPi 200 com módulo LoRaWAN®
title: EdgeBox RPi 200 com módulo LoRaWAN®
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /EdgeBox-rpi-200-with-LoRaWAN-module
last_update:
  date: 7/14/2023
  author: Peter Pan
createdAt: '2023-06-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/EdgeBox-rpi-200-with-LoRaWAN-module/
---

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

A série EdgeBox-RPi-200 são controladores industriais de computação de borda tudo-em-um baseados em Raspberry Pi, que combinam múltiplos propósitos industriais. Projetados como hardware industrial robusto e com alta escalabilidade, montados com ricos recursos de IO e suportados pelo excelente ecossistema de software industrial Raspberry Pi, são uma escolha ideal para automação inteligente e soluções de Internet Industrial das Coisas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

## Módulo WM1302 LoRaWAN

> LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
A marca LoRa® é uma marca comercial da Semtech Corporation ou de suas subsidiárias.

:::note
        Lançamos recentemente a série Wio-E5 com base no módulo Wio-E5. Clique [aqui](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) para conhecer os novos membros da família LoRa-E5, desde o [Wio-E5 Module](https://wiki.seeedstudio.com/pt-br/LoRa-E5_STM32WLE5JC_Module/) [módulo Grove](https://wiki.seeedstudio.com/pt-br/Grove_LoRa_E5_New_Version/), [placas mini Dev](https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/) até o [Development Kit](https://wiki.seeedstudio.com/pt-br/LoRa_E5_Dev_Board/). Para saber mais sobre como criar um nó final LoRaWAN® com o pacote STM32Cube MCU para a série STM32WL (SDK), para ingressar e enviar dados para a rede LoRaWAN®, leia mais nas páginas wiki das [placas mini Dev](https://wiki.seeedstudio.com/pt-br/LoRa_E5_mini/) e do [Development Kit](https://wiki.seeedstudio.com/pt-br/LoRa_E5_Dev_Board/).
:::

O módulo WM1302 é um módulo de gateway LoRaWAN® de nova geração com formato mini-PCIe. Baseado no chip LoRaWAN® de banda base Semtech® SX1302, o WM1302 libera maior capacidade potencial de transmissão sem fio de longa distância para produtos de gateway. Ele apresenta maior sensibilidade, menor consumo de energia e menor temperatura de operação do que os chips LoRa® SX1301 e SX1308 anteriores.

O módulo de gateway WM1302 LoRaWAN® possui versões SPI e USB em ambas as bandas de frequência US915 e EU868, permitindo que você tenha uma ampla gama de opções de planos de frequência LoRaWAN® para escolher, incluindo EU868, US915, AS923, AS920, AU915, KR920 e IN865.

O módulo WM1302 possui certificação CE, FCC e Telec, o que ajuda a simplificar o processo de desenvolvimento e certificação dos dispositivos gateway LoRaWAN®.

O WM1302 é projetado para aplicações M2M e IoT e pode ser amplamente aplicado em cenários suportados por gateway LPWAN. Ele seria uma escolha perfeita para você reduzir significativamente as dificuldades técnicas e o tempo de desenvolvimento ao criar dispositivos gateway LoRa®, incluindo gateway LoRaWAN®, hotspots etc.

## Instalação de hardware

**Passo 1:** Desmonte o Edgebox-RPI-200

**Passo 2:** Coloque o módulo LoRaWAN® no slot mini-PCIe

**Passo 3:** Reimporte o Edgebox-RPI-200 e depois ligue a alimentação

**Passo 4:** Siga os passos abaixo de acordo com a versão do seu módulo:

:::note
Os passos a seguir exigem acesso direto ao sistema operacional do Edgebox-RPI-200, portanto, escolha um método de conexão, como usar ssh ou usar display, mouse e teclado com o `Terminal APP`, de acordo com sua preferência.
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="WM1302 USB Module" label="Módulo WM1302 USB">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114992991-wio-wm1302-lorawan-gateway-module-_spi_---us915-m---first.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

No Terminal APP ou na sua ferramenta de linha de comando preferida

**Passo 5.** digite `sudo raspi-config` na linha de comando para abrir a ferramenta Raspberry Pi Software Configuration:

- Selecione Interface Options
- Selecione I2C e, em seguida, selecione **Yes** para habilitá-lo
- Selecione Serial Port, depois selecione **No** para "Would you like a login shell..." e selecione **Yes** para "Would you like the serial port hardware..."

Depois disso, reinicie o Raspberry Pi para garantir que essas configurações funcionem.

**Passo 6.** Baixe o [código WM1302](https://github.com/Lora-net/sx1302_hal) e compile-o.

```sh
cd ~/
git clone https://github.com/Lora-net/sx1302_hal
cd sx1302_hal
sudo make
```

**Passo 7.** Copie o script reset_lgw.sh

```
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Passo 8.** substitua a porta USB do módulo LoraWAN® no arquivo de configuração `global_conf.json.sx1250.US915.USB`:

**Passo 8-1.**
Primeiro, para obter a porta USB específica, siga os passos abaixo:

```sh
lsusb
```

No meu caso, nosso WM1302 está usando a `STMicroelectronics Virtual COM Port`, então podemos obter o product id `5740`

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device.png"/></div>

**Passo 8-2.**

Em seguida, obtenha o dispositivo USB com o número Product ID `5740`. Neste caso, obtemos o número da porta USB `1-1.3`:

```sh
sudo dmesg | grep 5740
```

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-1.png"/></div>

Então podemos obter a porta do dispositivo como a seguir:

```sh
sudo dmesg | grep 1-1.3
```

então, no meu caso, o dispositivo USB é `ttyACM0`

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/find-lora-device-2.png"/></div>

Então vamos modificar o dispositivo USB na configuração `global_conf.json.sx1250.US915.USB` com o comando sed `sed -i 's/search_string/replacement_string/g' filename`, portanto siga o padrão `sed -i 's/ttyACM0/the_result_from_above' global_conf.json.sx1250.frequency_of_your_module.USB`. Observe que você deve substituir `the_result_from_above` e `frequency_of_your_module` pela sua própria aplicação:

por exemplo, no meu caso:

```sh
sed -i 's/ttyACM0/ttyACM0/g'  global_conf.json.sx1250.US915.USB
```

**Passo 9.** Inicie o módulo LoraWAN®

Em seguida, execute o seguinte código para iniciar o módulo LoraWAN® de acordo com a versão de frequência de operação do seu WM1302.

```sh
USB version
$ cd ~/sx1302_hal/packet_forwarder
$ ./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
```

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/Edge_Box/lora-activate.png"/></div>

Escolha seu servidor de rede Lora® preferido e use o `EUI ID` mostrado na imagem acima para configurar as conexões.

</TabItem>
<TabItem value="WM1302 SPI Module" label="Módulo WM1302 SPI">

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114992967-spi-us915.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-WM1302-LoRaWAN-Gateway-Module-SPI-US-915-p-5454.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

**Passo 5.** digite `sudo raspi-config` na linha de comando para abrir a ferramenta Rasberry Pi Software Configuration:

- Selecione Interface Options
- Selecione SPI e, em seguida, selecione **Yes** para habilitá-lo
- Selecione I2C e, em seguida, selecione **Yes** para habilitá-lo
- Selecione Serial Port, depois selecione **No** para "Would you like a login shell..." e selecione **Yes** para "Would you like the serial port hardware..."

Depois disso, reinicie o Raspberry Pi para garantir que essas configurações funcionem.

**Passo 6.** Baixe o [código-fonte WM1302](https://github.com/peterpanstechland/sx1302_hal.git) e compile-o.

:::note
Esta é uma versão modificada da biblioteca sx1302 hal, porque o sensor de temperatura do módulo WM1302 não é acessível no Edgebox-RPI-200, portanto, o código-fonte foi modificado de acordo, e a configuração de pinos no `reset_lgw.sh` também foi ajustada de forma correspondente.
:::

```sh
cd ~/
git clone https://github.com/peterpanstechland/sx1302_hal.git
cd sx1302_hal
git checkout Edgebox-RPI-200
sudo make
```

**Passo 7.** Copie o script reset_lgw.sh

```sh
cp ~/sx1302_hal/tools/reset_lgw.sh ~/sx1302_hal/packet_forwarder/
```

**Passo 8.** Inicie o módulo LoraWAN®

Em seguida, execute o seguinte código para iniciar o módulo LoraWAN® de acordo com a versão de frequência de operação do seu WM1302.

```sh
cd ~/sx1302_hal/packet_forwarder
./lora_pkt_fwd -c global_conf.json.sx1250.US915
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/reTerminalDM/interface/wm1302-spi.png"/></div>

Escolha seu servidor de rede Lora® preferido e use o `EUI ID` mostrado na imagem acima para configurar as conexões.

</TabItem>
</Tabs>

<!-- Code END -->

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
