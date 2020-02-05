import React from 'react'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import MUIDataTable from 'mui-datatables'

class Posts extends React.Component {
    // getMuiTheme = () =>
    //     createMuiTheme({
    //         overrides: {
    //             MuiPaper: {
    //                 elevation4: {
    //                     boxShadow: 'none !important',
    //                     padding: '12px 12px 24px 12px',
    //                 },
    //             },
    //             MUIDataTableBodyCell: {
    //                 root: {
    //                     backgroundColor: '#FFF',
    //                     fontSize: '11.0px',
    //                 },
    //             },
    //             MUIDataTableHeadCell: {
    //                 root: {
    //                     fontSize: '11.0px',
    //                 },
    //             },
    //             MUIDataTableToolbar: {
    //                 root: {
    //                     fontSize: '16.0px',
    //                 },
    //             },
    //         },
    //     })
    render() {
        const { posts } = this.props
        const options = {
            // filterType: 'dropdown',
            filter: false,
            search: false,
            searchOpen: false,
            print: false,
            download: false,
            viewColumns: false,
            selectableRows: false,
            pagination: false,
        }
        let postsData = posts.map(post => [
            post.userId,
            post.id,
            post.title,
            post.body,
        ])
        const columns = [ "User Id", "Id", "Title", "Body"]
        return (
            // <MuiThemeProvider theme={this.getMuiTheme}>
                <MUIDataTable
                    // innerRef={this.table}
                    data={postsData}
                    columns={columns}
                    options={options}
                    style={{ width: '100%', height: '100%' }}
                />
            // </MuiThemeProvider>
        )
    }
}
export default Posts