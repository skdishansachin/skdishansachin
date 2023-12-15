export const metadata = {
	title: "Dishan Sachin",
	description: "Softwear Engineer, who loves to build things for the web",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
