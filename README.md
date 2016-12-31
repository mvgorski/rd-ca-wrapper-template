*not using "Login" on mobile menu because Blackbaud's Participant Centre is not mobile-friendly.*


#### Modular Typography

Add [Modular Scale Sass plug-in](https://github.com/modularscale/modularscale-sass) for responsive typography. Scales the font along a varying ratio depending on breakfpoint.

`$ms-base: 1em,1.05em;
$ms-ratio: 1.15;
$ms-range: 
	1.10 768px,
	1.12 992px,
	1.15 1200px
;
$ms-fluid: false;`

[Changing Modular Scale Ratio on Different Breakpoint](https://zellwk.com/blog/changing-modular-scale/)

I've set the ratio to: 
`1:10` below `768px`
`1:12` below `992px`
`1:15` above `1200px`


