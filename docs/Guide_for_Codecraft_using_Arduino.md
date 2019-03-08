Codecraft is a programming software based on Scratch3.0 and supports both graphical and text programming languages. It’s a versatile software tool for STEM education. With Codecraft, children are able to design engaging stories, games and animations, and use various electronic kits which CH Maker Ed and Seeedstudio provides to create interactive smart applications. Furthermore, when you’re ready, you can always convert the code blocks to Arduino, Python, or JavaScript to learn more about the most popular languages.

There are 2 modes in Codecraft which are Stage Mode and Device Mode. In Stage Mode, users can control an object which is called a “sprite” by using code blocks. Also, this mode can be used to help students learn about shapes, arithmetic and also other areas of math.

In Device mode, users can connect with a Grove Zero or an Arduino to build their cool projects by simply dragging and dropping code blocks into the IDE.

## Blocks in device mode

Here are the main types of blocks used in Codecraft.

### Stack Blocks

![Stack Blocks](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/p1.png)

Stack Blocks are the blocks that perform the main commands. They are shaped with a notch at the top and a bump on the bottom — so blocks can be placed above and below them.

### Boolean Blocks

![Boolean Blocks](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/p2.png)

Boolean blocks are the conditions - they are either true or false. For example, asking a computer: “Is 2+2=4?”, and it would either tell you “Yes” or “No”. Boolean blocks are hexagonal shape.

### Reporter Blocks

![Reporter Blocks](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/p3.png)

Reporter blocks are the values. Reporter blocks can hold numbers and strings. It is like asking a friend, for example, “What is 2+2?”, and they would answer “4”. It is not just equations however, it can report a variable, for example, “What is your age?”. They may answer: “15”. It is shaped with round edges.

### C Blocks

![C Blocks](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/p4.png)

C blocks are blocks that take the shape of “C’s”. Also known as “Wrap blocks”, these blocks loop the blocks within Cs or check if a condition is true. There’re five C blocks, and they can be found in the Control category. C blocks can be bumped at the bottom, or capped.

### Output Boolean Blocks

![C Blocks](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/p5.png)

Output Boolean Blocks are hexagonal shaped blocks that checks if a condition is “true” or “false” and performs an operation once the condition is met. These block can be placed inside Boolean Blocks and C  blocks.

## Grove Starter Kit for Arduino

The following Grove modules are included with this kit.

### Grove - LCD RGB Backlight

![Grove - LCD RGB Backlight](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/grove_lcd.jpg)

The Grove - LCD RGB Backlight supports text display, using user-defined characters. It enables you to set the backlight color, using the simple and concise Grove interface. It uses I2C as the communication method with your Arduino. So, the number of pins required for data exchange and backlight control shrinks from ~10 to 2, leaving more I/O capability for other challenging tasks.

![lcd color block](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/lcd_color_block.png)

LCD RGB setColor block can be used to change the backlight color of the LCD. The color will change according to the R, G, B values entered in the spaces.

![lcd print block](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/lcd_print_block.png)

LCD RGB print block helps in placing the letters where you want. Also, at the end, the text that needs to be shown om the LCD display can be added in the column which is included in the block.

Now we can use these blocks to build a program which display "hello, world!" at LCD's first line, and display system running time at second line.

