---
description: Use o gerador de configuração OpenEPaperLink para gerar a configuração do papel eletrônico
title: OpenEPaperLink Config Builder para ePaper
keywords:
  - XIAO eInk Expansion
  - XIAO
  - OEPL Config Builder
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/OEPL_Config_img.webp
slug: /epaper_breakout_board_with_oepl
sidebar_position: 2
last_update:
  date: 10/23/2025
  author: Zovey
createdAt: '2025-10-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/epaper_breakout_board_with_oepl/
---

# OpenEPaperLink e construtor de configuração para ePaper

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/seeed_logo_2.jpg" style={{width:500, height:'auto'}}/></div>

## Introdução

[OpenEPaperLink](https://openepaperlink.de/) (o texto a seguir se referirá a este projeto como "OEPL") é um protocolo alternativo e uma implementação de firmware para etiquetas eletrônicas de prateleira. Vários visores são suportados com pontos de acesso baseados em ESP32 e comunicação de rádio 802.15.4. Este é um sistema de comunicação de etiquetas de papel eletrônico de código aberto, que permite aos usuários atualizar o conteúdo de exibição da tela de tinta eletrônica sem fio. O sistema é composto por um ponto de acesso (AP) e dispositivos de etiqueta, e suporta vários tipos de telas de tinta eletrônica. Ele fornece uma ampla gama de funções de geração e transmissão de conteúdo. Agora, este projeto também é compatível com o Seeed Studio XIAO nRF52840 Sense Plus.

Após adquirir a ePaper Breakout Board, você pode ter a necessidade de substituir a tela de papel eletrônico por outra de especificação diferente. Neste tutorial, usaremos duas ferramentas para o processo: o OPEL Config Builder é usado para modificar os parâmetros do papel eletrônico, e o OEPL Image Uploader é usado para enviar imagens.

[OEPL Config Builder](https://config.openepaperlink.org/) é uma ferramenta de configuração de parâmetros de papel eletrônico de baixo código que utiliza o protocolo BLE para transmissão sem fio. Os usuários não precisam mais escrever códigos de configuração complexos; eles podem simplesmente operar o mouse no site para concluir a configuração.

[OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html) também é uma ferramenta que realiza transmissão sem fio via protocolo BLE. A diferença é que esta ferramenta transmite fotos.

## Preparação de hardware

<table align="center">
  <tr>
    <th>Display ePaper Monocromático de 4,26"</th>
    <th>ePaper Breakout Board para Seeed Studio XIAO</th>
    <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::tip
Os MCUs da série XIAO nRF52840 todos suportam esta ferramenta, não se limitando ao XIAO nRF52840 Sense Plus. A tela ePaper suporta apenas um display de 4,26 polegadas. No entanto, continuaremos a atualizar no futuro para suportar mais tamanhos de tela.
:::

## Uso do OEPL Config Builder

### Etapa 1: Gravar o firmware BLE

A primeira etapa é obter o firmware OEPL_BLE do repositório oficial do OEPL.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases/tag/test7" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

Depois de conectar o Seeed Studio XIAO nRF52840 Sense Plus, a ePaper Breakout Board e a tela juntos, conecte o computador ao nRF52840 usando um cabo de dados USB e, em seguida, pressione o botão de reset duas vezes consecutivas. Em seguida, você verá um gerenciador de arquivos aparecer no PC.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

Em seguida, copie o arquivo `.uf2` que acabou de ser obtido da unidade USB para o gerenciador de arquivos do nRF52840. Na próxima vez que o MCU for ligado, ele executará automaticamente este firmware `.uf2`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

### Etapa 2: Usar BLE para conectar ao Builder

Na interface do Builder, conecte os dispositivos via protocolo BLE (se nenhum dispositivo for exibido, grave o firmware novamente). Este site só pode realizar a seguinte função de upload sem fio quando está conectado via protocolo BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

Se a conexão for bem-sucedida, você poderá ver a palavra "Connected" na caixa do terminal.

- **Read Config**: Lê a configuração no MCU.
- **Write Config**: Escreve a configuração no MCU.
- **Reboot**: Reinicia o MCU.

### Etapa 3: Painel do Builder

Basta selecionar as variáveis correspondentes ou inserir parâmetros no painel para concluir a configuração.

- **Parâmetros do Config Builder**
  - **system_config**: Armazena informações sobre o IC host e os pinos de gerenciamento de energia
  - **manufacturer_data**: Identificador do fabricante e informações da placa
  - **power_option**: Opções relacionadas ao fornecimento de energia e ao modo de suspensão
  - **display**: Informações do display/painel (opcional). Pode aparecer várias vezes para dispositivos com vários displays.
  - **led**: Configuração opcional de LED (repetível).
  - **sensor_data**: Leituras/definições opcionais de sensores (repetível).
  - **data_bus**: Definições globais de barramento (I2C/SPI etc.).
  - **binary_inputs**: Entradas binárias opcionais (botões, chaves).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

Se você quiser salvar a configuração que definiu, pode exportá-la como um arquivo `.bin`, `Hex` e `JSON` dentro deste painel. Por outro lado, este painel também suporta a importação de arquivos `JSON` para fins de configuração. O arquivo de configuração da tela de 4,26 pode ser obtido aqui.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para obter</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

Após definir a configuração, você pode carregá-la para o MCU usando a função **Write Config**.

## Uso do OEPL Image Uploader

OEPL Image Uploader é uma ferramenta online de upload para papel eletrônico, e também opera via protocolo BLE. Esta ferramenta é extremamente leve e sem código, eliminando o incômodo da velocidade de atualização lenta do e-paper tradicional. Seu método de uso é semelhante ao do OEPL Config Builder.

### Etapa 1: Conectar ao Uploader

O método de conexão é semelhante ao do Builder. O dispositivo é conectado via BLE. No entanto, deve-se observar que, devido a alguns conflitos entre o firmware anterior e os pinos necessários para este upload de imagem, algumas modificações no firmware são necessárias antes de usar esta função da web. Aqui, é fornecido um novo firmware para gravação. Basta seguir as etapas mencionadas anteriormente para realizar o processo de gravação.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para obter</button></p>
</a>
</div>

A variável na seção "E-Paper prefix filter(s)" precisa ser alterada para "OEPL"; caso contrário, o dispositivo não poderá ser encontrado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

### Passo 2: Fazer upload da imagem

Em seguida, clique no botão "Select File" para escolher um arquivo local para upload.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

Após a conclusão da transferência do arquivo, basta clicar no botão "Upload Image" para enviá-lo ao papel eletrônico.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

Quando "Upload Complete" for exibido, isso indica que o processo de gravação foi bem-sucedido! Em seguida, você verá que a imagem na tela foi alterada.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
