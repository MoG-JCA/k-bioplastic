import Parser from 'rss-parser';
import { Section } from '@/components/ui/Section';
import Link from 'next/link';

type NewsItem = {
    title: string;
    link: string;
    pubDate: string;
    contentSnippet?: string;
    source: string;
};

async function getNews(): Promise<NewsItem[]> {
    const parser = new Parser();
    const FEED_URL = 'https://earth911.com/feed'; // Example feed

    try {
        const feed = await parser.parseURL(FEED_URL);
        return feed.items.slice(0, 3).map(item => ({
            title: item.title || 'No Title',
            link: item.link || '#',
            pubDate: item.pubDate || '',
            contentSnippet: item.contentSnippet,
            source: 'Earth911'
        }));
    } catch (error) {
        console.error('Failed to fetch news:', error);
        return [];
    }
}

export async function NewsSection() {
    const news = await getNews();

    if (news.length === 0) {
        return null;
    }

    return (
        <Section background="muted">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="text-3xl font-bold mb-4">Eco News</h2>
                    <p className="text-[var(--muted-foreground)]">
                        지속 가능한 미래를 위한 최신 환경 뉴스를 전해드립니다.
                    </p>
                </div>
                <Link href="https://earth911.com" target="_blank" className="text-sm font-medium text-[var(--primary)] hover:underline">
                    더 많은 뉴스 보기 &rarr;
                </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {news.map((item, idx) => (
                    <Link key={idx} href={item.link} target="_blank" className="group block h-full">
                        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 h-full border border-[var(--border)] flex flex-col">
                            <div className="flex items-center justify-between mb-4 text-xs text-[var(--muted-foreground)]">
                                <span className="bg-green-50 text-green-700 px-2 py-1 rounded-md font-medium">{item.source}</span>
                                <span>{new Date(item.pubDate).toLocaleDateString()}</span>
                            </div>
                            <h3 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-[var(--muted-foreground)] line-clamp-3 mb-4 flex-grow">
                                {item.contentSnippet}
                            </p>
                            <div className="text-sm font-medium text-gray-400 group-hover:text-[var(--primary)] flex items-center gap-1 mt-auto">
                                Read more
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Section>
    );
}
