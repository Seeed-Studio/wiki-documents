---
description: FAQ do SenseCAP M1
title: FAQ do SenseCAP M1
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_FAQ
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAP_M1-Helium_gateway/SenseCAP_M1_FAQ/
---

**Como encontro o ID MAC de ETH ou Wi-Fi?**
------------------------------------------

O ID MAC está localizado na etiqueta inferior do Hotspot, conforme descrito abaixo. Você verá tanto o ID MAC de ETH quanto o de Wi-Fi.

![SenseCAP M1 Mac-ID](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-ids.png)

* * *

**Como posso encontrar o meu SN (Número de Série) no dispositivo?**
--------------------------------------------------------

O número de série está localizado na etiqueta inferior do Hotspot, conforme descrito abaixo.

![SenseCAP M1 Serial Number](https://www.sensecapmx.com/wp-content/uploads/2022/07/sn.webp)

* * *

**Qual é a diferença entre as versões de RAM 2G / 4G / 8G?**
----------------------------------------------------------------

2G / 4G / 8G indica a diferença de RAM (memória de acesso aleatório) do Raspberry Pi 4 no SenseCAP M1. Para a função de hotspot, não haverá diferença entre diferentes RAM. Além disso, na Seeed Online Store, não devemos escolher a RAM ao comprar o SenseCAP M1, observe que toda a distribuição será aleatória com base no estoque.

* * *

**Como posso descobrir qual versão de RAM eu tenho?**
------------------------------------------------

Você pode identificar pelo nome do modelo. M1-X, X se refere à RAM. por exemplo, M1-2915 se refere a 2GB de RAM enquanto M1-4915 se refere a 4GB de RAM.

* * *

**Por que meu SenseCAP M1 não consegue testemunhar outros Hotspots Helium?**
--------------------------------------------------------------------

Algumas possíveis razões que resultam em baixos sinais de RF e curta distância de transmissões de Hotspots Helium incluem:

- Obstáculos, incluindo prédios, montanhas e áreas florestais em um ambiente relativamente denso
- Possível Interferência Eletromagnética, Interferência de Linha de Visada, Interferência da Zona de Fresnel ou Interferência de RF existente ao redor de cidades
- Condições Climáticas
- Margem de Operação do Sistema, Sombreamento e/ou Link Badger.

* * *

**Por que os ganhos/recompensas do meu SenseCAP M1 não são como eu esperava?**
--------------------------------------------------------------------

Existe um mecanismo complexo para os ganhos e recompensas. Contanto que a configuração do seu Hotspot esteja correta, o posicionamento, sem status de retransmissão (relayed) e a conexão com a internet seja sólida, então deve estar tudo certo.  
Se você estiver confuso sobre o mecanismo, é recomendável discutir isso no canal da Helium para buscar mais esclarecimentos. A **[Helium Doc](https://docs.helium.com/)** também é útil para você aprender mais.

* * *

**Como melhorar os sinais de RF do SenseCAP M1?**
-------------------------------------------------

Instale e coloque seu dispositivo em um ambiente amplo e livre de obstáculos (por exemplo, perto da janela ou coloque a antena do lado de fora, como no telhado).

* * *

**Quantos watts de eletricidade o SenseCAP M1 pode usar aproximadamente?**
---------------------------------------------------------------------------

Cerca de 5W, assim como o consumo de eletricidade de uma lâmpada comum.

* * *

**Qual é a distância recomendada entre gateways?**
------------------------------------------------------

Os Hotspots não devem ser instalados muito próximos uns dos outros. Uma boa regra geral é fornecer uma distância mínima de 300 a 500 metros entre Hotspots; embora isso possa variar dependendo do ambiente (em uma cidade densa, mais perto, e em um ambiente mais rural, mais distante).

* * *

**Há taxas extras para configurar o SenseCAP M1?**
----------------------------------------------

O dispositivo inclui uma taxa de ativação de US\$ 40 coberta para os usuários configurarem o SenseCAP M1 e uma taxa de US\$ 10 para definir a localização do SenseCAP M1 no aplicativo Helium.

Você só pagará taxas adicionais se reafirmar para outro local depois da primeira vez, o que é cerca de US\$ 10. Para informações detalhadas sobre taxas, consulte a página de Taxas de Transação da Helium.

* * *

**O SenseCAP M1 suporta conexão com um servidor de terceiros além do Helium?**
--------------------------------------------------------------------------------

Não, o gateway LoRaWAN SenseCAP M1 é compatível apenas com o servidor da Helium Network.

* * *

**O SenseCAP M1 suporta PoE?**
---------------------------------

Não. Um adaptador de energia de 5V-3A é usado para alimentar a unidade através do conector Type-C ao lado da porta Ethernet. Você precisará de um injetor e divisor PoE para suportar PoE no SenseCAP M1.

* * *

**Sendo um gateway interno, ele pode ser usado ao ar livre?**
--------------------------------------------------

O SenseCAP M1 é um gateway interno, portanto não foi projetado para suportar ambientes externos adversos e não deve ser colocado em ambiente externo sem proteção extra.

* * *

**Os sensores LoRaWAN SenseCAP são compatíveis com o Gateway SenseCAP M1?**
---------------------------------------------------------------------

Sim. Desde que os nós finais (ou seja, a série de produtos SenseCAP LoRaWAN Sensor) sejam compatíveis com e estejam registrados na Helium Network, eles podem funcionar com o Gateway SenseCAP M1.

* * *

**Os SenseCAP M1 são hotspots completos ou light hotspots?**
------------------------------------------------------

O Gateway Interno LoRaWAN SenseCAP M1 é um hotspot completo que suporta tanto POC quanto transferência de dados.

* * *

**Haverá um hotspot para uso externo?**
--------------------------------------------

Atualmente, o SenseCAP M1 é apenas para uso interno, mas consideraremos o pedido

* * *

**Haverá também light hotspots?**
-----------------------------------------

Sim, o SenseCAP M2 Data Only é um lightspot.

* * *

**Haverá AS923, AU915, IN865 e outras frequências?**
-------------------------------------------------------------

Atualmente, há apenas US915 (com FCC) e EU868 (com CE) disponíveis. Outras frequências ainda não são suportadas. Observamos a necessidade de diferentes frequências. A especificação de hardware do dispositivo está na faixa de 902Mhz ~ 928Mhz / 863Mhz ~ 870Mhz, portanto é configurável para diferentes frequências dentro dessa faixa. ENTRETANTO, após a configuração, o produto precisa passar por certificações específicas para poder entrar em diferentes mercados.

Atualmente, nossa equipe está focada na cadeia de suprimentos e na fabricação de US915 e EU868.

* * *

**Todos os Gateways LoRaWAN SenseCAP são hotspots Helium?**
------------------------------------------------------

Quando você pesquisar por SenseCAP no Google, verá que há outros gateways também com o nome SenseCAP. Esteja ciente de que nem todos os gateways com a marca SenseCAP são hotspots Helium; o Gateway Interno LoRaWAN SenseCAP M1 é o único que suporta a Helium Network por enquanto.

* * *

**Se eu comprar o hotspot na Europa e levá-lo para a Índia, ele alternará automaticamente para 865 MHz?**
-----------------------------------------------------------------------------------------

Sim, ele irá alternar automaticamente. Mas só temos certificação CE e FCC, não temos a certificação BIS, que é exigida na Índia.

* * *

**O SenseCAP M1 também está listado no aplicativo Helium?**
-----------------------------------------------------

Sim, o SenseCAP M1 já foi adicionado ao aplicativo Helium!

* * *

**Que tipo de conector de antena há no SenseCAP M1?**
---------------------------------------------------------

O SenseCAP M1 tem um conector fêmea RP-SMA, e a antena tem um conector macho RP-SMA. Nossas antenas de fibra de vidro em estoque têm todas um conector macho tipo N, com um cabo LMR200 fornecido com conector N-fêmea e RP-SMA macho.

![SenseCAP M1 Antenna Connection](https://www.sensecapmx.com/wp-content/uploads/2022/06/connectors-1.png)

* * *

**Qual voltagem/corrente o dispositivo utiliza?**
---------------------------------------------

A voltagem é 5V DC.

* * *

**Você sabe o tamanho/dimensões da PCB?**
-------------------------------------------------

O tamanho do dispositivo é 154×100×44 mm e o peso é 370g.

* * *

**Algumas pessoas não gostam de 5GHz em sua área, é possível desligar o WiFi no próprio hotspot?**
---------------------------------------------------------------------------------------------------------

Este dispositivo é um transmissor Wi-Fi. Se ele não estiver conectado ao AP, irá automaticamente parar de emitir ondas eletromagnéticas.

* * *

**Por que meu SenseCAP M1 não entra no modo de piscar lentamente ao pressionar o botão?**
---------------------------------------------------------------------------------------

Mantenha o botão pressionado por 6-10 segundos e não o solte. Às vezes você pode ter que pressionar com mais força o botão na parte de trás. Se precisar de suporte adicional, visite-nos no Discord aqui.  
Observe que, se o SenseCAP M1 estiver atualizando seu firmware, pressionar o botão pode não mudar o LED azul para o modo de piscar lentamente; tente novamente após 10-15 minutos.

* * *

**Quando o SenseCAP M1 sai do modo de piscar lentamente?**
---------------------------------------------------

O modo de piscar lentamente dura cerca de 10 minutos e depois volta para o LED constante ou modo de piscar rápido.

Se o SenseCAP M1 sair do modo de piscar lentamente durante a configuração, pressione o botão por 5-10 segundos para voltar ao modo de piscar lentamente e reinicie sua configuração.

* * *

**Por que o LED azul permanece sempre no modo de piscar rápido?**
---------------------------------------------------------

Isso significa que o SenseCAP M1 não está conectado à Internet ou está tentando se conectar à Helium P2P Network. Após cada inicialização, o SenseCAP M1 pode levar de 5 a 20 minutos para se conectar à Helium P2P Network, o que depende da qualidade da sua rede.

Se o SenseCAP M1 tiver inicializado por mais de 20 minutos, verifique o status da sua rede, certifique-se de que o cabo Ethernet ou o Wi-Fi estejam em boas condições para o SenseCAP M1.

Ao usar um cabo Ethernet, pressione firmemente o cabo Ethernet na porta até ouvir um “clique” para garantir que o cabo não falhe e que não esteja solto.

* * *

**Etapas para verificar a versão do Firmware do seu Hotspot:**
-------------------------------------------------

1. Pressione e segure o botão Bluetooth do Hotspot por 6-10s, o LED azul piscará lentamente; então faça o pareamento do seu hotspot.
2. Execute o Diagnostics e encontre a versão do Firmware do Hotspot. Como alternativa, você pode usar o SenseCAP Dashboard, depois de registrado, para verificar seu firmware.

![SenseCAP M1 Firmware Version](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1.png)

![SenseCAP M1 Firmware Version Step2](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1-1.png)

![SenseCAP M1 Firmware Version Step3](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-2.png)

* * *

**Qual é a potência de transmissão do SenseCAP M1 sem a antena?**
-----------------------------------------------------------------

| Plano de Frequência | EU868 | US915 |
|---|---|---|
| Certificação | CE | FCC |
| Potência Máxima de Transmissão pela Regulamentação | 14 dBm | 30 dBm |
| Potência de Transmissão com Antena Padrão | 13.487 dBm | 26.7 dBm |
| Potência de Transmissão sem Antena | 10.687 dBm | 25 dBm |
| Ganho da Antena Padrão | 2.8 dBi | 2.6 dBi |

* * *

**Quais são as regras de Controle Automático do FAN?**
---------------------------------------

![SenseCAP M1 Fan Auto Control Logic](https://www.sensecapmx.com/wp-content/uploads/2022/07/fan-control-logic-1.png)

* * *

**O que devo fazer se o uso do meu cartão SD estiver acima de 85%?**
------------------------------------------------------

Normalmente você não precisa se preocupar com o uso do cartão SD, pois o sistema o gerenciará automaticamente. Se você perceber que o seu cartão SD não consegue se recuperar do uso total, pode reiniciar o dispositivo para que ele volte ao normal.

Se ainda assim você perceber que isso não resolveu o problema, ou se for orientado pelo suporte técnico a redefinir o bloco, clique aqui para aprender como 'reset blocks'.
