	May 25
//
# Successive Approximation Register Analog-Digital Converter (i.e., SAR ADC)

The SAR architecture (or SARchitecture, if you will) has [surged](https://ieeexplore.ieee.org/document/9761973) in popularity among ADC architectures. Besides achievement of high efficiency and resolution, its elegant working principle of successive approximation appeals to the computer science purist in me because it operates as a physical implementation of a binary search algorithm. Furthermore, the exact number of steps needed for a given conversion is easily determined, and with careful design, the exact timing of each conversion step can be controlled. 

This project was inspired by recent research into Wireless Sensor Networks (WSNs), in particular [this paper](https://ieeexplore.ieee.org/document/11008746) which provides a good forward-looking review. 

The objective of this project is to design a SAR ADC in 180nm CMOS for use in wireless sensors with low power requirements (<10uW), low speed (50kHz), and medium bit resolution (10b). 


