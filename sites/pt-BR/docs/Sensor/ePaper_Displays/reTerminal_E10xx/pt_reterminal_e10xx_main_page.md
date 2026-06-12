---
description: Este artigo é uma página de coleção para a reTerminal E Series.
title: reTerminal E Series
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /reterminal_e10xx_main_page
sku: 100017057,100073581
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-05-30'
url: https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_main_page/
---
# Visão geral do display ePaper reTerminal E Series

## Introdução

A reTerminal E Series é a família de terminais de display ePaper da Seeed Studio, baseada em ESP32-S3, criada especificamente para **exibição de informações sempre ativa e de baixo consumo de energia**. A linha abrange quatro modelos — **E1001, E1002, E1003, E1004** — cobrindo painéis monocromáticos e totalmente coloridos de 7,3" a 13,3", com opções de interação por toque e bateria com duração de vários meses. Todos eles compartilham a mesma pilha de software (SenseCraft HMI, Home Assistant, Arduino e mais), então você só precisa aprendê-la uma vez e depois escolher o formato que melhor se adapta ao seu cenário.

Ao contrário dos displays tradicionais que consomem energia continuamente, a reTerminal E Series só consome corrente ao redesenhar o conteúdo, o que a torna ideal para porta-retratos digitais, painéis de casa inteligente, sinalização de varejo, quadros de salas de reunião, displays em salas de aula e outros casos de uso sempre ativos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

## Matriz de produtos em um relance

Quatro modelos, um ecossistema. Escolha por **tamanho de tela**, **cor vs. monocromático**, **toque** e **duração da bateria**:

<div class="table-center">
  <table align="center">
    <tr>
      <th>reTerminal E1001</th>
      <th>reTerminal E1002</th>
      <th>reTerminal E1003</th>
      <th>reTerminal E1004</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:240, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:240, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <td align="center"><strong>7,5" Monocromático</strong><br/>Escala de cinza de 4 níveis<br/>bateria de ~3 meses</td>
      <td align="center"><strong>7,3" Totalmente colorido</strong><br/>E Ink® Spectra™ 6<br/>bateria de ~3 meses</td>
      <td align="center"><strong>10,3" Monocromático</strong><br/>Escala de cinza de 16 níveis + Toque<br/>bateria de ~6 meses</td>
      <td align="center"><strong>13,3" Totalmente colorido</strong><br/>E Ink® Spectra™ 6<br/>bateria de ~6 meses</td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer"><strong>Comprar E1001</strong></a><br/><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer"><strong>Comprar E1002</strong></a><br/><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer"><strong>Comprar E1003</strong></a><br/><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
      <td align="center"><a href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer"><strong>Comprar E1004</strong></a><br/><a href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer">Wiki →</a></td>
    </tr>
  </table>
</div>

## Comparação de especificações

