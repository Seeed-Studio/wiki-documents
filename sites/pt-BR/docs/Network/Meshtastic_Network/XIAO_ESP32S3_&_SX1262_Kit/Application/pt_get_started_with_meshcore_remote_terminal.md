---
description: Guia para usar o MeshCore Remote Terminal para monitorar/visualizar/executar MQTT em um nó MeshCore.
title: Introdução ao MeshCore Remote Terminal
keywords:
  - MeshCore
  - ESP32 MeshCore
  - MeshCore mqtt
  - MeshCore Starter Kit
  - MeshCore network
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/first.png
slug: /get_started_with_meshcore_remote_terminal
sku: 102010611,113110064
sidebar_position: 4
last_update:
  date: 4/20/2026
  author: Michelle Huang
createdAt: '2026-04-20'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_meshcore_remote_terminal/
---
Este wiki apresentará o [Remote Terminal for MeshCore](https://github.com/jkingsman/Remote-Terminal-for-MeshCore) (RemoteTerm) para fornecer uma interface para dispositivos [MeshCore](https://meshcore.io/) transmitirem mensagens. Este tutorial fornece uma configuração básica para executar o RemoteTerm em um Raspberry Pi usando o [Seeed XIAO ESP32S3 & SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) como rádio auxiliar e o [Raspberry Pi Zero 2W](https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html) para uma solução MeshCore compacta e tudo‑em‑um para usuários avançados!

## Introdução ao RemoteTerm

O [RemoteTerm](https://github.com/jkingsman/Remote-Terminal-for-MeshCore) é um aplicativo de código aberto que é executado em um servidor com um dispositivo MeshCore conectado. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/first.png" style={{width:900, height:'auto'}}/></div>

Ele fornece uma interface para a rede MeshCore local, permitindo que qualquer dispositivo na mesma rede local (mesmo fora da rede elétrica) envie e receba mensagens via rádio. O RemoteTerm é extremamente amigável para dispositivos móveis. Ele habilita capacidades adicionais, como:

- Armazenar em cache todos os pacotes recebidos
- Executar múltiplos bots em Python
- Monitorar contatos e canais ilimitados 
- Acessar seu rádio remotamente pela sua rede ou VPN
- Encaminhar pacotes para MQTT, SQS, Apprise, etc.
- Visualizar o mapa de nós da malha

## Configuração

### Hardware

<table align="center">
<tbody><tr>
<th>Kit XIAO ESP32S3 & Wio-SX1262</th>
<th>Raspberry Pi Zero 2W</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:600, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/ZERO2W.jpg" style={{width:600, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

Além do hardware principal, aqui estão os acessórios necessários:

- Cartão MicroSD de 16 GB ou maior
- Cabo USB Micro para USB-C (para conectar o rádio)
- USB Micro para USB-A ou USB-C (para alimentar o Raspberry Pi)
-  Fonte de alimentação confiável para o Raspberry Pi (5V 2,5A recomendado)

### Configuração do rádio

- Combine a placa [XIAO ESP32S3 da Seeed](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) e o módulo SX1262 usando o conector B2B.
- Conecte a antena LoRa ao SX1262.
- Conecte ao seu computador e faça o flash com "Seeed Studio Xiao S3 WIO" (Serial Companion) via [web flasher](https://meshcore.io/flasher). 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/Firmware.png" style={{width:900, height:'auto'}}/></div>

:::tip
 Este tutorial orienta você a configurar um serial companion. Companions TCP e Bluetooth são suportados pelo RemoteTerm, mas são um pouco mais complicados de configurar. 
:::

### Configuração do Pi

- [Clique aqui](https://www.raspberrypi.com/software/) para baixar o Raspberry Pi Imager
- Abra o imager, selecione o modelo do seu Raspberry Pi e selecione "Raspberry Pi OS Lite (64 bit)"
- Configure o SSH com uma senha, ou chave se desejar, e configure a conexão Wi‑Fi
- Conecte o ESP32 MeshCore ao [Raspberry Pi](https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html) 

:::warning
garantindo que o nó Mesh ESP32 LoRa esteja conectado à porta `USB`, não à porta `POWER` 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/USB.png" style={{width:900, height:'auto'}}/></div>
:::

Uma instalação completa (com adaptador em ângulo reto) pode se parecer com isto:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/HardwareInstallation.png" style={{width:500, height:'auto'}}/></div>

- Conecte a alimentação à porta `POWER` do Pi
- Use a interface de administração do roteador da sua casa para determinar o endereço atribuído ao Raspberry Pi. Considere alocar uma reserva de DHCP para evitar mudanças de endereço IP.

### Configuração do Pi

- Abra uma sessão SSH para o Raspberry Pi
- Valide se o rádio aparece. `find /dev/serial/by-id -maxdepth 1 -type l -print | sort` deve mostrar uma listagem como `/dev/serial/by-id/usb-Espressif_USB_JTAG_serial_debug_unit_XX:XX:XX:XX:XX:XX-if00`
- Atualizar e fazer upgrade
    ```bash
    sudo apt update                        # update package repositories
    sudo apt upgrade -y                    # upgrade packages
    sudo apt-get install -y git            # install git
    curl -fsSL https://get.docker.com | sh # install docker
    ```
- Clonar e iniciar
    ```bash
    git clone https://github.com/jkingsman/Remote-Terminal-for-MeshCore.git
    cd Remote-Terminal-for-MeshCore/

    # configure the docker setup
    ./scripts/setup/install_docker.sh
    ```

#### Passo a passo das opções de configuração

O [README](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README.md) e o [blog](https://jacksbrain.com/2026/04/meshcore-management-remoteterm-seeed-xiao-esp32s2-sx1262/) fornecem instruções de configuração mais detalhadas

### Inicializando o servidor
#### Configuração

Depois de configurar seu dockerfile por meio do script de configuração, execute

```bash
sudo docker compose up -d
```

para iniciar o servidor. Os seguintes comandos também podem ser úteis:

```bash
sudo docker compose up -d    # start RemoteTerm in the background
sudo docker compose logs -f  # follow the container logs live
sudo docker compose down     # stop and remove the running container
sudo docker compose restart  # restart the container without changing the image
sudo docker compose pull && sudo docker compose up -d   # upgrade to the latest published image and restart
```

:::warning
O RemoteTerm faz o gerenciamento **completo** do rádio, o que significa que, uma vez que um rádio é conectado ao RemoteTerm, todos os contatos/canais serão importados e descarregados para o RemoteTerm, e os contatos realmente sincronizados com o dispositivo serão controlados pelo RemoteTerm. 
:::

:::note

**Configuração de hotspot (opcional)**

Isto é opcional e recomendado apenas para rádios que serão usados longe da sua casa. Esta configuração desconectará o rádio do Wi‑Fi da sua casa, mas o configurará para começar a transmitir seu próprio Wi‑Fi para que possa ser acessado sem conexão à internet.

- Configurar um hotspot

  ```bash
  sudo nmcli device wifi hotspot ssid <hotspot name> password <hotspot password> ifname wlan0
  ```

- Você provavelmente precisará se conectar à nova rede Wi‑Fi e fazer SSH no Pi novamente. A URL do seu Pi será o "gateway padrão" na configuração de Wi‑Fi da nova rede quando você se conectar a ela.

- Configurar o hotspot para transmitir na inicialização

  ```bash
  nmcli connection
  # grab the UUID of the Hotspot connection
  sudo nmcli connection modify <hotspot UUID> connection.autoconnect yes connection.autoconnect-priority 100
  ```
:::

## Introdução ao RemoteTerm

### Tela principal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/main_screen.png" style={{width:900, height:'auto'}}/></div>

A tela principal do RemoteTerm mostra uma lista de canais, repetidores e servidores de sala conhecidos, com um espaço para Favoritos na parte superior. Clique em qualquer contato ou canal para começar a enviar mensagens ou clique em um repetidor para fazer login e visualizar a interface de administração. Você pode adicionar canais ou contatos com o botão verde na parte superior.

Acima da lista de contatos há um conjunto de ferramentas:

|General Item          |Function|
|---------------|-------------------------|
|Packet Feed   |Uma exibição de pacotes brutos recebidos à medida que chegam|
|Node Map      |Visualizar a localização dos nós|
|Mesh Visualizer|Uma representação 3D personalizável de nós e tráfego em tempo real|
|Trace          |Executar rastreamentos multi‑hop entre repetidores para obter informações de intensidade de sinal|
|Message Search |Pesquisar o histórico de canais e mensagens por palavras ou frases|
|Channel Finder |O localizador de canais encontra nomes de canais para pacotes ouvidos, mas não descriptografados|

### Mensagens (Canais)

Para criar ou entrar em um canal, clique no botão 'Add Channel/Contact” no canto superior esquerdo do menu principal do aplicativo. Canais privados, identificados apenas pela sua chave, ou canais Hashtag, identificados pelo seu nome como uma #hashtag, podem ser acessados a partir do menu que aparece.

O canal Public é adicionado automaticamente a todas as novas instâncias do RemoteTerm. Sua malha local provavelmente terá sua parcela de canais ativos: Public, #test ou #testing, e #bots ou #bot podem ser bons lugares para começar ou encontrar pessoas que possam apontar para boas salas locais para iniciantes.

Quando um canal é selecionado, a tela ficará parecida com isto:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/channel.png" style={{width:900, height:'auto'}}/></div>

Na barra de status:

|Icon|Function|
|---------------|---------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/bell.png" style={{width:50, height:'auto'}}/></div>|Configura notificações, seja como notificações na área de trabalho (que exigem que o navegador esteja aberto) ou Web Push (que podem ser entregues mesmo quando o navegador está fechado). Isso requer um contexto HTTPS confiável (os certificados snakeoil disponíveis no instalador podem ou não ser suficientes para permitir notificações, dependendo do seu sistema operacional e navegador)|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/earth.png" style={{width:50, height:'auto'}}/></div>|Habilita substituições de roteamento regionais, que limitam o escopo regional do rádio quando ele envia mensagens apenas neste canal. Usuários com configurações de região correspondentes ou diferentes poderão ver ou ignorar automaticamente suas mensagens, respectivamente|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/chevrons-left-right.png" style={{width:50, height:'auto'}}/></div>|Permite substituições de largura de salto por canal, separadas do padrão do seu rádio|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/star.png" style={{width:50, height:'auto'}}/></div>|Adiciona ou remove um canal dos seus favoritos|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trash-2.png" style={{width:50, height:'auto'}}/></div>|Exclui o canal, mas mantém as mensagens históricas se você decidir adicioná‑lo novamente depois|
|Room Key|Fornece a chave MeshCore para a sala em questão|

No canto superior esquerdo está o nome do canal com um ícone de informações; você pode clicar nele para ver informações sobre o canal, como quão ativo ele é, quem está enviando mensagens e sua chave (que você também pode ver clicando no texto "Show key" na barra de status superior):

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_room_analytic.png" style={{width:300, height:'auto'}}/></div>

### Mensagens (Mensagens Diretas)

O envio de mensagens diretas funciona de forma semelhante às mensagens de canal, com algumas opções diferentes.

|Ícone|Função|
|---------------|---------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/route.png" style={{width:50, height:'auto'}}/></div>|Envia uma sonda roteada para o contato para descobrir um caminho de roteamento mais ideal para as mensagens seguirem|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trace.png" style={{width:50, height:'auto'}}/></div>|Envia um rastreamento direto para o contato, com dados de SNR remoto e local|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/bell.png" style={{width:50, height:'auto'}}/></div>|Configura notificações, seja como notificações na área de trabalho (que exigem que o navegador esteja aberto) ou Web Push (que podem ser entregues mesmo quando o navegador está fechado). Elas exigem um contexto HTTPS confiável (os certificados snakeoil disponíveis no instalador podem ou não ser suficientes para permitir notificações, dependendo do seu sistema operacional e navegador)|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/star.png" style={{width:50, height:'auto'}}/></div>|Adiciona ou remove um contato dos seus favoritos|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trash-2.png" style={{width:50, height:'auto'}}/></div>|Exclui a conversa, mas mantém as mensagens históricas se você optar por adicioná-la novamente depois|
|Chave do Contato|Fornece a chave MeshCore para o contato em questão e informações sobre quando ele foi ouvido pela última vez (anúncio, mensagem, etc.) e o método (direto ou qual caminho o pacote percorreu)|

De forma semelhante aos canais, você pode clicar no ícone de informações ou no nome na barra superior de um contato selecionado para ver análises desse contato

## MQTT e Automação

RemoteTerm se destaca ao fornecer integrações ricas para sistemas automatizados. As integrações executam ações quando pacotes de determinados tipos são ouvidos (por exemplo, quando uma mensagem é enviada em um canal ou uma DM é recebida). Elas incluem:

- MQTT, encaminhando pacotes via MQTT para:
  - Brokers privados
  - Agregadores da comunidade
  - Home Assistant
- Webhooks, enviando requisições GET ou POST para uma URL específica com dados da mensagem
- Apprise, uma ferramenta flexível de distribuição de notificações que pode encaminhar para Discord, Telegram, SMS, e-mail etc.
- Colocação de pacotes ou mensagens em filas Amazon SQS
- Bots em Python

### Configuração para Mapeamento de Malha da Comunidade

Mostrar a localização dos nós MeshCore, padrões de fluxo de mensagens e quebras de conectividade, etc. — pode ser útil para a comunidade na construção da rede MeshCore. Para fornecer essa visualização de depuração, agregadores da comunidade ingerem um fluxo de pacotes brutos de *observadores*.

RemoteTerm facilita o uso do mesmo rádio que você usa para enviar e receber mensagens para contribuir com esses esforços comunitários de mapeamento e visibilidade como um nó observador.

:::warning
MeshCore *não* permite que mensagens entrem na malha por meio de nós MQTT; os esforços de observabilidade da comunidade são somente leitura. 
:::

Existem muitas plataformas de observadores da comunidade, mas a [LetsMesh](https://analyzer.letsmesh.net/) é uma das mais populares, e é isso que vamos configurar.

1. [Clique aqui](https://analyzer.letsmesh.net/) para visitar o LetsMesh e fazer login no analisador LetsMesh.
2. No RemoteTerm, navegue até "Settings" e clique em "MQTT & Automation".
3. Clique em "Add Integration" e escolha "LetsMesh (US)" na lista à esquerda.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/LetsMesh_selected_integration.png" style={{width:900, height:'auto'}}/></div>

4. Clique em "Create".
5. Preencha com o mesmo e-mail que você usou para se cadastrar no LetsMesh e insira o código IATA do aeroporto mais próximo
6. Clique em "Save as Enabled".

Você deverá ver um ponto verde e o status "Connected"; uma integração saudável deve se parecer com isto:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/healthy_integration.png" style={{width:900, height:'auto'}}/></div>


Se em vez disso você vir um ponto âmbar, clique no símbolo "ⓘ" ao lado do botão Edit para ver o erro.

Agora, navegue para este [link](https://analyzer.letsmesh.net/my-nodes). Em cerca de 15 minutos, você deverá ver seu rádio aparecer em verde lá, e sua própria telemetria e pacotes sendo encaminhados para o LetsMesh!
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/healthy_letsmesh.png" style={{width:400, height:'auto'}}/></div>

### Bot

RemoteTerm fornece uma interface para programar seus próprios bots. Bots consistem em código Python simples que é executado sempre que uma mensagem é recebida de um contato ou canal. 

:::warning
Bots geram tráfego automatizado em resposta a outras mensagens. Isso significa que é *sua* responsabilidade garantir que os bots sejam cuidadosamente escritos para evitar inundar a malha ou entrar em loops infinitos. 
:::

#### Configure um Bot Simples de Rolagem de Dados

Aqui está um tutorial guiando você a construir um bot com capacidades simples de rolagem de dados, solicitadas em forma padrão (por exemplo, "3d6" significa rolar 3 dados de seis lados). Aqui estão os passos simples:

1. No RemoteTerm, navegue até "Settings" e clique em "MQTT & Automation".
2. Clique em "Add Integration" e escolha "Python Bot" na lista à esquerda.
3. Clique em "Create".
4. Dê ao bot um nome descritivo, como "Dice Bot".
5. Apague o código do editor e cole o seguinte código em seu lugar:

```python
import random
import re

def bot(**kwargs) -> str | list[str] | None:
    """Dice roller — responds to !dice NdS in #bot only."""
    sender_name = kwargs.get("sender_name")
    message_text = kwargs.get("message_text", "")
    channel_name = kwargs.get("channel_name")
    is_outgoing = kwargs.get("is_outgoing", False)

    if is_outgoing or channel_name != "#bot":
        return None

    match = re.match(r"^!dice\s+(\d+)d(\d+)$", message_text.strip())
    if not match:
        return None

    count, sides = int(match.group(1)), int(match.group(2))
    if count < 1 or count > 20 or sides < 2 or sides > 100:
        return "I don't know how to roll that! [1-20]d[2-100]"

    rolls = [random.randint(1, sides) for _ in range(count)]
    parts = " + ".join(str(r) for r in rolls)
    name = sender_name or "Someone"
    return f"@[{name}] rolled {parts} = {sum(rolls)}"
```

6. Clique em "Save as Enabled".

Usando outro rádio, navegue até a sala **#bot** e solicite uma rolagem de dados (por exemplo, "3d6"). A saída deve se parecer com isto:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/dice_bot_in_action.png" style={{width:900, height:'auto'}}/></div>

Se você não vir a resposta como esperado, pode verificar os logs do servidor do seu contêiner Docker para ver se há algum erro relatado quando o código Python é executado.

#### Configure um Bot de Largura de Caminho

O firmware MeshCore v1.14+ trouxe grandes mudanças em como as mensagens atravessam a malha; pacotes que atravessam roteadores compatíveis agora podem carregar identificadores de salto multibyte. 

Podemos criar um bot para ajudar as pessoas a determinar se um caminho multibyte está associado à sua mensagem. Este script usa a capacidade de enviar várias mensagens em resposta, fornecendo uma mensagem de largura de salto e os próprios dados de salto do pacote.

```python
def bot(**kwargs) -> str | list[str] | None:
    """Report the sender's path hop width in #bot."""
    sender_name = kwargs.get("sender_name")
    message_text = kwargs.get("message_text", "")
    channel_name = kwargs.get("channel_name")
    is_outgoing = kwargs.get("is_outgoing", False)
    path = kwargs.get("path")
    path_bytes_per_hop = kwargs.get("path_bytes_per_hop")

    if is_outgoing or channel_name != "#bot":
        return None

    if "!hopwidth" not in message_text.lower():
        return None

    name = sender_name or "Someone"

    if path_bytes_per_hop is None or not path:
        return f"@[{name}]'s hop width is unknown (no path data)"

    hop_count = (len(path) // 2) // path_bytes_per_hop

    if path_bytes_per_hop == 1:
        msg = f"@[{name}]'s hops are 1 byte wide; they might not be on 1.14+ or there may be incompatible repeaters in the path."
    else:
        msg = f"@[{name}]'s hops are {path_bytes_per_hop} bytes wide; they are using firmware v1.14+!"

    return [msg, f"Heard via {hop_count} hop{'s' if hop_count != 1 else ''}"]
```

### Encaminhar Mensagens de Canal MeshCore para o Discord

[Apprise](https://appriseit.com/) é um serviço de notificação flexível suportado pelo RemoteTerm. O Apprise permite que você escolha um ou muitos entre centenas de serviços de notificação para os quais enviar mensagens de canal ou diretas, desde Discord e Telegram até SMS, e-mail e muito mais.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/Aprise.png" style={{width:900, height:'auto'}}/></div>  

Como exemplo, usaremos o Apprise para encaminhar todas as mensagens em um canal MeshCore específico para o Discord via RemoteTerm.

1. Abra o Discord em um canal no qual você tenha privilégios de administrador.
2. Clique com o botão direito no nome do canal e clique em "Edit Channel".
3. Clique em "Integrations" no menu à esquerda e depois clique em "Create Webhook".
4. Dê um nome apropriado ao webhook e copie a URL do webhook. O webhook deve ter o formato `https://discord.com/api/webhooks/<WebhookID>/<WebhookToken>`
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_webhook_setup.png" style={{width:900, height:'auto'}}/></div>  

5. No RemoteTerm, navegue até "Settings" e clique em "MQTT & Automation".
6. Clique em "Add Integration" e escolha "Apprise" na lista à esquerda.
7. Clique em "Create".
8. Adicione uma URL de notificação na entrada. De acordo com a [documentação do Discord do Apprise](https://appriseit.com/services/discord/), ela deve ter o formato `discord://{WebhookID}/{WebhookToken}/`. Use o WebhookID e o WebhookToken da URL copiada. 
9. Escolha se deseja preservar a identidade do usuário usando o nome e o avatar configurados quando disponíveis.
10. Escolha se deseja incluir dados de rota na mensagem (recomenda-se desativar)
11. Selecione os contatos/canais que você gostaria de encaminhar para o Discord e clique em "Save as Enabled".
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_configured.png" style={{width:900, height:'auto'}}/></div>  

Depois de ativado, você deverá começar a ver as mensagens fluindo! Se tiver problemas ou não vir as mensagens que espera, verifique os logs do servidor em busca de erros relatados ou tente ativar todos os canais para garantir que pelo menos o vínculo RemoteTerm ↔ Discord esteja funcionando.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_integration_working.png" style={{width:900, height:'auto'}}/></div>   

### Integrar o RemoteTerm com o Home Assistant

[Home Assistant](https://www.home-assistant.io/) fornece uma estrutura para automação residencial poderosa e fácil de usar. O RemoteTerm oferece integração com o Home Assistant por meio da integração MQTT integrada. Com essa integração, você pode acionar automações com base em mensagens, monitorar repetidores e telemetria de rádio local e rastrear contatos via GPS em seus anúncios.

Para aproveitar o rastreamento de telemetria de repetidores, você precisará inscrever os repetidores desejados na busca automática de telemetria. Depois de inscritos, o RemoteTerm solicitará telemetria em um intervalo configurável, mantendo valores históricos e tornando os valores atualizados visíveis no Home Assistant. 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/enrolled_repeater.png" style={{width:900, height:'auto'}}/></div>   

:::tip
A busca automatizada de telemetria de repetidores possui um intervalo personalizável; você pode escolher uma frequência que varia de uma vez por hora a uma vez por dia, com a restrição de que buscas automatizadas não podem exceder 24 em um período de 24 horas. 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/repeatertelemetryintervalcustomization.png" style={{width:900, height:'auto'}}/></div> 

:::

Depois de configurar seus repetidores rastreados como desejar e o MQTT Discovery estiver ativado no Home Assistant, você poderá configurar uma integração no RemoteTerm para iniciar o fluxo de dados.

1. No RemoteTerm, navegue até "Settings" e clique em "MQTT & Automation".
2. Clique em "Add Integration" e escolha "Home Assistant MQTT Discovery" na lista à esquerda.
3. Clique em "Create".
4. Insira as informações do seu broker MQTT, incluindo host e porta, e configuração de nome de usuário/senha/TLS, se aplicável.
5. Escolha os contatos a serem rastreados via localização GPS de anúncios no Home Assistant.
6. Selecione os repetidores com telemetria rastreada que você deseja ver no Home Assistant.
7. Escolha o escopo de mensagens para disparos (triggers) dentro do Home Assistant.
8. Clique em "Save as Enabled".

 Observe que a tela de configuração de integração do RemoteTerm fornece os tópicos/entidades exatos criados nos menus suspensos "What gets created in Home Assistant" e "Published Topic Summary".

:::warning
Contatos e repetidores rastreados criarão entidades no Home Assistant; você pode querer limitar sua seleção apenas aos contatos que lhe interessam para evitar poluir o Home Assistant.

Eventos de mensagem *não* criam entidades e são usados apenas para disparos; em geral, não há problema em permitir que todas as mensagens fluam para o Home Assistant.
:::


Para visualizar as novas entidades, faça login na interface web do Home Assistant. Clique em Settings, depois em Devices & Services e, em seguida, em MQTT. Você deverá ver suas entidades rastreadas exibidas. 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_ha_device_list.png" style={{width:900, height:'auto'}}/></div> 

Clique nelas para ver suas métricas disponíveis. Para repetidores, serão exibidas as métricas mais recentes disponíveis e não obsoletas; se você tiver ativado recentemente a busca automatizada de telemetria, talvez seja necessário aguardar até oito horas para que todos os campos de telemetria de repetidores e rádios sejam preenchidos no Home Assistant.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example.png" style={{width:900, height:'auto'}}/></div> 

Para orientações adicionais de configuração, consulte o arquivo [README_HA.md](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README_HA.md) no repositório do RemoteTerm. Por exemplo, seguir as instruções em "[Full monitoring dashboard with message feed](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README_HA.md#full-monitoring-dashboard-with-message-feed)" fornecerá um painel como este:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_ha_dashboard.png" style={{width:900, height:'auto'}}/></div> 

## Próximas etapas

Mantenha-se atualizado com o desenvolvimento do RemoteTerm ou tire dúvidas entrando no [Discord oficial do MeshCore](https://discord.gg/mr3Pt5s5V9) e acompanhando o [tópico de desenvolvimento do RemoteTerm](https://discord.com/channels/1343693475589263471/1477723940951429330). A base de código é atualizada com frequência e você pode encontrar a versão mais recente no [Changelog](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/CHANGELOG.md) e, claro, o RemoteTerm é gratuito, sem anúncios e de código aberto para sempre — dê uma estrela para ele no [GitHub](https://github.com/jkingsman/Remote-Terminal-for-MeshCore).

## Suporte técnico e discussão sobre o produto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>