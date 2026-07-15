---
description: Introdução aos possíveis problemas que podem surgir ao usar a API.
title: FAQ
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_faq
sku: 10003420
sidebar_position: 6
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_api_faq/
---

# FAQ

## Login

### O login retorna iStatus=-1, o que devo fazer?

A senha está incorreta. Verifique se o nome de usuário e a senha estão corretos. O nome de usuário padrão é `admin`.

### O login retorna iStatus=-3, o que devo fazer?

Várias tentativas de login com falha acionaram um bloqueio baseado em IP. Aguarde `sWaittime` segundos para o bloqueio expirar e tente novamente.

### O login é bem-sucedido, mas as APIs subsequentes retornam 401, o que devo fazer?

O Token está ausente ou expirado. Certifique-se de que o cabeçalho da requisição inclua `Cookie: token=<JWT_TOKEN>` e que o Token não tenha excedido seu tempo de vida de 24 horas. Se estiver expirado, faça login novamente.

### Por quanto tempo o Token é válido?

O Token é válido por 24 horas por padrão (`Max-Age=86400`). Após expirar, faça login novamente para obter um novo.

## Rede

### O dispositivo fica inacessível após alterar as configurações de rede, o que devo fazer?

Alterar o endereço IP, gateway ou parâmetros de Wi-Fi pode fazer com que o endereço do dispositivo mude. Acesse o dispositivo por meio do novo endereço ou recupere-o por meio de uma conexão de rede direta.

### Qual é a diferença entre /network/wlan e /network/wifi?

`/network/wlan` é para configuração de IPv4 sem fio (endereço, gateway, máscara, DNS). `/network/wifi` é para informações da conexão Wi-Fi atual, conexão e desconexão.

### O que devo colocar em sSsid ao conectar ao Wi-Fi?

`sSsid` é o identificador exclusivo da rede Wi-Fi. Chame `/network/wifi-list` primeiro e, em seguida, use o valor `sBssid` da lista para se conectar.

## HTTPS

### O navegador avisa sobre um certificado não confiável ao acessar via HTTPS, o que devo fazer?

O dispositivo usa um certificado autoassinado. Para testes locais, você pode prosseguir ignorando o aviso. Para implantação em produção, instale um certificado confiável.

### Não é possível acessar o dispositivo via HTTP após habilitar HTTPS, o que devo fazer?

Após habilitar HTTPS, use `https://<DEVICE_IP>` para todos os acessos subsequentes.

## Caminhos da API

### Por que alguns caminhos começam com /api/v1/ e outros com /cgi-bin/?

A maioria dos endpoints exige o caminho base CGI `/cgi-bin/entry.cgi`. Os endpoints de porta serial e de arquivos são caminhos diretos que ignoram a camada CGI e são acessados em `/api/v1/...`.

### Por que um endpoint retorna 404?

A versão atual do firmware pode não implementar esse endpoint ou o caminho pode ter sido construído incorretamente. Verifique se o caminho precisa de `/cgi-bin/entry.cgi` e confira a versão do firmware.

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