Todos os quatro modelos compartilham a mesma plataforma ESP32-S3, wireless Wi-Fi 4 / Bluetooth 5.0, sensor de T/U e buzzer integrados, entrada USB-C 5 V / 1 A e faixa de operação de 0–40 °C — tudo em um gabinete de metal. As diferenças estão principalmente no **painel de display**, **comportamento de atualização**, **bateria**, **expansão** e **certificações**:

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Item</th>
			<th align="center">reTerminal E1001</th>
			<th align="center">reTerminal E1002</th>
			<th align="center">reTerminal E1003</th>
			<th align="center">reTerminal E1004</th>
		</tr>
		<tr>
			<td align="center"><strong>Tamanho do display</strong></td>
			<td align="center">7,5"</td>
			<td align="center">7,3"</td>
			<td align="center">10,3"</td>
			<td align="center">13,3"</td>
		</tr>
		<tr>
			<td align="center"><strong>Tipo de display</strong></td>
			<td align="center">Monocromático<br/>(escala de cinza de 4 níveis)</td>
			<td align="center">Totalmente colorido<br/>(E Ink® Spectra™ 6)</td>
			<td align="center">Monocromático<br/>(escala de cinza de 16 níveis)</td>
			<td align="center">Totalmente colorido<br/>(E Ink® Spectra™ 6)</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolução</strong></td>
			<td align="center">800 × 480</td>
			<td align="center">800 × 480</td>
			<td align="center">1404 × 1872</td>
			<td align="center">1200 × 1600</td>
		</tr]
		<tr>
			<td align="center"><strong>Atualização parcial</strong></td>
			<td align="center">✅</td>
			<td align="center">❌</td>
			<td align="center">✅</td>
			<td align="center">❌</td>
		</tr>
		<tr>
			<td align="center"><strong>Taxa de atualização</strong></td>
			<td align="center">2–5 s</td>
			<td align="center">15–20 s</td>
			<td align="center">2–3 s</td>
			<td align="center">~20 s</td>
		</tr>
		<tr>
			<td align="center"><strong>Toque</strong></td>
			<td align="center">—</td>
			<td align="center">—</td>
			<td align="center">✅ Toque capacitivo<br/>(SenseCraft HMI v1.1.2+)</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td align="center"><strong>Processador</strong></td>
			<td align="center" colspan="4">ESP32-S3 com 8 MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>Armazenamento</strong></td>
			<td align="center">32 MB Flash<br/>microSD até 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD até 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD até 32 GB</td>
			<td align="center">32 MB Flash<br/>microSD até 32 GB<br/>(<strong>16 GB incluídos</strong>)</td>
		</tr>
		<tr>
			<td align="center"><strong>Wireless</strong></td>
			<td align="center" colspan="4">2,4 GHz Wi-Fi 802.11 b/g/n + Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>Sensores integrados</strong></td>
			<td align="center" colspan="4">Sensor de temperatura e umidade</td>
		</tr>
		<tr>
			<td align="center"><strong>Áudio</strong></td>
			<td align="center" colspan="4">Buzzer (alerta sonoro) · Microfone reservado em E1001 / E1002 / E1003</td>
		</tr>
		<tr>
			<td align="center"><strong>Bateria</strong></td>
			<td align="center">2000 mAh<br/>~3 meses</td>
			<td align="center">2000 mAh<br/>~3 meses</td>
			<td align="center">3000 mAh<br/>~6 meses</td>
			<td align="center">5000 mAh<br/>~6 meses</td>
		</tr>
		<tr>
			<td align="center"><strong>Monitoramento da bateria</strong></td>
			<td align="center" colspan="4">✅ monitoramento de tensão da bateria integrado</td>
		</tr>
		<tr>
			<td align="center"><strong>Entrada de energia</strong></td>
			<td align="center" colspan="4">USB-C 5 V / 1 A</td>
		</tr>
		<tr>
			<td align="center"><strong>Temp. de trabalho</strong></td>
			<td align="center" colspan="4">0–40 °C</td>
		</tr>
		<tr>
			<td align="center"><strong>Gabinete</strong></td>
			<td align="center" colspan="4">Metal</td>
		</tr>
		<tr>
			<td align="center"><strong>Dimensões</strong></td>
			<td align="center">176 × 120 × 53 mm<br/>(17 mm sem suporte)</td>
			<td align="center">176 × 120 × 53 mm<br/>(17 mm sem suporte)</td>
			<td align="center">224 × 187 × 18,6 mm</td>
			<td align="center">376 × 311 × 40 mm</td>
		</tr>
		<tr>
			<td align="center"><strong>Expansão</strong></td>
			<td align="center">Conector de 8 pinos<br/>UART / I²C / GPIO</td>
			<td align="center">Conector de 8 pinos<br/>UART / I²C / GPIO</td>
			<td align="center">Conector de pinos<br/>UART / I²C / GPIO</td>
			<td align="center">Conector 2 × 4<br/>UART / I²C / GPIO / ADC</td>
		</tr>
		<tr>
			<td align="center"><strong>Certificações</strong></td>
			<td align="center">FCC / CE / TELEC<br/>PSE / RoHS / UKCA</td>
			<td align="center">FCC / CE / TELEC<br/>PSE / RoHS / UKCA</td>
			<td align="center">FCC / CE</td>
			<td align="center">FCC / CE</td>
		</tr>
		<tr>
			<td align="center"><strong>MSRP</strong></td>
			<td align="center">&#36;69.00</td>
			<td align="center">&#36;99.00</td>
			<td align="center">&#36;159.90</td>
			<td align="center">&#36;279.90</td>
		</tr>
	</table>
</div>

## Como escolher

