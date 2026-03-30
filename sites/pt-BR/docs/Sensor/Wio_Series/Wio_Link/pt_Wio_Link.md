---
title: Wio Link
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio_Link/
slug: /Wio_Link
sku: 102110037
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Wio_Link/
---

Qual é a parte mais difícil de criar aplicações de IoT? Alguém diz que os jump wires normalmente o deixam frustrado, enquanto outra pessoa diz que odeia soldar mais do que tudo. Há até pessoas que não gostam de breadboard. Talvez você não seja um deles, mas o conhecimento de engenharia eletrônica, programação de microcontroladores, programação de rede e manipulação de protocolos de IoT ainda são um grande fardo entre você e um projeto de IoT bem‑sucedido.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink.png)

Para simplificar todas essas etapas, no final de 2015, a Seeed Studio lançou o Wio Link no [KickStarter](https://www.kickstarter.com/projects/seeed/wio-link-3-steps-5-minutes-build-your-iot-applicat?ref=nav_search), definindo uma nova maneira de desenvolver aplicações de IoT. O Wio Link é uma placa de desenvolvimento Wi‑Fi open‑source baseada em SoC ESP8266; a melhor parte dela é a plataforma associada que permite aos usuários criar aplicações de IoT virtualizando módulos plug‑n‑play em APIs RESTful com Apps móveis. Isso significa que não haverá programação de hardware, nem breadboard, nem jump wires e nem soldagem; apenas instalando um App no seu celular, você consegue construir um projeto simples de IoT em 5 minutos.

[![](https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Wio-Link-p-2604.html)

:::caution
     A função Wio IFTTT está em fim de vida (EOL). Mas o Wio APP está disponível. Você pode usar a API do Wio APP para ler o status do sensor e controlar o atuador. 
:::

## Recursos

- Sem programação de hardware, sem breadboard, sem jump wires, sem necessidade de soldagem.
- Muitos módulos Grove são suportados (verifique a lista no App móvel).
- Módulos Grove plug‑n‑play
- Configuração visual em vez de programação de microcontrolador.
- Atualização automática via compilação na nuvem e OTA.
- Leve o mundo real para a plataforma virtual. Todos os sensores se tornam API RESTful virtuais.
- Apps Android e iOS para gerenciar o Wio Link.
- IFTTT suportado pelo Channel da Seeed

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Banner.gif)

## Especificação

----

|Geral|Valor|Gerenciamento de Energia|Valor|
|:---|---|:---|---:|
|**Tamanho**|55mm * 48mm|**Corrente CC por pino de E/S**|12mA|
|**Cristal**|26MHz|**Tensão de Entrada (Micro USB)**| 5V|
|**Memória Flash**|4MBytes (W25Q32B)|**Tensão de Entrada (soquete de bateria)**|3.4~4.2V|
|**Protocolo de Rede Wi‑Fi**|802.11b/g/n|**Corrente CC de Saída**|1000mA MÁX
|**Tecnologia de Criptografia Wi‑Fi**|WEP/TKIP/AES|**Tensão de Operação**|3.3V|
|**Conectores Grove**|6 |**Corrente de Carga**|500mA MÁX|
|**Flash**| 4MB (W25Q32B)|

## Crie com o Wio Link

----
O Wio Link é bem projetado para fornecer soluções Wi‑Fi simples para projetos como:

- Casa inteligente
- Monitoramento ambiental inteligente
- Brinquedos divertidos
- Web das Coisas
- Internet das Coisas

Na verdade, nós já projetamos muitos projetos na nossa [**recipe**](https://community.seeedstudio.com/projects.html?t=Wio). Venha visitá‑la para encontrar alguns projetos interessantes ou até compartilhar seus próprios projetos, tenho certeza de que isso trará muitos fãs para você ~

|Sistema de controle de irrigação |Parede de LEDs na internet | Máquina de alimentação de cães|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/2.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/1.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/3.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1274)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1594) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1066)|

