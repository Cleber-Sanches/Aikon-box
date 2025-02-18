const ERROR_ICON_NAME = 'Error404';
const SCALE = (tamanho: number): number => tamanho / (300 - 44);

const generateIcons = (iconNames: string[], iconsPerLine: number, icons: { [key: string]: string }, size: number): string => {
  const scaledSize = SCALE(size);

  const iconList = iconNames.map((name) => icons[name] || icons[ERROR_ICON_NAME]);

  const width = Math.min(iconsPerLine * 300, iconNames.length * 300) - 44;
  const height = Math.ceil(iconList.length / iconsPerLine) * 300 - 44;

  const scaledHeight = height * scaledSize;
  const scaledWidth = width * scaledSize;

  return `
    <svg width="${scaledWidth}" height="${scaledHeight}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      ${iconList
        .map(
          (icon, index) => `
            <g transform="translate(${(index % iconsPerLine) * 300}, ${Math.floor(index / iconsPerLine) * 300})">
              ${icon}
            </g>
            `,
        )
        .join(' ')}
    </svg>
  `;
};

export default generateIcons;
