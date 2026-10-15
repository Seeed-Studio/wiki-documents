---
description: OpenWrt-FAQ
title: Como alterar o IP do gateway padrão no OpenWrt?
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /change_default_gateway_IP
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-07-28'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/change_default_gateway_IP/
---

<!-- Q1: What if I connect the OpenWrt router to my existing router which has a default gateway IP of 192.168.2.1? -->

A imagem OpenWrt da Seeed vem pré-configurada com as configurações de rede necessárias. Você provavelmente só precisará alterar uma configuração de rede para o cenário que envolve a Dual Gigabit Ethernet Carrier Board para Raspberry Pi CM4 conectando-se ao seu roteador existente, e o roteador tem o IP de gateway padrão definido como 192.168.2.1, que é o mesmo IP de gateway padrão do OpenWrt. Nesse cenário, você precisa alterar o IP padrão da interface LAN no OpenWrt da seguinte forma:

- **Passo 1.** Abra um navegador da web e faça login no portal do OpenWrt digitando **192.168.2.1**

- **Passo 2.** Navegue até **System > TTYD Terminal** e faça login com **root** como nome de usuário

- **Passo 3.** Abra o seguinte arquivo

```sh
vi /etc/config/network
```

- **Passo 4.** Altere o endereço IP estático na interface LAN da seguinte forma

```sh
config interface 'lan'
        option type 'bridge'
        option ifname 'eth0'
        option proto 'static'
        option ipaddr '192.168.3.1'
        option netmask '255.255.255.0'
        option ip6assign '60'
```

**Observação:** Aqui o IP estático é alterado para **192.168.3.1**. No entanto, você pode digitar qualquer endereço IP de sua escolha

- **Passo 4.** Reinicie o roteador

```sh
reboot
```
