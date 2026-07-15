---
description: Console Local Somente Dados SenseCAP M2
title: Console Local Somente Dados SenseCAP M2
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/M2_Local_Console
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Data_Only/M2_Local_Console/
---

**Como acessar o Console Local**
===================================

Existem duas maneiras de acessar o Console Local.

* * *

**Acessar via roteador**
---------------------

*   **Passo 1**: Conecte seu computador e o Hotspot ao mesmo roteador.

Você pode conectar o dispositivo ao roteador por meio de um cabo de rede, ou pode configurar a conexão WI-FI pelo aplicativo SenseCAP Hotspot.

**Nota**: Seu computador e o dispositivo devem estar conectados ao mesmo roteador/rede.

![SenseCAP M2 Local Console Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png)

*   **Passo 2**: Obtenha o Endereço IP do seu dispositivo

Se você não tem uma conta do SenseCAP MX Dashboard ou não adicionou seu dispositivo ao Dashboard, encontre o Endereço IP do seu dispositivo na página de administração do seu roteador ou execute o diagnóstico no seu aplicativo Helium para obter o Endereço IP.

Se você já registrou uma conta do SenseCAP MX Dashboard e adicionou seu dispositivo, você pode encontrar o Endereço IP do dispositivo no dashboard:

*   *   Se você estiver conectado via Wi-Fi, verá o endereço IP Wi-Fi do dispositivo para clicar.
    *   Se você estiver conectado via cabo Ethernet ou LAN local, verá o endereço LAN do dispositivo para clicar.

*   **Passo 3**: Obtenha o Nome de Usuário e a Senha do seu dispositivo

Obtenha o Nome de Usuário e a Senha nas informações na parte de trás do dispositivo.

**Por motivos de segurança, cada dispositivo tem uma senha exclusiva. Após fazer login, você pode alterar a senha.**

![SenseCAP M2 Local Console Step 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png)

*   **Passo 4**: Abra o navegador no PC e faça login

Digite o Endereço IP (que você obteve) em um navegador para acessar o Console Local. Em seguida, digite o nome de usuário e a senha do seu dispositivo e clique no botão Login.

![SenseCAP M2 Local Console Login](https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png)

* * *

**Acessar via hotspot AP do dispositivo**
--------------------------------

*   **Passo 1**: Ligue o hotspot AP do dispositivo

Pressione o botão por 5s até o indicador azul piscar lentamente para entrar no modo de configuração.

*   **Passo 2**: Conecte-se ao hotspot AP

O nome do hotspot AP é SenseCAP_XXXXXX (endereço MAC de 6 dígitos). Conecte seu computador a esse hotspot AP.

*   **Passo 3**: Obtenha o Nome de Usuário e a Senha do seu dispositivo
*   **Passo 4**: Abra o navegador no PC e faça login

Digite o Endereço IP (**192.168.168.1**) em um navegador para acessar o Console Local. Em seguida, digite o nome de usuário e a senha do seu dispositivo e clique no botão Login.

* * *

**Status**
==========

Na página inicial, há principalmente algumas exibições de status, como conexão de rede, pacotes LoRa enviados e recebidos, informações do sistema, uso de memória, etc.

**NOTA:** Você precisará aguardar um pouco para que a mensagem completa apareça.

![SenseCAP M2 Local Console Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5.png)

**NOTA:** No histograma de Pacotes Lora, não são necessariamente Pacotes de Rede Helium válidos.

Nas informações do sistema, você pode ver a versão do programa Helium, o endereço dos hotspots e o parâmetro de região atualmente em uso.

