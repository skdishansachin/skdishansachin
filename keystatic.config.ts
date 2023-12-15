import { config, collection, fields } from "@keystatic/core";

export default config({
	storage: {
		kind: "local",
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "content/posts/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({
					name: {
						label: "Title",
						description: "The title of the post",
					},
				}),
				coverImage: fields.image({
					label: "Cover Image",
					description: "The cover image of the post",
					directory: "public/images/avatars",
					publicPath: "/images/avatars/",
					validation: {
						isRequired: false,
					},
				}),
				content: fields.document({
					label: "Content",
					description: "The content of the post",
					formatting: true,
					dividers: true,
					links: true,
					images: true,
				}),
				createdAt: fields.date({
					label: "Created At",
					description: "The date this post was created",
					validation: {
						isRequired: true,
					},
				}),
				updatedAt: fields.date({
					label: "Updated At",
					description: "The date this post was last updated",
					validation: {
						isRequired: false,
					},
				}),
				draft: fields.checkbox({
					label: "Draft",
					description:
						"Set this post as draft to prevent it from being published",
					defaultValue: true,
				}),
			},
		}),
		authors: collection({
			label: "Authors",
			slugField: "name",
			format: { data: "json" },
			path: "content/authors/*",
			schema: {
				name: fields.slug({
					name: {
						label: "Name",
						description: "The name of the author",
					},
				}),
				createdAt: fields.date({
					label: "Created At",
					description: "The date this post was created",
					validation: {
						isRequired: true,
					},
				}),
				updatedAt: fields.date({
					label: "Updated At",
					description: "The date this post was last updated",
					validation: {
						isRequired: false,
					},
				}),
			},
		}),
	},
});
