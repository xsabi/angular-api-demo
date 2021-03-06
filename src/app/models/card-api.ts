export interface CardApi {
    "success": boolean,
    "deck_id": string,
    "shuffled": boolean,
    "remaining": number
}

export interface Deck {
    "success": boolean,
    "cards": Card[],
    "deck_id": string,
    "remaining": number
}

export interface Card {
    "image": string,
    "value": string,
    "suit": string,
    "code": string
}