|Monitor do Kickstarter|Monitor de chamadas perdidas|Tecla do chefe|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/4.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/5.png)|![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/6.png)|
|[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1081)    |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1059) |[MAKE IT NOW](https://community.seeedstudio.com/project_detail.html?id=1077)|

:::note
       * Algumas das receitas são feitas para o Wio Node, mas podem ser aplicadas ao Wio Link também.
:::

## Visão Geral de Hardware

---

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Hardware%20overview.jpg)

|Parte|Função|
|---|---|
|MCU |ESP8266|
|Porta Digital 0 |GPIO 14|
|Porta Digital 1| GPIO 12|
|Porta Digital 2 |GPIO 13|
|Porta Analógica |A3|
|Porta UART| Pino 1 & Pino 3|
|Porta I2C| Pino 4 & Pino 5|
|Luz de Status|O LED azul é o indicador de status do WiFi, o LED vermelho indica o status de funcionamento
|Botão de Configuração| Para configurar e gerenciar seu Wio Link|
|Suporte de Bateria|JST2.0|
|Micro USB|Para alimentar a placa ou comunicar‑se com o PC|
|Botão de Reset| Para resetar a MCU|

### LEDs de Status

Perto do botão FUNCTION há 2 LEDs de status, um azul e um vermelho. O LED AZUL é o LED indicador de status de rede. Ele tem os seguintes padrões de piscada:

- efeito de respiração no modo de configuração
- pisca duas vezes rapidamente e depois apaga por 1s solicitando endereço IP do roteador
- pisca uma vez rapidamente e depois apaga por 1s conectando ao servidor
- aceso 1s e apagado 1s O nó está online
- aceso constantemente o nó está travado por não obter IP ou não se conectar ao servidor.
- pisca rapidamente (aceso 100ms e apagado 100ms) OTA  

:::note
     * O LED AZUL está ligado ao GPIO2, que também é o pino TX da UART1. Ao baixar o firmware, a UART1 despeja os dados transmitidos na UART0 por padrão. Assim, o LED AZUL piscará enquanto o firmware é baixado. Após a inicialização, o GPIO2 será configurado como um GPIO e não como TX da UART1.
:::
O LED VERMELHO é outro LED de status que indica o status de alimentação dos módulos Grove. Os VCC das seis interfaces Grove convergem juntos e podem ser controlados com o GPIO 15. Quando o nó está em modo de deep sleep, todos os módulos Grove também ficam sem alimentação. O LED VERMELHO acenderá quando os módulos Grove estiverem alimentados e apagará quando os módulos Grove não estiverem alimentados.

### Bônus

O Wio Link possui um carregador de bateria LiPo integrado, então você pode carregar uma bateria LiPo de 3,7V através da Porta JST 2.0 quando o USB estiver conectado.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/500px-Wio_Link_Battery.jpg)

