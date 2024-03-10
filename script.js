const styles = ['Style-Cyberpunk.css', `Style-Neon.css`, `Style-Neumorphism.css`]
const randomStyle = styles[Math.floor(Math.random() * styles.length)];

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = randomStyle;

document.head.appendChild(link);

var c = document.getElementById("c");
var ctx = c.getContext("2d");

// making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

// the characters
var konkani  = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&"
// converting the string into an array of single characters
var characters = konkani.split("");
var font_size = 15;
var columns = c.width/font_size;    // number of columns for the rain
var gradient = ctx.createLinearGradient(0,10, 0,200);
// an array of drops - one per column
var drops = [];
// x below is the x coordinate
// 1 = y-coordinate of the drop (same for every drop initially)
for (var x = 0; x < columns; x++)
		drops[x] = 1;

// drawing the characters
function draw() {
		// Get the BG color based on the current time i.e. rgb(hh, mm, ss)
		// translucent BG to show trail

		ctx.fillStyle = "rgba(0,0,0, 0.05)";
		ctx.fillRect(0, 0, c.width, c.height);

		ctx.fillStyle = "#BBB"; // grey text
		ctx.font = font_size + "px arial";

		// looping over drops
		for (var i = 0; i < drops.length; i++)
		{
				ctx.fillStyle = "rgba(15,15,15, 0)";
				ctx.fillRect(i * font_size, drops[i] * font_size,font_size,font_size);
				// a random chinese character to print
				var text = characters[Math.floor(Math.random() * characters.length)];
				// x = i * font_size, y = value of drops[i] * font_size
				ctx.fillStyle = "rgb(255,0,0)";
				ctx.fillText(text, i * font_size, drops[i] * font_size);
				// Incrementing Y coordinate
				drops[i]++;
				// sending the drop back to the top randomly after it has crossed the screen
				// adding randomness to the reset to make the drops scattered on the Y axis
			 if (drops[i] * font_size > c.height && Math.random() > 0.975)
						drops[i] = 0;
		}
}

setInterval(draw, 60);


const titles = ['᲼Shadow', 'Shadow᲼', 'hadow S', 'adow Sh', 'dow Sha', 'ow Shad', 'w Shado'];
let index = 0;

function rotateTitle() {
	document.title = titles[index];
	index = (index + 1) % titles.length;
}

setInterval(rotateTitle, 750);
