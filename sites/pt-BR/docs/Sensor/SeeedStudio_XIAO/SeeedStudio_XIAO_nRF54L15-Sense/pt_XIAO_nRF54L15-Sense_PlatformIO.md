---
description: Seeed Studio XIAO nRF54L15 com PlatformIO
title: XIAO nRF54L15 com PlatformIO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /xiao_nrf54l15_with_platform_io
last_update:
  date: 7/4/2025
  author: Jason
  sidebar_position: 5
createdAt: '2025-07-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf54l15_with_platform_io/
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformIO_nrf54l15.png" style={{width:600, height:'auto'}}/></div>

## Introdução ao PlatformIO

O PlatformIO é um ecossistema de desenvolvimento poderoso e altamente extensível, projetado para sistemas embarcados. Ele integra perfeitamente suporte a uma vasta gama de placas de desenvolvimento e microcontroladores, oferecendo flexibilidade incomparável. O que diferencia o PlatformIO é sua notável escalabilidade: mesmo que sua placa específica não seja suportada nativamente, sua arquitetura permite definições de placas personalizadas de forma simples.

De forma crucial, o PlatformIO preenche a lacuna para desenvolvedores familiarizados com Arduino, permitindo a compilação e implantação de código no estilo Arduino simplesmente incluindo as bibliotecas relevantes. Este guia irá orientá-lo no processo de configuração do PlatformIO para o seu XIAO nRF54L15 e demonstrar como compilar, fazer upload e monitorar código de exemplo, tornando o desenvolvimento complexo com Zephyr RTOS notavelmente acessível.

## Configurando o PlatformIO para o XIAO nRF54L15

Siga estas etapas simplificadas para configurar seu ambiente de desenvolvimento e implantar seu primeiro aplicativo no XIAO nRF54L15 Sense.


### Instalar a Extensão PlatformIO IDE para VS Code

Se ainda não o fez, instale a extensão PlatformIO IDE diretamente no Visual Studio Code. Esta poderosa extensão transforma o VS Code em um ambiente de desenvolvimento embarcado abrangente.

- Abra o VS Code.

- Vá para a visualização de Extensões (Ctrl+Shift+X ou Cmd+Shift+X).

- Pesquise por ["PlatformIO IDE"](https://platformio.org/platformio-ide) e clique em Instalar.


### Criar um Novo Projeto PlatformIO

Aqui você pode escolher qualquer uma das versões de desenvolvimento para criar um arquivo de projeto. Utilizo o XIAO ESP32 C3 como exemplo.

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



### Configurar o platformio.ini para Suporte ao Zephyr no XIAO nRF54L15

Após a criação do seu projeto, localize o arquivo platformio.ini na raiz do diretório do seu projeto (visível no Explorer do VS Code à esquerda). Este arquivo é o núcleo da configuração do seu projeto PlatformIO.

<table align="center">
  <tr>
      <th>Operação três</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/platform54.jpg"/></div>
  </tr>
</table>


Você precisa substituir todo o conteúdo do seu arquivo platformio.ini pela seguinte configuração:

```
[env:seeed-xiao-nrf54l15]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
framework = zephyr
board = seeed-xiao-nrf54l15
```
:::tip
Se você baixou anteriormente outras bibliotecas XIAO, deve excluí-las manualmente antes de modificar o arquivo platform.ini e baixar novamente as bibliotecas necessárias.
:::

Caminho no Mac：
`/Users/YourName/.platformio/platforms`

Caminho no Windows：
`C:\Users\000.platformio\platforms\Seeed Studio`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/
platformmodify.jpg" style={{width:600, height:'auto'}}/></div>
<table align="center">
  <tr>
      <th>Operação quatro</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/platformiozephyr.jpg"/></div>
  </tr>
</table>

Você precisa substituir o conteúdo do cMakeLists.txt pela seguinte configuração
```
set(BOARD_ROOT "$ENV{ZEPHYR_BASE}/../../platforms/Seeed Studio/zephyr")
cmake_minimum_required(VERSION 3.13.1)

find_package(Zephyr REQUIRED HINTS $ENV{ZEPHYR_BASE})
project(blinky)

target_sources(app PRIVATE ../src/main.cpp) # If the main source file is.c, please change it to src/main.c
```
Em seguida, salve novamente o arquivo platformio.ini (Ctrl+S ou Cmd+S) e aguarde o carregamento completo.

### Compilar e Fazer Upload do Seu Primeiro Exemplo Blink

Agora, vamos testar sua configuração com o clássico exemplo "Blink". Este código irá alternar o LED integrado do seu XIAO nRF54L15.

Substitua o conteúdo do seu arquivo src/main.cpp (ou src/main.c) pelo seguinte código C compatível com Zephyr:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/platform-seeedboards/tree/main/examples/zephyr-blink" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


**A seguir, compilamos e gravamos usando este código**

```cpp
/*
 * Copyright (c) 2016 Intel Corporation
 *
 * SPDX-License-Identifier: Apache-2.0
 */

 #include <zephyr/kernel.h>
 #include <zephyr/device.h>
 #include <zephyr/drivers/gpio.h>
 #include <nrfx_power.h>

 /* 1000 msec = 1 sec */
 #define SLEEP_TIME_MS   1000

 /* The devicetree node identifier for the "led0" alias. */
 #define LED0_NODE DT_ALIAS(led0)

 static const struct gpio_dt_spec led = GPIO_DT_SPEC_GET(LED0_NODE, gpios);

 int main(void)
 {
	 int ret;
	 bool led_is_on = true;
	nrfx_power_constlat_mode_request();
	 if (!gpio_is_ready_dt(&led)) {
		 return -1;
	 }

	 ret = gpio_pin_configure_dt(&led, GPIO_OUTPUT_ACTIVE);
	 if (ret < 0) {
		 return ret;
	 }

	 while (1) {
		 ret = gpio_pin_set_dt(&led, (int)led_is_on);
		 if (ret < 0) {
			 return ret;
		 }
		 led_is_on = !led_is_on;
		 k_msleep(SLEEP_TIME_MS);
	 }

	 return 0;
 }

```

Agora, conecte seu XIAO nRF54L15 ao computador via USB. No VS Code:

- Compilar: Clique no ícone "Build" (marca de verificação) na barra de ferramentas do PlatformIO na parte inferior do VS Code, ou use a barra lateral do PlatformIO: PROJECT TASKS -> nome_do_seu_projeto -> General -> Build.

- Upload: Após uma compilação bem-sucedida, clique no ícone "Upload" (seta para a direita) na barra de ferramentas do PlatformIO, ou use a barra lateral do PlatformIO: PROJECT TASKS -> nome_do_seu_projeto -> General -> Upload.


<table align="center">
  <tr>
      <th>Operação cinco</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/blink.jpg" /></div>
  </tr>
</table>

A saída no terminal deve indicar um processo de compilação e gravação bem-sucedido.


### Observar o Resultado

Após um upload bem-sucedido, o LED integrado do seu XIAO nRF54L15 deve começar a piscar em um intervalo de 1 segundo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/light.gif" style={{width:400, height:'auto'}}/></div>



## Suporte Técnico e Discussão sobre Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
