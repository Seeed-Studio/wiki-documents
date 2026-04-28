---
description: O reTerminal E1003 é um display ePaper monocromático open-source de 10,3 polegadas com suporte a toque, 16 níveis de escala de cinza e alta resolução de 1404×1872 pixels, com suporte a interação por toque no firmware HMI v1.1.2.
sku: 100090602
title: Introdução ao reTerminal E1003
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
sidebar_position: 4
last_update:
  date: 4/23/2026
  author: Citric
createdAt: '2026-03-18'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1003/
updatedAt: '2026-04-21'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introdução ao reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=e1003" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Introdução

O reTerminal E1003 é um display ePaper monocromático open-source de 10,3 polegadas com suporte a toque, 16 níveis de escala de cinza e alta resolução de 1404×1872 pixels, com até 6 meses de duração de bateria. Alimentado por ESP32-S3, ele oferece suporte nativo à nossa plataforma de interface sem código SenseCraft HMI para criação fácil de dashboards. Seja para visualização e controle de dashboards de casa inteligente, painéis de informação em escritórios ou projetos educacionais, este dispositivo pronto para uso com suporte a toque oferece visuais impressionantes e personalização flexível para atender a todas as suas necessidades.

:::tip
A interação por toque para o reTerminal E1003 é suportada a partir do firmware SenseCraft HMI v1.1.2.
O suporte de biblioteca relacionado a toque está planejado para um futuro lançamento open-source, proporcionando maior flexibilidade para personalizar os painéis. Mais atualizações serão compartilhadas em breve.


O suporte do ESPHome para o reTerminal E1003 está em desenvolvimento e estará disponível em uma versão futura.
:::

### Recursos

- Atualização completa em 3 segundos para dashboards ePaper mais responsivos
- Crie interfaces interativas facilmente com SenseCraft HMI e suporte a toque
- Visuais nítidos com display ePaper de 16 níveis de escala de cinza e alta resolução
- Bateria com duração de 6 meses para uma instalação realmente sem cabos
- Personalização flexível de hardware e software


### Especificações

<div class="table-center">
	<table align="center">
		<tr>
			<th align="center">Item</th>
			<th align="center">Descrição</th>
		</tr>
		<tr>
			<td align="center"><strong>Nome do produto</strong></td>
			<td align="center">reTerminal E1003</td>
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
			<td align="center">10,3" Monocromático / 16 níveis de escala de cinza</td>
		</tr>
		<tr>
			<td align="center"><strong>Resolução</strong></td>
			<td align="center">1404 x 1872 pixels</td>
		</tr>
		<tr>
			<td align="center"><strong>Cartão Micro SD</strong></td>
			<td align="center">Suporta no máximo cartão SD de 32GB, formato FAT32</td>
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
			<td align="center">Reservado para aplicações de interação por voz</td>
		</tr>
		<tr>
			<td align="center"><strong>Áudio</strong></td>
			<td align="center">Buzzer para alerta sonoro</td>
		</tr>
		<tr>
			<td align="center"><strong>Bateria</strong></td>
			<td align="center">3000mAh</td>
		</tr>
		<tr>
			<td align="center"><strong>Entrada de energia</strong></td>
			<td align="center">USB-C 5V/1A</td>
		</tr>
		<tr>
			<td align="center"><strong>Temperatura de trabalho</strong></td>
			<td align="center">0-40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>Dimensões</strong></td>
			<td align="center">224mm x 187mm x 18,6mm</td>
		</tr>
	</table>
</div>

### Visão geral do hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/208.png" style={{width:1000, height:'auto'}}/></div>