:::note
     * A bateria precisa ser comprada separadamente. Visite o [Bazaar](https://www.seeedstudio.com/s/Battery.html), onde organizamos muitas opções para você.
:::

## Primeiros Passos

---

Vamos construir uma aplicação de LED bem básica com o Wio Link; nesta aplicação você poderá controlar o LED pelo seu smartphone em cerca de 5 minutos. Antes de começarmos, certifique‑se de ter os itens abaixo em mãos:

|Wio Link|Grove - LED|Cabo Micro USB|
|:--------:|:-----------:|:---------------:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20small%20image.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/Red%20LED.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/48cmUSBc.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Wio-Link-p-2604.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|[Adquira agora](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)|

:::note
    * Um smartphone também é necessário (Android OS versão 4.1 ou superior, iOS versão 7 ou superior)
    * O Grove - LED já inclui um cabo Grove
:::

### **ETAPA 1:** Instalar o App para Android/iOS

Você precisa instalar o App Wio Link para gerenciar e configurar seus dispositivos Wio Link.

Baixe o App Android ou iOS e instale. Ou você pode ir à App Store da Apple ou ao Google Market e pesquisar por "Wio Link"; você o encontrará.

|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Android%20Robot%20new.jpg)](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Apple%20new.jpg)](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|
|:---:|:---:|
|[Get Android App](https://play.google.com/store/apps/details?id=cc.seeed.iot.ap)|[Get iOS App](https://itunes.apple.com/us/app/wio-link/id1054893491?mt=8)|

:::note
    * Certifique‑se de que a versão do seu Android OS é 4.1 ou superior, e a do iOS é 7 ou superior.
:::

### **ETAPA 2:** Criar sua Conta

- Se é a primeira vez que você usa o Wio APP, ele pode solicitar autorização de GPS; por favor, aprove e depois faça o cadastro.
- Se você já tem uma conta, verifique a localização do servidor antes de fazer login.

:::note
    * Preste atenção à localização do servidor, porque uma localização de servidor errada levará a falhas ao conectar‑se ao Wio Link.
:::
[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)](https://files.seeedstudio.com/wiki/Wio_Node/pictures/Wio%20App/sign%20in%2Blog%20in%2Bchoose%20server.png)

### **ETAPA 3**: Conectar ao Wi‑Fi AP do Wio Link

- Pressione e segure o botão CONFIG até que o LED azul entre em modo de respiração (isto é, piscando com efeito de fade in & fade out). Isso significa que o Wio Link entrou com sucesso em modo de configuração e pode ser detectado pelo Wio App.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/WioLink_Configure-middle.png)

- Toque em "Add your first Device".
- Escolha Wio Link
- "Go to Wi-Fi list" o levará para a interface de configuração de Wi‑Fi do seu smartphone.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-1new.png)

- Se você fez com que o LED azul entrasse com sucesso em modo de respiração, encontrará o Wio Link na lista de Wi‑Fi; conecte‑se a ele! (Normalmente ele não aparece como Wio Link na lista de Wi‑Fi; no exemplo, o meu é Wio_8B2F12, você pode encontrar um chamado wio_xxxxxx na sua lista.)
- Uma vez conectado, você receberá uma notificação; então poderá voltar ao app
- A próxima etapa é conectar ao Wi‑Fi da sua casa ou empresa

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-2.png)

- Se houver senha no Wi‑Fi ao qual você quer se conectar, pode ser necessário inserir a senha
- Considerando que você pode precisar conectar mais de 1 dispositivo Wio no futuro, um nome especial fará com que você os diferencie facilmente uns dos outros.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step3-3.png)

### **ETAPA 4:** Interconectar virtualmente módulos com o Wio Link e atualizar o firmware

- Clique no Wio Link e você estará na interface principal.
- Existem 6 conectores Grove, selecione o primeiro à esquerda.
- Como o LED é um dispositivo de saída. Escolha a categoria de saída
- Encontre o ícone que parece uma lâmpada, escolha-o.
- Então você verá que o botão retangular inferior fica vermelho e "View API" se torna "Update Firmware". Escolha "Update Firmware"

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step4.png)

- Como você selecionou a porta Digital 0 para conectar o LED no APP, você também precisa conectar o Grove-LED real à porta Digital 0 do Wio Link.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio_Link_Grove_LED%20middle.JPG)

### **ETAPA 5**: Testar o aplicativo usando APIs

- Agora que você conectou com sucesso o LED ao Wio Link, clique em "View API" para verificar a API do Wio Link
- Insira "1" ou "0" na área "Test Request" e clique no botão "Post" e veja o que acontece.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Step5.png)

## Introdução ao IFTTT & DoButton

---
Não sabe programar? Não se preocupe, com a ajuda do [IFTTT](https://en.wikipedia.org/wiki/IFTTT), mesmo que você não saiba nada sobre programação, ainda será capaz de construir alguns projetos simples.

IFTTT é a abreviação de "If This Then That", é um serviço gratuito baseado na web que permite aos usuários criar cadeias de instruções condicionais simples, chamadas de "recipes", que são acionadas com base em mudanças em outros serviços da web, como Gmail, Facebook, Instagram. Como o IFTTT funciona com o Wio Link? Como você pode ver nas imagens abaixo, a Seeed fornece serviço em nuvem em wio.seeed.io, que pode trocar dados e enviar instruções para o IFTTT e o Wio Link. Assim, criando algumas recipes simples, você consegue hackear coisas sem programar.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT.png)

