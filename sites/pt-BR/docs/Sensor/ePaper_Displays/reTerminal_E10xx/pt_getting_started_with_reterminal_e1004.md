---
description: O reTerminal E1004 é um display ePaper colorido completo de 13,3 polegadas, open-source, alimentado por ESP32-S3, com tecnologia E Ink® Spectra™ 6 e suporte ao SenseCraft HMI.
title: Introdução ao reTerminal E1004
sidebar_position: 5
keywords:
  - reTerminal E1004
  - Display ePaper
  - ESP32-S3
  - SenseCraft HMI
  - E Ink Spectra 6
  - Dashboard para Casa Inteligente
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg
slug: /getting_started_with_reterminal_e1004
sku: 100064156
last_update:
  date: 4/24/2026
  author: Citric
createdAt: '2026-01-29'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1004/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introdução ao reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/mainpic2.jpeg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1004-p-6692.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

:::tip Experimente demos sem configurar um ambiente de desenvolvimento
Se você quiser visualizar rapidamente os resultados do projeto ou testar o firmware demo básico antes de configurar um ambiente de desenvolvimento, abra o **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. Você pode escolher um dispositivo compatível da linha reTerminal E e gravar o firmware de demonstração diretamente a partir de um navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Gravador de Firmware 🖱️</font></span></strong>
    </a>
</div><br />
:::

## Introdução

O reTerminal E1004 é um display ePaper colorido completo de 13,3 polegadas, open-source, com até 6 meses de duração de bateria. Alimentado por ESP32-S3, ele oferece suporte nativo à nossa plataforma de UI sem código SenseCraft HMI para criação fácil de dashboards, além de suportar Home Assistant, Arduino e ESP-IDF para desenvolvimento adicional. Com o display ePaper colorido completo E Ink® Spectra™ 6, é perfeito para porta-retratos digitais e visualização de dashboards coloridos.

### Recursos

- Display ePaper colorido E Ink® Spectra™ 6 de alta resolução, bonito e pronto para uso
- Design e implantação de UI sem código com SenseCraft HMI
- Apresentações de imagens com sincronização de dados em tempo real e bateria que dura meses
- Adapta-se às necessidades de decoração e exibição em diferentes cenários

## Especificações

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Item</th>
			<th align="center">Descrição</th>
		</tr>
		<tr>
			<td align="center"><strong>Nome do Produto</strong></td>
			<td align="center">reTerminal E1004</td>
		</tr>
		<tr>
			<td align="center"><strong>Processador</strong></td>
			<td align="center">ESP32-S3 com 8MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>Armazenamento</strong></td>
			<td align="center">Flash de 32MB, suporta cartão Micro SD (até 32GB, 16GB incluídos)</td>
		</tr>
		<tr>
			<td align="center"><strong>Display</strong></td>
			<td align="center">13,3" Spectra™ 6 ePaper colorido completo</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolução</strong></td>
			<td align="center">1200 x 1600 pixels</td>
		</tr>
		<tr>
			<td align="center"><strong>Conectividade sem Fio</strong></td>
			<td align="center">Wi-Fi 2,4GHz 802.11 b/g/n, Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>Sensores</strong></td>
			<td align="center">Sensores de temperatura e umidade</td>
		</tr>
		<tr>
			<td align="center"><strong>Áudio</strong></td>
			<td align="center">Buzzer (alerta sonoro)</td>
		</tr>
		<tr>
			<td align="center"><strong>Bateria</strong></td>
			<td align="center">5000mAh</td>
		</tr>
		<tr>
			<td align="center"><strong>Entrada de Energia</strong></td>
			<td align="center">USB-C 5V / 1A</td>
		</tr>
		<tr>
			<td align="center"><strong>Temperatura de Operação</strong></td>
			<td align="center">0-40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>Dimensões</strong></td>
			<td align="center">376mm x 311mm x 40mm</td>
		</tr>
	</table>
</div>

## Aplicações

