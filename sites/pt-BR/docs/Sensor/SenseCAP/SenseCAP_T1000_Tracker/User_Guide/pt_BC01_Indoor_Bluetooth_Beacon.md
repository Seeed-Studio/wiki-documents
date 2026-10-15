---
description: SenseCAP_Tracker_T1000-A/B_Bluetooth_Beacon
title: BC01 Beacon Bluetooth Indoor
keywords:
  - BLE
  - Positioning
image: https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BC01_Indoor_Bluetooth_Beacon.webp
slug: /bluetooth_beacon_for_SenseCAP_Traker
sku: E2025081201,E2025081501
last_update:
  date: 05/29/2025
  author: Zeke
createdAt: '2023-10-19'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/bluetooth_beacon_for_SenseCAP_Traker/
---

Um beacon de localização BLE (Bluetooth Low Energy) é um pequeno dispositivo sem fio que transmite sinais Bluetooth em intervalos regulares. Esses sinais podem ser detectados por dispositivos compatíveis com Bluetooth, como o SenseCAP T1000 Tracker, permitindo que eles determinem sua proximidade em relação ao beacon, construindo uma solução baseada em localização para posicionamento indoor, rastreamento de ativos e outras aplicações.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora </font></span></strong>
    </a>
</div>

### Sistema de Posicionamento Indoor por Bluetooth

O GPS já comprovou sua capacidade de localização em ambientes externos. Agora, também tendemos a migrar para o posicionamento indoor, e os beacons Bluetooth tornam possível o posicionamento preciso em ambientes internos. Combine com o SenseCAP T1000 Tracker para construir uma solução de posicionamento indoor.

Implante beacons Bluetooth na área-alvo, o tracker recebe o sinal enviado pelo beacon, e a precisão de posicionamento fica em nível de metros (2–3 metros). É possível realizar funções como rastreamento de ativos, planejamento de rotas, busca reversa de carros etc., e pode ser integrado em miniaplicativos e APPs.

<p style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png" alt="pir" width={800} height="auto" /></p>

