import React from 'react'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import MUIDataTable from 'mui-datatables'
import { Dialog } from '@material-ui/core';

import Post from './components/PostView/PostView'
import { postSceneView, getRoute } from '../routes'
import { compose } from 'recompose'
import { withRouter, Link } from 'react-router-dom'

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
    onRowClick = (rowData: string[], rowMeta: { dataIndex: number, rowIndex: number }) => {
        const { history, getRelativeRoute } = this.props
        history.push(getRoute(postSceneView, { postId: rowMeta.rowIndex + 1 }))
    }
    render() {
        const { posts, post } = this.props
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
            onRowClick: this.onRowClick
        }
        let postsData = posts.map(post => [
            // post.id,
            post.title,
            post.userId,
            // post.body,
        ])
        const columns = ["Title", "User Id",]
        return (
            <MuiThemeProvider theme={this.getMuiTheme}>
                <MUIDataTable
                    innerRef={this.table}
                    data={postsData}
                    columns={columns}
                    options={options}
                />
                {/* {posts.map((post, index) => (
                    <Link to={postSceneView} to={getRoute(postSceneView, { postId: post.id })} key={index}>
                        <p>{post.id}</p>
                    </Link>
                ))} */}
            </MuiThemeProvider>
        )
    }
}
export default compose(withRouter(Posts))