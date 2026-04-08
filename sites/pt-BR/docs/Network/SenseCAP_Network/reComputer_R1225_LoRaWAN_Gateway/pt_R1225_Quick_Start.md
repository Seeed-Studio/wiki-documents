---
description: Guia de início rápido do Gateway LoRaWAN reComputer R1225
title: Guia de início rápido do Gateway LoRaWAN reComputer R1225
keywords:
  - Gateway
  - SenseCAP
  - Controlador de Borda
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_quick_start
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/25/2026
  author: Kian
createdAt: '2026-03-18'
url: https://wiki.seeedstudio.com/pt-br/r1225_quick_start/
updatedAt: '2026-03-31'
---
# Início Rápido

## Conexão de Energia

### Alimentado por um adaptador de energia

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

O reComputer R1225 é alimentado com uma tensão CA nominal de 12&#126;24 V ou tensão CC de 9&#126;36V. A fonte de alimentação é conectada por meio do conector de bloco de terminais de energia de 2 pinos. Para aterrar o reComputer R1225, o fio terra pode ser fixado ao parafuso localizado no canto superior esquerdo do terminal de energia.

:::note
A solução de alimentação utiliza um diodo retificador de ponte para proteção contra polaridade reversa e é compatível com entradas CA e CC. Isso garante que **independentemente de como os terminais positivo e negativo da fonte de alimentação sejam conectados**, o circuito não será danificado. Ao usar um retificador de ponte, a polaridade da tensão de saída permanece fixa, independentemente da polaridade CC de entrada, proporcionando proteção eficaz contra polaridade reversa.
:::

### Alimentação PoE

Com o módulo PoE instalado, a porta ETH0 do reComputer R1225 pode suportar alimentação PoE, fornecendo uma maneira conveniente e eficiente de alimentar o dispositivo pela Ethernet. Essa opção simplifica o processo de instalação e reduz a quantidade de cabeamento necessário, tornando-a uma solução ideal para aplicações com fontes de energia limitadas ou onde tomadas de energia não estão facilmente disponíveis.

- Entrada PoE: Faixa 44~57V; Típico 48V
- Saída PoE: 12V, 1,1A máx.

:::tip
Vale ressaltar que o módulo PoE fornecido com o reComputer R1225 é compatível com o padrão IEEE 802.3af e pode fornecer uma potência máxima de 12,95W. **Portanto, se houver necessidade de conectar periféricos de alta potência, como SSD ou módulos 4G, a alimentação PoE pode não ser suficiente**. Nesse caso, é recomendável usar o terminal CA/CC para alimentação, a fim de garantir o funcionamento estável e confiável do dispositivo.
:::

## Acessar o SenseCAP Gateway OS

### Acessar via roteador

- Passo 1: Conecte seu R1225 a um cabo Ethernet e conecte seu PC ao mesmo roteador

:::note
 Seu PC e o dispositivo devem estar conectados ao mesmo roteador/rede.
:::

#### Diagrama de Conexão de Rede

Ao usar o R1225 pela primeira vez, se houver roteadores e cabos Ethernet por perto, você pode optar por conectar o R1225 à rede por meio de uma conexão com fio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Network_Connection_Diagram1.png" alt="pir" width={800} height="auto" /></p>

<!--加一个，如果不是首次连接，已经连接了Wifi，即使不插网线，也可以通过访问路由器分配的IP进入管理界面-->

:::tip
Se o Wi-Fi estiver configurado, você pode acessar a interface LuCI por meio do endereço IP do R1225 sem um cabo Ethernet, desde que o seu computador e o R1225 estejam na mesma rede.
:::

- Passo 2: Obtenha o endereço IP do seu dispositivo

Verifique o endereço IP do seu dispositivo na página de administração do seu roteador.

- Passo 3: Obtenha o nome de usuário e a senha do seu dispositivo

  - Nome de usuário: admin
  - Senha: null  (**Nenhuma senha é necessária para o primeiro login**)

- Passo 4: Fazer login no Luci

Digite o endereço IP do seu dispositivo em um navegador para entrar na página Luci.
Em seguida, insira o nome de usuário e a senha do dispositivo para fazer login e clique no botão Login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

### Acessar via hotspot AP do dispositivo

:::caution
Quando o R1225 é ligado pela primeira vez, seu hotspot Wi-Fi permanece ativo por 5 minutos por padrão. Após esse tempo, o hotspot do R1225 será desligado automaticamente.
:::

- Passo 1: Ligar o R1225

Conecte o reComputer R1225 LoRaWAN Gateway e o dispositivo será ligado automaticamente.

- Passo 2: Conectar ao hotspot AP

  - SSID : R1225-XXXX (**últimos 4 dígitos do SN**)
  - Senha : 1234567890

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_AP.png" alt="pir" width={450} height="auto" /></p>

Quando o reComputer R1225 é ligado pela primeira vez, ele habilita automaticamente o modo hotspot. O SSID padrão para o hotspot é “R1225-XXXX (**últimos 4 dígitos do SN**)”, e a senha padrão é “1234567890”. Conecte seu computador a esse hotspot AP.

- Passo 3: Obtenha o endereço IP do seu dispositivo

