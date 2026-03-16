---
description: Este é um projeto / plataforma de código aberto focado em IA embarcada.
title: Treine e Faça o Deploy do Seu Próprio Modelo de IA
keywords:
  - tinyml course
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /train_and_deploy_model
last_update:
  date: 09/24/2024
  author: Frank
createdAt: '2024-09-24'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/train_and_deploy_model/
---

# Treine e faça o deploy do seu próprio modelo de IA

## Plataforma SenseCraft AI

A [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/#/model) da Seeed Studio é uma solução de IA baseada em navegador.

Ela capacita os usuários a treinar e fazer o deploy de seus próprios modelos em seus dispositivos de borda sem esforço, proporcionando uma experiência contínua e amigável, permitindo que você treine e faça o deploy de seus próprios modelos diretamente em seus dispositivos de borda com **apenas alguns cliques**.

:::info
O núcleo dela é um projeto de código aberto e nós o compartilhamos no [GitHub](https://github.com/Seeed-Studio/ModelAssistant) e oferecemos também o [método de desenvolvimento](/pt-br/ModelAssistant_Introduce_Overview).
:::

## Comece a treinar o modelo

Primeiro vamos ao [Website de Deployment SenseCraft AI](https://sensecraft.seeed.cc/ai/#/device/local?time=1724577953974), depois simplesmente conecte o XIAO ESP32S3 Sense ao seu PC via um cabo de dados para começar a usar instantaneamente.

#### Passo 1. Instalar a placa de expansão XIAO ESP32S3 Sense

Primeiro, precisamos conectar corretamente a placa de expansão XIAO ESP32S3 Sense ao XIAO. Instalar a placa de expansão é muito simples, você só precisa alinhar o conector na placa de expansão com o conector B2B no XIAO ESP32S3, pressionar com força e ouvir um “click”; a instalação estará concluída.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

#### Passo 2. Conectando o XIAO ao seu PC

Conecte o XIAO ao seu PC usando um cabo de dados com função de transferência de dados.

#### Passo 3. Acesse a página da Plataforma SenseCraft AI e conecte o XIAO

Clique no botão abaixo para ir à página inicial da Plataforma SenseCraft AI.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"2"}>SenseCraft AI Platform</font></span></strong></a>
</div><br />

#### passo 4. Comece a treinar o modelo

Após entrar na página inicial da plataforma SenseCraft AI, primeiro clicamos em `Training`, depois selecionamos `Classification Type`, nomeamos suas classes e, por fim, escolhemos `XIAO ESP32S3 Sense`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/1.png" style={{width:800, height:'auto'}}/></div>

Em seguida, com base em seus requisitos de classificação, consulte sua classe e clique em `Hold to Record`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/2.png" style={{width:800, height:'auto'}}/></div>

Desta vez, escolhi o requisito de reconhecimento de gestos para classificar “12345”.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/3.png" style={{width:800, height:'auto'}}/></div>

:::tip

Capturar imagens: Cada uma com mais de 10 imagens está bom; quanto mais, melhor.

:::

Após a conclusão da coleta de dados, selecionamos `XIAO ESP32S3 Sense` na seção Training e clicamos em `Start Training`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/4.png" style={{width:800, height:'auto'}}/></div>

Após o término do treinamento, podemos ver nossos resultados de treinamento por meio de uma pré-visualização em tempo real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/5.png" style={{width:800, height:'auto'}}/></div>

#### passo 5. Faça o deploy do modelo

Depois de pré-visualizar e confirmar que o modelo treinado está bom, selecionamos `Training Records`, depois escolhemos o modelo treinado recentemente (chamado “ClassTrain” e “XIAO”) e clicamos em `Deploy to device`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/6.png" style={{width:800, height:'auto'}}/></div>

Após o deploy bem-sucedido para o dispositivo, você verá os resultados diretamente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/7.gif" style={{width:800, height:'auto'}}/></div>

Você treinou com sucesso seu primeiro modelo de ML!

:::info

Se você tiver mais tempo, pode tentar usar [a operação `Output` que você aprendeu antes](https://wiki.seeedstudio.com/pt-br/sscma/#2-SenseCraft-Triggers---faça-uma-ação-de-feedback-simples).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/trainingmodel/8.png" style={{width:800, height:'auto'}}/></div>

:::

# ToDo

- [ ] Treinar e fazer o deploy de modelos usando a plataforma SenseCraft AI.
- [ ] Configurar um Trigger e **controlar o LED** para seus modelos treinados com a Plataforma SenseCraft AI.

## (Opcional) Federar: Transmitir dados à distância

Nesta etapa, estamos tentando transmitir nossos dados do XIAO ESP32S3 Sense para um dispositivo remoto, usando Wi-Fi e MQTT, ajudando-nos a ver seu deployment remotamente.

### Passo 1. Configurar MQTT em um dispositivo e testar

Como exemplo, estamos usando o NVIDIA Jetson reComputer J4012 para isso. Ele suporta instalação de broker MQTT e o mais importante é que oferece 100 TOPS de poder de IA, para aplicarmos LLM localmente.

A Plataforma SenseCraft AI oferece suporte a conexão Wi-Fi e MQTT.

<iframe width={800} height={480} src="https://www.youtube.com/embed/-KAyUHzRxHc" title="Unboxing & Plug in reComputer J4012 - Powered by NVIDIA Jetson Orin NX" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

Primeiro precisamos instalar o broker MQTT (Mosquitto) e então tentar configurar o servidor MQTT.

```
sudo apt-get update
sudo apt-get install mosquitto
```

e concluir a instalação do Mosquitto no reComputer (Linux).

Em seguida, execute o comando:

```
sudo service mosquitto start
```

para iniciá-lo.

Depois podemos executar este comando:

```
sudo service mosquitto status
```

para ver se ele foi ativado:

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_1-3919de85499db74b41cf3057bcdfe6bd.png)

:::info
Testando:

Para criar/assinar um tópico:

```
mosquitto_sub -h localhost -t "LED"
```

Para enviar/publicar alguns dados:

```
mosquitto_pub -h localhost -t "LED" -m "1"
mosquitto_pub -h localhost -t "LED" -m "test"
```

Obtendo os resultados e parece que está tudo certo:

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_3-281bf87c08ecdb601595625229a7e1df.png)
:::

E o `localhost` é `192.168.66.184` (como reComputer):

![image](https://fabacademy.org/2024/labs/chaihuo/students/matthew-yu/assets/images/mqtt_docusaurus_xiao_2-8202adc158ca9aa540a264c288c431ed.jpg)

### Passo 3. Configurar XIAO ESP32S3 Sense na Plataforma SenseCraft AI

Na Plataforma SenseCraft AI, você pode consultar a página “Configuration”:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/xiao_mqtt_1.png" style={{width:800, height:'auto'}}/></div>

:::info

- SSID: (nome do Wi-Fi igual ao do seu dispositivo MQTT)
- Password: (senha do Wi-Fi do seu dispositivo MQTT)
- Encryption: AUTO
- MQTT: Yes
- Host: (endereço IP do seu dispositivo MQTT)
- Port: 1883

Neste exemplo, o dispositivo MQTT é o reComputer, como acima.
:::

### Passo 3. Receber dados do XIAO ESP32S3 Sense e exibir

Na parte de recebimento, você pode instalar um cliente com o comando:

```
pip install python-sscma
```

Este é um cliente integrado para o [sscma_micro](https://github.com/Seeed-Studio/sscma_micro), que é um microcontrolador no servidor para os modelos [SSCMA](https://github.com/Seeed-Studio/SSCMA).

E então receba os dados usando:

```
sscma.cli client --broker mqtt.broker.com --device device_id 
```

:::info
Neste caso, `mqtt.broker.com` é 192.168.66.184, `device_id` vem do XIAO ESP32S3 Sense na Plataforma SenseCraft AI.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/tinyml-topic/xiao_mqtt_2.png" style={{width:300, height:'auto'}}/></div>
:::

### Passo 4. (em breve) Federar múltiplos XIAOs em uma página

### Passo 5. (em breve) Habilitar LLM para assistir automaticamente às imagens do XIAO
