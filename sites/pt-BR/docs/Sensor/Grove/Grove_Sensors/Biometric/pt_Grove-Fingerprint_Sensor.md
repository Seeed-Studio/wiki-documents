---
description: Grove - Sensor de Impressão Digital
title: Grove - Sensor de Impressão Digital
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Fingerprint_Sensor
sku: 101020057
last_update:
  date: 1/6/2023
  author: jianjing Huang
createdAt: '2023-01-06'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-Fingerprint_Sensor/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Print_Sensor.jpg" /></div>

O Sensor de Impressão Digital é um sensor óptico de impressão digital que torna a detecção e verificação de impressões digitais super simples. Há um chip DSP de alta potência AS601 que faz o processamento de imagem, cálculo, detecção de características e busca. Você também pode registrar novos dedos diretamente – até 162 impressões digitais podem ser armazenadas na memória FLASH onboard. Há um LED vermelho na lente que acende durante a captura de imagens para que você saiba sua condição de funcionamento. Ele é fácil de usar e, até agora, é o melhor sensor de impressão digital que você pode obter.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Fingerprint-Sensor-p-1424.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Especificações
-------------

- Tensão de alimentação: 3,6~6,0 V
- Corrente de operação (máx): 120 mA
- Tempo de captura da impressão digital: 1,0 s
- Modo de correspondência: Modo de comparação 1:1
- Modo de busca: 1:N
- Capacidade de armazenamento: 162 modelos
- Taxa de falsa aceitação: 0,001% (nível de segurança 3)
- Taxa de falsa rejeição: 1,0% (nível de segurança 3)
- Taxa de transmissão: 9600, 19200, 28800, 38400, 57600 bps (padrão é 57600)
- Interface: Serial TTL
- Temperatura de trabalho: -20 ~ +50 ℃
- Interface

| Número do pino | Nome | Tipo | Descrição da função                                     |
|------------|------|------|----------------------------------------------------------|
| 1          | Vin  | in   | Terminal de entrada de alimentação positiva (cor do fio: vermelho)     |
| 2          | TD   | out  | Saída de dados seriais, níveis lógicos TTL (cor do fio: amarelo) |
| 3          | RD   | in   | Entrada de dados seriais, níveis lógicos TTL (cor do fio: branco)   |
| 4          | GND  | -    | Terra de sinal (cor do fio: preto)                         |

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

Primeiros Passos
-------------

O módulo Sensor de Impressão Digital é normalmente usado em cofres – há um chip DSP de alta potência que faz o processamento de imagem, cálculo, detecção de características e busca. Conecte a qualquer microcontrolador ou sistema com serial TTL e envie pacotes de dados para capturar imagens, detectar impressões, gerar hash e buscar. Você também pode registrar novos dedos diretamente – até 162 impressões digitais podem ser armazenadas na memória FLASH onboard. Há um LED vermelho na lente que acende durante a captura de imagens para que você saiba sua condição de funcionamento.

- Conecte o sensor à Porta Digital 2 do Grove - Base Shield.
- Conecte o Grove - Base Shield ao Arduino e conecte o Arduino ao PC usando um cabo USB.

Quando você liga a alimentação, é possível ver o LED vermelho piscar, o que indica que o sensor está funcionando.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/FingerPrint_Sensor1.jpg" /></div>

- Baixe a [Finger Print Sensor Library](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/Fingerprint_library.rar) e descompacte-a na pasta libraries da IDE Arduino pelo caminho: ..\\arduino-1.0.1\\libraries.

A biblioteca pode registrar e buscar, portanto é perfeita para qualquer projeto. Ela pode ajudar você a começar em menos de 10 minutos. Basicamente existem dois requisitos para usar o sensor óptico de impressão digital. Primeiro, você precisará registrar impressões digitais – isso significa atribuir IDs a cada impressão para que você possa consultá-las depois. Depois de registrar todas as suas impressões, você pode facilmente “buscar” no sensor, pedindo que ele identifique qual ID (se houver) foi fotografado no momento.

- Abra o código de registro diretamente pelo caminho: **File->Example->FingerPrint->Enroll**.
- Envie o código para o Arduino.
- Inicie a ferramenta Serial e selecione o ComNum e o BaudRate usados pelo Arduino.
- Selecione a opção "SendNew". Envie o número de ID que você deseja usar. Você pode usar até 162 números de ID. Em seguida, ele pedirá que você pressione o dedo no sensor. Nesse momento, você deverá ver o LED vermelho piscar.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/FingerPrint_Sensor3.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger1.jpg" /></div>

- Se a sua pressão estiver OK, você verá a seguinte mensagem. Você terá então que repetir o processo para obter uma segunda impressão limpa. Use o mesmo dedo! Em caso de sucesso, você verá a mensagem.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger2.jpg" /></div>

- Se houver um problema, como uma impressão ou imagem ruim, você terá que fazê-lo novamente.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger_Print_Score_2.jpg" /></div>

Depois que você tiver o dedo registrado, é uma boa ideia fazer um teste rápido para garantir que ele possa ser encontrado no banco de dados.

- Abra o código de demonstração: fingerprint e faça o upload.
- Quando solicitado, pressione um dedo diferente/igual no sensor. Se for o mesmo dedo, você deverá obter uma correspondência com o número de ID, como mostrado abaixo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger_Print_Score_3.jpg" /></div>

- Se não for um dedo presente no banco de dados, esta porta serial não exibirá nada.

:::tip
Para mais detalhes sobre módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Recursos
--------

- **[Library]** [Arquivo da Finger Print Sensor Library](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/Fingerprint_library.rar)
- **[Datasheet]** [ZhianTec ZFM-206 Série Datasheet (para esta versão, mas em chinês simplificado)](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/ZFM206用户手册V2.1.pdf)
- **[Datasheet]** [ZhianTec ZFM-20 Série Datasheet (para séries mais antigas, mas em inglês)](https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/ZFM-user-manualV15.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Fingerprint_Sensor -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