- **Porta-retratos eletrônico de baixo consumo:** Exiba fotos de família ou arte em alta resolução com qualidade semelhante a papel, sem se preocupar com recarga diária.
- **Quadro de informações da família:** Acompanhe calendários, notificações, clima e notícias em um formato elegante e sempre ligado.
- **Dashboard de automação residencial:** Visualize dados em tempo real da casa inteligente (temperatura, umidade, qualidade do ar) via Home Assistant.
- **Display para escritório inteligente:** Mostre agendas de salas de reunião, disponibilidade ou orientações de direção.
- **Sinalização para varejo e espaços públicos:** Menus, horários ou indicadores de ocupação com eficiência energética.
- **Educação e prototipagem:** Uma plataforma ideal para aprender IoT, sistemas embarcados e design de UI.

## Visão geral do hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/209.png" style={{width:1000, height:'auto'}}/></div>

1. **Display ePaper:** Área de display ePaper colorido completo E Ink® Spectra™ 6 de 13,3".
2. **Botões de toque:** Botões capacitivos na moldura frontal para atualização da tela e navegação de páginas (anterior / próxima).
3. **Botões de Página Acima / Abaixo / Atualizar:** Botões físicos na parte traseira para virar páginas e atualizar manualmente o display ePaper.
4. **LED vermelho de carregamento:** Indica o status de carregamento da bateria.
5. **Porta USB-C de dados e carregamento:** Para carregar o dispositivo e transmissão de dados.
6. **Interruptor de energia:** Para ligar ou desligar a alimentação do dispositivo.
7. **LED verde de status:** Indica o status operacional ou de sistema atual.
8. **Botão de reset:** Para reiniciar o dispositivo.
9. **Botão de boot:** Usado para entrar no modo de boot / download de firmware.
10. **Porta de expansão:** Conector de 2 × 4 pinos fornecendo conexões de VDD, GND, UART, I2C, GPIO e ADC para sensores, módulos ou periféricos externos.
11. **Inserções para montagem do suporte:** Inserções rosqueadas na parte traseira para fixar o dispositivo em seu suporte.

## Primeiros passos

O reTerminal E1004 vem pré-carregado com firmware que oferece suporte ao **SenseCraft HMI**, uma plataforma sem código que permite projetar e implantar dashboards personalizados com facilidade.

### Preparação

**Passo 1.** Desembale seu reTerminal E1004 e verifique se todos os componentes estão incluídos:

- Dispositivo reTerminal E1004
- Cabo USB-C
- Guia de início rápido
- Chave de fenda
- Parafusos
- Suporte metálico (suporta orientação tanto retrato quanto paisagem)

**Passo 2.** (Opcional) Prenda o suporte metálico para posicionar o dispositivo na orientação retrato ou paisagem:

Localize o suporte metálico incluído na embalagem. O suporte utiliza as inserções rosqueadas na parte traseira do reTerminal E1004 — você pode montá-lo verticalmente para orientação retrato ou girá-lo 90° e montá-lo no outro conjunto de inserções para orientação paisagem. Use a chave de fenda e os parafusos incluídos para fixar o suporte. Depois de preso, coloque o reTerminal E1004 em uma superfície plana; o suporte irá mantê-lo na orientação escolhida.

<div class="table-center">
<iframe width="600" height="380" src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/213.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

**Passo 3.** (Opcional) Substitua ou remova o cartão microSD.

O reTerminal E1004 vem com um cartão microSD de 16GB pré-instalado, portanto, na maioria dos casos você não precisa inserir um por conta própria. Se quiser trocá-lo por um cartão diferente ou remover o cartão, consulte o vídeo abaixo para obter orientações.

<div class="table-center">
<iframe width="600" height="380" src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/214.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
O display ePaper da linha reTerminal E suporta apenas cartões MicroSD de até 32GB no formato Fat32.  
O cartão SD de 32GB vem formatado como exFAT por padrão. Após formatá-lo para FAT32, ele pode ser montado com sucesso e usado para armazenar imagens.
:::

**Passo 4.** (Opcional) Instale drivers USB, se necessário:

Dependendo do seu sistema operacional, talvez seja necessário instalar drivers USB para garantir a comunicação adequada com o seu reTerminal E1004:

<Tabs>
<TabItem value="Windows" label="Windows" default>

