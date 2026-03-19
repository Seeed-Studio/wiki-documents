---
description: Início_Rápido
title: Início Rápido
keywords:
  - gateway
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /quick_start_with_M2_MP
last_update:
  date: 9/26/2023
  author: Jessie
createdAt: '2023-09-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/quick_start_with_M2_MP/
---


## Conexão POE

SenseCAP M2 suporta PoE (Power on Ethernet) e é compatível com o padrão IEEE 802.3 af.

:::tip
Você precisará de um switch PoE extra que forneça alimentação CC de 40V-57V como PSE (Power Sourcing Equipment) se o seu modem/roteador não suportar PoE.
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png" alt="pir" width={800} height="auto" /></p>

## Configuração de Rede do Gateway

Conecte a antena e o adaptador de energia ao gateway.
O LED de energia ficará vermelho e, em cerca de 15s, o indicador na parte superior piscará em verde, indicando que o gateway está inicializando.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png" alt="pir" width={800} height="auto" /></p>

Existem duas maneiras de se conectar à Internet. Escolha a que funcionar para você.

### Conexão Ethernet

Conecte o cabo Ethernet à porta Ethernet, e o indicador na parte superior ficará verde contínuo se o gateway estiver conectado com sucesso à internet.

### Conexão WIFI

Existem duas maneiras para os usuários fazerem login na página de configuração Luci.

#### Acessar via roteador

- Passo 1: Conecte seu dispositivo a um cabo Ethernet e conecte seu PC ao mesmo roteador.

:::note Seu PC e o dispositivo devem estar conectados ao mesmo roteador/rede.
:::

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png" alt="pir" width={800} height="auto" /></p>

- Passo 2: Obter o Endereço IP do seu dispositivo

Verifique o Endereço IP do seu dispositivo na página de administração do seu roteador.

- Passo 3: Obter o Nome de Usuário e a Senha do seu dispositivo

Você pode encontrar o Nome de Usuário e a Senha na etiqueta do seu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- Passo 4: Login no Luci

Insira o Endereço IP do seu dispositivo em um navegador para entrar na página Luci.
Depois insira o nome de usuário e a senha do seu dispositivo para fazer login.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png" alt="pir" width={800} height="auto" /></p>

#### Acessar via hotspot AP do dispositivo

- Passo 1: Ligue o hotspot AP do dispositivo.

Pressione o botão por 5s até que o indicador azul pisque lentamente para entrar no modo de configuração.

- Passo 2: Conecte-se ao hotspot AP.
O nome do hotspot AP é SenseCAP_XXXXXX (endereço MAC de 6 dígitos), a senha padrão é 12345678; conecte o seu computador a este hotspot AP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wifi.png" alt="pir" width={400} height="auto" /></p>

- Passo 3: Obter o Nome de Usuário e a Senha do seu dispositivo

Você pode encontrar o Nome de Usuário e a Senha na etiqueta do seu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png" alt="pir" width={800} height="auto" /></p>

- Passo 4: Fazer login no Console Local

Insira o Endereço IP (192.168.168.1) no seu navegador para entrar no Console Local. Em seguida, insira o nome de usuário e a senha do seu dispositivo e clique no botão Login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-login.png" alt="pir" width={800} height="auto" /></p>

#### Conectar a uma WIFI

- Passo 1: Clique em `Network` - `Wireless`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless.png" alt="pir" width={800} height="auto" /></p>

- Passo 2: Clique no botão `Scan` para escanear a WIFI.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless2.png" alt="pir" width={800} height="auto" /></p>

- Passo 3: Selecione o seu WI-FI para ingressar na rede.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless3.png" alt="pir" width={800} height="auto" /></p>

- Passo 4: Envie a senha do Wi-Fi e, em seguida, clique em `Submit` e Save.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/wireless4.png" alt="pir" width={800} height="auto" /></p>

Depois clique em Save and Apply para aplicar suas configurações.

O indicador na parte superior ficará verde contínuo se o gateway estiver conectado com sucesso ao WIFI.

### Conexão Celular (para versão 4G)

- Passo 1: Insira o seu cartão SIM no slot para cartão Nano-SIM

<p style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/07/%E6%8F%92%E5%9B%BE-01.jpg" alt="pir" width={666} height="auto" /></p>

- Passo 2: Faça login na página Luci e clique em `Network` - `Cellular`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g1.png" alt="pir" width={800} height="auto" /></p>

- Passo 3: Configure as informações de APN e clique em `Save and Apply` para aplicar suas configurações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/4g3.png" alt="pir" width={800} height="auto" /></p>

