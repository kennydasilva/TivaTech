import type { TechCategory } from './content'

// Logótipos a cores em src/assets/tech, pelo nome do ficheiro. O M-Pesa e
// o e-Mola usam o ícone oficial das aplicações (PNG).
const logos = import.meta.glob<string>('./assets/tech/*.{svg,png}', { eager: true, import: 'default', query: '?url' })
const logo = (file: string) => logos[`./assets/tech/${file}.svg`] ?? logos[`./assets/tech/${file}.png`]

export type Tech = { name: string; category: TechCategory; logo: string }

// Ordenadas por categoria, que é a ordem em que aparecem no carrossel.
export const TECH: Tech[] = [
  { name: 'Java', category: 'dev', logo: logo('java') },
  { name: 'Spring Boot', category: 'dev', logo: logo('spring') },
  { name: 'TypeScript', category: 'dev', logo: logo('typescript') },
  { name: 'React', category: 'dev', logo: logo('react') },
  { name: 'Next.js', category: 'dev', logo: logo('nextjs') },
  { name: 'Node.js', category: 'dev', logo: logo('nodejs') },
  { name: 'Python', category: 'dev', logo: logo('python') },
  { name: 'Laravel', category: 'dev', logo: logo('laravel') },
  { name: 'Flutter', category: 'mobile', logo: logo('flutter') },
  { name: 'Kotlin', category: 'mobile', logo: logo('kotlin') },
  { name: 'Swift', category: 'mobile', logo: logo('swift') },
  { name: 'Android', category: 'mobile', logo: logo('android') },
  { name: 'PostgreSQL', category: 'data', logo: logo('postgresql') },
  { name: 'MySQL', category: 'data', logo: logo('mysql') },
  { name: 'SQL Server', category: 'data', logo: logo('sqlserver') },
  { name: 'MongoDB', category: 'data', logo: logo('mongodb') },
  { name: 'Redis', category: 'data', logo: logo('redis') },
  { name: 'Firebase', category: 'data', logo: logo('firebase') },
  { name: 'Supabase', category: 'data', logo: logo('supabase') },
  { name: 'AWS', category: 'cloud', logo: logo('aws') },
  { name: 'Google Cloud', category: 'cloud', logo: logo('googlecloud') },
  { name: 'Docker', category: 'cloud', logo: logo('docker') },
  { name: 'Kubernetes', category: 'cloud', logo: logo('kubernetes') },
  { name: 'GitHub', category: 'cloud', logo: logo('github') },
  { name: 'M-Pesa', category: 'apis', logo: logo('mpesa') },
  { name: 'e-Mola', category: 'apis', logo: logo('emola') },
  { name: 'Google Maps', category: 'apis', logo: logo('googlemaps') },
  { name: 'Stripe', category: 'apis', logo: logo('stripe') },
  { name: 'PayPal', category: 'apis', logo: logo('paypal') },
  { name: 'WhatsApp Business', category: 'apis', logo: logo('whatsapp') },
  { name: 'Twilio', category: 'apis', logo: logo('twilio') },
  { name: 'OpenAPI', category: 'apis', logo: logo('openapi') },
  { name: 'Swagger', category: 'apis', logo: logo('swagger') },
  { name: 'GraphQL', category: 'apis', logo: logo('graphql') },
  { name: 'RabbitMQ', category: 'apis', logo: logo('rabbitmq') },
  { name: 'Apache Kafka', category: 'apis', logo: logo('kafka') },
  { name: 'n8n', category: 'automation', logo: logo('n8n') },
  { name: 'Zapier', category: 'automation', logo: logo('zapier') },
  { name: 'Make', category: 'automation', logo: logo('make') },
  { name: 'Apache Airflow', category: 'automation', logo: logo('airflow') },
  { name: 'Selenium', category: 'automation', logo: logo('selenium') },
  { name: 'OpenAI', category: 'ai', logo: logo('openai') },
  { name: 'OpenCV', category: 'ai', logo: logo('opencv') },
  { name: 'TensorFlow', category: 'ai', logo: logo('tensorflow') },
  { name: 'PyTorch', category: 'ai', logo: logo('pytorch') },
  { name: 'scikit-learn', category: 'ai', logo: logo('scikitlearn') },
  { name: 'Hugging Face', category: 'ai', logo: logo('huggingface') },
  { name: 'LangChain', category: 'ai', logo: logo('langchain') },
  { name: 'Postman', category: 'tools', logo: logo('postman') },
  { name: 'Figma', category: 'tools', logo: logo('figma') },
]
