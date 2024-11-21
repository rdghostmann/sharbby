import sharp from "sharp";

async function convertToSVG(url, colorScheme) {
  const response = await fetch(url);
  const buffer = await response.buffer();

  // Convert to grayscale and apply a tint color
  const tintedBuffer = await sharp(buffer)
    .grayscale() // Convert to grayscale
    .tint(colorScheme === 'blue' ? { r: 0, g: 0, b: 255 } : { r: 128, g: 128, b: 128 }) // Apply tint
    .toFormat('png') // Ensure the output is PNG
    .toBuffer();

  // Embed as Base64 PNG in an SVG wrapper
  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
      <image href="data:image/png;base64,${tintedBuffer.toString('base64')}" width="30" height="30" />
    </svg>
  `;
}

export async function GET(req) {
  const { searchParams } = req.nextUrl;

  // Extract query parameters
  const url = searchParams.get("url");
  const colorScheme = searchParams.get("colorScheme");

  if (!url || !colorScheme) {
    return new Response('Missing required parameters', { status: 400 });
  }

  try {
    const svgIcon = await convertToSVG(url, colorScheme);
    return new Response(svgIcon, {
      headers: { "Content-Type": "image/svg+xml" },
    });
  } catch (error) {
    console.error(error);  // Log error for debugging
    return new Response('Error processing image', { status: 500 });
  }
}
