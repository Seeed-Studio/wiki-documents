---
description: utilize Embedded swift to work with XIAO ESP32C6
title: XIAO ESP32C6 with (Embedded) Swift
image: https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png
slug: /xiao-esp32-swift
sku: 113991254, 102010636, 101991470
last_update:
  date: 2024-07-12T02:50:00.462Z
  author: Spencer
createdAt: '2024-07-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao-esp32-swift/
---
# Guia de Swift Embarcado com Seeed Studio XIAO-C6

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/swift-xiao-esp32.png" alt="pir" width={600} height="auto" /></p>

## Introdução

A Seeed Studio XIAO ESP32C6 é uma placa de desenvolvimento poderosa e versátil, construída em torno do SoC ESP32-C6, com dois processadores **RISC-V** de 32 bits. O processador de alto desempenho opera a até 160 MHz, enquanto o processador de baixo consumo funciona a até 20 MHz. Com 512KB de SRAM e 4MB de Flash, a XIAO ESP32C6 oferece um espaço de programação significativo, tornando-a ideal para diversas aplicações de IoT. Esta placa se destaca em conectividade sem fio, oferecendo suporte a Wi‑Fi 6 de 2,4 GHz, Bluetooth® 5.3, Zigbee e Thread (802.15.4), e é nativamente compatível com Matter, o que é crucial para interoperabilidade em casas inteligentes.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32C6</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

