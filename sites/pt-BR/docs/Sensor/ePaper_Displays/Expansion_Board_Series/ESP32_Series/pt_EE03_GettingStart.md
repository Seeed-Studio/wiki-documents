---
description: Introdução à placa controladora EE03 para E-ink de 10,3 polegadas
title: Introdução à EE03
keywords:
  - E-ink
  - Placa controladora
  - 10.3 inch
  - ESP32
  - SenseCraft HMI
image: https://files.seeedstudio.com/wiki/Epaper/EE03/3-XIAO-ePaper-Display-Board-EE03-kit.webp
slug: /getting_started_with_ee03
sidebar_position: 2
sku: 100080566
last_update:
  date: 9/2/2026
  author: Nemo
createdAt: '2026-03-02'
updatedAt: '2026-09-02'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_ee03/
---

# Introdução à placa XIAO ePaper Display - EE03

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

<div class="table-center">
<table align="center">
    <tr>
        <th>Placa XIAO ePaper Display EE03</th>
        <th>Display ePaper monocromático de 10,3"</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE03/01.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-ESP32-S3-EE03-p-6638.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div align="center"><img width ={300} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100071485-10.3-monochrome-epaper-display.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/10-3inch-Monochrome-eInk-ePaper-Display-with-1404x1872-Pixels-p-6568.html?qid=BB9L37_r6uwit7x_1772441061474" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

Alimentada pelo **XIAO ESP32-S3 Plus**, a placa controladora ePaper EE03 é compatível com o **display ePaper monocromático de 10,3"**. Ela possui um conector de bateria JST 2,0 mm com chave liga/desliga, CI de carregamento integrado e vem com um botão de reset e três botões de usuário. É ideal para projetos de ePaper de baixo consumo, como porta-retratos digitais e quadros de informações.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/1.jpg" style={{width:800, height:'auto'}}/></div>

### Recursos

- **XIAO ESP32-S3 Plus integrado:** Funciona imediatamente quando conectado a um display ePaper compatível.
- **Suporte dedicado a display ePaper monocromático de 10,3":** Projetado especificamente para o display ePaper de 10,3" com atualização em alta velocidade, garantindo configuração rápida e operação estável.
- **Atualização em alta velocidade habilitada:** O controle de temporização T-CON integrado garante acionamento preciso em alta velocidade, enquanto o SHT40 onboard fornece medição de temperatura em tempo real para compensação de forma de onda.
- **Conector BAT com chave:** Oferece conexão simples de bateria e integra uma chave, permitindo gerenciamento eficiente de energia e economia de consumo.
- **Botões fáceis de usar:** Possui 1 botão de reset e 3 botões programáveis pelo usuário, oferecendo flexibilidade para acelerar projetos e funções personalizáveis.
- **Firmware SenseCraft HMI pré-gravado:** Basta conectar e começar a usar imediatamente com o SenseCraft HMI, nossa plataforma de design de UI sem código com IA. Escolha entre modelos prontos ou construa a interface arrastando e soltando componentes (com assistência opcional de IA) e faça o deploy no display ePaper em apenas alguns cliques.

### Especificações

| Parâmetro | Descrição |
| :--- | :--- |
| **Processador** | XIAO ESP32-S3 Plus |
| **Conector ePaper** | FPC 40 pinos 0,5 mm |
| **Conector de bateria** | JST 2,0 mm |
| **Chave** | Liga/Desliga da alimentação da bateria |
| **Alimentação** | - Bateria Li 3,7 V<br/>- USB Type-C |
| **Botão** | - 1x botão de reset<br/>- 3x botões de usuário |

### Aplicações

- **Leitores de e-book digitais:** Proporcionam uma experiência de leitura monocromática semelhante ao papel, com 16 níveis de escala de cinza e atualização rápida para viradas de página mais suaves e respostas mais ágeis.
- **Dashboard em tempo real:** Exiba informações ao vivo, como atualizações de clima, agendas de calendário, notificações importantes e widgets de dados como consumo de energia, status de sensores ou KPIs.
- **Alertas de segurança:** Mostre alertas e notificações sobre eventos de segurança, como detecção de movimento ou ativação de sensores de porta/janela.
- **Painel de chegada de transporte público:** Mostre em tempo real horários de chegada de ônibus/trem, status de rotas e avisos de serviço para o dia a dia de deslocamento.

## Visão geral de hardware
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/2.png" style={{width:800, height:'auto'}}/></div>

- **USB Type-C**: Para alimentação e gravação de firmware.
- **Conector FPC**: Para conectar o display ePaper.
- **Botão de reset**: Para reiniciar a placa.
- **Botões de usuário**: Botões programáveis para interação do usuário.
- **Chave liga/desliga**: Controla o ligar/desligar da bateria.
- **Botão Boot**: Usado para entrar no modo bootloader.
- **LEDs indicadores**: Indicadores de status para alimentação e carregamento.
- **Conector JST**: Conector JST 2,0 mm de 2 pinos para conectar a bateria.

## Introdução ao SenseCraft HMI

Esta seção irá guiá-lo na conexão da sua EE03 à plataforma SenseCraft HMI, permitindo que você atualize facilmente o conteúdo da tela sem fio.

### Instalação do equipamento

**Passo 1. Conecte a tela e a placa**
Conecte cuidadosamente o cabo FPC da sua tela ePaper ao conector na placa controladora EE03. Certifique-se de que o mecanismo de travamento esteja firme.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/01.gif" style={{width:800, height:'auto'}}/></div>

