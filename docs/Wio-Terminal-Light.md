# Getting Started with Light Sensor

This repo demonstrates how to use the built-in light sensor as a component in Wio Terminal. The light sensor uses Analog interface and you can simply read the surrounding Light sensor values via reading its pin.

## Example Code

**Note:** **`WIO_LIGHT`** is the pin for builtin Light Sensor. The Light sensor is connected to **A13**.

```cpp
void setup() {
  pinMode(WIO_LIGHT, INPUT);
  Serial.begin(115200);

}

void loop() {
   int light = analogRead(WIO_LIGHT);
   Serial.print("Light value: ");
   Serial.println(light);
   delay(200);
}
```

**Note:** The light sensor is at the back of the Wio Terminal, just above the microSD card slot.
