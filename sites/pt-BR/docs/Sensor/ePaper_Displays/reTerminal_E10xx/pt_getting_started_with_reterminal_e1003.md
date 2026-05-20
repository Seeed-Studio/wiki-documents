---
description: O reTerminal E1003 é um display ePaper monocromático open-source de 10,3 polegadas com suporte a toque, 16 níveis de escala de cinza e alta resolução de 1404×1872 pixels, com suporte a interação por toque no firmware HMI v1.1.2.
title: Introdução ao reTerminal E1003
image: https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/1.webp
slug: /getting_started_with_reterminal_e1003
sidebar_position: 4
sku: 100090602
last_update:
  date: 05/09/2026
  author: dimo
createdAt: '2026-03-18'
updatedAt: '2026-05-09'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_e1003/
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

O reTerminal E1003 é um display ePaper monocromático open-source de 10,3 polegadas com suporte a toque, apresentando 16 níveis de escala de cinza e alta resolução de 1404×1872 pixels, com até 6 meses de duração de bateria (com base em uma atualização por dia). Alimentado por ESP32-S3, ele oferece suporte nativo à nossa plataforma de UI sem código [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) para criação de dashboards sem esforço. Seja para visualização e controle de dashboards de casa inteligente, painéis de informação em escritórios ou projetos educacionais, este dispositivo pronto para uso com suporte a toque oferece visuais impressionantes e personalização flexível para atender a todas as suas necessidades.

:::tip
A interação por toque para o reTerminal E1003 é suportada a partir do firmware [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) v1.1.2. A versão mais recente atualmente é a v1.1.4.3 — recomendamos atualizá-la para obter a melhor experiência.
O suporte de biblioteca relacionado a toque está planejado para um futuro lançamento open-source, proporcionando maior flexibilidade para personalizar os painéis. Mais atualizações serão compartilhadas em breve.

O suporte do ESPHome para o reTerminal E1003 está em desenvolvimento e estará disponível em uma versão futura.
:::

### Recursos

- Atualização completa em 3 segundos para dashboards ePaper mais responsivos
- Crie interfaces interativas facilmente com [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) e suporte a toque
- Visuais nítidos com display ePaper de 16 níveis de escala de cinza e alta resolução
- Até 6 meses de duração de bateria (com base em uma atualização por dia)
- Personalização flexível de hardware e software


## Especificações

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
			<td align="center">Flash de 32 MB; suporta cartão microSD</td>
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
			<td align="center">Suporta cartões microSD de até 32 GB (FAT32)</td>
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
			<td align="center"><strong>Temperatura de operação</strong></td>
			<td align="center">0-40°C</td>
		</tr>
		<tr>
			<td align="center"><strong>Dimensões</strong></td>
			<td align="center">224mm x 187mm x 18,6mm</td>
		</tr>
	</table>
</div>


## Aplicações

- **Dashboards de automação residencial:** Exiba dados em tempo real da casa inteligente, como temperatura, umidade e qualidade do ar via Home Assistant.
- **Porta-retratos eletrônico monocromático de baixo consumo:** Com o [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) ou o app, você pode facilmente enviar uma série de fotos do seu álbum remotamente. Combinado com uma grande tela e-ink monocromática de alta resolução, ele oferece exibição de imagens com consumo ultrabaixo de energia, para que você não precise mais se preocupar com a duração da bateria.
- **Displays inteligentes para escritório:** Mostre disponibilidade de salas de reunião, agendas do escritório ou orientações de direção em displays ePaper de baixo consumo e sempre ligados.
- **Displays de varejo e informação pública:** Placas ePaper de baixo consumo para menus, horários ou indicadores de ocupação com longa duração de bateria.


## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/208.png" style={{width:1000, height:'auto'}}/></div>

1. **Botão de atualização de tela:** Localizado na parte superior do dispositivo para atualização manual da tela.
2. **Botões de página para cima e para baixo:** Localizados na parte superior do dispositivo para navegação entre páginas.
3. **Área da antena Wi-Fi:** Localizada na parte inferior do dispositivo para conectividade Wi-Fi.
4. **Slot para cartão MicroSD / TF:** Para expansão de armazenamento (FAT32, até 32GB).
5. **Interruptor de energia:** Para ligar ou desligar o dispositivo.
6. **LED de energia vermelho:** Indica o status de carregamento da bateria.
7. **LED de status verde:** Indica o status operacional ou de sistema atual.
8. **Porta USB-C de dados e carregamento:** Para carregar o dispositivo e transmissão de dados.
9. **Porta de expansão:** Conector de pinos fornecendo VDD, GND, I2C e GPIO para sensores, módulos ou periféricos externos.
10. **Orifícios roscados para montagem do suporte:** Orifícios roscados na parte traseira do dispositivo para fixar o suporte.
11. **Suporte de apoio impresso em 3D:** O acessório de suporte incluído para manter o dispositivo na posição vertical sobre uma superfície plana.
12. **Parafusos de montagem do suporte:** Parafusos usados para fixar o suporte ao dispositivo.

