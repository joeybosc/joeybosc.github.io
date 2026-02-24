# Integrated Buck Converter Design

Who hasn't, perhaps as a young person, marveled at a power adapter. That mysterious warm black plastic brick which, turns the scary big-lightning-bolt high voltage wall power into a trickle of juice for our most delicate instruments. An electron bottleneck, which aims to calm down high energy signals without wasting loads of valuable power. I've looked at power converters closely before, but usually in the context of informal power adapter teardowns, not generally including a look at the buck ICs which make it all work. So I'm looking forward to seeing how it all comes together. 

Going into this, the main considerations are:
1. 
2. The size of the inductor (target an integrated inductor ~ 10nH)
3. The voltage ripple of the output (generally, larger inductor=smaller ripple)
4. Compensation of the feedback network
5. Speed of digital control circuitry


The overall sequence of events in the loop, assuming steady-state operation:
1. Power FETs generate a PWM signal switching between GND and Vin, with the duty cycle corresponding to the conversion ratio.
2. LC Filter smooths the PWM signal into a stable output voltage. This is the key principle, and the Q factors of L and C are important. 
3. Voltage divider steps the output down to a level more manageable by the control circuitry.
4. Error amplifier
5. Compensation
6. Comparator
7. QR Latch
8. Gate Driver
9. Non-overlap buffer

With these considerations we'll base the design on the below topology. 

![Buck Converter](img/Buck_Architecture.jpg "Buck Architecture")

