---
description: Conectar Wio Tracker 1110 ao Home Assistant
title: Integração com Home Assistant
keywords:
  - Home assistant
  - Wio tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /wio_tracker_home_assistant
sidebar_position: 5
last_update:
  date: 1/25/2024
  author: Jessie
createdAt: '2024-01-25'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/wio_tracker_home_assistant/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>

Integre a [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) ao Home Assistant para rastreamento em tempo real e análise ambiental ao vivo. A [Wio Tracker 1110 Dev Board](https://www.seeedstudio.com/Wio-Tracker-1110-Dev-Board-p-5799.html) é uma plataforma de desenvolvimento de rastreamento baseada em LoRa, fácil de usar; você pode usar a dev board para desenvolver mais recursos personalizados, tornando o ambiente da sua casa mais inteligente e responsivo.

## Primeiros Passos

Neste tutorial usamos o [Home Assistant Green](https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html) como host do Home Assistant; você pode usar qualquer host do Home Assistant com Supervisor. Consulte a seção [Installation](https://www.home-assistant.io/installation/) para mais detalhes.

### Configuração do Dispositivo

Antes de começarmos, certifique-se de que você leu o [User Guide](https://wiki.seeedstudio.com/pt-br/Get_Started_with_Wio-Trakcer_1110/) da Wio Tracker 1110 Dev Board e selecione a plataforma como `SenseCAP`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/SenseCAP/Wio-Tracker/Wio-1110getstart/4.jpeg" alt="pir" width={300} height="auto" /></p>

### Configuração do Home Assistant

Acesse a [interface web do Home Assistant](http://homeassistant.local:8123/).

Para desbloquear todo o potencial do Home Assistant e ter acesso a recursos avançados, é recomendado ativar o `Advanced mode` na interface do usuário.

Clique no seu perfil e ative o `Advanced mode`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/advanced-mode.png" alt="pir" width={800} height="auto" /></p>

#### Instalar Add-ons

Vá para [Settings > Add-ons](https://my.home-assistant.io/redirect/supervisor).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-ons.png" alt="pir" width={800} height="auto" /></p>

Na seção Official `add-ons`, você encontrará os add-ons `File editor` e `Advanced SSH & Web Terminal`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/2-ons.png" alt="pir" width={800} height="auto" /></p>

É recomendado ativar `Show in sidebar` para que você possa encontrá-los mais facilmente.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/show-sidebar.png" alt="pir" width={800} height="auto" /></p>

#### Instalar HACS

O Home Assistant Community Store oferece uma interface poderosa para gerenciar downloads de todas as suas necessidades personalizadas.

Abra o terminal e navegue até o diretório config:

```cpp
cd /config
```

Baixe e execute o script de instalação do HACS:

```cpp
wget -q -O - https://install.hacs.xyz | bash -
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/comand-page.png" alt="pir" width={600} height="auto" /></p>

Depois que o script de instalação for concluído, reinicie o Home Assistant para aplicar as alterações.

Vá para `Settings` > `System` > `Restart`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/restart.png" alt="pir" width={800} height="auto" /></p>

Navegue até `Settings` ->  `Devices & Services`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/device-service.png" alt="pir" width={800} height="auto" /></p>

Clique em `ADD INTEGRATION` para adicionar uma nova integração.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-inte.png" alt="pir" width={800} height="auto" /></p>

Pesquise por `HACS` e clique nele.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/HACS.png" alt="pir" width={800} height="auto" /></p>

Apenas o último item (recursos experimentais) é opcional; você precisa aceitar tudo acima disso antes de configurar o HACS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/submit.png" alt="pir" width={600} height="auto" /></p>

Siga as instruções para autorizar o Home Assistant a acessar sua conta do GitHub. Isso geralmente envolve inserir um código de verificação fornecido pelo GitHub para confirmar sua identidade.

O HACS usa um fluxo OAuth de dispositivo para autenticação junto à API do GitHub.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/12.png
" alt="pir" width={600} height="auto" /></p>

#### Instalar o plugin SenseCraft

Navegue até o `HACS`, clique no ícone no canto superior direito e escolha `Custom repositories`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/14.png
" alt="pir" width={800} height="auto" /></p>

Copie o `Repositorie`:

**Repository**:

```cpp
https://github.com/Seeed-Solution/SenseCraft-HomeAssistant.git
```

**Category**: `Integration`

Clique em `Add`. O repositório agora foi adicionado ao seu HACS, e você também pode encontrar a integração SenseCraft na lista em `Integrations`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/custom-re.png" alt="pir" width={800} height="auto" /></p>

Navegue até a integração `SenseCraft` e clique em `DOWNLOAD`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/17.png" alt="pir" width={800} height="auto" /></p>

Concluímos com sucesso a instalação do plugin SenseCraft.

#### Adicionar Dispositivos

Navegue até `Settings` -> `Devices & Services` -> `SenseCraft` e clique em `ADD DEVICE`.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-device-.png" alt="pir" width={800} height="auto" /></p>

Selecione `Add devices using SenseCraft Account(账号集成)`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/account-inte.png" alt="pir" width={800} height="auto" /></p>

Faça login com a conta do seu aplicativo SenseCAP Mate e selecione a versão `global`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-login.png" alt="pir" width={800} height="auto" /></p>

Em seguida, todos os dispositivos da sua conta serão listados; selecione aquele que você deseja conectar e clique em `SUBMIT`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/craft-device.png" alt="pir" width={800} height="auto" /></p>

Quando a conexão for bem-sucedida, você verá o dispositivo e a entidade exibidos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/cloud-device.png" alt="pir" width={800} height="auto" /></p>

Clique no dispositivo; você verá todos os dados enviados. Clique em `ADD TO DASHBOARD`
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-dashboard.png" alt="pir" width={800} height="auto" /></p>

#### Adicionar Card de Mapa

Antes de adicionarmos o card de mapa, precisamos adicionar primeiro uma entidade de localização.

Abra o `File Editor` e navegue até o arquivo `configuration.yaml`, adicionando o seguinte código:

```cpp
template:
  - sensor:
      - name: "Device Location"
        state: >
          {{ states('sensor.latitude') }},{{ states('sensor.longitude') }}
        attributes:
          latitude: "{{ states('sensor.latitude') }}"
          longitude: "{{ states('sensor.longitude') }}"
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/yaml2.png" alt="pir" width={800} height="auto" /></p>

:::tip
`name` pode ser personalizado, e o `states` deve ser o mesmo que o ID de entidade do seu dispositivo.

Você pode verificar o ID de entidade em `Settings` -> `Devices and Services` -> `Entities`
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-id.png" alt="pir" width={600} height="auto" /></p>
:::

Clique em `ADD CARD` no dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/add-card.png" alt="pir" width={800} height="auto" /></p>

Escolha o card Map.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-card.png" alt="pir" width={800} height="auto" /></p>

Copie o código para o `CODE EDITOR` e clique em `SAVE`.

```cpp
type: map
entities:
  - entity: sensor.device_location
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/code-editor.png" alt="pir" width={800} height="auto" /></p>

:::tip
A entidade deve ser a mesma que o ID de entidade do seu dispositivo. Você pode verificar o ID de entidade em `Settings` -> `Devices and Services` -> `Entities`
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/entity-location.png" alt="pir" width={600} height="auto" /></p>
:::

Agora você pode verificar a localização em tempo real no mapa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/map-map.png" alt="pir" width={800} height="auto" /></p>

Todos os dados da Dev Board podem ser visualizados no dashboard.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/dog-locate.png" alt="pir" width={800} height="auto" /></p>
