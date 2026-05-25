---
description: Configuração do Modo de Baixo Consumo de Dados (para versão 4G)
title: Configuração do Modo de Baixo Consumo de Dados (para versão 4G)
keywords:
  - SenseCAP_M2
  - Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/sensecap_m2.jpg
slug: /traffic_saving_config
last_update:
  date: 12/4/2024
  author: Jessie
createdAt: '2024-12-10'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/traffic_saving_config/
---


Este tutorial guiará os usuários a configurar o modo de baixo consumo de dados para o M2 Multi-Platform Gateway **versão 4G**. Neste modo, espera-se que o tráfego por mês seja em torno de **60M**. O tráfego específico depende dos pacotes dos nós, etc.

:::caution note

1. A exibição de status do APP pode ter atraso
2. A troca de rede e a luz indicadora RGB mudarão após 5 minutos
:::

### Verificar versão do firmware

Antes de configurar o modo de baixo consumo de dados, verifique primeiro a versão do OS e do firmware.

:::tip
A versão do OS precisa ser mais recente que 0.9.5<br/>
A versão do firmware precisa ser mais recente que 1.1.6
:::

Consulte o [Quick Start](https://wiki.seeedstudio.com/pt-br/quick_start_with_M2_MP/) para fazer login na página Luci.

Navegue até `Status` -> `Overview` e verifique a versão atual do OS e do firmware.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/version-check.png" alt="pir" width={800} height="auto" /></p>

#### Atualizar OS

O firmware será atualizado automaticamente, mas o usuário precisa atualizar manualmente a versão do OS.

Navegue até `System` -> `Backup/Flash Firmware`, clique em `Update`.

:::danger
Mantenha a alimentação ligada durante o período de atualização.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/online-update.png" alt="pir" width={800} height="auto" /></p>

### Configuração da Lista Branca

Esta aba é usada para filtrar nós para os quais você não precisa economizar tráfego.

- Para o modo `SenseCAP`, nós que não sejam SenseCAP serão automaticamente filtrados, não é necessária configuração adicional.

- Para os modos `Packet Forwarder` e `Basic Station`, é necessário habilitar o Modo de Lista Branca.

 :::tip
 Se você estiver usando a plataforma AWS, pode pular esta etapa, basta configurar a lista branca no console AWS.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/aws-white-list.png" alt="pir" width={600} height="auto" /></p>
 :::

 `OUI List`: Os primeiros três bytes do EUI do nó.    *Usado para filtrar pacotes join-request*.<br/>
  por exemplo, para nó SenseCAP, o OUI é '2CF7F1'

  `Network ID List`/`DevAddr`:  *Usado para filtrar pacotes uplink*.<br/>
 por exemplo, para nó SenseCAP, o NetID é '000013', DevAddr é '27000000 - 27FFFFFF'

  Para mais detalhes, consulte [NetID and DevAddr Prefix Assignments](https://www.thethingsnetwork.org/docs/lorawan/prefix-assignments/)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/white-list-config.png" alt="pir" width={800} height="auto" /></p>

### Definir parâmetros de PING

Usado para verificar se o link está ativo, deixe em branco para assumir que a interface está sempre online.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mwan3.png" alt="pir" width={800} height="auto" /></p>

### Habilitar o Modo de Baixo Consumo de Dados

Habilite o `Low Data Consumption Mode` e defina o `alive time`, padrão na Plataforma SenseCAP: 86400.

Após as configurações, reinicie o gateway para aplicar as alterações.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mode-enable.png" alt="pir" width={800} height="auto" /></p>
