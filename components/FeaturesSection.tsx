import { CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  { title: 'Feature 1', description: 'Description of feature 1' },
  { title: 'Feature 2', description: 'Description of feature 2' },
  { title: 'Feature 3', description: 'Description of feature 3' },
]

export default function FeaturesSection() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-2" />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}