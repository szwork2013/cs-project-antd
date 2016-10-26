import React from 'react'
import { Link } from 'react-router'
// import 'antd';
// import { Drawer, List, NavBar } from 'antd-mobile';

export default class App extends React.Component {
    render() {
        return (
            <div>
            <ul>
              <li>
                  <Link to="/logout">Log out</Link>
              </li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Home</Link> </li>
              <li><Link to="/landing">landing</Link> </li>
            </ul>
            {this.props.children}
          </div>
        )
    }
}


// export default class App extends React.Component {
//     getInitialState() {
//         return {
//             open: false,
//             position: 'left',
//         };
//     }
//     onOpenChange(isOpen) {
//         console.log(isOpen, arguments);
//         this.setState({ open: !this.state.open });
//     }
//     render() {
//         const sidebar = (<List>
//       {[...Array(20).keys()].map((i, index) => {
//         if (index === 0) {
//           return (<List.Item key={index}
//             thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
//             multipleLine
//           >分类</List.Item>);
//         }
//         return (<List.Item key={index}
//           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
//         >分类{index}</List.Item>);
//       })}
//     </List>);

//         const drawerProps = {
//             open: this.state.open,
//             position: this.state.position,
//             onOpenChange: this.onOpenChange,
//         };
//         return (<div style={{ height: '100%' }}>
//       <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>
//         基本
//       </NavBar>
//       <div className="drawer-container">
//         <Drawer sidebar={sidebar}
//           dragHandleStyle={{ display: 'none' }}
//           contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
//           {...drawerProps}
//         >
//           请点击左上角图标
//         </Drawer>
//       </div>
//     </div>);
//     }
// }