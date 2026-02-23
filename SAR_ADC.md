# Successive Approximation Register Analog-Digital Converter (i.e., SAR ADC)

The SAR architecture (or SARchitecture, if you will) appeals to the computer science purist in me because it operates as a physical implementation of a binary search algorithm. Furthermore, it is quite mathematically elegant. The exact number of steps needed for a given conversion is easily determined, and with careful design, the exact timing of each conversion step can be controlled. 

This project was inspired by recent research into Wireless-Sensor Networks, in particular [this paper](https://ieeexplore.ieee.org/document/11008746) which provides a good forward-looking review. 

The objective of this project is to design a low-power (<1mW) 50 kHz SAR ADC in 180nm CMOS for use in 

I divide this project into two parts: 
	