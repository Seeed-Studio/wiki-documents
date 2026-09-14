---
description: Get_Started_with_SenseCAP_Combo
title: Introdução ao SenseCAP Combo
keywords:
  - SenseCAP Combo
  - Data Logger
image: https://files.seeedstudio.com/wiki/SenseCAP/Combo/SenseCAP_Combo_5in1_4G.webp
slug: /get_started_with_sensecap_combo
sku: 100035616
last_update:
  date: 8/23/2026
  author: Janet
createdAt: '2026-08-23'
updatedAt: '2026-08-23'
url: https://wiki.seeedstudio.com/pt-br/get_started_with_sensecap_combo/
---

# Introdução ao SenseCAP Combo

Este capítulo mostra como configurar rapidamente o seu SenseCAP Combo Sensor 5-em-1 com 4G e conectá-lo à Plataforma em Nuvem SenseCAP.

:::tip note
O SenseCAP Combo Sensor 5-em-1 com 4G usa conectividade 4G Cat.1 e o protocolo MQTT para enviar dados para a Plataforma em Nuvem SenseCAP ou para o seu próprio servidor MQTT de terceiros. Certifique-se de que você tenha um cartão Micro SIM (3FF) válido com cobertura de dados móveis na área de implantação.
:::

### Ambiente de operação

O SenseCAP Combo é projetado para operar de forma confiável dentro de uma faixa de temperatura específica para garantir desempenho estável e segurança da bateria. Certifique-se de que o dispositivo seja usado e carregado dentro dessas faixas de temperatura para evitar degradação de desempenho ou problemas na bateria.

| Parâmetro | Especificação |
|---------|---------------|
| Temperatura de operação | 0°C ~ 40°C |
| Temperatura de carregamento | 0°C ~ 40°C |
| Umidade de operação | 0 ~ 100% RH (sem condensação) |

:::caution note
A temperatura de operação do dispositivo é limitada pelo adaptador de energia incluso, que suporta uma faixa de temperatura de operação de 0°C a 40°C.

O adaptador de energia foi projetado apenas para uso interno. Não exponha o adaptador de energia diretamente a ambientes externos. O adaptador de energia deve ser instalado dentro de um gabinete à prova d'água ou quadro elétrico para garantir proteção adequada.
:::
<br />

## Instalar o cartão SIM

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/14.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

1. Abra a tampa de borracha marcada como “SIM” e levante o suporte metálico.
2. Insira o cartão SIM no slot, prenda-o com o suporte metálico e feche bem a tampa de borracha.


:::caution note
Após instalar o cartão SIM, certifique-se de que a tampa de borracha esteja totalmente vedada. Caso contrário, o desempenho à prova d'água do dispositivo pode ser afetado.
:::

<br />

## Conexão do sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/15.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

O dispositivo fornece uma porta RS-485 para conectar sensores Modbus-RTU externos.

1. Desrosqueie a tampa protetora da interface e conecte o sensor à porta RS-485.
2. Após conectar o sensor, certifique-se de que o conector de aviação esteja totalmente apertado. Se o conector não estiver em uso, ele também deve ser apertado para evitar entrada de água e danos ao dispositivo.

:::caution note
1. Conecte os sensores **antes** de ligar o dispositivo. Caso contrário, eles podem não ser detectados. Nesse caso, reinicie o dispositivo.
2. Ao usar um divisor, não conecte sensores com o mesmo endereço Modbus à interface RS-485.
3. Se você conectar um sensor de 12V, o dispositivo deve ser alimentado por uma fonte de alimentação DC externa.
:::

<br />

## Configurar para a Plataforma em Nuvem SenseCAP

Antes da implantação, certifique-se de que o dispositivo possa operar normalmente e enviar dados.

### Etapa 1. Baixar o aplicativo SenseCraft

Baixe o aplicativo SenseCraft na App Store ou Google Play para gerenciar seu dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/App_Download.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Etapa 2. Criar nova conta

