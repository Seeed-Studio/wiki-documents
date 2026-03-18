---
description: Estação Meteorológica Compacta SenseCAP ONE
title: Estação Meteorológica Compacta SenseCAP ONE
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors
sku: 101990787, 101991141, 101990961, 101991102, 101991050, 101991232, 101990693, 101990784, 101990902, 101991022, 101991021, 101991023, 101991024, 101991044
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors/
---

# Sensores Meteorológicos SenseCAP ONE Série

![sensecap one](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-1030x754.png)

##### _(estações meteorológicas compactas SenseCAP ONE série)_

## Introdução ao Produto

Hoje, dados sobre clima localizado, conhecidos como microclimas, são a nova fronteira para previsões do tempo mais precisas e exatas. Como resultado, a coleta de dados meteorológicos está se tornando cada vez mais localizada e em grade. À luz disso, estações meteorológicas, que são o meio mais conveniente de coletar dados meteorológicos, estão vendo um aumento na demanda.

 SenseCAP ONE estações meteorológicas compactas consistem em vários sensores meteorológicos que medem os seguintes parâmetros: temperatura e umidade do ar, pressão barométrica, luz, precipitação, velocidade do vento, direção do vento, PM2.5 e PM10. Ao adotar um design modular, SenseCAP ONE possibilita que você integre convenientemente diferentes combinações de sensores em uma estação meteorológica compacta de acordo com as necessidades reais da aplicação.

Os produtos são projetados com padrões industriais, com classificação IP66, apresentando alta precisão, alta confiabilidade e estabilidade, e grande robustez. A série SenseCAP ONE suporta interface RS485/RS422 (Modbus) e SDI-12, permitindo fácil extensão com outros sensores dessas interfaces. SenseCAP ONE é fácil de implantar, durável para operação de longo prazo em ambientes externos adversos, tornando-o perfeito para aplicações em cenários de cidades inteligentes, rede elétrica, usinas, estações meteorológicas rodoviárias, aeroportos e agricultura inteligente, etc.

![sensecap one catagories](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/overall.png)

Existem seis produtos SenseCAP no total com distintas combinações de sensores incluídos. Para encontrar aqueles que correspondem aos seus cenários específicos, aqui está um gráfico que demonstra claramente a aparência dos SenseCAP ONE e os parâmetros que cada produto pode medir.

### SenseCAP ONE S700 Sensor Meteorológico Compacto 7-em-1

O Sensor Meteorológico Compacto 7-em-1 SenseCAP ONE S700 pode ajudá-lo a coletar e monitorar dados ambientais e meteorológicos, que são cruciais em diferentes cenários de aplicação, como projetos de cidades inteligentes, etc. O SenseCAP ONE S700 está equipado com sensores para medir os sete seguintes parâmetros: temperatura do ar, umidade relativa, pressão barométrica, intensidade de luz, precipitação, velocidade do vento e direção do vento.

SenseCAP ONE é certificado IP66 e apresenta grande robustez para suportar até mesmo os ambientes externos mais severos. Os sensores para medir velocidade e direção do vento usam ultrassom em vez do tradicional anemômetro mecânico de 3 copos ou de pá. A vantagem de usar sensores ultrassônicos é que a redução de partes móveis torna o sensor menos suscetível a falhas e, portanto, mais fácil de manter, sem qualquer sacrifício em precisão ou mão de obra.

A série SenseCAP ONE usa o protocolo de comunicação RS 485 (MODBUS-RTU)  / 232 / 422 (Modbus) / SDI-12. Assim, o sensor meteorológico compacto SenseCAP ONE pode ser usado com qualquer registrador de dados que suporte RS 485 (MODBUS-RTU)  / 232 / 422 (Modbus) / SDI-12.

