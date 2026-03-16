---
description: SenseCAP_T1000_tracker_Introduction
title: Introdução
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker/Introduction
sku: 114993073, 114993169, 114993168, 113991194, 114993207, 114993208, 114993106, E2025081201, E2025081501
last_update:
  date: 10/11/2025
  author: Twelve
createdAt: '2023-08-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker/Introduction/
---


[**SenseCAP T1000**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) é um rastreador LoRaWAN® compacto que utiliza GNSS/Wi-Fi/Bluetooth para rastreamento preciso de localização interna e externa. Ele possui capacidades de autoajuste geográfico, armazenamento local de dados e uma impressionante autonomia de bateria de vários meses. Além disso, é equipado com sensores de temperatura, luz e movimento, tornando-o ideal para uma variedade de aplicações baseadas em localização.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tracker_1.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora </font></span></strong>
    </a>
</div>

---

:::tip Comparação de Versões

||Rede Compatível|Temperatura|Luz|Acelerômetro|
|--|--|--|--|--|
|[SenseCAP T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
|[SenseCAP T1000-B](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html)|<ul><li>LoRaWAN</li><li>Helium</li></ul>|||
|[SenseCAP T1000-E](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-E-for-Meshtastic-p-5913.html)|<ul><li>LoRaWAN</li><li>Meshtastic</li></ul>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|<p style={{textAlign: 'center'}}>✅</p>|
:::

## Recursos

### Posicionamento Preciso

GNSS, Wifi, BLE, 3 tecnologias de posicionamento para soluções tanto internas quanto externas.

**Posicionamento GNSS (Externo)**

O rastreador obterá a localização em ambientes externos por meio do sistema de satélites (GPS/BeiDou/outros) e, em seguida, enviará os dados para o servidor por LoRa sem fio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/located_by_Gnss.png" alt="pir" width={800} height="auto" /></p>

**Posicionamento por Wi-Fi / Bluetooth (Interno)**

O rastreador escaneia o endereço MAC e o RSSI do Wi-Fi/Bluetooth próximo e os envia via LoRaWAN. O servidor de aplicação precisa calcular a localização geográfica real com base no endereço MAC e na intensidade do sinal (RSSI).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/by_wifi.png" alt="pir" width={800} height="auto" /></p>

### Armazenamento de Dados Offline

Capaz de armazenar mais de 1000 registros localmente. A capacidade de armazenamento com intervalo de envio de 1 hora ultrapassa 40 dias.

Quando a cobertura do sinal LoRaWAN é fraca ou não há cobertura de rede, os dados serão salvos e inseridos no próximo ciclo. Quando o dispositivo retorna a uma área com cobertura da rede LoRaWAN, ele enviará automaticamente os dados offline.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={800} height="auto" /></p>

### Adaptabilidade Inter-regional

O T1000 oferece troca contínua de região LoRaWAN® em nível global, ajustando-se automaticamente ao plano de frequência LoRaWAN® apropriado com base nas coordenadas de localização detectadas, garantindo desempenho ideal na Europa, pan-América e além.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/earth.gif" alt="pir" width={800} height="auto" /></p>

### Meses de Duração da Bateria

Alimentado pelo LR1110 e apresentando baixo consumo de energia, a maioria dos modelos pode durar mais de 3 meses de vida útil da bateria com intervalo de envio de 1 hora somente no modo GNSS, com o sensor de movimento desativado.
(A duração da bateria pode variar de acordo com parâmetros de configuração, como banda de frequência, modo de posicionamento e intervalo de envio de dados. Consulte o [Cálculo da Vida Útil da Bateria](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx) para referência detalhada)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/battery_life_new_ABE.png" alt="pir" width={800} height="auto" /></p>

### Sensores de Temperatura, Luz e Movimento

Sensores de temperatura e luz estão incluídos para acompanhar os dados ambientais em movimento. Por exemplo, os dados de temperatura podem ser usados para inferir a possibilidade de se a comida/vacina estragou. Os dados de luz mostram se ele foi visto por olhos indesejados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sensor.png" alt="pir" width={800} height="auto" /></p>

### Rede de Gateways Descentralizada para Prova de Localização

A rede descentralizada da Helium é construída sobre um mecanismo de confiança em que cada gateway compartilha sua localização, e a Helium valida a autenticidade dessas localizações. Ao usar Helium com o T1000, ao cruzar as informações da localização do gateway, você pode obter uma localização aproximada do T1000. Isso fornece uma camada adicional de validação, aumentando a confiabilidade dos dados em comparação com outras redes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/helium_map.png" alt="pir" width={800} height="auto" /></p>

### Relatório de Emergência

Sensor de movimento para detectar anomalias, botão SOS para relatório de emergência e comutação automática para transmissão de dados em alta frequência

<p style={{textAlign: 'center'}}><img src="https://www.seeedstudio.com/blog/wp-content/uploads/2023/06/%E7%94%BB%E6%9D%BF-4@1.5x.png" alt="pir" width={800} height="auto" /></p>

## Arquitetura

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/framework_new.png" alt="pir" width={800} height="auto" /></p>

## Aplicações

- Rastreamento Internacional de Ativos
- Busca e Resgate
- Monitoramento de Equipamentos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/applications.png" alt="pir" width={800} height="auto" /></p>

## Especificação

### Especificação do Modelo

Fornecemos duas soluções diferentes para os usuários, e elas vêm em três versões: A, B e E.

- **T1000-A/T1000-B**: Essas duas versões são projetadas para **rede LoRaWAN**, suportando posicionamento interno (Wi-Fi + Bluetooth) e externo (GNSS). O T1000-A é equipado com recursos essenciais, incluindo sensor de temperatura, sensor de luz e sensor de movimento, enquanto o T1000-B vem sem esses sensores.

- **T1000-E**: Apresenta software de código aberto e está disponível em duas versões separadas: uma para **LoRaWAN** e outra para **Meshtastic**. Ambas oferecem código-fonte completo, permitindo que desenvolvedores personalizem e ampliem suas funções livremente.

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image2_20.png" alt="pir" width={800} height="auto" /></p>

### Parâmetros Gerais

|Modelo de Produto|T1000-A/T1000-B/T1000-E|
| :- | :- |
|Backhaul|LoRaWAN® (v1.0.4 Classe A)|
|Bluetooth|Bluetooth v5.1, configuração via App|
|Plano de Canais LoRaWAN|IN865/EU868/US915/AU915/AS923/KR920/RU864|
|Temperatura|<p>Faixa: -20 a 60℃;</p><p>Precisão: ± 1℃ (mín ±0.5℃, máx ±1℃)</p><p>Resolução: 0,1℃</p>|
|Luz|0 a 100% (0% é escuro, 100% é o mais claro)|
|Acelerômetro de 3 Eixos|Acelerômetro de 3 eixos para detectar movimento|
|LED e Buzzer|1xLED e 1x buzzer para indicar o status|
|Botão|1xBotão para operar e disparar eventos (SOS)|
|Antena|Interna (GNSS/LoRa/Wi-Fi/BLE)|
|Distância de Comunicação|2 a 5km (dependendo da antena do gateway, instalação e ambiente)|
|Grau de Proteção IP|IP65|
|Dimensões|85 x 55 x 6,5 mm|
|Peso do Dispositivo|32g|
|Temperatura de Operação|-20℃ a +60<a name="ole_link12"></a>℃|
|Umidade de Operação|5% - 95% (Sem condensação)|
|Certificação|CE /FCC /TELEC /RoHS /REACH|

**Localização**

|Constelação GNSS|GPS/GLONASS/Galileo/BeiDou/QZSS|
| :- | :- |
|Sensibilidade GNSS|-145dBm início a frio / -160 dBm rastreamento|
|Precisão de Localização GNSS|2\.5m CEP 50%|
|Posicionamento por Wi-Fi|Varredura passiva, envia os 4 endereços MAC escaneados|
|Posicionamento por Bluetooth|envia os 3 melhores endereços MAC de sinal escaneados de Beacon|
|Cache de Dados|Armazena em cache 1000 dados quando não há rede LoRaWAN|

**Bateria**

|Capacidade da Bateria|Bateria de íon de lítio recarregável, 700mAh|
| :- | :- |
|\*Estimativas de Vida Útil da Bateria|4 meses com uma única carga (uplink a cada 1 hora, apenas dados GNSS)|
|Monitoramento da Vida Útil da Bateria|Envio periódico do nível da bateria|
|Cabo de Carga (Adaptador não incluído)|Cabo de carregamento magnético USB, 1 metro|
|<a name="ole_link9"></a>Tensão de Entrada de Energia|4\.7 a 5.5V DC|
|Limite de Temperatura de Carga|0 a +45℃ (Além da faixa de temperatura, a carga será limitada e o LED piscará rapidamente)|
