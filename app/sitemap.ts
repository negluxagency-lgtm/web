import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nelux.es';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Páginas estáticas con máxima prioridad
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/aviso-legal`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/politica-de-privacidad`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/terminos-y-condiciones`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];

    // Posts dinámicos desde Supabase
    const { data: posts, error } = await supabase
        .from('posts')
        .select('slug, created_at, updated_at')
        .eq('is_published', true)
        .order('created_at', { ascending: false })
        .limit(50000); // Límite estándar de sitemaps

    if (error) {
        console.error('Error fetching posts for sitemap:', error);
        return staticPages;
    }

    const blogPages: MetadataRoute.Sitemap = posts?.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at || post.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    })) || [];

    return [...staticPages, ...blogPages];
}
