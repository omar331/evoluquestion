import { connect } from 'react-redux'

import PageDesigner from '../../views/editor/page-designer'

import * as actionCreators from '../actions/creators/page-content-actions'

const mapStateToProps = (state, ownProps = {}) => {
    return {
        page: state.getIn(['page']),
        canUndo: state.get('canUndo') || false,
        canRedo: state.get('canRedo') || false
    }
}

export const pageDesignerConntainerMapDispatchToProps = (dispatch) => {
    return {
        onChangePageTitle: (newValue) => {
            dispatch( actionCreators.changeTitle( newValue ) )
        },
        onChangeContentComponentProperties: ( componentKey, newProperties ) => {

           dispatch( actionCreators.updateContent( componentKey, newProperties ) )
        },
        onDeleteComponentInstace: ( componentInstanceKey ) => {
            dispatch( actionCreators.deleteContent( componentInstanceKey ) )
        },
        onCloneComponentInstance: ( componentInstanceKey ) => {
            dispatch( actionCreators.cloneContent( componentInstanceKey ) )
        },
        onUndoAction: () => {
            dispatch( actionCreators.undoAction() )
        },
        onRedoAction: () => {
            dispatch( actionCreators.redoAction() )
        },

        /* when some component is dropped over a content slot */
        onDropContent: ( payload ) => {
            dispatch( actionCreators.insertContent( payload ) )
        },
        onCloneRow: ( rowKey ) => {
            dispatch( actionCreators.cloneRow( rowKey ) )
        },
        onDeleteRow: ( rowKey ) => {
            dispatch( actionCreators.deleteRow( rowKey ) )
        }
    }
}


export default connect(
    mapStateToProps,
    pageDesignerConntainerMapDispatchToProps
)(PageDesigner)
