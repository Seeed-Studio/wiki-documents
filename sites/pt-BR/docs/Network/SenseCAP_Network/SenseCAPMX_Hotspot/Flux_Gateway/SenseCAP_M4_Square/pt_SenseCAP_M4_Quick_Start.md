---
description: Guia Rápido SenseCAP M4
title: Guia Rápido SenseCAP M4
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start/
---

**Guia Rápido SenseCAP M4 Square**
==================================

**SenseCAP M4 Square** oferece a maneira mais fácil de implantar a Rede Computacional de Próxima Geração (FluxNode). Sem comandos Linux, sem necessidade de construir um ambiente, e apenas 4 etapas para concluir a implantação.

**Pré‑requisitos**

*   Velocidade de upload de rede suficiente para implantar um FluxNode CUMULUS **(25 Mbps de upload no mínimo**)

*   Um novo FluxNode CUMULUS criado


o que você precisa
=============

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png)

Fazer stake do Nó Flux CUMULUS
=======================

Este tutorial usa a Binance como exemplo

Etapa 1 Acesse a corretora para comprar Flux
------------------------------------

1 Baixe o [Binance App](https://www.binance.com/zh-CN/download) e registre uma conta

2 Flux não pode ser comprado com moeda fiduciária. Primeiro compre USDT e depois converta USDT em Flux

4 Na página Trade, selecione spot e no Market selecione FLUX/USDT

5 Insira o número de USDT e certifique‑se de que o Flux convertido seja maior que 1000

6 Clique no botão Buy, agora você comprou Flux com sucesso

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg)

Etapa 2 Baixe o Zelcore App e registre sua conta
--------------------------------------------------------

1 Baixe o [Zelcore App](https://zelcore.io/) e faça login na sua conta Zelcore

2 Na página Portfolio, clique no botão Add Assets para adicionar o ativo FLUX BSC (Payments portfolio)

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png)

Etapa 3 Saque Flux da Binance para a Carteira Zelcore
--------------------------------------------------

1 Abra o Binance App e acesse a página Wallet

2 Acesse Flux, clique em Withdraw e selecione Send via Crypto Network

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200)

3 Insira as informações de saque e envie

*   Address: Abra o Zelcore App, copie o endereço de recebimento FLUX BSC e cole na Binance


![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908)

*   Network: Selecione BB Smart Chain (BEP20)

*   Amount: 1000+ Flux

*   Send From: Spot&Funding Wallet


![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200)

4 Verifique suas informações de saque e envie para o Zelcore

Etapa 4 Crie um novo Flux Cumulus Node
------------------------------------

1 Abra o Zelcore App e verifique se o seu Flux foi enviado para o seu ativo FLUX BSC (Payments portfolio)

2 Acesse a página Apps e abra Fusion para trocar FLUX BSC por Flux (Payments portfolio).

*   Sell Asset: Selecione FLUX BSC

*   Buy Asset: Selecione FLUX


Nota: Certifique‑se de ter BNB suficiente para cobrir a taxa de swap

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200)

3 Envie o Flux do Payments portfolio para outro portfolio, como o ativo Flux de Mining

4 Agora você pode implantar o novo nó Flux Cumulus no SenseCAP M4 Sqaure!

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882)

Implantar FluxNode no SenseCAP M4 Square
=====================================

**Etapa 1 Ligar e conectar à internet**
------------------------------------------

1 Conecte o adaptador de energia 12V/2A fornecido ao conector de alimentação DC‑IN.

2 Conecte o cabo de rede ao Ethernet2.

3 O dispositivo será configurado automaticamente. A luz laranja fixa em L3 indica que a configuração e a conexão à internet foram bem‑sucedidas.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png)

**Etapa 2 Instale o SenseCAP Hotspot App e o Zelcore App**
------------------------------------------------------

1 O SenseCAP Hotspot App foi projetado para configurar e gerenciar dispositivos. Escaneie o QR code a seguir para instalar o SenseCAP Hotspot App.

2 Cadastre uma conta SenseCAP com seu e‑mail ou faça login diretamente.

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png)](https://app.sensecapmx.com/)

3 O Zelcore App é lançado pela Flux para encontrar, gerenciar, negociar e realmente possuir seus ativos digitais, **FluxNode** e informações. Clique na imagem a seguir para instalar o Zelcore App.

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png)](https://zelcore.io/)

**Etapa 3 Configurar SenseCAP M4**
----------------------------

1 Pressione o pino na parte inferior esquerda do dispositivo e a tampa da extremidade será levantada, então remova‑a.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png)

