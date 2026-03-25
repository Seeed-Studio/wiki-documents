---
description: Grove - IMU 9DOF v2.0
title: Grove - IMU 9DOF v2.0
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-IMU_9DOF_v2.0
sku: 101020080,101020059
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-IMU_9DOF_v2.0/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0.JPG" alt="pir" width={600} height="auto" /></p>

Grove - IMU 9DOF v2.0 é uma versão atualizada do **Grove - IMU 9DOF v1.0** e é um módulo de rastreamento de movimento de 9 eixos de alto desempenho, baseado no MPU-9250. O MPU-9250 é um dispositivo integrado de rastreamento de movimento de 9 eixos projetado para os requisitos de baixo consumo de energia, baixo custo e alto desempenho de equipamentos de eletrônicos de consumo, incluindo smartphones, tablets e sensores vestíveis. O MPU-9250 possui três ADC de 16 bits para digitalizar as saídas do giroscópio, três ADC de 16 bits para digitalizar as saídas do acelerômetro e três ADC de 16 bits para digitalizar as saídas do magnetômetro.


[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)

## Especificações


-   Interface I2C/SPI
-   I2C auxiliar
-   Baixo consumo de energia
-   I2C Modo Rápido de 400kHz para comunicação com todos os registradores
-   Sensores de taxa angular digital de 3 eixos (giroscópios) com faixa de escala total programável pelo usuário de ±250, ±500, ±1000 e ±2000°/s
-   Acelerômetro digital de 3 eixos com faixa de escala total programável de ±2g, ±4g, ±8g e ±16g
-   Acelerômetro digital de 3 eixos com faixa de medição de escala total de ±4800μT
- Endereço I2C: 0x68

:::note
    Se você quiser usar vários dispositivos I2C, consulte [Software I2C](https://wiki.seeedstudio.com/pt-br/Arduino_Software_I2C_user_guide/).
:::
:::tip
    Para mais detalhes sobre os módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
## Plataformas Suportadas


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Visão Geral de Hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/dimensions.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2_inter.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2_inter.png" alt="pir" width={600} height="auto" /></p>

① - Interface Grove, conecte ao I2C

② - Trilha de seleção I2C ou SPI (padrão é I2C), se quiser usar SPI, desconecte esta trilha

③ - Trilha de seleção de endereço, padrão conectado b e c o endereço é 0x68, se conectar b e a o endereço é 0x69, se quiser usar SPI, desconecte esta trilha de qualquer lado.

④ - Interface SPI

⑤ - Dados seriais mestre I2C auxiliar

⑥ - Clock serial mestre I2C auxiliar

⑦ - Saída digital de interrupção

## Primeiros passos

### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield| Grove-IMU_9DOF_v2.0 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|

- **Passo 2.** Conecte o Grove-IMU_9DOF_v2.0 à porta **I2C** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::
| Seeeduino_v4 | Grove-IMU_9DOF_v2.0  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |



#### Software

**Passo 1.** Baixe a [library](https://github.com/Seeed-Studio/Grove_IMU_9DOF/archive/master.zip) do Github.

**Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para Arduino.

**Passo 3.** Crie um novo sketch Arduino e cole o código abaixo nele ou abra o código diretamente pelo caminho: File -> Example ->IMU_9DOF_Demo_Compass_Calibrated->IMU_9DOF_Demo_Compass_Calibrated.

Aqui está a parte principal do código

```cpp

void setup() {
  // join I2C bus (I2Cdev library doesn't do this automatically)
  Wire.begin();

  // initialize serial communication
  // (38400 chosen because it works as well at 8MHz as it does at 16MHz, but
  // it's really up to you depending on your project)
  Serial.begin(38400);

  // initialize device
  Serial.println("Initializing I2C devices...");
  accelgyro.initialize();

  // verify connection
	Serial.println("Testing device connections...");
	Serial.println(accelgyro.testConnection() ? "MPU9250 connection successful" : "MPU9250 connection failed");
	delay(1000);
	Serial.println("     ");

 //Mxyz_init_calibrated ();
}

void loop()
{   
	getAccel_Data();
	getGyro_Data();
	getCompassDate_calibrated(); // compass data has been calibrated here
	getHeading();				//before we use this function we should run 'getCompassDate_calibrated()' frist, so that we can get calibrated data ,then we can get correct angle .					
	getTiltHeading();           

	Serial.println("calibration parameter: ");
	Serial.print(mx_centre);
	Serial.print("         ");
	Serial.print(my_centre);
	Serial.print("         ");
	Serial.println(mz_centre);
	Serial.println("     ");


	Serial.println("Acceleration(g) of X,Y,Z:");
	Serial.print(Axyz[0]);
	Serial.print(",");
	Serial.print(Axyz[1]);
	Serial.print(",");
	Serial.println(Axyz[2]);
	Serial.println("Gyro(degress/s) of X,Y,Z:");
	Serial.print(Gxyz[0]);
	Serial.print(",");
	Serial.print(Gxyz[1]);
	Serial.print(",");
	Serial.println(Gxyz[2]);
	Serial.println("Compass Value of X,Y,Z:");
	Serial.print(Mxyz[0]);
	Serial.print(",");
	Serial.print(Mxyz[1]);
	Serial.print(",");
	Serial.println(Mxyz[2]);
	Serial.println("The clockwise angle between the magnetic north and X-Axis:");
	Serial.print(heading);
	Serial.println(" ");
	Serial.println("The clockwise angle between the magnetic north and the projection of the positive X-Axis in the horizontal plane:");
	Serial.println(tiltheading);
	Serial.println("   ");
	Serial.println("   ");
    Serial.println("   ");
	delay(300);
}
```
:::note If we don't have Grove base shield , We also can directly connect this module to Seeeduino LoRaWAN,but we need add three line code as below picture.
:::
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/modify_code.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/modify_code.png" alt="pir" width={600} height="auto" /></p>


**Passo 4.** Envie o código e, depois disso, você pode ver:
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0_demo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/Grove-IMU_9DOF_v2.0_demo.jpg" alt="pir" width={600} height="auto" /></p>

Em estado estático, o valor de saída do eixo Z é de aproximadamente 0,98 g, portanto você pode usar isso como referência para testar se o seu sensor está funcionando normalmente.

## Referências

**Orientação dos eixos**

O diagrama abaixo mostra a orientação dos eixos de sensibilidade e a polaridade de rotação. Observe o identificador do pino 1 (•) na figura.

- Orientação dos eixos de sensibilidade e polaridade de rotação para acelerômetro e giroscópio

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes.jpg" alt="pir" width={600} height="auto" /></p>

- Orientação dos eixos de sensibilidade para bússola

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/MPU9250_axes2.jpg" alt="pir" width={600} height="auto" /></p>


## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos

- **[Eagle&PDF]**  [Grove - IMU 9DOF v2.0 arquivo Eagle](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove-IMU_9DOF_v2.0_sch_pcb.zip)
- **[Library]**  [Grove - IMU 9DOF v2.0 biblioteca](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/Grove_IMU_9DOF_9250.zip)
- **[PDF]**  [Folha de dados do MPU-9250](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/MPU-9250A_Product_Specification.pdf)
- **[PDF]**  [Mapa de registradores do MPU-9250](https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/res/MPU-9250A_Reg_Map.pdf)

## Projetos

**Teste de velocidade das funções do MPU9150 usando um LinkIt ONE
**: Configurei este projeto com a única intenção de determinar o custo em milissegundos das funções padrão do MPU9150.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kg6hxm/speed-testing-the-mpu9150-s-functions-using-a-linkit-one-181c67/embed' width='350'></iframe>


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

