# DIRECTIVA 10: SEO PROGRAMÁTICO - NELUX WEB

## 🎯 MISIÓN
Transformar nelux-web en una fortaleza de SEO programático que domine las SERPs mediante arquitectura técnica impecable, esquemas semánticos y optimización de Core Web Vitals.

## 📋 STACK TECNOLÓGICO
- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Base de Datos**: Supabase
- **Estilos**: Tailwind CSS
- **Dominio**: https://nelux.es

## 🏛️ PRINCIPIOS DE IMPLEMENTACIÓN

### 1. Arquitectura Técnica (Aleyda Solís Style)
- **Cero errores de indexación**
- **Sitemaps dinámicos perfectos** conectados a Supabase
- **Canonical tags autogeneradas** para cada página
- **Robots.txt optimizado** para crawlers

### 2. Semántica y Entidades (Rand Fishkin Style)
- **JSON-LD (Schema.org)** agresivo en todas las páginas
- **Organization Schema** para Nelux AI
- **Article/TechArticle Schema** para cada post
- **BreadcrumbList** para jerarquía de navegación

### 3. CTR y Social (Neil Patel Style)
- **Meta descripciones persuasivas** generadas dinámicamente
- **OpenGraph tags dinámicas** con imágenes de DALL-E
- **Twitter Cards** optimizadas (summary_large_image)
- **Títulos optimizados** siguiendo el template pattern

## 🛠️ COMPONENTES A IMPLEMENTAR

### 1. Global Metadata (`app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nelux.es'),
  title: {
    template: '%s | Nelux AI',
    default: 'Nelux AI - Transformando Barberías con IA'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: 'TU_CODIGO_AQUI' // Pendiente
  }
}
```

### 2. Dynamic SEO (`app/blog/[slug]/page.tsx`)
- **generateMetadata**: Fetch del post desde Supabase
- **Canonical URL**: https://nelux.es/blog/[slug]
- **OpenGraph**: Mapeo de post.image_url a og:image
- **Twitter Card**: summary_large_image
- **JSON-LD**: Article + BreadcrumbList schemas

### 3. Sitemap Dinámico (`app/sitemap.ts`)
- Conexión a Supabase (tabla posts)
- Páginas estáticas con prioridad 1.0
- Posts dinámicos con prioridad 0.8
- changeFrequency: 'weekly' para posts

### 4. Robots Control (`app/robots.ts`)
- Allow: /
- Disallow: /admin (si existe)
- Sitemap: https://nelux.es/sitemap.xml

### 5. Image Optimization (`next.config.ts`)
Dominios permitidos:
- oaidalleapiprodscus.blob.core.windows.net (DALL-E)
- *.supabase.co

## 🚨 RESTRICCIONES CRÍTICAS

### SEO
1. **NUNCA** usar índices duplicados en canonical URLs
2. **SIEMPRE** validar JSON-LD con Google Schema Validator
3. **SIEMPRE** usar fechas en formato ISO 8601 (datePublished)
4. **NUNCA** exponer URLs sin canonical tags

### Rendimiento
1. **SIEMPRE** usar next/image para optimización automática (WebP/AVIF)
2. **SIEMPRE** tener fallback images en /public
3. **NUNCA** cargar imágenes sin alt descriptivo

### TypeScript
1. **SIEMPRE** tipado estricto para metadata
2. **SIEMPRE** manejar casos null/undefined en posts de Supabase
3. **SIEMPRE** validar existencia de imagen antes de usar

## 📊 ESTRUCTURA DE DATOS ESPERADA (Supabase)

### Tabla: posts
```typescript
interface Post {
  id: string
  slug: string
  title: string
  description?: string
  content: string
  image_url?: string
  published_at: string // ISO 8601
  updated_at?: string
  author?: string
  category?: string
}
```

## 🔍 BITÁCORA DE ANOMALÍAS

### [2026-01-26] - PowerShell Execution Policy
**Anomalía:** `npm run build` falló con error "running scripts is disabled on this system"  
**Causa:** Política de ejecución de PowerShell restrictiva en Windows  
**Solución:** Usar `powershell -ExecutionPolicy Bypass -Command "..."` para comandos npm  
**Aprendizaje:** En entornos Windows corporativos, siempre verificar execution policy antes de scripts

### [2026-01-26] - Browser Tools Unavailable
**Anomalía:** Browser subagent falló con "$HOME environment variable is not set"  
**Causa:** Playwright no instalado correctamente en el entorno  
**Solución:** Verificación manual requerida para sitemap/robots  
**Aprendizaje:** Tener plan B para verificación (curl, manual testing) cuando browser tools fallen

### [2026-01-26] - Dev Server Lock
**Anomalía:** "Unable to acquire lock at .next/dev/lock"  
**Causa:** Servidor de desarrollo ya corriendo en proceso separado  
**Solución:** Usar puerto alternativo (3001) o terminar proceso existente  
**Aprendizaje:** Verificar procesos activos antes de iniciar nuevo servidor

### [2026-01-26] - Netlify Build Failure (Supabase Credentials)
**Anomalía:** Build falló con "Supabase environment variables are missing" en sitemap.ts  
**Causa:** sitemap.ts importaba `supabase` client que lanza error si las env vars no existen  
**Solución:** Implementar fallback graceful - crear cliente solo si credenciales existen, retornar páginas estáticas si no  
**Aprendizaje:** En rutas que se ejecutan en build-time (sitemap, robots), SIEMPRE validar env vars antes de usarlas. Builds deben ser resilientes a credenciales faltantes.


## 🎯 OUTPUTS ESPERADOS

### Artifacts (C:\Users\Usuario\.gemini\antigravity\brain\*)
- `implementation_plan.md` - Plan técnico detallado
- `walkthrough.md` - Documentación post-implementación
- `seo_validation.json` - Resultados de validación (si aplica)

### Código Fuente
- `app/layout.tsx` - Metadata global
- `app/blog/[slug]/page.tsx` - SEO dinámico + JSON-LD
- `app/sitemap.ts` - Sitemap programático
- `app/robots.ts` - Control de crawlers
- `next.config.ts` - Optimización de imágenes

## ✅ CRITERIOS DE ÉXITO
1. ✅ Metadata base configurada con metadataBase
2. ✅ JSON-LD validado en Google Schema Validator
3. ✅ Sitemap accesible en /sitemap.xml
4. ✅ Robots.txt accesible en /robots.txt
5. ✅ Imágenes DALL-E optimizadas con next/image
6. ✅ Core Web Vitals > 90 (verificar con Lighthouse)

---
**Protocolo:** Al detectar errores, actualizar sección "Bitácora de Anomalías" inmediatamente.
