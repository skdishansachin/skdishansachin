import type { Metadata } from "next";
import { DocumentRenderer } from "@keystatic/core/renderer";
import { reader } from "../reader";
import { notFound } from "next/navigation";

export default async function Post({ params }: { params: { slug: string } }) {
	const { slug } = params;

	const post = await reader.collections.posts.read(slug);

	if (!post) return notFound();

	// TODO: Add metadata to the post

	return (
		<div>
				<h1>{post.title}</h1>
			<div className="prose">
				<DocumentRenderer document={await post.content()} />
			</div>
		</div>
	);
}

export async function generateStaticParams() {
	const slugs = await reader.collections.posts.list();

	return slugs.map((slug) => ({
		slug,
	}));
}
