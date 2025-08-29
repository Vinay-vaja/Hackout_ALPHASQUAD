import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Users, ArrowLeft, Building } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-ocean-medium rounded-lg">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-ocean-deep">
                CoastalAlert
              </span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                to="/#features"
                className="text-foreground hover:text-ocean-medium transition-colors"
              >
                Features
              </Link>
              <Link
                to="/#users"
                className="text-foreground hover:text-ocean-medium transition-colors"
              >
                Users
              </Link>
              <Link
                to="/#impact"
                className="text-foreground hover:text-ocean-medium transition-colors"
              >
                Impact
              </Link>
              <Link
                to="/#contact"
                className="text-foreground hover:text-ocean-medium transition-colors"
              >
                Contact
              </Link>
            </div>
            <Button>Get Early Access</Button>
          </div>
        </div>
      </nav>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                <Building className="h-16 w-16 text-ocean-medium" />
              </div>
              <CardTitle className="text-2xl">About CoastalAlert</CardTitle>
              <CardDescription className="text-lg">
                Learn more about our mission to protect coastal communities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-left space-y-4">
                <p className="text-muted-foreground">
                  CoastalAlert is a revolutionary AI-powered early warning
                  system designed to protect coastal communities from the
                  increasing threats posed by climate change and human
                  activities.
                </p>
                <p className="text-muted-foreground">
                  Our team of marine scientists, AI researchers, and disaster
                  management experts work together to create innovative
                  solutions for coastal protection and community safety.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-ocean-light/10 rounded-lg">
                  <Users className="h-8 w-8 text-ocean-medium mx-auto mb-2" />
                  <p className="font-semibold">Our Team</p>
                  <p className="text-sm text-muted-foreground">
                    Expert marine scientists & engineers
                  </p>
                </div>
                <div className="text-center p-4 bg-ocean-light/10 rounded-lg">
                  <Waves className="h-8 w-8 text-ocean-medium mx-auto mb-2" />
                  <p className="font-semibold">Our Mission</p>
                  <p className="text-sm text-muted-foreground">
                    Protecting coastal communities
                  </p>
                </div>
              </div>

              <Badge
                variant="outline"
                className="border-ocean-medium text-ocean-medium"
              >
                Founded 2023
              </Badge>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                  </Button>
                </Link>
                <Link to="/#contact">
                  <Button>Contact Our Team</Button>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground">
                Want to help build this page? Continue prompting to add more
                company information!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
