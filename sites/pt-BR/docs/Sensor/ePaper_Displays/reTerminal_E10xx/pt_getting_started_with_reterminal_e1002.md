---
description: Este artigo irá guiá-lo para começar rapidamente a usar o reTerminal E1002.
title: Introdução ao reTerminal E1002
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_with_reterminal_e1002
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
createdAt: '2025-07-25'
updatedAt: '2026-06-16'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1002/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introdução ao reTerminal E1002

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/132.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E1002-p-6533.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div><br />

:::tip Experimente demos sem configurar um ambiente de desenvolvimento
Se você quiser visualizar rapidamente os resultados do projeto ou testar o firmware demo básico antes de configurar um ambiente de desenvolvimento, abra o **[reTerminal E-Series Firmware Hub](https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/)**. Você pode escolher um dispositivo compatível da linha reTerminal E Series e gravar o firmware de demonstração diretamente a partir de um navegador.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://seeed-projects.github.io/OSHW-reTerminal-Series-E-D/" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Gravador de Firmware 🖱️</font></span></strong>
    </a>
</div><br />
:::

:::caution Dicas para atualização de firmware
Recomendamos que você **[conclua a atualização de firmware do seu produto](#preliminary)** assim que recebê-lo para obter a melhor experiência.
:::

:::danger Aviso sobre a vida útil da tela
1. Se o seu reTerminal ficar inativo por muito tempo, você pode pressionar e segurar o botão verde no dispositivo por 5 segundos para limpar o conteúdo da tela (usando o firmware de fábrica), o que pode prevenir efetivamente sombras residuais e aumentar a vida útil da tela.

2. Sempre que possível, não mantenha uma mesma imagem exibida por um longo período de tempo (mais de 1 dia), pois isso pode criar uma imagem residual. Recomenda-se que a imagem da tela seja atualizada pelo menos uma vez por dia. Se o dispositivo não for usado por um longo tempo, é recomendável limpar o conteúdo exibido na tela do dispositivo.

3. Atualize a tela com a menor frequência possível ao usar e depurar o programa. Atualizar a tela em alta velocidade por um longo período de tempo também pode reduzir a vida útil da tela.
:::

## Introdução

O reTerminal E1002 é um display ePaper colorido de 7,3 polegadas, open-source e em cores completas, com excepcional duração de bateria de 3 meses. Alimentado por ESP32-S3, ele oferece suporte nativo à nossa plataforma de interface sem código SenseCraft HMI para criação fácil de dashboards, além de suportar Home Assistant, TRMNL E-ink dashboard, Arduino e ESP-IDF para desenvolvimento adicional. Com o display ePaper colorido completo E Ink® Spectra™ 6, é perfeito para porta-retratos digitais e visualização de dashboards coloridos.

### Recursos

- **Belo display ePaper colorido E Ink® Spectra™6 pronto para uso**
- **Ultrabaixo consumo de energia com bateria de 3 meses de duração**
- **Design e implantação de UI sem código com SenseCraft HMI**
- **Funciona com plataformas de software populares**
- **Personalização flexível de hardware e software**

## Especificações

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Item</th>
			<th align="center">Descrição</th>
		</tr>
		<tr>
			<td align="center"><strong>Nome do produto</strong></td>
			<td align="center">reTerminal E1002</td>
		</tr>
		<tr>
			<td align="center"><strong>Processador</strong></td>
			<td align="center">ESP32-S3 com 8MB PSRAM</td>
		</tr>
		<tr>
			<td align="center"><strong>Armazenamento</strong></td>
			<td align="center">Flash de 32MB, suporta cartão Micro SD</td>
		</tr>
		<tr>
			<td align="center"><strong>Display</strong></td>
			<td align="center">7,3" Colorido Completo (E Ink® Spectra™ 6)</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolução</strong></td>
			<td align="center">800 x 480 pixels</td>
		</tr>
		<tr>
			<td align="center"><strong>Cartão Micro SD</strong></td>
			<td align="center">Suporte máximo a cartão SD de 32GB, formato FAT32</td>
		</tr>
		<tr>
			<td align="center"><strong>Conectividade sem fio</strong></td>
			<td align="center">Wi-Fi 2,4GHz 802.11 b/g/n, Bluetooth 5.0</td>
		</tr>
		<tr>
			<td align="center"><strong>Sensores</strong></td>
			<td align="center">Sensores de temperatura e umidade</td>
		</tr>
		<tr>
			<td align="center"><strong>Microfone</strong></td>
			<td align="center">Reservado para aplicação de interação por voz</td>
		</tr>
		<tr>
			<td align="center"><strong>Buzzer</strong></td>
			<td align="center">Buzzer para alerta sonoro</td>
		</tr>
		<tr>
			<td align="center"><strong>Bateria</strong></td>
			<td align="center">2000mAh</td>
		</tr>
		<tr>
			<td align="center"><strong>Entrada de energia</strong></td>
			<td align="center">USB-C 5V/1A</td>
		</tr>
		<tr>
			<td align="center"><strong>Temperatura de operação</strong></td>
			<td align="center">0-40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>Dimensões</strong></td>
			<td align="center">176mm x 120mm x 53mm (com suporte) / 17mm (sem suporte)</td>
		</tr>
	</table>
</div>

## Visão geral do hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/207.png" style={{width:1000, height:'auto'}}/></div><br />

O hardware do reTerminal E1002 inclui:

1. **Display ePaper colorido completo de 7,3 polegadas**: Tela colorida com resolução de 800×480
2. **Botões**: Localizados na parte superior do dispositivo para uso manual da tela
3. **Microfone**
4. **Slot para cartão MicroSD**: Para armazenamento expansível
5. **Interruptor de energia**: Localizado na parte traseira para ligar/desligar o dispositivo
6. **LED de status**: Indicador de usuário (verde)
7. **LED de energia**: Indicador de carregamento (vermelho)
8. **Porta USB-C**: Para carregamento e atualização de firmware
9. **Porta de expansão**: Conector de expansão de 8 pinos fornecendo conexões VDD, GND, UART, I2C e GPIO
10. **Inserções para montagem do suporte**: Porcas embutidas (furos para parafusos) na parte inferior traseira do dispositivo para fixar o suporte impresso em 3D

## Primeiros passos

### Preparação

**Passo 1.** Desembale o seu reTerminal E1002 e verifique se todos os componentes estão incluídos:

- Dispositivo reTerminal E1002
- Cabo USB-C
- Guia de início rápido
- Chave de fenda longa
- Parafusos
- Suporte de apoio impresso em 3D

**Passo 2.** (Opcional) Instale o suporte impresso em 3D para posicionar o dispositivo na vertical:

Localize o suporte impresso em 3D incluído na embalagem. Posicione o suporte na área de montagem designada na parte inferior traseira do reTerminal E1002, onde estão localizadas as porcas embutidas. Use uma chave de fenda longa para fixar o suporte ao dispositivo apertando os parafusos nas porcas embutidas na parte traseira do reTerminal E1002. Depois de bem fixado, coloque o reTerminal E1002 sobre uma superfície plana, onde o suporte o manterá em posição vertical.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/139.jpg" style={{width:600, height:'auto'}}/></div>

:::note
O suporte oferece um ângulo de visualização fixo e não pode ser ajustado. Essa posição fixa foi projetada para oferecer visibilidade ideal na maioria dos cenários de uso.
:::

**Passo 3.** (Opcional) Insira um cartão microSD se você planeja usar o dispositivo como porta-retratos digital ou se precisar de armazenamento adicional.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

:::note
O display ePaper da linha reTerminal E Series suporta apenas cartões MicroSD de até 32GB no formato Fat32.  
O cartão SD de 32GB vem formatado como exFAT por padrão. Após formatá-lo para FAT32, ele pode ser montado com sucesso e usado para armazenar imagens.
:::

**Passo 4.** (Opcional) Instale drivers USB, se necessário:

Dependendo do seu sistema operacional, talvez seja necessário instalar drivers USB para garantir a comunicação adequada com o seu reTerminal E1002:

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

### Ligar o dispositivo

**Passo 1.** Ligue o dispositivo deslizando o interruptor de energia para a posição **ON**. O interruptor de energia está localizado na parte traseira da unidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/135.gif" style={{width:700, height:'auto'}}/></div>


**Passo 2.** Na primeira inicialização, o dispositivo exibirá informações do produto e instruções de configuração de rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/17.png" style={{width:600, height:'auto'}}/></div><br />


**Passo 3.** O LED verde de usuário acenderá por aproximadamente 30 segundos, indicando que o dispositivo está ligado e inicializando. Após 30 segundos sem operação do dispositivo, para garantir a energia, o dispositivo entrará automaticamente no modo de suspensão e o LED será desligado automaticamente.

:::tip
Portanto, precisamos concluir as próximas etapas de configuração da rede durante esse período. Quando o dispositivo entra em suspensão, você não conseguirá encontrar o hotspot do dispositivo. Se isso acontecer, você pode acordar o dispositivo clicando uma vez no botão verde de Wake do dispositivo.
:::

### Configuração de rede

<Tabs>
<TabItem value="Network Setup via PC" label="Configuração de rede via PC" default>

**Passo 1.** Conecte-se ao ponto de acesso Wi-Fi do dispositivo a partir do seu smartphone ou computador. O nome do AP aparecerá na tela (nenhuma senha é necessária). As credenciais da rede são `reTerminal E1002-{MAC Adress}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Passo 2.** Depois de conectado, seu telefone deve redirecionar automaticamente para a página de configuração Wi-Fi. Caso isso não aconteça, abra um navegador e acesse `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Passo 3.** Selecione a sua rede Wi‑Fi local e insira a senha, depois clique em "Connect".

:::note
O display ePaper da reTerminal E Series suporta apenas redes Wi‑Fi de 2,4 GHz, não 5 GHz ou outras bandas.
:::

**Passo 4.** Após a conexão bem-sucedida, o dispositivo emitirá um bipe de confirmação e exibirá uma tela com o código de pareamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/2.png" style={{width:600, height:'auto'}}/></div>

### Conectando à plataforma SenseCraft

**Passo 1.** Acesse o [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) no seu navegador e crie uma conta ou faça login.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**Passo 2.** Na barra lateral esquerda, clique em **Device** para entrar na página de dispositivos e, em seguida, clique no botão **+ New Device** no canto superior esquerdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/200.png" style={{width:600, height:'auto'}}/></div>

**Passo 3.** Dê um nome ao seu dispositivo, insira o código de pareamento exibido na tela do dispositivo e clique em **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Passo 4.** Depois de pareado, o dispositivo exibirá uma mensagem solicitando que você crie seu primeiro dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/18.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup via SenseCraft APP" label="Configuração de rede via SenseCraft APP">

Este método usa o aplicativo móvel SenseCraft para configurar a rede do dispositivo e adicioná‑lo à sua conta SenseCraft via Bluetooth.

Primeiro, baixe o SenseCraft App. Você pode encontrá‑lo pesquisando por "SenseCraft" na Google Play Store ou na Apple App Store. Como alternativa, você pode baixá‑lo a partir deste site.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**Passo 1.** Abra o SenseCraft App, faça login na sua conta e vá até a aba **User**. Toque em **Device Bluetooth Configuration** para iniciar o processo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 2.** Na tela "Please select the device type", escolha o modelo do seu reTerminal (por exemplo, **reTerminal E1001** ou **reTerminal E1002**).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 3.** Siga as instruções na tela para colocar o dispositivo em modo de broadcast Bluetooth. Normalmente isso é feito pressionando simultaneamente os botões de página **Up** e **Down**. Certifique‑se de que o Bluetooth do seu telefone esteja ativado. Toque em **Scan** e o aplicativo irá detectar os dispositivos próximos. Selecione o seu dispositivo na lista para conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 4.** Depois de conectado via Bluetooth, o aplicativo solicitará que você configure a conexão Wi‑Fi. Selecione sua rede Wi‑Fi local de 2,4 GHz na lista suspensa, insira a senha e toque em **Next**.

:::note
O dispositivo só pode ser configurado por meio de uma rede Wi‑Fi de 2,4G.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 5.** O aplicativo enviará as credenciais de Wi‑Fi para o dispositivo e o adicionará à sua conta SenseCraft. Uma mensagem "Device added successfully" aparecerá ao concluir. Agora você pode tocar em **Start exploring!** para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 6.** Seu reTerminal agora aparecerá na sua lista de dispositivos na aba principal **Device** do aplicativo, conectado com sucesso à sua conta SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 7.** Você pode tocar no dispositivo na lista para ver a página de **Device Detail**. A partir daí, é possível gerenciar o dispositivo e enviar fotos. Para um design de dashboard e canvas mais complexo, será solicitado que você use a versão em navegador web do SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### Atualização de firmware

Depois que o dispositivo for adicionado com sucesso à sua conta SenseCraft, a plataforma verificará automaticamente a versão do firmware. Se houver um firmware mais recente disponível, você será solicitado a atualizar.

Você também pode verificar manualmente a versão do firmware a qualquer momento:

**Passo 1.** Na página **Device**, encontre o seu reTerminal E1002 para ver os detalhes e observe a **versão atual do firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**Passo 2.** Na barra lateral esquerda, clique em **Tools** e abra a aba **Firmware Flasher** para ver a **versão mais recente do firmware** disponível para este dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**Passo 3.** Se a versão atual for mais antiga que a mais recente, siga o fluxo de 3 etapas na página Firmware Flasher para atualizar:

1. **Select your device** — conecte o reTerminal E1002 ao computador por meio do cabo USB‑C, certifique‑se de que o interruptor de energia esteja **ON**, depois clique em **Select** e escolha o seu dispositivo na lista.

2. **Select firmware** — escolha o firmware mais recente nas opções do menu suspenso de versões.

3. **Flash** — clique em **Flash** e aguarde a conclusão da atualização. Ative **Full Flash** somente se quiser redefinir o dispositivo para o estado de fábrica (todos os dados, configurações e designs serão apagados).

:::note

1. Atualizar o firmware garante desempenho ideal e acesso aos recursos mais recentes.

2. Não é possível gravar o firmware corretamente quando o dispositivo está desligado ou em modo de suspensão. Se você selecionar a porta correta para o seu dispositivo, mas nunca vir o progresso de gravação do firmware, talvez seja necessário acordar o dispositivo pressionando o botão verde na parte superior da unidade e tentar novamente.

3. **Faça um Flash padrão** para manter sua configuração: Wi‑Fi, designs implantados e imagens são preservados. **Faça um Full Flash para começar do zero**: todos os dados, configurações e designs são apagados (estado de fábrica).

:::

## Exibir conteúdo no seu reTerminal E1002

Depois que o dispositivo estiver pareado, você poderá começar a usá‑lo para exibir o que quiser. Recomendamos o **SenseCraft HMI** — uma plataforma em nuvem sem código que permite projetar e implantar conteúdo no seu reTerminal E1002 em apenas alguns cliques.

O SenseCraft HMI possui um Wiki dedicado com tutoriais completos e documentação de recursos. Para guias detalhados (configuração de conta, gravação de firmware, uso avançado do editor, implantação etc.), consulte:

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

Como este artigo é um **Guia de Introdução** ao produto, não repetiremos o mesmo conteúdo aqui — a seguir mostramos apenas como exibir rapidamente algo no seu reTerminal E1002.

### Home — Comece a partir de um template da comunidade

A maneira mais rápida de colocar algo na tela é começar a partir de um template pronto. Na página **Home** do SenseCraft HMI, você encontrará uma coleção grande e em constante crescimento de templates contribuídos pela comunidade — dashboards, relógios, painéis de clima, paredes de citações, calendários, porta‑retratos e muito mais. Navegue pela galeria, escolha o design que preferir e faça o deploy para o seu reTerminal E1002 com um clique.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — Gerencie e crie seu próprio conteúdo

A página **Workspace** é onde você gerencia todas as páginas e conteúdos exibidos no dispositivo atualmente vinculado. A partir daqui você pode:

- Criar e organizar suas próprias páginas de design do zero
- Enviar imagens e organizá‑las em apresentações de slides
- Combinar texto, widgets, formas, dados, feeds RSS, conteúdo da web e muito mais em um único editor de arrastar e soltar
- Fazer o deploy do design final sem fio para o seu reTerminal E1002

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

Depois que o seu design for salvo, clique em **Deploy to Device**, selecione o seu reTerminal E1002 pareado e o conteúdo será transmitido sem fio para o dispositivo. O display ePaper será atualizado para mostrar o seu design, e você poderá usar os botões de navegação esquerda/direita no dispositivo para alternar entre várias páginas, se as tiver criado.

Para todo o restante — operações detalhadas do editor, dicas e notas de versão — consulte o [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/).

## Operando o dispositivo

### Botão de atualização

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

O botão de atualização na parte superior do dispositivo possui várias funções:

- **Pressionar uma vez**: Atualiza manualmente a tela e verifica se há novo conteúdo na plataforma SenseCraft. O buzzer emitirá um bipe para confirmar a ação. Este botão também é comumente usado para ativar o dispositivo. Você pode usar este botão para ativar um dispositivo quando ele entrou em modo de suspensão e um comando de atualização do dashboard geralmente não está imediatamente disponível para o dispositivo.

- **Pressionar e segurar** (funcionalidade futura): Ativará o modo de entrada por voz.

### Botões de Navegação

Os botões esquerdo e direito permitem navegar entre várias páginas se o seu dashboard contiver mais de uma página:

- **Botão Esquerdo**: Navega para a página anterior

- **Botão Direito**: Navega para a próxima página

### Redefinição de Rede

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

Se você precisar se conectar a uma rede Wi-Fi diferente:

**Passo 1.** Pressione e segure ambos os botões de navegação (esquerdo e direito) simultaneamente por 2 segundos.

**Passo 2.** O dispositivo entrará no modo de configuração de Wi-Fi e você poderá seguir novamente as etapas de [Configuração de Rede](#configuração-de-rede) para se conectar a uma nova rede.

### Indicadores LED

- **LED Vermelho**:
  - Desligado: Totalmente carregado ou não carregando
  - Sempre ligado: carregando

- **LED Verde**:
  - Ligado por 30 segundos na inicialização: O dispositivo está ligando

### Funcionamento com Bateria

Ao operar com energia da bateria:

- O dispositivo entrará automaticamente em modo de baixo consumo entre as atualizações

- A vida útil da bateria depende da frequência de atualização (normalmente 3 meses com carga completa usando as configurações padrão)

- O dispositivo exibirá um ícone de bateria fraca no canto superior direito quando o nível da bateria estiver abaixo de 20%

:::tip
Se você quiser escrever algum código por conta própria para ler a tensão da bateria, será mais preciso adicionar um atraso de 10ms antes da função analogRead().
:::

### Pinos de Expansão

O reTerminal E1002 possui um conector de expansão de 8 pinos (J2) que fornece opções de conectividade para adicionar sensores externos, módulos ou outros hardwares para estender a funcionalidade do seu dispositivo. Este conector de expansão expõe vários pinos GPIO e interfaces de comunicação do ESP32-S3, tornando-o um ponto de conexão versátil para seus projetos DIY.

#### Pinagem do Conector de Expansão

O conector de expansão de 8 pinos (J2) possui a seguinte pinagem:

<div class="table-center">
	<table align="center">
		<tr>
			<th>Pino (de cima para baixo)</th>
			<th>Rótulo</th>
			<th>Pino ESP32-S3</th>
			<th>Função</th>
			<th>Descrição</th>
		</tr>
		<tr>
			<td>1</td>
			<td>HEADER_3V3</td>
			<td>-</td>
			<td>Alimentação</td>
			<td>Fonte de alimentação de 3,3V para dispositivos externos</td>
		</tr>
		<tr>
			<td>2</td>
			<td>GND</td>
			<td>-</td>
			<td>Terra</td>
			<td>Referência de terra comum</td>
		</tr>
		<tr>
			<td>3</td>
			<td>ESP_IO46</td>
			<td>GPIO46</td>
			<td>GPIO/ADC</td>
			<td>GPIO de uso geral com capacidade de entrada analógica</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO2/ADC1_CH4</td>
			<td>GPIO2</td>
			<td>GPIO/ADC</td>
			<td>GPIO de uso geral com capacidade de entrada analógica (canal 4 do ADC1)</td>
		</tr>
		<tr>
			<td>5</td>
			<td>ESP_IO17/TX1</td>
			<td>GPIO17</td>
			<td>GPIO/UART TX</td>
			<td>GPIO ou sinal de transmissão (TX) UART</td>
		</tr>
		<tr>
			<td>6</td>
			<td>ESP_IO18/RX1</td>
			<td>GPIO18</td>
			<td>GPIO/UART RX</td>
			<td>GPIO ou sinal de recepção (RX) UART</td>
		</tr>
		<tr>
			<td>7</td>
			<td>ESP_IO20/I2C0_SCL</td>
			<td>GPIO20</td>
			<td>GPIO/I2C SCL</td>
			<td>GPIO ou sinal de clock I2C</td>
		</tr>
		<tr>
			<td>8</td>
			<td>ESP_IO19/I2C0_SDA</td>
			<td>GPIO19</td>
			<td>GPIO/I2C SDA</td>
			<td>GPIO ou sinal de dados I2C</td>
		</tr>
	</table>
</div>

## Solução de Problemas

### P1: O Dispositivo Não Liga

- Certifique-se de que o interruptor de energia esteja na posição ON
- Conecte o cabo USB-C para carregar o dispositivo
- Verifique se o LED vermelho está sempre ligado (indicando carregamento)
- Se estiver usando energia da bateria, certifique-se de que a bateria esteja devidamente conectada e carregada

### P2: Não Consigo Conectar ao Wi-Fi

- Verifique se você está inserindo a senha correta do Wi-Fi
- Certifique-se de que sua rede Wi-Fi esteja operacional
- Verifique se o seu roteador Wi-Fi suporta redes de 2,4GHz (5GHz não é suportado)
- Tente posicionar o dispositivo mais próximo do seu roteador Wi-Fi

### P3: Tela Não Atualiza

- Pressione o botão de atualização para acionar uma atualização manualmente
- Verifique se o dispositivo está conectado ao Wi-Fi (sem ícone de desconexão no canto)
- Verifique sua conta SenseCraft para garantir que o dashboard esteja devidamente implantado
- Se o problema persistir, tente reiniciar o dispositivo
- Se o dispositivo ainda não responder após a reinicialização, regrave o firmware correspondente na plataforma SenseCraft HMI e verifique se o dispositivo consegue atualizar normalmente

### P4: Conexão de Rede Perdida

- O dispositivo tentará automaticamente reconectar-se a redes conhecidas
- Quando reconectado, o ícone de desconexão do Wi-Fi desaparecerá
- Se não conseguir reconectar, siga o procedimento de Redefinição de Rede acima

### P5: Não Consigo Encontrar a Porta Serial (COM) no macOS

Se o seu Mac não reconhecer o reTerminal via USB, siga este guia compacto para instalar o driver CH340/CH340K:

**Passo 1. Baixar e Instalar o Driver**
Baixe o driver na [página oficial da WCH](https://www.wch-ic.com/downloads/CH34XSER_MAC_ZIP.html) e execute `CH34xVCPDriver.pkg`. 
:::tip
Se o macOS bloquear a instalação, vá para **System Settings → Privacy & Security**, role para encontrar o software WCH bloqueado e clique em **Allow**.
:::
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/02_installer_welcome.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/03_install_success.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**Passo 2. Ativar a Extensão do Driver (Crítico)**
Abra o app **CH34xVCPDriver** a partir do Launchpad, clique em **Install**, depois vá para **System Settings → General → Login Items & Extensions → Driver Extensions**. Ative **CH34xVCPDriver Extensions** para **ON** (azul).
<div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle1.jpg" style={{ width: '48%', height: 'auto' }} />
  <img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/04_driver_extension_toggle2.jpg" style={{ width: '48%', height: 'auto' }} />
</div>

**Passo 3. Conectar e Verificar**
Certifique-se de que o **interruptor de energia do dispositivo esteja em ON** e use um **cabo USB-C de dados** (não apenas de carregamento). Abra o Terminal e execute:
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

Se você vir o caminho do dispositivo na saída, o driver está instalado corretamente e o seu reTerminal está pronto para uso!

### P6: Dispositivo Não Carrega

Se você perceber que o dispositivo não está carregando, tente substituir o cabeçote de carregamento por um adaptador de energia de marca não Apple.

## Recursos

- [Esquemático do reTerminal E1002 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/202004321_reTerminal_E1002_V1_2_SCH_251120.pdf)
- [Datasheet do ESP32-S3](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/esp32-s3_datasheet.pdf)
- [Documentação da Plataforma SenseCraft HMI](https://wiki.seeedstudio.com/pt-br/sensecraft_hmi_overview)
- [Arquivo STP do modelo 3D geral do exterior](https://files.seeedstudio.com/wiki/reterminal_e10xx/res/reTerminal_E1001_E1002_3D.stp)
<!-- - [GitHub Repository](/pt-br/getting_started_with_reterminal_e1002) -->

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
