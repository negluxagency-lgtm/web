import { supabase } from "@/lib/supabase";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

export default async function BlogPage() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching posts:', error);
    }

    return (
        <main className="min-h-screen bg-zinc-950 text-white selection:bg-amber-500 selection:text-zinc-950 flex flex-col pt-24">
            <Navbar />

            <div className="flex-grow max-w-7xl mx-auto px-6 py-12 w-full">
                <header className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                        Blog de <span className="text-amber-500">Ingeniería</span>
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        Exploramos la intersección entre la Inteligencia Artificial, el desarrollo de software y la optimización de negocios.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts?.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group relative flex flex-col bg-zinc-900/40 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-500"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                {post.image_url ? (
                                    <Image
                                        src={post.image_url}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                                        <span className="text-zinc-600 text-xs font-bold uppercase tracking-widest">Nelux AI</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Post</span>
                                    <span className="text-zinc-600">•</span>
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                                        {new Date(post.created_at).toLocaleDateString('es-ES', { month: 'short', year: 'numeric' })}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-zinc-400 text-sm line-clamp-3 mb-6">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold text-zinc-300 group-hover:text-white transition-colors">
                                    LEER MÁS
                                    <div className="w-4 h-0.5 bg-zinc-700 group-hover:bg-amber-500 group-hover:w-8 transition-all duration-500" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {(!posts || posts.length === 0) && (
                    <div className="py-20 text-center">
                        <p className="text-zinc-500">Aún no hay artículos publicados. Vuelve pronto.</p>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
