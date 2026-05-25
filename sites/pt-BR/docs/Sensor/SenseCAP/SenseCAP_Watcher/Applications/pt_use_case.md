---
description: Fornece uma visão detalhada das várias aplicações e casos de uso do Watcher, demonstrando sua versatilidade e potencial em diferentes cenários de monitoramento.
title: Caso de Uso
image: https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg
slug: /use_case
sidebar_position: 1
last_update:
  date: 07/08/2024
  author: Citric
createdAt: '2024-07-08'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/use_case/
---

# O que o SenseCAP Watcher faz

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg" style={{width:800, height:'auto'}}/></div>

Prepare-se para embarcar em uma jornada que vai redefinir sua percepção sobre espaços inteligentes. Watcher, um inovador agente físico de IA, se integra perfeitamente ao seu ambiente, transformando a forma como você interage e experimenta o mundo ao seu redor. Ao aproveitar o poder de tecnologias avançadas como reconhecimento facial, detecção de objetos e detecção multi-cenário, o Watcher cria espaços mais inteligentes, intuitivos e altamente adaptáveis.

Neste wiki, vamos explorar três aplicações transformadoras que demonstram o vasto potencial do Watcher como um agente físico de IA. Essas aplicações não apenas mostrarão as capacidades do Watcher, mas também o inspirarão a imaginar e desenvolver suas próprias soluções inovadoras.

- **Aplicação do Watcher nº 1: Dando Direções aos Visitantes**: Veja como o Watcher revoluciona a experiência dos visitantes atuando como um guia inteligente. Com suas capacidades de reconhecimento facial, o Watcher pode identificar visitantes e fornecer direções e assistência personalizadas, aumentando a eficiência e a acessibilidade do seu espaço.

- **Aplicação do Watcher nº 2: O Caixa Virtual para Sua Floricultura**: Descubra como o Watcher pode transformar o varejo atuando como um caixa virtual em floriculturas não tripuladas. Ao detectar quando os clientes estão prontos para fazer uma compra, o Watcher pode exibir prontamente códigos QR para um autoatendimento contínuo, garantindo um processo de transação fluido e seguro enquanto otimiza as operações da loja.

- **Aplicação do Watcher nº 3: Seu Sensor Tudo-em-Um - Detecção de Quedas, Monitoramento de Pets e Alerta de Objetos Perdidos**: Desbloqueie a versatilidade do Watcher como uma solução de sensor tudo-em-um. Desde detectar quedas até monitorar pets e alertar sobre objetos perdidos, o Watcher se adapta a vários cenários de cauda longa, criando ambientes mais seguros, protegidos e altamente responsivos.

Ao se aprofundar nessas aplicações, você obterá uma compreensão mais profunda de como o Watcher, como agente físico de IA, pode remodelar e otimizar os espaços que habitamos. Seja você um inovador, um proprietário de negócio ou simplesmente alguém apaixonado pelo futuro da tecnologia, este wiki o capacitará com conhecimento e inspiração para aproveitar as capacidades do Watcher e criar espaços mais inteligentes e adaptáveis.

Junte-se a nós nessa jornada transformadora enquanto redefinimos os limites de ambientes inteligentes com o Watcher!


## Demo 1. Dando Direções aos Visitantes

Nesta aplicação, vamos explorar como o Watcher pode ser utilizado para aprimorar a experiência dos visitantes, particularmente no contexto de orientar entregadores em uma casa de campo (villa). Posicionando estrategicamente dois dispositivos Watcher e configurando-os com comandos específicos, podemos criar um processo contínuo e eficiente para direcionar visitantes e garantir a entrega correta de pacotes.

### Etapa 1. Posicionamento do Primeiro Watcher

O primeiro Watcher deve ser instalado na entrada da casa de campo, em um local facilmente visível para o pessoal de entrega. Esse Watcher servirá como ponto de contato inicial, reconhecendo a presença de visitantes carregando pacotes e fornecendo instruções claras sobre onde deixar suas entregas.

### Etapa 2. Posicionamento do Segundo Watcher

