---
description: Guia Rápido do SenseCAP M4
title: Guia Rápido do SenseCAP M4
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start/
---

# Guia Rápido do SenseCAP M4 Square

**SenseCAP M4 Square** oferece a maneira mais fácil de implantar a Próxima Geração de Rede Computacional (FluxNode). Sem comandos Linux, sem necessidade de construir um ambiente e apenas 4 etapas para finalizar a implantação.

## Pré-requisitos

- Velocidade de upload de rede suficiente para implantar um FluxNode CUMULUS **(25 Mbps de upload no mínimo)**
- Um novo FluxNode CUMULUS criado

## O que você precisa

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png" alt="quick-start" width={600} height="auto" /></div>

## Fazer stake de um Flux CUMULUS Node

Este tutorial usa a Binance como exemplo

### Etapa 1 Vá até a exchange para comprar Flux

1. Baixe o [Binance App](https://www.binance.com/zh-CN/download) e registre uma conta

2. Flux não pode ser comprado com moeda fiduciária. Primeiro compre USDT e depois converta USDT em Flux

3. Na página Trade, selecione spot e, em Market, selecione FLUX/USDT

4. Insira o número de USDT e certifique-se de que o Flux convertido seja maior que 1000

5. Clique no botão Buy, agora você comprou Flux com sucesso

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg" alt="stake-flux" width={600} height="auto" /></div>

### Etapa 2 Baixe o Zelcore App e registre sua conta

1. Baixe o [Zelcore App](https://zelcore.io/) e faça login na sua conta Zelcore

2. Na página Portfolio, clique no botão Add Assets para adicionar o ativo FLUX BSC (Payments portfolio)

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png" alt="zelcore" width={600} height="auto" /></div>

### Etapa 3 Sacar Flux da Binance para a carteira Zelcore

1. Abra o Binance App e vá para a página Wallet

2. Acesse Flux, clique em Withdraw e selecione Send via Crypto Network

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200" alt="binance" width={600} height="auto" /></div>

3. Insira as informações de saque e envie

- Address: Abra o Zelcore App, copie o endereço de recebimento FLUX BSC e cole na Binance

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908" alt="withdraw" width={600} height="auto" /></div>

- Network: Selecione BB Smart Chain (BEP20)
- Amount: 1000+ Flux
- Send From: Spot&Funding Wallet

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200" alt="send" width={600} height="auto" /></div>

4. Verifique suas informações de saque e envie para o Zelcore

### Etapa 4 Crie um novo Flux Cumulus Node

1. Abra o Zelcore App e verifique se seu Flux foi enviado para o ativo FLUX BSC (Payments portfolio)

2. Vá para a página Apps e abra Fusion para trocar FLUX BSC por Flux (Payments portfolio).

- Sell Asset: Selecione FLUX BSC
- Buy Asset: Selecione FLUX

Observação: certifique-se de ter BNB suficiente para cobrir a taxa de swap

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200" alt="swap" width={600} height="auto" /></div>

3. Envie o Flux do Payments portfolio para outro portfolio, como o ativo Flux de Mining

4. Agora você pode implantar o novo Flux Cumulus Node no SenseCAP M4 Square!

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882" alt="deploy" width={600} height="auto" /></div>

## Implantar FluxNode no SenseCAP M4 Square

### Etapa 1 Ligar e conectar à internet

1. Conecte o adaptador de energia 12V/2A fornecido ao conector de energia DC-IN.

2. Conecte o cabo de rede ao Ethernet2.

3. O dispositivo fará a auto-configuração automaticamente. A luz laranja estável em L3 indica que a configuração e a conexão à internet foram bem-sucedidas.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png" alt="power" width={600} height="auto" /></div>

### Etapa 2 Instalar SenseCAP Hotspot App e Zelcore App

1. SenseCAP Hotspot App é projetado para configurar e gerenciar dispositivos. Por favor, escaneie o seguinte código QR para instalar o SenseCAP Hotspot App.

2. Crie uma conta SenseCAP com seu e-mail ou faça login diretamente.

<div style={{textAlign: 'center'}}><a href="https://app.sensecapmx.com/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png" alt="app" width={600} height="auto" /></a></div>

3. Zelcore App é lançado pela Flux para encontrar, gerenciar, negociar e realmente possuir seus ativos digitais, **FluxNode** e informações. Clique na figura a seguir para instalar o Zelcore App.

<div style={{textAlign: 'center'}}><a href="https://zelcore.io/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png" alt="zelcore" width={600} height="auto" /></a></div>

### Etapa 3 Configurar o SenseCAP M4

1. Pressione o pino na parte inferior esquerda do dispositivo e a tampa de extremidade será levantada; em seguida, retire-a.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png" alt="setup1" width={600} height="auto" /></div>

2. Pressione o botão B1 por 5 s até o indicador L2 piscar em azul para ativar o modo de configuração por Bluetooth.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png" alt="setup2" width={600} height="auto" /></div>

3. Selecione Flux e clique em Setup no SenseCAP Hotspot App

- Escaneie o dispositivo via Bluetooth
- Selecione o dispositivo para conectar

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg" alt="setup3" width={600} height="auto" /></div>

4. O App se conecta ao dispositivo com sucesso. Agora clique no botão install para instalar o Flux dApp no dispositivo.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png" alt="setup4" width={600} height="auto" /></div>

### Etapa 4 Implantar Flux Node

1. A instalação do Flux dApp está concluída, agora clique no botão Open e comece a implantar o FluxNode CUMULUS.

**Observação: compre 1000 Flux como garantia e transfira-os para suas carteiras Zelcore Flux para a configuração do FluxNode CUMULUS.**

**Guia**

- [Guia de Configuração do FluxNode](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)
- [Guia em Vídeo de Configuração do Flux Light Node (o tutorial de configuração do Zelcore e depósito de Flux é de 8:07 a 12:30)](https://www.youtube.com/watch?v=RT1uaSrurv4)

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png" alt="deploy1" width={600} height="auto" /></div>

2. Insira Identity Key, Collateral TX ID, Output Index, Zel ID e Kadena Address a partir do Zelcore APP, por favor baixe o Zelcore para mais informações.

> **Identity Key**: clique em Apps > clique em FluxNodes na página Apps > clique no seu FluxNode > clique em edit no menu expandido > clique em Identity Key para copiá-la
>
> **Collateral TX ID**: clique em Apps > clique em FluxNodes na página Apps > clique no seu FluxNode > clique em Edit no menu expandido > clique em Collateral TX ID para copiá-lo
>
> **Output Index**: clique em Apps > clique em FluxNodes na página Apps > clique no seu FluxNode > clique em Edit no menu expandido > clique em Output Index para copiá-lo
>
> **Zel ID**: clique em Apps > clique em Zel ID na página Apps > clique no QR code para copiar o Zel ID
>
> **Kadena Address**: NIMBUS e STRATUS podem inserir o Kadena address para obter recompensas adicionais em KDA. Se você implantar CUMULUS não precisa inseri-lo. Clique em Portfolio > clique em Show Zero Sum na página > clique em Kadena > clique em Details > clique em Receive action > clique em QR code para copiar o Kadena address

3. Clique em Start Deploy e então o SenseCAP M4 implantará o FluxNode automaticamente. O tempo de implantação depende da rede do dispositivo, certifique-se de que o dispositivo tenha uma boa conexão de rede. Agora o App pode se desconectar do SenseCAP M4 ou continuar monitorando o progresso da implantação com o App.

**Observação: certifique-se de que a rede do seu dispositivo tenha um IP público e DownloadSpeed >= 25 Mb/s e UploadSpeed >= 25 Mb/s. Caso contrário, o benchmark do Flux falhará.**

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png" alt="deploy2" width={600} height="auto" /></div>

4. Quando começar a sincronizar a cadeia Flux, acesse o Zelcore App e insira o IP público e o nome no seu FluxNode. Em seguida, clique no botão Start para iniciar seu FluxNode.

Se o seu FluxNode estiver funcionando bem e passando nos benchmarks, levará 1 bloco para ser minerado para o status do seu FluxNode mudar para Started e de 1 a 10 blocos (2 a 20 minutos) para ficar Confirmed. Confirmed é o status final. Você pode verificar no FluxOS atualizando a página inicial; se o nó for Confirmed, isso será indicado na página Status.

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png" alt="deploy3" width={600} height="auto" /></div>

## Recursos Avançados

Configuração UPnP
------------

UPnP significa universal plug and play, o que essencialmente permite que dispositivos na sua rede solicitem ao roteador a abertura de portas para tráfego de entrada. UPnP pode ser uma solução mais fácil se o seu roteador for compatível e seguir os padrões adequados de upnp.

Se você quiser implantar vários SenseCAP M4 Squares em um único endereço IP externo, certifique-se de que **o roteador ao qual o dispositivo está conectado suporte UPnP e que ele esteja ativado.**

Observação: um único endereço IP externo **suporta no máximo a implantação de 8 FluxNodes**.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

- 1 SenseCAP M4 Square implantou FluxNode

- 2 SenseCAP Hotspot App conecta M4 via Bluetooth

- 3 Clique no ícone de configuração e em UPnP Setting

- 4 Ative o UPnP e escolha uma porta que não esteja em uso

- 5 Clique em confirmar e envie a configuração

- 6 Agora o UPnP do M4 está ativado e o status do UPnP é ENABLE

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Configuração Fractus
---------------

O nó Fractus nasceu para aumentar o armazenamento da rede Flux. Um nó Fractus é um nó de nível Cumulus que fornece pelo menos 10TB de armazenamento. Nós Fractus ganharão 15% adicionais de Flux além da recompensa nativa de bloco Flux.

Requisitos mínimos para executar nós Fractus：

- Um colateral de 1000 Flux.
- 2 núcleos de CPU.
- 4 threads de CPU.
- 240 eventos de CPU por segundo.
- 9250 GB de armazenamento em uma única partição (Raid permitido).
- 80MB/s de velocidade de gravação em disco.
- 100Mb/s de download/upload.

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

- 1 SenseCAP M4 Square implantou FluxNode
- 2 Conecte uma unidade de 10TB à porta USB3.1 do SenseCAP M4 Square
- 3 App SenseCAP Hotspot conecta ao M4 via Bluetooth
- 4 Clique no ícone de configuração e em Configuração Fractus
- 5 Ative o Fractus e clique em Confirm para enviar a configuração
- 6 Agora o Fractus do M4 está aberto e o status do Fractus é True

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

Adicionar ao Dashboard
----------------

Para mais informações sobre seu SenseCAP M4 Square, adicione-o ao dashboard do SenseCAP.

- Adicionar diretamente: Na página FluxNode, clique no ícone + e insira o nome personalizado e o SN (na etiqueta do dispositivo) para adicionar seu dispositivo ao Dashboard

- Adicionar via Bluetooth: se seu M4 tiver implantado FluxNode, conecte o M4 com o App SenseCAP Hotspot via Bluetooth e então adicione-o ao dashboard.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

Restaurar Bloco
-------------

Conecte o M4 com o App SenseCAP Hotspot via Bluetooth e então abra o app Flux e clique no botão Restore Block. O M4 restaurará os blocos automaticamente e não há necessidade de outras etapas. O tempo de restauração depende da rede do dispositivo, certifique-se de que o dispositivo tenha uma boa conexão de rede.

Excluir
------

**Por favor, opere com cuidado!** Exclua o FluxNode CUMULUS que foi implantado no SenseCAP M4. Conecte o M4 com o App SenseCAP Hotspot via Bluetooth e então abra o app Flux e clique no botão Delete para excluir o FluxNode.

Reimplantar
--------

**Por favor, opere com cuidado!** Reimplantar excluirá automaticamente primeiro o FluxNode implantado. Conecte o M4 com o App SenseCAP Hotspot via Bluetooth e então abra o app Flux e clique no botão Redeploy e insira as novas informações do FluxNode para reimplantar.

**Lista de Apps Descentralizados Suportados**
====================================

- Flux Cumulus Node

- Flux Cumulus Fractus (TBD)

**Configuração de Rede do Flux Cumulus Node**
===========================================

Para garantir o funcionamento adequado do seu Flux Node, certifique-se de configurar sua rede de forma apropriada. Abaixo cobriremos os requisitos de rede para nós únicos e multi-nós.

**Requisitos**

- Um endereço IP externo. O número máximo de Flux nodes suportados em um único endereço IP externo é 8. Se você tiver mais de oito dispositivos, poderá precisar de mais endereços IP externos

- Ambiente de rede cabeada estável, largura de banda ≥25 Mbps

- Roteador com suporte a UPNP e funções de encaminhamento de porta, para encaminhar portas para o dispositivo.

**Configurar Nó Único**

[Refer to the flux official documentation](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**Configurar Multi-nó**

SenseCAP M4 Square não suporta múltiplos FluxNodes
