import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  school: string
}

export default function TestimonialCard({ quote, author, school }: TestimonialCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-muted-foreground/50 mb-2" />
        <p className="text-muted-foreground">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start px-6 pb-6 pt-0">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{school}</p>
      </CardFooter>
    </Card>
  )
}
