aviJqueryLoaded = typeof aviJqueryLoaded === "boolean";

let aviLoadJquery = () => {
  if (aviJqueryLoaded) {
    const s = document.createElement("script");
    s.crossOrigin = "anonymous";
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    document.body.appendChild(s);
    aviJqueryLoaded = true;
  }
};

let aviProperties = [
  "backgroundColor",
  "color",
  "borderLeftColor",
  "borderRightColor",
  "borderTopColor",
  "borderBottomColor",
];

let aviTestValue = (value, r, g, b, a) =>
  value?.startsWith(
    a === undefined ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`
  ) ||
  value?.startsWith(
    a === undefined ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${a})`
  ) ||
  false;

let aviHexToRGBA = (hex) => {
  const hexString = (hex.startsWith("#") ? hex.substring(1) : hex).split("");
  let components;
  switch (hexString.length) {
    case 3:
    // case 4:
      components = hexString.map((component) => component.repeat(2));
      break;
    case 6:
    // case 8:
      components = hexString.reduce(
        (result, value, index, array) =>
          index % 2 === 0
            ? [...result, array.slice(index, index + 2).join("")]
            : result,
        []
      );
      break;
    default:
      throw new Error("Invalid hex string");
  }
  return components.map((component) => parseInt(component, 16));
};

{
  document.querySelectorAll("*").forEach((el) => {
    for (const object of Object.values(aviColorMaps)) {
      const { hex, rgb, rgba, replacement } = object;
      const rgbArray = rgba || rgb || aviHexToRGBA(hex);

      for (const property of aviProperties) {
        if (aviTestValue(window.getComputedStyle(el)[property], ...rgbArray))
          el.style[property] = replacement;
      }
    }
  });
}
