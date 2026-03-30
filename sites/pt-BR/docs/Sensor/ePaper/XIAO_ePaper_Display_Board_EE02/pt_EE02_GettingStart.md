---
description: Primeiros passos com a placa controladora de E-ink EE02 de 13,3 polegadas
title: Primeiros passos com a XIAO ePaper Display Board - EE02
keywords:
  - E-ink
  - Driver Board
  - 13.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE02/ee02head.webp
slug: /getting_started_with_ee02
sku: 100067144
last_update:
  date: 2025-12-20T00:00:00.000Z
  author: Allen
createdAt: '2025-12-19'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_ee02/
---

<div class="table-center">
<table align="center">
    <tr>
        <th>Placa de Display XIAO ePaper EE02</th>
        <th>Display E-Ink spectra™ 6 de 13,3"</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-xiao-epaper-display-board-ee02.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-ESP32-S3-EE02-p-6639.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100088646-13.3-elnk-spectra-6-color-display.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/13-3inch-Six-Color-eInk-ePaper-Display-with-1200x1600-Pixels-p-6569.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

A **EE02** é uma placa controladora de tela E-ink de alto desempenho, especificamente projetada para displays de papel eletrônico de **13,3 polegadas**. Alimentada pelo chip ESP32-S3, ela oferece suporte a conectividade Wi-Fi e Bluetooth, tornando-se uma solução ideal para aplicações de display sem fio.

Semelhante à sua irmã, a EE04 (projetada para telas menores), a EE02 oferece uma experiência contínua para desenvolvedores que desejam integrar displays E-ink de grande formato em seus projetos de IoT. Ela simplifica o processo de acionamento e oferece suporte à plataforma SenseCraft HMI para gerenciamento fácil de conteúdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/1.jpg" style={{width:800, height:'auto'}}/></div>

### Recursos

- **Controlador poderoso**: Baseada no ESP32-S3, oferecendo processamento robusto e recursos sem fio.
- **Dedicada a telas grandes**: Especificamente otimizada para acionar displays E-ink de 13,3 polegadas com alta estabilidade e nitidez.
- **Conectividade sem fio**: Suporta Wi-Fi e Bluetooth 5.0 (LE), permitindo atualizações remotas de dados e integração com a nuvem.
- **Baixo consumo de energia**: Projetada para eficiência energética, adequada para aplicações alimentadas por bateria.
- **Integração fácil**: Compatível com o SenseCraft HMI para design de interface por arrastar e soltar e gerenciamento remoto.
- **Interfaces versáteis**: Inclui Type-C para alimentação/programação e conectores padrão para telas E-ink.

### Especificação

| Item | Descrição |
| :--- | :--- |
| **Controlador** | ESP32-S3 |
| **Tamanho de tela suportado** | Display E-ink de 13,3 polegadas |
| **Conectividade** | Wi-Fi 802.11 b/g/n, Bluetooth 5.0 (LE) |
| **Fonte de alimentação** | 5V via USB Type-C |
| **Tensão de operação** | 3,3V |
| **Interface** | USB Type-C, conector FPC para E-ink |
| **Dimensões** | 80x40 mm |
| **Temperatura de operação** | -20°C a 70°C |

### Aplicação

- **Sinalização digital**: Ideal para menus de restaurantes, placas de salas de reunião e etiquetas de preço em varejo.
- **Casa inteligente**: Painéis de informação para clima, calendário e status de automação residencial.
- **IHM industrial**: Displays de status de baixo consumo para máquinas e gestão de armazéns.
- **Educação**: Leitores de e-books ou quadros de informação para salas de aula.
- **Escritório**: Placas de mesa com nomes ou quadros de avisos.

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/overview.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: Para alimentação e gravação de firmware.
- **Conector FPC**: Para conectar o display E-ink de 13,3 polegadas.
- **Botão de reset**: Para reiniciar a placa.
- **Botões**: São eles "atualizar a página","alternar para a página anterior" e "alternar para a próxima página"
- **Interruptor**: Controla o ligar/desligar da alimentação da bateria.
- **Botão de boot**: Usado para entrar no modo bootloader.
- **LEDs indicadores**: Piscando significa que não há conexão de bateria. Luz verde acesa significa que a bateria está carregando.
- **Conector JST**: Conector JST de 2 pinos, 2,0 mm, para conectar a bateria.

## Primeiros passos com o SenseCraft HMI

Esta seção irá guiá-lo na conexão da sua EE02 à plataforma SenseCraft HMI, permitindo que você atualize facilmente o conteúdo da tela sem fio.

### Instalação do equipamento

**Passo 1. Conecte a tela e a placa**
Conecte cuidadosamente o cabo FPC da tela E-ink de 13,3 polegadas ao conector na placa controladora EE02. Certifique-se de que o mecanismo de travamento esteja firme.

**Passo 2. Ligue a alimentação**
Conecte a placa EE02 a uma fonte de alimentação (computador ou adaptador USB) usando um cabo USB Type-C. Ao ligar, a tela será atualizada e exibirá uma imagem de boas-vindas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/4.JPG" style={{width:300,height:'auto'}}/></div>

