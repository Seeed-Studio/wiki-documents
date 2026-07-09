---
title: Guia de Introdução ao Wifi Halow
description: Este caso de aplicação demonstra o desempenho extremo e os dados medidos da execução do modelo mais recente YOLO11n na plataforma de computação de borda reCamera.
keywords:
  - reCamera
  - Edge AI
  - Wifi Halow
slug: /wifi_halow_getting_started
sku: 100063704
image: https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/getting_start/wifi_halow_log.jpg
sidebar_position: 1
last_update:
  date: 2026-06-02T00:00:00.000Z
  author: Sizhao zhou
createdAt: '2026-06-02'
updatedAt: '2026-06-16'
url: https://wiki.seeedstudio.com/pt-br/wifi_halow_getting_started/
---

# Guia de Introdução ao Wifi Halow

Antes de iniciar a configuração, certifique-se de que você tenha o seguinte hardware pronto:
* **Cabo de dados**: Um cabo USB Type-C com capacidade de transferência de dados (não use cabos que tenham apenas função de carregamento).
* **reCamera**: Um dispositivo reCamera com a placa inferior removida.
---


## Introdução

Wifi Halow é um módulo de rede sem fio para a reCamera, que permite conectar a reCamera a uma rede sem fio para monitoramento e gerenciamento remotos. Em comparação com conexões Wifi tradicionais, o Wifi Halow possui capacidades mais fortes de penetração de paredes e de sinal, distância de transmissão ultralonga, consumo de energia extremamente baixo e grande capacidade de conexão de dispositivos.

---


## Desembalagem e Montagem

Após receber o produto, haverá os seguintes três itens na caixa:

1. Módulo Wifi Halow
2. Tampa traseira
3. Parafusos

![Item List](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_list.png)

Em seguida, você precisa preparar uma reCamera com a tampa traseira removida, como mostrado na figura abaixo:

![reCamera with back cover removed](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/reCamera_uncover.jpg)

Vídeo de tutorial de instalação:
<video
  src="https://raw.githubusercontent.com/6zsz6/seeed_wiki_video/main/Wifi_Halow_install.mp4"
  controls
  width="100%"
  preload="metadata">
  Seu navegador não oferece suporte à reprodução deste vídeo.
</video>



:::note Note
A versão do sistema operacional da sua reCamera deve ser a versão mais recente, caso contrário o módulo Wifi Halow não será reconhecido corretamente. Para atualizações da versão do sistema operacional, consulte [Upgrade OS Version](https://wiki.seeedstudio.com/cn/recamera_gimbal_getting_started/#ota-%E7%B3%BB%E7%BB%9F%E5%8D%87%E7%BA%A7).
:::


## Interfaces de Hardware

Existem várias interfaces no módulo Wifi Halow, que são:
- Interface BAT: Usada para conectar uma bateria, a especificação do conector é MX1.25-2P
- Interface DC: Usada para conectar uma fonte de alimentação DC de 12V, a especificação do conector é PH2.0-2P
- Porta do cabo adaptador USB: Usada para conectar o dispositivo reCamera, a especificação do conector é GH1.25-4P
![Interface diagram](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/getting_start/wifi_halow_line.png)

---


## Introdução à Interface de Conexão Web

Após conectar o cabo USB e fazer login na interface Web através do endereço IP ***192.168.42.1***, clique em ***Network*** à esquerda para entrar na interface de configurações de rede, como mostrado abaixo:

![Network Settings Interface](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_network_set.png)
- ***Enable Halow***: Interruptor para habilitar o módulo Wifi Halow
- ***Keep-Alive***: Interruptor para a função Keep-Alive para manter a conexão com o servidor (o intervalo de tempo do Keep-Alive pode ser ajustado nas configurações para um mínimo de 1s) para evitar desconexão
- ***Networks Found***: Exibe a lista de redes sem fio atualmente escaneadas (se o wifi ao qual você deseja se conectar não for encontrado, você pode clicar no botão '+' à direita para adicionar uma rede manualmente)
- ***IPEX Antenna***: Alternar antenas (há duas antenas no módulo Wifi Halow: uma antena SMA externa e uma antena IPEX interna). Ativar esta opção habilita a antena interna, veja a figura abaixo para mais detalhes:

  ![Antenna location](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_antenna.jpg)

---

## Conectando-se a uma Rede Wi‑Fi HaLow

1. Selecione a rede Wifi Halow à qual você deseja se juntar em ***Networks Found***
2. Clique na rede à qual você deseja se conectar, mantenha a mesma configuração da sua rede, insira a senha e clique em ***Confirm*** para conectar
3. Após uma conexão bem-sucedida, clique na rede em ***My Networks*** para visualizar informações detalhadas como o IP, conforme mostrado na figura abaixo:
![Antenna location](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_detial.png)

---


## Verificando a Tensão da Bateria

Há uma interface PH no módulo Wifi Halow para conectar uma bateria, e ao lado dela há dois indicadores LED. A luz vermelha acende quando a bateria está carregando, e a luz verde acende quando está totalmente carregada, como mostrado na figura abaixo:

![Battery](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_BAT.jpg)

### 1. Verificar a Tensão da Bateria via Módulo Node-Red
Encontre a seção ***reCamera*** na lista do lado esquerdo do painel ***node-red***. Abaixo dela, há um módulo ***Battery Voltage***. A finalidade deste módulo é verificar o nível da bateria. Arraste-o para o painel e clique em deploy no canto superior direito. Após uma implantação bem-sucedida, a tensão da bateria será exibida abaixo dele, como mostrado na figura abaixo:
![node-red_battery_voltage](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_node-red_bat.png)

### 2. Verificar a Tensão da Bateria via Comando Linux

Após conectar à reCamera usando o comando ***ssh***, insira o seguinte comando no terminal para visualizar a tensão da bateria (o valor obtido está em unidades de ***mV***):
```bash
curl -s [http://192.168.42.1/api/deviceMgr/queryBatteryInfo](http://192.168.42.1/api/deviceMgr/queryBatteryInfo) | python3 -c 'import sys,json; print(json.load(sys.stdin)["data"]["voltage"])'
```

O resultado é mostrado na figura abaixo:
![linux_battery_voltage](https://files.seeedstudio.com/wiki/reCamera/reCamera_Wifi_Halow/wifi_halow_linux_bat.png)

:::note Note
1. Quando nenhuma bateria estiver conectada, os valores exibidos pelos dois métodos acima irão oscilar de forma irregular.
2. Quando a transmissão contínua de vídeo de longa distância é realizada, devido ao alto consumo de energia da antena nesse momento, toda a placa aquecerá mais intensamente.
:::

---


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência ao usar nossos produtos seja a mais tranquila possível. Oferecemos múltiplos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
