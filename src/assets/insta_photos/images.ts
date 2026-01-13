const images = import.meta.glob("./*.png", { eager: true })
export const imageList = Object.values(images).map((img: any) => img.default)
