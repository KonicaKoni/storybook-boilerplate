import React from 'react';
import styles from './index.css';
import PropTypes from 'prop-types';

export default class Table extends React.Component {
  render() {
    const table = (
            <div>
                <table className={styles.table}>
                    <tbody>
                        <tr key="headerRow">
                            {
                                this.props.headers.map((header, headerIndex) => (
                                <th key={`header${  headerIndex}`}>{header.name}</th>

                            ))
                            }
                            {this.props.onControlClick !== undefined ? <th></th> : undefined}
                        </tr>
                        {
                            this.props.values.map((value, rowIndex) => (
                              <tr key={`row${  rowIndex}`}>
                                <td>{rowIndex + 1}</td>
                                <td>{value.name}</td>
                                <td>{value.desc}</td>
                                <td>{value.number}</td>
                                <td>
                                  <img id={value.id} src={this.props.icon} className={styles.productIcon} onClick={this.props.onClick} />
                                </td>
                              </tr>
                            // this.props.values.map((value, rowIndex) => (
                            //     <tr key={'row' + rowIndex}>
                            //         {
                            //             value.map((column, columnIndex) => (
                            //                 <td key={'data' + columnIndex + ' ' + rowIndex}>{column}</td>
                            //             ))
                            //         }
                            //         {
                            //             <img id={this.props.id} src={this.props.icon} onClick={this.props.onClick} />
                            //         }
                            //     </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
    );

    return table;
  }
}

Table.propTypes = {
  id: PropTypes.integer,
  headers: PropTypes.array,
  values: PropTypes.array,
  onClick: PropTypes.func,
  icon: PropTypes.string,
};
