---
description: Seeed Studio XIAO MG24 com PlatformIO
title: XIAO MG24 com PlatformIO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /xiao_mg24_with_platform_io
last_update:
  date: 03/17/2024
  author: Jason
  sidebar_position: 5
createdAt: '2024-08-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_mg24_with_platform_io/
---


<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp" /></div>

## Introdução ao PlatformIO

PlatformIO é uma plataforma de desenvolvimento que integra muitos tipos de placas de desenvolvimento e tem boa escalabilidade. Se a plataforma não tiver o tipo de placa de que você precisa, você pode adicioná‑la manualmente. O código que você escreve no Arduino pode ser usado aqui, basta adicionar a biblioteca correspondente

Neste wiki, apresentaremos como instalar e executar o código de exemplo no PlatformIO

## Usar PlatformIO para XIAO MG24

### Etapa 1. Instale o [PlatformIO](https://platformio.org/platformio-ide) no site oficial

se você ainda não instalou o software PlatformIO, pode clicar no link acima.

### Etapa 2. Crie qualquer projeto no PlatformIO

Aqui você pode escolher qualquer uma das versões de desenvolvimento para criar um arquivo de projeto, eu uso o XIAO ESP32 C3 como exemplo.

<table align="center">
  <tr>
      <th>Operação um</th>
        <th>Operação dois</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>


### Etapa 3. Modifique o arquivo platformio.ini

Quando você cria o arquivo PlatformIO com sucesso, muitos arquivos aparecerão na coluna da esquerda. Podemos ver um arquivo chamado platform.ini. Em seguida, precisamos substituir o conteúdo dentro dele
<table align="center">
  <tr>
      <th>Operação três</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/mg24platform.jpg"/></div>
  </tr>
</table>

Você precisa copiar o código a seguir e substituir o conteúdo no arquivo platform.ini

```
[env:seeed_xiao_mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
```

:::tip
Lembre‑se de salvar o arquivo, ctrl+s, ele será carregado
:::

### Etapa 4. Compilar e Gravar

**Em seguida, compilamos e gravamos usando este código**

```cpp
#include <Arduino.h>
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
  delay(1000);                      // wait for a second
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
  delay(1000);                      // wait for a second
}
```


<table align="center">
  <tr>
      <th>Operação quatro</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/mg24_platform/mg.png" /></div>
  </tr>
</table>

Ele indica que foi compilado com sucesso e, em seguida, podemos acessar o XIAO MG24 para gravá‑lo.


### Etapa 5. Resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>