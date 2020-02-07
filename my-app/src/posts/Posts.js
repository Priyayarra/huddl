import React from 'react'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import MUIDataTable from 'mui-datatables'
import { Dialog } from '@material-ui/core';

import Post from './components/PostView/PostView'
import { postSceneView, getRoute, userSceneView } from '../routes'
import { compose } from 'recompose'
import { withRouter, Link } from 'react-router-dom'

class Posts extends React.Component {

    onRowClick = (rowData: string[], rowMeta: { dataIndex: number, rowIndex: number }) => {
        const { history } = this.props
        history.push(getRoute(postSceneView, { postId: rowMeta.rowIndex + 1 }))
    }

    // onCellClick = (colData: any, cellMeta: { colIndex: number, rowIndex: number, dataIndex: number }) => {
    //     const { history } = this.props
    //     console.log('colData', colData, cellMeta);

    //     history.push(getRoute(userSceneView, { userId: cellMeta.colIndex }))
    // }

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
                    search: true,
                    customBodyRender: (data, type, row) => {
                        return <a onClick={getRoute(userSceneView, { userId: data })} href={getRoute(userSceneView, { userId: data })}>{data}</a>
                    },
                },
            }
        ]
        return (
            <div style={{ padding: '16px' }}>
                <h3>{'All Posts:'}</h3>
                <div style={{cursor: 'pointer'}}>
                    <MUIDataTable
                        innerRef={this.table}
                        data={postsData}
                        columns={columns}
                        options={options}
                    />
                </div>
            </div>
        )
    }
}
export default compose(withRouter(Posts))