Também fornecemos o [Sensor Hub 4G Data Logger](https://solution.seeedstudio.com/product/sensor-hub-4g-data-logger/) SenseCAP (compatível com energia solar e alimentação DC de parede) que pode ser usado com o sensor meteorológico da série SenseCAP ONE. Os dados podem ser transmitidos para o Sensor Hub e então para o servidor SenseCAP ou para um servidor privado. Se você optar por usar o servidor SenseCAP, também fornecemos uma API para que você crie facilmente suas próprias aplicações.

![](https://sensecap-solution-upload.cdn.seeed.cn/cc/2020/05/Picture16.png?x-oss-process=image%2Fformat,webp)

## Recursos

- **múltiplos parâmetros meteorológicos para medir em um único dispositivo**: intensidade da chuva, temperatura do ar, umidade relativa, pressão barométrica, intensidade de luz, intensidade de precipitação, velocidade do vento e direção do vento, etc.

- **Embutido com bússola eletrônica**: possibilitando fácil instalação e você pode optar por desativar a bússola eletrônica enquanto orienta para o Norte manualmente.

- **Uma placa de flange e cabo de 3 m** estão incluídos no pacote para montagem em mastro

- **Classificação IP66**: à prova d’água e poeira, aquecedores disponíveis, adequado para ambientes externos severos.

- **Sensores ultrassônicos de velocidade e direção do vento sem partes móveis**

- **tamanho compacto, calibrado, fácil de instalar, livre de manutenção e amigável ao usuário**

- **Escudos de radiação** são equipados para garantir medições ambientais precisas.

- **Interface suportada**: RS 485 (MODBUS-RTU)  / 232 / 422 (Modbus) / SDI-12

- **Certificações CE, FCC estão em processo**, em breve….

## Especificações de Medição

![measurement](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/measurement%20specification.png)

## Especificações Gerais

![general](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/general%20specifications.png)

## Demonstração

Aqui mostramos como criar sua própria estação meteorológica com o [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html) e um [Raspberry Pi](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)! Com configuração mínima e código fácil de usar, este é um ótimo tutorial para iniciantes que querem começar rapidamente.

![](https://lh4.googleusercontent.com/CFwdaJ3jBZHVROiCzg1Mfu2dF5pNJwH3DAt7dloC4IKyKO_nFwISY_J-3JpZIqiZCazf9Y5DAxB7OxwNwhnwot3BY_I4Wx3CBdWrZNUwJMoDe9bCSzLmS4yxLVz0JYrm9HhjZl7N)

### Por que uma Estação Meteorológica?

Quando pensamos em dados meteorológicos, é natural reconhecer sua importância nas indústrias de aviação, marítima e de construção, bem como na previsão de climas extremos. Para o indivíduo comum, porém, tais informações podem ser relevantes apenas quando precisamos decidir se levamos um guarda-chuva ao sair de casa.

E se eu dissesse que, graças a novas aplicações, o potencial que os dados meteorológicos possuem e sua relevância só tendem a aumentar?

Na indústria de vestuário, cerca de 35% da perda anual de receita é causada por previsões de vendas imprecisas e estatísticas sobre a relação entre as vendas de roupas e fatores como tempo, mudanças sazonais e climáticas, feriados, etc.

Para mitigar isso, que tal usar dados precisos de previsão do tempo para planejar a alocação de estoque para uma determinada área? Por exemplo, podemos estimar como a demanda por casacos de pena aumentará ou diminuirá diante de futuras mudanças no clima.

Na verdade, muitos países já estão usando dados meteorológicos para impulsionar decisões de negócios. Na Alemanha, o Índice de Cerveja afirma que as vendas de cerveja disparam quando as temperaturas ultrapassam 22ºC. E, para cada aumento adicional de 1 grau na temperatura, 2,3 milhões de garrafas de cerveja a mais são vendidas por dia. Absolutamente brilhante!

Além do Índice de Cerveja, há também o índice de carros, índice de sorvete, índice de maiôs, índice de mofo de alimentos e outros, segundo os quais as empresas podem desenvolver planos de produção e marketing com antecedência. Como você pode ver, a comercialização dos dados meteorológicos tem muito espaço para imaginação.

Hoje, dados sobre clima local, conhecidos como microclimas, são a nova fronteira para previsões meteorológicas mais precisas e exatas. Como resultado, a coleta de dados meteorológicos está se tornando cada vez mais localizada e em grade. À luz disso, estações meteorológicas, que são o meio mais conveniente de coletar dados meteorológicos, estão vendo um aumento na demanda. Na demonstração de hoje, mostraremos como você pode ter sua própria estação meteorológica funcionando em apenas alguns passos usando o SenseCAP ONE S700 e o Raspberry Pi.

### Materiais Necessários

Para acompanhar este tutorial, os seguintes materiais são recomendados. Você também pode usar um Raspberry Pi 3 mais antigo se tiver um disponível, mas o Pi 4 lhe dará muito mais potência e versatilidade se você também quiser usá-lo para outros projetos.

- [Raspberry Pi 4 8GB](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html) x1

- [RS-485 Shield for Raspberry HAT](https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html) x1

- [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html) x1

### Configuração de Hardware

Primeiro, monte o Seeed RS-485 Shield no Raspberry Pi, tomando cuidado para alinhá-los com os pinos 1 a 25 no Raspberry Pi, como mostrado na figura abaixo.

![](https://lh4.googleusercontent.com/h4i69Ct7UV4euxBaw8dLj09gJGfhTm4mo2hXmlq2hDKmANg116M79P_U1P50W8B_1-3h1ckTUjew8NsUALx8-CDoiisaYnyq_fwyekfAffY6ZMf5vVL6WEn02xZoRlw_uSZw2G46)

Em seguida, conecte o SenseCAP ONE S700 ao RS-485 Shield com a conexão RS-485. É isso!

### Configuração de Software

#### Passo 1: Configurar o SenseCAP ONE S700

Primeiro, teremos que configurar o protocolo no SenseCAP ONE S700. Primeiro baixe e instale a versão mais recente da SenseCAP ONE Configuration Tool para o seu sistema operacional [aqui](https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases).

Depois de abrir a ferramenta de configuração, conecte seu SenseCAP ONE ao PC via USB Type-C e selecione-o em Serial Port. Em seguida, clique em Connect.

Em seguida, selecione Settings. Em Main Port Protocol, selecione RS-485 ASCII, como mostrado abaixo. Depois, selecione Write To Device.

![](https://lh5.googleusercontent.com/IaVOWjPMua04nLj8I1LP89rZ0JBNxpyEhSfDWupO9cMIYtsV6lsR90k1esRGWLsBgzCHB2Odj5kb3BIPF5kkCyRBwsnf_-a8L9gnQuTM5cEXfHpMA-WzaWt50AqNtHZZEhqXcEgx)

#### Passo 2: Configurar o Raspberry Pi

Este tutorial assume o Raspberry Pi OS em execução em um Raspberry Pi com conectividade à internet configurada. Se você é novo no Raspberry Pi, pode aprender como colocar o WiFi em funcionamento [aqui](https://www.seeedstudio.com/blog/2021/01/25/three-methods-to-configure-raspberry-pi-wifi/).

Primeiro, certifique-se de que o Node.JS v10.22.x esteja instalado no seu Raspberry Pi. Caso contrário, execute o script abaixo para instalá-lo.

```
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n 10
```

A próxima etapa é habilitar a serial de hardware em /dev/ttyS0. No seu terminal, execute a ferramenta Raspi Config com:

```
sudo raspi-config
```

### Executar a Estação Meteorológica

Após a configuração, é fácil colocar a estação meteorológica para funcionar. No seu Raspberry Pi, execute os seguintes comandos para instalar e executar o servidor e o site da estação meteorológica.

```
git@github.com:Seeed-Solution/SenseCAP-WeatherStation-Raspberry-Pi-Visualization.git
mv SenseCAP-WeatherStation-Raspberry-Pi-Visualization /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization
cd /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization

cd server && install --unsafe
cd website && install --unsafe

# pm2 start
npm install -g -y --unsafe pm2 http-server
pm2 start run-server.sh
pm2 start run-website.sh
pm2 save
pm2 ls
```

Com seu PC e Raspberry Pi na mesma rede local, acesse os dados da estação meteorológica por meio da seguinte URL no seu navegador.

```
http://{Raspberry Pi IP}:8080
```

Se você não tiver certeza do endereço IP do seu Raspberry Pi, pode executar o comando abaixo e anotar o IP ao lado de inet.

```
ifconfig wlan0
```

![](https://lh3.googleusercontent.com/1MviIYqYAIagHWvDDj8BXoRjBWAbqYATtQ4wyTrl4W3Z-XTwa9VcO63zkZ7_qD5mvu88EsJ9Euu8G4GAi8IW7WOy_047ZdO-7BWMGL1Qvz59Sv1n5vTZ6_OzzOY5JSBcAENfNrc5)

### CONCLUÍDO

Depois de concluir toda a configuração e acessar a URL com sucesso, você deverá ver os dados meteorológicos sendo visualizados em tempo real, como mostrado abaixo. SenseCAP ONE S700 é uma plataforma tudo‑em‑um que não apenas nos permite obter dados básicos como temperatura e umidade, como também visualizar informações avançadas, incluindo direção e velocidade do vento, pressão do ar, precipitação e até mesmo a quantidade de luz.

![](https://lh6.googleusercontent.com/SGQuzJr3kZIRojr79-Iu1-onBBQoCDNH6gFFPTh7eFJy7yYYlO97Y6uvtEgSvMmt68q1LBUlMJSgOUn7kFK3Meu2d1mv6oAovEiKlCwNkJaOmhEwBBeDVNDZMTrggOiZsHh2JHEq)

Com isso, não apenas temos uma estação meteorológica totalmente funcional em questão de minutos, como também podemos estendê‑la para visualizar dados remotamente. Alternativamente, também podemos armazenar os dados meteorológicos para análises de dados avançadas e previsão.

### Resumo

Esperamos que você tenha gostado da demonstração de como criar uma estação meteorológica em apenas alguns passos com o Raspberry Pi e a [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.htmlhttps://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html)! Embora este projeto seja simples, as possibilidades que ele oferece são limitadas apenas pela sua imaginação.

Além de funcionar com Raspberry Pi 4 8GB, a série de produtos SenseCAP ONE pode ser facilmente implantada e utilizada com o nosso [SenseCAP Sensor Hub 4G Data Logger](https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html). Como uma estação celular 4G de grau industrial e fácil de implantar, o Sensor Hub usa o protocolo MODBUS-RTU RS485 para se comunicar com sensores e é capaz de coletar vários dados de sensores simultaneamente. Com classificação IP66, à prova d’água e poeira, o Sensor Hub 4G Data Logger é adequado para aplicações externas de longo prazo e alta confiabilidade, como em agricultura inteligente, estações meteorológicas inteligentes e cidades inteligentes, etc.

Agora, como você usará a sua própria estação meteorológica?

## Aplicações

![sensecap one applications](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-Applications-1030x379.png)