O segundo Watcher deve ser posicionado na área designada de armazenamento de pacotes dentro da casa de campo. Esse Watcher será responsável por confirmar a colocação correta dos pacotes e expressar gratidão ao pessoal de entrega pelo serviço prestado.

### Etapa 3. Configurando Comandos para o Primeiro Watcher

Usando o aplicativo SenseCraft, envie o seguinte comando para o primeiro Watcher:

**If someone is holding a parcel, please say, "Hello, courier parcels please take them to the table on the right, 3 metres straight ahead, thank you."**

Esse comando garante que o Watcher forneça instruções claras e concisas ao pessoal de entrega, guiando-os até a área apropriada de armazenamento de pacotes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/51.png" style={{width:600, height:'auto'}}/></div>

### Etapa 4. Configurando Comandos para o Segundo Watcher

Usando o aplicativo SenseCraft, envie o seguinte comando para o segundo Watcher:

**If someone puts a parcel on the table, say "thank you".**

Esse comando permite que o segundo Watcher reconheça a colocação bem-sucedida do pacote e expresse apreço ao pessoal de entrega pelo esforço.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/52.png" style={{width:600, height:'auto'}}/></div>

A Aplicação do Watcher nº 1 demonstra como a implantação estratégica de dispositivos Watcher, combinada com comandos cuidadosamente elaborados, pode aprimorar significativamente a experiência dos visitantes e simplificar o processo de entrega de pacotes em uma casa de campo.

Essa aplicação serve como prova da versatilidade e do potencial do Watcher como um agente físico de IA, mostrando sua capacidade de transformar e otimizar vários aspectos de nossas vidas diárias e interações em espaços inteligentes.

## Demo 2. O Caixa Virtual para Sua Floricultura

Nesta aplicação, vamos explorar como o Watcher pode revolucionar a experiência de compra em uma floricultura atuando como um caixa virtual. Ao aproveitar os recursos de detecção de objetos do Watcher e o aplicativo SenseCraft, podemos criar um processo de autoatendimento contínuo e eficiente, aprimorando a experiência do cliente e simplificando as operações da loja.

### Etapa 1. Gerar um Código QR de Pagamento

Comece gerando um código QR de pagamento usando uma plataforma como o PayPal ou outro provedor de pagamentos de sua preferência. Esse código QR será o elemento-chave no processo de autoatendimento, permitindo que os clientes efetuem facilmente o pagamento por suas compras de flores.

### Etapa 2. Carregar o Código QR no Watcher via aplicativo SenseCraft

Acesse o aplicativo SenseCraft e navegue até a seção **Animation**. Localize o **Watching Space** e substitua a animação existente pelo código QR de pagamento gerado. Essa etapa garante que o Watcher exiba o código QR quando for acionado, possibilitando um processo de autoatendimento fluido.

### Etapa 3. Montar o Watcher em um Tripé

Para garantir desempenho e estabilidade ideais, monte o Watcher em um tripé usando um Suporte de Tripé com Rosca 1/4. Essa configuração permite o ajuste fácil da posição e do ângulo do Watcher, garantindo visibilidade clara da área do caixa.

### Etapa 4. Posicionar o Watcher no Balcão de Pagamento

Coloque o Watcher montado no tripé no balcão de pagamento, voltado para a área onde se espera que os clientes se aproximem para pagar. Certifique-se de que o Watcher tenha uma visão clara do balcão e possa detectar facilmente clientes segurando flores.

### Etapa 5. Configurar a Tarefa do Watcher pelo aplicativo SenseCraft

Usando o aplicativo SenseCraft, envie o seguinte comando para o Watcher:

**When you detect a person holding flowers and facing you, say "Please scan the QR code to complete your purchase."**

Esse comando instrui o Watcher a monitorar clientes segurando flores, exibir o código QR de pagamento carregado e orientá-los a iniciar o processo de autoatendimento escaneando o código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/53.png" style={{width:600, height:'auto'}}/></div>

### Etapa 6. Implementar o Processo de Autoatendimento

Ao detectar um cliente segurando flores, o Watcher exibirá automaticamente o código QR de pagamento e acionará a mensagem de voz pré-configurada, orientando o cliente a escanear o código para efetuar o pagamento.