- Sistemas Windows 11 normalmente incluem o driver por padrão
- Para Windows 10 e versões anteriores, talvez seja necessário baixar e instalar o driver CH341 a partir do [site oficial da WCH](https://www.wch-ic.com/downloads/CH341SER_ZIP.html)

</TabItem>

<TabItem value="MacOS" label="MacOS">

Baixe e instale o driver CH34X a partir do [site oficial da WCH](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html)

</TabItem>

<TabItem value="Linux" label="Linux">

A maioria das distribuições Linux modernas inclui os drivers necessários por padrão

</TabItem>
</Tabs>

### Ligar

**Passo 1.** Ligue o dispositivo deslizando o interruptor de energia para a posição **ON**. O interruptor de energia está localizado na parte traseira da unidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/215.gif" style={{width:600, height:'auto'}}/></div>

**Passo 2.** Na primeira inicialização, o dispositivo exibirá informações do produto e instruções de configuração de rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/212.png" style={{width:400, height:'auto'}}/></div><br />

**Passo 3.** O LED verde do usuário acenderá por aproximadamente 3 segundos, indicando que o dispositivo está ligado e inicializando. Após 30 segundos sem operação do dispositivo, para garantir a energia, o dispositivo entrará automaticamente no modo de suspensão e o LED será desligado automaticamente.

:::tip
Portanto, precisamos concluir as próximas etapas de configuração da rede durante esse período. Quando o dispositivo entra em suspensão, você não conseguirá encontrar o hotspot do dispositivo. Se isso acontecer, você pode acordar o dispositivo pressionando o botão de toque **Refresh** na moldura frontal ou o botão físico **Refresh** na parte traseira da unidade.
:::

### Configuração de rede

<Tabs>
<TabItem value="Network Setup via PC" label="Configuração de rede via PC" default>

**Passo 1.** Conecte-se ao ponto de acesso Wi-Fi do dispositivo a partir do seu smartphone ou computador. O nome do AP aparecerá na tela (sem senha). As credenciais da rede são `reTerminal E1004-{MAC Address}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Passo 2.** Depois de conectado, seu telefone deve redirecionar automaticamente para a página de configuração de Wi‑Fi. Caso isso não aconteça, abra um navegador e acesse `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Passo 3.** Selecione sua rede Wi‑Fi local e insira a senha, depois clique em "Connect".

:::note
O display ePaper da reTerminal E Series suporta apenas redes Wi‑Fi de 2,4 GHz, não 5 GHz ou outras faixas.
:::

**Passo 4.** Após a conexão bem-sucedida, o dispositivo emitirá um bipe de confirmação e exibirá uma tela com o código de pareamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/213.png" style={{width:400, height:'auto'}}/></div>

### Conectando à Plataforma SenseCraft

**Passo 1.** Acesse o [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) no seu navegador e crie uma conta ou faça login.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**Passo 2.** Na barra lateral esquerda, clique em **Device** para entrar na página de dispositivos e, em seguida, clique no botão **+ New Device** no canto superior esquerdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/200.png" style={{width:600, height:'auto'}}/></div>

**Passo 3.** Dê um nome ao seu dispositivo e insira o código de pareamento exibido na tela do dispositivo e clique em **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1004/12.jpg" style={{width:1000, height:'auto'}}/></div>

**Passo 4.** Depois de pareado, o dispositivo exibirá uma mensagem solicitando que você crie seu primeiro dashboard.

</TabItem>
<TabItem value="Network Setup via SenseCraft APP" label="Configuração de rede via SenseCraft APP">

Este método usa o aplicativo móvel SenseCraft para configurar a rede do dispositivo e adicioná‑lo à sua conta SenseCraft via Bluetooth.

Primeiro, baixe o SenseCraft App. Você pode encontrá‑lo pesquisando por "SenseCraft" na Google Play Store ou Apple App Store. Como alternativa, você pode baixá‑lo neste site.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**Passo 1.** Abra o SenseCraft App, faça login na sua conta e vá até a aba **User**. Toque em **Device Bluetooth Configuration** para iniciar o processo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 2.** Na tela "Please select the device type", escolha **reTerminal E1004**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 3.** Siga as instruções na tela para colocar o dispositivo em modo de transmissão Bluetooth. Certifique‑se de que o Bluetooth do seu telefone esteja ativado. Toque em **Scan**, e o aplicativo irá localizar dispositivos próximos. Selecione seu dispositivo na lista para conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 4.** Depois de conectado via Bluetooth, o aplicativo solicitará que você configure a conexão Wi‑Fi. Selecione sua rede Wi‑Fi local de 2,4 GHz na lista suspensa, insira a senha e toque em **Next**.

:::note
O dispositivo só pode ser configurado por meio de uma rede Wi‑Fi de 2,4G.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 5.** O aplicativo enviará as credenciais de Wi‑Fi para o dispositivo e o adicionará à sua conta SenseCraft. Uma mensagem "Device added successfully" aparecerá ao final. Agora você pode tocar em **Start exploring!** para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 6.** Seu reTerminal agora aparecerá na lista de dispositivos na aba principal **Device** do aplicativo, conectado com sucesso à sua conta SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 7.** Você pode tocar no dispositivo na lista para ver sua página de **Device Detail**. A partir daí, é possível gerenciar o dispositivo e enviar fotos. Para dashboards e design de canvas mais complexos, você será orientado a usar a versão em navegador web do SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### Atualização de Firmware

Depois que o dispositivo for adicionado com sucesso à sua conta SenseCraft, a plataforma verificará automaticamente a versão do firmware. Se houver um firmware mais recente disponível, você será solicitado a atualizar.

Você também pode verificar manualmente a versão do firmware a qualquer momento:

**Passo 1.** Na página **Device**, encontre seu reTerminal E1004 para ver seus detalhes e observe a **versão atual do firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**Passo 2.** Na barra lateral esquerda, clique em **Tools** e abra a aba **Firmware Flasher** para ver a **versão mais recente do firmware** disponível para este dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**Passo 3.** Se a versão atual for mais antiga que a mais recente, siga o fluxo de 3 passos na página Firmware Flasher para atualizar:

1. **Select your device** — conecte o reTerminal E1004 ao computador via cabo USB‑C, certifique‑se de que o interruptor de energia esteja **ON** e clique em **Select** e escolha seu dispositivo na lista.

2. **Select firmware** — escolha o firmware mais recente nas opções do menu suspenso de versões.

3. **Flash** — clique em **Flash** e aguarde a conclusão da atualização. Ative **Full Flash** somente se quiser redefinir o dispositivo para o estado de fábrica (todos os dados, configurações e designs serão apagados).

:::note

1. Atualizar o firmware garante desempenho ideal e acesso aos recursos mais recentes.

2. Não é possível gravar o firmware corretamente quando o dispositivo está desligado ou em modo de suspensão. Se você selecionar a porta correta para o seu dispositivo, mas nunca vir o progresso de gravação do firmware, talvez seja necessário acordar o dispositivo pressionando o botão **Refresh** na unidade e tentar novamente.

3. **Faça um Flash padrão** para manter sua configuração: Wi‑Fi, designs implantados e imagens são preservados. **Faça um Full Flash para começar do zero**: todos os dados, configurações e designs são apagados (estado de fábrica).

:::

## Exibir Conteúdo no Seu reTerminal E1004

Depois que o dispositivo estiver pareado, você poderá começar a usá‑lo para exibir o que quiser. Recomendamos o **SenseCraft HMI** — uma plataforma em nuvem sem código que permite projetar e implantar conteúdo no seu reTerminal E1004 em apenas alguns cliques.

O SenseCraft HMI possui um Wiki dedicado com tutoriais completos e documentação de recursos. Para guias detalhados (configuração de conta, gravação de firmware, uso avançado do editor, implantação etc.), consulte:

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

Como este artigo é um **Guia de Introdução** ao produto, não repetiremos o mesmo conteúdo aqui — a seguir mostramos apenas como exibir rapidamente algo no seu reTerminal E1004.

### Home — Comece a Partir de um Template da Comunidade

A maneira mais rápida de colocar algo na tela é começar a partir de um template pronto. Na página **Home** do SenseCraft HMI, você encontrará uma coleção grande e em constante crescimento de templates contribuídos pela comunidade — dashboards, relógios, painéis de clima, paredes de citações, calendários, porta‑retratos e muito mais. Navegue pela galeria, escolha o design que preferir e faça a implantação no seu reTerminal E1004 com um clique.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — Gerencie e Crie Seu Próprio Conteúdo

A página **Workspace** é onde você gerencia todas as páginas e conteúdos exibidos no dispositivo atualmente vinculado. A partir daqui você pode:

- Criar e organizar suas próprias páginas de design do zero
- Enviar imagens e organizá‑las em apresentações de slides
- Combinar texto, widgets, formas, dados, feeds RSS, conteúdo da web e muito mais em um único editor de arrastar e soltar
- Implantar o design final sem fio no seu reTerminal E1004

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

Depois que seu design for salvo, clique em **Deploy to Device**, selecione seu reTerminal E1004 pareado e o conteúdo será transmitido sem fio para o dispositivo. O display ePaper será atualizado para mostrar seu design.

:::note
Devido à natureza da tecnologia E Ink, a atualização da tela pode levar alguns segundos para atualizar totalmente a imagem e eliminar qualquer efeito fantasma.
:::

Para todo o restante — operações detalhadas do editor, dicas e notas de versão — consulte o [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/).

## Operando o Dispositivo

### Botão de Atualização (Refresh)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/216.jpg" style={{width:700, height:'auto'}}/></div>

O botão de atualização está localizado ou como o botão mais à esquerda na parte frontal inferior do dispositivo, ou na parte de trás do dispositivo na posição mostrada na imagem acima. Ele possui várias funções:

- **Pressão única**: Atualiza manualmente o display e verifica se há novo conteúdo na plataforma SenseCraft. O buzzer emitirá um bipe para confirmar a ação. Este botão também é comumente usado para ativar o dispositivo. Você pode usar este botão para ativar um dispositivo quando ele entrou em modo de suspensão e um comando de atualização do dashboard geralmente não está imediatamente disponível para o dispositivo.


### Botões de navegação

Os botões esquerdo e direito permitem navegar entre várias páginas se o seu dashboard contiver mais de uma página:

- **Botão esquerdo**: Navega para a página anterior

- **Botão direito**: Navega para a próxima página

### Redefinição de rede

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/217.jpg" style={{width:700, height:'auto'}}/></div>

Se você precisar se conectar a uma rede Wi-Fi diferente:

**Passo 1.** Pressione e segure ambos os botões de navegação (esquerdo e direito) simultaneamente por 2 segundos.

**Passo 2.** O dispositivo entrará no modo de configuração de Wi-Fi, e você poderá seguir novamente as etapas de [Configuração de rede](#configuração-de-rede) para se conectar a uma nova rede.

### Indicadores LED

- **LED vermelho**:
  - Desligado: Totalmente carregado ou não carregando
  - Sempre ligado: carregando

- **LED verde**:
  - Ligado por 3 segundos na inicialização: o dispositivo está ligando

### Funcionamento com bateria

Ao operar com alimentação por bateria:

- O dispositivo entrará automaticamente em modo de baixo consumo entre as atualizações

- A vida útil da bateria depende da frequência de atualização (até 6 meses em modo de baixo consumo com intervalo de atualização de 6 horas)

- O dispositivo exibirá um ícone de bateria fraca no canto superior direito quando o nível da bateria estiver abaixo de 20%

:::tip
Se você quiser escrever algum código por conta própria para ler a tensão da bateria, será mais preciso adicionar um atraso de 10ms antes da função analogRead().
:::

### Pinos de expansão

O reTerminal E1004 possui um conector de expansão de 8 pinos (J2) que fornece opções de conectividade para adicionar sensores externos, módulos ou outros hardwares para estender a funcionalidade do seu dispositivo. Este conector de expansão expõe vários pinos GPIO do ESP32-S3 e interfaces de comunicação, tornando-o um ponto de conexão versátil para seus projetos DIY.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/217.png" style={{width:700, height:'auto'}}/></div>

#### Pinagem do conector de expansão

O conector de expansão (J2) é um cabeçalho 2×4 (número da peça **ST-FH-254-0148-2×4P**) que fornece 8 pinos organizados em duas colunas. A notação de posição dos pinos abaixo usa `Lx` para a coluna esquerda e `Rx` para a coluna direita (numerados de cima para baixo, como mostrado na imagem acima):

<div class="table-center">
	<table align="center">
		<tr>
			<th>Pino</th>
			<th>Rótulo</th>
			<th>Pino ESP32-S3</th>
			<th>Tipo</th>
			<th>Descrição</th>
		</tr>
		<tr>
			<td>L1</td>
			<td>I2C2_SCL</td>
			<td>GPIO40</td>
			<td>GPIO / I2C SCL</td>
			<td>GPIO ou sinal de clock I2C</td>
		</tr>
		<tr>
			<td>L2</td>
			<td>I2C1_SDA</td>
			<td>GPIO39</td>
			<td>GPIO / I2C SDA</td>
			<td>GPIO ou sinal de dados I2C</td>
		</tr>
		<tr>
			<td>L3</td>
			<td>GND</td>
			<td>-</td>
			<td>Terra</td>
			<td>Referência de terra comum</td>
		</tr>
		<tr>
			<td>L4</td>
			<td>3V3</td>
			<td>-</td>
			<td>Alimentação</td>
			<td>Fonte de alimentação de 3,3V para dispositivos externos</td>
		</tr>
		<tr>
			<td>R1</td>
			<td>RX1</td>
			<td>GPIO42</td>
			<td>GPIO / UART RX</td>
			<td>GPIO ou sinal de recepção (RX) UART</td>
		</tr>
		<tr>
			<td>R2</td>
			<td>TX1</td>
			<td>GPIO41</td>
			<td>GPIO / UART TX</td>
			<td>GPIO ou sinal de transmissão (TX) UART</td>
		</tr>
		<tr>
			<td>R3</td>
			<td>ADC</td>
			<td>GPIO6</td>
			<td>GPIO / ADC</td>
			<td>GPIO de uso geral com capacidade de entrada analógica</td>
		</tr>
		<tr>
			<td>R4</td>
			<td>GND</td>
			<td>-</td>
			<td>Terra</td>
			<td>Referência de terra comum</td>
		</tr>
	</table>
</div>

## Solução de problemas

### P1: O dispositivo não liga

- Certifique-se de que o interruptor de alimentação esteja na posição ON
- Conecte o cabo USB-C para carregar o dispositivo
- Verifique se o LED vermelho está sempre ligado (indicando carregamento)
- Se estiver usando alimentação por bateria, certifique-se de que a bateria esteja devidamente conectada e carregada

### P2: Não é possível conectar ao Wi-Fi

- Verifique se você está inserindo a senha Wi-Fi correta
- Certifique-se de que sua rede Wi-Fi esteja operacional
- Verifique se o seu roteador Wi-Fi oferece suporte a redes de 2,4GHz (5GHz não é suportado)
- Tente posicionar o dispositivo mais próximo do seu roteador Wi-Fi

### P3: Display não está atualizando

- Pressione o botão de atualização para acionar uma atualização manualmente
- Verifique se o dispositivo está conectado ao Wi-Fi (sem ícone de desconexão no canto)
- Verifique sua conta SenseCraft para garantir que o dashboard esteja devidamente implantado
- Se o problema persistir, tente reiniciar o dispositivo
- Se o dispositivo ainda não responder após a reinicialização, regrave o firmware correspondente na plataforma SenseCraft HMI e verifique se o dispositivo consegue atualizar normalmente

### P4: Conexão de rede perdida

- O dispositivo tentará automaticamente reconectar-se a redes conhecidas
- Quando reconectado, o ícone de desconexão do Wi-Fi desaparecerá
- Se não conseguir reconectar, siga o procedimento de Redefinição de rede acima

### P5: Não é possível encontrar a porta serial (COM) no macOS

Se o seu Mac não reconhecer o reTerminal via USB, siga este guia compacto para instalar o driver CH340/CH340K:

**Passo 1. Baixar e instalar o driver**
Baixe o driver na [página oficial da WCH](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) e execute `CH34xVCPDriver.pkg`. 
:::tip
Se o macOS bloquear a instalação, vá para **System Settings → Privacy & Security**, role para encontrar o software WCH bloqueado e clique em **Allow**.
:::
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/02_installer_welcome.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/03_install_success.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**Passo 2. Ativar a extensão do driver (Crítico)**
Abra o app **CH34xVCPDriver** a partir do Launchpad, clique em **Install**, depois vá para **System Settings → General → Login Items & Extensions → Driver Extensions**. Ative **CH34xVCPDriver Extensions** para **ON** (azul).
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**Passo 3. Conectar e verificar**
Certifique-se de que o **interruptor de alimentação do dispositivo esteja em ON** e use um **cabo USB-C de dados** (não apenas de carregamento). Abra o Terminal e execute:
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

Se você vir o caminho do dispositivo na saída, o driver está instalado corretamente e seu reTerminal está pronto para uso!

## Recursos

- [Esquemático do reTerminal E1004 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004523_reTerminal%20E1004_V1.0_SCH_260105.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