## Primeiros passos

O reTerminal E1003 vem pré-carregado com firmware que oferece suporte ao **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)**, uma plataforma sem código que permite projetar e implantar dashboards personalizados com facilidade.

### Preparação

**Passo 1.** Desembale o seu reTerminal E1003 e verifique se todos os componentes estão incluídos:

- Display ePaper reTerminal E1003
- Cabo USB Tipo-C
- Guia de início rápido
- Chave de fenda
- Parafusos
- Suporte de apoio impresso em 3D

**Passo 2.** (Opcional) Instale o suporte de apoio impresso em 3D para posicionar o dispositivo na vertical:

Localize o suporte de apoio impresso em 3D incluído na embalagem. Posicione o suporte na área de montagem designada na parte traseira do reTerminal E1003, onde estão localizadas as porcas embutidas. Use uma chave de fenda para fixar o suporte ao dispositivo apertando os parafusos nas porcas embutidas na parte traseira do reTerminal E1003. Depois de bem fixado, coloque o reTerminal E1003 sobre uma superfície plana, onde o suporte o manterá em posição vertical.

:::note
O suporte oferece um ângulo de visualização fixo e não pode ser ajustado. Esse posicionamento fixo foi projetado para oferecer visibilidade ideal na maioria dos cenários de uso.
:::

**Passo 3.** (Opcional) Insira um cartão microSD se você planeja usar o dispositivo como porta-retratos digital ou se precisar de armazenamento adicional.

:::note
O display ePaper reTerminal E Series suporta apenas cartões MicroSD de até 32GB no formato FAT32.  
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

Se você estiver usando um Mac e ainda não tiver instalado manualmente o driver CH34X antes, siga as etapas abaixo para concluir a instalação:

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
Certifique-se de que o **interruptor de energia do dispositivo esteja ON** e use um **cabo USB-C de dados** (não apenas de carregamento). Abra o Terminal e execute:
```bash
ls /dev/tty.wch*
# Expected output: /dev/tty.wchusbserialxxx
```
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/Serial_Driver_Wiki/06_check%20installation.jpg" style={{width:500, height:'auto'}}/></div>

Se você vir o caminho do dispositivo na saída, o driver está instalado corretamente e seu reTerminal está pronto para uso!

</TabItem>

<TabItem value="Linux" label="Linux">

Ubuntu 22.04 e versões posteriores incluem os drivers necessários por padrão.
Para distribuições mais antigas, se o dispositivo não for reconhecido, talvez seja necessário carregar o driver manualmente.


</TabItem>
</Tabs>

### Ligar o dispositivo

**Passo 1.** Ligue o dispositivo deslizando a chave de energia para a posição **ON**. A chave de energia está localizada na parte de trás da unidade.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/235.gif" style={{width:700, height:'auto'}}/></div>

**Passo 2.** Na primeira inicialização, o dispositivo exibirá informações do produto e instruções de configuração de rede.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/229.png" style={{width:600, height:'auto'}}/></div><br />

**Passo 3.** O LED de status verde acende por aproximadamente 3 segundos e depois apaga, indicando que o dispositivo está ligado e inicializando. Se nenhuma ação for tomada em 30 segundos, o dispositivo entra automaticamente no modo de suspensão para economizar energia.

:::tip
Portanto, precisamos concluir as próximas etapas de configuração da rede durante esse período. Quando o dispositivo entra em suspensão, você não conseguirá encontrar o hotspot do dispositivo. Se isso acontecer, você pode acordar o dispositivo pressionando o botão **Refresh** na parte superior da unidade.
:::

### Configuração de Rede

<Tabs>
<TabItem value="Network Setup via PC" label="Network Setup via PC" default>

**Passo 1.** Conecte-se ao ponto de acesso Wi-Fi do dispositivo a partir do seu smartphone ou computador. O nome do AP aparecerá na tela (sem senha). As credenciais da rede são `reTerminal E1003-{MAC Address}`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/228.png" style={{width:400, height:'auto'}}/></div><br />