1. **Display ePaper:** Display ePaper de 10,3" com 16 níveis de escala de cinza e suporte a toque capacitivo.
2. **Botões**: Localizados na parte superior do dispositivo para uso manual da tela
3. **Microfone:** Reservado para aplicações de interação por voz.
4. **Slot para cartão MicroSD / TF:** Para armazenamento expansível (FAT32, até 32GB).
5. **Interruptor de energia:** Para ligar ou desligar o dispositivo.
6. **LED vermelho de carregamento:** Indica o status de carregamento da bateria.
7. **LED verde de status:** Indica o status operacional ou de sistema atual.
8. **Porta USB-C de dados e carregamento:** Para carregar o dispositivo e transmissão de dados.
9. **Porta de expansão:** Conector de pinos fornecendo VDD, GND, UART, I2C e GPIO para sensores, módulos ou periféricos externos.
10. **Buzzer:** Aberturas de saída de áudio para alertas sonoros.
11. **Inserções para montagem do suporte:** Porcas embutidas (furos para parafuso) na parte traseira do dispositivo para fixar o suporte impresso em 3D.

### Aplicações

- Atualização completa em 3 segundos para dashboards ePaper mais responsivos
- Crie interfaces interativas facilmente com SenseCraft HMI e suporte a toque
- Visuais nítidos com display ePaper de 16 níveis de escala de cinza e alta resolução
- Bateria com duração de 6 meses para uma instalação realmente sem cabos
- Personalização flexível de hardware e software

## Primeiros passos

O reTerminal E1003 vem pré-carregado com firmware que suporta o **SenseCraft HMI**, uma plataforma sem código que permite projetar e implantar dashboards personalizados com facilidade.

### Preparação

**Passo 1.** Desembale o seu reTerminal E1003 e certifique-se de que todos os componentes estão incluídos:

- Dispositivo reTerminal E1003
- Cabo USB-C
- Guia de início rápido
- Chave de fenda longa
- Parafusos
- Suporte impresso em 3D

**Passo 2.** (Opcional) Instale o suporte impresso em 3D para posicionar o dispositivo na vertical:

Localize o suporte impresso em 3D incluído na embalagem. Posicione o suporte na área de montagem designada na parte traseira do reTerminal E1003, onde as porcas embutidas estão localizadas. Use uma chave de fenda longa para fixar o suporte ao dispositivo apertando os parafusos nas porcas embutidas na parte traseira do reTerminal E1003. Depois de fixado com segurança, coloque o reTerminal E1003 em uma superfície plana, onde o suporte o manterá em posição vertical.

:::note
O suporte oferece um ângulo de visualização fixo e não pode ser ajustado. Essa posição fixa foi projetada para oferecer visibilidade ideal na maioria dos cenários de uso.
:::

**Passo 3.** (Opcional) Insira um cartão microSD se você planeja usar o dispositivo como porta-retratos digital ou se precisar de armazenamento adicional.

:::note
O display ePaper reTerminal E Series suporta apenas cartões MicroSD de até 32GB no formato Fat32.  
O cartão SD de 32GB vem formatado como exFAT por padrão. Após formatá-lo para FAT32, ele pode ser montado com sucesso e usado para armazenar imagens.
:::

**Passo 4.** (Opcional) Instale drivers USB, se necessário:

Dependendo do seu sistema operacional, talvez seja necessário instalar drivers USB para garantir a comunicação adequada com o seu reTerminal E1003:

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/210.png" style={{width:600, height:'auto'}}/></div><br />

**Passo 3.** O LED verde do usuário acenderá por aproximadamente 30 segundos, indicando que o dispositivo está ligado e inicializando. Após 30 segundos sem operação do dispositivo, para garantir a energia, o dispositivo entrará automaticamente no modo de suspensão e o LED será desligado automaticamente.

:::tip
Portanto, precisamos concluir as próximas etapas de configuração da rede durante esse período. Quando o dispositivo entra em suspensão, você não conseguirá encontrar o hotspot do dispositivo. Se isso acontecer, você pode acordar o dispositivo pressionando o botão **Refresh** na parte superior da unidade.
:::

### Configuração de rede

