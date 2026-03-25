---
description: Primeiros passos com a placa controladora EE03 de E-ink de 10,3 polegadas
title: Primeiros passos com a placa de display XIAO ePaper - EE03
keywords:
  - E-ink
  - Placa Controladora
  - 10.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE03/3-XIAO-ePaper-Display-Board-EE03-kit.jpg
slug: /getting_started_with_ee03
sku: 100080566
last_update:
  date: 2026-03-1
  author: Jackson.Li
createdAt: '2026-03-02'
updatedAt: '2026-03-04'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_ee03/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

<div class="table-center">
<table align="center">
    <tr>
        <th>Placa de Display XIAO ePaper EE03</th>
        <th>Display ePaper Monocromático de 10,3"</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-ESP32-S3-EE03-p-6638.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100071485-10.3-monochrome-epaper-display.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/10-3inch-Monochrome-eInk-ePaper-Display-with-1404x1872-Pixels-p-6568.html?qid=BB9L37_r6uwit7x_1772441061474" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

Alimentada pelo **XIAO ESP32-S3 Plus**, a placa controladora ePaper EE03 é compatível com o **display ePaper monocromático de 10,3"**. Ela possui um conector de bateria JST 2,0 mm com chave liga/desliga, CI de carregamento integrado e vem com um botão de reset e três botões de usuário. É ideal para projetos de ePaper de baixo consumo, como porta-retratos digitais e quadros de informação.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg" style={{width:800, height:'auto'}}/></div>

### Recursos

- **XIAO ESP32-S3 Plus integrado:** Funciona imediatamente quando conectado a um display ePaper compatível.
- **Suporte dedicado ao display ePaper monocromático de 10,3":** Projetado especificamente para o display ePaper de 10,3" com atualização em alta velocidade, garantindo configuração rápida e operação estável.
- **Atualização em alta velocidade habilitada:** O T-CON integrado de controle de temporização garante acionamento preciso em alta velocidade, enquanto o SHT40 onboard fornece medição de temperatura em tempo real para compensação de forma de onda.
- **Conector de bateria com chave:** Oferece conexão simples de bateria e integra uma chave, permitindo gerenciamento eficiente de energia e economia de consumo.
- **Botões fáceis de usar:** Possui 1 botão de reset e 3 botões programáveis pelo usuário, oferecendo flexibilidade para acelerar projetos e funções personalizáveis.
- **Firmware SenseCraft HMI pré-instalado:** Basta conectar e começar imediatamente com o SenseCraft HMI, nossa plataforma de design de UI sem código com IA. Escolha entre modelos prontos ou construa interfaces arrastando e soltando componentes (com assistência opcional de IA) e faça o deploy no display ePaper em apenas alguns cliques.

### Especificação

| Parâmetro | Descrição |
| :--- | :--- |
| **Processador** | XIAO ESP32-S3 Plus |
| **Conector ePaper** | FPC 40 pinos 0,5 mm |
| **Conector de bateria** | JST 2,0 mm |
| **Chave** | Liga/Desliga da alimentação da bateria |
| **Fonte de alimentação** | - Bateria Li 3,7 V<br/>- USB Type-C |
| **Botão** | - 1x botão de reset<br/>- 3x botões de usuário |

### Aplicações

- **Leitores de e-book digitais:** Ofereça uma experiência de leitura monocromática similar ao papel, com 16 níveis de escala de cinza e atualização rápida para trocas de página mais suaves e respostas mais ágeis.
- **Painel de controle em tempo real:** Exiba informações ao vivo como previsão do tempo, agenda de calendário, notificações importantes e widgets de dados como consumo de energia, status de sensores ou KPIs.
- **Alertas de segurança:** Exiba alertas e notificações sobre eventos de segurança, como detecção de movimento ou ativação de sensores de porta/janela.
- **Quadro de chegadas de transporte público:** Mostre em tempo real horários de chegada de ônibus/trem, status de rotas e alertas de serviço para o dia a dia de deslocamento.

## Visão geral do hardware
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/2.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: Para alimentação e gravação de firmware.
- **Conector FPC**: Para conectar o display ePaper.
- **Botão de reset**: Para reiniciar a placa.
- **Botões de usuário**: Botões programáveis para interação do usuário.
- **Chave de energia**: Controla o liga/desliga da bateria.
- **Botão de boot**: Usado para entrar no modo bootloader.
- **LEDs indicadores**: Indicadores de status para energia e carregamento.
- **Conector JST**: Conector JST 2,0 mm de 2 pinos para conectar a bateria.

## Primeiros passos com o SenseCraft HMI

Esta seção orienta você na conexão da sua EE03 à plataforma SenseCraft HMI, permitindo atualizar facilmente o conteúdo da tela sem fio.

### Instalação do equipamento

