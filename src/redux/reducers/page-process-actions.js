import * as pageService from "../../services/page-service";

export default (state, action) => {
    let newState

    switch(action.type) {
        case 'PAGE_UPDATE':
            newState =  pageService.updatePage( state, action.page )
            break
        case 'PAGE_CHANGE_TITLE':
            newState =  pageService.changeTitle( state, action.newValue )
            break
        case 'PAGE_INSERT_COMPONENT':
            newState =  pageService.insertComponent( state, action.component, action.position, action.originalPosition )
            break
        case 'PAGE_UPDATE_CONTENT':
            newState = pageService.updateContent( state, action.componentKey, action.newProperties )
            break
        case 'PAGE_DELETE_CONTENT':
            newState =  pageService.deleteContent( state, action.componentKey )
            break
        case 'PAGE_CLONE_CONTENT':
            newState = pageService.cloneContent( state, action.componentKey )
            break
        case 'PAGE_CLONE_ROW':
            newState = pageService.cloneRow( state, action.rowKey )
            break
        case 'PAGE_DELETE_ROW':
            newState = pageService.deleteRow( state, action.rowKey )
            break
        default:
            newState = state
    }

    return newState
}
