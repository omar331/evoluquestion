export const createInvitationContract = ( invitationContractInfo ) => {
    return function (dispatch, getState, { dataService } ) {

        dataService.createInvitationContract(
            invitationContractInfo,
            (res) => {
            },
            (err) => {
            }
        )
    }
};

export const saveInvitationData = ( invitationData ) => {
    return function (dispatch, getState, { dataService } ) {

        dataService.saveInvitationData(
            invitationData,
            (res) => {
                console.log('res: %o', res);
            },
            (err) => {
                console.log('err: %o', err);
            }
        )
    }
};

//
// /**
//  * Fetch organizations list asynchronously
//  *
//  * (thunk)
//  * @returns {(dispatch, getState, { dataService }:{dataService})=>undefined}
//  */
// export const obtainListOrganizations = () => {
//     return function (dispatch, getState, { dataService } ) {
//
//         dataService.fetchOrganizations(
//             (res) => {
//                 // dispatch( setEditingProductsAvailable( res.body.data ) )
//             },
//                 (err) => {
//             }
//         )
//     }
// }
//
//
// /**
//  * Fetch organizations list asynchronously
//  *
//  * (thunk)
//  * @returns {(dispatch, getState, { dataService }:{dataService})=>undefined}
//  */
// export const obtainListProducts = () => {
//
//     return function (dispatch, getState, { dataService } ) {
//
//         dataService.fetchProducts(
//             (res) => {
//              },
//             (err) => {
//             }
//         )
//     }
// }
//
//
// /**
//  * Fetch organizations list asynchronously
//  *
//  * (thunk)
//  * @returns {(dispatch, getState, { dataService }:{dataService})=>undefined}
//  */
// export const obtainListCompanies = () => {
//
//     return function (dispatch, getState, { dataService } ) {
//
//         dataService.fetchCompanies(
//             (res) => {
//             // dispatch( setEditingProductsAvailable( res.body.data ) )
//         },
//             (err) => {
//         }
//         )
//     }
// }
//
// /**
//  * Fetch organizations list asynchronously
//  *
//  * (thunk)
//  * @returns {(dispatch, getState, { dataService }:{dataService})=>undefined}
//  */
// export const obtainListConsultants = () => {
//
//     return function (dispatch, getState, { dataService } ) {
//
//         dataService.fetchConsultants(
//             (res) => {
//             // dispatch( setEditingProductsAvailable( res.body.data ) )
//         },
//             (err) => {
//         }
//         )
//     }
// }
//
// /**
//  * Fetch organizations list asynchronously
//  *
//  * (thunk)
//  * @returns {(dispatch, getState, { dataService }:{dataService})=>undefined}
//  */
// export const obtainListInvitations = () => {
//
//     return function (dispatch, getState, { dataService } ) {
//
//         dataService.fetchInvitations(
//             (res) => {
//             // dispatch( setEditingProductsAvailable( res.body.data ) )
//             },
//             (err) => {
//             }
//         )
//     }
// }