Se você não tem uma conta IFTTT, clique [aqui](https://ifttt.com/join) para se cadastrar.

Se você já tem uma conta IFTTT, clique [aqui](https://ifttt.com/recipes/search?q=seeed) para conectar com a Seeed, ou pesquise por Seeed no site do IFTTT. Lá você encontrará 9 recipes da Seeed para ensinar como usar o IFTTT.
![](https://files.seeedstudio.com/wiki/Wio_Link/image/IFTTT%20recipes.png)

O que é DoButton? DoButton é um dos aplicativos do IFTTT que permite criar seu próprio botão personalizado com apenas um toque, é muito adequado para construir projetos de IoT e controlá-los pelo seu smartphone, aqui estão dois exemplos para mostrar como usar IFTTT & DoButton para fazer aplicações úteis.

### Exemplo

|**IFTTT**|**DoButton**|
|:---|:---|
|[**Recipe**][DIY an Automatic Garden Irrigation without coding](https://community.seeedstudio.com/project_detail.html?id=1080)|[**Recipe**][How to feed your pets when you're not home](https://community.seeedstudio.com/project_detail.html?id=1066)|
|[**Video**][How to use ITFFF](https://vimeo.com/148590984)|[**Video**][How to use DoButton](https://vimeo.com/146988454)|

## Guia para usuários avançados

----
Acha esses exemplos simples demais? Quer fazer projetos mais complicados? Aqui estão os melhores guias para usuários avançados hackearem coisas com o Wio Link. Com esses guias, usuários avançados são capazes de conhecer informações mais detalhadas sobre o Wio Link, implantar servidor privado e até escrever driver de módulo para o Wio Link.

[![](https://files.seeedstudio.com/wiki/Wio_Node/pictures/GOTO_ADVANCED_GUIDE.png)](https://github.com/Seeed-Studio/Wio_Link/wiki)

O guia abrange:

- Referência de API
- Guia de Implantação de Servidor
- Guia de Usuário Avançado
- Como escrever driver de módulo para Wio Link?

## Tutorial avançado

Se você controlou com sucesso o Grove-LED com seu smartphone e quer tentar algo mais difícil e nem tão complicado assim, por que não tentar este tutorial? Depois de aprendê-lo, você será capaz de construir um monitor de temperatura e umidade e acender a fita de LED RGB com o Wio Link.

Antes de começar, verifique se você tem os dispositivos abaixo em mãos.

|Fita de LED RGB|Grove-Temperature and Humidity Sensor|
|:---:|:---:|
|![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20LED%20Strip.jpg)|![](https://files.seeedstudio.com/wiki/Wio_Link/image/grove-T%26H%20sensor.jpg)|
|[Adquira agora](https://www.seeedstudio.com/s/led%20strip.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|

- Etapa1: Remova o Grove LED do conector Grove, conecte a fita de LED ao Wio Link e arraste o mesmo módulo para o Wio Link no App.
- Atualize o firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video.png)

- Etapa2：Conecte o Grove-Temperature and Humidity Sensor ao Wio Link e arraste o mesmo módulo para o Wio Link no App.
- Atualize o firmware.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/advance%20tutorial%20video%202.png)

- Etapa3: Veja as APIs e leia a temperatura e umidade na sua casa. A imagem abaixo mostra a mudança de temperatura antes e depois de segurar o Grove na mão. Eu aumentei a temperatura em 1 grau Celsius. Tente e veja como você pode mudar a temperatura e a umidade na sua casa.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Celsuis%202%20pics.png)

- Etapa4: Controle a luz da fita de LED alterando o valor RGB.

Como o aplicativo Wio Link lê valores RGB em hex, o valor RGB precisa ser convertido para valor hex. Aqui eu gostaria de recomendar o site [RGB t0 Hex](https://www.rgbtohex.net/). Apenas inserindo o valor RGB para os 3 elementos RGB (Red, Green, Blue), o site converterá o valor RGB para hex de forma muito fácil. Aqui está um exemplo.

- Insira 255, 0, 0

![](https://files.seeedstudio.com/wiki/Wio_Link/image/RGB%20255%200%200.png)

- Converta, então você terá o valor hex como FF0000, a cor é Vermelho.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/FF0000.png)

:::note
    * O valor RGB que você inserir deve ser qualquer número natural entre 0 e 255 (incluindo 0 e 255)
:::
Então insira quantos Leds você quer acender e o valor hex no app, aqui minha fita de LED tem 30 Leds, então eu acendi todos eles.

![](https://files.seeedstudio.com/wiki/Wio_Link/image/Wio%20link%20control%20led%20strip.png)

Você também pode especificar qual parte da fita será acesa e dar uma cor especial a ela, ou até fazê-la piscar em modo arco-íris. Muitas funções incríveis estão esperando pela sua exploração!

## Recursos

---

Hardware

- [Arquivos de esquema EAGLE](https://files.seeedstudio.com/wiki/Wio_Link/resource/Wio_Link_SCH_v1.0.rar)
- [Arquivo de PCB EAGLE](https://files.seeedstudio.com/wiki/Wio_Link/resource/202000877%20Wio%20Link%20v1.0%20sch%20pcb.zip)
- [Arquivos de esquema (pdf)](https://files.seeedstudio.com/wiki/Wio_Link/resource/Wio%20Link%20v1.0%20sch.pdf)

Software

- [Código-fonte no Github.](https://github.com/Seeed-Studio/Wio_Link)

Mais documentação e referências

- [Referência de API](https://seeed-studio.github.io/Wio_Link/)
- [Guia de Implantação de Servidor](https://github.com/Seeed-Studio/Wio_Link/wiki/Server%20Deployment%20Guide)
- [Como escrever driver de módulo para Wio Link](https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F)
- [iot.seeed.cc](http://iot.seeed.cc/index.html) para obter mais informações.

## FAQ

----
Aqui estão algumas perguntas que geralmente recebemos de novos usuários. Se você tiver quaisquer outros problemas ao usar o Wio Link ou outros produtos Wio, seja bem-vindo à [Community of Wio](https://community.seeedstudio.com/topics.html?t=Wio) onde há muitos usuários profissionais esperando para lhe dar conselhos e também muitos usuários avançados fornecendo muitas ideias sobre como usar produtos Wio!

**1. Energia e Bateria － O Wio Link vem com uma bateria Lipo?**

Não. Cada Wio Link acompanha um cabo micro USB para carregamento ou você pode comprar uma bateria Lipo de 3,7 V em nosso Bazaar. Aqui estão as especificações para sua referência:

- tensão máxima de entrada: 4,2 V;
- corrente máxima de carregamento: 500 mA.

**2. Energia e Bateria - Posso usar um adaptador de energia com o Wio Link? Que tipo? E suportes de bateria comuns?**

Há duas maneiras de alimentar o Wio Link, cabo Micro USB ou uma bateria Lipo de 3,7 V. Se tanto o Micro USB quanto a bateria estiverem conectados à placa, a bateria será carregada pela energia USB. Você pode usar todos os tipos de adaptador de energia que possam se conectar com cabo Micro USB e saída de 5 Vdc. O conector da bateria é JST-2.0.

**3. Consumo de Energia - Qual é o consumo de energia do Wio Link?**

O consumo médio de energia é 70 mA. Com uma bateria de 700 mAh, ele pode ficar ativo por até 10 horas. Existem Low-Power-APIs que permitem mudar o Wio Link do modo de trabalho para o modo de suspensão. Isso reduzirá o consumo médio de energia para 150 uA ou menos.

**4. Cabos Grove - Os Groves vêm equipados com cabos em todos os kits?**

Sim, temos cada módulo Grove embalado com um cabo Grove padrão de 4 pinos.

**5. RESTful APIs - Onde estão os endpoints? As chamadas não precisam passar por algum servidor em nuvem, precisam? É necessária uma conexão com a Internet ou elas podem ser feitas todas por uma rede local?**

Nós implantamos o servidor REST API em iot.seeed.cc, então você pode obter acesso ao sensor e atuador a partir de iot.seeed.cc. No momento, o Wio Link deve se conectar à Internet. Além disso, vamos tornar o servidor open-source para permitir que os usuários implantem servidores locais de uma maneira muito simples usando Docker. Com servidores locais implantados, eles podem utilizar o serviço de compilação e troca de dados localmente em vez de ir online.

**6. Métodos de Programação Suportados - Outros métodos de programação serão suportados, como Arduino IDE?**

O Wio Link pode ser programado com Arduino IDE, nesse caso ele perderá a funcionalidade das RESTful APIs, a menos que você implemente outra ao mesmo tempo. O Wio Link é principalmente destinado a alcançar a conversão Web of Things para hardware físico, então espera-se que as interações sejam realizadas na web / internet. Mas não se preocupe, a arquitetura de software é flexível, você pode baixar o código-fonte para localmente e conectar o Wio Link aos servidores locais, então você poderá modificar o código-fonte que será compilado.

Se você quiser interagir com Arduino ou RPI, você pode desenvolver um driver de módulo de terceiros e aqui está o guia: https://github.com/Seeed-Studio/Wio_Link/wiki/How-to-write-module-driver-for-Wio-Link%3F e um driver de exemplo: https://github.com/Seeed-Studio/Grove_Drivers_for_Wio/tree/master/grove_example

**7. Plataforma suportada - O Wio Link oferece suporte à plataforma Windows?**

Até agora o Wio Link oferece dois aplicativos móveis, Android e iOS. Temos todos os serviços como RESTful API, como contas de usuário e OTA; seguindo a documentação da API, desenvolvedores de terceiros podem criar seus próprios aplicativos, como aplicativos móveis ou aplicativos para desktop.
Wio Link é um projeto amigável à comunidade. Ele não ficará limitado a uma determinada plataforma. Realmente esperamos que as pessoas possam brincar com o Wio Link do seu jeito.

**8. Posso usar o Wio Link para interagir com sistemas existentes?**

Sim. O Wio Link pode interagir com o seu sistema existente de várias maneiras. Primeiro, conecte qualquer GPIO do Wio Link a outro sistema, selecione os módulos Grove virtuais “Generic Digital Input” ou “Generic Digital Output” no aplicativo móvel e então envie/leia sinais para/de o sistema existente com chamadas RESTful API. Segundo, conecte a porta analógica do Wio Link a outro sistema, selecione o módulo Grove virtual “Generic Analog Input” no aplicativo móvel e então leia medições analógicas de alguma grandeza física do seu sistema existente. Terceiro, para interagir com o sistema existente de forma mais flexível, você pode desenvolver um driver de módulo de terceiros no qual distribui as requisições da internet para o seu sistema existente através da interface I2C ou UART. Temos um guia[1] sobre como desenvolver driver de módulo de terceiros e também podemos fornecer suporte técnico para o seu desenvolvimento.

[1]https://github.com/Seeed-Studio/Wio_Link#how-to-write-module-driver-for-wio-link

**9. Quantos Groves são suportados no Wio Link?**

Existem mais de 150 tipos de módulos Grove plug and play disponíveis, dos quais 36 são suportados no Wio Link até agora, e você pode encontrar a maioria deles nas recompensas; estamos trabalhando continuamente para adicionar mais.

Aqui está a lista de Groves suportados até agora:

### Lista de suporte Grove

|SKU       |Name                                        |Interface |Driver                 |Link       |
|----------|--------------------------------------------|----------|-------------------    |-----------|
|101020008 |    Grove - Moisture Sensor                 |Analog    |itself                 | [link](https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html) |
|101020014 |    Grove - Light Sensor                    |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html) |
|101020015 |    Grove - Temperature Sensor              |Analog    |itself                 | [link](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html) |
|101020017 |    Grove - Rotary Angle Sensor             |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html) |
|101020022 |    Grove - Light Sensor(P)                 |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Light-Sensor(P)-p-1253.html) |
|101020023 |    Grove - Sound Sensor                    |Analog    |ifself                 | [link](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html) |
|101020027 |    Grove - Electricity Sensor              |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html) |
|101020036 |    Grove - Slide Potentiometer             |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html) |
|101020042 |    Grove - 80cm Infrared Proximity Sensor  |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html) |
|101020043 |    Grove - UV Sensor                       |Analog    |itself                 | [link](https://www.seeedstudio.com/Grove-UV-Sensor-p-1540.html) |
|101020048 |    Grove - Rotary Angle Sensor(P)          |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor(P)-p-1242.html) |
|101020063 |    Grove - Loudness Sensor                 |Analog    |itself                 | [link](https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html) |
|101020076 |    Grove - Luminance Sensor                |Analog    |itself                 | [link](https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html) |
|101020078 |    Grove - Air quality sensor v1.3         |Analog    |Generic Analog Input   | [link](https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html) |
|101020003 |    Grove - Button                          |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Button-p-766.html) |
|101020004 |    Grove - Switch(P)                       |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html) |
|101020005 |    Grove - Collision Sensor                |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Collision-Sensor-p-1132.html) |
|101020009 |    Grove - Line Finder                     |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Line-Finder-p-825.html) |
|101020018 |    Grove - Water Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html) |
|101020020 |    Grove - PIR Motion Sensor               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html) |
|101020025 |    Grove - Tilt Switch                     |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html) |
|101020037 |    Grove - Touch Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html) |
|101020038 |    Grove - Magnetic Switch                 |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html) |
|101020046 |    Grove - Hall Sensor                     |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Hall-Sensor-p-965.html) |
|101020049 |    Grove - Flame Sensor                    |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html) |
|111020000 |    Grove - Button(P)                       |Digital   |Generic Digital Input  | [link](https://www.seeedstudio.com/Grove-Button(P)-p-1243.html) |
|101020073 |    Grove - Electromagnet                   |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html) |
|101020090 |    Grove - Water Atomization v1.0          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/s/101020090.html#) |
|103020004 |    Grove - Solid State Relay               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Solid-State-Relay-p-1359.html) |
|103020005 |    Grove - Relay                           |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Relay-p-769.html) |
|103020008 |    Grove - MOSFET                          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-MOSFET-p-1594.html) |
|103020010 |    Grove - 2-Coil Latching Relay           |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-2-Coil-Latching-Relay-p-1446.html) |
|103020014 |    Grove - Dry-Reed Relay                  |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Dry-Reed-Relay-p-1412.html) |
|104020001 |    Grove - Variable Color LED              |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Variable-Color-LED-p-852.html) |
|104020002 |    Grove - Purple LED (3mm)                |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Purple-LED-(3mm)-p-1143.html) |
|104020005 |    Grove - LED String Light                |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) |
|104030005 |    Grove - Red LED                         |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) |
|104030007 |    Grove - Green LED                       |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html) |
|104030009 |    Grove - White LED                       |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) |
|104030010 |    Grove - Blue LED                        |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html) |
|104030014 |    Grove - Multi Color Flash LED (5mm)     |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Multi-Color-Flash-LED-(5mm)-p-1141.html) |
|105020003 |    Grove - Vibration Motor                 |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html) |
|105020004 |    Grove - Mini Fan                        |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html) |
|105020005 |    Grove - EL Driver                       |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html) |
|107020000 |    Grove - Buzzer                          |Digital   |Generic Digital Output | [link](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) |
|107020001 |    Grove - Speaker                         |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Speaker-p-1445.html) |
|101020034 |    Grove - 3-Axis Digital Compass          |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html) |
|101020039 |Grove - 3-Axis Digital Accelerometer(±1.5g) |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html) |
|101020050 |    Grove - 3-Axis Digital Gyro             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html) |
|101020072 |    Grove - Barometer Sensor (BMP180)       |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html) |
|101020083 |    Grove - Gesture                         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Gesture-p-2463.html) |
|101020088 |    Grove - Multichannel Gas Sensor         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-p-2502.html) |
|103020013 |    Grove - I2C ADC                         |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) |
|104030008 |    Grove - OLED Display 1.12''             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|104030011 |    Grove - OLED Display 0.96''             |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96''-p-781.html) |
|105020001 |    Grove - I2C Motor Driver                |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html) |
|107020006 |    Grove - I2C FM Receiver                 |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-I2C-FM-Receiver-p-1953.html) |
|101020192 |    Grove - Barometer(BMP280)               |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP280)-p-2652.html) |
|101020193 |Grove - Temp&Humi&Barometer Sensor(BME280)  |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Temp%26Humi%26Barometer-Sensor-(BME280)-p-2653.html) |
|101020010 |    Grove - Ultrasonic Ranger               |Ditital   |itself                 | [link](https://www.seeedstudio.com/Grove-Ultrasonic-Ranger-p-960.html) |
|101020016 |    Grove - Infrared Receiver               |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html) |
|101020019 |    Grove - Temperature&Humidity Sensor Pro |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html) |
|101020026 |    Grove - Infrared Emitter                |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html) |
|101020029 |    Grove - Infrared Reflective Sensor      |Others    |itself                 | [link](https://www.seeedstudio.com/Grove-Infrared-Reflective-Sensor-p-1230.html) |
|101020030 |    Grove - Digital Light Sensor            |I2C       |itself                 | [link](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html) |
|101020040 |    Grove - IR Distance Interrupter         |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html) |
|103020018 |    Grove - Recorder                        |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Recorder-p-1825.html) |
|104020006 |    Grove - LED Bar v2.0                    |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-LED-Bar-v2.0-p-2474.html) |
|104030003 |    Grove - 4-Digit Display                 |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-4-Digit-Display-p-1198.html) |
|316010005 |    Grove - Servo                           |Digital   |itself                 | [link](https://www.seeedstudio.com/Grove-Servo-p-1241.html) |
|101020067 |    Grove - CO2 Sensor                      |UART      |itself                 | [link](https://www.seeedstudio.com/Grove-CO2-Sensor-p-1863.html) |

**10. Código de erro do Wio Link e solução**

| 1021 | Falha ao conectar ao Wi‑Fi     | Não foi possível conectar ao Wi‑Fi. Verifique a senha do Wi‑Fi e tente novamente                                                           |
|------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| 1031 | Falha ao conectar ao Wi‑Fi do Wio | Não foi possível conectar ao ponto de acesso Wi‑Fi do Wio, tente novamente ou escolha manualmente o ponto de acesso Wi‑Fi do Wio nas configurações do sistema.                |
| 1032 | Erro ao selecionar Wi‑Fi        | Selecione uma rede Wi‑Fi como "Wio_xxxxxx"                                                                                              |
| 1033 | Incompatibilidade de Wi‑Fi        | A conexão atual antes do Wi‑Fi e a escolha do Wi‑Fi                                                                          |
| 1041 | Erro ao enviar comando         | Verifique sua conexão com a Internet e tente novamente. Se ainda não conseguir resolver o problema, consulte a seção de FAQ e entre em contato conosco.    |
| 1042 | Erro de conexão            | O Wi‑Fi do seu telefone e do dispositivo foi desconectado                                                                                              |
| 1043 | Falha ao conectar ao Wi‑Fi     | Verifique sua conexão com a Internet e tente novamente. Ou clique em "Setting" para ir à visualização de configurações manuais.                                 |
| 1044 | Erro de conexão         | Verifique sua conexão com a Internet e tente novamente. Se ainda não conseguir resolver o problema, consulte a seção de FAQ e entre em contato conosco. |

## Projeto

**Medidor de Som com LED usando Wio-Link e Node-Red**: Sensor de som Grove da SeeedStudio e tira de LED conectados ao Wio-Link sendo controlados por um fluxo Node-Red.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/potnik/led-sound-meter-using-wio-link-and-node-red-259e02/embed' width='350'></iframe>

## Suporte Técnico e Discussão de Produtos

 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
