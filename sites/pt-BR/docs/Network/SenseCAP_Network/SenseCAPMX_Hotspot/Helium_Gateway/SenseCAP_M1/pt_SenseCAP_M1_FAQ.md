---
description: SenseCAP M1 FAQ
title: SenseCAP M1 FAQ
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_FAQ
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M1/SenseCAP_M1_FAQ/
---

# Como encontro o ID de MAC de ETH ou Wi‑Fi?

O ID de MAC está localizado na etiqueta inferior do Hotspot, como descrito abaixo. Você verá tanto o ID de MAC de ETH quanto o de Wi‑Fi.

![SenseCAP M1 Mac-ID](https://www.sensecapmx.com/wp-content/uploads/2022/07/mac-ids.png)

---

# Como encontro meu SN (Número de Série) no dispositivo?

O número de série está localizado na etiqueta inferior do Hotspot, como descrito abaixo.

![SenseCAP M1 Serial Number](https://www.sensecapmx.com/wp-content/uploads/2022/07/sn.webp)

---

# Qual é a diferença entre as versões de RAM 2G / 4G / 8G?

2G /4G / 8G representam a diferença de RAM (memória de acesso aleatório) do Raspberry Pi 4 no SenseCAP M1. Para a função de hotspot, não haverá diferença entre diferentes RAM. Além disso, na Loja Online da Seeed, não é possível escolher a RAM ao comprar o SenseCAP M1, observe que toda a distribuição será aleatória com base no estoque.

---

# Como posso descobrir qual versão de RAM eu tenho?

Você pode saber pelo nome do modelo. M1-X, X se refere à RAM. por exemplo, M1-2915 se refere a 2GB RAM enquanto M1-4915 se refere a 4GBRAM.

---

# Por que meu SenseCAP M1 não está testemunhando outros Hotspots Helium?

Algumas possíveis razões que resultam em baixos sinais de RF e curta distância de transmissão dos Hotspots Helium incluem:

- Obstáculos, incluindo prédios, montanhas e áreas florestais em um ambiente relativamente denso
- Possível Interferência Eletromagnética, Interferência na Linha de Visada, Interferência da Zona de Fresnel ou Interferência de RF existente ao redor de cidades
- Condições Climáticas
- Margem de Operação do Sistema, Sombreamento e/ou Link Badger.

---

# Por que os ganhos/recompensas do meu SenseCAP M1 não são como eu esperava?

Há um mecanismo complexo para ganhos e recompensas. Desde que a configuração do seu Hotspot esteja correta, a posição adequada, sem status de relay e a conexão com a internet seja estável, então deve estar tudo certo.  
Se você tiver dúvidas sobre o mecanismo, é recomendável discutir isso no canal da Helium para buscar explicações adicionais. A **[Helium Doc](https://docs.helium.com/)** também é útil para você aprender mais.

---

# Como melhorar os sinais de RF do SenseCAP M1?

Instale e coloque seu dispositivo em um ambiente amplo e sem obstáculos (por exemplo, próximo à janela ou coloque a antena do lado de fora, como no telhado).

---

# Quantos watts de eletricidade o SenseCAP M1 usa aproximadamente?

Cerca de 5W, assim como o consumo de eletricidade de uma lâmpada comum.

---

# Qual é a distância recomendada entre gateways?

Os Hotspots não devem ser instalados muito próximos uns dos outros. Uma boa regra geral é manter uma distância mínima de 300 a 500 metros entre Hotspots; embora isso possa variar dependendo do ambiente (em uma cidade densa, mais próximo, e em um ambiente mais rural, mais distante).

---

# Há taxas extras para configurar o SenseCAP M1?

O dispositivo inclui uma taxa de ativação de US\$ 40 para que os usuários configurem o SenseCAP M1 e uma taxa de US\$ 10 para definir a localização do SenseCAP M1 no aplicativo Helium.

Você só pagará taxas adicionais se redefinir a localização para outro lugar após a primeira vez, o que é cerca de US\$ 10. Para informações detalhadas sobre taxas, consulte a página de Taxas de Transação da Helium.

---

# O SenseCAP M1 suporta conexão a um servidor de terceiros além do Helium?

Não, o gateway LoRaWAN SenseCAP M1 é compatível apenas com o servidor da Rede Helium.

---

# O SenseCAP M1 oferece suporte a PoE?

Não. Um adaptador de energia 5V-3A é usado para alimentar a unidade através do conector Type‑C ao lado da porta Ethernet. Você precisará de um injetor PoE e um splitter para oferecer suporte a POE no Sensecap M1.

---

# Sendo um gateway interno, ele pode ser usado ao ar livre?

SenseCAP M1 é um gateway para uso interno, portanto não foi projetado para suportar ambientes externos severos e não deve ser colocado em ambiente externo sem proteção adicional.

---

# Os sensores LoRaWAN SenseCAP são compatíveis com o Gateway SenseCAP M1?

Sim. Desde que os nós finais (isto é, a série de produtos SenseCAP LoRaWAN Sensor) sejam compatíveis e estejam registrados na Rede Helium, eles podem funcionar com o Gateway SenseCAP M1.

---

# Os SenseCAP M1 são hotspots completos ou light hotspots?

O Gateway Interno LoRaWAN SenseCAP M1 é um hotspot completo que oferece suporte tanto a POC quanto à transferência de dados.

---

# Haverá um hotspot para uso externo?

Atualmente, o SenseCAP M1 é apenas para uso interno, mas consideraremos esse pedido

---

# Haverá também light hotspots?

Sim, o SenseCAP M2 Data Only é um lightspot.

---

# Haverá AS923, AU915, IN865 e outras frequências?

Atualmente, existem apenas US915 (com FCC) e EU868 (com CE) disponíveis. Outras frequências ainda não são suportadas. Notamos a necessidade de diferentes frequências. A especificação do dispositivo de hardware está na faixa de 902Mhz ~ 928Mhz / 863Mhz ~ 870Mhz, portanto é configurável para diferentes frequências dentro dessa faixa. ENTRETANTO, após a configuração, o produto precisa passar por certificações específicas para ser autorizado a entrar em diferentes mercados.

Atualmente, nossa equipe está concentrada na cadeia de suprimentos e fabricação de US915 e EU868.

---

# Todos os Gateways LoRaWAN SenseCAP são hotspots Helium?

Quando você pesquisa SenseCAP no Google, encontrará outros gateways também com o nome SenseCAP. Esteja ciente de que nem todos os gateways da marca SenseCAP são hotspots Helium; o Gateway Interno LoRaWAN SenseCAP M1 é o único que suporta a Rede Helium por enquanto.

---

# Se eu comprar o hotspot na Europa e levá‑lo para a Índia, ele mudará automaticamente para 865 MHz?

Sim, ele mudará automaticamente. Mas nós só temos certificação CE e FCC, não temos a certificação BIS, que é exigida na Índia.

---

# O SenseCAP M1 também está listado no aplicativo Helium?

Sim, o SenseCAP M1 já foi adicionado ao aplicativo Helium!

---

# Que tipo de conector de antena existe no Sensecap M1?

SenseCAP M1 possui conector fêmea RP‑SMA, e a antena possui conector macho RP‑SMA. Nossas antenas de fibra de vidro em estoque possuem conector macho tipo‑N, com um cabo LMR200 fornecido com conector tipo‑N fêmea e conector macho RP‑SMA.

![SenseCAP M1 Antenna Connection](https://www.sensecapmx.com/wp-content/uploads/2022/06/connectors-1.png)

---

# Em que voltagem/corrente o dispositivo opera?

A voltagem é 5V DC.

---

# Você sabe o tamanho/dimensões da PCB?

O tamanho do dispositivo é 154×100×44 mm e o peso é 370g.

---

# Algumas pessoas não gostam de 5GHz na sua área, é possível desligar o WiFi diretamente no hotspot?

Esse dispositivo é um transmissor Wi‑Fi. Se não estiver conectado ao AP, ele irá parar automaticamente de emitir ondas eletromagnéticas.

---

# Por que meu SenseCAP M1 não está entrando no modo de piscar lento ao pressionar o botão?

Por favor, mantenha o botão pressionado por 6‑10 segundos e não o solte. Às vezes, pode ser necessário pressionar com força o botão na parte de trás. Se precisar de suporte adicional, visite‑nos no Discord aqui.  
Observe que, se o SenseCAP M1 estiver atualizando seu firmware, pressionar o botão pode não mudar o LED azul para o modo de piscar lento; tente novamente após 10‑15 minutos.

---

# Quando o SenseCAP M1 sai do modo de piscar lento?

O modo de piscar lento dura cerca de 10 minutos e depois volta para o LED constante ou modo de piscar rápido.

Se o SenseCAP M1 sair do modo de piscar lento durante a configuração, pressione o botão por 5‑10 segundos para voltar ao modo de piscar lento e reinicie sua configuração.

---

# Por que o LED azul permanece sempre no modo de piscar rápido?

Isso significa que o SenseCAP M1 não está conectado à Internet ou está tentando se conectar à Rede Helium P2P. Após cada inicialização, o SenseCAP M1 pode levar de 5 a 20 minutos para se conectar à Rede Helium P2P, o que depende da qualidade da sua rede.

Se o SenseCAP M1 estiver ligado por mais de 20 minutos, verifique o status da sua rede, certifique‑se de que o cabo Ethernet ou o Wi‑Fi estejam adequados para o SenseCAP M1.

Ao usar um cabo Ethernet, pressione firmemente o cabo Ethernet na porta até ouvir um “clique” para garantir que o cabo não falhe e não fique solto.

---

# Etapas para verificar a versão de Firmware do seu Hotspot

1. Pressione e segure o botão Bluetooth do Hotspot por 6‑10s, o LED azul começará a piscar lentamente, então faça o pareamento do seu hotspot.
2. Execute Diagnostics e encontre a versão de Firmware do Hotspot. Como alternativa, você pode usar o SenseCAP Dashboard, uma vez registrado, para verificar seu firmware.

![SenseCAP M1 Firmware Version](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1.png)

![SenseCAP M1 Firmware Version Step2](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-1-1.png)

![SenseCAP M1 Firmware Version Step3](https://www.sensecapmx.com/wp-content/uploads/2022/06/image-2.png)

---

# Qual é a potência de transmissão do SenseCAP M1 sem a antena?

<table style={{borderCollapse: 'collapse', width: '100%', height: 125}} border={1}><tbody><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Frequency Plan</strong></td><td style={{width: '33.3333%', height: 21}}>EU868</td><td style={{width: '33.3333%', height: 21}}>US915</td></tr><tr style={{height: 20}}><td style={{width: '33.3333%', height: 20}}><strong>Certification</strong></td><td style={{width: '33.3333%', height: 20}}>CE</td><td style={{width: '33.3333%', height: 20}}>FCC</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Regulation Max Transmit Power</strong></td><td style={{width: '33.3333%', height: 21}}>14 dBm</td><td style={{width: '33.3333%', height: 21}}>30 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Transmit Power With Stock Antenna</strong></td><td style={{width: '33.3333%', height: 21}}>13.487 dBm</td><td style={{width: '33.3333%', height: 21}}>26.7 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Transmit Power Without Antenna</strong></td><td style={{width: '33.3333%', height: 21}}>10.687 dBm</td><td style={{width: '33.3333%', height: 21}}>25 dBm</td></tr><tr style={{height: 21}}><td style={{width: '33.3333%', height: 21}}><strong>Stock Antenna Gain</strong></td><td style={{width: '33.3333%', height: 21}}>2.8 dBi</td><td style={{width: '33.3333%', height: 21}}>2.6 dBi</td></tr></tbody></table>

**O que são as Regras de Controle Automático do FAN?**
---------------------------------------

![Lógica de Controle Automático do Ventilador do SenseCAP M1](https://www.sensecapmx.com/wp-content/uploads/2022/07/fan-control-logic-1.png)

**O que devo fazer se o uso do meu cartão SD estiver acima de 85%?**
------------------------------------------------------

Normalmente você não precisa se preocupar com o uso do cartão SD, pois o sistema o gerenciará automaticamente. Se você descobrir que o cartão SD não consegue se recuperar do uso total, pode reiniciar o dispositivo para voltar ao normal.

Se ainda assim você perceber que isso não resolve o problema, ou se o suporte técnico sugerir redefinir o bloco, você pode clicar aqui para aprender como 'resetar blocos'.
