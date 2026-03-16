---
description: SenseCAP_T1000_tracker_and_Trackpac_Integrated
title: Trackpac Integrado
keywords:
  - SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_T1000_tracker_trackpac
last_update:
  date: 10/26/2023
  author: Jessie
createdAt: '2023-10-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_trackpac/
---

[Trackpac](https://trackpac.io/) é um sistema inovador de gerenciamento de painel de IoT (Internet das Coisas) projetado para simplificar os processos de supervisão, controle e notificações para uma ampla gama de dispositivos IoT. Esses dispositivos abrangem diversas funcionalidades, incluindo rastreadores, sensores de temperatura, sensores de umidade, indicadores de nível e outras ferramentas de medição de dados baseadas em sensores.

O conteúdo deste capítulo orientará os usuários sobre como conectar o [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) ao Trackpac.


## Configurar o Dispositivo

Verifique o [Quick Started](https://wiki.seeedstudio.com/pt-br/Get_Started_with_SenseCAP_T1000_tracker/) para configurar o seu dispositivo corretamente.

Selecione a plataforma como `Other Platform`, configure o `APP EUI` para o valor recomendado: 
```cpp 
545241434B504143
```

:::tip
Se em algum momento você quiser voltar atrás, um `reset` restaurará as chaves originais.
:::

Em seguida, copie o `Device EUI`, `APP EUI` e `APP key`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trackpac.png" alt="pir" width={300} height="auto" /></p>


## Configurar o portal Trackpac


Faça login no [portal Trackpac](https://v2.trackpac.io).

### Adicionar Dispositivo

Navegue até `Devices` e clique no ícone `+` para adicionar um novo dispositivo.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-device-trackpac.png" alt="pir" width={800} height="auto" /></p>

Escolha `Enter Keys Manually`, dê um nome ao seu dispositivo e configure o `Device EUI`, `APP EUI`,`APP key`.

**LoRaWAN Network**: Helium

:::note
Verifique a [Cobertura da Rede Helium](https://explorer.helium.com/).
:::

**Device Type**: SenseCAP T1000

Em seguida, clique em `Add Device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-trackpac.png" alt="pir" width={800} height="auto" /></p>


## Rastreamento

Agora o seu SenseCAP T1000 está integrado com sucesso ao Trackpac e você já pode verificar os dados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check-trackpac.png" alt="pir" width={800} height="auto" /></p>


## Adicionar Geofence (opcional)


Antes de adicionar uma geofence, você precisa adicionar contatos primeiro.

Navegue até a seção `Contacts` e clique no botão `+` no canto superior direito.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact1.png" alt="pir" width={800} height="auto" /></p>

Digite `Name` e `Select Contact Type`: Nos campos fornecidos, insira o nome do contato. Selecione o tipo de contato que você está adicionando — se ele receberá alertas via SMS, Email ou Both.

Insira o e-mail e/ou número de telefone do contato nos respectivos campos.

Após inserir todas as informações necessárias, clique no botão `Add` para finalizar e adicionar o contato.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact2.png" alt="pir" width={800} height="auto" /></p>

Navegue até a opção `Geofences`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence1.png" alt="pir" width={800} height="auto" /></p>


Clique na seta `+`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence2.png" alt="pir" width={800} height="auto" /></p>


Digite o Nome da Geofence e defina o Raio: Use o controle deslizante ou o campo de entrada para definir o raio da geofence em metros.

**Configurar Alertas**: Ative ou desative se você deseja receber alertas quando o limite da geofence for cruzado.

* Out of Hours: Especifique se você deseja receber alertas apenas fora de determinados horários.

* Start and End Time: Se "Out of Hours" estiver selecionado, insira o intervalo de tempo durante o qual você não deseja receber alertas.

**Selecionar Contatos para Alertas**: 

Escolha quais dos seus contatos salvos devem receber alertas de geofence inserindo seus nomes ou clicando na caixa e selecionando-os na lista.

**Definir o Centro da Geofence**:

* Clique no Mapa: Use o mouse para clicar no local onde você deseja que seja o centro da geofence.

* Use Geolocate: Alternativamente, você pode usar a função de geolocalização (geralmente representada por um ícone de bússola ou de localização) para aplicar zoom até sua localização atual e defini-la como o centro da geofence.

Clique em `Add Geofence` para salvar.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence3.png" alt="pir" width={800} height="auto" /></p>


Assim, você receberá alertas quando um rastreador entrar ou sair da geofence.