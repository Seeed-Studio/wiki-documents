---
description: SenseCAP_Tracker_Bluetooth_Beacon
title: Beacon Bluetooth Interno BC01
keywords:
  - BLE
  - Positioning
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BC01_Indoor_Bluetooth_Beacon.webp
slug: /bluetooth_beacon01_for_sensecap_tracker
sku: 113991194
last_update:
  date: 03/24/2026
  author: Janet
createdAt: '2023-10-19'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/pt-br/bluetooth_beacon01_for_sensecap_tracker/
---

Um beacon de localização BLE (Bluetooth Low Energy) é um pequeno dispositivo sem fio que transmite sinais Bluetooth em intervalos regulares. Esses sinais podem ser detectados por dispositivos com Bluetooth, como o [**SenseCAP T1000 Tracker**](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html), [**SenseCAP T2000 
Tracker**](https://www.seeedstudio.com/SenseCAP-Asset-Tracker-T2000-A-p-6580.html), permitindo que eles determinem sua proximidade ao beacon, construindo uma solução baseada em localização para posicionamento interno, rastreamento de ativos e outras aplicações.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
    </a>
</div>
<br />

:::tip Comparação de versões
![Version Comparison](https://files.seeedstudio.com/wiki/BC03/beacon_version.png)
:::

### Sistema de Posicionamento Interno por Bluetooth

O GPS já provou sua capacidade de localizar em ambientes externos. Agora, também tendemos a migrar para o posicionamento interno, e os beacons Bluetooth tornam possível o posicionamento interno preciso. Combine com o SenseCAP T1000 Tracker para construir uma solução de posicionamento interno.

Implante beacons Bluetooth na sua área alvo, o tracker recebe o sinal enviado pelo beacon, e a precisão de posicionamento é em nível de metro (2–3 metros). Ele pode realizar funções como rastreamento de ativos, planejamento de rotas, busca reversa de carros, etc., e pode ser integrado em miniaplicativos e aplicativos.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
Consulte o [Sistema de Posicionamento Interno](https://wiki.seeedstudio.com/pt-br/IPS_For_SenseCAP_T1000_Traker) para mais detalhes.
:::

### Recursos

- **Bluetooth® LE 5.0**
- **Longa vida útil da bateria**: Bateria de lítio substituível, mais de 5 anos (0dBm/500ms na configuração padrão).
- **Transmissão de longa distância**: Até 120 metros em áreas abertas.
- **Alta compatibilidade**: Compatível com sistemas iOS 7.0+ e Android 4.3+

### Função do botão

|Ligar|Desligar|
| :-: | :-: |
|Abra a tampa traseira do produto, pressione e segure o botão por 3 segundos, e o LED azul acenderá por 5 segundos; em seguida, a inicialização será bem-sucedida.|No estado ligado, abra a tampa traseira do produto, pressione e segure o botão por 3 segundos, e o LED azul piscará 5 vezes para indicar um desligamento bem-sucedido.|

## Diretrizes de implantação

- Os beacons Bluetooth são normalmente posicionados a 2,5–3 m acima do nível do solo, com espaçamento horizontal de 5–10 m. Esses beacons podem ser implantados em formações em coluna ou distribuídos uniformemente em padrões triangulares, dependendo do ambiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- As estratégias de implantação variam conforme o cenário. Por exemplo, ambientes internos podem envolver posicionamento central (estreito) ou distribuição em grade triangular (esparsa). Em corredores internos, as opções incluem implantação na linha central (para corredores com cerca de 3 m de largura) ou arranjo em dupla coluna (corredores mais largos). Evite instalação no teto em prédios altos (pé-direito > 4 m). Em vez disso, opte por instalação na parede ou em nível baixo, com aproximadamente 5 m de distância entre unidades. Em áreas externas, use um padrão de grade triangular para espaços abertos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>Os vermelhos são exemplos errados e os azuis são exemplos corretos.</i></center>

- Em ambientes úmidos, leve em consideração o grau de resistência à água do produto durante a implantação para evitar exposição prolongada à água.

- Mantenha uma distância de elementos metálicos, de vidro ou outros elementos de obstrução ao posicionar o produto; ele não deve ficar próximo ao canto.

:::tip
As diretrizes de implantação são apenas para referência. A implantação real deve ser personalizada com base nos algoritmos de posicionamento do cliente, no ambiente de instalação do produto e nas condições de teste.
:::

### Instruções de instalação por adsorção magnética

#### Condições de instalação

- A mesa de material da ferramenta ou plataforma para instalação do produto deve ser a superfície de equipamentos ou suportes que possam ser atraídos por ímãs;
- Faixa de temperatura de instalação recomendada: 20~40°C;
- Ao instalar o produto, tente mantê-lo afastado de cantos, de outros campos magnéticos ao redor e de grandes obstáculos.

#### Etapas de instalação

A superfície de contato magnético do produto pode ser diretamente aderida à superfície do suporte ou equipamento a ser instalado.

:::tip
Como o volume dos produtos magnéticos é mais pesado do que o dos produtos comuns (sem absorção magnética), recomenda-se não instalar esses produtos em superfícies como tetos para evitar o risco de queda.
:::

### Instruções de instalação com cola 3M/cola sem pregos

#### Condições de instalação

- A superfície da plataforma de material na qual o produto é instalado deve ser uma superfície plana e seca, como cerâmica, vidro/resina epóxi, acrílico, PBT, ABS, PC e PVC rígido. Devido às diferenças na viscosidade e na capacidade de instalação de diferentes modelos de adesivo dupla face, não é recomendado usar o adesivo dupla face padrão em paredes com textura acinzentada, secagem incompleta, envelhecimento e umidade (como cimento, placa de gesso, etc.). Há risco de desprendimento;
- Faixa de temperatura de instalação recomendada: 20~40℃;
- O produto deve ser instalado longe de blindagem metálica, de vidro ou de outras obstruções; o produto não deve ser implantado próximo ao canto.

#### Etapas de instalação

- Antes da instalação: limpe a superfície da plataforma ou ferramenta de aplicação a ser colada e certifique-se de que a superfície de colagem esteja seca e sem poeira;
- Ao colar, fixe a fita dupla face ao dispositivo com as mãos ou ferramentas e pressione por 1–2 segundos. Repita a pressão várias vezes para que a fita dupla face ou a cola sem pregos do produto e a superfície de aplicação fiquem melhor aderidas.

:::tip
Se você precisar instalar o produto em um ambiente de baixa temperatura ou em um ambiente severo, recomenda-se usar adesivo dupla face + cola forte sem pregos para instalar o produto e obter o melhor efeito. Entre em contato com nossa equipe de vendas para mais informações sobre a cola sem pregos.
:::

### Especificação

**Especificação geral**

|Material|PC|
| :-: | :-: |
|Cor|Branco|
|Grau de proteção IP|Nenhum|
|Dimensão(C\*L\*A)|Φ50\*20.5mm|
|Peso|39g (inclui bateria)|
|Bateria|Bateria de lítio, 2400mAh|
|Chip|Série nRF52|
|Versão Bluetooth|BLE 5.0|
|Protocolo Bluetooth|iBeacon|
|Sensores|Suporta acelerômetro|
|LED|Incluído|
|APP|BeaconSET|
|Temperatura de trabalho|-30~60°C|
|Vida útil da bateria|<p>Mais de 5 anos</p><p>(0dBm/500ms na configuração padrão).</p><p></p>|

**Parâmetros de transmissão padrão**

|**Parâmetros**|**Valor padrão**|
| :-: | :-: |
|UUID|FDA50693-A4E2-4FB1-AFCF-C6EB07647825|
|Major|10001|
|Minor|19641|
|Potência medida|-59dBm|
|Tx Power|-30 - +4dBm, padrão 0dBm|
|Intervalo de anúncio|100ms~10s, padrão 500ms|
|Senha|seeed123 （Letras e números）|
|ID de série|Nenhum|
|Nome do dispositivo|BC01 (1–7 caracteres)|
|Modo de conexão|Sim/Não|
|Reinicialização por software|seeed123 （igual à senha）|
|Serviço de bateria|<p>Exibição de ícone de bateria, detecção em tempo real</p><p>a barra cheia é 100%</p>|

**Informações de compatibilidade**

|**Sistema**|**Dispositivos**|
| :-: | :-: |
|BLE|BLE 4.2+|
|IOS 7.0+|<p>iPhone 4S,iPhone 5/5C/5S, </p><p>iPhone 6/6Plus/6S/6SPlus,iPhone 7/7Plus, </p><p>iPad mini/mini2/4/Air/Pro,etc.</p><p></p>|
|Android 4.3+|<p>Samsung，XIAOMI，HUAWEI，ONEPLUS，ViVO，OPPO ,etc.</p><p></p>|

## Configuração

- **Passo 1**: Baixe o aplicativo `Beaconset`

- **Passo 2**: Conecte o beacon; você pode distingui-los pelo endereço MAC, que também está anexado ao rótulo do beacon.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3**: Configurações

Modifique o parâmetro de acordo com sua necessidade e clique em `Save`. Quando solicitado, insira a senha `seeed123` para confirmar.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>
