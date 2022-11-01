/**
 * @class issue to create our data structure for each issue 
 */

export class Issue {

    public issueNo: number;
    public title: string;
    public description: string;
    public priorty: 'low' | 'high';
    public type: 'Feature' | 'Bug' | 'Documentation';
    public completed?: Date;


    constructor(issueNo:number, title:string, description:string, priorty:'low' | 'high',type: 'Feature' | 'Bug' | 'Documentation', completed?: Date ){
        this.issueNo = issueNo;
        this.title = title;
        this.description = description;
        this.priorty = priorty;
        this.type = type;
        this.completed = completed;


    }


}
