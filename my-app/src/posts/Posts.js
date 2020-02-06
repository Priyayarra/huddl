import React from 'react'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import MUIDataTable from 'mui-datatables'
import { Dialog } from '@material-ui/core';

import Post from './components/PostView/PostView'
import { postSceneView, getRoute, userSceneView } from '../routes'
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
        const { history } = this.props
        history.push(getRoute(postSceneView, { postId: rowMeta.rowIndex + 1 }))
    }

    onCellClick = (colData: any, cellMeta: { colIndex: number, rowIndex: number, dataIndex: number }) => {
        const { history } = this.props
        console.log('colData', colData, cellMeta);
        
        history.push(getRoute(userSceneView, {userId: cellMeta.colIndex}))
    }

    onUserClick = userId => {
        const { history } = this.props
        history.push(getRoute(userSceneView, {userId: userId}))
    }
    
    render() {
        const { posts, post, history } = this.props
        const options = {
            // filterType: 'dropdown',
            filter: false,
            // search: false,
            searchOpen: false,
            print: false,
            download: false,
            viewColumns: false,
            selectableRows: false,
            pagination: false,
            onRowClick: this.onRowClick,
            // onCellClick: this.onCellClick,
        }
        let postsData = posts.map(post => [
            // post.id,
            post.title,
            post.userId,
            // post.body,
        ])
        // const columns = ["Title", "User Id",]
        const columns = [
            {
              name: 'Title',
              label: 'Title',
            },
            {
              name: 'User Id',
              label: 'User Id',
              options: {
                filter: false,
                customBodyRender: (data, type, row) => {
                  return <p onClick={this.onUserClick.bind(this, data)}>{data}</p>
                },
              },
            }
        ]
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