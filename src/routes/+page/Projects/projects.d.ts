export type LinkType = 'external' | 'info' | 'github';
export interface Technology {
	name: string;
	details?: string;
}
export interface Link {
	type: LinkType;
	href: string;
}

export interface Project {
	header: string;
	summary: string;
	technologies: Technology[];
	imageSite: string;
	imagePath: string;
	imageAlt: string;
	imageWidth: number;
	imageHeight: number;
	links?: Link[];
}
