import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { formatDate } from "@/utils/formatDate";

export async function GET(context) {
    const posts = await getCollection("posts");
    const sortedPosts = posts.sort(
        (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate),
    );
    return rss({
        title: "AshTheDev Technical Blog",
        description:
            "Learning, building reference resources, and shareing knowledge.",
        site: context.site,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            // Compute RSS link from post `id`
            // This example assumes all posts are rendered as `/blog/[id]` routes
            link: `/posts/${post.id}/`,
        })),
    });
}
