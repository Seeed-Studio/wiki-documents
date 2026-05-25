---
description: Grove - IMU 10DOF
title: Grove - IMU 10DOF
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-IMU_10DOF
sku: 101020079
last_update:
  date: 1/5/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove-IMU_10DOF/
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/main.jpg" alt="pir" width={600} height="auto" /></p>


Grove - IMU 10DOF é uma combinação de Grove - IMU 9DOF e [Grove - Barometer Sensor (BMP180)](/pt-br/Grove-Barometer_Sensor-BMP180/ "Grove - Barometer Sensor (BMP180)"). Este módulo é baseado em MPU-9250 e BMP180, o MPU-9250 é um dispositivo de rastreamento de movimento de 9 eixos que combina um giroscópio de 3 eixos, acelerômetro de 3 eixos, magnetômetro de 3 eixos e um Digital Motion Processor (DMP), e o BMP180 é um sensor de pressão digital de alta precisão e consumo ultrabaixo para aplicações de consumo. Este módulo é muito adequado para aplicações em smartphones, tablets e dispositivos vestíveis.


[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)

Especificações


-   Interface I2C
-   Endereço I2C do MPU-9250 selecionável
-   Baixo consumo de energia
-   Modo Rápido I2C de 400kHz para comunicação com todos os registradores
-   Sensores de taxa angular (giroscópios) de saída digital dos eixos X, Y e Z com faixa de escala completa programável pelo usuário de ±250, ±500, ±1000 e ±2000°/s
-   Acelerômetro de 3 eixos com saída digital e faixa de escala completa programável de ±2g, ±4g, ±8g e ±16g
-   Magnetômetro com saída digital e faixa de escala completa de ±4800uT
-   Barômetro com saída digital e faixa de 300 ~ 1100hPa(+9000m ~ -500m em relação ao nível do mar)
-   Dimensões: 25,43mm x 20,35mm
- Endereço I2C: padrão 0x68, consulte a Visão geral do hardware para alterar para 0x69.

:::note
    Se você quiser usar vários dispositivos I2C, consulte [Software I2C](https://wiki.seeedstudio.com/pt-br/Arduino_Software_I2C_user_guide/)
:::
:::tip
    Para mais detalhes sobre os módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
## Plataformas compatíveis


<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|


:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade teórica ou de software do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Visão geral do hardware

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/dimensions.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/dimensions.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Grove-imu10dof-layout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Grove-imu10dof-layout.jpg" alt="pir" width={600} height="auto" /></p>

-   1: Pad de seleção de endereço I2C do MPU-9250, por padrão conectados **a** e **b** o endereço é 0x68, se conectar **b** e **c** o endereço é 0x69
-   2: Pino de interrupção do MPU-9250, a interrupção deve ser configurada, as fontes de interrupção disponíveis são: detecção de movimento, estouro de fifo, dados prontos, erro de mestre i2c


## Primeiros passos

Forneceremos um exemplo aqui para mostrar como usar este sensor.


### Brincar com Arduino

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield| Grove-IMU_10DOF |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/45d_small.jpg" alt="pir" width={600} height="auto" /></p>|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|

- **Passo 2.** Conecte o Grove-IMU_10DOF à porta **I2C** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC através de um cabo USB.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/with_ardu.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>


:::note
	Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino como abaixo.
:::
<!--I2C-->
| seeeduino_v4 | Grove-IMU_10DOF  |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |


#### Software

**Passo 1.** Baixe a [biblioteca](https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF) do Github.

**Passo 2.** Consulte [How to install library](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library) para instalar a biblioteca para o Arduino.


**Passo 3.** Abra o código diretamente pelo caminho: File -> Example -> IMU_10DOF_Test.


Aqui está uma parte do código:
```cpp

void setup()
{
    // join I2C bus (I2Cdev library doesn't do this automatically)
    Wire.begin();

    // initialize serial communication
    // (38400 chosen because it works as well at 8MHz as it does at 16MHz, but
    // it's really up to you depending on your project)
    Serial.begin(38400);

    // initialize device
    Serial.println("Initializing I2C devices...");
    accelgyro.initialize();
    Barometer.init();

    // verify connection
    Serial.println("Testing device connections...");
    Serial.println(accelgyro.testConnection() ? "MPU9250 connection successful" : "MPU9250 connection failed");

    delay(1000);
    Serial.println("     ");

    //  Mxyz_init_calibrated ();

}

void loop()
{

    getAccel_Data();
    getGyro_Data();
    getCompassDate_calibrated(); // compass data has been calibrated here
    getHeading();               //before we use this function we should run 'getCompassDate_calibrated()' frist, so that we can get calibrated data ,then we can get correct angle .
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

    temperature = Barometer.bmp180GetTemperature(Barometer.bmp180ReadUT()); //Get the temperature, bmp180ReadUT MUST be called first
    pressure = Barometer.bmp180GetPressure(Barometer.bmp180ReadUP());//Get the temperature
    altitude = Barometer.calcAltitude(pressure); //Uncompensated caculation - in Meters
    atm = pressure / 101325;

    Serial.print("Temperature: ");
    Serial.print(temperature, 2); //display 2 decimal places
    Serial.println("deg C");

    Serial.print("Pressure: ");
    Serial.print(pressure, 0); //whole number only.
    Serial.println(" Pa");

    Serial.print("Ralated Atmosphere: ");
    Serial.println(atm, 4); //display 4 decimal places

    Serial.print("Altitude: ");
    Serial.print(altitude, 2); //display 2 decimal places
    Serial.println(" m");

    Serial.println();
    delay(1000);

}

```

**Passo 4.** Faça o upload do código. Selecione o tipo de placa e a porta COM corretos.

Você pode ver:
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-test.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-test.png" alt="pir" width={600} height="auto" /></p>

## Referências
 - Orientação dos eixos
O diagrama abaixo mostra a orientação dos eixos de sensibilidade e a polaridade de rotação.
<!-- ![](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/Imu-10dof-dir-axes.png" alt="pir" width={600} height="auto" /></p>

# Grove - IMU 10DOF v1.0
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - IMU 10DOF v1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_V1.1_Eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Recursos


-  **[ZIP]** [Arquivo eagle Grove - IMU 10DOF v1.0](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0_sch_pcb.zip)
-  **[Eagle]** [Arquivo eagle Grove - IMU 10DOF v1.1](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_V1.1_Eagle_file.zip)
-  **[PDF]** [Arquivo pdf de esquemáticos Grove - IMU 10DOF v1.0](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove-IMU_10DOF_v1.0.pdf)
-  **[PDF]** [Arquivo pdf de esquemáticos Grove - IMU 10DOF v1.1](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/Grove%20-%20IMU%2010DOF%20v1.1.pdf)
-  **[Library]** [Biblioteca Grove-IMU_10DOF](https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF)
-  **[PDF]** [Folha de dados BMP180](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/BMP180.pdf)
-  **[PDF]** [Folha de dados MPU-9250](https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/res/MPU-9250A_Product_Specification.pdf)


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
