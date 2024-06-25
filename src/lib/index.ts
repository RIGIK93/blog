// place files you want to import through the `$lib` alias in this folder.

export interface PostMeta {
    title: string,
    date: string
}

export interface BlogPost extends PostMeta {
    content: any,
}

export interface PostHeader {
    meta: PostMeta
    path: string
}

export async function fetchMarkdownPosts(): Promise<PostHeader[]> {
	const allPostFiles = import.meta.glob('/src/posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata }: any = await resolver();
			const postPath = path.slice(10, -3);
			
			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};