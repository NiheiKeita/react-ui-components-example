export const hslToRgb16 = function (hue: number, saturation: number = 100, lightness: number = 50): string {
	var red = 0,
		green = 0,
		blue = 0,
		q = 0,
		p = 0,
		hueToRgb;

	hue = Number(hue) / 360;
	saturation = Number(saturation) / 100;
	lightness = Number(lightness) / 100;

	if (saturation === 0) {
		red = lightness;
		green = lightness;
		blue = lightness;
	} else {
		hueToRgb = function (p: number, q: number, t: number) {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;

			if (t < 1 / 6) {
				p += (q - p) * 6 * t;
			} else if (t < 1 / 2) {
				p = q;
			} else if (t < 2 / 3) {
				p += (q - p) * (2 / 3 - t) * 6;
			}

			return p;
		};

		if (lightness < 0.5) {
			q = lightness * (1 + saturation);
		} else {
			q = lightness + saturation - lightness * saturation;
		}
		p = 2 * lightness - q;

		red = hueToRgb(p, q, hue + 1 / 3);
		green = hueToRgb(p, q, hue);
		blue = hueToRgb(p, q, hue - 1 / 3);
	}
	return colorNumberToString(red) + colorNumberToString(green) + colorNumberToString(blue)
}

function colorNumberToString(num: number): string {
	return Math.round(num * 255).toString(16).padStart(2, '0')
}