**Passo 2.** Depois de conectado, seu telefone deve redirecionar automaticamente para a página de configuração do Wi-Fi. Se isso não acontecer, você pode escanear o código QR exibido na tela do reTerminal E1003 com o seu telefone ou abrir manualmente um navegador e acessar `192.168.4.1`.

Se você inserir uma senha incorreta, basta digitá-la novamente e enviar de novo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/222.png" style={{width:700, height:'auto'}}/></div><br />

**Passo 3.** Selecione sua rede Wi-Fi local e insira a senha, depois clique em "Connect".

:::note
O reTerminal E Series ePaper Display suporta apenas redes Wi-Fi de 2,4 GHz, não 5 GHz ou outras bandas.
:::

**Passo 4.** Após a conexão bem-sucedida, o dispositivo emitirá um bipe de confirmação e exibirá uma tela com o código de pareamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/230.png" style={{width:600, height:'auto'}}/></div>

### Conectando à Plataforma SenseCraft

**Passo 1.** Acesse [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) no seu navegador e crie uma conta ou faça login.



**Passo 2.** Na barra lateral esquerda, clique em **Device** para entrar na página de Dispositivos e, em seguida, clique no botão **+ New Device** no canto superior esquerdo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/225.png" style={{width:600, height:'auto'}}/></div>

**Passo 3.** Dê um nome ao seu dispositivo, insira o código de pareamento exibido na tela do dispositivo e clique em **Create**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/8.png" style={{width:600, height:'auto'}}/></div>

**Passo 4.** Depois de pareado, o dispositivo exibirá uma mensagem solicitando que você crie seu primeiro dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/231.png" style={{width:600, height:'auto'}}/></div>

</TabItem>
<TabItem value="Network Setup via SenseCraft APP" label="Network Setup via SenseCraft APP">

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

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/225.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 3.** Siga as instruções na tela para colocar seu dispositivo no modo de broadcast Bluetooth. Certifique-se de que o Bluetooth do seu telefone esteja ativado. Toque em **Scan**, e o aplicativo irá descobrir dispositivos próximos. Selecione seu dispositivo na lista para conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/153.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 4.** Depois de conectado via Bluetooth, o aplicativo solicitará que você configure a conexão Wi-Fi. Selecione sua rede Wi-Fi local de 2,4 GHz na lista suspensa, insira a senha e toque em **Next**.

:::note
O dispositivo só pode ser configurado por meio de uma rede Wi-Fi de 2,4 GHz.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/154.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 5.** O aplicativo enviará as credenciais do Wi-Fi para o dispositivo e o adicionará à sua conta SenseCraft. Uma mensagem "Device added successfully" aparecerá ao final. Agora você pode tocar em **Start exploring!** para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/155.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 6.** Seu reTerminal agora aparecerá na sua lista de dispositivos na aba principal **Device** do aplicativo, conectado com sucesso à sua conta SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/156.png" style={{width:250, height:'auto'}}/></div><br />

**Passo 7.** Você pode tocar no dispositivo na lista para ver sua página de **Device Detail**. A partir daí, você pode gerenciar o dispositivo e enviar fotos. Para um design de dashboard e canvas mais complexo, será solicitado que você use a versão em navegador web do SenseCraft.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/157.png" style={{width:250, height:'auto'}}/></div><br />

</TabItem>
</Tabs>

### Atualização de Firmware

Depois que o dispositivo for adicionado com sucesso à sua conta SenseCraft, a plataforma verificará automaticamente a versão do firmware. Se houver um firmware mais recente disponível, você será solicitado a atualizar.

Você também pode verificar a versão do firmware manualmente a qualquer momento:

**Passo 1.** Na página **Device**, encontre seu reTerminal E1003 para ver seus detalhes e anote a **versão atual do firmware**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/227.png" style={{width:350, height:'auto'}}/></div>

**Passo 2.** Na barra lateral esquerda, clique em **Tools** e abra a aba **Firmware Flasher** para ver a **versão mais recente do firmware** disponível para este dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/202.png" style={{width:1000, height:'auto'}}/></div>

**Passo 3.** Se a versão atual for mais antiga que a mais recente, siga o fluxo de 3 etapas na página Firmware Flasher para atualizar:

1. **Selecione seu dispositivo** — conecte o reTerminal E1003 ao seu computador via cabo USB-C, certifique-se de que a chave de energia esteja **ON**, depois clique em **Select** e escolha seu dispositivo na lista.

2. **Selecione o firmware** — escolha o firmware mais recente no menu suspenso de opções de release.

