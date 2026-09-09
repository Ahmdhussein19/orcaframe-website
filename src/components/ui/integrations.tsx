import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { assetSrc } from "@/lib/asset"
import { InfiniteSlider } from "./infinite-slider"
import Img1Png from "@/assets/images/1.png"
import Img3Png from "@/assets/images/3.png"
import Img4Png from "@/assets/images/4.png"
import Img74d33678bb91045843da44bdab726e66Png from "@/assets/images/74d33678bb91045843da44bdab726e66.png"
import GoogleSheetsIconsPng from "@/assets/images/Google Sheets Icons.png"
import MicrosoftIconsPng from "@/assets/images/Microsoft Icons.png"
import ExcelSvg from "@/assets/images/Microsoft_Office_Excel_(2019–2025).svg"
import PowerBISvg from "@/assets/images/New_Power_BI_Logo.svg"
import PdfFileSvg from "@/assets/images/text_7901387.png"
import DataEngineerPng from "@/assets/images/data-engineer.png"

const imageTiles = [
  { src: assetSrc(PdfFileSvg), alt: "PDF document icon" },
  { src: assetSrc(DataEngineerPng), alt: "Data engineer illustration" },
  { src: assetSrc(PowerBISvg), alt: "Power BI logo" },
  { src: assetSrc(ExcelSvg), alt: "Excel icon" },
  { src: assetSrc(GoogleSheetsIconsPng), alt: "Google Sheets icon" },
  { src: assetSrc(MicrosoftIconsPng), alt: "Microsoft icons" },
  { src: assetSrc(Img1Png), alt: "Data source 1" },
  // Light mode uses 4.png, dark mode uses 3.png
  { src: assetSrc(Img4Png), darkSrc: assetSrc(Img3Png), alt: "API data source" },
  {
    src: assetSrc(Img74d33678bb91045843da44bdab726e66Png),
    alt: "Application screenshot 74d33678bb91045843da44bdab726e66",
  },
]

const tiles = imageTiles.map((img) => ({
  icon: (
    <>
      <img
        src={img.src}
        alt={img.alt}
        className={cn(
          "h-8 w-8 object-contain",
          img.darkSrc ? "dark:hidden" : "",
        )}
      />
      {img.darkSrc && (
        <img
          src={img.darkSrc}
          alt={img.alt}
          className="hidden h-8 w-8 object-contain dark:block"
        />
      )}
    </>
  ),
}))

function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length
  let randomIndex
  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}

function Card(card: { icon: React.ReactNode }) {
  return (
    <div
      className={cn(
        "relative h-10 w-10 cursor-pointer overflow-hidden flex items-center justify-center"
      )}
    >
      {card.icon}
    </div>
  )
}

export default function Integrations() {
  const [randomTiles1, setRandomTiles1] = useState<typeof tiles>([])
  const [randomTiles2, setRandomTiles2] = useState<typeof tiles>([])
  const [randomTiles3, setRandomTiles3] = useState<typeof tiles>([])

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensures this runs client-side
      setRandomTiles1(shuffleArray([...tiles]))
      setRandomTiles2(shuffleArray([...tiles]))
      setRandomTiles3(shuffleArray([...tiles]))
    }
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden space-y-8 py-3">
        {/* Row 1 - reverse */}
        <InfiniteSlider
          direction="horizontal"
          reverse
          gap={16}
          speed={30}
          className="w-full"
        >
          {randomTiles1.map((tile, idx) => (
            <Card key={idx} {...tile} />
          ))}
        </InfiniteSlider>

        {/* Row 2 - normal */}
        <InfiniteSlider
          direction="horizontal"
          gap={16}
          speed={25}
          className="w-full"
        >
          {randomTiles2.map((tile, idx) => (
            <Card key={idx} {...tile} />
          ))}
        </InfiniteSlider>

        {/* Row 3 - reverse */}
        <InfiniteSlider
          direction="horizontal"
          reverse
          gap={16}
          speed={10}
          className="w-full"
        >
          {randomTiles3.map((tile, idx) => (
            <Card key={idx} {...tile} />
          ))}
        </InfiniteSlider>

      </div>
    </div>
  )
}
