---
title: Guia do Usuário
description: SenseCAP_Bluetooth_Beacon_for_Tracker_User_Guide
keywords:
  - Beacon
  - SenseCAP
  - BLE
  - Posicionamento
image: https://files.seeedstudio.com/wiki/BC03/1-BC03-Bluetooth-Beacon.webp
slug: /bluetooth_beacon03_for_tracker_user_guide
sku: 100085893
last_update:
  date: 3/24/2026
  author: Janet
createdAt: '2026-03-24'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/pt-br/bluetooth_beacon03_for_tracker_user_guide/
---

# Guia do Usuário do Beacon Bluetooth Interno BC03

![BC03](https://files.seeedstudio.com/wiki/BC03/6-BC03-Bluetooth-Beacon.jpg)

## Alimentação & LED

* **Ligar**: Basta puxar a aba da bateria localizada na parte de trás. O BC03 ligará automaticamente e o indicador LED do dispositivo acenderá.
* **Desligar**: O dispositivo foi projetado para operação contínua e não possui um botão físico de energia. Para desligar o dispositivo, a bateria deve ser removida manualmente.

## Diretrizes de Implantação

* Altura de instalação recomendada: **2,5–3 m** acima do chão
* Espaçamento recomendado: **5–10 m**, dependendo dos requisitos de precisão
* Padrões de implantação:
  * Grade triangular para áreas abertas
  * Implantação em fileira única ou dupla para corredores

![Deployment Example 1](https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png)

Observações adicionais:

* Evite instalação no teto em ambientes com pé-direito acima de **4 m**
* Mantenha o beacon afastado de **superfícies metálicas, blindagem de vidro e cantos**
* Em ambientes úmidos, considere os requisitos de proteção ambiental

![Deployment Example 2](https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png)

*Os exemplos em vermelho estão incorretos, os exemplos em azul estão corretos.*

:::note
As diretrizes de implantação são apenas para referência. A implantação real deve ser otimizada com base no algoritmo de posicionamento e nos resultados dos testes em campo.
:::

## Instruções de Instalação

### Instalação com Adesivo 3M

#### Condições de Instalação

* Superfícies adequadas: cerâmica, vidro, resina epóxi, acrílico, ABS, PC, PVC rígido
* Não recomendado para superfícies ásperas, úmidas ou envelhecidas (por exemplo, cimento, placa de gesso)
* Temperatura de instalação recomendada: **20–40°C**

#### Etapas de Instalação

1. Limpe e seque a superfície de montagem
2. Puxe o filme isolante e então ele pode ser colado e instalado
3. Pressione firmemente por 1–2 segundos, repita várias vezes para garantir a adesão

:::note
Para ambientes de baixa temperatura ou severos, recomenda-se usar adesivo dupla face combinado com cola forte sem pregos.
:::

## Configuração

O BC03 suporta configuração de parâmetros e provisionamento em lote por meio do **SenseCraft APP** e ferramentas de produção.

- **Passo 1**: Baixar o `SenseCraft` APP

    - Para iOS, pesquise por “SenseCraft” na App Store e faça o download.
    - Para Android, pesquise por “SenseCraft” na Google Store e faça o download.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="pir" width={600} height="auto" /></p>


- **Passo 2**: Conectar o Beacon & Configuração

Na página User, clique em `Device Bluetooth Configuration`, depois selecione `Bluetooth Beacon` e escolha `BC03`. Em seguida, entre na página Device List.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration.png)

Com base no endereço MAC do dispositivo, selecione o Beacon a ser configurado.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration2.png)

Você pode modificar o UUID, MAJOR, MINOR, Potência de Transmissão, Intervalo de Transmissão e senha do dispositivo.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration3.png)

**Configuração em Lote**

Clique em Save & Batch Configuration, insira o número de dispositivos e a senha, depois inicie a configuração em lote. Quando a barra de progresso for concluída, você poderá baixar o arquivo de beacon de configuração em lote e revisar o status da configuração.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_configuration4.png)


- **Passo 3**: Visualizar Curva de RSSI

Escolha o beacon, clique em RSSI Curve. Você pode visualizar a curva dinâmica de RSSI.

![Configuration1](https://files.seeedstudio.com/wiki/BC03/beacon_view.png)

:::tip
Para um pequeno número de dispositivos (≤ 7–8 unidades), recomenda-se a configuração manual de cada unidade. Para implantações maiores, use a Configuração em Lote, pois ela oferece maior estabilidade ao lidar com vários dispositivos.
:::

## Sistema de Posicionamento Interno por Bluetooth

O GPS tem bom desempenho em ambientes externos, mas ambientes internos como escritórios, armazéns, hospitais ou shoppings costumam bloquear os sinais de satélite. Para obter posicionamento interno preciso, usamos os Beacons Bluetooth BC03 juntamente com rastreadores SenseCAP.

**Como Funciona**

**1. Implantar Beacons BC03**
Instale os beacons BC03 em posições fixas. Siga rigorosamente as   
[Diretrizes de Implantação](#diretrizes-de-implantação), caso contrário, os resultados da implantação podem não ser satisfatórios. 
Cada beacon transmite continuamente um sinal Bluetooth.

**2. O rastreador escaneia os sinais dos beacons**
Os rastreadores SenseCAP LoRaWAN escaneiam os sinais de beacon próximos e medem o RSSI.

**3. Estimativa de distância**
O sistema estima a distância relativa entre o rastreador e cada beacon com base nos valores de RSSI.

**4. Cálculo de posição**
Usando algoritmos de posicionamento, o sistema calcula a localização do dispositivo.

Combinado com algoritmos de posicionamento, isso permite **precisão de posicionamento interno em nível de metro (aproximadamente 2–3 metros)**.

Cenários de aplicação típicos incluem:

* **Rastreamento de ativos:** Localizar equipamentos de alto valor em armazéns ou fábricas.
* **Posicionamento de pessoal:** Garantir a segurança dos trabalhadores em hospitais, minas ou canteiros de obras.
* **Análise de rotas:** Analisar o fluxo de pessoas e mapas de calor em espaços de varejo ou escritórios.
* **Navegação interna:** Fornecer posicionamento em tempo real para visitantes em grandes locais.

A solução pode ser integrada a plataformas em nuvem, aplicativos móveis e miniaplicativos.

![BC03](https://files.seeedstudio.com/wiki/BC03/beacon3.png)

Fornecemos um sistema de posicionamento interno por Bluetooth de código aberto projetado para funcionar perfeitamente com SenseCAP BLE Beacons e SenseCAP LoRaWAN Trackers.

Esta solução é totalmente de código aberto e personalizável, permitindo que os usuários criem, modifiquem e integrem seus próprios serviços de backend com base em nosso repositório GitHub.

![Indoor Positioning System](https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png)


:::tip
Consulte [Indoor Positioning System](https://wiki.seeedstudio.com/pt-br/solutions/indoor-positioning-bluetooth-lorawan-tracker/) para mais detalhes.
:::

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>