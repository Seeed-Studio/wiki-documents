---
description: Como definir a chave de API
title: Como definir a chave de API
keywords:
  - Primeiros passos com SenseCAP Indicator
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key
sidebar_position: 4
last_update:
  date: 5/31/2023
  author: Thomas
createdAt: '2023-05-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Sensor/SenseCAP/SenseCAP_Indicator/Set_An_API_Key/
---

# **Como definir a chave de API**

:::caution Bloqueio geográfico
**Nota**: Os serviços da API OpenAI podem não estar disponíveis em certos países, como China, Irã e Rússia. Consulte [a lista de países e territórios suportados](https://platform.openai.com/docs/supported-countries) para mais informações.

Certifique-se de que o seu ambiente de rede permita conectividade com a API da OpenAI.
:::

### Obter uma chave de API

- **Passo 1:** Faça login em https://platform.openai.com/signup
  Se você ainda não tiver uma conta, será necessário criar uma.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/login.png"/></div>

- **Passo 2:** Visite sua [página de chave OpenAI](https://platform.openai.com/account/api-keys) ou clique no item de menu "View API keys"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/key1.png"/></div>

- **Passo 3:** Crie uma nova chave clicando no botão "Create new secret key". Veja a imagem como referência.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/newkey.png"/></div>

> **Limites de taxa:**
> A OpenAI aplica limites de taxa às solicitações que você pode fazer para a API. Eles são aplicados em solicitações por minuto, tokens por minuto ou, no caso de modelos de imagem, imagens por minuto.
>
> Saiba mais na documentação de [limites de taxa](https://platform.openai.com/docs/guides/rate-limits/overview) ou consulte os [limites de taxa padrão](https://platform.openai.com/docs/guides/rate-limits/what-are-the-rate-limits-for-our-api) para seus modelos.

### Definir uma chave

- **Passo 4:** Conecte-se ao Indicator via **porta serial** (aqui, usando a ferramenta de monitor serial fornecida pela Arduino IDE).

Selecione a placa e a porta.

- **Placa**: Seeed INDICATOR RP2040
- **Porta**: porta usbserial

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/chooseboard.png"/></div>

- **Passo 5:** Abra o monitor de porta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/monitor.png"/></div>

- **Passo 6:** Envie o seguinte comando para o dispositivo para definir o APIKey:

```sh
openai_api -k {sk-your apikey}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/setkey.png"/></div>

Você verá que o log mostra: "`openai_api_key read successful`", então está tudo pronto. Aproveite sua jornada com IA agora!

# **Suporte Técnico**
**Precisa de ajuda com o seu SenseCAP Indicator? Estamos aqui para ajudar você!**

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