3. **Flash** — clique em **Flash** e aguarde a conclusão da atualização. Ative **Full Flash** somente se quiser redefinir o dispositivo para o estado de fábrica (todos os dados, configurações e designs serão apagados).

:::note

1. Atualizar o firmware garante desempenho ideal e acesso aos recursos mais recentes. A interação por toque para o reTerminal E1003 requer firmware **v1.1.2 ou posterior**. A versão mais recente atualmente é v1.1.4.3 — recomendamos atualizar para ela para obter a melhor experiência.

2. Não é possível gravar o firmware corretamente quando o dispositivo está desligado ou em modo de suspensão. Se você selecionar a porta correta para o seu dispositivo, mas nunca vir o progresso de gravação do firmware, talvez seja necessário acordar o dispositivo pressionando o botão **Refresh** na parte superior da unidade e tentar novamente.

3. **Faça um Flash padrão** para manter sua configuração: Wi-Fi, designs implantados e imagens são preservados. **Faça um Full Flash para começar do zero**: todos os dados, configurações e designs são apagados (estado de fábrica).

:::

## Exibir Conteúdo no Seu reTerminal E1003

Depois que seu dispositivo estiver pareado, você poderá começar a usá-lo para exibir o que quiser. Recomendamos o **[SenseCraft HMI](https://sensecraft.seeed.cc/hmi)** — uma plataforma em nuvem sem código que permite projetar e implantar conteúdo no seu reTerminal E1003 em apenas alguns cliques.

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) tem seu próprio Wiki dedicado com tutoriais completos e documentação de recursos. Para guias detalhados (configuração de conta, gravação de firmware, uso avançado do editor, implantação etc.), consulte:

- **[SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/)**

Como este artigo é um **Guia de Introdução** do produto, não vamos repetir o mesmo conteúdo aqui — abaixo mostramos apenas como exibir rapidamente algo no seu reTerminal E1003.

### Início — Comece a partir de um modelo da comunidade

