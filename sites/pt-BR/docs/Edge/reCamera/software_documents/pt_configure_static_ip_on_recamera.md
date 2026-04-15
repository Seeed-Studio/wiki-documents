---
description: Este wiki demonstra como configurar um endereço IP estático no reCamera.
title: Configurar IP Estático no reCamera
keywords:
  - Edge
  - reCamera
  - IP Estático
  - Rede
image: https://files.seeedstudio.com/wiki/reCamera/static_ip_banner.png
slug: /configure_static_ip_on_recamera
sku: 102991897,102991896,102991894,102991895,101991223,102991898,101991224,102991899,108990119,108990120,E20245041001,100018917, 100041077, 100029708, 100074316
sidebar_position: 9
last_update:
  date: 04/13/2026
  author: Samuel
createdAt: "2026-04-13"
updatedAt: "2026-04-13"
url: https://wiki.seeedstudio.com/pt-br/configure_static_ip_on_recamera/
---

# Configurar IP Estático no reCamera

Este documento explica como configurar um endereço IP estático no reCamera (sistema Buildroot). A configuração inclui três etapas: editar o arquivo de configuração, definir parâmetros de rede estáticos e reiniciar o serviço de rede para verificação.

## Configuração de IP Estático

### Etapa 1: Editar o arquivo de configuração de rede

Execute o seguinte comando no terminal do reCamera:

```bash
sudo vi /etc/network/interfaces
```

### Etapa 2: Definir parâmetros de IP estático para `eth0`

Configure `eth0` como uma interface estática. Atualize os valores com base na sua rede real e certifique-se de que o `address` não duplique nenhum outro endereço IP na mesma LAN:

```bash
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet static
    address 192.168.2.100
    netmask 255.255.255.0
    gateway 192.168.2.1
```

Se você também precisar definir o DNS manualmente:

```bash
echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf
```

### Etapa 3: Reiniciar a rede e verificar

Aplique as novas configurações sem reiniciar:

```bash
sudo /etc/init.d/S40network restart
```

Em seguida, verifique o endereço do `eth0`:

```bash
ip addr show eth0
```

Se a saída incluir o `address` configurado por você, o IP estático foi configurado com sucesso.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/static_ip_output.png" /></div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
