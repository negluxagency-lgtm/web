import { supabase } from "@/lib/supabase";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";
import Link from "next/link";

export const revalidate = 3600;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nelux.es';
const DEFAULT_IMAGE = '/default-blog.jpg';

// Tipo para los posts de Supabase
interface Post {
    id: string;
    slug: string;
    title: string;
    content: string;
    excerpt?: string;
    image_url?: string;
    created_at: string;
    updated_at?: string;
    is_published: boolean;
}

export async function generateStaticParams() {
    const { data: posts } = await supabase
        .from('posts')
        .select('slug')
        .eq('is_published', true);

    return posts?.map((post) => ({
        slug: post.slug,
    })) || [];
}

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

// Función para generar metadata dinámica (Aleyda Style)
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;

    const { data: post } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

    if (!post) {
        return {
            title: 'Post no encontrado',
            description: 'El artículo que buscas no existe o ha sido eliminado.',
        };
    }

    const canonicalUrl = `${SITE_URL}/blog/${slug}`;
    const imageUrl = post.image_url || `${SITE_URL}${DEFAULT_IMAGE}`;
    const description = post.excerpt || post.content?.substring(0, 160).replace(/[#*_`]/g, '') + '...';

    return {
        title: post.title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: post.title,
            description,
            url: canonicalUrl,
            type: 'article',
            publishedTime: post.created_at,
            modifiedTime: post.updated_at || post.created_at,
            authors: ['Nelux AI'],
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description,
            images: [imageUrl],
        },
    };
}

// Componente JSON-LD para Schema.org (Rand Style)
function JsonLdSchema({ post, slug }: { post: Post; slug: string }) {
    const canonicalUrl = `${SITE_URL}/blog/${slug}`;
    const imageUrl = post.image_url || `${SITE_URL}${DEFAULT_IMAGE}`;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": post.title,
        "image": imageUrl,
        "datePublished": post.created_at,
        "dateModified": post.updated_at || post.created_at,
        "author": {
            "@type": "Organization",
            "name": "Nelux AI",
            "url": SITE_URL
        },
        "publisher": {
            "@type": "Organization",
            "name": "Nelux AI",
            "url": SITE_URL,
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_URL}/logo.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": SITE_URL
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${SITE_URL}/blog`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": canonicalUrl
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;

    const { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

    if (error || !post) {
        return (
            <main className="min-h-screen bg-zinc-950 text-white flex flex-col pt-24">
                <Navbar />
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Post no encontrado</h1>
                        <p className="text-zinc-400">El artículo que buscas no existe o ha sido eliminado.</p>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    const imageUrl = post.image_url || DEFAULT_IMAGE;

    return (
        <>
            <JsonLdSchema post={post} slug={slug} />
            <main className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500 selection:text-zinc-950 flex flex-col pt-24">
                <Navbar />

                <article className="flex-grow max-w-4xl mx-auto px-6 py-12 w-full">
                    <header className="mb-12">
                        {/* Breadcrumb visual */}
                        <nav aria-label="Breadcrumb" className="mb-6">
                            <ol className="flex items-center gap-2 text-sm text-zinc-500">
                                <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
                                <li>/</li>
                                <li><Link href="/blog" className="hover:text-amber-500 transition-colors">Blog</Link></li>
                                <li>/</li>
                                <li className="text-zinc-400 truncate max-w-[200px]">{post.title}</li>
                            </ol>
                        </nav>

                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-500 border border-amber-500/30 rounded-full">
                                Blog
                            </span>
                            <time
                                dateTime={post.created_at}
                                className="text-zinc-500 text-xs font-medium uppercase tracking-[0.2em]"
                            >
                                {new Date(post.created_at).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </time>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-tight">
                            {post.title}
                        </h1>

                        {imageUrl && (
                            <div className="aspect-video relative rounded-3xl overflow-hidden mb-12 border border-zinc-800/50">
                                <Image
                                    src={imageUrl}
                                    alt={post.title}
                                    fill
                                    priority
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 blend-multiply" />
                            </div>
                        )}
                    </header>

                    <section className="prose prose-invert prose-zinc max-w-none 
          prose-headings:font-bold prose-headings:tracking-tight
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-zinc-400 prose-p:leading-relaxed prose-p:text-lg
          prose-strong:text-zinc-100
          prose-code:text-amber-500 prose-code:bg-zinc-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
          prose-a:text-amber-500 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-amber-500 prose-blockquote:bg-zinc-900/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-xl
          prose-img:rounded-2xl prose-img:border prose-img:border-zinc-800
        ">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </section>

                    {/* Sección "Leer más" para reducir Bounce Rate (Patel Style) */}
                    <aside className="mt-16 p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                        <h2 className="text-xl font-bold mb-4">¿Te ha gustado este artículo?</h2>
                        <p className="text-zinc-400 mb-6">Descubre más contenido sobre tecnología, desarrollo y transformación digital en nuestro blog.</p>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-semibold rounded-xl hover:bg-amber-400 transition-colors"
                        >
                            Explorar más artículos
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </aside>

                    <footer className="mt-20 pt-12 border-t border-zinc-900 flex items-center justify-between">
                        <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">Escrito por</span>
                            <span className="text-xl font-bold">Nelux AI <span className="text-amber-500">Nexus</span></span>
                        </div>
                    </footer>
                </article>

                <Footer />
            </main>
        </>
    );
}

