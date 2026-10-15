---
description: Seeed Studio XIAO RA4M1 com PlatformIO
title: XIAO RA4M1 com PlatformIO
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/ra4m1_with_platformio.webp
slug: /xiao_ra4m1_with_platform_io
last_update:
  date: 04/07/2025
  author: Hugo
createdAt: '2024-08-27'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/xiao_ra4m1_with_platform_io/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/ra4m1_with_platformio.jpg" /></div>

## Introdução ao PlatformIO

PlatformIO é uma plataforma de desenvolvimento que integra muitos tipos de placas de desenvolvimento e possui boa escalabilidade. Se a plataforma não tiver o tipo que você precisa, é possível adicionar manualmente o tipo de placa de desenvolvimento. O código que você escreve no Arduino pode ser usado aqui, basta adicionar a biblioteca correspondente.

Neste wiki, vamos apresentar como instalar e executar o código de exemplo no PlatformIO.

## Usar PlatformIO para o XIAO RA4M1

### Etapa 1. Instale o [PlatformIO](https://platformio.org/platformio-ide) no site oficial

Se você ainda não instalou o software PlatformIO, pode clicar no link acima.

### Etapa 2. Crie qualquer projeto no PlatformIO

Como a plataforma já possui opções para nossas placas de desenvolvimento XIAO ESP32S3 e XIAO ESP32C3, podemos escolher uma delas para criar nossos arquivos. Claro, outros tipos de arquivo também funcionam, não há problema. O nome do projeto também pode ser escolhido livremente.

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
Antes disso, eu já tinha instalado o pacote de instalação do XIAO RA4M1, então você pode ver que a imagem na operação dois tem a opção para XIAO RA4M1, mas você não a terá quando realizar a operação.
:::

### Etapa 3. Modifique o arquivo platformio.ini

Quando você criar o arquivo do PlatformIO com sucesso, muitos arquivos aparecerão na coluna esquerda. Podemos ver um arquivo chamado platform.ini. Em seguida, precisamos substituir o conteúdo dentro dele.

<table align="center">
  <tr>
      <th>Operação três</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/2.png" /></div>
  </tr>
</table>

Você precisa copiar o código abaixo e substituir o conteúdo no arquivo platform.ini.

```
[env:seeed_xiao_ra4m1]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-ra4m1
framework = arduino
```

:::tip
Lembre-se de salvar o arquivo pressionando Ctrl + S; ele começará a carregar.
:::

### Etapa 4. Compile e grave

<table align="center">  
  <tr>  
      <th>Operação quatro</th>  
  </tr>  
  <tr>  
      <td>  
          <div align="center">  
              <img width="500" src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/ra4m1_platformio_complied.png" />  
          </div>  
      </td>  
  </tr>  
</table>  

Por fim, se você vir o mesmo resultado que na imagem acima, significa que adicionou com sucesso a Placa de Desenvolvimento XIAO RA4M1. Quando você criar um projeto novamente, verá a opção XIAO RA4M1 disponível.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>