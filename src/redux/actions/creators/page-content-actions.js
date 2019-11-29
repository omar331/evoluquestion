/**
 * Insert insert a component into a certain page in a certain position
 *
 * @param info
 *
 */
export const insertContent = (info) => {
    console.log( info )

    return {
        type: 'PAGE_INSERT_COMPONENT',
        component: info.component,
        position: info.position,
        originalPosition: info.originalPosition
    }
}

export const changeTitle = (newValue) => {
    return {
        type: 'PAGE_CHANGE_TITLE',
        newValue
    }
}


/**
 * Updates a certain content within a page
 * @param componentKey
 * @param newProperties
 * @returns {{type: string, rowIndex: *, colIndex: *, contentIndex: *, newProperties: *}}
 */
export const updateContent = ( componentKey, newProperties ) => {
    return {
        type: 'PAGE_UPDATE_CONTENT',
        componentKey, newProperties
    }
}

export const deleteContent = ( componentKey ) => {
    return {
        type: 'PAGE_DELETE_CONTENT',
        componentKey
    }
}


export const cloneContent = ( componentKey ) => {
    return {
        type: 'PAGE_CLONE_CONTENT',
        componentKey
    }
}



export const cloneRow = (rowKey) => ({
  type: "PAGE_CLONE_ROW",
  rowKey
})

export const deleteRow = (rowKey) => ({
  type: "PAGE_DELETE_ROW",
    rowKey
})


export const undoAction = () => {
    return {
        type: 'PAGE_UNDO_ACTION'
    }
}


export const redoAction = () => {
    return {
        type: 'PAGE_REDO_ACTION'
    }
}




