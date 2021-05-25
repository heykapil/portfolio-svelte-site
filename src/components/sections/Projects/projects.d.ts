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
	image: string;
	imageAlt: string;
	links?: Link[];
}
