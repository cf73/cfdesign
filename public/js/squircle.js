// Generate true Apple squircle path using superellipse formula
// Using 1200x800 proportions (3:2 aspect ratio)
function generateSquirclePath(width = 1200, height = 800) {
  const points = [];
  const steps = 360;
  const a = width / 2; // semi-major axis (horizontal)
  const b = height / 2; // semi-minor axis (vertical)
  const n = 24; // Squircle exponent (higher = tighter corners, less cut off)
  
  for (let i = 0; i <= steps; i++) {
    const angle = (2 * Math.PI * i) / steps;
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    
    // Superellipse formula: |x/a|^n + |y/b|^n = 1
    const x = a * Math.sign(cosAngle) * Math.pow(Math.abs(cosAngle), 2/n);
    const y = b * Math.sign(sinAngle) * Math.pow(Math.abs(sinAngle), 2/n);
    
    const scaledX = x + width/2;
    const scaledY = y + height/2;
    
    if (i === 0) {
      points.push(`M ${scaledX} ${scaledY}`);
    } else {
      points.push(`L ${scaledX} ${scaledY}`);
    }
  }
  points.push('Z');
  return points.join(' ');
}

// Generate the squircle SVG with 1200x800 dimensions and return as data URL
const squirclePath = generateSquirclePath(1200, 800);
const squircleSVG = `<svg viewBox='0 0 1200 800' xmlns='http://www.w3.org/2000/svg'><path d='${squirclePath}' fill='white'/></svg>`;
const squircleDataURL = `url("data:image/svg+xml,${encodeURIComponent(squircleSVG)}")`;

// Apply squircle mask to ::before pseudo-element for shadow only
document.addEventListener('DOMContentLoaded', function() {
  const squircleContainers = document.querySelectorAll('.squircle-container');
  
  // Create a style element to inject the pseudo-element mask
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .squircle-container::before {
      -webkit-mask-image: ${squircleDataURL};
      mask-image: ${squircleDataURL};
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-position: center;
      mask-position: center;
      background: black;
    }
  `;
  document.head.appendChild(styleEl);
});