**Passo 2. Ligue a alimentação**
Conecte a placa EE03 a uma fonte de alimentação (computador ou adaptador USB) usando um cabo USB Type-C. Ao ligar, a tela será atualizada e exibirá uma imagem de boas-vindas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.jpg" style={{width:300,height:'auto'}}/></div>

**Passo 3. Entre no modo de configuração de rede**
Após a imagem de boas-vindas, a tela será atualizada automaticamente para mostrar a interface de configuração de rede. Isso indica que o dispositivo está pronto para se conectar ao Wi-Fi.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_3.png" style={{width:300,height:'auto'}}/></div>


### Configuração de rede

**Passo 4. Configure o Wi-Fi pelo celular**
Use o seu celular para escanear o código QR exibido na tela. Siga as instruções no telefone para inserir o SSID e a senha do seu Wi-Fi local e conectar a EE03 à internet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/Step_4.png" style={{width:600,height:'auto'}}/></div>

**Passo 5. Obtenha o código de pareamento**
Quando a configuração de rede for concluída com sucesso, a tela será atualizada novamente e exibirá um **código de pareamento** exclusivo. Você precisará desse código na próxima etapa.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_2.png" style={{width:300,height:'auto'}}/></div>

### Vinculação à plataforma e atualização

**Passo 6. Vincule o dispositivo no SenseCraft HMI**
Acesse a [plataforma SenseCraft HMI](https://sensecraft.seeed.cc/hmi/device). Faça login na sua conta. Vá até a seção de gerenciamento de dispositivos e selecione "New Device". Insira o código de pareamento exibido na sua tela E-ink.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/9.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/8.png" style={{width:500, height:'auto'}}/></div>

**Passo 7. Crie e envie uma nova interface**     
Na plataforma SenseCraft HMI, selecione o template adequado para a tela de 10,3" para criar uma nova interface ou enviar uma imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/10.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/5.png" style={{width:500, height:'auto'}}/></div>

**Passo 8. Aplique suas imagens**
Quando terminar, clique no botão "Apply" e selecione o seu dispositivo EE03.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/6.png" style={{width:800, height:'auto'}}/></div>

**Passo 9. Exiba na tela**
Por fim, a EE03 receberá os dados e atualizará a tela de 10,3" com o seu novo conteúdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/EE03_HMI_7.png" style={{width:300, height:'auto'}}/></div>


## Introdução ao Arduino

### Instalar a biblioteca Seeed GFX2

:::tip
Esta biblioteca tem a mesma função que a biblioteca TFT e **não** é compatível com ela. Se você instalou a biblioteca TFT ou outras bibliotecas de display semelhantes, desinstale-as primeiro.
:::

Baixe e instale a biblioteca Seeed GFX2 a partir do GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_GFX2" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para baixar</button></p>
</a>
</div>

Após baixar a biblioteca, vá em **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:500, height:'auto'}}/></div>


### Configurar e gravar o programa

Conforme mostrado na imagem, navegue até o exemplo por meio deste menu:
File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → ESP32 Series → EE03 → 10.3 Monochrome ePaper Display → 10_3_inch_Monochrome_HelloWorld


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/8.png" style={{width:800, height:'auto'}}/></div>

Depois disso, vá em **Tools** -> **Board** -> **XIAO ESP32S3 Plus** e **Tools** -> **Port** -> **Selecione a porta à qual sua placa está conectada**. 

Observe que a PSRAM deve estar habilitada.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/17.png" style={{width:400, height:'auto'}}/></div>

Em seguida, clique em **Upload** para enviar o código.
Agora você verá o feedback na sua tela de epaper! A seguir está o resultado do exemplo HelloWorld.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE03/7.png" style={{width:500, height:'auto'}}/></div>


## Solução de problemas

**P1: A tela não atualiza após ligar.**
*   Verifique se o cabo FPC está corretamente inserido e travado.
*   Certifique-se de que o cabo USB Type-C fornece energia suficiente.
*   Pressione o botão Reset para reiniciar a placa.
*   Para usuários de Arduino: certifique-se de que o PSRAM está habilitado em **Tools** → **PSRAM** → **OPI PSRAM**.

**P2: A configuração de Wi-Fi falha.**
*   Certifique-se de que sua rede Wi-Fi é de 2,4 GHz.
*   Verifique se a senha do Wi-Fi foi inserida corretamente.

**P3: A exibição da tela está embaçada ou com efeito fantasma.**
*   Isso pode acontecer se a tela não for atualizada por um longo tempo ou se a fonte de alimentação estiver instável. Tente atualizar a tela novamente pela plataforma HMI.

**P4: A tela emite um som agudo de zumbido durante a atualização.**
*   Isso é normal para telas ePaper. O circuito de acionamento de alta tensão produz um som audível durante o ciclo de atualização, especialmente em telas maiores. Isso não indica falha de hardware e irá parar assim que a atualização for concluída.

**P5: A vinculação do dispositivo SenseCraft HMI falha.**
*   Verifique novamente se o Pair Code foi inserido corretamente (diferencia maiúsculas de minúsculas).
*   Certifique-se de que seu telefone e o dispositivo estejam na mesma rede Wi-Fi de 2,4 GHz durante a vinculação do dispositivo.
*   Se o dispositivo aparecer como offline, pressione o botão Reset e tente vincular o dispositivo novamente.

## Recursos
- **[PDF]** [Seeed Studio XIAO ePaper Display EE03 Esquemático](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_251217.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE03 PCBA&SCH](https://files.seeedstudio.com/wiki/Epaper/EE03/XIAO_ePaper_Display_Board_EE03_V1.0_SCH_&_PCB_251217.zip)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível.

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
