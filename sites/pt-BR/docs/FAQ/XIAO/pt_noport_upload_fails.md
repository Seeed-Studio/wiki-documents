---
description: XIAO-FAQ
title: O que fazer quando o upload falha/o programa é executado de forma anormal/a porta do dispositivo não é encontrada?
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /noport_upload_fails
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-07-05'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/noport_upload_fails/
---


Às vezes usamos o programa errado e isso faz com que o XIAO pareça perder portas ou não funcione corretamente. O desempenho específico é:

- Conectado ao computador, mas nenhum número de porta encontrado para o XIAO.

- O computador está conectado e o número da porta aparece, mas o upload do programa falha.

Neste Wiki, você pode encontrar soluções. Diferentes modelos de XIAO têm métodos de solução de problemas diferentes, portanto escolha a solução correspondente ao seu modelo.

:::successQuick browse
Aqui estão os métodos de solução de problemas para falhas de upload, comportamento anormal do programa ou erros de porta de dispositivo não encontrada para vários tipos de XIAO. Você pode indexar rapidamente através do link abaixo:

- [**XIAO SAMD21**](/pt-br/noport_upload_fails/#para-xiao-samd21)
- [**XIAO RP2040**](/pt-br/noport_upload_fails/#para-xiao-rp2040)
- [**XIAO nRF52840(Sense)**](/pt-br/noport_upload_fails/#para-xiao-nrf52840-sense)
- [**XIAO ESP32C3**](/pt-br/noport_upload_fails/#para-xiao-esp32c3)
- [**XIAO ESP32S3(Sense)**](/pt-br/noport_upload_fails/#para-xiao-esp32s3-sense)
:::

## **Para XIAO SAMD21**

Às vezes a porta do Seeed Studio XIAO SAMD21 pode desaparecer quando o processo de programação do usuário falha. Podemos resolver esse problema com a seguinte operação:

### Resetar

Primeiro, você pode tentar resetar o XIAO SAMD21. As etapas são as seguintes:

- Conecte o Seeed Studio XIAO SAMD21 ao seu computador.
- Use uma pinça ou fios curtos para curto-circuitar os pinos RST **apenas uma vez**
- Os LEDs laranja começam a piscar e acendem.

:::note
O comportamento do LED embutido é o inverso daquele em um Arduino. No Seeed Studio XIAO SAMD21, o pino precisa ser puxado para nível baixo, enquanto em outros microcontroladores ele precisa ser puxado para nível alto.
:::

Se isso não funcionar, tente entrar no **modo bootloader**:

### Entrar no modo Bootloader

Quando você encontrar as duas situações acima, pode tentar colocar o XIAO em modo BootLoader, o que pode resolver a maioria dos problemas de dispositivos não reconhecidos e uploads com falha. O método específico é:  

- Conecte o Seeed Studio XIAO SAMD21 ao seu computador.
- Use uma pinça ou fios curtos para curto-circuitar os pinos RST no diagrama **duas vezes**.
- Os LEDs laranja começam a piscar e acendem.

Neste ponto, o chip entra no modo Bootloader e a porta de gravação aparece novamente. Como o chip samd21 tem duas partições, uma é o Bootloader e a outra é o programa do usuário. O produto grava um código de bootloader na memória do sistema quando sai de fábrica. Podemos alternar os modos realizando as etapas acima.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

Se isso também não funcionar, desconecte a placa do PC e conecte-a novamente.

## **Para XIAO RP2040**

Às vezes a porta do Seeed Studio XIAO RP2040 pode desaparecer quando o processo de programação do usuário falha. Podemos resolver esse problema com a seguinte operação:

### Resetar

Primeiro, você pode tentar resetar o XIAO RP2040. As etapas são as seguintes:

- Conecte o Seeed Studio XIAO RP2040 ao seu computador.
- Pressione os pinos "R" **uma vez**.

:::note
O comportamento dos LEDs de cor única programáveis integrados (dois são azuis, um é verde) é o inverso daquele em um Arduino. No Seeed Studio XIAO RP2040, o pino precisa ser puxado para nível baixo para habilitar.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

Se isso não funcionar, tente entrar no **modo bootloader**:

### Entrar no modo Bootloader

Quando você encontrar as duas situações acima, pode tentar colocar o XIAO em modo BootLoader, o que pode resolver a maioria dos problemas de dispositivos não reconhecidos e uploads com falha. O método específico é:  

- Pressione longamente o botão "B".
- Conecte o Seeed Studio XIAO PR2040 ao seu computador.
- O computador exibirá um driver de disco.

Neste ponto, o chip entra no modo Bootloader e a porta de gravação aparece novamente. Como o chip RP2040 tem duas partições, uma é o Bootloader e a outra é o programa do usuário. O produto grava um código de bootloader na memória do sistema quando sai de fábrica. Podemos alternar os modos realizando as etapas acima.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->

Se isso também não funcionar, desconecte a placa do PC e conecte-a novamente.

## **Para XIAO nRF52840 (Sense)**

Às vezes a porta do Seeed Studio XIAO nRF52840 (Sense) pode desaparecer quando o processo de programação do usuário falha. Podemos resolver esse problema com a seguinte operação:

### Resetar

Primeiro, você pode tentar **resetar** o XIAO nRF52840 (Sense). As etapas são as seguintes:

- Conecte o Seeed Studio XIAO nRF52840 (Sense) ao seu computador.
- Pressione o "Reset button" **uma vez**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2a.jpg" alt="pir" width={700} height="auto" /></p>

Se isso não funcionar, tente entrar no **modo bootloader**:

### Entrar no modo Bootloader

Quando você encontrar as duas situações acima, pode tentar colocar o XIAO em modo BootLoader, o que pode resolver a maioria dos problemas de dispositivos não reconhecidos e uploads com falha. O método específico é:  

- Conecte o Seeed Studio XIAO nRF52840 (Sense) ao seu computador.
- Pressione o "Reset button" **duas vezes**.

Se isso também não funcionar, desconecte a placa do PC e conecte-a novamente.

## **Para XIAO ESP32C3**

Às vezes a porta do Seeed Studio XIAO ESP32C3 pode desaparecer quando o processo de programação do usuário falha. Podemos resolver esse problema com a seguinte operação:

### Resetar

Primeiro, você pode tentar resetar o XIAO ESP32C3. As etapas são as seguintes:

- Conecte o Seeed Studio XIAO ESP32C3 ao seu computador.
- Pressione o "RESET BUTTON" **uma vez**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:500, height:'auto'}}/></div>

Se isso não funcionar, tente entrar no **modo bootloader**:

### Entrar no modo Bootloader

Quando você encontrar as duas situações acima, pode tentar colocar o XIAO em modo BootLoader, o que pode resolver a maioria dos problemas de dispositivos não reconhecidos e uploads com falha. O método específico é:  

- Pressione longamente o "BOOT BUTTON".
- Conecte o Seeed Studio XIAO ESP32C3 ao seu computador enquanto mantém pressionado o **BOOT BUTTON**.
- Solte-o para entrar no **modo bootloader**

## **Para XIAO ESP32S3 (Sense)**

Às vezes a porta do Seeed Studio XIAO ESP32S3(Sense) pode desaparecer quando o processo de programação do usuário falha. Podemos resolver esse problema com a seguinte operação:

### Resetar

Primeiro, você pode tentar resetar o XIAO ESP32S3. As etapas são as seguintes:

- Conecte o Seeed Studio XIAO ESP32S3 ao seu computador.
- Pressione o "RESET BUTTON" **uma vez**.

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/esp32s3.png" style={{width:700, height:'auto'}}/></div>

Se isso não funcionar, tente entrar no **modo bootloader**:

### Entrar no modo BootLoader

Quando você encontrar as duas situações acima, pode tentar colocar o XIAO em modo BootLoader, o que pode resolver a maioria dos problemas de dispositivos não reconhecidos e uploads com falha. O método específico é:

- **Passo 1**. Pressione e segure o botão BOOT no XIAO ESP32S3 sem soltá-lo.

- **Passo 2**. Mantenha o botão BOOT pressionado e então conecte ao computador através do cabo de dados. Solte o botão BOOT após conectar ao computador.

:::note
Quando você pressiona e segura a tecla BOOT enquanto liga e então pressiona a tecla Reset uma vez, você também pode entrar no modo BootLoader.
:::

- **Passo 3**. Faça o upload do programa **Blink** para verificar o funcionamento do XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>