**Passo 1. Conectar a tela e a placa**
Conecte cuidadosamente o cabo FPC da sua tela ePaper ao conector na placa controladora EE03. Certifique-se de que o mecanismo de travamento esteja bem fixado.

**Passo 2. Ligar**
Conecte a placa EE03 a uma fonte de alimentação (computador ou adaptador USB) usando um cabo USB Type-C. Ao ligar, a tela será atualizada e exibirá uma imagem de boas-vindas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_1.jpg" style={{width:300,height:'auto'}}/></div>

**Passo 3. Entrar no modo de configuração de rede**
Após a imagem de boas-vindas, a tela será atualizada automaticamente para mostrar a interface de Configuração de Rede. Isso indica que o dispositivo está pronto para se conectar ao Wi-Fi.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_3.jpg" style={{width:300,height:'auto'}}/></div>


### Configuração de rede

**Passo 4. Configurar o Wi-Fi pelo celular**
Use seu celular para escanear o código QR exibido na tela. Siga as instruções no telefone para inserir o SSID e a senha do seu Wi-Fi local e conectar a EE03 à internet.

**Passo 5. Obter código de pareamento**
Quando a configuração de rede for concluída com sucesso, a tela será atualizada novamente e exibirá um **código de pareamento** exclusivo. Você precisará desse código para o próximo passo.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_2.jpg" style={{width:300,height:'auto'}}/></div>

### Vinculação à plataforma e atualização

**Passo 6. Vincular o dispositivo no SenseCraft HMI**
Acesse a [plataforma SenseCraft HMI](https://sensecraft.seeed.cc/hmi/device). Faça login na sua conta. Vá até a seção de gerenciamento de dispositivos e selecione "Add Device". Digite o código de pareamento exibido na sua tela E-ink.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_4.jpg" style={{width:800, height:'auto'}}/></div>
**Passo 7. Criar e enviar uma nova interface**     
Na plataforma SenseCraft HMI, selecione o modelo adequado para a tela de 10,3" para criar uma nova interface ou enviar uma imagem.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_8.jpg" style={{width:800, height:'auto'}}/></div>
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_5.jpg" style={{width:800, height:'auto'}}/></div>

**Passo 8. Aplicar suas imagens**
Quando terminar, clique no botão "Apply" e selecione o seu dispositivo EE03.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_6.jpg" style={{width:800, height:'auto'}}/></div>

**Passo 9. Exibir na tela**
Por fim, a EE03 receberá os dados e atualizará a tela de 10,3" com o seu novo conteúdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.jpg" style={{width:300, height:'auto'}}/></div>


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

Selecione o tipo do seu dispositivo e algum código será gerado. Copie esse código, pois o utilizaremos mais tarde.

:::tip
Se você fizer a escolha errada, a tela não exibirá nada.

Portanto, certifique-se de selecionar o tipo correto de dispositivo ou componente.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/3.png" style={{width:800, height:'auto'}}/></div>

Depois de baixar a biblioteca, vá em **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>


### Configurar e gravar o programa
Selecione o exemplo mostrado na figura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/4.png" style={{width:800, height:'auto'}}/></div>

Crie um novo arquivo "driver.h" e cole esse código nele. O código deve ser assim:
```cpp
#define BOARD_SCREEN_COMBO 511 // 10.3 inch monochrome ePaper Screen（ED103TC2）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE03
```


Depois disso, vá para **Tools** -> **Board** -> **XIAO ESP32S3 Plus** e **Tools** -> **Port** -> **Select the port your board is connected to**. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/5.jpg" style={{width:1000, height:'auto'}}/></div>

Observe que o PSAM deve estar habilitado.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.jpg" style={{width:1000, height:'auto'}}/></div>

Em seguida, clique em **Upload** para fazer o upload do código.
Agora você verá o feedback na tela do seu epaper! A seguir estão os resultados dos exemplos de Bitmap.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/7.jpg" style={{width:500, height:'auto'}}/></div>


## Solução de Problemas

**P1: A tela não é atualizada após ligar.**
*   Verifique se o cabo FPC está corretamente inserido e travado.
*   Certifique-se de que o cabo USB Tipo-C fornece energia suficiente.
*   Pressione o botão Reset para reiniciar a placa.

**P2: A configuração do Wi-Fi falha.**
*   Certifique-se de que sua rede Wi-Fi é de 2,4GHz.
*   Verifique se a senha do Wi-Fi foi inserida corretamente.

**P3: A tela está embaçada ou com efeito fantasma.**
*   Isso pode acontecer se a tela não for atualizada por um longo tempo ou se a fonte de alimentação estiver instável. Tente atualizar a tela novamente pela plataforma HMI.

## Recursos
- **[PDF]** [Esquema do Seeed Studio XIAO ePaper Display EE03](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_251217.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE03 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_&_PCB_251217.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível.

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
