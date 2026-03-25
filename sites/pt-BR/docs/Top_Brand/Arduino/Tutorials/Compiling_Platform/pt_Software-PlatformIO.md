---
description: PlatformIO para placas compatíveis com Arduino
title: PlatformIO para placas compatíveis com Arduino
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Software-PlatformIO
sku: 102991299
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Software-PlatformIO/
---

# Como usar o PlatformIO IDE para programação em Arduino

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO.gif"/></div>

Como você talvez já tenha percebido, a IDE do Arduino pode não ser a melhor IDE para **programação em Arduino** quando se trata de produtividade; aqui apresentamos uma opção mais amigável para desenvolvimento! Programe o [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) e o [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) no seu ambiente de desenvolvimento favorito usando o [**PlatformIO IDE**](https://platformio.org/) no [Microsoft Visual Studio Code](https://code.visualstudio.com/)!

## O que é o PlatformIO

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO.png"/></div>

[**PlatformIO**](https://platformio.org/) é uma ferramenta de IDE profissional multiplataforma, multi‑arquitetura e multi‑framework para engenheiros de sistemas embarcados e de software que escrevem aplicações embarcadas. Ao fornecer uma interface de IDE universal usando o PlatformIO, você consegue programar seu hardware de uma forma muito mais amigável ao desenvolvimento!

Neste wiki, você será capaz de configurar o PlatformIO para oferecer suporte ao [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) e ao [**Seeeduino XIAO**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) para começar a programar!

*Para mais informações, visite o [PlatformIO](https://docs.platformio.org/en/latest/)*

## Primeiros passos com o PlatformIO IDE

O PlatformIO oferece suporte a alguns dos IDEs e editores de texto mais populares como plugins. Neste wiki, **PlatformIO para VSCode** é usado como exemplo.

Para outros IDEs, consulte o seguinte para referência:

- Para [CLion](https://docs.platformio.org/en/latest/integration/ide/clion.html#ide-clion)

- [PlatformIO Core (CLI)](https://docs.platformio.org/en/latest/core/index.html#piocore)

### PlatfromIO para VSCode

- **ETAPA 1. Baixar o VSCode**

Baixe e instale o [Microsoft Visual Studio Code](https://code.visualstudio.com/)

- **ETAPA 2. Baixar os plugins PlatformIO IDE para VSCode**

Abra o **Extensions Market** no VS Code clicando em **Extensions** no painel esquerdo ou use o atalho de teclado:

:::note
Atalho de teclado: `Shift+CTRL+X` no **Windows** ou `Shift+CMD+X` no **macOS**.
:::

Pesquise por **`PlatfromIO`** no Extension Market e clique em **Install**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-1.png"/></div>

- **ETAPA 3. Abrir a página inicial do PlatformIO**

Clique no botão “PlatformIO Home” na barra de ferramentas inferior do PlatformIO

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-2.png"/></div>

Agora o PlatformIO está instalado no seu PC!

## Configurações para Wio Terminal e Seeeduino XIAO

**Wio Terminal e Seeeduino XIAO agora são oficialmente suportados pelo PlatformIO:**

1. Navegue até o local raiz do PlatformIO:

      - Para **Unix**: `~/.platformio`

      - Para **Windows**: `C:\Users\{username}.platformio`, onde `{username}` é o seu nome de usuário.

2. Navegue até a pasta `platforms`.

3. Baixe o [`platform-atmelsam`](https://github.com/platformio/platform-atmelsam.git) configurado para a pasta `platforms`.

<div align="center"><img  src="https://files.seeedstudio.com/wiki/platformIO/platformIO-3.png"/></div>

### Placas suportadas

O `platform-atmelsam` configurado oferece suporte às seguintes placas:

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Série Seeeduino Zero:
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 Blue Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#d9f5f3', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#83dfd3', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Tip.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{fontWeight: 'bold', marginTop: 10}}>Dica</p>
    <p style={{fontSize: 14}}>Já foi mesclado; em breve não será mais necessário fazer isso manualmente.</p>
  </div>
</div>

## Início rápido

Este tutorial apresenta a você o básico do fluxo de trabalho do PlatformIO IDE e demonstra um simples exemplo “Blink” no Wio Terminal.

- Clique no botão **PlatformIO Home**.

- Clique em **New Project** e selecione `Seeed Wio Terminal` como placa.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/platformIO/platformIO-4.png"/></div>

- Abra `main.cpp` na pasta `src` e copie o seguinte:

```cpp
#include <Arduino.h>

void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
```

- Abra o arquivo de configuração `platformio.ini` e verifique se está correto:

```ini
[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
```

- Faça o build do projeto com o botão **Build** na barra de ferramentas do PlatformIO ou com atalhos de teclado.

:::note
        Build Projects: `ctrl+alt+b` no **Windows** ou `cmd+shift+b` no **macOS**.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-5.png"/></div>

- Envie o projeto para o Wio Terminal clicando no botão **Upload** na barra de ferramentas do PlatformIO.

<div align="center"><img src="https://files.seeedstudio.com/wiki/platformIO/platformIO-6.png"/></div>

- Agora você deve ver o LED do Wio Terminal piscando!

*Para mais informações sobre primeiros passos com PlatformIO para VSCode, consulte também [aqui](https://docs.platformio.org/en/latest/integration/ide/vscode.html)
.*

## Adicionando bibliotecas ao PlatformIO

### Importando bibliotecas diretamente

Para importar bibliotecas diretamente para o PlatformIO a partir do Github, você pode configurar o `platformio.ini` e adicionar `lib_deps` com a URL da biblioteca dependente, como a seguir:

```ini
lib_deps = https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR
```

**- Exemplo de uso:**

```cpp
#include <Arduino.h>
#include<LIS3DHTR.h>

LIS3DHTR<TwoWire> lis;

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g
}

void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```

### Importando a partir do Arduino

Outra maneira de importar bibliotecas é apontar para o caminho das bibliotecas do Arduino no arquivo de configuração `platformio.ini`. Por exemplo:

```ini
lib_extra_dirs = /Users/{username}/Documents/Arduino/libraries
```

:::caution
Este não é um caminho direto para uma biblioteca com código‑fonte. Ele deve ser um caminho para o local que contém bibliotecas agrupadas por pastas. Por exemplo, `D:\PlatformIO\extra\libraries` e não `D:\PlatformIO\extra\libraries\FooLibrary`.
:::

Para mais opções de bibliotecas, consulte a [**documentação de bibliotecas do PlatformIO**](https://docs.platformio.org/en/latest/projectconf/section_env_library.html).

## Usando a versão mais recente da biblioteca ArduinoCore para Seeed

A ArduinoCore no PlatformIO é mantida pelo próprio PlatformIO e, às vezes, não está atualizada com a versão mais recente lançada pela Seeed. Nesse caso, você pode usar o seguinte `platformio.ini`, por exemplo:

```ini
; PlatformIO Project Configuration File
;
;   Build options: build flags, source filter
;   Upload options: custom upload port, speed and extra flags
;   Library options: dependencies, extra library storages
;   Advanced options: extra scripting
;
; Please visit documentation for the other options and examples
; https://docs.platformio.org/page/projectconf.html

[env:seeed_wio_terminal]
platform = atmelsam
board = seeed_wio_terminal
framework = arduino
platform_packages = framework-arduino-samd-seeed@https://github.com/Seeed-Studio/ArduinoCore-samd.git
```

## Outros recursos úteis do PlatformIO

- [Serial Monitors](https://docs.platformio.org/en/latest/integration/ide/vscode.html#serial-port-monitor)

- [Debugging](https://docs.platformio.org/en/latest/integration/ide/vscode.html#debugging)