**Passo 3. Entrar no modo de configuração de rede**
Após a imagem de boas-vindas, a tela será atualizada automaticamente para mostrar a interface de Configuração de Rede. Isso indica que o dispositivo está pronto para se conectar ao Wi-Fi.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/5.JPG" style={{width:300,height:'auto'}}/></div>

### Configuração de rede

**Passo 4. Configure o Wi-Fi via telefone celular**
Use o seu telefone celular para escanear o código QR exibido na tela (ou conectar ao ponto de acesso indicado). Siga as instruções no seu telefone para inserir o SSID e a senha do seu Wi-Fi local para conectar a EE02 à internet.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/6.JPG" style={{width:300,height:'auto'}}/></div> -->

**Passo 5. Obter o código de pareamento**
Quando a configuração de rede for concluída com sucesso, a tela será atualizada novamente e exibirá um **Código de Pareamento** (ou ID do dispositivo) exclusivo. Você precisará desse código para o próximo passo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/7.jpg" style={{width:300,height:'auto'}}/></div>

### Vinculação à plataforma e atualização

**Passo 6. Vincule o dispositivo no SenseCraft HMI**
Acesse a [Plataforma SenseCraft HMI](https://sensecraft.seeed.cc/hmi/device). Faça login na sua conta. Vá para a seção de gerenciamento de dispositivos e selecione "Add Device". Digite o Código de Pareamento exibido na sua tela E-ink para vincular o dispositivo à sua conta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.jpg" style={{width:800, height:'auto'}}/></div>

**Passo 7. Crie e envie uma nova interface**
Na plataforma SenseCraft HMI, use o editor para criar uma nova interface (por exemplo, enviar uma imagem ou desenhar um painel).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.jpg" style={{width:800, height:'auto'}}/></div>

**Passo 8. Aplique suas imagens**
Quando terminar, clique no botão "Apply" no canto superior direito e selecione o dispositivo que você deseja que receba a imagem. A EE02 receberá os dados e atualizará a tela de 13,3 polegadas com o seu novo conteúdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.jpg" style={{width:800, height:'auto'}}/></div>

**Passo 9. Exibição na tela**

Por fim, a EE02 receberá os dados e atualizará a tela de 13,3 polegadas com o seu novo conteúdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/11.jpg" style={{width:300, height:'auto'}}/></div>

## Primeiros passos com Arduino

### Instalar a biblioteca Seeed GFX

:::tip
Esta biblioteca tem a mesma função que a biblioteca TFT e não é compatível com ela. Se você tiver instalado a biblioteca TFT ou outras bibliotecas de display semelhantes, desinstale-as primeiro.
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

Selecione o tipo do seu dispositivo e algum código será gerado. Copie esse código e nós o utilizaremos mais tarde.

:::tip
Se você fizer a escolha errada, a tela não exibirá nada.

Portanto, certifique-se do tipo dos seus dispositivos ou componentes.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_1.png" style={{width:800, height:'auto'}}/></div>

Após baixar a biblioteca, vá em **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

### Configure e grave o programa

Selecione o exemplo mostrado na figura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_2.png" style={{width:800, height:'auto'}}/></div>

Crie um novo arquivo "driver.h" e cole esse código nele. O código deve ser assim:
```cpp
#define BOARD_SCREEN_COMBO 510 // 13.3 inch six-color ePaper Screen（T133A01）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE02
```


Depois disso, vá em **Tools** -> **Board** -> **XIAO ESP32S3 Plus** e **Tools** -> **Port** -> **Select the port your board is connected to**. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_3.png" style={{width:1000, height:'auto'}}/></div>

Observe que o PSAM deve estar ativado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_4.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, clique em **Upload** para enviar o código.
Agora você verá o retorno na sua tela de epaper! A seguir estão os resultados dos exemplos de Bitmap.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/ee02_5.jpg" style={{width:500, height:'auto'}}/></div>

## Solução de Problemas

**P1: A tela não atualiza após ligar.**
*   Verifique se o cabo FPC está corretamente inserido e travado.
*   Certifique-se de que o cabo USB Type-C fornece energia suficiente.
*   Pressione o botão Reset para reiniciar a placa.

**P2: A configuração do Wi-Fi falha.**
*   Certifique-se de que sua rede Wi-Fi é 2,4GHz (5GHz não é suportado).
*   Verifique se a senha do Wi-Fi foi inserida corretamente.
*   Aproxime-se do roteador para garantir um sinal forte.

**P3: A exibição da tela está embaçada ou com efeito fantasma.**
*   Isso pode acontecer se a tela não for atualizada por um longo tempo ou se a fonte de alimentação estiver instável. Tente atualizar a tela novamente pela plataforma HMI.

## Recursos
- **[PDF]** [13.3 E6 eInk Display module Datasheet](https://files.seeedstudio.com/wiki/Epaper/EE02/13_3_E6_eInk_Display_module_Datasheet.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE02 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE02/202000224_XIAO_ePaper_Display_Board_EE02_V1.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE02 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE02/XIAO_ePaper_Display_Board_EE02_V1.0_final_SCH_and_PCB_251202.zip)

## Suporte Técnico e Discussão sobre o Produto

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