Depois que o cliente escanear o código QR, ele será direcionado para uma interface de pagamento móvel onde poderá concluir a transação usando o método de pagamento de sua preferência.


A Aplicação do Watcher nº 2 mostra o potencial transformador do Watcher como caixa virtual em uma floricultura. Ao combinar as capacidades de detecção de objetos do Watcher com o aplicativo SenseCraft, os proprietários de floriculturas podem criar uma experiência de autoatendimento contínua e eficiente, aumentando a satisfação do cliente e otimizando as operações da loja.

Essa aplicação demonstra a versatilidade e a adaptabilidade do Watcher, destacando seu potencial para revolucionar diversos ambientes de varejo. Como um agente físico de IA, o Watcher pode ser personalizado e configurado para atender às necessidades específicas de diferentes negócios, impulsionando a inovação e melhorando a experiência geral de compra.

## Demo 3. Seu Sensor Tudo-em-Um -- detecção de quedas, monitoramento de pets e alerta de objetos perdidos

Nesta aplicação, vamos explorar a versatilidade e a adaptabilidade do Watcher como uma solução de sensor tudo-em-um, capaz de lidar com uma ampla gama de cenários de cauda longa. Posicionando estrategicamente vários dispositivos Watcher em diferentes locais e configurando-os para lidar com situações específicas, podemos demonstrar o potencial do Watcher para aumentar a segurança, a proteção e a conveniência em diversos ambientes.

### Cenário 1: Alerta de Objetos Perdidos na Sala de Reunião

Etapa 1: Monte o primeiro Watcher na parede da sala de reunião usando um Suporte Rotativo 360°, garantindo a cobertura ideal de toda a sala.

Etapa 2: Usando o aplicativo SenseCraft, envie o seguinte comando para o Watcher:

**When you detect that the conference room is empty and there is a computer on the table, send a notification to the app.**

Essa tarefa permite que o Watcher monitore a sala de reunião e alerte os usuários pelo app se algum bem de valor, como um computador, for deixado sem vigilância.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/54.png" style={{width:600, height:'auto'}}/></div>

### Cenário 2: Monitoramento e Dissuasão de Pets

Etapa 1: Instale o segundo Watcher em um tripé usando um Suporte de Tripé com Rosca 1/4 e posicione-o próximo a um vaso ou qualquer área onde gatos sejam propensos a causar danos.

Etapa 2: Configure a seguinte tarefa usando o aplicativo SenseCraft:

**If you detect a cat, play the audio message "Danger, please stay away"**

para impedir que o gato se aproxime.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/55.png" style={{width:600, height:'auto'}}/></div>

Etapa 3: Ajuste o volume do Watcher para a configuração mais alta para assustar e desencorajar efetivamente o gato de entrar na área restrita.

### Cenário 3: Detecção de Quedas na Casa dos Pais

Etapa 1: Instale o terceiro Watcher na parede da casa dos pais, garantindo que ele tenha uma visão clara das principais áreas de convivência.

Etapa 2: Atribua a seguinte tarefa através do SenseCraft APP:

**Se você detectar uma pessoa deitada no chão, por favor me avise imediatamente.**

Essa configuração permite que o Watcher monitore possíveis quedas ou acidentes e alerte o usuário prontamente, garantindo uma resposta rápida e assistência quando necessário.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/56.png" style={{width:600, height:'auto'}}/></div>

A Aplicação do Watcher nº 3 demonstra a incrível versatilidade e adaptabilidade do Watcher como uma solução de sensor tudo-em-um. Ao abordar uma ampla gama de cenários de cauda longa, como detecção de quedas, monitoramento de animais de estimação e alertas de objetos perdidos, o Watcher demonstra seu potencial para revolucionar a segurança, a proteção e a conveniência em diversos ambientes.

Esta aplicação destaca a capacidade do Watcher de ser personalizado e configurado para atender a necessidades específicas, tornando-o uma ferramenta inestimável para indivíduos, famílias e empresas. Como um agente físico de IA, o Watcher integra-se perfeitamente a diferentes ambientes, oferecendo monitoramento proativo, alertas em tempo real e tranquilidade aos seus usuários.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

