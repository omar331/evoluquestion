import { List, Map, fromJS } from 'immutable';

import * as pageService from '../../services/page-service'

import { combineReducers } from 'redux-immutable';

import pageProcessAction from './page-process-actions'


let history = []
let historyPosition = -1


const logHistoryInfo = () => {
//    console.log("  historyLenght = %d      historyPosition = %d     h = %o", history.length, historyPosition, history)
}


const addToHistory = (state) => {
    history.push( state )
    historyPosition = history.length - 1
    return updateUndoState(state)
}

const canUndo = () => {
    return historyPosition > 0
}

const canRedo = () => {
    return history.length > 0 && historyPosition < history.length - 1
}

const updateUndoState = (state) => {
    logHistoryInfo()

    let s = null

    //Check if it is an object
    if(typeof state === "object") {
        s = state.withMutations((sn) => {
            sn.set('canUndo', canUndo())
            sn.set('canRedo', canRedo())
        })
    }

    return s
}


const undo = () => {
    return updateUndoState(history[--historyPosition])
}

const redo = () => {
    return updateUndoState(history[++historyPosition])
}


const pageReducer = (state = {}, action) => {
    switch(action.type) {
        case 'PAGE_UNDO_ACTION':
            return undo()
        case 'PAGE_REDO_ACTION':
            return redo()
    }

    let newState = pageProcessAction(state, action)

    addToHistory(newState)

    return updateUndoState( newState )
}

export default combineReducers(
            {
                page: pageReducer
            }
        )


