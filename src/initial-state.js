/*
     -- Design panel configs
 */
export const designPanelConfig = {
    /* Available components */
    components: [
        {
            type: 'section-title',
        }
        ,
        {
            type: 'text',
        }
        ,
        {
            type: 'image',
        }
        ,
        {
            type: 'video',
        }
        ,
        {
            type: 'highlight',
        }
        ,
        {
            type: 'accordion',
        }
        ,
        {
            type: 'embed',
        }
    ],

    /* ---- Available row templates */
    rowTemplates: [
        {
            columns:
                [
                    {
                        width: "100%",
                        contents: []
                    },
                ]
        },
        {
            columns:
                [
                    {
                        width: "60%",
                        contents: [
                        ]
                    },
                    {
                        width: "40%",
                        contents: [
                        ]
                    }
                ]
        },
        {
            columns:
                [
                    {
                        width: "50%",
                        contents: []
                    },
                    {
                        width: "50%",
                        contents: []
                    },
                ]
        },
        {
            columns:
                [
                    {
                        width: "33%",
                        contents: []
                    },
                    {
                        width: "33%",
                        contents: []
                    },
                    {
                        width: "34%",
                        contents: []
                    },
                ]
        },
        {
            columns:
                [
                    {
                        width: "25%",
                        contents: []
                    },
                    {
                        width: "25%",
                        contents: []
                    },
                    {
                        width: "25%",
                        contents: []
                    },
                    {
                        width: "25%",
                        contents: []
                    },
                ]
        },
    ]

}




