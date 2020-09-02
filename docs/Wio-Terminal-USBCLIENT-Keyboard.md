# Using Wio Terminal as a Keyboard

This repo introduces how to use the Wio Terminal as one of the USB device and in this example, Wio Terminal is used as a simple keyboard. It has assigned 3 keys `s`, `e`, `d` to the 3 buttons of Wio Terminal. This can be easily implemented into your design for more challenging tasks.

## Complete Code

```cpp
#include "Keyboard.h" //keyboard library 

void setup() { 
  //set button pins as inputs
  pinMode(WIO_KEY_A, INPUT);
  pinMode(WIO_KEY_B, INPUT);
  pinMode(WIO_KEY_C, INPUT);
  
  Keyboard.begin(); //start keyboard communication
}

void loop() {  
  if (digitalRead(WIO_KEY_A) == LOW) { //detect button press
    Keyboard.write('s'); //single key is pressed (character) 
  }
  if (digitalRead(WIO_KEY_B) == LOW) {   
    Keyboard.write('e'); 
  }  
  if (digitalRead(WIO_KEY_C) == LOW) {        
    Keyboard.write('d');  
  } 
  
  delay(200); //delay between keypresses
  
}
```