A maneira mais rápida de colocar algo na sua tela é começar a partir de um modelo pronto. Na página **Home** do [SenseCraft HMI](https://sensecraft.seeed.cc/hmi), você encontrará uma coleção grande e em constante crescimento de modelos contribuídos pela comunidade — dashboards, relógios, painéis de clima, paredes de citações, calendários, porta-retratos e muito mais. Navegue pela galeria, escolha o design que preferir e faça o deploy para o seu reTerminal E1003 com um clique.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/206.png" style={{width:1000, height:'auto'}}/></div>

### Workspace — Gerencie e crie seu próprio conteúdo

A página **Workspace** é onde você gerencia todas as páginas e conteúdos exibidos no dispositivo atualmente vinculado. A partir daqui você pode:

- Criar e organizar suas próprias páginas de design do zero
- Enviar imagens e organizá-las em apresentações de slides
- Combinar texto, widgets, formas, dados, feeds RSS, conteúdo da web e mais em um único editor de arrastar e soltar
- Fazer o deploy do design final sem fio para o seu reTerminal E1003

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/226.png" style={{width:1000, height:'auto'}}/></div>

Depois que o seu design for salvo, clique em **Deploy to Device**, selecione o seu reTerminal E1003 pareado e o conteúdo será transmitido sem fio para o dispositivo. O display ePaper será atualizado para mostrar o seu design. A interação por toque requer firmware **v1.1.2 ou posterior** — a versão mais recente atualmente é **v1.1.4.3**, e recomendamos atualizá-la para obter a melhor experiência.

Para todo o restante — operações detalhadas do editor, dicas e notas de versão — consulte o [SenseCraft HMI Wiki](https://sensecraft-hmi-docs.seeed.cc/en/).

## Controles manuais do dispositivo

### Botão de atualização

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/233.png" style={{width:700, height:'auto'}}/></div>

O botão de atualização na parte superior do dispositivo possui várias funções:

- **Pressionar uma vez**: Atualiza manualmente o display e verifica se há novo conteúdo na plataforma SenseCraft. O buzzer emitirá um bipe para confirmar a ação. Este botão também é comumente usado para despertar o dispositivo quando ele entrou em modo de suspensão e uma atualização do dashboard não está imediatamente disponível.

- **Pressão longa** (funcionalidade futura): Ativará o modo de entrada por voz.

### Botões de navegação

Os botões esquerdo e direito permitem navegar entre várias páginas se o seu dashboard contiver mais de uma página:

- **Botão esquerdo**: Navega para a página anterior

- **Botão direito**: Navega para a próxima página

### Redefinição de rede

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/234.png" style={{width:700, height:'auto'}}/></div>

Se você precisar se conectar a uma rede Wi-Fi diferente:

**Passo 1.** Pressione e segure ambos os botões de navegação (esquerdo e direito) simultaneamente por 2 segundos.

**Passo 2.** O dispositivo entrará no modo de configuração de Wi-Fi, e você poderá seguir novamente as etapas de [Network Setup](#Network-Setup) para se conectar a uma nova rede.

### Indicadores de LED

- **Todos os LEDs apagados:**
  - Nenhum cabo USB conectado

- **LED vermelho:**
  - Fica aceso continuamente quando o cabo USB está conectado e o carregamento está em andamento

- **LED verde:**
  - Acende por aproximadamente 3 segundos a cada energização e depois apaga
  - Fica aceso continuamente quando o cabo USB está conectado e a bateria está totalmente carregada


### Funcionamento com bateria

Ao operar com alimentação por bateria:

- O dispositivo entrará automaticamente em modo de baixo consumo entre as atualizações

- A vida útil da bateria depende da frequência de atualização (tipicamente 6 meses com carga completa e uma atualização por dia)

- O dispositivo exibirá um ícone de bateria fraca no canto superior direito quando o nível da bateria estiver abaixo de 20%

:::tip
If you want to write some code by yourself to read battery voltage, it will be more precise to add 10ms delay before analogRead() function.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/232.png" style={{width:300, height:'auto'}}/></div>


### Pinos de expansão

O reTerminal E1003 possui um conector de expansão de 6 pinos (J2) que fornece opções de conectividade para adicionar sensores externos, módulos ou outros hardwares para estender a funcionalidade do seu dispositivo. Este conector de expansão expõe vários pinos GPIO e interfaces de comunicação do ESP32-S3, tornando-o um ponto de conexão versátil para seus projetos DIY.

#### Pinagem do conector de expansão

O conector de expansão de 6 pinos (J2) possui a seguinte pinagem:

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
			<td>Fonte de alimentação de 3,3 V para dispositivos externos</td>
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
			<td>ESP_IO47</td>
			<td>GPIO47</td>
			<td>GPIO/ADC</td>
			<td>GPIO de uso geral com capacidade de entrada analógica</td>
		</tr>
		<tr>
			<td>4</td>
			<td>ESP_IO6/ADC1_CH</td>
			<td>GPIO6</td>
			<td>GPIO/ADC</td>
			<td>GPIO de uso geral com capacidade de entrada analógica</td>
		</tr>
		<tr>
			<td>5</td>
			<td>ESP_IO20/I2C0_SCL</td>
			<td>GPIO20</td>
			<td>GPIO/I2C SCL</td>
			<td>GPIO ou sinal de clock I2C</td>
		</tr>
		<tr>
			<td>6</td>
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
- Verifique se o LED vermelho permanece aceso (indicando carregamento)
- Se estiver usando alimentação por bateria, certifique-se de que a bateria esteja corretamente conectada e carregada

### P2: Não é possível conectar ao Wi-Fi

- Verifique se você está digitando a senha correta do Wi-Fi
- Certifique-se de que sua rede Wi-Fi esteja operacional
- Verifique se o seu roteador Wi-Fi oferece suporte a redes de 2,4 GHz (5 GHz não é suportado)
- Tente posicionar o dispositivo mais próximo do seu roteador Wi-Fi

### P3: Display não está atualizando

- Pressione o botão de atualização para acionar uma atualização manualmente
- Verifique se o dispositivo está conectado ao Wi-Fi (sem ícone de desconexão no canto)
- Verifique na sua conta SenseCraft se o dashboard foi implantado corretamente
- Se o problema persistir, tente reiniciar o dispositivo
- Se o dispositivo ainda não responder após a reinicialização, regrave o firmware correspondente na plataforma [SenseCraft HMI](https://sensecraft.seeed.cc/hmi) e verifique se a atualização normal foi restaurada

### P4: Conexão de rede perdida

- O dispositivo tentará automaticamente reconectar-se às redes conhecidas
- Quando reconectado, o ícone de desconexão do Wi-Fi desaparecerá
- Se não conseguir reconectar, siga o procedimento de Redefinição de rede acima

## Recursos

- [Esquemático do reTerminal E1003 (PDF)](https://files.seeedstudio.com/wiki/reterminal_e10xx/img/e1003/202004522_reTerminal_E1003_V1.0_SCH_251231.pdf)

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
