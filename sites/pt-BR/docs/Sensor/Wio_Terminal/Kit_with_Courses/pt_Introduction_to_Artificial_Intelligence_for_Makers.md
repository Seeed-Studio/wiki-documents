---
description: Introdução à Inteligência Artificial para Makers
title: Introdução à Inteligência Artificial para Makers
keywords:
  - Wio_terminal Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Introduction_to_Artificial_Intelligence_for_Makers
last_update:
  date: 1/31/2023
  author: jianjing Huang
createdAt: '2023-01-31'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Introduction_to_Artificial_Intelligence_for_Makers/
---

**Contagem de palavras:** 2000

**Tempo de leitura:** 30 minutos

**Público-alvo:**

- Um guia para iniciantes em Inteligência Artificial (IA) para makers sem treinamento prévio em ciência da computação.

**ÍNDICE**

Uma visão geral rápida das seções deste artigo.

- 1.O que é ‘Inteligência Artificial (IA)’?
- 2.Algumas aplicações interessantes de Inteligência Artificial (IA)
- 3.Lista de produtos de Inteligência Artificial (IA)
- 4.Livros, cursos e tutoriais em vídeo recomendados

## Resumo

IA é um tema em alta atualmente, e produtos de IA relevantes vendem bem em nossa [loja online](https://www.seeedstudio.com/). Mas descobrimos que alguns de nossos clientes, desenvolvedores tradicionais de hardware, muitas vezes não têm uma base sólida em ciência da computação. O objetivo deste artigo é despertar interesse e fornecer uma compreensão geral para makers que queiram iniciar sua jornada em deep learning. Vou apontar alguns dos casos de uso comuns e armadilhas potenciais. Também, ao final deste artigo, recomendarei alguns cursos e livros para aprender mais sobre esse tópico.

## 1. O que é ‘Inteligência Artificial (IA)’?

IA está onipresente hoje em dia. "Data Mining", "Artificial Intelligence", "Artificial Neural Network"… fica bem confuso, não é?. Empresas e cientistas da computação criam milhares de novos termos todos os anos, mas nunca explicam para você ***o que eles realmente são**.

De acordo com a Wikipedia:
 >Artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans and animals.

 No entanto, a menos que seja usado como uma terminologia estritamente acadêmica, geralmente usamos esse termo para nos referirmos à Artificial Neural Network. Porque o desenvolvimento explosivo dessa tecnologia nos últimos anos resultou em produtos computacionais demais e publicidade comercial, substituindo gradualmente o significado do próprio termo 'IA'. Então agora, quando as empresas dizem "produtos de IA", geralmente se referem a produtos usados para acelerar operações de redes neurais.

Alguns anúncios e ‘tutoriais' vão mostrar para você imagens como a seguinte, que lembram os neurônios de nosso cérebro. Mas, na verdade, neurônios são apenas uma analogia elegante. O termo Neural Networks em ciência da computação é um problema totalmente matemático. E se você não compreender o algoritmo, essa imagem não significa **nada.**

![](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1554974523222.png)

Então, se você quiser entrar em deep learning, a primeira coisa que precisa fazer é compreender os princípios matemáticos por trás do termo. Eu não quero explicar o algoritmo em detalhes hoje, o que você deve saber é que modelos de Neural Networks são parentes distantes de um problema simples da sua aula de Álgebra no Ensino Médio. Na última parte deste texto, recomendarei alguns cursos e livros para os alunos iniciantes.
Deep learning é uma disciplina experimental jovem, e com atualizações constantes todos os dias. Se você quiser dominá-la, o mais importante é escolher um tópico ou um problema real e ler o máximo possível de artigos de pesquisa relevantes.

## 2. Algumas aplicações interessantes de Inteligência Artificial (IA)

### Visão Computacional

Os humanos podem identificar qualquer objeto apenas olhando para ele por alguns segundos, é realmente fácil para eles. Mas, para as máquinas, por outro lado, a identificação de um objeto era uma tarefa realmente complexa até Hinton e Alex Krizhevsky vencerem a competição ImageNet em 2012.

Então Neural Network passou a dominar o campo de Visão, especialmente o problema de classificação e segmentação, e a convolutional neural network é uma das abordagens mais proeminentes, que venceu inúmeras competições nos últimos anos. Ela apresenta resultados excepcionais em reconhecimento de imagens.
Nvidia construiu muitos [Vision Demos](https://github.com/dusty-nv/jetson-inference) para Jetson Nano, e nós testamos dois deles para classificação e detecção de faces:
<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/U0rNdI9pl_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Arte

**[Google Magenta](https://magenta.tensorflow.org/)** é um projeto de pesquisa open-source que explora o papel do machine learning como uma ferramenta no processo criativo. Este grupo de projeto é conhecido do público por causa do Doodle alimentado por IA [Celebrating-Johann-Sebastian-Bach](https://www.google.com/doodles/celebrating-johann-sebastian-bach)
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056026898.png)

E aqui estão alguns demos da interação:

[Magic Sketchpad](https://magic-sketchpad.glitch.me/) Toda vez que você começa a desenhar um rabisco, o Sketch RNN tenta terminá-lo e corresponder à categoria que você selecionou.

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059163496.png)

[Piano Genie](http://piano-genie.glitch.me/) Divirta-se fingindo que você é um virtuose do piano usando machine learning.

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059135929.png)

[Latent Loops](https://goo.gl/magenta/latent-loops) Rabisque melodias em uma matriz afinada em diferentes escalas, explore uma paleta de loops melódicos gerados e sequencie composições mais longas usando-os. Construído pela Pie Shop do Google usando

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555059104497.png)

### IOT e Sensores

**Estacionamento Inteligente** Estacionar um veículo em ambientes de tráfego intenso muitas vezes leva a um tempo excessivo dirigindo em busca de vagas livres, o que leva à congestão e à poluição ambiental. A falta de informações de orientação para vagas de estacionamento disponíveis é uma das razões para o comportamento ineficiente de estacionamento. Sensores e tecnologias de estacionamento inteligente facilitam a orientação de motoristas para vagas livres, melhorando assim a eficiência do estacionamento. Atualmente, não há tais sensores ou tecnologias em uso para estacionamento descoberto. Então ainda há algo a ser feito.
[Deep Learning for Decentralized Parking Lot Occupancy](https://github.com/fabiocarrara/deep-parking)

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555055835602.png)

[**LSTMs for Human Activity Recognition**](https://github.com/guillaume-chevalier/LSTM-Human-Activity-Recognition) O reconhecimento de atividade humana (HAR) é uma área importante de pesquisa em computação ubíqua e Interação Humano-Computador. Para reconhecer atividades usando sensores móveis ou vestíveis, os dados são coletados usando sensores apropriados, segmentados, são extraídas as características necessárias e as atividades categorizadas usando modelos discriminativos (SVM, HMM, MLP etc.). Neste projeto, os desenvolvedores usaram LSTM e, de forma impressionante, a precisão final é de 91%, com picos em valores como 93,25%.

![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555057001717.png)

### Processamento de Linguagem Natural (NLP)

Na era do conhecimento, o Processamento de Linguagem Natural (NLP) expressa sua demanda por uma enorme gama de utilizações. Anteriormente, o NLP lidava com dados estáticos. No tempo contemporâneo, o NLP trabalha consideravelmente com corpus, banco de dados léxico, reconhecimento de padrões. Considerando o método de Deep Learning (DL) que reconhece artificial Neural Network (NN) para processo não linear, as ferramentas de NLP tornam-se cada vez mais precisas e eficientes, o que inicia um novo patamar.
[NLP-progress](https://github.com/sebastianruder/NLP-progress) Este é um projeto que visa acompanhar o progresso em Processamento de Linguagem Natural (NLP) e fornecer uma visão geral do estado da arte (SOTA) nas tarefas de NLP mais comuns e seus respectivos conjuntos de dados.

#### Medicina

A Inteligência Artificial está transformando o mundo da medicina. A IA pode ajudar médicos a fazer diagnósticos mais rápidos e precisos. Ela pode prever o risco de uma doença a tempo de preveni-la. Pode ajudar pesquisadores a entender como variações genéticas levam a doenças. Ela aprimora a capacidade dos médicos de analisar imagens médicas. Está avançando o futuro da medicina personalizada.
Atualmente, esforços substanciais são desenvolvidos para o enriquecimento de aplicações de imagem médica usando esses algoritmos para diagnosticar erros em sistemas de diagnóstico de doenças que podem resultar em tratamentos médicos extremamente ambíguos. Algoritmos de machine e deep learning são meios importantes em imagens médicas para prever os sintomas de doenças em estágio inicial. Técnicas de deep learning, em particular convolutional networks, desenvolveram rapidamente uma metodologia específica para a investigação de imagens médicas. Isso chama atenção para o conjunto desses algoritmos que podem ser usados para a investigação de doenças e tomada de decisão automática.

[**Deep Learning Toolkit (DLTK) for Medical Imaging**](https://github.com/DLTK/DLTK)
DLTK é um toolkit de neural networks escrito em python, baseado em TensorFlow. Ele foi desenvolvido para permitir prototipagem rápida com uma barreira de entrada baixa e garantir reprodutibilidade em aplicações de análise de imagens, com foco particular em imagens médicas. Seu objetivo é fornecer à comunidade métodos e modelos de estado da arte e acelerar a pesquisa nesse campo empolgante.
![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555056241911.png)

#### Outros

[**LotteryPredict**](https://github.com/chengstone/LotteryPredict) Este demo usou lstm e TensorFlow para prever loteria.

## 3. Lista de produtos de Inteligência Artificial (IA)

IA está onipresente hoje em dia, de aplicações de consumo a empresariais. Desenvolvedores começaram a tentar aplicá-la ao campo de sistemas embarcados e robótica, mas o desempenho das tradicionais placas de desenvolvimento embarcadas é claramente insuficiente. Empresas multinacionais como Intel, Nvidia, Google e Huawei lançaram todos seus produtos de deep learning, entre os quais o Jetson Nano recebeu mais atenção recentemente, o que torna possível implantar redes neurais de médio porte em sistemas embarcados a preços acessíveis e com consumo de energia ultrabaixo. Pequenas empresas como Sipeed e Firefly também lançaram seus próprios produtos para campos específicos de subdivisão. Aqui estão alguns exemplos.

[**NVIDIA Jetson Nano**](https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-p-2916.html)
>O NVIDIA® Jetson Nano™ Developer Kit oferece o desempenho computacional para executar cargas de trabalho modernas de IA em um nível sem precedentes de tamanho, consumo de energia e custo. Desenvolvedores, estudantes e makers agora podem executar frameworks e modelos de IA para aplicações como classificação de imagens, detecção de objetos, segmentação e processamento de voz.
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050651109.png)

[**Google Coral Dev Board**](https://www.seeedstudio.com/Coral-Dev-Board-p-2900.html)
>A Coral Dev Board é um computador de placa única com um módulo de sistema removível (SOM) que contém eMMC, SoC, rádios sem fio e o Edge TPU do Google. Ela é perfeita para dispositivos de IoT e outros sistemas embarcados que exigem inferência de ML rápida diretamente no dispositivo.
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050567750.png)

[**Sipeed MAix Go Suit for RISC-V AI+IoT**](https://www.seeedstudio.com/Sipeed-MAix-GO-Suit-for-RISC-V-AI-IoT-p-2874.html)
>MAIX é o módulo desenvolvido pela Sipeed com o propósito de executar IA na borda, que chamamos de AIoT. Ele oferece alto desempenho em um espaço físico e consumo de energia reduzidos, possibilitando a implantação de IA de alta precisão na borda, e o preço competitivo torna viável integrá‑lo em qualquer dispositivo de IoT. Como você pode ver, Sipeed MAIX é bem semelhante ao Google Edge TPU, mas atua como o controlador principal, não como um acelerador como o Edge TPU, por isso é mais barato e consome menos energia do que a solução AP+Edge TPU.!
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051060453.png)

[**Intel Movidius MA245X AI Kit Compatible w/ Intel Movidius Stick**](https://www.seeedstudio.com/Intel-Movidius-MA245X-AI-Kit-Compatible-w-Intel-Movidius-Stick-p-3146.html)
>Com o conceito de Plug and AI em mente, Horned Sungem (HS) é dedicado a ser o dispositivo de IA mais simples e prático, permitindo que todos os desenvolvedores, estudantes, entusiastas e hobbystas de IA criem facilmente suas próprias aplicações de IA. Sem qualquer dependência de frameworks de deep learning ou bibliotecas complexas, seu dispositivo estará pronto para ver e entender o mundo depois que você conectar o Horned Sungem à porta USB e executar um curto script de instalação.
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555050985486.png)

[**HiKey 970 Development Board**](https://www.seeedstudio.com/HiKey-970-Development-Board.html)
>Hikey970 é uma plataforma de computação de IA de borda avançada, alimentada pelo SoC Kirin970 com 4 x Cortex A73 e 4 x Cortex A53. Hikey970 possui 6 GB de RAM LPDDR4, 64 GB de armazenamento UFS, Ethernet Gigabit, GPS, PCIE Gen2 e CAN on‑board. Como a primeira plataforma de IA com NPU dedicada do mundo, Hikey970 integra a arquitetura de computação Huawei HiAI e frameworks de redes neurais populares, que suportam CPU, GPU de IA e Unidade de Processamento Neural dedicada à aceleração de IA. Além disso, também vem com o HiAI SDK da Huawei. Hikey 970 pode ser usado na maioria das aplicações que envolvem Deep Learning, robótica, automóveis e cidades inteligentes.
>![Alt text](https://files.seeedstudio.com/wiki/Introduction_to_Artificial_Intelligence_for_Maker/1555051309338.png)

## 4. Livros, cursos e tutoriais em vídeo recomendados

### Livros

1. [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/) Este é um dos livros‑texto mais acessíveis sobre Redes Neurais no mundo, sem nenhum jargão irritante, e é totalmente gratuito e on‑line. Porém, o código neste livro está um pouco desatualizado e, se você estiver familiarizado com C++, pode simplesmente utilizá‑lo para compreender os princípios.
2. [Deep Learning with Python](https://www.amazon.com/Deep-Learning-Python-Francois-Chollet/dp/1617294438) Este livro foi escrito para qualquer pessoa que deseje explorar deep learning do zero ou ampliar sua compreensão sobre o tema. Seja você um engenheiro de machine learning em atividade, um desenvolvedor de software ou um estudante universitário, encontrará valor nestas páginas.
3. [Python For Data Analysis](https://www.cin.ufpe.br/~embat/Python%20for%20Data%20Analysis.pdf)  Tutorial clássico para análise de dados, e que ainda não está desatualizado.

### Cursos

1. [Creative Applications of Deep Learning with TensorFlow](https://link.zhihu.com/?target=https://www.class-central.com/mooc/6679/kadenze-creative-applications-of-deep-learning-with-tensorflow) Este curso apresenta o deep learning: a abordagem de ponta para construir algoritmos de inteligência artificial.

2. [Stanford CS231n: Convolutional Neural Networks for Visual Recognition](https://link.zhihu.com/?target=http://cs231n.stanford.edu/) Este curso aprofunda em detalhes as arquiteturas de deep learning, com foco na aprendizagem de modelos fim‑a‑fim para essas tarefas, em particular classificação de imagens.

3. [UC Berkeley AI-Sys Spring 2019](https://ucbrise.github.io/cs294-ai-sys-sp19/) Este curso descreve desde estruturas clássicas como AlexNet até as tendências mais recentes em projeto de sistemas para dar melhor suporte à próxima geração de aplicações de IA, bem como aplicações de IA para otimizar a arquitetura e o desempenho de sistemas. A parte mais valiosa para estudantes on‑line é a lista de leituras obrigatórias que ele fornece.

### Tutoriais em vídeo

1. [ScaledML 2019](https://www.youtube.com/playlist?list=PLRM2gQVaW_wWXoUnSfZTxpgDmNaAS1RtG)
2. [A New Golden Age for Computer Architecture History, Challenges, and Opportunities.](https://www.youtube.com/watch?v=uyc_pDBJotI&t=767s)
3. [SysML 18: Perspectives and Challenges.](https://www.youtube.com/watch?v=4inIBmY8dQI&t=26s)
4. [RL Course by David Silver](https://www.youtube.com/watch?v=2pWv7GOvuf0&list=PLzuuYNsE1EZAXYR4FJ75jcJseBmo4KQ9-)

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
