---
description: Introdução à placa controladora de E-ink EE02 de 13,3 polegadas
title: Introdução ao EE02
keywords:
  - E-ink
  - Placa controladora
  - 13.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE02/ee02head.webp
sidebar_position: 1
slug: /getting_started_with_ee02
sku: 100067144
last_update:
  date: 12/20/2025
  author: Allen
createdAt: '2025-12-19'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_ee02/
---

# Introdução à XIAO ePaper Display Board - EE02

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE02</th>
        <th>Display E-Ink spectra™ 6 de 13,3"</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-xiao-epaper-display-board-ee02.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-ESP32-S3-EE02-p-6639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100088646-13.3-elnk-spectra-6-color-display.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/13-3inch-Six-Color-eInk-ePaper-Display-with-1200x1600-Pixels-p-6569.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

A **EE02** é uma placa controladora de tela E-ink de alto desempenho, projetada especificamente para displays de papel eletrônico de **13,3 polegadas**. Alimentada pelo chip ESP32-S3, ela oferece conectividade Wi-Fi e Bluetooth, tornando-se uma solução ideal para aplicações de exibição sem fio.

Semelhante ao seu modelo irmão, o EE04 (projetado para telas menores), o EE02 oferece uma experiência perfeita para desenvolvedores que desejam integrar displays E-ink de grande formato em seus projetos de IoT. Ela simplifica o processo de acionamento e oferece suporte à plataforma SenseCraft HMI para gerenciamento fácil de conteúdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### Recursos

- **Controlador poderoso**: Baseado no ESP32-S3, oferecendo capacidade robusta de processamento e recursos sem fio.
- **Dedicado a telas grandes**: Otimizado especificamente para acionar displays E-ink de 13,3 polegadas com alta estabilidade e nitidez.
- **Conectividade sem fio**: Suporta Wi-Fi e Bluetooth 5.0 (LE), permitindo atualizações remotas de dados e integração com a nuvem.
- **Baixo consumo de energia**: Projetado para eficiência energética, adequado para aplicações alimentadas por bateria.
- **Integração fácil**: Compatível com SenseCraft HMI para design de interface por arrastar e soltar e gerenciamento remoto.
- **Interfaces versáteis**: Inclui Type-C para alimentação/programação e conectores padrão para telas E-ink.

### Especificações

| Item | Descrição |
| :--- | :--- |
| **Controlador** | XIAO ESP32-S3 Plus |
| **Tamanho de tela suportado** | Display E-ink de 13,3 polegadas |
| **Conectividade** | Wi-Fi 802.11 b/g/n, Bluetooth 5.0 (LE) |
| **Fonte de alimentação** | 5V via USB Type-C |
| **Tensão de operação** | 3,3V |
| **Interface** | USB Type-C, conector FPC para E-ink |
| **Dimensões** | 80x43 mm |
| **Temperatura de operação** | -20°C a 70°C |

### Aplicações

- **Sinalização digital**: Ideal para menus de restaurantes, placas de salas de reunião e etiquetas de preço no varejo.
- **Casa inteligente**: Painéis de informação para clima, calendário e status de automação residencial.
- **IHM industrial**: Telas de status de baixo consumo para máquinas e gestão de armazéns.
- **Educação**: Leitores de e-books ou quadros de informação em salas de aula.
- **Escritório**: Placas de identificação de mesa ou quadros de avisos.

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: Para alimentação e gravação de firmware.
- **Conector FPC**: Para conectar o display E-ink de 13,3 polegadas.
- **Botão de reset**: Para reiniciar a placa.
- **Botões**: São "refresh the page","switch previous page" e "switch next page"
- **Chave**: Controla o ligar/desligar da alimentação da bateria.
- **Botão de boot**: Usado para entrar no modo bootloader.
- **LEDs indicadores**: Piscando significa que não há conexão de bateria. Luz verde acesa significa que a bateria está carregando.
- **Conector JST**: Conector JST de 2 pinos 2,0 mm para conectar a bateria.

## Introdução ao SenseCraft HMI

Esta seção irá guiá-lo na conexão do seu EE02 à plataforma SenseCraft HMI, permitindo que você atualize facilmente o conteúdo da tela sem fio.

### Instalação do equipamento

**Passo 1. Conectar a tela e a placa**
Conecte cuidadosamente o cabo FPC da tela E-ink de 13,3 polegadas ao conector na placa controladora EE02. Certifique-se de que o mecanismo de travamento esteja firme.

**Passo 2. Ligar**
Conecte a placa EE02 a uma fonte de alimentação (computador ou adaptador USB) usando um cabo USB Type-C. Ao ligar, a tela será atualizada e exibirá uma imagem de boas-vindas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**Passo 3. Entrar no modo de configuração de rede**
Após a imagem de boas-vindas, a tela será atualizada automaticamente para mostrar a interface de Configuração de Rede. Isso indica que o dispositivo está pronto para se conectar ao Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### Configuração de rede

