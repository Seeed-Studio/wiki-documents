---
description: Seeed Studio XIAO ESP32C6 com PlatformIO
title: XIAO ESP32C6 com PlatformIO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/esp32c6_circuitpython/title.png
slug: /xiao_esp32c6_with_platform_io
last_update:
  date: 08/13/2024
  author: Jason
createdAt: '2024-08-27'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_with_platform_io/
---

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/7.png" /></div>

## Introdução ao PlatformIO

PlatformIO é uma plataforma de desenvolvimento que integra muitos tipos de placas de desenvolvimento e possui boa escalabilidade. Se a plataforma não tiver o tipo que você precisa, você pode adicionar manualmente o tipo de placa de desenvolvimento. O código que você escreve no Arduino pode ser usado aqui, basta adicionar a biblioteca correspondente.

Neste wiki, apresentaremos como instalar e executar o código de exemplo no PlatformIO.

## Usar PlatformIO para XIAO ESP32C6

### Etapa 1. Instale o [PlatformIO](https://platformio.org/platformio-ide) no site oficial

Se você ainda não instalou o software PlatformIO, pode clicar no link acima.

### Etapa 2. Crie qualquer projeto no PlatformIO

Como a plataforma já possui nossas opções de placas de desenvolvimento XIAO ESP32S3 e XIAO ESP32C3, podemos escolher uma delas para criar nossos arquivos. Claro, outras placas também servem, não há problema. O nome do projeto também pode ser escolhido livremente. Aqui eu uso o XIAO ESP32 C3 como exemplo.

<table align="center">
  <tr>
      <th>Operação um</th>
        <th>Operação dois</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/4.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/3.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
</table>

:::tip
Antes disso, eu já havia instalado o pacote de instalação do XIAO ESP32C6, então você pode ver que a imagem na operação dois tem a opção para XIAO ESP32C6, mas você não a terá quando realizar a operação.
:::

### Etapa 3. Modificar o arquivo platformio.ini

Quando você criar o arquivo PlatformIO com sucesso, muitos arquivos aparecerão na coluna esquerda. Podemos ver um arquivo chamado platform.ini. Em seguida, precisamos substituir o conteúdo dentro dele.
<table align="center">
  <tr>
      <th>Operação três</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/platformIO_file.jpg" /></div>
  </tr>
</table>

Você precisa copiar o código a seguir e substituir o conteúdo no arquivo platform.ini.

```
[env:seeed_xiao_esp32_c6]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-esp32-c6
framework = arduino
```
:::tip
Lembre-se de salvar o arquivo, ctrl+s, ele será recarregado.
:::

### Etapa 4. Compilar e Gravar

<table align="center">
  <tr>
      <th>Operação quatro</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/setup3.png" /></div>
  </tr>
</table>

No final, se você tiver o mesmo resultado da imagem a seguir, isso significa que você adicionou a placa de desenvolvimento XIAO ESP32C6 com sucesso. Quando você criar o projeto novamente, as operações do XIAO ESP32C6 estarão disponíveis.

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