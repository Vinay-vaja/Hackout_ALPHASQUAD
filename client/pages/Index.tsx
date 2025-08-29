import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { 
  AlertTriangle, 
  Brain, 
  Satellite, 
  Smartphone, 
  Users, 
  Shield, 
  Waves, 
  Factory, 
  MapPin,
  CheckCircle,
  BarChart3,
  Clock,
  Mail,
  Phone,
  Building,
  Fish,
  TreePine
} from 'lucide-react';

export default function Index() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your interest. We'll contact you soon.",
    });
    setContactForm({ name: '', email: '', organization: '', message: '' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed Successfully",
      description: "You'll receive early access when we launch.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-ocean-medium rounded-lg">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-ocean-deep">CoastalAlert</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-foreground hover:text-ocean-medium transition-colors">Features</a>
              <a href="#users" className="text-foreground hover:text-ocean-medium transition-colors">Users</a>
              <a href="#impact" className="text-foreground hover:text-ocean-medium transition-colors">Impact</a>
              <a href="#contact" className="text-foreground hover:text-ocean-medium transition-colors">Contact</a>
            </div>
            <Button>Get Early Access</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-light to-ocean-medium py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Cg fill-opacity="0.1"%3E%3Cpath d="M10 10h20v20H10zM40 10h20v20H40zM70 10h20v20H70zM10 40h20v20H10zM40 40h20v20H40zM70 40h20v20H70zM10 70h20v20H10zM40 70h20v20H40zM70 70h20v20H70z"/%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Alert className="max-w-md mx-auto mb-8 border-coral bg-coral/10">
              <AlertTriangle className="h-4 w-4 text-coral" />
              <AlertTitle className="text-coral">Critical Infrastructure Protection</AlertTitle>
              <AlertDescription>Coastal communities face increasing threats from climate change</AlertDescription>
            </Alert>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="block text-sand">Coastal Protection</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Advanced early warning system using artificial intelligence to detect and predict coastal threats including storm surges, erosion, pollution, and illegal activities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-ocean-medium hover:bg-white/90">
                <Shield className="mr-2 h-5 w-5" />
                Start Protecting Your Coast
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ocean-medium">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Live Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Coastal Communities Under Threat
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Rising sea levels, extreme weather, and human activities pose unprecedented risks to coastal ecosystems and communities worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-coral/20 hover:border-coral/40 transition-colors">
              <CardHeader>
                <Waves className="h-12 w-12 text-coral mb-2" />
                <CardTitle className="text-coral">Storm Surges</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Devastating coastal flooding from extreme weather events threatening lives and infrastructure.</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-500/20 hover:border-orange-500/40 transition-colors">
              <CardHeader>
                <MapPin className="h-12 w-12 text-orange-500 mb-2" />
                <CardTitle className="text-orange-500">Coastal Erosion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Progressive land loss endangering coastal properties and critical habitats.</p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-500/20 hover:border-purple-500/40 transition-colors">
              <CardHeader>
                <Factory className="h-12 w-12 text-purple-500 mb-2" />
                <CardTitle className="text-purple-500">Pollution Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Industrial discharge and oil spills contaminating marine ecosystems and water supplies.</p>
              </CardContent>
            </Card>
            
            <Card className="border-red-500/20 hover:border-red-500/40 transition-colors">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-red-500 mb-2" />
                <CardTitle className="text-red-500">Illegal Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Unauthorized fishing, dumping, and development threatening protected areas.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-ocean-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-ocean-medium text-ocean-medium mb-4">
                AI-Powered Solution
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Intelligent Early Warning Platform
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our advanced AI system continuously monitors coastal conditions using satellite imagery, IoT sensors, and machine learning algorithms to detect threats before they become disasters.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Predictive Analytics</p>
                    <p className="text-muted-foreground">AI models predict threats up to 72 hours in advance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Real-time Monitoring</p>
                    <p className="text-muted-foreground">24/7 surveillance of coastal conditions and activities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Automated Response</p>
                    <p className="text-muted-foreground">Instant alerts to relevant authorities and communities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-6 bg-gradient-to-br from-ocean-medium to-ocean-deep text-white">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-4">
                    <Brain className="h-8 w-8" />
                    <span className="text-xl font-bold">AI Engine Status</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Active Sensors</span>
                    <Badge variant="secondary" className="bg-green-500 text-white">1,247</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Satellites Monitored</span>
                    <Badge variant="secondary" className="bg-blue-500 text-white">12</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Threats Detected (24h)</span>
                    <Badge variant="secondary" className="bg-orange-500 text-white">3</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Early Warnings Sent</span>
                    <Badge variant="secondary" className="bg-red-500 text-white">47</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advanced Monitoring Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coastal protection through cutting-edge technology and intelligent data analysis.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Satellite className="h-16 w-16 text-ocean-medium mx-auto mb-4" />
                <CardTitle>Real-time Data Collection</CardTitle>
                <CardDescription>
                  Continuous monitoring from satellites, IoT sensors, and weather stations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li>• Satellite imagery analysis</li>
                  <li>• Ocean buoy sensors</li>
                  <li>• Weather station data</li>
                  <li>• Coastal camera feeds</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Brain className="h-16 w-16 text-ocean-medium mx-auto mb-4" />
                <CardTitle>AI/ML Anomaly Detection</CardTitle>
                <CardDescription>
                  Machine learning algorithms identify patterns and predict threats
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li>• Pattern recognition</li>
                  <li>• Predictive modeling</li>
                  <li>• Risk assessment</li>
                  <li>• Trend analysis</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="h-16 w-16 text-ocean-medium mx-auto mb-4" />
                <CardTitle>Multi-Channel Alerts</CardTitle>
                <CardDescription>
                  Instant notifications delivered through multiple channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li>• SMS text messages</li>
                  <li>• Mobile app notifications</li>
                  <li>• Web dashboard alerts</li>
                  <li>• Emergency broadcasts</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Users Section */}
      <section id="users" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving Coastal Communities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform serves diverse stakeholders working to protect coastal environments and communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-12 w-12 text-ocean-medium mx-auto mb-4" />
                <CardTitle className="text-lg">Government Agencies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Emergency management, environmental protection, and coastal planning authorities.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TreePine className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-lg">NGOs & Researchers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Environmental organizations and research institutions studying coastal ecosystems.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Fish className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Fisherfolk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Fishing communities and maritime workers who depend on coastal waters for their livelihood.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Disaster Response Teams</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">First responders and emergency services coordinating disaster preparedness and response.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Creating Lasting Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered early warning system delivers measurable results in coastal protection and community safety.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-green-500/20 hover:border-green-500/40 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle className="text-green-500">Saving Lives</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-foreground">95%</div>
                  <p className="text-muted-foreground">Reduction in casualties from coastal flooding through early warnings</p>
                  <div className="text-2xl font-bold text-foreground">72 hours</div>
                  <p className="text-muted-foreground">Average advance warning time for storm surge events</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <CardHeader>
                <TreePine className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle className="text-blue-500">Protecting Habitats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-foreground">80%</div>
                  <p className="text-muted-foreground">Faster detection of illegal activities in protected marine areas</p>
                  <div className="text-2xl font-bold text-foreground">1,200km²</div>
                  <p className="text-muted-foreground">Coastal habitat area under continuous monitoring</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-ocean-medium/20 hover:border-ocean-medium/40 transition-colors">
              <CardHeader>
                <Waves className="h-12 w-12 text-ocean-medium mb-4" />
                <CardTitle className="text-ocean-medium">Sustainable Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-3xl font-bold text-foreground">60%</div>
                  <p className="text-muted-foreground">Improvement in coastal resource management efficiency</p>
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <p className="text-muted-foreground">Continuous monitoring and data collection</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-ocean-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Live Dashboard Preview
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-time visualization of coastal conditions and threat assessments.
            </p>
          </div>
          
          <Card className="max-w-5xl mx-auto overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-ocean-medium to-ocean-deep text-white">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Coastal Threat Monitoring Dashboard</CardTitle>
                <Badge variant="secondary" className="bg-green-500 text-white">
                  <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">Normal</div>
                  <p className="text-sm text-muted-foreground">Current Threat Level</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-orange-600">2</div>
                  <p className="text-sm text-muted-foreground">Active Warnings</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">1,247</div>
                  <p className="text-sm text-muted-foreground">Sensors Online</p>
                </div>
              </div>
              
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="w-full h-64 bg-gradient-to-br from-ocean-light to-ocean-medium rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-xl font-semibold">Interactive Coastal Map</p>
                    <p className="text-sm opacity-90">Real-time sensor data and threat visualization</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50">
              <Button className="w-full" size="lg">
                <BarChart3 className="mr-2 h-5 w-5" />
                Access Full Dashboard
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Protect Your Coast?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Contact our team to learn how CoastalAlert can enhance your coastal monitoring and emergency preparedness capabilities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-ocean-medium" />
                  <span>info@coastalalert.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-ocean-medium" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      value={contactForm.organization}
                      onChange={(e) => setContactForm({...contactForm, organization: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-ocean-medium to-ocean-deep text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Future of Coastal Protection
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be among the first to access our AI-powered coastal threat alert system. Early adopters get exclusive features and priority support.
          </p>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              required
            />
            <Button type="submit" variant="secondary" className="whitespace-nowrap">
              Get Early Access
            </Button>
          </form>
          
          <p className="text-sm text-white/70 mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ocean-deep text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-ocean-medium rounded-lg">
                  <Waves className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">CoastalAlert</span>
              </div>
              <p className="text-white/70">
                Protecting coastal communities through AI-powered early warning systems.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>&copy; 2024 CoastalAlert. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}