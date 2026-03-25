---
description: Modelo de wiki
title: Modelo de wiki
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /Name_your_website
last_update:
  date: 08/09/2023
  author: Example name
createdAt: '2023-08-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Name_your_website/
---

# Visão geral do projeto

:::note
Esta é apenas a diretriz básica para escrever uma Wiki, incluindo o código de escrita comum.
:::

Esta é a visão geral desta wiki. Ela deve conter estes conteúdos:

1. Diagrama de exibição da aplicação ou imagens dos produtos usados principalmente
2. Princípio da aplicação
3. Breve introdução ao projeto

## Preparação de hardware

Estou usando (produtos Seeed) como hardware aqui. O conteúdo aqui deve incluir:

1. Liste todos os produtos usados da Seeed Studio, com tabela horizontal escrita com texto, mais o link do produto "Adquira agora". O código de exemplo é mostrado abaixo.
2. Use gráficos para mostrar o método de conexão de hardware do projeto

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32-S3(exemplo)</th>
        <th>Seeed Studio Grove OLED Display 0.96(exemplo)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Preparação de software

Estou usando o software Thonny IDE (Windows) e algumas bibliotecas e arquivos relacionados. O conteúdo aqui deve incluir:

1. Software de aplicação e endereço de download
2. Abra o software e instale as dependências ou bibliotecas necessárias

<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino IDE</th>
        <th>arquivos relacionados(bibliotecas)</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Introdução

### Descrição passo a passo: como o projeto é implementado

1. Envie o código do primeiro passo para um determinado produto, e o efeito aparece
2. Envie o código do segundo passo para um produto, e o efeito aparece
3. ...

## E mais

Algo que você queira acrescentar, algo que queira estender, como:

- A extensão desta aplicação
- Abrir o campo
- Oferecer pensamento expandido

## Solução de problemas

Alguns problemas podem ser encontrados no processo de conexão de hardware, depuração de software ou upload.

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## ✨ Outro código de recurso da wiki

### Código no início（obrigatório）

```
---
description: // One sentence introduction of the project
title: // One short words introduction of the project
keywords:
//Enter the upper-level directory where the file is stored (Grove，SenseCAP，reTerminal...)
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: / The name of file
last_update:
  date: //The data finished wiki
  author: // author
---
```

### O código da imagem

```cpp
<p style={{textAlign: 'center'}}><img src="image_link" alt="pir" width={600} height="auto" /></p>
```

### Código de vídeo

```cpp
<div class="table-center">
<iframe width="100%" height="315" src="URL" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
```

### Hiperlink

```cpp
<a  href="link" target="_blank"><span> PDF Download of SenseCAP S210X Sereis User Guide</span></a>
```

### Código de destaque

```cpp

{code}

```

### Ocultar o código

<details>

<summary> título aqui</summary>

```cpp
#include
Print "code here"
```

</details>

### Botão de download do Arduino IDE

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

### Botão de download da biblioteca do Github

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download do código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Código da tabela

Aqui estão incluídos hiperlinks, links de imagem, título da tabela

<table align="center">
  <caption> <h2>título</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Tipo de gás</h4></td>
    <td><h4>Adquira agora</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/pt-br/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>Gás combustível, fumaça</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
        <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    </tr>
  </tbody></table>

### nota

:::note
Algum **conteúdo** com *Markdown* `syntax`. Confira [esta `api`](#).
:::

### dica

:::tip
Algum **conteúdo** com *Markdown* `syntax`. Confira [esta `api`](#).
:::

### informação

:::info
Algum **conteúdo** com *Markdown* `syntax`. Confira [esta `api`](#).
:::

### perigo

:::danger
Algum **conteúdo** com *Markdown* `syntax`. Confira [esta `api`](#).
:::

### Cuidado

:::caution
Algum **conteúdo** com *Markdown* `syntax`. Confira [esta `api`](#).
:::
