# Using the Grove Analog Port on Rescreen

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2011-36-22.2019-12-12%2011_37_02.gif"/></div>

This repo demonstrates how to use Analog as inputs on ReScreen. To use analog pins on ReScreen, you must use RPI pins.

## RPI Analog Pins

The Raspberry Pi pinouts are defined as:

- `RPI_A0` -> `RPI_A8`

## Grove Port Configurations

To use the **Grove configurable A/D Port** as Analog port, simply define it as follow:

```cpp
void setup() {
    pinMode(RPI_A0, INPUT); 
}
```

Now, connect your Grove sensor to the physical pin!

## Example Code 

In this example, a Grove Loudness sensor is used to demonstrate:

```cpp
void setup() {
    Serial.begin(115200);
    pinMode(RPI_A0, INPUT);
}
void loop() {
    int loudness = analogRead(RPI_A0);
    Serial.print("Loudness: ");
    Serial.println(loudness);
    delay(50);
}
```
