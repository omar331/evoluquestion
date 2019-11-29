import {rowsExample} from "./example";


export const accordionExample = {
    type: 'accordion',
    key: 'my-accordion',
    title: 'Veja com um acordeon é massa!',
    tabs: [
        {
            title: 'Primeira aba do acordeon',
            settings: {'backgroundColor': 'none'},
            rows: [
                {
                    columns:
                        [
                            {
                                width: "70%",

                                contents: [
                                    {
                                        type: 'text',
                                        content: "Texto dentro do acordeon 111"
                                    },
                                ]
                            },
                            {
                                width: "30%",

                                contents: [
                                    {
                                        type: 'text',
                                        content: "Outro texto dentro do accordion"
                                    },
                                    {
                                        type: 'image',
                                        url: 'https://www.powerlight.com.br/wp-content/uploads/2016/09/saiba-o-que-comer-antes-do-treino-de-surf.jpeg'
                                    }
                                ]
                            },
                        ]
                },

            ]
        },
        {
            title: 'Acordeon aba 2',
            settings: {'backgroundColor': 'none'},
            rows: [
                {
                    columns:
                        [
                            {
                                width: "100%",

                                contents: [
                                    {
                                        type: 'text',
                                        content: "Texto dentro do acordeon 2222"
                                    },
                                    {
                                        type: 'text',
                                        content: "Texto dentro do acordeon 2222"
                                    },
                                    {
                                        type: 'text',
                                        content: "Texto dentro do acordeon 2222"
                                    },
                                    {
                                        key: 'my-sample-search-key-3',
                                        type: 'text',
                                        content: "Texto dentro do acordeon 2222"
                                    },
                                ]
                            },
                        ]
                },

            ]
        },
    ]
}



export const rowsAccordion = [
    {
        columns:
            [
                {
                    width: "100%",
                    contents: [ accordionExample ]
                },
            ]
    },
]


export default {
    // Page being edited
    page: {
        canUndo: false,
        canRedo: false,
        stateHistoryLenght: 0,

        // TODO: identificar outras propriedades associáveis a página
        settings: {
            backgroundColor: "#eeeeee",
        },

        title: 'A política da qualidade',

        rows: rowsAccordion,
    },
}

