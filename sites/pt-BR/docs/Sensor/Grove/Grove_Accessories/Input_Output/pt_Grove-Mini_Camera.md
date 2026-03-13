---
title: Grove - Mini Camera
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Mini_Camera/
slug: /Grove-Mini_Camera
last_update:
  date: 01/09/2022
  author: gunengyu
createdAt: '2023-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Mini_Camera/
---

![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Grove_camera.jpg)

Se você está procurando uma câmera de tamanho pequeno, talvez a Grove-Mini Camera seja a sua melhor escolha. É uma mini câmera que pode ser controlada por Arduino. Ela possui processamento de imagem integrado para gerar imagens JPEG de 1280\*720. As fotos capturadas são armazenadas em um cartão SD e você pode ler as informações do cartão SD via interface Mini USB de 8 pinos.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Mini-Camera-p-1578.html)

Recursos
-------

- Interface USB padrão e interface Grove
- Alta resolução
- Tamanho reduzido e peso leve

:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::
Especificações
-------------

| Item                         | Parâmetro de Desempenho |
|------------------------------|--------------------------|
| CPU                          | ARM9                     |
| Decodificação de Vídeo       | H.263 Accele             |
| Formato de Vídeo             | AVI                      |
| Codificação de Vídeo         | MPEG4                    |
| Resolução de Vídeo           | 640\*480                 |
| Taxa de Quadros de Vídeo     | 30FPS                    |
| Executar Software            | suporta AVI Player       |
| Formato de Foto              | JPEG                     |
| Resolução de Imagem          | 1280\*720                |
| Modo de Carga                | DC5V                     |
| Interface de Comunicação de Dados | Mini USB de 8 pinos  |
| Meio de Armazenamento        | Micro SD (Máx. 32G)      |

Demonstração
-------------

Diferente de uma câmera comum, a Grove - Mini Camera pode ser controlada por Arduino/Seeeduino.

Agora vamos usar a Grove - Mini Camera para realizar esta função: tirar uma foto toda vez que alguém se aproximar.

Para isso, precisamos de um **Grove - PIR Motion Sensor** que possa detectar qualquer movimento dentro de um certo alcance.

Vamos começar a montá-la:

- Insira o cartão SD no soquete de cartão SD; o cartão SD não está incluído neste Grove e seu tamanho não pode ser maior que 32G.
- Conecte a Grove - Mini Camera à porta D2 do **Grove - Base Shield**, e o Grove - PIR Motion Sensor à porta D5.
- Conecte o Grove - Base Shield ao Arduino/Seeeduino e, em seguida, conecte o Arduino/Seeeduino ao PC usando um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Connecting_Picture.JPG)

- Abra a IDE do Arduino, copie e cole o código abaixo em um novo sketch:

```
    /*Using digital 2 to control Camera*/
    /*Using digital 5 to receive sensor signal*/
    #define KEY 2
    #define PIR_MOTION_SENSOR 5  

    void setup()
    { 
      Serial.begin(9600);
      pinMode(KEY,OUTPUT);
      pinMode(PIR_MOTION_SENSOR,INPUT);
      delay(100);
      enterStandbyMode();
      makeVideo(5000);

    }
    void loop()
    {
        int sensorValue = digitalRead(PIR_MOTION_SENSOR);
        if(sensorValue == HIGH)  //when the sensor value is HIGH, someone is in here
        {
           takePicture();
               delay(5000);      
        }
    }
    void takePicture(void)
    {
       digitalWrite(KEY,HIGH);
       delay(1000);
       digitalWrite(KEY,LOW);
       delay(1000);
    }
    void enterStandbyMode(void)
    {
      //set the key pin as high level for 2s,enter the standby state  
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
    void makeVideo(long int videoTime)
    {
      //set the key pin as high level for 2s again, from the standby state to video state
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(videoTime); //make a  video for videoTime.Its unit is ms.  
     // stop the video
      digitalWrite(KEY,HIGH);
      delay(1000);
      digitalWrite(KEY,LOW);
      delay(1000);
    }
    void PoweroffMode(void)
    {
      //set the key pin as high level for 5s,enter the poweroff state  
      digitalWrite(KEY,HIGH);
      delay(5000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
```

- Envie o código.
- Agora deve haver um vídeo no cartão SD porque chamamos a função uma vez durante o Setup(). Para reproduzir o vídeo, você pode conectar diretamente a câmera ao PC via cabo USB ou usar um leitor para acessá-lo. E se alguém se aproximar enquanto ela estiver funcionando, você também deverá encontrar algumas fotos no cartão SD.

Referência
---------

Aqui está a descrição de estados desta mini câmera. Existem 5 estados de funcionamento.

**1. Standby：** Defina a chave em nível alto por 2 segundos quando estiver no estado desligado; o LED vermelho acenderá. A mini câmera entra no estado Standby.

**2. Desligado:** Defina a chave em nível alto por 5 segundos; a câmera entra no estado Desligado e o LED vermelho se apaga.

**3. Tirar fotos:** Defina a chave em nível alto por cerca de 1000ms quando estiver no estado ligado; a câmera pode tirar uma foto. O LED vermelho piscará uma vez para informar que uma foto foi tirada. Depois disso, ela entra automaticamente no estado standby.

**4. Vídeo:** Defina a chave em nível alto por 2 segundos quando estiver no estado standby; a câmera entrará no estado de vídeo e o LED vermelho piscará continuamente. Para pará-la, defina a chave em nível alto por cerca de 1000ms; a câmera entrará no estado standby.

**5. Armazenamento de arquivos:** Conecte a câmera ao PC usando um cabo USB; você pode abrir arquivos de imagem e arquivos de VÍDEO. Você também pode acessar os arquivos no cartão SD usando um leitor de cartão SD.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Mini Camera Eagle File](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Mini_Camera -->

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
