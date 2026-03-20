---
description: Esta página explica como usar a função de monitor UART do XIAO Debug Mate.
title: Monitor UART
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/main_uart.webp
slug: /xiao_debug_mate_serial
sku: 109990585
sidebar_position: 3
last_update:
  date: 10/22/2025
  author: Citric
createdAt: '2025-10-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_debug_mate_serial/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/main_uart.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

Bem-vindo à documentação do Monitor UART do XIAO Debug Mate. 

Esta página fornece orientações claras sobre como usar o Debug Mate para monitoramento de dados seriais. Você encontrará instruções passo a passo para configuração de hardware, ferramentas de software recomendadas e explicações de conceitos relevantes para ajudar você a aproveitar ao máximo os recursos de monitoramento UART em cenários de desenvolvimento e depuração.

## Conceitos a entender antes de usar o Monitor Serial

Antes de começar, vamos esclarecer dois conceitos fundamentais que são essenciais para trabalhar com comunicação serial.

### Comunicação serial

Comunicação serial é um método de envio de dados, um bit de cada vez, sequencialmente, por um único canal de comunicação. Pense nisso como carros trafegando por uma estrada de mão única, um atrás do outro. No mundo dos microcontroladores, isso é mais comumente implementado usando um protocolo chamado **UART** (Universal Asynchronous Receiver-Transmitter). É a principal forma de os desenvolvedores obterem mensagens de depuração, leituras de sensores e atualizações de status de seus dispositivos.

### RX/TX

Estes são os dois pinos que fazem a comunicação serial acontecer:

*   **TX (Transmit):** Este é o pino de "envio". O microcontrolador usa este pino para enviar dados.
*   **RX (Receive):** Este é o pino de "recebimento". O microcontrolador usa este pino para escutar dados recebidos.

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/uart_communica_logic.gif" style={{width:800, height:'auto'}}/></div> -->

export const UartDiagram = () => (
  <div
    style={{
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: "#f4f4f9",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      maxWidth: "800px",
      margin: "20px auto",
      textAlign: "center"
    }}
  >
    <h3 style={{ color: "#333", marginBottom: "10px" }}>Lógica de Comunicação UART</h3>
    <div style={{ color: "#666", fontSize: "0.9em", marginBottom: "20px" }}>
      A Regra de Ouro: <strong>TX</strong> (Transmit) deve ser conectado ao <strong>RX</strong> (Receive)
    </div>

    <svg viewBox="0 0 600 350" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs>
        <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3498db" />
        </marker>
        <marker id="arrowhead-orange" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#e67e22" />
        </marker>
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.3" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />

      {/* Device A */}
      <g transform="translate(50, 50)">
        <rect x="0" y="0" width="120" height="200" rx="10" ry="10" fill="#ffffff" stroke="#333" strokeWidth="2" filter="url(#dropShadow)" />
        <text x="60" y="30" textAnchor="middle" fontWeight="bold" fill="#333">Dispositivo A</text>
        <text x="60" y="50" textAnchor="middle" fontSize="12" fill="#777">(MCU/PC)</text>

        {/* A Pins */}
        <g transform="translate(120, 80)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="4" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">TX</text>
          <text x="-15" y="18" textAnchor="end" fontSize="10" fill="#999">Transmit</text>
        </g>
        <g transform="translate(120, 120)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="4" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">RX</text>
          <text x="-15" y="18" textAnchor="end" fontSize="10" fill="#999">Receive</text>
        </g>
        <g transform="translate(120, 170)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="-15" y="5" textAnchor="end" fontSize="14" fontWeight="bold" fill="#333">GND</text>
        </g>
      </g>

      {/* Device B */}
      <g transform="translate(430, 50)">
        <rect x="0" y="0" width="120" height="200" rx="10" ry="10" fill="#ffffff" stroke="#333" strokeWidth="2" filter="url(#dropShadow)" />
        <text x="60" y="30" textAnchor="middle" fontWeight="bold" fill="#333">Dispositivo B</text>
        <text x="60" y="50" textAnchor="middle" fontSize="12" fill="#777">(Sensor)</text>

        {/* B Pins */}
        <g transform="translate(0, 80)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="4" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">TX</text>
          <text x="15" y="18" textAnchor="start" fontSize="10" fill="#999">Transmit</text>
        </g>
        <g transform="translate(0, 120)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="4" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">RX</text>
          <text x="15" y="18" textAnchor="start" fontSize="10" fill="#999">Receive</text>
        </g>
        <g transform="translate(0, 170)">
          <circle cx="0" cy="0" r="6" fill="#333" />
          <text x="15" y="5" textAnchor="start" fontSize="14" fontWeight="bold" fill="#333">GND</text>
        </g>
      </g>

      {/* Connections */}
      <path id="lineAtoB" d="M 176 130 C 250 130, 350 170, 424 170" fill="none" stroke="#e67e22" strokeWidth="3" markerEnd="url(#arrowhead-orange)" />
      <path id="lineBtoA" d="M 424 130 C 350 130, 250 170, 176 170" fill="none" stroke="#3498db" strokeWidth="3" markerEnd="url(#arrowhead-blue)" />
      <path d="M 176 220 L 424 220" fill="none" stroke="#333" strokeWidth="3" strokeDasharray="5,5" />

      {/* Animated Packets */}
      <circle r="5" fill="#e67e22">
        <animateMotion repeatCount="indefinite" dur="1.5s" keyPoints="0;1" keyTimes="0;1">
          <mpath href="#lineAtoB" />
        </animateMotion>
      </circle>
      <circle r="5" fill="#3498db">
        <animateMotion repeatCount="indefinite" dur="1.5s" begin="0.75s" keyPoints="0;1" keyTimes="0;1">
          <mpath href="#lineBtoA" />
        </animateMotion>
      </circle>

      {/* Labels */}
      <text x="300" y="110" textAnchor="middle" fontSize="12" fill="#e67e22" fontWeight="bold">Fluxo de Dados (TX &rarr; RX)</text>
      <text x="300" y="200" textAnchor="middle" fontSize="12" fill="#3498db" fontWeight="bold">Fluxo de Dados (RX &larr; TX)</text>
      <text x="300" y="240" textAnchor="middle" fontSize="12" fill="#333">Terra Comum (GND)</text>
    </svg>

    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "15px", fontSize: "0.85em", color: "#555" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", marginRight: "5px", background: "#e67e22" }}></div>
        <span>Laranja: A para B</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "10px", height: "10px", borderRadius: "50%", marginRight: "5px", background: "#3498db" }}></div>
        <span>Azul: B para A</span>
      </div>
    </div>
  </div>
);