Use o guia rápido abaixo para reduzir a escolha a um modelo. Se várias linhas se aplicarem, a **última linha que corresponder** geralmente é a escolha certa.

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Se a sua prioridade é…</th>
			<th align="center">Modelo recomendado</th>
			<th align="center">Por quê</th>
		</tr>
		<tr>
			<td>Menor custo / quadro de informações com muito texto / atualização parcial rápida</td>
			<td align="center"><strong>E1001</strong></td>
			<td>7,5" monocromático com escala de cinza de 4 níveis, atualização parcial, taxa de atualização de 2–5 s.</td>
		</tr>
		<tr>
			<td>Mesmo formato do E1001, mas você quer conteúdo vívido e totalmente colorido</td>
			<td align="center"><strong>E1002</strong></td>
			<td>Painel totalmente colorido Spectra™ 6 de 7,3" — galeria, receitas, quadro de tarefas das crianças, sinalização de varejo. Observação: o modo totalmente colorido troca a atualização parcial por visuais mais ricos (~15–20 s para atualização completa).</td>
		</tr>
		<tr>
			<td>Interação por toque / painéis interativos / grande leitor monocromático</td>
			<td align="center"><strong>E1003</strong></td>
			<td>10,3" com escala de cinza de 16 níveis, toque capacitivo (HMI v1.1.2+) e bateria de 6 meses.</td>
		</tr>
		<tr>
			<td>Maior, mais nítido, display colorido em qualidade de porta-retratos</td>
			<td align="center"><strong>E1004</strong></td>
			<td>13,3" Spectra™ 6 totalmente colorido, 1200×1600, bateria de 5000 mAh, microSD de 16 GB pré-instalada.</td>
		</tr>
		<tr>
			<td>Precisa de integração com Home Assistant / ESPHome hoje</td>
			<td align="center"><strong>E1001 / E1002 / E1004</strong></td>
			<td>Suporte direto ao Home Assistant está disponível no E1001, E1002 e E1004. ESPHome no E1003 está planejado.</td>
		</tr>
		<tr>
			<td>Quer um painel E-Ink TRMNL</td>
			<td align="center"><strong>E1001 / E1002</strong></td>
			<td>Ambos são oficialmente suportados. O E1002 atualmente funciona em modo monocromático sob o TRMNL.</td>
		</tr>
		<tr>
			<td>A duração da bateria é o fator mais importante</td>
			<td align="center"><strong>E1003 / E1004</strong></td>
			<td>Até 6 meses de duração de bateria com as configurações padrão de atualização.</td>
		</tr>
	</table>
</div>

## reTerminal E1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/24.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1001" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"3"}>reTerminal E1001 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Adquira agora</font></span></strong>
  </a>
</div><br />

O reTerminal E1001 possui uma tela ePaper monocromática de 7,5 polegadas com capacidade de escala de cinza de 4 níveis. Com sua resolução de 800×480, oferece texto nítido e imagens claras consumindo energia mínima. A tela monocromática é perfeita para aplicações em que a legibilidade do texto e a duração da bateria são prioridades.

### Principais recursos

- Tela ePaper monocromática de 7,5 polegadas com escala de cinza de 4 níveis
- Resolução de 800×480
- Consumo de energia ultrabaixo para maior duração da bateria
- Perfeito para aplicações com muito texto, como calendários, listas de tarefas e painéis de informações

## reTerminal E1002

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/25.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1002" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1002 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Adquira agora</font></span></strong>
  </a>
</div><br />

O reTerminal E1002 possui uma vibrante tela ePaper colorida de 7,3 polegadas com tecnologia ACeP (Advanced Color ePaper). Essa tela colorida oferece os mesmos benefícios de eficiência energética da tecnologia ePaper, permitindo ao mesmo tempo um conteúdo visualmente mais envolvente com múltiplas cores, tornando-o ideal para aplicações em que distinção visual e apelo estético são importantes.

### Principais recursos

- Tela ePaper colorida de 7,3 polegadas com tecnologia ACeP
- Resolução de 800×480
- Representação de cores rica mantendo baixo consumo de energia
- Perfeito para exibições de galeria, painéis coloridos e aplicações voltadas para o visual

## reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/2-reTerminal-E1003-Epaper-Display.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1003" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1003 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Adquira agora</font></span></strong>
  </a>
</div><br />

O reTerminal E1003 é uma tela ePaper monocromática open-source de 10,3 polegadas com 16 níveis de escala de cinza e alta resolução de 1404×1872 pixels, com até 6 meses de duração de bateria. A interação por toque é atualmente suportada no firmware SenseCraft HMI v1.1.2. Alimentado por ESP32-S3, ele oferece suporte nativo ao design de UI sem código do SenseCraft HMI, enquanto Arduino e PlatformIO estão disponíveis para desenvolvimento adicional.

