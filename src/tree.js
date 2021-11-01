import React from "react";
import data from './treepath1.json';
import { Tree } from 'antd';

const { DirectoryTree } = Tree;
class TreeMenuDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data};
  }
  
  render() {
    return (
      <div>
        <DirectoryTree
        treeData={this.state.data}
        height={300}
        />
      </div>
    );
  }
}

export default TreeMenuDemo;