![SenseCAP M2 Local Console Guide Region](https://www.sensecapmx.com/wp-content/uploads/2022/07/system.png)

* * *

**Sistema**
==========

**Sistema e Hora**
-------------------

*   _Caminho da Página_: System -> System

Aqui você pode configurar os aspectos fundamentais do seu dispositivo, como seu hostname ou o fuso horário. E você pode modificar a configuração de sincronização de horário. Claro, em geral, você não precisa alterar nada nesta página.

![SenseCAP M2 Local Console Guide Time](https://www.sensecapmx.com/wp-content/uploads/2022/07/time.png)

* * *

**Luz Respiratória**
-------------------

*   _Caminho da Página_: System -> Breathing Light

Luz Respiratória é um indicador do dispositivo hotspot; você pode configurar o comportamento da luz.

![SenseCAP M2 Local Console Guide Breathing Light](https://www.sensecapmx.com/wp-content/uploads/2022/07/breathing-light.png)

* * *

**Região**
----------

*   _Caminho da Página_:System -> Region

Aqui você pode alterar o parâmetro de região. O padrão de fábrica é ‘AUTO’, o que significa:

*   Se você não tiver uma localização declarada para o hotspot, a região usada é baseada no tipo do seu hotspot. Por exemplo, o modelo de dispositivo M2-EU868 usa a região EU868.
*   Se você tiver declarado a localização no hotspot, o ajuste da região é feito automaticamente de acordo com a localização.

Em geral, você não precisa definir uma região. Em casos especiais: Se você não tiver uma localização declarada para um hotspot (Data-Only), você pode escolher outra região. Por exemplo, o modelo de dispositivo M2-US915 pode ser definido como AU915 na Austrália.

![SenseCAP M2 Local Console Guide Breathing Region Config](https://www.sensecapmx.com/wp-content/uploads/2022/07/region.png)

**NOTA:** Se você tiver declarado a localização no hotspot, a configuração de Região DEVE ser **AUTO**.

* * *

**Senha LuCi**
-----------------

*   **Caminho da Página**:System -> Administration

Aqui você pode alterar a Senha LuCi.

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**Restaurar Padrões de Fábrica**
----------------------------

*   _Caminho da Página_:System -> Firmware

Você pode recuperar sua senha LuCi restaurando as configurações de fábrica se a tiver esquecido. No entanto, após restaurar as configurações de fábrica, o dispositivo será atualizado novamente.

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**Reiniciar**
----------

*   _Caminho da Página_:System -> Reboot

Você pode reiniciar o dispositivo aqui ou configurar uma reinicialização programada do dispositivo.

![SenseCAP M2 Local Console Reboot](https://www.sensecapmx.com/wp-content/uploads/2022/07/reboot.png)

* * *

**Rede**
===========

**Interfaces**
--------------

*   _Caminho da Página_: Network -> Interfaces

Você pode obter informações sobre a interface de rede aqui. O IP padrão da LAN é "192.168.168.1". Quando o IP de gateway do seu roteador também for este, você precisa alterar o IP da LAN do dispositivo.

![SenseCAP M2 Local Console Guide Network Interface](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_interface.png)

**Wireless**
------------

*   _Caminho da Página_: Network -> Wireless

Você pode se conectar ao Wi-Fi aqui. Os passos abaixo:

*   **Passo 1**: Clique no botão '**scan**' para procurar redes Wi-Fi na sua área.

![SenseCAP M2 Local Console Guide Network Interface Wireless](https://www.sensecapmx.com/wp-content/uploads/2022/07/wireless_home.png)

*   **Passo 2**: Selecione seu WI-FI para entrar na rede.

![SenseCAP M2 Local Console Guide Network Interface Wifi](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_join.png)

*   **Passo 3**: Digite a senha do seu Wi-Fi, depois envie e salve.

![SenseCAP M2 Local Console Guide Network Interface Wifi Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_submit.png)

![SenseCAP M2 Local Console Guide Network Interface Wifi Save](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_save.png)

Em alguns instantes, você poderá se conectar ao WiFi, como pode ver na página de interface.

* * *

**MultiWan**
------------

*   _Caminho da Página_: Network -> MultiWan

Aqui você pode ver a prioridade e o status das interfaces de rede. A prioridade do MultiWAN é: wan(ETH) > wwan(Wi-Fi) > wwan0 (4G\*).

![SenseCAP M2 Local Console Guide Network Interface MultiWan](https://www.sensecapmx.com/wp-content/uploads/2022/07/multiwan.png)

* * *

**Diagnóstico**
---------------

*   _Caminho da Página_:Network -> Diagnostics

Aqui você pode medir a velocidade da sua conexão à Internet.

![SenseCAP M2 Local Console Guide Network Interface Network Test](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_test.png)