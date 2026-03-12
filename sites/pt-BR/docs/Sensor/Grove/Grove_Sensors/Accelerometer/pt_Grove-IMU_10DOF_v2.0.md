---
description: Grove - IMU 10DOF v2.0
title: Grove - IMU 10DOF v2.0
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-IMU_10DOF_v2.0
sku: 101020252
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-IMU_10DOF_v2.0/
---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0.jpg" alt="pir" width={600} height="auto" /></p>

Grove-IMU 10DOF v2.0 é uma versão atualizada do Grove-IMU-10DOF, que substitui o BMP180 pelo BMP280. Como sucessor do amplamente adotado BMP180, o BMP280 oferece alto desempenho em todas as aplicações que exigem medições de pressão precisas. Este módulo é baseado em MPU-9250 e BMP280; o MPU-9250 é um dispositivo de rastreamento de movimento de 9 eixos que combina um giroscópio de 3 eixos, um acelerômetro de 3 eixos, um magnetômetro de 3 eixos e um Digital Motion Processor (DMP), e o BMP280 é um sensor digital de pressão de alta precisão e ultrabaixo consumo para aplicações de consumo. Este módulo é muito adequado para aplicações em smartphones, tablets e dispositivos vestíveis.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html)

## Versão

|  Versão do Produto      | Alterações                                                                                                                                                                                                                                   | Data de Lançamento  |
|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------|
| Grove - IMU 10DOF      | Baseado em [MPU-9250 ](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf ) e [BMP180 ](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/BMP180.pdf )  | Março de 2015       |
| Grove - IMU 10DOF v2.0 | Atualização do sensor BMP180 para [BMP280 ](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf ) da BOSCH                                         | Setembro de 2016    |


## Especificações


-   Interface Grove I2C, incluindo GND, VCC, SDA, SCL.
-   Endereço I2C do MPU-9250 selecionável
-   Baixo consumo de energia
-   I2C Modo Rápido de 400kHz para comunicação com todos os registradores
-   Sensores de taxa angular (giroscópios) de saída digital dos eixos X, Y e Z com faixa de escala total programável pelo usuário de ±250, ±500, ±1000 e ±2000°/s
-   Acelerômetro de 3 eixos com saída digital e faixa de escala total programável de ±2g, ±4g, ±8g e ±16g
-   Magnetômetro de saída digital com faixa de escala total de ±4800uT
-   Barômetro de saída digital com faixa de 300 ~ 1100hPa (+9000m ~ -500m em relação ao nível do mar)
-   Dimensões: 25,43mm x 20,35mm
- I2C Address: o endereço conectado por padrão aos pads de seleção I2C a e b é 0x68; se conectar b e c, o endereço é 0x69

:::note
    Se você quiser usar múltiplos dispositivos I2C, consulte [Software I2C](https://wiki.seeedstudio.com/pt-br/Arduino_Software_I2C_user_guide/).
:::
:::tip
    Para mais detalhes sobre os módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
## Plataformas Suportadas


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer bibliotecas de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever suas próprias bibliotecas de software.
:::

## Visão Geral de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/dimensions.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>


-  Pad de seleção de endereço I2C do MPU-9250; por padrão, o endereço conectado aos pads **a** e **b** é 0x68, se conectar **b** e **c** o endereço é 0x69
-  Pino de interrupção do MPU-9250; a interrupção deve ser configurada, as fontes de interrupção disponíveis são: detecção de movimento, estouro de FIFO, dados prontos, erro de mestre I2C
- Orientação dos Eixos:
O diagrama abaixo mostra a orientação dos eixos de sensibilidade e a polaridade de rotação.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png" alt="pir" width={600} height="auto" /></p>

- O BMP280 é um sensor absoluto de pressão barométrica especialmente projetado para aplicações móveis. O módulo do sensor é alojado em um encapsulamento LGA de tampa metálica de 8 pinos extremamente compacto, com área ocupada de apenas 2,0 × 2,5 mm2 e altura de 0,95 mm. Suas pequenas dimensões e seu baixo consumo de energia de 2,7 μA @1Hz permitem a implementação em dispositivos alimentados por bateria, como telefones celulares, módulos GPS ou relógios.



## Primeiros Passos


### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os seguintes itens:

| Seeeduino V4.2 | Base Shield| Base Shield |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0_s.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-IMU-10DOF-v2.0-p-2691.html)|

- **Passo 2.** Conecte o Grove - IMU 10DOF v2.0 à porta **I2C** do Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC através de um cabo USB.

<!--link-->
<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>



#### Software

- **Passo 1.** Baixe a [biblioteca Grove-IMU_10DOF_v2.](https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip)
- **Passo 2.** Siga os procedimentos de [como instalar uma biblioteca do arduino](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/) para instalar a biblioteca.
- **Passo 3.** Reinicie a IDE do Arduino. Abra o exemplo “IMM_10DOF_Test” pelo caminho: **File -> Example ->GROVE_IMU_10DOF_V2-master-> IMU_10DOF_V2_Test**.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/library%20example.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/library%20example.jpg" alt="pir" width={600} height="auto" /></p>

- **Passo 4.** Envie o código. Observe que devemos selecionar o tipo correto de placa e a porta COM.
Podemos ver:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/ardu_result.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/ardu_result.jpg" alt="pir" width={600} height="auto" /></p>


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/Grove%20-%20IMU%2010DOF%20v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos


-   **[Eagle]** [Arquivo eagle do Grove - IMU 10DOF v2](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/Grove%20-%20IMU%2010DOF%20v2.0.zip)
-   **[Library]** [Obtenha a biblioteca no github](https://github.com/Seeed-Studio/Grove_IMU_10DOF_v2.0/archive/master.zip)
-   **[Dtasheet]** [Folha de dados do BMP280](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/res/BMP280-Datasheet.pdf)
-   **[Dtasheet]** [Folha de dados do MPU-9250](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_IMU_10DOF -->

## Projetos

**Aplicativo de Dados para Motocicleta**: Aprenda com a sua pilotagem como um profissional! Equipes de corrida de motocicletas usam dados de IMU há anos; com RideData+Arduino é fácil para você fazer o mesmo.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed' width='350'></iframe>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