Crie uma conta pelo aplicativo SenseCraft ou pelo PC na plataforma em nuvem SenseCAP: [https://sensecap.seeed.cc/portal](https://sensecap.seeed.cc/portal)

1. Clique em "Register", insira seu e-mail e envie. Um e-mail de verificação será enviado.
2. Abra o e-mail de "SenseCAP", clique no link e conclua o registro.
3. Abra o aplicativo, selecione "Global Server", insira sua conta e senha e faça login.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/login-page.PNG" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

### Etapa 3. Vincular dispositivo

1. Vá para a página "Devices". Clique no ícone "+" no canto superior direito.
2. Escaneie o código QR na etiqueta do dispositivo para vinculá-lo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/add-new.png" alt="Get Started with SenseCAP Combo" width={400} height="auto" /></p>

<br />

## Ligar o dispositivo (status do indicador)

Antes de ligar, certifique-se de que os sensores e o cartão SIM estejam instalados.

:::caution note
Ao instalar sensores, certifique-se de que o dispositivo esteja desligado. Caso contrário, os sensores externos podem não ser detectados.
:::

Pressione o botão metálico na parte inferior do dispositivo. O indicador vermelho acenderá. Aguarde cerca de 3 minutos para o dispositivo ficar online. (O tempo depende da quantidade e do tipo de sensores. Mais sensores exigem mais tempo.)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/1.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

:::note
1. O dispositivo inclui um painel solar integrado para carregamento.
2. Ao usar sensores de 12V, é necessário um adaptador externo. Garanta proteção adequada contra água ao usar um adaptador.
:::

<br />

## Visualizar dados e status

Você pode visualizar os dados e o status do dispositivo pelo aplicativo ou PC.

### Pelo aplicativo SenseCraft

Visualize os dados diretamente no aplicativo após o dispositivo estar vinculado e online.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/2.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Pelo portal SenseCAP

Acesse [https://sensecap.seeed.cc](https://sensecap.seeed.cc) e faça login. Clique em "Data" para verificar se os dados foram enviados com sucesso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/3.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

<br />

## SenseCAP API

A SenseCAP API é para usuários gerenciarem dispositivos IoT e dados. Ela inclui 3 tipos de métodos de API: protocolo HTTP, protocolo MQTT e protocolo Websocket.

- Com a HTTP API, os usuários podem gerenciar dispositivos LoRa, obter dados brutos ou dados históricos.
- Com a MQTT API, os usuários podem assinar os dados de medição em tempo real do sensor por meio do protocolo MQTT.
- Com a Websocket API, os usuários podem obter dados de medição em tempo real dos sensores por meio do protocolo Websocket.

Consulte o [API User Guide](https://sensecap-docs.seeed.cc/) para mais detalhes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/16.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

<br />

## Configurações gerais

Para configurar o endereço do servidor, adicionar sensores ou alterar intervalos de envio de dados, use a ferramenta de configuração para PC:

- Baixar ferramenta: [SenseCAP Sensor Hub Configuration Tool NG](https://github.com/Seeed-Solution/SenseCAP-Sensor-Hub-Configuration-Tool-NG/releases)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/4.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

- Driver (primeiro uso): [CH341 USB Driver](https://wch-ic.com/downloads/CH341SER_EXE.html)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/5.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Configuração do servidor MQTT

1. Conecte o dispositivo a um PC usando um cabo USB Type-C.
2. Abra a ferramenta, selecione a porta COM, ative "Enter configuration mode automatically on device's booted", clique em "Connect" e depois pressione o botão metálico. (Os botões "General Settings" e "Sensor Settings" ficarão azul escuro.)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/6.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

3. Clique em "General Settings". Mensagens de depuração aparecerão no painel direito.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/7.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

4. Clique na área de entrada e digite: **b**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/8.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

5. Após inserir o comando: **2**, pressione Enter. Isso indica que você mudou para a nova plataforma em nuvem 2.

:::note
- **1** é a plataforma em nuvem SenseCAP (padrão)
- **2** é o servidor MQTT de terceiros do usuário
- **3** é a implantação privada SenseCAP
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/9.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

6. Clique em "General Settings". Insira o endereço do servidor MQTT, porta, nome de usuário e senha. Clique em "Write".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/10.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Intervalo de envio de dados e intervalo de envio de CO₂

- **Reporting interval:** para todos os sensores, exceto CO₂
- **CO₂ interval:** múltiplo do intervalo de envio

Clique em "Write" após a configuração.

:::note
Intervalos curtos podem fazer com que a taxa de carregamento solar seja menor que a taxa de descarga, resultando em o dispositivo não conseguir carregar.
:::
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/11.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Configuração de APN

Insira APN, nome de usuário e senha, se necessário. O padrão é automático.

### Exportar dados em cache

Clique em "Export Cache Data" para exportar todos os dados históricos.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/12.png" alt="Get Started with SenseCAP Combo" width={800} height="auto" /></p>

### Verificar envio de dados para o servidor

Após configurar o servidor:

1. Feche a ferramenta
2. Desconecte o cabo USB
3. Pressione o botão metálico para reiniciar o dispositivo

Aguarde alguns minutos e, em seguida, assine as mensagens de acordo com o formato de tópico usando a ferramenta de assinatura MQTT para verificar se você consegue receber os dados do dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Combo/13.png" alt="Comece a usar o SenseCAP Combo" width={800} height="auto" /></p>


<br />

## Solução de problemas

### Status anormal do canal do sensor na plataforma em nuvem

- Normalmente causado por um sensor ser desconectado durante a operação.

### [ERROR] No sensor found. Is the sensor connected?

Verifique o seguinte:

- Verifique se a sequência de fiação do sensor (positivo/negativo/RS485 A, B) está correta;
- Certifique-se de que o endereço Modbus do sensor corresponda ao endereço definido em "Sensor Settings";
- Verifique se o tipo de alimentação do sensor está configurado corretamente;
- Certifique-se de que o tempo de aquecimento, o tempo de inicialização e o tempo limite de resposta atendam aos requisitos do sensor;
- Verifique se o código de função e os registradores para os valores medidos estão configurados corretamente;

### [ERROR] RS485 err code: XX

Alguns sensores exigem um tempo de aquecimento. Se a comunicação for iniciada antes que esse tempo de aquecimento seja atingido, o sensor retornará um erro de código de função.

Ao testar um sensor, o primeiro passo é verificar se o sensor existe. Essa verificação requer apenas aguardar o tempo de inicialização, não o tempo de aquecimento. Por exemplo, se o tempo de inicialização do sensor for 1 segundo e o tempo de aquecimento for 5 minutos, e a unidade de aquisição de dados tentar se comunicar após ligar o sensor, mas aguardar apenas 1 segundo, um erro de código de função será recebido. A janela exibirá "[ERROR] rs485 err code". Ao adquirir dados, o tempo de aquecimento será aguardado antes da comunicação para garantir a aquisição dos dados.

<br />

## Instalação e observações

### Uso da bateria interna em ambientes de baixa temperatura

- Faixa de descarga: 0°C ~ 50°C
- Faixa de carregamento: 0°C ~ 40°C

Observe que, como o dispositivo possui uma bateria de lítio interna, ao usar energia solar ou um adaptador:

1. Se a temperatura ambiente permanecer abaixo de 0 °C, a bateria permanecerá sem carga até que a temperatura ambiente suba acima de 0 °C.
2. Durante o período em que o carregamento é interrompido, se a bateria for completamente descarregada, o dispositivo não poderá operar usando energia solar ou um adaptador. Será necessário aguardar que a temperatura ambiente suba acima de 0 °C e que a bateria de íons de lítio seja carregada até um nível seguro para que o dispositivo possa funcionar normalmente.
<br />

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>