export class Flashcard {
    cardID: number = 0;
    category: string = '';
    dayCreated: Date = new Date;
    prompt: string = '';
    answer: string = '';
    show: boolean = false;
}
