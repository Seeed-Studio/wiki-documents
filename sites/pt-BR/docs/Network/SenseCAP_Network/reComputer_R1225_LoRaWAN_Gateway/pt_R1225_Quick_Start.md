---
description: reComputer R1225 LoRaWAN Gateway Início Rápido
title:  Início Rápido
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
---

## Conexão de energia

### Alimentado por um adaptador de energia

<div align="left"><img width={100} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png" /></div>

O reComputer R1225 é alimentado com uma tensão CA nominal de 12&#126;24 V ou tensão CC de 9&#126;36V. A fonte de alimentação é conectada através do conector de bloco de terminais de energia de 2 pinos. Para aterrar o reComputer R1225, o fio terra pode ser fixado ao parafuso localizado no canto superior esquerdo do terminal de energia.

:::note
A solução de alimentação utiliza um diodo retificador de ponte para proteção contra polaridade reversa e é compatível com entradas CA e CC. Isso garante que **independentemente de como os terminais positivo e negativo da fonte de alimentação sejam conectados**, o circuito não será danificado. Ao usar um retificador de ponte, a polaridade da tensão de saída permanece fixa, independentemente da polaridade CC de entrada, proporcionando proteção eficaz contra polaridade reversa.
:::

### Fonte de alimentação PoE

Com o módulo PoE instalado, a porta ETH0 do reComputer R1225 pode suportar alimentação PoE, fornecendo uma maneira conveniente e eficiente de alimentar o dispositivo pela Ethernet. Esta opção simplifica o processo de instalação e reduz a quantidade de cabeamento necessária, tornando-a uma solução ideal para aplicações com fontes de energia limitadas ou onde tomadas de energia não estão prontamente disponíveis.

- Entrada PoE: Faixa 44~57V; Típica 48V
- Saída PoE: 12V, 1.1A máx.

:::tip
Vale ressaltar que o módulo PoE fornecido com o reComputer R1225 é compatível com o padrão IEEE 802.3af e pode fornecer uma potência máxima de 12,95W. **Portanto, se houver necessidade de conectar periféricos de alta potência, como SSD ou módulos 4G, a alimentação PoE pode não ser suficiente**. Nesse caso, é recomendável usar o terminal CA/CC para alimentação, a fim de garantir o funcionamento estável e confiável do dispositivo.
:::

## Acessar a interface de gerenciamento do Seeed Gateway OS

### Acessar via roteador

- Passo 1: Conecte seu R1225 a um cabo Ethernet e conecte seu PC ao mesmo roteador

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

- Passo 2: Obtenha o endereço IP do seu dispositivo

Verifique o endereço IP do seu dispositivo na página de administração do roteador.

- Passo 3: Obtenha o nome de usuário e a senha do seu dispositivo

  - Nome de usuário: admin
  - senha: null  (**Nenhuma senha é necessária para o primeiro login**)

- Passo 4: Fazer login no Luci

Insira o endereço IP do seu dispositivo em um navegador para entrar na página Luci.
Em seguida, insira o nome de usuário e a senha do dispositivo para fazer login e clique no botão Login.

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/" alt="pir" width={800} height="auto" /></p>

### Acessar via hotspot AP do dispositivo

- Passo 1: Ligue o R1225

- Passo 2: Conecte-se ao hotspot AP

  - SSID : R1225-XXXX (**últimos 4 dígitos do SN**)
  - senha : 1234567890

Quando o reComputer R1225 é ligado pela primeira vez, ele habilita automaticamente o modo hotspot. O SSID padrão para o hotspot é “R1225-XXXX (**últimos 4 dígitos do SN**)”, e a senha padrão é “1234567890”; conecte seu computador a este hotspot AP.

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={400} height="auto" /></p>

- Passo 3: Obtenha o nome de usuário e a senha do seu dispositivo

  - Nome de usuário: admin
  - senha: null  (**Nenhuma senha é necessária para o primeiro login**)

- Passo 4: Fazer login no Luci

Insira o endereço IP (192.168.168.1) no seu navegador para entrar no Console Local. Em seguida, insira o nome de usuário e a senha do dispositivo e clique no botão Login.

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

## Configuração de Rede do R1225

### Conexão Ethernet

### Conexão WIFI

- Passo 1: Clique em `Network` - `Wireless`

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- Passo 2: Clique no botão `Scan` para escanear o WIFI

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- Passo 3: Selecione o seu WI-FI para entrar na rede

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- Passo 4: Envie a senha do Wi-Fi e, em seguida, clique em `Submit` e Save

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

Em seguida, clique em Save and Apply para aplicar suas configurações

O indicador na parte superior ficará verde fixo se o gateway estiver conectado com sucesso ao WIFI

### Conexão Celular (para versão 4G)

- Passo 1: Insira seu cartão SIM no slot para cartão Nano-SIM

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- Passo 2: Faça login na página Luci e clique em `Network` - `Cellular`

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

- Passo 3: Configure as informações de APN e clique em `Save and Apply` para aplicar suas configurações

<!--补充图片-->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/" alt="pir" width={800} height="auto" /></p>

## Configuração LoRaWAN do R1225

### Selecionar a plataforma Chirpstack integrada

### Configurações do Plano de Canais

### Vincular o Gateway LoRaWAN R1225

### Verificando o Status de Conexão do Gateway
