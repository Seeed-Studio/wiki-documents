---
description: Solução de Problemas do SenseCAP M1
title: Solução de Problemas do SenseCAP M1
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Troubleshooting
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_Troubleshooting/
---


Solução de Problemas do SenseCAP M1
===========================

Problemas Relacionados ao Hardware
================

* * *

**LED azul não pisca**
------------------------

![SenseCAP M1 Blue LED](https://www.sensecapmx.com/wp-content/uploads/2022/07/blue-led-1.webp)

![SenseCAP M1 Blue LED Not Good](https://www.sensecapmx.com/wp-content/uploads/2022/08/back-front-led-m1.png)

**Etapas de solução de problemas**

1.  Verifique se o LED ETH está piscando. Se as luzes verde e amarela do ETH estiverem acesas e o LED azul estiver apagado, **[por favor grave primeiro um novo cartão SD](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#how-to-flash-a-new-image-to-a-new-micro-sd-card)**. Se a luz azul ainda estiver apagada, isso será um defeito de hardware.
2.  Se os LEDs verde e amarelo estiverem apagados, tente certificar-se de que o adaptador de energia está bom. Você pode verificar substituindo-o por um carregador de telefone 5V-3A com um cabo tipo C e um novo cabo de rede para ver se o problema foi resolvido.
3.  Se o hotspot se conectar à internet via Wi-Fi, verifique se a luz vermelha está acesa através do painel frontal; se não estiver, isso será um defeito de hardware.

* * *

Problemas Relacionados à Rede
===============

* * *

**Não é possível conectar à Internet?**
--------------------------------------

Ter a sua configuração de rede configurada corretamente desempenha um papel importante. Certifique-se de ler todos os detalhes abaixo para garantir a configuração adequada.

Os Hotspots Helium podem não funcionar se o Hotspot estiver atrás de um firewall ou usar um tipo de NAT incompatível, conforme descrito abaixo. Em outros casos, isso pode ser devido à configuração do roteador/configuração de rede ou simplesmente porque sua conexão está offline (sem Internet).

**Observação**: Se você não conseguir configurar corretamente a rede ou se as etapas abaixo não funcionarem para você, visite nosso >> Canal Oficial no Discord para mais orientações.

**Etapas de solução de problemas - Conexão Ethernet**

**Verifique seus cabos Ethernet se não estiver usando Wi-Fi**: Certifique-se de que o cabo Ethernet esteja firmemente conectado ao Hotspot a partir do seu roteador/modem.

*   **Luzes âmbar piscando ao lado da porta Ethernet no Hotspot**: Conexão estável estabelecida.
*   Se você não vir luzes âmbar piscando na porta Ethernet, tente usar um cabo diferente, pois os cabos tendem a falhar com o tempo.

**Verifique sua conexão com a Internet**: Verifique se você consegue conectar-se à Internet a partir de sua localização usando seu computador de mesa/notebook/telefone, na mesma rede. Se você não conseguir conectar-se à Internet, precisará entrar em contato com seu Provedor de Serviços de Internet (ISP) para assistência adicional em relação à sua conexão.

**Etapas de solução de problemas - Conexão Wi-Fi**

*   **Se você estiver usando Wi-Fi**: Confirme se consegue conectar-se à sua rede sem fio com sua senha de segurança WEP ou WPA (também conhecida como senha do Wi-Fi). Se você não souber como conectar ou acessar seu modem sem fio, precisará entrar em contato diretamente com o fabricante do equipamento.
*   Se você não conseguir conectar-se à internet, reinicie o roteador. Desconecte o Hotspot e o roteador da tomada ou filtro de linha por 2 minutos. Em seguida, conecte-os novamente para ver se você consegue conectar-se à Internet.

* * *

**Como conectar o Hotspot ao Wi-Fi do meu telefone?**
--------------------------------------------------

**Este exemplo é mostrado abaixo para dispositivos Apple iOS.**

*   Encontre "**Settings**" no seu telefone.
*   Clique em "**Personal** **Hotspot**".

![iOS Personal Hotspot](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot.png)

*   Ative para permitir que outros se conectem.
*   Faça o pareamento do seu Hotspot.
*   Conecte seu Hotspot ao nome do Hotspot Pessoal do seu telefone Apple iOS.

![iOS Hotspot Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-setup.png)

Agora você pode parear seu Gateway SenseCAP ao hotspot pessoal do seu telefone via Wi-Fi para solucionar problemas de atualização de firmware e conectividade de rede.

* * *

Problemas Relacionados ao Cartão SD
===============

* * *

**Como substituir o arquivo 'config.json'**
-----------------------------------------

**PROCEDA COM CUIDADO**: As etapas a seguir devem ser usadas SOMENTE se você tiver sido orientado por nossa Equipe de Suporte Técnico. Você não precisa repetir estas etapas se **NÃO** tiver sido orientado.

**OBSERVAÇÃO:** **NÃO** use os mesmos arquivos '**config.json**' para outros Hotspots. Cada Hotspot tem um arquivo '**config.json**' exclusivo vinculado ao seu número de série.

* * *

**Instruções**

As instruções abaixo irão ajudá-lo a substituir o arquivo 'config.json' no cartão Micro SD. Se você perceber que o dispositivo está travado em um firmware/versão antiga e considerar que isso pode ser um erro potencial causando a falha, siga as instruções para resolver o problema.

**OBSERVAÇÃO**: Verifique primeiro sua conexão com a Internet para garantir que o problema não esteja relacionado à Internet antes de seguir as etapas abaixo para substituir o cartão micro SD.

* * *

**Requisitos**

1.  Cartão Micro SD no seu Hotspot SenseCAP M1
2.  Leitor de Cartão Micro SD
3.  Chave de fenda
4.  O arquivo '**config.json**' copiado do cartão original

**Observação**: Peça aos nossos Agentes de Suporte Técnico que forneçam um para você se não conseguir recuperar o original.

![Swap Config.json File Requirements](https://www.sensecapmx.com/wp-content/uploads/2022/07/requirements-sd-flash.png)

_Itens necessários_

* * *

**Etapas**

*   **Etapa 1**: Desligue o seu Hotspot
*   **Etapa 2**: Remova a antena
*   **Etapa 3**: vire para o lado frontal do painel

![Config.json File Swap 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step1-1.png)

*   **Etapa 4**: Use a chave de fenda para afrouxar os dois parafusos na frente do painel

![Config.json File Swap 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step2-1.png)

*   **Etapa 5**: Remova o painel frontal e coloque-o de lado

![Config.json File Swap 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step3-1.png)

*   **Etapa 6**: Remova o selo amarelo em cima do cartão Micro SD usando uma pinça e puxe o cartão Micro SD

![Config.json File Swap 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step4-1.png)

![Config.json File Swap 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/step5-1.png)

![Config.json File Swap 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/step6-1.png)

*   **Etapa 7**: Conecte o cartão Micro SD a um leitor de cartões e conecte ao seu computador

![Config.json File Swap 7](https://www.sensecapmx.com/wp-content/uploads/2022/07/step7-1.png)

![Config.json File Swap 7B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step8-1.png)

**OBSERVAÇÃO**: Se você estiver usando um sistema operacional Windows e for exibida a mensagem "**You need to format the disk in drive** "**X**" before you can use it", clique em "**Cancel**", caso contrário, os dados do seu cartão Micro SD serão apagados.

![Format SD Card](https://www.sensecapmx.com/wp-content/uploads/2022/07/format-1.png)

_Aviso do Windows ao inserir o Cartão Micro SD_

*   **Etapa 8**:  Agora você verá que há um arquivo '**config.json'** na pasta '**resin-boot**'; abra-o usando o Bloco de Notas para confirmar que está vazio.

Se ele **NÃO** estiver vazio, há um problema de OTA (atualização over the air) causado pelo arquivo de configuração; trata-se de um problema de conexão de rede. Verifique suas configurações de rede e de segurança/firewall.

Se ele **ESTIVER** vazio, substitua-o usando o novo arquivo 'config.json' que fornecemos para substituição.

![Empty config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/config-1.png)

*   **Etapa 9**: Se o arquivo '**config.json**' estiver vazio, você precisará substituí-lo pelo que fornecemos. Arraste o novo arquivo para o disco e clique em 'Replace'.

**OBSERVAÇÃO**: Não exclua nenhum outro arquivo, caso contrário, isso causará problemas inesperados com o seu SenseCAP M1.

**OBSERVAÇÃO**: Cada dispositivo tem um arquivo 'config.json' diferente registrado nele; não compartilhe seu arquivo 'config.json' com outras pessoas nem use arquivos de outras pessoas.

**Para MacOS**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - Copiar_ 'config.json' _Arquivo_

![MacOS Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**Para Windows**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - Copiar arquivo "config.json"_

![Windows Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

**Observação**: É recomendável verificar duas vezes se há conteúdo dentro do arquivo '**config.json**' depois de copiá-lo, simplesmente abrindo-o no Bloco de Notas.

*   **Etapa 10**: Coloque o cartão Micro SD de volta dentro do Hotspot

**DICA**: Monte o painel frontal depois de confirmar que o seu Hotspot está ligado e funcionando.

![Put Together SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step10-1.png)

![Put Together SenseCAP M1 - 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step11-1.png)

![Put Together SenseCAP M1 - 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step12-1.png)

![Put Together SenseCAP M1 - 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step13-1.png)

*   **Etapa 11**: Monte a antena e ligue o seu Hotspot

Ligue o SenseCAP M1, conecte-o à internet (de preferência com cabo ethernet), aguarde cerca de 20 minutos para as atualizações OTA e verifique o status no Dashboard ([**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/)) ou execute diagnósticos no aplicativo Helium.

Se você tiver quaisquer outros problemas ou dúvidas, abra um chamado aqui: [**https://support.sensecapmx.com**](https://support.sensecapmx.com)

* * *

**Como gravar uma nova imagem em um novo cartão Micro SD**
---------------------------------------------------

**PROCEDA COM CUIDADO**: As etapas a seguir devem ser usadas SOMENTE se você tiver sido orientado por nossa Equipe de Suporte Técnico. Você não precisa repetir estas etapas se **NÃO** tiver sido orientado.

Devido ao uso incorreto de Hotspots por usuários, descobrimos que ciclos frequentes de ligar e desligar, conectar e desconectar o cartão micro SD podem resultar em erros desconhecidos no cartão micro SD, como desalinhamento do sistema de arquivos.

**Se você foi orientado a substituir o cartão micro SD para depurar o problema, siga cuidadosamente as instruções abaixo.**

* * *

**Instruções**

As instruções fornecidas abaixo irão ajudá‑lo a gravar imagens em um novo cartão micro SD e substituir o original no SenseCAP M1, a fim de corrigir o problema causado por possíveis erros no cartão micro SD.

**OBSERVAÇÃO**: Verifique primeiro sua conexão com a Internet para ter certeza de que o problema não está relacionado à Internet antes de seguir as etapas abaixo para substituir o cartão micro SD.

* * *

**Requisitos**

**Observação**: Agora temos disponível o kit de substituição do cartão SD, que você pode comprar clicando [**aqui**](https://www.seeedstudio.com/SenseCAP-M1-SD-Card-Replacement-Kit-p-5279.html) .

![Kit de Substituição de Cartão SD do SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_O kit inclui uma chave de fenda, um leitor de cartão MicroSD, um cartão MicroSD de 64GB e uma instrução sobre como substituir o MicroSD._

1.  Novo cartão Micro SD (SanDisk High Endurance 64GB)
2.  Leitor de cartão Micro SD
3.  Chave de fenda
4.  O arquivo '**config.json**' copiado do cartão original  
    1.  **Observação**: Solicite aos nossos Agentes de Suporte Técnico que forneçam um para você, caso não consiga recuperar o original.

* * *

**Etapas**

1.  Desligue o dispositivo, abra o painel frontal, remova o adesivo amarelo na parte superior do cartão micro SD (você pode usar uma pinça) e desligue e retire o cartão micro SD original.
2.  Conecte o cartão micro SD original ao computador com um leitor de cartão micro SD e copie o arquivo 'config.json' da partição "resin-boot" do cartão SD de origem, salvando‑o no computador  
    1.  **Observação**: Solicite aos nossos Agentes de Suporte Técnico que forneçam um para você, caso não consiga recuperar o original.
3.  Baixe a **Imagem SenseCap M1** aqui: [**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
4.  Baixe a **ferramenta Balena Etcher** aqui: [**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)
5.  Grave a **Imagem SenseCap M1** no novo cartão micro SD com o Balena Etcher.
6.  Copie o arquivo "**config.json**" que fornecemos do seu computador para a partição "**resin-boot**" do novo cartão micro SD após a gravação.
7.  Desconecte o novo cartão micro SD do computador e conecte‑o ao SenseCap M1.
8.  Ligue o SenseCap M1, conecte‑o à Internet (de preferência com cabo Ethernet), aguarde 20 minutos para as atualizações e verifique o status no Dashboard ([**https://status.sensecapmx.cloud**](https://status.sensecapmx.cloud/)/) ou execute diagnósticos no aplicativo Helium.

**Observação**: Você só deve montar o painel frontal do Hotspot depois de confirmar que o seu Hotspot está OK.

* * *

**Como Abrir o SenseCAP M1 e Substituir o Cartão Micro SD**

*   **Etapa 1:** Desligue o seu Hotspot e, em seguida, remova a antena.

![SenseCAP M1 Cartão SD Etapa 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **Etapa 2**:  Use a chave de fenda para afrouxar os dois parafusos no painel frontal.

![SenseCAP M1 Cartão SD Etapa 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **Etapa 3**:  Mova o painel frontal e coloque‑o de lado.

![SenseCAP M1 Cartão SD Etapa 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **Etapa 4**:  Remova o adesivo amarelo na parte superior do cartão Micro SD (você pode usar uma pinça).

![SenseCAP M1 Cartão SD Etapa 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 Cartão SD Etapa 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**Como Ler o Micro SD e Gravar a Imagem**

*   **Etapa 1**: Conecte um novo cartão Micro SD ao leitor de cartão Micro SD.

![SenseCAP M1 Imagem de Cartão SD Etapa 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_Novo Cartão Micro SD no Leitor de Cartão Micro SD_

![SenseCAP M1 Imagem de Cartão SD Etapa 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_Certifique‑se de que esteja totalmente conectado_

*   **Etapa 2**: Grave a Imagem SenseCAP M1 no novo cartão Micro SD com o Balena Etcher.
    *   Baixe a **Imagem SenseCap M1** aqui: [**sensecap-m1.img.zip**](https://drive.google.com/file/d/1fZf09U2_jQOpsSKPWc8TAZ_Jl82X9tzx/view?usp=sharing)
    *   Baixe a **ferramenta Balena Etcher** aqui: [**balenaEtcher - Flash OS images to SD cards & USB drives ​**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_Selecione com Base no Seu Sistema Operacional_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_Arraste o Arquivo Image.ZIP para o Balena Etcher_

*   **Etapa 3**:  Após gravar a imagem com sucesso no cartão MicroSD, copie o arquivo "config.json" que fornecemos/ou que você copiou originalmente, do seu computador para uma partição chamada "resin-boot".

**Para MacOS**

![MacOS Copiar Arquivo Config.json](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - Copiar Arquivo '_config.json'_

**Para Windows**

![Windows Copiar Arquivo Config.json](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

*   **Etapa 4**: Desconecte o novo cartão Micro SD do computador.
*   **Etapa 5**: Conecte o novo cartão Micro SD ao seu SenseCAP M1.

![SenseCAP M1 Cartão SD Etapa 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **Etapa 6**: Ligue o SenseCAP M1 e reconecte‑o à Internet (de preferência com cabo Ethernet).
*   **Etapa 7**: Aguarde aproximadamente ~20 minutos para aplicar as atualizações e verifique o Dashboard (**[https://status.sensecapmx.cloud/)](https://status.sensecapmx.cloud/))** ou execute diagnósticos no aplicativo Helium depois que isso for concluído.

![SenseCAP M1 Cartão SD Etapa 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**Observação**: Você só deve montar o painel frontal do Hotspot depois de confirmar que o seu Hotspot está OK.

Caso tenha quaisquer problemas ou dúvidas adicionais, abra um ticket aqui: [**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

**Como Formatar o Cartão Micro SD e Gravar a Imagem**
-------------------------------------------------------

**PROSSIGA COM CUIDADO**: As etapas a seguir devem ser usadas SOMENTE se você tiver sido orientado pela nossa Equipe de Suporte Técnico. Você não precisa replicar essas etapas se **NÃO** tiver sido orientado.

Devido ao uso incorreto de Hotspots por usuários, verificamos que ciclos frequentes de energia, conectar e desconectar o cartão micro SD podem resultar em erros desconhecidos do cartão micro SD, como alinhamento do sistema de arquivos.

**Se você foi orientado a substituir o cartão micro SD para depurar o problema, siga cuidadosamente as instruções abaixo.**

* * *

**Instruções**

As instruções fornecidas abaixo irão ajudá‑lo a gravar imagens em um novo cartão micro SD e substituir o original no SenseCAP M1, a fim de corrigir o problema causado por possíveis erros no cartão micro SD.

**OBSERVAÇÃO**: Verifique primeiro sua conexão com a Internet para ter certeza de que o problema não está relacionado à Internet antes de seguir as etapas abaixo para substituir o cartão micro SD.

* * *

**Requisitos**

1.  Cartão Micro SD no seu Hotspot SenseCAP M1
2.  Leitor de cartão Micro SD
3.  Chave de fenda
4.  O arquivo '**config.json**' copiado do cartão original  
    1.  **Observação**: Solicite aos nossos Agentes de Suporte Técnico que forneçam um para você, caso não consiga recuperar o original.
5.  SD Card Formatter 5.0.1
6.  Para **Windows** => [**Clique aqui**](https://drive.google.com/file/d/15KMqnVpeOMRcFOYIRLbwA4CJooNsdkLM/view?usp=sharing) para baixar e instalar
7.  Para **Mac OS** => [**Clique aqui**](https://drive.google.com/file/d/1FjxMOdGDjW3iKx3COeexY7E2bpF2cqDy/view?usp=sharing) para baixar e instalar
8.  Imagem SenseCAP M1 => [**Clique aqui**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0) para baixar
9.  Balena Etcher => [**Clique aqui**](https://www.balena.io/etcher/) para baixar

![Kit de Substituição de Cartão SD do SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card.png)

_O kit inclui uma chave de fenda, um leitor de cartão MicroSD, um cartão MicroSD de 64GB e uma instrução sobre como substituir o MicroSD._

* * *

**Etapas**

1.  Desligue o dispositivo, abra o painel frontal, remova o adesivo amarelo na parte superior do cartão Micro SD e desconecte o cartão Micro SD.
2.  Conecte o cartão Micro SD ao computador com um leitor de cartão Micro SD e copie o arquivo '**config.json'** da partição "resin-boot", salvando‑o no computador.  
    1.  **Observação**: Solicite aos nossos Agentes de Suporte Técnico que forneçam um para você, caso não consiga recuperar o original.
3.  Formate o cartão MicroSD usando “**SD Card Formatter 5.0.1**”
4.  Grave a **Imagem SenseCap M1** no cartão MicroSD com o **Balena Etcher**.
5.  Copie o arquivo '**config.json**' do seu computador para a partição "**resin-boot**" do cartão Micro SD.
6.  Conecte novamente o cartão Micro SD do computador ao Hotspot SenseCap M1.
7.  Ligue o SenseCap M1, conecte‑o à internet (de preferência com cabo Ethernet), aguarde cerca de 20 minutos para as atualizações OTA e verifique o status no [**Dashboard**](https://docs.sensecapmx.com/home/sensecap-dashboard) ou execute diagnósticos no aplicativo Helium.

**Observação**: Você só deve montar o painel frontal do Hotspot depois de confirmar que o seu Hotspot está OK.

* * *

**Como Abrir o SenseCAP M1 e Substituir o Cartão Micro SD**

*   **Etapa 1:** Desligue o seu Hotspot e, em seguida, remova a antena.

![SenseCAP M1 Cartão SD Etapa 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-1.png)

*   **Etapa 2**:  Use a chave de fenda para afrouxar os dois parafusos no painel frontal.

![SenseCAP M1 Cartão SD Etapa 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2.png)

*   **Etapa 3**:  Mova o painel frontal e coloque‑o de lado.

![SenseCAP M1 Cartão SD Etapa 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3.png)

*   **Etapa 4**:  Remova o adesivo amarelo na parte superior do cartão Micro SD (você pode usar uma pinça).

![SenseCAP M1 Cartão SD Etapa 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4.png)

![SenseCAP M1 SD Card Step 4B](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4a.png)

* * *

**Como formatar o cartão Micro SD (Windows)**

*   **Passo 1****:** Conecte um novo cartão Micro SD no leitor de cartão Micro SD.  


![SenseCAP M1 SD Card Image Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-1.png)

_Novo cartão Micro SD no leitor de cartão Micro SD_

![SenseCAP M1 SD Card Image Step 1B](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-2.png)

_Certifique-se de que está totalmente conectado_

*   **Passo 2****:** Instale e execute o SD Card Formatter

![SD Card Formatter](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-formatter-1.png)

*   **Passo 3****:**  Selecione o cartão Micro SD que você conectou ao computador, escolha “Overwrite format”, digite “resin-boot” em Volume label e clique no botão “Format”  


![SD Card Formatter Resin-Boot Folder](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-resin-1.png)

*   **Passo 4****:**  Selecione "Yes" na janela de diálogo  


![Format SD Card](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-1-2.png)

*   **Passo 5**: Aguarde ~30-45 minutos e o processo de formatação será concluído

![SD Card Formatter Screen](https://www.sensecapmx.com/wp-content/uploads/2022/07/formatter-3-1.png)

* * *

**Como formatar o cartão Micro SD (MacOS)**

Os passos são semelhantes, veja as imagens abaixo:

![SD Card Formatter MacOS](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-1-1.png)

![SD Card Formatter MacOS Complete](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-formatter-2-1.png)

* * *

**Como gravar a imagem no cartão Micro SD**

*   Baixe a **SenseCap M1 Image** aqui: [**sensecap-m1-sd-version-20220213.img.zip**](https://drive.google.com/open?id=17nbsZ6wnQVxOh4KVfImaNwHNbdWz6LBh&authuser=0)
*   Baixe a ferramenta **Balena Etcher** aqui: [**balenaEtcher - Flash OS images to SD cards & USB drives**](https://www.balena.io/etcher/)

![Balena Etcher](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena.png)

_Selecione com base no seu sistema operacional_

![Balena Etcher 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/balena-2.png)

_Arraste o arquivo Image.ZIP para o Balena Etcher_

* * *

**Como adicionar o arquivo 'config.json' ao cartão Micro SD**
------------------------------------------------------

Depois de ter gravado a imagem com sucesso no cartão MicroSD, copie o arquivo "**config.json**" que fornecemos/ou que você copiou originalmente, do seu computador para a partição chamada "resin-boot".

**NOTA**: Por favor, NÃO delete nenhum outro arquivo, caso contrário, isso causará problemas inesperados com o seu SenseCAP M1.

**NOTA**: Cada dispositivo tem um arquivo '**config.json**' diferente registrado a ele, por favor não compartilhe seu arquivo '**config.json**' com outras pessoas nem use arquivos de outras pessoas.

**Para macOS**

![MacOS Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-1.png)

_MacOS - Copiar_ 'config.json' _arquivo_

![MacOS Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/macos-2.png)

**Para Windows**

![Windows Copy Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-1.png)

_Windows - Copiar arquivo 'config.json'_

![Windows Swap Config.json File](https://www.sensecapmx.com/wp-content/uploads/2022/07/windows-2.png)

* * *

**Após formatar o cartão Micro SD e gravar a imagem**
-------------------------------------------------------------

*   **Passo 1**: Desconecte o novo cartão Micro SD do seu computador.
*   **Passo 2**: Conecte o novo cartão Micro SD ao seu SenseCAP M1.

![SenseCAP M1 SD Card Step 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/sd-card-5.png)

*   **Passo 6**: Ligue o SenseCAP M1 e conecte-o novamente à Internet (de preferência com cabo Ethernet).
*   **Passo 7**: Aguarde aproximadamente ~20 minutos para aplicar as atualizações e verifique o Dashboard (**[https://status.sensecapmx.cloud/)](https://status.sensecapmx.cloud/))** ou execute diagnósticos no aplicativo Helium após a conclusão.

![SenseCAP M1 SD Card Step 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/diagnostics-1.png)

**Nota**: Você deve montar o painel frontal do Hotspot somente depois de confirmar que o seu Hotspot está OK.

Caso você tenha mais problemas ou dúvidas, abra um ticket aqui: [**https://support.sensecapmx.com/**](https://support.sensecapmx.com/)

* * *

Erro do aplicativo Helium
================

**Nenhuma Onboarding Key encontrada**
---------------------------

Abra um ticket de suporte aqui: [**https://support.sensecapmx.com**](https://support.sensecapmx.com) e envie o SN (número de série) do seu hotspot para que possamos resolver o seu problema.

![Helium App - No Onboarding Key Found](https://www.sensecapmx.com/wp-content/uploads/2022/07/onboarding.png)

* * *

**Nenhum Hotspot encontrado**
--------------------

"No Hotspots Found" mostrado no aplicativo Helium

**Passos de solução de problemas**

1.  Verifique primeiro o LED azul, ele deve estar em modo de piscada lenta.
2.  Caso contrário, isso indica que o seu SenseCAP M1 não habilitou o modo de configuração por Bluetooth. Verifique o seu hotspot e o seu telefone celular para ter certeza de que o Bluetooth foi ativado.
3.  Pressione o botão na parte de trás do SenseCAP M1 por 6-10 segundos para habilitar o modo de configuração do SenseCAP M1, você verá o LED azul mudar para o modo de piscada lenta (piscando 1 vez a cada 2 segundos), então verifique o hotspot novamente.

![Helium App Errors - Not Hotspots Found](https://www.sensecapmx.com/wp-content/uploads/2022/07/no-hotspots-found.png)

* * *

**Dispositivo desconectado**
-----------------------

O dispositivo foi desconectado ao emparelhar via Bluetooth

**Passos de solução de problemas**

Um problema de compatibilidade ocorre quando você está usando um telefone Samsung mais novo que o S9.

Por favor, [**grave o cartão SD com a nova imagem**](https://www.sensecapmx.com/docs/sensecap-m1/m1-troubleshooting/#como-gravar-uma-nova-imagem-em-um-novo-cartão-micro-sd).

![Helium App Errors - Device Disconnected](https://www.sensecapmx.com/wp-content/uploads/2022/07/error-device-disconnected.png)

* * *

**Characteristic Write Failed**
-------------------------------

Não é possível registrar o Hotspot no aplicativo Helium

**Passos de solução de problemas**

1.  Se você registrar o seu hotspot logo após conectá-lo via Ethernet ou Wi-Fi, verá esse erro, pois o OTA (atualizações over-the-air) está em execução.
2.  Deixe o seu Hotspot conectado via Ethernet ou Wi-Fi por mais 10+ minutos. Isso permitirá que as atualizações OTA sejam concluídas.
3.  Pressione o botão por 6-10 s para entrar no modo de configuração e tente registrar novamente.

![Helium App Errors - Characteristic Write Failed](https://www.sensecapmx.com/wp-content/uploads/2022/07/unable-to-register.webp)

* * *

**Characteristic Read Failed**
------------------------------

Erro ao emparelhar com Bluetooth ou conectar ao Wi-Fi

Se você receber a seguinte mensagem de erro ao tentar emparelhar o seu Hotspot para conectar via Bluetooth ou conectar ao Wi-Fi, isso significa que o SSID da sua rede Wi-Fi contém caracteres inválidos que não são reconhecidos.

Evite usar caracteres não alfanuméricos (por exemplo, caracteres diferentes de a - z, 0 - 9) e símbolos.

**Solução**: Renomeie a sua rede Wi-Fi sem símbolos e caracteres não alfanuméricos.

![Helium App Errors - Characteristic Read Failed](https://www.sensecapmx.com/wp-content/uploads/2022/07/read-error.png)

* * *

**Constructing Add Hotspot Transaction**
----------------------------------------

O aplicativo Helium mostra um erro ao construir a transação de adicionar hotspot ao registrar o Hotspot

**Passos de solução de problemas**

1.  Se você registrar o seu hotspot logo após conectá-lo à Ethernet ou Wi-Fi, verá esse erro, pois o OTA (atualizações over-the-air) está em execução ou os blocos ainda não foram totalmente sincronizados.
2.  Deixe o seu hotspot conectado à Ethernet ou Wi-Fi por pelo menos 30 minutos para que ele conclua o firmware OTA e o processo de sincronização dos blocos. Depois disso, pressione o botão por 6-10 s para entrar no modo de configuração e tente registrar novamente.
3.  Verifique a versão do firmware após a conclusão usando os diagnósticos ou o Dashboard do SenseCAP para garantir que está atualizada.  
    1.  **Nota**: Se o firmware do seu hotspot não conseguir atualizar para a versão mais recente, é sugerido alterar a rede que o seu dispositivo está usando para outra rede, como o hotspot do seu telefone celular, e então seguir o segundo passo mencionado acima.
    2.  **Nota**: Se os blocos não conseguirem ser totalmente sincronizados pelo próprio dispositivo após a conclusão do firmware OTA, é sugerido redefinir os blocos no console local.

![Helium App Errors - Constructing Add Hotspot Transaction](https://www.sensecapmx.com/wp-content/uploads/2022/07/transaction-failed-add-hotspot.png)

* * *

**Asserting Location/Antenna**
------------------------------

Ao tentar atualizar os detalhes da antena ou fazer o Asserting Location, você vê o seguinte erro

**Passos de solução de problemas**

O problema está relacionado à conexão de rede ou ao aplicativo. Tente reiniciar o seu APP ou tente novamente mais tarde.

![Helium App Errors - Asserting Location/Antenna](https://www.sensecapmx.com/wp-content/uploads/2022/07/assert-location-error.png)