<UartDiagram />

A regra mais importante a lembrar é que você deve **fazer a conexão cruzada** desses pinos entre os dispositivos. O pino TX de um dispositivo deve ser conectado ao pino RX do outro, e vice-versa. É como uma conversa: a boca (TX) de uma pessoa fala com o ouvido (RX) da outra.

## Primeiros Passos

O XIAO Debug Mate pode monitorar dados seriais de duas maneiras: diretamente em sua tela LCD integrada ou encaminhando os dados para um computador. Este guia cobre ambas.

### Preparação de software (para monitoramento no PC)

Se você optar por visualizar os dados seriais no seu computador, vai precisar de um aplicativo de "terminal serial" ou "monitor serial". O XIAO Debug Mate aparecerá como uma porta COM padrão no seu PC. Aqui estão algumas opções de software populares:

*   **PlatformIO Serial Monitor:** Se você estiver usando o VS Code com PlatformIO, basta clicar no botão "Serial Monitor" na barra de status.
*   **Arduino IDE Serial Monitor:** O monitor clássico e simples integrado ao Arduino IDE.
*   **PuTTY:** Um emulador de terminal leve e muito popular para Windows.
*   **CoolTerm:** Um terminal serial fácil de usar e cheio de recursos para Windows, macOS e Linux.
*   **minicom / screen:** Poderosas ferramentas em linha de comando para usuários de Linux e macOS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/23.png" style={{width:1000, height:'auto'}}/></div>

### Preparação de hardware

O XIAO Debug Mate oferece três formas flexíveis de conectar seu dispositivo alvo para monitoramento serial.

#### Para placas XIAO (plug-and-play)

Este é o método mais fácil para monitorar uma placa XIAO. O Debug Mate é projetado para escutar a porta `Serial1` (`D6` e `D7`) do XIAO por padrão.

1.  Basta conectar sua placa XIAO diretamente aos headers fêmea na parte frontal do XIAO Debug Mate.
2.  A conexão é feita automaticamente. Nenhum fio extra é necessário.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/connect_xiao.gif" style={{width:600, height:'auto'}}/></div>

#### Para Dispositivos Grove UART

O conector Grove dedicado permite uma conexão limpa e segura a qualquer módulo Grove baseado em UART.

1.  Pegue seu dispositivo Grove UART (por exemplo, um Grove GPS ou Grove MP3 V4).
2.  Use um cabo Grove padrão para conectá-lo à porta Grove no lado direito do XIAO Debug Mate.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/24.jpg" style={{width:800, height:'auto'}}/></div>

#### Para Outros Dispositivos UART

