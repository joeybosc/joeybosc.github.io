[Go Back](index.md)
# Teardowns
## An Old Classic: The iPhone 3GS
*Feb. 2026*

I recently found an old iPhone 3GS which was my first personal device, and a hand-me-down from my parents when I was 10 years old. Since I don't have any reason to hang onto it besides nostalgia, I figured I'd have a look inside and see what kind of components and chipset Apple was working with in 2009.  

I had a great time picking through the main board and identifying each chip in the chipset, see my diagram below. It seems like they were working mostly with 65nm CMOS technology, but there are signs of the imminent move to 45nm, for example, the NAND flash memory array. 

![iPhone 3GS Chipset](img/iphone3gs_board.png "iPhone 3GS Chipset")

The chipset is more or less:

*Processor:*
**APL0298**
Also known as the S5L8920, the APL0298 is a system-on-a-chip manufactured by Samsung, and serves as an update to the APL0278 found in the 3G model. It is the first iPhone to use the ARMv7 instruction set. The SOC comprises: 
	CPU: 600MHz, single-core
	GPU: PowerVR SGX535; a classic mobile-focused GPU with hardware acceleration
	RAM: 256MB

*Memory:*
**K9PDG08U5D-LCBO**
NAND Flash Memory, 16GB capacity. As far as I can tell this is in a 42nm CMOS process.