<Tabs>
<TabItem value="Network Setup vis PC" label="Network Setup vis PC" default>

**Passo 1.** Conecte-se ao ponto de acesso Wi-Fi do dispositivo a partir do seu smartphone ou computador. O nome do AP aparecerá na tela (sem senha). As credenciais da rede são `reTerminal E1003-{MAC Address}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/5.png" style={{width:400, height:'auto'}}/></div><br />

**Passo 2.** Depois de conectado, seu telefone deve redirecionar automaticamente para a página de configuração do Wi-Fi. Caso isso não aconteça, abra um navegador e acesse `192.168.4.1`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/6.png" style={{width:700, height:'auto'}}/></div><br />

**Passo 3.** Selecione sua rede Wi-Fi local e insira a senha, depois clique em "Connect".

:::note
O display ePaper reTerminal E Series suporta apenas redes WiFi de 2,4GHz, não 5GHz ou outras bandas.
:::

**Passo 4.** Após a conexão bem-sucedida, o dispositivo emitirá um bipe de confirmação e exibirá uma tela com o código de pareamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/136.png" style={{width:600, height:'auto'}}/></div>

### Conectando à plataforma SenseCraft

**Passo 1.** Acesse o [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) no seu navegador e crie uma conta ou faça login.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />


**Passo 2.** Na barra lateral esquerda, clique em **Device** para entrar na página do dispositivo e, em seguida, clique no botão **+ New Device** no canto superior esquerdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/200.png" style={{width:600, height:'auto'}}/></div>

**Passo 3.** Dê um nome ao seu dispositivo, insira o código de pareamento exibido na tela do dispositivo e clique em **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Passo 4.** Depois de pareado, o dispositivo exibirá uma mensagem solicitando que você crie seu primeiro dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/211.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup vis SenseCraft APP" label="Configuração de rede via SenseCraft APP">

Este método usa o aplicativo móvel SenseCraft para configurar a rede do dispositivo e adicioná-lo à sua conta SenseCraft via Bluetooth.

Primeiro, baixe o SenseCraft App. Você pode encontrá-lo pesquisando por "SenseCraft" na Google Play Store ou Apple App Store. Como alternativa, você pode baixá-lo neste site.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div><br />

**Passo 1.** Abra o SenseCraft App, faça login na sua conta e vá até a aba **User**. Toque em **Device Bluetooth Configuration** para iniciar o processo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/151.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 2.** Na tela "Please select the device type", escolha **reTerminal E1003**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/152.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 3.** Siga as instruções na tela para colocar o dispositivo em modo de transmissão Bluetooth. Certifique-se de que o Bluetooth do seu telefone esteja ativado. Toque em **Scan** e o aplicativo irá detectar os dispositivos próximos. Selecione o seu dispositivo na lista para conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 4.** Depois de conectado via Bluetooth, o aplicativo solicitará que você configure a conexão Wi-Fi. Selecione sua rede Wi-Fi local de 2,4 GHz na lista suspensa, insira a senha e toque em **Next**.

:::note
O dispositivo só pode ser configurado por meio de uma rede Wi-Fi de 2,4G.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 5.** O aplicativo enviará as credenciais de Wi-Fi para o dispositivo e o adicionará à sua conta SenseCraft. Uma mensagem "Device added successfully" aparecerá ao concluir. Agora você pode tocar em **Start exploring!** para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 6.** Seu reTerminal agora aparecerá na sua lista de dispositivos na aba principal **Device** do aplicativo, conectado com sucesso à sua conta SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 7.** Você pode tocar no dispositivo na lista para ver sua página de **Device Detail**. A partir daí, você pode gerenciar o dispositivo e enviar fotos. Para um design de dashboard e canvas mais complexo, será solicitado que você use a versão em navegador web do SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### Atualização de firmware

Depois que o dispositivo for adicionado com sucesso à sua conta SenseCraft, a plataforma verificará automaticamente a versão do firmware. Se houver um firmware mais recente disponível, você será solicitado a atualizar.

Você também pode verificar a versão do firmware manualmente a qualquer momento:

**Passo 1.** Na página **Device**, encontre seu reTerminal E1003 para ver seus detalhes e observe a **versão atual do firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/201.png" style={{width:350, height:'auto'}}/></div>

**Passo 2.** Na barra lateral esquerda, clique em **Tools** e abra a aba **Firmware Flasher** para ver a **versão mais recente do firmware** disponível para este dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**Passo 3.** Se a versão atual for mais antiga que a mais recente, siga o fluxo de 3 etapas na página Firmware Flasher para atualizar:

1. **Select your device** — conecte o reTerminal E1003 ao seu computador via cabo USB-C, certifique-se de que o interruptor de energia esteja **ON**, depois clique em **Select** e escolha seu dispositivo na lista.

2. **Select firmware** — escolha o firmware mais recente nas opções do menu suspenso de versões.

3. **Flash** — clique em **Flash** e aguarde a conclusão da atualização. Ative **Full Flash** somente se quiser redefinir o dispositivo para o estado de fábrica (todos os dados, configurações e designs serão apagados).

:::note

1. Atualizar o firmware garante desempenho ideal e acesso aos recursos mais recentes. A interação por toque para o reTerminal E1003 requer firmware **v1.1.2 ou posterior**.

2. Não é possível gravar o firmware corretamente quando o dispositivo está desligado ou em modo de suspensão. Se você selecionar a porta correta para o seu dispositivo, mas nunca vir o progresso de gravação do firmware, talvez seja necessário acordar o dispositivo pressionando o botão **Refresh** na parte superior da unidade e tentar novamente.

3. **Faça um Flash padrão** para manter sua configuração: Wi-Fi, designs implantados e imagens são preservados. **Faça um Full Flash para começar do zero**: todos os dados, configurações e designs são apagados (estado de fábrica).

:::

## Exibir conteúdo no seu reTerminal E1003

Depois que o dispositivo estiver pareado, você poderá começar a usá-lo para exibir o que quiser. Recomendamos o **SenseCraft HMI** — uma plataforma em nuvem sem código que permite projetar e implantar conteúdo no seu reTerminal E1003 em apenas alguns cliques.

SenseCraft HMI tem seu próprio Wiki dedicado com tutoriais completos e documentação de recursos. Para guias detalhados (configuração de conta, gravação de firmware, uso avançado do editor, implantação etc.), consulte:

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

Como este artigo é um **Getting Started** do produto, não repetiremos o mesmo conteúdo aqui — a seguir mostramos apenas como exibir rapidamente algo no seu reTerminal E1003.

### Home — Comece a partir de um template da comunidade

A maneira mais rápida de colocar algo na sua tela é começar a partir de um template pronto. Na página **Home** do SenseCraft HMI, você encontrará uma coleção grande e em constante crescimento de templates contribuídos pela comunidade — dashboards, relógios, painéis de clima, paredes de citações, calendários, porta-retratos e muito mais. Navegue pela galeria, escolha o design que preferir e faça o deploy para o seu reTerminal E1003 com um clique.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — Gerencie e projete seu próprio conteúdo

A página **Workspace** é onde você gerencia todas as páginas e conteúdos exibidos no dispositivo atualmente vinculado. A partir daqui você pode:

- Criar e organizar suas próprias páginas de design do zero
- Enviar imagens e organizá-las em apresentações de slides
- Combinar texto, widgets, formas, dados, feeds RSS, conteúdo web e muito mais em um único editor de arrastar e soltar
- Fazer o deploy do design final sem fio para o seu reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/205.png" style={{width:1000, height:'auto'}}/></div>

Depois que seu design for salvo, clique em **Deploy to Device**, selecione seu reTerminal E1003 pareado e o conteúdo será transmitido sem fio para o dispositivo. O display de ePaper será atualizado para mostrar seu design. Com firmware **v1.1.2 ou posterior**, você também pode tocar diretamente na tela de ePaper para interagir com páginas habilitadas para toque.

Para todo o restante — operações detalhadas do editor, dicas e notas de versão — consulte o [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/).

## Operando o dispositivo

### Botão de Refresh

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/137.jpg" style={{width:700, height:'auto'}}/></div>

O botão de refresh na parte superior do dispositivo possui várias funções:

- **Pressão única**: Atualiza manualmente o display e verifica se há novo conteúdo na plataforma SenseCraft. O buzzer emitirá um bipe para confirmar a ação. Este botão também é comumente usado para acordar o dispositivo. Você pode usar este botão para acordar um dispositivo quando ele entrou em modo de suspensão e um comando de atualização do dashboard geralmente não está imediatamente disponível para o dispositivo.

- **Pressão longa** (funcionalidade futura): Ativará o modo de entrada por voz.

### Botões de navegação

Os botões esquerdo e direito permitem navegar entre várias páginas se o seu dashboard contiver mais de uma página:

- **Botão esquerdo**: Navega para a página anterior

- **Botão direito**: Navega para a próxima página

### Redefinição de rede

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/138.jpg" style={{width:700, height:'auto'}}/></div>

Se você precisar se conectar a uma rede Wi-Fi diferente:

**Passo 1.** Pressione e segure ambos os botões de navegação (esquerdo e direito) simultaneamente por 2 segundos.

**Passo 2.** O dispositivo entrará no modo de configuração de Wi-Fi, e você poderá seguir novamente as etapas de [Network Setup](#network-setup) para se conectar a uma nova rede.

### Indicadores LED

- **LED vermelho**:
  - Desligado: totalmente carregado ou não carregando
  - Sempre ligado: carregando

- **LED verde**:
  - Ligado por 30 segundos na inicialização: o dispositivo está ligando

### Funcionamento com bateria

Ao operar com alimentação por bateria:

- O dispositivo entrará automaticamente em modo de baixo consumo entre as atualizações

- A vida útil da bateria depende da frequência de atualização (normalmente 3 meses com carga completa usando as configurações padrão)

- O dispositivo exibirá um ícone de bateria fraca no canto superior direito quando o nível da bateria estiver abaixo de 20%

:::tip
Se você quiser escrever algum código por conta própria para ler a tensão da bateria, será mais preciso adicionar um atraso de 10ms antes da função analogRead().
:::

### Pinos de expansão

O reTerminal E1003 possui um conector de expansão de 8 pinos (J2) que fornece opções de conectividade para adicionar sensores externos, módulos ou outros hardwares para estender a funcionalidade do seu dispositivo. Este conector de expansão expõe vários pinos GPIO e interfaces de comunicação do ESP32-S3, tornando-o um ponto de conexão versátil para seus projetos DIY.

#### Pinagem do conector de expansão

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

### P3: Tela não atualiza

- Pressione o botão de atualização para acionar uma atualização manualmente
- Verifique se o dispositivo está conectado ao Wi-Fi (sem ícone de desconexão no canto)
- Verifique sua conta SenseCraft para garantir que o dashboard esteja devidamente implantado
- Se o problema persistir, tente reiniciar o dispositivo
- Se o dispositivo ainda não responder após a reinicialização, regrave o firmware correspondente na plataforma SenseCraft HMI e verifique se o dispositivo consegue atualizar normalmente

### P4: Conexão de rede perdida

- O dispositivo tentará automaticamente se reconectar às redes conhecidas
- Quando reconectado, o ícone de desconexão do Wi-Fi desaparecerá
- Se não conseguir se reconectar, siga o procedimento de redefinição de rede acima

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

**Passo 2. Ativar a extensão do driver (crítico)**
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

- [Esquemático do reTerminal E1003 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

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