A biblioteca relacionada ao toque está planejada para ser disponibilizada como open-source no futuro, proporcionando maior flexibilidade para personalizar os painéis. Mais atualizações serão compartilhadas em breve. O suporte ao driver ESPHome para o E1003 também está planejado para uma versão futura.

### Principais recursos

- Tela ePaper monocromática de 10,3 polegadas com suporte à interação por toque no firmware HMI v1.1.2
- Escala de cinza de 16 níveis com alta resolução de 1404×1872
- Até 6 meses de duração de bateria com operação de ultrabaixo consumo
- Suporte nativo ao SenseCraft HMI, além de compatibilidade com Arduino e PlatformIO, com suporte ao driver ESPHome planejado

## reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/2-reterminal-e1004-epaper-display.jpg" style={{width:700, height:'auto'}}/></div><br />

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1004" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>reTerminal E1004 Wiki</font></span></strong>
  </a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Adquira agora</font></span></strong>
  </a>
</div><br />

O reTerminal E1004 possui uma tela ePaper colorida de 13,3 polegadas e até 6 meses de duração de bateria. Alimentado por ESP32-S3, ele oferece suporte ao SenseCraft HMI para criação de painéis sem código e envio de imagens, além de suportar Home Assistant, Arduino e ESP-IDF para fluxos de trabalho de desenvolvimento avançados.

### Principais recursos

- Tela ePaper colorida de 13,3 polegadas
- Até 6 meses de duração de bateria para cenários sempre ligados
- Plataforma ESP32-S3 com suporte sem código SenseCraft HMI
- Compatível com Home Assistant, Arduino e ESP-IDF

## SenseCraft HMI — A plataforma padrão sem código

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/sensecraft_hmi_overview" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI Wiki</font></span></strong>
  </a>
</div><br />

Todo dispositivo da série reTerminal E é enviado com o firmware **SenseCraft HMI** pronto para uso, para que você possa começar sem escrever uma única linha de código. O aplicativo web cuida do login, do design do painel e da implantação over-the-air para o seu dispositivo:

- **Gerador de IA** — descreva um painel em texto simples e deixe a IA organizá-lo para você.
- **Galeria** — envie imagens e apresentações de slides diretamente para o painel para casos de uso de porta-retratos digital.
- **Canvas** — arraste e solte widgets para criar painéis personalizados.
- **RSS / Conteúdo da Web** — traga notícias em tempo real, clima, calendário ou qualquer feed da web para a tela.
- **Interação por toque** — totalmente suportada no E1003 a partir do firmware HMI v1.1.2.

Se você precisar de mais controle do que o fluxo de trabalho sem código oferece, cada dispositivo também expõe o ESP32-S3 subjacente, para que você possa passar para os tutoriais de aplicação abaixo a qualquer momento.

## Aplicações e tutoriais

Além do SenseCraft HMI, a série reTerminal E integra-se com várias plataformas padrão da indústria e ferramentas visuais de design de UI. A matriz abaixo mostra, para cada tutorial, quais modelos ele cobre atualmente.

### Frameworks de casa inteligente e painéis

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tutorial</th>
			<th>O que ele faz</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_esphome">ESPHome — Display</a></td>
			<td>Conecte o dispositivo ao Home Assistant e desenhe gráficos simples em ePaper com YAML.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">Planejado</td>
			<td align="center">via Home Assistant</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_esphome_advanced">ESPHome — I/O, Battery &amp; Power</a></td>
			<td>Botões, buzzer, LED onboard, monitoramento de bateria, deep sleep, painéis com múltiplas páginas.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">Planejado</td>
			<td align="center">via Home Assistant</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_esphome_rtc_sd_microphone">ESPHome — RTC, SD &amp; Microphone</a></td>
			<td>Sincronização de hora com RTC PCF8563, detecção de cartão microSD e configuração do microfone PDM onboard.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">Planejado</td>
			<td align="center">Sem microfone</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_trmnl">Works with TRMNL</a></td>
			<td>Implante painéis E-Ink por meio da plataforma TRMNL.</td>
			<td align="center">✅</td>
			<td align="center">✅ <em>(modo mono)</em></td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
	</table>
</div>

