const images = import.meta.glob("./*.webp", { eager: true })
export const imageList = Object.values(images).map((img: any) => img.default)
