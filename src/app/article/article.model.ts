export class Article{
	title:string;
	votes:number;
	link:string

	constructor(title:string,link: string,votes?: number)
	{
		this.title=title;
		this.votes=votes || 0;
		this.link=link
	}
}