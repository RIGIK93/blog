import { isHttpError } from '@sveltejs/kit';
import type { BlogPost } from '$lib';

export async function load({ params }): Promise<BlogPost> {
    let content: any = {}
    let title: string = ""
    let date: string = ""
    // try {
        const post = await import(`../../posts/${params.slug}.md`);
        title = post.metadata.title;
        date = post.metadata.date
        content = post.default;
    // } catch (e) {
    //     title = "404"
    //     content = "The article you're looking for has not been found"
    //     console.error(e)
    // }

	return {
		content,
		title,
		date
	};
}