### Ferramentas visuais de design de UI / sem código

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tutorial</th>
			<th>O que ele faz</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_squareline_vision">Trabalhar com SquareLine Vision</a></td>
			<td>Arraste e solte a interface LVGL no navegador e, em seguida, exporte o código pronto para compilação.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_eezstudio">Trabalhar com EEZ Studio</a></td>
			<td>Projete telas HMI visualmente e faça o deploy por meio da Arduino IDE.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_lopaka">Trabalhar com Lopaka</a></td>
			<td>Ferramenta de desenho baseada na Web que exporta código para layouts de ePaper monocromáticos e coloridos.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">—</td>
			<td align="center">—</td>
		</tr>
	</table>
</div>

### Desenvolvimento baseado em código

<div class="table-center">
	<table align="center">
		<tr>
			<th>Tutorial</th>
			<th>O que ele faz</th>
			<th>E1001</th>
			<th>E1002</th>
			<th>E1003</th>
			<th>E1004</th>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino">Arduino — Tela ePaper</a></td>
			<td>Renderize texto, gráficos e imagens na tela ePaper com as bibliotecas Seeed_GFX ou GxEPD2.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino_peripherals">Arduino — Periféricos integrados</a></td>
			<td>Controle o LED integrado, buzzer, três botões de usuário, sensor SHT4x, monitor de bateria e cartão microSD.</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
		<tr>
			<td><a href="https://wiki.seeedstudio.com/pt-br/reterminal_e10xx_with_arduino_peripherals_2">Arduino — RTC, baixo consumo, áudio &amp; toque</a></td>
			<td>Gerenciamento de horário com RTC, deep sleep / light sleep, gravação com microfone I2S e desenho com toque capacitivo (apenas E1003 para microfone &amp; toque).</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
			<td align="center">✅</td>
		</tr>
	</table>
</div>

:::tip
Procurando as instruções de primeiros passos específicas de cada dispositivo (unboxing, configuração de Wi‑Fi, atualização de firmware)? Vá para o Wiki do produto vinculado na matriz acima:
[E1001](https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1001) ·
[E1002](https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1002) ·
[E1003](https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1003) ·
[E1004](https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1004).
:::

## Recursos

- [Documentação do SenseCraft HMI](https://wiki.seeedstudio.com/pt-br/sensecraft_hmi_overview/)
- [Datasheet do ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [Certificado de Rádio MIC do reTerminal](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reTerminal_MIC_Radio_Certificate.pdf)

## Aviso da FCC

Quaisquer alterações ou modificações não expressamente aprovadas pela parte responsável pela conformidade podem anular a autoridade do usuário para operar o equipamento. Este dispositivo está em conformidade com a Parte 15 das Regras da FCC. A operação está sujeita às duas condições a seguir:

(1) este dispositivo não pode causar interferência prejudicial, e

(2) este dispositivo deve aceitar qualquer interferência recebida, incluindo interferência que possa causar operação indesejada. Este transmissor não deve ser instalado no mesmo local nem operar em conjunto com qualquer outra antena ou transmissor.

Nota: Este equipamento foi testado e considerado em conformidade com os limites para um dispositivo digital Classe B, de acordo com a Parte 15 das Regras da FCC. Esses limites são projetados para fornecer proteção razoável contra interferência prejudicial em uma instalação residencial. Este equipamento gera, usa e pode irradiar energia de radiofrequência e, se não for instalado e utilizado de acordo com as instruções, pode causar interferência prejudicial às comunicações por rádio. No entanto, não há garantia de que a interferência não ocorrerá em uma instalação específica. Se este equipamento causar interferência prejudicial à recepção de rádio ou televisão, o que pode ser determinado desligando e ligando o equipamento, recomenda-se ao usuário tentar corrigir a interferência por meio de uma ou mais das seguintes medidas:

– Reoriente ou reposicione a antena receptora.

– Aumente a distância entre o equipamento e o receptor.

– Conecte o equipamento a uma tomada em um circuito diferente daquele ao qual o receptor está conectado.

– Consulte o revendedor ou um técnico experiente em rádio/TV para obter ajuda. Este dispositivo está em conformidade com os limites de exposição à radiação da FCC estabelecidos para um ambiente não controlado. Este dispositivo deve ser instalado e operado com uma distância mínima de 20 cm entre o radiador e o seu corpo.

## Suporte técnico & discussão sobre o produto

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