:::danger Instruções de Conexão do Pino de Alimentação
Se você precisa conectar ou não os pinos de alimentação de 3,3 V das duas placas de desenvolvimento depende de se o outro dispositivo é alimentado pelo Debug Mate. Se o outro dispositivo for alimentado por sua própria conexão USB independente, você não deve conectar os pinos de 3,3 V do dispositivo e do Debug Mate. Fazer isso pode danificar o dispositivo.
:::

Você pode monitorar qualquer dispositivo com pinos TX e RX acessíveis, como outra placa de desenvolvimento ou um circuito personalizado.

Existem duas maneiras principais de fazer isso:

*   **Opção 1: Usando os Headers Principais:** Conecte os pinos TX e RX do seu dispositivo aos headers fêmea do XIAO Debug Mate usando fios DuPont. Lembre-se de fazer a conexão cruzada: TX do dispositivo -> RX do Debug Mate (Pino D7 no header) e RX do dispositivo -> TX do Debug Mate (Pino D6 no header).

*   **Opção 2: Usando a Porta Grove:** Use um **cabo de conversão Grove para DuPont**. Conecte o conector Grove ao Debug Mate e conecte as pontas individuais DuPont aos pinos TX, RX, VCC e GND do seu dispositivo. Muitas vezes, esta é uma conexão mais estável e confiável.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/25.jpg" style={{width:800, height:'auto'}}/></div>

O diagrama a seguir mostra as definições de pinos para a interface Grove.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/39.png" style={{width:400, height:'auto'}}/></div>

:::caution Lembrete Crucial
Sempre certifique-se de que o pino TX do seu dispositivo esteja conectado a um pino receptor no Debug Mate, e que o pino RX do dispositivo esteja conectado a um pino transmissor.
:::

Graças ao seu design versátil, o XIAO Debug Mate permite que você **conecte até dois dispositivos UART simultaneamente**: um via soquete XIAO e outro via porta Grove. Você pode então alternar entre o monitoramento de cada dispositivo usando o menu na tela.

Esse poderoso recurso **elimina o doloroso processo de refazer a fiação repetidas vezes** ao depurar sistemas complexos que envolvem vários dispositivos seriais.

## Operando o Monitor Serial

O XIAO Debug Mate possui uma ferramenta serial versátil que pode ser usada tanto para monitoramento no próprio dispositivo quanto baseado em PC. Este guia o conduzirá por sua navegação e funções.


<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/uart.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Navegação Básica e Controles

Antes de explorar os recursos, é crucial entender como navegar na interface. Todas as operações são realizadas usando a roda de rolagem e o botão.

1.  **Entrando no Menu:** A partir da tela principal, use a **roda de rolagem** para realçar o **ícone da Ferramenta Serial** (canto inferior esquerdo). **Pressione o botão** para entrar no menu serial.

2.  **Controles Principais:**
    *   **Roda de Rolagem:** Usada para mover um cursor ou alternar entre modos principais.
    *   **Pressão Curta do Botão:** Usada para confirmar uma seleção ou ativar o cursor de configurações.
    *   **Pressão Longa do Botão:** Usada para sair de um menu ou voltar.

Existem dois estados principais de interação:

*   **Sem Cursor Ativo:** Neste estado, girar a roda de rolagem alterna entre as funções principais (por exemplo, Modo Passthrough vs. Modo Monitor).
*   **Cursor Ativo:** Após uma pressão curta, um cursor aparece na parte superior da tela. Agora, a roda de rolagem move esse cursor, permitindo que você selecione uma configuração para alterar.

#### Guia Rápido de Navegação

| Ação | Função |
| :--- | :--- |
| **Roda de Rolagem (sem cursor)** | Alternar entre os modos Passthrough e Monitor. |
| **Pressão Curta do Botão** | Ativar o cursor de seleção para Fonte/Taxa de Baud. |
| **Pressão Longa do Botão** | Retornar ao menu anterior. |

### Os Dois Modos de Monitoramento

Com os controles básicos compreendidos, você pode agora alternar facilmente entre os dois modos principais de operação. Basta girar a **roda de rolagem** (enquanto nenhum cursor estiver ativo) para alternar entre eles.

#### 1. Modo Passthrough (para PC)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/26.jpg" style={{width:600, height:'auto'}}/></div>

Este é o modo padrão, projetado para encaminhar todos os dados seriais da fonte selecionada diretamente para o seu computador para visualização em um terminal serial no PC.

*   **Exibição na Tela:** A tela mostra informações de status, não os dados em si.
    *   **Canto Superior Esquerdo:** A fonte serial ativa (por exemplo, `XIAO`).
    *   **Canto Superior Direito:** A taxa de baud atual (por exemplo, `9600`).
    *   **Centro:** Os indicadores `RX` e `TX` (a partir da perspectiva do Debug Mate) serão animados para mostrar o fluxo de dados de e para o PC.

