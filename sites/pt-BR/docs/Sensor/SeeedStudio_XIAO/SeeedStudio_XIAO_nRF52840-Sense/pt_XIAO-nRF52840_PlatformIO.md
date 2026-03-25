---
description: Seeed Studio XIAO nRF52840 com PlatformIO
title: XIAO nRF52840-Sense com PlatformIO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png
slug: /xiao_nrf52840_with_platform_io
last_update:
  date: 08/14/2024
  author: Jason
createdAt: '2024-08-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_nrf52840_with_platform_io/
---

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png" /></div>

# **Seeed Studio XIAO nRF52840 com PlatformIO**

PlatformIO é uma plataforma de desenvolvimento que integra muitos tipos de placas de desenvolvimento e possui boa escalabilidade. Se a plataforma não tiver o tipo de placa de que você precisa, você pode adicioná‑lo manualmente. O código que você escreve no Arduino pode ser usado aqui, basta adicionar a biblioteca correspondente.

Neste wiki, vamos apresentar como instalar e executar o código de exemplo no PlatformIO.

## Usar PlatformIO para XIAO nRF52840

### Etapa 1. Instale o [PlatformIO](https://platformio.org/platformio-ide) no site oficial

Se você ainda não instalou o software PlatformIO, pode clicar no link acima.

### Etapa 2. Crie qualquer projeto no PlatformIO

Como a plataforma já possui nossas opções de placa de desenvolvimento XIAO ESP32S3 e XIAO ESP32C3, podemos escolher uma delas para criar nossos arquivos. Claro, outras placas também funcionam, não há problema. O nome do projeto também pode ser escolhido arbitrariamente. Aqui eu uso o XIAO ESP32 C3 como exemplo.

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
Antes disso, eu já havia instalado o pacote de instalação do XIAO ESP32C6 e do XIAO nRF52840, então você pode ver que a imagem na operação dois tem a opção para XIAO ESP32C6 e XIAO nRF52840, mas você não a terá quando executar a operação.
:::

### Etapa 3. Modificar o arquivo platformio.ini

Quando você cria o arquivo do PlatformIO com sucesso, muitos arquivos aparecerão na coluna da esquerda. Podemos ver um arquivo chamado platform.ini. Em seguida, precisamos substituir o conteúdo dentro dele.
<table align="center">
  <tr>
      <th>Operação três</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/platformIO_file.jpg" /></div>
  </tr>
</table>

Você precisa copiar o código a seguir e substituir o conteúdo no arquivo platform.ini

```
[env:seeed_xiao_nrf52840_sense]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
```
:::tip
Lembre‑se de salvar o arquivo, ctrl+s, ele será carregado.
:::

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>