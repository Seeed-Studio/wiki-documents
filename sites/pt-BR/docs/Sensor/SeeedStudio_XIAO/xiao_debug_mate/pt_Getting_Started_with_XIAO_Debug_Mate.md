---
description: Este artigo fornece uma introdução abrangente e um guia de uso para o Seeed Studio XIAO Debug Mate.
title: Primeiros Passos com o XIAO Debug Mate
image: https://files.seeedstudio.com/wiki/xiao_debug_mate/main_1.webp
slug: /getting_started_with_xiao_debug_mate
sku: 109990585
sidebar_position: 1
last_update:
  date: 10/22/2025
  author: Citric
createdAt: '2025-10-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_xiao_debug_mate/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/main_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-Debug-Mate-p-6588.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>


## Introdução

Seeed Studio XIAO Debug Mate é uma multi‑ferramenta ESP32-S3 de código aberto que simplifica a depuração de sistemas embarcados com feedback visual. Este dispositivo tudo‑em‑um possui um display TFT LCD independente de 2,01 polegadas, matriz de LEDs de status e suporte nativo ao Seeed Studio XIAO, oferecendo funções de depuração essenciais: depuração em nível de chip via DAPLink, monitor serial integrado com passagem UART e medição precisa de consumo de energia. O design plug‑and‑play elimina a fiação complexa para um desenvolvimento mais ágil.

### Especificação

<div class="table-center">
	<table align="center">
		<tr>
			<th>Parâmetro</th>
			<th>Descrição</th>
		</tr>
		<tr>
			<td>Processador</td>
			<td>Espressif ESP32-S3</td>
		</tr>
		<tr>
			<td>Entrada de alimentação</td>
			<td>USB-C 5V/1A</td>
		</tr>
		<tr>
			<td>Display</td>
			<td>TFT LCD de 2,01 polegadas com resolução de 240 x 296</td>
		</tr>
		<tr>
			<td>LED</td>
			<td>Matriz de 36 LEDs para indicação de status (padrão: taxa de baud serial)</td>
		</tr>
		<tr>
			<td>Entrada do usuário</td>
			<td>1 x Botão de Usuário/Botão de Boot <br /> 1 x Roda de Rolagem <br /> 1 x Botão de Reset embutido</td>
		</tr>
		<tr>
			<td>Interface de E/S</td>
			<td>14 x Pinos padrão XIAO <br /> 8 x Pinos de expansão <br /> 4 x Pinos de depuração SWD <br /> 1 x Conector Grove UART</td>
		</tr>
		<tr>
			<td>Tamanho do produto</td>
			<td>100x20x56 mm</td>
		</tr>
		<tr>
			<td>Software</td>
			<td>Suporta DAPLink para depuração</td>
		</tr>
		<tr>
			<td>Chipset alvo OpenOCD suportado</td>
			<td>SAMD21, nRF52840 (Sense), RP2040, RP2350, RA4M1, MG24 (Sense)</td>
		</tr>
		<tr>
			<td>Gabinete</td>
			<td>Impressão 3D em PLA preto</td>
		</tr>
	</table>
</div>

### Características

- Interface SWD compatível com DAPLink para depuração profissional em nível de chip

- Monitor serial inteligente e passagem UART

- Perfil de consumo de energia de alta precisão

- Sistema de feedback visual independente

- Plataforma de código aberto projetada para XIAO com compatibilidade universal


## Visão geral de hardware

O XIAO Debug Mate é uma ferramenta compacta e tudo‑em‑um projetada para simplificar o seu fluxo de trabalho de desenvolvimento embarcado. Abaixo está uma visão detalhada do layout de hardware e dos componentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

O dispositivo está equipado com os seguintes componentes de hardware principais:

* ① **Botão de Usuário**: Um botão de pressão localizado na borda superior, usado para entrada do usuário, como fazer seleções ou confirmar ações.

* ② **Soquete XIAO**: Um soquete dedicado composto por headers fêmea, projetado para uma conexão direta plug‑and‑play com uma placa da série Seeed Studio XIAO.

* ③ **Pinos pogo**: Um conjunto de pontas com mola localizadas dentro do Soquete XIAO (②). Sua função específica é fazer contato elétrico confiável com as ilhas na parte traseira da placa principal XIAO instalada.