#### 2. Modo Monitor (no LCD)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/27.jpg" style={{width:600, height:'auto'}}/></div>

Este modo captura e exibe os dados seriais diretamente na tela LCD do Debug Mate. Os dados **não** são encaminhados para o PC neste modo.

*   **Exibição na Tela:** A tela é dividida em duas janelas para exibir o tráfego de dados.
    *   `RX Window`: Mostra os dados recebidos **do soquete XIAO/Grove**.
    *   `TX Window`: Mostra os dados recebidos **do PC**.

:::caution
O Debug Mate não pode exibir dados de ambas as fontes simultaneamente. Você deve selecionar a fonte ativa usando o menu de configurações.
:::

:::note
Os rótulos **RX** e **TX** neste documento são sempre **a partir da perspectiva do Debug Mate**:  
- **RX** indica dados **recebidos pelo Debug Mate** (ou seja, sinais seriais que entram *no* Debug Mate).  
- **TX** indica dados **enviados pelo Debug Mate** (ou seja, sinais sendo *transmitidos* pelo Debug Mate).

Isso significa que **dados enviados do dispositivo XIAO ou Grove para o Debug Mate aparecerão na janela RX**, não importa qual porta esteja selecionada como fonte. O conteúdo mostrado na janela RX depende de qual fonte (XIAO/Grove) você escolheu nas configurações.

**TX** sempre se refere a dados **originados do PC** — quando você digita e envia mensagens a partir de um terminal serial no seu computador, elas são transmitidas via TX do Debug Mate para a fonte atualmente selecionada (XIAO ou Grove).  

- Em ambos os modos "Passthrough" e "Monitor", o PC pode enviar dados ao Debug Mate por meio de sua porta COM virtual, e o Debug Mate encaminhará essas mensagens para o dispositivo serial de destino que você selecionou.  
- O que você vê na **janela TX** é, portanto, sempre o que o PC está enviando através do Debug Mate, independentemente do modo de monitoramento atual.
:::

### Configurando Fonte e Taxa de Baud

Para alterar a fonte de dados ou a taxa de baud, você deve primeiro ativar o cursor de configurações.

1.  **Ativar Cursor:** A partir de qualquer modo, **pressione o botão uma vez**. Um cursor aparecerá na parte superior da tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/28.jpg" style={{width:600, height:'auto'}}/></div>

2.  **Selecionar Configuração:** Use o **botão** para mover o cursor entre a fonte (`XIAO`/`Grove`) e a taxa de baud.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/29.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
Após alternar as fontes, o conteúdo da nova fonte pode não aparecer imediatamente. Isso ocorre porque a impressora deve esperar os dados da fonte de entrada anterior terminarem de ser impressos antes de receber informações da ne
:::

3.  **Entrar no Menu:** Para a opção de taxa de baud, com a configuração desejada realçada, **pressione o botão** para abrir seu menu de configuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/30.jpg" style={{width:600, height:'auto'}}/></div>

4.  **Alterar Valor:** Use a **roda de rolagem** para escolher sua taxa de baud e **pressione o botão** para confirmar.

#### O Menu de Taxa de Baud e Indicador Visual

O menu de taxa de baud permite que você selecione entre nove taxas comuns (4800 a 921600). Como um toque visual único, entrar nesse menu também ativa a **matriz de 36 LEDs na parte traseira do dispositivo**, com o padrão de luz mudando para refletir a taxa selecionada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/31.jpg" style={{width:800, height:'auto'}}/></div>

### Conceitos-Chave e Limitações

*   **Um Depurador, Não uma Ponte:** O Debug Mate é uma ferramenta de diagnóstico, não uma ponte de comunicação. Ele não encaminhará automaticamente dados da porta XIAO para a porta Grove.
*   **Parâmetros Seriais Fixos:** Parâmetros seriais básicos (8-N-1) são fixos no firmware. Usuários avançados podem modificar o código open-source para alterá-los.
*   **Monitoramento de Fonte Única:** Você só pode monitorar ativamente uma única fonte (XIAO ou Grove) por vez.

## Agradecimentos Especiais

Agradecimentos especiais a **啊猫啊狗晒太阳 (Ah Mao Ah Gou Shai Tai Yang)** pela inspiração de design para a matriz de LEDs. O design do indicador de LED onboard do Debug Mate faz referência ao excelente projeto open-source deles. O design original é muito criativo e prático.

Se você quiser ver o design original, pode conferir o vídeo de demonstração e a página inicial do autor através dos links abaixo.

*   [Vídeo de Demonstração do Design Original](https://www.bilibili.com/video/BV1Sc411273Y/)
*   [Página Inicial do Autor no Bilibili](https://space.bilibili.com/1155738723)

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
