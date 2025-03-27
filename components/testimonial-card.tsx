interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  image: string
  variant: "blue" | "light"
}

export default function TestimonialCard({ quote, name, location, image, variant }: TestimonialCardProps) {
  const bgColor = variant === "blue" ? "blue-sky/10" : "blue-lighter/10"
  const quoteColor = variant === "blue" ? "blue-lighter" : "blue-sky"

  return (
    <div className={`bg-${bgColor} dark:bg-blue-dark/30 rounded-xl p-8 relative h-full flex flex-col`}>
      <div className={`absolute top-0 left-8 transform -translate-y-1/2 text-6xl text-${quoteColor}`}>"</div>
      <p className="text-foreground/80 mb-6 pt-4 relative z-10 flex-grow">{quote}</p>
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <p className="text-sm text-foreground/60">{location}</p>
        </div>
      </div>
    </div>
  )
}