2 Pressione o botão B1 por 5 s até que o indicador L2 pisque em azul para ativar o modo de configuração por Bluetooth.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png)

3 Selecione Flux e clique em Setup no SenseCAP Hotspot App

*   Escaneie o dispositivo via Bluetooth

*   Selecione o dispositivo para conectar


![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg)

4 O app se conecta ao dispositivo com sucesso. Agora clique no botão install para instalar o Flux dApp no dispositivo.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png)

**Etapa 4 Implantar Flux Node**
--------------------------

1 A instalação do Flux dApp está concluída, agora clique no botão Open e comece a implantar o FluxNode CUMULUS.

**Nota: Compre 1000 Flux como garantia e transfira‑os para suas carteiras Zelcore Flux para a configuração do FluxNode CUMULUS.**

**Guia**

*   [Guia de Configuração FluxNode](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)

*   [Guia em Vídeo de Configuração do Flux Light Node (o tutorial de Configuração do Zelcore e Depósito de Flux é de 8:07 a 12:30)](https://www.youtube.com/watch?v=RT1uaSrurv4)


![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png)

2 Insira Identity Key, Collateral TX ID, Output Index, Zel ID e Kadena Address a partir do Zelcore APP, faça o download do Zelcore para mais informações.

>     **Identity Key**：clique em Apps > clique em FluxNodes na página Apps > clique no seu FluxNode > clique em edit no menu expandido > clique em Identity Key para copiá‑la
> 
>     **Collateral TX ID**：clique em Apps > clique em FluxNodes na página Apps > clique no seu FluxNode > clique em Edit no menu expandido > clique em Collateral TX ID para copiá‑lo
> 
>     **Output Index**：clique em Apps > clique em FluxNodes na página Apps > clique no seu FluxNode > clique em Edit no menu expandido > clique em Output Index para copiá‑lo
> 
>     **Zel ID**：clique em Apps > clique em Zel ID na página Apps > clique no QR code para copiar Zel IDdsdsdsssddss
> 
>     **Kadena Address**：NIMBUS e STRATUS podem inserir o endereço Kadena para obter recompensas adicionais em KDA. Se você implantar CUMULUS não precisa inseri‑lo.   clique em Portfolio > clique em Show Zero Sum na página > clique em Kadena > clique em Details > clique em Receive action > clique em QR code para copiar o endereço Kadena

3 Clique em Start Deploy, então o SenseCAP M4 implantará o FluxNode automaticamente. O tempo de implantação depende da rede do dispositivo, certifique‑se de que o dispositivo tenha uma boa conexão de rede. Agora o App pode se desconectar do SenseCAP M4 ou manter o monitoramento do progresso da implantação com o App.

**Nota: Certifique‑se de que a rede do seu dispositivo tenha um IP público e DownloadSpeed >= 25 Mb/s e UploadSpeed >= 25 Mb/s. Caso contrário, o benchmark do Flux falhará.**

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png)

4 Quando começar a sincronizar a cadeia Flux, acesse o Zelcore App e insira o IP público e o nome no seu FluxNode. Em seguida, clique no botão Start para iniciar seu FluxNode.

Se o seu FluxNode estiver funcionando bem e passando nos benchmarks, levará 1 bloco a ser minerado para o status do seu FluxNode mudar para Started e de 1 a 10 blocos (2 a 20 minutos) para ficar Confirmed. Confirmed é o status final. Você pode verificar no FluxOS atualizando a página inicial; se o nó ficar Confirmed, isso será mostrado na página Status.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png)

**Recursos Avançados**
=====================

Configuração UPnP
------------

UPnP significa universal plug and play, o que essencialmente permite que dispositivos na sua rede solicitem que portas sejam abertas pelo seu roteador para tráfego de entrada. O UPnP pode ser uma solução mais fácil se o seu roteador for compatível e seguir os padrões adequados de UPnP.

Se você quiser implantar múltiplos SenseCAP M4 Square em um único endereço IP externo, certifique‑se de que **o roteador ao qual o dispositivo está conectado suporte UPnP e que ele esteja ativado.**