:::tip
Para reduzir o consumo de dados, verifique a [Low Data Consumption Mode Config](https://wiki.seeedstudio.com/pt-br/traffic_saving_config).
:::

### Configurações do Plano de Canais

Navegue até `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

Selecione o plano de Região e Frequência.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

Após a configuração, clique em `Save&Apply`.

### Verificando o Status de Conexão do Gateway

Após ligar o gateway, há duas maneiras de verificar o status de funcionamento do gateway:

#### Indicador LED

<table>
<tr><th colspan="2" valign="top"><b>Modo</b></th><th colspan="1" valign="top"><b>Descrição</b></th></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p></p><p>Verde</p></td><td colspan="1" valign="top">Fixo</td><td colspan="1" valign="top">O gateway está saudável e a internet está bem conectada.</td></tr>
<tr><td colspan="1" valign="top">Piscando lentamente</td><td colspan="1" valign="top">O gateway está inicializando, aguarde.</td></tr>
<tr><td colspan="1" rowspan="3" valign="top"><p></p><p></p><p></p><p></p><p>Azul</p></td><td colspan="1" valign="top"><p></p><p>Fixo</p></td><td colspan="1" valign="top"><p>O gateway está pronto para conexão com a internet.</p><p>Mais configurações são necessárias.</p></td></tr>
<tr><td colspan="1" valign="top">Piscando lentamente</td><td colspan="1" valign="top">Modo de configuração, e irá sair automaticamente após 5 minutos se não houver atividade.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Piscando rapidamente</p></td><td colspan="1" valign="top">Pressione o botão por 30s até que o indicador mostre piscada rápida para acionar a restauração de fábrica.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Laranja</p></td><td colspan="1" valign="top"><p></p><p>Piscando lentamente</p></td><td colspan="1" valign="top">O firmware está sendo atualizado, por favor não desligue o gateway nem desconecte a internet.</td></tr>
<tr><td colspan="1" valign="top"><p></p><p>Branco</p></td><td colspan="1" valign="top"><p></p><p>Fixo</p></td><td colspan="1" valign="top">O gateway está apenas com um firmware de fábrica e será atualizado para o firmware mais recente automaticamente quando estiver conectado à internet.</td></tr>
<tr><td colspan="1" rowspan="2" valign="top"><p></p><p>Vermelho</p></td><td colspan="1" valign="top">Fixo</td><td colspan="1" valign="top">Problema de hardware ou falha na conexão com a internet.</td></tr>
<tr><td colspan="1" valign="top">Piscando lentamente</td><td colspan="1" valign="top">Gateway não conectado ao LNS.</td></tr>
</table>

#### SenseCAP Mate APP

No SenseCAP Mate App, `Online status` indica `Online` quando o gateway está conectado à rede.
Consulte o próximo capítulo para obter o SenseCAP App.

## Vincular o gateway

SenseCAP Mate APP suporta configuração de dispositivo e gerenciamento remoto.

- Passo 1: Baixe o SenseCAP Mate APP

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={600} height="auto" /></p>

- Passo 2: Faça login no APP
Se esta for a sua primeira vez usando a plataforma SenseCAP, registre uma conta primeiro.

:::tip
Selecione Global em Server Location.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app-register.png" alt="pir" width={500} height="auto" /></p>

- Passo 3: Adicionar dispositivo

Clique no `+` no canto superior direito e selecione Add device
Em seguida, escaneie o código QR na etiqueta do seu gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

Configure o nome e a localização do seu dispositivo. Depois confirme suas configurações.
Após a vinculação bem-sucedida, você verá o seu gateway no diretório Device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app3.png" alt="pir" width={380} height="auto" /></p>

## Conectar os Sensores SenseCAP

- Passo 1: Adicionar dispositivo

Clique no `+` no canto superior direito e selecione Add device
Em seguida, escaneie o código QR na etiqueta do seu gateway.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app2.png" alt="pir" width={500} height="auto" /></p>

- Passo 2: Selecione o plano de frequência

Clique em `Settings`, defina a plataforma e a frequência; a frequência deve corresponder à frequência do seu gateway.

ex: Se o seu gateway for versão US915, então você precisa configurar o seu sensor para frequência US915.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app7.png" alt="pir" width={500} height="auto" /></p>

:::tip
SenseCAP M2 Multi-Platform Gateway não pode se conectar à rede Helium.
:::

Para mais configurações sobre os sensores SenseCAP, consulte: SenseCAP Sensors

## SenseCAP Portal e aplicativo Mate

O aplicativo SenseCAP Mate e o SenseCAP Portal podem ser usados para verificar o status do seu dispositivo e fazer o gerenciamento do dispositivo.

- [SenseCAP Mate APP para iOS na App Store](https://apps.apple.com/cn/app/sensecap-mate/id1619944834)
- [SenseCAP Mate APP para Android na Google Play Store](https://install.appcenter.ms/orgs/seeed/apps/sensecap-mate/distribution_groups/public)
- [SenseCAP Portal](https://sensecap.seeed.cc/portal/)

### Informações do gateway

Verifique as informações do gateway no SenseCAP Portal e no aplicativo SenseCAP Mate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app8.png" alt="pir" width={700} height="auto" /></p>

### Dados do sensor

Verifique os dados do sensor no SenseCAP Portal e no aplicativo SenseCAP Mate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/app9.png" alt="pir" width={700} height="auto" /></p>
