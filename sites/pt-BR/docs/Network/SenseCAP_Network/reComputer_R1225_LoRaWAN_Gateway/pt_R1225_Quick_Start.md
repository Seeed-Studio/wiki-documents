---
description: Início Rápido do Gateway LoRaWAN reComputer R1225
title: Início Rápido do Gateway LoRaWAN reComputer R1225
keywords:
  - Gateway
  - SenseCAP
  - Controlador de Borda
  - reComputer R1225
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /r1225_quick_start
sku: 100021896,100030154,100006298,100079154
last_update:
  date: 03/13/2026
  author: Kian
createdAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/r1225_quick_start/
updatedAt: '2026-03-26'
---

# Início Rápido

## Conexão de energia

### Alimentado por um adaptador de energia

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

O reComputer R1225 é alimentado com uma tensão CA nominal de 12&#126;24 V ou tensão CC de 9&#126;36V. A fonte de alimentação é conectada por meio do conector de bloco de terminais de energia de 2 pinos. Para aterrar o reComputer R1225, o fio terra pode ser fixado ao parafuso localizado no canto superior esquerdo do terminal de energia.

:::note
A solução de alimentação utiliza um diodo retificador de ponte para proteção contra polaridade reversa e é compatível com entradas CA e CC. Isso garante que **independentemente de como os terminais positivo e negativo da fonte de alimentação sejam conectados**, o circuito não será danificado. Ao usar um retificador de ponte, a polaridade da tensão de saída permanece fixa, independentemente da polaridade CC de entrada, proporcionando proteção eficaz contra polaridade reversa.
:::

### Alimentação PoE

Com o módulo PoE instalado, a porta ETH0 do reComputer R1225 pode suportar alimentação PoE, fornecendo uma maneira conveniente e eficiente de alimentar o dispositivo pela Ethernet. Essa opção simplifica o processo de instalação e reduz a quantidade de cabeamento necessária, tornando-a uma solução ideal para aplicações com fontes de energia limitadas ou onde tomadas de energia não estão prontamente disponíveis.

- Entrada PoE: Faixa 44~57V; Típica 48V
- Saída PoE: 12V, 1,1A máx.

:::tip
Vale ressaltar que o módulo PoE fornecido com o reComputer R1225 é compatível com o padrão IEEE 802.3af e pode fornecer uma potência máxima de 12,95W. **Portanto, se houver necessidade de conectar periféricos de alta potência, como SSD ou módulos 4G, a alimentação PoE pode não ser suficiente**. Nesse caso, é recomendável usar o terminal CA/CC para alimentação, a fim de garantir o funcionamento estável e confiável do dispositivo.
:::

## Acessar o Seeed Gateway OS

### Acessar via roteador

- Etapa 1: Conecte seu R1225 a um cabo Ethernet e conecte seu PC ao mesmo roteador

:::note
 Seu PC e o dispositivo devem estar conectados ao mesmo roteador/rede.
:::

#### Diagrama de Conexão de Rede

Ao usar o R1225 pela primeira vez, se houver roteadores e cabos Ethernet por perto, você pode optar por conectar o R1225 à rede por meio de uma conexão com fio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer_1225_LoRaWAN_Gateway/img/Quick_Start_Content_Image/Network_Connection_Diagram.png" alt="pir" width={800} height="auto" /></p>

<!--加一个，如果不是首次连接，已经连接了Wifi，即使不插网线，也可以通过访问路由器分配的IP进入管理界面-->

:::tip
Durante a configuração inicial, se você tiver configurado o Wi-Fi, poderá acessar a interface Luci inserindo o endereço IP do R1225 — mesmo que não tenha conectado um cabo Ethernet — desde que o seu computador e o R1225 estejam conectados à mesma rede Wi-Fi.
:::

- Etapa 2: Obtenha o endereço IP do seu dispositivo

Verifique o endereço IP do seu dispositivo na página de administração do roteador.