Após conectar ao AP com o SSID R1225-XXXX, clique no ícone de detalhes no canto superior direito.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_Wifi.png" alt="pir" width={450} height="auto" /></p>

Clique para abrir a página “Rede e Internet” nas configurações do sistema e, em seguida, role até a parte inferior para encontrar o endereço IP.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/R1225_Wifi2.png" alt="pir" width={450} height="auto" /></p>

- Passo 4: Obtenha o nome de usuário e a senha do seu dispositivo

  - Nome de usuário: admin
  - Senha: null  (**Nenhuma senha é necessária para o primeiro login**)

- Passo 5: Fazer login no Luci

Digite o endereço IP (192.168.2.1) no seu navegador para entrar no Console Local.  
Em seguida, insira o nome de usuário e a senha do dispositivo e clique no botão Login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Luci_login.png" alt="pir" width={800} height="auto" /></p>

## Configuração de Rede do R1225

### Conexão Ethernet

Ethernet é plug-and-play e não requer configuração.
<!--补充图片和内容-->

### Conexão WIFI

- Passo 1: Clique em `Network` - `Wi-Fi`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi1.png" alt="pir" width={200} height="auto" /></p>

- Passo 2: Clique no botão `Scan` para escanear o WIFI

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi2.png" alt="pir" width={800} height="auto" /></p>

- Passo 3: Selecione seu Wi-Fi para entrar na rede

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi3.png" alt="pir" width={800} height="auto" /></p>

- Passo 4: Envie a senha do Wi-Fi e, em seguida, clique em `Submit` e Save

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi4.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi5.png" alt="pir" width={800} height="auto" /></p>

- Passo 5: Clique em `Save & Apply` para aplicar suas configurações

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/wifi6.png" alt="pir" width={800} height="auto" /></p>

### Conexão Celular (para versão 4G)

- Passo 1: Insira seu cartão SIM no slot para cartão Nano-SIM

Use o clipe de trilho DIN que fornecemos para inseri-lo no pequeno orifício ao lado do slot do cartão SIM e, em seguida, insira seu cartão SIM.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE.png" alt="pir" width={400} height="auto" /></p>

- Passo 2: Faça login na página Luci e clique em `Network` - `LTE`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE1.png" alt="pir" width={200} height="auto" /></p>

- Passo 3: Configure as informações de APN e clique em `Save & Apply` para aplicar suas configurações

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LTE2.png" alt="pir" width={800} height="auto" /></p>

## Configuração LoRaWAN do R1225

- Passo 1: Clique em `LoRa` - `LoRa Network`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LoRa1.png" alt="pir" width={200} height="auto" /></p>

- Passo 2: Marque a opção `Enable LoRa functionality`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/LoRa2.png" alt="pir" width={800} height="auto" /></p>

- Passo 3: Clique em `Save & Apply` para aplicar suas configurações

### Configurações do Plano de Canais

- Passo 1: Navegue até `LoRa` > `Channel Plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/channel_plan1.png" alt="pir" width={200} height="auto" /></p>

- Passo 2: Selecione `Region` e `Channel-plan`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/channel_plan2.png" alt="pir" width={800} height="auto" /></p>

- Passo 3: Clique em `Save & Apply` para aplicar suas configurações

### Selecionar a plataforma Chirpstack integrada

:::tip
O R1225 vem com o ChirpStack (servidor de rede LoRaWAN de código aberto) pré-instalado.
:::

- Passo 1: Selecione `Platform Type` - `ChirpStack`

- Passo 2: Verifique o **EUI**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack1.png" alt="pir" width={800} height="auto" /></p>

- Passo 3: Clique em `Open ChirpStack Application Server` no canto inferior esquerdo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack2.png" alt="pir" width={800} height="auto" /></p>

- Etapa 4: Faça login na plataforma em nuvem Chirpstack

  - Nome de usuário/e-mail: admin

  - Senha: admin

O nome de usuário e a senha padrão são ambos “admin”

Em seguida, clique em `Submit` para ir para a interface da plataforma Chirpstack

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack3.png" alt="pir" width={800} height="auto" /></p>

### Vincular o gateway R1225 LoRaWAN

- Etapa 5: Navegue até `Gateway` > `Add gateway`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack4.png" alt="pir" width={800} height="auto" /></p>

- Etapa 6: Insira o `Gateway Name` e o `Gateway ID (EUI: 64)`

  - Gateway name: Um nome para o seu gateway

  - Gateway ID(EUI64): O EUI do gateway pode ser encontrado na etiqueta do dispositivo ou no Console Local

  - Stats interval(secs): O intervalo esperado, em segundos, no qual o gateway envia suas estatísticas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack5.png" alt="pir" width={800} height="auto" /></p>

Em seguida, clique em `Submit`

### Verificando o status de conexão do gateway

Após a conclusão de todas as etapas de configuração, o gateway deve ser exibido como **`Online`** na plataforma ChirpStack.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack6.png" alt="pir" width={800} height="auto" /></p>

#### Dados do gateway

Navegue até Gateways e escolha o gateway que você deseja verificar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Chirpstack7.png" alt="pir" width={800} height="auto" /></p>