* ④ **Header de expansão externo‑interno**: Este header é especificamente projetado para expor os sinais dos pinos traseiros da placa principal XIAO, que são conectados via Pinos Pogo (③). Ele possui um design de interface dupla com headers fêmea na parte superior (para fios Dupont) e pinos macho na parte inferior. Este design versátil permite que todo o dispositivo seja usado como uma placa‑filha em outro sistema.

* ⑤ **Header de expansão interno**: Este header expõe os pinos dos lados esquerdo e direito da placa principal XIAO. Assim como o header ④, ele possui headers fêmea na parte superior e pinos macho na parte inferior, oferecendo acesso conveniente às E/S voltadas para trás do XIAO.

* ⑥ **Encoder rotativo**: Uma roda de encoder rotativo (rolinho) na borda superior, usada para navegar pelos menus, rolar opções e ajustar valores no display.

* ⑦ **Display**: TFT LCD de 2,01 polegadas com resolução de 240x296 para visualização e interação clara dos dados.

* ⑧ **Porta Grove**: Para conectar módulos Grove baseados em UART externos.

* ⑨ **Indicador de taxa de baud**: Um indicador visual na parte traseira do dispositivo que exibe claramente a taxa de baud UART atualmente selecionada.

* ⑩ **Porta USB-C**: Uma porta USB-C localizada na lateral para fornecer energia ao dispositivo e facilitar a comunicação de dados, como programação da placa XIAO ou passagem UART.

## Primeiros Passos

### Instalar adesivos de pinos para o XIAO Debug Mate

Dentro da embalagem, você encontrará quatro adesivos de pinout. Eles foram projetados para serem aplicados ao lado dos headers de expansão no Debug Mate, fornecendo uma referência rápida e conveniente para a função de cada pino.

Para aplicá‑los corretamente, observe o pequeno **triângulo branco** em um canto de cada adesivo. Esse triângulo é um marcador de alinhamento. Ele deve ser orientado para coincidir com o canto correspondente da placa de circuito impresso (PCB) do Debug Mate. Os adesivos frontal e traseiro também possuem diferentes orientações de texto para garantir que sejam legíveis do lado correto. Consulte a imagem abaixo para o posicionamento correto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/sticket_1.jpg" style={{width:600, height:'auto'}}/></div>

Os adesivos usam cores diferentes para distinguir as funções das duas fileiras de pinos. As etiquetas de pinos em azul escuro correspondem à fileira interna, enquanto as etiquetas em verde‑claro correspondem à fileira externa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/sticket_2.jpg" style={{width:600, height:'auto'}}/></div>

As marcações nos lados frontal e traseiro também são diferentes. Por exemplo, no lado frontal, os pinos XIAO são rotulados com seus números de pino: D6, D7, D8 e assim por diante. No lado traseiro, esses pinos são marcados com seus protocolos ou funções: TX, RX, SCK e assim por diante.

### Primeiro acionamento

O XIAO Debug Mate requer uma fonte de alimentação constante de 5V/1A através de sua porta USB-C. Ao conectar a alimentação, o dispositivo inicializará, exibirá uma animação de inicialização e, em seguida, chegará à interface principal, pronto para operação.

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/first_power.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
De modo geral, todas as funções do XIAO no Debug Mate não exigem alimentação adicional para o XIAO, a menos que especificado de outra forma.
:::

### Lógica de operação

A interface do dispositivo é controlada por um sistema simples e intuitivo de duas partes:

*   **Encoder rotativo (rolinho):** Gire o rolinho para navegar pelos menus e destacar as opções selecionáveis.
*   **Botão:**
    *   **Clique único:** Confirma uma seleção ou entra em um menu destacado.
    *   **Pressão longa (segure por >2s e solte):** Atua como um botão de "Voltar", retornando à tela ou menu anterior.

<div class="table-center">
<iframe width="700" height="400" src="https://files.seeedstudio.com/wiki/xiao_debug_mate/operational_logic.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Introdução ao menu de operação

O firmware do XIAO Debug Mate é organizado em três páginas funcionais principais, pelas quais você pode navegar usando o rolinho e o botão.

**1. Página principal (Dashboard)**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/1.jpg" style={{width:600, height:'auto'}}/></div>

Esta é a tela padrão e funciona como um painel central. Ela fornece uma visão geral em tempo real de todas as funções principais:
*   **Status de depuração:** Indica se a função SWD `DEBUG` está ativa.
*   **Status UART:** Mostra a taxa de baud atual e a atividade nas linhas RX/TX.
*   **Métricas de energia:** Exibe a Tensão (`U`), Corrente (`I`) e Potência (`P`) instantâneas consumidas pelo XIAO conectado.

