---
description: Conectar ao Datacake via TTN
title: Conectar ao Datacake via TTN
keywords:
  - SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp
slug: /how_to_connect_sensecap_s210x_to_datacake_via_ttn
last_update:
  date: 6/10/2025
  author: Zeno
createdAt: '2025-06-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/how_to_connect_sensecap_s210x_to_datacake_via_ttn/
---

# Conectar ao Datacake via TTN

## Datacake
Datacake é uma plataforma IoT low-code versátil. Ela permite que qualquer pessoa crie rapidamente aplicações IoT personalizadas, sem programação, e as converta instantaneamente em soluções white‑label com um único clique.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp)

## Etapa 1: Conectar ao TTN
Consulte "[How to connect S210X Sensors to The Things Network](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)"

**Nota:** Selecione **“Other Platform”** para a configuração de plataforma. 

## Etapa 2: Enviar Dados do TTN para o Datacake

(1) Crie uma nova conta, site: `https://datacake.co/`  
(2) Clique em **"Devices" -> "Add Device"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image2.png)

(3) Selecione **"LoranWAN"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image3.png)

(4) Selecione **"New Product from template"** e pesquise por **"Seeed"**, depois selecione o produto

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image4.png)

(5) Selecione **"The Things Stack V3"**, depois clique em **"Next"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image5.png)

(6) Insira **"DEVEUI"** e **"NAME"**, depois clique em **"Next"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image6.png)

-   Selecione **"Free"**  
-   Clique em **"Add 1 device"**

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image7.png)

(7) Crie chaves de API para autenticação posterior de Webhook
-   Vá até o seu Workspace do Datacake e selecione "Members" na barra lateral.  
-   Selecione "API Users" na barra de abas e mude para a aba API Users. 
-   Clique no botão no canto superior direito "Add API User"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image8.png)

-   Insira um nome para o seu API User
-   Em seguida selecione "Devices" na lista de permissões do Workspace
-   Clique em "Add Permission for all Devices in Workspace"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image9.png)

-   Selecione "Can record measurements"
-   Pressione "Save" para criar o Token

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image10.png)

-   Clique em "Copy"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image11.png)

Este Token de API agora é válido para todos os dispositivos no seu workspace. Sempre que você criar um novo dispositivo, esse Token passará a funcionar automaticamente para esse dispositivo.

Se você estiver interessado em criar um Token apenas para dispositivos selecionados, pode navegar até o dispositivo e selecionar o token a partir de lá. Mas você deve deixar de fora a permissão "All devices in workspace" aqui.

(8) Criar integração no TTN
-   Selecione "Webhooks" na barra lateral da aplicação TTN
-   Selecione "Add webhook"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image12.png)

-   Selecione "Datacake"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image13.png)

-   Insira um nome para o seu Webhook ID
-   Insira o token copiado do Datacake
-   Selecione "Create Datacake webhook"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image14.png)

(9) Configurar Downlinks  
Para poder enfileirar Downlinks na sua aplicação TTI, você precisa fornecer detalhes adicionais no seu dispositivo Datacake. Para definir a configuração, acesse as configurações LoRaWAN no dispositivo correspondente.
-   Volte para o Datacake
-   Selecione "configuration" e role um pouco para baixo

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image15.png)

-   Selecione "Change"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image16.png)

-   Aqui você precisa preencher as 4 caixas de texto com informações que você encontra no Console do TTN.

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image17.png)

-   Para TTS Device ID, este é o ID do seu dispositivo na sua aplicação TTN. Você o encontra aqui:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image18.png)

-   Para TTI Server URL, esta é a URL da sua instância TTN disponível publicamente. Para o TTNv3 público: `eu1.cloud.thethings.network`

-   Para TTI App ID, este é o ID da sua aplicação no TTN:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image19.png)

-   Criar TTI API Key
-   Selecione "API keys" e depois clique em "Add APIkey"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image20.png)

-   Insira o nome
-   Defina os direitos correspondentes para permitir enfileirar downlinks
-   Clique em "Create API key"

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image21.png)

-   Depois de criar sua API Key você verá a notificação
-   Copie sua chave para a área de transferência, pois ela será exibida apenas uma vez!
-   Cole esta chave nas configurações do dispositivo no Datacake

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image22.png)

-   Configurações finais:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image23.png)

**Nota: Não se esqueça de clicar em "Update"**

-   Downlinks configurados com sucesso

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image24.png)

(10) Adicionar Payload Decoder  
Copie seu Payload Decoder para aqui:

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image25.png)

Você também pode encontrar o [SenseCAP-Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main) no GitHub.