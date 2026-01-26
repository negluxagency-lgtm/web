# 09_BLOG_SYSTEM.md

**Estado:** ACTIVO
**Fecha de Creación:** 2026-01-26
**Autor:** Antigravity Agent (Nivel Senior)

## 1. CONTEXTO Y OBJETIVO
Implementar un sistema de blog dinámico conectado a la tabla `posts` de Supabase. El objetivo es mejorar el SEO y ofrecer contenido de valor. Debe integrarse perfectamente con el diseño "Dark Premium" de Next.js y usar ISR para actualizaciones eficientes.

## 2. RESTRICCIONES (CRÍTICO)
*   **ISR Obligatorio:** Todas las páginas del blog deben usar `revalidate = 3600` (1 hora).
*   **Diseño Premium:** Las tarjetas y la página del artículo deben seguir la estética oscura con bordes sutiles (zinc-900, bordes zinc-800, textos zinc-100/400).
*   **Cero Errores de Hidratación:** Asegurar que el contenido Markdown no cause diferencias entre servidor y cliente.
*   **Rutas Dinámicas:** Usar `[slug]` para las URLs de los artículos.

## 3. ESPECIFICACIONES TÉCNICAS
*   **Input:** Datos de la tabla `posts` en Supabase (id, title, slug, content, excerpt, image_url, created_at).
*   **Output:**
    *   `/blog`: Grid de tarjetas.
    *   `/blog/[slug]`: Artículo completo renderizado con `react-markdown`.
*   **Herramientas:** Next.js 15 (App Router), Tailwind CSS, Supabase Client, `react-markdown`.

## 4. PROCEDIMIENTO (LEVITATION)
1.  **Página Índice (`app/blog/page.tsx`):**
    *   Fetch a Supabase: `supabase.from('posts').select('*').order('created_at', { ascending: false })`.
    *   Mapear resultados a componentes de tarjeta.
2.  **Página de Artículo (`app/blog/[slug]/page.tsx`):**
    *   `generateStaticParams` para pre-renderizar los slugs existentes.
    *   Fetch a Supabase filtrando por slug.
    *   Renderizar contenido usando `<ReactMarkdown>`.
    *   Estilar bloques de código y encabezados.
3.  **Navbar (`components/landing/Navbar.tsx`):**
    *   Añadir enlace al blog.

## 5. BITÁCORA DE ANOMALÍAS
| Fecha | Error | Solución/Aprendizaje |
|-------|-------|----------------------|
| 2026-01-26 | Runtime Error: supabaseUrl is required | Asegurar que .env.local esté presente y contenga las llaves antes de instanciar el cliente. |
