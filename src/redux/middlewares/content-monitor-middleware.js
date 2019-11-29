/**
 * @param params
 * @returns {function(*): function(*=): *}
 */

export const contentMonitor = (params) => {

    const {onChange} = params


    return store => next => action => {
        let result = next(action)

        /* -- Ações que caracterizam mudança no conteúdo */
        switch (action.type) {
            case 'PAGE_INSERT_COMPONENT':
            case 'PAGE_UPDATE_CONTENT':
            case 'PAGE_DELETE_CONTENT':
            case 'PAGE_CLONE_CONTENT':
            case 'PAGE_CLONE_ROW':
            case 'PAGE_DELETE_ROW':
                if (onChange) onChange(store.getState())
            default:
                break


                return result
        }
    }
}