:::tip
Consulte o [Sistema de Posicionamento Indoor](https://wiki.seeedstudio.com/pt-br/IPS_For_SenseCAP_T1000_Traker) para mais detalhes.
:::

### Recursos

- **Bluetooth® LE 5.0**
- **Longa vida útil da bateria**: Bateria de lítio substituível, mais de 5 anos (0dBm/500ms na configuração padrão).
- **Transmissão de longa distância**: Até 120 metros em áreas abertas.
- **Alta compatibilidade**: Compatível com sistemas iOS 7.0+ e Android 4.3+

### Função do Botão

|Ligar|Desligar|
| :-: | :-: |
|Abra a tampa traseira do produto, mantenha o botão pressionado por 3 segundos e o LED azul acenderá por 5 segundos, então a inicialização será bem-sucedida.|No estado ligado, abra a tampa traseira do produto, mantenha o botão pressionado por 3 segundos e o LED azul piscará 5 vezes para indicar um desligamento bem-sucedido.|

## Diretrizes de implantação

- Os beacons Bluetooth são tipicamente posicionados a 2,5–3 m acima do nível do solo, com um espaçamento horizontal de 5–10 m. Esses beacons podem ser implantados em formações em coluna ou distribuídos uniformemente em padrões triangulares, dependendo do ambiente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png" alt="pir" width={600} height="auto" /></p>

- As estratégias de implantação variam de acordo com os cenários. Por exemplo, ambientes internos podem envolver posicionamento central (estreito) ou distribuição em grade triangular (esparsa). Em corredores internos, as opções incluem implantação na linha central (para corredores com cerca de 3 m de largura) ou arranjo em dupla coluna (corredores mais largos). Evite a montagem no teto em prédios altos (pé-direito > 4 m). Em vez disso, opte por instalação na parede ou em nível baixo, aproximadamente a cada 5 m. Em áreas externas, use um padrão de grade triangular para espaços abertos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png" alt="pir" width={700} height="auto" /></p>

<center><i>Os vermelhos são exemplos incorretos e os azuis são exemplos corretos.</i></center>

- Em ambientes úmidos, leve em conta o grau de impermeabilidade do produto durante a implantação para evitar exposição prolongada à água.

- Mantenha uma distância de elementos metálicos, de vidro ou de outros elementos que causem obstrução ao posicionar o produto; ele não deve ficar próximo ao canto.

:::tip
As diretrizes de implantação são apenas para referência. A implantação real deve ser personalizada com base nos algoritmos de posicionamento do cliente, no ambiente de instalação do produto e nas condições de teste.
:::

### Instruções de Instalação por Adsorção Magnética

#### Condições de instalação

- A superfície da ferramenta ou plataforma de material para instalação do produto deve ser a superfície de equipamentos ou suportes que possam ser atraídos por ímãs;
- Faixa de temperatura de instalação recomendada: 20~40°C;
- Ao instalar o produto, tente mantê-lo afastado de cantos, de outros campos magnéticos ao redor e de grandes obstáculos.

#### Etapas de instalação

A superfície de contato magnético do produto pode ser diretamente aderida à superfície do suporte ou equipamento a ser instalado.

:::tip
Como o volume dos produtos magnéticos é mais pesado do que o dos produtos comuns (sem absorção magnética), recomenda-se não instalar esses produtos em superfícies como tetos para evitar o risco de queda.
:::

### Instruções de instalação com cola 3M/cola sem pregos

#### Condições de instalação

- A superfície da plataforma de material na qual o produto é instalado deve ser uma superfície plana e seca, como cerâmica, vidro/resina epóxi, acrílico, PBT, ABS, PC e PVC rígido. Devido às diferenças na viscosidade e capacidade de instalação de diferentes modelos de fita dupla face, não é recomendado usar a fita dupla face padrão em paredes com textura acinzentada, secagem incompleta, envelhecimento e umidade (como cimento, placa de gesso, etc.). Há risco de descolamento;
- Faixa de temperatura de instalação recomendada: 20~40℃;
- O produto deve ser instalado longe de blindagem metálica, de vidro ou de outros obstáculos; o produto não deve ser implantado próximo ao canto.

#### Etapas de instalação

- Antes da instalação: limpe a superfície da plataforma de aplicação ou ferramenta a ser colada e certifique-se de que a superfície de colagem esteja seca e livre de poeira;
- Ao colar, fixe a fita dupla face no dispositivo com as mãos ou ferramentas e pressione por 1–2 segundos. Repita a pressão várias vezes para que a fita dupla face ou a cola sem pregos do produto e a superfície de colagem de aplicação fiquem melhor aderidas.

:::tip
Se você precisar instalar o produto em um ambiente de baixa temperatura ou em um ambiente agressivo, recomenda-se usar fita dupla face + cola forte sem pregos para instalar o produto e obter o melhor efeito. Entre em contato com nossa equipe de vendas para mais informações sobre a cola sem pregos.
:::

### Especificações

**Especificações Gerais**

|UUID|PC|
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
|Temperatura de operação|-30~60°C|
|Vida útil da bateria|<p>Mais de 5 anos</p><p>(0dBm/500ms na configuração padrão).</p><p></p>|

**Parâmetros de broadcast padrão**

|**Parâmetros**|**Valor Padrão**|
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

- **Passo 1**: Baixe o APP `Beaconset`

- **Passo 2**: Conecte o beacon; você pode distingui-los pelo endereço MAC, que também está fixado na etiqueta do beacon.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png" alt="pir" width={600} height="auto" /></p>

- **Passo 3**: Configurações

Modifique o parâmetro de acordo com sua necessidade e clique em `Save`. Quando solicitado, insira a senha `seeed123` para confirmar.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png" alt="pir" width={600} height="auto" /></p>
