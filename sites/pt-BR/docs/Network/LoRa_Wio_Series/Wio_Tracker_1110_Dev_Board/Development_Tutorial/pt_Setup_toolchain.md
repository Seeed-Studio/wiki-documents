---
description: Configure_the_Parameters_of_Wio_Tracker_1110
title: Configure sua cadeia de ferramentas
keywords:
  - Tracker
  - Wio
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /setup_toolchain_for_wio_tracker
last_update:
  date: 9/19/2023
  author: Jessie
createdAt: '2023-09-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/setup_toolchain_for_wio_tracker/
---


A placa de desenvolvimento Wio Tracker 1110 utiliza Arduino para aprimorar sua experiência de programação; antes de iniciar o desenvolvimento, é necessário configurar primeiro sua cadeia de ferramentas.

### Configure sua cadeia de ferramentas

#### Instalar o Arduino IDE

O Arduino IDE (Ambiente de Desenvolvimento Integrado) é um software de código aberto, usado principalmente para escrever, compilar e enviar código para quase todos os módulos Arduino.
Ele está disponível para todos os sistemas operacionais, ou seja, MAC, Windows, Linux, e é executado na plataforma Java, que vem com funções e comandos integrados que desempenham um papel vital na depuração, edição e compilação do código.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-wio.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download do Arduino IDE </font></span></strong>
    </a>
</div>

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

#### Adicionar placa Seeed

Navegue até `Arduino IDE` -> `Preferences`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/arduino-add.png" alt="pir" width={800} height="auto" /></p>

Copie esta URL para `Additional boards manager URLs` e, em seguida, clique em `OK`.

```cpp
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/copy-urls.png" alt="pir" width={800} height="auto" /></p>

Clique em `Board Manager`.
Pesquise `Seeed nRF52 Boards` e instale.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-boa.png" alt="pir" width={800} height="auto" /></p>

Depois, é necessário selecionar a placa e a porta.<br/>
Pesquise `Seeed Wio Tracker 1110` e selecione-a, escolha a porta e clique em `OK`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port.png" alt="pir" width={800} height="auto" /></p>

:::info
A porta deve ser algo como “Serial Port(USB)”
:::

#### Exemplos do Wio Tracker 1110

A SenseCAP fornece `Wio Tracker 1110 Examples` para que os usuários possam começar rapidamente.

Navegue até a guia `File`, selecione `Example` -> `Wio Tracker 1110 Examples` e, em seguida, escolha o que você precisa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/example.png" alt="pir" width={800} height="auto" /></p>

### Adicionar bibliotecas

No Arduino IDE, você pode pesquisá-la no `Library Manager`, por exemplo `Seeed_Arduino_AHT20`, e então instalá-la.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/install-lib.png" alt="pir" width={800} height="auto" /></p>
<details>
<summary>Clique para visualizar a instalação offline</summary>

Para instalá-la *offline*, você pode **baixar o arquivo zip do repositório** no GitHub, navegar até **Sketch** -> **Include Library** -> **Add .ZIP Library** e, em seguida, selecionar as bibliotecas que você baixou.

<div align="center"><img width={680} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_32.png"/></div>

</details>

:::note Bibliotecas para referência
[Adafruit TinyUSB Library for Arduino](https://github.com/adafruit/Adafruit_TinyUSB_Arduino)<br/>
[Adafruit SPI Flash](https://github.com/adafruit/Adafruit_SPIFlash)<br/>
[Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR)<br/>
[Sensirion I2C SGP41 Arduino Library](https://github.com/Sensirion/arduino-i2c-sgp41)<br/>
[Sensirion I2C SHT4X Arduino Library](https://github.com/Sensirion/arduino-i2c-sht4x)<br/>
[Sensirion Gas Index Algorithm Arduino Library](https://github.com/Sensirion/arduino-gas-index-algorithm)
:::
