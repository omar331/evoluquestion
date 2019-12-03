
/* Question types */
export let QUESTION_TYPE_TEXT = 0
export let QUESTION_TYPE_NUMBER = 1
export let QUESTION_TYPE_SINGLE_CHOICE = 2
export let QUESTION_TYPE_MULTIPLE_CHOICES = 3



export let QUESTION_TYPES_ORDERED = [
    QUESTION_TYPE_TEXT,
    QUESTION_TYPE_NUMBER,
    QUESTION_TYPE_SINGLE_CHOICE,
    QUESTION_TYPE_MULTIPLE_CHOICES
]



export let QUESTION_TYPE_INFOS = {}

/* Details about question types */
QUESTION_TYPE_INFOS[ QUESTION_TYPE_TEXT ] = {
    answer_type: 'texto',
    description: 'a resposta esperada é um texto simples',
    allow_choices: false,
}
QUESTION_TYPE_INFOS[ QUESTION_TYPE_NUMBER ] = {
    answer_type: 'número inteiro',
    description: 'é um número inteiro',
    allow_choices: false,
}
QUESTION_TYPE_INFOS[ QUESTION_TYPE_SINGLE_CHOICE ] = {
    answer_type: 'escolha simples',
    description: 'a resposta esperada é uma escolha simples',
    allow_choices: true,
}
QUESTION_TYPE_INFOS[ QUESTION_TYPE_MULTIPLE_CHOICES ] = {
    answer_type: 'múltiplas escolhas',
    description: 'a resposta esperada são múltiplas escolhas',
    allow_choices: true,
}