- Etapa 3: Obtenha o nome de usuário e a senha do seu dispositivo

  - Nome de usuário: admin
  - Senha: null  (**Nenhuma senha é necessária para o primeiro login**)

- Etapa 4: Fazer login no Luci

Insira o endereço IP do seu dispositivo em um navegador para entrar na página Luci.
Em seguida, insira o nome de usuário e a senha do dispositivo para fazer login e clique no botão Login.

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

### Acessar via hotspot AP do dispositivo

- Etapa 1: Ligue o R1225

- Etapa 2: Conecte-se ao hotspot AP

  - SSID : R1225-XXXX (**últimos 4 dígitos do SN**)
  - Senha : 1234567890

Quando o reComputer R1225 é ligado pela primeira vez, ele habilita automaticamente o modo hotspot. O SSID padrão do hotspot é “R1225-XXXX (**últimos 4 dígitos do SN**)”, e a senha padrão é “1234567890”; conecte seu computador a esse hotspot AP.

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Etapa 3: Obtenha o nome de usuário e a senha do seu dispositivo

  - Nome de usuário: admin
  - Senha: null  (**Nenhuma senha é necessária para o primeiro login**)

- Etapa 4: Fazer login no Luci

Insira o endereço IP (192.168.168.1) no seu navegador para entrar no Console Local.  
Em seguida, insira o nome de usuário e a senha do dispositivo e clique no botão Login.

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

## Configuração de Rede do R1225

### Conexão Ethernet

<!--补充图片和内容-->

### Conexão Wi-Fi

- Etapa 1: Clique em `Network` - `Wireless`

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Etapa 2: Clique no botão `Scan` para escanear o Wi-Fi

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Etapa 3: Selecione o seu Wi-Fi para entrar na rede

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Etapa 4: Envie a senha do Wi-Fi e, em seguida, clique em `Submit` e Save

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Etapa 5: Clique em `Save & Apply` para aplicar suas configurações

### Conexão Celular (para versão 4G)

- Etapa 1: Insira seu cartão SIM no slot para cartão Nano-SIM

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Etapa 2: Faça login na página Luci e clique em `Network` - `Cellular`

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

- Etapa 3: Configure as informações de APN e clique em `Save & Apply` para aplicar suas configurações

<!--补充图片
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>-->

## Configuração LoRaWAN do R1225

- Etapa 1: Clique em `LoRa` - `LoRa Network`

- Etapa 2: Marque `Enable LoRa functionality`

- Etapa 3: Clique em `Save & Apply` para aplicar suas configurações

### Configurações do Plano de Canais

- Etapa : Navegue até `LoRa` > `Channel Plan`

- Etapa : Selecione `Region` e `Channel-plan`

- Etapa : Clique em `Save & Apply` para aplicar suas configurações

### Selecionar a plataforma Chirpstack integrada

:::tip
O R1225 vem com o ChirpStack (servidor de rede LoRaWAN de código aberto) pré-instalado.
:::

- Etapa : Selecione `Platform Type` - `ChirpStack`

- Etapa : Verifique o **EUI**

- Etapa : Clique em `Open ChirpStack Application Server` no canto inferior esquerdo

- Etapa : Faça login na Plataforma em Nuvem Chirpstack
  - Nome de usuário/e-mail: admin
  - Senha: admin

O nome de usuário e a senha padrão são ambos “admin”

Em seguida, clique em `Submit` para ir para a interface da plataforma Chirpstack

### Vincular o Gateway LoRaWAN R1225

- Etapa : Navegue até `Gateway` > `Add gateway`

  - Gateway name: Um nome para o seu gateway

  - Gateway ID(EUI64): O EUI do gateway pode ser encontrado na etiqueta do dispositivo ou no Console Local

  - Stats interval(secs): O intervalo esperado, em segundos, no qual o gateway envia suas estatísticas

Em seguida, clique em `Submit`

### Verificando o Status de Conexão do Gateway
