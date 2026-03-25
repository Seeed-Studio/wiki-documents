---
description: Use Arduino Borads as DAPLink Device
title: Use Arduino Borads as DAPLink Device
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arduino-DAPLink
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Arduino-DAPLink/
---

# Como usar placas Arduino como dispositivo DAPLink

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"/></div>

## O que é DAPLink

**[Arm Mbed DAPLink](https://armmbed.github.io/DAPLink/)** é um projeto de software open source que programa e depura o software de aplicação em execução em **CPUs Arm Cortex**. DAPLink é frequentemente referido como firmware de interface e é executado em um MCU auxiliar conectado à porta SWD ou JTAG do MCU de aplicação. Essa configuração está disponível em quase todas as placas de desenvolvimento. Ela cria uma ponte entre o seu computador de desenvolvimento e a porta de acesso de depuração da CPU.

>Por favor, visite também [DAPLink](https://github.com/ARMmbed/DAPLink) para mais informações.

### DAPLink para placas Arduino

Agora, **desenvolvemos o firmware DAPLink em execução nas suas placas Arduino** (*Série SAMD*), como [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) e [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html), para que você possa fazer upload e depurar placas de desenvolvimento que suportam DAPLink da forma mais econômica possível!

### Recursos

- Depurar e gravar CPUs Arm Cortex
- Fornece uma porta serial virtual, eliminando a necessidade de um conversor USB para porta serial
- Arrastar e soltar para enviar firmware (em breve)

## Placas compatíveis

Ele oferece suporte a todas as placas SAMD da Seeed:

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Série Seeeduino Zero:
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 Blue Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

:::note
Certifique-se de ter instalado a **biblioteca mais recente da placa ArduinoSAMD para Seeed (>=1.8.1)** para que isso funcione!
:::

## Primeiros passos

### 1. Instalando as bibliotecas Arduino do DAPLink

1. Visite o repositório [**Seeed_Arduino_DAPLink**](https://github.com/Seeed-Studio/Seeed_Arduino_DAPLink/) e faça o download de todo o repositório para o seu disco local.

2. Agora, a biblioteca Seeed_Arduino_DAPLink pode ser instalada no Arduino IDE. Abra o Arduino IDE e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Seeed_Arduino_DAPLink` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 2. Instalando a biblioteca Adafruit_TinyUSB_Arduino

1. Visite o repositório [**Adafruit_TinyUSB_Arduino**](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) e faça o download de todo o repositório para o seu disco local.

2. Agora, a biblioteca Adafruit_TinyUSB_Arduino pode ser instalada no Arduino IDE. Abra o Arduino IDE e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Adafruit_TinyUSB_Arduino` que você acabou de baixar.

### Personalizando definições de pinos

Se você estiver usando **Wio Terminal** ou **Seeeduino Xiao**, pode pular esta seção e simplesmente usar as definições padrão.

- As definições de pinos para DAPLink são definidas em **`DAP_config.h`** em `Seeed_Arduino_DAPLink/src`, consulte o seguinte:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/pins-new.png"/></div>

### Enviar para placas Arduino

Abra o `simple_daplink.ino` em `Seeed_Arduino_DAPLink/example` usando o Arduino IDE. Em `Tools` -> `USB Stack` escolha **TinyUSB**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/usbstack.png"/></div>

Compile e envie o código!

## Exemplo de conexão de hardware

Neste wiki, usamos a [placa de desenvolvimento STM32F410RB](https://www.st.com/en/microcontrollers-microprocessors/stm32f410rb.html) como exemplo de conexão:

>Se você tiver alterado as definições de pinagem, conecte de acordo com as suas próprias definições.

- Exemplo de conexão com Seeeduino Xiao

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg"/></div>

- Exemplo de conexão com Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"/></div>

## Exemplo de depuração e gravação para IDEs

Nossa placa Arduino agora se torna nosso dispositivo DAPLink para envio para MCUs! Vamos ver alguns exemplos para diferentes IDEs para referência.

### Depuração com OpenOCD

- Conecte o Arduino DAPLink ao alvo de desenvolvimento de acordo com a conexão acima e ao seu PC.

- Certifique-se de ter instalado o OpenOCD.

- Abra o Terminal e execute o seguinte:

Altere para o alvo do seu dispositivo de acordo com a sua placa de desenvolvimento, você pode consultar a [documentação oficial](http://openocd.org/doc/html/CPU-Configuration.html) como referência.

```sh
openocd -f interface/cmsis-dap.cfg -f target/stm32f4x.cfg
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-1.png"/></div>

- No caminho de build do projeto da sua placa de desenvolvimento, execute o gcc, que será algo como abaixo:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-2.png"/></div>

- no gdb, conecte ao host local executando o seguinte:

```sh
target remote 127.0.0.1:3333
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-3.png"/></div>

- Agora a placa de desenvolvimento está conectada, você pode começar a depurar ou fazer upload!

Execute `load` para enviar para a placa de desenvolvimento:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-4.png"/></div>

Alguns comandos úteis para o GDB:

- `continue/cont`
- `ctrl`+`c`
- `next`
- `break`
- `info break`
- `clear`
- `delete`
- `list`

### Depuração com Eclipse

Para o Eclipse, é muito semelhante ao OpenOCD, pois ele pode usar o OpenOCD como backend.

- Navegue até **Help** -> **Eclipse Marketplace**, pesquise e baixe **Eclipse Embedded CDT**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-2.png"/></div>

- Navegue até **Window** -> **Preference** -> **MCU** -> **Global OpenOCD Path** e preencha o caminho do seu OpenOCD como a seguir:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-3.png"/></div>

- Faça o build do seu projeto. Em **Run Last Tool**, clique em **External Tools Configurations**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-5.png"/></div>

- Copie as seguintes configurações, altere para o seu caminho (e também para sua placa alvo).

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-6.png"/></div>

Se tudo correr bem, deve ficar algo assim:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-8.png"/></div>

- Em **Debug**, clique em **Debug Configurations**, selecione a seção **Debugger** e preencha o caminho do seu gcc:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-9.png"/></div>

Agora está tudo certo e pronto para depurar!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"/></div>

Para mais referências, verifique [aqui](https://gnu-mcu-eclipse.github.io/debug/openocd/).

### Depuração com Keil

- Conecte o Arduino DAPLink ao alvo de desenvolvimento de acordo com a conexão acima e ao seu PC.

Para usar nosso Arduino DAPLink no Keil, verifique o seguinte:

- Abra o seu projeto com o Keil e clique em **Options for target**.

Você deve ver uma janela como a abaixo. Certifique-se de que o dispositivo corresponde ao seu dispositivo. Navegue até a seção **Debug** e selecione **CMSIS-DAP Debugger**.

- Clique em **settings** ao lado de **CMSIS-DAP Debugger**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-1.png"/></div>

- Escolha **Seeed CMSIS-DAP** (nossa placa Arduino) e você deverá ver que ela está conectada.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-2.png"/></div>

- Você também pode navegar até a seção **Flash Download** para se certificar de que é o dispositivo correto e clicar em **OK**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-3.png"/></div>

- Clique em **Build** e **Flash**!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-4.png"/></div>

### Depuração com IAR Embedded Workbench

- Conecte o Arduino DAPLink ao alvo de desenvolvimento de acordo com a conexão acima e ao seu PC.

- Abra o seu projeto e navegue até **Project** -> **Options**. No menu Options, selecione **Debugger**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-1.png"/></div>

- Na aba **Setup**, selecione **CMSIS DAP** no menu suspenso Driver.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-2.png"/></div>

- Na aba **Download**, marque Verify download e Use **flash loader(s)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-3.png"/></div>

- Selecione **CMSIS DAP** no menu à esquerda, selecione a aba **Interface** e configure o protocolo **SWD**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-4.png"/></div>

- Clique em **OK** e você pode clicar em **Download and Debug**!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-5.png"/></div>

## Uso da serial

Para facilitar a vida, também implementamos uma função USB para Serial no Arduino Sketch, o que dispensa a necessidade de hardware adicional!

- Por padrão, ela é definida como `Serial1` e são os pinos de Hardware Serial. Por exemplo, são os pinos 6 e 7 para o Seeeduino XIAO.

:::note
    Você pode definir a sua própria Serial no Arduino Sketch.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg"/></div>

>Para uso de referência, verifique [aqui](https://wiki.seeedstudio.com/pt-br/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI/).

## Recursos

- [DAPLink Official Github](https://github.com/ARMmbed/DAPLink)
- [OpenOCD Documents](http://openocd.org/doc/html/index.html)

## Suporte Técnico e Discussão de Produtos


Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