[Swift](https://www.swift.org/) é uma linguagem de programação poderosa e intuitiva desenvolvida pela Apple Inc. para criar software para iOS, macOS, watchOS, tvOS e além. Na [WWDC2024](https://developer.apple.com/wwdc24/), a Apple anunciou o Embedded Swift, um projeto de código aberto que busca levar Swift para o mundo de sistemas embarcados e IoT. Ele permite usar Swift em microcontroladores sem sistema operacional e com recursos mínimos disponíveis. Atualmente, o repositório oficial swift-embedded-examples oferece suporte a plataformas de hardware STM32, Raspberry Pi Pico, Nordic Semiconductor e até mesmo RISC-V ESP32 (ESP32C6).

<div style={{ textAlign: 'center' }}>
<img width={680} src="https://user-images.githubusercontent.com/1186214/264192528-ec5673ba-eec5-422a-b28c-8c0a1e814d1c.png" alt="Vision of Embedded Swfit " />

<div style={{ marginTop: '-8px' }}><em>Linguagem Swift</em></div>

</div>  

<br></br>

Swift Embarcado oferece várias vantagens:

- **Desempenho e Facilidade de Uso**: Ele oferece desempenho em nível de C/C++ enquanto mantém a sintaxe e os recursos fáceis de usar do Swift ([Swift Forums](https://forums.swift.org/t/accepted-a-vision-for-embedded-swift/68067)).
- **Integração com Bibliotecas e Frameworks**: A capacidade do Swift de vincular diretamente a bibliotecas C/C++ permite que desenvolvedores utilizem frameworks existentes de forma transparente ([GitHub](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)).
- **Familiaridade para Desenvolvedores**: Desenvolvedores já proficientes em Swift podem adotar rapidamente o Swift Embarcado em seus projetos, aproveitando APIs e ferramentas familiares ([Swift.org](https://www.swift.org/getting-started/embedded-swift/)).

:::tip Objetivos deste Guia

Nesta página, vamos abordar o seguinte:

- Como configurar o ambiente de desenvolvimento necessário.
- Executar um exemplo de pisca‑pisca baseado em GPIO.

:::

## Pré-requisitos

Para começar com Swift Embarcado na Seeed Studio XIAO-C6, você vai precisar das seguintes habilidades e configurações:

- **Seeed Studio XIAO-C6**: O hardware principal para este guia.
- **Cabo USB-C**: Para conectar a XIAO-C6 ao seu computador.
- **Um computador**: executando *Linux*, *macOS* ou Windows (usando **WSL2**).
- **[ESP-IDF](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/index.html)**: A versão 5.2 (*recomendada*) é necessária para desenvolver com ESP32-C6. Você pode baixá-la e instalá-la a partir do [site da Espressif](https://github.com/espressif/esp-idf).
- **[Swift Toolchain](https://www.swift.org/getting-started/embedded-swift/)**: Certifique-se de que o Swift 6.0 esteja instalado em seu computador. Ele pode ser obtido no site oficial do Swift ou por meio do gerenciador de pacotes do seu sistema operacional.

:::info Guia de Instalação

**Instalação do ESP-IDF:**

- Siga a página [Linux and macOS](https://docs.espressif.com/projects/esp-idf/en/release-v5.2/esp32/get-started/linux-macos-setup.html) para instalar o ESP-IDF
- Siga o guia [Developed on XIAO using Espressif ESP-IDF guide](/pt-br/xiao_idf) para etapas detalhadas.

**Instalação da Swift Toolchain:**

- Instale a toolchain Swift `release/6.0` a partir do [site oficial](https://www.swift.org/install/).

Se você preferir uma solução com Docker, consulte o [Dockerfile](https://github.com/apple/swift-matter-examples/blob/main/Dockerfile) do repositório `apple/swift-matter-examples/`
:::

Antes de prosseguir, certifique-se de ter todos os pré-requisitos necessários para uma configuração e um processo de desenvolvimento tranquilos.

:::caution atenção

Nesta página, vamos passar pela configuração e uso do Swift Embarcado no Ubuntu 22.04 Jammy Linux (WSL2).

:::

### Instalar ESP-IDF

```shell
#!/bin/bash
# Update and install required packages
sudo apt-get update
sudo apt-get install -y git wget flex bison gperf python3 python3-pip python3-venv python3.10-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0

# Clone the ESP-IDF repository
cd ~
git clone --recursive https://github.com/espressif/esp-idf.git --jobs 10
cd esp-idf
git checkout v5.2.1; git submodule update --init --recursive

# Run the install script for ESP-IDF
cd ~/esp-idf && ./install.sh

# Set up alias for ESP-IDF environment
echo 'alias get_idf=". ~/esp-idf/export.sh"' >> ~/.bashrc
source ~/.bashrc

echo "Installation complete. Use 'get_idf' to set up the ESP-IDF environment."
```

### Instalar Swift 6.0

você pode simplesmente executar este script para instalar o Swift 6.0.

```shell
#!/bin/bash
# Download the Swift 6.0 Snapshot
wget https://download.swift.org/swift-6.0-branch/ubuntu2204/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a/swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

# Extract the Tarball
tar -xvzf swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04.tar.gz

sudo mv swift-6.0-DEVELOPMENT-SNAPSHOT-2024-07-03-a-ubuntu22.04 $HOME/swift-6.0

# Update PATH
echo 'export PATH=$HOME/swift-6.0/usr/bin:$PATH' >> ~/.bashrc
source ~/.bashrc

# Verify Installation
swift --version

echo "Swift 6.0 installation complete."
```

## Execute seu primeiro programa Blink com Swift

### Etapa 1. Obter o exemplo

```shell showLineNumbers
get_idf #get idf enviorment
cd ~ && git clone https://github.com/apple/swift-embedded-examples.git #get GitHub repo
cd ~/swift-embedded-examples/esp32-led-blink-sdk
```

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/apple/swift-embedded-examples" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Repositório GitHub</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Etapa 2. Compilar o exemplo

Como o LED de usuário está conectado ao GPIO15, você precisará modificar o código para `let led = Led(gpioPin: 15)`:

```swift
@_cdecl("app_main")
func app_main() {
    print("Hello from Swift on ESP32-C6!")

    var ledValue: Bool = false
    let blinkDelayMs: UInt32 = 500
    let led = Led(gpioPin: 15)

    while true {
        led.setLed(value: ledValue)
        ledValue.toggle() // Toggle the boolean value
        vTaskDelay(blinkDelayMs / (1000 / UInt32(configTICK_RATE_HZ)))
    }
}
```

Em seguida, você pode compilar o firmware:

```shell
idf.py set-target esp32c6
idf.py build
```

:::info problema?
Se você encontrar o problema `/bin/sh: 1: -target: not found`, é possível resolvê-lo editando o arquivo `build.ninja` localizado na pasta de compilação.

Encontre a palavra‑chave `-target` e adicione a palavra‑chave `swiftc` antes dela, de forma que fique `swiftc -target ...`. Esse ajuste deve ajudar a resolver o problema.
:::

Agora podemos gravar o firmware no nosso XIAO C6, assim que você receber o aviso `Project build complete.`

### Etapa 3. Gravar o firmware

<details>
<summary>usbipd é necessário se estiver usando WSL2</summary>

Se você estiver trabalhando com WSL2, precisará ter o [usbipd](https://github.com/espressif/vscode-esp-idf-extension/blob/master/docs/WSL.md#usbipd) instalado.

Para instalar, use o Windows Package Manager com o comando:

```shell
winget install usbipd
```

Após a instalação, compartilhe o dispositivo USB usando:

```shell
usbipd list #Check BUSID
usbipd bind -b '<BUSID>'
```

Para anexar o dispositivo a partir do WSL2:

```shell
usbipd attach --wsl --busid=<BUSID>
```

Para ver qual porta está compartilhada:

```shell
dmesg | tail
# dmesg | tail -n 100 | sed -n 's/.*\(ttyACM[0-9]*\).*/\1/p'
```

</details>

Pressupondo que você tenha `ttyACM0` detectado, o comando será:

```shell
idf.py -p /dev/ttyACM0 flash monitor
```

*Este comando irá:*

1. Gravar o firmware no dispositivo conectado a ttyACM0.
2. Iniciar o monitoramento da saída serial do dispositivo, exibindo quaisquer instruções de impressão ou logs.

### Demonstração

<div class="video-container">
<iframe width="407" height="724" src="https://www.youtube.com/embed/byqY2bYfVjA" title="Embedded Swift on XIAO ESP32C6 #Swift #Embedded #ESP32C6 #iot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referência

- [Embedded Swift Blog](https://www.swift.org/blog/embedded-swift-examples/)
- [A Vision for Embedded Swift](https://github.com/swiftlang/swift-evolution/blob/main/visions/embedded-swift.md)
- [swift-embedded-examples](https://github.com/apple/swift-embedded-examples)
- [esp32-led-blink-sdk - GitHub](https://github.com/apple/swift-embedded-examples/tree/main/esp32-led-blink-sdk)

## Recursos

- [WWDC24: Go small with Embedded Swift - Apple YouTube](https://www.youtube.com/watch?v=LqxbsADqDI4&t)
- [Add support for Matter in your smart home app](https://developer.apple.com/videos/play/wwdc2021/10298)
- [Embedde Swift - Apple Forum](https://forums.swift.org/c/development/embedded/107)
- [Use C, C++ and Objective C Libraries in a Swift Project - Cecilia Humlelu - YouTube](https://www.youtube.com/watch?v=jcNxtM_yTfk)
- [Mixing Swift and C++](https://www.swift.org/documentation/cxx-interop/)
- [awesome-embedded-swift](https://github.com/Cosmo/awesome-embedded-swift)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