At first, you need to enter [Codecraft](https://ide.chmakered.com/), and add Arduino support to it. Click "Add device" in sidebar on the left, then choose "Arduino Uno/Mega".

![add device](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/add_device.png)

Codecraft Assistant can help you to upload the code in Codecraft to Arduino, please follow [here](http://docproxy.chmakered.com/web/#/2?page_id=173) to download and install it.

Now you can drag Arduino's main procedure from "Start" tab to working area.

![main procedure](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/main_procedure.png)

The LCD blocks mentioned above can be found in "Grove I2C" tab, drag them to setup procedure, change a color you like, and let "hello, world!" display to your LCD's first line.

![lcd setup](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/lcd_setup.png)

Connect LCD to Base Shield's I2C port via Grove cable, plug Base Shield to Arduino, and connect Arduino to your PC via a USB cable. Click the Upload button in Codecraft's lower right corner, choose Arduino's serial port, wait for a while, you can see "hello, world!" displayed in the LCD screen.

![Upload](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/upload.png)

How to display system running time into the screen? You can find "System running time" block in "Input" tab, drag a new LCD print block to loop procedure, and drag a System running time block to LCD print block.

If you want to display that as seconds, you can drag a "Division" block in "Operators" tab. The completed program looks like this:

![LCD RGB demo](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/lcd_demo.png)

### Grove - Relay

![Grove - Relay](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/grove_relay.jpg)

The Relay is a useful tool to magnify your Arduino’s control ability! Feed the control signal through the Grove interface and the relay open or close the external circuit that is connected to the screw terminals. The voltage of the external circuit can run up to 220V! So grab this relay and start some really tough projects!

![relay block](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/relay_block.png)

Relay block can be used to control the Relay by having the options to turn it ON and OFF.

Now we can use it and a Grove - Button to control a Relay, they can be found in "Grove Digital" tab. Please refer to the previous section to create a basic structure of the program. Then create a variable to store Button's state, turn to "Variables" tab, click "Make a Variable" button, and name the variable we will create, like "buttonState".

![create variable](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/create_variable.png)

Click "OK", now buttonState variable appear in buttonState. Drag "set buttonState to 0" block to loop procedure, and drag "Button" block to it.

![relay buttonState](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/relay_buttonState.png)

We need to turn on the relay when the button is pressed, otherwise turn off it, so we need a "if...then...else" block in "Control" tab and a "equal" block in "Operator" tab, drag them to loop procedure, and let them combine with buttonState variable.

![relay if](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/relay_if.png)

Finally drag Relay block to them, upload to Arduino, all done.

![relay demo](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/relay_demo.png)

### Grove - Sound Sensor

![Grove - Sound Sensor](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/grove_sound.jpg)

The Sound sensor module is a simple microphone. Based on an LM358 amplifier and an electret microphone, it can be used to detect the sound level in the environment.

![sound block](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/sound_block.png)

Sound block can be used to sense the size of the sound in the environment. It support A0 - A3 ports in Base Shield.

We can build a demo of using an LED flashing alarm when the sound in the environment is too loud. You can find "Sound" block in "Grove Analog" tab, and "LED" block can be found in "Grove Digital" tab. Please refer to "Grove - Relay" section to create a variable to store sound size.

Then using "if...then" block in "Control" tab determine if the sound size exceeds the threshold.

![sound loop](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/sound_loop.png)

If the sound size exceeds the threshold, blink the led.

![sound demo](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/sound_demo.png)

### Grove - Touch Sensor

![Grove - Touch Sensor](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/grove_touch.jpg)

The Grove - Touch Sensor enables you to replace pressure on a button with contact on a detecting surface. It can detect the change in capacitance when a finger is nearby. So, whether your finger touches the pad directly or just stays close to it, the Grove - Touch Sensor would output HIGH.

![touch block](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/touch_block.png)

Touch block can be used to read the status of the touch via Digital INPUT, it can be found in "Grove Digital" tab.

The output of the Touch Sensor is not intuitive enough? It's ok, we can use a LED to indicate if Touch Sensor be touched or not. The program more like the program in "Grove - Relay" section, and we can build it without variables.

![touch demo](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/touch_demo.png)

### Grove - Rotary Angle Sensor

![Grove - Rotary Angle Sensor](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/grove_rotary.jpg)

The Grove potentiometer produces analog output between 0 and VCC (3.3 or 5 VDC). The angular range is 300 degrees, with a linear change in value. The resistance value is 10k ohms, perfect for Arduino use. This may also be known as a “rotary angle sensor”.

![rotary block](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/rotary_block.png)

Rotation block can be used to read status of the rotation via Analog INPUT, it can be found in "Grove Analog" tab.

We can display rotation value in Serial port, serial related blocks can be found in "Serial Port" tab. Before using Serial port, you should set it's baud rate, drag "Serial baud rate" block to setup procedure, and select 9600 bps.

![rotary setup](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/rotary_setup.png)

"Serial println" block can be used to display a new line in Serial port, we can combine it with "Rotation" block.

![rotary demo](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/rotary_demo.png)

But how to view Serial port data? Click "Connect" in the left of Codecraft, and choose your Arduino's port, then "Connect".

![connect serial](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/connect_serial.png)

Click the "Serial monitor" button in lower right corner, and you can see the Serial port data in "Serial Port Monitor" window.

![serial monitor](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/serial_monitor.png)

Rotate Rotary Angle Sensor, you can see data changes in monitor.

### Grove - LED

![Grove - LED](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/grove_led.jpg)

Grove - LED is designed for the beginners of Arduino/Seeeduino to monitor controls from digital ports. It can be mounted to the surface of your box or desk easily and used as pilot lamp for power or signal.

![led block digital](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/led_block_digital.png)

![led block analog](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/led_block_analog.png)

LED block can be used for acting as Digital OUTPUT or Analog OUTPUT, when acting as Analog OUTPUT, you can control it's brightness.

It's very simple to make LED breathing by using "LED" block in "Grove Analog" tab. Other than that, we also need "count with...from...to...step" block in "Control" tab to calculate the brigness of LED.

Refer to the previous section, drag main procedure to working area, and combine a "count" block with it.

![led count](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/led_count.png)

Make sure let variable i from 0(drakness) to 255(brightest), then add "LED" block and "Delay ms" block to it, and LED's brightness to variable to i.

![led loop](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/led_loop.png)

The program above make LED from darkest to brightest, now we can add program let it from brightest to darkest.

![led demo](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/led_demo.png)

Upload to your Arduino, you can see LED in pin D3 breathing.

### Grove - Light Sensor

![Grove - Light Sensor](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/grove_light.jpg)

The light sensor, also known as the light dependent resistor (LDR). Typically, the resistance of the light sensor will decrease when the ambient light intensity increases.

![light block](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/light_block.png)

Light block can be used to detect light intensity in the environment via Analog INPUT, it can be found in "Grove Analog" tab.

So we can build a program like smart house, when the light intensity falls below the preset threshold, turn on the LED. We have used "if" block in Grove - Touch Sensor section, so it's not hard to build this program.

![light demo](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/light_demo.png)

### Grove - Button

![Grove - Button](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/grove_button.jpg)

This new version of button Grove module contains one independent button, which are configured with pull-down resistor – ready for use with our microcontrollers as digital input. The button signals the SIG wire,NC is not used on this Grove module.

![button block](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/button_block.png)

Button block can be used to dected the status of a momentary pushbutton via Digital INPUT. It supports D2 - D8 ports on the base shield.

We have used Button in Grove - Relay section, now let's change the Relay to a LED, and use Button to control it.

![button demo](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/button_demo.png)

### Grove - Servo

![Grove - Servo](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/grove_servo.png)

This is an actuator whose position can be precisely controlled.

![servo block](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/servo_block.png)

Servo block can be used to control the servo by assigning the amount of rotation and the delay between each rotation.

We can use Rotary Angle Sensor to control Servo, but since the value of "Rotation" block is 0 to 1023, so we need to divide by a number, let it in 0 to 180.

![servo demo](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/raw/master/img/servo_demo.png)


## Resources

* **[Library]** [Grove Starter Kit for Arduino Codecraft Library](https://github.com/SeeedDocument/Guide_for_Codecraft_using_Arduino/tree/master/res)
* **[Codecraft IDE]** [Codecraft](https://ide.chmakered.com/)


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/) or drop mail to techsupport@seeed.cc. 