export const accordionExample = {
    type: 'accordion',
    title: 'Veja com um acordeon é massa!',
    tabs: [
        {
            title: 'Acordeon aba 1',
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


export const accordionEmptyTabsExample = {
    type: 'accordion',
    title: '',
    tabs: [
        {
            title: 'Acordeon aba 1',
            settings: {'backgroundColor': 'none'},
            rows: []
        },
        {
            title: 'Acordeon aba 2',
            settings: {'backgroundColor': 'none'},
            rows: []
        },
    ]
}

export const accordionEmpty = {
    type: 'accordion',
    title: '',
    tabs: [
    ]
}


export const highlightExample = {
    type: 'highlight',
    level: 'success',
    text: ''
}


export const rowsExample = [
    {
        columns: [
            {
                width: "100%",
                contents: [
                    {
                        type: "text",
                        content: "When living in Australia Kangaroos become a part of our life for it is called the land of kangaroos. Australia has earned this name for very justified reason, for the kangaroos are found only in Australia. They are all the time competing to outnumber the human population. It is believed that the Kangaroos are anytime in the range of 25 million in the country. The kangaroos are counted through aerial surveys.\n" +
                            "\n" +
                            "It is very interesting to note that there are more than fifty varieties of Kangaroos in the country. They differ in size and colour but belong to the same family “polyphyletic species”. They are unique creatures for a couple of reasons. One reason is the female kangaroos having a pouch to carry the babies and, the babies live in the pouch at least nine months before they step on earth. They are so tiny at the time of birth and their journey from the womb to the pouch is a wonder of nature. There is no other heavy species that can jump like a rabbit. A leap of a grown kangaroo is about 25 to 30 feet."
                    }
                ]
            }
        ]
    },
    {
        columns: [
            {
                width: "100%",
                contents: [
                    {
                        type: "image",
                        title: "Imagem grande",
                        url: "http://www.dailynews.lk/sites/default/files/news/2017/11/16/z_p27-land.jpg"
                    }
                ]
            }
        ]
    },
    {
        columns:
            [
                {
                    width: "50%",

                    // os conteúdos são uma lista de componentes com
                    // suas propriedades
                    contents: [
                        {
                            key: 'my-sample-search-key',
                            type: 'image',
                            title: 'Minha imagem',
                            caption: 'Uma imagem pode ter legendas. Veja isso',
                            url: "http://www.easypaydayloansusa.com/wp-content/uploads/2017/08/business1-300x142.jpg"
                        },

                        {
                            type: 'text',
                            content: "Este é um texto mais elaborado <b>Tem negrito</b>"
                        },
                    ]
                },
                {
                    width: "50%",

                    // os conteúdos são uma lista de componentes com
                    // suas propriedades
                    contents: [
                        {
                            type: 'text',
                            content: "Olha... este é um texto. Comum. Básico. Banal."
                        },
                        {
                            key: 'my-sample-search-key-2',
                            type: 'image',
                            url: 'http://static.twentytwowords.com/wp-content/uploads/Beautiful-Women-FB-5.jpg',
                            title: 'Nova funcionalide de editor causa sensação em Sumaré',
                            caption: 'Voilà! Agora é possível colocar, opcionalmente, títulos e legendas diretamente imagens.'
                        }
                    ]
                },

            ]
    },

    {
        columns:
            [
                {
                    width: "100%",

                    contents: [
                        highlightExample,
                        {
                            type: 'text',
                            content: "Texto dentro do acordeon 111"
                        },
                    ]
                },
            ]
    },
]



export const rowsExample1 = [
    {
        columns:
            [
                {
                    width: "100%",

                    contents: [
                        accordionExample
                    ]
                },
            ]
    },
]


export const rowsExampleCompEmpty = [
    {
        columns:
            [
                {
                    width: "50%",

                    contents: [

                    ]
                },
            ]
    },
]



const legacyContent = [
    {
        columns: [
            {
                width: "100%",
                contents: [
                    {
                        type: 'text',
                        content: '<h3>Nessa atividade faremos o desenvolvimento do <strong>Escopo</strong> de seu sistema de gest&atilde;o, ou seja, vamos&nbsp;<span style="line-height: 1.6em;">determinar o <strong>foco de todo o processo da sua certifica&ccedil;&atilde;o</strong>.</span></h3>\n' +
                            '\n' +
                            '<p>&nbsp;</p>\n' +
                            '\n' +
                            '<div class="well well-lg">\n' +
                            '<h4 class="blue">Atividade</h4>\n' +
                            '\n' +
                            '<div><span style="font-size:14px;">1. Abrir o <strong>Painel de Controle do Sistema de Gest&atilde;o </strong>na aba &rArr;<em> An&aacute;lise do Neg&oacute;cio</em>, salvo na pasta <em>SGQ\\Documentos de Gest&atilde;o. A identidade organizacional</em>&nbsp;de sua organiza&ccedil;&atilde;o j&aacute; estar&aacute; preenchido de acordo com as atividades anteriores<strong>;</strong></span></div>\n' +
                            '\n' +
                            '<div><span style="font-size:14px;"><span style="font-size:14px;">2. Definir e preencher o &ldquo;<strong>Escopo do Sistema de Gest&atilde;o</strong>&rdquo;;</span></span></div>\n' +
                            '\n' +
                            '<div><span style="font-size:14px;"><span style="font-size:14px;"><span style="font-size:14px;">3. Ap&oacute;s defini&ccedil;&atilde;o do escopo, encaminhar o arquivo por meio do&nbsp;<strong>Upload Obrigat&oacute;rio</strong> para an&aacute;lise dos nossos especialistas;</span></span></span></div>\n' +
                            '\n' +
                            '<div><span style="font-size:14px;"><span style="font-size:14px;"><span style="font-size:14px;"><span style="font-size:14px;">4. Ap&oacute;s a aprova&ccedil;&atilde;o de nossos especialistas, atualizar a vers&atilde;o mais recente do documento na pasta <em>SGQ\\ Documentos de Gest&atilde;o.</em></span></span></span></span></div>\n' +
                            '</div>\n' +
                            '\n' +
                            '<p>&nbsp;</p>\n' +
                            '\n' +
                            '<div class="accordion-style1 panel-group" id="accordion">\n' +
                            '<div class="panel panel-default">\n' +
                            '<div class="panel-heading">\n' +
                            '<h4 class="panel-title"><a aria-expanded="false" class="accordion-toggle collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapse1">&nbsp; Exemplos de Escopo </a></h4>\n' +
                            '</div>\n' +
                            '\n' +
                            '<div aria-expanded="false" class="panel-collapse collapse" id="collapse1" style="height: 0px;">\n' +
                            '<div class="panel-body">\n' +
                            '<ul>\n' +
                            '\t<li><span style="font-size:14px;">Presta&ccedil;&atilde;o de servi&ccedil;os eletro mec&acirc;nicos, como: automa&ccedil;&atilde;o, controle e instrumenta&ccedil;&atilde;o de tubula&ccedil;&otilde;es e equipamentos voltados para ind&uacute;stria de &oacute;leo e g&aacute;s. Comissionamento de equipamentos industriais. Realiza&ccedil;&atilde;o de ajuste e calibra&ccedil;&atilde;o de equipamentos de medi&ccedil;&atilde;o de press&atilde;o (de 0 a 1000 bares) e temperatura (-50 a 1200 &deg;C) e v&aacute;lvulas de seguran&ccedil;a.</span></li>\n' +
                            '\t<li><span style="font-size:14px;">Desenvolvimento e aplica&ccedil;&atilde;o de treinamentos programados e in company para empresas do segemtno de constru&ccedil;&atilde;o civil, manufatureira e treinamentos para instrumenta&ccedil;&atilde;o e eletr&ocirc;nica.</span></li>\n' +
                            '\t<li><span style="font-size:14px;">Projeto, Desenvolvimento, Integra&ccedil;&atilde;o, Manuten&ccedil;&atilde;o, Instala&ccedil;&atilde;o e Implanta&ccedil;&atilde;o de Software; F&aacute;brica de Software; Servi&ccedil;os de Consultoria e Assist&ecirc;ncia T&eacute;cnica em Tecnologia da Informa&ccedil;&atilde;o sob especifica&ccedil;&atilde;o do cliente.</span></li>\n' +
                            '\t<li><span style="font-size:14px;">Aquisi&ccedil;&atilde;o, Armazenagem, Comercializa&ccedil;&atilde;o e Distribui&ccedil;&atilde;o de produtos para as industrias de borracha, pl&aacute;sticos e tintas.</span></li>\n' +
                            '\t<li><span style="font-size:14px;">Consultoria, inspe&ccedil;&atilde;o e ensaios em engenharia de integridade estrutural.</span></li>\n' +
                            '\t<li><span style="font-size:14px;">Transporte Rodovi&aacute;rio de Produtos Qu&iacute;micos Perigosos e N&atilde;o Perigosos - Granel L&iacute;quido, Gases e Carga Embalada.</span></li>\n' +
                            '</ul>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '\n' +
                            '<div class="panel panel-default">\n' +
                            '<div class="panel-heading">\n' +
                            '<h4 class="panel-title"><a aria-expanded="false" class="accordion-toggle collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapse2">&nbsp; Criando o Escopo</a></h4>\n' +
                            '</div>\n' +
                            '\n' +
                            '<div aria-expanded="false" class="panel-collapse collapse" id="collapse2">\n' +
                            '<div class="panel-body"><span style="font-size:14px;">Na defini&ccedil;&atilde;o do escopo &eacute; importante seguir as instru&ccedil;&otilde;es abaixo: </span>\n' +
                            '\n' +
                            '<ul>\n' +
                            '\t<li><span style="font-size:14px;"><span style="font-size:14px;">O escopo deve identificar a classe do produto ou servi&ccedil;o a ser certificado: <em>Presta&ccedil;&atilde;o de servi&ccedil;os</em>... <em>Produ&ccedil;&atilde;o de equipamentos</em>...</span></span></li>\n' +
                            '\t<li><span style="font-size:14px;"><span style="font-size:14px;">Evitar palavras como: provedor de solu&ccedil;&otilde;es</span></span></li>\n' +
                            '\t<li><span style="font-size:14px;"><span style="font-size:14px;">N&atilde;o se deve utilizar o termo p&oacute;s venda, pois n&atilde;o &eacute; espec&iacute;fico.</span></span></li>\n' +
                            '\t<li><span style="font-size:14px;"><span style="font-size:14px;">N&atilde;o incluir palavras qualitativas como: a&ccedil;os de alta qualidade</span></span></li>\n' +
                            '\t<li><span style="font-size:14px;"><span style="font-size:14px;">Cuidado com marcas registradas, tem que ter certeza do registro em seu dom&iacute;nio! Regra geral &ndash; n&atilde;o citar marcas!&nbsp;</span></span></li>\n' +
                            '</ul>\n' +
                            '<span style="font-size:14px;"> </span></div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '\n' +
                            '<div class="panel panel-default">\n' +
                            '<div class="panel-heading">\n' +
                            '<h4 class="panel-title"><a aria-expanded="false" class="accordion-toggle collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapse3">&nbsp; Exclus&otilde;es no Escopo: Como proceder - VIDEO</a></h4>\n' +
                            '</div>\n' +
                            '\n' +
                            '<div aria-expanded="false" class="panel-collapse collapse" id="collapse3">\n' +
                            '<div class="panel-body">\n' +
                            '<p><span style="font-size:14px;"><iframe allowfullscreen="" frameborder="0" height="400" scrolling="no" src="https://www.youtube.com/embed/vRQbx9E5h04" width="700"></iframe></span></p>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '\n' +
                            '<div class="panel panel-default">\n' +
                            '<div class="panel-heading">\n' +
                            '<h4 class="panel-title"><a aria-expanded="false" class="accordion-toggle collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapse4">&nbsp; Dicas Pr&aacute;ticas de Defini&ccedil;&atilde;o de Escopo - VIDEO</a></h4>\n' +
                            '</div>\n' +
                            '\n' +
                            '<div aria-expanded="false" class="panel-collapse collapse" id="collapse4">\n' +
                            '<div class="panel-body">\n' +
                            '<p><iframe frameborder="0" height="400" scrolling="no" src="https://player.vimeo.com/video/195674635?byline=0&amp;portrait=0" width="700"></iframe></p>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '\n' +
                            '<div class="panel panel-default">\n' +
                            '<div class="panel-heading">\n' +
                            '<h4 class="panel-title"><a aria-expanded="false" class="accordion-toggle collapsed" data-parent="#accordion" data-toggle="collapse" href="#collapse5">&nbsp; Rela&ccedil;&atilde;o com a Norma - VIDEO</a></h4>\n' +
                            '</div>\n' +
                            '\n' +
                            '<div aria-expanded="false" class="panel-collapse collapse" id="collapse5">\n' +
                            '<div class="panel-body">\n' +
                            '<p><span style="font-size:14px;">ABNT NBR ISO 9001:2015</span></p>\n' +
                            '\n' +
                            '<p><span style="font-size:14px;">Requisito 4.3 - Determinando o escopo do sistema de gest&atilde;o</span></p>\n' +
                            '\n' +
                            '<p><span style="font-size:14px;"><iframe frameborder="0" height="400" scrolling="no" src="https://www.youtube.com/embed/PxemL3b7LrY" width="700"></iframe></span></p>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '\n' +
                            '<p>&nbsp;</p>\n' +
                            '</div>'
                    },
                ]
            }
        ]
    },
]





export default {
    // Page being edited
    page: {
        canUndo: false,
        canRedo: false,

        // TODO: identificar outras propriedades associáveis a página
        settings: {
            backgroundColor: "#eeeeee",
        },

        title: '',

        // ordered list of components included in the page

        // rows: emptyRows,
        // rows: rowsExample,
        // rows: rowsExample1,
        // rows: legacyContent,
        rows: [],
        localId: null
    }
}

