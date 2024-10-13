import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary-foreground">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 text-primary-foreground/90">
          Join thousands of satisfied customers and transform your business
          today.
        </p>
        <Button size="lg" variant="secondary">
          Sign Up Now
        </Button>
      </div>
    </section>
  );
}