A partir desta página, você pode acessar as outras duas funções principais. Basta rolar o rolinho para destacar o módulo UART (canto inferior esquerdo) ou o módulo de Energia (canto inferior direito) e, em seguida, pressionar o botão uma vez para entrar em sua página dedicada.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Módulo UART</th>
			<th>Módulo de energia</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/2.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/3.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

:::tip
1. A função de depuração **só é efetiva** no menu da página principal.
2. A página principal não pode recuperar mensagens da porta serial. As funções de passagem e monitoramento da porta serial exigem o acesso à página de configurações da porta serial.
:::

**2. Página UART**

Esta página é dedicada à comunicação serial e oferece dois modos distintos:

*   **Monitor UART:** Este modo captura e exibe dados seriais diretamente na tela LCD de 2,01 polegadas do Debug Mate. É perfeito para depuração rápida e em movimento, sem um PC.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/5.jpg" style={{width:600, height:'auto'}}/></div>

*   **Passagem UART:** Neste modo, o Debug Mate atua como uma ponte USB‑para‑serial. Ele encaminha todos os dados seriais do dispositivo de destino para o seu PC. Os dados **não** são exibidos na tela do dispositivo, mas podem ser visualizados usando qualquer software de monitor serial no computador (por exemplo, Arduino IDE Serial Monitor, PuTTY, CoolTerm).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/4.jpg" style={{width:600, height:'auto'}}/></div>

Dentro da página UART, você pode configurar o seguinte destacando a opção com o rolete e clicando no botão:
*   **Fonte:** Escolha entre monitorar o `XIAO` onboard ou um dispositivo externo conectado à porta `Grove`.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Escolher XIAO</th>
			<th>Escolher Grove</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/6.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/7.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

*   **Taxa de Baud:** Selecione entre 9 taxas de baud predefinidas, variando de 4800 bps a 921600 bps. A matriz de LEDs na parte de trás será atualizada visualmente para refletir sua seleção.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Frente</th>
			<th>Verso</th>
		</tr>
		<tr>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/8.jpg" style={{width:600, height:'auto'}}/></div></td>
			<td align="center"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/9.jpg" style={{width:600, height:'auto'}}/></div></td>
		</tr>
	</table>
</div>

**3. Página de Analisador de Energia**

Esta página fornece uma ferramenta de análise de energia de alta precisão com três diferentes visualizações de UI, pelas quais você pode alternar rolando o rolete.

*   **Visualização 1: Medidor Digital Simples**
    Esta visualização apresenta um display limpo, com fonte grande, da Tensão (V), Corrente (A) e Potência (W) instantâneas, medidas com precisão de até quatro casas decimais.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/10.jpg" style={{width:600, height:'auto'}}/></div>

*   **Visualização 2: Visualização de Detalhes de Baixa Potência**
    Otimizada para aplicações de baixa potência, esta visualização foca em corrente e potência. Ela exibe os valores em múltiplas unidades simultaneamente (por exemplo, `18.234 mA` e `18234 uA`), poupando você do esforço de conversões manuais de unidades ao acompanhar o consumo em nível de microampère.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/11.jpg" style={{width:600, height:'auto'}}/></div>

*   **Visualização 3: Análise Estatística**
    Esta visualização é ideal para validação de projetos e estimativa de vida útil de bateria. Ela rastreia e exibe:
    *   **Mín/Máx:** Os valores mínimos e máximos de corrente e potência registrados durante a sessão.
    *   **Total:** A energia (`Wh`) e a carga (`Ah`) cumulativas consumidas ao longo do tempo.
    *   **Tempo:** A duração da sessão de medição.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/12.jpg" style={{width:600, height:'auto'}}/></div>

    :::tip
    Na primeira vez que você entrar na Visualização 3, o cronômetro de consumo de energia será iniciado. Quando você pressionar e segurar o botão de confirmação para sair da Página do Analisador de Energia, o cronômetro será redefinido para zero.
    :::

:::tip **Observação Importante sobre Medição de Energia:**
A função de análise de energia mede a energia fornecida ao XIAO por meio do seu **pino de 5V**. Esta medição inclui a energia consumida pelo CI de Gerenciamento de Energia (PMIC) onboard do XIAO e por outros componentes da linha de 5V. Se você planeja alimentar seu projeto final com uma bateria LiPo conectada diretamente aos pads de 3.3V/BAT do XIAO, o consumo real de energia será **menor** do que o reportado pelo Debug Mate. Use estes dados como uma referência valiosa, mantendo em mente essa diferença para os cálculos finais de bateria.
:::