**Passo 4. Configurar o Wi-Fi pelo celular**
Use seu celular para escanear o código QR exibido na tela (ou conectar ao hotspot indicado). Siga as instruções no telefone para inserir o SSID e a senha do seu Wi-Fi local e conectar o EE02 à internet.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/6.JPG" style={{width:300,height:'auto'}}/></div> -->

**Passo 5. Obter o código de pareamento**
Quando a configuração de rede for concluída com sucesso, a tela será atualizada novamente e exibirá um **Código de Pareamento** (ou ID do dispositivo) exclusivo. Você precisará desse código para o próximo passo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.jpg" style={{width:300,height:'auto'}}/></div>

### Vinculação à plataforma e atualização

**Passo 6. Vincular o dispositivo no SenseCraft HMI**
Acesse a [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/hmi/device). Faça login na sua conta. Vá para a seção de gerenciamento de dispositivos e selecione "Add Device". Insira o Código de Pareamento exibido na sua tela E-ink para vincular o dispositivo à sua conta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.jpg" style={{width:800, height:'auto'}}/></div>

**Passo 7. Criar e enviar uma nova interface**
Na plataforma SenseCraft HMI, use o editor para criar uma nova interface (por exemplo, enviar uma imagem ou projetar um painel).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.jpg" style={{width:800, height:'auto'}}/></div>

**Passo 8. Aplicar suas imagens**
Quando terminar, clique no botão "Apply" no canto superior direito e selecione o dispositivo que você deseja que receba a imagem. O EE02 receberá os dados e atualizará a tela de 13,3 polegadas com o seu novo conteúdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.jpg" style={{width:800, height:'auto'}}/></div>

**Passo 9. Exibir na tela**

Por fim, o EE02 receberá os dados e atualizará a tela de 13,3 polegadas com o seu novo conteúdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.jpg" style={{width:300, height:'auto'}}/></div>

## Introdução ao Arduino

### Instalar a biblioteca Seeed GFX

:::tip
Esta biblioteca tem a mesma função que a biblioteca TFT e não é compatível com ela. Se você instalou a biblioteca TFT ou outras bibliotecas de display semelhantes, desinstale-as primeiro.
:::

Baixe e instale a biblioteca Seeed GFX a partir do GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para baixar</button></p>
</a>
</div>

Role para baixo e abra este link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Selecione o tipo do seu dispositivo e algum código será gerado. Copie esse código, pois o usaremos mais tarde.

:::tip
Se você fizer a escolha errada, a tela não exibirá nada.

Portanto, certifique-se do tipo dos seus dispositivos ou componentes.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_1.png" style={{width:800, height:'auto'}}/></div>

Após baixar a biblioteca, vá em **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

### Configurar e gravar o programa

Selecione o exemplo mostrado na figura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_2.png" style={{width:800, height:'auto'}}/></div>

Crie um novo arquivo "driver.h" e cole esse código nele. O código deve ser assim:
```cpp
#define BOARD_SCREEN_COMBO 510 // 13.3 inch six-color ePaper Screen（T133A01）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE02
```


Depois disso, vá para **Tools** -> **Board** -> **XIAO ESP32S3 Plus** e **Tools** -> **Port** -> **Select the port your board is connected to**. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_3.png" style={{width:1000, height:'auto'}}/></div>

Observe que a PSRAM deve estar ativada.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_4.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, clique em **Upload** para enviar o código.
Agora você verá o retorno na sua tela de epaper! A seguir estão os resultados dos exemplos de Bitmap.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_5.jpg" style={{width:500, height:'auto'}}/></div>

## Solução de problemas

**P1: A tela não atualiza após ligar.**
*   Verifique se o cabo FPC está corretamente inserido e travado.
*   Certifique-se de que o cabo USB Type-C fornece energia suficiente.
*   Pressione o botão Reset para reiniciar a placa.

**P2: A configuração de Wi-Fi falha.**
*   Certifique-se de que sua rede Wi-Fi é 2,4 GHz (5 GHz não é suportado).
*   Verifique se a senha do Wi-Fi foi inserida corretamente.
*   Aproxime-se do roteador para garantir um sinal forte.

**P3: A exibição da tela está borrada ou com efeito fantasma.**
*   Isso pode acontecer se a tela não for atualizada por um longo tempo ou se a fonte de alimentação estiver instável. Tente atualizar a tela novamente pela plataforma HMI.

## Recursos
- **[PDF]** [13.3 E6 eInk Display module Datasheet](https://files.seeedstudio.com/wiki/Epaper/EE02/13_3_E6_eInk_Display_module_Datasheet.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE02 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE02 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>