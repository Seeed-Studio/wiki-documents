---
description: Conecte câmeras de rede e câmeras industriais ao reServer Industrial via portas PoE
title: Uso de câmera PoE no reServer Industrial
keywords:
  - reServer
  - PoE
  - câmera IP
  - RTSP
  - câmera industrial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reserver_industrial_poe_camera_usage
last_update:
  date: 06/17/2026
  author: HaoChen
sku: 114110247
createdAt: '2026-06-15'
updatedAt: '2026-06-17'
url: https://wiki.seeedstudio.com/pt-br/reserver_industrial_poe_camera_usage/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Uso de câmera PoE no reServer Industrial

O reServer Industrial é projetado como um NVR de borda com IA com **4 portas Ethernet PoE PSE (LAN1–LAN4)** e **1 porta uplink (LAN0)**. Você pode alimentar e conectar **câmeras IP de rede** (RTSP/ONVIF) e **câmeras industriais PoE** diretamente por um único cabo Ethernet — sem necessidade de adaptador de energia separado.

<div align="center"><img width ="750" src="https://files.seeedstudio.com/wiki/reServer-Industrial/5.jpg"/></div>

:::info
Para uma visão geral completa de todas as portas Ethernet e especificações de PoE, consulte [Uso da interface de hardware do reServer Industrial — conectores Gigabit Ethernet](https://wiki.seeedstudio.com/pt-br/reserver_industrial_hardware_interface_usage/#conectores-gigabit-ethernet).
:::

## Visão geral das portas

| Porta | Função | Saída PoE | Uso típico |
| :--- | :--- | :--- | :--- |
| **LAN1 – LAN4** | Câmera | Sim (802.3af, 15 W máx. cada) | Câmera IP, câmera industrial PoE |
| **LAN0** | Uplink | Não | Roteador/switch para Internet e gerenciamento |

A **etiqueta física no chassi** (LAN0–LAN4) é fixa. O **nome da interface Linux** (`eth0`, `enP1p1s0`, etc.) depende da versão do JetPack e do kernel — **não presuma um mapeamento fixo**. Use a Etapa 2 para corresponder cada porta física à sua interface.

Cada porta PoE deve usar uma **sub-rede separada** ao conectar várias câmeras, para que endereços de fábrica padrão não entrem em conflito (veja a tabela na Etapa 3).

## Etapa 1: Ativar alimentação PoE

Ative a saída PoE nas quatro portas PSE **antes** de conectar uma câmera PoE. O procedimento é o mesmo de [Uso da interface de hardware — Gigabit Ethernet](https://wiki.seeedstudio.com/pt-br/reserver_industrial_hardware_interface_usage/#conectores-gigabit-ethernet).

<Tabs>
<TabItem value="Jetpack 5.1.x" label="Jetpack 5.1.x">

```sh
sudo -i
cd /sys/class/gpio
echo 315 > export
cd gpio315
echo "out" > direction
echo 1 > value
```

</TabItem>
<TabItem value="Jetpack 6" label="Jetpack 6">

```sh
sudo apt update
sudo apt install gpiod
gpioset gpiochip2 15=1
```

</TabItem>
</Tabs>

:::info
Se `gpiochip2` não for encontrado, o nome do chip GPIO pode variar conforme a imagem ou o kernel. Execute `gpioinfo` e localize a linha usada para controle de PoE (gpio-315 no expansor I2C em `i2c/1-0021` em muitas unidades reServer Industrial). Use esse nome de chip e deslocamento de linha em `gpioset`. Consulte a tabela de GPIO em [Uso da interface de hardware](https://wiki.seeedstudio.com/pt-br/reserver_industrial_hardware_interface_usage/#gpio).
:::

Para desativar o PoE, defina o valor do GPIO como `0` em vez de `1`.

:::tip
Para ativar o PoE automaticamente em cada inicialização, adicione os comandos acima a um serviço systemd ou a `/etc/rc.local` (antes de `exit 0`).
:::

## Etapa 2: Mapear portas físicas para interfaces Linux

Cada porta PoE física é mapeada para uma interface Linux (`eth0`, `eth1`, …). O estado do link é visível em `ip -br link` **sem** configurar um IP primeiro — a interface que mostra `UP` com `LOWER_UP` é aquela com um cabo conectado.

Mapeie **uma porta física por vez** para manter as variáveis controladas:

**Etapa 1.** Com PoE ativado e **nenhuma câmera conectada** às portas PoE, liste as interfaces:

```bash
ip -br link
```

Ignore interfaces virtuais como `lo`, `docker0`, `l4tbr0`, `rndis0` e `usb0`.

**Etapa 2.** Conecte a câmera em **apenas uma** porta física (por exemplo **LAN1**).

**Etapa 3.** Execute `ip -br link` novamente. A interface que mudou para `UP` / `LOWER_UP` é a interface Linux para essa porta física. Registre o mapeamento (por exemplo **LAN1** → `eth0`).

**Etapa 4.** Desconecte a câmera, repita as Etapas 2–3 para **LAN2**, **LAN3** e **LAN4**.

| Porta física | Interface Linux | Observações |
| :--- | :--- | :--- |
| LAN1 | _preencher_ | |
| LAN2 | _preencher_ | |
| LAN3 | _preencher_ | |
| LAN4 | _preencher_ | |
| LAN0 | _preencher_ | Uplink — geralmente conectada a um roteador |

Mantenha a **LAN0** conectada ao seu roteador ou switch quando for necessário acesso à Internet no reServer Industrial.

## Etapa 3: Configurar IP no reServer

A interface do reServer e a câmera devem ter cada uma um endereço IP na **mesma sub-rede** para se comunicarem. Obtenha o endereço da câmera na documentação ou etiqueta de fábrica (muitas câmeras são enviadas com um padrão fixo como `192.168.1.64`). Se o endereço for desconhecido, você pode executar `tcpdump` na interface mapeada enquanto desliga e liga a câmera — alguns modelos transmitem seu IP uma vez na inicialização.

Atribua um IP estático no lado do reServer para cada porta PoE. Exemplo para **LAN1** (`eth0`), câmera `192.168.1.64`, reServer `192.168.1.10/24`:

```bash
sudo nmcli connection add type ethernet ifname eth0 con-name POE1
sudo nmcli connection modify POE1 ipv4.addresses 192.168.1.10/24
sudo nmcli connection modify POE1 ipv4.method manual
sudo nmcli connection up POE1
```

Para várias câmeras, use **uma câmera por porta PoE** e uma **sub-rede diferente em cada porta**:

| Porta PoE | Nome da conexão | IP de exemplo do reServer | Sub-rede de exemplo da câmera |
| :--- | :--- | :--- | :--- |
| LAN1 | POE1 | 192.168.1.10/24 | 192.168.1.0/24 |
| LAN2 | POE2 | 192.168.2.10/24 | 192.168.2.0/24 |
| LAN3 | POE3 | 192.168.3.10/24 | 192.168.3.0/24 |
| LAN4 | POE4 | 192.168.4.10/24 | 192.168.4.0/24 |

Substitua `eth0`, nomes de conexão e endereços para corresponder ao seu mapeamento de portas e à documentação da câmera.

## Etapa 4: Verificar conectividade

```bash
ping -c 4 192.168.1.64
```

Substitua o endereço pelo IP da sua câmera. Um `ping` bem-sucedido significa que o link PoE e a configuração de IP no reServer Industrial estão corretos.

Depois que a conectividade for confirmada, consulte a documentação do fabricante da sua câmera para as próximas etapas — por exemplo URLs de stream RTSP, configuração ONVIF, integração com SDK industrial ou ingestão por NVR. Para pipelines de IA com múltiplas câmeras no reServer Industrial, veja [AI NVR com reServer Jetson](https://wiki.seeedstudio.com/pt-br/ai_nvr_with_jetson/).

## Solução de problemas

| Problema | Possível causa | Solução |
| :--- | :--- | :--- |
| `gpiochip2` não encontrado (JetPack 6) | Nome do chip GPIO difere conforme a imagem | Execute `gpioinfo`; use o chip e a linha para PoE (gpio-315). Veja a [tabela de GPIO](https://wiki.seeedstudio.com/pt-br/reserver_industrial_hardware_interface_usage/#gpio) |
| Câmera não liga | GPIO de PoE não ativado | Execute novamente a Etapa 1; confirme que o valor do GPIO é `1` |
| Câmera reinicia repetidamente | Consumo de energia excede 15 W | Use uma câmera compatível com 802.3af (≤ 15 W) ou uma fonte de alimentação externa |
| Não é possível identificar qual interface está UP | Vários cabos conectados | Desconecte todas as portas PoE; mapeie uma porta física por vez (Etapa 2) |
| Não é possível pingar a câmera | Sub-rede incompatível ou interface errada | Confirme que o IP do reServer está na mesma sub-rede da câmera; verifique o mapeamento de portas da Etapa 2 |
| IP da câmera desconhecido | Não documentado na etiqueta | Execute `sudo tcpdump -i <poe-interface> -n` na interface mapeada e, em seguida, desligue e ligue a câmera |
| Conflito entre várias câmeras | Mesmo IP padrão | Use uma porta PoE por câmera com sub-redes isoladas (veja a tabela da Etapa 3) |

## Recursos relacionados

- [Introdução ao reServer Industrial](https://wiki.seeedstudio.com/pt-br/reServer_Industrial_Getting_Started/)
- [Uso da interface de hardware do reServer Industrial](https://wiki.seeedstudio.com/pt-br/reserver_industrial_hardware_interface_usage/)
- [AI NVR com reServer Jetson](https://wiki.seeedstudio.com/pt-br/ai_nvr_with_jetson/)
- [Folha de dados do reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
