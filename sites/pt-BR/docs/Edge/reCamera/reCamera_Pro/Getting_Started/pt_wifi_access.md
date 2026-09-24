---
description: Conecte a reCamera Pro à sua rede Wi-Fi, encontre seu endereço IP de LAN e mude da conexão USB direta para o gerenciamento totalmente sem fio.
title: Acessar o dispositivo via Wi-Fi
keywords:
  - reCamera
  - reCamera Pro
  - Wi-Fi
  - acesso sem fio
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_wifi_access
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_wifi_access/
---

# Acessar o dispositivo via Wi-Fi

Assim que sai da caixa, você acessa a reCamera Pro através do cabo USB Type-C em `192.168.42.1`. Para permitir que o dispositivo acesse a Internet, ou para gerenciá-lo de qualquer lugar da sua rede local, conecte-o ao Wi-Fi e mude para o endereço IP de LAN.

## 1. Conectar a uma rede Wi-Fi

1. Faça login na interface Web (consulte o [início rápido](/pt-br/recamera_pro_getting_started/) se ainda não o fez).
2. Clique em **Device Info** na barra de navegação à esquerda.
3. Abra **Network Settings**. A reCamera Pro possui um módulo Wi-Fi integrado — ative o Wi-Fi se ele estiver desligado, e o sistema fará a varredura das redes próximas.
4. Selecione o SSID do seu Wi-Fi, insira a senha e conecte.

![Diagrama das etapas de configuração da rede sem fio](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/en_wifi_setting.png)

## 2. Encontrar o endereço IP de LAN do dispositivo

Após a conexão, clique no ícone de informações da rede conectada (o ponto de exclamação à direita) para ver informações detalhadas da rede — o endereço IP atribuído, endereço MAC e mais.

![Diagrama de visualização dos detalhes do Wi-Fi](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/wifi_details.png)

![Detalhes de rede em Device Info](https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_vq4u1biblp.png)

## 3. Alternar para acesso sem fio e verificar

1. Em um computador conectado à **mesma rede local**, abra um navegador e acesse o IP de LAN que você acabou de encontrar, por exemplo `http://192.168.4.200`.
2. Faça login com sua senha de administrador — você deverá acessar a mesma interface Web que usou via USB.
3. Abra **Real-time Preview** e clique em **Start** para confirmar que os fluxos de vídeo também funcionam via Wi-Fi.

:::tip Desconecte o cabo USB para operação totalmente sem fio
Quando a interface Web funcionar pelo IP de LAN, você pode **desconectar com segurança o cabo USB Type-C**. A conexão USB transporta apenas dados — o dispositivo continua em funcionamento com sua própria fonte de alimentação.
:::

:::note A alimentação ainda é necessária
Remover o cabo USB **não** remove a alimentação: a reCamera Pro deve permanecer conectada à sua fonte de alimentação DC de 12 V (ou outra fonte de alimentação adequada) para continuar funcionando.

{/* TODO(verify): confirm supported power options when the USB cable is unplugged (DC barrel only, or also PD over Type-C) and state them explicitly here. */}
:::

## Observações

- Se o computador e o dispositivo estiverem em redes diferentes (por exemplo, SSIDs de 2,4 GHz e 5 GHz que isolam clientes, ou uma rede de convidados), o IP de LAN pode ficar inacessível — coloque ambos na mesma rede.
- O endereço Wi-Fi pode mudar quando o dispositivo se reconectar. Para uma instalação permanente, reserve um endereço fixo para o MAC do dispositivo no seu roteador e conclua o restante da configuração de rede em [Rede, hora e controle de acesso](/pt-br/recamera_pro_device_info/).
- Falhas de conexão durante esta etapa: consulte [Solucionar problemas por sintoma](/pt-br/recamera_pro_faqs/).

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
