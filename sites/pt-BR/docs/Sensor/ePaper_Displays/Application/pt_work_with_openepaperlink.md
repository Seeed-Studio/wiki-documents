---
description: Controle o hardware de ePaper da Seeed com os ecossistemas OpenDisplay e OpenEPaperLink via Bluetooth Low Energy, incluindo reTerminal E1001, E1002, E1003, XIAO ePaper Display Board EN04 e o caminho XIAO ePaper Breakout Board.
title: Trabalhar com OpenEPaperLink / OpenDisplay
keywords:
  - display ePaper
  - OpenEPaperLink
  - OEPL
  - OpenDisplay
  - reTerminal E1001
  - reTerminal E1002
  - reTerminal E1003
  - EN04
  - ePaper Breakout Board
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
slug: /EN04_opendisplay
sidebar_position: 10
last_update:
  date: 06/30/2026
  author: dimo
aliases:
  - /epaper_breakout_board_with_oepl
createdAt: '2026-04-28'
url: https://wiki.seeedstudio.com/pt-br/EN04_opendisplay/
updatedAt: '2026-07-09'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Trabalhar com OpenEPaperLink / OpenDisplay

[OpenDisplay](https://opendisplay.org/) e [OpenEPaperLink (OEPL)](https://openepaperlink.de/) são ecossistemas de código aberto para controlar displays ePaper via **Bluetooth Low Energy (BLE)**. Um telefone, computador ou host Home Assistant pode se conectar diretamente ao display, portanto o fluxo básico não exige um ponto de acesso 802.15.4.

Este guia cobre dois caminhos de hardware da Seeed:

- **Caminho OpenDisplay Toolbox** — recomendado para firmware OpenDisplay pronto para uso em **reTerminal E1001**, **reTerminal E1002**, **reTerminal E1003** e **XIAO ePaper Display Board EN04**.
- **Caminho OEPL_BLE** — útil para uma configuração modular DIY com a **ePaper Breakout Board para Seeed Studio XIAO** e uma **placa da série XIAO nRF52840**.

A experiência do usuário é semelhante em ambos os caminhos: instalar o firmware, configurar o dispositivo via BLE e depois enviar uma imagem. As ferramentas e os presets suportados são diferentes, então siga a aba que corresponde ao seu hardware.

## Hardware compatível

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Série" default>

A OpenDisplay Toolbox inclui presets para **reTerminal E1001**, **reTerminal E1002** e **reTerminal E1003**.

<div class="table-center">
	<table align="center">
		<tr>
			<th>reTerminal E1001</th>
			<th>reTerminal E1002</th>
			<th>reTerminal E1003</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1001-p-6534.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1003-p-6731.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
		<tr>
			<td align="center">7,5" monocromático, 800 × 480</td>
			<td align="center">7,3" Spectra 6 cores, 800 × 480</td>
			<td align="center">10,3" monocromático, 1404 × 1872, toque</td>
		</tr>
		<tr>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1001" target="_blank" rel="noopener noreferrer">Abrir na Toolbox</a></td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1002" target="_blank" rel="noopener noreferrer">Abrir na Toolbox</a></td>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1003" target="_blank" rel="noopener noreferrer">Abrir na Toolbox</a></td>
		</tr>
	</table>
</div>

Use este caminho quando quiser executar o firmware OpenDisplay diretamente em um dispositivo reTerminal E Série finalizado.

:::caution
A instalação do firmware OpenDisplay substitui o firmware que está sendo executado atualmente no dispositivo. Mantenha um caminho de restauração pronto usando o reTerminal E-Series Firmware Hub oficial ou o pacote de firmware recomendado pelo Wiki do seu produto.
:::

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ePaper Display Board EN04</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/diy_kit_pic.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
		<tr>
			<td align="center"><a href="https://opendisplay.org/firmware/toolbox/index.html?driver=en04" target="_blank" rel="noopener noreferrer">Abrir EN04 na Toolbox</a></td>
		</tr>
	</table>
</div>

EN04 é uma placa controladora de ePaper baseada em nRF52840. É o caminho DIY mais direto para o OpenDisplay quando você quer parear um painel ePaper compatível com um controlador focado em BLE.

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

<div class="table-center">
	<table align="center">
		<tr>
			<th>Display ePaper monocromático de 4,26"</th>
			<th>ePaper Breakout Board para Seeed Studio XIAO</th>
			<th>Seeed Studio XIAO nRF52840 Sense Plus</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-breakout-Board-for-XIAO-V2-p-6374.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank" rel="noopener noreferrer">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Use este caminho quando quiser uma montagem OEPL_BLE modular. A série XIAO nRF52840 pode controlar este kit DIY, e o fluxo de trabalho OEPL da comunidade fornece ferramentas separadas para configuração e envio de imagens.

</TabItem>
</Tabs>

## Por que usar OpenDisplay / OpenEPaperLink?

- **Fluxo de trabalho centrado em BLE** — configure e envie imagens sem um ponto de acesso 802.15.4 dedicado.
- **Ferramentas baseadas em navegador** — instale firmware, selecione presets, configure dispositivos e envie imagens a partir de um navegador compatível.
- **Presets para hardware Seeed** — a OpenDisplay Toolbox inclui presets para reTerminal E1001, E1002, E1003 e EN04.
- **Suporte ao Home Assistant** — dispositivos OpenDisplay podem ser adicionados por meio da integração oficial OpenDisplay do Home Assistant.
- **Ecossistema de código aberto** — firmware, ferramentas e integrações são desenvolvidos em repositórios públicos.

## Etapa 1: Configuração de hardware

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Série" default>

**Etapa 1.** Conecte o dispositivo reTerminal E Série ao seu computador com um cabo de dados USB-C.

**Etapa 2.** Ligue o dispositivo e mantenha-o próximo ao computador. O navegador usará USB para instalação de firmware e BLE para configuração.

**Etapa 3.** Combine seu hardware com o preset correto da OpenDisplay Toolbox:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Dispositivo</th>
			<th>Preset da Toolbox</th>
			<th>Display</th>
		</tr>
		<tr>
			<td>reTerminal E1001</td>
			<td><code>reterminal-e1001</code></td>
			<td>7,5" monocromático, 800 × 480</td>
		</tr>
		<tr>
			<td>reTerminal E1002</td>
			<td><code>reterminal-e1002</code></td>
			<td>7,3" Spectra 6 cores, 800 × 480</td>
		</tr>
		<tr>
			<td>reTerminal E1003</td>
			<td><code>reterminal-e1003</code></td>
			<td>10,3" monocromático, 1404 × 1872</td>
		</tr>
	</table>
</div>

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**Etapa 1.** Insira o cabo FPC do painel ePaper no conector da EN04 e trave a lingueta.

:::tip
Para o conector de 50 pinos, alinhe as marcações `1` e `50` impressas no FPC com as marcações correspondentes na placa. No kit EN04 mostrado abaixo, o lado de contato metálico do FPC fica voltado para cima.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/hardware.jpg" style={{width:600, height:'auto'}}/></div>

**Etapa 2.** Conecte a bateria ao conector JST. O fio vermelho vai para **+**, o fio preto vai para **-**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/battery.jpg" style={{width:600, height:'auto'}}/></div>

**Etapa 3.** Conecte a placa EN04 ao seu computador com um cabo de dados USB-C.

:::caution
Verifique a polaridade da bateria antes de energizar a placa. Um conector de bateria com polaridade invertida pode danificar o hardware.
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

**Passo 1.** Monte a placa da série XIAO nRF52840 na ePaper Breakout Board.

**Passo 2.** Insira o cabo FPC do painel ePaper no conector da breakout board e trave a lingueta.

**Passo 3.** Conecte o XIAO ao seu computador com um cabo de dados USB-C.

</TabItem>
</Tabs>

## Passo 2: Instalar o firmware

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

O OpenDisplay fornece presets diretos do Toolbox para o reTerminal E Series.

**Passo 1.** Abra o preset do Toolbox correspondente no Chrome ou Edge:

- [Preset do Toolbox para reTerminal E1001](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1001)
- [Preset do Toolbox para reTerminal E1002](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1002)
- [Preset do Toolbox para reTerminal E1003](https://opendisplay.org/firmware/toolbox/index.html?config=reterminal-e1003)

**Passo 2.** Confirme que o preset selecionado corresponde ao seu dispositivo.

**Passo 3.** Clique em **Install firmware (USB)**.

**Passo 4.** Na caixa de diálogo de pareamento do navegador, selecione o dispositivo serial USB que aparece quando o reTerminal é conectado.

**Passo 5.** Aguarde até que o instalador termine e o dispositivo reinicie.

Após a instalação, continue com a configuração BLE no próximo passo.

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

O fluxo atual do OpenDisplay usa o Toolbox para a configuração da EN04.

**Passo 1.** Abra o [OpenDisplay Toolbox para EN04](https://opendisplay.org/firmware/toolbox/index.html?driver=en04) no Chrome ou Edge.

**Passo 2.** Selecione o painel que corresponde ao seu display ePaper conectado.

**Passo 3.** Clique em **Install firmware (USB)** e siga o prompt do navegador.

**Passo 4.** Se o navegador solicitar o modo bootloader, pressione duas vezes o botão de reset na placa EN04 e, em seguida, selecione o novo dispositivo USB detectado.

**Passo 5.** Aguarde até que a instalação do firmware seja concluída.

A EN04 será reiniciada com o firmware OpenDisplay e poderá então ser configurada via BLE.

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

O caminho XIAO nRF52840 + Breakout Board usa o firmware **OEPL_BLE** antes que o OEPL Config Builder possa se conectar a ele.

**Passo 1.** Abra a [página de releases do OEPL_BLE](https://github.com/OpenEPaperLink/OEPL_BLE/releases) e baixe o pacote de firmware que corresponde à sua placa XIAO nRF52840.

<div class="github_container" style={{textAlign: 'center'}}>
	<a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"4"}> Download OEPL_BLE Firmware</font></span></strong>
	</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

**Passo 2.** Pressione duas vezes o botão de reset no XIAO. Ele aparecerá como uma unidade USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

**Passo 3.** Arraste o arquivo de firmware `.uf2` baixado para a unidade USB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

O XIAO será reiniciado e executará o firmware OEPL_BLE no próximo ciclo de energia.

</TabItem>
</Tabs>

## Passo 3: Configurar o dispositivo via BLE

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

**Passo 1.** Na mesma página do OpenDisplay Toolbox, clique em **Configure over Bluetooth**.

**Passo 2.** Selecione o seu dispositivo reTerminal na caixa de diálogo de pareamento BLE.

**Passo 3.** Aguarde o Toolbox gravar o preset selecionado no dispositivo.

**Passo 4.** Confirme que o display é atualizado ou mostra a imagem de inicialização/teste do OpenDisplay.

O dispositivo agora está pronto para upload de imagens por meio das ferramentas OpenDisplay ou do Home Assistant.

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**Passo 1.** No OpenDisplay Toolbox, mantenha **EN04** selecionado como a placa controladora e confirme a opção de painel correspondente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step6.png" style={{width:600, height:'auto'}}/></div>

**Passo 2.** Clique em **Configure over Bluetooth**.

**Passo 3.** Selecione o dispositivo EN04 na caixa de diálogo de pareamento BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/step7.png" style={{width:500, height:'auto'}}/></div>

**Passo 4.** Aguarde até que o Toolbox grave a configuração e o display seja atualizado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/boot_screen.jpg" style={{width:500, height:'auto'}}/></div>

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

**Passo 1.** Abra o [OEPL Config Builder](https://config.openepaperlink.org/).

**Passo 2.** Clique em **Connect** e selecione o seu dispositivo XIAO nRF52840 na caixa de diálogo de pareamento BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

**Passo 3.** Use os painéis do builder para configurar o CI host, configurações de energia, display, LEDs, sensores, barramentos e entradas binárias.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

**Passo 4.** Para a configuração do ePaper monocromático Seeed de 4,26", importe a configuração de exemplo abaixo.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank" rel="noopener noreferrer">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Configuração de exemplo 4,26" (JSON)</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

**Passo 5.** Clique em **Write Config** para salvar a configuração no MCU.

</TabItem>
</Tabs>

## Passo 4: Fazer upload de imagens

<Tabs groupId="oepl-hardware">
<TabItem value="reterminal" label="reTerminal E Series" default>

Os dispositivos OpenDisplay podem receber imagens por meio da ferramenta de display no navegador.

**Passo 1.** Abra a [ferramenta de display OpenDisplay](https://opendisplay.org/firmware/display/index.html).

**Passo 2.** Clique em **Connect** e selecione o seu dispositivo reTerminal na caixa de diálogo de pareamento BLE.

**Passo 3.** Clique em **Select Image** e escolha um arquivo de imagem local.

**Passo 4.** Clique em **Upload Image**.

Quando a transferência terminar, o display ePaper será atualizado e mostrará a imagem enviada.

:::tip
Use um tamanho de imagem que corresponda ao seu painel para obter o melhor resultado:

- reTerminal E1001: 800 × 480 px
- reTerminal E1002: 800 × 480 px
- reTerminal E1003: 1404 × 1872 px
:::

</TabItem>
<TabItem value="en04" label="XIAO ePaper Display Board EN04">

**Passo 1.** Abra a [ferramenta de display OpenDisplay](https://opendisplay.org/firmware/display/index.html).

**Passo 2.** Clique em **Connect** e selecione o dispositivo EN04 na caixa de diálogo de pareamento BLE.

**Passo 3.** Clique em **Select Image** e escolha um arquivo de imagem local.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/upload_image.png" style={{width:500, height:'auto'}}/></div>

**Passo 4.** Clique em **Upload Image**. O display ePaper será atualizado após a conclusão da transferência.

:::tip
Use um tamanho de imagem que corresponda ao seu painel conectado. Por exemplo, um painel Spectra 6 de 7,3" usa 800 × 480 px.
:::

</TabItem>
<TabItem value="breakout" label="ePaper Breakout Board + XIAO nRF52840">

O OEPL Image Uploader é uma ferramenta web BLE separada para o caminho OEPL_BLE.

**Passo 1.** Abra o [OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html).

**Passo 2.** Em **E-Paper prefix filter(s)**, insira `OEPL`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

**Passo 3.** Conecte-se ao dispositivo XIAO via BLE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

**Passo 4.** Clique em **Select File** e escolha uma imagem local.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

**Passo 5.** Clique em **Upload Image**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

Quando o uploader mostrar **Upload Complete**, o display ePaper terá sido atualizado.

</TabItem>
</Tabs>

## Integração com Home Assistant

O Home Assistant possui uma integração oficial **OpenDisplay** para dispositivos com firmware OpenDisplay. Ela se comunica via BLE e fornece a ação `opendisplay.upload_image` para enviar imagens ao display.

### Pré-requisitos

- Home Assistant 2026.4 ou posterior.
- Uma configuração Bluetooth funcional que suporte conexões BLE ativas.
- Um dispositivo com firmware OpenDisplay ligado e dentro do alcance do Bluetooth.

Os seguintes caminhos Bluetooth são adequados:

- Home Assistant Green ou outro host Home Assistant com hardware Bluetooth compatível.
- ESPHome Bluetooth Proxy executando firmware ESPHome 2022.9.3 ou posterior.

:::info
Os proxies Bluetooth Shelly são úteis para sensores BLE passivos, mas o upload de imagens do OpenDisplay requer conexões BLE ativas. Use um adaptador Bluetooth do Home Assistant ou um ESPHome Bluetooth Proxy para este fluxo de trabalho.
:::

### Adicionar o dispositivo

**Passo 1.** No Home Assistant, vá para **Settings > Devices & services**.

**Passo 2.** Se o dispositivo for descoberto automaticamente, clique em **Add** no cartão do OpenDisplay.

**Passo 3.** Se ele não for descoberto automaticamente, clique em **Add Integration**, pesquise por **OpenDisplay** e siga o fluxo de configuração.

**Passo 4.** Defina o nome e a área do dispositivo.

Depois que o dispositivo for adicionado, o Home Assistant poderá descobrir e conectar ao dispositivo OpenDisplay via Bluetooth.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pair_ha.jpg" style={{width:500, height:'auto'}}/></div>

### Fazer upload de uma imagem a partir do Home Assistant

Armazene sua imagem na pasta de mídia local do Home Assistant e, em seguida, chame `opendisplay.upload_image`.

```yaml
action: opendisplay.upload_image
data:
  device_id: "your_device_id"
  image:
    media_content_id: "media-source://media_source/local/photo.png"
    media_content_type: "image/png"
```

Para atualizações agendadas, use a mesma ação dentro de uma automação.

```yaml
triggers:
  - trigger: time
    at: "08:00:00"
actions:
  - action: opendisplay.upload_image
    data:
      device_id: "your_device_id"
      image:
        media_content_id: "media-source://media_source/local/daily.png"
        media_content_type: "image/png"
```

:::tip
Use automações do Home Assistant para gerar ou copiar um novo PNG antes de chamar `opendisplay.upload_image`. A integração OpenDisplay então lida com a transferência BLE para o display.
:::

### Opcional: payloads de desenho personalizados

A comunidade OpenDisplay também mantém uma integração HACS com um fluxo de trabalho `drawcustom` para desenhar texto, ícones, formas, códigos QR, imagens, gráficos e barras de progresso diretamente a partir de payloads do Home Assistant.

Use este caminho quando você precisar especificamente de layouts baseados em comandos de desenho em vez de fazer upload de uma imagem preparada.

<div class="github_container" style={{textAlign: 'center'}}>
	<a class="github_item" href="https://github.com/OpenDisplay-org/Home_Assistant_Integration" target="_blank" rel="noopener noreferrer">
	<strong><span><font color={'FFFFFF'} size={"4"}> Integração OpenDisplay HACS</font></span></strong>
	</a>
</div>

No editor visual do Home Assistant, crie uma automação, adicione um gatilho de horário e, em seguida, adicione a ação de desenho do OpenDisplay e selecione o dispositivo de destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/fill_trigger.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/add_action.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/pick_target.png" style={{width:800, height:'auto'}}/></div>

## Usando ESPHome Bluetooth Proxy

Um ESPHome Bluetooth Proxy estende a cobertura Bluetooth e melhora a confiabilidade quando o display está longe do host do Home Assistant.

### Pré-requisitos

- Um dispositivo ESP32, como o XIAO ESP32S3.
- ESPHome instalado no Home Assistant.
- Um cabo de dados USB para o primeiro flash.

### Configuração passo a passo

**Passo 1.** Conecte o dispositivo ESP32 ao computador ou ao host do Home Assistant usado para o flash.

**Passo 2.** Crie um novo dispositivo ESPHome e use uma configuração de Bluetooth Proxy semelhante ao exemplo abaixo.

```yaml
esphome:
  name: esps3-proxy
  friendly_name: ESP32S3 Bluetooth Proxy

esp32:
  board: esp32-s3-devkitc-1
  framework:
    type: esp-idf

logger:
  level: INFO

esp32_ble_tracker:
  scan_parameters:
    active: true

bluetooth_proxy:
  active: true

api:
  encryption:
    key: "YOUR_ENCRYPTION_KEY"

ota:
  - platform: esphome
    password: "YOUR_OTA_PASSWORD"

wifi:
  ssid: "YOUR_WIFI_SSID"
  password: "YOUR_WIFI_PASSWORD"

captive_portal:
```

**Passo 3.** Clique em **Install** no ESPHome e faça o flash do firmware no dispositivo ESP32.

**Passo 4.** Depois que o ESP32 se conectar ao Wi-Fi, adicione o Bluetooth Proxy descoberto no Home Assistant.

**Passo 5.** Mantenha o proxy próximo ao dispositivo OpenDisplay durante os uploads de imagem.

Quando o proxy estiver funcionando, o Home Assistant mostrará o Bluetooth Proxy como conectado e o display ePaper poderá ser descoberto por meio dele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/5.png" style={{width:700, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/OPEL/esphome_proxy/6.png" style={{width:700, height:'auto'}}/></div>

## Bônus: suporte impresso em 3D

Para o EN04 com o painel Spectra de 7,3", este modelo da comunidade fornece um inserto para a moldura de quadro IKEA RODALM:

- **[MakerWorld]** [Inserto Seeed 7.3" Spectra para moldura IKEA RODALM](https://makerworld.com/pl/models/2103122-seeed-7-3-spectra-insert-for-ikea-rodalm-frame)

## Recursos

- **[Web Tool]** [OpenDisplay Toolbox](https://opendisplay.org/firmware/toolbox/index.html)
- **[Web Tool]** [Ferramenta de display OpenDisplay](https://opendisplay.org/firmware/display/index.html)
- **[Web Tool]** [Construtor de Configuração OEPL](https://config.openepaperlink.org/)
- **[Web Tool]** [Uploader de Imagens OEPL](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html)
- **[Home Assistant]** [Integração oficial OpenDisplay](https://www.home-assistant.io/integrations/opendisplay/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