### XIAO Debug Mate: Recursos e Uso

Para guias detalhados sobre como usar o depurador DAPLink, o monitor UART e o analisador de energia com IDEs e projetos específicos, consulte nossos guias dedicados de recursos.

- [XIAO Debug Mate DAPLink Debugger](https://wiki.seeedstudio.com/pt-br/xiao_debug_mate_debug)
- [XIAO Debug Mate UART Monitor](https://wiki.seeedstudio.com/pt-br/xiao_debug_mate_serial)
- [XIAO Debug Mate Power Meter](https://wiki.seeedstudio.com/pt-br/xiao_debug_mate_power)

## Reset

Se você precisar reiniciar o XIAO Debug Mate, você tem duas opções:
1.  Desconectar e reconectar o cabo de alimentação USB-C.
2.  Usar o **botão de Reset** oculto. Ele está localizado em um pequeno furo diretamente abaixo da porta USB-C. Você pode pressioná-lo suavemente usando uma ferramenta de ejeção de cartão SIM ou um clipe de papel.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/13.jpg" style={{width:600, height:'auto'}}/></div>

:::caution
Não aplique força excessiva ao usar o botão de reset, pois isso pode danificar o interruptor interno.
:::

## Boot

O botão principal do dispositivo tem dupla função. Durante a operação normal, ele funciona como o botão de **Confirmar/Voltar**. No entanto, ele também atua como o botão **BOOT** para entrar no modo de flash do ESP32-S3.

Para entrar no Modo Flash:
1.  Certifique-se de que o dispositivo esteja desligado (desconectado).
2.  **Pressione e segure** o botão principal.
3.  Enquanto ainda mantém o botão pressionado, conecte o cabo USB-C para alimentar o dispositivo.
4.  O dispositivo agora estará em Modo Flash, pronto para receber um novo firmware.

## Firmware de fábrica

Caso você precise restaurar o firmware de fábrica original, pode fazê-lo usando um dos métodos abaixo. Primeiro, coloque o dispositivo em **Modo Boot**, conforme descrito na seção acima.

### Método 1: Usando Scripts de Flash

Nós preparamos um pacote com scripts de gravação fáceis de usar para todos os principais sistemas operacionais.

1.  Baixe o pacote de firmware.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_Flash_Script.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware ver. 1.0</font></span></strong>
    </a>
</div>

2.  Extraia o conteúdo do arquivo zip.
3.  Coloque seu XIAO Debug Mate em Modo Boot.
4.  Execute o script apropriado para o seu sistema operacional.

<Tabs>
<TabItem value="Windows" label="Windows" default>
Clique duas vezes no arquivo `flash.bat`.
</TabItem>
<TabItem value="MacOS" label="MacOS">
Abra um terminal, navegue até a pasta extraída e execute o comando: `sh flash.sh`
</TabItem>
<TabItem value="Linux" label="Linux">
Abra um terminal, navegue até a pasta extraída e execute o comando: `sh flash.sh`
</TabItem>
</Tabs>

### Método 2: Usando esptool

Se você tiver o `esptool` instalado como parte do ESP-IDF ou como um pacote Python, poderá gravar o firmware manualmente.

1.  Baixe o arquivo `.bin` de firmware de fábrica.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/xiao_debug_mate/res/XIAO_Debug_Mate_Flash_Script.zip" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Firmware ver. 1.0</font></span></strong>
    </a>
</div>

2.  Coloque seu XIAO Debug Mate em Modo Boot.
3.  Abra um terminal ou prompt de comando e execute o comando apropriado abaixo.

<Tabs>
<TabItem value="Windows" label="Windows" default>

```bash
esptool.exe --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
<TabItem value="MacOS" label="MacOS">

```bash
esptool.py --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
<TabItem value="Linux" label="Linux">

```bash
esptool.py --chip esp32s3 write_flash 0x0 firmware-v1.0.bin
```

</TabItem>
</Tabs>

### Método 3: Usando PlatformIO com Firmware Open-Source

O firmware do XIAO Debug Mate é completamente open-source e está disponível no [GitHub](https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate). Se você quiser personalizar o firmware ou compilá-lo a partir do código-fonte, pode usar o PlatformIO.

1. Clone o repositório:

```bash
git clone https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate.git
```

2. Navegue até o diretório do firmware

3. Abra o projeto no PlatformIO:
   - Se estiver usando o PlatformIO IDE (extensão do VS Code), abra a pasta que contém `platformio.ini`
   - Ou use o PlatformIO Core CLI

4. Coloque seu XIAO Debug Mate em **Modo Boot** conforme descrito na seção Boot acima.

5. Compile e envie o firmware:

<Tabs>
<TabItem value="PlatformIO IDE" label="PlatformIO IDE" default>
- Clique no botão "Upload" na barra de ferramentas do PlatformIO
- Ou use o palette de comandos: `PlatformIO: Upload`
</TabItem>
<TabItem value="PlatformIO CLI" label="PlatformIO CLI">

```bash
pio run --target upload
```

</TabItem>
</Tabs>

Este método permite que você:
- Modifique o firmware para adicionar recursos personalizados
- Compile a versão de desenvolvimento mais recente
- Contribua para o projeto open-source
- Aprenda com a implementação do código-fonte

:::tip
Certifique-se de que o PlatformIO esteja instalado. Você pode instalá-lo como uma extensão do VS Code ou como uma ferramenta CLI independente via pip: `pip install platformio`
:::

## Solução de Problemas

### P1: Guia de Compatibilidade de Pinos do XIAO Debug Mate

**Problema:** Estou tendo problemas com a função de depuração; parece que há uma conexão ruim.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_debug_mate/14.jpg" style={{width:600, height:'auto'}}/></div>

**Solução:** Isso pode acontecer por dois motivos principais:

1.  **Compatibilidade com Placas XIAO mais Antigas:**
    Algumas das primeiras placas XIAO, como a **XIAO SAMD21**, **XIAO RP2040** e **XIAO nRF52840**, foram projetadas antes que um padrão unificado para os pads do lado de trás fosse estabelecido. Embora os pinos de pogo do Debug Mate sejam posicionados para serem o mais compatíveis possível, pequenas variações nessas placas mais antigas podem levar a um contato imperfeito.

    Se você experimentar uma conexão de depuração instável, tente **ajustar ligeiramente a posição** da placa XIAO dentro do soquete. Pode ser que você não precise empurrá-la até o final. Um pequeno deslocamento muitas vezes pode garantir que os pinos de pogo façam um contato firme com os pads SWD na parte de trás do XIAO.

2.  **Desgaste dos Headers:**
    Os headers fêmea, como qualquer conector mecânico, têm uma vida útil finita. Para maximizar sua durabilidade e garantir uma conexão confiável, siga esta boa prática:
    *   Ao inserir ou remover uma placa XIAO, aplique força **diretamente para cima ou para baixo**.
    *   **Evite balançar ou inclinar** a placa XIAO para frente e para trás, pois isso pode entortar os pinos, alargar os contatos no header fêmea e levar a conexões ruins ao longo do tempo.

## Agradecimentos Especiais

Agradecimentos especiais a **啊猫啊狗晒太阳 (Ah Mao Ah Gou Shai Tai Yang)** pela inspiração de design para a matriz de LEDs. O design do indicador de LED onboard do Debug Mate é uma referência ao excelente projeto open-source deles. O design original é muito criativo e prático.

Se você quiser ver o design original, pode conferir o vídeo de demonstração e a página inicial do autor através dos links abaixo.

*   [Vídeo de Demonstração do Design Original](https://www.bilibili.com/video/BV1Sc411273Y/)
*   [Página Inicial do Autor no Bilibili](https://space.bilibili.com/1155738723)

## Recursos

- **[ZIP]** [Case para Impressão 3D do Seeed Studio XIAO Debug Mate](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_3D_Printed_Case.zip)
- **[PDF]** [PDF do Esquemático do Seeed Studio XIAO Debug Mate](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_V1.0_SCH_20250926.pdf)
- **[ZIP]** [Arquivos KiCAD de SCH&PCB do Seeed Studio XIAO Debug Mate](https://files.seeedstudio.com/wiki/xiao_debug_mate/res/Seeed_Studio_XIAO_Debug_Mate_V1.0_SCH&PCB_20250926.zip)
- **[GITHUB]** [Repositório do Firmware do Seeed Studio XIAO Debug Mate](https://github.com/Seeed-Studio/OSHW-XIAO-Debug-Mate)

## Suporte Técnico & Discussão de Produto

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