Nota: um único endereço IP externo **suporta no máximo a implantação de 8 FluxNodes**.

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

*   1 SenseCAP M4 Square implantou FluxNode

*   2 SenseCAP Hotspot App conecta ao M4 via Bluetooth

*   3 Clique no ícone de configuração e em UPnP Setting

*   4 Ative UPnP e escolha uma porta que não esteja em uso

*   5 Clique em confirm e envie a configuração

*   6 Agora o UPnP do M4 está ativado e o status UPnP é ENABLE


![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Configuração Fractus
---------------

O nó Fractus nasceu para aumentar o armazenamento da rede Flux. Um nó Fractus é um nó de nível Cumulus que fornece pelo menos 10 TB de armazenamento. Nós Fractus ganharão 15% adicionais de Flux além da recompensa nativa de bloco Flux.

Requisitos mínimos para executar nós Fractus：

*   Um colateral de 1000 Flux.
*   2 núcleos de CPU.
*   4 Threads de CPU.
*   240 eventos de CPU por segundo.
*    9250 GB de armazenamento em uma única partição (Raid permitido).
*    80 MB/s de velocidade de escrita em disco.
*   100 Mb/s de download/upload.

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

*   1 SenseCAP M4 Square implantou FluxNode
*   2 Conecte um drive de 10 TB na porta USB3.1 do SenseCAP M4 Square
*   3 SenseCAP Hotspot App conecta ao M4 via Bluetooth
*   4 Clique no ícone de configuração e em Fractus Setting
*   5 Ative Fractus e clique em Confirm para enviar a configuração
*   6 Agora o Fractus do M4 está ativado e o status do Fractus é True

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

Adicionar ao Dashboard
----------------

Para mais informações sobre o seu SenseCAP M4 Square, adicione-o ao dashboard do SenseCAP.

*   Adicionar diretamente: na página do FluxNode, clique no ícone + e insira o nome personalizado e o SN (na etiqueta do dispositivo) para adicionar seu dispositivo ao DashboardAdicionar via Bluetooth

*   Adicionar via Bluetooth: se o seu M4 tiver implantado o FluxNode, conecte o M4 com o SenseCAP Hotspot App via Bluetooth e então adicione-o ao dashboard.


![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

Restaurar Bloco
-------------

Conecte o M4 com o SenseCAP Hotspot App via Bluetooth e então abra o aplicativo Flux e clique no botão Restore Block. O M4 restaurará os blocos automaticamente e não há necessidade de outros passos. O tempo de restauração depende da rede do dispositivo, certifique-se de que o dispositivo tenha uma boa conexão de rede.

Excluir
------

**Por favor, opere com cuidado!** Exclua o CUMULUS FluxNode que foi implantado no SenseCAP M4. Conecte o M4 com o SenseCAP Hotspot App via Bluetooth e então abra o aplicativo Flux e clique no botão Delete para excluir o FluxNode.

Reimplantar
--------

**Por favor, opere com cuidado!** Reimplantar excluirá automaticamente primeiro o FluxNode implantado. Conecte o M4 com o SenseCAP Hotspot App via Bluetooth e então abra o aplicativo Flux e clique no botão Redeploy e insira as novas informações do FluxNode para reimplantar.

**Lista de Aplicativos Descentralizados Suportados**
====================================

*   Flux Cumulus Node

*   Flux Cumulus Fractus (TBD)


**Configuração de Rede do Flux Cumulus Node**
===========================================

Para garantir o funcionamento adequado do seu Flux Node, certifique-se de configurar sua rede corretamente. Abaixo abordaremos os requisitos de rede para nós únicos e múltiplos.

**Requisitos**

*   Um endereço IP externo. O número máximo de nós Flux suportados em um único endereço IP externo é 8. Se você tiver mais de oito dispositivos, talvez precise de mais endereços IP externos

*   Ambiente de rede cabeada estável, largura de banda ≥25 Mbps

*   Roteador que suporte funções UPNP e encaminhamento de porta, para encaminhar portas para o dispositivo.


**Configurar Nó Único**

[Refer to the flux official documentation](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**Configurar Vários Nós**

SenseCAP M4 Square não suporta vários FluxNodes